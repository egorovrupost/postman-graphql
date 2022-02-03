const express = require('express')
const cors = require('cors')
const { graphqlHTTP } = require('express-graphql')

const app = express()
app.use(cors())

app.use('/graphql', graphqlHTTP({
    graphiql: true
}))

app.listen(3200, ()=>console.log('GraphQL server started at 3200'))