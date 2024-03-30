import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

export const testVar = makeVar([1,2,3])
export const filterVar = makeVar("All")
export const genresVar = makeVar("All")
export const detailOpen = makeVar(0)


export const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            Character: {
              keyArgs: false,
              merge(_existing, incoming) {
                return incoming;
              },
            },
          },
        },
      },
    }),
  });