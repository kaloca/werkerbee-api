"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireWildcard(require("mongoose"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var BreakSchema = new _mongoose.Schema({
  start: {
    type: Date,
    required: true
  },
  end: {
    type: Date,
    required: false
  }
});
var JobSchema = new _mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  workerId: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Worker',
    required: true
  },
  companyId: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Company',
    required: true
  },
  jobPostingId: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'JobPosting',
    required: true
  },
  status: {
    type: String,
    required: true,
    "enum": ['PENDING', 'COMPLETE', 'CANCELED'],
    "default": 'PENDING'
  },
  shiftStart: {
    type: Date,
    required: true
  },
  shiftEnd: {
    type: Date,
    required: true
  },
  clockStart: {
    type: Date,
    required: false
  },
  clockEnd: {
    type: Date,
    required: false
  },
  breaks: {
    type: [BreakSchema],
    required: false
  }
}, {
  timestamps: true
});
var _default = _mongoose["default"].model('Job', JobSchema);
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9uZ29vc2UiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJub2RlSW50ZXJvcCIsIldlYWtNYXAiLCJjYWNoZUJhYmVsSW50ZXJvcCIsImNhY2hlTm9kZUludGVyb3AiLCJvYmoiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsImNhY2hlIiwiaGFzIiwiZ2V0IiwibmV3T2JqIiwiaGFzUHJvcGVydHlEZXNjcmlwdG9yIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJrZXkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJkZXNjIiwic2V0IiwiQnJlYWtTY2hlbWEiLCJTY2hlbWEiLCJzdGFydCIsInR5cGUiLCJEYXRlIiwicmVxdWlyZWQiLCJlbmQiLCJKb2JTY2hlbWEiLCJuYW1lIiwiU3RyaW5nIiwid29ya2VySWQiLCJUeXBlcyIsIk9iamVjdElkIiwicmVmIiwiY29tcGFueUlkIiwiam9iUG9zdGluZ0lkIiwic3RhdHVzIiwic2hpZnRTdGFydCIsInNoaWZ0RW5kIiwiY2xvY2tTdGFydCIsImNsb2NrRW5kIiwiYnJlYWtzIiwidGltZXN0YW1wcyIsIl9kZWZhdWx0IiwibW9uZ29vc2UiLCJtb2RlbCIsImV4cG9ydHMiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL21vZGVscy9Kb2JNb2RlbC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UsIHsgU2NoZW1hIH0gZnJvbSAnbW9uZ29vc2UnXG5cbmltcG9ydCB7IElKb2IgfSBmcm9tICcuLi9pbnRlcmZhY2VzL21vZGVscy9Kb2InXG5cbmNvbnN0IEJyZWFrU2NoZW1hID0gbmV3IFNjaGVtYSh7XG5cdHN0YXJ0OiB7XG5cdFx0dHlwZTogRGF0ZSxcblx0XHRyZXF1aXJlZDogdHJ1ZSxcblx0fSxcblx0ZW5kOiB7XG5cdFx0dHlwZTogRGF0ZSxcblx0XHRyZXF1aXJlZDogZmFsc2UsXG5cdH0sXG59KVxuXG5jb25zdCBKb2JTY2hlbWEgPSBuZXcgU2NoZW1hKFxuXHR7XG5cdFx0bmFtZToge1xuXHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0cmVxdWlyZWQ6IHRydWUsXG5cdFx0fSxcblx0XHR3b3JrZXJJZDoge1xuXHRcdFx0dHlwZTogU2NoZW1hLlR5cGVzLk9iamVjdElkLFxuXHRcdFx0cmVmOiAnV29ya2VyJyxcblx0XHRcdHJlcXVpcmVkOiB0cnVlLFxuXHRcdH0sXG5cdFx0Y29tcGFueUlkOiB7XG5cdFx0XHR0eXBlOiBTY2hlbWEuVHlwZXMuT2JqZWN0SWQsXG5cdFx0XHRyZWY6ICdDb21wYW55Jyxcblx0XHRcdHJlcXVpcmVkOiB0cnVlLFxuXHRcdH0sXG5cdFx0am9iUG9zdGluZ0lkOiB7XG5cdFx0XHR0eXBlOiBTY2hlbWEuVHlwZXMuT2JqZWN0SWQsXG5cdFx0XHRyZWY6ICdKb2JQb3N0aW5nJyxcblx0XHRcdHJlcXVpcmVkOiB0cnVlLFxuXHRcdH0sXG5cdFx0c3RhdHVzOiB7XG5cdFx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0XHRyZXF1aXJlZDogdHJ1ZSxcblx0XHRcdGVudW06IFsnUEVORElORycsICdDT01QTEVURScsICdDQU5DRUxFRCddLFxuXHRcdFx0ZGVmYXVsdDogJ1BFTkRJTkcnLFxuXHRcdH0sXG5cdFx0c2hpZnRTdGFydDoge1xuXHRcdFx0dHlwZTogRGF0ZSxcblx0XHRcdHJlcXVpcmVkOiB0cnVlLFxuXHRcdH0sXG5cdFx0c2hpZnRFbmQ6IHtcblx0XHRcdHR5cGU6IERhdGUsXG5cdFx0XHRyZXF1aXJlZDogdHJ1ZSxcblx0XHR9LFxuXHRcdGNsb2NrU3RhcnQ6IHtcblx0XHRcdHR5cGU6IERhdGUsXG5cdFx0XHRyZXF1aXJlZDogZmFsc2UsXG5cdFx0fSxcblx0XHRjbG9ja0VuZDoge1xuXHRcdFx0dHlwZTogRGF0ZSxcblx0XHRcdHJlcXVpcmVkOiBmYWxzZSxcblx0XHR9LFxuXHRcdGJyZWFrczoge1xuXHRcdFx0dHlwZTogW0JyZWFrU2NoZW1hXSxcblx0XHRcdHJlcXVpcmVkOiBmYWxzZSxcblx0XHR9LFxuXHR9LFxuXHR7XG5cdFx0dGltZXN0YW1wczogdHJ1ZSxcblx0fVxuKVxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWw8SUpvYj4oJ0pvYicsIEpvYlNjaGVtYSlcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLElBQUFBLFNBQUEsR0FBQUMsdUJBQUEsQ0FBQUMsT0FBQTtBQUEyQyxTQUFBQyx5QkFBQUMsV0FBQSxlQUFBQyxPQUFBLGtDQUFBQyxpQkFBQSxPQUFBRCxPQUFBLFFBQUFFLGdCQUFBLE9BQUFGLE9BQUEsWUFBQUYsd0JBQUEsWUFBQUEseUJBQUFDLFdBQUEsV0FBQUEsV0FBQSxHQUFBRyxnQkFBQSxHQUFBRCxpQkFBQSxLQUFBRixXQUFBO0FBQUEsU0FBQUgsd0JBQUFPLEdBQUEsRUFBQUosV0FBQSxTQUFBQSxXQUFBLElBQUFJLEdBQUEsSUFBQUEsR0FBQSxDQUFBQyxVQUFBLFdBQUFELEdBQUEsUUFBQUEsR0FBQSxhQUFBRSxPQUFBLENBQUFGLEdBQUEseUJBQUFBLEdBQUEsdUNBQUFBLEdBQUEsVUFBQUcsS0FBQSxHQUFBUix3QkFBQSxDQUFBQyxXQUFBLE9BQUFPLEtBQUEsSUFBQUEsS0FBQSxDQUFBQyxHQUFBLENBQUFKLEdBQUEsWUFBQUcsS0FBQSxDQUFBRSxHQUFBLENBQUFMLEdBQUEsU0FBQU0sTUFBQSxXQUFBQyxxQkFBQSxHQUFBQyxNQUFBLENBQUFDLGNBQUEsSUFBQUQsTUFBQSxDQUFBRSx3QkFBQSxXQUFBQyxHQUFBLElBQUFYLEdBQUEsUUFBQVcsR0FBQSxrQkFBQUgsTUFBQSxDQUFBSSxTQUFBLENBQUFDLGNBQUEsQ0FBQUMsSUFBQSxDQUFBZCxHQUFBLEVBQUFXLEdBQUEsU0FBQUksSUFBQSxHQUFBUixxQkFBQSxHQUFBQyxNQUFBLENBQUFFLHdCQUFBLENBQUFWLEdBQUEsRUFBQVcsR0FBQSxjQUFBSSxJQUFBLEtBQUFBLElBQUEsQ0FBQVYsR0FBQSxJQUFBVSxJQUFBLENBQUFDLEdBQUEsS0FBQVIsTUFBQSxDQUFBQyxjQUFBLENBQUFILE1BQUEsRUFBQUssR0FBQSxFQUFBSSxJQUFBLFlBQUFULE1BQUEsQ0FBQUssR0FBQSxJQUFBWCxHQUFBLENBQUFXLEdBQUEsU0FBQUwsTUFBQSxjQUFBTixHQUFBLE1BQUFHLEtBQUEsSUFBQUEsS0FBQSxDQUFBYSxHQUFBLENBQUFoQixHQUFBLEVBQUFNLE1BQUEsWUFBQUEsTUFBQTtBQUkzQyxJQUFNVyxXQUFXLEdBQUcsSUFBSUMsZ0JBQU0sQ0FBQztFQUM5QkMsS0FBSyxFQUFFO0lBQ05DLElBQUksRUFBRUMsSUFBSTtJQUNWQyxRQUFRLEVBQUU7RUFDWCxDQUFDO0VBQ0RDLEdBQUcsRUFBRTtJQUNKSCxJQUFJLEVBQUVDLElBQUk7SUFDVkMsUUFBUSxFQUFFO0VBQ1g7QUFDRCxDQUFDLENBQUM7QUFFRixJQUFNRSxTQUFTLEdBQUcsSUFBSU4sZ0JBQU0sQ0FDM0I7RUFDQ08sSUFBSSxFQUFFO0lBQ0xMLElBQUksRUFBRU0sTUFBTTtJQUNaSixRQUFRLEVBQUU7RUFDWCxDQUFDO0VBQ0RLLFFBQVEsRUFBRTtJQUNUUCxJQUFJLEVBQUVGLGdCQUFNLENBQUNVLEtBQUssQ0FBQ0MsUUFBUTtJQUMzQkMsR0FBRyxFQUFFLFFBQVE7SUFDYlIsUUFBUSxFQUFFO0VBQ1gsQ0FBQztFQUNEUyxTQUFTLEVBQUU7SUFDVlgsSUFBSSxFQUFFRixnQkFBTSxDQUFDVSxLQUFLLENBQUNDLFFBQVE7SUFDM0JDLEdBQUcsRUFBRSxTQUFTO0lBQ2RSLFFBQVEsRUFBRTtFQUNYLENBQUM7RUFDRFUsWUFBWSxFQUFFO0lBQ2JaLElBQUksRUFBRUYsZ0JBQU0sQ0FBQ1UsS0FBSyxDQUFDQyxRQUFRO0lBQzNCQyxHQUFHLEVBQUUsWUFBWTtJQUNqQlIsUUFBUSxFQUFFO0VBQ1gsQ0FBQztFQUNEVyxNQUFNLEVBQUU7SUFDUGIsSUFBSSxFQUFFTSxNQUFNO0lBQ1pKLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBTSxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDO0lBQ3pDLFdBQVM7RUFDVixDQUFDO0VBQ0RZLFVBQVUsRUFBRTtJQUNYZCxJQUFJLEVBQUVDLElBQUk7SUFDVkMsUUFBUSxFQUFFO0VBQ1gsQ0FBQztFQUNEYSxRQUFRLEVBQUU7SUFDVGYsSUFBSSxFQUFFQyxJQUFJO0lBQ1ZDLFFBQVEsRUFBRTtFQUNYLENBQUM7RUFDRGMsVUFBVSxFQUFFO0lBQ1hoQixJQUFJLEVBQUVDLElBQUk7SUFDVkMsUUFBUSxFQUFFO0VBQ1gsQ0FBQztFQUNEZSxRQUFRLEVBQUU7SUFDVGpCLElBQUksRUFBRUMsSUFBSTtJQUNWQyxRQUFRLEVBQUU7RUFDWCxDQUFDO0VBQ0RnQixNQUFNLEVBQUU7SUFDUGxCLElBQUksRUFBRSxDQUFDSCxXQUFXLENBQUM7SUFDbkJLLFFBQVEsRUFBRTtFQUNYO0FBQ0QsQ0FBQyxFQUNEO0VBQ0NpQixVQUFVLEVBQUU7QUFDYixDQUNELENBQUM7QUFBQSxJQUFBQyxRQUFBLEdBQ2NDLG9CQUFRLENBQUNDLEtBQUssQ0FBTyxLQUFLLEVBQUVsQixTQUFTLENBQUM7QUFBQW1CLE9BQUEsY0FBQUgsUUFBQSJ9