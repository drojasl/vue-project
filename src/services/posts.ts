export interface Post {
  userId: number
  id: number
  title: string
  body: string
}

export async function getPosts(): Promise<Post[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await response.json()
  return posts
}

export async function getPost(postId: number): Promise<Post[]> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  const post = await response.json()
  return post
}

export function updatePost(post: Post): void {
  window.localStorage.setItem(`post-updated-${post.id}`, JSON.stringify(post))
}
