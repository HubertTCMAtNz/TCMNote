# React

1. Create Typescript  

    ```shell
    yarn create react-app my-app --typescript
    ```

    [referece](https://facebook.github.io/create-react-app/docs/adding-typescript)  

1. React router  
    [reference](https://github.com/ReactTraining/react-router)  
    [multiple layout](https://gist.github.com/avinmathew/e82fe7e757b20cb337d5219e0ab8dc2c)  
    [multiple layout](http://www.uxshaper.com/different-layouts-with-react-router/)  
    [react router link locally historyApiFallback](https://tylermcginnis.com/react-router-cannot-get-url-refresh/)  
    [react router link locally  ](https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writing-manually)  

1. css  

    ```detail:
    webpack config:
    {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
    },

    import in ts/js:
    import "bootstrap/dist/css/bootstrap.css";
    ```

    [reference](https://medium.com/@marcelwopperer/how-to-use-bootstrap-in-your-react-app-using-css-modules-73fbc52de081)  

1. enzyme(JS Testing)  
   [reference](https://airbnb.io/enzyme/)  

1. redux
    [reference](https://react-redux.js.org/introduction/basic-tutorial)  
    [99 lines](https://gist.github.com/gaearon/ffd88b0e4f00b22c3159)  
    [Typescript](https://redux.js.org/recipes/usage-with-typescript)  
    [Typescript example](https://github.com/piotrwitek/react-redux-typescript-guide)  
    [Type safe actions](https://github.com/piotrwitek/typesafe-actions)  
    [ReactReduxContext.Consumer](https://react-redux.js.org/using-react-redux/accessing-store)  

1. react saga  
    [reference](https://flaviocopes.com/redux-saga/)  
    [saga patter](https://medium.freecodecamp.org/redux-saga-common-patterns-48437892e11c)  

    ```typescript
    function* watchSelectTeam() {
        yield takeLatest(TeamsActionTypes.SELECT_TEAM, handleSelect)
    }

    function* handleSelect(action: ReturnType<typeof selectTeam>) {
        try {
            const detail = yield call(callApi, 'get', API_ENDPOINT, `/teams/${action.payload}`)
            const players = yield call(callApi, 'get', API_ENDPOINT, `/teams/${action.payload}/players`)

            if (detail.error || players.error) {
                yield put(fetchError(detail.error || players.error))
            } else {
                yield put(teamSelected({ detail, players }))
            }
        } catch (err) {
            if (err instanceof Error) {
                yield put(fetchError(err.stack!))
            } else {
                yield put(fetchError('An unknown error occured.'))
            }
        }
    }

    export async function callApi(method: string, url: string, path: string, data?: any) {
        const res = await fetch(url + '/api' + path, {
            method,
            headers: {
            Accept: 'application/json'
            },
            body: JSON.stringify(data)
        })
        return await res.json()
    }
    ```

1. Apollo Client  
    [document](https://github.com/apollographql/apollo-client)  
    [react integration](https://www.apollographql.com/docs/react/)  
    [tutorial](https://www.robinwieruch.de/graphql-apollo-client-tutorial/)  
    [apollo + react tutorial](https://www.robinwieruch.de/react-graphql-apollo-tutorial/)  

    ```sh
    npm install apollo-client --save
    npm install apollo-cache-inmemory apollo-link-http --save
    npm install graphql graphql-tag --save

    npm install react-apollo --save
    ```

    ```javascript
    //index.js

    import React from 'react';
    import ReactDOM from 'react-dom';
    import { ApolloProvider } from 'react-apollo';
    import { ApolloClient } from 'apollo-client';
    import { HttpLink } from 'apollo-link-http';
    import { InMemoryCache } from 'apollo-cache-inmemory';

    import './style.css';
    import App from './App';

    const GITHUB_BASE_URL = 'https://api.github.com/graphql';

    const httpLink = new HttpLink({
        uri: GITHUB_BASE_URL,
        headers: {
            authorization: `Bearer ${
            process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
            }`,
        },
    })
    const cache = new InMemoryCache();
    const client = new ApolloClient({
        link: httpLink,
        cache,
    });

    ReactDOM.render(
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>,
        document.getElementById('root')
    );

    //App.js
    import React, { Component } from 'react';
    import Profile from '../Profile';
    class App extends Component {
        render() {
            return <Profile />;
        }
    }

    export default App;

    //Profile
    import React from 'react';
    import gql from 'graphql-tag';
    import { Query } from 'react-apollo';

    const GET_CURRENT_USER = gql`
    {
        viewer {
        login
        name
        }
    }
    `;

    const Profile = () => (
    <Query query={GET_CURRENT_USER}>
        {({ data }) => {
        const { viewer } = data;

        return (
            <div>
            {viewer.name} {viewer.login}
            </div>
        );
        }}
    </Query>
    );

    export default Profile;
    ```

    [apollo without redux](https://medium.com/the-notice-board/life-without-redux-using-apollo-for-local-state-d32b020ff4d3)  

    [apollo cache](https://levelup.gitconnected.com/basics-of-caching-data-in-graphql-7ce9489dac15)  

    ```text
    readQuery will never make a request to your GraphQL server. It will always read from the cache else throw an error; so make sure to only read data you know you have in the store.
    Alternatively, the query method may send a request to your server if the appropriate data is not in your cache.
    ```

1. Example
    [code](https://github.com/resir014/react-redux-typescript-example)  
    [post](https://resir014.xyz/posts/2018/07/06/redux-4-plus-typescript/)  
    [react emotion](https://github.com/emotion-js/emotion)  
    [react+spring](https://spring.io/guides/tutorials/react-and-spring-data-rest/)  
    [yarn+spring](https://medium.com/@itzgeoff/including-react-in-your-spring-boot-maven-build-ae3b8f8826e)  
    [run webpack with gradle](https://guides.gradle.org/running-webpack-with-gradle/)  
    [react tutorial](https://auth0.com/blog/react-tutorial-building-and-securing-your-first-app/)  

    ```api
    ConnectedRouter
    ```

1. React Source code  
   [Source code](https://medium.com/@ericchurchill/the-react-source-code-a-beginners-walkthrough-i-7240e86f3030) 

1. Advance skills  
   [React Higher-Order Components in TypeScript](https://medium.com/@jrwebdev/react-higher-order-component-patterns-in-typescript-42278f7590fb)  

   ```typescript
   Enhancers

   interface WithLoadingProps {
    loading: boolean;
    }

    const withLoading = <P extends object>(Component: React.ComponentType<P>) =>
    class WithLoading extends React.Component<P & WithLoadingProps> {
        render() {
        const { loading, ...props } = this.props;
        return loading ? <LoadingSpinner /> : <Component {...props as P} />;
        }
    };

    Injectors
    import { Subtract } from 'utility-types';

    export interface InjectedCounterProps {
    value: number;
    onIncrement(): void;
    onDecrement(): void;
    }

    interface MakeCounterState {
    value: number;
    }

    const makeCounter = <P extends InjectedCounterProps>(
    Component: React.ComponentType<P>
    ) =>
    class MakeCounter extends React.Component<
        Subtract<P, InjectedCounterProps>,
        MakeCounterState
    > {
        state: MakeCounterState = {
        value: 0,
        };

        increment = () => {
        this.setState(prevState => ({
            value: prevState.value + 1,
        }));
        };

        decrement = () => {
        this.setState(prevState => ({
            value: prevState.value - 1,
        }));
        };

        render() {
        return (
            <Component
            {...this.props as P}
            value={this.state.value}
            onIncrement={this.increment}
            onDecrement={this.decrement}
            />
        );
        }
    };
   ```

1. library  
    [material ui](https://material-ui.com/components/cards/)  
    [material ui free theme](https://demos.creative-tim.com/material-kit-react/?_ga=2.223690523.1876597192.1559035984-518466910.1559035984#/documentation/tutorial)  
    [material kit react](https://www.npmjs.com/package/material-kit-react)  
    [ant](https://pro.ant.design/docs/getting-started)  

1. webpack  
    [HMR: hot module replacement](https://medium.com/@rajaraodv/webpack-hot-module-replacement-hmr-e756a726a07)  
    [generate multiple html](https://stackoverflow.com/questions/39798095/multiple-html-files-using-webpack)  

    ```typescript
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            filename: 'example.html',
            template: 'src/example.html',
            chunks: ['exampleEntry']
        })
    ]
    ```
