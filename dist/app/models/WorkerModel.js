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
  certifications: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Certification',
    select: true
  }],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9uZ29vc2UiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfYWRkcmVzc1NjaGVtYSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfYmFua0FjY291bnRTY2hlbWEiLCJfcG9pbnRTY2hlbWEiLCJvYmoiLCJfX2VzTW9kdWxlIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwibm9kZUludGVyb3AiLCJXZWFrTWFwIiwiY2FjaGVCYWJlbEludGVyb3AiLCJjYWNoZU5vZGVJbnRlcm9wIiwiX3R5cGVvZiIsImNhY2hlIiwiaGFzIiwiZ2V0IiwibmV3T2JqIiwiaGFzUHJvcGVydHlEZXNjcmlwdG9yIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJrZXkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJkZXNjIiwic2V0IiwiZXhwZXJpZW5jZVNjaGVtYSIsIlNjaGVtYSIsImNvbXBhbnkiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJqb2JUeXBlIiwic3RhcnREYXRlIiwiRGF0ZSIsImVuZERhdGUiLCJ3b3JrZXJTY2hlbWEiLCJuYW1lIiwidXNlcm5hbWUiLCJ1bmlxdWUiLCJiaW8iLCJwaG9uZU51bWJlciIsImVtYWlsIiwibG9jYXRpb24iLCJwb2ludFNjaGVtYSIsImFkZHJlc3MiLCJhZGRyZXNzU2NoZW1hIiwic2VsZWN0IiwiYmlsbGluZ0FkZHJlc3MiLCJiYW5rSW5mbyIsImJhbmtBY2NvdW50U2NoZW1hIiwiYmlydGhkYXkiLCJyYXRpbmciLCJOdW1iZXIiLCJqb2JUeXBlcyIsImV4cGVyaWVuY2VzIiwiY2VydGlmaWNhdGlvbnMiLCJUeXBlcyIsIk9iamVjdElkIiwicmVmIiwicHJvZmlsZVBpY3R1cmUiLCJhY2NvdW50U3RhdHVzIiwiaGFzaGVkUGFzc3dvcmQiLCJ0aW1lc3RhbXBzIiwiaW5kZXgiLCJfZGVmYXVsdCIsIm1vbmdvb3NlIiwibW9kZWwiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9tb2RlbHMvV29ya2VyTW9kZWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlLCB7IFNjaGVtYSB9IGZyb20gJ21vbmdvb3NlJ1xuXG5pbXBvcnQgeyBJV29ya2VyIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9tb2RlbHMvV29ya2VyJ1xuaW1wb3J0IGFkZHJlc3NTY2hlbWEgZnJvbSAnLi9zY2hlbWFzL2FkZHJlc3NTY2hlbWEnXG5pbXBvcnQgYmFua0FjY291bnRTY2hlbWEgZnJvbSAnLi9zY2hlbWFzL2JhbmtBY2NvdW50U2NoZW1hJ1xuaW1wb3J0IHBvaW50U2NoZW1hIGZyb20gJy4vc2NoZW1hcy9wb2ludFNjaGVtYSdcbmltcG9ydCB7IENlcnRpZmljYXRpb25TY2hlbWEgfSBmcm9tICcuL0NlcnRpZmljYXRpb25Nb2RlbCdcblxuY29uc3QgZXhwZXJpZW5jZVNjaGVtYTogU2NoZW1hID0gbmV3IFNjaGVtYSh7XG5cdGNvbXBhbnk6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuXHRqb2JUeXBlOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcblx0c3RhcnREYXRlOiB7IHR5cGU6IERhdGUsIHJlcXVpcmVkOiB0cnVlIH0sXG5cdGVuZERhdGU6IHsgdHlwZTogRGF0ZSwgcmVxdWlyZWQ6IHRydWUgfSxcbn0pXG5cbmNvbnN0IHdvcmtlclNjaGVtYTogU2NoZW1hID0gbmV3IFNjaGVtYShcblx0e1xuXHRcdG5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuXHRcdHVzZXJuYW1lOiB7XG5cdFx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0XHRyZXF1aXJlZDogdHJ1ZSxcblx0XHRcdHVuaXF1ZTogdHJ1ZSxcblx0XHR9LFxuXHRcdGJpbzogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiBmYWxzZSB9LFxuXHRcdHBob25lTnVtYmVyOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIHVuaXF1ZTogdHJ1ZSB9LFxuXHRcdGVtYWlsOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIHVuaXF1ZTogdHJ1ZSB9LFxuXHRcdGxvY2F0aW9uOiB7IHR5cGU6IHBvaW50U2NoZW1hLCByZXF1aXJlZDogZmFsc2UgfSxcblx0XHRhZGRyZXNzOiB7IHR5cGU6IGFkZHJlc3NTY2hlbWEsIHJlcXVpcmVkOiB0cnVlLCBzZWxlY3Q6IGZhbHNlIH0sXG5cdFx0YmlsbGluZ0FkZHJlc3M6IHsgdHlwZTogYWRkcmVzc1NjaGVtYSwgcmVxdWlyZWQ6IGZhbHNlLCBzZWxlY3Q6IGZhbHNlIH0sXG5cdFx0YmFua0luZm86IHsgdHlwZTogYmFua0FjY291bnRTY2hlbWEsIHJlcXVpcmVkOiBmYWxzZSwgc2VsZWN0OiBmYWxzZSB9LFxuXHRcdC8vIHNzbjogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiBmYWxzZSwgdW5pcXVlOiBmYWxzZSwgc2VsZWN0OiBmYWxzZSB9LFxuXHRcdGJpcnRoZGF5OiB7IHR5cGU6IERhdGUsIHJlcXVpcmVkOiB0cnVlIH0sXG5cdFx0cmF0aW5nOiB7IHR5cGU6IE51bWJlciwgZGVmYXVsdDogbnVsbCB9LFxuXHRcdGpvYlR5cGVzOiB7IHR5cGU6IFtTdHJpbmddLCByZXF1aXJlZDogdHJ1ZSB9LFxuXHRcdGV4cGVyaWVuY2VzOiB7IHR5cGU6IFtleHBlcmllbmNlU2NoZW1hXSwgcmVxdWlyZWQ6IGZhbHNlIH0sXG5cdFx0Y2VydGlmaWNhdGlvbnM6IFtcblx0XHRcdHtcblx0XHRcdFx0dHlwZTogU2NoZW1hLlR5cGVzLk9iamVjdElkLFxuXHRcdFx0XHRyZWY6ICdDZXJ0aWZpY2F0aW9uJyxcblx0XHRcdFx0c2VsZWN0OiB0cnVlLFxuXHRcdFx0fSxcblx0XHRdLFxuXHRcdHByb2ZpbGVQaWN0dXJlOiB7XG5cdFx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0fSxcblx0XHRhY2NvdW50U3RhdHVzOiB7XG5cdFx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0XHRlbnVtOiBbJ0FQUFJPVkVEJywgJ1BFTkRJTkcnLCAnUkVKRUNURUQnXSxcblx0XHRcdHJlcXVpcmVkOiBmYWxzZSxcblx0XHRcdGRlZmF1bHQ6ICdQRU5ESU5HJyxcblx0XHR9LFxuXHRcdGhhc2hlZFBhc3N3b3JkOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIHNlbGVjdDogZmFsc2UgfSxcblx0XHQvLyBkb2N1bWVudHM6IHsgdHlwZTogQnVmZmVyLCByZXF1aXJlZDogdHJ1ZSB9LFxuXHR9LFxuXHR7IHRpbWVzdGFtcHM6IHRydWUgfVxuKVxuXG53b3JrZXJTY2hlbWEuaW5kZXgoeyBsb2NhdGlvbjogJzJkc3BoZXJlJyB9KVxuXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbDxJV29ya2VyPignV29ya2VyJywgd29ya2VyU2NoZW1hKVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsSUFBQUEsU0FBQSxHQUFBQyx1QkFBQSxDQUFBQyxPQUFBO0FBR0EsSUFBQUMsY0FBQSxHQUFBQyxzQkFBQSxDQUFBRixPQUFBO0FBQ0EsSUFBQUcsa0JBQUEsR0FBQUQsc0JBQUEsQ0FBQUYsT0FBQTtBQUNBLElBQUFJLFlBQUEsR0FBQUYsc0JBQUEsQ0FBQUYsT0FBQTtBQUErQyxTQUFBRSx1QkFBQUcsR0FBQSxXQUFBQSxHQUFBLElBQUFBLEdBQUEsQ0FBQUMsVUFBQSxHQUFBRCxHQUFBLGdCQUFBQSxHQUFBO0FBQUEsU0FBQUUseUJBQUFDLFdBQUEsZUFBQUMsT0FBQSxrQ0FBQUMsaUJBQUEsT0FBQUQsT0FBQSxRQUFBRSxnQkFBQSxPQUFBRixPQUFBLFlBQUFGLHdCQUFBLFlBQUFBLHlCQUFBQyxXQUFBLFdBQUFBLFdBQUEsR0FBQUcsZ0JBQUEsR0FBQUQsaUJBQUEsS0FBQUYsV0FBQTtBQUFBLFNBQUFULHdCQUFBTSxHQUFBLEVBQUFHLFdBQUEsU0FBQUEsV0FBQSxJQUFBSCxHQUFBLElBQUFBLEdBQUEsQ0FBQUMsVUFBQSxXQUFBRCxHQUFBLFFBQUFBLEdB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