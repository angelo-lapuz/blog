const Blog = require('../models/blog')
const User = require('../models/user')

const initialBlogs = [
  {
    title: "test blog",
    author: "test rowling",
    url: "testurl"

  },
  {
    title: "the best",
    author: "test rowling",
    url: "testurl"
  },
  {
    title: "the greatest",
    author: "test rowling",
    url: "testurl"
  }
]

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}

const usersInDb = async () => {
  const users = await User.find({})
  return users.map(user => user.toJSON())
}

module.exports = {
  initialBlogs,
  blogsInDb,
  usersInDb
}