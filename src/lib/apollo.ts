import { ApolloClient, InMemoryCache } from "@apollo/client";
export const client =  new ApolloClient ({
    uri: "https://api-sa-east-1.graphcms.com/v2/cl4o4vufg0m8k01z2amtp5gub/master",
    cache: new InMemoryCache()
})