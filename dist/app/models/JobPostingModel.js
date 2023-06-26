"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireWildcard(require("mongoose"));
var _pointSchema = _interopRequireDefault(require("./schemas/pointSchema"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var JobPostingSchema = new _mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  company: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Company',
    required: true
  },
  location: {
    type: _pointSchema["default"],
    required: true
  },
  filled: {
    type: Boolean,
    "default": false
  },
  dressCode: {
    type: String,
    required: true
  },
  requiredSkills: {
    type: String,
    required: true
  },
  requiredCertifications: {
    type: String,
    required: true
  },
  start: {
    type: Date,
    required: true
  },
  end: {
    type: Date,
    required: true
  },
  dayOfWeek: {
    type: String,
    required: false
  },
  type: {
    type: String,
    required: true
  },
  payment: {
    type: Number,
    required: true
  },
  applications: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'JobApplication',
    select: false
  }]
}, {
  timestamps: true
});

// JobPostingSchema.pre('save', async function (next) {
// 	console.log('HELLO MOTORS')
// 	try {
// 		const job = this // assumes IJobPosting is your TypeScript interface for the job model
// 		if (!job.dayOfWeek) {
// 			const start = moment(job.start)
// 			job.dayOfWeek = start.format('dddd')
// 		}
// 		next()
// 	} catch (error: any) {
// 		next(error)
// 	}
// })

