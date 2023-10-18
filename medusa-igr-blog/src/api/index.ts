import { Router } from 'express';
import bodyParser from 'body-parser';
import { attachBlogRoutes } from './routes';
import { errorHandler } from '@medusajs/medusa';
import createPost from '../api/routes/blog/create-post';

export default (rootDirectory, options) => {
  // Create a router instance
  const router = Router();

  // Attach JSON body parser
  router.use('/blog', bodyParser.json());

  // Blog routes
  const blogRouter = Router();
  attachBlogRoutes(blogRouter);

  // hello route
  router.get('/hello', (req, res) => {
    res.json({
      message: 'Welcome to IGR blog!',
    });
  });

  // Create post route
  router.post('/blog/posts', createPost);

  // handle errors
  router.use(errorHandler);

  return router;
};
