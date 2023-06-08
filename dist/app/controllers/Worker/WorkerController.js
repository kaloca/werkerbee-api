"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _moment = _interopRequireDefault(require("moment"));
var _WorkerModel = _interopRequireDefault(require("../../models/WorkerModel"));
var _JobModel = _interopRequireDefault(require("../../models/JobModel"));
var _JobApplicationModel = _interopRequireDefault(require("../../models/JobApplicationModel"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var getWorkerProfile = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _req$user, workerId, worker;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          workerId = (_req$user = req.user) === null || _req$user === void 0 ? void 0 : _req$user.userId;
          _context.next = 4;
          return _WorkerModel["default"].findById(workerId).select('+address');
        case 4:
          worker = _context.sent;
          if (worker) {
            _context.next = 7;
            break;
          }
          return _context.abrupt("return", res.status(404).json({
            message: 'Worker not found.'
          }));
        case 7:
          return _context.abrupt("return", res.status(200).json({
            worker: worker
          }));
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          return _context.abrupt("return", res.sendStatus(400));
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 10]]);
  }));
  return function getWorkerProfile(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getWorkerPublicProfile = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var username, worker, name, location, rating, jobTypes, experiences, address;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          username = req.params.username;
          _context2.next = 4;
          return _WorkerModel["default"].findOne({
            username: username
          });
        case 4:
          worker = _context2.sent;
          if (worker) {
            _context2.next = 7;
            break;
          }
          return _context2.abrupt("return", res.status(404).json({
            message: 'Worker not found.'
          }));
        case 7:
          name = worker.name, location = worker.location, rating = worker.rating, jobTypes = worker.jobTypes, experiences = worker.experiences, address = worker.address;
          return _context2.abrupt("return", res.status(200).json({
            name: name,
            location: location,
            rating: rating,
            jobTypes: jobTypes,
            experiences: experiences,
            address: address
          }));
        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
          return _context2.abrupt("return", res.sendStatus(400));
        case 15:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 11]]);
  }));
  return function getWorkerPublicProfile(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var getApplications = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var _req$user2;
    var username, workerId, worker, applications;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          username = req.params.username;
          workerId = (_req$user2 = req.user) === null || _req$user2 === void 0 ? void 0 : _req$user2.userId;
          _context3.prev = 2;
          _context3.next = 5;
          return _WorkerModel["default"].findOne({
            username: username
          });
        case 5:
          worker = _context3.sent;
          if (worker) {
            _context3.next = 8;
            break;
          }
          return _context3.abrupt("return", res.status(404).json({
            message: 'Worker not found'
          }));
        case 8:
          if (!(workerId != worker._id)) {
            _context3.next = 10;
            break;
          }
          return _context3.abrupt("return", res.status(403).json({
            message: 'Unauthorized'
          }));
        case 10:
          _context3.next = 12;
          return _JobApplicationModel["default"].find({
            worker: workerId
          }).populate('jobPosting company');
        case 12:
          applications = _context3.sent;
          res.status(200).json(applications);
          _context3.next = 19;
          break;
        case 16:
          _context3.prev = 16;
          _context3.t0 = _context3["catch"](2);
          res.status(500).json({
            message: 'Server error'
          });
        case 19:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[2, 16]]);
  }));
  return function getApplications(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var getJobs = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var _req$user3;
    var username, workerId, worker, jobs;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          username = req.params.username;
          workerId = (_req$user3 = req.user) === null || _req$user3 === void 0 ? void 0 : _req$user3.userId;
          _context4.prev = 2;
          _context4.next = 5;
          return _WorkerModel["default"].findOne({
            username: username
          });
        case 5:
          worker = _context4.sent;
          if (worker) {
            _context4.next = 8;
            break;
          }
          return _context4.abrupt("return", res.status(404).json({
            message: 'Worker not found'
          }));
        case 8:
          if (!(workerId != worker.id)) {
            _context4.next = 10;
            break;
          }
          return _context4.abrupt("return", res.status(401).json({
            message: 'Unauthorized'
          }));
        case 10:
          _context4.next = 12;
          return _JobModel["default"].find({
            workerId: workerId
          }).populate('jobPostingId');
        case 12:
          jobs = _context4.sent;
          if (jobs) {
            _context4.next = 15;
            break;
          }
          return _context4.abrupt("return", res.status(404).json({
            message: "Worker doesn't have any jobs"
          }));
        case 15:
          res.status(200).json(jobs);
          _context4.next = 21;
          break;
        case 18:
          _context4.prev = 18;
          _context4.t0 = _context4["catch"](2);
          res.status(500).json({
            message: 'Server error'
          });
        case 21:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[2, 18]]);
  }));
  return function getJobs(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var getJobsCalendar = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var numberOfDays, startOfWeek, endDate, jobs, days, _loop, m;
    return _regeneratorRuntime().wrap(function _callee5$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          // Get number of days from request or default to 7
          numberOfDays = Number(req.query.days) || 7; // Get start of the current week
          startOfWeek = (0, _moment["default"])().startOf('week'); // Get end date based on numberOfDays
          endDate = startOfWeek.clone().add(numberOfDays, 'days'); // Find jobs between startOfWeek and endDate
          _context6.next = 5;
          return _JobModel["default"].find({
            shiftStart: {
              $gte: startOfWeek.toDate(),
              $lt: endDate.toDate()
            }
          }).lean();
        case 5:
          jobs = _context6.sent;
          days = []; // Loop through each day and add events
          _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop(m) {
            var dateStr, dayJobs;
            return _regeneratorRuntime().wrap(function _loop$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  dateStr = m.format('YYYY-MM-DD'); // Filter events for the current day
                  dayJobs = jobs.filter(function (e) {
                    return (0, _moment["default"])(e.shiftStart).isSame(m, 'day');
                  });
                  days.push({
                    date: dateStr,
                    isCurrentMonth: m.isSame(new Date(), 'month'),
                    isToday: m.isSame(new Date(), 'day'),
                    events: dayJobs.map(function (job) {
                      return {
                        id: job._id,
                        name: job.name,
                        start: job.shiftStart.toISOString(),
                        end: job.shiftEnd.toISOString()
                      };
                    })
                  });
                case 3:
                case "end":
                  return _context5.stop();
              }
            }, _loop);
          });
          m = startOfWeek;
        case 9:
          if (!m.isBefore(endDate)) {
            _context6.next = 14;
            break;
          }
          return _context6.delegateYield(_loop(m), "t0", 11);
        case 11:
          m.add(1, 'days');
          _context6.next = 9;
          break;
        case 14:
          return _context6.abrupt("return", res.status(200).json(days));
        case 15:
        case "end":
          return _context6.stop();
      }
    }, _callee5);
  }));
  return function getJobsCalendar(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var WorkerController = {
  getWorkerProfile: getWorkerProfile,
  getWorkerPublicProfile: getWorkerPublicProfile,
  getApplications: getApplications,
  getJobs: getJobs,
  getJobsCalendar: getJobsCalendar
};
var _default = WorkerController;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9tZW50IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfV29ya2VyTW9kZWwiLCJfSm9iTW9kZWwiLCJfSm9iQXBwbGljYXRpb25Nb2RlbCIsIm9iaiIsIl9fZXNNb2R1bGUiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZXhwb3J0cyIsIk9wIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCJkZWZpbmVQcm9wZXJ0eSIsImtleSIsImRlc2MiLCJ2YWx1ZSIsIiRTeW1ib2wiLCJTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZXJyIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImZuIiwiYXJnIiwidHlwZSIsImNhbGwiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJfdHlwZW9mIiwiX19hd2FpdCIsInRoZW4iLCJ1bndyYXBwZWQiLCJlcnJvciIsInByZXZpb3VzUHJvbWlzZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwic3RhdGUiLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiZG9uZSIsIm1ldGhvZE5hbWUiLCJ1bmRlZmluZWQiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJsZW5ndGgiLCJpIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwiaXRlciIsImtleXMiLCJ2YWwiLCJvYmplY3QiLCJyZXZlcnNlIiwicG9wIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsIl9uZXh0IiwiX3Rocm93IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJnZXRXb3JrZXJQcm9maWxlIiwiX3JlZiIsIl9jYWxsZWUiLCJyZXEiLCJyZXMiLCJfcmVxJHVzZXIiLCJ3b3JrZXJJZCIsIndvcmtlciIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJ1c2VyIiwidXNlcklkIiwiV29ya2VyTW9kZWwiLCJmaW5kQnlJZCIsInNlbGVjdCIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwidDAiLCJjb25zb2xlIiwibG9nIiwic2VuZFN0YXR1cyIsIl94IiwiX3gyIiwiZ2V0V29ya2VyUHVibGljUHJvZmlsZSIsIl9yZWYyIiwiX2NhbGxlZTIiLCJ1c2VybmFtZSIsImxvY2F0aW9uIiwicmF0aW5nIiwiam9iVHlwZXMiLCJleHBlcmllbmNlcyIsImFkZHJlc3MiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJwYXJhbXMiLCJmaW5kT25lIiwiX3gzIiwiX3g0IiwiZ2V0QXBwbGljYXRpb25zIiwiX3JlZjMiLCJfY2FsbGVlMyIsIl9yZXEkdXNlcjIiLCJhcHBsaWNhdGlvbnMiLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiLCJfaWQiLCJKb2JBcHBsaWNhdGlvbk1vZGVsIiwiZmluZCIsInBvcHVsYXRlIiwiX3g1IiwiX3g2IiwiZ2V0Sm9icyIsIl9yZWY0IiwiX2NhbGxlZTQiLCJfcmVxJHVzZXIzIiwiam9icyIsIl9jYWxsZWU0JCIsIl9jb250ZXh0NCIsImlkIiwiSm9iTW9kZWwiLCJfeDciLCJfeDgiLCJnZXRKb2JzQ2FsZW5kYXIiLCJfcmVmNSIsIl9jYWxsZWU1IiwibnVtYmVyT2ZEYXlzIiwic3RhcnRPZldlZWsiLCJlbmREYXRlIiwiZGF5cyIsIl9sb29wIiwibSIsIl9jYWxsZWU1JCIsIl9jb250ZXh0NiIsIk51bWJlciIsInF1ZXJ5IiwibW9tZW50Iiwic3RhcnRPZiIsImNsb25lIiwiYWRkIiwic2hpZnRTdGFydCIsIiRndGUiLCJ0b0RhdGUiLCIkbHQiLCJsZWFuIiwiZGF0ZVN0ciIsImRheUpvYnMiLCJfbG9vcCQiLCJfY29udGV4dDUiLCJmb3JtYXQiLCJmaWx0ZXIiLCJlIiwiaXNTYW1lIiwiZGF0ZSIsImlzQ3VycmVudE1vbnRoIiwiRGF0ZSIsImlzVG9kYXkiLCJldmVudHMiLCJtYXAiLCJqb2IiLCJzdGFydCIsInRvSVNPU3RyaW5nIiwiZW5kIiwic2hpZnRFbmQiLCJpc0JlZm9yZSIsIl94OSIsIl94MTAiLCJXb3JrZXJDb250cm9sbGVyIiwiX2RlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBwL2NvbnRyb2xsZXJzL1dvcmtlci9Xb3JrZXJDb250cm9sbGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcydcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuXG5pbXBvcnQgeyBJV29ya2VyIH0gZnJvbSAnQC9hcHAvaW50ZXJmYWNlcy9tb2RlbHMvV29ya2VyJ1xuaW1wb3J0IFdvcmtlck1vZGVsIGZyb20gJ0AvYXBwL21vZGVscy9Xb3JrZXJNb2RlbCdcbmltcG9ydCBKb2JNb2RlbCBmcm9tICdAL2FwcC9tb2RlbHMvSm9iTW9kZWwnXG5pbXBvcnQgeyBJSm9iIH0gZnJvbSAnQC9hcHAvaW50ZXJmYWNlcy9tb2RlbHMvSm9iJ1xuaW1wb3J0IHsgSUpvYkFwcGxpY2F0aW9uIH0gZnJvbSAnQC9hcHAvaW50ZXJmYWNlcy9tb2RlbHMvSm9iQXBwbGljYXRpb24nXG5pbXBvcnQgSm9iQXBwbGljYXRpb25Nb2RlbCBmcm9tICdAL2FwcC9tb2RlbHMvSm9iQXBwbGljYXRpb25Nb2RlbCdcblxuY29uc3QgZ2V0V29ya2VyUHJvZmlsZSA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCB3b3JrZXJJZCA9IHJlcS51c2VyPy51c2VySWRcblxuXHRcdGNvbnN0IHdvcmtlcjogSVdvcmtlciB8IG51bGwgPSBhd2FpdCBXb3JrZXJNb2RlbC5maW5kQnlJZCh3b3JrZXJJZCkuc2VsZWN0KFxuXHRcdFx0JythZGRyZXNzJ1xuXHRcdClcblxuXHRcdGlmICghd29ya2VyKSB7XG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlOiAnV29ya2VyIG5vdCBmb3VuZC4nIH0pXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgd29ya2VyIH0pXG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5sb2coZXJyb3IpXG5cdFx0cmV0dXJuIHJlcy5zZW5kU3RhdHVzKDQwMClcblx0fVxufVxuXG5jb25zdCBnZXRXb3JrZXJQdWJsaWNQcm9maWxlID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHVzZXJuYW1lID0gcmVxLnBhcmFtcy51c2VybmFtZVxuXG5cdFx0Y29uc3Qgd29ya2VyOiBJV29ya2VyIHwgbnVsbCA9IGF3YWl0IFdvcmtlck1vZGVsLmZpbmRPbmUoeyB1c2VybmFtZSB9KVxuXG5cdFx0aWYgKCF3b3JrZXIpIHtcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6ICdXb3JrZXIgbm90IGZvdW5kLicgfSlcblx0XHR9XG5cblx0XHRjb25zdCB7IG5hbWUsIGxvY2F0aW9uLCByYXRpbmcsIGpvYlR5cGVzLCBleHBlcmllbmNlcywgYWRkcmVzcyB9ID0gd29ya2VyXG5cblx0XHRyZXR1cm4gcmVzXG5cdFx0XHQuc3RhdHVzKDIwMClcblx0XHRcdC5qc29uKHsgbmFtZSwgbG9jYXRpb24sIHJhdGluZywgam9iVHlwZXMsIGV4cGVyaWVuY2VzLCBhZGRyZXNzIH0pXG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5sb2coZXJyb3IpXG5cdFx0cmV0dXJuIHJlcy5zZW5kU3RhdHVzKDQwMClcblx0fVxufVxuXG5jb25zdCBnZXRBcHBsaWNhdGlvbnMgPSBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG5cdGNvbnN0IHVzZXJuYW1lID0gcmVxLnBhcmFtcy51c2VybmFtZVxuXHRjb25zdCB3b3JrZXJJZCA9IHJlcS51c2VyPy51c2VySWRcblx0dHJ5IHtcblx0XHRjb25zdCB3b3JrZXIgPSBhd2FpdCBXb3JrZXJNb2RlbC5maW5kT25lKHsgdXNlcm5hbWUgfSlcblxuXHRcdGlmICghd29ya2VyKSB7XG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlOiAnV29ya2VyIG5vdCBmb3VuZCcgfSlcblx0XHR9XG5cblx0XHRpZiAod29ya2VySWQgIT0gd29ya2VyLl9pZCkge1xuXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDAzKS5qc29uKHsgbWVzc2FnZTogJ1VuYXV0aG9yaXplZCcgfSlcblx0XHR9XG5cblx0XHRjb25zdCBhcHBsaWNhdGlvbnM6IElKb2JBcHBsaWNhdGlvbltdIHwgbnVsbCA9XG5cdFx0XHRhd2FpdCBKb2JBcHBsaWNhdGlvbk1vZGVsLmZpbmQoe1xuXHRcdFx0XHR3b3JrZXI6IHdvcmtlcklkLFxuXHRcdFx0fSkucG9wdWxhdGUoJ2pvYlBvc3RpbmcgY29tcGFueScpXG5cblx0XHRyZXMuc3RhdHVzKDIwMCkuanNvbihhcHBsaWNhdGlvbnMpXG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0cmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnU2VydmVyIGVycm9yJyB9KVxuXHR9XG59XG5cbmNvbnN0IGdldEpvYnMgPSBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG5cdGNvbnN0IHVzZXJuYW1lID0gcmVxLnBhcmFtcy51c2VybmFtZVxuXHRjb25zdCB3b3JrZXJJZCA9IHJlcS51c2VyPy51c2VySWRcblxuXHR0cnkge1xuXHRcdGNvbnN0IHdvcmtlcjogSVdvcmtlciB8IG51bGwgPSBhd2FpdCBXb3JrZXJNb2RlbC5maW5kT25lKHsgdXNlcm5hbWUgfSlcblxuXHRcdGlmICghd29ya2VyKSB7XG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlOiAnV29ya2VyIG5vdCBmb3VuZCcgfSlcblx0XHR9XG5cblx0XHRpZiAod29ya2VySWQgIT0gd29ya2VyLmlkKSB7XG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBtZXNzYWdlOiAnVW5hdXRob3JpemVkJyB9KVxuXHRcdH1cblxuXHRcdGNvbnN0IGpvYnM6IElKb2JbXSA9IGF3YWl0IEpvYk1vZGVsLmZpbmQoeyB3b3JrZXJJZCB9KS5wb3B1bGF0ZShcblx0XHRcdCdqb2JQb3N0aW5nSWQnXG5cdFx0KVxuXG5cdFx0aWYgKCFqb2JzKSB7XG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlOiBcIldvcmtlciBkb2Vzbid0IGhhdmUgYW55IGpvYnNcIiB9KVxuXHRcdH1cblxuXHRcdHJlcy5zdGF0dXMoMjAwKS5qc29uKGpvYnMpXG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0cmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnU2VydmVyIGVycm9yJyB9KVxuXHR9XG59XG5cbmNvbnN0IGdldEpvYnNDYWxlbmRhciA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcblx0Ly8gR2V0IG51bWJlciBvZiBkYXlzIGZyb20gcmVxdWVzdCBvciBkZWZhdWx0IHRvIDdcblx0Y29uc3QgbnVtYmVyT2ZEYXlzID0gTnVtYmVyKHJlcS5xdWVyeS5kYXlzKSB8fCA3XG5cblx0Ly8gR2V0IHN0YXJ0IG9mIHRoZSBjdXJyZW50IHdlZWtcblx0Y29uc3Qgc3RhcnRPZldlZWsgPSBtb21lbnQoKS5zdGFydE9mKCd3ZWVrJylcblxuXHQvLyBHZXQgZW5kIGRhdGUgYmFzZWQgb24gbnVtYmVyT2ZEYXlzXG5cdGNvbnN0IGVuZERhdGUgPSBzdGFydE9mV2Vlay5jbG9uZSgpLmFkZChudW1iZXJPZkRheXMsICdkYXlzJylcblxuXHQvLyBGaW5kIGpvYnMgYmV0d2VlbiBzdGFydE9mV2VlayBhbmQgZW5kRGF0ZVxuXHRjb25zdCBqb2JzID0gYXdhaXQgSm9iTW9kZWwuZmluZCh7XG5cdFx0c2hpZnRTdGFydDoge1xuXHRcdFx0JGd0ZTogc3RhcnRPZldlZWsudG9EYXRlKCksXG5cdFx0XHQkbHQ6IGVuZERhdGUudG9EYXRlKCksXG5cdFx0fSxcblx0fSkubGVhbigpXG5cblx0Y29uc3QgZGF5cyA9IFtdXG5cblx0Ly8gTG9vcCB0aHJvdWdoIGVhY2ggZGF5IGFuZCBhZGQgZXZlbnRzXG5cdGZvciAobGV0IG0gPSBzdGFydE9mV2VlazsgbS5pc0JlZm9yZShlbmREYXRlKTsgbS5hZGQoMSwgJ2RheXMnKSkge1xuXHRcdGNvbnN0IGRhdGVTdHIgPSBtLmZvcm1hdCgnWVlZWS1NTS1ERCcpXG5cblx0XHQvLyBGaWx0ZXIgZXZlbnRzIGZvciB0aGUgY3VycmVudCBkYXlcblx0XHRjb25zdCBkYXlKb2JzID0gam9icy5maWx0ZXIoKGUpID0+IG1vbWVudChlLnNoaWZ0U3RhcnQpLmlzU2FtZShtLCAnZGF5JykpXG5cblx0XHRkYXlzLnB1c2goe1xuXHRcdFx0ZGF0ZTogZGF0ZVN0cixcblx0XHRcdGlzQ3VycmVudE1vbnRoOiBtLmlzU2FtZShuZXcgRGF0ZSgpLCAnbW9udGgnKSxcblx0XHRcdGlzVG9kYXk6IG0uaXNTYW1lKG5ldyBEYXRlKCksICdkYXknKSxcblx0XHRcdGV2ZW50czogZGF5Sm9icy5tYXAoKGpvYikgPT4gKHtcblx0XHRcdFx0aWQ6IGpvYi5faWQsXG5cdFx0XHRcdG5hbWU6IGpvYi5uYW1lLFxuXHRcdFx0XHRzdGFydDogam9iLnNoaWZ0U3RhcnQudG9JU09TdHJpbmcoKSxcblx0XHRcdFx0ZW5kOiBqb2Iuc2hpZnRFbmQudG9JU09TdHJpbmcoKSxcblx0XHRcdH0pKSxcblx0XHR9KVxuXHR9XG5cdHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihkYXlzKVxufVxuXG5jb25zdCBXb3JrZXJDb250cm9sbGVyID0ge1xuXHRnZXRXb3JrZXJQcm9maWxlLFxuXHRnZXRXb3JrZXJQdWJsaWNQcm9maWxlLFxuXHRnZXRBcHBsaWNhdGlvbnMsXG5cdGdldEpvYnMsXG5cdGdldEpvYnNDYWxlbmRhcixcbn1cblxuZXhwb3J0IGRlZmF1bHQgV29ya2VyQ29udHJvbGxlclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0EsSUFBQUEsT0FBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBR0EsSUFBQUMsWUFBQSxHQUFBRixzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUUsU0FBQSxHQUFBSCxzQkFBQSxDQUFBQyxPQUFBO0FBR0EsSUFBQUcsb0JBQUEsR0FBQUosc0JBQUEsQ0FBQUMsT0FBQTtBQUFrRSxTQUFBRCx1QkFBQUssR0FBQSxXQUFBQSxHQUFBLElBQUFBLEdBQUEsQ0FBQUMsVUFBQSxHQUFBRCxHQUFBLGdCQUFBQSxHQUFBO0FBQUEsU0FBQUUsb0JBQUEsa0JBUGxFLHFKQUFBQSxtQkFBQSxZQUFBQSxvQkFBQSxXQUFBQyxPQUFBLFNBQUFBLE9BQUEsT0FBQUMsRUFBQSxHQUFBQyxNQUFBLENBQUFDLFNBQUEsRUFBQUMsTUFBQSxHQUFBSCxFQUFBLENBQUFJLGNBQUEsRUFBQUMsY0FBQSxHQUFBSixNQUFBLENBQUFJLGNBQUEsY0FBQVQsR0FBQSxFQUFBVSxHQUFBLEVBQUFDLElBQUEsSUFBQVgsR0FBQSxDQUFBVSxHQUFBLElBQUFDLElBQUEsQ0FBQUMsS0FBQSxLQUFBQyxPQUFBLHdCQUFBQyxNQUFBLEdBQUFBLE1BQUEsT0FBQUMsY0FBQSxHQUFBRixPQUFBLENBQUFHLFFBQUEsa0JBQUFDLG1CQUFBLEdBQUFKLE9BQUEsQ0FBQUssYUFBQSx1QkFBQUMsaUJBQUEsR0FBQU4sT0FBQSxDQUFBTyxXQUFBLDhCQUFBQyxPQUFBckIsR0FBQSxFQUFBVSxHQUFBLEVBQUFFLEtBQUEsV0FBQVAsTUFBQSxDQUFBSSxjQUFBLENBQUFULEdBQUEsRUFBQVUsR0FBQSxJQUFBRSxLQUFBLEVBQUFBLEtBQUEsRUFBQVUsVUFBQSxNQUFBQyxZQUFBLE1BQUFDLFFBQUEsU0FBQXhCLEdBQUEsQ0FBQVUsR0FBQSxXQUFBVyxNQUFBLG1CQUFBSSxHQUFBLElBQUFKLE1BQUEsWUFBQUEsT0FBQXJCLEdBQUEsRUFBQVUsR0FBQSxFQUFBRSxLQUFBLFdBQUFaLEdBQUEsQ0FBQVUsR0FBQSxJQUFBRSxLQUFBLGdCQUFBYyxLQUFBQyxPQUFBLEVBQUFDLE9BQUEsRUFBQUMsSUFBQSxFQUFBQyxXQUFBLFFBQUFDLGNBQUEsR0FBQUgsT0FBQSxJQUFBQSxPQUFBLENBQUF0QixTQUFBLFlBQUEwQixTQUFBLEdBQUFKLE9BQUEsR0FBQUksU0FBQSxFQUFBQyxTQUFBLEdBQUE1QixNQUFBLENBQUE2QixNQUFBLENBQUFILGNBQUEsQ0FBQXpCLFNBQUEsR0FBQTZCLE9BQUEsT0FBQUMsT0FBQSxDQUFBTixXQUFBLGdCQUFBckIsY0FBQSxDQUFBd0IsU0FBQSxlQUFBckIsS0FBQSxFQUFBeUIsZ0JBQUEsQ0FBQVYsT0FBQSxFQUFBRSxJQUFBLEVBQUFNLE9BQUEsTUFBQUYsU0FBQSxhQUFBSyxTQUFBQyxFQUFBLEVBQUF2QyxHQUFBLEVBQUF3QyxHQUFBLG1CQUFBQyxJQUFBLFlBQUFELEdBQUEsRUFBQUQsRUFBQSxDQUFBRyxJQUFBLENBQUExQyxHQUFBLEVBQUF3QyxHQUFBLGNBQUFmLEdBQUEsYUFBQWdCLElBQUEsV0FBQUQsR0FBQSxFQUFBZixHQUFBLFFBQUF0QixPQUFBLENBQUF1QixJQUFBLEdBQUFBLElBQUEsTUFBQWlCLGdCQUFBLGdCQUFBWCxVQUFBLGNBQUFZLGtCQUFBLGNBQUFDLDJCQUFBLFNBQUFDLGlCQUFBLE9BQUF6QixNQUFBLENBQUF5QixpQkFBQSxFQUFBL0IsY0FBQSxxQ0FBQWdDLFFBQUEsR0FBQTFDLE1BQUEsQ0FBQTJDLGNBQUEsRUFBQUMsdUJBQUEsR0FBQUYsUUFBQSxJQUFBQSxRQUFBLENBQUFBLFFBQUEsQ0FBQUcsTUFBQSxRQUFBRCx1QkFBQSxJQUFBQSx1QkFBQSxLQUFBN0MsRUFBQSxJQUFBRyxNQUFBLENBQUFtQyxJQUFBLENBQUFPLHVCQUFBLEVBQUFsQyxjQUFBLE1BQUErQixpQkFBQSxHQUFBRyx1QkFBQSxPQUFBRSxFQUFBLEdBQUFOLDBCQUFBLENBQUF2QyxTQUFBLEdBQUEwQixTQUFBLENBQUExQixTQUFBLEdBQUFELE1BQUEsQ0FBQTZCLE1BQUEsQ0FBQVksaUJBQUEsWUFBQU0sc0JBQUE5QyxTQUFBLGdDQUFBK0MsT0FBQSxXQUFBQyxNQUFBLElBQUFqQyxNQUFBLENBQUFmLFNBQUEsRUFBQWdELE1BQUEsWUFBQWQsR0FBQSxnQkFBQWUsT0FBQSxDQUFBRCxNQUFBLEVBQUFkLEdBQUEsc0JBQUFnQixjQUFBdkIsU0FBQSxFQUFBd0IsV0FBQSxhQUFBQyxPQUFBSixNQUFBLEVBQUFkLEdBQUEsRUFBQW1CLE9BQUEsRUFBQUMsTUFBQSxRQUFBQyxNQUFBLEdBQUF2QixRQUFBLENBQUFMLFNBQUEsQ0FBQXFCLE1BQUEsR0FBQXJCLFNBQUEsRUFBQU8sR0FBQSxtQkFBQXFCLE1BQUEsQ0FBQXBCLElBQUEsUUFBQXFCLE1BQUEsR0FBQUQsTUFBQSxDQUFBckIsR0FBQSxFQUFBNUIsS0FBQSxHQUFBa0QsTUFBQSxDQUFBbEQsS0FBQSxTQUFBQSxLQUFBLGdCQUFBbUQsT0FBQSxDQUFBbkQsS0FBQSxLQUFBTCxNQUFBLENBQUFtQyxJQUFBLENBQUE5QixLQUFBLGVBQUE2QyxXQUFBLENBQUFFLE9BQUEsQ0FBQS9DLEtBQUEsQ0FBQW9ELE9BQUEsRUFBQUMsSUFBQSxXQUFBckQsS0FBQSxJQUFBOEMsTUFBQSxTQUFBOUMsS0FBQSxFQUFBK0MsT0FBQSxFQUFBQyxNQUFBLGdCQUFBbkMsR0FBQSxJQUFBaUMsTUFBQSxVQUFBakMsR0FBQSxFQUFBa0MsT0FBQSxFQUFBQyxNQUFBLFFBQUFILFdBQUEsQ0FBQUUsT0FBQSxDQUFBL0MsS0FBQSxFQUFBcUQsSUFBQSxXQUFBQyxTQUFBLElBQUFKLE1BQUEsQ0FBQWxELEtBQUEsR0FBQXNELFNBQUEsRUFBQVAsT0FBQSxDQUFBRyxNQUFBLGdCQUFBSyxLQUFBLFdBQUFULE1BQUEsVUFBQVMsS0FBQSxFQUFBUixPQUFBLEVBQUFDLE1BQUEsU0FBQUEsTUFBQSxDQUFBQyxNQUFBLENBQUFyQixHQUFBLFNBQUE0QixlQUFBLEVBQUEzRCxjQUFBLG9CQUFBRyxLQUFBLFdBQUFBLE1BQUEwQyxNQUFBLEVBQUFkLEdBQUEsYUFBQTZCLDJCQUFBLGVBQUFaLFdBQUEsV0FBQUUsT0FBQSxFQUFBQyxNQUFBLElBQUFGLE1BQUEsQ0FBQUosTUFBQSxFQUFBZCxHQUFBLEVBQUFtQixPQUFBLEVBQUFDLE1BQUEsZ0JBQUFRLGVBQUEsR0FBQUEsZUFBQSxHQUFBQSxlQUFBLENBQUFILElBQUEsQ0FBQUksMEJBQUEsRUFBQUEsMEJBQUEsSUFBQUEsMEJBQUEscUJBQUFoQyxpQkFBQVYsT0FBQSxFQUFBRSxJQUFBLEVBQUFNLE9BQUEsUUFBQW1DLEtBQUEsc0NBQUFoQixNQUFBLEVBQUFkLEdBQUEsd0JBQUE4QixLQUFBLFlBQUFDLEtBQUEsc0RBQUFELEtBQUEsb0JBQUFoQixNQUFBLFFBQUFkLEdBQUEsU0FBQWdDLFVBQUEsV0FBQXJDLE9BQUEsQ0FBQW1CLE1BQUEsR0FBQUEsTUFBQSxFQUFBbkIsT0FBQSxDQUFBSyxHQUFBLEdBQUFBLEdBQUEsVUFBQWlDLFFBQUEsR0FBQXRDLE9BQUEsQ0FBQXNDLFFBQUEsTUFBQUEsUUFBQSxRQUFBQyxjQUFBLEdBQUFDLG1CQUFBLENBQUFGLFFBQUEsRUFBQXRDLE9BQUEsT0FBQXVDLGNBQUEsUUFBQUEsY0FBQSxLQUFBL0IsZ0JBQUEsbUJBQUErQixjQUFBLHFCQUFBdkMsT0FBQSxDQUFBbUIsTUFBQSxFQUFBbkIsT0FBQSxDQUFBeUMsSUFBQSxHQUFBekMsT0FBQSxDQUFBMEMsS0FBQSxHQUFBMUMsT0FBQSxDQUFBSyxHQUFBLHNCQUFBTCxPQUFBLENBQUFtQixNQUFBLDZCQUFBZ0IsS0FBQSxRQUFBQSxLQUFBLGdCQUFBbkMsT0FBQSxDQUFBSyxHQUFBLEVBQUFMLE9BQUEsQ0FBQTJDLGlCQUFBLENBQUEzQyxPQUFBLENBQUFLLEdBQUEsdUJBQUFMLE9BQUEsQ0FBQW1CLE1BQUEsSUFBQW5CLE9BQUEsQ0FBQTRDLE1BQUEsV0FBQTVDLE9BQUEsQ0FBQUssR0FBQSxHQUFBOEIsS0FBQSxvQkFBQVQsTUFBQSxHQUFBdkIsUUFBQSxDQUFBWCxPQUFBLEVBQUFFLElBQUEsRUFBQU0sT0FBQSxvQkFBQTBCLE1BQUEsQ0FBQXBCLElBQUEsUUFBQTZCLEtBQUEsR0FBQW5DLE9BQUEsQ0FBQTZDLElBQUEsbUNBQUFuQixNQUFBLENBQUFyQixHQUFBLEtBQUFHLGdCQUFBLHFCQUFBL0IsS0FBQSxFQUFBaUQsTUFBQSxDQUFBckIsR0FBQSxFQUFBd0MsSUFBQSxFQUFBN0MsT0FBQSxDQUFBNkMsSUFBQSxrQkFBQW5CLE1BQUEsQ0FBQXBCLElBQUEsS0FBQTZCLEtBQUEsZ0JBQUFuQyxPQUFBLENBQUFtQixNQUFBLFlBQUFuQixPQUFBLENBQUFLLEdBQUEsR0FBQXFCLE1BQUEsQ0FBQXJCLEdBQUEsbUJBQUFtQyxvQkFBQUYsUUFBQSxFQUFBdEMsT0FBQSxRQUFBOEMsVUFBQSxHQUFBOUMsT0FBQSxDQUFBbUIsTUFBQSxFQUFBQSxNQUFBLEdBQUFtQixRQUFBLENBQUF6RCxRQUFBLENBQUFpRSxVQUFBLE9BQUFDLFNBQUEsS0FBQTVCLE1BQUEsU0FBQW5CLE9BQUEsQ0FBQXNDLFFBQUEscUJBQUFRLFVBQUEsSUFBQVIsUUFBQSxDQUFBekQsUUFBQSxlQUFBbUIsT0FBQSxDQUFBbUIsTUFBQSxhQUFBbkIsT0FBQSxDQUFBSyxHQUFBLEdBQUEwQyxTQUFBLEVBQUFQLG1CQUFBLENBQUFGLFFBQUEsRUFBQXRDLE9BQUEsZUFBQUEsT0FBQSxDQUFBbUIsTUFBQSxrQkFBQTJCLFVBQUEsS0FBQTlDLE9BQUEsQ0FBQW1CLE1BQUEsWUFBQW5CLE9BQUEsQ0FBQUssR0FBQSxPQUFBMkMsU0FBQSx1Q0FBQUYsVUFBQSxpQkFBQXRDLGdCQUFBLE1BQUFrQixNQUFBLEdBQUF2QixRQUFBLENBQUFnQixNQUFBLEVBQUFtQixRQUFBLENBQUF6RCxRQUFBLEVBQUFtQixPQUFBLENBQUFLLEdBQUEsbUJBQUFxQixNQUFBLENBQUFwQixJQUFBLFNBQUFOLE9BQUEsQ0FBQW1CLE1BQUEsWUFBQW5CLE9BQUEsQ0FBQUssR0FBQSxHQUFBcUIsTUFBQSxDQUFBckIsR0FBQSxFQUFBTCxPQUFBLENBQUFzQyxRQUFBLFNBQUE5QixnQkFBQSxNQUFBeUMsSUFBQSxHQUFBdkIsTUFBQSxDQUFBckIsR0FBQSxTQUFBNEMsSUFBQSxHQUFBQSxJQUFBLENBQUFKLElBQUEsSUFBQTdDLE9BQUEsQ0FBQXNDLFFBQUEsQ0FBQVksVUFBQSxJQUFBRCxJQUFBLENBQUF4RSxLQUFBLEVBQUF1QixPQUFBLENBQUFtRCxJQUFBLEdBQUFiLFFBQUEsQ0FBQWMsT0FBQSxlQUFBcEQsT0FBQSxDQUFBbUIsTUFBQSxLQUFBbkIsT0FBQSxDQUFBbUIsTUFBQSxXQUFBbkIsT0FBQSxDQUFBSyxHQUFBLEdBQUEwQyxTQUFBLEdBQUEvQyxPQUFBLENBQUFzQyxRQUFBLFNBQUE5QixnQkFBQSxJQUFBeUMsSUFBQSxJQUFBakQsT0FBQSxDQUFBbUIsTUFBQSxZQUFBbkIsT0FBQSxDQUFBSyxHQUFBLE9BQUEyQyxTQUFBLHNDQUFBaEQsT0FBQSxDQUFBc0MsUUFBQSxTQUFBOUIsZ0JBQUEsY0FBQTZDLGFBQUFDLElBQUEsUUFBQUMsS0FBQSxLQUFBQyxNQUFBLEVBQUFGLElBQUEsWUFBQUEsSUFBQSxLQUFBQyxLQUFBLENBQUFFLFFBQUEsR0FBQUgsSUFBQSxXQUFBQSxJQUFBLEtBQUFDLEtBQUEsQ0FBQUcsVUFBQSxHQUFBSixJQUFBLEtBQUFDLEtBQUEsQ0FBQUksUUFBQSxHQUFBTCxJQUFBLFdBQUFNLFVBQUEsQ0FBQUMsSUFBQSxDQUFBTixLQUFBLGNBQUFPLGNBQUFQLEtBQUEsUUFBQTdCLE1BQUEsR0FBQTZCLEtBQUEsQ0FBQVEsVUFBQSxRQUFBckMsTUFBQSxDQUFBcEIsSUFBQSxvQkFBQW9CLE1BQUEsQ0FBQXJCLEdBQUEsRUFBQWtELEtBQUEsQ0FBQVEsVUFBQSxHQUFBckMsTUFBQSxhQUFBekIsUUFBQU4sV0FBQSxTQUFBaUUsVUFBQSxNQUFBSixNQUFBLGFBQUE3RCxXQUFBLENBQUF1QixPQUFBLENBQUFtQyxZQUFBLGNBQUFXLEtBQUEsaUJBQUFqRCxPQUFBa0QsUUFBQSxRQUFBQSxRQUFBLFFBQUFDLGNBQUEsR0FBQUQsUUFBQSxDQUFBckYsY0FBQSxPQUFBc0YsY0FBQSxTQUFBQSxjQUFBLENBQUEzRCxJQUFBLENBQUEwRCxRQUFBLDRCQUFBQSxRQUFBLENBQUFkLElBQUEsU0FBQWMsUUFBQSxPQUFBRSxLQUFBLENBQUFGLFFBQUEsQ0FBQUcsTUFBQSxTQUFBQyxDQUFBLE9BQUFsQixJQUFBLFlBQUFBLEtBQUEsYUFBQWtCLENBQUEsR0FBQUosUUFBQSxDQUFBRyxNQUFBLE9BQUFoRyxNQUFBLENBQUFtQyxJQUFBLENBQUEwRCxRQUFBLEVBQUFJLENBQUEsVUFBQWxCLElBQUEsQ0FBQTFFLEtBQUEsR0FBQXdGLFFBQUEsQ0FBQUksQ0FBQSxHQUFBbEIsSUFBQSxDQUFBTixJQUFBLE9BQUFNLElBQUEsU0FBQUEsSUFBQSxDQUFBMUUsS0FBQSxHQUFBc0UsU0FBQSxFQUFBSSxJQUFBLENBQUFOLElBQUEsT0FBQU0sSUFBQSxZQUFBQSxJQUFBLENBQUFBLElBQUEsR0FBQUEsSUFBQSxlQUFBQSxJQUFBLEVBQUFkLFVBQUEsZUFBQUEsV0FBQSxhQUFBNUQsS0FBQSxFQUFBc0UsU0FBQSxFQUFBRixJQUFBLGlCQUFBcEMsaUJBQUEsQ0FBQXRDLFNBQUEsR0FBQXVDLDBCQUFBLEVBQUFwQyxjQUFBLENBQUEwQyxFQUFBLG1CQUFBdkMsS0FBQSxFQUFBaUMsMEJBQUEsRUFBQXRCLFlBQUEsU0FBQWQsY0FBQSxDQUFBb0MsMEJBQUEsbUJBQUFqQyxLQUFBLEVBQUFnQyxpQkFBQSxFQUFBckIsWUFBQSxTQUFBcUIsaUJBQUEsQ0FBQTZELFdBQUEsR0FBQXBGLE1BQUEsQ0FBQXdCLDBCQUFBLEVBQUExQixpQkFBQSx3QkFBQWhCLE9BQUEsQ0FBQXVHLG1CQUFBLGFBQUFDLE1BQUEsUUFBQUMsSUFBQSx3QkFBQUQsTUFBQSxJQUFBQSxNQUFBLENBQUFFLFdBQUEsV0FBQUQsSUFBQSxLQUFBQSxJQUFBLEtBQUFoRSxpQkFBQSw2QkFBQWdFLElBQUEsQ0FBQUgsV0FBQSxJQUFBRyxJQUFBLENBQUFFLElBQUEsT0FBQTNHLE9BQUEsQ0FBQTRHLElBQUEsYUFBQUosTUFBQSxXQUFBdEcsTUFBQSxDQUFBMkcsY0FBQSxHQUFBM0csTUFBQSxDQUFBMkcsY0FBQSxDQUFBTCxNQUFBLEVBQUE5RCwwQkFBQSxLQUFBOEQsTUFBQSxDQUFBTSxTQUFBLEdBQUFwRSwwQkFBQSxFQUFBeEIsTUFBQSxDQUFBc0YsTUFBQSxFQUFBeEYsaUJBQUEseUJBQUF3RixNQUFBLENBQUFyRyxTQUFBLEdBQUFELE1BQUEsQ0FBQTZCLE1BQUEsQ0FBQWlCLEVBQUEsR0FBQXdELE1BQUEsS0FBQXhHLE9BQUEsQ0FBQStHLEtBQUEsYUFBQTFFLEdBQUEsYUFBQXdCLE9BQUEsRUFBQXhCLEdBQUEsT0FBQVkscUJBQUEsQ0FBQUksYUFBQSxDQUFBbEQsU0FBQSxHQUFBZSxNQUFBLENBQUFtQyxhQUFBLENBQUFsRCxTQUFBLEVBQUFXLG1CQUFBLGlDQUFBZCxPQUFBLENBQUFxRCxhQUFBLEdBQUFBLGFBQUEsRUFBQXJELE9BQUEsQ0FBQWdILEtBQUEsYUFBQXhGLE9BQUEsRUFBQUMsT0FBQSxFQUFBQyxJQUFBLEVBQUFDLFdBQUEsRUFBQTJCLFdBQUEsZUFBQUEsV0FBQSxLQUFBQSxXQUFBLEdBQUEyRCxPQUFBLE9BQUFDLElBQUEsT0FBQTdELGFBQUEsQ0FBQTlCLElBQUEsQ0FBQUMsT0FBQSxFQUFBQyxPQUFBLEVBQUFDLElBQUEsRUFBQUMsV0FBQSxHQUFBMkIsV0FBQSxVQUFBdEQsT0FBQSxDQUFBdUcsbUJBQUEsQ0FBQTlFLE9BQUEsSUFBQXlGLElBQUEsR0FBQUEsSUFBQSxDQUFBL0IsSUFBQSxHQUFBckIsSUFBQSxXQUFBSCxNQUFBLFdBQUFBLE1BQUEsQ0FBQWtCLElBQUEsR0FBQWxCLE1BQUEsQ0FBQWxELEtBQUEsR0FBQXlHLElBQUEsQ0FBQS9CLElBQUEsV0FBQWxDLHFCQUFBLENBQUFELEVBQUEsR0FBQTlCLE1BQUEsQ0FBQThCLEVBQUEsRUFBQWhDLGlCQUFBLGdCQUFBRSxNQUFBLENBQUE4QixFQUFBLEVBQUFwQyxjQUFBLGlDQUFBTSxNQUFBLENBQUE4QixFQUFBLDZEQUFBaEQsT0FBQSxDQUFBbUgsSUFBQSxhQUFBQyxHQUFBLFFBQUFDLE1BQUEsR0FBQW5ILE1BQUEsQ0FBQWtILEdBQUEsR0FBQUQsSUFBQSxnQkFBQTVHLEdBQUEsSUFBQThHLE1BQUEsRUFBQUYsSUFBQSxDQUFBdEIsSUFBQSxDQUFBdEYsR0FBQSxVQUFBNEcsSUFBQSxDQUFBRyxPQUFBLGFBQUFuQyxLQUFBLFdBQUFnQyxJQUFBLENBQUFmLE1BQUEsU0FBQTdGLEdBQUEsR0FBQTRHLElBQUEsQ0FBQUksR0FBQSxRQUFBaEgsR0FBQSxJQUFBOEcsTUFBQSxTQUFBbEMsSUFBQSxDQUFBMUUsS0FBQSxHQUFBRixHQUFBLEVBQUE0RSxJQUFBLENBQUFOLElBQUEsT0FBQU0sSUFBQSxXQUFBQSxJQUFBLENBQUFOLElBQUEsT0FBQU0sSUFBQSxRQUFBbkYsT0FBQSxDQUFBK0MsTUFBQSxHQUFBQSxNQUFBLEVBQUFkLE9BQUEsQ0FBQTlCLFNBQUEsS0FBQXVHLFdBQUEsRUFBQXpFLE9BQUEsRUFBQStELEtBQUEsV0FBQUEsTUFBQXdCLGFBQUEsYUFBQUMsSUFBQSxXQUFBdEMsSUFBQSxXQUFBVixJQUFBLFFBQUFDLEtBQUEsR0FBQUssU0FBQSxPQUFBRixJQUFBLFlBQUFQLFFBQUEsY0FBQW5CLE1BQUEsZ0JBQUFkLEdBQUEsR0FBQTBDLFNBQUEsT0FBQWEsVUFBQSxDQUFBMUMsT0FBQSxDQUFBNEMsYUFBQSxJQUFBMEIsYUFBQSxXQUFBYixJQUFBLGtCQUFBQSxJQUFBLENBQUFlLE1BQUEsT0FBQXRILE1BQUEsQ0FBQW1DLElBQUEsT0FBQW9FLElBQUEsTUFBQVIsS0FBQSxFQUFBUSxJQUFBLENBQUFnQixLQUFBLGNBQUFoQixJQUFBLElBQUE1QixTQUFBLE1BQUE2QyxJQUFBLFdBQUFBLEtBQUEsU0FBQS9DLElBQUEsV0FBQWdELFVBQUEsUUFBQWpDLFVBQUEsSUFBQUcsVUFBQSxrQkFBQThCLFVBQUEsQ0FBQXZGLElBQUEsUUFBQXVGLFVBQUEsQ0FBQXhGLEdBQUEsY0FBQXlGLElBQUEsS0FBQW5ELGlCQUFBLFdBQUFBLGtCQUFBb0QsU0FBQSxhQUFBbEQsSUFBQSxRQUFBa0QsU0FBQSxNQUFBL0YsT0FBQSxrQkFBQWdHLE9BQUFDLEdBQUEsRUFBQUMsTUFBQSxXQUFBeEUsTUFBQSxDQUFBcEIsSUFBQSxZQUFBb0IsTUFBQSxDQUFBckIsR0FBQSxHQUFBMEYsU0FBQSxFQUFBL0YsT0FBQSxDQUFBbUQsSUFBQSxHQUFBOEMsR0FBQSxFQUFBQyxNQUFBLEtBQUFsRyxPQUFBLENBQUFtQixNQUFBLFdBQUFuQixPQUFBLENBQUFLLEdBQUEsR0FBQTBDLFNBQUEsS0FBQW1ELE1BQUEsYUFBQTdCLENBQUEsUUFBQVQsVUFBQSxDQUFBUSxNQUFBLE1BQUFDLENBQUEsU0FBQUEsQ0FBQSxRQUFBZCxLQUFBLFFBQUFLLFVBQUEsQ0FBQVMsQ0FBQSxHQUFBM0MsTUFBQSxHQUFBNkIsS0FBQSxDQUFBUSxVQUFBLGlCQUFBUixLQUFBLENBQUFDLE1BQUEsU0FBQXdDLE1BQUEsYUFBQXpDLEtBQUEsQ0FBQUMsTUFBQSxTQUFBaUMsSUFBQSxRQUFBVSxRQUFBLEdBQUEvSCxNQUFBLENBQUFtQyxJQUFBLENBQUFnRCxLQUFBLGVBQUE2QyxVQUFBLEdBQUFoSSxNQUFBLENBQUFtQyxJQUFBLENBQUFnRCxLQUFBLHFCQUFBNEMsUUFBQSxJQUFBQyxVQUFBLGFBQUFYLElBQUEsR0FBQWxDLEtBQUEsQ0FBQUUsUUFBQSxTQUFBdUMsTUFBQSxDQUFBekMsS0FBQSxDQUFBRSxRQUFBLGdCQUFBZ0MsSUFBQSxHQUFBbEMsS0FBQSxDQUFBRyxVQUFBLFNBQUFzQyxNQUFBLENBQUF6QyxLQUFBLENBQUFHLFVBQUEsY0FBQXlDLFFBQUEsYUFBQVYsSUFBQSxHQUFBbEMsS0FBQSxDQUFBRSxRQUFBLFNBQUF1QyxNQUFBLENBQUF6QyxLQUFBLENBQUFFLFFBQUEscUJBQUEyQyxVQUFBLFlBQUFoRSxLQUFBLHFEQUFBcUQsSUFBQSxHQUFBbEMsS0FBQSxDQUFBRyxVQUFBLFNBQUFzQyxNQUFBLENBQUF6QyxLQUFBLENBQUFHLFVBQUEsWUFBQWQsTUFBQSxXQUFBQSxPQUFBdEMsSUFBQSxFQUFBRCxHQUFBLGFBQUFnRSxDQUFBLFFBQUFULFVBQUEsQ0FBQVEsTUFBQSxNQUFBQyxDQUFBLFNBQUFBLENBQUEsUUFBQWQsS0FBQSxRQUFBSyxVQUFBLENBQUFTLENBQUEsT0FBQWQsS0FBQSxDQUFBQyxNQUFBLFNBQUFpQyxJQUFBLElBQUFySCxNQUFBLENBQUFtQyxJQUFBLENBQUFnRCxLQUFBLHdCQUFBa0MsSUFBQSxHQUFBbEMsS0FBQSxDQUFBRyxVQUFBLFFBQUEyQyxZQUFBLEdBQUE5QyxLQUFBLGFBQUE4QyxZQUFBLGlCQUFBL0YsSUFBQSxtQkFBQUEsSUFBQSxLQUFBK0YsWUFBQSxDQUFBN0MsTUFBQSxJQUFBbkQsR0FBQSxJQUFBQSxHQUFBLElBQUFnRyxZQUFBLENBQUEzQyxVQUFBLEtBQUEyQyxZQUFBLGNBQUEzRSxNQUFBLEdBQUEyRSxZQUFBLEdBQUFBLFlBQUEsQ0FBQXRDLFVBQUEsY0FBQXJDLE1BQUEsQ0FBQXBCLElBQUEsR0FBQUEsSUFBQSxFQUFBb0IsTUFBQSxDQUFBckIsR0FBQSxHQUFBQSxHQUFBLEVBQUFnRyxZQUFBLFNBQUFsRixNQUFBLGdCQUFBZ0MsSUFBQSxHQUFBa0QsWUFBQSxDQUFBM0MsVUFBQSxFQUFBbEQsZ0JBQUEsU0FBQThGLFFBQUEsQ0FBQTVFLE1BQUEsTUFBQTRFLFFBQUEsV0FBQUEsU0FBQTVFLE1BQUEsRUFBQWlDLFFBQUEsb0JBQUFqQyxNQUFBLENBQUFwQixJQUFBLFFBQUFvQixNQUFBLENBQUFyQixHQUFBLHFCQUFBcUIsTUFBQSxDQUFBcEIsSUFBQSxtQkFBQW9CLE1BQUEsQ0FBQXBCLElBQUEsUUFBQTZDLElBQUEsR0FBQXpCLE1BQUEsQ0FBQXJCLEdBQUEsZ0JBQUFxQixNQUFBLENBQUFwQixJQUFBLFNBQUF3RixJQUFBLFFBQUF6RixHQUFBLEdBQUFxQixNQUFBLENBQUFyQixHQUFBLE9BQUFjLE1BQUEsa0JBQUFnQyxJQUFBLHlCQUFBekIsTUFBQSxDQUFBcEIsSUFBQSxJQUFBcUQsUUFBQSxVQUFBUixJQUFBLEdBQUFRLFFBQUEsR0FBQW5ELGdCQUFBLEtBQUErRixNQUFBLFdBQUFBLE9BQUE3QyxVQUFBLGFBQUFXLENBQUEsUUFBQVQsVUFBQSxDQUFBUSxNQUFBLE1BQUFDLENBQUEsU0FBQUEsQ0FBQSxRQUFBZCxLQUFBLFFBQUFLLFVBQUEsQ0FBQVMsQ0FBQSxPQUFBZCxLQUFBLENBQUFHLFVBQUEsS0FBQUEsVUFBQSxjQUFBNEMsUUFBQSxDQUFBL0MsS0FBQSxDQUFBUSxVQUFBLEVBQUFSLEtBQUEsQ0FBQUksUUFBQSxHQUFBRyxhQUFBLENBQUFQLEtBQUEsR0FBQS9DLGdCQUFBLHlCQUFBZ0csT0FBQWhELE1BQUEsYUFBQWEsQ0FBQSxRQUFBVCxVQUFBLENBQUFRLE1BQUEsTUFBQUMsQ0FBQSxTQUFBQSxDQUFBLFFBQUFkLEtBQUEsUUFBQUssVUFBQSxDQUFBUyxDQUFBLE9BQUFkLEtBQUEsQ0FBQUMsTUFBQSxLQUFBQSxNQUFBLFFBQUE5QixNQUFBLEdBQUE2QixLQUFBLENBQUFRLFVBQUEsa0JBQUFyQyxNQUFBLENBQUFwQixJQUFBLFFBQUFtRyxNQUFBLEdBQUEvRSxNQUFBLENBQUFyQixHQUFBLEVBQUF5RCxhQUFBLENBQUFQLEtBQUEsWUFBQWtELE1BQUEsZ0JBQUFyRSxLQUFBLDhCQUFBc0UsYUFBQSxXQUFBQSxjQUFBekMsUUFBQSxFQUFBZixVQUFBLEVBQUFFLE9BQUEsZ0JBQUFkLFFBQUEsS0FBQXpELFFBQUEsRUFBQWtDLE1BQUEsQ0FBQWtELFFBQUEsR0FBQWYsVUFBQSxFQUFBQSxVQUFBLEVBQUFFLE9BQUEsRUFBQUEsT0FBQSxvQkFBQWpDLE1BQUEsVUFBQWQsR0FBQSxHQUFBMEMsU0FBQSxHQUFBdkMsZ0JBQUEsT0FBQXhDLE9BQUE7QUFBQSxTQUFBMkksbUJBQUFDLEdBQUEsRUFBQXBGLE9BQUEsRUFBQUMsTUFBQSxFQUFBb0YsS0FBQSxFQUFBQyxNQUFBLEVBQUF2SSxHQUFBLEVBQUE4QixHQUFBLGNBQUE0QyxJQUFBLEdBQUEyRCxHQUFBLENBQUFySSxHQUFBLEVBQUE4QixHQUFBLE9BQUE1QixLQUFBLEdBQUF3RSxJQUFBLENBQUF4RSxLQUFBLFdBQUF1RCxLQUFBLElBQUFQLE1BQUEsQ0FBQU8sS0FBQSxpQkFBQWlCLElBQUEsQ0FBQUosSUFBQSxJQUFBckIsT0FBQSxDQUFBL0MsS0FBQSxZQUFBd0csT0FBQSxDQUFBekQsT0FBQSxDQUFBL0MsS0FBQSxFQUFBcUQsSUFBQSxDQUFBK0UsS0FBQSxFQUFBQyxNQUFBO0FBQUEsU0FBQUMsa0JBQUEzRyxFQUFBLDZCQUFBVixJQUFBLFNBQUFzSCxJQUFBLEdBQUFDLFNBQUEsYUFBQWhDLE9BQUEsV0FBQXpELE9BQUEsRUFBQUMsTUFBQSxRQUFBbUYsR0FBQSxHQUFBeEcsRUFBQSxDQUFBOEcsS0FBQSxDQUFBeEgsSUFBQSxFQUFBc0gsSUFBQSxZQUFBSCxNQUFBcEksS0FBQSxJQUFBa0ksa0JBQUEsQ0FBQUMsR0FBQSxFQUFBcEYsT0FBQSxFQUFBQyxNQUFBLEVBQUFvRixLQUFBLEVBQUFDLE1BQUEsVUFBQXJJLEtBQUEsY0FBQXFJLE9BQUF4SCxHQUFBLElBQUFxSCxrQkFBQSxDQUFBQyxHQUFBLEVBQUFwRixPQUFBLEVBQUFDLE1BQUEsRUFBQW9GLEtBQUEsRUFBQUMsTUFBQSxXQUFBeEgsR0FBQSxLQUFBdUgsS0FBQSxDQUFBOUQsU0FBQTtBQVNBLElBQU1vRSxnQkFBZ0I7RUFBQSxJQUFBQyxJQUFBLEdBQUFMLGlCQUFBLGVBQUFoSixtQkFBQSxHQUFBNkcsSUFBQSxDQUFHLFNBQUF5QyxRQUFPQyxHQUFZLEVBQUVDLEdBQWE7SUFBQSxJQUFBQyxTQUFBLEVBQUFDLFFBQUEsRUFBQUMsTUFBQTtJQUFBLE9BQUEzSixtQkFBQSxHQUFBd0IsSUFBQSxVQUFBb0ksU0FBQUMsUUFBQTtNQUFBLGtCQUFBQSxRQUFBLENBQUFuQyxJQUFBLEdBQUFtQyxRQUFBLENBQUF6RSxJQUFBO1FBQUE7VUFBQXlFLFFBQUEsQ0FBQW5DLElBQUE7VUFFbkRnQyxRQUFRLElBQUFELFNBQUEsR0FBR0YsR0FBRyxDQUFDTyxJQUFJLGNBQUFMLFNBQUEsdUJBQVJBLFNBQUEsQ0FBVU0sTUFBTTtVQUFBRixRQUFBLENBQUF6RSxJQUFBO1VBQUEsT0FFSTRFLHVCQUFXLENBQUNDLFFBQVEsQ0FBQ1AsUUFBUSxDQUFDLENBQUNRLE1BQU0sQ0FDekUsVUFDRCxDQUFDO1FBQUE7VUFGS1AsTUFBc0IsR0FBQUUsUUFBQSxDQUFBbkYsSUFBQTtVQUFBLElBSXZCaUYsTUFBTTtZQUFBRSxRQUFBLENBQUF6RSxJQUFBO1lBQUE7VUFBQTtVQUFBLE9BQUF5RSxRQUFBLENBQUFoRixNQUFBLFdBQ0gyRSxHQUFHLENBQUNXLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLE9BQU8sRUFBRTtVQUFvQixDQUFDLENBQUM7UUFBQTtVQUFBLE9BQUFSLFFBQUEsQ0FBQWhGLE1BQUEsV0FHdkQyRSxHQUFHLENBQUNXLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVULE1BQU0sRUFBTkE7VUFBTyxDQUFDLENBQUM7UUFBQTtVQUFBRSxRQUFBLENBQUFuQyxJQUFBO1VBQUFtQyxRQUFBLENBQUFTLEVBQUEsR0FBQVQsUUFBQTtVQUV2Q1UsT0FBTyxDQUFDQyxHQUFHLENBQUFYLFFBQUEsQ0FBQVMsRUFBTSxDQUFDO1VBQUEsT0FBQVQsUUFBQSxDQUFBaEYsTUFBQSxXQUNYMkUsR0FBRyxDQUFDaUIsVUFBVSxDQUFDLEdBQUcsQ0FBQztRQUFBO1FBQUE7VUFBQSxPQUFBWixRQUFBLENBQUFoQyxJQUFBO01BQUE7SUFBQSxHQUFBeUIsT0FBQTtFQUFBLENBRTNCO0VBQUEsZ0JBakJLRixnQkFBZ0JBLENBQUFzQixFQUFBLEVBQUFDLEdBQUE7SUFBQSxPQUFBdEIsSUFBQSxDQUFBRixLQUFBLE9BQUFELFNBQUE7RUFBQTtBQUFBLEdBaUJyQjtBQUVELElBQU0wQixzQkFBc0I7RUFBQSxJQUFBQyxLQUFBLEdBQUE3QixpQkFBQSxlQUFBaEosbUJBQUEsR0FBQTZHLElBQUEsQ0FBRyxTQUFBaUUsU0FBT3ZCLEdBQVksRUFBRUMsR0FBYTtJQUFBLElBQUF1QixRQUFBLEVBQUFwQixNQUFBLEVBQUEvQyxJQUFBLEVBQUFvRSxRQUFBLEVBQUFDLE1BQUEsRUFBQUMsUUFBQSxFQUFBQyxXQUFBLEVBQUFDLE9BQUE7SUFBQSxPQUFBcEwsbUJBQUEsR0FBQXdCLElBQUEsVUFBQTZKLFVBQUFDLFNBQUE7TUFBQSxrQkFBQUEsU0FBQSxDQUFBNUQsSUFBQSxHQUFBNEQsU0FBQSxDQUFBbEcsSUFBQTtRQUFBO1VBQUFrRyxTQUFBLENBQUE1RCxJQUFBO1VBRXpEcUQsUUFBUSxHQUFHeEIsR0FBRyxDQUFDZ0MsTUFBTSxDQUFDUixRQUFRO1VBQUFPLFNBQUEsQ0FBQWxHLElBQUE7VUFBQSxPQUVDNEUsdUJBQVcsQ0FBQ3dCLE9BQU8sQ0FBQztZQUFFVCxRQUFRLEVBQVJBO1VBQVMsQ0FBQyxDQUFDO1FBQUE7VUFBaEVwQixNQUFzQixHQUFBMkIsU0FBQSxDQUFBNUcsSUFBQTtVQUFBLElBRXZCaUYsTUFBTTtZQUFBMkIsU0FBQSxDQUFBbEcsSUFBQTtZQUFBO1VBQUE7VUFBQSxPQUFBa0csU0FBQSxDQUFBekcsTUFBQSxXQUNIMkUsR0FBRyxDQUFDVyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxPQUFPLEVBQUU7VUFBb0IsQ0FBQyxDQUFDO1FBQUE7VUFHdER6RCxJQUFJLEdBQXVEK0MsTUFBTSxDQUFqRS9DLElBQUksRUFBRW9FLFFBQVEsR0FBNkNyQixNQUFNLENBQTNEcUIsUUFBUSxFQUFFQyxNQUFNLEdBQXFDdEIsTUFBTSxDQUFqRHNCLE1BQU0sRUFBRUMsUUFBUSxHQUEyQnZCLE1BQU0sQ0FBekN1QixRQUFRLEVBQUVDLFdBQVcsR0FBY3hCLE1BQU0sQ0FBL0J3QixXQUFXLEVBQUVDLE9BQU8sR0FBS3pCLE1BQU0sQ0FBbEJ5QixPQUFPO1VBQUEsT0FBQUUsU0FBQSxDQUFBekcsTUFBQSxXQUV2RDJFLEdBQUcsQ0FDUlcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUNYQyxJQUFJLENBQUM7WUFBRXhELElBQUksRUFBSkEsSUFBSTtZQUFFb0UsUUFBUSxFQUFSQSxRQUFRO1lBQUVDLE1BQU0sRUFBTkEsTUFBTTtZQUFFQyxRQUFRLEVBQVJBLFFBQVE7WUFBRUMsV0FBVyxFQUFYQSxXQUFXO1lBQUVDLE9BQU8sRUFBUEE7VUFBUSxDQUFDLENBQUM7UUFBQTtVQUFBRSxTQUFBLENBQUE1RCxJQUFBO1VBQUE0RCxTQUFBLENBQUFoQixFQUFBLEdBQUFnQixTQUFBO1VBRWxFZixPQUFPLENBQUNDLEdBQUcsQ0FBQWMsU0FBQSxDQUFBaEIsRUFBTSxDQUFDO1VBQUEsT0FBQWdCLFNBQUEsQ0FBQXpHLE1BQUEsV0FDWDJFLEdBQUcsQ0FBQ2lCLFVBQVUsQ0FBQyxHQUFHLENBQUM7UUFBQTtRQUFBO1VBQUEsT0FBQWEsU0FBQSxDQUFBekQsSUFBQTtNQUFBO0lBQUEsR0FBQWlELFFBQUE7RUFBQSxDQUUzQjtFQUFBLGdCQW5CS0Ysc0JBQXNCQSxDQUFBYSxHQUFBLEVBQUFDLEdBQUE7SUFBQSxPQUFBYixLQUFBLENBQUExQixLQUFBLE9BQUFELFNBQUE7RUFBQTtBQUFBLEdBbUIzQjtBQUVELElBQU15QyxlQUFlO0VBQUEsSUFBQUMsS0FBQSxHQUFBNUMsaUJBQUEsZUFBQWhKLG1CQUFBLEdBQUE2RyxJQUFBLENBQUcsU0FBQWdGLFNBQU90QyxHQUFZLEVBQUVDLEdBQWE7SUFBQSxJQUFBc0MsVUFBQTtJQUFBLElBQUFmLFFBQUEsRUFBQXJCLFFBQUEsRUFBQUMsTUFBQSxFQUFBb0MsWUFBQTtJQUFBLE9BQUEvTCxtQkFBQSxHQUFBd0IsSUFBQSxVQUFBd0ssVUFBQUMsU0FBQTtNQUFBLGtCQUFBQSxTQUFBLENBQUF2RSxJQUFBLEdBQUF1RSxTQUFBLENBQUE3RyxJQUFBO1FBQUE7VUFDbkQyRixRQUFRLEdBQUd4QixHQUFHLENBQUNnQyxNQUFNLENBQUNSLFFBQVE7VUFDOUJyQixRQUFRLElBQUFvQyxVQUFBLEdBQUd2QyxHQUFHLENBQUNPLElBQUksY0FBQWdDLFVBQUEsdUJBQVJBLFVBQUEsQ0FBVS9CLE1BQU07VUFBQWtDLFNBQUEsQ0FBQXZFLElBQUE7VUFBQXVFLFNBQUEsQ0FBQTdHLElBQUE7VUFBQSxPQUVYNEUsdUJBQVcsQ0FBQ3dCLE9BQU8sQ0FBQztZQUFFVCxRQUFRLEVBQVJBO1VBQVMsQ0FBQyxDQUFDO1FBQUE7VUFBaERwQixNQUFNLEdBQUFzQyxTQUFBLENBQUF2SCxJQUFBO1VBQUEsSUFFUGlGLE1BQU07WUFBQXNDLFNBQUEsQ0FBQTdHLElBQUE7WUFBQTtVQUFBO1VBQUEsT0FBQTZHLFNBQUEsQ0FBQXBILE1BQUEsV0FDSDJFLEdBQUcsQ0FBQ1csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsT0FBTyxFQUFFO1VBQW1CLENBQUMsQ0FBQztRQUFBO1VBQUEsTUFHekRYLFFBQVEsSUFBSUMsTUFBTSxDQUFDdUMsR0FBRztZQUFBRCxTQUFBLENBQUE3RyxJQUFBO1lBQUE7VUFBQTtVQUFBLE9BQUE2RyxTQUFBLENBQUFwSCxNQUFBLFdBQ2xCMkUsR0FBRyxDQUFDVyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxPQUFPLEVBQUU7VUFBZSxDQUFDLENBQUM7UUFBQTtVQUFBNEIsU0FBQSxDQUFBN0csSUFBQTtVQUFBLE9BSWxEK0csK0JBQW1CLENBQUNDLElBQUksQ0FBQztZQUM5QnpDLE1BQU0sRUFBRUQ7VUFDVCxDQUFDLENBQUMsQ0FBQzJDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQztRQUFBO1VBSDVCTixZQUFzQyxHQUFBRSxTQUFBLENBQUF2SCxJQUFBO1VBSzVDOEUsR0FBRyxDQUFDVyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQzJCLFlBQVksQ0FBQztVQUFBRSxTQUFBLENBQUE3RyxJQUFBO1VBQUE7UUFBQTtVQUFBNkcsU0FBQSxDQUFBdkUsSUFBQTtVQUFBdUUsU0FBQSxDQUFBM0IsRUFBQSxHQUFBMkIsU0FBQTtVQUVsQ3pDLEdBQUcsQ0FBQ1csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsT0FBTyxFQUFFO1VBQWUsQ0FBQyxDQUFDO1FBQUE7UUFBQTtVQUFBLE9BQUE0QixTQUFBLENBQUFwRSxJQUFBO01BQUE7SUFBQSxHQUFBZ0UsUUFBQTtFQUFBLENBRWxEO0VBQUEsZ0JBdkJLRixlQUFlQSxDQUFBVyxHQUFBLEVBQUFDLEdBQUE7SUFBQSxPQUFBWCxLQUFBLENBQUF6QyxLQUFBLE9BQUFELFNBQUE7RUFBQTtBQUFBLEdBdUJwQjtBQUVELElBQU1zRCxPQUFPO0VBQUEsSUFBQUMsS0FBQSxHQUFBekQsaUJBQUEsZUFBQWhKLG1CQUFBLEdBQUE2RyxJQUFBLENBQUcsU0FBQTZGLFNBQU9uRCxHQUFZLEVBQUVDLEdBQWE7SUFBQSxJQUFBbUQsVUFBQTtJQUFBLElBQUE1QixRQUFBLEVBQUFyQixRQUFBLEVBQUFDLE1BQUEsRUFBQWlELElBQUE7SUFBQSxPQUFBNU0sbUJBQUEsR0FBQXdCLElBQUEsVUFBQXFMLFVBQUFDLFNBQUE7TUFBQSxrQkFBQUEsU0FBQSxDQUFBcEYsSUFBQSxHQUFBb0YsU0FBQSxDQUFBMUgsSUFBQTtRQUFBO1VBQzNDMkYsUUFBUSxHQUFHeEIsR0FBRyxDQUFDZ0MsTUFBTSxDQUFDUixRQUFRO1VBQzlCckIsUUFBUSxJQUFBaUQsVUFBQSxHQUFHcEQsR0FBRyxDQUFDTyxJQUFJLGNBQUE2QyxVQUFBLHVCQUFSQSxVQUFBLENBQVU1QyxNQUFNO1VBQUErQyxTQUFBLENBQUFwRixJQUFBO1VBQUFvRixTQUFBLENBQUExSCxJQUFBO1VBQUEsT0FHSzRFLHVCQUFXLENBQUN3QixPQUFPLENBQUM7WUFBRVQsUUFBUSxFQUFSQTtVQUFTLENBQUMsQ0FBQztRQUFBO1VBQWhFcEIsTUFBc0IsR0FBQW1ELFNBQUEsQ0FBQXBJLElBQUE7VUFBQSxJQUV2QmlGLE1BQU07WUFBQW1ELFNBQUEsQ0FBQTFILElBQUE7WUFBQTtVQUFBO1VBQUEsT0FBQTBILFNBQUEsQ0FBQWpJLE1BQUEsV0FDSDJFLEdBQUcsQ0FBQ1csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsT0FBTyxFQUFFO1VBQW1CLENBQUMsQ0FBQztRQUFBO1VBQUEsTUFHekRYLFFBQVEsSUFBSUMsTUFBTSxDQUFDb0QsRUFBRTtZQUFBRCxTQUFBLENBQUExSCxJQUFBO1lBQUE7VUFBQTtVQUFBLE9BQUEwSCxTQUFBLENBQUFqSSxNQUFBLFdBQ2pCMkUsR0FBRyxDQUFDVyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxPQUFPLEVBQUU7VUFBZSxDQUFDLENBQUM7UUFBQTtVQUFBeUMsU0FBQSxDQUFBMUgsSUFBQTtVQUFBLE9BRzlCNEgsb0JBQVEsQ0FBQ1osSUFBSSxDQUFDO1lBQUUxQyxRQUFRLEVBQVJBO1VBQVMsQ0FBQyxDQUFDLENBQUMyQyxRQUFRLENBQzlELGNBQ0QsQ0FBQztRQUFBO1VBRktPLElBQVksR0FBQUUsU0FBQSxDQUFBcEksSUFBQTtVQUFBLElBSWJrSSxJQUFJO1lBQUFFLFNBQUEsQ0FBQTFILElBQUE7WUFBQTtVQUFBO1VBQUEsT0FBQTBILFNBQUEsQ0FBQWpJLE1BQUEsV0FDRDJFLEdBQUcsQ0FBQ1csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsT0FBTyxFQUFFO1VBQStCLENBQUMsQ0FBQztRQUFBO1VBR3pFYixHQUFHLENBQUNXLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDd0MsSUFBSSxDQUFDO1VBQUFFLFNBQUEsQ0FBQTFILElBQUE7VUFBQTtRQUFBO1VBQUEwSCxTQUFBLENBQUFwRixJQUFBO1VBQUFvRixTQUFBLENBQUF4QyxFQUFBLEdBQUF3QyxTQUFBO1VBRTFCdEQsR0FBRyxDQUFDVyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxPQUFPLEVBQUU7VUFBZSxDQUFDLENBQUM7UUFBQTtRQUFBO1VBQUEsT0FBQXlDLFNBQUEsQ0FBQWpGLElBQUE7TUFBQTtJQUFBLEdBQUE2RSxRQUFBO0VBQUEsQ0FFbEQ7RUFBQSxnQkEzQktGLE9BQU9BLENBQUFTLEdBQUEsRUFBQUMsR0FBQTtJQUFBLE9BQUFULEtBQUEsQ0FBQXRELEtBQUEsT0FBQUQsU0FBQTtFQUFBO0FBQUEsR0EyQlo7QUFFRCxJQUFNaUUsZUFBZTtFQUFBLElBQUFDLEtBQUEsR0FBQXBFLGlCQUFBLGVBQUFoSixtQkFBQSxHQUFBNkcsSUFBQSxDQUFHLFNBQUF3RyxTQUFPOUQsR0FBWSxFQUFFQyxHQUFhO0lBQUEsSUFBQThELFlBQUEsRUFBQUMsV0FBQSxFQUFBQyxPQUFBLEVBQUFaLElBQUEsRUFBQWEsSUFBQSxFQUFBQyxLQUFBLEVBQUFDLENBQUE7SUFBQSxPQUFBM04sbUJBQUEsR0FBQXdCLElBQUEsVUFBQW9NLFVBQUFDLFNBQUE7TUFBQSxrQkFBQUEsU0FBQSxDQUFBbkcsSUFBQSxHQUFBbUcsU0FBQSxDQUFBekksSUFBQTtRQUFBO1VBQ3pEO1VBQ01rSSxZQUFZLEdBQUdRLE1BQU0sQ0FBQ3ZFLEdBQUcsQ0FBQ3dFLEtBQUssQ0FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUVoRDtVQUNNRixXQUFXLEdBQUcsSUFBQVMsa0JBQU0sRUFBQyxDQUFDLENBQUNDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFFNUM7VUFDTVQsT0FBTyxHQUFHRCxXQUFXLENBQUNXLEtBQUssQ0FBQyxDQUFDLENBQUNDLEdBQUcsQ0FBQ2IsWUFBWSxFQUFFLE1BQU0sQ0FBQyxFQUU3RDtVQUFBTyxTQUFBLENBQUF6SSxJQUFBO1VBQUEsT0FDbUI0SCxvQkFBUSxDQUFDWixJQUFJLENBQUM7WUFDaENnQyxVQUFVLEVBQUU7Y0FDWEMsSUFBSSxFQUFFZCxXQUFXLENBQUNlLE1BQU0sQ0FBQyxDQUFDO2NBQzFCQyxHQUFHLEVBQUVmLE9BQU8sQ0FBQ2MsTUFBTSxDQUFDO1lBQ3JCO1VBQ0QsQ0FBQyxDQUFDLENBQUNFLElBQUksQ0FBQyxDQUFDO1FBQUE7VUFMSDVCLElBQUksR0FBQWlCLFNBQUEsQ0FBQW5KLElBQUE7VUFPSitJLElBQUksR0FBRyxFQUFFLEVBRWY7VUFBQUMsS0FBQSxnQkFBQTFOLG1CQUFBLEdBQUE2RyxJQUFBLFVBQUE2RyxNQUFBQyxDQUFBO1lBQUEsSUFBQWMsT0FBQSxFQUFBQyxPQUFBO1lBQUEsT0FBQTFPLG1CQUFBLEdBQUF3QixJQUFBLFVBQUFtTixPQUFBQyxTQUFBO2NBQUEsa0JBQUFBLFNBQUEsQ0FBQWxILElBQUEsR0FBQWtILFNBQUEsQ0FBQXhKLElBQUE7Z0JBQUE7a0JBRU9xSixPQUFPLEdBQUdkLENBQUMsQ0FBQ2tCLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFFdEM7a0JBQ01ILE9BQU8sR0FBRzlCLElBQUksQ0FBQ2tDLE1BQU0sQ0FBQyxVQUFDQyxDQUFDO29CQUFBLE9BQUssSUFBQWYsa0JBQU0sRUFBQ2UsQ0FBQyxDQUFDWCxVQUFVLENBQUMsQ0FBQ1ksTUFBTSxDQUFDckIsQ0FBQyxFQUFFLEtBQUssQ0FBQztrQkFBQSxFQUFDO2tCQUV6RUYsSUFBSSxDQUFDM0gsSUFBSSxDQUFDO29CQUNUbUosSUFBSSxFQUFFUixPQUFPO29CQUNiUyxjQUFjLEVBQUV2QixDQUFDLENBQUNxQixNQUFNLENBQUMsSUFBSUcsSUFBSSxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUM7b0JBQzdDQyxPQUFPLEVBQUV6QixDQUFDLENBQUNxQixNQUFNLENBQUMsSUFBSUcsSUFBSSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUM7b0JBQ3BDRSxNQUFNLEVBQUVYLE9BQU8sQ0FBQ1ksR0FBRyxDQUFDLFVBQUNDLEdBQUc7c0JBQUEsT0FBTTt3QkFDN0J4QyxFQUFFLEVBQUV3QyxHQUFHLENBQUNyRCxHQUFHO3dCQUNYdEYsSUFBSSxFQUFFMkksR0FBRyxDQUFDM0ksSUFBSTt3QkFDZDRJLEtBQUssRUFBRUQsR0FBRyxDQUFDbkIsVUFBVSxDQUFDcUIsV0FBVyxDQUFDLENBQUM7d0JBQ25DQyxHQUFHLEVBQUVILEdBQUcsQ0FBQ0ksUUFBUSxDQUFDRixXQUFXLENBQUM7c0JBQy9CLENBQUM7b0JBQUEsQ0FBQztrQkFDSCxDQUFDLENBQUM7Z0JBQUE7Z0JBQUE7a0JBQUEsT0FBQWIsU0FBQSxDQUFBL0csSUFBQTtjQUFBO1lBQUEsR0FBQTZGLEtBQUE7VUFBQTtVQWhCTUMsQ0FBQyxHQUFHSixXQUFXO1FBQUE7VUFBQSxLQUFFSSxDQUFDLENBQUNpQyxRQUFRLENBQUNwQyxPQUFPLENBQUM7WUFBQUssU0FBQSxDQUFBekksSUFBQTtZQUFBO1VBQUE7VUFBQSxPQUFBeUksU0FBQSxDQUFBbEYsYUFBQSxDQUFBK0UsS0FBQSxDQUFBQyxDQUFBO1FBQUE7VUFBRUEsQ0FBQyxDQUFDUSxHQUFHLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQztVQUFBTixTQUFBLENBQUF6SSxJQUFBO1VBQUE7UUFBQTtVQUFBLE9BQUF5SSxTQUFBLENBQUFoSixNQUFBLFdBa0J4RDJFLEdBQUcsQ0FBQ1csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNxRCxJQUFJLENBQUM7UUFBQTtRQUFBO1VBQUEsT0FBQUksU0FBQSxDQUFBaEcsSUFBQTtNQUFBO0lBQUEsR0FBQXdGLFFBQUE7RUFBQSxDQUNqQztFQUFBLGdCQXhDS0YsZUFBZUEsQ0FBQTBDLEdBQUEsRUFBQUMsSUFBQTtJQUFBLE9BQUExQyxLQUFBLENBQUFqRSxLQUFBLE9BQUFELFNBQUE7RUFBQTtBQUFBLEdBd0NwQjtBQUVELElBQU02RyxnQkFBZ0IsR0FBRztFQUN4QjNHLGdCQUFnQixFQUFoQkEsZ0JBQWdCO0VBQ2hCd0Isc0JBQXNCLEVBQXRCQSxzQkFBc0I7RUFDdEJlLGVBQWUsRUFBZkEsZUFBZTtFQUNmYSxPQUFPLEVBQVBBLE9BQU87RUFDUFcsZUFBZSxFQUFmQTtBQUNELENBQUM7QUFBQSxJQUFBNkMsUUFBQSxHQUVjRCxnQkFBZ0I7QUFBQTlQLE9BQUEsY0FBQStQLFFBQUEifQ==