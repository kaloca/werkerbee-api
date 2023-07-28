"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _JobModel = _interopRequireDefault(require("../../models/JobModel"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var createEvent = function createEvent(status) {
  return {
    status: status,
    time: new Date()
  };
};
var getJob = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var jobId, job;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          jobId = req.params.jobId;
          _context.prev = 1;
          _context.next = 4;
          return _JobModel["default"].findById(jobId).populate('jobPostingId');
        case 4:
          job = _context.sent;
          res.status(200).json(job);
          _context.next = 11;
          break;
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          res.status(500).json({
            message: 'An error occurred while fetching job types.',
            error: _context.t0
          });
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 8]]);
  }));
  return function getJob(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var clockIn = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var _req$user;
    var jobId, workerId, job, now, shiftStart, diff;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          jobId = req.params.jobId;
          workerId = (_req$user = req.user) === null || _req$user === void 0 ? void 0 : _req$user.userId;
          _context2.prev = 2;
          _context2.next = 5;
          return _JobModel["default"].findById(jobId);
        case 5:
          job = _context2.sent;
          if (job) {
            _context2.next = 8;
            break;
          }
          return _context2.abrupt("return", res.status(404).json({
            message: 'Job not found'
          }));
        case 8:
          if (!(job.workerId != workerId)) {
            _context2.next = 10;
            break;
          }
          return _context2.abrupt("return", res.status(401).json({
            message: 'Unauthorized'
          }));
        case 10:
          now = new Date();
          shiftStart = new Date(job.shiftStart);
          diff = (now.getTime() - shiftStart.getTime()) / 1000 / 60;
          if (!(diff < -30)) {
            _context2.next = 15;
            break;
          }
          return _context2.abrupt("return", res.status(400).json({
            message: 'You can only clock in within 30 minutes of shift start time',
            diff: diff
          }));
        case 15:
          job.clockStart = now;
          job.timeline = [createEvent('CLOCK_IN')];
          _context2.next = 19;
          return job.save();
        case 19:
          res.status(200).json(diff);
          _context2.next = 26;
          break;
        case 22:
          _context2.prev = 22;
          _context2.t0 = _context2["catch"](2);
          console.log(_context2.t0);
          res.status(500).json({
            message: 'An error occurred while clocking in.',
            error: _context2.t0
          });
        case 26:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[2, 22]]);
  }));
  return function clockIn(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var clockOut = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var _req$user2;
    var jobId, workerId, job;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          jobId = req.params.jobId;
          workerId = (_req$user2 = req.user) === null || _req$user2 === void 0 ? void 0 : _req$user2.userId;
          _context3.prev = 2;
          _context3.next = 5;
          return _JobModel["default"].findById(jobId);
        case 5:
          job = _context3.sent;
          if (job) {
            _context3.next = 8;
            break;
          }
          return _context3.abrupt("return", res.status(404).json({
            message: 'Job not found'
          }));
        case 8:
          if (!(job.workerId != workerId)) {
            _context3.next = 10;
            break;
          }
          return _context3.abrupt("return", res.status(401).json({
            message: 'Unauthorized'
          }));
        case 10:
          job.clockEnd = new Date();
          job.timeline.push(createEvent('CLOCK_OUT'));
          job.status = 'COMPLETE';
          _context3.next = 15;
          return job.save();
        case 15:
          res.status(200).json(job);
          _context3.next = 21;
          break;
        case 18:
          _context3.prev = 18;
          _context3.t0 = _context3["catch"](2);
          res.status(500).json({
            message: 'An error occurred while fetching job types.',
            error: _context3.t0
          });
        case 21:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[2, 18]]);
  }));
  return function clockOut(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var startBreak = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var _req$user3;
    var jobId, workerId, job, newBreak;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          jobId = req.params.jobId;
          workerId = (_req$user3 = req.user) === null || _req$user3 === void 0 ? void 0 : _req$user3.userId;
          _context4.prev = 2;
          _context4.next = 5;
          return _JobModel["default"].findById(jobId);
        case 5:
          job = _context4.sent;
          if (job) {
            _context4.next = 8;
            break;
          }
          return _context4.abrupt("return", res.status(404).json({
            message: 'Job not found'
          }));
        case 8:
          if (!(job.workerId != workerId)) {
            _context4.next = 10;
            break;
          }
          return _context4.abrupt("return", res.status(401).json({
            message: 'Unauthorized'
          }));
        case 10:
          newBreak = {
            start: new Date()
          };
          job.breaks ? job.breaks.push(newBreak) : job.breaks = [newBreak];
          job.timeline.push(createEvent('BREAK_START'));
          _context4.next = 15;
          return job.save();
        case 15:
          res.status(200).json(job);
          _context4.next = 21;
          break;
        case 18:
          _context4.prev = 18;
          _context4.t0 = _context4["catch"](2);
          res.status(500).json({
            message: 'An error occurred while fetching job types.',
            error: _context4.t0
          });
        case 21:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[2, 18]]);
  }));
  return function startBreak(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var endBreak = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var _req$user4;
    var jobId, workerId, breakId, job, breakIndex;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          jobId = req.params.jobId;
          workerId = (_req$user4 = req.user) === null || _req$user4 === void 0 ? void 0 : _req$user4.userId;
          breakId = req.params.breakId;
          _context5.prev = 3;
          _context5.next = 6;
          return _JobModel["default"].findById(jobId);
        case 6:
          job = _context5.sent;
          if (job) {
            _context5.next = 9;
            break;
          }
          return _context5.abrupt("return", res.status(404).json({
            message: 'Job not found'
          }));
        case 9:
          if (!(job.workerId != workerId)) {
            _context5.next = 11;
            break;
          }
          return _context5.abrupt("return", res.status(401).json({
            message: 'Unauthorized'
          }));
        case 11:
          if (job.breaks) {
            _context5.next = 13;
            break;
          }
          return _context5.abrupt("return", res.status(404).json({
            message: 'Break not found'
          }));
        case 13:
          breakIndex = job.breaks.findIndex(function (breakItem) {
            var _breakItem$_id;
            return ((_breakItem$_id = breakItem._id) === null || _breakItem$_id === void 0 ? void 0 : _breakItem$_id.toString()) === breakId;
          });
          if (!(breakIndex === -1)) {
            _context5.next = 16;
            break;
          }
          return _context5.abrupt("return", res.status(404).send('Break not found'));
        case 16:
          job.breaks[breakIndex].end = new Date();
          job.timeline.push(createEvent('BREAK_END'));
          _context5.next = 20;
          return job.save();
        case 20:
          res.status(200).send(job);
          _context5.next = 26;
          break;
        case 23:
          _context5.prev = 23;
          _context5.t0 = _context5["catch"](3);
          res.status(500).send(_context5.t0);
        case 26:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[3, 23]]);
  }));
  return function endBreak(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var JobController = {
  getJob: getJob,
  clockIn: clockIn,
  clockOut: clockOut,
  startBreak: startBreak,
  endBreak: endBreak
};
var _default = JobController;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfSm9iTW9kZWwiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIm9iaiIsIl9fZXNNb2R1bGUiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZXhwb3J0cyIsIk9wIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCJkZWZpbmVQcm9wZXJ0eSIsImtleSIsImRlc2MiLCJ2YWx1ZSIsIiRTeW1ib2wiLCJTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZXJyIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImZuIiwiYXJnIiwidHlwZSIsImNhbGwiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJfdHlwZW9mIiwiX19hd2FpdCIsInRoZW4iLCJ1bndyYXBwZWQiLCJlcnJvciIsInByZXZpb3VzUHJvbWlzZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwic3RhdGUiLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiZG9uZSIsIm1ldGhvZE5hbWUiLCJ1bmRlZmluZWQiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJsZW5ndGgiLCJpIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwiaXRlciIsImtleXMiLCJ2YWwiLCJvYmplY3QiLCJyZXZlcnNlIiwicG9wIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsIl9uZXh0IiwiX3Rocm93IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJjcmVhdGVFdmVudCIsInN0YXR1cyIsInRpbWUiLCJEYXRlIiwiZ2V0Sm9iIiwiX3JlZiIsIl9jYWxsZWUiLCJyZXEiLCJyZXMiLCJqb2JJZCIsImpvYiIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwYXJhbXMiLCJKb2JNb2RlbCIsImZpbmRCeUlkIiwicG9wdWxhdGUiLCJqc29uIiwidDAiLCJtZXNzYWdlIiwiX3giLCJfeDIiLCJjbG9ja0luIiwiX3JlZjIiLCJfY2FsbGVlMiIsIl9yZXEkdXNlciIsIndvcmtlcklkIiwibm93Iiwic2hpZnRTdGFydCIsImRpZmYiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJ1c2VyIiwidXNlcklkIiwiZ2V0VGltZSIsImNsb2NrU3RhcnQiLCJ0aW1lbGluZSIsInNhdmUiLCJjb25zb2xlIiwibG9nIiwiX3gzIiwiX3g0IiwiY2xvY2tPdXQiLCJfcmVmMyIsIl9jYWxsZWUzIiwiX3JlcSR1c2VyMiIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsImNsb2NrRW5kIiwiX3g1IiwiX3g2Iiwic3RhcnRCcmVhayIsIl9yZWY0IiwiX2NhbGxlZTQiLCJfcmVxJHVzZXIzIiwibmV3QnJlYWsiLCJfY2FsbGVlNCQiLCJfY29udGV4dDQiLCJzdGFydCIsImJyZWFrcyIsIl94NyIsIl94OCIsImVuZEJyZWFrIiwiX3JlZjUiLCJfY2FsbGVlNSIsIl9yZXEkdXNlcjQiLCJicmVha0lkIiwiYnJlYWtJbmRleCIsIl9jYWxsZWU1JCIsIl9jb250ZXh0NSIsImZpbmRJbmRleCIsImJyZWFrSXRlbSIsIl9icmVha0l0ZW0kX2lkIiwiX2lkIiwidG9TdHJpbmciLCJzZW5kIiwiZW5kIiwiX3g5IiwiX3gxMCIsIkpvYkNvbnRyb2xsZXIiLCJfZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvY29udHJvbGxlcnMvSm9icy9Kb2JDb250cm9sbGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcydcblxuaW1wb3J0IEpvYk1vZGVsIGZyb20gJ0AvYXBwL21vZGVscy9Kb2JNb2RlbCdcbmltcG9ydCB7XG5cdElKb2IsXG5cdElUaW1lbGluZUV2ZW50LFxuXHRUaW1lbGluZUV2ZW50VHlwZSxcbn0gZnJvbSAnQC9hcHAvaW50ZXJmYWNlcy9tb2RlbHMvSm9iJ1xuXG5jb25zdCBjcmVhdGVFdmVudCA9IChzdGF0dXM6IFRpbWVsaW5lRXZlbnRUeXBlKTogSVRpbWVsaW5lRXZlbnQgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHN0YXR1cyxcblx0XHR0aW1lOiBuZXcgRGF0ZSgpLFxuXHR9XG59XG5cbmNvbnN0IGdldEpvYiA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcblx0Y29uc3Qgam9iSWQgPSByZXEucGFyYW1zLmpvYklkXG5cblx0dHJ5IHtcblx0XHRjb25zdCBqb2I6IElKb2JbXSB8IG51bGwgPSBhd2FpdCBKb2JNb2RlbC5maW5kQnlJZChqb2JJZCkucG9wdWxhdGUoXG5cdFx0XHQnam9iUG9zdGluZ0lkJ1xuXHRcdClcblxuXHRcdHJlcy5zdGF0dXMoMjAwKS5qc29uKGpvYilcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRyZXNcblx0XHRcdC5zdGF0dXMoNTAwKVxuXHRcdFx0Lmpzb24oeyBtZXNzYWdlOiAnQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgZmV0Y2hpbmcgam9iIHR5cGVzLicsIGVycm9yIH0pXG5cdH1cbn1cblxuY29uc3QgY2xvY2tJbiA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcblx0Y29uc3Qgam9iSWQgPSByZXEucGFyYW1zLmpvYklkXG5cdGNvbnN0IHdvcmtlcklkID0gcmVxLnVzZXI/LnVzZXJJZFxuXG5cdHRyeSB7XG5cdFx0Y29uc3Qgam9iOiBJSm9iIHwgbnVsbCA9IGF3YWl0IEpvYk1vZGVsLmZpbmRCeUlkKGpvYklkKVxuXG5cdFx0aWYgKCFqb2IpIHtcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6ICdKb2Igbm90IGZvdW5kJyB9KVxuXHRcdH1cblxuXHRcdGlmIChqb2Iud29ya2VySWQgIT0gd29ya2VySWQpIHtcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7IG1lc3NhZ2U6ICdVbmF1dGhvcml6ZWQnIH0pXG5cdFx0fVxuXHRcdGNvbnN0IG5vdyA9IG5ldyBEYXRlKClcblx0XHRjb25zdCBzaGlmdFN0YXJ0ID0gbmV3IERhdGUoam9iLnNoaWZ0U3RhcnQpXG5cdFx0Y29uc3QgZGlmZiA9IChub3cuZ2V0VGltZSgpIC0gc2hpZnRTdGFydC5nZXRUaW1lKCkpIC8gMTAwMCAvIDYwXG5cblx0XHRpZiAoZGlmZiA8IC0zMCkge1xuXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtcblx0XHRcdFx0bWVzc2FnZTogJ1lvdSBjYW4gb25seSBjbG9jayBpbiB3aXRoaW4gMzAgbWludXRlcyBvZiBzaGlmdCBzdGFydCB0aW1lJyxcblx0XHRcdFx0ZGlmZixcblx0XHRcdH0pXG5cdFx0fVxuXG5cdFx0am9iLmNsb2NrU3RhcnQgPSBub3dcblx0XHRqb2IudGltZWxpbmUgPSBbY3JlYXRlRXZlbnQoJ0NMT0NLX0lOJyldXG5cblx0XHRhd2FpdCBqb2Iuc2F2ZSgpXG5cblx0XHRyZXMuc3RhdHVzKDIwMCkuanNvbihkaWZmKVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUubG9nKGVycm9yKVxuXHRcdHJlc1xuXHRcdFx0LnN0YXR1cyg1MDApXG5cdFx0XHQuanNvbih7IG1lc3NhZ2U6ICdBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBjbG9ja2luZyBpbi4nLCBlcnJvciB9KVxuXHR9XG59XG5cbmNvbnN0IGNsb2NrT3V0ID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuXHRjb25zdCBqb2JJZCA9IHJlcS5wYXJhbXMuam9iSWRcblx0Y29uc3Qgd29ya2VySWQgPSByZXEudXNlcj8udXNlcklkXG5cblx0dHJ5IHtcblx0XHRjb25zdCBqb2I6IElKb2IgfCBudWxsID0gYXdhaXQgSm9iTW9kZWwuZmluZEJ5SWQoam9iSWQpXG5cblx0XHRpZiAoIWpvYikge1xuXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZTogJ0pvYiBub3QgZm91bmQnIH0pXG5cdFx0fVxuXG5cdFx0aWYgKGpvYi53b3JrZXJJZCAhPSB3b3JrZXJJZCkge1xuXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgbWVzc2FnZTogJ1VuYXV0aG9yaXplZCcgfSlcblx0XHR9XG5cblx0XHRqb2IuY2xvY2tFbmQgPSBuZXcgRGF0ZSgpXG5cdFx0am9iLnRpbWVsaW5lLnB1c2goY3JlYXRlRXZlbnQoJ0NMT0NLX09VVCcpKVxuXHRcdGpvYi5zdGF0dXMgPSAnQ09NUExFVEUnXG5cblx0XHRhd2FpdCBqb2Iuc2F2ZSgpXG5cblx0XHRyZXMuc3RhdHVzKDIwMCkuanNvbihqb2IpXG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0cmVzXG5cdFx0XHQuc3RhdHVzKDUwMClcblx0XHRcdC5qc29uKHsgbWVzc2FnZTogJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIGZldGNoaW5nIGpvYiB0eXBlcy4nLCBlcnJvciB9KVxuXHR9XG59XG5cbmNvbnN0IHN0YXJ0QnJlYWsgPSBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG5cdGNvbnN0IGpvYklkID0gcmVxLnBhcmFtcy5qb2JJZFxuXHRjb25zdCB3b3JrZXJJZCA9IHJlcS51c2VyPy51c2VySWRcblxuXHR0cnkge1xuXHRcdGNvbnN0IGpvYjogSUpvYiB8IG51bGwgPSBhd2FpdCBKb2JNb2RlbC5maW5kQnlJZChqb2JJZClcblxuXHRcdGlmICgham9iKSB7XG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlOiAnSm9iIG5vdCBmb3VuZCcgfSlcblx0XHR9XG5cblx0XHRpZiAoam9iLndvcmtlcklkICE9IHdvcmtlcklkKSB7XG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBtZXNzYWdlOiAnVW5hdXRob3JpemVkJyB9KVxuXHRcdH1cblxuXHRcdGNvbnN0IG5ld0JyZWFrID0geyBzdGFydDogbmV3IERhdGUoKSB9XG5cdFx0am9iLmJyZWFrcyA/IGpvYi5icmVha3MucHVzaChuZXdCcmVhaykgOiAoam9iLmJyZWFrcyA9IFtuZXdCcmVha10pXG5cdFx0am9iLnRpbWVsaW5lLnB1c2goY3JlYXRlRXZlbnQoJ0JSRUFLX1NUQVJUJykpXG5cblx0XHRhd2FpdCBqb2Iuc2F2ZSgpXG5cblx0XHRyZXMuc3RhdHVzKDIwMCkuanNvbihqb2IpXG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0cmVzXG5cdFx0XHQuc3RhdHVzKDUwMClcblx0XHRcdC5qc29uKHsgbWVzc2FnZTogJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIGZldGNoaW5nIGpvYiB0eXBlcy4nLCBlcnJvciB9KVxuXHR9XG59XG5cbmNvbnN0IGVuZEJyZWFrID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuXHRjb25zdCBqb2JJZCA9IHJlcS5wYXJhbXMuam9iSWRcblx0Y29uc3Qgd29ya2VySWQgPSByZXEudXNlcj8udXNlcklkXG5cdGNvbnN0IGJyZWFrSWQgPSByZXEucGFyYW1zLmJyZWFrSWRcblxuXHR0cnkge1xuXHRcdGNvbnN0IGpvYiA9IGF3YWl0IEpvYk1vZGVsLmZpbmRCeUlkKGpvYklkKVxuXHRcdGlmICgham9iKSByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlOiAnSm9iIG5vdCBmb3VuZCcgfSlcblx0XHRpZiAoam9iLndvcmtlcklkICE9IHdvcmtlcklkKVxuXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgbWVzc2FnZTogJ1VuYXV0aG9yaXplZCcgfSlcblx0XHRpZiAoIWpvYi5icmVha3MpIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6ICdCcmVhayBub3QgZm91bmQnIH0pXG5cdFx0Y29uc3QgYnJlYWtJbmRleCA9IGpvYi5icmVha3MuZmluZEluZGV4KFxuXHRcdFx0KGJyZWFrSXRlbSkgPT4gYnJlYWtJdGVtLl9pZD8udG9TdHJpbmcoKSA9PT0gYnJlYWtJZFxuXHRcdClcblx0XHRpZiAoYnJlYWtJbmRleCA9PT0gLTEpIHJldHVybiByZXMuc3RhdHVzKDQwNCkuc2VuZCgnQnJlYWsgbm90IGZvdW5kJylcblxuXHRcdGpvYi5icmVha3NbYnJlYWtJbmRleF0uZW5kID0gbmV3IERhdGUoKVxuXHRcdGpvYi50aW1lbGluZS5wdXNoKGNyZWF0ZUV2ZW50KCdCUkVBS19FTkQnKSlcblxuXHRcdGF3YWl0IGpvYi5zYXZlKClcblxuXHRcdHJlcy5zdGF0dXMoMjAwKS5zZW5kKGpvYilcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRyZXMuc3RhdHVzKDUwMCkuc2VuZChlcnJvcilcblx0fVxufVxuXG5jb25zdCBKb2JDb250cm9sbGVyID0geyBnZXRKb2IsIGNsb2NrSW4sIGNsb2NrT3V0LCBzdGFydEJyZWFrLCBlbmRCcmVhayB9XG5cbmV4cG9ydCBkZWZhdWx0IEpvYkNvbnRyb2xsZXJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBLElBQUFBLFNBQUEsR0FBQUMsc0JBQUEsQ0FBQUMsT0FBQTtBQUE0QyxTQUFBRCx1QkFBQUUsR0FBQSxXQUFBQSxHQUFBLElBQUFBLEdBQUEsQ0FBQUMsVUFBQSxHQUFBRCxHQUFBLGdCQUFBQSxHQUFBO0FBQUEsU0FBQUUsb0JBQUEsa0JBRDVDLHFKQUFBQSxtQkFBQSxZQUFBQSxvQkFBQSxXQUFBQyxPQUFBLFNBQUFBLE9BQUEsT0FBQUMsRUFBQSxHQUFBQyxNQUFBLENBQUFDLFNBQUEsRUFBQUMsTUFBQSxHQUFBSCxFQUFBLENBQUFJLGNBQUEsRUFBQUMsY0FBQSxHQUFBSixNQUFBLENBQUFJLGNBQUEsY0FBQVQsR0FBQSxFQUFBVSxHQUFBLEVBQUFDLElBQUEsSUFBQVgsR0FBQSxDQUFBVSxHQUFBLElB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