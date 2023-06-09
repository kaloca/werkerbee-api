"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SESSION_SECRET = exports.MONGODB_URI = exports.ENVIRONMENT = exports.AUTH_SECRET = void 0;
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_dotenv["default"].config({
  path: '.env'
});
var ENVIRONMENT = process.env.NODE_ENV;
exports.ENVIRONMENT = ENVIRONMENT;
var prod = ENVIRONMENT === 'production'; // Anything else is treated as 'dev'

var SESSION_SECRET = process.env['SESSION_SECRET'];
exports.SESSION_SECRET = SESSION_SECRET;
var AUTH_SECRET = process.env['AUTH_SECRET'];
exports.AUTH_SECRET = AUTH_SECRET;
var MONGODB_URI = prod ? process.env['MONGODB_URI'] : process.env['MONGODB_URI_LOCAL'];
exports.MONGODB_URI = MONGODB_URI;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZG90ZW52IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJvYmoiLCJfX2VzTW9kdWxlIiwiZG90ZW52IiwiY29uZmlnIiwicGF0aCIsIkVOVklST05NRU5UIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiZXhwb3J0cyIsInByb2QiLCJTRVNTSU9OX1NFQ1JFVCIsIkFVVEhfU0VDUkVUIiwiTU9OR09EQl9VUkkiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL3V0aWwvc2VjcmV0cy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZG90ZW52IGZyb20gJ2RvdGVudidcblxuZG90ZW52LmNvbmZpZyh7IHBhdGg6ICcuZW52JyB9KVxuXG5leHBvcnQgY29uc3QgRU5WSVJPTk1FTlQgPSBwcm9jZXNzLmVudi5OT0RFX0VOVlxuY29uc3QgcHJvZCA9IEVOVklST05NRU5UID09PSAncHJvZHVjdGlvbicgLy8gQW55dGhpbmcgZWxzZSBpcyB0cmVhdGVkIGFzICdkZXYnXG5cbmV4cG9ydCBjb25zdCBTRVNTSU9OX1NFQ1JFVCA9IHByb2Nlc3MuZW52WydTRVNTSU9OX1NFQ1JFVCddXG5leHBvcnQgY29uc3QgQVVUSF9TRUNSRVQgPSBwcm9jZXNzLmVudlsnQVVUSF9TRUNSRVQnXVxuXG5leHBvcnQgY29uc3QgTU9OR09EQl9VUkkgPSBwcm9kXG5cdD8gcHJvY2Vzcy5lbnZbJ01PTkdPREJfVVJJJ11cblx0OiBwcm9jZXNzLmVudlsnTU9OR09EQl9VUklfTE9DQUwnXVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFBQSxPQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFBMkIsU0FBQUQsdUJBQUFFLEdBQUEsV0FBQUEsR0FBQSxJQUFBQSxHQUFBLENBQUFDLFVBQUEsR0FBQUQsR0FBQSxnQkFBQUEsR0FBQTtBQUUzQkUsa0JBQU0sQ0FBQ0MsTUFBTSxDQUFDO0VBQUVDLElBQUksRUFBRTtBQUFPLENBQUMsQ0FBQztBQUV4QixJQUFNQyxXQUFXLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxRQUFRO0FBQUFDLE9BQUEsQ0FBQUosV0FBQSxHQUFBQSxXQUFBO0FBQy9DLElBQU1LLElBQUksR0FBR0wsV0FBVyxLQUFLLFlBQVksRUFBQzs7QUFFbkMsSUFBTU0sY0FBYyxHQUFHTCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztBQUFBRSxPQUFBLENBQUFFLGNBQUEsR0FBQUEsY0FBQTtBQUNwRCxJQUFNQyxXQUFXLEdBQUdOLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsQ0FBQztBQUFBRSxPQUFBLENBQUFHLFdBQUEsR0FBQUEsV0FBQTtBQUU5QyxJQUFNQyxXQUFXLEdBQUdILElBQUksR0FDNUJKLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsQ0FBQyxHQUMxQkQsT0FBTyxDQUFDQyxHQUFHLENBQUMsbUJBQW1CLENBQUM7QUFBQUUsT0FBQSxDQUFBSSxXQUFBLEdBQUFBLFdBQUEifQ==