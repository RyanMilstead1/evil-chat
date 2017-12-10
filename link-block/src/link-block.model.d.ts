import { TemplateService } from 'upmc-common';
export interface ILinkBlock {
    title: string;
    imageId: number;
    key: string;
    imageUrl: string;
    description: string;
    background: string;
    linkText: string;
    linkHref: string;
}
export declare class LinkBlockModel implements ILinkBlock {
    title: string;
    imageId: number;
    key: string;
    imageUrl: string;
    description: string;
    background: string;
    linkText: string;
    linkHref: string;
    constructor(data: Object, templateService: TemplateService);
}
