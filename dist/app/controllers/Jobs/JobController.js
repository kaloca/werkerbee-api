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
          console.log(diff);
          if (!(diff < -30)) {
            _context2.next = 16;
            break;
          }
          return _context2.abrupt("return", res.status(400).json({
            message: 'You can only clock in within 30 minutes of shift start time',
            diff: diff
          }));
        case 16:
          job.clockStart = now;
          job.timeline = [createEvent('CLOCK_IN')];
          _context2.next = 20;
          return job.save();
        case 20:
          res.status(200).json(diff);
          _context2.next = 27;
          break;
        case 23:
          _context2.prev = 23;
          _context2.t0 = _context2["catch"](2);
          console.log(_context2.t0);
          res.status(500).json({
            message: 'An error occurred while clocking in.',
            error: _context2.t0
          });
        case 27:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[2, 23]]);
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
          _context3.next = 14;
          return job.save();
        case 14:
          res.status(200).json(job);
          _context3.next = 20;
          break;
        case 17:
          _context3.prev = 17;
          _context3.t0 = _context3["catch"](2);
          res.status(500).json({
            message: 'An error occurred while fetching job types.',
            error: _context3.t0
          });
        case 20:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[2, 17]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfSm9iTW9kZWwiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIm9iaiIsIl9fZXNNb2R1bGUiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZXhwb3J0cyIsIk9wIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCJkZWZpbmVQcm9wZXJ0eSIsImtleSIsImRlc2MiLCJ2YWx1ZSIsIiRTeW1ib2wiLCJTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZXJyIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImZuIiwiYXJnIiwidHlwZSIsImNhbGwiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJfdHlwZW9mIiwiX19hd2FpdCIsInRoZW4iLCJ1bndyYXBwZWQiLCJlcnJvciIsInByZXZpb3VzUHJvbWlzZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwic3RhdGUiLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiZG9uZSIsIm1ldGhvZE5hbWUiLCJ1bmRlZmluZWQiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJsZW5ndGgiLCJpIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwiaXRlciIsImtleXMiLCJ2YWwiLCJvYmplY3QiLCJyZXZlcnNlIiwicG9wIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsIl9uZXh0IiwiX3Rocm93IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJjcmVhdGVFdmVudCIsInN0YXR1cyIsInRpbWUiLCJEYXRlIiwiZ2V0Sm9iIiwiX3JlZiIsIl9jYWxsZWUiLCJyZXEiLCJyZXMiLCJqb2JJZCIsImpvYiIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwYXJhbXMiLCJKb2JNb2RlbCIsImZpbmRCeUlkIiwicG9wdWxhdGUiLCJqc29uIiwidDAiLCJtZXNzYWdlIiwiX3giLCJfeDIiLCJjbG9ja0luIiwiX3JlZjIiLCJfY2FsbGVlMiIsIl9yZXEkdXNlciIsIndvcmtlcklkIiwibm93Iiwic2hpZnRTdGFydCIsImRpZmYiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJ1c2VyIiwidXNlcklkIiwiZ2V0VGltZSIsImNvbnNvbGUiLCJsb2ciLCJjbG9ja1N0YXJ0IiwidGltZWxpbmUiLCJzYXZlIiwiX3gzIiwiX3g0IiwiY2xvY2tPdXQiLCJfcmVmMyIsIl9jYWxsZWUzIiwiX3JlcSR1c2VyMiIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsImNsb2NrRW5kIiwiX3g1IiwiX3g2Iiwic3RhcnRCcmVhayIsIl9yZWY0IiwiX2NhbGxlZTQiLCJfcmVxJHVzZXIzIiwibmV3QnJlYWsiLCJfY2FsbGVlNCQiLCJfY29udGV4dDQiLCJzdGFydCIsImJyZWFrcyIsIl94NyIsIl94OCIsImVuZEJyZWFrIiwiX3JlZjUiLCJfY2FsbGVlNSIsIl9yZXEkdXNlcjQiLCJicmVha0lkIiwiYnJlYWtJbmRleCIsIl9jYWxsZWU1JCIsIl9jb250ZXh0NSIsImZpbmRJbmRleCIsImJyZWFrSXRlbSIsIl9icmVha0l0ZW0kX2lkIiwiX2lkIiwidG9TdHJpbmciLCJzZW5kIiwiZW5kIiwiX3g5IiwiX3gxMCIsIkpvYkNvbnRyb2xsZXIiLCJfZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvY29udHJvbGxlcnMvSm9icy9Kb2JDb250cm9sbGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcydcblxuaW1wb3J0IEpvYk1vZGVsIGZyb20gJ0AvYXBwL21vZGVscy9Kb2JNb2RlbCdcbmltcG9ydCB7XG5cdElKb2IsXG5cdElUaW1lbGluZUV2ZW50LFxuXHRUaW1lbGluZUV2ZW50VHlwZSxcbn0gZnJvbSAnQC9hcHAvaW50ZXJmYWNlcy9tb2RlbHMvSm9iJ1xuXG5jb25zdCBjcmVhdGVFdmVudCA9IChzdGF0dXM6IFRpbWVsaW5lRXZlbnRUeXBlKTogSVRpbWVsaW5lRXZlbnQgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHN0YXR1cyxcblx0XHR0aW1lOiBuZXcgRGF0ZSgpLFxuXHR9XG59XG5cbmNvbnN0IGdldEpvYiA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcblx0Y29uc3Qgam9iSWQgPSByZXEucGFyYW1zLmpvYklkXG5cblx0dHJ5IHtcblx0XHRjb25zdCBqb2I6IElKb2JbXSB8IG51bGwgPSBhd2FpdCBKb2JNb2RlbC5maW5kQnlJZChqb2JJZCkucG9wdWxhdGUoXG5cdFx0XHQnam9iUG9zdGluZ0lkJ1xuXHRcdClcblxuXHRcdHJlcy5zdGF0dXMoMjAwKS5qc29uKGpvYilcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRyZXNcblx0XHRcdC5zdGF0dXMoNTAwKVxuXHRcdFx0Lmpzb24oeyBtZXNzYWdlOiAnQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgZmV0Y2hpbmcgam9iIHR5cGVzLicsIGVycm9yIH0pXG5cdH1cbn1cblxuY29uc3QgY2xvY2tJbiA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcblx0Y29uc3Qgam9iSWQgPSByZXEucGFyYW1zLmpvYklkXG5cdGNvbnN0IHdvcmtlcklkID0gcmVxLnVzZXI/LnVzZXJJZFxuXG5cdHRyeSB7XG5cdFx0Y29uc3Qgam9iOiBJSm9iIHwgbnVsbCA9IGF3YWl0IEpvYk1vZGVsLmZpbmRCeUlkKGpvYklkKVxuXG5cdFx0aWYgKCFqb2IpIHtcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6ICdKb2Igbm90IGZvdW5kJyB9KVxuXHRcdH1cblxuXHRcdGlmIChqb2Iud29ya2VySWQgIT0gd29ya2VySWQpIHtcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7IG1lc3NhZ2U6ICdVbmF1dGhvcml6ZWQnIH0pXG5cdFx0fVxuXHRcdGNvbnN0IG5vdyA9IG5ldyBEYXRlKClcblx0XHRjb25zdCBzaGlmdFN0YXJ0ID0gbmV3IERhdGUoam9iLnNoaWZ0U3RhcnQpXG5cdFx0Y29uc3QgZGlmZiA9IChub3cuZ2V0VGltZSgpIC0gc2hpZnRTdGFydC5nZXRUaW1lKCkpIC8gMTAwMCAvIDYwXG5cdFx0Y29uc29sZS5sb2coZGlmZilcblx0XHRpZiAoZGlmZiA8IC0zMCkge1xuXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtcblx0XHRcdFx0bWVzc2FnZTogJ1lvdSBjYW4gb25seSBjbG9jayBpbiB3aXRoaW4gMzAgbWludXRlcyBvZiBzaGlmdCBzdGFydCB0aW1lJyxcblx0XHRcdFx0ZGlmZixcblx0XHRcdH0pXG5cdFx0fVxuXG5cdFx0am9iLmNsb2NrU3RhcnQgPSBub3dcblx0XHRqb2IudGltZWxpbmUgPSBbY3JlYXRlRXZlbnQoJ0NMT0NLX0lOJyldXG5cblx0XHRhd2FpdCBqb2Iuc2F2ZSgpXG5cblx0XHRyZXMuc3RhdHVzKDIwMCkuanNvbihkaWZmKVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUubG9nKGVycm9yKVxuXHRcdHJlc1xuXHRcdFx0LnN0YXR1cyg1MDApXG5cdFx0XHQuanNvbih7IG1lc3NhZ2U6ICdBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBjbG9ja2luZyBpbi4nLCBlcnJvciB9KVxuXHR9XG59XG5cbmNvbnN0IGNsb2NrT3V0ID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuXHRjb25zdCBqb2JJZCA9IHJlcS5wYXJhbXMuam9iSWRcblx0Y29uc3Qgd29ya2VySWQgPSByZXEudXNlcj8udXNlcklkXG5cblx0dHJ5IHtcblx0XHRjb25zdCBqb2I6IElKb2IgfCBudWxsID0gYXdhaXQgSm9iTW9kZWwuZmluZEJ5SWQoam9iSWQpXG5cblx0XHRpZiAoIWpvYikge1xuXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZTogJ0pvYiBub3QgZm91bmQnIH0pXG5cdFx0fVxuXG5cdFx0aWYgKGpvYi53b3JrZXJJZCAhPSB3b3JrZXJJZCkge1xuXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgbWVzc2FnZTogJ1VuYXV0aG9yaXplZCcgfSlcblx0XHR9XG5cblx0XHRqb2IuY2xvY2tFbmQgPSBuZXcgRGF0ZSgpXG5cdFx0am9iLnRpbWVsaW5lLnB1c2goY3JlYXRlRXZlbnQoJ0NMT0NLX09VVCcpKVxuXG5cdFx0YXdhaXQgam9iLnNhdmUoKVxuXG5cdFx0cmVzLnN0YXR1cygyMDApLmpzb24oam9iKVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHJlc1xuXHRcdFx0LnN0YXR1cyg1MDApXG5cdFx0XHQuanNvbih7IG1lc3NhZ2U6ICdBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBmZXRjaGluZyBqb2IgdHlwZXMuJywgZXJyb3IgfSlcblx0fVxufVxuXG5jb25zdCBzdGFydEJyZWFrID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuXHRjb25zdCBqb2JJZCA9IHJlcS5wYXJhbXMuam9iSWRcblx0Y29uc3Qgd29ya2VySWQgPSByZXEudXNlcj8udXNlcklkXG5cblx0dHJ5IHtcblx0XHRjb25zdCBqb2I6IElKb2IgfCBudWxsID0gYXdhaXQgSm9iTW9kZWwuZmluZEJ5SWQoam9iSWQpXG5cblx0XHRpZiAoIWpvYikge1xuXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZTogJ0pvYiBub3QgZm91bmQnIH0pXG5cdFx0fVxuXG5cdFx0aWYgKGpvYi53b3JrZXJJZCAhPSB3b3JrZXJJZCkge1xuXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgbWVzc2FnZTogJ1VuYXV0aG9yaXplZCcgfSlcblx0XHR9XG5cblx0XHRjb25zdCBuZXdCcmVhayA9IHsgc3RhcnQ6IG5ldyBEYXRlKCkgfVxuXHRcdGpvYi5icmVha3MgPyBqb2IuYnJlYWtzLnB1c2gobmV3QnJlYWspIDogKGpvYi5icmVha3MgPSBbbmV3QnJlYWtdKVxuXHRcdGpvYi50aW1lbGluZS5wdXNoKGNyZWF0ZUV2ZW50KCdCUkVBS19TVEFSVCcpKVxuXG5cdFx0YXdhaXQgam9iLnNhdmUoKVxuXG5cdFx0cmVzLnN0YXR1cygyMDApLmpzb24oam9iKVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHJlc1xuXHRcdFx0LnN0YXR1cyg1MDApXG5cdFx0XHQuanNvbih7IG1lc3NhZ2U6ICdBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBmZXRjaGluZyBqb2IgdHlwZXMuJywgZXJyb3IgfSlcblx0fVxufVxuXG5jb25zdCBlbmRCcmVhayA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcblx0Y29uc3Qgam9iSWQgPSByZXEucGFyYW1zLmpvYklkXG5cdGNvbnN0IHdvcmtlcklkID0gcmVxLnVzZXI/LnVzZXJJZFxuXHRjb25zdCBicmVha0lkID0gcmVxLnBhcmFtcy5icmVha0lkXG5cblx0dHJ5IHtcblx0XHRjb25zdCBqb2IgPSBhd2FpdCBKb2JNb2RlbC5maW5kQnlJZChqb2JJZClcblx0XHRpZiAoIWpvYikgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZTogJ0pvYiBub3QgZm91bmQnIH0pXG5cdFx0aWYgKGpvYi53b3JrZXJJZCAhPSB3b3JrZXJJZClcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7IG1lc3NhZ2U6ICdVbmF1dGhvcml6ZWQnIH0pXG5cdFx0aWYgKCFqb2IuYnJlYWtzKSByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlOiAnQnJlYWsgbm90IGZvdW5kJyB9KVxuXHRcdGNvbnN0IGJyZWFrSW5kZXggPSBqb2IuYnJlYWtzLmZpbmRJbmRleChcblx0XHRcdChicmVha0l0ZW0pID0+IGJyZWFrSXRlbS5faWQ/LnRvU3RyaW5nKCkgPT09IGJyZWFrSWRcblx0XHQpXG5cdFx0aWYgKGJyZWFrSW5kZXggPT09IC0xKSByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLnNlbmQoJ0JyZWFrIG5vdCBmb3VuZCcpXG5cblx0XHRqb2IuYnJlYWtzW2JyZWFrSW5kZXhdLmVuZCA9IG5ldyBEYXRlKClcblx0XHRqb2IudGltZWxpbmUucHVzaChjcmVhdGVFdmVudCgnQlJFQUtfRU5EJykpXG5cblx0XHRhd2FpdCBqb2Iuc2F2ZSgpXG5cblx0XHRyZXMuc3RhdHVzKDIwMCkuc2VuZChqb2IpXG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0cmVzLnN0YXR1cyg1MDApLnNlbmQoZXJyb3IpXG5cdH1cbn1cblxuY29uc3QgSm9iQ29udHJvbGxlciA9IHsgZ2V0Sm9iLCBjbG9ja0luLCBjbG9ja091dCwgc3RhcnRCcmVhaywgZW5kQnJlYWsgfVxuXG5leHBvcnQgZGVmYXVsdCBKb2JDb250cm9sbGVyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQSxJQUFBQSxTQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFBNEMsU0FBQUQsdUJBQUFFLEdBQUEsV0FBQUEsR0FBQSxJQUFBQSxHQUFBLENBQUFDLFVBQUEsR0FBQUQsR0FBQSxnQkFBQUEsR0FBQTtBQUFBLFNBQUFFLG9CQUFBLGtCQUQ1QyxxSkFBQUEsbUJBQUEsWUFBQUEsb0JBQUEsV0FBQUMsT0FBQSxTQUFBQSxPQUFBLE9BQUFDLEVBQUEsR0FBQUMsTUFBQSxDQUFBQyxTQUFBLEVBQUFDLE1BQUEsR0FBQUgsRUFBQSxDQUFBSSxjQUFBLEVBQUFDLGNBQUEsR0FBQUosTUFBQSxDQUFBSSxjQUFBLGNBQUFULEdBQUEsRUFBQVUsR0FBQSxFQUFBQyxJQUFBLElBQUFYLEdBQUEsQ0FBQVUsR0FBQSxJQUFBQyxJQUFB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