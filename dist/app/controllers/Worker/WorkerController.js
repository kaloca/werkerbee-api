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
var _CompanyModel = _interopRequireDefault(require("../../models/CompanyModel"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
var searchWorkers = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var _req$user7, companyId, company, page, limit, searchTerm, sortOptions, searchQuery, sortQuery, aggregationPipeline, workers, total;
    return _regeneratorRuntime().wrap(function _callee8$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          console.log(req.user);
          companyId = (_req$user7 = req.user) === null || _req$user7 === void 0 ? void 0 : _req$user7.userId;
          _context9.next = 5;
          return _CompanyModel["default"].findById(companyId);
        case 5:
          company = _context9.sent;
          if (!(!company || !company.location)) {
            _context9.next = 8;
            break;
          }
          return _context9.abrupt("return", res.status(401).json({
            message: 'Not authorized or company location missing'
          }));
        case 8:
          page = parseInt(req.query.page) || 1;
          limit = parseInt(req.query.limit) || 10;
          searchTerm = req.query.search;
          sortOptions = {
            name: {
              name: 1
            },
            recent: {
              createdAt: -1
            },
            jobs: {
              jobsCompleted: -1
            } // assuming jobsCompleted is a field in the model
          };
          searchQuery = _objectSpread({
            accountStatus: 'APPROVED'
          }, searchTerm ? {
            name: new RegExp(searchTerm, 'i')
          } : {});
          sortQuery = sortOptions[req.query.sort] || {
            createdAt: -1
          };
          aggregationPipeline = [{
            $geoNear: {
              near: {
                type: 'Point',
                coordinates: company.location.coordinates
              },
              distanceField: 'distance',
              spherical: true,
              query: searchQuery,
              maxDistance: 100000000
            }
          }].concat(_toConsumableArray(req.query.sort !== 'location' ? [{
            $sort: sortQuery
          }] : []), [{
            $lookup: {
              from: 'jobtypes',
              localField: 'jobTypesIds',
              foreignField: '_id',
              as: 'jobTypesIds'
            }
          }, {
            $skip: (page - 1) * limit
          }, {
            $limit: limit
          }]);
          _context9.next = 17;
          return _WorkerModel["default"].aggregate(aggregationPipeline);
        case 17:
          workers = _context9.sent;
          _context9.next = 20;
          return _WorkerModel["default"].countDocuments(searchQuery);
        case 20:
          total = _context9.sent;
          res.status(200).json({
            workers: workers,
            total: total,
            page: page,
            limit: limit
          });
          _context9.next = 27;
          break;
        case 24:
          _context9.prev = 24;
          _context9.t0 = _context9["catch"](0);
          res.status(500).json({
            message: 'An error occurred while fetching workers.',
            error: _context9.t0
          });
        case 27:
        case "end":
          return _context9.stop();
      }
    }, _callee8, null, [[0, 24]]);
  }));
  return function searchWorkers(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
var WorkerController = {
  getWorkerProfile: getWorkerProfile,
  getWorkerPublicProfile: getWorkerPublicProfile,
  getApplications: getApplications,
  getJobs: getJobs,
  getJobsCalendar: getJobsCalendar,
  getStatus: getStatus,
  addCertification: addCertification,
  searchWorkers: searchWorkers
};
var _default = WorkerController;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9tZW50IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfV29ya2VyTW9kZWwiLCJfSm9iTW9kZWwiLCJfSm9iQXBwbGljYXRpb25Nb2RlbCIsIl9Ob3RpZmljYXRpb25Nb2RlbCIsIl9SYXRpbmciLCJfQ2VydGlmaWNhdGlvbk1vZGVsIiwiX0NvbXBhbnlNb2RlbCIsIm9iaiIsIl9fZXNNb2R1bGUiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJhcnIiLCJfYXJyYXlXaXRob3V0SG9sZXMiLCJfaXRlcmFibGVUb0FycmF5IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlU3ByZWFkIiwiVHlwZUVycm9yIiwibyIsIm1pbkxlbiIsIl9hcnJheUxpa2VUb0FycmF5IiwibiIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsInNsaWNlIiwiY29uc3RydWN0b3IiLCJuYW1lIiwiQXJyYXkiLCJmcm9tIiwidGVzdCIsIml0ZXIiLCJTeW1ib2wiLCJpdGVyYXRvciIsImlzQXJyYXkiLCJsZW4iLCJsZW5ndGgiLCJpIiwiYXJyMiIsIm93bktleXMiLCJvYmplY3QiLCJlbnVtZXJhYmxlT25seSIsImtleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJzeW1ib2xzIiwiZmlsdGVyIiwic3ltIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsInB1c2giLCJhcHBseSIsIl9vYmplY3RTcHJlYWQiLCJ0YXJnZXQiLCJhcmd1bWVudHMiLCJzb3VyY2UiLCJmb3JFYWNoIiwia2V5IiwiX2RlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX3RvUHJvcGVydHlLZXkiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImFyZyIsIl90b1ByaW1pdGl2ZSIsIl90eXBlb2YiLCJTdHJpbmciLCJpbnB1dCIsImhpbnQiLCJwcmltIiwidG9QcmltaXRpdmUiLCJ1bmRlZmluZWQiLCJyZXMiLCJOdW1iZXIiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZXhwb3J0cyIsIk9wIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCJkZXNjIiwiJFN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZXJyIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImZuIiwidHlwZSIsIkNvbnRpbnVlU2VudGluZWwiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJnZXRQcm90byIsImdldFByb3RvdHlwZU9mIiwiTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUiLCJ2YWx1ZXMiLCJHcCIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsIm1ldGhvZCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiUHJvbWlzZUltcGwiLCJpbnZva2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVjb3JkIiwicmVzdWx0IiwiX19hd2FpdCIsInRoZW4iLCJ1bndyYXBwZWQiLCJlcnJvciIsInByZXZpb3VzUHJvbWlzZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwic3RhdGUiLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiZG9uZSIsIm1ldGhvZE5hbWUiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsInZhbCIsInJldmVyc2UiLCJwb3AiLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInN0b3AiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsIl9uZXh0IiwiX3Rocm93IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmdzIiwiZ2V0V29ya2VyUHJvZmlsZSIsIl9yZWYiLCJfY2FsbGVlIiwicmVxIiwiX3JlcSR1c2VyIiwid29ya2VySWQiLCJ3b3JrZXIiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwidXNlciIsInVzZXJJZCIsIldvcmtlck1vZGVsIiwiZmluZEJ5SWQiLCJzZWxlY3QiLCJwb3B1bGF0ZSIsImFjY291bnRTdGF0dXMiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsInQwIiwiY29uc29sZSIsImxvZyIsInNlbmRTdGF0dXMiLCJfeCIsIl94MiIsImdldFdvcmtlclB1YmxpY1Byb2ZpbGUiLCJfcmVmMiIsIl9jYWxsZWUyIiwidXNlcm5hbWUiLCJjb21wbGV0ZWRKb2JzIiwicmF0aW5nIiwiam9iVHlwZXMiLCJleHBlcmllbmNlcyIsInByb2ZpbGVQaWN0dXJlIiwiY2VydGlmaWNhdGlvbnMiLCJhZGRyZXNzIiwiam9iVHlwZXNJZHMiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJwYXJhbXMiLCJmaW5kT25lIiwiSm9iTW9kZWwiLCJmaW5kIiwiaWQiLCJjaXR5IiwiY291bnRyeSIsIl94MyIsIl94NCIsImdldEFwcGxpY2F0aW9ucyIsIl9yZWYzIiwiX2NhbGxlZTMiLCJfcmVxJHVzZXIyIiwiX3JlcSRxdWVyeSIsInBhc3QiLCJwYWdlIiwibGltaXQiLCJwYWdlQXNOdW1iZXIiLCJsaW1pdEFzTnVtYmVyIiwicXVlcnkiLCJhcHBsaWNhdGlvbnMiLCJ0b3RhbEFwcGxpY2F0aW9ucyIsInRvdGFsUGFnZSIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsIl9pZCIsIkpvYkFwcGxpY2F0aW9uTW9kZWwiLCJwYXRoIiwibWF0Y2giLCJzb3J0IiwiY3JlYXRlZEF0Iiwic2tpcCIsImNvdW50RG9jdW1lbnRzIiwiTWF0aCIsImNlaWwiLCJwYWdpbmF0aW9uIiwiY3VycmVudFBhZ2UiLCJfeDUiLCJfeDYiLCJnZXRKb2JzIiwiX3JlZjQiLCJfY2FsbGVlNCIsIl9yZXEkdXNlcjMiLCJqb2JzIiwiam9iSWRzIiwid29ya2VyUmF0aW5ncyIsIndvcmtlclJhdGluZ01hcCIsImpvYnNXaXRoUmF0aW5ncyIsIl9jYWxsZWU0JCIsIl9jb250ZXh0NCIsIm1hcCIsImpvYiIsIldvcmtlclJhdGluZ01vZGVsIiwiam9iSWQiLCIkaW4iLCJleGVjIiwicmVkdWNlIiwic2V0IiwiTWFwIiwiam9iT2JqIiwidG9PYmplY3QiLCJoYXMiLCJ3b3JrZXJSYXRpbmciLCJnZXQiLCJfeDciLCJfeDgiLCJnZXRKb2JzQ2FsZW5kYXIiLCJfcmVmNSIsIl9jYWxsZWU1IiwiX3JlcSR1c2VyNCIsIm51bWJlck9mRGF5cyIsInN0YXJ0T2ZXZWVrIiwiZW5kRGF0ZSIsImRheXMiLCJfbG9vcCIsIm0iLCJfY2FsbGVlNSQiLCJfY29udGV4dDYiLCJtb21lbnQiLCJzdGFydE9mIiwiY2xvbmUiLCJhZGQiLCJzaGlmdFN0YXJ0IiwiJGd0ZSIsInRvRGF0ZSIsIiRsdCIsImxlYW4iLCJkYXRlU3RyIiwiZGF5Sm9icyIsIl9sb29wJCIsIl9jb250ZXh0NSIsImZvcm1hdCIsImUiLCJpc1NhbWUiLCJkYXRlIiwiaXNDdXJyZW50TW9udGgiLCJEYXRlIiwiaXNUb2RheSIsImV2ZW50cyIsInN0YXJ0IiwidG9JU09TdHJpbmciLCJlbmQiLCJzaGlmdEVuZCIsImlzQmVmb3JlIiwiX3g5IiwiX3gxMCIsImdldFN0YXR1cyIsIl9yZWY2IiwiX2NhbGxlZTYiLCJfcmVxJHVzZXI1IiwidW5yZWFkTm90aWZpY2F0aW9uIiwiX2NhbGxlZTYkIiwiX2NvbnRleHQ3IiwiTm90aWZpY2F0aW9uTW9kZWwiLCJyZWFkU3RhdHVzIiwiX3gxMSIsIl94MTIiLCJhZGRDZXJ0aWZpY2F0aW9uIiwiX3JlZjciLCJfY2FsbGVlNyIsIl9yZXEkdXNlcjYiLCJfd29ya2VyJGNlcnRpZmljYXRpb24iLCJjZXJ0aWZpY2F0aW9uSWQiLCJjZXJ0aWZpY2F0aW9uIiwiX2NhbGxlZTckIiwiX2NvbnRleHQ4IiwiYm9keSIsIkNlcnRpZmljYXRpb25Nb2RlbCIsInNhdmUiLCJfeDEzIiwiX3gxNCIsInNlYXJjaFdvcmtlcnMiLCJfcmVmOCIsIl9jYWxsZWU4IiwiX3JlcSR1c2VyNyIsImNvbXBhbnlJZCIsImNvbXBhbnkiLCJzZWFyY2hUZXJtIiwic29ydE9wdGlvbnMiLCJzZWFyY2hRdWVyeSIsInNvcnRRdWVyeSIsImFnZ3JlZ2F0aW9uUGlwZWxpbmUiLCJ3b3JrZXJzIiwidG90YWwiLCJfY2FsbGVlOCQiLCJfY29udGV4dDkiLCJDb21wYW55TW9kZWwiLCJsb2NhdGlvbiIsInBhcnNlSW50Iiwic2VhcmNoIiwicmVjZW50Iiwiam9ic0NvbXBsZXRlZCIsIlJlZ0V4cCIsIiRnZW9OZWFyIiwibmVhciIsImNvb3JkaW5hdGVzIiwiZGlzdGFuY2VGaWVsZCIsInNwaGVyaWNhbCIsIm1heERpc3RhbmNlIiwiY29uY2F0IiwiJHNvcnQiLCIkbG9va3VwIiwibG9jYWxGaWVsZCIsImZvcmVpZ25GaWVsZCIsImFzIiwiJHNraXAiLCIkbGltaXQiLCJhZ2dyZWdhdGUiLCJfeDE1IiwiX3gxNiIsIldvcmtlckNvbnRyb2xsZXIiLCJfZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvY29udHJvbGxlcnMvV29ya2VyL1dvcmtlckNvbnRyb2xsZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJ1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5cbmltcG9ydCB7IElXb3JrZXIgfSBmcm9tICdAL2FwcC9pbnRlcmZhY2VzL21vZGVscy9Xb3JrZXInXG5pbXBvcnQgV29ya2VyTW9kZWwgZnJvbSAnQC9hcHAvbW9kZWxzL1dvcmtlck1vZGVsJ1xuaW1wb3J0IEpvYk1vZGVsIGZyb20gJ0AvYXBwL21vZGVscy9Kb2JNb2RlbCdcbmltcG9ydCB7IElKb2IgfSBmcm9tICdAL2FwcC9pbnRlcmZhY2VzL21vZGVscy9Kb2InXG5pbXBvcnQgeyBJSm9iQXBwbGljYXRpb24gfSBmcm9tICdAL2FwcC9pbnRlcmZhY2VzL21vZGVscy9Kb2JBcHBsaWNhdGlvbidcbmltcG9ydCBKb2JBcHBsaWNhdGlvbk1vZGVsIGZyb20gJ0AvYXBwL21vZGVscy9Kb2JBcHBsaWNhdGlvbk1vZGVsJ1xuaW1wb3J0IE5vdGlmaWNhdGlvbk1vZGVsIGZyb20gJ0AvYXBwL21vZGVscy9Ob3RpZmljYXRpb25Nb2RlbCdcbmltcG9ydCB7IElOb3RpZmljYXRpb24gfSBmcm9tICdAL2FwcC9pbnRlcmZhY2VzL21vZGVscy9Ob3RpZmljYXRpb24nXG5pbXBvcnQgeyBXb3JrZXJSYXRpbmdNb2RlbCB9IGZyb20gJ0AvYXBwL21vZGVscy9SYXRpbmcnXG5pbXBvcnQgeyBJUmF0aW5nIH0gZnJvbSAnQC9hcHAvaW50ZXJmYWNlcy9tb2RlbHMvUmF0aW5nJ1xuaW1wb3J0IHsgSUNlcnRpZmljYXRpb24gfSBmcm9tICdAL2FwcC9pbnRlcmZhY2VzL21vZGVscy9DZXJ0aWZpY2F0aW9uJ1xuaW1wb3J0IENlcnRpZmljYXRpb25Nb2RlbCBmcm9tICdAL2FwcC9tb2RlbHMvQ2VydGlmaWNhdGlvbk1vZGVsJ1xuaW1wb3J0IENvbXBhbnlNb2RlbCBmcm9tICdAL2FwcC9tb2RlbHMvQ29tcGFueU1vZGVsJ1xuaW1wb3J0IHsgSUNvbXBhbnkgfSBmcm9tICdAL2FwcC9pbnRlcmZhY2VzL21vZGVscy9Db21wYW55J1xuXG5jb25zdCBnZXRXb3JrZXJQcm9maWxlID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHdvcmtlcklkID0gcmVxLnVzZXI/LnVzZXJJZFxuXG5cdFx0Y29uc3Qgd29ya2VyOiBJV29ya2VyIHwgbnVsbCA9IGF3YWl0IFdvcmtlck1vZGVsLmZpbmRCeUlkKHdvcmtlcklkKVxuXHRcdFx0LnNlbGVjdCgnK2FkZHJlc3MnKVxuXHRcdFx0LnBvcHVsYXRlKCdqb2JUeXBlc0lkcycpXG5cblx0XHRpZiAoIXdvcmtlciB8fCB3b3JrZXIuYWNjb3VudFN0YXR1cyAhPSAnQVBQUk9WRUQnKSB7XG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlOiAnV29ya2VyIG5vdCBmb3VuZC4nIH0pXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgd29ya2VyIH0pXG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5sb2coZXJyb3IpXG5cdFx0cmV0dXJuIHJlcy5zZW5kU3RhdHVzKDQwMClcblx0fVxufVxuXG5jb25zdCBnZXRXb3JrZXJQdWJsaWNQcm9maWxlID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHVzZXJuYW1lID0gcmVxLnBhcmFtcy51c2VybmFtZVxuXG5cdFx0Y29uc3Qgd29ya2VyOiBJV29ya2VyIHwgbnVsbCA9IGF3YWl0IFdvcmtlck1vZGVsLmZpbmRPbmUoe1xuXHRcdFx0dXNlcm5hbWUsXG5cdFx0fSlcblx0XHRcdC5zZWxlY3QoJythZGRyZXNzJylcblx0XHRcdC5wb3B1bGF0ZSgnY2VydGlmaWNhdGlvbnMnKVxuXHRcdFx0LnBvcHVsYXRlKCdqb2JUeXBlc0lkcycpXG5cblx0XHRpZiAoIXdvcmtlciB8fCB3b3JrZXIuYWNjb3VudFN0YXR1cyAhPSAnQVBQUk9WRUQnKSB7XG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlOiAnV29ya2VyIG5vdCBmb3VuZC4nIH0pXG5cdFx0fVxuXG5cdFx0Y29uc3QgY29tcGxldGVkSm9iczogSUpvYltdIHwgbnVsbCA9IGF3YWl0IEpvYk1vZGVsLmZpbmQoe1xuXHRcdFx0d29ya2VySWQ6IHdvcmtlci5pZCxcblx0XHRcdHN0YXR1czogJ0NPTVBMRVRFJyxcblx0XHR9KVxuXG5cdFx0Y29uc3Qge1xuXHRcdFx0bmFtZSxcblx0XHRcdHJhdGluZyxcblx0XHRcdGpvYlR5cGVzLFxuXHRcdFx0ZXhwZXJpZW5jZXMsXG5cdFx0XHRwcm9maWxlUGljdHVyZSxcblx0XHRcdGNlcnRpZmljYXRpb25zLFxuXHRcdFx0YWRkcmVzcyxcblx0XHRcdGpvYlR5cGVzSWRzLFxuXHRcdH0gPSB3b3JrZXJcblxuXHRcdHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XG5cdFx0XHRuYW1lLFxuXHRcdFx0cmF0aW5nLFxuXHRcdFx0am9iVHlwZXMsXG5cdFx0XHRleHBlcmllbmNlcyxcblx0XHRcdHByb2ZpbGVQaWN0dXJlLFxuXHRcdFx0Y2VydGlmaWNhdGlvbnMsXG5cdFx0XHRjb21wbGV0ZWRKb2JzOiBjb21wbGV0ZWRKb2JzLmxlbmd0aCxcblx0XHRcdGFkZHJlc3M6IHtcblx0XHRcdFx0Y2l0eTogYWRkcmVzcy5jaXR5LFxuXHRcdFx0XHRjb3VudHJ5OiBhZGRyZXNzLmNvdW50cnksXG5cdFx0XHRcdHN0YXRlOiBhZGRyZXNzLnN0YXRlLFxuXHRcdFx0fSxcblx0XHRcdGpvYlR5cGVzSWRzLFxuXHRcdH0pXG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5sb2coZXJyb3IpXG5cdFx0cmV0dXJuIHJlcy5zZW5kU3RhdHVzKDQwMClcblx0fVxufVxuXG5jb25zdCBnZXRBcHBsaWNhdGlvbnMgPSBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG5cdGNvbnN0IHVzZXJuYW1lID0gcmVxLnBhcmFtcy51c2VybmFtZVxuXHRjb25zdCB3b3JrZXJJZCA9IHJlcS51c2VyPy51c2VySWRcblx0Y29uc3QgeyBzdGF0dXMsIHBhc3QsIHBhZ2UsIGxpbWl0IH0gPSByZXEucXVlcnlcblxuXHRjb25zdCBwYWdlQXNOdW1iZXIgPSBOdW1iZXIocGFnZSkgfHwgMVxuXHRjb25zdCBsaW1pdEFzTnVtYmVyID0gTnVtYmVyKGxpbWl0KSB8fCAxMFxuXG5cdHRyeSB7XG5cdFx0Y29uc3Qgd29ya2VyID0gYXdhaXQgV29ya2VyTW9kZWwuZmluZE9uZSh7IHVzZXJuYW1lIH0pXG5cblx0XHRpZiAoIXdvcmtlcikge1xuXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZTogJ1dvcmtlciBub3QgZm91bmQnIH0pXG5cdFx0fVxuXG5cdFx0aWYgKHdvcmtlcklkICE9IHdvcmtlci5faWQpIHtcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwMykuanNvbih7IG1lc3NhZ2U6ICdVbmF1dGhvcml6ZWQnIH0pXG5cdFx0fVxuXG5cdFx0Y29uc3QgcXVlcnk6IGFueSA9IHtcblx0XHRcdHdvcmtlcjogd29ya2VySWQsXG5cdFx0fVxuXG5cdFx0aWYgKHN0YXR1cykge1xuXHRcdFx0cXVlcnkuc3RhdHVzID0gc3RhdHVzXG5cdFx0fVxuXG5cdFx0Y29uc3QgYXBwbGljYXRpb25zOiBJSm9iQXBwbGljYXRpb25bXSA9IGF3YWl0IEpvYkFwcGxpY2F0aW9uTW9kZWwuZmluZChcblx0XHRcdHF1ZXJ5XG5cdFx0KVxuXHRcdFx0LnBvcHVsYXRlKHtcblx0XHRcdFx0cGF0aDogJ2pvYlBvc3RpbmcnLFxuXHRcdFx0XHRtYXRjaDoge30sXG5cdFx0XHRcdC8vbWF0Y2g6IHBhc3QgPT0gJ2ZhbHNlJyA/IHsgc3RhcnQ6IHsgJGd0ZTogbmV3IERhdGUoKSB9IH0gOiB7fSxcblx0XHRcdH0pXG5cdFx0XHQucG9wdWxhdGUoJ2NvbXBhbnknKVxuXHRcdFx0LnNvcnQoeyBjcmVhdGVkQXQ6IC0xIH0pXG5cdFx0XHQuc2tpcCgocGFnZUFzTnVtYmVyIC0gMSkgKiBsaW1pdEFzTnVtYmVyKVxuXHRcdFx0LmxpbWl0KGxpbWl0QXNOdW1iZXIpXG5cblx0XHRjb25zdCB0b3RhbEFwcGxpY2F0aW9ucyA9IGF3YWl0IEpvYkFwcGxpY2F0aW9uTW9kZWwuY291bnREb2N1bWVudHMocXVlcnkpXG5cblx0XHRjb25zdCB0b3RhbFBhZ2UgPSBNYXRoLmNlaWwodG90YWxBcHBsaWNhdGlvbnMgLyBsaW1pdEFzTnVtYmVyKVxuXG5cdFx0cmVzLnN0YXR1cygyMDApLmpzb24oe1xuXHRcdFx0YXBwbGljYXRpb25zLFxuXHRcdFx0cGFnaW5hdGlvbjoge1xuXHRcdFx0XHRjdXJyZW50UGFnZTogcGFnZUFzTnVtYmVyLFxuXHRcdFx0XHR0b3RhbFBhZ2UsXG5cdFx0XHRcdHRvdGFsQXBwbGljYXRpb25zLFxuXHRcdFx0fSxcblx0XHR9KVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogJ1NlcnZlciBlcnJvcicgfSlcblx0fVxufVxuXG5jb25zdCBnZXRKb2JzID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuXHRjb25zdCB1c2VybmFtZSA9IHJlcS5wYXJhbXMudXNlcm5hbWVcblx0Y29uc3Qgd29ya2VySWQgPSByZXEudXNlcj8udXNlcklkXG5cblx0dHJ5IHtcblx0XHRjb25zdCB3b3JrZXI6IElXb3JrZXIgfCBudWxsID0gYXdhaXQgV29ya2VyTW9kZWwuZmluZE9uZSh7IHVzZXJuYW1lIH0pXG5cblx0XHRpZiAoIXdvcmtlcikge1xuXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZTogJ1dvcmtlciBub3QgZm91bmQnIH0pXG5cdFx0fVxuXG5cdFx0aWYgKHdvcmtlcklkICE9IHdvcmtlci5pZCkge1xuXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgbWVzc2FnZTogJ1VuYXV0aG9yaXplZCcgfSlcblx0XHR9XG5cblx0XHRjb25zdCBqb2JzOiBJSm9iW10gPSBhd2FpdCBKb2JNb2RlbC5maW5kKHsgd29ya2VySWQgfSlcblx0XHRcdC5zb3J0KCctc2hpZnRTdGFydCcpXG5cdFx0XHQucG9wdWxhdGUoJ2pvYlBvc3RpbmdJZCcpXG5cdFx0XHQucG9wdWxhdGUoJ2NvbXBhbnlJZCcpXG5cblx0XHRpZiAoIWpvYnMpIHtcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6IFwiV29ya2VyIGRvZXNuJ3QgaGF2ZSBhbnkgam9ic1wiIH0pXG5cdFx0fVxuXG5cdFx0Y29uc3Qgam9iSWRzID0gam9icy5tYXAoKGpvYikgPT4gam9iLl9pZClcblxuXHRcdGNvbnN0IHdvcmtlclJhdGluZ3M6IElSYXRpbmdbXSA9IGF3YWl0IFdvcmtlclJhdGluZ01vZGVsLmZpbmQoe1xuXHRcdFx0am9iSWQ6IHsgJGluOiBqb2JJZHMgfSxcblx0XHR9KS5leGVjKClcblxuXHRcdGNvbnN0IHdvcmtlclJhdGluZ01hcCA9IHdvcmtlclJhdGluZ3MucmVkdWNlKFxuXHRcdFx0KG1hcCwgcmF0aW5nKSA9PiBtYXAuc2V0KHJhdGluZy5qb2JJZC50b1N0cmluZygpLCByYXRpbmcpLFxuXHRcdFx0bmV3IE1hcCgpXG5cdFx0KVxuXG5cdFx0Y29uc3Qgam9ic1dpdGhSYXRpbmdzID0gam9icy5tYXAoKGpvYikgPT4ge1xuXHRcdFx0Y29uc3Qgam9iT2JqID0gam9iLnRvT2JqZWN0KClcblx0XHRcdGlmICh3b3JrZXJSYXRpbmdNYXAuaGFzKGpvYi5faWQudG9TdHJpbmcoKSkpIHtcblx0XHRcdFx0am9iT2JqLndvcmtlclJhdGluZyA9IHdvcmtlclJhdGluZ01hcC5nZXQoam9iLl9pZC50b1N0cmluZygpKVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGpvYk9ialxuXHRcdH0pXG5cblx0XHRyZXMuc3RhdHVzKDIwMCkuanNvbihqb2JzV2l0aFJhdGluZ3MpXG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0cmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnU2VydmVyIGVycm9yJyB9KVxuXHR9XG59XG5cbmNvbnN0IGdldEpvYnNDYWxlbmRhciA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcblx0Y29uc3Qgd29ya2VySWQgPSByZXEudXNlcj8udXNlcklkXG5cdC8vIEdldCBudW1iZXIgb2YgZGF5cyBmcm9tIHJlcXVlc3Qgb3IgZGVmYXVsdCB0byA3XG5cdGNvbnN0IG51bWJlck9mRGF5cyA9IE51bWJlcihyZXEucXVlcnkuZGF5cykgfHwgN1xuXG5cdC8vIEdldCBzdGFydCBvZiB0aGUgY3VycmVudCB3ZWVrXG5cdGNvbnN0IHN0YXJ0T2ZXZWVrID0gbW9tZW50KCkuc3RhcnRPZignd2VlaycpXG5cblx0Ly8gR2V0IGVuZCBkYXRlIGJhc2VkIG9uIG51bWJlck9mRGF5c1xuXHRjb25zdCBlbmREYXRlID0gc3RhcnRPZldlZWsuY2xvbmUoKS5hZGQobnVtYmVyT2ZEYXlzLCAnZGF5cycpXG5cblx0Ly8gRmluZCBqb2JzIGJldHdlZW4gc3RhcnRPZldlZWsgYW5kIGVuZERhdGVcblx0Y29uc3Qgam9icyA9IGF3YWl0IEpvYk1vZGVsLmZpbmQoe1xuXHRcdHNoaWZ0U3RhcnQ6IHtcblx0XHRcdCRndGU6IHN0YXJ0T2ZXZWVrLnRvRGF0ZSgpLFxuXHRcdFx0JGx0OiBlbmREYXRlLnRvRGF0ZSgpLFxuXHRcdH0sXG5cdFx0d29ya2VySWQsXG5cdH0pLmxlYW4oKVxuXG5cdGNvbnN0IGRheXMgPSBbXVxuXG5cdC8vIExvb3AgdGhyb3VnaCBlYWNoIGRheSBhbmQgYWRkIGV2ZW50c1xuXHRmb3IgKGxldCBtID0gc3RhcnRPZldlZWs7IG0uaXNCZWZvcmUoZW5kRGF0ZSk7IG0uYWRkKDEsICdkYXlzJykpIHtcblx0XHRjb25zdCBkYXRlU3RyID0gbS5mb3JtYXQoJ1lZWVktTU0tREQnKVxuXG5cdFx0Ly8gRmlsdGVyIGV2ZW50cyBmb3IgdGhlIGN1cnJlbnQgZGF5XG5cdFx0Y29uc3QgZGF5Sm9icyA9IGpvYnMuZmlsdGVyKChlKSA9PiBtb21lbnQoZS5zaGlmdFN0YXJ0KS5pc1NhbWUobSwgJ2RheScpKVxuXG5cdFx0ZGF5cy5wdXNoKHtcblx0XHRcdGRhdGU6IGRhdGVTdHIsXG5cdFx0XHRpc0N1cnJlbnRNb250aDogbS5pc1NhbWUobmV3IERhdGUoKSwgJ21vbnRoJyksXG5cdFx0XHRpc1RvZGF5OiBtLmlzU2FtZShuZXcgRGF0ZSgpLCAnZGF5JyksXG5cdFx0XHRldmVudHM6IGRheUpvYnMubWFwKChqb2IpID0+ICh7XG5cdFx0XHRcdGlkOiBqb2IuX2lkLFxuXHRcdFx0XHRuYW1lOiBqb2IubmFtZSxcblx0XHRcdFx0c3RhcnQ6IGpvYi5zaGlmdFN0YXJ0LnRvSVNPU3RyaW5nKCksXG5cdFx0XHRcdGVuZDogam9iLnNoaWZ0RW5kLnRvSVNPU3RyaW5nKCksXG5cdFx0XHR9KSksXG5cdFx0fSlcblx0fVxuXHRyZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oZGF5cylcbn1cblxuY29uc3QgZ2V0U3RhdHVzID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHdvcmtlcklkID0gcmVxLnVzZXI/LnVzZXJJZFxuXG5cdFx0Y29uc3Qgd29ya2VyOiBJV29ya2VyIHwgbnVsbCA9IGF3YWl0IFdvcmtlck1vZGVsLmZpbmRCeUlkKHdvcmtlcklkKVxuXG5cdFx0aWYgKCF3b3JrZXIpIHtcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6ICdXb3JrZXIgbm90ICBzZm91bmQuJyB9KVxuXHRcdH1cblxuXHRcdGNvbnN0IHVucmVhZE5vdGlmaWNhdGlvbjogSU5vdGlmaWNhdGlvbiB8IG51bGwgPVxuXHRcdFx0YXdhaXQgTm90aWZpY2F0aW9uTW9kZWwuZmluZE9uZSh7XG5cdFx0XHRcdHJlYWRTdGF0dXM6IGZhbHNlLFxuXHRcdFx0XHR1c2VyOiB7XG5cdFx0XHRcdFx0aWQ6IHdvcmtlcklkLFxuXHRcdFx0XHRcdHR5cGU6ICd3b3JrZXInLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSlcblxuXHRcdHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XG5cdFx0XHR1bnJlYWROb3RpZmljYXRpb246IHVucmVhZE5vdGlmaWNhdGlvbiAmJiB0cnVlLFxuXHRcdFx0cHJvZmlsZVBpY3R1cmU6IHdvcmtlci5wcm9maWxlUGljdHVyZSxcblx0XHR9KVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUubG9nKGVycm9yKVxuXHRcdHJldHVybiByZXMuc2VuZFN0YXR1cyg0MDApXG5cdH1cbn1cblxuY29uc3QgYWRkQ2VydGlmaWNhdGlvbiA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCB3b3JrZXJJZCA9IHJlcS51c2VyPy51c2VySWRcblx0XHRjb25zdCB7IGNlcnRpZmljYXRpb25JZCB9ID0gcmVxLmJvZHlcblxuXHRcdGNvbnN0IHdvcmtlcjogSVdvcmtlciB8IG51bGwgPSBhd2FpdCBXb3JrZXJNb2RlbC5maW5kQnlJZCh3b3JrZXJJZClcblxuXHRcdGlmICghd29ya2VyKSB7XG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlOiAnV29ya2VyIG5vdCBmb3VuZC4nIH0pXG5cdFx0fVxuXG5cdFx0Y29uc3QgY2VydGlmaWNhdGlvbjogSUNlcnRpZmljYXRpb24gfCBudWxsID1cblx0XHRcdGF3YWl0IENlcnRpZmljYXRpb25Nb2RlbC5maW5kQnlJZChjZXJ0aWZpY2F0aW9uSWQpXG5cblx0XHRpZiAoIWNlcnRpZmljYXRpb24pIHtcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6ICdJbnZhbGlkIENlcnRpZmljYXRvbiBJZCcgfSlcblx0XHR9XG5cblx0XHR3b3JrZXIuY2VydGlmaWNhdGlvbnM/LnB1c2goY2VydGlmaWNhdGlvbi5faWQpXG5cdFx0YXdhaXQgd29ya2VyLnNhdmUoKVxuXG5cdFx0cmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKGNlcnRpZmljYXRpb24pXG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5sb2coZXJyb3IpXG5cdFx0cmV0dXJuIHJlcy5zZW5kU3RhdHVzKDQwMClcblx0fVxufVxuXG50eXBlIEFnZ3JlZ2F0aW9uU3RhZ2UgPSB7XG5cdFtrZXk6IHN0cmluZ106IGFueVxufVxuXG5jb25zdCBzZWFyY2hXb3JrZXJzID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnNvbGUubG9nKHJlcS51c2VyKVxuXHRcdGNvbnN0IGNvbXBhbnlJZCA9IHJlcS51c2VyPy51c2VySWRcblxuXHRcdGNvbnN0IGNvbXBhbnk6IElDb21wYW55IHwgbnVsbCA9IGF3YWl0IENvbXBhbnlNb2RlbC5maW5kQnlJZChjb21wYW55SWQpXG5cblx0XHRpZiAoIWNvbXBhbnkgfHwgIWNvbXBhbnkubG9jYXRpb24pIHtcblx0XHRcdHJldHVybiByZXNcblx0XHRcdFx0LnN0YXR1cyg0MDEpXG5cdFx0XHRcdC5qc29uKHsgbWVzc2FnZTogJ05vdCBhdXRob3JpemVkIG9yIGNvbXBhbnkgbG9jYXRpb24gbWlzc2luZycgfSlcblx0XHR9XG5cblx0XHRjb25zdCBwYWdlOiBudW1iZXIgPSBwYXJzZUludChyZXEucXVlcnkucGFnZSBhcyBzdHJpbmcpIHx8IDFcblx0XHRjb25zdCBsaW1pdDogbnVtYmVyID0gcGFyc2VJbnQocmVxLnF1ZXJ5LmxpbWl0IGFzIHN0cmluZykgfHwgMTBcblx0XHRjb25zdCBzZWFyY2hUZXJtOiBzdHJpbmcgfCB1bmRlZmluZWQgPSByZXEucXVlcnkuc2VhcmNoIGFzIHN0cmluZ1xuXG5cdFx0Y29uc3Qgc29ydE9wdGlvbnM6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7XG5cdFx0XHRuYW1lOiB7IG5hbWU6IDEgfSxcblx0XHRcdHJlY2VudDogeyBjcmVhdGVkQXQ6IC0xIH0sXG5cdFx0XHRqb2JzOiB7IGpvYnNDb21wbGV0ZWQ6IC0xIH0sIC8vIGFzc3VtaW5nIGpvYnNDb21wbGV0ZWQgaXMgYSBmaWVsZCBpbiB0aGUgbW9kZWxcblx0XHR9XG5cblx0XHRjb25zdCBzZWFyY2hRdWVyeSA9IHtcblx0XHRcdGFjY291bnRTdGF0dXM6ICdBUFBST1ZFRCcsXG5cdFx0XHQuLi4oc2VhcmNoVGVybSA/IHsgbmFtZTogbmV3IFJlZ0V4cChzZWFyY2hUZXJtLCAnaScpIH0gOiB7fSksXG5cdFx0fVxuXG5cdFx0Y29uc3Qgc29ydFF1ZXJ5ID0gc29ydE9wdGlvbnNbcmVxLnF1ZXJ5LnNvcnQgYXMgc3RyaW5nXSB8fCB7IGNyZWF0ZWRBdDogLTEgfVxuXG5cdFx0Y29uc3QgYWdncmVnYXRpb25QaXBlbGluZSA9IFtcblx0XHRcdHtcblx0XHRcdFx0JGdlb05lYXI6IHtcblx0XHRcdFx0XHRuZWFyOiB7IHR5cGU6ICdQb2ludCcsIGNvb3JkaW5hdGVzOiBjb21wYW55LmxvY2F0aW9uLmNvb3JkaW5hdGVzIH0sXG5cdFx0XHRcdFx0ZGlzdGFuY2VGaWVsZDogJ2Rpc3RhbmNlJyxcblx0XHRcdFx0XHRzcGhlcmljYWw6IHRydWUsXG5cdFx0XHRcdFx0cXVlcnk6IHNlYXJjaFF1ZXJ5LFxuXHRcdFx0XHRcdG1heERpc3RhbmNlOiAxMDAwMDAwMDAsXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0Ly8gSWYgc29ydCBpcyBub3QgJ2xvY2F0aW9uJywgcHVzaCB0aGUgc29ydCBjcml0ZXJpYSBpbnRvIHRoZSBhZ2dyZWdhdGlvbiBwaXBlbGluZVxuXHRcdFx0Li4uKHJlcS5xdWVyeS5zb3J0ICE9PSAnbG9jYXRpb24nID8gW3sgJHNvcnQ6IHNvcnRRdWVyeSB9XSA6IFtdKSxcblx0XHRcdHtcblx0XHRcdFx0JGxvb2t1cDoge1xuXHRcdFx0XHRcdGZyb206ICdqb2J0eXBlcycsXG5cdFx0XHRcdFx0bG9jYWxGaWVsZDogJ2pvYlR5cGVzSWRzJyxcblx0XHRcdFx0XHRmb3JlaWduRmllbGQ6ICdfaWQnLFxuXHRcdFx0XHRcdGFzOiAnam9iVHlwZXNJZHMnLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdHsgJHNraXA6IChwYWdlIC0gMSkgKiBsaW1pdCB9LFxuXHRcdFx0eyAkbGltaXQ6IGxpbWl0IH0sXG5cdFx0XVxuXG5cdFx0Y29uc3Qgd29ya2VyczogSVdvcmtlcltdID0gYXdhaXQgV29ya2VyTW9kZWwuYWdncmVnYXRlKFxuXHRcdFx0YWdncmVnYXRpb25QaXBlbGluZSBhcyBhbnlcblx0XHQpXG5cblx0XHRjb25zdCB0b3RhbCA9IGF3YWl0IFdvcmtlck1vZGVsLmNvdW50RG9jdW1lbnRzKHNlYXJjaFF1ZXJ5KVxuXG5cdFx0cmVzLnN0YXR1cygyMDApLmpzb24oe1xuXHRcdFx0d29ya2Vycyxcblx0XHRcdHRvdGFsLFxuXHRcdFx0cGFnZSxcblx0XHRcdGxpbWl0LFxuXHRcdH0pXG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0cmVzLnN0YXR1cyg1MDApLmpzb24oe1xuXHRcdFx0bWVzc2FnZTogJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIGZldGNoaW5nIHdvcmtlcnMuJyxcblx0XHRcdGVycm9yLFxuXHRcdH0pXG5cdH1cbn1cblxuY29uc3QgV29ya2VyQ29udHJvbGxlciA9IHtcblx0Z2V0V29ya2VyUHJvZmlsZSxcblx0Z2V0V29ya2VyUHVibGljUHJvZmlsZSxcblx0Z2V0QXBwbGljYXRpb25zLFxuXHRnZXRKb2JzLFxuXHRnZXRKb2JzQ2FsZW5kYXIsXG5cdGdldFN0YXR1cyxcblx0YWRkQ2VydGlmaWNhdGlvbixcblx0c2VhcmNoV29ya2Vycyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgV29ya2VyQ29udHJvbGxlclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0EsSUFBQUEsT0FBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBR0EsSUFBQUMsWUFBQSxHQUFBRixzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUUsU0FBQSxHQUFBSCxzQkFBQSxDQUFBQyxPQUFBO0FBR0EsSUFBQUcsb0JBQUEsR0FBQUosc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFJLGtCQUFBLEdBQUFMLHNCQUFBLENBQUFDLE9BQUE7QUFFQSxJQUFBSyxPQUFBLEdBQUFMLE9BQUE7QUFHQSxJQUFBTSxtQkFBQSxHQUFBUCxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQU8sYUFBQSxHQUFBUixzQkFBQSxDQUFBQyxPQUFBO0FBQW9ELFNBQUFELHVCQUFBUyxHQUFBLFdBQUFBLEdBQUEsSUFBQUEsR0FBQSxDQUFBQyxVQUFBLEdBQUFELEdBQUEsZ0JBQUFBLEdBQUE7QUFBQSxTQUFBRSxtQkFBQUMsR0FBQSxXQUFBQyxrQkFBQSxDQUFBRCxHQUFBLEtBQUFFLGdCQUFBLENBQUFGLEdBQUEsS0FBQUcsMkJBQUEsQ0FBQUgsR0FBQSxLQUFBSSxrQkFBQTtBQUFBLFNBQUFBLG1CQUFBLGNBQUFDLFNBQUE7QUFBQSxTQUFBRiw0QkFBQUcsQ0FBQSxFQUFBQyxNQUFBLFNBQUFELENBQUEscUJBQUFBLENBQUEsc0JBQUFFLGlCQUFBLENBQUFGLENBQUEsRUFBQUMsTUFBQSxPQUFBRSxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsU0FBQSxDQUFBQyxRQUFBLENBQUFDLElBQUEsQ0FBQVAsQ0FBQSxFQUFBUSxLQUFBLGFBQUFMLENBQUEsaUJBQUFILENBQUEsQ0FBQVMsV0FBQSxFQUFBTixDQUFBLEdBQUFILENBQUEsQ0FBQVMsV0FBQSxDQUFBQyxJQUFBLE1BQUFQLENBQUEsY0FBQUEsQ0FBQSxtQkFBQVEsS0FBQSxDQUFBQyxJQUFBLENBQUFaLENBQUEsT0FBQUcsQ0FBQSwrREFBQVUsSUFBQSxDQUFBVixDQUFBLFVBQUFELGlCQUFBLENBQUFGLENBQUEsRUFBQUMsTUFBQTtBQUFBLFNBQUFMLGlCQUFBa0IsSUFBQSxlQUFBQyxNQUFBLG9CQUFBRCxJQUFBLENBQUFDLE1BQUEsQ0FBQUMsUUFBQSxhQUFBRixJQUFBLCtCQUFBSCxLQUFBLENBQUFDLElBQUEsQ0FBQUUsSUFBQTtBQUFBLFNBQUFuQixtQkFBQUQsR0FBQSxRQUFBaUIsS0FBQSxDQUFBTSxPQUFBLENBQUF2QixHQUFBLFVBQUFRLGlCQUFBLENBQUFSLEdBQUE7QUFBQSxTQUFBUSxrQkFBQVIsR0FBQSxFQUFBd0IsR0FBQSxRQUFBQSxHQUFBLFlBQUFBLEdBQUEsR0FBQXhCLEdBQUEsQ0FBQXlCLE1BQUEsRUFBQUQsR0FBQSxHQUFBeEIsR0FBQSxDQUFBeUIsTUFBQSxXQUFBQyxDQUFBLE1BQUFDLElBQUEsT0FBQVYsS0FBQSxDQUFBTyxHQUFBLEdBQUFFLENBQUEsR0FBQUYsR0FBQSxFQUFBRSxDQUFBLElBQUFDLElBQUEsQ0FBQUQsQ0FBQSxJQUFBMUIsR0FBQSxDQUFBMEIsQ0FBQSxVQUFBQyxJQUFBO0FBQUEsU0FBQUMsUUFBQUMsTUFBQSxFQUFBQyxjQUFBLFFBQUFDLElBQUEsR0FBQXJCLE1BQUEsQ0FBQXFCLElBQUEsQ0FBQUYsTUFBQSxPQUFBbkIsTUFBQSxDQUFBc0IscUJBQUEsUUFBQUMsT0FBQSxHQUFBdkIsTUFBQSxDQUFBc0IscUJBQUEsQ0FBQUgsTUFBQSxHQUFBQyxjQUFBLEtBQUFHLE9BQUEsR0FBQUEsT0FBQSxDQUFBQyxNQUFBLFdBQUFDLEdBQUEsV0FBQXpCLE1BQUEsQ0FBQTBCLHdCQUFBLENBQUFQLE1BQUEsRUFBQU0sR0FBQSxFQUFBRSxVQUFBLE9BQUFOLElBQUEsQ0FBQU8sSUFBQSxDQUFBQyxLQUFBLENBQUFSLElBQUEsRUFBQUUsT0FBQSxZQUFBRixJQUFBO0FBQUEsU0FBQVMsY0FBQUMsTUFBQSxhQUFBZixDQUFBLE1BQUFBLENBQUEsR0FBQWdCLFNBQUEsQ0FBQWpCLE1BQUEsRUFBQUMsQ0FBQSxVQUFBaUIsTUFBQSxXQUFBRCxTQUFBLENBQUFoQixDQUFBLElBQUFnQixTQUFBLENBQUFoQixDQUFBLFFBQUFBLENBQUEsT0FBQUUsT0FBQSxDQUFBbEIsTUFBQSxDQUFBaUMsTUFBQSxPQUFBQyxPQUFBLFdBQUFDLEdBQUEsSUFBQUMsZUFBQSxDQUFBTCxNQUFBLEVBQUFJLEdBQUEsRUFBQUYsTUFBQSxDQUFBRSxHQUFBLFNBQUFuQyxNQUFBLENBQUFxQyx5QkFBQSxHQUFBckMsTUFBQSxDQUFBc0MsZ0JBQUEsQ0FBQVAsTUFBQSxFQUFBL0IsTUFBQSxDQUFBcUMseUJBQUEsQ0FBQUosTUFBQSxLQUFBZixPQUFBLENBQUFsQixNQUFBLENBQUFpQyxNQUFBLEdBQUFDLE9BQUEsV0FBQUMsR0FBQSxJQUFBbkMsTUFBQSxDQUFBdUMsY0FBQSxDQUFBUixNQUFBLEVBQUFJLEdBQUEsRUFBQW5DLE1BQUEsQ0FBQTBCLHdCQUFBLENBQUFPLE1BQUEsRUFBQUUsR0FBQSxpQkFBQUosTUFBQTtBQUFBLFNBQUFLLGdCQUFBakQsR0FBQSxFQUFBZ0QsR0FBQSxFQUFBSyxLQUFBLElBQUFMLEdBQUEsR0FBQU0sY0FBQSxDQUFBTixHQUFBLE9BQUFBLEdBQUEsSUFBQWhELEdBQUEsSUFBQWEsTUFBQSxDQUFBdUMsY0FBQSxDQUFBcEQsR0FBQSxFQUFBZ0QsR0FBQSxJQUFBSyxLQUFBLEVBQUFBLEtBQUEsRUFBQWIsVUFBQSxRQUFBZSxZQUFBLFFBQUFDLFFBQUEsb0JBQUF4RCxHQUFBLENBQUFnRCxHQUFBLElBQUFLLEtBQUEsV0FBQXJELEdBQUE7QUFBQSxTQUFBc0QsZUFBQUcsR0FBQSxRQUFBVCxHQUFBLEdBQUFVLFlBQUEsQ0FBQUQsR0FBQSxvQkFBQUUsT0FBQSxDQUFBWCxHQUFBLGlCQUFBQSxHQUFBLEdBQUFZLE1BQUEsQ0FBQVosR0FBQTtBQUFBLFNBQUFVLGFBQUFHLEtBQUEsRUFBQUMsSUFBQSxRQUFBSCxPQUFBLENBQUFFLEtBQUEsa0JBQUFBLEtBQUEsa0JBQUFBLEtBQUEsTUFBQUUsSUFBQSxHQUFBRixLQUFBLENBQUFyQyxNQUFBLENBQUF3QyxXQUFBLE9BQUFELElBQUEsS0FBQUUsU0FBQSxRQUFBQyxHQUFBLEdBQUFILElBQUEsQ0FBQS9DLElBQUEsQ0FBQTZDLEtBQUEsRUFBQUMsSUFBQSxvQkFBQUgsT0FBQSxDQUFBTyxHQUFBLHVCQUFBQSxHQUFBLFlBQUExRCxTQUFBLDREQUFBc0QsSUFBQSxnQkFBQUYsTUFBQSxHQUFBTyxNQUFBLEVBQUFOLEtBQUE7QUFBQSxTQUFBTyxvQkFBQSxrQkFkcEQscUpBQUFBLG1CQUFBLFlBQUFBLG9CQUFBLFdBQUFDLE9BQUEsU0FBQUEsT0FBQSxPQUFBQyxFQUFBLEdBQUF6RCxNQUFBLENBQUFDLFNBQUEsRUFBQXlELE1BQUEsR0FBQUQsRUFBQSxDQUFBRSxjQUFBLEVBQUFwQixjQUFBLEdBQUF2QyxNQUFBLENBQUF1QyxjQUFBLGNBQUFwRCxHQUFBLEVBQUFnRCxHQUFBLEVBQUF5QixJQUFBLElBQUF6RSxHQUFBLENBQUFnRCxHQUFBLElBQUF5QixJQUFBLENBQUFwQixLQUFBLEtBQUFxQixPQUFBLHdCQUFBbEQsTUFBQSxHQUFBQSxNQUFBLE9BQUFtRCxjQUFBLEdBQUFELE9BQUEsQ0FBQWpELFFBQUEsa0JBQUFtRCxtQkFBQSxHQUFBRixPQUFBLENBQUFHLGFBQUEsdUJBQUFDLGlCQUFBLEdBQUFKLE9BQUEsQ0FBQUssV0FBQSw4QkFBQUMsT0FBQWhGLEdBQUEsRUFBQWdELEdBQUEsRUFBQUssS0FBQSxXQUFBeEMsTUFBQSxDQUFBdUMsY0FBQSxDQUFBcEQsR0FBQSxFQUFBZ0QsR0FBQSxJQUFBSyxLQUFBLEVBQUFBLEtBQUEsRUFBQWIsVUFBQSxNQUFBZSxZQUFBLE1BQUFDLFFBQUEsU0FBQXhELEdBQUEsQ0FBQWdELEdBQUEsV0FBQWdDLE1BQUEsbUJBQUFDLEdBQUEsSUFBQUQsTUFBQSxZQUFBQSxPQUFBaEYsR0FBQSxFQUFBZ0QsR0FBQSxFQUFBSyxLQUFBLFdBQUFyRCxHQUFBLENBQUFnRCxHQUFBLElBQUFLLEtBQUEsZ0JBQUE2QixLQUFBQyxPQUFBLEVBQUFDLE9BQUEsRUFBQUMsSUFBQSxFQUFBQyxXQUFBLFFBQUFDLGNBQUEsR0FBQUgsT0FBQSxJQUFBQSxPQUFBLENBQUF0RSxTQUFBLFlBQUEwRSxTQUFBLEdBQUFKLE9BQUEsR0FBQUksU0FBQSxFQUFBQyxTQUFBLEdBQUE1RSxNQUFBLENBQUE2RSxNQUFBLENBQUFILGNBQUEsQ0FBQXpFLFNBQUEsR0FBQTZFLE9BQUEsT0FBQUMsT0FBQSxDQUFBTixXQUFBLGdCQUFBbEMsY0FBQSxDQUFBcUMsU0FBQSxlQUFBcEMsS0FBQSxFQUFBd0MsZ0JBQUEsQ0FBQVYsT0FBQSxFQUFBRSxJQUFBLEVBQUFNLE9BQUEsTUFBQUYsU0FBQSxhQUFBSyxTQUFBQyxFQUFBLEVBQUEvRixHQUFBLEVBQUF5RCxHQUFBLG1CQUFBdUMsSUFBQSxZQUFBdkMsR0FBQSxFQUFBc0MsRUFBQSxDQUFBL0UsSUFBQSxDQUFBaEIsR0FBQSxFQUFBeUQsR0FBQSxjQUFBd0IsR0FBQSxhQUFBZSxJQUFBLFdBQUF2QyxHQUFBLEVBQUF3QixHQUFBLFFBQUFaLE9BQUEsQ0FBQWEsSUFBQSxHQUFBQSxJQUFBLE1BQUFlLGdCQUFBLGdCQUFBVCxVQUFBLGNBQUFVLGtCQUFBLGNBQUFDLDJCQUFBLFNBQUFDLGlCQUFBLE9BQUFwQixNQUFBLENBQUFvQixpQkFBQSxFQUFBekIsY0FBQSxxQ0FBQTBCLFFBQUEsR0FBQXhGLE1BQUEsQ0FBQXlGLGNBQUEsRUFBQUMsdUJBQUEsR0FBQUYsUUFBQSxJQUFBQSxRQUFBLENBQUFBLFFBQUEsQ0FBQUcsTUFBQSxRQUFBRCx1QkFBQSxJQUFBQSx1QkFBQSxLQUFBakMsRUFBQSxJQUFBQyxNQUFBLENBQUF2RCxJQUFBLENBQUF1Rix1QkFBQSxFQUFBNUIsY0FBQSxNQUFBeUIsaUJBQUEsR0FBQUcsdUJBQUEsT0FBQUUsRUFBQSxHQUFBTiwwQkFBQSxDQUFBckYsU0FBQSxHQUFBMEUsU0FBQSxDQUFBMUUsU0FBQSxHQUFBRCxNQUFBLENBQUE2RSxNQUFBLENBQUFVLGlCQUFBLFlBQUFNLHNCQUFBNUYsU0FBQSxnQ0FBQWlDLE9BQUEsV0FBQTRELE1BQUEsSUFBQTNCLE1BQUEsQ0FBQWxFLFNBQUEsRUFBQTZGLE1BQUEsWUFBQWxELEdBQUEsZ0JBQUFtRCxPQUFBLENBQUFELE1BQUEsRUFBQWxELEdBQUEsc0JBQUFvRCxjQUFBcEIsU0FBQSxFQUFBcUIsV0FBQSxhQUFBQyxPQUFBSixNQUFBLEVBQUFsRCxHQUFBLEVBQUF1RCxPQUFBLEVBQUFDLE1BQUEsUUFBQUMsTUFBQSxHQUFBcEIsUUFBQSxDQUFBTCxTQUFBLENBQUFrQixNQUFBLEdBQUFsQixTQUFBLEVBQUFoQyxHQUFBLG1CQUFBeUQsTUFBQSxDQUFBbEIsSUFBQSxRQUFBbUIsTUFBQSxHQUFBRCxNQUFBLENBQUF6RCxHQUFBLEVBQUFKLEtBQUEsR0FBQThELE1BQUEsQ0FBQTlELEtBQUEsU0FBQUEsS0FBQSxnQkFBQU0sT0FBQSxDQUFBTixLQUFBLEtBQUFrQixNQUFBLENBQUF2RCxJQUFBLENBQUFxQyxLQUFBLGVBQUF5RCxXQUFBLENBQUFFLE9BQUEsQ0FBQTNELEtBQUEsQ0FBQStELE9BQUEsRUFBQUMsSUFBQSxXQUFBaEUsS0FBQSxJQUFBMEQsTUFBQSxTQUFBMUQsS0FBQSxFQUFBMkQsT0FBQSxFQUFBQyxNQUFBLGdCQUFBaEMsR0FBQSxJQUFBOEIsTUFBQSxVQUFBOUIsR0FBQSxFQUFBK0IsT0FBQSxFQUFBQyxNQUFBLFFBQUFILFdBQUEsQ0FBQUUsT0FBQSxDQUFBM0QsS0FBQSxFQUFBZ0UsSUFBQSxXQUFBQyxTQUFBLElBQUFILE1BQUEsQ0FBQTlELEtBQUEsR0FBQWlFLFNBQUEsRUFBQU4sT0FBQSxDQUFBRyxNQUFBLGdCQUFBSSxLQUFBLFdBQUFSLE1BQUEsVUFBQVEsS0FBQSxFQUFBUCxPQUFBLEVBQUFDLE1BQUEsU0FBQUEsTUFBQSxDQUFBQyxNQUFBLENBQUF6RCxHQUFBLFNBQUErRCxlQUFBLEVBQUFwRSxjQUFBLG9CQUFBQyxLQUFBLFdBQUFBLE1BQUFzRCxNQUFBLEVBQUFsRCxHQUFBLGFBQUFnRSwyQkFBQSxlQUFBWCxXQUFBLFdBQUFFLE9BQUEsRUFBQUMsTUFBQSxJQUFBRixNQUFBLENBQUFKLE1BQUEsRUFBQWxELEdBQUEsRUFBQXVELE9BQUEsRUFBQUMsTUFBQSxnQkFBQU8sZUFBQSxHQUFBQSxlQUFBLEdBQUFBLGVBQUEsQ0FBQUgsSUFBQSxDQUFBSSwwQkFBQSxFQUFBQSwwQkFBQSxJQUFBQSwwQkFBQSxxQkFBQTVCLGlCQUFBVixPQUFBLEVBQUFFLElBQUEsRUFBQU0sT0FBQSxRQUFBK0IsS0FBQSxzQ0FBQWYsTUFBQSxFQUFBbEQsR0FBQSx3QkFBQWlFLEtBQUEsWUFBQUMsS0FBQSxzREFBQUQsS0FBQSxvQkFBQWYsTUFBQSxRQUFBbEQsR0FBQSxTQUFBbUUsVUFBQSxXQUFBakMsT0FBQSxDQUFBZ0IsTUFBQSxHQUFBQSxNQUFBLEVBQUFoQixPQUFBLENBQUFsQyxHQUFBLEdBQUFBLEdBQUEsVUFBQW9FLFFBQUEsR0FBQWxDLE9BQUEsQ0FBQWtDLFFBQUEsTUFBQUEsUUFBQSxRQUFBQyxjQUFBLEdBQUFDLG1CQUFBLENBQUFGLFFBQUEsRUFBQWxDLE9BQUEsT0FBQW1DLGNBQUEsUUFBQUEsY0FBQSxLQUFBN0IsZ0JBQUEsbUJBQUE2QixjQUFBLHFCQUFBbkMsT0FBQSxDQUFBZ0IsTUFBQSxFQUFBaEIsT0FBQSxDQUFBcUMsSUFBQSxHQUFBckMsT0FBQSxDQUFBc0MsS0FBQSxHQUFBdEMsT0FBQSxDQUFBbEMsR0FBQSxzQkFBQWtDLE9BQUEsQ0FBQWdCLE1BQUEsNkJBQUFlLEtBQUEsUUFBQUEsS0FBQSxnQkFBQS9CLE9BQUEsQ0FBQWxDLEdBQUEsRUFBQWtDLE9BQUEsQ0FBQXVDLGlCQUFBLENBQUF2QyxPQUFBLENBQUFsQyxHQUFBLHVCQUFBa0MsT0FBQSxDQUFBZ0IsTUFBQSxJQUFBaEIsT0FBQSxDQUFBd0MsTUFBQSxXQUFBeEMsT0FBQSxDQUFBbEMsR0FBQSxHQUFBaUUsS0FBQSxvQkFBQVIsTUFBQSxHQUFBcEIsUUFBQSxDQUFBWCxPQUFBLEVBQUFFLElBQUEsRUFBQU0sT0FBQSxvQkFBQXVCLE1BQUEsQ0FBQWxCLElBQUEsUUFBQTBCLEtBQUEsR0FBQS9CLE9BQUEsQ0FBQXlDLElBQUEsbUNBQUFsQixNQUFBLENBQUF6RCxHQUFBLEtBQUF3QyxnQkFBQSxxQkFBQTVDLEtBQUEsRUFBQTZELE1BQUEsQ0FBQXpELEdBQUEsRUFBQTJFLElBQUEsRUFBQXpDLE9BQUEsQ0FBQXlDLElBQUEsa0JBQUFsQixNQUFBLENBQUFsQixJQUFBLEtBQUEwQixLQUFBLGdCQUFBL0IsT0FBQSxDQUFBZ0IsTUFBQSxZQUFBaEIsT0FBQSxDQUFBbEMsR0FBQSxHQUFBeUQsTUFBQSxDQUFBekQsR0FBQSxtQkFBQXNFLG9CQUFBRixRQUFBLEVBQUFsQyxPQUFBLFFBQUEwQyxVQUFBLEdBQUExQyxPQUFBLENBQUFnQixNQUFBLEVBQUFBLE1BQUEsR0FBQWtCLFFBQUEsQ0FBQXBHLFFBQUEsQ0FBQTRHLFVBQUEsT0FBQXBFLFNBQUEsS0FBQTBDLE1BQUEsU0FBQWhCLE9BQUEsQ0FBQWtDLFFBQUEscUJBQUFRLFVBQUEsSUFBQVIsUUFBQSxDQUFBcEcsUUFBQSxlQUFBa0UsT0FBQSxDQUFBZ0IsTUFBQSxhQUFBaEIsT0FBQSxDQUFBbEMsR0FBQSxHQUFBUSxTQUFBLEVBQUE4RCxtQkFBQSxDQUFBRixRQUFBLEVBQUFsQyxPQUFBLGVBQUFBLE9BQUEsQ0FBQWdCLE1BQUEsa0JBQUEwQixVQUFBLEtBQUExQyxPQUFBLENBQUFnQixNQUFBLFlBQUFoQixPQUFBLENBQUFsQyxHQUFBLE9BQUFqRCxTQUFBLHVDQUFBNkgsVUFBQSxpQkFBQXBDLGdCQUFBLE1BQUFpQixNQUFBLEdBQUFwQixRQUFBLENBQUFhLE1BQUEsRUFBQWtCLFFBQUEsQ0FBQXBHLFFBQUEsRUFBQWtFLE9BQUEsQ0FBQWxDLEdBQUEsbUJBQUF5RCxNQUFBLENBQUFsQixJQUFBLFNBQUFMLE9BQUEsQ0FBQWdCLE1BQUEsWUFBQWhCLE9BQUEsQ0FBQWxDLEdBQUEsR0FBQXlELE1BQUEsQ0FBQXpELEdBQUEsRUFBQWtDLE9BQUEsQ0FBQWtDLFFBQUEsU0FBQTVCLGdCQUFBLE1BQUFxQyxJQUFBLEdBQUFwQixNQUFBLENBQUF6RCxHQUFBLFNBQUE2RSxJQUFBLEdBQUFBLElBQUEsQ0FBQUYsSUFBQSxJQUFBekMsT0FBQSxDQUFBa0MsUUFBQSxDQUFBVSxVQUFBLElBQUFELElBQUEsQ0FBQWpGLEtBQUEsRUFBQXNDLE9BQUEsQ0FBQTZDLElBQUEsR0FBQVgsUUFBQSxDQUFBWSxPQUFBLGVBQUE5QyxPQUFBLENBQUFnQixNQUFBLEtBQUFoQixPQUFBLENBQUFnQixNQUFBLFdBQUFoQixPQUFBLENBQUFsQyxHQUFBLEdBQUFRLFNBQUEsR0FBQTBCLE9BQUEsQ0FBQWtDLFFBQUEsU0FBQTVCLGdCQUFBLElBQUFxQyxJQUFBLElBQUEzQyxPQUFBLENBQUFnQixNQUFBLFlBQUFoQixPQUFBLENBQUFsQyxHQUFBLE9BQUFqRCxTQUFBLHNDQUFBbUYsT0FBQSxDQUFBa0MsUUFBQSxTQUFBNUIsZ0JBQUEsY0FBQXlDLGFBQUFDLElBQUEsUUFBQUMsS0FBQSxLQUFBQyxNQUFBLEVBQUFGLElBQUEsWUFBQUEsSUFBQSxLQUFBQyxLQUFBLENBQUFFLFFBQUEsR0FBQUgsSUFBQSxXQUFBQSxJQUFBLEtBQUFDLEtBQUEsQ0FBQUcsVUFBQSxHQUFBSixJQUFBLEtBQUFDLEtBQUEsQ0FBQUksUUFBQSxHQUFBTCxJQUFBLFdBQUFNLFVBQUEsQ0FBQXhHLElBQUEsQ0FBQW1HLEtBQUEsY0FBQU0sY0FBQU4sS0FBQSxRQUFBMUIsTUFBQSxHQUFBMEIsS0FBQSxDQUFBTyxVQUFBLFFBQUFqQyxNQUFBLENBQUFsQixJQUFBLG9CQUFBa0IsTUFBQSxDQUFBekQsR0FBQSxFQUFBbUYsS0FBQSxDQUFBTyxVQUFBLEdBQUFqQyxNQUFBLGFBQUF0QixRQUFBTixXQUFBLFNBQUEyRCxVQUFBLE1BQUFKLE1BQUEsYUFBQXZELFdBQUEsQ0FBQXZDLE9BQUEsQ0FBQTJGLFlBQUEsY0FBQVUsS0FBQSxpQkFBQTVDLE9BQUE2QyxRQUFBLFFBQUFBLFFBQUEsUUFBQUMsY0FBQSxHQUFBRCxRQUFBLENBQUExRSxjQUFBLE9BQUEyRSxjQUFBLFNBQUFBLGNBQUEsQ0FBQXRJLElBQUEsQ0FBQXFJLFFBQUEsNEJBQUFBLFFBQUEsQ0FBQWIsSUFBQSxTQUFBYSxRQUFBLE9BQUFFLEtBQUEsQ0FBQUYsUUFBQSxDQUFBekgsTUFBQSxTQUFBQyxDQUFBLE9BQUEyRyxJQUFBLFlBQUFBLEtBQUEsYUFBQTNHLENBQUEsR0FBQXdILFFBQUEsQ0FBQXpILE1BQUEsT0FBQTJDLE1BQUEsQ0FBQXZELElBQUEsQ0FBQXFJLFFBQUEsRUFBQXhILENBQUEsVUFBQTJHLElBQUEsQ0FBQW5GLEtBQUEsR0FBQWdHLFFBQUEsQ0FBQXhILENBQUEsR0FBQTJHLElBQUEsQ0FBQUosSUFBQSxPQUFBSSxJQUFBLFNBQUFBLElBQUEsQ0FBQW5GLEtBQUEsR0FBQVksU0FBQSxFQUFBdUUsSUFBQSxDQUFBSixJQUFBLE9BQUFJLElBQUEsWUFBQUEsSUFBQSxDQUFBQSxJQUFBLEdBQUFBLElBQUEsZUFBQUEsSUFBQSxFQUFBWixVQUFBLGVBQUFBLFdBQUEsYUFBQXZFLEtBQUEsRUFBQVksU0FBQSxFQUFBbUUsSUFBQSxpQkFBQWxDLGlCQUFBLENBQUFwRixTQUFBLEdBQUFxRiwwQkFBQSxFQUFBL0MsY0FBQSxDQUFBcUQsRUFBQSxtQkFBQXBELEtBQUEsRUFBQThDLDBCQUFBLEVBQUE1QyxZQUFBLFNBQUFILGNBQUEsQ0FBQStDLDBCQUFBLG1CQUFBOUMsS0FBQSxFQUFBNkMsaUJBQUEsRUFBQTNDLFlBQUEsU0FBQTJDLGlCQUFBLENBQUFzRCxXQUFBLEdBQUF4RSxNQUFBLENBQUFtQiwwQkFBQSxFQUFBckIsaUJBQUEsd0JBQUFULE9BQUEsQ0FBQW9GLG1CQUFBLGFBQUFDLE1BQUEsUUFBQUMsSUFBQSx3QkFBQUQsTUFBQSxJQUFBQSxNQUFBLENBQUF4SSxXQUFBLFdBQUF5SSxJQUFBLEtBQUFBLElBQUEsS0FBQXpELGlCQUFBLDZCQUFBeUQsSUFBQSxDQUFBSCxXQUFBLElBQUFHLElBQUEsQ0FBQXhJLElBQUEsT0FBQWtELE9BQUEsQ0FBQXVGLElBQUEsYUFBQUYsTUFBQSxXQUFBN0ksTUFBQSxDQUFBZ0osY0FBQSxHQUFBaEosTUFBQSxDQUFBZ0osY0FBQSxDQUFBSCxNQUFBLEVBQUF2RCwwQkFBQSxLQUFBdUQsTUFBQSxDQUFBSSxTQUFBLEdBQUEzRCwwQkFBQSxFQUFBbkIsTUFBQSxDQUFBMEUsTUFBQSxFQUFBNUUsaUJBQUEseUJBQUE0RSxNQUFBLENBQUE1SSxTQUFBLEdBQUFELE1BQUEsQ0FBQTZFLE1BQUEsQ0FBQWUsRUFBQSxHQUFBaUQsTUFBQSxLQUFBckYsT0FBQSxDQUFBMEYsS0FBQSxhQUFBdEcsR0FBQSxhQUFBMkQsT0FBQSxFQUFBM0QsR0FBQSxPQUFBaUQscUJBQUEsQ0FBQUcsYUFBQSxDQUFBL0YsU0FBQSxHQUFBa0UsTUFBQSxDQUFBNkIsYUFBQSxDQUFBL0YsU0FBQSxFQUFBOEQsbUJBQUEsaUNBQUFQLE9BQUEsQ0FBQXdDLGFBQUEsR0FBQUEsYUFBQSxFQUFBeEMsT0FBQSxDQUFBMkYsS0FBQSxhQUFBN0UsT0FBQSxFQUFBQyxPQUFBLEVBQUFDLElBQUEsRUFBQUMsV0FBQSxFQUFBd0IsV0FBQSxlQUFBQSxXQUFBLEtBQUFBLFdBQUEsR0FBQW1ELE9BQUEsT0FBQTFJLElBQUEsT0FBQXNGLGFBQUEsQ0FBQTNCLElBQUEsQ0FBQUMsT0FBQSxFQUFBQyxPQUFBLEVBQUFDLElBQUEsRUFBQUMsV0FBQSxHQUFBd0IsV0FBQSxVQUFBekMsT0FBQSxDQUFBb0YsbUJBQUEsQ0FBQXJFLE9BQUEsSUFBQTdELElBQUEsR0FBQUEsSUFBQSxDQUFBaUgsSUFBQSxHQUFBbkIsSUFBQSxXQUFBRixNQUFBLFdBQUFBLE1BQUEsQ0FBQWlCLElBQUEsR0FBQWpCLE1BQUEsQ0FBQTlELEtBQUEsR0FBQTlCLElBQUEsQ0FBQWlILElBQUEsV0FBQTlCLHFCQUFBLENBQUFELEVBQUEsR0FBQXpCLE1BQUEsQ0FBQXlCLEVBQUEsRUFBQTNCLGlCQUFBLGdCQUFBRSxNQUFBLENBQUF5QixFQUFBLEVBQUE5QixjQUFBLGlDQUFBSyxNQUFBLENBQUF5QixFQUFBLDZEQUFBcEMsT0FBQSxDQUFBbkMsSUFBQSxhQUFBZ0ksR0FBQSxRQUFBbEksTUFBQSxHQUFBbkIsTUFBQSxDQUFBcUosR0FBQSxHQUFBaEksSUFBQSxnQkFBQWMsR0FBQSxJQUFBaEIsTUFBQSxFQUFBRSxJQUFBLENBQUFPLElBQUEsQ0FBQU8sR0FBQSxVQUFBZCxJQUFBLENBQUFpSSxPQUFBLGFBQUEzQixLQUFBLFdBQUF0RyxJQUFBLENBQUFOLE1BQUEsU0FBQW9CLEdBQUEsR0FBQWQsSUFBQSxDQUFBa0ksR0FBQSxRQUFBcEgsR0FBQSxJQUFBaEIsTUFBQSxTQUFBd0csSUFBQSxDQUFBbkYsS0FBQSxHQUFBTCxHQUFBLEVBQUF3RixJQUFBLENBQUFKLElBQUEsT0FBQUksSUFBQSxXQUFBQSxJQUFBLENBQUFKLElBQUEsT0FBQUksSUFBQSxRQUFBbkUsT0FBQSxDQUFBbUMsTUFBQSxHQUFBQSxNQUFBLEVBQUFaLE9BQUEsQ0FBQTlFLFNBQUEsS0FBQUksV0FBQSxFQUFBMEUsT0FBQSxFQUFBd0QsS0FBQSxXQUFBQSxNQUFBaUIsYUFBQSxhQUFBQyxJQUFBLFdBQUE5QixJQUFBLFdBQUFSLElBQUEsUUFBQUMsS0FBQSxHQUFBaEUsU0FBQSxPQUFBbUUsSUFBQSxZQUFBUCxRQUFBLGNBQUFsQixNQUFBLGdCQUFBbEQsR0FBQSxHQUFBUSxTQUFBLE9BQUFnRixVQUFBLENBQUFsRyxPQUFBLENBQUFtRyxhQUFBLElBQUFtQixhQUFBLFdBQUFsSixJQUFBLGtCQUFBQSxJQUFBLENBQUFvSixNQUFBLE9BQUFoRyxNQUFBLENBQUF2RCxJQUFBLE9BQUFHLElBQUEsTUFBQW9JLEtBQUEsRUFBQXBJLElBQUEsQ0FBQUYsS0FBQSxjQUFBRSxJQUFBLElBQUE4QyxTQUFBLE1BQUF1RyxJQUFBLFdBQUFBLEtBQUEsU0FBQXBDLElBQUEsV0FBQXFDLFVBQUEsUUFBQXhCLFVBQUEsSUFBQUUsVUFBQSxrQkFBQXNCLFVBQUEsQ0FBQXpFLElBQUEsUUFBQXlFLFVBQUEsQ0FBQWhILEdBQUEsY0FBQWlILElBQUEsS0FBQXhDLGlCQUFBLFdBQUFBLGtCQUFBeUMsU0FBQSxhQUFBdkMsSUFBQSxRQUFBdUMsU0FBQSxNQUFBaEYsT0FBQSxrQkFBQWlGLE9BQUFDLEdBQUEsRUFBQUMsTUFBQSxXQUFBNUQsTUFBQSxDQUFBbEIsSUFBQSxZQUFBa0IsTUFBQSxDQUFBekQsR0FBQSxHQUFBa0gsU0FBQSxFQUFBaEYsT0FBQSxDQUFBNkMsSUFBQSxHQUFBcUMsR0FBQSxFQUFBQyxNQUFBLEtBQUFuRixPQUFBLENBQUFnQixNQUFBLFdBQUFoQixPQUFBLENBQUFsQyxHQUFBLEdBQUFRLFNBQUEsS0FBQTZHLE1BQUEsYUFBQWpKLENBQUEsUUFBQW9ILFVBQUEsQ0FBQXJILE1BQUEsTUFBQUMsQ0FBQSxTQUFBQSxDQUFBLFFBQUErRyxLQUFBLFFBQUFLLFVBQUEsQ0FBQXBILENBQUEsR0FBQXFGLE1BQUEsR0FBQTBCLEtBQUEsQ0FBQU8sVUFBQSxpQkFBQVAsS0FBQSxDQUFBQyxNQUFBLFNBQUErQixNQUFBLGFBQUFoQyxLQUFBLENBQUFDLE1BQUEsU0FBQXlCLElBQUEsUUFBQVMsUUFBQSxHQUFBeEcsTUFBQSxDQUFBdkQsSUFBQSxDQUFBNEgsS0FBQSxlQUFBb0MsVUFBQSxHQUFBekcsTUFBQSxDQUFBdkQsSUFBQSxDQUFBNEgsS0FBQSxxQkFBQW1DLFFBQUEsSUFBQUMsVUFBQSxhQUFBVixJQUFBLEdBQUExQixLQUFBLENBQUFFLFFBQUEsU0FBQThCLE1BQUEsQ0FBQWhDLEtBQUEsQ0FBQUUsUUFBQSxnQkFBQXdCLElBQUEsR0FBQTFCLEtBQUEsQ0FBQUcsVUFBQSxTQUFBNkIsTUFBQSxDQUFBaEMsS0FBQSxDQUFBRyxVQUFBLGNBQUFnQyxRQUFBLGFBQUFULElBQUEsR0FBQTFCLEtBQUEsQ0FBQUUsUUFBQSxTQUFBOEIsTUFBQSxDQUFBaEMsS0FBQSxDQUFBRSxRQUFBLHFCQUFBa0MsVUFBQSxZQUFBckQsS0FBQSxxREFBQTJDLElBQUEsR0FBQTFCLEtBQUEsQ0FBQUcsVUFBQSxTQUFBNkIsTUFBQSxDQUFBaEMsS0FBQSxDQUFBRyxVQUFBLFlBQUFaLE1BQUEsV0FBQUEsT0FBQW5DLElBQUEsRUFBQXZDLEdBQUEsYUFBQTVCLENBQUEsUUFBQW9ILFVBQUEsQ0FBQXJILE1BQUEsTUFBQUMsQ0FBQSxTQUFBQSxDQUFBLFFBQUErRyxLQUFBLFFBQUFLLFVBQUEsQ0FBQXBILENBQUEsT0FBQStHLEtBQUEsQ0FBQUMsTUFBQSxTQUFBeUIsSUFBQSxJQUFBL0YsTUFBQSxDQUFBdkQsSUFBQSxDQUFBNEgsS0FBQSx3QkFBQTBCLElBQUEsR0FBQTFCLEtBQUEsQ0FBQUcsVUFBQSxRQUFBa0MsWUFBQSxHQUFBckMsS0FBQSxhQUFBcUMsWUFBQSxpQkFBQWpGLElBQUEsbUJBQUFBLElBQUEsS0FBQWlGLFlBQUEsQ0FBQXBDLE1BQUEsSUFBQXBGLEdBQUEsSUFBQUEsR0FBQSxJQUFBd0gsWUFBQSxDQUFBbEMsVUFBQSxLQUFBa0MsWUFBQSxjQUFBL0QsTUFBQSxHQUFBK0QsWUFBQSxHQUFBQSxZQUFBLENBQUE5QixVQUFBLGNBQUFqQyxNQUFBLENBQUFsQixJQUFBLEdBQUFBLElBQUEsRUFBQWtCLE1BQUEsQ0FBQXpELEdBQUEsR0FBQUEsR0FBQSxFQUFBd0gsWUFBQSxTQUFBdEUsTUFBQSxnQkFBQTZCLElBQUEsR0FBQXlDLFlBQUEsQ0FBQWxDLFVBQUEsRUFBQTlDLGdCQUFBLFNBQUFpRixRQUFBLENBQUFoRSxNQUFBLE1BQUFnRSxRQUFBLFdBQUFBLFNBQUFoRSxNQUFBLEVBQUE4QixRQUFBLG9CQUFBOUIsTUFBQSxDQUFBbEIsSUFBQSxRQUFBa0IsTUFBQSxDQUFBekQsR0FBQSxxQkFBQXlELE1BQUEsQ0FBQWxCLElBQUEsbUJBQUFrQixNQUFBLENBQUFsQixJQUFBLFFBQUF3QyxJQUFBLEdBQUF0QixNQUFBLENBQUF6RCxHQUFBLGdCQUFBeUQsTUFBQSxDQUFBbEIsSUFBQSxTQUFBMEUsSUFBQSxRQUFBakgsR0FBQSxHQUFBeUQsTUFBQSxDQUFBekQsR0FBQSxPQUFBa0QsTUFBQSxrQkFBQTZCLElBQUEseUJBQUF0QixNQUFBLENBQUFsQixJQUFBLElBQUFnRCxRQUFBLFVBQUFSLElBQUEsR0FBQVEsUUFBQSxHQUFBL0MsZ0JBQUEsS0FBQWtGLE1BQUEsV0FBQUEsT0FBQXBDLFVBQUEsYUFBQWxILENBQUEsUUFBQW9ILFVBQUEsQ0FBQXJILE1BQUEsTUFBQUMsQ0FBQSxTQUFBQSxDQUFBLFFBQUErRyxLQUFBLFFBQUFLLFVBQUEsQ0FBQXBILENBQUEsT0FBQStHLEtBQUEsQ0FBQUcsVUFBQSxLQUFBQSxVQUFBLGNBQUFtQyxRQUFBLENBQUF0QyxLQUFBLENBQUFPLFVBQUEsRUFBQVAsS0FBQSxDQUFBSSxRQUFBLEdBQUFFLGFBQUEsQ0FBQU4sS0FBQSxHQUFBM0MsZ0JBQUEseUJBQUFtRixPQUFBdkMsTUFBQSxhQUFBaEgsQ0FBQSxRQUFBb0gsVUFBQSxDQUFBckgsTUFBQSxNQUFBQyxDQUFBLFNBQUFBLENBQUEsUUFBQStHLEtBQUEsUUFBQUssVUFBQSxDQUFBcEgsQ0FBQSxPQUFBK0csS0FBQSxDQUFBQyxNQUFBLEtBQUFBLE1BQUEsUUFBQTNCLE1BQUEsR0FBQTBCLEtBQUEsQ0FBQU8sVUFBQSxrQkFBQWpDLE1BQUEsQ0FBQWxCLElBQUEsUUFBQXFGLE1BQUEsR0FBQW5FLE1BQUEsQ0FBQXpELEdBQUEsRUFBQXlGLGFBQUEsQ0FBQU4sS0FBQSxZQUFBeUMsTUFBQSxnQkFBQTFELEtBQUEsOEJBQUEyRCxhQUFBLFdBQUFBLGNBQUFqQyxRQUFBLEVBQUFkLFVBQUEsRUFBQUUsT0FBQSxnQkFBQVosUUFBQSxLQUFBcEcsUUFBQSxFQUFBK0UsTUFBQSxDQUFBNkMsUUFBQSxHQUFBZCxVQUFBLEVBQUFBLFVBQUEsRUFBQUUsT0FBQSxFQUFBQSxPQUFBLG9CQUFBOUIsTUFBQSxVQUFBbEQsR0FBQSxHQUFBUSxTQUFBLEdBQUFnQyxnQkFBQSxPQUFBNUIsT0FBQTtBQUFBLFNBQUFrSCxtQkFBQUMsR0FBQSxFQUFBeEUsT0FBQSxFQUFBQyxNQUFBLEVBQUF3RSxLQUFBLEVBQUFDLE1BQUEsRUFBQTFJLEdBQUEsRUFBQVMsR0FBQSxjQUFBNkUsSUFBQSxHQUFBa0QsR0FBQSxDQUFBeEksR0FBQSxFQUFBUyxHQUFBLE9BQUFKLEtBQUEsR0FBQWlGLElBQUEsQ0FBQWpGLEtBQUEsV0FBQWtFLEtBQUEsSUFBQU4sTUFBQSxDQUFBTSxLQUFBLGlCQUFBZSxJQUFBLENBQUFGLElBQUEsSUFBQXBCLE9BQUEsQ0FBQTNELEtBQUEsWUFBQTRHLE9BQUEsQ0FBQWpELE9BQUEsQ0FBQTNELEtBQUEsRUFBQWdFLElBQUEsQ0FBQW9FLEtBQUEsRUFBQUMsTUFBQTtBQUFBLFNBQUFDLGtCQUFBNUYsRUFBQSw2QkFBQVYsSUFBQSxTQUFBdUcsSUFBQSxHQUFBL0ksU0FBQSxhQUFBb0gsT0FBQSxXQUFBakQsT0FBQSxFQUFBQyxNQUFBLFFBQUF1RSxHQUFBLEdBQUF6RixFQUFBLENBQUFyRCxLQUFBLENBQUEyQyxJQUFBLEVBQUF1RyxJQUFBLFlBQUFILE1BQUFwSSxLQUFBLElBQUFrSSxrQkFBQSxDQUFBQyxHQUFBLEVBQUF4RSxPQUFBLEVBQUFDLE1BQUEsRUFBQXdFLEtBQUEsRUFBQUMsTUFBQSxVQUFBckksS0FBQSxjQUFBcUksT0FBQXpHLEdBQUEsSUFBQXNHLGtCQUFBLENBQUFDLEdBQUEsRUFBQXhFLE9BQUEsRUFBQUMsTUFBQSxFQUFBd0UsS0FBQSxFQUFBQyxNQUFBLFdBQUF6RyxHQUFBLEtBQUF3RyxLQUFBLENBQUF4SCxTQUFBO0FBaUJBLElBQU00SCxnQkFBZ0I7RUFBQSxJQUFBQyxJQUFBLEdBQUFILGlCQUFBLGVBQUF2SCxtQkFBQSxHQUFBd0YsSUFBQSxDQUFHLFNBQUFtQyxRQUFPQyxHQUFZLEVBQUU5SCxHQUFhO0lBQUEsSUFBQStILFNBQUEsRUFBQUMsUUFBQSxFQUFBQyxNQUFBO0lBQUEsT0FBQS9ILG1CQUFBLEdBQUFjLElBQUEsVUFBQWtILFNBQUFDLFFBQUE7TUFBQSxrQkFBQUEsUUFBQSxDQUFBL0IsSUFBQSxHQUFBK0IsUUFBQSxDQUFBN0QsSUFBQTtRQUFBO1VBQUE2RCxRQUFBLENBQUEvQixJQUFBO1VBRW5ENEIsUUFBUSxJQUFBRCxTQUFBLEdBQUdELEdBQUcsQ0FBQ00sSUFBSSxjQUFBTCxTQUFBLHVCQUFSQSxTQUFBLENBQVVNLE1BQU07VUFBQUYsUUFBQSxDQUFBN0QsSUFBQTtVQUFBLE9BRUlnRSx1QkFBVyxDQUFDQyxRQUFRLENBQUNQLFFBQVEsQ0FBQyxDQUNqRVEsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUNsQkMsUUFBUSxDQUFDLGFBQWEsQ0FBQztRQUFBO1VBRm5CUixNQUFzQixHQUFBRSxRQUFBLENBQUFyRSxJQUFBO1VBQUEsTUFJeEIsQ0FBQ21FLE1BQU0sSUFBSUEsTUFBTSxDQUFDUyxhQUFhLElBQUksVUFBVTtZQUFBUCxRQUFBLENBQUE3RCxJQUFBO1lBQUE7VUFBQTtVQUFBLE9BQUE2RCxRQUFBLENBQUFsRSxNQUFBLFdBQ3pDakUsR0FBRyxDQUFDMkksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsT0FBTyxFQUFFO1VBQW9CLENBQUMsQ0FBQztRQUFBO1VBQUEsT0FBQVYsUUFBQSxDQUFBbEUsTUFBQSxXQUd2RGpFLEdBQUcsQ0FBQzJJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVYLE1BQU0sRUFBTkE7VUFBTyxDQUFDLENBQUM7UUFBQTtVQUFBRSxRQUFBLENBQUEvQixJQUFBO1VBQUErQixRQUFBLENBQUFXLEVBQUEsR0FBQVgsUUFBQTtVQUV2Q1ksT0FBTyxDQUFDQyxHQUFHLENBQUFiLFFBQUEsQ0FBQVcsRUFBTSxDQUFDO1VBQUEsT0FBQVgsUUFBQSxDQUFBbEUsTUFBQSxXQUNYakUsR0FBRyxDQUFDaUosVUFBVSxDQUFDLEdBQUcsQ0FBQztRQUFBO1FBQUE7VUFBQSxPQUFBZCxRQUFBLENBQUE3QixJQUFBO01BQUE7SUFBQSxHQUFBdUIsT0FBQTtFQUFBLENBRTNCO0VBQUEsZ0JBakJLRixnQkFBZ0JBLENBQUF1QixFQUFBLEVBQUFDLEdBQUE7SUFBQSxPQUFBdkIsSUFBQSxDQUFBcEosS0FBQSxPQUFBRyxTQUFBO0VBQUE7QUFBQSxHQWlCckI7QUFFRCxJQUFNeUssc0JBQXNCO0VBQUEsSUFBQUMsS0FBQSxHQUFBNUIsaUJBQUEsZUFBQXZILG1CQUFBLEdBQUF3RixJQUFBLENBQUcsU0FBQTRELFNBQU94QixHQUFZLEVBQUU5SCxHQUFhO0lBQUEsSUFBQXVKLFFBQUEsRUFBQXRCLE1BQUEsRUFBQXVCLGFBQUEsRUFBQXZNLElBQUEsRUFBQXdNLE1BQUEsRUFBQUMsUUFBQSxFQUFBQyxXQUFBLEVBQUFDLGNBQUEsRUFBQUMsY0FBQSxFQUFBQyxPQUFBLEVBQUFDLFdBQUE7SUFBQSxPQUFBN0osbUJBQUEsR0FBQWMsSUFBQSxVQUFBZ0osVUFBQUMsU0FBQTtNQUFBLGtCQUFBQSxTQUFBLENBQUE3RCxJQUFBLEdBQUE2RCxTQUFBLENBQUEzRixJQUFBO1FBQUE7VUFBQTJGLFNBQUEsQ0FBQTdELElBQUE7VUFFekRtRCxRQUFRLEdBQUd6QixHQUFHLENBQUNvQyxNQUFNLENBQUNYLFFBQVE7VUFBQVUsU0FBQSxDQUFBM0YsSUFBQTtVQUFBLE9BRUNnRSx1QkFBVyxDQUFDNkIsT0FBTyxDQUFDO1lBQ3hEWixRQUFRLEVBQVJBO1VBQ0QsQ0FBQyxDQUFDLENBQ0FmLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FDbEJDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUMxQkEsUUFBUSxDQUFDLGFBQWEsQ0FBQztRQUFBO1VBTG5CUixNQUFzQixHQUFBZ0MsU0FBQSxDQUFBbkcsSUFBQTtVQUFBLE1BT3hCLENBQUNtRSxNQUFNLElBQUlBLE1BQU0sQ0FBQ1MsYUFBYSxJQUFJLFVBQVU7WUFBQXVCLFNBQUEsQ0FBQTNGLElBQUE7WUFBQTtVQUFBO1VBQUEsT0FBQTJGLFNBQUEsQ0FBQWhHLE1BQUEsV0FDekNqRSxHQUFHLENBQUMySSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxPQUFPLEVBQUU7VUFBb0IsQ0FBQyxDQUFDO1FBQUE7VUFBQW9CLFNBQUEsQ0FBQTNGLElBQUE7VUFBQSxPQUduQjhGLG9CQUFRLENBQUNDLElBQUksQ0FBQztZQUN4RHJDLFFBQVEsRUFBRUMsTUFBTSxDQUFDcUMsRUFBRTtZQUNuQjNCLE1BQU0sRUFBRTtVQUNULENBQUMsQ0FBQztRQUFBO1VBSElhLGFBQTRCLEdBQUFTLFNBQUEsQ0FBQW5HLElBQUE7VUFNakM3RyxJQUFJLEdBUURnTCxNQUFNLENBUlRoTCxJQUFJLEVBQ0p3TSxNQUFNLEdBT0h4QixNQUFNLENBUFR3QixNQUFNLEVBQ05DLFFBQVEsR0FNTHpCLE1BQU0sQ0FOVHlCLFFBQVEsRUFDUkMsV0FBVyxHQUtSMUIsTUFBTSxDQUxUMEIsV0FBVyxFQUNYQyxjQUFjLEdBSVgzQixNQUFNLENBSlQyQixjQUFjLEVBQ2RDLGNBQWMsR0FHWDVCLE1BQU0sQ0FIVDRCLGNBQWMsRUFDZEMsT0FBTyxHQUVKN0IsTUFBTSxDQUZUNkIsT0FBTyxFQUNQQyxXQUFXLEdBQ1I5QixNQUFNLENBRFQ4QixXQUFXO1VBQUEsT0FBQUUsU0FBQSxDQUFBaEcsTUFBQSxXQUdMakUsR0FBRyxDQUFDMkksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFDM0IzTCxJQUFJLEVBQUpBLElBQUk7WUFDSndNLE1BQU0sRUFBTkEsTUFBTTtZQUNOQyxRQUFRLEVBQVJBLFFBQVE7WUFDUkMsV0FBVyxFQUFYQSxXQUFXO1lBQ1hDLGNBQWMsRUFBZEEsY0FBYztZQUNkQyxjQUFjLEVBQWRBLGNBQWM7WUFDZEwsYUFBYSxFQUFFQSxhQUFhLENBQUM5TCxNQUFNO1lBQ25Db00sT0FBTyxFQUFFO2NBQ1JTLElBQUksRUFBRVQsT0FBTyxDQUFDUyxJQUFJO2NBQ2xCQyxPQUFPLEVBQUVWLE9BQU8sQ0FBQ1UsT0FBTztjQUN4QmhILEtBQUssRUFBRXNHLE9BQU8sQ0FBQ3RHO1lBQ2hCLENBQUM7WUFDRHVHLFdBQVcsRUFBWEE7VUFDRCxDQUFDLENBQUM7UUFBQTtVQUFBRSxTQUFBLENBQUE3RCxJQUFBO1VBQUE2RCxTQUFBLENBQUFuQixFQUFBLEdBQUFtQixTQUFBO1VBRUZsQixPQUFPLENBQUNDLEdBQUcsQ0FBQWlCLFNBQUEsQ0FBQW5CLEVBQU0sQ0FBQztVQUFBLE9BQUFtQixTQUFBLENBQUFoRyxNQUFBLFdBQ1hqRSxHQUFHLENBQUNpSixVQUFVLENBQUMsR0FBRyxDQUFDO1FBQUE7UUFBQTtVQUFBLE9BQUFnQixTQUFBLENBQUEzRCxJQUFBO01BQUE7SUFBQSxHQUFBZ0QsUUFBQTtFQUFBLENBRTNCO0VBQUEsZ0JBbERLRixzQkFBc0JBLENBQUFxQixHQUFBLEVBQUFDLEdBQUE7SUFBQSxPQUFBckIsS0FBQSxDQUFBN0ssS0FBQSxPQUFBRyxTQUFBO0VBQUE7QUFBQSxHQWtEM0I7QUFFRCxJQUFNZ00sZUFBZTtFQUFBLElBQUFDLEtBQUEsR0FBQW5ELGlCQUFBLGVBQUF2SCxtQkFBQSxHQUFBd0YsSUFBQSxDQUFHLFNBQUFtRixTQUFPL0MsR0FBWSxFQUFFOUgsR0FBYTtJQUFBLElBQUE4SyxVQUFBO0lBQUEsSUFBQXZCLFFBQUEsRUFBQXZCLFFBQUEsRUFBQStDLFVBQUEsRUFBQXBDLE1BQUEsRUFBQXFDLElBQUEsRUFBQUMsSUFBQSxFQUFBQyxLQUFBLEVBQUFDLFlBQUEsRUFBQUMsYUFBQSxFQUFBbkQsTUFBQSxFQUFBb0QsS0FBQSxFQUFBQyxZQUFBLEVBQUFDLGlCQUFBLEVBQUFDLFNBQUE7SUFBQSxPQUFBdEwsbUJBQUEsR0FBQWMsSUFBQSxVQUFBeUssVUFBQUMsU0FBQTtNQUFBLGtCQUFBQSxTQUFBLENBQUF0RixJQUFBLEdBQUFzRixTQUFBLENBQUFwSCxJQUFBO1FBQUE7VUFDbkRpRixRQUFRLEdBQUd6QixHQUFHLENBQUNvQyxNQUFNLENBQUNYLFFBQVE7VUFDOUJ2QixRQUFRLElBQUE4QyxVQUFBLEdBQUdoRCxHQUFHLENBQUNNLElBQUksY0FBQTBDLFVBQUEsdUJBQVJBLFVBQUEsQ0FBVXpDLE1BQU07VUFBQTBDLFVBQUEsR0FDS2pELEdBQUcsQ0FBQ3VELEtBQUssRUFBdkMxQyxNQUFNLEdBQUFvQyxVQUFBLENBQU5wQyxNQUFNLEVBQUVxQyxJQUFJLEdBQUFELFVBQUEsQ0FBSkMsSUFBSSxFQUFFQyxJQUFJLEdBQUFGLFVBQUEsQ0FBSkUsSUFBSSxFQUFFQyxLQUFLLEdBQUFILFVBQUEsQ0FBTEcsS0FBSztVQUUzQkMsWUFBWSxHQUFHbEwsTUFBTSxDQUFDZ0wsSUFBSSxDQUFDLElBQUksQ0FBQztVQUNoQ0csYUFBYSxHQUFHbkwsTUFBTSxDQUFDaUwsS0FBSyxDQUFDLElBQUksRUFBRTtVQUFBUSxTQUFBLENBQUF0RixJQUFBO1VBQUFzRixTQUFBLENBQUFwSCxJQUFBO1VBQUEsT0FHbkJnRSx1QkFBVyxDQUFDNkIsT0FBTyxDQUFDO1lBQUVaLFFBQVEsRUFBUkE7VUFBUyxDQUFDLENBQUM7UUFBQTtVQUFoRHRCLE1BQU0sR0FBQXlELFNBQUEsQ0FBQTVILElBQUE7VUFBQSxJQUVQbUUsTUFBTTtZQUFBeUQsU0FBQSxDQUFBcEgsSUFBQTtZQUFBO1VBQUE7VUFBQSxPQUFBb0gsU0FBQSxDQUFBekgsTUFBQSxXQUNIakUsR0FBRyxDQUFDMkksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsT0FBTyxFQUFFO1VBQW1CLENBQUMsQ0FBQztRQUFBO1VBQUEsTUFHekRiLFFBQVEsSUFBSUMsTUFBTSxDQUFDMEQsR0FBRztZQUFBRCxTQUFBLENBQUFwSCxJQUFBO1lBQUE7VUFBQTtVQUFBLE9BQUFvSCxTQUFBLENBQUF6SCxNQUFBLFdBQ2xCakUsR0FBRyxDQUFDMkksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsT0FBTyxFQUFFO1VBQWUsQ0FBQyxDQUFDO1FBQUE7VUFHbkR3QyxLQUFVLEdBQUc7WUFDbEJwRCxNQUFNLEVBQUVEO1VBQ1QsQ0FBQztVQUVELElBQUlXLE1BQU0sRUFBRTtZQUNYMEMsS0FBSyxDQUFDMUMsTUFBTSxHQUFHQSxNQUFNO1VBQ3RCO1VBQUMrQyxTQUFBLENBQUFwSCxJQUFBO1VBQUEsT0FFNkNzSCwrQkFBbUIsQ0FBQ3ZCLElBQUksQ0FDckVnQixLQUNELENBQUMsQ0FDQzVDLFFBQVEsQ0FBQztZQUNUb0QsSUFBSSxFQUFFLFlBQVk7WUFDbEJDLEtBQUssRUFBRSxDQUFDO1lBQ1I7VUFDRCxDQUFDLENBQUMsQ0FDRHJELFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FDbkJzRCxJQUFJLENBQUM7WUFBRUMsU0FBUyxFQUFFLENBQUM7VUFBRSxDQUFDLENBQUMsQ0FDdkJDLElBQUksQ0FBQyxDQUFDZCxZQUFZLEdBQUcsQ0FBQyxJQUFJQyxhQUFhLENBQUMsQ0FDeENGLEtBQUssQ0FBQ0UsYUFBYSxDQUFDO1FBQUE7VUFYaEJFLFlBQStCLEdBQUFJLFNBQUEsQ0FBQTVILElBQUE7VUFBQTRILFNBQUEsQ0FBQXBILElBQUE7VUFBQSxPQWFMc0gsK0JBQW1CLENBQUNNLGNBQWMsQ0FBQ2IsS0FBSyxDQUFDO1FBQUE7VUFBbkVFLGlCQUFpQixHQUFBRyxTQUFBLENBQUE1SCxJQUFBO1VBRWpCMEgsU0FBUyxHQUFHVyxJQUFJLENBQUNDLElBQUksQ0FBQ2IsaUJBQWlCLEdBQUdILGFBQWEsQ0FBQztVQUU5RHBMLEdBQUcsQ0FBQzJJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQ3BCMEMsWUFBWSxFQUFaQSxZQUFZO1lBQ1plLFVBQVUsRUFBRTtjQUNYQyxXQUFXLEVBQUVuQixZQUFZO2NBQ3pCSyxTQUFTLEVBQVRBLFNBQVM7Y0FDVEQsaUJBQWlCLEVBQWpCQTtZQUNEO1VBQ0QsQ0FBQyxDQUFDO1VBQUFHLFNBQUEsQ0FBQXBILElBQUE7VUFBQTtRQUFBO1VBQUFvSCxTQUFBLENBQUF0RixJQUFBO1VBQUFzRixTQUFBLENBQUE1QyxFQUFBLEdBQUE0QyxTQUFBO1VBRUYxTCxHQUFHLENBQUMySSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxPQUFPLEVBQUU7VUFBZSxDQUFDLENBQUM7UUFBQTtRQUFBO1VBQUEsT0FBQTZDLFNBQUEsQ0FBQXBGLElBQUE7TUFBQTtJQUFBLEdBQUF1RSxRQUFBO0VBQUEsQ0FFbEQ7RUFBQSxnQkF2REtGLGVBQWVBLENBQUE0QixHQUFBLEVBQUFDLEdBQUE7SUFBQSxPQUFBNUIsS0FBQSxDQUFBcE0sS0FBQSxPQUFBRyxTQUFBO0VBQUE7QUFBQSxHQXVEcEI7QUFFRCxJQUFNOE4sT0FBTztFQUFBLElBQUFDLEtBQUEsR0FBQWpGLGlCQUFBLGVBQUF2SCxtQkFBQSxHQUFBd0YsSUFBQSxDQUFHLFNBQUFpSCxTQUFPN0UsR0FBWSxFQUFFOUgsR0FBYTtJQUFBLElBQUE0TSxVQUFBO0lBQUEsSUFBQXJELFFBQUEsRUFBQXZCLFFBQUEsRUFBQUMsTUFBQSxFQUFBNEUsSUFBQSxFQUFBQyxNQUFBLEVBQUFDLGFBQUEsRUFBQUMsZUFBQSxFQUFBQyxlQUFBO0lBQUEsT0FBQS9NLG1CQUFBLEdBQUFjLElBQUEsVUFBQWtNLFVBQUFDLFNBQUE7TUFBQSxrQkFBQUEsU0FBQSxDQUFBL0csSUFBQSxHQUFBK0csU0FBQSxDQUFBN0ksSUFBQTtRQUFBO1VBQzNDaUYsUUFBUSxHQUFHekIsR0FBRyxDQUFDb0MsTUFBTSxDQUFDWCxRQUFRO1VBQzlCdkIsUUFBUSxJQUFBNEUsVUFBQSxHQUFHOUUsR0FBRyxDQUFDTSxJQUFJLGNBQUF3RSxVQUFBLHVCQUFSQSxVQUFBLENBQVV2RSxNQUFNO1VBQUE4RSxTQUFBLENBQUEvRyxJQUFBO1VBQUErRyxTQUFBLENBQUE3SSxJQUFBO1VBQUEsT0FHS2dFLHVCQUFXLENBQUM2QixPQUFPLENBQUM7WUFBRVosUUFBUSxFQUFSQTtVQUFTLENBQUMsQ0FBQztRQUFBO1VBQWhFdEIsTUFBc0IsR0FBQWtGLFNBQUEsQ0FBQXJKLElBQUE7VUFBQSxJQUV2Qm1FLE1BQU07WUFBQWtGLFNBQUEsQ0FBQTdJLElBQUE7WUFBQTtVQUFBO1VBQUEsT0FBQTZJLFNBQUEsQ0FBQWxKLE1BQUEsV0FDSGpFLEdBQUcsQ0FBQzJJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLE9BQU8sRUFBRTtVQUFtQixDQUFDLENBQUM7UUFBQTtVQUFBLE1BR3pEYixRQUFRLElBQUlDLE1BQU0sQ0FBQ3FDLEVBQUU7WUFBQTZDLFNBQUEsQ0FBQTdJLElBQUE7WUFBQTtVQUFBO1VBQUEsT0FBQTZJLFNBQUEsQ0FBQWxKLE1BQUEsV0FDakJqRSxHQUFHLENBQUMySSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxPQUFPLEVBQUU7VUFBZSxDQUFDLENBQUM7UUFBQTtVQUFBc0UsU0FBQSxDQUFBN0ksSUFBQTtVQUFBLE9BRzlCOEYsb0JBQVEsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVyQyxRQUFRLEVBQVJBO1VBQVMsQ0FBQyxDQUFDLENBQ3BEK0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUNuQnRELFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FDeEJBLFFBQVEsQ0FBQyxXQUFXLENBQUM7UUFBQTtVQUhqQm9FLElBQVksR0FBQU0sU0FBQSxDQUFBckosSUFBQTtVQUFBLElBS2IrSSxJQUFJO1lBQUFNLFNBQUEsQ0FBQTdJLElBQUE7WUFBQTtVQUFBO1VBQUEsT0FBQTZJLFNBQUEsQ0FBQWxKLE1BQUEsV0FDRGpFLEdBQUcsQ0FBQzJJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLE9BQU8sRUFBRTtVQUErQixDQUFDLENBQUM7UUFBQTtVQUduRWlFLE1BQU0sR0FBR0QsSUFBSSxDQUFDTyxHQUFHLENBQUMsVUFBQ0MsR0FBRztZQUFBLE9BQUtBLEdBQUcsQ0FBQzFCLEdBQUc7VUFBQSxFQUFDO1VBQUF3QixTQUFBLENBQUE3SSxJQUFBO1VBQUEsT0FFRmdKLHlCQUFpQixDQUFDakQsSUFBSSxDQUFDO1lBQzdEa0QsS0FBSyxFQUFFO2NBQUVDLEdBQUcsRUFBRVY7WUFBTztVQUN0QixDQUFDLENBQUMsQ0FBQ1csSUFBSSxDQUFDLENBQUM7UUFBQTtVQUZIVixhQUF3QixHQUFBSSxTQUFBLENBQUFySixJQUFBO1VBSXhCa0osZUFBZSxHQUFHRCxhQUFhLENBQUNXLE1BQU0sQ0FDM0MsVUFBQ04sR0FBRyxFQUFFM0QsTUFBTTtZQUFBLE9BQUsyRCxHQUFHLENBQUNPLEdBQUcsQ0FBQ2xFLE1BQU0sQ0FBQzhELEtBQUssQ0FBQzFRLFFBQVEsQ0FBQyxDQUFDLEVBQUU0TSxNQUFNLENBQUM7VUFBQSxHQUN6RCxJQUFJbUUsR0FBRyxDQUFDLENBQ1QsQ0FBQztVQUVLWCxlQUFlLEdBQUdKLElBQUksQ0FBQ08sR0FBRyxDQUFDLFVBQUNDLEdBQUcsRUFBSztZQUN6QyxJQUFNUSxNQUFNLEdBQUdSLEdBQUcsQ0FBQ1MsUUFBUSxDQUFDLENBQUM7WUFDN0IsSUFBSWQsZUFBZSxDQUFDZSxHQUFHLENBQUNWLEdBQUcsQ0FBQzFCLEdBQUcsQ0FBQzlPLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTtjQUM1Q2dSLE1BQU0sQ0FBQ0csWUFBWSxHQUFHaEIsZUFBZSxDQUFDaUIsR0FBRyxDQUFDWixHQUFHLENBQUMxQixHQUFHLENBQUM5TyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzlEO1lBQ0EsT0FBT2dSLE1BQU07VUFDZCxDQUFDLENBQUM7VUFFRjdOLEdBQUcsQ0FBQzJJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDcUUsZUFBZSxDQUFDO1VBQUFFLFNBQUEsQ0FBQTdJLElBQUE7VUFBQTtRQUFBO1VBQUE2SSxTQUFBLENBQUEvRyxJQUFBO1VBQUErRyxTQUFBLENBQUFyRSxFQUFBLEdBQUFxRSxTQUFBO1VBRXJDbk4sR0FBRyxDQUFDMkksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsT0FBTyxFQUFFO1VBQWUsQ0FBQyxDQUFDO1FBQUE7UUFBQTtVQUFBLE9BQUFzRSxTQUFBLENBQUE3RyxJQUFBO01BQUE7SUFBQSxHQUFBcUcsUUFBQTtFQUFBLENBRWxEO0VBQUEsZ0JBL0NLRixPQUFPQSxDQUFBeUIsR0FBQSxFQUFBQyxHQUFBO0lBQUEsT0FBQXpCLEtBQUEsQ0FBQWxPLEtBQUEsT0FBQUcsU0FBQTtFQUFBO0FBQUEsR0ErQ1o7QUFFRCxJQUFNeVAsZUFBZTtFQUFBLElBQUFDLEtBQUEsR0FBQTVHLGlCQUFBLGVBQUF2SCxtQkFBQSxHQUFBd0YsSUFBQSxDQUFHLFNBQUE0SSxTQUFPeEcsR0FBWSxFQUFFOUgsR0FBYTtJQUFBLElBQUF1TyxVQUFBO0lBQUEsSUFBQXZHLFFBQUEsRUFBQXdHLFlBQUEsRUFBQUMsV0FBQSxFQUFBQyxPQUFBLEVBQUE3QixJQUFBLEVBQUE4QixJQUFBLEVBQUFDLEtBQUEsRUFBQUMsQ0FBQTtJQUFBLE9BQUEzTyxtQkFBQSxHQUFBYyxJQUFBLFVBQUE4TixVQUFBQyxTQUFBO01BQUEsa0JBQUFBLFNBQUEsQ0FBQTNJLElBQUEsR0FBQTJJLFNBQUEsQ0FBQXpLLElBQUE7UUFBQTtVQUNuRDBELFFBQVEsSUFBQXVHLFVBQUEsR0FBR3pHLEdBQUcsQ0FBQ00sSUFBSSxjQUFBbUcsVUFBQSx1QkFBUkEsVUFBQSxDQUFVbEcsTUFBTSxFQUNqQztVQUNNbUcsWUFBWSxHQUFHdk8sTUFBTSxDQUFDNkgsR0FBRyxDQUFDdUQsS0FBSyxDQUFDc0QsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUVoRDtVQUNNRixXQUFXLEdBQUcsSUFBQU8sa0JBQU0sRUFBQyxDQUFDLENBQUNDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFFNUM7VUFDTVAsT0FBTyxHQUFHRCxXQUFXLENBQUNTLEtBQUssQ0FBQyxDQUFDLENBQUNDLEdBQUcsQ0FBQ1gsWUFBWSxFQUFFLE1BQU0sQ0FBQyxFQUU3RDtVQUFBTyxTQUFBLENBQUF6SyxJQUFBO1VBQUEsT0FDbUI4RixvQkFBUSxDQUFDQyxJQUFJLENBQUM7WUFDaEMrRSxVQUFVLEVBQUU7Y0FDWEMsSUFBSSxFQUFFWixXQUFXLENBQUNhLE1BQU0sQ0FBQyxDQUFDO2NBQzFCQyxHQUFHLEVBQUViLE9BQU8sQ0FBQ1ksTUFBTSxDQUFDO1lBQ3JCLENBQUM7WUFDRHRILFFBQVEsRUFBUkE7VUFDRCxDQUFDLENBQUMsQ0FBQ3dILElBQUksQ0FBQyxDQUFDO1FBQUE7VUFOSDNDLElBQUksR0FBQWtDLFNBQUEsQ0FBQWpMLElBQUE7VUFRSjZLLElBQUksR0FBRyxFQUFFLEVBRWY7VUFBQUMsS0FBQSxnQkFBQTFPLG1CQUFBLEdBQUF3RixJQUFBLFVBQUFrSixNQUFBQyxDQUFBO1lBQUEsSUFBQVksT0FBQSxFQUFBQyxPQUFBO1lBQUEsT0FBQXhQLG1CQUFBLEdBQUFjLElBQUEsVUFBQTJPLE9BQUFDLFNBQUE7Y0FBQSxrQkFBQUEsU0FBQSxDQUFBeEosSUFBQSxHQUFBd0osU0FBQSxDQUFBdEwsSUFBQTtnQkFBQTtrQkFFT21MLE9BQU8sR0FBR1osQ0FBQyxDQUFDZ0IsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUV0QztrQkFDTUgsT0FBTyxHQUFHN0MsSUFBSSxDQUFDMU8sTUFBTSxDQUFDLFVBQUMyUixDQUFDO29CQUFBLE9BQUssSUFBQWQsa0JBQU0sRUFBQ2MsQ0FBQyxDQUFDVixVQUFVLENBQUMsQ0FBQ1csTUFBTSxDQUFDbEIsQ0FBQyxFQUFFLEtBQUssQ0FBQztrQkFBQSxFQUFDO2tCQUV6RUYsSUFBSSxDQUFDcFEsSUFBSSxDQUFDO29CQUNUeVIsSUFBSSxFQUFFUCxPQUFPO29CQUNiUSxjQUFjLEVBQUVwQixDQUFDLENBQUNrQixNQUFNLENBQUMsSUFBSUcsSUFBSSxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUM7b0JBQzdDQyxPQUFPLEVBQUV0QixDQUFDLENBQUNrQixNQUFNLENBQUMsSUFBSUcsSUFBSSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUM7b0JBQ3BDRSxNQUFNLEVBQUVWLE9BQU8sQ0FBQ3RDLEdBQUcsQ0FBQyxVQUFDQyxHQUFHO3NCQUFBLE9BQU07d0JBQzdCL0MsRUFBRSxFQUFFK0MsR0FBRyxDQUFDMUIsR0FBRzt3QkFDWDFPLElBQUksRUFBRW9RLEdBQUcsQ0FBQ3BRLElBQUk7d0JBQ2RvVCxLQUFLLEVBQUVoRCxHQUFHLENBQUMrQixVQUFVLENBQUNrQixXQUFXLENBQUMsQ0FBQzt3QkFDbkNDLEdBQUcsRUFBRWxELEdBQUcsQ0FBQ21ELFFBQVEsQ0FBQ0YsV0FBVyxDQUFDO3NCQUMvQixDQUFDO29CQUFBLENBQUM7a0JBQ0gsQ0FBQyxDQUFDO2dCQUFBO2dCQUFBO2tCQUFBLE9BQUFWLFNBQUEsQ0FBQXRKLElBQUE7Y0FBQTtZQUFBLEdBQUFzSSxLQUFBO1VBQUE7VUFoQk1DLENBQUMsR0FBR0osV0FBVztRQUFBO1VBQUEsS0FBRUksQ0FBQyxDQUFDNEIsUUFBUSxDQUFDL0IsT0FBTyxDQUFDO1lBQUFLLFNBQUEsQ0FBQXpLLElBQUE7WUFBQTtVQUFBO1VBQUEsT0FBQXlLLFNBQUEsQ0FBQTNILGFBQUEsQ0FBQXdILEtBQUEsQ0FBQUMsQ0FBQTtRQUFBO1VBQUVBLENBQUMsQ0FBQ00sR0FBRyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUM7VUFBQUosU0FBQSxDQUFBekssSUFBQTtVQUFBO1FBQUE7VUFBQSxPQUFBeUssU0FBQSxDQUFBOUssTUFBQSxXQWtCeERqRSxHQUFHLENBQUMySSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQytGLElBQUksQ0FBQztRQUFBO1FBQUE7VUFBQSxPQUFBSSxTQUFBLENBQUF6SSxJQUFBO01BQUE7SUFBQSxHQUFBZ0ksUUFBQTtFQUFBLENBQ2pDO0VBQUEsZ0JBMUNLRixlQUFlQSxDQUFBc0MsR0FBQSxFQUFBQyxJQUFBO0lBQUEsT0FBQXRDLEtBQUEsQ0FBQTdQLEtBQUEsT0FBQUcsU0FBQTtFQUFBO0FBQUEsR0EwQ3BCO0FBRUQsSUFBTWlTLFNBQVM7RUFBQSxJQUFBQyxLQUFBLEdBQUFwSixpQkFBQSxlQUFBdkgsbUJBQUEsR0FBQXdGLElBQUEsQ0FBRyxTQUFBb0wsU0FBT2hKLEdBQVksRUFBRTlILEdBQWE7SUFBQSxJQUFBK1EsVUFBQSxFQUFBL0ksUUFBQSxFQUFBQyxNQUFBLEVBQUErSSxrQkFBQTtJQUFBLE9BQUE5USxtQkFBQSxHQUFBYyxJQUFBLFVBQUFpUSxVQUFBQyxTQUFBO01BQUEsa0JBQUFBLFNBQUEsQ0FBQTlLLElBQUEsR0FBQThLLFNBQUEsQ0FBQTVNLElBQUE7UUFBQTtVQUFBNE0sU0FBQSxDQUFBOUssSUFBQTtVQUU1QzRCLFFBQVEsSUFBQStJLFVBQUEsR0FBR2pKLEdBQUcsQ0FBQ00sSUFBSSxjQUFBMkksVUFBQSx1QkFBUkEsVUFBQSxDQUFVMUksTUFBTTtVQUFBNkksU0FBQSxDQUFBNU0sSUFBQTtVQUFBLE9BRUlnRSx1QkFBVyxDQUFDQyxRQUFRLENBQUNQLFFBQVEsQ0FBQztRQUFBO1VBQTdEQyxNQUFzQixHQUFBaUosU0FBQSxDQUFBcE4sSUFBQTtVQUFBLElBRXZCbUUsTUFBTTtZQUFBaUosU0FBQSxDQUFBNU0sSUFBQTtZQUFBO1VBQUE7VUFBQSxPQUFBNE0sU0FBQSxDQUFBak4sTUFBQSxXQUNIakUsR0FBRyxDQUFDMkksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsT0FBTyxFQUFFO1VBQXNCLENBQUMsQ0FBQztRQUFBO1VBQUFxSSxTQUFBLENBQUE1TSxJQUFBO1VBQUEsT0FJekQ2TSw2QkFBaUIsQ0FBQ2hILE9BQU8sQ0FBQztZQUMvQmlILFVBQVUsRUFBRSxLQUFLO1lBQ2pCaEosSUFBSSxFQUFFO2NBQ0xrQyxFQUFFLEVBQUV0QyxRQUFRO2NBQ1psRyxJQUFJLEVBQUU7WUFDUDtVQUNELENBQUMsQ0FBQztRQUFBO1VBUEdrUCxrQkFBd0MsR0FBQUUsU0FBQSxDQUFBcE4sSUFBQTtVQUFBLE9BQUFvTixTQUFBLENBQUFqTixNQUFBLFdBU3ZDakUsR0FBRyxDQUFDMkksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFDM0JvSSxrQkFBa0IsRUFBRUEsa0JBQWtCLElBQUksSUFBSTtZQUM5Q3BILGNBQWMsRUFBRTNCLE1BQU0sQ0FBQzJCO1VBQ3hCLENBQUMsQ0FBQztRQUFBO1VBQUFzSCxTQUFBLENBQUE5SyxJQUFBO1VBQUE4SyxTQUFBLENBQUFwSSxFQUFBLEdBQUFvSSxTQUFBO1VBRUZuSSxPQUFPLENBQUNDLEdBQUcsQ0FBQWtJLFNBQUEsQ0FBQXBJLEVBQU0sQ0FBQztVQUFBLE9BQUFvSSxTQUFBLENBQUFqTixNQUFBLFdBQ1hqRSxHQUFHLENBQUNpSixVQUFVLENBQUMsR0FBRyxDQUFDO1FBQUE7UUFBQTtVQUFBLE9BQUFpSSxTQUFBLENBQUE1SyxJQUFBO01BQUE7SUFBQSxHQUFBd0ssUUFBQTtFQUFBLENBRTNCO0VBQUEsZ0JBM0JLRixTQUFTQSxDQUFBUyxJQUFBLEVBQUFDLElBQUE7SUFBQSxPQUFBVCxLQUFBLENBQUFyUyxLQUFBLE9BQUFHLFNBQUE7RUFBQTtBQUFBLEdBMkJkO0FBRUQsSUFBTTRTLGdCQUFnQjtFQUFBLElBQUFDLEtBQUEsR0FBQS9KLGlCQUFBLGVBQUF2SCxtQkFBQSxHQUFBd0YsSUFBQSxDQUFHLFNBQUErTCxTQUFPM0osR0FBWSxFQUFFOUgsR0FBYTtJQUFBLElBQUEwUixVQUFBLEVBQUFDLHFCQUFBLEVBQUEzSixRQUFBLEVBQUE0SixlQUFBLEVBQUEzSixNQUFBLEVBQUE0SixhQUFBO0lBQUEsT0FBQTNSLG1CQUFBLEdBQUFjLElBQUEsVUFBQThRLFVBQUFDLFNBQUE7TUFBQSxrQkFBQUEsU0FBQSxDQUFBM0wsSUFBQSxHQUFBMkwsU0FBQSxDQUFBek4sSUFBQTtRQUFBO1VBQUF5TixTQUFBLENBQUEzTCxJQUFBO1VBRW5ENEIsUUFBUSxJQUFBMEosVUFBQSxHQUFHNUosR0FBRyxDQUFDTSxJQUFJLGNBQUFzSixVQUFBLHVCQUFSQSxVQUFBLENBQVVySixNQUFNO1VBQ3pCdUosZUFBZSxHQUFLOUosR0FBRyxDQUFDa0ssSUFBSSxDQUE1QkosZUFBZTtVQUFBRyxTQUFBLENBQUF6TixJQUFBO1VBQUEsT0FFY2dFLHVCQUFXLENBQUNDLFFBQVEsQ0FBQ1AsUUFBUSxDQUFDO1FBQUE7VUFBN0RDLE1BQXNCLEdBQUE4SixTQUFBLENBQUFqTyxJQUFBO1VBQUEsSUFFdkJtRSxNQUFNO1lBQUE4SixTQUFBLENBQUF6TixJQUFBO1lBQUE7VUFBQTtVQUFBLE9BQUF5TixTQUFBLENBQUE5TixNQUFBLFdBQ0hqRSxHQUFHLENBQUMySSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxPQUFPLEVBQUU7VUFBb0IsQ0FBQyxDQUFDO1FBQUE7VUFBQWtKLFNBQUEsQ0FBQXpOLElBQUE7VUFBQSxPQUl2RDJOLDhCQUFrQixDQUFDMUosUUFBUSxDQUFDcUosZUFBZSxDQUFDO1FBQUE7VUFEN0NDLGFBQW9DLEdBQUFFLFNBQUEsQ0FBQWpPLElBQUE7VUFBQSxJQUdyQytOLGFBQWE7WUFBQUUsU0FBQSxDQUFBek4sSUFBQTtZQUFBO1VBQUE7VUFBQSxPQUFBeU4sU0FBQSxDQUFBOU4sTUFBQSxXQUNWakUsR0FBRyxDQUFDMkksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsT0FBTyxFQUFFO1VBQTBCLENBQUMsQ0FBQztRQUFBO1VBR3BFLENBQUE4SSxxQkFBQSxHQUFBMUosTUFBTSxDQUFDNEIsY0FBYyxjQUFBOEgscUJBQUEsdUJBQXJCQSxxQkFBQSxDQUF1QnBULElBQUksQ0FBQ3NULGFBQWEsQ0FBQ2xHLEdBQUcsQ0FBQztVQUFBb0csU0FBQSxDQUFBek4sSUFBQTtVQUFBLE9BQ3hDMkQsTUFBTSxDQUFDaUssSUFBSSxDQUFDLENBQUM7UUFBQTtVQUFBLE9BQUFILFNBQUEsQ0FBQTlOLE1BQUEsV0FFWmpFLEdBQUcsQ0FBQzJJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDaUosYUFBYSxDQUFDO1FBQUE7VUFBQUUsU0FBQSxDQUFBM0wsSUFBQTtVQUFBMkwsU0FBQSxDQUFBakosRUFBQSxHQUFBaUosU0FBQTtVQUUxQ2hKLE9BQU8sQ0FBQ0MsR0FBRyxDQUFBK0ksU0FBQSxDQUFBakosRUFBTSxDQUFDO1VBQUEsT0FBQWlKLFNBQUEsQ0FBQTlOLE1BQUEsV0FDWGpFLEdBQUcsQ0FBQ2lKLFVBQVUsQ0FBQyxHQUFHLENBQUM7UUFBQTtRQUFBO1VBQUEsT0FBQThJLFNBQUEsQ0FBQXpMLElBQUE7TUFBQTtJQUFBLEdBQUFtTCxRQUFBO0VBQUEsQ0FFM0I7RUFBQSxnQkExQktGLGdCQUFnQkEsQ0FBQVksSUFBQSxFQUFBQyxJQUFBO0lBQUEsT0FBQVosS0FBQSxDQUFBaFQsS0FBQSxPQUFBRyxTQUFBO0VBQUE7QUFBQSxHQTBCckI7QUFNRCxJQUFNMFQsYUFBYTtFQUFBLElBQUFDLEtBQUEsR0FBQTdLLGlCQUFBLGVBQUF2SCxtQkFBQSxHQUFBd0YsSUFBQSxDQUFHLFNBQUE2TSxTQUFPekssR0FBWSxFQUFFOUgsR0FBYTtJQUFBLElBQUF3UyxVQUFBLEVBQUFDLFNBQUEsRUFBQUMsT0FBQSxFQUFBekgsSUFBQSxFQUFBQyxLQUFBLEVBQUF5SCxVQUFBLEVBQUFDLFdBQUEsRUFBQUMsV0FBQSxFQUFBQyxTQUFBLEVBQUFDLG1CQUFBLEVBQUFDLE9BQUEsRUFBQUMsS0FBQTtJQUFBLE9BQUEvUyxtQkFBQSxHQUFBYyxJQUFBLFVBQUFrUyxVQUFBQyxTQUFBO01BQUEsa0JBQUFBLFNBQUEsQ0FBQS9NLElBQUEsR0FBQStNLFNBQUEsQ0FBQTdPLElBQUE7UUFBQTtVQUFBNk8sU0FBQSxDQUFBL00sSUFBQTtVQUV0RDJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDbEIsR0FBRyxDQUFDTSxJQUFJLENBQUM7VUFDZnFLLFNBQVMsSUFBQUQsVUFBQSxHQUFHMUssR0FBRyxDQUFDTSxJQUFJLGNBQUFvSyxVQUFBLHVCQUFSQSxVQUFBLENBQVVuSyxNQUFNO1VBQUE4SyxTQUFBLENBQUE3TyxJQUFBO1VBQUEsT0FFSzhPLHdCQUFZLENBQUM3SyxRQUFRLENBQUNrSyxTQUFTLENBQUM7UUFBQTtVQUFqRUMsT0FBd0IsR0FBQVMsU0FBQSxDQUFBclAsSUFBQTtVQUFBLE1BRTFCLENBQUM0TyxPQUFPLElBQUksQ0FBQ0EsT0FBTyxDQUFDVyxRQUFRO1lBQUFGLFNBQUEsQ0FBQTdPLElBQUE7WUFBQTtVQUFBO1VBQUEsT0FBQTZPLFNBQUEsQ0FBQWxQLE1BQUEsV0FDekJqRSxHQUFHLENBQ1IySSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQ1hDLElBQUksQ0FBQztZQUFFQyxPQUFPLEVBQUU7VUFBNkMsQ0FBQyxDQUFDO1FBQUE7VUFHNURvQyxJQUFZLEdBQUdxSSxRQUFRLENBQUN4TCxHQUFHLENBQUN1RCxLQUFLLENBQUNKLElBQWMsQ0FBQyxJQUFJLENBQUM7VUFDdERDLEtBQWEsR0FBR29JLFFBQVEsQ0FBQ3hMLEdBQUcsQ0FBQ3VELEtBQUssQ0FBQ0gsS0FBZSxDQUFDLElBQUksRUFBRTtVQUN6RHlILFVBQThCLEdBQUc3SyxHQUFHLENBQUN1RCxLQUFLLENBQUNrSSxNQUFNO1VBRWpEWCxXQUFtQyxHQUFHO1lBQzNDM1YsSUFBSSxFQUFFO2NBQUVBLElBQUksRUFBRTtZQUFFLENBQUM7WUFDakJ1VyxNQUFNLEVBQUU7Y0FBRXhILFNBQVMsRUFBRSxDQUFDO1lBQUUsQ0FBQztZQUN6QmEsSUFBSSxFQUFFO2NBQUU0RyxhQUFhLEVBQUUsQ0FBQztZQUFFLENBQUMsQ0FBRTtVQUM5QixDQUFDO1VBRUtaLFdBQVcsR0FBQXBVLGFBQUE7WUFDaEJpSyxhQUFhLEVBQUU7VUFBVSxHQUNyQmlLLFVBQVUsR0FBRztZQUFFMVYsSUFBSSxFQUFFLElBQUl5VyxNQUFNLENBQUNmLFVBQVUsRUFBRSxHQUFHO1VBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztVQUd0REcsU0FBUyxHQUFHRixXQUFXLENBQUM5SyxHQUFHLENBQUN1RCxLQUFLLENBQUNVLElBQUksQ0FBVyxJQUFJO1lBQUVDLFNBQVMsRUFBRSxDQUFDO1VBQUUsQ0FBQztVQUV0RStHLG1CQUFtQixJQUN4QjtZQUNDWSxRQUFRLEVBQUU7Y0FDVEMsSUFBSSxFQUFFO2dCQUFFOVIsSUFBSSxFQUFFLE9BQU87Z0JBQUUrUixXQUFXLEVBQUVuQixPQUFPLENBQUNXLFFBQVEsQ0FBQ1E7Y0FBWSxDQUFDO2NBQ2xFQyxhQUFhLEVBQUUsVUFBVTtjQUN6QkMsU0FBUyxFQUFFLElBQUk7Y0FDZjFJLEtBQUssRUFBRXdILFdBQVc7Y0FDbEJtQixXQUFXLEVBQUU7WUFDZDtVQUNELENBQUMsRUFBQUMsTUFBQSxDQUFBalksa0JBQUEsQ0FFRzhMLEdBQUcsQ0FBQ3VELEtBQUssQ0FBQ1UsSUFBSSxLQUFLLFVBQVUsR0FBRyxDQUFDO1lBQUVtSSxLQUFLLEVBQUVwQjtVQUFVLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFDL0Q7WUFDQ3FCLE9BQU8sRUFBRTtjQUNSaFgsSUFBSSxFQUFFLFVBQVU7Y0FDaEJpWCxVQUFVLEVBQUUsYUFBYTtjQUN6QkMsWUFBWSxFQUFFLEtBQUs7Y0FDbkJDLEVBQUUsRUFBRTtZQUNMO1VBQ0QsQ0FBQyxFQUNEO1lBQUVDLEtBQUssRUFBRSxDQUFDdEosSUFBSSxHQUFHLENBQUMsSUFBSUM7VUFBTSxDQUFDLEVBQzdCO1lBQUVzSixNQUFNLEVBQUV0SjtVQUFNLENBQUM7VUFBQWlJLFNBQUEsQ0FBQTdPLElBQUE7VUFBQSxPQUdlZ0UsdUJBQVcsQ0FBQ21NLFNBQVMsQ0FDckQxQixtQkFDRCxDQUFDO1FBQUE7VUFGS0MsT0FBa0IsR0FBQUcsU0FBQSxDQUFBclAsSUFBQTtVQUFBcVAsU0FBQSxDQUFBN08sSUFBQTtVQUFBLE9BSUpnRSx1QkFBVyxDQUFDNEQsY0FBYyxDQUFDMkcsV0FBVyxDQUFDO1FBQUE7VUFBckRJLEtBQUssR0FBQUUsU0FBQSxDQUFBclAsSUFBQTtVQUVYOUQsR0FBRyxDQUFDMkksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFDcEJvSyxPQUFPLEVBQVBBLE9BQU87WUFDUEMsS0FBSyxFQUFMQSxLQUFLO1lBQ0xoSSxJQUFJLEVBQUpBLElBQUk7WUFDSkMsS0FBSyxFQUFMQTtVQUNELENBQUMsQ0FBQztVQUFBaUksU0FBQSxDQUFBN08sSUFBQTtVQUFBO1FBQUE7VUFBQTZPLFNBQUEsQ0FBQS9NLElBQUE7VUFBQStNLFNBQUEsQ0FBQXJLLEVBQUEsR0FBQXFLLFNBQUE7VUFFRm5ULEdBQUcsQ0FBQzJJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQ3BCQyxPQUFPLEVBQUUsMkNBQTJDO1lBQ3BEeEYsS0FBSyxFQUFBOFAsU0FBQSxDQUFBcks7VUFDTixDQUFDLENBQUM7UUFBQTtRQUFBO1VBQUEsT0FBQXFLLFNBQUEsQ0FBQTdNLElBQUE7TUFBQTtJQUFBLEdBQUFpTSxRQUFBO0VBQUEsQ0FFSDtFQUFBLGdCQXhFS0YsYUFBYUEsQ0FBQXFDLElBQUEsRUFBQUMsSUFBQTtJQUFBLE9BQUFyQyxLQUFBLENBQUE5VCxLQUFBLE9BQUFHLFNBQUE7RUFBQTtBQUFBLEdBd0VsQjtBQUVELElBQU1pVyxnQkFBZ0IsR0FBRztFQUN4QmpOLGdCQUFnQixFQUFoQkEsZ0JBQWdCO0VBQ2hCeUIsc0JBQXNCLEVBQXRCQSxzQkFBc0I7RUFDdEJ1QixlQUFlLEVBQWZBLGVBQWU7RUFDZjhCLE9BQU8sRUFBUEEsT0FBTztFQUNQMkIsZUFBZSxFQUFmQSxlQUFlO0VBQ2Z3QyxTQUFTLEVBQVRBLFNBQVM7RUFDVFcsZ0JBQWdCLEVBQWhCQSxnQkFBZ0I7RUFDaEJjLGFBQWEsRUFBYkE7QUFDRCxDQUFDO0FBQUEsSUFBQXdDLFFBQUEsR0FFY0QsZ0JBQWdCO0FBQUF6VSxPQUFBLGNBQUEwVSxRQUFBIn0=