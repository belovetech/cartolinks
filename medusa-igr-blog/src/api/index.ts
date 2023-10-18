import { Router } from 'express';
import bodyParser from 'body-parser';
import { attachBlogRoutes } from './routes';
import { errorHandler } from '@medusajs/medusa';

export default (rootDirectory, options) => {
  // Create a router instance
  const router = Router();

  // Attach JSON body parser
  router.use('/blog', bodyParser.json());

  // Blog routes
  const blogRouter = Router();
  router.use('/blog', blogRouter);
  attachBlogRoutes(blogRouter);

  // hello route
  router.get('/ping', (req, res) => {
    res.json({
      message: 'Welcome to IGR blog!',
    });
  });

  // handle errors
  router.use(errorHandler);

  return router;
};
