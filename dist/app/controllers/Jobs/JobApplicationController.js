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
          job = new _JobModel["default"]({
            name: jobPosting.name,
            workerId: jobApplication.worker,
            companyId: jobPosting.company,
            jobPostingId: jobPosting.id,
            shiftStart: jobPosting.start,
            shiftEnd: jobPosting.end
          });
          _context4.next = 30;
          return job.save();
        case 30:
          res.status(200).json({
            message: 'Confirmed job application. New job created',
            job: job
          });
          _context4.next = 36;
          break;
        case 33:
          _context4.prev = 33;
          _context4.t0 = _context4["catch"](0);
          res.status(500).json({
            message: 'An error occurred while updating the job application status.',
            error: _context4.t0
          });
        case 36:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 33]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfSm9iUG9zdGluZ01vZGVsIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfV29ya2VyTW9kZWwiLCJfSm9iQXBwbGljYXRpb25Nb2RlbCIsIl9Kb2JNb2RlbCIsIm9iaiIsIl9fZXNNb2R1bGUiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZXhwb3J0cyIsIk9wIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCJkZWZpbmVQcm9wZXJ0eSIsImtleSIsImRlc2MiLCJ2YWx1ZSIsIiRTeW1ib2wiLCJTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZXJyIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImZuIiwiYXJnIiwidHlwZSIsImNhbGwiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJfdHlwZW9mIiwiX19hd2FpdCIsInRoZW4iLCJ1bndyYXBwZWQiLCJlcnJvciIsInByZXZpb3VzUHJvbWlzZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwic3RhdGUiLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiZG9uZSIsIm1ldGhvZE5hbWUiLCJ1bmRlZmluZWQiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJsZW5ndGgiLCJpIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwiaXRlciIsImtleXMiLCJ2YWwiLCJvYmplY3QiLCJyZXZlcnNlIiwicG9wIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsIl9uZXh0IiwiX3Rocm93IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJhcHBseUZvckpvYiIsIl9yZWYiLCJfY2FsbGVlIiwicmVxIiwicmVzIiwiX3JlcSR1c2VyIiwiam9iUG9zdGluZ0lkIiwid29ya2VySWQiLCJqb2JQb3N0aW5nIiwid29ya2VyIiwiYXBwbGljYXRpb24iLCJqb2JBcHBsaWNhdGlvbiIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJjb25zb2xlIiwibG9nIiwicGFyYW1zIiwiaWQiLCJ1c2VyIiwidXNlcklkIiwiSm9iUG9zdGluZ01vZGVsIiwiZmluZEJ5SWQiLCJzZWxlY3QiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsIldvcmtlck1vZGVsIiwiSm9iQXBwbGljYXRpb25Nb2RlbCIsImZpbmRPbmUiLCJjb21wYW55Iiwic2F2ZSIsImFwcGxpY2F0aW9ucyIsIl9pZCIsInQwIiwiX3giLCJfeDIiLCJ1cGRhdGVTdGF0dXMiLCJfcmVmMiIsIl9jYWxsZWUyIiwiX3JlcSR1c2VyMiIsImFwcGxpY2F0aW9uSWQiLCJjb21wYW55SWQiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJib2R5IiwiU3RyaW5nIiwiX3gzIiwiX3g0IiwiYWNjZXB0QXBwbGljYXRpb24iLCJfcmVmMyIsIl9jYWxsZWUzIiwiX3JlcSR1c2VyMyIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsIl94NSIsIl94NiIsImNvbmZpcm1Kb2IiLCJfcmVmNCIsIl9jYWxsZWU0IiwiX3JlcSR1c2VyNCIsIm92ZXJsYXBwaW5nSm9iIiwiam9iIiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0IiwiSm9iTW9kZWwiLCIkb3IiLCJzaGlmdFN0YXJ0IiwiJGx0IiwiZW5kIiwiJGd0ZSIsInN0YXJ0Iiwic2hpZnRFbmQiLCIkbHRlIiwiJGd0IiwiRGF0ZSIsIl94NyIsIl94OCIsIkpvYkFwcGxpY2F0aW9uQ29udHJvbGxlciIsIl9kZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FwcC9jb250cm9sbGVycy9Kb2JzL0pvYkFwcGxpY2F0aW9uQ29udHJvbGxlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnXG5cbmltcG9ydCB7IElKb2JQb3N0aW5nIH0gZnJvbSAnQC9hcHAvaW50ZXJmYWNlcy9tb2RlbHMvSm9iUG9zdGluZydcbmltcG9ydCB7IElXb3JrZXIgfSBmcm9tICdAL2FwcC9pbnRlcmZhY2VzL21vZGVscy9Xb3JrZXInXG5pbXBvcnQgeyBJSm9iIH0gZnJvbSAnQC9hcHAvaW50ZXJmYWNlcy9tb2RlbHMvSm9iJ1xuXG5pbXBvcnQgSm9iUG9zdGluZ01vZGVsIGZyb20gJ0AvYXBwL21vZGVscy9Kb2JQb3N0aW5nTW9kZWwnXG5pbXBvcnQgV29ya2VyTW9kZWwgZnJvbSAnQC9hcHAvbW9kZWxzL1dvcmtlck1vZGVsJ1xuaW1wb3J0IEpvYkFwcGxpY2F0aW9uTW9kZWwgZnJvbSAnQC9hcHAvbW9kZWxzL0pvYkFwcGxpY2F0aW9uTW9kZWwnXG5pbXBvcnQgSm9iTW9kZWwgZnJvbSAnQC9hcHAvbW9kZWxzL0pvYk1vZGVsJ1xuaW1wb3J0IHsgSUpvYkFwcGxpY2F0aW9uIH0gZnJvbSAnQC9hcHAvaW50ZXJmYWNlcy9tb2RlbHMvSm9iQXBwbGljYXRpb24nXG5cbmNvbnN0IGFwcGx5Rm9ySm9iID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnNvbGUubG9nKCdoZWVyJylcblx0XHRjb25zdCBqb2JQb3N0aW5nSWQgPSByZXEucGFyYW1zLmlkXG5cdFx0Y29uc3Qgd29ya2VySWQgPSByZXEudXNlcj8udXNlcklkIHx8ICdpZCdcblxuXHRcdGNvbnN0IGpvYlBvc3Rpbmc6IElKb2JQb3N0aW5nIHwgbnVsbCA9IGF3YWl0IEpvYlBvc3RpbmdNb2RlbC5maW5kQnlJZChcblx0XHRcdGpvYlBvc3RpbmdJZFxuXHRcdCkuc2VsZWN0KCcrYXBwbGljYXRpb25zJylcblxuXHRcdGlmICgham9iUG9zdGluZykge1xuXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZTogJ0pvYiBub3QgZm91bmQuJyB9KVxuXHRcdH1cblxuXHRcdGNvbnN0IHdvcmtlcjogSVdvcmtlciB8IG51bGwgPSBhd2FpdCBXb3JrZXJNb2RlbC5maW5kQnlJZCh3b3JrZXJJZClcblx0XHRjb25zb2xlLmxvZyh3b3JrZXI/Lm5hbWUpXG5cdFx0aWYgKCF3b3JrZXIpIHtcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6ICdXb3JrZXIgbm90IGZvdW5kLicgfSlcblx0XHR9XG5cblx0XHRjb25zdCBhcHBsaWNhdGlvbjogSUpvYkFwcGxpY2F0aW9uIHwgbnVsbCA9XG5cdFx0XHRhd2FpdCBKb2JBcHBsaWNhdGlvbk1vZGVsLmZpbmRPbmUoe1xuXHRcdFx0XHR3b3JrZXI6IHdvcmtlcklkLFxuXHRcdFx0XHRqb2JQb3N0aW5nOiBqb2JQb3N0aW5nSWQsXG5cdFx0XHR9KVxuXG5cdFx0aWYgKGFwcGxpY2F0aW9uKSB7XG5cdFx0XHRyZXR1cm4gcmVzXG5cdFx0XHRcdC5zdGF0dXMoNDAwKVxuXHRcdFx0XHQuanNvbih7IG1lc3NhZ2U6ICdZb3UgaGF2ZSBhbHJlYWR5IGFwcGxpZWQgZm9yIHRoaXMgam9iJyB9KVxuXHRcdH1cblx0XHRjb25zb2xlLmxvZygnbm93aGVyZScpXG5cdFx0Ly8gQ3JlYXRlIGEgbmV3IGpvYiBhcHBsaWNhdGlvbiBpbnN0YW5jZVxuXHRcdGNvbnN0IGpvYkFwcGxpY2F0aW9uID0gbmV3IEpvYkFwcGxpY2F0aW9uTW9kZWwoe1xuXHRcdFx0d29ya2VyOiB3b3JrZXJJZCxcblx0XHRcdGNvbXBhbnk6IGpvYlBvc3RpbmcuY29tcGFueSxcblx0XHRcdGpvYlBvc3Rpbmc6IGpvYlBvc3RpbmdJZCxcblx0XHRcdHN0YXR1czogJ1BFTkRJTkcnLFxuXHRcdH0pXG5cdFx0YXdhaXQgam9iQXBwbGljYXRpb24uc2F2ZSgpXG5cblx0XHRqb2JQb3N0aW5nLmFwcGxpY2F0aW9ucy5wdXNoKGpvYkFwcGxpY2F0aW9uLl9pZClcblx0XHRhd2FpdCBqb2JQb3N0aW5nLnNhdmUoKVxuXG5cdFx0cmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiAnQXBwbGljYXRpb24gc3VibWl0dGVkIHN1Y2Nlc3NmdWxseS4nIH0pXG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5sb2coZXJyb3IpXG5cdFx0cmVzXG5cdFx0XHQuc3RhdHVzKDUwMClcblx0XHRcdC5qc29uKHsgbWVzc2FnZTogJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIGFwcGx5aW5nIGZvciB0aGUgam9iLicsIGVycm9yIH0pXG5cdH1cbn1cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVN0YXR1cyA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCB7IGFwcGxpY2F0aW9uSWQgfSA9IHJlcS5wYXJhbXNcblx0XHRjb25zdCBjb21wYW55SWQgPSByZXEudXNlcj8udXNlcklkXG5cdFx0Y29uc3QgeyBzdGF0dXMgfSA9IHJlcS5ib2R5XG5cblx0XHRjb25zdCBqb2JBcHBsaWNhdGlvbiA9IGF3YWl0IEpvYkFwcGxpY2F0aW9uTW9kZWwuZmluZEJ5SWQoYXBwbGljYXRpb25JZClcblxuXHRcdGlmICgham9iQXBwbGljYXRpb24pIHtcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6ICdKb2IgYXBwbGljYXRpb24gbm90IGZvdW5kLicgfSlcblx0XHR9XG5cblx0XHRpZiAoU3RyaW5nKGpvYkFwcGxpY2F0aW9uLmNvbXBhbnkpICE9IGNvbXBhbnlJZCkge1xuXHRcdFx0cmV0dXJuIHJlc1xuXHRcdFx0XHQuc3RhdHVzKDQwMylcblx0XHRcdFx0Lmpzb24oeyBtZXNzYWdlOiAnVW5hdXRob3JpemVkIHRvIGFjY2VzcyB0aGlzIGpvYiBhcHBsaWNhdGlvbi4nIH0pXG5cdFx0fVxuXG5cdFx0am9iQXBwbGljYXRpb24uc3RhdHVzID0gc3RhdHVzXG5cdFx0YXdhaXQgam9iQXBwbGljYXRpb24uc2F2ZSgpXG5cblx0XHRyZXMuc3RhdHVzKDIwMCkuanNvbih7XG5cdFx0XHRtZXNzYWdlOiAnSm9iIGFwcGxpY2F0aW9uIHN0YXR1cyB1cGRhdGVkIHN1Y2Nlc3NmdWxseS4nLFxuXHRcdFx0am9iQXBwbGljYXRpb24sXG5cdFx0fSlcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRyZXMuc3RhdHVzKDUwMCkuanNvbih7XG5cdFx0XHRtZXNzYWdlOiAnQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgdXBkYXRpbmcgdGhlIGpvYiBhcHBsaWNhdGlvbiBzdGF0dXMuJyxcblx0XHRcdGVycm9yLFxuXHRcdH0pXG5cdH1cbn1cblxuZXhwb3J0IGNvbnN0IGFjY2VwdEFwcGxpY2F0aW9uID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHsgYXBwbGljYXRpb25JZCB9ID0gcmVxLnBhcmFtc1xuXHRcdGNvbnN0IGNvbXBhbnlJZCA9IHJlcS51c2VyPy51c2VySWRcblx0XHQvLyBjb25zdCB7IHN0YXR1cyB9ID0gcmVxLmJvZHlcblxuXHRcdGNvbnN0IGpvYkFwcGxpY2F0aW9uOiBJSm9iQXBwbGljYXRpb24gfCBudWxsID1cblx0XHRcdGF3YWl0IEpvYkFwcGxpY2F0aW9uTW9kZWwuZmluZEJ5SWQoYXBwbGljYXRpb25JZClcblxuXHRcdGlmICgham9iQXBwbGljYXRpb24pIHtcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6ICdKb2IgYXBwbGljYXRpb24gbm90IGZvdW5kLicgfSlcblx0XHR9XG5cblx0XHRpZiAoU3RyaW5nKGpvYkFwcGxpY2F0aW9uLmNvbXBhbnkpICE9IGNvbXBhbnlJZCkge1xuXHRcdFx0cmV0dXJuIHJlc1xuXHRcdFx0XHQuc3RhdHVzKDQwMylcblx0XHRcdFx0Lmpzb24oeyBtZXNzYWdlOiAnVW5hdXRob3JpemVkIHRvIGFjY2VzcyB0aGlzIGpvYiBhcHBsaWNhdGlvbi4nIH0pXG5cdFx0fVxuXG5cdFx0aWYgKGpvYkFwcGxpY2F0aW9uLnN0YXR1cyA9PSAnQUNDRVBURUQnKSB7XG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiAnQXBwbGljYXRpb24gYWxyZWFkeSBhY2NlcHRlZCcgfSlcblx0XHR9XG5cblx0XHRjb25zdCBqb2JQb3N0aW5nID0gYXdhaXQgSm9iUG9zdGluZ01vZGVsLmZpbmRCeUlkKGpvYkFwcGxpY2F0aW9uLmpvYlBvc3RpbmcpXG5cblx0XHRpZiAoIWpvYlBvc3RpbmcpIHtcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6ICdTb21ldGhpbmcgd2VudCB3cm9uZyAoMTAyKScgfSlcblx0XHR9XG5cblx0XHRqb2JBcHBsaWNhdGlvbi5zdGF0dXMgPSAnQUNDRVBURUQnXG5cdFx0YXdhaXQgam9iQXBwbGljYXRpb24uc2F2ZSgpXG5cblx0XHRyZXMuc3RhdHVzKDIwMCkuanNvbih7XG5cdFx0XHRtZXNzYWdlOiAnQWNjZXB0ZWQgam9iIGFwcGxpY2F0aW9uJyxcblx0XHR9KVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcblx0XHRcdG1lc3NhZ2U6ICdBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSB1cGRhdGluZyB0aGUgam9iIGFwcGxpY2F0aW9uIHN0YXR1cy4nLFxuXHRcdFx0ZXJyb3IsXG5cdFx0fSlcblx0fVxufVxuXG5leHBvcnQgY29uc3QgY29uZmlybUpvYiA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCB7IGFwcGxpY2F0aW9uSWQgfSA9IHJlcS5wYXJhbXNcblx0XHRjb25zdCB3b3JrZXJJZCA9IHJlcS51c2VyPy51c2VySWRcblx0XHQvLyBjb25zdCB7IHN0YXR1cyB9ID0gcmVxLmJvZHlcblxuXHRcdGNvbnN0IGpvYkFwcGxpY2F0aW9uOiBJSm9iQXBwbGljYXRpb24gfCBudWxsID1cblx0XHRcdGF3YWl0IEpvYkFwcGxpY2F0aW9uTW9kZWwuZmluZEJ5SWQoYXBwbGljYXRpb25JZClcblxuXHRcdGlmICgham9iQXBwbGljYXRpb24pIHtcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6ICdKb2IgYXBwbGljYXRpb24gbm90IGZvdW5kLicgfSlcblx0XHR9XG5cblx0XHRpZiAoU3RyaW5nKGpvYkFwcGxpY2F0aW9uLndvcmtlcikgIT0gd29ya2VySWQpIHtcblx0XHRcdHJldHVybiByZXNcblx0XHRcdFx0LnN0YXR1cyg0MDMpXG5cdFx0XHRcdC5qc29uKHsgbWVzc2FnZTogJ1VuYXV0aG9yaXplZCB0byBhY2Nlc3MgdGhpcyBqb2IgYXBwbGljYXRpb24uJyB9KVxuXHRcdH1cblxuXHRcdGlmIChqb2JBcHBsaWNhdGlvbi5zdGF0dXMgIT0gJ0FDQ0VQVEVEJykge1xuXHRcdFx0cmV0dXJuIHJlc1xuXHRcdFx0XHQuc3RhdHVzKDQwMClcblx0XHRcdFx0Lmpzb24oeyBtZXNzYWdlOiAnQ2Fubm90IGNvbmZpcm0gam9iIGJlZm9yZSBiZWluZyBhY2NlcHRlZCcgfSlcblx0XHR9XG5cblx0XHRjb25zdCBqb2JQb3N0aW5nID0gYXdhaXQgSm9iUG9zdGluZ01vZGVsLmZpbmRCeUlkKGpvYkFwcGxpY2F0aW9uLmpvYlBvc3RpbmcpXG5cblx0XHRpZiAoIWpvYlBvc3RpbmcpIHtcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6ICdTb21ldGhpbmcgd2VudCB3cm9uZyAoMTAyKScgfSlcblx0XHR9XG5cblx0XHRjb25zdCBvdmVybGFwcGluZ0pvYiA9IGF3YWl0IEpvYk1vZGVsLmZpbmRPbmUoe1xuXHRcdFx0d29ya2VySWQ6IHdvcmtlcklkLFxuXHRcdFx0JG9yOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHQvLyBKb2Igc3RhcnRzIGR1cmluZyBhbm90aGVyIGpvYlxuXHRcdFx0XHRcdHNoaWZ0U3RhcnQ6IHsgJGx0OiBqb2JQb3N0aW5nLmVuZCwgJGd0ZTogam9iUG9zdGluZy5zdGFydCB9LFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Ly8gSm9iIGVuZHMgZHVyaW5nIGFub3RoZXIgam9iXG5cdFx0XHRcdFx0c2hpZnRFbmQ6IHsgJGx0ZTogam9iUG9zdGluZy5lbmQsICRndDogam9iUG9zdGluZy5zdGFydCB9LFxuXHRcdFx0XHR9LFxuXHRcdFx0XSxcblx0XHR9KVxuXG5cdFx0aWYgKG92ZXJsYXBwaW5nSm9iKSB7XG5cdFx0XHRyZXR1cm4gcmVzXG5cdFx0XHRcdC5zdGF0dXMoNDAwKVxuXHRcdFx0XHQuanNvbih7IG1lc3NhZ2U6ICdZb3UgYWxyZWFkeSBoYXZlIGEgc2NoZWR1bGVkIGpvYiBhdCB0aGlzIHRpbWUuJyB9KVxuXHRcdH1cblxuXHRcdC8vIENoZWNrIDI6IFRoZSBqb2Igc3RhcnQgdGltZSBpcyBub3QgaW4gdGhlIHBhc3QuXG5cdFx0aWYgKG5ldyBEYXRlKGpvYlBvc3Rpbmcuc3RhcnQpIDwgbmV3IERhdGUoKSkge1xuXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogJ1RoaXMgam9iIGhhcyBhbHJlYWR5IGV4cGlyZWQuJyB9KVxuXHRcdH1cblxuXHRcdGpvYkFwcGxpY2F0aW9uLnN0YXR1cyA9ICdTQ0hFRFVMRUQnXG5cdFx0YXdhaXQgam9iQXBwbGljYXRpb24uc2F2ZSgpXG5cblx0XHRjb25zdCBqb2I6IElKb2IgPSBuZXcgSm9iTW9kZWwoe1xuXHRcdFx0bmFtZTogam9iUG9zdGluZy5uYW1lLFxuXHRcdFx0d29ya2VySWQ6IGpvYkFwcGxpY2F0aW9uLndvcmtlcixcblx0XHRcdGNvbXBhbnlJZDogam9iUG9zdGluZy5jb21wYW55LFxuXHRcdFx0am9iUG9zdGluZ0lkOiBqb2JQb3N0aW5nLmlkLFxuXHRcdFx0c2hpZnRTdGFydDogam9iUG9zdGluZy5zdGFydCxcblx0XHRcdHNoaWZ0RW5kOiBqb2JQb3N0aW5nLmVuZCxcblx0XHR9KVxuXG5cdFx0YXdhaXQgam9iLnNhdmUoKVxuXG5cdFx0cmVzLnN0YXR1cygyMDApLmpzb24oe1xuXHRcdFx0bWVzc2FnZTogJ0NvbmZpcm1lZCBqb2IgYXBwbGljYXRpb24uIE5ldyBqb2IgY3JlYXRlZCcsXG5cdFx0XHRqb2IsXG5cdFx0fSlcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRyZXMuc3RhdHVzKDUwMCkuanNvbih7XG5cdFx0XHRtZXNzYWdlOiAnQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgdXBkYXRpbmcgdGhlIGpvYiBhcHBsaWNhdGlvbiBzdGF0dXMuJyxcblx0XHRcdGVycm9yLFxuXHRcdH0pXG5cdH1cbn1cblxuY29uc3QgSm9iQXBwbGljYXRpb25Db250cm9sbGVyID0ge1xuXHRhcHBseUZvckpvYixcblx0dXBkYXRlU3RhdHVzLFxuXHRhY2NlcHRBcHBsaWNhdGlvbixcblx0Y29uZmlybUpvYixcbn1cblxuZXhwb3J0IGRlZmF1bHQgSm9iQXBwbGljYXRpb25Db250cm9sbGVyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFNQSxJQUFBQSxnQkFBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUMsWUFBQSxHQUFBRixzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUUsb0JBQUEsR0FBQUgsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFHLFNBQUEsR0FBQUosc0JBQUEsQ0FBQUMsT0FBQTtBQUE0QyxTQUFBRCx1QkFBQUssR0FBQSxXQUFBQSxHQUFBLElBQUFBLEdBQUEsQ0FBQUMsVUFBQSxHQUFBRCxHQUFBLGdCQUFBQSxHQUFBO0FBQUEsU0FBQUUsb0JBQUEsa0JBUjVDLHFKQUFBQSxtQkFBQSxZQUFBQSxvQkFBQSxXQUFBQyxPQUFBLFNBQUFBLE9BQUEsT0FBQUMsRUFBQSxHQUFBQyxNQUFBLENBQUFDLFNBQUEsRUFBQUMsTUFBQSxHQUFBSCxFQUFBLENBQUFJLGNBQUEsRUFBQUMs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