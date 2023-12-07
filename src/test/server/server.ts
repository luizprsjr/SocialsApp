import {setupServer} from 'msw/node';

import {postCommentHandlers} from './post-comment/post-comment-handlers';

export const server = setupServer(...postCommentHandlers);
