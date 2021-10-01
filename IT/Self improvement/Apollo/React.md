[reference](https://www.apollographql.com/docs/react/)  
## Usage  
1. Setup
    npm install @apollo/client graphql  
1. JS Example  
    ```js
    
    // const client = ...

    client
    .query({
        query: gql`
        query GetRates {
            rates(currency: "USD") {
            currency
            }
        }
        `
    })
    .then(result => console.log(result));

    import React from 'react';
    import { render } from 'react-dom';
    import {
        ApolloClient,
        InMemoryCache,
        ApolloProvider,
        useQuery,
        gql
    } from "@apollo/client";

    const client = new ApolloClient({
        uri: 'https://48p1r2roz4.sse.codesandbox.io',
        cache: new InMemoryCache()
    });

    function App() {
        return (
            <div>
            <h2>My first Apollo app 🚀</h2>
            </div>
        );
    }

    render(
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>,
        document.getElementById('root'),
    );

    //
    function ExchangeRates() {
        const EXCHANGE_RATES = gql`
            query GetExchangeRates {
                rates(currency: "USD") {
                    currency
                    rate
                }
            }
        `;

        const { loading, error, data } = useQuery(EXCHANGE_RATES);

        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return data.rates.map(({ currency, rate }) => (
            <div key={currency}>
                <p>
                    {currency}: {rate}
                </p>
            </div>
        ));
    }

    ```
1. Cache & refetch  
    ```JS
    const { loading, error, data } = useQuery(GET_DOG_PHOTO, {
        variables: { breed },
        pollInterval: 500, //
        fetchPolicy: "network-only",   // Used for first execution
        nextFetchPolicy: "cache-first" // Used for subsequent executions
    });
    
    function DogPhoto({ breed }) {
        const { loading, error, data, refetch, networkStatus } = useQuery(GET_DOG_PHOTO, {
            variables: { breed }
            notifyOnNetworkStatusChange: true,
        });

        if (loading) return null;
        if (error) return `Error! ${error}`;
        if (networkStatus === NetworkStatus.refetch) return 'Refetching!';
        return (
            <div>
                <img src={data.dog.displayImage} style={{ height: 100, width: 100 }} />
                <button onClick={() => refetch()}>Refetch!</button>
            </div>
        );
        }
    ```

1. Lazy loading  
    ```js
    import React from 'react';
    import { useLazyQuery } from '@apollo/client';

    function DelayedQuery() {
        const [getDog, { loading, error, data }] = useLazyQuery(GET_DOG_PHOTO);

        if (loading) return <p>Loading ...</p>;
        if (error) return `Error! ${error}`;

        return (
            <div>
                {data?.dog && <img src={data.dog.displayImage} />}

                <button onClick={() => getDog({ variables: { breed: 'bulldog' } })}>
                    Click me!
                </button>
            </div>
        );
    }

    ```

1. Mutation  
    ```js
    function AddTodo() {
        let input;

        const [addTodo, { data, loading, error }] = useMutation(ADD_TODO);

        if (loading) return 'Submitting...';
        if (error) return `Submission error! ${error.message}`;

        return (
            <form
                onSubmit={e => {
                    e.preventDefault();
                    addTodo({ variables: { text: input.value } });
                    input.value = '';
                }}
            >
                <input ref={node => { input = node; }}/>
                <button type="submit">Add Todo</button>
            </form>
        );
    }

    ```