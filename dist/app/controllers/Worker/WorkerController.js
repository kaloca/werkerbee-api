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
var _NotificationModel = _interopRequireDefault(require("../../models/NotificationModel"));
var _Rating = require("../../models/Rating");
var _CertificationModel = _interopRequireDefault(require("../../models/CertificationModel"));
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
          if (!(!worker || worker.accountStatus != 'APPROVED')) {
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
    var username, worker, completedJobs, name, rating, jobTypes, experiences, profilePicture, certifications, address;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          username = req.params.username;
          _context2.next = 4;
          return _WorkerModel["default"].findOne({
            username: username
          }).select('+address').populate('certifications');
        case 4:
          worker = _context2.sent;
          if (!(!worker || worker.accountStatus != 'APPROVED')) {
            _context2.next = 7;
            break;
          }
          return _context2.abrupt("return", res.status(404).json({
            message: 'Worker not found.'
          }));
        case 7:
          _context2.next = 9;
          return _JobModel["default"].find({
            workerId: worker.id,
            status: 'COMPLETE'
          });
        case 9:
          completedJobs = _context2.sent;
          name = worker.name, rating = worker.rating, jobTypes = worker.jobTypes, experiences = worker.experiences, profilePicture = worker.profilePicture, certifications = worker.certifications, address = worker.address;
          return _context2.abrupt("return", res.status(200).json({
            name: name,
            rating: rating,
            jobTypes: jobTypes,
            experiences: experiences,
            profilePicture: profilePicture,
            certifications: certifications,
            completedJobs: completedJobs.length,
            address: {
              city: address.city,
              country: address.country,
              state: address.state
            }
          }));
        case 14:
          _context2.prev = 14;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
          return _context2.abrupt("return", res.sendStatus(400));
        case 18:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 14]]);
  }));
  return function getWorkerPublicProfile(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var getApplications = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var _req$user2;
    var username, workerId, _req$query, status, past, page, limit, pageAsNumber, limitAsNumber, worker, query, applications, totalApplications, totalPage;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          username = req.params.username;
          workerId = (_req$user2 = req.user) === null || _req$user2 === void 0 ? void 0 : _req$user2.userId;
          _req$query = req.query, status = _req$query.status, past = _req$query.past, page = _req$query.page, limit = _req$query.limit;
          pageAsNumber = Number(page) || 1;
          limitAsNumber = Number(limit) || 10;
          _context3.prev = 5;
          _context3.next = 8;
          return _WorkerModel["default"].findOne({
            username: username
          });
        case 8:
          worker = _context3.sent;
          if (worker) {
            _context3.next = 11;
            break;
          }
          return _context3.abrupt("return", res.status(404).json({
            message: 'Worker not found'
          }));
        case 11:
          if (!(workerId != worker._id)) {
            _context3.next = 13;
            break;
          }
          return _context3.abrupt("return", res.status(403).json({
            message: 'Unauthorized'
          }));
        case 13:
          query = {
            worker: workerId
          };
          if (status) {
            query.status = status;
          }
          _context3.next = 17;
          return _JobApplicationModel["default"].find(query).populate({
            path: 'jobPosting',
            match: {}
            //match: past == 'false' ? { start: { $gte: new Date() } } : {},
          }).populate('company').sort({
            createdAt: -1
          }).skip((pageAsNumber - 1) * limitAsNumber).limit(limitAsNumber);
        case 17:
          applications = _context3.sent;
          _context3.next = 20;
          return _JobApplicationModel["default"].countDocuments(query);
        case 20:
          totalApplications = _context3.sent;
          totalPage = Math.ceil(totalApplications / limitAsNumber);
          res.status(200).json({
            applications: applications,
            pagination: {
              currentPage: pageAsNumber,
              totalPage: totalPage,
              totalApplications: totalApplications
            }
          });
          _context3.next = 28;
          break;
        case 25:
          _context3.prev = 25;
          _context3.t0 = _context3["catch"](5);
          res.status(500).json({
            message: 'Server error'
          });
        case 28:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[5, 25]]);
  }));
  return function getApplications(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var getJobs = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var _req$user3;
    var username, workerId, worker, jobs, jobIds, workerRatings, workerRatingMap, jobsWithRatings;
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
          }).sort('-shiftStart').populate('jobPostingId').populate('companyId');
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
          jobIds = jobs.map(function (job) {
            return job._id;
          });
          _context4.next = 18;
          return _Rating.WorkerRatingModel.find({
            jobId: {
              $in: jobIds
            }
          }).exec();
        case 18:
          workerRatings = _context4.sent;
          workerRatingMap = workerRatings.reduce(function (map, rating) {
            return map.set(rating.jobId.toString(), rating);
          }, new Map());
          jobsWithRatings = jobs.map(function (job) {
            var jobObj = job.toObject();
            if (workerRatingMap.has(job._id.toString())) {
              jobObj.workerRating = workerRatingMap.get(job._id.toString());
            }
            return jobObj;
          });
          res.status(200).json(jobsWithRatings);
          _context4.next = 27;
          break;
        case 24:
          _context4.prev = 24;
          _context4.t0 = _context4["catch"](2);
          res.status(500).json({
            message: 'Server error'
          });
        case 27:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[2, 24]]);
  }));
  return function getJobs(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var getJobsCalendar = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var _req$user4;
    var workerId, numberOfDays, startOfWeek, endDate, jobs, days, _loop, m;
    return _regeneratorRuntime().wrap(function _callee5$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          workerId = (_req$user4 = req.user) === null || _req$user4 === void 0 ? void 0 : _req$user4.userId; // Get number of days from request or default to 7
          numberOfDays = Number(req.query.days) || 7; // Get start of the current week
          startOfWeek = (0, _moment["default"])().startOf('week'); // Get end date based on numberOfDays
          endDate = startOfWeek.clone().add(numberOfDays, 'days'); // Find jobs between startOfWeek and endDate
          _context6.next = 6;
          return _JobModel["default"].find({
            shiftStart: {
              $gte: startOfWeek.toDate(),
              $lt: endDate.toDate()
            },
            workerId: workerId
          }).lean();
        case 6:
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
        case 10:
          if (!m.isBefore(endDate)) {
            _context6.next = 15;
            break;
          }
          return _context6.delegateYield(_loop(m), "t0", 12);
        case 12:
          m.add(1, 'days');
          _context6.next = 10;
          break;
        case 15:
          return _context6.abrupt("return", res.status(200).json(days));
        case 16:
        case "end":
          return _context6.stop();
      }
    }, _callee5);
  }));
  return function getJobsCalendar(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var getStatus = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var _req$user5, workerId, worker, unreadNotification;
    return _regeneratorRuntime().wrap(function _callee6$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          workerId = (_req$user5 = req.user) === null || _req$user5 === void 0 ? void 0 : _req$user5.userId;
          _context7.next = 4;
          return _WorkerModel["default"].findById(workerId);
        case 4:
          worker = _context7.sent;
          if (worker) {
            _context7.next = 7;
            break;
          }
          return _context7.abrupt("return", res.status(404).json({
            message: 'Worker not  sfound.'
          }));
        case 7:
          _context7.next = 9;
          return _NotificationModel["default"].findOne({
            readStatus: false,
            user: {
              id: workerId,
              type: 'worker'
            }
          });
        case 9:
          unreadNotification = _context7.sent;
          return _context7.abrupt("return", res.status(200).json({
            unreadNotification: unreadNotification && true,
            profilePicture: worker.profilePicture
          }));
        case 13:
          _context7.prev = 13;
          _context7.t0 = _context7["catch"](0);
          console.log(_context7.t0);
          return _context7.abrupt("return", res.sendStatus(400));
        case 17:
        case "end":
          return _context7.stop();
      }
    }, _callee6, null, [[0, 13]]);
  }));
  return function getStatus(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var addCertification = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var _req$user6, _worker$certification, workerId, certificationId, worker, certification;
    return _regeneratorRuntime().wrap(function _callee7$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          workerId = (_req$user6 = req.user) === null || _req$user6 === void 0 ? void 0 : _req$user6.userId;
          certificationId = req.body.certificationId;
          _context8.next = 5;
          return _WorkerModel["default"].findById(workerId);
        case 5:
          worker = _context8.sent;
          if (worker) {
            _context8.next = 8;
            break;
          }
          return _context8.abrupt("return", res.status(404).json({
            message: 'Worker not found.'
          }));
        case 8:
          _context8.next = 10;
          return _CertificationModel["default"].findById(certificationId);
        case 10:
          certification = _context8.sent;
          if (certification) {
            _context8.next = 13;
            break;
          }
          return _context8.abrupt("return", res.status(400).json({
            message: 'Invalid Certificaton Id'
          }));
        case 13:
          (_worker$certification = worker.certifications) === null || _worker$certification === void 0 ? void 0 : _worker$certification.push(certification._id);
          _context8.next = 16;
          return worker.save();
        case 16:
          return _context8.abrupt("return", res.status(200).json(certification));
        case 19:
          _context8.prev = 19;
          _context8.t0 = _context8["catch"](0);
          console.log(_context8.t0);
          return _context8.abrupt("return", res.sendStatus(400));
        case 23:
        case "end":
          return _context8.stop();
      }
    }, _callee7, null, [[0, 19]]);
  }));
  return function addCertification(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
var WorkerController = {
  getWorkerProfile: getWorkerProfile,
  getWorkerPublicProfile: getWorkerPublicProfile,
  getApplications: getApplications,
  getJobs: getJobs,
  getJobsCalendar: getJobsCalendar,
  getStatus: getStatus,
  addCertification: addCertification
};
var _default = WorkerController;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9tZW50IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfV29ya2VyTW9kZWwiLCJfSm9iTW9kZWwiLCJfSm9iQXBwbGljYXRpb25Nb2RlbCIsIl9Ob3RpZmljYXRpb25Nb2RlbCIsIl9SYXRpbmciLCJfQ2VydGlmaWNhdGlvbk1vZGVsIiwib2JqIiwiX19lc01vZHVsZSIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJleHBvcnRzIiwiT3AiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsImRlZmluZVByb3BlcnR5Iiwia2V5IiwiZGVzYyIsInZhbHVlIiwiJFN5bWJvbCIsIlN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiaXRlcmF0b3IiLCJhc3luY0l0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvciIsInRvU3RyaW5nVGFnU3ltYm9sIiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJlcnIiLCJ3cmFwIiwiaW5uZXJGbiIsIm91dGVyRm4iLCJzZWxmIiwidHJ5TG9jc0xpc3QiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsImNyZWF0ZSIsImNvbnRleHQiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwiZm4iLCJhcmciLCJ0eXBlIiwiY2FsbCIsIkNvbnRpbnVlU2VudGluZWwiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJnZXRQcm90byIsImdldFByb3RvdHlwZU9mIiwiTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUiLCJ2YWx1ZXMiLCJHcCIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJtZXRob2QiLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsIlByb21pc2VJbXBsIiwiaW52b2tlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlY29yZCIsInJlc3VsdCIsIl90eXBlb2YiLCJfX2F3YWl0IiwidGhlbiIsInVud3JhcHBlZCIsImVycm9yIiwicHJldmlvdXNQcm9taXNlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJzdGF0ZSIsIkVycm9yIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJkb25lIiwibWV0aG9kTmFtZSIsInVuZGVmaW5lZCIsIlR5cGVFcnJvciIsImluZm8iLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwiZW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImxlbmd0aCIsImkiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJpdGVyIiwia2V5cyIsInZhbCIsIm9iamVjdCIsInJldmVyc2UiLCJwb3AiLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwiX25leHQiLCJfdGhyb3ciLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3MiLCJhcmd1bWVudHMiLCJhcHBseSIsImdldFdvcmtlclByb2ZpbGUiLCJfcmVmIiwiX2NhbGxlZSIsInJlcSIsInJlcyIsIl9yZXEkdXNlciIsIndvcmtlcklkIiwid29ya2VyIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInVzZXIiLCJ1c2VySWQiLCJXb3JrZXJNb2RlbCIsImZpbmRCeUlkIiwic2VsZWN0IiwiYWNjb3VudFN0YXR1cyIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwidDAiLCJjb25zb2xlIiwibG9nIiwic2VuZFN0YXR1cyIsIl94IiwiX3gyIiwiZ2V0V29ya2VyUHVibGljUHJvZmlsZSIsIl9yZWYyIiwiX2NhbGxlZTIiLCJ1c2VybmFtZSIsImNvbXBsZXRlZEpvYnMiLCJyYXRpbmciLCJqb2JUeXBlcyIsImV4cGVyaWVuY2VzIiwicHJvZmlsZVBpY3R1cmUiLCJjZXJ0aWZpY2F0aW9ucyIsImFkZHJlc3MiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJwYXJhbXMiLCJmaW5kT25lIiwicG9wdWxhdGUiLCJKb2JNb2RlbCIsImZpbmQiLCJpZCIsImNpdHkiLCJjb3VudHJ5IiwiX3gzIiwiX3g0IiwiZ2V0QXBwbGljYXRpb25zIiwiX3JlZjMiLCJfY2FsbGVlMyIsIl9yZXEkdXNlcjIiLCJfcmVxJHF1ZXJ5IiwicGFzdCIsInBhZ2UiLCJsaW1pdCIsInBhZ2VBc051bWJlciIsImxpbWl0QXNOdW1iZXIiLCJxdWVyeSIsImFwcGxpY2F0aW9ucyIsInRvdGFsQXBwbGljYXRpb25zIiwidG90YWxQYWdlIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiTnVtYmVyIiwiX2lkIiwiSm9iQXBwbGljYXRpb25Nb2RlbCIsInBhdGgiLCJtYXRjaCIsInNvcnQiLCJjcmVhdGVkQXQiLCJza2lwIiwiY291bnREb2N1bWVudHMiLCJNYXRoIiwiY2VpbCIsInBhZ2luYXRpb24iLCJjdXJyZW50UGFnZSIsIl94NSIsIl94NiIsImdldEpvYnMiLCJfcmVmNCIsIl9jYWxsZWU0IiwiX3JlcSR1c2VyMyIsImpvYnMiLCJqb2JJZHMiLCJ3b3JrZXJSYXRpbmdzIiwid29ya2VyUmF0aW5nTWFwIiwiam9ic1dpdGhSYXRpbmdzIiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0IiwibWFwIiwiam9iIiwiV29ya2VyUmF0aW5nTW9kZWwiLCJqb2JJZCIsIiRpbiIsImV4ZWMiLCJyZWR1Y2UiLCJzZXQiLCJ0b1N0cmluZyIsIk1hcCIsImpvYk9iaiIsInRvT2JqZWN0IiwiaGFzIiwid29ya2VyUmF0aW5nIiwiZ2V0IiwiX3g3IiwiX3g4IiwiZ2V0Sm9ic0NhbGVuZGFyIiwiX3JlZjUiLCJfY2FsbGVlNSIsIl9yZXEkdXNlcjQiLCJudW1iZXJPZkRheXMiLCJzdGFydE9mV2VlayIsImVuZERhdGUiLCJkYXlzIiwiX2xvb3AiLCJtIiwiX2NhbGxlZTUkIiwiX2NvbnRleHQ2IiwibW9tZW50Iiwic3RhcnRPZiIsImNsb25lIiwiYWRkIiwic2hpZnRTdGFydCIsIiRndGUiLCJ0b0RhdGUiLCIkbHQiLCJsZWFuIiwiZGF0ZVN0ciIsImRheUpvYnMiLCJfbG9vcCQiLCJfY29udGV4dDUiLCJmb3JtYXQiLCJmaWx0ZXIiLCJlIiwiaXNTYW1lIiwiZGF0ZSIsImlzQ3VycmVudE1vbnRoIiwiRGF0ZSIsImlzVG9kYXkiLCJldmVudHMiLCJzdGFydCIsInRvSVNPU3RyaW5nIiwiZW5kIiwic2hpZnRFbmQiLCJpc0JlZm9yZSIsIl94OSIsIl94MTAiLCJnZXRTdGF0dXMiLCJfcmVmNiIsIl9jYWxsZWU2IiwiX3JlcSR1c2VyNSIsInVucmVhZE5vdGlmaWNhdGlvbiIsIl9jYWxsZWU2JCIsIl9jb250ZXh0NyIsIk5vdGlmaWNhdGlvbk1vZGVsIiwicmVhZFN0YXR1cyIsIl94MTEiLCJfeDEyIiwiYWRkQ2VydGlmaWNhdGlvbiIsIl9yZWY3IiwiX2NhbGxlZTciLCJfcmVxJHVzZXI2IiwiX3dvcmtlciRjZXJ0aWZpY2F0aW9uIiwiY2VydGlmaWNhdGlvbklkIiwiY2VydGlmaWNhdGlvbiIsIl9jYWxsZWU3JCIsIl9jb250ZXh0OCIsImJvZHkiLCJDZXJ0aWZpY2F0aW9uTW9kZWwiLCJzYXZlIiwiX3gxMyIsIl94MTQiLCJXb3JrZXJDb250cm9sbGVyIiwiX2RlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBwL2NvbnRyb2xsZXJzL1dvcmtlci9Xb3JrZXJDb250cm9sbGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcydcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuXG5pbXBvcnQgeyBJV29ya2VyIH0gZnJvbSAnQC9hcHAvaW50ZXJmYWNlcy9tb2RlbHMvV29ya2VyJ1xuaW1wb3J0IFdvcmtlck1vZGVsIGZyb20gJ0AvYXBwL21vZGVscy9Xb3JrZXJNb2RlbCdcbmltcG9ydCBKb2JNb2RlbCBmcm9tICdAL2FwcC9tb2RlbHMvSm9iTW9kZWwnXG5pbXBvcnQgeyBJSm9iIH0gZnJvbSAnQC9hcHAvaW50ZXJmYWNlcy9tb2RlbHMvSm9iJ1xuaW1wb3J0IHsgSUpvYkFwcGxpY2F0aW9uIH0gZnJvbSAnQC9hcHAvaW50ZXJmYWNlcy9tb2RlbHMvSm9iQXBwbGljYXRpb24nXG5pbXBvcnQgSm9iQXBwbGljYXRpb25Nb2RlbCBmcm9tICdAL2FwcC9tb2RlbHMvSm9iQXBwbGljYXRpb25Nb2RlbCdcbmltcG9ydCBOb3RpZmljYXRpb25Nb2RlbCBmcm9tICdAL2FwcC9tb2RlbHMvTm90aWZpY2F0aW9uTW9kZWwnXG5pbXBvcnQgeyBJTm90aWZpY2F0aW9uIH0gZnJvbSAnQC9hcHAvaW50ZXJmYWNlcy9tb2RlbHMvTm90aWZpY2F0aW9uJ1xuaW1wb3J0IHsgV29ya2VyUmF0aW5nTW9kZWwgfSBmcm9tICdAL2FwcC9tb2RlbHMvUmF0aW5nJ1xuaW1wb3J0IHsgSVJhdGluZyB9IGZyb20gJ0AvYXBwL2ludGVyZmFjZXMvbW9kZWxzL1JhdGluZydcbmltcG9ydCB7IElDZXJ0aWZpY2F0aW9uIH0gZnJvbSAnQC9hcHAvaW50ZXJmYWNlcy9tb2RlbHMvQ2VydGlmaWNhdGlvbidcbmltcG9ydCBDZXJ0aWZpY2F0aW9uTW9kZWwgZnJvbSAnQC9hcHAvbW9kZWxzL0NlcnRpZmljYXRpb25Nb2RlbCdcblxuY29uc3QgZ2V0V29ya2VyUHJvZmlsZSA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCB3b3JrZXJJZCA9IHJlcS51c2VyPy51c2VySWRcblxuXHRcdGNvbnN0IHdvcmtlcjogSVdvcmtlciB8IG51bGwgPSBhd2FpdCBXb3JrZXJNb2RlbC5maW5kQnlJZCh3b3JrZXJJZCkuc2VsZWN0KFxuXHRcdFx0JythZGRyZXNzJ1xuXHRcdClcblxuXHRcdGlmICghd29ya2VyIHx8IHdvcmtlci5hY2NvdW50U3RhdHVzICE9ICdBUFBST1ZFRCcpIHtcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6ICdXb3JrZXIgbm90IGZvdW5kLicgfSlcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyB3b3JrZXIgfSlcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmxvZyhlcnJvcilcblx0XHRyZXR1cm4gcmVzLnNlbmRTdGF0dXMoNDAwKVxuXHR9XG59XG5cbmNvbnN0IGdldFdvcmtlclB1YmxpY1Byb2ZpbGUgPSBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgdXNlcm5hbWUgPSByZXEucGFyYW1zLnVzZXJuYW1lXG5cblx0XHRjb25zdCB3b3JrZXI6IElXb3JrZXIgfCBudWxsID0gYXdhaXQgV29ya2VyTW9kZWwuZmluZE9uZSh7XG5cdFx0XHR1c2VybmFtZSxcblx0XHR9KVxuXHRcdFx0LnNlbGVjdCgnK2FkZHJlc3MnKVxuXHRcdFx0LnBvcHVsYXRlKCdjZXJ0aWZpY2F0aW9ucycpXG5cblx0XHRpZiAoIXdvcmtlciB8fCB3b3JrZXIuYWNjb3VudFN0YXR1cyAhPSAnQVBQUk9WRUQnKSB7XG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlOiAnV29ya2VyIG5vdCBmb3VuZC4nIH0pXG5cdFx0fVxuXG5cdFx0Y29uc3QgY29tcGxldGVkSm9iczogSUpvYltdIHwgbnVsbCA9IGF3YWl0IEpvYk1vZGVsLmZpbmQoe1xuXHRcdFx0d29ya2VySWQ6IHdvcmtlci5pZCxcblx0XHRcdHN0YXR1czogJ0NPTVBMRVRFJyxcblx0XHR9KVxuXG5cdFx0Y29uc3Qge1xuXHRcdFx0bmFtZSxcblx0XHRcdHJhdGluZyxcblx0XHRcdGpvYlR5cGVzLFxuXHRcdFx0ZXhwZXJpZW5jZXMsXG5cdFx0XHRwcm9maWxlUGljdHVyZSxcblx0XHRcdGNlcnRpZmljYXRpb25zLFxuXHRcdFx0YWRkcmVzcyxcblx0XHR9ID0gd29ya2VyXG5cblx0XHRyZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xuXHRcdFx0bmFtZSxcblx0XHRcdHJhdGluZyxcblx0XHRcdGpvYlR5cGVzLFxuXHRcdFx0ZXhwZXJpZW5jZXMsXG5cdFx0XHRwcm9maWxlUGljdHVyZSxcblx0XHRcdGNlcnRpZmljYXRpb25zLFxuXHRcdFx0Y29tcGxldGVkSm9iczogY29tcGxldGVkSm9icy5sZW5ndGgsXG5cdFx0XHRhZGRyZXNzOiB7XG5cdFx0XHRcdGNpdHk6IGFkZHJlc3MuY2l0eSxcblx0XHRcdFx0Y291bnRyeTogYWRkcmVzcy5jb3VudHJ5LFxuXHRcdFx0XHRzdGF0ZTogYWRkcmVzcy5zdGF0ZSxcblx0XHRcdH0sXG5cdFx0fSlcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmxvZyhlcnJvcilcblx0XHRyZXR1cm4gcmVzLnNlbmRTdGF0dXMoNDAwKVxuXHR9XG59XG5cbmNvbnN0IGdldEFwcGxpY2F0aW9ucyA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcblx0Y29uc3QgdXNlcm5hbWUgPSByZXEucGFyYW1zLnVzZXJuYW1lXG5cdGNvbnN0IHdvcmtlcklkID0gcmVxLnVzZXI/LnVzZXJJZFxuXHRjb25zdCB7IHN0YXR1cywgcGFzdCwgcGFnZSwgbGltaXQgfSA9IHJlcS5xdWVyeVxuXG5cdGNvbnN0IHBhZ2VBc051bWJlciA9IE51bWJlcihwYWdlKSB8fCAxXG5cdGNvbnN0IGxpbWl0QXNOdW1iZXIgPSBOdW1iZXIobGltaXQpIHx8IDEwXG5cblx0dHJ5IHtcblx0XHRjb25zdCB3b3JrZXIgPSBhd2FpdCBXb3JrZXJNb2RlbC5maW5kT25lKHsgdXNlcm5hbWUgfSlcblxuXHRcdGlmICghd29ya2VyKSB7XG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlOiAnV29ya2VyIG5vdCBmb3VuZCcgfSlcblx0XHR9XG5cblx0XHRpZiAod29ya2VySWQgIT0gd29ya2VyLl9pZCkge1xuXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDAzKS5qc29uKHsgbWVzc2FnZTogJ1VuYXV0aG9yaXplZCcgfSlcblx0XHR9XG5cblx0XHRjb25zdCBxdWVyeTogYW55ID0ge1xuXHRcdFx0d29ya2VyOiB3b3JrZXJJZCxcblx0XHR9XG5cblx0XHRpZiAoc3RhdHVzKSB7XG5cdFx0XHRxdWVyeS5zdGF0dXMgPSBzdGF0dXNcblx0XHR9XG5cblx0XHRjb25zdCBhcHBsaWNhdGlvbnM6IElKb2JBcHBsaWNhdGlvbltdID0gYXdhaXQgSm9iQXBwbGljYXRpb25Nb2RlbC5maW5kKFxuXHRcdFx0cXVlcnlcblx0XHQpXG5cdFx0XHQucG9wdWxhdGUoe1xuXHRcdFx0XHRwYXRoOiAnam9iUG9zdGluZycsXG5cdFx0XHRcdG1hdGNoOiB7fSxcblx0XHRcdFx0Ly9tYXRjaDogcGFzdCA9PSAnZmFsc2UnID8geyBzdGFydDogeyAkZ3RlOiBuZXcgRGF0ZSgpIH0gfSA6IHt9LFxuXHRcdFx0fSlcblx0XHRcdC5wb3B1bGF0ZSgnY29tcGFueScpXG5cdFx0XHQuc29ydCh7IGNyZWF0ZWRBdDogLTEgfSlcblx0XHRcdC5za2lwKChwYWdlQXNOdW1iZXIgLSAxKSAqIGxpbWl0QXNOdW1iZXIpXG5cdFx0XHQubGltaXQobGltaXRBc051bWJlcilcblxuXHRcdGNvbnN0IHRvdGFsQXBwbGljYXRpb25zID0gYXdhaXQgSm9iQXBwbGljYXRpb25Nb2RlbC5jb3VudERvY3VtZW50cyhxdWVyeSlcblxuXHRcdGNvbnN0IHRvdGFsUGFnZSA9IE1hdGguY2VpbCh0b3RhbEFwcGxpY2F0aW9ucyAvIGxpbWl0QXNOdW1iZXIpXG5cblx0XHRyZXMuc3RhdHVzKDIwMCkuanNvbih7XG5cdFx0XHRhcHBsaWNhdGlvbnMsXG5cdFx0XHRwYWdpbmF0aW9uOiB7XG5cdFx0XHRcdGN1cnJlbnRQYWdlOiBwYWdlQXNOdW1iZXIsXG5cdFx0XHRcdHRvdGFsUGFnZSxcblx0XHRcdFx0dG90YWxBcHBsaWNhdGlvbnMsXG5cdFx0XHR9LFxuXHRcdH0pXG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0cmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnU2VydmVyIGVycm9yJyB9KVxuXHR9XG59XG5cbmNvbnN0IGdldEpvYnMgPSBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG5cdGNvbnN0IHVzZXJuYW1lID0gcmVxLnBhcmFtcy51c2VybmFtZVxuXHRjb25zdCB3b3JrZXJJZCA9IHJlcS51c2VyPy51c2VySWRcblxuXHR0cnkge1xuXHRcdGNvbnN0IHdvcmtlcjogSVdvcmtlciB8IG51bGwgPSBhd2FpdCBXb3JrZXJNb2RlbC5maW5kT25lKHsgdXNlcm5hbWUgfSlcblxuXHRcdGlmICghd29ya2VyKSB7XG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlOiAnV29ya2VyIG5vdCBmb3VuZCcgfSlcblx0XHR9XG5cblx0XHRpZiAod29ya2VySWQgIT0gd29ya2VyLmlkKSB7XG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBtZXNzYWdlOiAnVW5hdXRob3JpemVkJyB9KVxuXHRcdH1cblxuXHRcdGNvbnN0IGpvYnM6IElKb2JbXSA9IGF3YWl0IEpvYk1vZGVsLmZpbmQoeyB3b3JrZXJJZCB9KVxuXHRcdFx0LnNvcnQoJy1zaGlmdFN0YXJ0Jylcblx0XHRcdC5wb3B1bGF0ZSgnam9iUG9zdGluZ0lkJylcblx0XHRcdC5wb3B1bGF0ZSgnY29tcGFueUlkJylcblxuXHRcdGlmICgham9icykge1xuXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZTogXCJXb3JrZXIgZG9lc24ndCBoYXZlIGFueSBqb2JzXCIgfSlcblx0XHR9XG5cblx0XHRjb25zdCBqb2JJZHMgPSBqb2JzLm1hcCgoam9iKSA9PiBqb2IuX2lkKVxuXG5cdFx0Y29uc3Qgd29ya2VyUmF0aW5nczogSVJhdGluZ1tdID0gYXdhaXQgV29ya2VyUmF0aW5nTW9kZWwuZmluZCh7XG5cdFx0XHRqb2JJZDogeyAkaW46IGpvYklkcyB9LFxuXHRcdH0pLmV4ZWMoKVxuXG5cdFx0Y29uc3Qgd29ya2VyUmF0aW5nTWFwID0gd29ya2VyUmF0aW5ncy5yZWR1Y2UoXG5cdFx0XHQobWFwLCByYXRpbmcpID0+IG1hcC5zZXQocmF0aW5nLmpvYklkLnRvU3RyaW5nKCksIHJhdGluZyksXG5cdFx0XHRuZXcgTWFwKClcblx0XHQpXG5cblx0XHRjb25zdCBqb2JzV2l0aFJhdGluZ3MgPSBqb2JzLm1hcCgoam9iKSA9PiB7XG5cdFx0XHRjb25zdCBqb2JPYmogPSBqb2IudG9PYmplY3QoKVxuXHRcdFx0aWYgKHdvcmtlclJhdGluZ01hcC5oYXMoam9iLl9pZC50b1N0cmluZygpKSkge1xuXHRcdFx0XHRqb2JPYmoud29ya2VyUmF0aW5nID0gd29ya2VyUmF0aW5nTWFwLmdldChqb2IuX2lkLnRvU3RyaW5nKCkpXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gam9iT2JqXG5cdFx0fSlcblxuXHRcdHJlcy5zdGF0dXMoMjAwKS5qc29uKGpvYnNXaXRoUmF0aW5ncylcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRyZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6ICdTZXJ2ZXIgZXJyb3InIH0pXG5cdH1cbn1cblxuY29uc3QgZ2V0Sm9ic0NhbGVuZGFyID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuXHRjb25zdCB3b3JrZXJJZCA9IHJlcS51c2VyPy51c2VySWRcblx0Ly8gR2V0IG51bWJlciBvZiBkYXlzIGZyb20gcmVxdWVzdCBvciBkZWZhdWx0IHRvIDdcblx0Y29uc3QgbnVtYmVyT2ZEYXlzID0gTnVtYmVyKHJlcS5xdWVyeS5kYXlzKSB8fCA3XG5cblx0Ly8gR2V0IHN0YXJ0IG9mIHRoZSBjdXJyZW50IHdlZWtcblx0Y29uc3Qgc3RhcnRPZldlZWsgPSBtb21lbnQoKS5zdGFydE9mKCd3ZWVrJylcblxuXHQvLyBHZXQgZW5kIGRhdGUgYmFzZWQgb24gbnVtYmVyT2ZEYXlzXG5cdGNvbnN0IGVuZERhdGUgPSBzdGFydE9mV2Vlay5jbG9uZSgpLmFkZChudW1iZXJPZkRheXMsICdkYXlzJylcblxuXHQvLyBGaW5kIGpvYnMgYmV0d2VlbiBzdGFydE9mV2VlayBhbmQgZW5kRGF0ZVxuXHRjb25zdCBqb2JzID0gYXdhaXQgSm9iTW9kZWwuZmluZCh7XG5cdFx0c2hpZnRTdGFydDoge1xuXHRcdFx0JGd0ZTogc3RhcnRPZldlZWsudG9EYXRlKCksXG5cdFx0XHQkbHQ6IGVuZERhdGUudG9EYXRlKCksXG5cdFx0fSxcblx0XHR3b3JrZXJJZCxcblx0fSkubGVhbigpXG5cblx0Y29uc3QgZGF5cyA9IFtdXG5cblx0Ly8gTG9vcCB0aHJvdWdoIGVhY2ggZGF5IGFuZCBhZGQgZXZlbnRzXG5cdGZvciAobGV0IG0gPSBzdGFydE9mV2VlazsgbS5pc0JlZm9yZShlbmREYXRlKTsgbS5hZGQoMSwgJ2RheXMnKSkge1xuXHRcdGNvbnN0IGRhdGVTdHIgPSBtLmZvcm1hdCgnWVlZWS1NTS1ERCcpXG5cblx0XHQvLyBGaWx0ZXIgZXZlbnRzIGZvciB0aGUgY3VycmVudCBkYXlcblx0XHRjb25zdCBkYXlKb2JzID0gam9icy5maWx0ZXIoKGUpID0+IG1vbWVudChlLnNoaWZ0U3RhcnQpLmlzU2FtZShtLCAnZGF5JykpXG5cblx0XHRkYXlzLnB1c2goe1xuXHRcdFx0ZGF0ZTogZGF0ZVN0cixcblx0XHRcdGlzQ3VycmVudE1vbnRoOiBtLmlzU2FtZShuZXcgRGF0ZSgpLCAnbW9udGgnKSxcblx0XHRcdGlzVG9kYXk6IG0uaXNTYW1lKG5ldyBEYXRlKCksICdkYXknKSxcblx0XHRcdGV2ZW50czogZGF5Sm9icy5tYXAoKGpvYikgPT4gKHtcblx0XHRcdFx0aWQ6IGpvYi5faWQsXG5cdFx0XHRcdG5hbWU6IGpvYi5uYW1lLFxuXHRcdFx0XHRzdGFydDogam9iLnNoaWZ0U3RhcnQudG9JU09TdHJpbmcoKSxcblx0XHRcdFx0ZW5kOiBqb2Iuc2hpZnRFbmQudG9JU09TdHJpbmcoKSxcblx0XHRcdH0pKSxcblx0XHR9KVxuXHR9XG5cdHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihkYXlzKVxufVxuXG5jb25zdCBnZXRTdGF0dXMgPSBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc3Qgd29ya2VySWQgPSByZXEudXNlcj8udXNlcklkXG5cblx0XHRjb25zdCB3b3JrZXI6IElXb3JrZXIgfCBudWxsID0gYXdhaXQgV29ya2VyTW9kZWwuZmluZEJ5SWQod29ya2VySWQpXG5cblx0XHRpZiAoIXdvcmtlcikge1xuXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZTogJ1dvcmtlciBub3QgIHNmb3VuZC4nIH0pXG5cdFx0fVxuXG5cdFx0Y29uc3QgdW5yZWFkTm90aWZpY2F0aW9uOiBJTm90aWZpY2F0aW9uIHwgbnVsbCA9XG5cdFx0XHRhd2FpdCBOb3RpZmljYXRpb25Nb2RlbC5maW5kT25lKHtcblx0XHRcdFx0cmVhZFN0YXR1czogZmFsc2UsXG5cdFx0XHRcdHVzZXI6IHtcblx0XHRcdFx0XHRpZDogd29ya2VySWQsXG5cdFx0XHRcdFx0dHlwZTogJ3dvcmtlcicsXG5cdFx0XHRcdH0sXG5cdFx0XHR9KVxuXG5cdFx0cmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcblx0XHRcdHVucmVhZE5vdGlmaWNhdGlvbjogdW5yZWFkTm90aWZpY2F0aW9uICYmIHRydWUsXG5cdFx0XHRwcm9maWxlUGljdHVyZTogd29ya2VyLnByb2ZpbGVQaWN0dXJlLFxuXHRcdH0pXG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5sb2coZXJyb3IpXG5cdFx0cmV0dXJuIHJlcy5zZW5kU3RhdHVzKDQwMClcblx0fVxufVxuXG5jb25zdCBhZGRDZXJ0aWZpY2F0aW9uID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHdvcmtlcklkID0gcmVxLnVzZXI/LnVzZXJJZFxuXHRcdGNvbnN0IHsgY2VydGlmaWNhdGlvbklkIH0gPSByZXEuYm9keVxuXG5cdFx0Y29uc3Qgd29ya2VyOiBJV29ya2VyIHwgbnVsbCA9IGF3YWl0IFdvcmtlck1vZGVsLmZpbmRCeUlkKHdvcmtlcklkKVxuXG5cdFx0aWYgKCF3b3JrZXIpIHtcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6ICdXb3JrZXIgbm90IGZvdW5kLicgfSlcblx0XHR9XG5cblx0XHRjb25zdCBjZXJ0aWZpY2F0aW9uOiBJQ2VydGlmaWNhdGlvbiB8IG51bGwgPVxuXHRcdFx0YXdhaXQgQ2VydGlmaWNhdGlvbk1vZGVsLmZpbmRCeUlkKGNlcnRpZmljYXRpb25JZClcblxuXHRcdGlmICghY2VydGlmaWNhdGlvbikge1xuXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogJ0ludmFsaWQgQ2VydGlmaWNhdG9uIElkJyB9KVxuXHRcdH1cblxuXHRcdHdvcmtlci5jZXJ0aWZpY2F0aW9ucz8ucHVzaChjZXJ0aWZpY2F0aW9uLl9pZClcblx0XHRhd2FpdCB3b3JrZXIuc2F2ZSgpXG5cblx0XHRyZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oY2VydGlmaWNhdGlvbilcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmxvZyhlcnJvcilcblx0XHRyZXR1cm4gcmVzLnNlbmRTdGF0dXMoNDAwKVxuXHR9XG59XG5cbmNvbnN0IFdvcmtlckNvbnRyb2xsZXIgPSB7XG5cdGdldFdvcmtlclByb2ZpbGUsXG5cdGdldFdvcmtlclB1YmxpY1Byb2ZpbGUsXG5cdGdldEFwcGxpY2F0aW9ucyxcblx0Z2V0Sm9icyxcblx0Z2V0Sm9ic0NhbGVuZGFyLFxuXHRnZXRTdGF0dXMsXG5cdGFkZENlcnRpZmljYXRpb24sXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdvcmtlckNvbnRyb2xsZXJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBLElBQUFBLE9BQUEsR0FBQUMsc0JBQUEsQ0FBQUMsT0FBQTtBQUdBLElBQUFDLFlBQUEsR0FBQUYsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFFLFNBQUEsR0FBQUgsc0JBQUEsQ0FBQUMsT0FBQTtBQUdBLElBQUFHLG9CQUFBLEdBQUFKLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBSSxrQkFBQSxHQUFBTCxzQkFBQSxDQUFBQyxPQUFBO0FBRUEsSUFBQUssT0FBQSxHQUFBTCxPQUFBO0FBR0EsSUFBQU0sbUJBQUEsR0FBQVAsc0JBQUEsQ0FBQUMsT0FBQTtBQUFnRSxTQUFBRCx1QkFBQVEsR0FBQSxXQUFBQSxHQUFBLElBQUFBLEdBQUEsQ0FBQUMsVUFBQSxHQUFBRCxHQUFBLGdCQUFBQSxHQUFBO0FBQUEsU0FBQUUsb0JBQUEsa0JBYmhFLHFKQUFBQSxtQkFBQSxZQUFBQSxvQkFBQSxXQUFBQyxPQUFBLFNBQUFBLE9BQUEsT0FBQUMsRUFBQSxHQUFBQyxNQUFBLENBQUFDLFNBQUEsRUFBQUMsTUFBQSxHQUFBSCxFQUFBLENBQUFJ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