"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var link_block_component_1 = require("./link-block.component");
var upmc_common_1 = require("upmc-common");
var LinkBlockModule = (function () {
    function LinkBlockModule() {
    }
    return LinkBlockModule;
}());
LinkBlockModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [link_block_component_1.LinkBlockComponent],
        exports: [link_block_component_1.LinkBlockComponent],
        providers: [upmc_common_1.TemplateService]
    })
], LinkBlockModule);
exports.LinkBlockModule = LinkBlockModule;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zcmMvbGluay1ibG9jay5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBeUM7QUFDekMsMENBQStDO0FBQy9DLCtEQUE0RDtBQUM1RCwyQ0FBOEM7QUFVOUMsSUFBYSxlQUFlO0lBQTVCO0lBQThCLENBQUM7SUFBRCxzQkFBQztBQUFELENBQTlCLEFBQStCLElBQUE7QUFBbEIsZUFBZTtJQVAzQixlQUFRLENBQUM7UUFDTixPQUFPLEVBQUUsQ0FBQyxxQkFBWSxDQUFDO1FBQ3ZCLFlBQVksRUFBRSxDQUFDLHlDQUFrQixDQUFDO1FBQ2xDLE9BQU8sRUFBRSxDQUFDLHlDQUFrQixDQUFDO1FBQzdCLFNBQVMsRUFBRSxDQUFDLDZCQUFlLENBQUM7S0FDL0IsQ0FBQztHQUVXLGVBQWUsQ0FBRztBQUFsQiwwQ0FBZSIsImZpbGUiOiJzcmMvbGluay1ibG9jay5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6W119
