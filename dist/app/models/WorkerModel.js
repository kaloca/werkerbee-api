"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireWildcard(require("mongoose"));
var _addressSchema = _interopRequireDefault(require("./schemas/addressSchema"));
var _bankAccountSchema = _interopRequireDefault(require("./schemas/bankAccountSchema"));
var _pointSchema = _interopRequireDefault(require("./schemas/pointSchema"));
var _CertificationModel = require("./CertificationModel");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var experienceSchema = new _mongoose.Schema({
  company: {
    type: String,
    required: true
  },
  jobType: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  }
});
var workerSchema = new _mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  bio: {
    type: String,
    required: false
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  location: {
    type: _pointSchema["default"],
    required: true
  },
  address: {
    type: _addressSchema["default"],
    required: true,
    select: false
  },
  billingAddress: {
    type: _addressSchema["default"],
    required: false,
    select: false
  },
  bankInfo: {
    type: _bankAccountSchema["default"],
    required: false,
    select: false
  },
  ssn: {
    type: String,
    required: true,
    unique: true,
    select: false
  },
  birthday: {
    type: Date,
    required: true
  },
  rating: {
    type: Number,
    "default": null
  },
  jobTypes: {
    type: [String],
    required: true
  },
  experiences: {
    type: [experienceSchema],
    required: false
  },
  certifications: {
    type: [_CertificationModel.CertificationSchema],
    required: false
  },
  profilePicture: {
    type: String
  },
  hashedPassword: {
    type: String,
    required: true,
    select: false
  }
  // documents: { type: Buffer, required: true },
}, {
  timestamps: true
});
workerSchema.index({
  location: '2dsphere'
});
var _default = _mongoose["default"].model('Worker', workerSchema);
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9uZ29vc2UiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfYWRkcmVzc1NjaGVtYSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfYmFua0FjY291bnRTY2hlbWEiLCJfcG9pbnRTY2hlbWEiLCJfQ2VydGlmaWNhdGlvbk1vZGVsIiwib2JqIiwiX19lc01vZHVsZSIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsIm5vZGVJbnRlcm9wIiwiV2Vha01hcCIsImNhY2hlQmFiZWxJbnRlcm9wIiwiY2FjaGVOb2RlSW50ZXJvcCIsIl90eXBlb2YiLCJjYWNoZSIsImhhcyIsImdldCIsIm5ld09iaiIsImhhc1Byb3BlcnR5RGVzY3JpcHRvciIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwia2V5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiZGVzYyIsInNldCIsImV4cGVyaWVuY2VTY2hlbWEiLCJTY2hlbWEiLCJjb21wYW55IiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiam9iVHlwZSIsInN0YXJ0RGF0ZSIsIkRhdGUiLCJlbmREYXRlIiwid29ya2VyU2NoZW1hIiwibmFtZSIsInVzZXJuYW1lIiwidW5pcXVlIiwiYmlvIiwicGhvbmVOdW1iZXIiLCJlbWFpbCIsImxvY2F0aW9uIiwicG9pbnRTY2hlbWEiLCJhZGRyZXNzIiwiYWRkcmVzc1NjaGVtYSIsInNlbGVjdCIsImJpbGxpbmdBZGRyZXNzIiwiYmFua0luZm8iLCJiYW5rQWNjb3VudFNjaGVtYSIsInNzbiIsImJpcnRoZGF5IiwicmF0aW5nIiwiTnVtYmVyIiwiam9iVHlwZXMiLCJleHBlcmllbmNlcyIsImNlcnRpZmljYXRpb25zIiwiQ2VydGlmaWNhdGlvblNjaGVtYSIsInByb2ZpbGVQaWN0dXJlIiwiaGFzaGVkUGFzc3dvcmQiLCJ0aW1lc3RhbXBzIiwiaW5kZXgiLCJfZGVmYXVsdCIsIm1vbmdvb3NlIiwibW9kZWwiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9tb2RlbHMvV29ya2VyTW9kZWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlLCB7IFNjaGVtYSB9IGZyb20gJ21vbmdvb3NlJ1xuXG5pbXBvcnQgeyBJV29ya2VyIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9tb2RlbHMvV29ya2VyJ1xuaW1wb3J0IGFkZHJlc3NTY2hlbWEgZnJvbSAnLi9zY2hlbWFzL2FkZHJlc3NTY2hlbWEnXG5pbXBvcnQgYmFua0FjY291bnRTY2hlbWEgZnJvbSAnLi9zY2hlbWFzL2JhbmtBY2NvdW50U2NoZW1hJ1xuaW1wb3J0IHBvaW50U2NoZW1hIGZyb20gJy4vc2NoZW1hcy9wb2ludFNjaGVtYSdcbmltcG9ydCB7IENlcnRpZmljYXRpb25TY2hlbWEgfSBmcm9tICcuL0NlcnRpZmljYXRpb25Nb2RlbCdcblxuY29uc3QgZXhwZXJpZW5jZVNjaGVtYTogU2NoZW1hID0gbmV3IFNjaGVtYSh7XG5cdGNvbXBhbnk6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuXHRqb2JUeXBlOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcblx0c3RhcnREYXRlOiB7IHR5cGU6IERhdGUsIHJlcXVpcmVkOiB0cnVlIH0sXG5cdGVuZERhdGU6IHsgdHlwZTogRGF0ZSwgcmVxdWlyZWQ6IHRydWUgfSxcbn0pXG5cbmNvbnN0IHdvcmtlclNjaGVtYTogU2NoZW1hID0gbmV3IFNjaGVtYShcblx0e1xuXHRcdG5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuXHRcdHVzZXJuYW1lOiB7XG5cdFx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0XHRyZXF1aXJlZDogdHJ1ZSxcblx0XHRcdHVuaXF1ZTogdHJ1ZSxcblx0XHR9LFxuXHRcdGJpbzogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiBmYWxzZSB9LFxuXHRcdHBob25lTnVtYmVyOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIHVuaXF1ZTogdHJ1ZSB9LFxuXHRcdGVtYWlsOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIHVuaXF1ZTogdHJ1ZSB9LFxuXHRcdGxvY2F0aW9uOiB7IHR5cGU6IHBvaW50U2NoZW1hLCByZXF1aXJlZDogdHJ1ZSB9LFxuXHRcdGFkZHJlc3M6IHsgdHlwZTogYWRkcmVzc1NjaGVtYSwgcmVxdWlyZWQ6IHRydWUsIHNlbGVjdDogZmFsc2UgfSxcblx0XHRiaWxsaW5nQWRkcmVzczogeyB0eXBlOiBhZGRyZXNzU2NoZW1hLCByZXF1aXJlZDogZmFsc2UsIHNlbGVjdDogZmFsc2UgfSxcblx0XHRiYW5rSW5mbzogeyB0eXBlOiBiYW5rQWNjb3VudFNjaGVtYSwgcmVxdWlyZWQ6IGZhbHNlLCBzZWxlY3Q6IGZhbHNlIH0sXG5cdFx0c3NuOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIHVuaXF1ZTogdHJ1ZSwgc2VsZWN0OiBmYWxzZSB9LFxuXHRcdGJpcnRoZGF5OiB7IHR5cGU6IERhdGUsIHJlcXVpcmVkOiB0cnVlIH0sXG5cdFx0cmF0aW5nOiB7IHR5cGU6IE51bWJlciwgZGVmYXVsdDogbnVsbCB9LFxuXHRcdGpvYlR5cGVzOiB7IHR5cGU6IFtTdHJpbmddLCByZXF1aXJlZDogdHJ1ZSB9LFxuXHRcdGV4cGVyaWVuY2VzOiB7IHR5cGU6IFtleHBlcmllbmNlU2NoZW1hXSwgcmVxdWlyZWQ6IGZhbHNlIH0sXG5cdFx0Y2VydGlmaWNhdGlvbnM6IHsgdHlwZTogW0NlcnRpZmljYXRpb25TY2hlbWFdLCByZXF1aXJlZDogZmFsc2UgfSxcblx0XHRwcm9maWxlUGljdHVyZToge1xuXHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdH0sXG5cdFx0aGFzaGVkUGFzc3dvcmQ6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgc2VsZWN0OiBmYWxzZSB9LFxuXHRcdC8vIGRvY3VtZW50czogeyB0eXBlOiBCdWZmZXIsIHJlcXVpcmVkOiB0cnVlIH0sXG5cdH0sXG5cdHsgdGltZXN0YW1wczogdHJ1ZSB9XG4pXG5cbndvcmtlclNjaGVtYS5pbmRleCh7IGxvY2F0aW9uOiAnMmRzcGhlcmUnIH0pXG5cbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVsPElXb3JrZXI+KCdXb3JrZXInLCB3b3JrZXJTY2hlbWEpXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxJQUFBQSxTQUFBLEdBQUFDLHVCQUFBLENBQUFDLE9BQUE7QUFHQSxJQUFBQyxjQUFBLEdBQUFDLHNCQUFBLENBQUFGLE9BQUE7QUFDQSxJQUFBRyxrQkFBQSxHQUFBRCxzQkFBQSxDQUFBRixPQUFBO0FBQ0EsSUFBQUksWUFBQSxHQUFBRixzQkFBQSxDQUFBRixPQUFBO0FBQ0EsSUFBQUssbUJBQUEsR0FBQUwsT0FBQTtBQUEwRCxTQUFBRSx1QkFBQUksR0FBQSxXQUFBQSxHQUFBLElBQUFBLEdBQUEsQ0FBQUMsVUFBQSxHQUFBRCxHQUFBLGdCQUFBQSxHQUFBO0FBQUEsU0FBQUUseUJBQUFDLFdBQUEsZUFBQUMsT0FBQSxrQ0FBQUMsaUJBQUEsT0FBQUQsT0FBQSxRQUFBRSxnQkFBQSxPQUFBRixPQUFBLFlBQUFGLHdCQUFBLFlBQUFBLHlCQUFBQyxXQUFBLFdBQUFBLFdBQUEsR0FBQUcsZ0JBQUEsR0FBQUQsaUJBQUEsS0FBQUYsV0FBQTtBQUFBLFNBQUFWLHdCQUFBTyxHQUFBLEVBQUFHLFdBQUEsU0FBQUEsV0FBQSxJQUFBSCxHQUFBLElBQUFBLEdBQUEsQ0FBQUMsVUFBQSxXQUFBRCxHQUFBLFFBQUFBLEdBQUEsYUFBQU8sT0FBQSxDQUFBUCxHQUFBLHlCQUFBQSxHQUFBLHVDQUFBQSxHQUFBLFVBQUFRLEtBQUEsR0FBQU4sd0JBQUEsQ0FBQUMsV0FBQSxPQUFBSyxLQUFBLElBQUFBLEtBQUEsQ0FBQUMsR0FBQSxDQUFBVCxHQUFBLFlBQUFRLEtBQUEsQ0FBQUUsR0FBQSxDQUFBVixHQUFBLFNBQUFXLE1BQUEsV0FBQUMscUJBQUEsR0FBQUMsTUFB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