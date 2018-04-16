const Router = require('express').Router
const apiRouter = Router()

const courses = [{
				  id: 1,
				  name: 'Terminal and UNIX',
				  length: '15 hours'
				}, {
				  id: 2,
				  name: 'Git and GitHub',
				  length: '15 hours'
				}, {
				  id: 3,
				  name: 'HTML + CSS Basics',
				  length: '10 hours'
				}, {
				  id: 4,
				  name: 'Introduction to JavaScript',
				  length: '15 hours'
				}, {
				  id: 5,
				  name: 'Intermediate JavaScript I',
				  length: '20 hours'
				}, {
				  id: 6,
				  name: 'Intermediate JavaScript II',
				  length: '25 hours'
				}, {
				  id: 7,
				  name: 'Node and Express.js Fundamentals',
				  length: '15 hours'
				}, {
				  id: 8,
				  name: 'React.js Fundamentals',
				  length: '25 hours'
				}]

apiRouter.get('/courses', (req, res) => {
	res.json(courses)
})

apiRouter.post('/courses', (req, res) => {
	res.send('Marking a POST')
})

apiRouter.put('/courses', (req, res) => {
	res.send('Marking a PUT')
})

apiRouter.delete('/courses', (req, res) => {
	res.send('Marking a DELETE')
})

apiRouter.get('/courses/:id', (req, res) => {
	const courseId = parseInt(req.params.id)
	const newList = courses.filter(function(course) {
		return course.id === courseId
	})

	res.json(newList)
	
})

module.exports = apiRouter
