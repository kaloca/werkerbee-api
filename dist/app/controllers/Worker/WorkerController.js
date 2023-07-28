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
          console.log(req.query);
          pageAsNumber = Number(page) || 1;
          limitAsNumber = Number(limit) || 10;
          _context3.prev = 6;
          _context3.next = 9;
          return _WorkerModel["default"].findOne({
            username: username
          });
        case 9:
          worker = _context3.sent;
          if (worker) {
            _context3.next = 12;
            break;
          }
          return _context3.abrupt("return", res.status(404).json({
            message: 'Worker not found'
          }));
        case 12:
          if (!(workerId != worker._id)) {
            _context3.next = 14;
            break;
          }
          return _context3.abrupt("return", res.status(403).json({
            message: 'Unauthorized'
          }));
        case 14:
          query = {
            worker: workerId
          };
          if (status) {
            query.status = status;
          }
          _context3.next = 18;
          return _JobApplicationModel["default"].find(query).populate({
            path: 'jobPosting',
            match: {}
            //match: past == 'false' ? { start: { $gte: new Date() } } : {},
          }).populate('company').sort({
            createdAt: -1
          }).skip((pageAsNumber - 1) * limitAsNumber).limit(limitAsNumber);
        case 18:
          applications = _context3.sent;
          _context3.next = 21;
          return _JobApplicationModel["default"].countDocuments(query);
        case 21:
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
          _context3.next = 29;
          break;
        case 26:
          _context3.prev = 26;
          _context3.t0 = _context3["catch"](6);
          res.status(500).json({
            message: 'Server error'
          });
        case 29:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[6, 26]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9tZW50IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfV29ya2VyTW9kZWwiLCJfSm9iTW9kZWwiLCJfSm9iQXBwbGljYXRpb25Nb2RlbCIsIl9Ob3RpZmljYXRpb25Nb2RlbCIsIl9SYXRpbmciLCJvYmoiLCJfX2VzTW9kdWxlIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsImV4cG9ydHMiLCJPcCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093biIsImhhc093blByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJrZXkiLCJkZXNjIiwidmFsdWUiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImVyciIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY3JlYXRlIiwiY29udGV4dCIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsImFyZyIsInR5cGUiLCJjYWxsIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIm1ldGhvZCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiUHJvbWlzZUltcGwiLCJpbnZva2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVjb3JkIiwicmVzdWx0IiwiX3R5cGVvZiIsIl9fYXdhaXQiLCJ0aGVuIiwidW53cmFwcGVkIiwiZXJyb3IiLCJwcmV2aW91c1Byb21pc2UiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsInN0YXRlIiwiRXJyb3IiLCJkb25lUmVzdWx0IiwiZGVsZWdhdGUiLCJkZWxlZ2F0ZVJlc3VsdCIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsImRvbmUiLCJtZXRob2ROYW1lIiwidW5kZWZpbmVkIiwiVHlwZUVycm9yIiwiaW5mbyIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJlbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXRlcmFibGUiLCJpdGVyYXRvck1ldGhvZCIsImlzTmFOIiwibGVuZ3RoIiwiaSIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsIml0ZXIiLCJrZXlzIiwidmFsIiwib2JqZWN0IiwicmV2ZXJzZSIsInBvcCIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiZ2V0V29ya2VyUHJvZmlsZSIsIl9yZWYiLCJfY2FsbGVlIiwicmVxIiwicmVzIiwiX3JlcSR1c2VyIiwid29ya2VySWQiLCJ3b3JrZXIiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwidXNlciIsInVzZXJJZCIsIldvcmtlck1vZGVsIiwiZmluZEJ5SWQiLCJzZWxlY3QiLCJhY2NvdW50U3RhdHVzIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJ0MCIsImNvbnNvbGUiLCJsb2ciLCJzZW5kU3RhdHVzIiwiX3giLCJfeDIiLCJnZXRXb3JrZXJQdWJsaWNQcm9maWxlIiwiX3JlZjIiLCJfY2FsbGVlMiIsInVzZXJuYW1lIiwiY29tcGxldGVkSm9icyIsInJhdGluZyIsImpvYlR5cGVzIiwiZXhwZXJpZW5jZXMiLCJwcm9maWxlUGljdHVyZSIsImNlcnRpZmljYXRpb25zIiwiYWRkcmVzcyIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsInBhcmFtcyIsImZpbmRPbmUiLCJKb2JNb2RlbCIsImZpbmQiLCJpZCIsImNpdHkiLCJjb3VudHJ5IiwiX3gzIiwiX3g0IiwiZ2V0QXBwbGljYXRpb25zIiwiX3JlZjMiLCJfY2FsbGVlMyIsIl9yZXEkdXNlcjIiLCJfcmVxJHF1ZXJ5IiwicGFzdCIsInBhZ2UiLCJsaW1pdCIsInBhZ2VBc051bWJlciIsImxpbWl0QXNOdW1iZXIiLCJxdWVyeSIsImFwcGxpY2F0aW9ucyIsInRvdGFsQXBwbGljYXRpb25zIiwidG90YWxQYWdlIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiTnVtYmVyIiwiX2lkIiwiSm9iQXBwbGljYXRpb25Nb2RlbCIsInBvcHVsYXRlIiwicGF0aCIsIm1hdGNoIiwic29ydCIsImNyZWF0ZWRBdCIsInNraXAiLCJjb3VudERvY3VtZW50cyIsIk1hdGgiLCJjZWlsIiwicGFnaW5hdGlvbiIsImN1cnJlbnRQYWdlIiwiX3g1IiwiX3g2IiwiZ2V0Sm9icyIsIl9yZWY0IiwiX2NhbGxlZTQiLCJfcmVxJHVzZXIzIiwiam9icyIsImpvYklkcyIsIndvcmtlclJhdGluZ3MiLCJ3b3JrZXJSYXRpbmdNYXAiLCJqb2JzV2l0aFJhdGluZ3MiLCJfY2FsbGVlNCQiLCJfY29udGV4dDQiLCJtYXAiLCJqb2IiLCJXb3JrZXJSYXRpbmdNb2RlbCIsImpvYklkIiwiJGluIiwiZXhlYyIsInJlZHVjZSIsInNldCIsInRvU3RyaW5nIiwiTWFwIiwiam9iT2JqIiwidG9PYmplY3QiLCJoYXMiLCJ3b3JrZXJSYXRpbmciLCJnZXQiLCJfeDciLCJfeDgiLCJnZXRKb2JzQ2FsZW5kYXIiLCJfcmVmNSIsIl9jYWxsZWU1IiwiX3JlcSR1c2VyNCIsIm51bWJlck9mRGF5cyIsInN0YXJ0T2ZXZWVrIiwiZW5kRGF0ZSIsImRheXMiLCJfbG9vcCIsIm0iLCJfY2FsbGVlNSQiLCJfY29udGV4dDYiLCJtb21lbnQiLCJzdGFydE9mIiwiY2xvbmUiLCJhZGQiLCJzaGlmdFN0YXJ0IiwiJGd0ZSIsInRvRGF0ZSIsIiRsdCIsImxlYW4iLCJkYXRlU3RyIiwiZGF5Sm9icyIsIl9sb29wJCIsIl9jb250ZXh0NSIsImZvcm1hdCIsImZpbHRlciIsImUiLCJpc1NhbWUiLCJkYXRlIiwiaXNDdXJyZW50TW9udGgiLCJEYXRlIiwiaXNUb2RheSIsImV2ZW50cyIsInN0YXJ0IiwidG9JU09TdHJpbmciLCJlbmQiLCJzaGlmdEVuZCIsImlzQmVmb3JlIiwiX3g5IiwiX3gxMCIsImdldFN0YXR1cyIsIl9yZWY2IiwiX2NhbGxlZTYiLCJfcmVxJHVzZXI1IiwidW5yZWFkTm90aWZpY2F0aW9uIiwiX2NhbGxlZTYkIiwiX2NvbnRleHQ3IiwiTm90aWZpY2F0aW9uTW9kZWwiLCJyZWFkU3RhdHVzIiwiX3gxMSIsIl94MTIiLCJXb3JrZXJDb250cm9sbGVyIiwiX2RlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBwL2NvbnRyb2xsZXJzL1dvcmtlci9Xb3JrZXJDb250cm9sbGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcydcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuXG5pbXBvcnQgeyBJV29ya2VyIH0gZnJvbSAnQC9hcHAvaW50ZXJmYWNlcy9tb2RlbHMvV29ya2VyJ1xuaW1wb3J0IFdvcmtlck1vZGVsIGZyb20gJ0AvYXBwL21vZGVscy9Xb3JrZXJNb2RlbCdcbmltcG9ydCBKb2JNb2RlbCBmcm9tICdAL2FwcC9tb2RlbHMvSm9iTW9kZWwnXG5pbXBvcnQgeyBJSm9iIH0gZnJvbSAnQC9hcHAvaW50ZXJmYWNlcy9tb2RlbHMvSm9iJ1xuaW1wb3J0IHsgSUpvYkFwcGxpY2F0aW9uIH0gZnJvbSAnQC9hcHAvaW50ZXJmYWNlcy9tb2RlbHMvSm9iQXBwbGljYXRpb24nXG5pbXBvcnQgSm9iQXBwbGljYXRpb25Nb2RlbCBmcm9tICdAL2FwcC9tb2RlbHMvSm9iQXBwbGljYXRpb25Nb2RlbCdcbmltcG9ydCBOb3RpZmljYXRpb25Nb2RlbCBmcm9tICdAL2FwcC9tb2RlbHMvTm90aWZpY2F0aW9uTW9kZWwnXG5pbXBvcnQgeyBJTm90aWZpY2F0aW9uIH0gZnJvbSAnQC9hcHAvaW50ZXJmYWNlcy9tb2RlbHMvTm90aWZpY2F0aW9uJ1xuaW1wb3J0IHsgV29ya2VyUmF0aW5nTW9kZWwgfSBmcm9tICdAL2FwcC9tb2RlbHMvUmF0aW5nJ1xuaW1wb3J0IHsgSVJhdGluZyB9IGZyb20gJ0AvYXBwL2ludGVyZmFjZXMvbW9kZWxzL1JhdGluZydcblxuY29uc3QgZ2V0V29ya2VyUHJvZmlsZSA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCB3b3JrZXJJZCA9IHJlcS51c2VyPy51c2VySWRcblxuXHRcdGNvbnN0IHdvcmtlcjogSVdvcmtlciB8IG51bGwgPSBhd2FpdCBXb3JrZXJNb2RlbC5maW5kQnlJZCh3b3JrZXJJZCkuc2VsZWN0KFxuXHRcdFx0JythZGRyZXNzJ1xuXHRcdClcblxuXHRcdGlmICghd29ya2VyIHx8IHdvcmtlci5hY2NvdW50U3RhdHVzICE9ICdBUFBST1ZFRCcpIHtcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6ICdXb3JrZXIgbm90IGZvdW5kLicgfSlcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyB3b3JrZXIgfSlcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmxvZyhlcnJvcilcblx0XHRyZXR1cm4gcmVzLnNlbmRTdGF0dXMoNDAwKVxuXHR9XG59XG5cbmNvbnN0IGdldFdvcmtlclB1YmxpY1Byb2ZpbGUgPSBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgdXNlcm5hbWUgPSByZXEucGFyYW1zLnVzZXJuYW1lXG5cblx0XHRjb25zdCB3b3JrZXI6IElXb3JrZXIgfCBudWxsID0gYXdhaXQgV29ya2VyTW9kZWwuZmluZE9uZSh7XG5cdFx0XHR1c2VybmFtZSxcblx0XHR9KS5zZWxlY3QoJythZGRyZXNzJylcblxuXHRcdGlmICghd29ya2VyIHx8IHdvcmtlci5hY2NvdW50U3RhdHVzICE9ICdBUFBST1ZFRCcpIHtcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6ICdXb3JrZXIgbm90IGZvdW5kLicgfSlcblx0XHR9XG5cblx0XHRjb25zdCBjb21wbGV0ZWRKb2JzOiBJSm9iW10gfCBudWxsID0gYXdhaXQgSm9iTW9kZWwuZmluZCh7XG5cdFx0XHR3b3JrZXJJZDogd29ya2VyLmlkLFxuXHRcdFx0c3RhdHVzOiAnQ09NUExFVEUnLFxuXHRcdH0pXG5cblx0XHRjb25zdCB7XG5cdFx0XHRuYW1lLFxuXHRcdFx0cmF0aW5nLFxuXHRcdFx0am9iVHlwZXMsXG5cdFx0XHRleHBlcmllbmNlcyxcblx0XHRcdHByb2ZpbGVQaWN0dXJlLFxuXHRcdFx0Y2VydGlmaWNhdGlvbnMsXG5cdFx0XHRhZGRyZXNzLFxuXHRcdH0gPSB3b3JrZXJcblxuXHRcdHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XG5cdFx0XHRuYW1lLFxuXHRcdFx0cmF0aW5nLFxuXHRcdFx0am9iVHlwZXMsXG5cdFx0XHRleHBlcmllbmNlcyxcblx0XHRcdHByb2ZpbGVQaWN0dXJlLFxuXHRcdFx0Y2VydGlmaWNhdGlvbnMsXG5cdFx0XHRjb21wbGV0ZWRKb2JzOiBjb21wbGV0ZWRKb2JzLmxlbmd0aCxcblx0XHRcdGFkZHJlc3M6IHtcblx0XHRcdFx0Y2l0eTogYWRkcmVzcy5jaXR5LFxuXHRcdFx0XHRjb3VudHJ5OiBhZGRyZXNzLmNvdW50cnksXG5cdFx0XHR9LFxuXHRcdH0pXG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5sb2coZXJyb3IpXG5cdFx0cmV0dXJuIHJlcy5zZW5kU3RhdHVzKDQwMClcblx0fVxufVxuXG5jb25zdCBnZXRBcHBsaWNhdGlvbnMgPSBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG5cdGNvbnN0IHVzZXJuYW1lID0gcmVxLnBhcmFtcy51c2VybmFtZVxuXHRjb25zdCB3b3JrZXJJZCA9IHJlcS51c2VyPy51c2VySWRcblx0Y29uc3QgeyBzdGF0dXMsIHBhc3QsIHBhZ2UsIGxpbWl0IH0gPSByZXEucXVlcnlcblxuXHRjb25zb2xlLmxvZyhyZXEucXVlcnkpXG5cblx0Y29uc3QgcGFnZUFzTnVtYmVyID0gTnVtYmVyKHBhZ2UpIHx8IDFcblx0Y29uc3QgbGltaXRBc051bWJlciA9IE51bWJlcihsaW1pdCkgfHwgMTBcblxuXHR0cnkge1xuXHRcdGNvbnN0IHdvcmtlciA9IGF3YWl0IFdvcmtlck1vZGVsLmZpbmRPbmUoeyB1c2VybmFtZSB9KVxuXG5cdFx0aWYgKCF3b3JrZXIpIHtcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6ICdXb3JrZXIgbm90IGZvdW5kJyB9KVxuXHRcdH1cblxuXHRcdGlmICh3b3JrZXJJZCAhPSB3b3JrZXIuX2lkKSB7XG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDMpLmpzb24oeyBtZXNzYWdlOiAnVW5hdXRob3JpemVkJyB9KVxuXHRcdH1cblxuXHRcdGNvbnN0IHF1ZXJ5OiBhbnkgPSB7XG5cdFx0XHR3b3JrZXI6IHdvcmtlcklkLFxuXHRcdH1cblxuXHRcdGlmIChzdGF0dXMpIHtcblx0XHRcdHF1ZXJ5LnN0YXR1cyA9IHN0YXR1c1xuXHRcdH1cblxuXHRcdGNvbnN0IGFwcGxpY2F0aW9uczogSUpvYkFwcGxpY2F0aW9uW10gPSBhd2FpdCBKb2JBcHBsaWNhdGlvbk1vZGVsLmZpbmQoXG5cdFx0XHRxdWVyeVxuXHRcdClcblx0XHRcdC5wb3B1bGF0ZSh7XG5cdFx0XHRcdHBhdGg6ICdqb2JQb3N0aW5nJyxcblx0XHRcdFx0bWF0Y2g6IHt9LFxuXHRcdFx0XHQvL21hdGNoOiBwYXN0ID09ICdmYWxzZScgPyB7IHN0YXJ0OiB7ICRndGU6IG5ldyBEYXRlKCkgfSB9IDoge30sXG5cdFx0XHR9KVxuXHRcdFx0LnBvcHVsYXRlKCdjb21wYW55Jylcblx0XHRcdC5zb3J0KHsgY3JlYXRlZEF0OiAtMSB9KVxuXHRcdFx0LnNraXAoKHBhZ2VBc051bWJlciAtIDEpICogbGltaXRBc051bWJlcilcblx0XHRcdC5saW1pdChsaW1pdEFzTnVtYmVyKVxuXG5cdFx0Y29uc3QgdG90YWxBcHBsaWNhdGlvbnMgPSBhd2FpdCBKb2JBcHBsaWNhdGlvbk1vZGVsLmNvdW50RG9jdW1lbnRzKHF1ZXJ5KVxuXG5cdFx0Y29uc3QgdG90YWxQYWdlID0gTWF0aC5jZWlsKHRvdGFsQXBwbGljYXRpb25zIC8gbGltaXRBc051bWJlcilcblxuXHRcdHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcblx0XHRcdGFwcGxpY2F0aW9ucyxcblx0XHRcdHBhZ2luYXRpb246IHtcblx0XHRcdFx0Y3VycmVudFBhZ2U6IHBhZ2VBc051bWJlcixcblx0XHRcdFx0dG90YWxQYWdlLFxuXHRcdFx0XHR0b3RhbEFwcGxpY2F0aW9ucyxcblx0XHRcdH0sXG5cdFx0fSlcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRyZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6ICdTZXJ2ZXIgZXJyb3InIH0pXG5cdH1cbn1cblxuY29uc3QgZ2V0Sm9icyA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcblx0Y29uc3QgdXNlcm5hbWUgPSByZXEucGFyYW1zLnVzZXJuYW1lXG5cdGNvbnN0IHdvcmtlcklkID0gcmVxLnVzZXI/LnVzZXJJZFxuXG5cdHRyeSB7XG5cdFx0Y29uc3Qgd29ya2VyOiBJV29ya2VyIHwgbnVsbCA9IGF3YWl0IFdvcmtlck1vZGVsLmZpbmRPbmUoeyB1c2VybmFtZSB9KVxuXG5cdFx0aWYgKCF3b3JrZXIpIHtcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6ICdXb3JrZXIgbm90IGZvdW5kJyB9KVxuXHRcdH1cblxuXHRcdGlmICh3b3JrZXJJZCAhPSB3b3JrZXIuaWQpIHtcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7IG1lc3NhZ2U6ICdVbmF1dGhvcml6ZWQnIH0pXG5cdFx0fVxuXG5cdFx0Y29uc3Qgam9iczogSUpvYltdID0gYXdhaXQgSm9iTW9kZWwuZmluZCh7IHdvcmtlcklkIH0pXG5cdFx0XHQuc29ydCgnLXNoaWZ0U3RhcnQnKVxuXHRcdFx0LnBvcHVsYXRlKCdqb2JQb3N0aW5nSWQnKVxuXHRcdFx0LnBvcHVsYXRlKCdjb21wYW55SWQnKVxuXG5cdFx0aWYgKCFqb2JzKSB7XG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlOiBcIldvcmtlciBkb2Vzbid0IGhhdmUgYW55IGpvYnNcIiB9KVxuXHRcdH1cblxuXHRcdGNvbnN0IGpvYklkcyA9IGpvYnMubWFwKChqb2IpID0+IGpvYi5faWQpXG5cblx0XHRjb25zdCB3b3JrZXJSYXRpbmdzOiBJUmF0aW5nW10gPSBhd2FpdCBXb3JrZXJSYXRpbmdNb2RlbC5maW5kKHtcblx0XHRcdGpvYklkOiB7ICRpbjogam9iSWRzIH0sXG5cdFx0fSkuZXhlYygpXG5cblx0XHRjb25zdCB3b3JrZXJSYXRpbmdNYXAgPSB3b3JrZXJSYXRpbmdzLnJlZHVjZShcblx0XHRcdChtYXAsIHJhdGluZykgPT4gbWFwLnNldChyYXRpbmcuam9iSWQudG9TdHJpbmcoKSwgcmF0aW5nKSxcblx0XHRcdG5ldyBNYXAoKVxuXHRcdClcblxuXHRcdGNvbnN0IGpvYnNXaXRoUmF0aW5ncyA9IGpvYnMubWFwKChqb2IpID0+IHtcblx0XHRcdGNvbnN0IGpvYk9iaiA9IGpvYi50b09iamVjdCgpXG5cdFx0XHRpZiAod29ya2VyUmF0aW5nTWFwLmhhcyhqb2IuX2lkLnRvU3RyaW5nKCkpKSB7XG5cdFx0XHRcdGpvYk9iai53b3JrZXJSYXRpbmcgPSB3b3JrZXJSYXRpbmdNYXAuZ2V0KGpvYi5faWQudG9TdHJpbmcoKSlcblx0XHRcdH1cblx0XHRcdHJldHVybiBqb2JPYmpcblx0XHR9KVxuXG5cdFx0cmVzLnN0YXR1cygyMDApLmpzb24oam9ic1dpdGhSYXRpbmdzKVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogJ1NlcnZlciBlcnJvcicgfSlcblx0fVxufVxuXG5jb25zdCBnZXRKb2JzQ2FsZW5kYXIgPSBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG5cdGNvbnN0IHdvcmtlcklkID0gcmVxLnVzZXI/LnVzZXJJZFxuXHQvLyBHZXQgbnVtYmVyIG9mIGRheXMgZnJvbSByZXF1ZXN0IG9yIGRlZmF1bHQgdG8gN1xuXHRjb25zdCBudW1iZXJPZkRheXMgPSBOdW1iZXIocmVxLnF1ZXJ5LmRheXMpIHx8IDdcblxuXHQvLyBHZXQgc3RhcnQgb2YgdGhlIGN1cnJlbnQgd2Vla1xuXHRjb25zdCBzdGFydE9mV2VlayA9IG1vbWVudCgpLnN0YXJ0T2YoJ3dlZWsnKVxuXG5cdC8vIEdldCBlbmQgZGF0ZSBiYXNlZCBvbiBudW1iZXJPZkRheXNcblx0Y29uc3QgZW5kRGF0ZSA9IHN0YXJ0T2ZXZWVrLmNsb25lKCkuYWRkKG51bWJlck9mRGF5cywgJ2RheXMnKVxuXG5cdC8vIEZpbmQgam9icyBiZXR3ZWVuIHN0YXJ0T2ZXZWVrIGFuZCBlbmREYXRlXG5cdGNvbnN0IGpvYnMgPSBhd2FpdCBKb2JNb2RlbC5maW5kKHtcblx0XHRzaGlmdFN0YXJ0OiB7XG5cdFx0XHQkZ3RlOiBzdGFydE9mV2Vlay50b0RhdGUoKSxcblx0XHRcdCRsdDogZW5kRGF0ZS50b0RhdGUoKSxcblx0XHR9LFxuXHRcdHdvcmtlcklkLFxuXHR9KS5sZWFuKClcblxuXHRjb25zdCBkYXlzID0gW11cblxuXHQvLyBMb29wIHRocm91Z2ggZWFjaCBkYXkgYW5kIGFkZCBldmVudHNcblx0Zm9yIChsZXQgbSA9IHN0YXJ0T2ZXZWVrOyBtLmlzQmVmb3JlKGVuZERhdGUpOyBtLmFkZCgxLCAnZGF5cycpKSB7XG5cdFx0Y29uc3QgZGF0ZVN0ciA9IG0uZm9ybWF0KCdZWVlZLU1NLUREJylcblxuXHRcdC8vIEZpbHRlciBldmVudHMgZm9yIHRoZSBjdXJyZW50IGRheVxuXHRcdGNvbnN0IGRheUpvYnMgPSBqb2JzLmZpbHRlcigoZSkgPT4gbW9tZW50KGUuc2hpZnRTdGFydCkuaXNTYW1lKG0sICdkYXknKSlcblxuXHRcdGRheXMucHVzaCh7XG5cdFx0XHRkYXRlOiBkYXRlU3RyLFxuXHRcdFx0aXNDdXJyZW50TW9udGg6IG0uaXNTYW1lKG5ldyBEYXRlKCksICdtb250aCcpLFxuXHRcdFx0aXNUb2RheTogbS5pc1NhbWUobmV3IERhdGUoKSwgJ2RheScpLFxuXHRcdFx0ZXZlbnRzOiBkYXlKb2JzLm1hcCgoam9iKSA9PiAoe1xuXHRcdFx0XHRpZDogam9iLl9pZCxcblx0XHRcdFx0bmFtZTogam9iLm5hbWUsXG5cdFx0XHRcdHN0YXJ0OiBqb2Iuc2hpZnRTdGFydC50b0lTT1N0cmluZygpLFxuXHRcdFx0XHRlbmQ6IGpvYi5zaGlmdEVuZC50b0lTT1N0cmluZygpLFxuXHRcdFx0fSkpLFxuXHRcdH0pXG5cdH1cblx0cmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRheXMpXG59XG5cbmNvbnN0IGdldFN0YXR1cyA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCB3b3JrZXJJZCA9IHJlcS51c2VyPy51c2VySWRcblxuXHRcdGNvbnN0IHdvcmtlcjogSVdvcmtlciB8IG51bGwgPSBhd2FpdCBXb3JrZXJNb2RlbC5maW5kQnlJZCh3b3JrZXJJZClcblxuXHRcdGlmICghd29ya2VyKSB7XG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlOiAnV29ya2VyIG5vdCAgc2ZvdW5kLicgfSlcblx0XHR9XG5cblx0XHRjb25zdCB1bnJlYWROb3RpZmljYXRpb246IElOb3RpZmljYXRpb24gfCBudWxsID1cblx0XHRcdGF3YWl0IE5vdGlmaWNhdGlvbk1vZGVsLmZpbmRPbmUoe1xuXHRcdFx0XHRyZWFkU3RhdHVzOiBmYWxzZSxcblx0XHRcdFx0dXNlcjoge1xuXHRcdFx0XHRcdGlkOiB3b3JrZXJJZCxcblx0XHRcdFx0XHR0eXBlOiAnd29ya2VyJyxcblx0XHRcdFx0fSxcblx0XHRcdH0pXG5cblx0XHRyZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xuXHRcdFx0dW5yZWFkTm90aWZpY2F0aW9uOiB1bnJlYWROb3RpZmljYXRpb24gJiYgdHJ1ZSxcblx0XHRcdHByb2ZpbGVQaWN0dXJlOiB3b3JrZXIucHJvZmlsZVBpY3R1cmUsXG5cdFx0fSlcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmxvZyhlcnJvcilcblx0XHRyZXR1cm4gcmVzLnNlbmRTdGF0dXMoNDAwKVxuXHR9XG59XG5cbmNvbnN0IFdvcmtlckNvbnRyb2xsZXIgPSB7XG5cdGdldFdvcmtlclByb2ZpbGUsXG5cdGdldFdvcmtlclB1YmxpY1Byb2ZpbGUsXG5cdGdldEFwcGxpY2F0aW9ucyxcblx0Z2V0Sm9icyxcblx0Z2V0Sm9ic0NhbGVuZGFyLFxuXHRnZXRTdGF0dXMsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdvcmtlckNvbnRyb2xsZXJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBLElBQUFBLE9BQUEsR0FBQUMsc0JBQUEsQ0FBQUMsT0FBQTtBQUdBLElBQUFDLFlBQUEsR0FBQUYsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFFLFNBQUEsR0FBQUgsc0JBQUEsQ0FBQUMsT0FBQTtBQUdBLElBQUFHLG9CQUFBLEdBQUFKLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBSSxrQkFBQSxHQUFBTCxzQkFBQSxDQUFBQyxPQUFBO0FBRUEsSUFBQUssT0FBQSxHQUFBTCxPQUFBO0FBQXVELFNBQUFELHVCQUFBTyxHQUFBLFdBQUFBLEdBQUEsSUFBQUEsR0FBQSxDQUFBQyxVQUFBLEdBQUFELEdBQUEsZ0JBQUFBLEdBQUE7QUFBQSxTQUFBRSxvQkFBQSxrQkFWdkQscUpBQUFBLG1CQUFBLFlBQUFBLG9CQUFBLFdBQUFDLE9BQUEsU0FBQUEsT0FBQSxPQUFBQyxFQUFBLEdBQUFDLE1BQUEsQ0FBQUMsU0FBQSxFQUFBQyxNQUFBLEdBQUFILEVBQUEsQ0FBQUksY0FBQSxFQUFBQyxjQUFBLEdBQUFKLE1BQUEsQ0FBQUksY0FBQSxjQUFBVCxHQUFBLEVBQUFVLEdBQUEsRUFBQUMsSUFBQSxJQUFBWCxHQUFBLENBQUFVLEdBQUEsSUFBQUMsSUFBQSxDQUFBQyxLQUFBLEtBQUFDLE9BQUEsd0JBQUFDLE1BQUEsR0FBQUEsTUFBQSxPQUFBQyxjQUFBLEdBQUFGLE9BQUEsQ0FBQUcsUUFBQSxrQkFBQUMsbUJBQUEsR0FBQUosT0FBQSxDQUFBSyxhQUFBLHVCQUFBQyxpQkFBQSxHQUFBTixPQUFBLENBQUFPLFdBQUEsOEJBQUFDLE9BQUFyQixHQUFBLEVBQUFVLEdBQUEsRUFBQUUsS0FBQSxXQUFBUCxNQUFBLENBQUFJLGNBQUEs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