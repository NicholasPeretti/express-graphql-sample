const GraphQlMiddleware = require('express-graphql')
const { buildSchema } = require('graphql')
const App = require('express')()
const PORT = 4000

const UserMe = {
  name: 'Nicholas',
  surname: 'Peretti',
  ID: 'cin90398d2kdj02'
}

const schema = buildSchema(`
  type User {
    name: String!
    surname: String!
    ID: ID!
  }

  type Query {
    me: User!,
    users: [User!]!
  }
`);

const root = {
  me: () => UserMe,
  users: () => [UserMe]
};

App.use('/graphql', GraphQlMiddleware({
  schema,
  graphiql: true,
  rootValue: root
}))

App.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})