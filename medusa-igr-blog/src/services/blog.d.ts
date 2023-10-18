import { TransactionBaseService, FindConfig, Selector } from '@medusajs/medusa';
import { EntityManager } from 'typeorm';
import BlogRepository from '../repositories/blog';
import { Blog } from '../models/blog';
type InjectedDependencies = {
    manager: EntityManager;
    blogRepository: typeof BlogRepository;
};
type CreateBlog = {
    title: string;
    content: string;
};
declare class BlogService extends TransactionBaseService {
    protected blogRepository_: typeof BlogRepository;
    constructor({ blogRepository }: InjectedDependencies);
    create(data: CreateBlog): Promise<Blog>;
    listAndCount(selector?: Selector<Blog>, config?: FindConfig<Blog>): Promise<[Blog[], number]>;
    list(selector?: Selector<Blog>, config?: FindConfig<Blog>): Promise<Blog[]>;
    retrieve(id: string, config?: FindConfig<Blog>): Promise<Blog>;
    update(id: string, data: Omit<Partial<Blog>, 'id'>): Promise<Blog>;
    delete(id: string): Promise<void>;
    private validateblog;
}
export default BlogService;
