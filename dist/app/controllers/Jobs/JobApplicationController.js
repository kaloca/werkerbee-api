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
          console.log('heer');
          jobPostingId = req.params.id;
          workerId = ((_req$user = req.user) === null || _req$user === void 0 ? void 0 : _req$user.userId) || 'id';
          _context.next = 6;
          return _JobPostingModel["default"].findById(jobPostingId).select('+applications');
        case 6:
          jobPosting = _context.sent;
          if (jobPosting) {
            _context.next = 9;
            break;
          }
          return _context.abrupt("return", res.status(404).json({
            message: 'Job not found.'
          }));
        case 9:
          _context.next = 11;
          return _WorkerModel["default"].findById(workerId);
        case 11:
          worker = _context.sent;
          console.log(worker === null || worker === void 0 ? void 0 : worker.name);
          if (worker) {
            _context.next = 15;
            break;
          }
          return _context.abrupt("return", res.status(404).json({
            message: 'Worker not found.'
          }));
        case 15:
          _context.next = 17;
          return _JobApplicationModel["default"].findOne({
            worker: workerId,
            jobPosting: jobPostingId
          });
        case 17:
          application = _context.sent;
          if (!application) {
            _context.next = 20;
            break;
          }
          return _context.abrupt("return", res.status(400).json({
            message: 'You have already applied for this job'
          }));
        case 20:
          console.log('nowhere');
          // Create a new job application instance
          jobApplication = new _JobApplicationModel["default"]({
            worker: workerId,
            company: jobPosting.company,
            jobPosting: jobPostingId,
            status: 'PENDING'
          });
          _context.next = 24;
          return jobApplication.save();
        case 24:
          jobPosting.applications.push(jobApplication._id);
          _context.next = 27;
          return jobPosting.save();
        case 27:
          res.status(200).json({
            message: 'Application submitted successfully.'
          });
          _context.next = 34;
          break;
        case 30:
          _context.prev = 30;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          res.status(500).json({
            message: 'An error occurred while applying for the job.',
            error: _context.t0
          });
        case 34:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 30]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfSm9iUG9zdGluZ01vZGVsIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfV29ya2VyTW9kZWwiLCJfSm9iQXBwbGljYXRpb25Nb2RlbCIsIl9Kb2JNb2RlbCIsIm9iaiIsIl9fZXNNb2R1bGUiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZXhwb3J0cyIsIk9wIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCJkZWZpbmVQcm9wZXJ0eSIsImtleSIsImRlc2MiLCJ2YWx1ZSIsIiRTeW1ib2wiLCJTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZXJyIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImZuIiwiYXJnIiwidHlwZSIsImNhbGwiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJfdHlwZW9mIiwiX19hd2FpdCIsInRoZW4iLCJ1bndyYXBwZWQiLCJlcnJvciIsInByZXZpb3VzUHJvbWlzZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwic3RhdGUiLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiZG9uZSIsIm1ldGhvZE5hbWUiLCJ1bmRlZmluZWQiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJsZW5ndGgiLCJpIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwiaXRlciIsImtleXMiLCJ2YWwiLCJvYmplY3QiLCJyZXZlcnNlIiwicG9wIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsIl9uZXh0IiwiX3Rocm93IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJhcHBseUZvckpvYiIsIl9yZWYiLCJfY2FsbGVlIiwicmVxIiwicmVzIiwiX3JlcSR1c2VyIiwiam9iUG9zdGluZ0lkIiwid29ya2VySWQiLCJqb2JQb3N0aW5nIiwid29ya2VyIiwiYXBwbGljYXRpb24iLCJqb2JBcHBsaWNhdGlvbiIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJjb25zb2xlIiwibG9nIiwicGFyYW1zIiwiaWQiLCJ1c2VyIiwidXNlcklkIiwiSm9iUG9zdGluZ01vZGVsIiwiZmluZEJ5SWQiLCJzZWxlY3QiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsIldvcmtlck1vZGVsIiwiSm9iQXBwbGljYXRpb25Nb2RlbCIsImZpbmRPbmUiLCJjb21wYW55Iiwic2F2ZSIsImFwcGxpY2F0aW9ucyIsIl9pZCIsInQwIiwiX3giLCJfeDIiLCJ1cGRhdGVTdGF0dXMiLCJfcmVmMiIsIl9jYWxsZWUyIiwiX3JlcSR1c2VyMiIsImFwcGxpY2F0aW9uSWQiLCJjb21wYW55SWQiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJib2R5IiwiU3RyaW5nIiwiX3gzIiwiX3g0IiwiYWNjZXB0QXBwbGljYXRpb24iLCJfcmVmMyIsIl9jYWxsZWUzIiwiX3JlcSR1c2VyMyIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsIl94NSIsIl94NiIsImNvbmZpcm1Kb2IiLCJfcmVmNCIsIl9jYWxsZWU0IiwiX3JlcSR1c2VyNCIsIm92ZXJsYXBwaW5nSm9iIiwiam9iIiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0IiwiSm9iTW9kZWwiLCIkb3IiLCJzaGlmdFN0YXJ0IiwiJGx0IiwiZW5kIiwiJGd0ZSIsInN0YXJ0Iiwic2hpZnRFbmQiLCIkbHRlIiwiJGd0IiwiRGF0ZSIsImZpbGxlZCIsIl94NyIsIl94OCIsIkpvYkFwcGxpY2F0aW9uQ29udHJvbGxlciIsIl9kZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FwcC9jb250cm9sbGVycy9Kb2JzL0pvYkFwcGxpY2F0aW9uQ29udHJvbGxlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnXG5cbmltcG9ydCB7IElKb2JQb3N0aW5nIH0gZnJvbSAnQC9hcHAvaW50ZXJmYWNlcy9tb2RlbHMvSm9iUG9zdGluZydcbmltcG9ydCB7IElXb3JrZXIgfSBmcm9tICdAL2FwcC9pbnRlcmZhY2VzL21vZGVscy9Xb3JrZXInXG5pbXBvcnQgeyBJSm9iIH0gZnJvbSAnQC9hcHAvaW50ZXJmYWNlcy9tb2RlbHMvSm9iJ1xuXG5pbXBvcnQgSm9iUG9zdGluZ01vZGVsIGZyb20gJ0AvYXBwL21vZGVscy9Kb2JQb3N0aW5nTW9kZWwnXG5pbXBvcnQgV29ya2VyTW9kZWwgZnJvbSAnQC9hcHAvbW9kZWxzL1dvcmtlck1vZGVsJ1xuaW1wb3J0IEpvYkFwcGxpY2F0aW9uTW9kZWwgZnJvbSAnQC9hcHAvbW9kZWxzL0pvYkFwcGxpY2F0aW9uTW9kZWwnXG5pbXBvcnQgSm9iTW9kZWwgZnJvbSAnQC9hcHAvbW9kZWxzL0pvYk1vZGVsJ1xuaW1wb3J0IHsgSUpvYkFwcGxpY2F0aW9uIH0gZnJvbSAnQC9hcHAvaW50ZXJmYWNlcy9tb2RlbHMvSm9iQXBwbGljYXRpb24nXG5cbmNvbnN0IGFwcGx5Rm9ySm9iID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnNvbGUubG9nKCdoZWVyJylcblx0XHRjb25zdCBqb2JQb3N0aW5nSWQgPSByZXEucGFyYW1zLmlkXG5cdFx0Y29uc3Qgd29ya2VySWQgPSByZXEudXNlcj8udXNlcklkIHx8ICdpZCdcblxuXHRcdGNvbnN0IGpvYlBvc3Rpbmc6IElKb2JQb3N0aW5nIHwgbnVsbCA9IGF3YWl0IEpvYlBvc3RpbmdNb2RlbC5maW5kQnlJZChcblx0XHRcdGpvYlBvc3RpbmdJZFxuXHRcdCkuc2VsZWN0KCcrYXBwbGljYXRpb25zJylcblxuXHRcdGlmICgham9iUG9zdGluZykge1xuXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZTogJ0pvYiBub3QgZm91bmQuJyB9KVxuXHRcdH1cblxuXHRcdGNvbnN0IHdvcmtlcjogSVdvcmtlciB8IG51bGwgPSBhd2FpdCBXb3JrZXJNb2RlbC5maW5kQnlJZCh3b3JrZXJJZClcblx0XHRjb25zb2xlLmxvZyh3b3JrZXI/Lm5hbWUpXG5cdFx0aWYgKCF3b3JrZXIpIHtcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6ICdXb3JrZXIgbm90IGZvdW5kLicgfSlcblx0XHR9XG5cblx0XHRjb25zdCBhcHBsaWNhdGlvbjogSUpvYkFwcGxpY2F0aW9uIHwgbnVsbCA9XG5cdFx0XHRhd2FpdCBKb2JBcHBsaWNhdGlvbk1vZGVsLmZpbmRPbmUoe1xuXHRcdFx0XHR3b3JrZXI6IHdvcmtlcklkLFxuXHRcdFx0XHRqb2JQb3N0aW5nOiBqb2JQb3N0aW5nSWQsXG5cdFx0XHR9KVxuXG5cdFx0aWYgKGFwcGxpY2F0aW9uKSB7XG5cdFx0XHRyZXR1cm4gcmVzXG5cdFx0XHRcdC5zdGF0dXMoNDAwKVxuXHRcdFx0XHQuanNvbih7IG1lc3NhZ2U6ICdZb3UgaGF2ZSBhbHJlYWR5IGFwcGxpZWQgZm9yIHRoaXMgam9iJyB9KVxuXHRcdH1cblx0XHRjb25zb2xlLmxvZygnbm93aGVyZScpXG5cdFx0Ly8gQ3JlYXRlIGEgbmV3IGpvYiBhcHBsaWNhdGlvbiBpbnN0YW5jZVxuXHRcdGNvbnN0IGpvYkFwcGxpY2F0aW9uID0gbmV3IEpvYkFwcGxpY2F0aW9uTW9kZWwoe1xuXHRcdFx0d29ya2VyOiB3b3JrZXJJZCxcblx0XHRcdGNvbXBhbnk6IGpvYlBvc3RpbmcuY29tcGFueSxcblx0XHRcdGpvYlBvc3Rpbmc6IGpvYlBvc3RpbmdJZCxcblx0XHRcdHN0YXR1czogJ1BFTkRJTkcnLFxuXHRcdH0pXG5cdFx0YXdhaXQgam9iQXBwbGljYXRpb24uc2F2ZSgpXG5cblx0XHRqb2JQb3N0aW5nLmFwcGxpY2F0aW9ucy5wdXNoKGpvYkFwcGxpY2F0aW9uLl9pZClcblx0XHRhd2FpdCBqb2JQb3N0aW5nLnNhdmUoKVxuXG5cdFx0cmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiAnQXBwbGljYXRpb24gc3VibWl0dGVkIHN1Y2Nlc3NmdWxseS4nIH0pXG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5sb2coZXJyb3IpXG5cdFx0cmVzXG5cdFx0XHQuc3RhdHVzKDUwMClcblx0XHRcdC5qc29uKHsgbWVzc2FnZTogJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIGFwcGx5aW5nIGZvciB0aGUgam9iLicsIGVycm9yIH0pXG5cdH1cbn1cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVN0YXR1cyA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCB7IGFwcGxpY2F0aW9uSWQgfSA9IHJlcS5wYXJhbXNcblx0XHRjb25zdCBjb21wYW55SWQgPSByZXEudXNlcj8udXNlcklkXG5cdFx0Y29uc3QgeyBzdGF0dXMgfSA9IHJlcS5ib2R5XG5cblx0XHRjb25zdCBqb2JBcHBsaWNhdGlvbiA9IGF3YWl0IEpvYkFwcGxpY2F0aW9uTW9kZWwuZmluZEJ5SWQoYXBwbGljYXRpb25JZClcblxuXHRcdGlmICgham9iQXBwbGljYXRpb24pIHtcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6ICdKb2IgYXBwbGljYXRpb24gbm90IGZvdW5kLicgfSlcblx0XHR9XG5cblx0XHRpZiAoU3RyaW5nKGpvYkFwcGxpY2F0aW9uLmNvbXBhbnkpICE9IGNvbXBhbnlJZCkge1xuXHRcdFx0cmV0dXJuIHJlc1xuXHRcdFx0XHQuc3RhdHVzKDQwMylcblx0XHRcdFx0Lmpzb24oeyBtZXNzYWdlOiAnVW5hdXRob3JpemVkIHRvIGFjY2VzcyB0aGlzIGpvYiBhcHBsaWNhdGlvbi4nIH0pXG5cdFx0fVxuXG5cdFx0am9iQXBwbGljYXRpb24uc3RhdHVzID0gc3RhdHVzXG5cdFx0YXdhaXQgam9iQXBwbGljYXRpb24uc2F2ZSgpXG5cblx0XHRyZXMuc3RhdHVzKDIwMCkuanNvbih7XG5cdFx0XHRtZXNzYWdlOiAnSm9iIGFwcGxpY2F0aW9uIHN0YXR1cyB1cGRhdGVkIHN1Y2Nlc3NmdWxseS4nLFxuXHRcdFx0am9iQXBwbGljYXRpb24sXG5cdFx0fSlcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRyZXMuc3RhdHVzKDUwMCkuanNvbih7XG5cdFx0XHRtZXNzYWdlOiAnQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgdXBkYXRpbmcgdGhlIGpvYiBhcHBsaWNhdGlvbiBzdGF0dXMuJyxcblx0XHRcdGVycm9yLFxuXHRcdH0pXG5cdH1cbn1cblxuZXhwb3J0IGNvbnN0IGFjY2VwdEFwcGxpY2F0aW9uID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHsgYXBwbGljYXRpb25JZCB9ID0gcmVxLnBhcmFtc1xuXHRcdGNvbnN0IGNvbXBhbnlJZCA9IHJlcS51c2VyPy51c2VySWRcblx0XHQvLyBjb25zdCB7IHN0YXR1cyB9ID0gcmVxLmJvZHlcblxuXHRcdGNvbnN0IGpvYkFwcGxpY2F0aW9uOiBJSm9iQXBwbGljYXRpb24gfCBudWxsID1cblx0XHRcdGF3YWl0IEpvYkFwcGxpY2F0aW9uTW9kZWwuZmluZEJ5SWQoYXBwbGljYXRpb25JZClcblxuXHRcdGlmICgham9iQXBwbGljYXRpb24pIHtcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6ICdKb2IgYXBwbGljYXRpb24gbm90IGZvdW5kLicgfSlcblx0XHR9XG5cblx0XHRpZiAoU3RyaW5nKGpvYkFwcGxpY2F0aW9uLmNvbXBhbnkpICE9IGNvbXBhbnlJZCkge1xuXHRcdFx0cmV0dXJuIHJlc1xuXHRcdFx0XHQuc3RhdHVzKDQwMylcblx0XHRcdFx0Lmpzb24oeyBtZXNzYWdlOiAnVW5hdXRob3JpemVkIHRvIGFjY2VzcyB0aGlzIGpvYiBhcHBsaWNhdGlvbi4nIH0pXG5cdFx0fVxuXG5cdFx0aWYgKGpvYkFwcGxpY2F0aW9uLnN0YXR1cyA9PSAnQUNDRVBURUQnKSB7XG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiAnQXBwbGljYXRpb24gYWxyZWFkeSBhY2NlcHRlZCcgfSlcblx0XHR9XG5cblx0XHRjb25zdCBqb2JQb3N0aW5nID0gYXdhaXQgSm9iUG9zdGluZ01vZGVsLmZpbmRCeUlkKGpvYkFwcGxpY2F0aW9uLmpvYlBvc3RpbmcpXG5cblx0XHRpZiAoIWpvYlBvc3RpbmcpIHtcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6ICdTb21ldGhpbmcgd2VudCB3cm9uZyAoMTAyKScgfSlcblx0XHR9XG5cblx0XHRqb2JBcHBsaWNhdGlvbi5zdGF0dXMgPSAnQUNDRVBURUQnXG5cdFx0YXdhaXQgam9iQXBwbGljYXRpb24uc2F2ZSgpXG5cblx0XHRyZXMuc3RhdHVzKDIwMCkuanNvbih7XG5cdFx0XHRtZXNzYWdlOiAnQWNjZXB0ZWQgam9iIGFwcGxpY2F0aW9uJyxcblx0XHR9KVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcblx0XHRcdG1lc3NhZ2U6ICdBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSB1cGRhdGluZyB0aGUgam9iIGFwcGxpY2F0aW9uIHN0YXR1cy4nLFxuXHRcdFx0ZXJyb3IsXG5cdFx0fSlcblx0fVxufVxuXG5leHBvcnQgY29uc3QgY29uZmlybUpvYiA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCB7IGFwcGxpY2F0aW9uSWQgfSA9IHJlcS5wYXJhbXNcblx0XHRjb25zdCB3b3JrZXJJZCA9IHJlcS51c2VyPy51c2VySWRcblx0XHQvLyBjb25zdCB7IHN0YXR1cyB9ID0gcmVxLmJvZHlcblxuXHRcdGNvbnN0IGpvYkFwcGxpY2F0aW9uOiBJSm9iQXBwbGljYXRpb24gfCBudWxsID1cblx0XHRcdGF3YWl0IEpvYkFwcGxpY2F0aW9uTW9kZWwuZmluZEJ5SWQoYXBwbGljYXRpb25JZClcblxuXHRcdGlmICgham9iQXBwbGljYXRpb24pIHtcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6ICdKb2IgYXBwbGljYXRpb24gbm90IGZvdW5kLicgfSlcblx0XHR9XG5cblx0XHRpZiAoU3RyaW5nKGpvYkFwcGxpY2F0aW9uLndvcmtlcikgIT0gd29ya2VySWQpIHtcblx0XHRcdHJldHVybiByZXNcblx0XHRcdFx0LnN0YXR1cyg0MDMpXG5cdFx0XHRcdC5qc29uKHsgbWVzc2FnZTogJ1VuYXV0aG9yaXplZCB0byBhY2Nlc3MgdGhpcyBqb2IgYXBwbGljYXRpb24uJyB9KVxuXHRcdH1cblxuXHRcdGlmIChqb2JBcHBsaWNhdGlvbi5zdGF0dXMgIT0gJ0FDQ0VQVEVEJykge1xuXHRcdFx0cmV0dXJuIHJlc1xuXHRcdFx0XHQuc3RhdHVzKDQwMClcblx0XHRcdFx0Lmpzb24oeyBtZXNzYWdlOiAnQ2Fubm90IGNvbmZpcm0gam9iIGJlZm9yZSBiZWluZyBhY2NlcHRlZCcgfSlcblx0XHR9XG5cblx0XHRjb25zdCBqb2JQb3N0aW5nID0gYXdhaXQgSm9iUG9zdGluZ01vZGVsLmZpbmRCeUlkKGpvYkFwcGxpY2F0aW9uLmpvYlBvc3RpbmcpXG5cblx0XHRpZiAoIWpvYlBvc3RpbmcpIHtcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6ICdTb21ldGhpbmcgd2VudCB3cm9uZyAoMTAyKScgfSlcblx0XHR9XG5cblx0XHRjb25zdCBvdmVybGFwcGluZ0pvYiA9IGF3YWl0IEpvYk1vZGVsLmZpbmRPbmUoe1xuXHRcdFx0d29ya2VySWQ6IHdvcmtlcklkLFxuXHRcdFx0JG9yOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHQvLyBKb2Igc3RhcnRzIGR1cmluZyBhbm90aGVyIGpvYlxuXHRcdFx0XHRcdHNoaWZ0U3RhcnQ6IHsgJGx0OiBqb2JQb3N0aW5nLmVuZCwgJGd0ZTogam9iUG9zdGluZy5zdGFydCB9LFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Ly8gSm9iIGVuZHMgZHVyaW5nIGFub3RoZXIgam9iXG5cdFx0XHRcdFx0c2hpZnRFbmQ6IHsgJGx0ZTogam9iUG9zdGluZy5lbmQsICRndDogam9iUG9zdGluZy5zdGFydCB9LFxuXHRcdFx0XHR9LFxuXHRcdFx0XSxcblx0XHR9KVxuXG5cdFx0aWYgKG92ZXJsYXBwaW5nSm9iKSB7XG5cdFx0XHRyZXR1cm4gcmVzXG5cdFx0XHRcdC5zdGF0dXMoNDAwKVxuXHRcdFx0XHQuanNvbih7IG1lc3NhZ2U6ICdZb3UgYWxyZWFkeSBoYXZlIGEgc2NoZWR1bGVkIGpvYiBhdCB0aGlzIHRpbWUuJyB9KVxuXHRcdH1cblxuXHRcdC8vIENoZWNrIDI6IFRoZSBqb2Igc3RhcnQgdGltZSBpcyBub3QgaW4gdGhlIHBhc3QuXG5cdFx0aWYgKG5ldyBEYXRlKGpvYlBvc3Rpbmcuc3RhcnQpIDwgbmV3IERhdGUoKSkge1xuXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogJ1RoaXMgam9iIGhhcyBhbHJlYWR5IGV4cGlyZWQuJyB9KVxuXHRcdH1cblxuXHRcdGpvYkFwcGxpY2F0aW9uLnN0YXR1cyA9ICdTQ0hFRFVMRUQnXG5cdFx0YXdhaXQgam9iQXBwbGljYXRpb24uc2F2ZSgpXG5cblx0XHRqb2JQb3N0aW5nLmZpbGxlZCA9IHRydWVcblx0XHRhd2FpdCBqb2JQb3N0aW5nLnNhdmUoKVxuXG5cdFx0Y29uc3Qgam9iOiBJSm9iID0gbmV3IEpvYk1vZGVsKHtcblx0XHRcdG5hbWU6IGpvYlBvc3RpbmcubmFtZSxcblx0XHRcdHdvcmtlcklkOiBqb2JBcHBsaWNhdGlvbi53b3JrZXIsXG5cdFx0XHRjb21wYW55SWQ6IGpvYlBvc3RpbmcuY29tcGFueSxcblx0XHRcdGpvYlBvc3RpbmdJZDogam9iUG9zdGluZy5pZCxcblx0XHRcdHNoaWZ0U3RhcnQ6IGpvYlBvc3Rpbmcuc3RhcnQsXG5cdFx0XHRzaGlmdEVuZDogam9iUG9zdGluZy5lbmQsXG5cdFx0fSlcblxuXHRcdGF3YWl0IGpvYi5zYXZlKClcblxuXHRcdHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcblx0XHRcdG1lc3NhZ2U6ICdDb25maXJtZWQgam9iIGFwcGxpY2F0aW9uLiBOZXcgam9iIGNyZWF0ZWQnLFxuXHRcdFx0am9iLFxuXHRcdH0pXG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0cmVzLnN0YXR1cyg1MDApLmpzb24oe1xuXHRcdFx0bWVzc2FnZTogJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIHVwZGF0aW5nIHRoZSBqb2IgYXBwbGljYXRpb24gc3RhdHVzLicsXG5cdFx0XHRlcnJvcixcblx0XHR9KVxuXHR9XG59XG5cbmNvbnN0IEpvYkFwcGxpY2F0aW9uQ29udHJvbGxlciA9IHtcblx0YXBwbHlGb3JKb2IsXG5cdHVwZGF0ZVN0YXR1cyxcblx0YWNjZXB0QXBwbGljYXRpb24sXG5cdGNvbmZpcm1Kb2IsXG59XG5cbmV4cG9ydCBkZWZhdWx0IEpvYkFwcGxpY2F0aW9uQ29udHJvbGxlclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBTUEsSUFBQUEsZ0JBQUEsR0FBQUMsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFDLFlBQUEsR0FBQUYsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFFLG9CQUFBLEdBQUFILHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBRyxTQUFBLEdBQUFKLHNCQUFBLENBQUFDLE9BQUE7QUFBNEMsU0FBQUQsdUJBQUFLLEdBQUEsV0FBQUEsR0FBQSxJQUFBQSxHQUFBLENBQUFDLFVBQUEsR0FBQUQsR0FBQSxnQkFBQUEsR0FBQTtBQUFBLFNBQUFFLG9CQUFBLGtCQVI1QyxxSkFBQUEsbUJBQUEsWUFBQUEsb0JBQUEsV0FBQUMsT0FBQSxTQUFBQSxPQUFBLE9B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