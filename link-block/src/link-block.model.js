"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var upmc_common_1 = require("upmc-common");
var LinkBlockModel = (function () {
    function LinkBlockModel(data, templateService) {
        this.title = '';
        this.imageId = 0;
        this.key = '';
        this.imageUrl = '';
        this.description = '';
        this.background = '';
        this.linkText = '';
        this.linkHref = '';
        var result = new upmc_common_1.TemplateValidator()
            .injectService(templateService)
            .setImageIds(['imageId'])
            .processData(data, this);
        Object.assign(this, result);
    }
    return LinkBlockModel;
}());
exports.LinkBlockModel = LinkBlockModel;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zcmMvbGluay1ibG9jay5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFpRTtBQWFqRTtJQVVJLHdCQUFZLElBQVksRUFBRSxlQUFnQztRQVQxRCxVQUFLLEdBQUUsRUFBRSxDQUFDO1FBQ1YsWUFBTyxHQUFHLENBQUMsQ0FBQztRQUNaLFFBQUcsR0FBRyxFQUFFLENBQUM7UUFDVCxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUdWLElBQUksTUFBTSxHQUFlLElBQUksK0JBQWlCLEVBQUU7YUFDM0MsYUFBYSxDQUFDLGVBQWUsQ0FBQzthQUM5QixXQUFXLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUN4QixXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTdCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFDTCxxQkFBQztBQUFELENBbEJBLEFBa0JDLElBQUE7QUFsQlksd0NBQWMiLCJmaWxlIjoic3JjL2xpbmstYmxvY2subW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6W119
