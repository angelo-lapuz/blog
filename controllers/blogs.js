const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

// get all blogs
blogsRouter.get('/', (request, response) => {
  Blog.find({}).then(blogs => {
    response.json(blogs)
  })
})

blogsRouter.post('/', (request, response, next) => {
  const body = request.body

  if(!body.title || !body.author || !body.url) {
    return response.status(400).json({
      error: 'content missing'
    })
  }

  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: 0,
  })

  blog.save().then(savedBlog => {
    response.status(201).json(savedBlog)
  })
  .catch(error => next(error))
})

module.exports = blogsRouter