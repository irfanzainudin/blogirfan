import { GraphQLClient } from 'graphql-request'

export const request = async (query = {}) => {
  const endpoint = 'https://graphql.fauna.com/graphql'

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: 'Basic Zm5BRC1HMW1HSUFDQml5VVFhTFVrb2dzaDBBVC1jR1B4Ul9ocXlXMjpibG9naXJmYW46c2VydmVy'
    },
  })

  try {
    return await graphQLClient.request(query)
  } catch (error) {
    console.log(error)
    return error
  }
}

// fnAD-HZiKIACCL2r4QKqwLG9o1TEEyyEJKfOJm0j