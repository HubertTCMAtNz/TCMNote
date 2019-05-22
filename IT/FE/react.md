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

1. react soga
    [reference](https://flaviocopes.com/redux-saga/)  
    [saga patter](https://medium.freecodecamp.org/redux-saga-common-patterns-48437892e11c)  

    ```api
    fork
    ```

1. Apollo Client  
    [document](https://github.com/apollographql/apollo-client)  
    [react integration](https://www.apollographql.com/docs/react/)  
    [tutorial](https://www.robinwieruch.de/graphql-apollo-client-tutorial/)  
    [apollo + react tutorial](https://www.robinwieruch.de/react-graphql-apollo-tutorial/)  

    ```summary
    npm install apollo-client --save
    npm install apollo-cache-inmemory apollo-link-http --save
    npm install graphql graphql-tag --save

    npm install react-apollo --save

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

    ```
    ```

1. Example
    [code](https://github.com/resir014/react-redux-typescript-example)  
    [post](https://resir014.xyz/posts/2018/07/06/redux-4-plus-typescript/)  
    [react emotion](https://github.com/emotion-js/emotion)  
    [react+spring](https://spring.io/guides/tutorials/react-and-spring-data-rest/)  
    [yarn+spring](https://medium.com/@itzgeoff/including-react-in-your-spring-boot-maven-build-ae3b8f8826e)  
    [run webpack with gradle](https://guides.gradle.org/running-webpack-with-gradle/)  

    ```api
    ConnectedRouter
    ```
