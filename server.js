const express = require('express')
const ejs = require('ejs')



const pageRouter = require('./src/routes/pageroutes')
const apiRouter = require('./src/routes/apiRoutes')

const app = express()

app.engine('ejs', ejs.renderFile)
app.set('view engine', 'ejs')
app.set('views', `${__dirname}/src/views`)

app.use(express.static(`${__dirname}/public`))

app.use('/', pageRouter)
app.use('/api', apiRouter)
app.use(function( req, res){
	res.render('404.ejs')
})


app.listen(3000, () => {
	console.log('App running...')
})