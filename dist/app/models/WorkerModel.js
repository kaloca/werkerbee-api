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
  // ssn: { type: String, required: false, unique: false, select: false },
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
  accountStatus: {
    type: String,
    "enum": ['APPROVED', 'PENDING', 'REJECTED'],
    required: false,
    "default": 'PENDING'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9uZ29vc2UiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfYWRkcmVzc1NjaGVtYSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfYmFua0FjY291bnRTY2hlbWEiLCJfcG9pbnRTY2hlbWEiLCJfQ2VydGlmaWNhdGlvbk1vZGVsIiwib2JqIiwiX19lc01vZHVsZSIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsIm5vZGVJbnRlcm9wIiwiV2Vha01hcCIsImNhY2hlQmFiZWxJbnRlcm9wIiwiY2FjaGVOb2RlSW50ZXJvcCIsIl90eXBlb2YiLCJjYWNoZSIsImhhcyIsImdldCIsIm5ld09iaiIsImhhc1Byb3BlcnR5RGVzY3JpcHRvciIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwia2V5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiZGVzYyIsInNldCIsImV4cGVyaWVuY2VTY2hlbWEiLCJTY2hlbWEiLCJjb21wYW55IiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiam9iVHlwZSIsInN0YXJ0RGF0ZSIsIkRhdGUiLCJlbmREYXRlIiwid29ya2VyU2NoZW1hIiwibmFtZSIsInVzZXJuYW1lIiwidW5pcXVlIiwiYmlvIiwicGhvbmVOdW1iZXIiLCJlbWFpbCIsImxvY2F0aW9uIiwicG9pbnRTY2hlbWEiLCJhZGRyZXNzIiwiYWRkcmVzc1NjaGVtYSIsInNlbGVjdCIsImJpbGxpbmdBZGRyZXNzIiwiYmFua0luZm8iLCJiYW5rQWNjb3VudFNjaGVtYSIsImJpcnRoZGF5IiwicmF0aW5nIiwiTnVtYmVyIiwiam9iVHlwZXMiLCJleHBlcmllbmNlcyIsImNlcnRpZmljYXRpb25zIiwiQ2VydGlmaWNhdGlvblNjaGVtYSIsInByb2ZpbGVQaWN0dXJlIiwiYWNjb3VudFN0YXR1cyIsImhhc2hlZFBhc3N3b3JkIiwidGltZXN0YW1wcyIsImluZGV4IiwiX2RlZmF1bHQiLCJtb25nb29zZSIsIm1vZGVsIiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvbW9kZWxzL1dvcmtlck1vZGVsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSwgeyBTY2hlbWEgfSBmcm9tICdtb25nb29zZSdcblxuaW1wb3J0IHsgSVdvcmtlciB9IGZyb20gJy4uL2ludGVyZmFjZXMvbW9kZWxzL1dvcmtlcidcbmltcG9ydCBhZGRyZXNzU2NoZW1hIGZyb20gJy4vc2NoZW1hcy9hZGRyZXNzU2NoZW1hJ1xuaW1wb3J0IGJhbmtBY2NvdW50U2NoZW1hIGZyb20gJy4vc2NoZW1hcy9iYW5rQWNjb3VudFNjaGVtYSdcbmltcG9ydCBwb2ludFNjaGVtYSBmcm9tICcuL3NjaGVtYXMvcG9pbnRTY2hlbWEnXG5pbXBvcnQgeyBDZXJ0aWZpY2F0aW9uU2NoZW1hIH0gZnJvbSAnLi9DZXJ0aWZpY2F0aW9uTW9kZWwnXG5cbmNvbnN0IGV4cGVyaWVuY2VTY2hlbWE6IFNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuXHRjb21wYW55OiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcblx0am9iVHlwZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG5cdHN0YXJ0RGF0ZTogeyB0eXBlOiBEYXRlLCByZXF1aXJlZDogdHJ1ZSB9LFxuXHRlbmREYXRlOiB7IHR5cGU6IERhdGUsIHJlcXVpcmVkOiB0cnVlIH0sXG59KVxuXG5jb25zdCB3b3JrZXJTY2hlbWE6IFNjaGVtYSA9IG5ldyBTY2hlbWEoXG5cdHtcblx0XHRuYW1lOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcblx0XHR1c2VybmFtZToge1xuXHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0cmVxdWlyZWQ6IHRydWUsXG5cdFx0XHR1bmlxdWU6IHRydWUsXG5cdFx0fSxcblx0XHRiaW86IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogZmFsc2UgfSxcblx0XHRwaG9uZU51bWJlcjogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB1bmlxdWU6IHRydWUgfSxcblx0XHRlbWFpbDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB1bmlxdWU6IHRydWUgfSxcblx0XHRsb2NhdGlvbjogeyB0eXBlOiBwb2ludFNjaGVtYSwgcmVxdWlyZWQ6IHRydWUgfSxcblx0XHRhZGRyZXNzOiB7IHR5cGU6IGFkZHJlc3NTY2hlbWEsIHJlcXVpcmVkOiB0cnVlLCBzZWxlY3Q6IGZhbHNlIH0sXG5cdFx0YmlsbGluZ0FkZHJlc3M6IHsgdHlwZTogYWRkcmVzc1NjaGVtYSwgcmVxdWlyZWQ6IGZhbHNlLCBzZWxlY3Q6IGZhbHNlIH0sXG5cdFx0YmFua0luZm86IHsgdHlwZTogYmFua0FjY291bnRTY2hlbWEsIHJlcXVpcmVkOiBmYWxzZSwgc2VsZWN0OiBmYWxzZSB9LFxuXHRcdC8vIHNzbjogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiBmYWxzZSwgdW5pcXVlOiBmYWxzZSwgc2VsZWN0OiBmYWxzZSB9LFxuXHRcdGJpcnRoZGF5OiB7IHR5cGU6IERhdGUsIHJlcXVpcmVkOiB0cnVlIH0sXG5cdFx0cmF0aW5nOiB7IHR5cGU6IE51bWJlciwgZGVmYXVsdDogbnVsbCB9LFxuXHRcdGpvYlR5cGVzOiB7IHR5cGU6IFtTdHJpbmddLCByZXF1aXJlZDogdHJ1ZSB9LFxuXHRcdGV4cGVyaWVuY2VzOiB7IHR5cGU6IFtleHBlcmllbmNlU2NoZW1hXSwgcmVxdWlyZWQ6IGZhbHNlIH0sXG5cdFx0Y2VydGlmaWNhdGlvbnM6IHsgdHlwZTogW0NlcnRpZmljYXRpb25TY2hlbWFdLCByZXF1aXJlZDogZmFsc2UgfSxcblx0XHRwcm9maWxlUGljdHVyZToge1xuXHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdH0sXG5cdFx0YWNjb3VudFN0YXR1czoge1xuXHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0ZW51bTogWydBUFBST1ZFRCcsICdQRU5ESU5HJywgJ1JFSkVDVEVEJ10sXG5cdFx0XHRyZXF1aXJlZDogZmFsc2UsXG5cdFx0XHRkZWZhdWx0OiAnUEVORElORycsXG5cdFx0fSxcblx0XHRoYXNoZWRQYXNzd29yZDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCBzZWxlY3Q6IGZhbHNlIH0sXG5cdFx0Ly8gZG9jdW1lbnRzOiB7IHR5cGU6IEJ1ZmZlciwgcmVxdWlyZWQ6IHRydWUgfSxcblx0fSxcblx0eyB0aW1lc3RhbXBzOiB0cnVlIH1cbilcblxud29ya2VyU2NoZW1hLmluZGV4KHsgbG9jYXRpb246ICcyZHNwaGVyZScgfSlcblxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWw8SVdvcmtlcj4oJ1dvcmtlcicsIHdvcmtlclNjaGVtYSlcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLElBQUFBLFNBQUEsR0FBQUMsdUJBQUEsQ0FBQUMsT0FBQTtBQUdBLElBQUFDLGNBQUEsR0FBQUMsc0JBQUEsQ0FBQUYsT0FBQTtBQUNBLElBQUFHLGtCQUFBLEdBQUFELHNCQUFBLENBQUFGLE9BQUE7QUFDQSxJQUFBSSxZQUFBLEdBQUFGLHNCQUFBLENBQUFGLE9BQUE7QUFDQSxJQUFBSyxtQkFBQSxHQUFBTCxPQUFBO0FBQTBELFNBQUFFLHVCQUFBSSxHQUFBLFdBQUFBLEdBQUEsSUFBQUEsR0FBQSxDQUFBQyxVQUFBLEdBQUFELEdBQUEsZ0JBQUFBLEdBQUE7QUFBQSxTQUFBRSx5QkFBQUMsV0FBQSxlQUFBQyxPQUFBLGtDQUFBQyxpQkFBQSxPQUFBRCxPQUFBLFFBQUFFLGdCQUFBLE9BQUFGLE9BQUEsWUFBQUYsd0JBQUEsWUFBQUEseUJBQUFDLFdBQUEsV0FBQUEsV0FBQSxHQUFBRyxnQkFBQSxHQUFBRCxpQkFBQSxLQUFBRixXQUFBO0FBQUEsU0FBQVYsd0JBQUFPLEdBQUEsRUFBQUcsV0FBQSxTQUFBQSxXQUFBLElBQUFILEdBQUEsSUFBQUEsR0FBQSxDQUFBQyxVQUFBLFdBQUFELEdBQUEsUUFBQUEsR0FBQSxhQUFBTyxPQUFBLENBQUFQLEdBQUEs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