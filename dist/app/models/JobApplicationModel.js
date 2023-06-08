"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireWildcard(require("mongoose"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var JobApplicationSchema = new _mongoose.Schema({
  worker: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Worker',
    required: true
  },
  company: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Company',
    required: true
  },
  jobPosting: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'JobPosting',
    required: true
  },
  status: {
    type: String,
    required: true,
    "enum": ['PENDING', 'ACCEPTED', 'REJECTED', 'CANCELED', 'SCHEDULED']
  }
}, {
  timestamps: true
});
var _default = _mongoose["default"].model('JobApplication', JobApplicationSchema);
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9uZ29vc2UiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJub2RlSW50ZXJvcCIsIldlYWtNYXAiLCJjYWNoZUJhYmVsSW50ZXJvcCIsImNhY2hlTm9kZUludGVyb3AiLCJvYmoiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsImNhY2hlIiwiaGFzIiwiZ2V0IiwibmV3T2JqIiwiaGFzUHJvcGVydHlEZXNjcmlwdG9yIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJrZXkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJkZXNjIiwic2V0IiwiSm9iQXBwbGljYXRpb25TY2hlbWEiLCJTY2hlbWEiLCJ3b3JrZXIiLCJ0eXBlIiwiVHlwZXMiLCJPYmplY3RJZCIsInJlZiIsInJlcXVpcmVkIiwiY29tcGFueSIsImpvYlBvc3RpbmciLCJzdGF0dXMiLCJTdHJpbmciLCJ0aW1lc3RhbXBzIiwiX2RlZmF1bHQiLCJtb25nb29zZSIsIm1vZGVsIiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvbW9kZWxzL0pvYkFwcGxpY2F0aW9uTW9kZWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlLCB7IFNjaGVtYSB9IGZyb20gJ21vbmdvb3NlJ1xuXG5pbXBvcnQgeyBJSm9iQXBwbGljYXRpb24gfSBmcm9tICcuLi9pbnRlcmZhY2VzL21vZGVscy9Kb2JBcHBsaWNhdGlvbidcblxuY29uc3QgSm9iQXBwbGljYXRpb25TY2hlbWEgPSBuZXcgU2NoZW1hKFxuXHR7XG5cdFx0d29ya2VyOiB7IHR5cGU6IFNjaGVtYS5UeXBlcy5PYmplY3RJZCwgcmVmOiAnV29ya2VyJywgcmVxdWlyZWQ6IHRydWUgfSxcblx0XHRjb21wYW55OiB7IHR5cGU6IFNjaGVtYS5UeXBlcy5PYmplY3RJZCwgcmVmOiAnQ29tcGFueScsIHJlcXVpcmVkOiB0cnVlIH0sXG5cdFx0am9iUG9zdGluZzoge1xuXHRcdFx0dHlwZTogU2NoZW1hLlR5cGVzLk9iamVjdElkLFxuXHRcdFx0cmVmOiAnSm9iUG9zdGluZycsXG5cdFx0XHRyZXF1aXJlZDogdHJ1ZSxcblx0XHR9LFxuXHRcdHN0YXR1czoge1xuXHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0cmVxdWlyZWQ6IHRydWUsXG5cdFx0XHRlbnVtOiBbJ1BFTkRJTkcnLCAnQUNDRVBURUQnLCAnUkVKRUNURUQnLCAnQ0FOQ0VMRUQnLCAnU0NIRURVTEVEJ10sXG5cdFx0fSxcblx0fSxcblx0e1xuXHRcdHRpbWVzdGFtcHM6IHRydWUsXG5cdH1cbilcblxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWw8SUpvYkFwcGxpY2F0aW9uPihcblx0J0pvYkFwcGxpY2F0aW9uJyxcblx0Sm9iQXBwbGljYXRpb25TY2hlbWFcbilcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLElBQUFBLFNBQUEsR0FBQUMsdUJBQUEsQ0FBQUMsT0FBQTtBQUEyQyxTQUFBQyx5QkFBQUMsV0FBQSxlQUFBQyxPQUFBLGtDQUFBQyxpQkFBQSxPQUFBRCxPQUFBLFFBQUFFLGdCQUFBLE9BQUFGLE9BQUEsWUFBQUYsd0JBQUEsWUFBQUEseUJBQUFDLFdBQUEsV0FBQUEsV0FBQSxHQUFBRyxnQkFBQSxHQUFBRCxpQkFBQSxLQUFBRixXQUFBO0FBQUEsU0FBQUgsd0JBQUFPLEdBQUEsRUFBQUosV0FBQSxTQUFBQSxXQUFBLElBQUFJLEdBQUEsSUFBQUEsR0FBQSxDQUFBQyxVQUFBLFdBQUFELEdBQUEsUUFBQUEsR0FBQSxhQUFBRSxPQUFBLENBQUFGLEdBQUEseUJBQUFBLEdBQUEsdUNBQUFBLEdBQUEsVUFBQUcsS0FBQSxHQUFBUix3QkFBQSxDQUFBQyxXQUFBLE9BQUFPLEtBQUEsSUFBQUEsS0FBQSxDQUFBQyxHQUFBLENBQUFKLEdBQUEsWUFBQUcsS0FBQSxDQUFBRSxHQUFBLENBQUFMLEdBQUEsU0FBQU0sTUFBQSxXQUFBQyxxQkFBQSxHQUFBQyxNQUFBLENBQUFDLGNBQUEsSUFBQUQsTUFBQSxDQUFBRSx3QkFBQSxXQUFBQyxHQUFBLElBQUFYLEdBQUEsUUFBQVcsR0FBQSxrQkFBQUgsTUFBQSxDQUFBSSxTQUFBLENBQUFDLGNBQUEsQ0FBQUMsSUFBQSxDQUFBZCxHQUFBLEVBQUFXLEdBQUEsU0FBQUksSUFBQSxHQUFBUixxQkFBQSxHQUFBQyxNQUFBLENBQUFFLHdCQUFBLENBQUFWLEdBQUEsRUFBQVcsR0FBQSxjQUFBSSxJQUFBLEtBQUFBLElBQUEsQ0FBQVYsR0FBQSxJQUFBVSxJQUFBLENBQUFDLEdBQUEsS0FBQVIsTUFBQSxDQUFBQyxjQUFBLENBQUFILE1BQUEsRUFBQUssR0FBQSxFQUFBSSxJQUFBLFlBQUFULE1BQUEsQ0FBQUssR0FBQSxJQUFBWCxHQUFBLENBQUFXLEdBQUEsU0FBQUwsTUFBQSxjQUFBTixHQUFBLE1BQUFHLEtBQUEsSUFBQUEsS0FBQSxDQUFBYSxHQUFBLENBQUFoQixHQUFBLEVBQUFNLE1BQUEsWUFBQUEsTUFBQTtBQUkzQyxJQUFNVyxvQkFBb0IsR0FBRyxJQUFJQyxnQkFBTSxDQUN0QztFQUNDQyxNQUFNLEVBQUU7SUFBRUMsSUFBSSxFQUFFRixnQkFBTSxDQUFDRyxLQUFLLENBQUNDLFFBQVE7SUFBRUMsR0FBRyxFQUFFLFFBQVE7SUFBRUMsUUFBUSxFQUFFO0VBQUssQ0FBQztFQUN0RUMsT0FBTyxFQUFFO0lBQUVMLElBQUksRUFBRUYsZ0JBQU0sQ0FBQ0csS0FBSyxDQUFDQyxRQUFRO0lBQUVDLEdBQUcsRUFBRSxTQUFTO0lBQUVDLFFBQVEsRUFBRTtFQUFLLENBQUM7RUFDeEVFLFVBQVUsRUFBRTtJQUNYTixJQUFJLEVBQUVGLGdCQUFNLENBQUNHLEtBQUssQ0FBQ0MsUUFBUTtJQUMzQkMsR0FBRyxFQUFFLFlBQVk7SUFDakJDLFFBQVEsRUFBRTtFQUNYLENBQUM7RUFDREcsTUFBTSxFQUFFO0lBQ1BQLElBQUksRUFBRVEsTUFBTTtJQUNaSixRQUFRLEVBQUUsSUFBSTtJQUNkLFFBQU0sQ0FBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsV0FBVztFQUNsRTtBQUNELENBQUMsRUFDRDtFQUNDSyxVQUFVLEVBQUU7QUFDYixDQUNELENBQUM7QUFBQSxJQUFBQyxRQUFBLEdBRWNDLG9CQUFRLENBQUNDLEtBQUssQ0FDNUIsZ0JBQWdCLEVBQ2hCZixvQkFDRCxDQUFDO0FBQUFnQixPQUFBLGNBQUFILFFBQUEifQ==