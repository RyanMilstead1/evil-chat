import { OnChanges, SimpleChange } from '@angular/core';
import { ILinkBlock } from './link-block.model';
import { TemplateService } from 'upmc-common';
export declare class LinkBlockComponent implements OnChanges {
    private templateService;
    data: any;
    options: ILinkBlock;
    constructor(templateService: TemplateService);
    ngOnChanges({data}: {
        [key: string]: SimpleChange;
    }): void;
}