JobPostingSchema.pre('save', function (next) {
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  console.log('hello');
  this.dayOfWeek = days[this.start.getDay()];
  next();
});
JobPostingSchema.index({
  location: '2dsphere'
});
var _default = _mongoose["default"].model('JobPosting', JobPostingSchema);
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9uZ29vc2UiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfcG9pbnRTY2hlbWEiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0Iiwib2JqIiwiX19lc01vZHVsZSIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsIm5vZGVJbnRlcm9wIiwiV2Vha01hcCIsImNhY2hlQmFiZWxJbnRlcm9wIiwiY2FjaGVOb2RlSW50ZXJvcCIsIl90eXBlb2YiLCJjYWNoZSIsImhhcyIsImdldCIsIm5ld09iaiIsImhhc1Byb3BlcnR5RGVzY3JpcHRvciIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwia2V5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiZGVzYyIsInNldCIsIkpvYlBvc3RpbmdTY2hlbWEiLCJTY2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiZGVzY3JpcHRpb24iLCJjb21wYW55IiwiVHlwZXMiLCJPYmplY3RJZCIsInJlZiIsImxvY2F0aW9uIiwicG9pbnRTY2hlbWEiLCJmaWxsZWQiLCJCb29sZWFuIiwiZHJlc3NDb2RlIiwicmVxdWlyZWRTa2lsbHMiLCJyZXF1aXJlZENlcnRpZmljYXRpb25zIiwic3RhcnQiLCJEYXRlIiwiZW5kIiwiZGF5T2ZXZWVrIiwicGF5bWVudCIsIk51bWJlciIsImFwcGxpY2F0aW9ucyIsInNlbGVjdCIsInRpbWVzdGFtcHMiLCJwcmUiLCJuZXh0IiwiZGF5cyIsImNvbnNvbGUiLCJsb2ciLCJnZXREYXkiLCJpbmRleCIsIl9kZWZhdWx0IiwibW9uZ29vc2UiLCJtb2RlbCIsImV4cG9ydHMiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL21vZGVscy9Kb2JQb3N0aW5nTW9kZWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlLCB7IFNjaGVtYSB9IGZyb20gJ21vbmdvb3NlJ1xuXG5pbXBvcnQgeyBJSm9iUG9zdGluZyB9IGZyb20gJy4uL2ludGVyZmFjZXMvbW9kZWxzL0pvYlBvc3RpbmcnXG5cbmltcG9ydCBwb2ludFNjaGVtYSBmcm9tICcuL3NjaGVtYXMvcG9pbnRTY2hlbWEnXG5cbmNvbnN0IEpvYlBvc3RpbmdTY2hlbWEgPSBuZXcgU2NoZW1hKFxuXHR7XG5cdFx0bmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG5cdFx0ZGVzY3JpcHRpb246IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuXHRcdGNvbXBhbnk6IHsgdHlwZTogU2NoZW1hLlR5cGVzLk9iamVjdElkLCByZWY6ICdDb21wYW55JywgcmVxdWlyZWQ6IHRydWUgfSxcblx0XHRsb2NhdGlvbjoge1xuXHRcdFx0dHlwZTogcG9pbnRTY2hlbWEsXG5cdFx0XHRyZXF1aXJlZDogdHJ1ZSxcblx0XHR9LFxuXHRcdGZpbGxlZDogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiBmYWxzZSB9LFxuXHRcdGRyZXNzQ29kZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG5cdFx0cmVxdWlyZWRTa2lsbHM6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuXHRcdHJlcXVpcmVkQ2VydGlmaWNhdGlvbnM6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuXHRcdHN0YXJ0OiB7IHR5cGU6IERhdGUsIHJlcXVpcmVkOiB0cnVlIH0sXG5cdFx0ZW5kOiB7IHR5cGU6IERhdGUsIHJlcXVpcmVkOiB0cnVlIH0sXG5cdFx0ZGF5T2ZXZWVrOiB7XG5cdFx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0XHRyZXF1aXJlZDogZmFsc2UsXG5cdFx0fSxcblx0XHR0eXBlOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcblx0XHRwYXltZW50OiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUgfSxcblx0XHRhcHBsaWNhdGlvbnM6IFtcblx0XHRcdHtcblx0XHRcdFx0dHlwZTogU2NoZW1hLlR5cGVzLk9iamVjdElkLFxuXHRcdFx0XHRyZWY6ICdKb2JBcHBsaWNhdGlvbicsXG5cdFx0XHRcdHNlbGVjdDogZmFsc2UsXG5cdFx0XHR9LFxuXHRcdF0sXG5cdH0sXG5cdHtcblx0XHR0aW1lc3RhbXBzOiB0cnVlLFxuXHR9XG4pXG5cbi8vIEpvYlBvc3RpbmdTY2hlbWEucHJlKCdzYXZlJywgYXN5bmMgZnVuY3Rpb24gKG5leHQpIHtcbi8vIFx0Y29uc29sZS5sb2coJ0hFTExPIE1PVE9SUycpXG4vLyBcdHRyeSB7XG4vLyBcdFx0Y29uc3Qgam9iID0gdGhpcyAvLyBhc3N1bWVzIElKb2JQb3N0aW5nIGlzIHlvdXIgVHlwZVNjcmlwdCBpbnRlcmZhY2UgZm9yIHRoZSBqb2IgbW9kZWxcbi8vIFx0XHRpZiAoIWpvYi5kYXlPZldlZWspIHtcbi8vIFx0XHRcdGNvbnN0IHN0YXJ0ID0gbW9tZW50KGpvYi5zdGFydClcbi8vIFx0XHRcdGpvYi5kYXlPZldlZWsgPSBzdGFydC5mb3JtYXQoJ2RkZGQnKVxuLy8gXHRcdH1cbi8vIFx0XHRuZXh0KClcbi8vIFx0fSBjYXRjaCAoZXJyb3I6IGFueSkge1xuLy8gXHRcdG5leHQoZXJyb3IpXG4vLyBcdH1cbi8vIH0pXG5cbkpvYlBvc3RpbmdTY2hlbWEucHJlKCdzYXZlJywgZnVuY3Rpb24gKG5leHQpIHtcblx0Y29uc3QgZGF5cyA9IFtcblx0XHQnU3VuZGF5Jyxcblx0XHQnTW9uZGF5Jyxcblx0XHQnVHVlc2RheScsXG5cdFx0J1dlZG5lc2RheScsXG5cdFx0J1RodXJzZGF5Jyxcblx0XHQnRnJpZGF5Jyxcblx0XHQnU2F0dXJkYXknLFxuXHRdXG5cdGNvbnNvbGUubG9nKCdoZWxsbycpXG5cdHRoaXMuZGF5T2ZXZWVrID0gZGF5c1t0aGlzLnN0YXJ0LmdldERheSgpXVxuXHRuZXh0KClcbn0pXG5cbkpvYlBvc3RpbmdTY2hlbWEuaW5kZXgoeyBsb2NhdGlvbjogJzJkc3BoZXJlJyB9KVxuXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbDxJSm9iUG9zdGluZz4oJ0pvYlBvc3RpbmcnLCBKb2JQb3N0aW5nU2NoZW1hKVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsSUFBQUEsU0FBQSxHQUFBQyx1QkFBQSxDQUFBQyxPQUFBO0FBSUEsSUFBQUMsWUFBQSxHQUFBQyxzQkFBQSxDQUFBRixPQUFBO0FBQStDLFNBQUFFLHVCQUFBQyxHQUFBLFdBQUFBLEdBQUEsSUFBQUEsR0FBQSxDQUFBQyxVQUFBLEdBQUFELEdBQUEsZ0JBQUFBLEdBQUE7QUFBQSxTQUFBRSx5QkFBQUMsV0FBQSxlQUFBQyxPQUFBLGtDQUFBQyxpQkFBQSxPQUFBRCxPQUFBLFFBQUFFLGdCQUFBLE9BQUFGLE9BQUEsWUFBQUYsd0JBQUEsWUFBQUEseUJBQUFDLFdBQUEsV0FBQUEsV0FBQSxHQUFBRyxnQkFBQSxHQUFBRCxpQkFBQSxLQUFBRixXQUFBO0FBQUEsU0FBQVAsd0JBQUFJLEdBQUEsRUFBQUcsV0FBQSxTQUFBQSxXQUFBLElBQUFILEdBQUEsSUFBQUEsR0FBQSxDQUFBQyxVQUFBLFdBQUFELEdBQUEsUUFBQUEsR0FBQSxhQUFBTyxPQUFBLENBQUFQLEdBQUEseUJBQUFBLEdBQUEsdUNBQUFBLEdBQUEsVUFBQVEsS0FBQSxHQUFBTix3QkFBQSxDQUFBQyxXQUFBLE9BQUFLLEtBQUEsSUFBQUEsS0FBQSxDQUFBQyxHQUFBLENBQUFULEdBQUEsWUFBQVEsS0FBQSxDQUFBRSxHQUFBLENBQUFWLEdBQUEsU0FBQVcsTUFBQSxXQUFBQyxxQkFBQSxHQUFBQyxNQUFBLENBQUFDLGNBQUEsSUFBQUQsTUFBQSxDQUFBRSx3QkFBQSxXQUFBQyxHQUFBLElBQUFoQixHQUFBLFFBQUFnQixHQUFBLGtCQUFBSCxNQUFBLENBQUFJLFNBQUEsQ0FBQUMsY0FBQSxDQUFBQyxJQUFBLENBQUFuQixHQUFBLEVBQUFnQixHQUFBLFNBQUFJLElBQUEsR0FBQVIscUJBQUEsR0FBQUMsTUFBQSxDQUFBRSx3QkFBQSxDQUFBZixHQUFBLEVBQUFn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