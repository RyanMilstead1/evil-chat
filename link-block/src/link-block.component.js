"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var link_block_model_1 = require("./link-block.model");
var upmc_common_1 = require("upmc-common");
var LinkBlockComponent = (function () {
    function LinkBlockComponent(templateService) {
        this.templateService = templateService;
    }
    ;
    LinkBlockComponent.prototype.ngOnChanges = function (_a) {
        var data = _a.data;
        if (data && data.currentValue) {
            this.options = new link_block_model_1.LinkBlockModel(this.data, this.templateService);
        }
    };
    return LinkBlockComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], LinkBlockComponent.prototype, "data", void 0);
LinkBlockComponent = __decorate([
    core_1.Component({
        
        selector: 'upmc-link-block',
        template: "<div Class=\"pattern link-block\" [ngStyle]=\"{'background':options?.background}\"> \t<img *ngIf=\"options?.imageUrl\" [src]=\"options?.imageUrl\"/> \t<div *ngIf=\"options?.title\" class=\"title\" [innerHtml]=\"options?.title\"></div> \t<div *ngIf=\"options?.description\" class=\"description\" [innerHtml]=\"options?.description\"></div> \t<a *ngIf=\"options?.linkHref\" [href]=\"options?.linkHref\" class=\"link\">{{options?.linkText}} <img src=\"http://localhost:4300/app/shared/test-server/icons/external-link.png\" class=\"external-link-icon\"></a> </div>",
        styles: [":host /deep/ .pattern.link-block{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;text-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;min-height:130px;padding:15px 5px;margin-bottom:20px;color:#fff}:host /deep/ .pattern.link-block>*{padding-bottom:5px}:host /deep/ .pattern.link-block img{-webkit-align-self:center;-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}:host /deep/ .pattern.link-block .title{font-size:18px;letter-spacing:.7px}:host /deep/ .pattern.link-block .description{font-size:14px;letter-spacing:.5px;max-width:350px}:host /deep/ .pattern.link-block .link{font-size:16px;letter-spacing:.6px;color:#fff;text-decoration:none;font-weight:700}:host /deep/ .pattern.link-block .link .external-link-icon{width:14px;height:14px} /*# sourceMappingURL=/link-block.component.css.map */"]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof upmc_common_1.TemplateService !== "undefined" && upmc_common_1.TemplateService) === "function" && _a || Object])
], LinkBlockComponent);
exports.LinkBlockComponent = LinkBlockComponent;
var _a;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zcmMvbGluay1ibG9jay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMEU7QUFDMUUsdURBQWdFO0FBQ2hFLDJDQUE4QztBQVM5QyxJQUFhLGtCQUFrQjtJQUkzQiw0QkFBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO0lBQUUsQ0FBQztJQUFBLENBQUM7SUFFeEQsd0NBQVcsR0FBWCxVQUFZLEVBQXFDO1lBQXBDLGNBQUk7UUFDYixFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGlDQUFjLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDdkUsQ0FBQztJQUNMLENBQUM7SUFDTCx5QkFBQztBQUFELENBWEEsQUFXQyxJQUFBO0FBVlk7SUFBUixZQUFLLEVBQUU7O2dEQUFXO0FBRFYsa0JBQWtCO0lBUDlCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQixRQUFRLEVBQUUsa2pCQUFrakI7UUFDNWpCLE1BQU0sRUFBRSxDQUFDLGsvQkFBay9CLENBQUM7S0FDLy9CLENBQUM7eURBTXVDLDZCQUFlLG9CQUFmLDZCQUFlO0dBSjNDLGtCQUFrQixDQVc5QjtBQVhZLGdEQUFrQiIsImZpbGUiOiJzcmMvbGluay1ibG9jay5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6W119
