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
  hashedPassword: {
    type: String,
    required: true,
    select: false
  }
  // documents: { type: Buffer, required: true },
});

workerSchema.index({
  location: '2dsphere'
});
var _default = _mongoose["default"].model('Worker', workerSchema);
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9uZ29vc2UiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfYWRkcmVzc1NjaGVtYSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfYmFua0FjY291bnRTY2hlbWEiLCJfcG9pbnRTY2hlbWEiLCJvYmoiLCJfX2VzTW9kdWxlIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwibm9kZUludGVyb3AiLCJXZWFrTWFwIiwiY2FjaGVCYWJlbEludGVyb3AiLCJjYWNoZU5vZGVJbnRlcm9wIiwiX3R5cGVvZiIsImNhY2hlIiwiaGFzIiwiZ2V0IiwibmV3T2JqIiwiaGFzUHJvcGVydHlEZXNjcmlwdG9yIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJrZXkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJkZXNjIiwic2V0IiwiZXhwZXJpZW5jZVNjaGVtYSIsIlNjaGVtYSIsImNvbXBhbnkiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJqb2JUeXBlIiwic3RhcnREYXRlIiwiRGF0ZSIsImVuZERhdGUiLCJ3b3JrZXJTY2hlbWEiLCJuYW1lIiwidXNlcm5hbWUiLCJ1bmlxdWUiLCJiaW8iLCJwaG9uZU51bWJlciIsImVtYWlsIiwibG9jYXRpb24iLCJwb2ludFNjaGVtYSIsImFkZHJlc3MiLCJhZGRyZXNzU2NoZW1hIiwic2VsZWN0IiwiYmlsbGluZ0FkZHJlc3MiLCJiYW5rSW5mbyIsImJhbmtBY2NvdW50U2NoZW1hIiwic3NuIiwiYmlydGhkYXkiLCJyYXRpbmciLCJOdW1iZXIiLCJqb2JUeXBlcyIsImV4cGVyaWVuY2VzIiwiaGFzaGVkUGFzc3dvcmQiLCJpbmRleCIsIl9kZWZhdWx0IiwibW9uZ29vc2UiLCJtb2RlbCIsImV4cG9ydHMiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL21vZGVscy9Xb3JrZXJNb2RlbC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UsIHsgU2NoZW1hIH0gZnJvbSAnbW9uZ29vc2UnXG5cbmltcG9ydCB7IElXb3JrZXIgfSBmcm9tICcuLi9pbnRlcmZhY2VzL21vZGVscy9Xb3JrZXInXG5pbXBvcnQgYWRkcmVzc1NjaGVtYSBmcm9tICcuL3NjaGVtYXMvYWRkcmVzc1NjaGVtYSdcbmltcG9ydCBiYW5rQWNjb3VudFNjaGVtYSBmcm9tICcuL3NjaGVtYXMvYmFua0FjY291bnRTY2hlbWEnXG5pbXBvcnQgcG9pbnRTY2hlbWEgZnJvbSAnLi9zY2hlbWFzL3BvaW50U2NoZW1hJ1xuXG5jb25zdCBleHBlcmllbmNlU2NoZW1hOiBTY2hlbWEgPSBuZXcgU2NoZW1hKHtcblx0Y29tcGFueTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG5cdGpvYlR5cGU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuXHRzdGFydERhdGU6IHsgdHlwZTogRGF0ZSwgcmVxdWlyZWQ6IHRydWUgfSxcblx0ZW5kRGF0ZTogeyB0eXBlOiBEYXRlLCByZXF1aXJlZDogdHJ1ZSB9LFxufSlcblxuY29uc3Qgd29ya2VyU2NoZW1hOiBTY2hlbWEgPSBuZXcgU2NoZW1hKHtcblx0bmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG5cdHVzZXJuYW1lOiB7XG5cdFx0dHlwZTogU3RyaW5nLFxuXHRcdHJlcXVpcmVkOiB0cnVlLFxuXHRcdHVuaXF1ZTogdHJ1ZSxcblx0fSxcblx0YmlvOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IGZhbHNlIH0sXG5cdHBob25lTnVtYmVyOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIHVuaXF1ZTogdHJ1ZSB9LFxuXHRlbWFpbDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB1bmlxdWU6IHRydWUgfSxcblx0bG9jYXRpb246IHsgdHlwZTogcG9pbnRTY2hlbWEsIHJlcXVpcmVkOiB0cnVlIH0sXG5cdGFkZHJlc3M6IHsgdHlwZTogYWRkcmVzc1NjaGVtYSwgcmVxdWlyZWQ6IHRydWUsIHNlbGVjdDogZmFsc2UgfSxcblx0YmlsbGluZ0FkZHJlc3M6IHsgdHlwZTogYWRkcmVzc1NjaGVtYSwgcmVxdWlyZWQ6IGZhbHNlLCBzZWxlY3Q6IGZhbHNlIH0sXG5cdGJhbmtJbmZvOiB7IHR5cGU6IGJhbmtBY2NvdW50U2NoZW1hLCByZXF1aXJlZDogZmFsc2UsIHNlbGVjdDogZmFsc2UgfSxcblx0c3NuOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIHVuaXF1ZTogdHJ1ZSwgc2VsZWN0OiBmYWxzZSB9LFxuXHRiaXJ0aGRheTogeyB0eXBlOiBEYXRlLCByZXF1aXJlZDogdHJ1ZSB9LFxuXHRyYXRpbmc6IHsgdHlwZTogTnVtYmVyLCBkZWZhdWx0OiBudWxsIH0sXG5cdGpvYlR5cGVzOiB7IHR5cGU6IFtTdHJpbmddLCByZXF1aXJlZDogdHJ1ZSB9LFxuXHRleHBlcmllbmNlczogeyB0eXBlOiBbZXhwZXJpZW5jZVNjaGVtYV0sIHJlcXVpcmVkOiBmYWxzZSB9LFxuXHRoYXNoZWRQYXNzd29yZDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCBzZWxlY3Q6IGZhbHNlIH0sXG5cdC8vIGRvY3VtZW50czogeyB0eXBlOiBCdWZmZXIsIHJlcXVpcmVkOiB0cnVlIH0sXG59KVxuXG53b3JrZXJTY2hlbWEuaW5kZXgoeyBsb2NhdGlvbjogJzJkc3BoZXJlJyB9KVxuXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbDxJV29ya2VyPignV29ya2VyJywgd29ya2VyU2NoZW1hKVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsSUFBQUEsU0FBQSxHQUFBQyx1QkFBQSxDQUFBQyxPQUFBO0FBR0EsSUFBQUMsY0FBQSxHQUFBQyxzQkFBQSxDQUFBRixPQUFBO0FBQ0EsSUFBQUcsa0JBQUEsR0FBQUQsc0JBQUEsQ0FBQUYsT0FBQTtBQUNBLElBQUFJLFlBQUEsR0FBQUYsc0JBQUEsQ0FBQUYsT0FBQTtB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