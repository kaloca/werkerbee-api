"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var pointSchema = new _mongoose.Schema({
  type: {
    type: String,
    "enum": ['Point'],
    required: true
  },
  coordinates: {
    type: [Number],
    required: true
  }
});
var _default = pointSchema;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9uZ29vc2UiLCJyZXF1aXJlIiwicG9pbnRTY2hlbWEiLCJTY2hlbWEiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJjb29yZGluYXRlcyIsIk51bWJlciIsIl9kZWZhdWx0IiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvbW9kZWxzL3NjaGVtYXMvcG9pbnRTY2hlbWEudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2NoZW1hIH0gZnJvbSAnbW9uZ29vc2UnXG5cbmNvbnN0IHBvaW50U2NoZW1hOiBTY2hlbWEgPSBuZXcgU2NoZW1hKHtcblx0dHlwZToge1xuXHRcdHR5cGU6IFN0cmluZyxcblx0XHRlbnVtOiBbJ1BvaW50J10sXG5cdFx0cmVxdWlyZWQ6IHRydWUsXG5cdH0sXG5cdGNvb3JkaW5hdGVzOiB7XG5cdFx0dHlwZTogW051bWJlcl0sXG5cdFx0cmVxdWlyZWQ6IHRydWUsXG5cdH0sXG59KVxuXG5leHBvcnQgZGVmYXVsdCBwb2ludFNjaGVtYVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFBQSxTQUFBLEdBQUFDLE9BQUE7QUFFQSxJQUFNQyxXQUFtQixHQUFHLElBQUlDLGdCQUFNLENBQUM7RUFDdENDLElBQUksRUFBRTtJQUNMQSxJQUFJLEVBQUVDLE1BQU07SUFDWixRQUFNLENBQUMsT0FBTyxDQUFDO0lBQ2ZDLFFBQVEsRUFBRTtFQUNYLENBQUM7RUFDREMsV0FBVyxFQUFFO0lBQ1pILElBQUksRUFBRSxDQUFDSSxNQUFNLENBQUM7SUFDZEYsUUFBUSxFQUFFO0VBQ1g7QUFDRCxDQUFDLENBQUM7QUFBQSxJQUFBRyxRQUFBLEdBRWFQLFdBQVc7QUFBQVEsT0FBQSxjQUFBRCxRQUFBIn0=