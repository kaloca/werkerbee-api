"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _controllers = _interopRequireDefault(require("../../controllers"));
var _express = require("express");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var JobTypeRouter = (0, _express.Router)();
JobTypeRouter.post('/job-types', _controllers["default"].JobTypeController.addJobType);
JobTypeRouter.get('/job-types', _controllers["default"].JobTypeController.getJobTypes);
JobTypeRouter.get('/jobtypes', _controllers["default"].JobTypeController.newGetJobTypes);
JobTypeRouter.put('/job-types/:jobTypeId', _controllers["default"].JobTypeController.updateJobType);
JobTypeRouter["delete"]('/job-types/:jobTypeId', _controllers["default"].JobTypeController.deleteJobType);
var _default = JobTypeRouter;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29udHJvbGxlcnMiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9leHByZXNzIiwib2JqIiwiX19lc01vZHVsZSIsIkpvYlR5cGVSb3V0ZXIiLCJSb3V0ZXIiLCJwb3N0IiwiY29udHJvbGxlcnMiLCJKb2JUeXBlQ29udHJvbGxlciIsImFkZEpvYlR5cGUiLCJnZXQiLCJnZXRKb2JUeXBlcyIsIm5ld0dldEpvYlR5cGVzIiwicHV0IiwidXBkYXRlSm9iVHlwZSIsImRlbGV0ZUpvYlR5cGUiLCJfZGVmYXVsdCIsImV4cG9ydHMiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBwL3JvdXRlcy9Kb2JzL0pvYlR5cGVSb3V0ZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbnRyb2xsZXJzIGZyb20gJ0AvYXBwL2NvbnRyb2xsZXJzJ1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcydcblxuY29uc3QgSm9iVHlwZVJvdXRlciA9IFJvdXRlcigpXG5cbkpvYlR5cGVSb3V0ZXIucG9zdCgnL2pvYi10eXBlcycsIGNvbnRyb2xsZXJzLkpvYlR5cGVDb250cm9sbGVyLmFkZEpvYlR5cGUpXG5Kb2JUeXBlUm91dGVyLmdldCgnL2pvYi10eXBlcycsIGNvbnRyb2xsZXJzLkpvYlR5cGVDb250cm9sbGVyLmdldEpvYlR5cGVzKVxuSm9iVHlwZVJvdXRlci5nZXQoJy9qb2J0eXBlcycsIGNvbnRyb2xsZXJzLkpvYlR5cGVDb250cm9sbGVyLm5ld0dldEpvYlR5cGVzKVxuSm9iVHlwZVJvdXRlci5wdXQoXG5cdCcvam9iLXR5cGVzLzpqb2JUeXBlSWQnLFxuXHRjb250cm9sbGVycy5Kb2JUeXBlQ29udHJvbGxlci51cGRhdGVKb2JUeXBlXG4pXG5Kb2JUeXBlUm91dGVyLmRlbGV0ZShcblx0Jy9qb2ItdHlwZXMvOmpvYlR5cGVJZCcsXG5cdGNvbnRyb2xsZXJzLkpvYlR5cGVDb250cm9sbGVyLmRlbGV0ZUpvYlR5cGVcbilcblxuZXhwb3J0IGRlZmF1bHQgSm9iVHlwZVJvdXRlclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFBQSxZQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7QUFBZ0MsU0FBQUQsdUJBQUFHLEdBQUEsV0FBQUEsR0FBQSxJQUFBQSxHQUFBLENBQUFDLFVBQUEsR0FBQUQsR0FBQSxnQkFBQUEsR0FBQTtBQUVoQyxJQUFNRSxhQUFhLEdBQUcsSUFBQUMsZUFBTSxFQUFDLENBQUM7QUFFOUJELGFBQWEsQ0FBQ0UsSUFBSSxDQUFDLFlBQVksRUFBRUMsdUJBQVcsQ0FBQ0MsaUJBQWlCLENBQUNDLFVBQVUsQ0FBQztBQUMxRUwsYUFBYSxDQUFDTSxHQUFHLENBQUMsWUFBWSxFQUFFSCx1QkFBVyxDQUFDQyxpQkFBaUIsQ0FBQ0csV0FBVyxDQUFDO0FBQzFFUCxhQUFhLENBQUNNLEdBQUcsQ0FBQyxXQUFXLEVBQUVILHVCQUFXLENBQUNDLGlCQUFpQixDQUFDSSxjQUFjLENBQUM7QUFDNUVSLGFBQWEsQ0FBQ1MsR0FBRyxDQUNoQix1QkFBdUIsRUFDdkJOLHVCQUFXLENBQUNDLGlCQUFpQixDQUFDTSxhQUMvQixDQUFDO0FBQ0RWLGFBQWEsVUFBTyxDQUNuQix1QkFBdUIsRUFDdkJHLHVCQUFXLENBQUNDLGlCQUFpQixDQUFDTyxhQUMvQixDQUFDO0FBQUEsSUFBQUMsUUFBQSxHQUVjWixhQUFhO0FBQUFhLE9BQUEsY0FBQUQsUUFBQSJ9