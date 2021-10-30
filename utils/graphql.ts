import { GraphQLClient } from "graphql-request";

const githubClient = new GraphQLClient("https://api.github.com/graphql", {
  headers: {
    Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
  },
});

export { githubClient };
