"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("@medusajs/medusa/dist/loaders/database");
const blog_1 = require("../models/blog");
const blogRepository = database_1.dataSource.getRepository(blog_1.Blog);
exports.default = blogRepository;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJsb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxRUFBb0U7QUFDcEUseUNBQXNDO0FBRXRDLE1BQU0sY0FBYyxHQUFHLHFCQUFVLENBQUMsYUFBYSxDQUFDLFdBQUksQ0FBQyxDQUFDO0FBQ3RELGtCQUFlLGNBQWMsQ0FBQyJ9