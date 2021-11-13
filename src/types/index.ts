export interface Author {
  firstName: string;
  lastName: string;
}

export interface Post {
  id: number;
  title: string;
  body: string;
  author: Author;
  createdAt: string;
}

export interface CreatePostPayload {
  title: string;
  body: string;
}

export interface UpdatePostPayload extends CreatePostPayload {
  id: number;
}
