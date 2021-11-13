import { route, Route } from '@extcore/server';
import { CreatePostPayload, Post } from '@/types';

// Note that your endpoint types must be exported
export type QueryPostsEndpoint = Route<Post[], any, any, { orderBy?: 'id' | 'title'; order?: 'asc' | 'desc' }>;

export const queryPosts = route<QueryPostsEndpoint>({
  path: '/posts',
  tags: ['Posts'],
  handler: () => {
    // Fetch your data here
    // Of course this handler can be async as well

    return [
      {
        id: 1,
        title: 'Hello',
        body: 'Hello World!',
        author: {
          firstName: 'Jane',
          lastName: 'Doe',
        },
        createdAt: '2021-01-01 00:00:00',
      },
    ];
  },
});

export type FindPostEndpoint = Route<Post, any, { id: string }>;

export const findById = route<FindPostEndpoint>({
  path: '/posts/:id',
  tags: ['Posts'],
  handler: (req) => {
    // ...

    return {
      id: Number(req.params.id),
      title: 'Post by ID',
      body: 'Lorem ipsum dolor sit amet...',
      author: {
        firstName: 'Jane',
        lastName: 'Doe',
      },
      createdAt: '2021-01-01 00:00:00',
    };
  },
});

export type CreatePostEndpoint = Route<Post, CreatePostPayload>;

export const createPost = route<CreatePostEndpoint>({
  path: '/posts',
  method: 'post',
  tags: ['Posts'],
  handler: (req) => {
    const postToCreate = req.body;
    // ...

    return {
      ...postToCreate,
      id: 100,
      author: {
        firstName: 'Jane',
        lastName: 'Doe',
      },
      createdAt: '2021-01-01 00:00:00',
    };
  },
});
