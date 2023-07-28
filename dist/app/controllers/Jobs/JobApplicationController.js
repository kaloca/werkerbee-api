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
          res.status(200).json({
            message: 'Accepted job application'
          });
          _context3.next = 26;
          break;
        case 23:
          _context3.prev = 23;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json({
            message: 'An error occurred while updating the job application status.',
            error: _context3.t0
          });
        case 26:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 23]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfSm9iUG9zdGluZ01vZGVsIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfV29ya2VyTW9kZWwiLCJfSm9iQXBwbGljYXRpb25Nb2RlbCIsIl9Kb2JNb2RlbCIsIm9iaiIsIl9fZXNNb2R1bGUiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZXhwb3J0cyIsIk9wIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCJkZWZpbmVQcm9wZXJ0eSIsImtleSIsImRlc2MiLCJ2YWx1ZSIsIiRTeW1ib2wiLCJTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZXJyIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImZuIiwiYXJnIiwidHlwZSIsImNhbGwiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJfdHlwZW9mIiwiX19hd2FpdCIsInRoZW4iLCJ1bndyYXBwZWQiLCJlcnJvciIsInByZXZpb3VzUHJvbWlzZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwic3RhdGUiLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiZG9uZSIsIm1ldGhvZE5hbWUiLCJ1bmRlZmluZWQiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJsZW5ndGgiLCJpIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwiaXRlciIsImtleXMiLCJ2YWwiLCJvYmplY3QiLCJyZXZlcnNlIiwicG9wIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsIl9uZXh0IiwiX3Rocm93IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJhcHBseUZvckpvYiIsIl9yZWYiLCJfY2FsbGVlIiwicmVxIiwicmVzIiwiX3JlcSR1c2VyIiwiam9iUG9zdGluZ0lkIiwid29ya2VySWQiLCJqb2JQb3N0aW5nIiwid29ya2VyIiwiYXBwbGljYXRpb24iLCJqb2JBcHBsaWNhdGlvbiIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwYXJhbXMiLCJpZCIsInVzZXIiLCJ1c2VySWQiLCJKb2JQb3N0aW5nTW9kZWwiLCJmaW5kQnlJZCIsInNlbGVjdCIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiV29ya2VyTW9kZWwiLCJKb2JBcHBsaWNhdGlvbk1vZGVsIiwiZmluZE9uZSIsImNvbXBhbnkiLCJzYXZlIiwiYXBwbGljYXRpb25zIiwiX2lkIiwidDAiLCJjb25zb2xlIiwibG9nIiwiX3giLCJfeDIiLCJ1cGRhdGVTdGF0dXMiLCJfcmVmMiIsIl9jYWxsZWUyIiwiX3JlcSR1c2VyMiIsImFwcGxpY2F0aW9uSWQiLCJjb21wYW55SWQiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJib2R5IiwiU3RyaW5nIiwiX3gzIiwiX3g0IiwiYWNjZXB0QXBwbGljYXRpb24iLCJfcmVmMyIsIl9jYWxsZWUzIiwiX3JlcSR1c2VyMyIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsIl94NSIsIl94NiIsImNvbmZpcm1Kb2IiLCJfcmVmNCIsIl9jYWxsZWU0IiwiX3JlcSR1c2VyNCIsIm92ZXJsYXBwaW5nSm9iIiwiam9iIiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0IiwiSm9iTW9kZWwiLCIkb3IiLCJzaGlmdFN0YXJ0IiwiJGx0IiwiZW5kIiwiJGd0ZSIsInN0YXJ0Iiwic2hpZnRFbmQiLCIkbHRlIiwiJGd0IiwiRGF0ZSIsImZpbGxlZCIsIl94NyIsIl94OCIsIkpvYkFwcGxpY2F0aW9uQ29udHJvbGxlciIsIl9kZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FwcC9jb250cm9sbGVycy9Kb2JzL0pvYkFwcGxpY2F0aW9uQ29udHJvbGxlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnXG5cbmltcG9ydCB7IElKb2JQb3N0aW5nIH0gZnJvbSAnQC9hcHAvaW50ZXJmYWNlcy9tb2RlbHMvSm9iUG9zdGluZydcbmltcG9ydCB7IElXb3JrZXIgfSBmcm9tICdAL2FwcC9pbnRlcmZhY2VzL21vZGVscy9Xb3JrZXInXG5pbXBvcnQgeyBJSm9iIH0gZnJvbSAnQC9hcHAvaW50ZXJmYWNlcy9tb2RlbHMvSm9iJ1xuXG5pbXBvcnQgSm9iUG9zdGluZ01vZGVsIGZyb20gJ0AvYXBwL21vZGVscy9Kb2JQb3N0aW5nTW9kZWwnXG5pbXBvcnQgV29ya2VyTW9kZWwgZnJvbSAnQC9hcHAvbW9kZWxzL1dvcmtlck1vZGVsJ1xuaW1wb3J0IEpvYkFwcGxpY2F0aW9uTW9kZWwgZnJvbSAnQC9hcHAvbW9kZWxzL0pvYkFwcGxpY2F0aW9uTW9kZWwnXG5pbXBvcnQgSm9iTW9kZWwgZnJvbSAnQC9hcHAvbW9kZWxzL0pvYk1vZGVsJ1xuaW1wb3J0IHsgSUpvYkFwcGxpY2F0aW9uIH0gZnJvbSAnQC9hcHAvaW50ZXJmYWNlcy9tb2RlbHMvSm9iQXBwbGljYXRpb24nXG5cbmNvbnN0IGFwcGx5Rm9ySm9iID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IGpvYlBvc3RpbmdJZCA9IHJlcS5wYXJhbXMuaWRcblx0XHRjb25zdCB3b3JrZXJJZCA9IHJlcS51c2VyPy51c2VySWQgfHwgJ2lkJ1xuXG5cdFx0Y29uc3Qgam9iUG9zdGluZzogSUpvYlBvc3RpbmcgfCBudWxsID0gYXdhaXQgSm9iUG9zdGluZ01vZGVsLmZpbmRCeUlkKFxuXHRcdFx0am9iUG9zdGluZ0lkXG5cdFx0KS5zZWxlY3QoJythcHBsaWNhdGlvbnMnKVxuXG5cdFx0aWYgKCFqb2JQb3N0aW5nKSB7XG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlOiAnSm9iIG5vdCBmb3VuZC4nIH0pXG5cdFx0fVxuXG5cdFx0Y29uc3Qgd29ya2VyOiBJV29ya2VyIHwgbnVsbCA9IGF3YWl0IFdvcmtlck1vZGVsLmZpbmRCeUlkKHdvcmtlcklkKVxuXG5cdFx0aWYgKCF3b3JrZXIpIHtcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6ICdXb3JrZXIgbm90IGZvdW5kLicgfSlcblx0XHR9XG5cblx0XHRjb25zdCBhcHBsaWNhdGlvbjogSUpvYkFwcGxpY2F0aW9uIHwgbnVsbCA9XG5cdFx0XHRhd2FpdCBKb2JBcHBsaWNhdGlvbk1vZGVsLmZpbmRPbmUoe1xuXHRcdFx0XHR3b3JrZXI6IHdvcmtlcklkLFxuXHRcdFx0XHRqb2JQb3N0aW5nOiBqb2JQb3N0aW5nSWQsXG5cdFx0XHR9KVxuXG5cdFx0aWYgKGFwcGxpY2F0aW9uKSB7XG5cdFx0XHRyZXR1cm4gcmVzXG5cdFx0XHRcdC5zdGF0dXMoNDAwKVxuXHRcdFx0XHQuanNvbih7IG1lc3NhZ2U6ICdZb3UgaGF2ZSBhbHJlYWR5IGFwcGxpZWQgZm9yIHRoaXMgam9iJyB9KVxuXHRcdH1cblxuXHRcdC8vIENyZWF0ZSBhIG5ldyBqb2IgYXBwbGljYXRpb24gaW5zdGFuY2Vcblx0XHRjb25zdCBqb2JBcHBsaWNhdGlvbiA9IG5ldyBKb2JBcHBsaWNhdGlvbk1vZGVsKHtcblx0XHRcdHdvcmtlcjogd29ya2VySWQsXG5cdFx0XHRjb21wYW55OiBqb2JQb3N0aW5nLmNvbXBhbnksXG5cdFx0XHRqb2JQb3N0aW5nOiBqb2JQb3N0aW5nSWQsXG5cdFx0XHRzdGF0dXM6ICdQRU5ESU5HJyxcblx0XHR9KVxuXHRcdGF3YWl0IGpvYkFwcGxpY2F0aW9uLnNhdmUoKVxuXG5cdFx0am9iUG9zdGluZy5hcHBsaWNhdGlvbnMucHVzaChqb2JBcHBsaWNhdGlvbi5faWQpXG5cdFx0YXdhaXQgam9iUG9zdGluZy5zYXZlKClcblxuXHRcdHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogJ0FwcGxpY2F0aW9uIHN1Ym1pdHRlZCBzdWNjZXNzZnVsbHkuJyB9KVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUubG9nKGVycm9yKVxuXHRcdHJlc1xuXHRcdFx0LnN0YXR1cyg1MDApXG5cdFx0XHQuanNvbih7IG1lc3NhZ2U6ICdBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBhcHBseWluZyBmb3IgdGhlIGpvYi4nLCBlcnJvciB9KVxuXHR9XG59XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVTdGF0dXMgPSBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgeyBhcHBsaWNhdGlvbklkIH0gPSByZXEucGFyYW1zXG5cdFx0Y29uc3QgY29tcGFueUlkID0gcmVxLnVzZXI/LnVzZXJJZFxuXHRcdGNvbnN0IHsgc3RhdHVzIH0gPSByZXEuYm9keVxuXG5cdFx0Y29uc3Qgam9iQXBwbGljYXRpb24gPSBhd2FpdCBKb2JBcHBsaWNhdGlvbk1vZGVsLmZpbmRCeUlkKGFwcGxpY2F0aW9uSWQpXG5cblx0XHRpZiAoIWpvYkFwcGxpY2F0aW9uKSB7XG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlOiAnSm9iIGFwcGxpY2F0aW9uIG5vdCBmb3VuZC4nIH0pXG5cdFx0fVxuXG5cdFx0aWYgKFN0cmluZyhqb2JBcHBsaWNhdGlvbi5jb21wYW55KSAhPSBjb21wYW55SWQpIHtcblx0XHRcdHJldHVybiByZXNcblx0XHRcdFx0LnN0YXR1cyg0MDMpXG5cdFx0XHRcdC5qc29uKHsgbWVzc2FnZTogJ1VuYXV0aG9yaXplZCB0byBhY2Nlc3MgdGhpcyBqb2IgYXBwbGljYXRpb24uJyB9KVxuXHRcdH1cblxuXHRcdGpvYkFwcGxpY2F0aW9uLnN0YXR1cyA9IHN0YXR1c1xuXHRcdGF3YWl0IGpvYkFwcGxpY2F0aW9uLnNhdmUoKVxuXG5cdFx0cmVzLnN0YXR1cygyMDApLmpzb24oe1xuXHRcdFx0bWVzc2FnZTogJ0pvYiBhcHBsaWNhdGlvbiBzdGF0dXMgdXBkYXRlZCBzdWNjZXNzZnVsbHkuJyxcblx0XHRcdGpvYkFwcGxpY2F0aW9uLFxuXHRcdH0pXG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0cmVzLnN0YXR1cyg1MDApLmpzb24oe1xuXHRcdFx0bWVzc2FnZTogJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIHVwZGF0aW5nIHRoZSBqb2IgYXBwbGljYXRpb24gc3RhdHVzLicsXG5cdFx0XHRlcnJvcixcblx0XHR9KVxuXHR9XG59XG5cbmV4cG9ydCBjb25zdCBhY2NlcHRBcHBsaWNhdGlvbiA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCB7IGFwcGxpY2F0aW9uSWQgfSA9IHJlcS5wYXJhbXNcblx0XHRjb25zdCBjb21wYW55SWQgPSByZXEudXNlcj8udXNlcklkXG5cdFx0Ly8gY29uc3QgeyBzdGF0dXMgfSA9IHJlcS5ib2R5XG5cblx0XHRjb25zdCBqb2JBcHBsaWNhdGlvbjogSUpvYkFwcGxpY2F0aW9uIHwgbnVsbCA9XG5cdFx0XHRhd2FpdCBKb2JBcHBsaWNhdGlvbk1vZGVsLmZpbmRCeUlkKGFwcGxpY2F0aW9uSWQpXG5cblx0XHRpZiAoIWpvYkFwcGxpY2F0aW9uKSB7XG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlOiAnSm9iIGFwcGxpY2F0aW9uIG5vdCBmb3VuZC4nIH0pXG5cdFx0fVxuXG5cdFx0aWYgKFN0cmluZyhqb2JBcHBsaWNhdGlvbi5jb21wYW55KSAhPSBjb21wYW55SWQpIHtcblx0XHRcdHJldHVybiByZXNcblx0XHRcdFx0LnN0YXR1cyg0MDMpXG5cdFx0XHRcdC5qc29uKHsgbWVzc2FnZTogJ1VuYXV0aG9yaXplZCB0byBhY2Nlc3MgdGhpcyBqb2IgYXBwbGljYXRpb24uJyB9KVxuXHRcdH1cblxuXHRcdGlmIChqb2JBcHBsaWNhdGlvbi5zdGF0dXMgPT0gJ0FDQ0VQVEVEJykge1xuXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogJ0FwcGxpY2F0aW9uIGFscmVhZHkgYWNjZXB0ZWQnIH0pXG5cdFx0fVxuXG5cdFx0Y29uc3Qgam9iUG9zdGluZyA9IGF3YWl0IEpvYlBvc3RpbmdNb2RlbC5maW5kQnlJZChqb2JBcHBsaWNhdGlvbi5qb2JQb3N0aW5nKVxuXG5cdFx0aWYgKCFqb2JQb3N0aW5nKSB7XG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnU29tZXRoaW5nIHdlbnQgd3JvbmcgKDEwMiknIH0pXG5cdFx0fVxuXG5cdFx0am9iQXBwbGljYXRpb24uc3RhdHVzID0gJ0FDQ0VQVEVEJ1xuXHRcdGF3YWl0IGpvYkFwcGxpY2F0aW9uLnNhdmUoKVxuXG5cdFx0cmVzLnN0YXR1cygyMDApLmpzb24oe1xuXHRcdFx0bWVzc2FnZTogJ0FjY2VwdGVkIGpvYiBhcHBsaWNhdGlvbicsXG5cdFx0fSlcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRyZXMuc3RhdHVzKDUwMCkuanNvbih7XG5cdFx0XHRtZXNzYWdlOiAnQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgdXBkYXRpbmcgdGhlIGpvYiBhcHBsaWNhdGlvbiBzdGF0dXMuJyxcblx0XHRcdGVycm9yLFxuXHRcdH0pXG5cdH1cbn1cblxuZXhwb3J0IGNvbnN0IGNvbmZpcm1Kb2IgPSBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgeyBhcHBsaWNhdGlvbklkIH0gPSByZXEucGFyYW1zXG5cdFx0Y29uc3Qgd29ya2VySWQgPSByZXEudXNlcj8udXNlcklkXG5cdFx0Ly8gY29uc3QgeyBzdGF0dXMgfSA9IHJlcS5ib2R5XG5cblx0XHRjb25zdCBqb2JBcHBsaWNhdGlvbjogSUpvYkFwcGxpY2F0aW9uIHwgbnVsbCA9XG5cdFx0XHRhd2FpdCBKb2JBcHBsaWNhdGlvbk1vZGVsLmZpbmRCeUlkKGFwcGxpY2F0aW9uSWQpXG5cblx0XHRpZiAoIWpvYkFwcGxpY2F0aW9uKSB7XG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlOiAnSm9iIGFwcGxpY2F0aW9uIG5vdCBmb3VuZC4nIH0pXG5cdFx0fVxuXG5cdFx0aWYgKFN0cmluZyhqb2JBcHBsaWNhdGlvbi53b3JrZXIpICE9IHdvcmtlcklkKSB7XG5cdFx0XHRyZXR1cm4gcmVzXG5cdFx0XHRcdC5zdGF0dXMoNDAzKVxuXHRcdFx0XHQuanNvbih7IG1lc3NhZ2U6ICdVbmF1dGhvcml6ZWQgdG8gYWNjZXNzIHRoaXMgam9iIGFwcGxpY2F0aW9uLicgfSlcblx0XHR9XG5cblx0XHRpZiAoam9iQXBwbGljYXRpb24uc3RhdHVzICE9ICdBQ0NFUFRFRCcpIHtcblx0XHRcdHJldHVybiByZXNcblx0XHRcdFx0LnN0YXR1cyg0MDApXG5cdFx0XHRcdC5qc29uKHsgbWVzc2FnZTogJ0Nhbm5vdCBjb25maXJtIGpvYiBiZWZvcmUgYmVpbmcgYWNjZXB0ZWQnIH0pXG5cdFx0fVxuXG5cdFx0Y29uc3Qgam9iUG9zdGluZyA9IGF3YWl0IEpvYlBvc3RpbmdNb2RlbC5maW5kQnlJZChqb2JBcHBsaWNhdGlvbi5qb2JQb3N0aW5nKVxuXG5cdFx0aWYgKCFqb2JQb3N0aW5nKSB7XG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnU29tZXRoaW5nIHdlbnQgd3JvbmcgKDEwMiknIH0pXG5cdFx0fVxuXG5cdFx0Y29uc3Qgb3ZlcmxhcHBpbmdKb2IgPSBhd2FpdCBKb2JNb2RlbC5maW5kT25lKHtcblx0XHRcdHdvcmtlcklkOiB3b3JrZXJJZCxcblx0XHRcdCRvcjogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Ly8gSm9iIHN0YXJ0cyBkdXJpbmcgYW5vdGhlciBqb2Jcblx0XHRcdFx0XHRzaGlmdFN0YXJ0OiB7ICRsdDogam9iUG9zdGluZy5lbmQsICRndGU6IGpvYlBvc3Rpbmcuc3RhcnQgfSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdC8vIEpvYiBlbmRzIGR1cmluZyBhbm90aGVyIGpvYlxuXHRcdFx0XHRcdHNoaWZ0RW5kOiB7ICRsdGU6IGpvYlBvc3RpbmcuZW5kLCAkZ3Q6IGpvYlBvc3Rpbmcuc3RhcnQgfSxcblx0XHRcdFx0fSxcblx0XHRcdF0sXG5cdFx0fSlcblxuXHRcdGlmIChvdmVybGFwcGluZ0pvYikge1xuXHRcdFx0cmV0dXJuIHJlc1xuXHRcdFx0XHQuc3RhdHVzKDQwMClcblx0XHRcdFx0Lmpzb24oeyBtZXNzYWdlOiAnWW91IGFscmVhZHkgaGF2ZSBhIHNjaGVkdWxlZCBqb2IgYXQgdGhpcyB0aW1lLicgfSlcblx0XHR9XG5cblx0XHQvLyBDaGVjayAyOiBUaGUgam9iIHN0YXJ0IHRpbWUgaXMgbm90IGluIHRoZSBwYXN0LlxuXHRcdGlmIChuZXcgRGF0ZShqb2JQb3N0aW5nLnN0YXJ0KSA8IG5ldyBEYXRlKCkpIHtcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6ICdUaGlzIGpvYiBoYXMgYWxyZWFkeSBleHBpcmVkLicgfSlcblx0XHR9XG5cblx0XHRqb2JBcHBsaWNhdGlvbi5zdGF0dXMgPSAnU0NIRURVTEVEJ1xuXHRcdGF3YWl0IGpvYkFwcGxpY2F0aW9uLnNhdmUoKVxuXG5cdFx0am9iUG9zdGluZy5maWxsZWQgPSB0cnVlXG5cdFx0YXdhaXQgam9iUG9zdGluZy5zYXZlKClcblxuXHRcdGNvbnN0IGpvYjogSUpvYiA9IG5ldyBKb2JNb2RlbCh7XG5cdFx0XHRuYW1lOiBqb2JQb3N0aW5nLm5hbWUsXG5cdFx0XHR3b3JrZXJJZDogam9iQXBwbGljYXRpb24ud29ya2VyLFxuXHRcdFx0Y29tcGFueUlkOiBqb2JQb3N0aW5nLmNvbXBhbnksXG5cdFx0XHRqb2JQb3N0aW5nSWQ6IGpvYlBvc3RpbmcuaWQsXG5cdFx0XHRzaGlmdFN0YXJ0OiBqb2JQb3N0aW5nLnN0YXJ0LFxuXHRcdFx0c2hpZnRFbmQ6IGpvYlBvc3RpbmcuZW5kLFxuXHRcdH0pXG5cblx0XHRhd2FpdCBqb2Iuc2F2ZSgpXG5cblx0XHRyZXMuc3RhdHVzKDIwMCkuanNvbih7XG5cdFx0XHRtZXNzYWdlOiAnQ29uZmlybWVkIGpvYiBhcHBsaWNhdGlvbi4gTmV3IGpvYiBjcmVhdGVkJyxcblx0XHRcdGpvYixcblx0XHR9KVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcblx0XHRcdG1lc3NhZ2U6ICdBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSB1cGRhdGluZyB0aGUgam9iIGFwcGxpY2F0aW9uIHN0YXR1cy4nLFxuXHRcdFx0ZXJyb3IsXG5cdFx0fSlcblx0fVxufVxuXG5jb25zdCBKb2JBcHBsaWNhdGlvbkNvbnRyb2xsZXIgPSB7XG5cdGFwcGx5Rm9ySm9iLFxuXHR1cGRhdGVTdGF0dXMsXG5cdGFjY2VwdEFwcGxpY2F0aW9uLFxuXHRjb25maXJtSm9iLFxufVxuXG5leHBvcnQgZGVmYXVsdCBKb2JBcHBsaWNhdGlvbkNvbnRyb2xsZXJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQU1BLElBQUFBLGdCQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBQyxZQUFBLEdBQUFGLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBRSxvQkFBQSxHQUFBSCxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUcsU0FBQSxHQUFBSixzQkFBQSxDQUFBQyxPQUFBO0FBQTRDLFNBQUFELHVCQUFBSyxHQUFBLFdBQUFBLEdBQUEsSUFBQUEsR0FBQSxDQUFBQyxVQUFBLEdBQUFELEdBQUEsZ0JBQUFBLEdBQUE7QUFBQSxTQUFBRSxvQkFBQSxrQkFSNUMscUpBQUFBLG1CQUFBLFlBQUFBLG9CQUFBLFdBQUFDLE9BQUEsU0FBQUEsT0FBQSxPQUFBQyxFQUFBLEdBQUFDLE1BQUEsQ0FBQUMsU0FBQSxFQUFBQyxNQUFBLEdBQUFILEVBQUEsQ0FBQUksY0FBQSxFQUFBQyxjQUFBLEdBQUFK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