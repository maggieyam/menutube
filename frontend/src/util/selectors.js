export const findSavedPosts = (saved, posts) => {
  if (!posts) return [];
  return posts.filter(post => saved.includes(post._id))
}