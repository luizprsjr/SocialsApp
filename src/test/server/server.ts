import {setupServer} from 'msw/node';

import {postCommentHandlers} from './post-comment/post-comment-handlers';
import {userHandlers} from './user/user-handlers';

export const server = setupServer(...postCommentHandlers, ...userHandlers);

export {mockedData as mockedPostComment} from './post-comment/mocks';

export {userMocked} from './user/user-mocked';

export {resetInMemoryResponse} from './post-comment/post-comment-handlers';
