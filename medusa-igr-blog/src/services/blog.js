"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const medusa_1 = require("@medusajs/medusa");
const utils_1 = require("@medusajs/utils");
class BlogService extends medusa_1.TransactionBaseService {
    constructor({ blogRepository }) {
        super(arguments[0]);
        this.blogRepository_ = blogRepository;
    }
    async create(data) {
        return this.atomicPhase_(async (transactionManager) => {
            const blogRepo = transactionManager.withRepository(this.blogRepository_);
            const blog = blogRepo.create();
            if (Object.keys(this.validateblog(data)).length > 0) {
                throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, JSON.stringify(this.validateblog(data)), '400');
            }
            blog.title = data.title;
            blog.content = data.content;
            const result = await blogRepo.save(blog);
            return result;
        });
    }
    async listAndCount(selector, config = {
        relations: [],
        take: 10,
        skip: 0,
    }) {
        try {
            const blogRepo = this.activeManager_.withRepository(this.blogRepository_);
            const query = (0, medusa_1.buildQuery)(selector, config);
            return await blogRepo.findAndCount(query);
        }
        catch (error) {
            throw new utils_1.MedusaError('Unable to fetch blog', error.message, '500');
        }
    }
    async list(selector, config = {
        relations: [],
        take: 20,
        skip: 0,
    }) {
        try {
            const [blogs] = await this.listAndCount(selector, config);
            return blogs;
        }
        catch (error) {
            throw new utils_1.MedusaError('Unable to fetch blogs', error.message, '500');
        }
    }
    async retrieve(id, config) {
        try {
            const blogRepo = this.activeManager_.withRepository(this.blogRepository_);
            const query = (0, medusa_1.buildQuery)({ id }, config);
            const blog = await blogRepo.findOne(query);
            if (!blog) {
                throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_FOUND, `blog with id: ${id} was not found`);
            }
            return blog;
        }
        catch (error) {
            throw new utils_1.MedusaError('Unable to retrieve blog', error.message, '500');
        }
    }
    async update(id, data) {
        return await this.atomicPhase_(async (transactionManager) => {
            try {
                const blogRepo = transactionManager.withRepository(this.blogRepository_);
                const blog = await this.retrieve(id);
                Object.assign(blog, data);
                return await blogRepo.save(blog);
            }
            catch (error) {
                throw new utils_1.MedusaError('Unable to update blog', error.message, '500');
            }
        });
    }
    async delete(id) {
        return await this.atomicPhase_(async (transactionManager) => {
            try {
                const blogRepo = transactionManager.withRepository(this.blogRepository_);
                const blog = await this.retrieve(id);
                await blogRepo.remove(blog);
            }
            catch (error) {
                throw new utils_1.MedusaError('Unable to delete blog', error.message, '500');
            }
        });
    }
    validateblog(data) {
        let errors = {};
        if (!data.title || data.title.length < 3) {
            errors.title = 'Title is required';
        }
        if (!data.content || data.content.length < 3) {
            errors.content = 'Content is required';
        }
        return errors;
    }
}
exports.default = BlogService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJsb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2Q0FLMEI7QUFFMUIsMkNBQThDO0FBYzlDLE1BQU0sV0FBWSxTQUFRLCtCQUFzQjtJQUc5QyxZQUFZLEVBQUUsY0FBYyxFQUF3QjtRQUNsRCxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFcEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxjQUFjLENBQUM7SUFDeEMsQ0FBQztJQUVELEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBZ0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxrQkFBa0IsRUFBRSxFQUFFO1lBQ3BELE1BQU0sUUFBUSxHQUFHLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFFekUsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBRS9CLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDbkQsTUFBTSxJQUFJLG1CQUFXLENBQ25CLG1CQUFXLENBQUMsS0FBSyxDQUFDLFlBQVksRUFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQ3ZDLEtBQUssQ0FDTixDQUFDO2FBQ0g7WUFFRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBRTVCLE1BQU0sTUFBTSxHQUFHLE1BQU0sUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QyxPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQztJQUNM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