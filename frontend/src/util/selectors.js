export const findSavedPosts = (saved, posts) => {
  if (!posts) return [];
  return posts.filter(post => saved.includes(post._id))
}

export const selectPosts = (filter, posts) => {
  if (!posts) return [];
  if (Object.keys(filter).length === 0) return Object.values(posts);

  return Object.values(posts).filter(
    post => {
      let match = true;
      Object.entries(filter).forEach(([key, value]) => {
        for (let i = 0; i < value.length; i++){
          if (!post[key] || !post[key][value[i]]){
            match = false;
            break;
          }
        }
      })
      return match
    }
  )
}


