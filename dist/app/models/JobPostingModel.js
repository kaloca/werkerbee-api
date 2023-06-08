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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9uZ29vc2UiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfcG9pbnRTY2hlbWEiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0Iiwib2JqIiwiX19lc01vZHVsZSIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsIm5vZGVJbnRlcm9wIiwiV2Vha01hcCIsImNhY2hlQmFiZWxJbnRlcm9wIiwiY2FjaGVOb2RlSW50ZXJvcCIsIl90eXBlb2YiLCJjYWNoZSIsImhhcyIsImdldCIsIm5ld09iaiIsImhhc1Byb3BlcnR5RGVzY3JpcHRvciIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwia2V5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiZGVzYyIsInNldCIsIkpvYlBvc3RpbmdTY2hlbWEiLCJTY2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiZGVzY3JpcHRpb24iLCJjb21wYW55IiwiVHlwZXMiLCJPYmplY3RJZCIsInJlZiIsImxvY2F0aW9uIiwicG9pbnRTY2hlbWEiLCJkcmVzc0NvZGUiLCJyZXF1aXJlZFNraWxscyIsInJlcXVpcmVkQ2VydGlmaWNhdGlvbnMiLCJzdGFydCIsIkRhdGUiLCJlbmQiLCJkYXlPZldlZWsiLCJwYXltZW50IiwiTnVtYmVyIiwiYXBwbGljYXRpb25zIiwic2VsZWN0IiwidGltZXN0YW1wcyIsInByZSIsIm5leHQiLCJkYXlzIiwiY29uc29sZSIsImxvZyIsImdldERheSIsImluZGV4IiwiX2RlZmF1bHQiLCJtb25nb29zZSIsIm1vZGVsIiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvbW9kZWxzL0pvYlBvc3RpbmdNb2RlbC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UsIHsgU2NoZW1hIH0gZnJvbSAnbW9uZ29vc2UnXG5cbmltcG9ydCB7IElKb2JQb3N0aW5nIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9tb2RlbHMvSm9iUG9zdGluZydcblxuaW1wb3J0IHBvaW50U2NoZW1hIGZyb20gJy4vc2NoZW1hcy9wb2ludFNjaGVtYSdcblxuY29uc3QgSm9iUG9zdGluZ1NjaGVtYSA9IG5ldyBTY2hlbWEoXG5cdHtcblx0XHRuYW1lOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcblx0XHRkZXNjcmlwdGlvbjogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG5cdFx0Y29tcGFueTogeyB0eXBlOiBTY2hlbWEuVHlwZXMuT2JqZWN0SWQsIHJlZjogJ0NvbXBhbnknLCByZXF1aXJlZDogdHJ1ZSB9LFxuXHRcdGxvY2F0aW9uOiB7XG5cdFx0XHR0eXBlOiBwb2ludFNjaGVtYSxcblx0XHRcdHJlcXVpcmVkOiB0cnVlLFxuXHRcdH0sXG5cdFx0ZHJlc3NDb2RlOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcblx0XHRyZXF1aXJlZFNraWxsczogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG5cdFx0cmVxdWlyZWRDZXJ0aWZpY2F0aW9uczogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG5cdFx0c3RhcnQ6IHsgdHlwZTogRGF0ZSwgcmVxdWlyZWQ6IHRydWUgfSxcblx0XHRlbmQ6IHsgdHlwZTogRGF0ZSwgcmVxdWlyZWQ6IHRydWUgfSxcblx0XHRkYXlPZldlZWs6IHtcblx0XHRcdHR5cGU6IFN0cmluZyxcblx0XHRcdHJlcXVpcmVkOiBmYWxzZSxcblx0XHR9LFxuXHRcdHR5cGU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuXHRcdHBheW1lbnQ6IHsgdHlwZTogTnVtYmVyLCByZXF1aXJlZDogdHJ1ZSB9LFxuXHRcdGFwcGxpY2F0aW9uczogW1xuXHRcdFx0e1xuXHRcdFx0XHR0eXBlOiBTY2hlbWEuVHlwZXMuT2JqZWN0SWQsXG5cdFx0XHRcdHJlZjogJ0pvYkFwcGxpY2F0aW9uJyxcblx0XHRcdFx0c2VsZWN0OiBmYWxzZSxcblx0XHRcdH0sXG5cdFx0XSxcblx0fSxcblx0e1xuXHRcdHRpbWVzdGFtcHM6IHRydWUsXG5cdH1cbilcblxuLy8gSm9iUG9zdGluZ1NjaGVtYS5wcmUoJ3NhdmUnLCBhc3luYyBmdW5jdGlvbiAobmV4dCkge1xuLy8gXHRjb25zb2xlLmxvZygnSEVMTE8gTU9UT1JTJylcbi8vIFx0dHJ5IHtcbi8vIFx0XHRjb25zdCBqb2IgPSB0aGlzIC8vIGFzc3VtZXMgSUpvYlBvc3RpbmcgaXMgeW91ciBUeXBlU2NyaXB0IGludGVyZmFjZSBmb3IgdGhlIGpvYiBtb2RlbFxuLy8gXHRcdGlmICgham9iLmRheU9mV2Vlaykge1xuLy8gXHRcdFx0Y29uc3Qgc3RhcnQgPSBtb21lbnQoam9iLnN0YXJ0KVxuLy8gXHRcdFx0am9iLmRheU9mV2VlayA9IHN0YXJ0LmZvcm1hdCgnZGRkZCcpXG4vLyBcdFx0fVxuLy8gXHRcdG5leHQoKVxuLy8gXHR9IGNhdGNoIChlcnJvcjogYW55KSB7XG4vLyBcdFx0bmV4dChlcnJvcilcbi8vIFx0fVxuLy8gfSlcblxuSm9iUG9zdGluZ1NjaGVtYS5wcmUoJ3NhdmUnLCBmdW5jdGlvbiAobmV4dCkge1xuXHRjb25zdCBkYXlzID0gW1xuXHRcdCdTdW5kYXknLFxuXHRcdCdNb25kYXknLFxuXHRcdCdUdWVzZGF5Jyxcblx0XHQnV2VkbmVzZGF5Jyxcblx0XHQnVGh1cnNkYXknLFxuXHRcdCdGcmlkYXknLFxuXHRcdCdTYXR1cmRheScsXG5cdF1cblx0Y29uc29sZS5sb2coJ2hlbGxvJylcblx0dGhpcy5kYXlPZldlZWsgPSBkYXlzW3RoaXMuc3RhcnQuZ2V0RGF5KCldXG5cdG5leHQoKVxufSlcblxuSm9iUG9zdGluZ1NjaGVtYS5pbmRleCh7IGxvY2F0aW9uOiAnMmRzcGhlcmUnIH0pXG5cbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVsPElKb2JQb3N0aW5nPignSm9iUG9zdGluZycsIEpvYlBvc3RpbmdTY2hl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