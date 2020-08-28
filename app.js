var { app } = require('./router')
var usersRouter = require('./users')

app.use('/users', usersRouter)
app.listen(3000, function () {
    console.log('server is running')
})