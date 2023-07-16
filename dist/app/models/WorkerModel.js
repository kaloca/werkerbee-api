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
    required: false,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9uZ29vc2UiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfYWRkcmVzc1NjaGVtYSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfYmFua0FjY291bnRTY2hlbWEiLCJfcG9pbnRTY2hlbWEiLCJfQ2VydGlmaWNhdGlvbk1vZGVsIiwib2JqIiwiX19lc01vZHVsZSIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsIm5vZGVJbnRlcm9wIiwiV2Vha01hcCIsImNhY2hlQmFiZWxJbnRlcm9wIiwiY2FjaGVOb2RlSW50ZXJvcCIsIl90eXBlb2YiLCJjYWNoZSIsImhhcyIsImdldCIsIm5ld09iaiIsImhhc1Byb3BlcnR5RGVzY3JpcHRvciIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwia2V5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiZGVzYyIsInNldCIsImV4cGVyaWVuY2VTY2hlbWEiLCJTY2hlbWEiLCJjb21wYW55IiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiam9iVHlwZSIsInN0YXJ0RGF0ZSIsIkRhdGUiLCJlbmREYXRlIiwid29ya2VyU2NoZW1hIiwibmFtZSIsInVzZXJuYW1lIiwidW5pcXVlIiwiYmlvIiwicGhvbmVOdW1iZXIiLCJlbWFpbCIsImxvY2F0aW9uIiwicG9pbnRTY2hlbWEiLCJhZGRyZXNzIiwiYWRkcmVzc1NjaGVtYSIsInNlbGVjdCIsImJpbGxpbmdBZGRyZXNzIiwiYmFua0luZm8iLCJiYW5rQWNjb3VudFNjaGVtYSIsInNzbiIsImJpcnRoZGF5IiwicmF0aW5nIiwiTnVtYmVyIiwiam9iVHlwZXMiLCJleHBlcmllbmNlcyIsImNlcnRpZmljYXRpb25zIiwiQ2VydGlmaWNhdGlvblNjaGVtYSIsInByb2ZpbGVQaWN0dXJlIiwiYWNjb3VudFN0YXR1cyIsImhhc2hlZFBhc3N3b3JkIiwidGltZXN0YW1wcyIsImluZGV4IiwiX2RlZmF1bHQiLCJtb25nb29zZSIsIm1vZGVsIiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvbW9kZWxzL1dvcmtlck1vZGVsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSwgeyBTY2hlbWEgfSBmcm9tICdtb25nb29zZSdcblxuaW1wb3J0IHsgSVdvcmtlciB9IGZyb20gJy4uL2ludGVyZmFjZXMvbW9kZWxzL1dvcmtlcidcbmltcG9ydCBhZGRyZXNzU2NoZW1hIGZyb20gJy4vc2NoZW1hcy9hZGRyZXNzU2NoZW1hJ1xuaW1wb3J0IGJhbmtBY2NvdW50U2NoZW1hIGZyb20gJy4vc2NoZW1hcy9iYW5rQWNjb3VudFNjaGVtYSdcbmltcG9ydCBwb2ludFNjaGVtYSBmcm9tICcuL3NjaGVtYXMvcG9pbnRTY2hlbWEnXG5pbXBvcnQgeyBDZXJ0aWZpY2F0aW9uU2NoZW1hIH0gZnJvbSAnLi9DZXJ0aWZpY2F0aW9uTW9kZWwnXG5cbmNvbnN0IGV4cGVyaWVuY2VTY2hlbWE6IFNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuXHRjb21wYW55OiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcblx0am9iVHlwZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG5cdHN0YXJ0RGF0ZTogeyB0eXBlOiBEYXRlLCByZXF1aXJlZDogdHJ1ZSB9LFxuXHRlbmREYXRlOiB7IHR5cGU6IERhdGUsIHJlcXVpcmVkOiB0cnVlIH0sXG59KVxuXG5jb25zdCB3b3JrZXJTY2hlbWE6IFNjaGVtYSA9IG5ldyBTY2hlbWEoXG5cdHtcblx0XHRuYW1lOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcblx0XHR1c2VybmFtZToge1xuXHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0cmVxdWlyZWQ6IHRydWUsXG5cdFx0XHR1bmlxdWU6IHRydWUsXG5cdFx0fSxcblx0XHRiaW86IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogZmFsc2UgfSxcblx0XHRwaG9uZU51bWJlcjogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB1bmlxdWU6IHRydWUgfSxcblx0XHRlbWFpbDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB1bmlxdWU6IHRydWUgfSxcblx0XHRsb2NhdGlvbjogeyB0eXBlOiBwb2ludFNjaGVtYSwgcmVxdWlyZWQ6IHRydWUgfSxcblx0XHRhZGRyZXNzOiB7IHR5cGU6IGFkZHJlc3NTY2hlbWEsIHJlcXVpcmVkOiB0cnVlLCBzZWxlY3Q6IGZhbHNlIH0sXG5cdFx0YmlsbGluZ0FkZHJlc3M6IHsgdHlwZTogYWRkcmVzc1NjaGVtYSwgcmVxdWlyZWQ6IGZhbHNlLCBzZWxlY3Q6IGZhbHNlIH0sXG5cdFx0YmFua0luZm86IHsgdHlwZTogYmFua0FjY291bnRTY2hlbWEsIHJlcXVpcmVkOiBmYWxzZSwgc2VsZWN0OiBmYWxzZSB9LFxuXHRcdHNzbjogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiBmYWxzZSwgdW5pcXVlOiB0cnVlLCBzZWxlY3Q6IGZhbHNlIH0sXG5cdFx0YmlydGhkYXk6IHsgdHlwZTogRGF0ZSwgcmVxdWlyZWQ6IHRydWUgfSxcblx0XHRyYXRpbmc6IHsgdHlwZTogTnVtYmVyLCBkZWZhdWx0OiBudWxsIH0sXG5cdFx0am9iVHlwZXM6IHsgdHlwZTogW1N0cmluZ10sIHJlcXVpcmVkOiB0cnVlIH0sXG5cdFx0ZXhwZXJpZW5jZXM6IHsgdHlwZTogW2V4cGVyaWVuY2VTY2hlbWFdLCByZXF1aXJlZDogZmFsc2UgfSxcblx0XHRjZXJ0aWZpY2F0aW9uczogeyB0eXBlOiBbQ2VydGlmaWNhdGlvblNjaGVtYV0sIHJlcXVpcmVkOiBmYWxzZSB9LFxuXHRcdHByb2ZpbGVQaWN0dXJlOiB7XG5cdFx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0fSxcblx0XHRhY2NvdW50U3RhdHVzOiB7XG5cdFx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0XHRlbnVtOiBbJ0FQUFJPVkVEJywgJ1BFTkRJTkcnLCAnUkVKRUNURUQnXSxcblx0XHRcdHJlcXVpcmVkOiBmYWxzZSxcblx0XHRcdGRlZmF1bHQ6ICdQRU5ESU5HJyxcblx0XHR9LFxuXHRcdGhhc2hlZFBhc3N3b3JkOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIHNlbGVjdDogZmFsc2UgfSxcblx0XHQvLyBkb2N1bWVudHM6IHsgdHlwZTogQnVmZmVyLCByZXF1aXJlZDogdHJ1ZSB9LFxuXHR9LFxuXHR7IHRpbWVzdGFtcHM6IHRydWUgfVxuKVxuXG53b3JrZXJTY2hlbWEuaW5kZXgoeyBsb2NhdGlvbjogJzJkc3BoZXJlJyB9KVxuXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbDxJV29ya2VyPignV29ya2VyJywgd29ya2VyU2NoZW1hKVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsSUFBQUEsU0FBQSxHQUFBQyx1QkFBQSxDQUFBQyxPQUFBO0FBR0EsSUFBQUMsY0FBQSxHQUFBQyxzQkFBQSxDQUFBRixPQUFBO0FBQ0EsSUFBQUcsa0JBQUEsR0FBQUQsc0JBQUEsQ0FBQUYsT0FBQTtBQUNBLElBQUFJLFlBQUEsR0FBQUYsc0JBQUEsQ0FBQUYsT0FBQTtBQUNBLElBQUFLLG1CQUFBLEdBQUFMLE9BQUE7QUFBMEQsU0FBQUUsdUJBQUFJLEdBQUEsV0FBQUEsR0FBQSxJQUFBQSxHQUFBLENBQUFDLFVBQUEsR0FBQUQsR0FBQSxnQkFBQUEsR0FBQTtBQUFBLFNBQUFFLHlCQUFBQyxXQUFBLGVBQUFDLE9BQUEsa0NBQUFDLGlCQUFBLE9BQUFELE9BQUEsUUFBQUUsZ0JBQUEsT0FBQUYsT0FBQSxZQUFBRix3QkFBQSxZQUFBQSx5QkFBQUMsV0FBQSxXQUFBQSxXQUFBLEdBQUFHLGdCQUFBLEdBQUFELGlCQUFBLEtBQUFGLFdBQUE7QUFBQSxTQUFBVix3QkFBQU8sR0FBQSxFQUFBRyxXQUFBLFNBQUFBLFdBQUEsSUFBQUgsR0FBQSxJQUFBQSxHQUFBLENBQUFDLFVBQUEsV0FBQUQsR0FBQSxRQUFBQSxHQUFBLGFBQUFPLE9BQUEsQ0FBQVAsR0FB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