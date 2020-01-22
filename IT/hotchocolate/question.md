1. Usage
```C#
// register middleware
app.UseGraphQL("/graphql");
// register service
services.AddGraphQL(sp => SchemaBuilder.New()
    .AddServices(sp)
    .AddAuthorizeDirectiveType()
    .AddQueryType<QueryType>()
    .AddMutationType<MutationType>()
    .AddSubscriptionType<SubscriptionType>()
    .AddType<HumanType>()
    .AddType<DroidType>()
    .AddType<EpisodeType>()
    .Create());
```
1. create schema
    ```C#
    public Schema Create()
    {
        IServiceProvider services = _services?? new EmptyServiceProvider();
        var descriptorContext = DescriptorContext.Create(
            _options,
            services,
            CreateConventions(services));

        IBindingLookup bindingLookup =_bindingCompiler.Compile(descriptorContext);
        // Schema is created here.
        IReadOnlyCollection<ITypeReference> types = GetTypeReferences(services, bindingLookup);

        var lazy = new LazySchema();
        TypeInitializer initializer = CreateTypeInitializer(services, descriptorContext, bindingLookup, types);
        DiscoveredTypes discoveredTypes = initializer.Initialize(() => lazy.Schema, _options);

        SchemaTypesDefinition definition = CreateSchemaDefinition(initializer, discoveredTypes);
        if (definition.QueryType == null && _options.StrictValidation)
        {
            throw new SchemaException(SchemaErrorBuilder.New()
                    .SetMessage(TypeResources.SchemaBuilder_NoQueryType)
                    .Build());
        }

        Schema schema = discoveredTypes.Types
            .Select(t => t.Type)
            .OfType<Schema>()
            .First();

        schema.CompleteSchema(definition);
        lazy.Schema = schema;
        return schema;
    }
    ```
1. Register HttpPostMiddleware

```C#
// IApplicationBuilder.UseGraphQLHttpPost => applicationBuilder.UseMiddleware<HttpPostMiddleware>(options)
/*
public HttpPostMiddleware(
            RequestDelegate next,
            IHttpPostMiddlewareOptions options,
            IQueryExecutor queryExecutor,
            IBatchQueryExecutor batchQueryExecutor,
            IQueryResultSerializer resultSerializer,
            IResponseStreamSerializer streamSerializer,
            IDocumentCache documentCache,
            IDocumentHashProvider documentHashProvider,
            IErrorHandler errorHandler)
*/
```

1. Register/Create IQueryExecutor

```C#
public static IServiceCollection AddGraphQL(this IServiceCollection services, Func<IServiceProvider, ISchema> schemaFactory)
{
//......

// register default middleware and service
// midlleware:
//  Diagnostics (InstrumentationMiddleware, RequestTimeoutMiddleware, ExceptionMiddleware)
//  ParseQueryMiddleware, 
//  ResolveOperationMiddleware
//  ExecuteOperationMiddleware
// default service:
//  ExecutionStrategyResolver
//  DefaultQueryParser
//  QueryExecutor
    QueryExecutionBuilder.BuildDefault(services);
    return services.AddSchema(schemaFactory).AddSingleton<IBatchQueryExecutor, BatchQueryExecutor>();
}

public static void BuildDefault(IServiceCollection services) =>
    New().UseDefaultPipeline().Populate(services);

// QueryExecutionBuilder.Populate
services.AddSingleton<IQueryExecutor>(sp =>
{
//...
    return new QueryExecutor
    (
        sp.GetRequiredService<ISchema>(),
        Compile(_middlewareComponents),
        Compile(_fieldMiddlewareComponents)
    );
});
```

1. Create IQueryExecutor