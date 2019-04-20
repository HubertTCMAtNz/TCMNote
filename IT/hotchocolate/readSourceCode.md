Read the source code and answer following questions:

# How to implement binding?
# Field Resolver
# How does Alias work
# How @delegate work
# How data loader is implemented
## Usage
```
services.AddDataLoaderRegistry();

field.Resolver(ctx =>
{
	Repository r = ctx.Service<Repository>();
	IDataLoader<string, List<IContract>> dataLoader = ctx.BatchDataLoader<string, List<IContract>>(
		"getContractsByCustomerId",
		keys => Task.FromResult(r.GetContractBatch(keys, ctx.RequestAborted)));
	return dataLoader.LoadAsync(ctx.Argument<string>("customerId"));
});

```
## Implementation
### DataLoaderRegistry
### ExectueBatch

# Classes and Interface
## PostQueryMiddleware
## ParseQueryMiddleware
## ResolveOperationMiddleware
## ExecuteOperationMiddleware
### QueryExecutionStrategy(IExecutionStrategy)

## QueryExecutor (QueryExecutor LazyQueryExecutor)
#### StitchingBuilder (creates IQueryExecutor)
### ISchema.MakeExecutable creates IQueryExecutor
### QueryDelegate FieldMiddleware
### QueryExecutionBuilder
*Register *
```
public static IQueryExecutionBuilder UseDefaultPipeline(
            this IQueryExecutionBuilder builder,
            IQueryExecutionOptionsAccessor options)
{
	return builder
		.AddOptions(options)
		.AddErrorHandler()
		.AddQueryValidation()
		.AddDefaultValidationRules()
		.AddQueryCache(options.QueryCacheSize)
		.AddExecutionStrategyResolver()
		.AddDefaultParser()
		.UseInstrumentation(options.TracingPreference)
		.UseRequestTimeout()
		.UseExceptionHandling()
		.UseQueryParser()
		.UseValidation()
		.UseOperationResolver()
		.UseMaxComplexity()
		.UseOperationExecutor();
}
```

*How to create the delegate instance*
```
public delegate QueryDelegate QueryMiddleware(QueryDelegate next);
public delegate Task QueryDelegate(IQueryContext context);
public delegate FieldDelegate FieldMiddleware(FieldDelegate next);
public delegate Task FieldDelegate(IMiddlewareContext context);

// This function is used to create delegage instance chain.
private static QueryDelegate Compile(IReadOnlyList<QueryMiddleware> components)
{
	QueryDelegate next = context => Task.CompletedTask;

	for (var i = components.Count - 1; i >= 0; i--)
	{
		next = components[i].Invoke(next);
	}

	return next;
}

private static FieldMiddleware Compile(IReadOnlyList<FieldMiddleware> components)
{
	return first =>
	{
		FieldDelegate next = first;

		for (var i = components.Count - 1; i >= 0; i--)
		{
			next = components[i].Invoke(next);
		}

		return next;
	};
}
```
*How to Create QueryMiddleware*
```
internal static QueryMiddleware Create<TMiddleware>() where TMiddleware : class
{
	return next =>
	{
		var factory = MiddlewareActivator.CompileFactory<TMiddleware, QueryDelegate>();
		return CreateDelegate<TMiddleware>((s, n) => factory(s, n), next);
	};
}

internal static QueryDelegate CreateDelegate<TMiddleware>(
            Func<IServiceProvider, QueryDelegate, TMiddleware> factory,
            QueryDelegate next)
            where TMiddleware : class
{
	object sync = new object();
	TMiddleware middleware = null;

	var compiled = MiddlewareActivator.CompileMiddleware<TMiddleware, IQueryContext>();

	return context =>
	{
		if (middleware == null)
		{
			lock (sync)
			{
				if (middleware == null)
				{
					middleware = factory(context.Services, next);
				}
			}
		}

		return compiled(context, context.Services, middleware);
	};
}
```

*MiddlewareActivator*
```
internal delegate T MiddlewareFactory<T, TRequestDelegate>(IServiceProvider services, TRequestDelegate next);

// Create new instance of TRequestDelegate
internal static MiddlewareFactory<TMiddleware, TRequestDelegate> CompileFactory<TMiddleware, TRequestDelegate>()
{
	ParameterExpression services = Expression.Parameter(typeof(IServiceProvider));
	ParameterExpression nextDelegate = Expression.Parameter(typeof(TRequestDelegate));

	NewExpression createInstance = CreateMiddleware<TRequestDelegate>(typeof(TMiddleware).GetTypeInfo(), services, nextDelegate);

	return Expression
		.Lambda<MiddlewareFactory<TMiddleware, TRequestDelegate>>(createInstance, services, nextDelegate)
		.Compile();
}

private static NewExpression CreateMiddleware<TRequestDelegate>(
            TypeInfo middleware,
            ParameterExpression services,
            Expression next)
{
	ConstructorInfo constructor = CreateConstructor(middleware);
	IEnumerable<Expression> arguments = CreateParameters<TRequestDelegate>(constructor, services, next);
	return Expression.New(constructor, arguments);
}

private static ConstructorInfo CreateConstructor(TypeInfo middleware)
{
	ConstructorInfo[] constructors = middleware.DeclaredConstructors
		.Where(t => t.IsPublic).ToArray();
	if (constructors.Length == 1)
	{
		return constructors[0];
	}

	throw new NotSupportedException(
		UtilityResources.MiddlewareActivator_OneConstructor);
}

internal delegate Task ClassQueryDelegate<T, TContext>(TContext context, IServiceProvider services, T middleware);
// Call instance.InvokeAsync(instance.Invoke)
internal static ClassQueryDelegate<TMiddleware, TContext>CompileMiddleware<TMiddleware, TContext>()
{
	TypeInfo middlewareType = typeof(TMiddleware).GetTypeInfo();
	MethodInfo method = middlewareType.GetDeclaredMethod("InvokeAsync")
		?? middlewareType.GetDeclaredMethod("Invoke");

	if (method == null)
	{
		throw new NotSupportedException(UtilityResources.MiddlewareActivator_NoInvokeMethod);
	}

	ParameterExpression context = Expression.Parameter(typeof(TContext));
	ParameterExpression services = Expression.Parameter(typeof(IServiceProvider));
	ParameterExpression middlewareInstance = Expression.Parameter(middlewareType.AsType());

	MethodCallExpression middlewareCall = Expression.Call(middlewareInstance, method, CreateParameters<TContext>(method, services, context));

	return Expression.Lambda<ClassQueryDelegate<TMiddleware, TContext>>(middlewareCall, context, services, middlewareInstance)
		.Compile();
}
```

## IQueryResultSerializer
# How to find the handler of the query/mutation
# How to evaluate field value
# How does batch load work
# How does the stitch extension work
