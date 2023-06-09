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
var EventSchema = new _mongoose.Schema({
  status: {
    type: String,
    required: true,
    "enum": ['CLOCK_IN', 'CLOCK_OUT', 'BREAK_START', 'BREAK_END']
  },
  time: {
    type: Date,
    required: true
  }
}, {
  _id: false // We don't need a unique _id for each event in this case
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
  },
  timeline: {
    type: [EventSchema],
    required: false
  }
}, {
  timestamps: true
});
var _default = _mongoose["default"].model('Job', JobSchema);
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9uZ29vc2UiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJub2RlSW50ZXJvcCIsIldlYWtNYXAiLCJjYWNoZUJhYmVsSW50ZXJvcCIsImNhY2hlTm9kZUludGVyb3AiLCJvYmoiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsImNhY2hlIiwiaGFzIiwiZ2V0IiwibmV3T2JqIiwiaGFzUHJvcGVydHlEZXNjcmlwdG9yIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJrZXkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJkZXNjIiwic2V0IiwiQnJlYWtTY2hlbWEiLCJTY2hlbWEiLCJzdGFydCIsInR5cGUiLCJEYXRlIiwicmVxdWlyZWQiLCJlbmQiLCJFdmVudFNjaGVtYSIsInN0YXR1cyIsIlN0cmluZyIsInRpbWUiLCJfaWQiLCJKb2JTY2hlbWEiLCJuYW1lIiwid29ya2VySWQiLCJUeXBlcyIsIk9iamVjdElkIiwicmVmIiwiY29tcGFueUlkIiwiam9iUG9zdGluZ0lkIiwic2hpZnRTdGFydCIsInNoaWZ0RW5kIiwiY2xvY2tTdGFydCIsImNsb2NrRW5kIiwiYnJlYWtzIiwidGltZWxpbmUiLCJ0aW1lc3RhbXBzIiwiX2RlZmF1bHQiLCJtb25nb29zZSIsIm1vZGVsIiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvbW9kZWxzL0pvYk1vZGVsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSwgeyBTY2hlbWEgfSBmcm9tICdtb25nb29zZSdcblxuaW1wb3J0IHsgSUpvYiB9IGZyb20gJy4uL2ludGVyZmFjZXMvbW9kZWxzL0pvYidcblxuY29uc3QgQnJlYWtTY2hlbWEgPSBuZXcgU2NoZW1hKHtcblx0c3RhcnQ6IHtcblx0XHR0eXBlOiBEYXRlLFxuXHRcdHJlcXVpcmVkOiB0cnVlLFxuXHR9LFxuXHRlbmQ6IHtcblx0XHR0eXBlOiBEYXRlLFxuXHRcdHJlcXVpcmVkOiBmYWxzZSxcblx0fSxcbn0pXG5cbmNvbnN0IEV2ZW50U2NoZW1hID0gbmV3IFNjaGVtYShcblx0e1xuXHRcdHN0YXR1czoge1xuXHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0cmVxdWlyZWQ6IHRydWUsXG5cdFx0XHRlbnVtOiBbJ0NMT0NLX0lOJywgJ0NMT0NLX09VVCcsICdCUkVBS19TVEFSVCcsICdCUkVBS19FTkQnXSxcblx0XHR9LFxuXHRcdHRpbWU6IHtcblx0XHRcdHR5cGU6IERhdGUsXG5cdFx0XHRyZXF1aXJlZDogdHJ1ZSxcblx0XHR9LFxuXHR9LFxuXHR7XG5cdFx0X2lkOiBmYWxzZSwgLy8gV2UgZG9uJ3QgbmVlZCBhIHVuaXF1ZSBfaWQgZm9yIGVhY2ggZXZlbnQgaW4gdGhpcyBjYXNlXG5cdH1cbilcblxuY29uc3QgSm9iU2NoZW1hID0gbmV3IFNjaGVtYShcblx0e1xuXHRcdG5hbWU6IHtcblx0XHRcdHR5cGU6IFN0cmluZyxcblx0XHRcdHJlcXVpcmVkOiB0cnVlLFxuXHRcdH0sXG5cdFx0d29ya2VySWQ6IHtcblx0XHRcdHR5cGU6IFNjaGVtYS5UeXBlcy5PYmplY3RJZCxcblx0XHRcdHJlZjogJ1dvcmtlcicsXG5cdFx0XHRyZXF1aXJlZDogdHJ1ZSxcblx0XHR9LFxuXHRcdGNvbXBhbnlJZDoge1xuXHRcdFx0dHlwZTogU2NoZW1hLlR5cGVzLk9iamVjdElkLFxuXHRcdFx0cmVmOiAnQ29tcGFueScsXG5cdFx0XHRyZXF1aXJlZDogdHJ1ZSxcblx0XHR9LFxuXHRcdGpvYlBvc3RpbmdJZDoge1xuXHRcdFx0dHlwZTogU2NoZW1hLlR5cGVzLk9iamVjdElkLFxuXHRcdFx0cmVmOiAnSm9iUG9zdGluZycsXG5cdFx0XHRyZXF1aXJlZDogdHJ1ZSxcblx0XHR9LFxuXHRcdHN0YXR1czoge1xuXHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0cmVxdWlyZWQ6IHRydWUsXG5cdFx0XHRlbnVtOiBbJ1BFTkRJTkcnLCAnQ09NUExFVEUnLCAnQ0FOQ0VMRUQnXSxcblx0XHRcdGRlZmF1bHQ6ICdQRU5ESU5HJyxcblx0XHR9LFxuXHRcdHNoaWZ0U3RhcnQ6IHtcblx0XHRcdHR5cGU6IERhdGUsXG5cdFx0XHRyZXF1aXJlZDogdHJ1ZSxcblx0XHR9LFxuXHRcdHNoaWZ0RW5kOiB7XG5cdFx0XHR0eXBlOiBEYXRlLFxuXHRcdFx0cmVxdWlyZWQ6IHRydWUsXG5cdFx0fSxcblx0XHRjbG9ja1N0YXJ0OiB7XG5cdFx0XHR0eXBlOiBEYXRlLFxuXHRcdFx0cmVxdWlyZWQ6IGZhbHNlLFxuXHRcdH0sXG5cdFx0Y2xvY2tFbmQ6IHtcblx0XHRcdHR5cGU6IERhdGUsXG5cdFx0XHRyZXF1aXJlZDogZmFsc2UsXG5cdFx0fSxcblx0XHRicmVha3M6IHtcblx0XHRcdHR5cGU6IFtCcmVha1NjaGVtYV0sXG5cdFx0XHRyZXF1aXJlZDogZmFsc2UsXG5cdFx0fSxcblx0XHR0aW1lbGluZToge1xuXHRcdFx0dHlwZTogW0V2ZW50U2NoZW1hXSxcblx0XHRcdHJlcXVpcmVkOiBmYWxzZSxcblx0XHR9LFxuXHR9LFxuXHR7XG5cdFx0dGltZXN0YW1wczogdHJ1ZSxcblx0fVxuKVxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWw8SUpvYj4oJ0pvYicsIEpvYlNjaGVtYSlcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLElBQUFBLFNBQUEsR0FBQUMsdUJBQUEsQ0FBQUMsT0FBQTtBQUEyQyxTQUFBQyx5QkFBQUMsV0FBQSxlQUFBQyxPQUFBLGtDQUFBQyxpQkFBQSxPQUFBRCxPQUFBLFFBQUFFLGdCQUFBLE9BQUFGLE9BQUEsWUFBQUYsd0JBQUEsWUFBQUEseUJBQUFDLFdBQUEsV0FBQUEsV0FBQSxHQUFBRyxnQkFBQSxHQUFBRCxpQkFBQSxLQUFBRixXQUFBO0FBQUEsU0FBQUgsd0JBQUFPLEdBQUEsRUFBQUosV0FBQSxTQUFBQSxXQUFBLElBQUFJLEdBQUEsSUFBQUEsR0FBQSxDQUFBQyxV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