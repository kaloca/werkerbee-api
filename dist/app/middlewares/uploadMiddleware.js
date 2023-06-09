"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _path = _interopRequireDefault(require("path"));
var _multer = _interopRequireDefault(require("multer"));
var _multerS = _interopRequireDefault(require("multer-s3"));
var _awsConfig = _interopRequireDefault(require("../../config/awsConfig"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var upload = (0, _multer["default"])({
  storage: (0, _multerS["default"])({
    s3: _awsConfig["default"],
    acl: 'public-read',
    bucket: process.env.AWS_BUCKET,
    contentType: _multerS["default"].AUTO_CONTENT_TYPE,
    key: function key(req, file, cb) {
      var fileName = "".concat(Date.now(), "_").concat(Math.round(Math.random() * 1e9));
      cb(null, "".concat(fileName).concat(_path["default"].extname(file.originalname)));
    }
  })
});
var _default = upload;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGF0aCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX211bHRlciIsIl9tdWx0ZXJTIiwiX2F3c0NvbmZpZyIsIm9iaiIsIl9fZXNNb2R1bGUiLCJ1cGxvYWQiLCJtdWx0ZXIiLCJzdG9yYWdlIiwibXVsdGVyUzMiLCJzMyIsImFjbCIsImJ1Y2tldCIsInByb2Nlc3MiLCJlbnYiLCJBV1NfQlVDS0VUIiwiY29udGVudFR5cGUiLCJBVVRPX0NPTlRFTlRfVFlQRSIsImtleSIsInJlcSIsImZpbGUiLCJjYiIsImZpbGVOYW1lIiwiY29uY2F0IiwiRGF0ZSIsIm5vdyIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsInBhdGgiLCJleHRuYW1lIiwib3JpZ2luYWxuYW1lIiwiX2RlZmF1bHQiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9taWRkbGV3YXJlcy91cGxvYWRNaWRkbGV3YXJlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgbXVsdGVyIGZyb20gJ211bHRlcidcbmltcG9ydCBtdWx0ZXJTMyBmcm9tICdtdWx0ZXItczMnXG5cbmltcG9ydCBzMyBmcm9tICdAL2NvbmZpZy9hd3NDb25maWcnXG5cbmNvbnN0IHVwbG9hZCA9IG11bHRlcih7XG5cdHN0b3JhZ2U6IG11bHRlclMzKHtcblx0XHRzMyxcblx0XHRhY2w6ICdwdWJsaWMtcmVhZCcsXG5cdFx0YnVja2V0OiBwcm9jZXNzLmVudi5BV1NfQlVDS0VUISxcblx0XHRjb250ZW50VHlwZTogbXVsdGVyUzMuQVVUT19DT05URU5UX1RZUEUsXG5cdFx0a2V5OiAocmVxLCBmaWxlLCBjYikgPT4ge1xuXHRcdFx0Y29uc3QgZmlsZU5hbWUgPSBgJHtEYXRlLm5vdygpfV8ke01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDFlOSl9YFxuXHRcdFx0Y2IobnVsbCwgYCR7ZmlsZU5hbWV9JHtwYXRoLmV4dG5hbWUoZmlsZS5vcmlnaW5hbG5hbWUpfWApXG5cdFx0fSxcblx0fSksXG59KVxuXG5leHBvcnQgZGVmYXVsdCB1cGxvYWRcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBQUEsS0FBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUMsT0FBQSxHQUFBRixzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUUsUUFBQSxHQUFBSCxzQkFBQSxDQUFBQyxPQUFBO0FBRUEsSUFBQUcsVUFBQSxHQUFBSixzQkFBQSxDQUFBQyxPQUFBO0FBQW1DLFNBQUFELHVCQUFBSyxHQUFBLFdBQUFBLEdBQUEsSUFBQUEsR0FBQSxDQUFBQyxVQUFBLEdBQUFELEdBQUEsZ0JBQUFBLEdBQUE7QUFFbkMsSUFBTUUsTUFBTSxHQUFHLElBQUFDLGtCQUFNLEVBQUM7RUFDckJDLE9BQU8sRUFBRSxJQUFBQyxtQkFBUSxFQUFDO0lBQ2pCQyxFQUFFLEVBQUZBLHFCQUFFO0lBQ0ZDLEdBQUcsRUFBRSxhQUFhO0lBQ2xCQyxNQUFNLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxVQUFXO0lBQy9CQyxXQUFXLEVBQUVQLG1CQUFRLENBQUNRLGlCQUFpQjtJQUN2Q0MsR0FBRyxFQUFFLFNBQUFBLElBQUNDLEdBQUcsRUFBRUMsSUFBSSxFQUFFQyxFQUFFLEVBQUs7TUFDdkIsSUFBTUMsUUFBUSxNQUFBQyxNQUFBLENBQU1DLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUMsT0FBQUYsTUFBQSxDQUFJRyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFFO01BQ25FUCxFQUFFLENBQUMsSUFBSSxLQUFBRSxNQUFBLENBQUtELFFBQVEsRUFBQUMsTUFBQSxDQUFHTSxnQkFBSSxDQUFDQyxPQUFPLENBQUNWLElBQUksQ0FBQ1csWUFBWSxDQUFDLENBQUUsQ0FBQztJQUMxRDtFQUNELENBQUM7QUFDRixDQUFDLENBQUM7QUFBQSxJQUFBQyxRQUFBLEdBRWExQixNQUFNO0FBQUEyQixPQUFBLGNBQUFELFFBQUEifQ==