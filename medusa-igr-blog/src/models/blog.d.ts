import { BaseEntity } from '@medusajs/medusa';
export declare class Blog extends BaseEntity {
    title: string;
    content: string;
    private beforeInsert;
}
