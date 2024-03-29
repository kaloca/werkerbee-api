"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _AuthRouter = _interopRequireDefault(require("./Auth/AuthRouter"));
var _EditWorkerRouter = _interopRequireDefault(require("./Worker/EditWorkerRouter"));
var _JobTypeRouter = _interopRequireDefault(require("./Jobs/JobTypeRouter"));
var _CompanyRouter = _interopRequireDefault(require("./Company/CompanyRouter"));
var _JobPostingRouter = _interopRequireDefault(require("./Jobs/JobPostingRouter"));
var _WorkerRouter = _interopRequireDefault(require("./Worker/WorkerRouter"));
var _JobRouter = _interopRequireDefault(require("./Jobs/JobRouter"));
var _NotificationRouter = _interopRequireDefault(require("./Notification/NotificationRouter"));
var _ImageRouter = _interopRequireDefault(require("./Image/ImageRouter"));
var _CertificationRouter = _interopRequireDefault(require("./Certification/CertificationRouter"));
var _AdminRouter = _interopRequireDefault(require("./Admin/AdminRouter"));
var _RatingRouter = _interopRequireDefault(require("./Rating/RatingRouter"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var routes = (0, _express.Router)();
routes.use(_AuthRouter["default"]);
routes.use(_EditWorkerRouter["default"]);
routes.use(_JobTypeRouter["default"]);
routes.use(_CompanyRouter["default"]);
routes.use(_JobPostingRouter["default"]);
routes.use(_WorkerRouter["default"]);
routes.use(_JobRouter["default"]);
routes.use(_NotificationRouter["default"]);
routes.use(_ImageRouter["default"]);
routes.use(_CertificationRouter["default"]);
routes.use(_AdminRouter["default"]);
routes.use(_RatingRouter["default"]);

// Health Check
routes.get('/', function (req, res) {
  return res.status(200).json({
    message: 'Health Check OK'
  });
});
var _default = routes;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZXhwcmVzcyIsInJlcXVpcmUiLCJfQXV0aFJvdXRlciIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfRWRpdFdvcmtlclJvdXRlciIsIl9Kb2JUeXBlUm91dGVyIiwiX0NvbXBhbnlSb3V0ZXIiLCJfSm9iUG9zdGluZ1JvdXRlciIsIl9Xb3JrZXJSb3V0ZXIiLCJfSm9iUm91dGVyIiwiX05vdGlmaWNhdGlvblJvdXRlciIsIl9JbWFnZVJvdXRlciIsIl9DZXJ0aWZpY2F0aW9uUm91dGVyIiwiX0FkbWluUm91dGVyIiwiX1JhdGluZ1JvdXRlciIsIm9iaiIsIl9fZXNNb2R1bGUiLCJyb3V0ZXMiLCJSb3V0ZXIiLCJ1c2UiLCJSZWdpc3RlclJvdXRlciIsIkVkaXRXb3JrZXJSb3V0ZXIiLCJKb2JUeXBlUm91dGVyIiwiQ29tcGFueVJvdXRlciIsIkpvYlBvc3RpbmdSb3V0ZXIiLCJXb3JrZXJSb3V0ZXIiLCJKb2JSb3V0ZXIiLCJOb3RpZmljYXRpb25Sb3V0ZXIiLCJJbWFnZVJvdXRlciIsIkNlcnRpZmljYXRpb25Sb3V0ZXIiLCJBZG1pblJvdXRlciIsIlJhdGluZ1JvdXRlciIsImdldCIsInJlcSIsInJlcyIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiX2RlZmF1bHQiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9yb3V0ZXMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcydcblxuaW1wb3J0IFJlZ2lzdGVyUm91dGVyIGZyb20gJy4vQXV0aC9BdXRoUm91dGVyJ1xuaW1wb3J0IEVkaXRXb3JrZXJSb3V0ZXIgZnJvbSAnLi9Xb3JrZXIvRWRpdFdvcmtlclJvdXRlcidcbmltcG9ydCBKb2JUeXBlUm91dGVyIGZyb20gJy4vSm9icy9Kb2JUeXBlUm91dGVyJ1xuaW1wb3J0IENvbXBhbnlSb3V0ZXIgZnJvbSAnLi9Db21wYW55L0NvbXBhbnlSb3V0ZXInXG5pbXBvcnQgSm9iUG9zdGluZ1JvdXRlciBmcm9tICcuL0pvYnMvSm9iUG9zdGluZ1JvdXRlcidcbmltcG9ydCBXb3JrZXJSb3V0ZXIgZnJvbSAnLi9Xb3JrZXIvV29ya2VyUm91dGVyJ1xuaW1wb3J0IEpvYlJvdXRlciBmcm9tICcuL0pvYnMvSm9iUm91dGVyJ1xuaW1wb3J0IE5vdGlmaWNhdGlvblJvdXRlciBmcm9tICcuL05vdGlmaWNhdGlvbi9Ob3RpZmljYXRpb25Sb3V0ZXInXG5pbXBvcnQgSW1hZ2VSb3V0ZXIgZnJvbSAnLi9JbWFnZS9JbWFnZVJvdXRlcidcbmltcG9ydCBDZXJ0aWZpY2F0aW9uUm91dGVyIGZyb20gJy4vQ2VydGlmaWNhdGlvbi9DZXJ0aWZpY2F0aW9uUm91dGVyJ1xuaW1wb3J0IEFkbWluUm91dGVyIGZyb20gJy4vQWRtaW4vQWRtaW5Sb3V0ZXInXG5pbXBvcnQgUmF0aW5nUm91dGVyIGZyb20gJy4vUmF0aW5nL1JhdGluZ1JvdXRlcidcblxuY29uc3Qgcm91dGVzID0gUm91dGVyKClcblxucm91dGVzLnVzZShSZWdpc3RlclJvdXRlcilcbnJvdXRlcy51c2UoRWRpdFdvcmtlclJvdXRlcilcbnJvdXRlcy51c2UoSm9iVHlwZVJvdXRlcilcbnJvdXRlcy51c2UoQ29tcGFueVJvdXRlcilcbnJvdXRlcy51c2UoSm9iUG9zdGluZ1JvdXRlcilcbnJvdXRlcy51c2UoV29ya2VyUm91dGVyKVxucm91dGVzLnVzZShKb2JSb3V0ZXIpXG5yb3V0ZXMudXNlKE5vdGlmaWNhdGlvblJvdXRlcilcbnJvdXRlcy51c2UoSW1hZ2VSb3V0ZXIpXG5yb3V0ZXMudXNlKENlcnRpZmljYXRpb25Sb3V0ZXIpXG5yb3V0ZXMudXNlKEFkbWluUm91dGVyKVxucm91dGVzLnVzZShSYXRpbmdSb3V0ZXIpXG5cbi8vIEhlYWx0aCBDaGVja1xucm91dGVzLmdldCgnLycsIChyZXEsIHJlcykgPT5cblx0cmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiAnSGVhbHRoIENoZWNrIE9LJyB9KVxuKVxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXNcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBQUEsUUFBQSxHQUFBQyxPQUFBO0FBRUEsSUFBQUMsV0FBQSxHQUFBQyxzQkFBQSxDQUFBRixPQUFBO0FBQ0EsSUFBQUcsaUJBQUEsR0FBQUQsc0JBQUEsQ0FBQUYsT0FBQTtBQUNBLElBQUFJLGNBQUEsR0FBQUYsc0JBQUEsQ0FBQUYsT0FBQTtBQUNBLElBQUFLLGNBQUEsR0FBQUgsc0JBQUEsQ0FBQUYsT0FBQTtBQUNBLElBQUFNLGlCQUFBLEdBQUFKLHNCQUFBLENBQUFGLE9BQUE7QUFDQSxJQUFBTyxhQUFBLEdBQUFMLHNCQUFBLENBQUFGLE9BQUE7QUFDQSxJQUFBUSxVQUFBLEdBQUFOLHNCQUFBLENBQUFGLE9BQUE7QUFDQSxJQUFBUyxtQkFBQSxHQUFBUCxzQkFBQSxDQUFBRixPQUFBO0FBQ0EsSUFBQVUsWUFBQSxHQUFBUixzQkFBQSxDQUFBRixPQUFBO0FBQ0EsSUFBQVcsb0JBQUEsR0FBQVQsc0JBQUEsQ0FBQUYsT0FBQTtBQUNBLElBQUFZLFlBQUEsR0FBQVYsc0JBQUEsQ0FBQUYsT0FBQTtBQUNBLElBQUFhLGFBQUEsR0FBQVgsc0JBQUEsQ0FBQUYsT0FBQTtBQUFnRCxTQUFBRSx1QkFBQVksR0FBQSxXQUFBQSxHQUFBLElBQUFBLEdBQUEsQ0FBQUMsVUFBQSxHQUFBRCxHQUFBLGdCQUFBQSxHQUFBO0FBRWhELElBQU1FLE1BQU0sR0FBRyxJQUFBQyxlQUFNLEVBQUMsQ0FBQztBQUV2QkQsTUFBTSxDQUFDRSxHQUFHLENBQUNDLHNCQUFjLENBQUM7QUFDMUJILE1BQU0sQ0FBQ0UsR0FBRyxDQUFDRSw0QkFBZ0IsQ0FBQztBQUM1QkosTUFBTSxDQUFDRSxHQUFHLENBQUNHLHlCQUFhLENBQUM7QUFDekJMLE1BQU0sQ0FBQ0UsR0FBRyxDQUFDSSx5QkFBYSxDQUFDO0FBQ3pCTixNQUFNLENBQUNFLEdBQUcsQ0FBQ0ssNEJBQWdCLENBQUM7QUFDNUJQLE1BQU0sQ0FBQ0UsR0FBRyxDQUFDTSx3QkFBWSxDQUFDO0FBQ3hCUixNQUFNLENBQUNFLEdBQUcsQ0FBQ08scUJBQVMsQ0FBQztBQUNyQlQsTUFBTSxDQUFDRSxHQUFHLENBQUNRLDhCQUFrQixDQUFDO0FBQzlCVixNQUFNLENBQUNFLEdBQUcsQ0FBQ1MsdUJBQVcsQ0FBQztBQUN2QlgsTUFBTSxDQUFDRSxHQUFHLENBQUNVLCtCQUFtQixDQUFDO0FBQy9CWixNQUFNLENBQUNFLEdBQUcsQ0FBQ1csdUJBQVcsQ0FBQztBQUN2QmIsTUFBTSxDQUFDRSxHQUFHLENBQUNZLHdCQUFZLENBQUM7O0FBRXhCO0FBQ0FkLE1BQU0sQ0FBQ2UsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFDQyxHQUFHLEVBQUVDLEdBQUc7RUFBQSxPQUN4QkEsR0FBRyxDQUFDQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztJQUFFQyxPQUFPLEVBQUU7RUFBa0IsQ0FBQyxDQUFDO0FBQUEsQ0FDckQsQ0FBQztBQUFBLElBQUFDLFFBQUEsR0FFY3JCLE1BQU07QUFBQXNCLE9BQUEsY0FBQUQsUUFBQSJ9