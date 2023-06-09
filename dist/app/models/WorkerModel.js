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
}, {
  timestamps: true
});
workerSchema.index({
  location: '2dsphere'
});
var _default = _mongoose["default"].model('Worker', workerSchema);
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9uZ29vc2UiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfYWRkcmVzc1NjaGVtYSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfYmFua0FjY291bnRTY2hlbWEiLCJfcG9pbnRTY2hlbWEiLCJvYmoiLCJfX2VzTW9kdWxlIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwibm9kZUludGVyb3AiLCJXZWFrTWFwIiwiY2FjaGVCYWJlbEludGVyb3AiLCJjYWNoZU5vZGVJbnRlcm9wIiwiX3R5cGVvZiIsImNhY2hlIiwiaGFzIiwiZ2V0IiwibmV3T2JqIiwiaGFzUHJvcGVydHlEZXNjcmlwdG9yIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJrZXkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJkZXNjIiwic2V0IiwiZXhwZXJpZW5jZVNjaGVtYSIsIlNjaGVtYSIsImNvbXBhbnkiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJqb2JUeXBlIiwic3RhcnREYXRlIiwiRGF0ZSIsImVuZERhdGUiLCJ3b3JrZXJTY2hlbWEiLCJuYW1lIiwidXNlcm5hbWUiLCJ1bmlxdWUiLCJiaW8iLCJwaG9uZU51bWJlciIsImVtYWlsIiwibG9jYXRpb24iLCJwb2ludFNjaGVtYSIsImFkZHJlc3MiLCJhZGRyZXNzU2NoZW1hIiwic2VsZWN0IiwiYmlsbGluZ0FkZHJlc3MiLCJiYW5rSW5mbyIsImJhbmtBY2NvdW50U2NoZW1hIiwic3NuIiwiYmlydGhkYXkiLCJyYXRpbmciLCJOdW1iZXIiLCJqb2JUeXBlcyIsImV4cGVyaWVuY2VzIiwiaGFzaGVkUGFzc3dvcmQiLCJ0aW1lc3RhbXBzIiwiaW5kZXgiLCJfZGVmYXVsdCIsIm1vbmdvb3NlIiwibW9kZWwiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9tb2RlbHMvV29ya2VyTW9kZWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlLCB7IFNjaGVtYSB9IGZyb20gJ21vbmdvb3NlJ1xuXG5pbXBvcnQgeyBJV29ya2VyIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9tb2RlbHMvV29ya2VyJ1xuaW1wb3J0IGFkZHJlc3NTY2hlbWEgZnJvbSAnLi9zY2hlbWFzL2FkZHJlc3NTY2hlbWEnXG5pbXBvcnQgYmFua0FjY291bnRTY2hlbWEgZnJvbSAnLi9zY2hlbWFzL2JhbmtBY2NvdW50U2NoZW1hJ1xuaW1wb3J0IHBvaW50U2NoZW1hIGZyb20gJy4vc2NoZW1hcy9wb2ludFNjaGVtYSdcblxuY29uc3QgZXhwZXJpZW5jZVNjaGVtYTogU2NoZW1hID0gbmV3IFNjaGVtYSh7XG5cdGNvbXBhbnk6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuXHRqb2JUeXBlOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcblx0c3RhcnREYXRlOiB7IHR5cGU6IERhdGUsIHJlcXVpcmVkOiB0cnVlIH0sXG5cdGVuZERhdGU6IHsgdHlwZTogRGF0ZSwgcmVxdWlyZWQ6IHRydWUgfSxcbn0pXG5cbmNvbnN0IHdvcmtlclNjaGVtYTogU2NoZW1hID0gbmV3IFNjaGVtYShcblx0e1xuXHRcdG5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuXHRcdHVzZXJuYW1lOiB7XG5cdFx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0XHRyZXF1aXJlZDogdHJ1ZSxcblx0XHRcdHVuaXF1ZTogdHJ1ZSxcblx0XHR9LFxuXHRcdGJpbzogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiBmYWxzZSB9LFxuXHRcdHBob25lTnVtYmVyOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIHVuaXF1ZTogdHJ1ZSB9LFxuXHRcdGVtYWlsOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIHVuaXF1ZTogdHJ1ZSB9LFxuXHRcdGxvY2F0aW9uOiB7IHR5cGU6IHBvaW50U2NoZW1hLCByZXF1aXJlZDogdHJ1ZSB9LFxuXHRcdGFkZHJlc3M6IHsgdHlwZTogYWRkcmVzc1NjaGVtYSwgcmVxdWlyZWQ6IHRydWUsIHNlbGVjdDogZmFsc2UgfSxcblx0XHRiaWxsaW5nQWRkcmVzczogeyB0eXBlOiBhZGRyZXNzU2NoZW1hLCByZXF1aXJlZDogZmFsc2UsIHNlbGVjdDogZmFsc2UgfSxcblx0XHRiYW5rSW5mbzogeyB0eXBlOiBiYW5rQWNjb3VudFNjaGVtYSwgcmVxdWlyZWQ6IGZhbHNlLCBzZWxlY3Q6IGZhbHNlIH0sXG5cdFx0c3NuOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIHVuaXF1ZTogdHJ1ZSwgc2VsZWN0OiBmYWxzZSB9LFxuXHRcdGJpcnRoZGF5OiB7IHR5cGU6IERhdGUsIHJlcXVpcmVkOiB0cnVlIH0sXG5cdFx0cmF0aW5nOiB7IHR5cGU6IE51bWJlciwgZGVmYXVsdDogbnVsbCB9LFxuXHRcdGpvYlR5cGVzOiB7IHR5cGU6IFtTdHJpbmddLCByZXF1aXJlZDogdHJ1ZSB9LFxuXHRcdGV4cGVyaWVuY2VzOiB7IHR5cGU6IFtleHBlcmllbmNlU2NoZW1hXSwgcmVxdWlyZWQ6IGZhbHNlIH0sXG5cdFx0aGFzaGVkUGFzc3dvcmQ6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgc2VsZWN0OiBmYWxzZSB9LFxuXHRcdC8vIGRvY3VtZW50czogeyB0eXBlOiBCdWZmZXIsIHJlcXVpcmVkOiB0cnVlIH0sXG5cdH0sXG5cdHsgdGltZXN0YW1wczogdHJ1ZSB9XG4pXG5cbndvcmtlclNjaGVtYS5pbmRleCh7IGxvY2F0aW9uOiAnMmRzcGhlcmUnIH0pXG5cbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVsPElXb3JrZXI+KCdXb3JrZXInLCB3b3JrZXJTY2hlbWEpXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxJQUFBQSxTQUFBLEdBQUFDLHVCQUFBLENBQUFDLE9BQUE7QUFHQSxJQUFBQyxjQUFBLEdBQUFDLHNCQUFBLENBQUFG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