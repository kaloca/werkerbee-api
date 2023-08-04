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
    required: false
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9uZ29vc2UiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfYWRkcmVzc1NjaGVtYSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfYmFua0FjY291bnRTY2hlbWEiLCJfcG9pbnRTY2hlbWEiLCJfQ2VydGlmaWNhdGlvbk1vZGVsIiwib2JqIiwiX19lc01vZHVsZSIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsIm5vZGVJbnRlcm9wIiwiV2Vha01hcCIsImNhY2hlQmFiZWxJbnRlcm9wIiwiY2FjaGVOb2RlSW50ZXJvcCIsIl90eXBlb2YiLCJjYWNoZSIsImhhcyIsImdldCIsIm5ld09iaiIsImhhc1Byb3BlcnR5RGVzY3JpcHRvciIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwia2V5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiZGVzYyIsInNldCIsImV4cGVyaWVuY2VTY2hlbWEiLCJTY2hlbWEiLCJjb21wYW55IiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiam9iVHlwZSIsInN0YXJ0RGF0ZSIsIkRhdGUiLCJlbmREYXRlIiwid29ya2VyU2NoZW1hIiwibmFtZSIsInVzZXJuYW1lIiwidW5pcXVlIiwiYmlvIiwicGhvbmVOdW1iZXIiLCJlbWFpbCIsImxvY2F0aW9uIiwicG9pbnRTY2hlbWEiLCJhZGRyZXNzIiwiYWRkcmVzc1NjaGVtYSIsInNlbGVjdCIsImJpbGxpbmdBZGRyZXNzIiwiYmFua0luZm8iLCJiYW5rQWNjb3VudFNjaGVtYSIsImJpcnRoZGF5IiwicmF0aW5nIiwiTnVtYmVyIiwiam9iVHlwZXMiLCJleHBlcmllbmNlcyIsImNlcnRpZmljYXRpb25zIiwiQ2VydGlmaWNhdGlvblNjaGVtYSIsInByb2ZpbGVQaWN0dXJlIiwiYWNjb3VudFN0YXR1cyIsImhhc2hlZFBhc3N3b3JkIiwidGltZXN0YW1wcyIsImluZGV4IiwiX2RlZmF1bHQiLCJtb25nb29zZSIsIm1vZGVsIiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvbW9kZWxzL1dvcmtlck1vZGVsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSwgeyBTY2hlbWEgfSBmcm9tICdtb25nb29zZSdcblxuaW1wb3J0IHsgSVdvcmtlciB9IGZyb20gJy4uL2ludGVyZmFjZXMvbW9kZWxzL1dvcmtlcidcbmltcG9ydCBhZGRyZXNzU2NoZW1hIGZyb20gJy4vc2NoZW1hcy9hZGRyZXNzU2NoZW1hJ1xuaW1wb3J0IGJhbmtBY2NvdW50U2NoZW1hIGZyb20gJy4vc2NoZW1hcy9iYW5rQWNjb3VudFNjaGVtYSdcbmltcG9ydCBwb2ludFNjaGVtYSBmcm9tICcuL3NjaGVtYXMvcG9pbnRTY2hlbWEnXG5pbXBvcnQgeyBDZXJ0aWZpY2F0aW9uU2NoZW1hIH0gZnJvbSAnLi9DZXJ0aWZpY2F0aW9uTW9kZWwnXG5cbmNvbnN0IGV4cGVyaWVuY2VTY2hlbWE6IFNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuXHRjb21wYW55OiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcblx0am9iVHlwZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG5cdHN0YXJ0RGF0ZTogeyB0eXBlOiBEYXRlLCByZXF1aXJlZDogdHJ1ZSB9LFxuXHRlbmREYXRlOiB7IHR5cGU6IERhdGUsIHJlcXVpcmVkOiB0cnVlIH0sXG59KVxuXG5jb25zdCB3b3JrZXJTY2hlbWE6IFNjaGVtYSA9IG5ldyBTY2hlbWEoXG5cdHtcblx0XHRuYW1lOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcblx0XHR1c2VybmFtZToge1xuXHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0cmVxdWlyZWQ6IHRydWUsXG5cdFx0XHR1bmlxdWU6IHRydWUsXG5cdFx0fSxcblx0XHRiaW86IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogZmFsc2UgfSxcblx0XHRwaG9uZU51bWJlcjogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB1bmlxdWU6IHRydWUgfSxcblx0XHRlbWFpbDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB1bmlxdWU6IHRydWUgfSxcblx0XHRsb2NhdGlvbjogeyB0eXBlOiBwb2ludFNjaGVtYSwgcmVxdWlyZWQ6IGZhbHNlIH0sXG5cdFx0YWRkcmVzczogeyB0eXBlOiBhZGRyZXNzU2NoZW1hLCByZXF1aXJlZDogdHJ1ZSwgc2VsZWN0OiBmYWxzZSB9LFxuXHRcdGJpbGxpbmdBZGRyZXNzOiB7IHR5cGU6IGFkZHJlc3NTY2hlbWEsIHJlcXVpcmVkOiBmYWxzZSwgc2VsZWN0OiBmYWxzZSB9LFxuXHRcdGJhbmtJbmZvOiB7IHR5cGU6IGJhbmtBY2NvdW50U2NoZW1hLCByZXF1aXJlZDogZmFsc2UsIHNlbGVjdDogZmFsc2UgfSxcblx0XHQvLyBzc246IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogZmFsc2UsIHVuaXF1ZTogZmFsc2UsIHNlbGVjdDogZmFsc2UgfSxcblx0XHRiaXJ0aGRheTogeyB0eXBlOiBEYXRlLCByZXF1aXJlZDogdHJ1ZSB9LFxuXHRcdHJhdGluZzogeyB0eXBlOiBOdW1iZXIsIGRlZmF1bHQ6IG51bGwgfSxcblx0XHRqb2JUeXBlczogeyB0eXBlOiBbU3RyaW5nXSwgcmVxdWlyZWQ6IHRydWUgfSxcblx0XHRleHBlcmllbmNlczogeyB0eXBlOiBbZXhwZXJpZW5jZVNjaGVtYV0sIHJlcXVpcmVkOiBmYWxzZSB9LFxuXHRcdGNlcnRpZmljYXRpb25zOiB7IHR5cGU6IFtDZXJ0aWZpY2F0aW9uU2NoZW1hXSwgcmVxdWlyZWQ6IGZhbHNlIH0sXG5cdFx0cHJvZmlsZVBpY3R1cmU6IHtcblx0XHRcdHR5cGU6IFN0cmluZyxcblx0XHR9LFxuXHRcdGFjY291bnRTdGF0dXM6IHtcblx0XHRcdHR5cGU6IFN0cmluZyxcblx0XHRcdGVudW06IFsnQVBQUk9WRUQnLCAnUEVORElORycsICdSRUpFQ1RFRCddLFxuXHRcdFx0cmVxdWlyZWQ6IGZhbHNlLFxuXHRcdFx0ZGVmYXVsdDogJ1BFTkRJTkcnLFxuXHRcdH0sXG5cdFx0aGFzaGVkUGFzc3dvcmQ6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgc2VsZWN0OiBmYWxzZSB9LFxuXHRcdC8vIGRvY3VtZW50czogeyB0eXBlOiBCdWZmZXIsIHJlcXVpcmVkOiB0cnVlIH0sXG5cdH0sXG5cdHsgdGltZXN0YW1wczogdHJ1ZSB9XG4pXG5cbndvcmtlclNjaGVtYS5pbmRleCh7IGxvY2F0aW9uOiAnMmRzcGhlcmUnIH0pXG5cbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVsPElXb3JrZXI+KCdXb3JrZXInLCB3b3JrZXJTY2hlbWEpXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxJQUFBQSxTQUFBLEdBQUFDLHVCQUFBLENBQUFDLE9BQUE7QUFHQSxJQUFBQyxjQUFBLEdBQUFDLHNCQUFBLENBQUFGLE9BQUE7QUFDQSxJQUFBRyxrQkFBQSxHQUFBRCxzQkFBQSxDQUFBRixPQUFBO0FBQ0EsSUFBQUksWUFBQSxHQUFBRixzQkFBQSxDQUFBRixPQUFBO0FBQ0EsSUFBQUssbUJBQUEsR0FBQUwsT0FBQTtBQUEwRCxTQUFBRSx1QkFBQUksR0FBQSxXQUFBQSxHQUFBLElBQUFBLEdBQUEsQ0FBQUMsVUFBQSxHQUFBRCxHQUFBLGdCQUFBQSxHQUFBO0FBQUEsU0FBQUUseUJBQUFDLFdBQUEsZUFBQUMsT0FBQSxrQ0FBQUMsaUJBQUEsT0FBQUQsT0FBQSxRQUFBRSxnQkFBQSxPQUFBRixPQUFBLFlBQUFGLHdCQUFBLFlBQUFBLHlCQUFBQyxXQUFBLFdBQUFBLFdBQUEsR0FBQUcsZ0JBQUEsR0FBQUQsaUJBQUEsS0FBQUYsV0FBQTtBQUFBLFNBQUFWLHdCQUFBTyxHQUFBLEVBQUFHLFdBQUEsU0FBQUEsV0FBQSxJQUFBSCxHQUFBLElBQUFBLEdBQUEsQ0FBQUMsVUFBQSxXQUFBRCxHQUFBLFFBQUFBLEdBQUEsYUFBQU8sT0FBQSxDQUFBUCxHQUFB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