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
var jobTypes = new _mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: false
  }
});
var CompanySchema = new _mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    select: false
  },
  location: {
    type: _pointSchema["default"],
    required: true
  },
  type: {
    type: String,
    required: true
  },
  overallRating: {
    type: Number,
    required: false,
    "default": -1
  },
  jobTypes: {
    type: [jobTypes],
    required: true
  },
  address: {
    type: _addressSchema["default"],
    required: true
  },
  bankInfo: {
    type: _bankAccountSchema["default"],
    required: false,
    select: false
  },
  hashedPassword: {
    type: String,
    required: true,
    select: false
  }
}, {
  timestamps: true
});
CompanySchema.index({
  location: '2dsphere'
});
var _default = _mongoose["default"].model('Company', CompanySchema);
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9uZ29vc2UiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfYWRkcmVzc1NjaGVtYSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfYmFua0FjY291bnRTY2hlbWEiLCJfcG9pbnRTY2hlbWEiLCJvYmoiLCJfX2VzTW9kdWxlIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwibm9kZUludGVyb3AiLCJXZWFrTWFwIiwiY2FjaGVCYWJlbEludGVyb3AiLCJjYWNoZU5vZGVJbnRlcm9wIiwiX3R5cGVvZiIsImNhY2hlIiwiaGFzIiwiZ2V0IiwibmV3T2JqIiwiaGFzUHJvcGVydHlEZXNjcmlwdG9yIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJrZXkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJkZXNjIiwic2V0Iiwiam9iVHlwZXMiLCJTY2hlbWEiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJyYXRpbmciLCJOdW1iZXIiLCJDb21wYW55U2NoZW1hIiwibmFtZSIsInVzZXJuYW1lIiwidW5pcXVlIiwiZGVzY3JpcHRpb24iLCJlbWFpbCIsInNlbGVjdCIsImxvY2F0aW9uIiwicG9pbnRTY2hlbWEiLCJvdmVyYWxsUmF0aW5nIiwiYWRkcmVzcyIsImFkZHJlc3NTY2hlbWEiLCJiYW5rSW5mbyIsImJhbmtBY2NvdW50U2NoZW1hIiwiaGFzaGVkUGFzc3dvcmQiLCJ0aW1lc3RhbXBzIiwiaW5kZXgiLCJfZGVmYXVsdCIsIm1vbmdvb3NlIiwibW9kZWwiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9tb2RlbHMvQ29tcGFueU1vZGVsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSwgeyBTY2hlbWEgfSBmcm9tICdtb25nb29zZSdcblxuaW1wb3J0IHsgSUNvbXBhbnkgfSBmcm9tICcuLi9pbnRlcmZhY2VzL21vZGVscy9Db21wYW55J1xuXG5pbXBvcnQgYWRkcmVzc1NjaGVtYSBmcm9tICcuL3NjaGVtYXMvYWRkcmVzc1NjaGVtYSdcbmltcG9ydCBiYW5rQWNjb3VudFNjaGVtYSBmcm9tICcuL3NjaGVtYXMvYmFua0FjY291bnRTY2hlbWEnXG5pbXBvcnQgcG9pbnRTY2hlbWEgZnJvbSAnLi9zY2hlbWFzL3BvaW50U2NoZW1hJ1xuXG5jb25zdCBqb2JUeXBlczogU2NoZW1hID0gbmV3IFNjaGVtYSh7XG5cdHR5cGU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuXHRyYXRpbmc6IHsgdHlwZTogTnVtYmVyLCByZXF1aXJlZDogZmFsc2UgfSxcbn0pXG5cbmNvbnN0IENvbXBhbnlTY2hlbWEgPSBuZXcgU2NoZW1hKFxuXHR7XG5cdFx0bmFtZToge1xuXHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0cmVxdWlyZWQ6IHRydWUsXG5cdFx0fSxcblx0XHR1c2VybmFtZToge1xuXHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0cmVxdWlyZWQ6IHRydWUsXG5cdFx0XHR1bmlxdWU6IHRydWUsXG5cdFx0fSxcblx0XHRkZXNjcmlwdGlvbjoge1xuXHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0cmVxdWlyZWQ6IHRydWUsXG5cdFx0fSxcblx0XHRlbWFpbDoge1xuXHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0cmVxdWlyZWQ6IHRydWUsXG5cdFx0XHR1bmlxdWU6IHRydWUsXG5cdFx0XHRzZWxlY3Q6IGZhbHNlLFxuXHRcdH0sXG5cdFx0bG9jYXRpb246IHtcblx0XHRcdHR5cGU6IHBvaW50U2NoZW1hLFxuXHRcdFx0cmVxdWlyZWQ6IHRydWUsXG5cdFx0fSxcblx0XHR0eXBlOiB7XG5cdFx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0XHRyZXF1aXJlZDogdHJ1ZSxcblx0XHR9LFxuXHRcdG92ZXJhbGxSYXRpbmc6IHtcblx0XHRcdHR5cGU6IE51bWJlcixcblx0XHRcdHJlcXVpcmVkOiBmYWxzZSxcblx0XHRcdGRlZmF1bHQ6IC0xLFxuXHRcdH0sXG5cdFx0am9iVHlwZXM6IHtcblx0XHRcdHR5cGU6IFtqb2JUeXBlc10sXG5cdFx0XHRyZXF1aXJlZDogdHJ1ZSxcblx0XHR9LFxuXHRcdGFkZHJlc3M6IHtcblx0XHRcdHR5cGU6IGFkZHJlc3NTY2hlbWEsXG5cdFx0XHRyZXF1aXJlZDogdHJ1ZSxcblx0XHR9LFxuXHRcdGJhbmtJbmZvOiB7XG5cdFx0XHR0eXBlOiBiYW5rQWNjb3VudFNjaGVtYSxcblx0XHRcdHJlcXVpcmVkOiBmYWxzZSxcblx0XHRcdHNlbGVjdDogZmFsc2UsXG5cdFx0fSxcblx0XHRoYXNoZWRQYXNzd29yZDoge1xuXHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0cmVxdWlyZWQ6IHRydWUsXG5cdFx0XHRzZWxlY3Q6IGZhbHNlLFxuXHRcdH0sXG5cdH0sXG5cdHtcblx0XHR0aW1lc3RhbXBzOiB0cnVlLFxuXHR9XG4pXG5cbkNvbXBhbnlTY2hlbWEuaW5kZXgoeyBsb2NhdGlvbjogJzJkc3BoZXJlJyB9KVxuXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbDxJQ29tcGFueT4oJ0NvbXBhbnknLCBDb21wYW55U2NoZW1hKVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsSUFBQUEsU0FBQSxHQUFBQyx1QkFBQSxDQUFBQyxPQUFBO0FBSUEsSUFBQUMsY0FBQSxHQUFBQyxzQkFBQSxDQUFBRixPQUFBO0FBQ0EsSUFBQUcsa0JBQUEsR0FBQUQsc0JBQUEsQ0FBQUYsT0FBQTtBQUNBLElBQUFJLFlBQUEsR0FBQUYsc0JBQUEsQ0FBQUYsT0FBQTtBQUErQyxTQUFBRSx1QkFBQUcsR0FBQSxXQUFBQSxHQUFBLElBQUFBLEdBQUEsQ0FBQUMsVUFBQSxHQUFBRCxHQUFBLGdCQUFBQSxHQUFBO0FBQUEsU0FBQUUseUJBQUFDLFdBQUEsZUFBQUMsT0FBQSxrQ0FBQUMsaUJBQUEsT0FBQUQsT0FBQSxRQUFBRSxnQkFBQSxPQUFBRixPQUFBLFlBQUFGLHdCQUFBLFlBQUFBLHlC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