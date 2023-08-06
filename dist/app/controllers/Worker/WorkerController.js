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
          return _WorkerModel["default"].findById(workerId).select('+address').populate('jobTypesIds');
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
    var username, worker, completedJobs, name, rating, jobTypes, experiences, profilePicture, certifications, address, jobTypesIds;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          username = req.params.username;
          _context2.next = 4;
          return _WorkerModel["default"].findOne({
            username: username
          }).select('+address').populate('certifications').populate('jobTypesIds');
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
          name = worker.name, rating = worker.rating, jobTypes = worker.jobTypes, experiences = worker.experiences, profilePicture = worker.profilePicture, certifications = worker.certifications, address = worker.address, jobTypesIds = worker.jobTypesIds;
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
            },
            jobTypesIds: jobTypesIds
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9tZW50IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfV29ya2VyTW9kZWwiLCJfSm9iTW9kZWwiLCJfSm9iQXBwbGljYXRpb25Nb2RlbCIsIl9Ob3RpZmljYXRpb25Nb2RlbCIsIl9SYXRpbmciLCJfQ2VydGlmaWNhdGlvbk1vZGVsIiwib2JqIiwiX19lc01vZHVsZSIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJleHBvcnRzIiwiT3AiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsImRlZmluZVByb3BlcnR5Iiwia2V5IiwiZGVzYyIsInZhbHVlIiwiJFN5bWJvbCIsIlN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiaXRlcmF0b3IiLCJhc3luY0l0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvciIsInRvU3RyaW5nVGFnU3ltYm9sIiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJlcnIiLCJ3cmFwIiwiaW5uZXJGbiIsIm91dGVyRm4iLCJzZWxmIiwidHJ5TG9jc0xpc3QiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsImNyZWF0ZSIsImNvbnRleHQiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwiZm4iLCJhcmciLCJ0eXBlIiwiY2FsbCIsIkNvbnRpbnVlU2VudGluZWwiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJnZXRQcm90byIsImdldFByb3RvdHlwZU9mIiwiTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUiLCJ2YWx1ZXMiLCJHcCIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJtZXRob2QiLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsIlByb21pc2VJbXBsIiwiaW52b2tlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlY29yZCIsInJlc3VsdCIsIl90eXBlb2YiLCJfX2F3YWl0IiwidGhlbiIsInVud3JhcHBlZCIsImVycm9yIiwicHJldmlvdXNQcm9taXNlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJzdGF0ZSIsIkVycm9yIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJkb25lIiwibWV0aG9kTmFtZSIsInVuZGVmaW5lZCIsIlR5cGVFcnJvciIsImluZm8iLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwiZW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImxlbmd0aCIsImkiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJpdGVyIiwia2V5cyIsInZhbCIsIm9iamVjdCIsInJldmVyc2UiLCJwb3AiLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwiX25leHQiLCJfdGhyb3ciLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3MiLCJhcmd1bWVudHMiLCJhcHBseSIsImdldFdvcmtlclByb2ZpbGUiLCJfcmVmIiwiX2NhbGxlZSIsInJlcSIsInJlcyIsIl9yZXEkdXNlciIsIndvcmtlcklkIiwid29ya2VyIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInVzZXIiLCJ1c2VySWQiLCJXb3JrZXJNb2RlbCIsImZpbmRCeUlkIiwic2VsZWN0IiwicG9wdWxhdGUiLCJhY2NvdW50U3RhdHVzIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJ0MCIsImNvbnNvbGUiLCJsb2ciLCJzZW5kU3RhdHVzIiwiX3giLCJfeDIiLCJnZXRXb3JrZXJQdWJsaWNQcm9maWxlIiwiX3JlZjIiLCJfY2FsbGVlMiIsInVzZXJuYW1lIiwiY29tcGxldGVkSm9icyIsInJhdGluZyIsImpvYlR5cGVzIiwiZXhwZXJpZW5jZXMiLCJwcm9maWxlUGljdHVyZSIsImNlcnRpZmljYXRpb25zIiwiYWRkcmVzcyIsImpvYlR5cGVzSWRzIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwicGFyYW1zIiwiZmluZE9uZSIsIkpvYk1vZGVsIiwiZmluZCIsImlkIiwiY2l0eSIsImNvdW50cnkiLCJfeDMiLCJfeDQiLCJnZXRBcHBsaWNhdGlvbnMiLCJfcmVmMyIsIl9jYWxsZWUzIiwiX3JlcSR1c2VyMiIsIl9yZXEkcXVlcnkiLCJwYXN0IiwicGFnZSIsImxpbWl0IiwicGFnZUFzTnVtYmVyIiwibGltaXRBc051bWJlciIsInF1ZXJ5IiwiYXBwbGljYXRpb25zIiwidG90YWxBcHBsaWNhdGlvbnMiLCJ0b3RhbFBhZ2UiLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiLCJOdW1iZXIiLCJfaWQiLCJKb2JBcHBsaWNhdGlvbk1vZGVsIiwicGF0aCIsIm1hdGNoIiwic29ydCIsImNyZWF0ZWRBdCIsInNraXAiLCJjb3VudERvY3VtZW50cyIsIk1hdGgiLCJjZWlsIiwicGFnaW5hdGlvbiIsImN1cnJlbnRQYWdlIiwiX3g1IiwiX3g2IiwiZ2V0Sm9icyIsIl9yZWY0IiwiX2NhbGxlZTQiLCJfcmVxJHVzZXIzIiwiam9icyIsImpvYklkcyIsIndvcmtlclJhdGluZ3MiLCJ3b3JrZXJSYXRpbmdNYXAiLCJqb2JzV2l0aFJhdGluZ3MiLCJfY2FsbGVlNCQiLCJfY29udGV4dDQiLCJtYXAiLCJqb2IiLCJXb3JrZXJSYXRpbmdNb2RlbCIsImpvYklkIiwiJGluIiwiZXhlYyIsInJlZHVjZSIsInNldCIsInRvU3RyaW5nIiwiTWFwIiwiam9iT2JqIiwidG9PYmplY3QiLCJoYXMiLCJ3b3JrZXJSYXRpbmciLCJnZXQiLCJfeDciLCJfeDgiLCJnZXRKb2JzQ2FsZW5kYXIiLCJfcmVmNSIsIl9jYWxsZWU1IiwiX3JlcSR1c2VyNCIsIm51bWJlck9mRGF5cyIsInN0YXJ0T2ZXZWVrIiwiZW5kRGF0ZSIsImRheXMiLCJfbG9vcCIsIm0iLCJfY2FsbGVlNSQiLCJfY29udGV4dDYiLCJtb21lbnQiLCJzdGFydE9mIiwiY2xvbmUiLCJhZGQiLCJzaGlmdFN0YXJ0IiwiJGd0ZSIsInRvRGF0ZSIsIiRsdCIsImxlYW4iLCJkYXRlU3RyIiwiZGF5Sm9icyIsIl9sb29wJCIsIl9jb250ZXh0NSIsImZvcm1hdCIsImZpbHRlciIsImUiLCJpc1NhbWUiLCJkYXRlIiwiaXNDdXJyZW50TW9udGgiLCJEYXRlIiwiaXNUb2RheSIsImV2ZW50cyIsInN0YXJ0IiwidG9JU09TdHJpbmciLCJlbmQiLCJzaGlmdEVuZCIsImlzQmVmb3JlIiwiX3g5IiwiX3gxMCIsImdldFN0YXR1cyIsIl9yZWY2IiwiX2NhbGxlZTYiLCJfcmVxJHVzZXI1IiwidW5yZWFkTm90aWZpY2F0aW9uIiwiX2NhbGxlZTYkIiwiX2NvbnRleHQ3IiwiTm90aWZpY2F0aW9uTW9kZWwiLCJyZWFkU3RhdHVzIiwiX3gxMSIsIl94MTIiLCJhZGRDZXJ0aWZpY2F0aW9uIiwiX3JlZjciLCJfY2FsbGVlNyIsIl9yZXEkdXNlcjYiLCJfd29ya2VyJGNlcnRpZmljYXRpb24iLCJjZXJ0aWZpY2F0aW9uSWQiLCJjZXJ0aWZpY2F0aW9uIiwiX2NhbGxlZTckIiwiX2NvbnRleHQ4IiwiYm9keSIsIkNlcnRpZmljYXRpb25Nb2RlbCIsInNhdmUiLCJfeDEzIiwiX3gxNCIsIldvcmtlckNvbnRyb2xsZXIiLCJfZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvY29udHJvbGxlcnMvV29ya2VyL1dvcmtlckNvbnRyb2xsZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJ1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5cbmltcG9ydCB7IElXb3JrZXIgfSBmcm9tICdAL2FwcC9pbnRlcmZhY2VzL21vZGVscy9Xb3JrZXInXG5pbXBvcnQgV29ya2VyTW9kZWwgZnJvbSAnQC9hcHAvbW9kZWxzL1dvcmtlck1vZGVsJ1xuaW1wb3J0IEpvYk1vZGVsIGZyb20gJ0AvYXBwL21vZGVscy9Kb2JNb2RlbCdcbmltcG9ydCB7IElKb2IgfSBmcm9tICdAL2FwcC9pbnRlcmZhY2VzL21vZGVscy9Kb2InXG5pbXBvcnQgeyBJSm9iQXBwbGljYXRpb24gfSBmcm9tICdAL2FwcC9pbnRlcmZhY2VzL21vZGVscy9Kb2JBcHBsaWNhdGlvbidcbmltcG9ydCBKb2JBcHBsaWNhdGlvbk1vZGVsIGZyb20gJ0AvYXBwL21vZGVscy9Kb2JBcHBsaWNhdGlvbk1vZGVsJ1xuaW1wb3J0IE5vdGlmaWNhdGlvbk1vZGVsIGZyb20gJ0AvYXBwL21vZGVscy9Ob3RpZmljYXRpb25Nb2RlbCdcbmltcG9ydCB7IElOb3RpZmljYXRpb24gfSBmcm9tICdAL2FwcC9pbnRlcmZhY2VzL21vZGVscy9Ob3RpZmljYXRpb24nXG5pbXBvcnQgeyBXb3JrZXJSYXRpbmdNb2RlbCB9IGZyb20gJ0AvYXBwL21vZGVscy9SYXRpbmcnXG5pbXBvcnQgeyBJUmF0aW5nIH0gZnJvbSAnQC9hcHAvaW50ZXJmYWNlcy9tb2RlbHMvUmF0aW5nJ1xuaW1wb3J0IHsgSUNlcnRpZmljYXRpb24gfSBmcm9tICdAL2FwcC9pbnRlcmZhY2VzL21vZGVscy9DZXJ0aWZpY2F0aW9uJ1xuaW1wb3J0IENlcnRpZmljYXRpb25Nb2RlbCBmcm9tICdAL2FwcC9tb2RlbHMvQ2VydGlmaWNhdGlvbk1vZGVsJ1xuXG5jb25zdCBnZXRXb3JrZXJQcm9maWxlID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHdvcmtlcklkID0gcmVxLnVzZXI/LnVzZXJJZFxuXG5cdFx0Y29uc3Qgd29ya2VyOiBJV29ya2VyIHwgbnVsbCA9IGF3YWl0IFdvcmtlck1vZGVsLmZpbmRCeUlkKHdvcmtlcklkKVxuXHRcdFx0LnNlbGVjdCgnK2FkZHJlc3MnKVxuXHRcdFx0LnBvcHVsYXRlKCdqb2JUeXBlc0lkcycpXG5cblx0XHRpZiAoIXdvcmtlciB8fCB3b3JrZXIuYWNjb3VudFN0YXR1cyAhPSAnQVBQUk9WRUQnKSB7XG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlOiAnV29ya2VyIG5vdCBmb3VuZC4nIH0pXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgd29ya2VyIH0pXG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5sb2coZXJyb3IpXG5cdFx0cmV0dXJuIHJlcy5zZW5kU3RhdHVzKDQwMClcblx0fVxufVxuXG5jb25zdCBnZXRXb3JrZXJQdWJsaWNQcm9maWxlID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHVzZXJuYW1lID0gcmVxLnBhcmFtcy51c2VybmFtZVxuXG5cdFx0Y29uc3Qgd29ya2VyOiBJV29ya2VyIHwgbnVsbCA9IGF3YWl0IFdvcmtlck1vZGVsLmZpbmRPbmUoe1xuXHRcdFx0dXNlcm5hbWUsXG5cdFx0fSlcblx0XHRcdC5zZWxlY3QoJythZGRyZXNzJylcblx0XHRcdC5wb3B1bGF0ZSgnY2VydGlmaWNhdGlvbnMnKVxuXHRcdFx0LnBvcHVsYXRlKCdqb2JUeXBlc0lkcycpXG5cblx0XHRpZiAoIXdvcmtlciB8fCB3b3JrZXIuYWNjb3VudFN0YXR1cyAhPSAnQVBQUk9WRUQnKSB7XG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlOiAnV29ya2VyIG5vdCBmb3VuZC4nIH0pXG5cdFx0fVxuXG5cdFx0Y29uc3QgY29tcGxldGVkSm9iczogSUpvYltdIHwgbnVsbCA9IGF3YWl0IEpvYk1vZGVsLmZpbmQoe1xuXHRcdFx0d29ya2VySWQ6IHdvcmtlci5pZCxcblx0XHRcdHN0YXR1czogJ0NPTVBMRVRFJyxcblx0XHR9KVxuXG5cdFx0Y29uc3Qge1xuXHRcdFx0bmFtZSxcblx0XHRcdHJhdGluZyxcblx0XHRcdGpvYlR5cGVzLFxuXHRcdFx0ZXhwZXJpZW5jZXMsXG5cdFx0XHRwcm9maWxlUGljdHVyZSxcblx0XHRcdGNlcnRpZmljYXRpb25zLFxuXHRcdFx0YWRkcmVzcyxcblx0XHRcdGpvYlR5cGVzSWRzLFxuXHRcdH0gPSB3b3JrZXJcblxuXHRcdHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XG5cdFx0XHRuYW1lLFxuXHRcdFx0cmF0aW5nLFxuXHRcdFx0am9iVHlwZXMsXG5cdFx0XHRleHBlcmllbmNlcyxcblx0XHRcdHByb2ZpbGVQaWN0dXJlLFxuXHRcdFx0Y2VydGlmaWNhdGlvbnMsXG5cdFx0XHRjb21wbGV0ZWRKb2JzOiBjb21wbGV0ZWRKb2JzLmxlbmd0aCxcblx0XHRcdGFkZHJlc3M6IHtcblx0XHRcdFx0Y2l0eTogYWRkcmVzcy5jaXR5LFxuXHRcdFx0XHRjb3VudHJ5OiBhZGRyZXNzLmNvdW50cnksXG5cdFx0XHRcdHN0YXRlOiBhZGRyZXNzLnN0YXRlLFxuXHRcdFx0fSxcblx0XHRcdGpvYlR5cGVzSWRzLFxuXHRcdH0pXG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5sb2coZXJyb3IpXG5cdFx0cmV0dXJuIHJlcy5zZW5kU3RhdHVzKDQwMClcblx0fVxufVxuXG5jb25zdCBnZXRBcHBsaWNhdGlvbnMgPSBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG5cdGNvbnN0IHVzZXJuYW1lID0gcmVxLnBhcmFtcy51c2VybmFtZVxuXHRjb25zdCB3b3JrZXJJZCA9IHJlcS51c2VyPy51c2VySWRcblx0Y29uc3QgeyBzdGF0dXMsIHBhc3QsIHBhZ2UsIGxpbWl0IH0gPSByZXEucXVlcnlcblxuXHRjb25zdCBwYWdlQXNOdW1iZXIgPSBOdW1iZXIocGFnZSkgfHwgMVxuXHRjb25zdCBsaW1pdEFzTnVtYmVyID0gTnVtYmVyKGxpbWl0KSB8fCAxMFxuXG5cdHRyeSB7XG5cdFx0Y29uc3Qgd29ya2VyID0gYXdhaXQgV29ya2VyTW9kZWwuZmluZE9uZSh7IHVzZXJuYW1lIH0pXG5cblx0XHRpZiAoIXdvcmtlcikge1xuXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZTogJ1dvcmtlciBub3QgZm91bmQnIH0pXG5cdFx0fVxuXG5cdFx0aWYgKHdvcmtlcklkICE9IHdvcmtlci5faWQpIHtcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwMykuanNvbih7IG1lc3NhZ2U6ICdVbmF1dGhvcml6ZWQnIH0pXG5cdFx0fVxuXG5cdFx0Y29uc3QgcXVlcnk6IGFueSA9IHtcblx0XHRcdHdvcmtlcjogd29ya2VySWQsXG5cdFx0fVxuXG5cdFx0aWYgKHN0YXR1cykge1xuXHRcdFx0cXVlcnkuc3RhdHVzID0gc3RhdHVzXG5cdFx0fVxuXG5cdFx0Y29uc3QgYXBwbGljYXRpb25zOiBJSm9iQXBwbGljYXRpb25bXSA9IGF3YWl0IEpvYkFwcGxpY2F0aW9uTW9kZWwuZmluZChcblx0XHRcdHF1ZXJ5XG5cdFx0KVxuXHRcdFx0LnBvcHVsYXRlKHtcblx0XHRcdFx0cGF0aDogJ2pvYlBvc3RpbmcnLFxuXHRcdFx0XHRtYXRjaDoge30sXG5cdFx0XHRcdC8vbWF0Y2g6IHBhc3QgPT0gJ2ZhbHNlJyA/IHsgc3RhcnQ6IHsgJGd0ZTogbmV3IERhdGUoKSB9IH0gOiB7fSxcblx0XHRcdH0pXG5cdFx0XHQucG9wdWxhdGUoJ2NvbXBhbnknKVxuXHRcdFx0LnNvcnQoeyBjcmVhdGVkQXQ6IC0xIH0pXG5cdFx0XHQuc2tpcCgocGFnZUFzTnVtYmVyIC0gMSkgKiBsaW1pdEFzTnVtYmVyKVxuXHRcdFx0LmxpbWl0KGxpbWl0QXNOdW1iZXIpXG5cblx0XHRjb25zdCB0b3RhbEFwcGxpY2F0aW9ucyA9IGF3YWl0IEpvYkFwcGxpY2F0aW9uTW9kZWwuY291bnREb2N1bWVudHMocXVlcnkpXG5cblx0XHRjb25zdCB0b3RhbFBhZ2UgPSBNYXRoLmNlaWwodG90YWxBcHBsaWNhdGlvbnMgLyBsaW1pdEFzTnVtYmVyKVxuXG5cdFx0cmVzLnN0YXR1cygyMDApLmpzb24oe1xuXHRcdFx0YXBwbGljYXRpb25zLFxuXHRcdFx0cGFnaW5hdGlvbjoge1xuXHRcdFx0XHRjdXJyZW50UGFnZTogcGFnZUFzTnVtYmVyLFxuXHRcdFx0XHR0b3RhbFBhZ2UsXG5cdFx0XHRcdHRvdGFsQXBwbGljYXRpb25zLFxuXHRcdFx0fSxcblx0XHR9KVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogJ1NlcnZlciBlcnJvcicgfSlcblx0fVxufVxuXG5jb25zdCBnZXRKb2JzID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuXHRjb25zdCB1c2VybmFtZSA9IHJlcS5wYXJhbXMudXNlcm5hbWVcblx0Y29uc3Qgd29ya2VySWQgPSByZXEudXNlcj8udXNlcklkXG5cblx0dHJ5IHtcblx0XHRjb25zdCB3b3JrZXI6IElXb3JrZXIgfCBudWxsID0gYXdhaXQgV29ya2VyTW9kZWwuZmluZE9uZSh7IHVzZXJuYW1lIH0pXG5cblx0XHRpZiAoIXdvcmtlcikge1xuXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZTogJ1dvcmtlciBub3QgZm91bmQnIH0pXG5cdFx0fVxuXG5cdFx0aWYgKHdvcmtlcklkICE9IHdvcmtlci5pZCkge1xuXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgbWVzc2FnZTogJ1VuYXV0aG9yaXplZCcgfSlcblx0XHR9XG5cblx0XHRjb25zdCBqb2JzOiBJSm9iW10gPSBhd2FpdCBKb2JNb2RlbC5maW5kKHsgd29ya2VySWQgfSlcblx0XHRcdC5zb3J0KCctc2hpZnRTdGFydCcpXG5cdFx0XHQucG9wdWxhdGUoJ2pvYlBvc3RpbmdJZCcpXG5cdFx0XHQucG9wdWxhdGUoJ2NvbXBhbnlJZCcpXG5cblx0XHRpZiAoIWpvYnMpIHtcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6IFwiV29ya2VyIGRvZXNuJ3QgaGF2ZSBhbnkgam9ic1wiIH0pXG5cdFx0fVxuXG5cdFx0Y29uc3Qgam9iSWRzID0gam9icy5tYXAoKGpvYikgPT4gam9iLl9pZClcblxuXHRcdGNvbnN0IHdvcmtlclJhdGluZ3M6IElSYXRpbmdbXSA9IGF3YWl0IFdvcmtlclJhdGluZ01vZGVsLmZpbmQoe1xuXHRcdFx0am9iSWQ6IHsgJGluOiBqb2JJZHMgfSxcblx0XHR9KS5leGVjKClcblxuXHRcdGNvbnN0IHdvcmtlclJhdGluZ01hcCA9IHdvcmtlclJhdGluZ3MucmVkdWNlKFxuXHRcdFx0KG1hcCwgcmF0aW5nKSA9PiBtYXAuc2V0KHJhdGluZy5qb2JJZC50b1N0cmluZygpLCByYXRpbmcpLFxuXHRcdFx0bmV3IE1hcCgpXG5cdFx0KVxuXG5cdFx0Y29uc3Qgam9ic1dpdGhSYXRpbmdzID0gam9icy5tYXAoKGpvYikgPT4ge1xuXHRcdFx0Y29uc3Qgam9iT2JqID0gam9iLnRvT2JqZWN0KClcblx0XHRcdGlmICh3b3JrZXJSYXRpbmdNYXAuaGFzKGpvYi5faWQudG9TdHJpbmcoKSkpIHtcblx0XHRcdFx0am9iT2JqLndvcmtlclJhdGluZyA9IHdvcmtlclJhdGluZ01hcC5nZXQoam9iLl9pZC50b1N0cmluZygpKVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGpvYk9ialxuXHRcdH0pXG5cblx0XHRyZXMuc3RhdHVzKDIwMCkuanNvbihqb2JzV2l0aFJhdGluZ3MpXG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0cmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnU2VydmVyIGVycm9yJyB9KVxuXHR9XG59XG5cbmNvbnN0IGdldEpvYnNDYWxlbmRhciA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcblx0Y29uc3Qgd29ya2VySWQgPSByZXEudXNlcj8udXNlcklkXG5cdC8vIEdldCBudW1iZXIgb2YgZGF5cyBmcm9tIHJlcXVlc3Qgb3IgZGVmYXVsdCB0byA3XG5cdGNvbnN0IG51bWJlck9mRGF5cyA9IE51bWJlcihyZXEucXVlcnkuZGF5cykgfHwgN1xuXG5cdC8vIEdldCBzdGFydCBvZiB0aGUgY3VycmVudCB3ZWVrXG5cdGNvbnN0IHN0YXJ0T2ZXZWVrID0gbW9tZW50KCkuc3RhcnRPZignd2VlaycpXG5cblx0Ly8gR2V0IGVuZCBkYXRlIGJhc2VkIG9uIG51bWJlck9mRGF5c1xuXHRjb25zdCBlbmREYXRlID0gc3RhcnRPZldlZWsuY2xvbmUoKS5hZGQobnVtYmVyT2ZEYXlzLCAnZGF5cycpXG5cblx0Ly8gRmluZCBqb2JzIGJldHdlZW4gc3RhcnRPZldlZWsgYW5kIGVuZERhdGVcblx0Y29uc3Qgam9icyA9IGF3YWl0IEpvYk1vZGVsLmZpbmQoe1xuXHRcdHNoaWZ0U3RhcnQ6IHtcblx0XHRcdCRndGU6IHN0YXJ0T2ZXZWVrLnRvRGF0ZSgpLFxuXHRcdFx0JGx0OiBlbmREYXRlLnRvRGF0ZSgpLFxuXHRcdH0sXG5cdFx0d29ya2VySWQsXG5cdH0pLmxlYW4oKVxuXG5cdGNvbnN0IGRheXMgPSBbXVxuXG5cdC8vIExvb3AgdGhyb3VnaCBlYWNoIGRheSBhbmQgYWRkIGV2ZW50c1xuXHRmb3IgKGxldCBtID0gc3RhcnRPZldlZWs7IG0uaXNCZWZvcmUoZW5kRGF0ZSk7IG0uYWRkKDEsICdkYXlzJykpIHtcblx0XHRjb25zdCBkYXRlU3RyID0gbS5mb3JtYXQoJ1lZWVktTU0tREQnKVxuXG5cdFx0Ly8gRmlsdGVyIGV2ZW50cyBmb3IgdGhlIGN1cnJlbnQgZGF5XG5cdFx0Y29uc3QgZGF5Sm9icyA9IGpvYnMuZmlsdGVyKChlKSA9PiBtb21lbnQoZS5zaGlmdFN0YXJ0KS5pc1NhbWUobSwgJ2RheScpKVxuXG5cdFx0ZGF5cy5wdXNoKHtcblx0XHRcdGRhdGU6IGRhdGVTdHIsXG5cdFx0XHRpc0N1cnJlbnRNb250aDogbS5pc1NhbWUobmV3IERhdGUoKSwgJ21vbnRoJyksXG5cdFx0XHRpc1RvZGF5OiBtLmlzU2FtZShuZXcgRGF0ZSgpLCAnZGF5JyksXG5cdFx0XHRldmVudHM6IGRheUpvYnMubWFwKChqb2IpID0+ICh7XG5cdFx0XHRcdGlkOiBqb2IuX2lkLFxuXHRcdFx0XHRuYW1lOiBqb2IubmFtZSxcblx0XHRcdFx0c3RhcnQ6IGpvYi5zaGlmdFN0YXJ0LnRvSVNPU3RyaW5nKCksXG5cdFx0XHRcdGVuZDogam9iLnNoaWZ0RW5kLnRvSVNPU3RyaW5nKCksXG5cdFx0XHR9KSksXG5cdFx0fSlcblx0fVxuXHRyZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oZGF5cylcbn1cblxuY29uc3QgZ2V0U3RhdHVzID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHdvcmtlcklkID0gcmVxLnVzZXI/LnVzZXJJZFxuXG5cdFx0Y29uc3Qgd29ya2VyOiBJV29ya2VyIHwgbnVsbCA9IGF3YWl0IFdvcmtlck1vZGVsLmZpbmRCeUlkKHdvcmtlcklkKVxuXG5cdFx0aWYgKCF3b3JrZXIpIHtcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6ICdXb3JrZXIgbm90ICBzZm91bmQuJyB9KVxuXHRcdH1cblxuXHRcdGNvbnN0IHVucmVhZE5vdGlmaWNhdGlvbjogSU5vdGlmaWNhdGlvbiB8IG51bGwgPVxuXHRcdFx0YXdhaXQgTm90aWZpY2F0aW9uTW9kZWwuZmluZE9uZSh7XG5cdFx0XHRcdHJlYWRTdGF0dXM6IGZhbHNlLFxuXHRcdFx0XHR1c2VyOiB7XG5cdFx0XHRcdFx0aWQ6IHdvcmtlcklkLFxuXHRcdFx0XHRcdHR5cGU6ICd3b3JrZXInLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSlcblxuXHRcdHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XG5cdFx0XHR1bnJlYWROb3RpZmljYXRpb246IHVucmVhZE5vdGlmaWNhdGlvbiAmJiB0cnVlLFxuXHRcdFx0cHJvZmlsZVBpY3R1cmU6IHdvcmtlci5wcm9maWxlUGljdHVyZSxcblx0XHR9KVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUubG9nKGVycm9yKVxuXHRcdHJldHVybiByZXMuc2VuZFN0YXR1cyg0MDApXG5cdH1cbn1cblxuY29uc3QgYWRkQ2VydGlmaWNhdGlvbiA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCB3b3JrZXJJZCA9IHJlcS51c2VyPy51c2VySWRcblx0XHRjb25zdCB7IGNlcnRpZmljYXRpb25JZCB9ID0gcmVxLmJvZHlcblxuXHRcdGNvbnN0IHdvcmtlcjogSVdvcmtlciB8IG51bGwgPSBhd2FpdCBXb3JrZXJNb2RlbC5maW5kQnlJZCh3b3JrZXJJZClcblxuXHRcdGlmICghd29ya2VyKSB7XG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlOiAnV29ya2VyIG5vdCBmb3VuZC4nIH0pXG5cdFx0fVxuXG5cdFx0Y29uc3QgY2VydGlmaWNhdGlvbjogSUNlcnRpZmljYXRpb24gfCBudWxsID1cblx0XHRcdGF3YWl0IENlcnRpZmljYXRpb25Nb2RlbC5maW5kQnlJZChjZXJ0aWZpY2F0aW9uSWQpXG5cblx0XHRpZiAoIWNlcnRpZmljYXRpb24pIHtcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6ICdJbnZhbGlkIENlcnRpZmljYXRvbiBJZCcgfSlcblx0XHR9XG5cblx0XHR3b3JrZXIuY2VydGlmaWNhdGlvbnM/LnB1c2goY2VydGlmaWNhdGlvbi5faWQpXG5cdFx0YXdhaXQgd29ya2VyLnNhdmUoKVxuXG5cdFx0cmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKGNlcnRpZmljYXRpb24pXG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5sb2coZXJyb3IpXG5cdFx0cmV0dXJuIHJlcy5zZW5kU3RhdHVzKDQwMClcblx0fVxufVxuXG5jb25zdCBXb3JrZXJDb250cm9sbGVyID0ge1xuXHRnZXRXb3JrZXJQcm9maWxlLFxuXHRnZXRXb3JrZXJQdWJsaWNQcm9maWxlLFxuXHRnZXRBcHBsaWNhdGlvbnMsXG5cdGdldEpvYnMsXG5cdGdldEpvYnNDYWxlbmRhcixcblx0Z2V0U3RhdHVzLFxuXHRhZGRDZXJ0aWZpY2F0aW9uLFxufVxuXG5leHBvcnQgZGVmYXVsdCBXb3JrZXJDb250cm9sbGVyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxJQUFBQSxPQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFHQSxJQUFBQyxZQUFBLEdBQUFGLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBRSxTQUFBLEdBQUFILHNCQUFBLENBQUFDLE9BQUE7QUFHQSxJQUFBRyxvQkFBQSxHQUFBSixzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUksa0JBQUEsR0FBQUwsc0JBQUEsQ0FBQUMsT0FBQTtBQUVBLElBQUFLLE9BQUEsR0FBQUwsT0FBQTtBQUdBLElBQUFNLG1CQUFBLEdBQUFQLHNCQUFBLENBQUFDLE9BQUE7QUFBZ0UsU0FBQUQsdUJBQUFRLEdBQUEsV0FBQUEsR0FBQSxJQUFBQSxHQUFBLENBQUFDLFVBQUEsR0FBQUQsR0FBQSxnQkFBQUEsR0FBQTtBQUFBLFNBQUFFLG9CQUFBLGtC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