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
  profilePicture: {
    type: String
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9uZ29vc2UiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfYWRkcmVzc1NjaGVtYSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfYmFua0FjY291bnRTY2hlbWEiLCJfcG9pbnRTY2hlbWEiLCJvYmoiLCJfX2VzTW9kdWxlIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwibm9kZUludGVyb3AiLCJXZWFrTWFwIiwiY2FjaGVCYWJlbEludGVyb3AiLCJjYWNoZU5vZGVJbnRlcm9wIiwiX3R5cGVvZiIsImNhY2hlIiwiaGFzIiwiZ2V0IiwibmV3T2JqIiwiaGFzUHJvcGVydHlEZXNjcmlwdG9yIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJrZXkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJkZXNjIiwic2V0Iiwiam9iVHlwZXMiLCJTY2hlbWEiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJyYXRpbmciLCJOdW1iZXIiLCJDb21wYW55U2NoZW1hIiwibmFtZSIsInVzZXJuYW1lIiwidW5pcXVlIiwiZGVzY3JpcHRpb24iLCJlbWFpbCIsInNlbGVjdCIsImxvY2F0aW9uIiwicG9pbnRTY2hlbWEiLCJvdmVyYWxsUmF0aW5nIiwiYWRkcmVzcyIsImFkZHJlc3NTY2hlbWEiLCJiYW5rSW5mbyIsImJhbmtBY2NvdW50U2NoZW1hIiwicHJvZmlsZVBpY3R1cmUiLCJoYXNoZWRQYXNzd29yZCIsInRpbWVzdGFtcHMiLCJpbmRleCIsIl9kZWZhdWx0IiwibW9uZ29vc2UiLCJtb2RlbCIsImV4cG9ydHMiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL21vZGVscy9Db21wYW55TW9kZWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlLCB7IFNjaGVtYSB9IGZyb20gJ21vbmdvb3NlJ1xuXG5pbXBvcnQgeyBJQ29tcGFueSB9IGZyb20gJy4uL2ludGVyZmFjZXMvbW9kZWxzL0NvbXBhbnknXG5cbmltcG9ydCBhZGRyZXNzU2NoZW1hIGZyb20gJy4vc2NoZW1hcy9hZGRyZXNzU2NoZW1hJ1xuaW1wb3J0IGJhbmtBY2NvdW50U2NoZW1hIGZyb20gJy4vc2NoZW1hcy9iYW5rQWNjb3VudFNjaGVtYSdcbmltcG9ydCBwb2ludFNjaGVtYSBmcm9tICcuL3NjaGVtYXMvcG9pbnRTY2hlbWEnXG5cbmNvbnN0IGpvYlR5cGVzOiBTY2hlbWEgPSBuZXcgU2NoZW1hKHtcblx0dHlwZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG5cdHJhdGluZzogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiBmYWxzZSB9LFxufSlcblxuY29uc3QgQ29tcGFueVNjaGVtYSA9IG5ldyBTY2hlbWEoXG5cdHtcblx0XHRuYW1lOiB7XG5cdFx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0XHRyZXF1aXJlZDogdHJ1ZSxcblx0XHR9LFxuXHRcdHVzZXJuYW1lOiB7XG5cdFx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0XHRyZXF1aXJlZDogdHJ1ZSxcblx0XHRcdHVuaXF1ZTogdHJ1ZSxcblx0XHR9LFxuXHRcdGRlc2NyaXB0aW9uOiB7XG5cdFx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0XHRyZXF1aXJlZDogdHJ1ZSxcblx0XHR9LFxuXHRcdGVtYWlsOiB7XG5cdFx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0XHRyZXF1aXJlZDogdHJ1ZSxcblx0XHRcdHVuaXF1ZTogdHJ1ZSxcblx0XHRcdHNlbGVjdDogZmFsc2UsXG5cdFx0fSxcblx0XHRsb2NhdGlvbjoge1xuXHRcdFx0dHlwZTogcG9pbnRTY2hlbWEsXG5cdFx0XHRyZXF1aXJlZDogdHJ1ZSxcblx0XHR9LFxuXHRcdHR5cGU6IHtcblx0XHRcdHR5cGU6IFN0cmluZyxcblx0XHRcdHJlcXVpcmVkOiB0cnVlLFxuXHRcdH0sXG5cdFx0b3ZlcmFsbFJhdGluZzoge1xuXHRcdFx0dHlwZTogTnVtYmVyLFxuXHRcdFx0cmVxdWlyZWQ6IGZhbHNlLFxuXHRcdFx0ZGVmYXVsdDogLTEsXG5cdFx0fSxcblx0XHRqb2JUeXBlczoge1xuXHRcdFx0dHlwZTogW2pvYlR5cGVzXSxcblx0XHRcdHJlcXVpcmVkOiB0cnVlLFxuXHRcdH0sXG5cdFx0YWRkcmVzczoge1xuXHRcdFx0dHlwZTogYWRkcmVzc1NjaGVtYSxcblx0XHRcdHJlcXVpcmVkOiB0cnVlLFxuXHRcdH0sXG5cdFx0YmFua0luZm86IHtcblx0XHRcdHR5cGU6IGJhbmtBY2NvdW50U2NoZW1hLFxuXHRcdFx0cmVxdWlyZWQ6IGZhbHNlLFxuXHRcdFx0c2VsZWN0OiBmYWxzZSxcblx0XHR9LFxuXHRcdHByb2ZpbGVQaWN0dXJlOiB7XG5cdFx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0fSxcblx0XHRoYXNoZWRQYXNzd29yZDoge1xuXHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0cmVxdWlyZWQ6IHRydWUsXG5cdFx0XHRzZWxlY3Q6IGZhbHNlLFxuXHRcdH0sXG5cdH0sXG5cdHtcblx0XHR0aW1lc3RhbXBzOiB0cnVlLFxuXHR9XG4pXG5cbkNvbXBhbnlTY2hlbWEuaW5kZXgoeyBsb2NhdGlvbjogJzJkc3BoZXJlJyB9KVxuXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbDxJQ29tcGFueT4oJ0NvbXBhbnknLCBDb21wYW55U2NoZW1hKVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsSUFBQUEsU0FBQSxHQUFBQyx1QkFBQSxDQUFBQyxPQUFBO0FBSUEsSUFBQUMsY0FBQSxHQUFBQyxzQkFBQSxDQUFBRixPQUFBO0FBQ0EsSUFBQUcsa0JBQUEsR0FBQUQsc0JBQUEsQ0FBQUYsT0FBQTtBQUNBLElBQUFJLFlBQUEsR0FBQUYsc0JBQUEsQ0FBQUYsT0FBQTtBQUErQyxTQUFBRSx1QkFBQUcsR0FBQSxXQUFBQSxHQUFBLElBQUFBLEdBQUEsQ0FBQUMsVUFBQSxHQUFBRCxHQUFBLGdCQUFBQSxHQUFBO0FBQUEsU0FBQUUseUJBQUFDLFdBQUEsZUFBQUMsT0FB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