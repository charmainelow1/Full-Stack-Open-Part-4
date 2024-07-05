const dummy = (blogs) => {
  return 1 
}

const totalLikes = (blogs) => {
  let likes = 0 
  blogs.forEach(blog => {
    likes += blog.likes
  })
  return likes 
}

const favoriteBlog = (blogs) => {
  let mostLikes = 0 
  let mostLikedBlog = {}

  blogs.forEach(blog => {
    if (blog.likes > mostLikes) {
      mostLikedBlog = blog
      mostLikes = blog.likes
    }
  })

  return mostLikedBlog
}

module.exports = {
  dummy, 
  totalLikes, 
  favoriteBlog, 
}