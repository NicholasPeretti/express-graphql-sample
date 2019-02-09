const GraphQlMiddleware = require('express-graphql')
const { buildSchema } = require('graphql')
const App = require('express')()
const PORT = 4000

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const root = {
  hello: () => {
    return 'Hello world!';
  },
};

App.use('/graphql', GraphQlMiddleware({
  schema,
  graphiql: true,
  rootValue: root
}))

App.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})