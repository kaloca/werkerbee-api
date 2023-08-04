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
          }).select('+address');
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
              country: address.country
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
var WorkerController = {
  getWorkerProfile: getWorkerProfile,
  getWorkerPublicProfile: getWorkerPublicProfile,
  getApplications: getApplications,
  getJobs: getJobs,
  getJobsCalendar: getJobsCalendar,
  getStatus: getStatus
};
var _default = WorkerController;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9tZW50IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfV29ya2VyTW9kZWwiLCJfSm9iTW9kZWwiLCJfSm9iQXBwbGljYXRpb25Nb2RlbCIsIl9Ob3RpZmljYXRpb25Nb2RlbCIsIl9SYXRpbmciLCJvYmoiLCJfX2VzTW9kdWxlIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsImV4cG9ydHMiLCJPcCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093biIsImhhc093blByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJrZXkiLCJkZXNjIiwidmFsdWUiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImVyciIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY3JlYXRlIiwiY29udGV4dCIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsImFyZyIsInR5cGUiLCJjYWxsIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIm1ldGhvZCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiUHJvbWlzZUltcGwiLCJpbnZva2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVjb3JkIiwicmVzdWx0IiwiX3R5cGVvZiIsIl9fYXdhaXQiLCJ0aGVuIiwidW53cmFwcGVkIiwiZXJyb3IiLCJwcmV2aW91c1Byb21pc2UiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsInN0YXRlIiwiRXJyb3IiLCJkb25lUmVzdWx0IiwiZGVsZWdhdGUiLCJkZWxlZ2F0ZVJlc3VsdCIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsImRvbmUiLCJtZXRob2ROYW1lIiwidW5kZWZpbmVkIiwiVHlwZUVycm9yIiwiaW5mbyIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJlbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXRlcmFibGUiLCJpdGVyYXRvck1ldGhvZCIsImlzTmFOIiwibGVuZ3RoIiwiaSIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsIml0ZXIiLCJrZXlzIiwidmFsIiwib2JqZWN0IiwicmV2ZXJzZSIsInBvcCIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiZ2V0V29ya2VyUHJvZmlsZSIsIl9yZWYiLCJfY2FsbGVlIiwicmVxIiwicmVzIiwiX3JlcSR1c2VyIiwid29ya2VySWQiLCJ3b3JrZXIiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwidXNlciIsInVzZXJJZCIsIldvcmtlck1vZGVsIiwiZmluZEJ5SWQiLCJzZWxlY3QiLCJhY2NvdW50U3RhdHVzIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJ0MCIsImNvbnNvbGUiLCJsb2ciLCJzZW5kU3RhdHVzIiwiX3giLCJfeDIiLCJnZXRXb3JrZXJQdWJsaWNQcm9maWxlIiwiX3JlZjIiLCJfY2FsbGVlMiIsInVzZXJuYW1lIiwiY29tcGxldGVkSm9icyIsInJhdGluZyIsImpvYlR5cGVzIiwiZXhwZXJpZW5jZXMiLCJwcm9maWxlUGljdHVyZSIsImNlcnRpZmljYXRpb25zIiwiYWRkcmVzcyIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsInBhcmFtcyIsImZpbmRPbmUiLCJKb2JNb2RlbCIsImZpbmQiLCJpZCIsImNpdHkiLCJjb3VudHJ5IiwiX3gzIiwiX3g0IiwiZ2V0QXBwbGljYXRpb25zIiwiX3JlZjMiLCJfY2FsbGVlMyIsIl9yZXEkdXNlcjIiLCJfcmVxJHF1ZXJ5IiwicGFzdCIsInBhZ2UiLCJsaW1pdCIsInBhZ2VBc051bWJlciIsImxpbWl0QXNOdW1iZXIiLCJxdWVyeSIsImFwcGxpY2F0aW9ucyIsInRvdGFsQXBwbGljYXRpb25zIiwidG90YWxQYWdlIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiTnVtYmVyIiwiX2lkIiwiSm9iQXBwbGljYXRpb25Nb2RlbCIsInBvcHVsYXRlIiwicGF0aCIsIm1hdGNoIiwic29ydCIsImNyZWF0ZWRBdCIsInNraXAiLCJjb3VudERvY3VtZW50cyIsIk1hdGgiLCJjZWlsIiwicGFnaW5hdGlvbiIsImN1cnJlbnRQYWdlIiwiX3g1IiwiX3g2IiwiZ2V0Sm9icyIsIl9yZWY0IiwiX2NhbGxlZTQiLCJfcmVxJHVzZXIzIiwiam9icyIsImpvYklkcyIsIndvcmtlclJhdGluZ3MiLCJ3b3JrZXJSYXRpbmdNYXAiLCJqb2JzV2l0aFJhdGluZ3MiLCJfY2FsbGVlNCQiLCJfY29udGV4dDQiLCJtYXAiLCJqb2IiLCJXb3JrZXJSYXRpbmdNb2RlbCIsImpvYklkIiwiJGluIiwiZXhlYyIsInJlZHVjZSIsInNldCIsInRvU3RyaW5nIiwiTWFwIiwiam9iT2JqIiwidG9PYmplY3QiLCJoYXMiLCJ3b3JrZXJSYXRpbmciLCJnZXQiLCJfeDciLCJfeDgiLCJnZXRKb2JzQ2FsZW5kYXIiLCJfcmVmNSIsIl9jYWxsZWU1IiwiX3JlcSR1c2VyNCIsIm51bWJlck9mRGF5cyIsInN0YXJ0T2ZXZWVrIiwiZW5kRGF0ZSIsImRheXMiLCJfbG9vcCIsIm0iLCJfY2FsbGVlNSQiLCJfY29udGV4dDYiLCJtb21lbnQiLCJzdGFydE9mIiwiY2xvbmUiLCJhZGQiLCJzaGlmdFN0YXJ0IiwiJGd0ZSIsInRvRGF0ZSIsIiRsdCIsImxlYW4iLCJkYXRlU3RyIiwiZGF5Sm9icyIsIl9sb29wJCIsIl9jb250ZXh0NSIsImZvcm1hdCIsImZpbHRlciIsImUiLCJpc1NhbWUiLCJkYXRlIiwiaXNDdXJyZW50TW9udGgiLCJEYXRlIiwiaXNUb2RheSIsImV2ZW50cyIsInN0YXJ0IiwidG9JU09TdHJpbmciLCJlbmQiLCJzaGlmdEVuZCIsImlzQmVmb3JlIiwiX3g5IiwiX3gxMCIsImdldFN0YXR1cyIsIl9yZWY2IiwiX2NhbGxlZTYiLCJfcmVxJHVzZXI1IiwidW5yZWFkTm90aWZpY2F0aW9uIiwiX2NhbGxlZTYkIiwiX2NvbnRleHQ3IiwiTm90aWZpY2F0aW9uTW9kZWwiLCJyZWFkU3RhdHVzIiwiX3gxMSIsIl94MTIiLCJXb3JrZXJDb250cm9sbGVyIiwiX2RlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBwL2NvbnRyb2xsZXJzL1dvcmtlci9Xb3JrZXJDb250cm9sbGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcydcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuXG5pbXBvcnQgeyBJV29ya2VyIH0gZnJvbSAnQC9hcHAvaW50ZXJmYWNlcy9tb2RlbHMvV29ya2VyJ1xuaW1wb3J0IFdvcmtlck1vZGVsIGZyb20gJ0AvYXBwL21vZGVscy9Xb3JrZXJNb2RlbCdcbmltcG9ydCBKb2JNb2RlbCBmcm9tICdAL2FwcC9tb2RlbHMvSm9iTW9kZWwnXG5pbXBvcnQgeyBJSm9iIH0gZnJvbSAnQC9hcHAvaW50ZXJmYWNlcy9tb2RlbHMvSm9iJ1xuaW1wb3J0IHsgSUpvYkFwcGxpY2F0aW9uIH0gZnJvbSAnQC9hcHAvaW50ZXJmYWNlcy9tb2RlbHMvSm9iQXBwbGljYXRpb24nXG5pbXBvcnQgSm9iQXBwbGljYXRpb25Nb2RlbCBmcm9tICdAL2FwcC9tb2RlbHMvSm9iQXBwbGljYXRpb25Nb2RlbCdcbmltcG9ydCBOb3RpZmljYXRpb25Nb2RlbCBmcm9tICdAL2FwcC9tb2RlbHMvTm90aWZpY2F0aW9uTW9kZWwnXG5pbXBvcnQgeyBJTm90aWZpY2F0aW9uIH0gZnJvbSAnQC9hcHAvaW50ZXJmYWNlcy9tb2RlbHMvTm90aWZpY2F0aW9uJ1xuaW1wb3J0IHsgV29ya2VyUmF0aW5nTW9kZWwgfSBmcm9tICdAL2FwcC9tb2RlbHMvUmF0aW5nJ1xuaW1wb3J0IHsgSVJhdGluZyB9IGZyb20gJ0AvYXBwL2ludGVyZmFjZXMvbW9kZWxzL1JhdGluZydcblxuY29uc3QgZ2V0V29ya2VyUHJvZmlsZSA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCB3b3JrZXJJZCA9IHJlcS51c2VyPy51c2VySWRcblxuXHRcdGNvbnN0IHdvcmtlcjogSVdvcmtlciB8IG51bGwgPSBhd2FpdCBXb3JrZXJNb2RlbC5maW5kQnlJZCh3b3JrZXJJZCkuc2VsZWN0KFxuXHRcdFx0JythZGRyZXNzJ1xuXHRcdClcblxuXHRcdGlmICghd29ya2VyIHx8IHdvcmtlci5hY2NvdW50U3RhdHVzICE9ICdBUFBST1ZFRCcpIHtcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6ICdXb3JrZXIgbm90IGZvdW5kLicgfSlcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyB3b3JrZXIgfSlcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmxvZyhlcnJvcilcblx0XHRyZXR1cm4gcmVzLnNlbmRTdGF0dXMoNDAwKVxuXHR9XG59XG5cbmNvbnN0IGdldFdvcmtlclB1YmxpY1Byb2ZpbGUgPSBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgdXNlcm5hbWUgPSByZXEucGFyYW1zLnVzZXJuYW1lXG5cblx0XHRjb25zdCB3b3JrZXI6IElXb3JrZXIgfCBudWxsID0gYXdhaXQgV29ya2VyTW9kZWwuZmluZE9uZSh7XG5cdFx0XHR1c2VybmFtZSxcblx0XHR9KS5zZWxlY3QoJythZGRyZXNzJylcblxuXHRcdGlmICghd29ya2VyIHx8IHdvcmtlci5hY2NvdW50U3RhdHVzICE9ICdBUFBST1ZFRCcpIHtcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6ICdXb3JrZXIgbm90IGZvdW5kLicgfSlcblx0XHR9XG5cblx0XHRjb25zdCBjb21wbGV0ZWRKb2JzOiBJSm9iW10gfCBudWxsID0gYXdhaXQgSm9iTW9kZWwuZmluZCh7XG5cdFx0XHR3b3JrZXJJZDogd29ya2VyLmlkLFxuXHRcdFx0c3RhdHVzOiAnQ09NUExFVEUnLFxuXHRcdH0pXG5cblx0XHRjb25zdCB7XG5cdFx0XHRuYW1lLFxuXHRcdFx0cmF0aW5nLFxuXHRcdFx0am9iVHlwZXMsXG5cdFx0XHRleHBlcmllbmNlcyxcblx0XHRcdHByb2ZpbGVQaWN0dXJlLFxuXHRcdFx0Y2VydGlmaWNhdGlvbnMsXG5cdFx0XHRhZGRyZXNzLFxuXHRcdH0gPSB3b3JrZXJcblxuXHRcdHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XG5cdFx0XHRuYW1lLFxuXHRcdFx0cmF0aW5nLFxuXHRcdFx0am9iVHlwZXMsXG5cdFx0XHRleHBlcmllbmNlcyxcblx0XHRcdHByb2ZpbGVQaWN0dXJlLFxuXHRcdFx0Y2VydGlmaWNhdGlvbnMsXG5cdFx0XHRjb21wbGV0ZWRKb2JzOiBjb21wbGV0ZWRKb2JzLmxlbmd0aCxcblx0XHRcdGFkZHJlc3M6IHtcblx0XHRcdFx0Y2l0eTogYWRkcmVzcy5jaXR5LFxuXHRcdFx0XHRjb3VudHJ5OiBhZGRyZXNzLmNvdW50cnksXG5cdFx0XHR9LFxuXHRcdH0pXG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5sb2coZXJyb3IpXG5cdFx0cmV0dXJuIHJlcy5zZW5kU3RhdHVzKDQwMClcblx0fVxufVxuXG5jb25zdCBnZXRBcHBsaWNhdGlvbnMgPSBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG5cdGNvbnN0IHVzZXJuYW1lID0gcmVxLnBhcmFtcy51c2VybmFtZVxuXHRjb25zdCB3b3JrZXJJZCA9IHJlcS51c2VyPy51c2VySWRcblx0Y29uc3QgeyBzdGF0dXMsIHBhc3QsIHBhZ2UsIGxpbWl0IH0gPSByZXEucXVlcnlcblxuXHRjb25zdCBwYWdlQXNOdW1iZXIgPSBOdW1iZXIocGFnZSkgfHwgMVxuXHRjb25zdCBsaW1pdEFzTnVtYmVyID0gTnVtYmVyKGxpbWl0KSB8fCAxMFxuXG5cdHRyeSB7XG5cdFx0Y29uc3Qgd29ya2VyID0gYXdhaXQgV29ya2VyTW9kZWwuZmluZE9uZSh7IHVzZXJuYW1lIH0pXG5cblx0XHRpZiAoIXdvcmtlcikge1xuXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZTogJ1dvcmtlciBub3QgZm91bmQnIH0pXG5cdFx0fVxuXG5cdFx0aWYgKHdvcmtlcklkICE9IHdvcmtlci5faWQpIHtcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwMykuanNvbih7IG1lc3NhZ2U6ICdVbmF1dGhvcml6ZWQnIH0pXG5cdFx0fVxuXG5cdFx0Y29uc3QgcXVlcnk6IGFueSA9IHtcblx0XHRcdHdvcmtlcjogd29ya2VySWQsXG5cdFx0fVxuXG5cdFx0aWYgKHN0YXR1cykge1xuXHRcdFx0cXVlcnkuc3RhdHVzID0gc3RhdHVzXG5cdFx0fVxuXG5cdFx0Y29uc3QgYXBwbGljYXRpb25zOiBJSm9iQXBwbGljYXRpb25bXSA9IGF3YWl0IEpvYkFwcGxpY2F0aW9uTW9kZWwuZmluZChcblx0XHRcdHF1ZXJ5XG5cdFx0KVxuXHRcdFx0LnBvcHVsYXRlKHtcblx0XHRcdFx0cGF0aDogJ2pvYlBvc3RpbmcnLFxuXHRcdFx0XHRtYXRjaDoge30sXG5cdFx0XHRcdC8vbWF0Y2g6IHBhc3QgPT0gJ2ZhbHNlJyA/IHsgc3RhcnQ6IHsgJGd0ZTogbmV3IERhdGUoKSB9IH0gOiB7fSxcblx0XHRcdH0pXG5cdFx0XHQucG9wdWxhdGUoJ2NvbXBhbnknKVxuXHRcdFx0LnNvcnQoeyBjcmVhdGVkQXQ6IC0xIH0pXG5cdFx0XHQuc2tpcCgocGFnZUFzTnVtYmVyIC0gMSkgKiBsaW1pdEFzTnVtYmVyKVxuXHRcdFx0LmxpbWl0KGxpbWl0QXNOdW1iZXIpXG5cblx0XHRjb25zdCB0b3RhbEFwcGxpY2F0aW9ucyA9IGF3YWl0IEpvYkFwcGxpY2F0aW9uTW9kZWwuY291bnREb2N1bWVudHMocXVlcnkpXG5cblx0XHRjb25zdCB0b3RhbFBhZ2UgPSBNYXRoLmNlaWwodG90YWxBcHBsaWNhdGlvbnMgLyBsaW1pdEFzTnVtYmVyKVxuXG5cdFx0cmVzLnN0YXR1cygyMDApLmpzb24oe1xuXHRcdFx0YXBwbGljYXRpb25zLFxuXHRcdFx0cGFnaW5hdGlvbjoge1xuXHRcdFx0XHRjdXJyZW50UGFnZTogcGFnZUFzTnVtYmVyLFxuXHRcdFx0XHR0b3RhbFBhZ2UsXG5cdFx0XHRcdHRvdGFsQXBwbGljYXRpb25zLFxuXHRcdFx0fSxcblx0XHR9KVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogJ1NlcnZlciBlcnJvcicgfSlcblx0fVxufVxuXG5jb25zdCBnZXRKb2JzID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuXHRjb25zdCB1c2VybmFtZSA9IHJlcS5wYXJhbXMudXNlcm5hbWVcblx0Y29uc3Qgd29ya2VySWQgPSByZXEudXNlcj8udXNlcklkXG5cblx0dHJ5IHtcblx0XHRjb25zdCB3b3JrZXI6IElXb3JrZXIgfCBudWxsID0gYXdhaXQgV29ya2VyTW9kZWwuZmluZE9uZSh7IHVzZXJuYW1lIH0pXG5cblx0XHRpZiAoIXdvcmtlcikge1xuXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZTogJ1dvcmtlciBub3QgZm91bmQnIH0pXG5cdFx0fVxuXG5cdFx0aWYgKHdvcmtlcklkICE9IHdvcmtlci5pZCkge1xuXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgbWVzc2FnZTogJ1VuYXV0aG9yaXplZCcgfSlcblx0XHR9XG5cblx0XHRjb25zdCBqb2JzOiBJSm9iW10gPSBhd2FpdCBKb2JNb2RlbC5maW5kKHsgd29ya2VySWQgfSlcblx0XHRcdC5zb3J0KCctc2hpZnRTdGFydCcpXG5cdFx0XHQucG9wdWxhdGUoJ2pvYlBvc3RpbmdJZCcpXG5cdFx0XHQucG9wdWxhdGUoJ2NvbXBhbnlJZCcpXG5cblx0XHRpZiAoIWpvYnMpIHtcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6IFwiV29ya2VyIGRvZXNuJ3QgaGF2ZSBhbnkgam9ic1wiIH0pXG5cdFx0fVxuXG5cdFx0Y29uc3Qgam9iSWRzID0gam9icy5tYXAoKGpvYikgPT4gam9iLl9pZClcblxuXHRcdGNvbnN0IHdvcmtlclJhdGluZ3M6IElSYXRpbmdbXSA9IGF3YWl0IFdvcmtlclJhdGluZ01vZGVsLmZpbmQoe1xuXHRcdFx0am9iSWQ6IHsgJGluOiBqb2JJZHMgfSxcblx0XHR9KS5leGVjKClcblxuXHRcdGNvbnN0IHdvcmtlclJhdGluZ01hcCA9IHdvcmtlclJhdGluZ3MucmVkdWNlKFxuXHRcdFx0KG1hcCwgcmF0aW5nKSA9PiBtYXAuc2V0KHJhdGluZy5qb2JJZC50b1N0cmluZygpLCByYXRpbmcpLFxuXHRcdFx0bmV3IE1hcCgpXG5cdFx0KVxuXG5cdFx0Y29uc3Qgam9ic1dpdGhSYXRpbmdzID0gam9icy5tYXAoKGpvYikgPT4ge1xuXHRcdFx0Y29uc3Qgam9iT2JqID0gam9iLnRvT2JqZWN0KClcblx0XHRcdGlmICh3b3JrZXJSYXRpbmdNYXAuaGFzKGpvYi5faWQudG9TdHJpbmcoKSkpIHtcblx0XHRcdFx0am9iT2JqLndvcmtlclJhdGluZyA9IHdvcmtlclJhdGluZ01hcC5nZXQoam9iLl9pZC50b1N0cmluZygpKVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGpvYk9ialxuXHRcdH0pXG5cblx0XHRyZXMuc3RhdHVzKDIwMCkuanNvbihqb2JzV2l0aFJhdGluZ3MpXG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0cmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnU2VydmVyIGVycm9yJyB9KVxuXHR9XG59XG5cbmNvbnN0IGdldEpvYnNDYWxlbmRhciA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcblx0Y29uc3Qgd29ya2VySWQgPSByZXEudXNlcj8udXNlcklkXG5cdC8vIEdldCBudW1iZXIgb2YgZGF5cyBmcm9tIHJlcXVlc3Qgb3IgZGVmYXVsdCB0byA3XG5cdGNvbnN0IG51bWJlck9mRGF5cyA9IE51bWJlcihyZXEucXVlcnkuZGF5cykgfHwgN1xuXG5cdC8vIEdldCBzdGFydCBvZiB0aGUgY3VycmVudCB3ZWVrXG5cdGNvbnN0IHN0YXJ0T2ZXZWVrID0gbW9tZW50KCkuc3RhcnRPZignd2VlaycpXG5cblx0Ly8gR2V0IGVuZCBkYXRlIGJhc2VkIG9uIG51bWJlck9mRGF5c1xuXHRjb25zdCBlbmREYXRlID0gc3RhcnRPZldlZWsuY2xvbmUoKS5hZGQobnVtYmVyT2ZEYXlzLCAnZGF5cycpXG5cblx0Ly8gRmluZCBqb2JzIGJldHdlZW4gc3RhcnRPZldlZWsgYW5kIGVuZERhdGVcblx0Y29uc3Qgam9icyA9IGF3YWl0IEpvYk1vZGVsLmZpbmQoe1xuXHRcdHNoaWZ0U3RhcnQ6IHtcblx0XHRcdCRndGU6IHN0YXJ0T2ZXZWVrLnRvRGF0ZSgpLFxuXHRcdFx0JGx0OiBlbmREYXRlLnRvRGF0ZSgpLFxuXHRcdH0sXG5cdFx0d29ya2VySWQsXG5cdH0pLmxlYW4oKVxuXG5cdGNvbnN0IGRheXMgPSBbXVxuXG5cdC8vIExvb3AgdGhyb3VnaCBlYWNoIGRheSBhbmQgYWRkIGV2ZW50c1xuXHRmb3IgKGxldCBtID0gc3RhcnRPZldlZWs7IG0uaXNCZWZvcmUoZW5kRGF0ZSk7IG0uYWRkKDEsICdkYXlzJykpIHtcblx0XHRjb25zdCBkYXRlU3RyID0gbS5mb3JtYXQoJ1lZWVktTU0tREQnKVxuXG5cdFx0Ly8gRmlsdGVyIGV2ZW50cyBmb3IgdGhlIGN1cnJlbnQgZGF5XG5cdFx0Y29uc3QgZGF5Sm9icyA9IGpvYnMuZmlsdGVyKChlKSA9PiBtb21lbnQoZS5zaGlmdFN0YXJ0KS5pc1NhbWUobSwgJ2RheScpKVxuXG5cdFx0ZGF5cy5wdXNoKHtcblx0XHRcdGRhdGU6IGRhdGVTdHIsXG5cdFx0XHRpc0N1cnJlbnRNb250aDogbS5pc1NhbWUobmV3IERhdGUoKSwgJ21vbnRoJyksXG5cdFx0XHRpc1RvZGF5OiBtLmlzU2FtZShuZXcgRGF0ZSgpLCAnZGF5JyksXG5cdFx0XHRldmVudHM6IGRheUpvYnMubWFwKChqb2IpID0+ICh7XG5cdFx0XHRcdGlkOiBqb2IuX2lkLFxuXHRcdFx0XHRuYW1lOiBqb2IubmFtZSxcblx0XHRcdFx0c3RhcnQ6IGpvYi5zaGlmdFN0YXJ0LnRvSVNPU3RyaW5nKCksXG5cdFx0XHRcdGVuZDogam9iLnNoaWZ0RW5kLnRvSVNPU3RyaW5nKCksXG5cdFx0XHR9KSksXG5cdFx0fSlcblx0fVxuXHRyZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oZGF5cylcbn1cblxuY29uc3QgZ2V0U3RhdHVzID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHdvcmtlcklkID0gcmVxLnVzZXI/LnVzZXJJZFxuXG5cdFx0Y29uc3Qgd29ya2VyOiBJV29ya2VyIHwgbnVsbCA9IGF3YWl0IFdvcmtlck1vZGVsLmZpbmRCeUlkKHdvcmtlcklkKVxuXG5cdFx0aWYgKCF3b3JrZXIpIHtcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6ICdXb3JrZXIgbm90ICBzZm91bmQuJyB9KVxuXHRcdH1cblxuXHRcdGNvbnN0IHVucmVhZE5vdGlmaWNhdGlvbjogSU5vdGlmaWNhdGlvbiB8IG51bGwgPVxuXHRcdFx0YXdhaXQgTm90aWZpY2F0aW9uTW9kZWwuZmluZE9uZSh7XG5cdFx0XHRcdHJlYWRTdGF0dXM6IGZhbHNlLFxuXHRcdFx0XHR1c2VyOiB7XG5cdFx0XHRcdFx0aWQ6IHdvcmtlcklkLFxuXHRcdFx0XHRcdHR5cGU6ICd3b3JrZXInLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSlcblxuXHRcdHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XG5cdFx0XHR1bnJlYWROb3RpZmljYXRpb246IHVucmVhZE5vdGlmaWNhdGlvbiAmJiB0cnVlLFxuXHRcdFx0cHJvZmlsZVBpY3R1cmU6IHdvcmtlci5wcm9maWxlUGljdHVyZSxcblx0XHR9KVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUubG9nKGVycm9yKVxuXHRcdHJldHVybiByZXMuc2VuZFN0YXR1cyg0MDApXG5cdH1cbn1cblxuY29uc3QgV29ya2VyQ29udHJvbGxlciA9IHtcblx0Z2V0V29ya2VyUHJvZmlsZSxcblx0Z2V0V29ya2VyUHVibGljUHJvZmlsZSxcblx0Z2V0QXBwbGljYXRpb25zLFxuXHRnZXRKb2JzLFxuXHRnZXRKb2JzQ2FsZW5kYXIsXG5cdGdldFN0YXR1cyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgV29ya2VyQ29udHJvbGxlclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0EsSUFBQUEsT0FBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBR0EsSUFBQUMsWUFBQSxHQUFBRixzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUUsU0FBQSxHQUFBSCxzQkFBQSxDQUFBQyxPQUFBO0FBR0EsSUFBQUcsb0JBQUEsR0FBQUosc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFJLGtCQUFBLEdBQUFMLHNCQUFBLENBQUFDLE9BQUE7QUFFQSxJQUFBSyxPQUFBLEdBQUFMLE9BQUE7QUFBdUQsU0FBQUQsdUJBQUFPLEdBQUEsV0FBQUEsR0FBQSxJQUFBQSxHQUFBLENBQUFDLFVBQUEsR0FBQUQsR0FBQSxnQkFBQUEsR0FBQTtBQUFBLFNBQUFFLG9CQUFBLGtCQVZ2RCxxSkFBQUEsbUJBQUEsWUFBQUEsb0JBQUEsV0FBQUMsT0FBQSxTQUFBQSxPQUFBLE9BQUFDLEVBQUEsR0FBQUMsTUFBQSxDQUFBQyxTQUFBLEVBQUFDLE1BQUEsR0FBQUgsRUFBQSxDQUFBSSxjQUFBLEVBQUFDLGNBQUEsR0FBQUosTUFBQSxDQUFBSSxjQUFBLGNBQUFULEdBQUEsRUFBQVUsR0FBQSxFQUFBQyxJQUFBLElBQUFYLEdBQUEsQ0FBQVUsR0FBQSxJQUFBQyxJQUFBLENBQUFDLEtBQUEsS0FBQUMsT0FBQSx3QkFBQUMsTUFBQSxHQUFBQSxNQUFBLE9BQUFDLGNBQUEsR0FBQUYsT0FBQSxDQUFBRyxRQUFBLGtCQUFBQyxtQkFBQSxHQUFBSixPQUFBLENBQUFLLGFBQUEsdUJBQUFDLGlCQUFBLEdBQUFOLE9BQUEsQ0FBQU8sV0FBQSw4QkFBQUMsT0FBQXJCLEdBQUEsRUFBQVUsR0FBQSxFQUFBRSxLQUFBLFdBQUFQLE1BQUEsQ0FBQUksY0FBQSxDQUFBVCxHQUFBLEVBQUFVLEdBQUEsSUFBQUUs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