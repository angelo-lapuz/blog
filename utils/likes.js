const totalLikes = (blogs) => {
  return blogs.reduce((sum, blog) => {
    return sum + blog.likes
  }, 0)
}

const favouriteBlog = (blogs) => {
  console.log(blogs)
  return blogs.reduce((current, max) => {
    return current.likes > max.likes ? current : max
  })
}

module.exports = {
  totalLikes,
  favouriteBlog
}
