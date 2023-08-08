"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateStatus = exports["default"] = exports.confirmJob = exports.acceptApplication = void 0;
var _JobPostingModel = _interopRequireDefault(require("../../models/JobPostingModel"));
var _WorkerModel = _interopRequireDefault(require("../../models/WorkerModel"));
var _JobApplicationModel = _interopRequireDefault(require("../../models/JobApplicationModel"));
var _JobModel = _interopRequireDefault(require("../../models/JobModel"));
var _NotificationService = _interopRequireDefault(require("../../services/Notifications/NotificationService"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var applyForJob = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _req$user, jobPostingId, workerId, jobPosting, worker, application, jobApplication;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          jobPostingId = req.params.id;
          workerId = ((_req$user = req.user) === null || _req$user === void 0 ? void 0 : _req$user.userId) || 'id';
          _context.next = 5;
          return _JobPostingModel["default"].findById(jobPostingId).select('+applications');
        case 5:
          jobPosting = _context.sent;
          if (jobPosting) {
            _context.next = 8;
            break;
          }
          return _context.abrupt("return", res.status(404).json({
            message: 'Job not found.'
          }));
        case 8:
          _context.next = 10;
          return _WorkerModel["default"].findById(workerId);
        case 10:
          worker = _context.sent;
          if (worker) {
            _context.next = 13;
            break;
          }
          return _context.abrupt("return", res.status(404).json({
            message: 'Worker not found.'
          }));
        case 13:
          _context.next = 15;
          return _JobApplicationModel["default"].findOne({
            worker: workerId,
            jobPosting: jobPostingId
          });
        case 15:
          application = _context.sent;
          if (!application) {
            _context.next = 18;
            break;
          }
          return _context.abrupt("return", res.status(400).json({
            message: 'You have already applied for this job'
          }));
        case 18:
          // Create a new job application instance
          jobApplication = new _JobApplicationModel["default"]({
            worker: workerId,
            company: jobPosting.company,
            jobPosting: jobPostingId,
            status: 'PENDING'
          });
          _context.next = 21;
          return jobApplication.save();
        case 21:
          jobPosting.applications.push(jobApplication._id);
          _context.next = 24;
          return jobPosting.save();
        case 24:
          res.status(200).json({
            message: 'Application submitted successfully.'
          });
          _context.next = 31;
          break;
        case 27:
          _context.prev = 27;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          res.status(500).json({
            message: 'An error occurred while applying for the job.',
            error: _context.t0
          });
        case 31:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 27]]);
  }));
  return function applyForJob(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var updateStatus = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var _req$user2, applicationId, companyId, status, jobApplication;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          applicationId = req.params.applicationId;
          companyId = (_req$user2 = req.user) === null || _req$user2 === void 0 ? void 0 : _req$user2.userId;
          status = req.body.status;
          _context2.next = 6;
          return _JobApplicationModel["default"].findById(applicationId);
        case 6:
          jobApplication = _context2.sent;
          if (jobApplication) {
            _context2.next = 9;
            break;
          }
          return _context2.abrupt("return", res.status(404).json({
            message: 'Job application not found.'
          }));
        case 9:
          if (!(String(jobApplication.company) != companyId)) {
            _context2.next = 11;
            break;
          }
          return _context2.abrupt("return", res.status(403).json({
            message: 'Unauthorized to access this job application.'
          }));
        case 11:
          jobApplication.status = status;
          _context2.next = 14;
          return jobApplication.save();
        case 14:
          res.status(200).json({
            message: 'Job application status updated successfully.',
            jobApplication: jobApplication
          });
          _context2.next = 20;
          break;
        case 17:
          _context2.prev = 17;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json({
            message: 'An error occurred while updating the job application status.',
            error: _context2.t0
          });
        case 20:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 17]]);
  }));
  return function updateStatus(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.updateStatus = updateStatus;
var acceptApplication = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var _req$user3, applicationId, companyId, jobApplication, jobPosting;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          applicationId = req.params.applicationId;
          companyId = (_req$user3 = req.user) === null || _req$user3 === void 0 ? void 0 : _req$user3.userId; // const { status } = req.body
          _context3.next = 5;
          return _JobApplicationModel["default"].findById(applicationId);
        case 5:
          jobApplication = _context3.sent;
          if (jobApplication) {
            _context3.next = 8;
            break;
          }
          return _context3.abrupt("return", res.status(404).json({
            message: 'Job application not found.'
          }));
        case 8:
          if (!(String(jobApplication.company) != companyId)) {
            _context3.next = 10;
            break;
          }
          return _context3.abrupt("return", res.status(403).json({
            message: 'Unauthorized to access this job application.'
          }));
        case 10:
          if (!(jobApplication.status == 'ACCEPTED')) {
            _context3.next = 12;
            break;
          }
          return _context3.abrupt("return", res.status(400).json({
            message: 'Application already accepted'
          }));
        case 12:
          _context3.next = 14;
          return _JobPostingModel["default"].findById(jobApplication.jobPosting);
        case 14:
          jobPosting = _context3.sent;
          if (jobPosting) {
            _context3.next = 17;
            break;
          }
          return _context3.abrupt("return", res.status(500).json({
            message: 'Something went wrong (102)'
          }));
        case 17:
          jobApplication.status = 'ACCEPTED';
          _context3.next = 20;
          return jobApplication.save();
        case 20:
          _NotificationService["default"].createNotification({
            data: {
              user: {
                id: jobApplication.worker.toString(),
                type: 'worker'
              },
              type: 'JOB',
              message: "Your application for ".concat(jobPosting.name, " was accepted! Click here to accept or decline this offer."),
              action: "/applications"
            },
            sendSMS: true,
            sendEmail: true
          });
          res.status(200).json({
            message: 'Accepted job application'
          });
          _context3.next = 27;
          break;
        case 24:
          _context3.prev = 24;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json({
            message: 'An error occurred while updating the job application status.',
            error: _context3.t0
          });
        case 27:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 24]]);
  }));
  return function acceptApplication(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.acceptApplication = acceptApplication;
var confirmJob = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var _req$user4, applicationId, workerId, jobApplication, jobPosting, overlappingJob, job;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          applicationId = req.params.applicationId;
          workerId = (_req$user4 = req.user) === null || _req$user4 === void 0 ? void 0 : _req$user4.userId; // const { status } = req.body
          _context4.next = 5;
          return _JobApplicationModel["default"].findById(applicationId);
        case 5:
          jobApplication = _context4.sent;
          if (jobApplication) {
            _context4.next = 8;
            break;
          }
          return _context4.abrupt("return", res.status(404).json({
            message: 'Job application not found.'
          }));
        case 8:
          if (!(String(jobApplication.worker) != workerId)) {
            _context4.next = 10;
            break;
          }
          return _context4.abrupt("return", res.status(403).json({
            message: 'Unauthorized to access this job application.'
          }));
        case 10:
          if (!(jobApplication.status != 'ACCEPTED')) {
            _context4.next = 12;
            break;
          }
          return _context4.abrupt("return", res.status(400).json({
            message: 'Cannot confirm job before being accepted'
          }));
        case 12:
          _context4.next = 14;
          return _JobPostingModel["default"].findById(jobApplication.jobPosting);
        case 14:
          jobPosting = _context4.sent;
          if (jobPosting) {
            _context4.next = 17;
            break;
          }
          return _context4.abrupt("return", res.status(500).json({
            message: 'Something went wrong (102)'
          }));
        case 17:
          _context4.next = 19;
          return _JobModel["default"].findOne({
            workerId: workerId,
            $or: [{
              // Job starts during another job
              shiftStart: {
                $lt: jobPosting.end,
                $gte: jobPosting.start
              }
            }, {
              // Job ends during another job
              shiftEnd: {
                $lte: jobPosting.end,
                $gt: jobPosting.start
              }
            }]
          });
        case 19:
          overlappingJob = _context4.sent;
          if (!overlappingJob) {
            _context4.next = 22;
            break;
          }
          return _context4.abrupt("return", res.status(400).json({
            message: 'You already have a scheduled job at this time.'
          }));
        case 22:
          if (!(new Date(jobPosting.start) < new Date())) {
            _context4.next = 24;
            break;
          }
          return _context4.abrupt("return", res.status(400).json({
            message: 'This job has already expired.'
          }));
        case 24:
          jobApplication.status = 'SCHEDULED';
          _context4.next = 27;
          return jobApplication.save();
        case 27:
          jobPosting.filled = true;
          _context4.next = 30;
          return jobPosting.save();
        case 30:
          job = new _JobModel["default"]({
            name: jobPosting.name,
            workerId: jobApplication.worker,
            companyId: jobPosting.company,
            jobPostingId: jobPosting.id,
            shiftStart: jobPosting.start,
            shiftEnd: jobPosting.end
          });
          _context4.next = 33;
          return job.save();
        case 33:
          res.status(200).json({
            message: 'Confirmed job application. New job created',
            job: job
          });
          _context4.next = 39;
          break;
        case 36:
          _context4.prev = 36;
          _context4.t0 = _context4["catch"](0);
          res.status(500).json({
            message: 'An error occurred while updating the job application status.',
            error: _context4.t0
          });
        case 39:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 36]]);
  }));
  return function confirmJob(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.confirmJob = confirmJob;
var JobApplicationController = {
  applyForJob: applyForJob,
  updateStatus: updateStatus,
  acceptApplication: acceptApplication,
  confirmJob: confirmJob
};
var _default = JobApplicationController;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfSm9iUG9zdGluZ01vZGVsIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfV29ya2VyTW9kZWwiLCJfSm9iQXBwbGljYXRpb25Nb2RlbCIsIl9Kb2JNb2RlbCIsIl9Ob3RpZmljYXRpb25TZXJ2aWNlIiwib2JqIiwiX19lc01vZHVsZSIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJleHBvcnRzIiwiT3AiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsImRlZmluZVByb3BlcnR5Iiwia2V5IiwiZGVzYyIsInZhbHVlIiwiJFN5bWJvbCIsIlN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiaXRlcmF0b3IiLCJhc3luY0l0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvciIsInRvU3RyaW5nVGFnU3ltYm9sIiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJlcnIiLCJ3cmFwIiwiaW5uZXJGbiIsIm91dGVyRm4iLCJzZWxmIiwidHJ5TG9jc0xpc3QiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsImNyZWF0ZSIsImNvbnRleHQiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwiZm4iLCJhcmciLCJ0eXBlIiwiY2FsbCIsIkNvbnRpbnVlU2VudGluZWwiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJnZXRQcm90byIsImdldFByb3RvdHlwZU9mIiwiTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUiLCJ2YWx1ZXMiLCJHcCIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJtZXRob2QiLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsIlByb21pc2VJbXBsIiwiaW52b2tlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlY29yZCIsInJlc3VsdCIsIl90eXBlb2YiLCJfX2F3YWl0IiwidGhlbiIsInVud3JhcHBlZCIsImVycm9yIiwicHJldmlvdXNQcm9taXNlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJzdGF0ZSIsIkVycm9yIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJkb25lIiwibWV0aG9kTmFtZSIsInVuZGVmaW5lZCIsIlR5cGVFcnJvciIsImluZm8iLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwiZW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImxlbmd0aCIsImkiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJpdGVyIiwia2V5cyIsInZhbCIsIm9iamVjdCIsInJldmVyc2UiLCJwb3AiLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwiX25leHQiLCJfdGhyb3ciLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3MiLCJhcmd1bWVudHMiLCJhcHBseSIsImFwcGx5Rm9ySm9iIiwiX3JlZiIsIl9jYWxsZWUiLCJyZXEiLCJyZXMiLCJfcmVxJHVzZXIiLCJqb2JQb3N0aW5nSWQiLCJ3b3JrZXJJZCIsImpvYlBvc3RpbmciLCJ3b3JrZXIiLCJhcHBsaWNhdGlvbiIsImpvYkFwcGxpY2F0aW9uIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInBhcmFtcyIsImlkIiwidXNlciIsInVzZXJJZCIsIkpvYlBvc3RpbmdNb2RlbCIsImZpbmRCeUlkIiwic2VsZWN0Iiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJXb3JrZXJNb2RlbCIsIkpvYkFwcGxpY2F0aW9uTW9kZWwiLCJmaW5kT25lIiwiY29tcGFueSIsInNhdmUiLCJhcHBsaWNhdGlvbnMiLCJfaWQiLCJ0MCIsImNvbnNvbGUiLCJsb2ciLCJfeCIsIl94MiIsInVwZGF0ZVN0YXR1cyIsIl9yZWYyIiwiX2NhbGxlZTIiLCJfcmVxJHVzZXIyIiwiYXBwbGljYXRpb25JZCIsImNvbXBhbnlJZCIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImJvZHkiLCJTdHJpbmciLCJfeDMiLCJfeDQiLCJhY2NlcHRBcHBsaWNhdGlvbiIsIl9yZWYzIiwiX2NhbGxlZTMiLCJfcmVxJHVzZXIzIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiTm90aWZpY2F0aW9uU2VydmljZSIsImNyZWF0ZU5vdGlmaWNhdGlvbiIsImRhdGEiLCJ0b1N0cmluZyIsImNvbmNhdCIsImFjdGlvbiIsInNlbmRTTVMiLCJzZW5kRW1haWwiLCJfeDUiLCJfeDYiLCJjb25maXJtSm9iIiwiX3JlZjQiLCJfY2FsbGVlNCIsIl9yZXEkdXNlcjQiLCJvdmVybGFwcGluZ0pvYiIsImpvYiIsIl9jYWxsZWU0JCIsIl9jb250ZXh0NCIsIkpvYk1vZGVsIiwiJG9yIiwic2hpZnRTdGFydCIsIiRsdCIsImVuZCIsIiRndGUiLCJzdGFydCIsInNoaWZ0RW5kIiwiJGx0ZSIsIiRndCIsIkRhdGUiLCJmaWxsZWQiLCJfeDciLCJfeDgiLCJKb2JBcHBsaWNhdGlvbkNvbnRyb2xsZXIiLCJfZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvY29udHJvbGxlcnMvSm9icy9Kb2JBcHBsaWNhdGlvbkNvbnRyb2xsZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJ1xuXG5pbXBvcnQgeyBJSm9iUG9zdGluZyB9IGZyb20gJ0AvYXBwL2ludGVyZmFjZXMvbW9kZWxzL0pvYlBvc3RpbmcnXG5pbXBvcnQgeyBJV29ya2VyIH0gZnJvbSAnQC9hcHAvaW50ZXJmYWNlcy9tb2RlbHMvV29ya2VyJ1xuaW1wb3J0IHsgSUpvYiB9IGZyb20gJ0AvYXBwL2ludGVyZmFjZXMvbW9kZWxzL0pvYidcblxuaW1wb3J0IEpvYlBvc3RpbmdNb2RlbCBmcm9tICdAL2FwcC9tb2RlbHMvSm9iUG9zdGluZ01vZGVsJ1xuaW1wb3J0IFdvcmtlck1vZGVsIGZyb20gJ0AvYXBwL21vZGVscy9Xb3JrZXJNb2RlbCdcbmltcG9ydCBKb2JBcHBsaWNhdGlvbk1vZGVsIGZyb20gJ0AvYXBwL21vZGVscy9Kb2JBcHBsaWNhdGlvbk1vZGVsJ1xuaW1wb3J0IEpvYk1vZGVsIGZyb20gJ0AvYXBwL21vZGVscy9Kb2JNb2RlbCdcbmltcG9ydCB7IElKb2JBcHBsaWNhdGlvbiB9IGZyb20gJ0AvYXBwL2ludGVyZmFjZXMvbW9kZWxzL0pvYkFwcGxpY2F0aW9uJ1xuaW1wb3J0IE5vdGlmaWNhdGlvblNlcnZpY2UgZnJvbSAnQC9hcHAvc2VydmljZXMvTm90aWZpY2F0aW9ucy9Ob3RpZmljYXRpb25TZXJ2aWNlJ1xuXG5jb25zdCBhcHBseUZvckpvYiA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCBqb2JQb3N0aW5nSWQgPSByZXEucGFyYW1zLmlkXG5cdFx0Y29uc3Qgd29ya2VySWQgPSByZXEudXNlcj8udXNlcklkIHx8ICdpZCdcblxuXHRcdGNvbnN0IGpvYlBvc3Rpbmc6IElKb2JQb3N0aW5nIHwgbnVsbCA9IGF3YWl0IEpvYlBvc3RpbmdNb2RlbC5maW5kQnlJZChcblx0XHRcdGpvYlBvc3RpbmdJZFxuXHRcdCkuc2VsZWN0KCcrYXBwbGljYXRpb25zJylcblxuXHRcdGlmICgham9iUG9zdGluZykge1xuXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZTogJ0pvYiBub3QgZm91bmQuJyB9KVxuXHRcdH1cblxuXHRcdGNvbnN0IHdvcmtlcjogSVdvcmtlciB8IG51bGwgPSBhd2FpdCBXb3JrZXJNb2RlbC5maW5kQnlJZCh3b3JrZXJJZClcblxuXHRcdGlmICghd29ya2VyKSB7XG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlOiAnV29ya2VyIG5vdCBmb3VuZC4nIH0pXG5cdFx0fVxuXG5cdFx0Y29uc3QgYXBwbGljYXRpb246IElKb2JBcHBsaWNhdGlvbiB8IG51bGwgPVxuXHRcdFx0YXdhaXQgSm9iQXBwbGljYXRpb25Nb2RlbC5maW5kT25lKHtcblx0XHRcdFx0d29ya2VyOiB3b3JrZXJJZCxcblx0XHRcdFx0am9iUG9zdGluZzogam9iUG9zdGluZ0lkLFxuXHRcdFx0fSlcblxuXHRcdGlmIChhcHBsaWNhdGlvbikge1xuXHRcdFx0cmV0dXJuIHJlc1xuXHRcdFx0XHQuc3RhdHVzKDQwMClcblx0XHRcdFx0Lmpzb24oeyBtZXNzYWdlOiAnWW91IGhhdmUgYWxyZWFkeSBhcHBsaWVkIGZvciB0aGlzIGpvYicgfSlcblx0XHR9XG5cblx0XHQvLyBDcmVhdGUgYSBuZXcgam9iIGFwcGxpY2F0aW9uIGluc3RhbmNlXG5cdFx0Y29uc3Qgam9iQXBwbGljYXRpb24gPSBuZXcgSm9iQXBwbGljYXRpb25Nb2RlbCh7XG5cdFx0XHR3b3JrZXI6IHdvcmtlcklkLFxuXHRcdFx0Y29tcGFueTogam9iUG9zdGluZy5jb21wYW55LFxuXHRcdFx0am9iUG9zdGluZzogam9iUG9zdGluZ0lkLFxuXHRcdFx0c3RhdHVzOiAnUEVORElORycsXG5cdFx0fSlcblx0XHRhd2FpdCBqb2JBcHBsaWNhdGlvbi5zYXZlKClcblxuXHRcdGpvYlBvc3RpbmcuYXBwbGljYXRpb25zLnB1c2goam9iQXBwbGljYXRpb24uX2lkKVxuXHRcdGF3YWl0IGpvYlBvc3Rpbmcuc2F2ZSgpXG5cblx0XHRyZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6ICdBcHBsaWNhdGlvbiBzdWJtaXR0ZWQgc3VjY2Vzc2Z1bGx5LicgfSlcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmxvZyhlcnJvcilcblx0XHRyZXNcblx0XHRcdC5zdGF0dXMoNTAwKVxuXHRcdFx0Lmpzb24oeyBtZXNzYWdlOiAnQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgYXBwbHlpbmcgZm9yIHRoZSBqb2IuJywgZXJyb3IgfSlcblx0fVxufVxuXG5leHBvcnQgY29uc3QgdXBkYXRlU3RhdHVzID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHsgYXBwbGljYXRpb25JZCB9ID0gcmVxLnBhcmFtc1xuXHRcdGNvbnN0IGNvbXBhbnlJZCA9IHJlcS51c2VyPy51c2VySWRcblx0XHRjb25zdCB7IHN0YXR1cyB9ID0gcmVxLmJvZHlcblxuXHRcdGNvbnN0IGpvYkFwcGxpY2F0aW9uID0gYXdhaXQgSm9iQXBwbGljYXRpb25Nb2RlbC5maW5kQnlJZChhcHBsaWNhdGlvbklkKVxuXG5cdFx0aWYgKCFqb2JBcHBsaWNhdGlvbikge1xuXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZTogJ0pvYiBhcHBsaWNhdGlvbiBub3QgZm91bmQuJyB9KVxuXHRcdH1cblxuXHRcdGlmIChTdHJpbmcoam9iQXBwbGljYXRpb24uY29tcGFueSkgIT0gY29tcGFueUlkKSB7XG5cdFx0XHRyZXR1cm4gcmVzXG5cdFx0XHRcdC5zdGF0dXMoNDAzKVxuXHRcdFx0XHQuanNvbih7IG1lc3NhZ2U6ICdVbmF1dGhvcml6ZWQgdG8gYWNjZXNzIHRoaXMgam9iIGFwcGxpY2F0aW9uLicgfSlcblx0XHR9XG5cblx0XHRqb2JBcHBsaWNhdGlvbi5zdGF0dXMgPSBzdGF0dXNcblx0XHRhd2FpdCBqb2JBcHBsaWNhdGlvbi5zYXZlKClcblxuXHRcdHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcblx0XHRcdG1lc3NhZ2U6ICdKb2IgYXBwbGljYXRpb24gc3RhdHVzIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5LicsXG5cdFx0XHRqb2JBcHBsaWNhdGlvbixcblx0XHR9KVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcblx0XHRcdG1lc3NhZ2U6ICdBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSB1cGRhdGluZyB0aGUgam9iIGFwcGxpY2F0aW9uIHN0YXR1cy4nLFxuXHRcdFx0ZXJyb3IsXG5cdFx0fSlcblx0fVxufVxuXG5leHBvcnQgY29uc3QgYWNjZXB0QXBwbGljYXRpb24gPSBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgeyBhcHBsaWNhdGlvbklkIH0gPSByZXEucGFyYW1zXG5cdFx0Y29uc3QgY29tcGFueUlkID0gcmVxLnVzZXI/LnVzZXJJZFxuXHRcdC8vIGNvbnN0IHsgc3RhdHVzIH0gPSByZXEuYm9keVxuXG5cdFx0Y29uc3Qgam9iQXBwbGljYXRpb246IElKb2JBcHBsaWNhdGlvbiB8IG51bGwgPVxuXHRcdFx0YXdhaXQgSm9iQXBwbGljYXRpb25Nb2RlbC5maW5kQnlJZChhcHBsaWNhdGlvbklkKVxuXG5cdFx0aWYgKCFqb2JBcHBsaWNhdGlvbikge1xuXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZTogJ0pvYiBhcHBsaWNhdGlvbiBub3QgZm91bmQuJyB9KVxuXHRcdH1cblxuXHRcdGlmIChTdHJpbmcoam9iQXBwbGljYXRpb24uY29tcGFueSkgIT0gY29tcGFueUlkKSB7XG5cdFx0XHRyZXR1cm4gcmVzXG5cdFx0XHRcdC5zdGF0dXMoNDAzKVxuXHRcdFx0XHQuanNvbih7IG1lc3NhZ2U6ICdVbmF1dGhvcml6ZWQgdG8gYWNjZXNzIHRoaXMgam9iIGFwcGxpY2F0aW9uLicgfSlcblx0XHR9XG5cblx0XHRpZiAoam9iQXBwbGljYXRpb24uc3RhdHVzID09ICdBQ0NFUFRFRCcpIHtcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6ICdBcHBsaWNhdGlvbiBhbHJlYWR5IGFjY2VwdGVkJyB9KVxuXHRcdH1cblxuXHRcdGNvbnN0IGpvYlBvc3RpbmcgPSBhd2FpdCBKb2JQb3N0aW5nTW9kZWwuZmluZEJ5SWQoam9iQXBwbGljYXRpb24uam9iUG9zdGluZylcblxuXHRcdGlmICgham9iUG9zdGluZykge1xuXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogJ1NvbWV0aGluZyB3ZW50IHdyb25nICgxMDIpJyB9KVxuXHRcdH1cblxuXHRcdGpvYkFwcGxpY2F0aW9uLnN0YXR1cyA9ICdBQ0NFUFRFRCdcblx0XHRhd2FpdCBqb2JBcHBsaWNhdGlvbi5zYXZlKClcblxuXHRcdE5vdGlmaWNhdGlvblNlcnZpY2UuY3JlYXRlTm90aWZpY2F0aW9uKHtcblx0XHRcdGRhdGE6IHtcblx0XHRcdFx0dXNlcjoge1xuXHRcdFx0XHRcdGlkOiBqb2JBcHBsaWNhdGlvbi53b3JrZXIudG9TdHJpbmcoKSxcblx0XHRcdFx0XHR0eXBlOiAnd29ya2VyJyxcblx0XHRcdFx0fSxcblx0XHRcdFx0dHlwZTogJ0pPQicsXG5cdFx0XHRcdG1lc3NhZ2U6IGBZb3VyIGFwcGxpY2F0aW9uIGZvciAke2pvYlBvc3RpbmcubmFtZX0gd2FzIGFjY2VwdGVkISBDbGljayBoZXJlIHRvIGFjY2VwdCBvciBkZWNsaW5lIHRoaXMgb2ZmZXIuYCxcblx0XHRcdFx0YWN0aW9uOiBgL2FwcGxpY2F0aW9uc2AsXG5cdFx0XHR9LFxuXHRcdFx0c2VuZFNNUzogdHJ1ZSxcblx0XHRcdHNlbmRFbWFpbDogdHJ1ZSxcblx0XHR9KVxuXG5cdFx0cmVzLnN0YXR1cygyMDApLmpzb24oe1xuXHRcdFx0bWVzc2FnZTogJ0FjY2VwdGVkIGpvYiBhcHBsaWNhdGlvbicsXG5cdFx0fSlcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRyZXMuc3RhdHVzKDUwMCkuanNvbih7XG5cdFx0XHRtZXNzYWdlOiAnQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgdXBkYXRpbmcgdGhlIGpvYiBhcHBsaWNhdGlvbiBzdGF0dXMuJyxcblx0XHRcdGVycm9yLFxuXHRcdH0pXG5cdH1cbn1cblxuZXhwb3J0IGNvbnN0IGNvbmZpcm1Kb2IgPSBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgeyBhcHBsaWNhdGlvbklkIH0gPSByZXEucGFyYW1zXG5cdFx0Y29uc3Qgd29ya2VySWQgPSByZXEudXNlcj8udXNlcklkXG5cdFx0Ly8gY29uc3QgeyBzdGF0dXMgfSA9IHJlcS5ib2R5XG5cblx0XHRjb25zdCBqb2JBcHBsaWNhdGlvbjogSUpvYkFwcGxpY2F0aW9uIHwgbnVsbCA9XG5cdFx0XHRhd2FpdCBKb2JBcHBsaWNhdGlvbk1vZGVsLmZpbmRCeUlkKGFwcGxpY2F0aW9uSWQpXG5cblx0XHRpZiAoIWpvYkFwcGxpY2F0aW9uKSB7XG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlOiAnSm9iIGFwcGxpY2F0aW9uIG5vdCBmb3VuZC4nIH0pXG5cdFx0fVxuXG5cdFx0aWYgKFN0cmluZyhqb2JBcHBsaWNhdGlvbi53b3JrZXIpICE9IHdvcmtlcklkKSB7XG5cdFx0XHRyZXR1cm4gcmVzXG5cdFx0XHRcdC5zdGF0dXMoNDAzKVxuXHRcdFx0XHQuanNvbih7IG1lc3NhZ2U6ICdVbmF1dGhvcml6ZWQgdG8gYWNjZXNzIHRoaXMgam9iIGFwcGxpY2F0aW9uLicgfSlcblx0XHR9XG5cblx0XHRpZiAoam9iQXBwbGljYXRpb24uc3RhdHVzICE9ICdBQ0NFUFRFRCcpIHtcblx0XHRcdHJldHVybiByZXNcblx0XHRcdFx0LnN0YXR1cyg0MDApXG5cdFx0XHRcdC5qc29uKHsgbWVzc2FnZTogJ0Nhbm5vdCBjb25maXJtIGpvYiBiZWZvcmUgYmVpbmcgYWNjZXB0ZWQnIH0pXG5cdFx0fVxuXG5cdFx0Y29uc3Qgam9iUG9zdGluZyA9IGF3YWl0IEpvYlBvc3RpbmdNb2RlbC5maW5kQnlJZChqb2JBcHBsaWNhdGlvbi5qb2JQb3N0aW5nKVxuXG5cdFx0aWYgKCFqb2JQb3N0aW5nKSB7XG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnU29tZXRoaW5nIHdlbnQgd3JvbmcgKDEwMiknIH0pXG5cdFx0fVxuXG5cdFx0Y29uc3Qgb3ZlcmxhcHBpbmdKb2IgPSBhd2FpdCBKb2JNb2RlbC5maW5kT25lKHtcblx0XHRcdHdvcmtlcklkOiB3b3JrZXJJZCxcblx0XHRcdCRvcjogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Ly8gSm9iIHN0YXJ0cyBkdXJpbmcgYW5vdGhlciBqb2Jcblx0XHRcdFx0XHRzaGlmdFN0YXJ0OiB7ICRsdDogam9iUG9zdGluZy5lbmQsICRndGU6IGpvYlBvc3Rpbmcuc3RhcnQgfSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdC8vIEpvYiBlbmRzIGR1cmluZyBhbm90aGVyIGpvYlxuXHRcdFx0XHRcdHNoaWZ0RW5kOiB7ICRsdGU6IGpvYlBvc3RpbmcuZW5kLCAkZ3Q6IGpvYlBvc3Rpbmcuc3RhcnQgfSxcblx0XHRcdFx0fSxcblx0XHRcdF0sXG5cdFx0fSlcblxuXHRcdGlmIChvdmVybGFwcGluZ0pvYikge1xuXHRcdFx0cmV0dXJuIHJlc1xuXHRcdFx0XHQuc3RhdHVzKDQwMClcblx0XHRcdFx0Lmpzb24oeyBtZXNzYWdlOiAnWW91IGFscmVhZHkgaGF2ZSBhIHNjaGVkdWxlZCBqb2IgYXQgdGhpcyB0aW1lLicgfSlcblx0XHR9XG5cblx0XHQvLyBDaGVjayAyOiBUaGUgam9iIHN0YXJ0IHRpbWUgaXMgbm90IGluIHRoZSBwYXN0LlxuXHRcdGlmIChuZXcgRGF0ZShqb2JQb3N0aW5nLnN0YXJ0KSA8IG5ldyBEYXRlKCkpIHtcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6ICdUaGlzIGpvYiBoYXMgYWxyZWFkeSBleHBpcmVkLicgfSlcblx0XHR9XG5cblx0XHRqb2JBcHBsaWNhdGlvbi5zdGF0dXMgPSAnU0NIRURVTEVEJ1xuXHRcdGF3YWl0IGpvYkFwcGxpY2F0aW9uLnNhdmUoKVxuXG5cdFx0am9iUG9zdGluZy5maWxsZWQgPSB0cnVlXG5cdFx0YXdhaXQgam9iUG9zdGluZy5zYXZlKClcblxuXHRcdGNvbnN0IGpvYjogSUpvYiA9IG5ldyBKb2JNb2RlbCh7XG5cdFx0XHRuYW1lOiBqb2JQb3N0aW5nLm5hbWUsXG5cdFx0XHR3b3JrZXJJZDogam9iQXBwbGljYXRpb24ud29ya2VyLFxuXHRcdFx0Y29tcGFueUlkOiBqb2JQb3N0aW5nLmNvbXBhbnksXG5cdFx0XHRqb2JQb3N0aW5nSWQ6IGpvYlBvc3RpbmcuaWQsXG5cdFx0XHRzaGlmdFN0YXJ0OiBqb2JQb3N0aW5nLnN0YXJ0LFxuXHRcdFx0c2hpZnRFbmQ6IGpvYlBvc3RpbmcuZW5kLFxuXHRcdH0pXG5cblx0XHRhd2FpdCBqb2Iuc2F2ZSgpXG5cblx0XHRyZXMuc3RhdHVzKDIwMCkuanNvbih7XG5cdFx0XHRtZXNzYWdlOiAnQ29uZmlybWVkIGpvYiBhcHBsaWNhdGlvbi4gTmV3IGpvYiBjcmVhdGVkJyxcblx0XHRcdGpvYixcblx0XHR9KVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcblx0XHRcdG1lc3NhZ2U6ICdBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSB1cGRhdGluZyB0aGUgam9iIGFwcGxpY2F0aW9uIHN0YXR1cy4nLFxuXHRcdFx0ZXJyb3IsXG5cdFx0fSlcblx0fVxufVxuXG5jb25zdCBKb2JBcHBsaWNhdGlvbkNvbnRyb2xsZXIgPSB7XG5cdGFwcGx5Rm9ySm9iLFxuXHR1cGRhdGVTdGF0dXMsXG5cdGFjY2VwdEFwcGxpY2F0aW9uLFxuXHRjb25maXJtSm9iLFxufVxuXG5leHBvcnQgZGVmYXVsdCBKb2JBcHBsaWNhdGlvbkNvbnRyb2xsZXJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQU1BLElBQUFBLGdCQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBQyxZQUFBLEdBQUFGLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBRSxvQkFBQSxHQUFBSCxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUcsU0FBQSxHQUFBSixzQkFBQSxDQUFBQyxPQUFBO0FBRUEsSUFBQUksb0JBQUEsR0FBQUwsc0JBQUEsQ0FBQUMsT0FBQTtBQUFrRixTQUFBRCx1QkFBQU0sR0FBQSxXQUFBQSxHQUFBLElBQUFBLEdBQUEsQ0FBQUMsVUFBQSxHQUFBRCxHQUFBLGdCQUFBQSxHQUFBO0FBQUEsU0FBQUUsb0JBQUEsa0JBVmxGLHFKQUFBQSxtQkFBQSxZQUFBQSxvQkFBQSxXQUFBQyxPQUFBLFNBQUFBLE9BQUEsT0FBQUMsRUFBQSxHQUFBQyxNQUFBLENBQUFDLFNBQUEsRUFBQUMsTUFBQSxHQUFBSCxFQUFBLENBQUFJLGNBQUEsRUFBQUMsY0FBQSxHQUFBSixNQUFBLENBQUFJLGNBQUEsY0FBQVQsR0FBQSxFQUFBVSxHQUFBLEVBQUFDLElBQUEsSUFBQVgsR0FBQSxDQUFBVSxHQUFBLElBQUFDLElBQUEsQ0FBQUMsS0FBQSxLQUFBQyxPQUFBLHdCQUFBQyxNQUFBLEdBQUFBLE1BQUEsT0FBQUMsY0FBQSxHQUFBRixPQUFBLENBQUFHLFFBQUEsa0JBQUFDLG1CQUFBLEdBQUFKLE9BQUEsQ0FBQUssYUFBQSx1QkFBQUMsaUJBQUEsR0FBQU4sT0FBQSxDQUFBTyxXQUFBLDhCQUFBQyxPQUFBckIs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