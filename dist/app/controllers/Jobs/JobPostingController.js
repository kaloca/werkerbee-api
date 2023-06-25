"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _JobPostingModel = _interopRequireDefault(require("../../models/JobPostingModel"));
var _CompanyModel = _interopRequireDefault(require("../../models/CompanyModel"));
var _JobApplicationModel = _interopRequireDefault(require("../../models/JobApplicationModel"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var createJobPosting = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _req$user;
    var company, newJobPosting;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _CompanyModel["default"].findById((_req$user = req.user) === null || _req$user === void 0 ? void 0 : _req$user.userId);
        case 2:
          company = _context.sent;
          if (company) {
            _context.next = 5;
            break;
          }
          return _context.abrupt("return", res.status(401).json({
            message: 'Only authenticated companies can create job postings'
          }));
        case 5:
          newJobPosting = new _JobPostingModel["default"](_objectSpread(_objectSpread({}, req.body), {}, {
            company: company._id,
            location: company.location
          }));
          _context.prev = 6;
          _context.next = 9;
          return newJobPosting.save();
        case 9:
          res.status(201).json({
            newJobPosting: newJobPosting
          });
          _context.next = 15;
          break;
        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](6);
          res.status(400).json({
            message: _context.t0.message
          });
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[6, 12]]);
  }));
  return function createJobPosting(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var updateJobPosting = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var _req$user2;
    var id, companyId, updatedJobPosting;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          id = req.params.id;
          companyId = (_req$user2 = req.user) === null || _req$user2 === void 0 ? void 0 : _req$user2.userId;
          console.log(req.params, req.user);
          _context2.prev = 3;
          _context2.next = 6;
          return _JobPostingModel["default"].findOneAndUpdate({
            _id: id,
            company: companyId
          }, req.body, {
            "new": true,
            runValidators: true
          });
        case 6:
          updatedJobPosting = _context2.sent;
          if (updatedJobPosting) {
            _context2.next = 9;
            break;
          }
          return _context2.abrupt("return", res.status(404).json({
            error: 'Job posting not found'
          }));
        case 9:
          res.status(200).json(updatedJobPosting);
          _context2.next = 16;
          break;
        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](3);
          console.log(_context2.t0);
          res.status(400).json({
            error: _context2.t0.message
          });
        case 16:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[3, 12]]);
  }));
  return function updateJobPosting(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var deleteJobPosting = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var _req$user3;
    var id, companyId, deletedJobPosting;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          companyId = (_req$user3 = req.user) === null || _req$user3 === void 0 ? void 0 : _req$user3.userId;
          _context3.prev = 2;
          _context3.next = 5;
          return _JobPostingModel["default"].findOneAndDelete({
            _id: id,
            companyId: companyId
          });
        case 5:
          deletedJobPosting = _context3.sent;
          if (deletedJobPosting) {
            _context3.next = 8;
            break;
          }
          return _context3.abrupt("return", res.status(404).json({
            error: 'Job posting not found'
          }));
        case 8:
          res.status(200).json(deletedJobPosting);
          _context3.next = 14;
          break;
        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](2);
          res.status(400).json({
            error: _context3.t0.message
          });
        case 14:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[2, 11]]);
  }));
  return function deleteJobPosting(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var getJobPosting = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var _req$user4;
    var id, workerId, worker, jobApplication, alreadyApplied, jobPosting;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          workerId = (_req$user4 = req.user) === null || _req$user4 === void 0 ? void 0 : _req$user4.userId;
          worker = req.query.worker;
          if (!worker) {
            _context4.next = 8;
            break;
          }
          _context4.next = 6;
          return _JobApplicationModel["default"].find({
            worker: workerId,
            jobPosting: id
          });
        case 6:
          jobApplication = _context4.sent;
          alreadyApplied = jobApplication.length >= 1;
        case 8:
          _context4.prev = 8;
          _context4.next = 11;
          return _JobPostingModel["default"].findById(id).populate({
            path: 'company',
            select: '-email -createdAt -updatedAt -username'
          });
        case 11:
          jobPosting = _context4.sent;
          if (jobPosting) {
            _context4.next = 14;
            break;
          }
          return _context4.abrupt("return", res.status(404).json({
            error: 'Job posting not found'
          }));
        case 14:
          res.status(200).json({
            jobPosting: jobPosting,
            alreadyApplied: alreadyApplied
          });
          _context4.next = 20;
          break;
        case 17:
          _context4.prev = 17;
          _context4.t0 = _context4["catch"](8);
          res.status(500).json({
            error: _context4.t0.message
          });
        case 20:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[8, 17]]);
  }));
  return function getJobPosting(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var getAllJobPostings = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var page, limit, dayOfWeek, minPay, jobType, requesterLocation, requesterDistance, sortField, sortOrder, matchStage, geoNearStage, projectionStage, pipeline, jobPostings, totalJobPostings, totalPages;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          console.log(req.query);
          page = parseInt(req.query.page) || 1;
          limit = parseInt(req.query.limit) || 10; // Extract filter params
          dayOfWeek = Array.isArray(req.query.dayOfWeek) ? req.query.dayOfWeek : [req.query.dayOfWeek];
          minPay = parseInt(req.query.minPay);
          jobType = req.query.jobType;
          requesterLocation = req.query.requesterLocation;
          requesterDistance = parseFloat(req.query.requesterDistance) || 10;
          sortField = req.query.sortBy; // This is the field to sort by
          sortOrder = parseInt(req.query.order) || 1; // This is the order to sort in. 1 for ascending, -1 for descending.
          // Build match stage
          matchStage = {};
          if (dayOfWeek.length > 0 && dayOfWeek[0] != undefined) matchStage.dayOfWeek = {
            $in: dayOfWeek
          };
          if (minPay) matchStage.payment = {
            $gte: minPay
          };
          if (jobType) matchStage.type = {
            $in: jobType
          };
          matchStage.start = {
            $gte: new Date()
          };
          geoNearStage = requesterLocation && requesterDistance ? {
            $geoNear: {
              near: {
                type: 'Point',
                coordinates: [parseFloat(requesterLocation.split(',')[0]), parseFloat(requesterLocation.split(',')[1])]
              },
              distanceField: 'distance',
              spherical: true,
              maxDistance: requesterDistance * 1609.34 // miles to meters
            }
          } : null;
          projectionStage = geoNearStage ? {
            $project: {
              company: 0,
              distance: 0
            }
          } : {
            $project: {
              company: 0
            }
          };
          pipeline = [geoNearStage, Object.keys(matchStage).length > 0 ? {
            $match: matchStage
          } : null, {
            $lookup: {
              from: 'companies',
              localField: 'company',
              foreignField: '_id',
              as: 'company'
            }
          }, {
            $unwind: '$company'
          },
          // Flatten the 'company' array
          {
            $addFields: {
              companyName: '$company.name',
              distanceInMiles: geoNearStage ? {
                $divide: ['$distance', 1609.34]
              } : undefined // Convert 'distance' from meters to miles
            }
          }, projectionStage, {
            $sort: _defineProperty({}, sortField, sortOrder)
          },
          // Add the sort stage here
          {
            $skip: (page - 1) * limit
          }, {
            $limit: limit
          }].filter(Boolean); // Filter out any stages that are empty
          _context5.prev = 18;
          _context5.next = 21;
          return _JobPostingModel["default"].aggregate(pipeline);
        case 21:
          jobPostings = _context5.sent;
          _context5.next = 24;
          return _JobPostingModel["default"].countDocuments(matchStage);
        case 24:
          totalJobPostings = _context5.sent;
          totalPages = Math.ceil(totalJobPostings / limit);
          res.json({
            totalPages: totalPages,
            currentPage: page,
            jobPostings: jobPostings
          });
          _context5.next = 32;
          break;
        case 29:
          _context5.prev = 29;
          _context5.t0 = _context5["catch"](18);
          res.status(500).json({
            error: _context5.t0.message
          });
        case 32:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[18, 29]]);
  }));
  return function getAllJobPostings(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var getJobApplications = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var _req$user5, companyId, jobPostingId, jobPosting, applications;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          companyId = (_req$user5 = req.user) === null || _req$user5 === void 0 ? void 0 : _req$user5.userId;
          jobPostingId = req.params.id;
          _context6.next = 5;
          return _JobPostingModel["default"].findById(jobPostingId);
        case 5:
          jobPosting = _context6.sent;
          if (jobPosting) {
            _context6.next = 8;
            break;
          }
          return _context6.abrupt("return", res.status(500).json({
            message: 'Job posting not found'
          }));
        case 8:
          if (!(companyId != jobPosting.company)) {
            _context6.next = 10;
            break;
          }
          return _context6.abrupt("return", res.status(403).json({
            message: 'Not authorized to view resource'
          }));
        case 10:
          _context6.next = 12;
          return _JobApplicationModel["default"].find({
            jobPosting: jobPostingId
          }).populate('worker');
        case 12:
          applications = _context6.sent;
          if (applications) {
            _context6.next = 15;
            break;
          }
          return _context6.abrupt("return", res.status(404).json({
            message: 'No applications for this job posting.'
          }));
        case 15:
          // if (String(jobPosting.company) !== String(req.user?.userId)) {
          // 	return res
          // 		.status(403)
          // 		.json({ message: 'Unauthorized to access this job posting.' })
          // }

          res.status(200).json({
            applications: applications,
            jobName: jobPosting.name
          });
          _context6.next = 21;
          break;
        case 18:
          _context6.prev = 18;
          _context6.t0 = _context6["catch"](0);
          res.status(500).json({
            message: 'An error occurred while fetching job applications.',
            error: _context6.t0
          });
        case 21:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 18]]);
  }));
  return function getJobApplications(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var getNearbyJobPostings = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var nearbyJobPostings;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return _CompanyModel["default"].ensureIndexes()["catch"](function (err) {
            return console.log(err);
          });
        case 2:
          _context7.next = 4;
          return _CompanyModel["default"].find({
            location: {
              $near: {
                $geometry: {
                  type: 'Point',
                  coordinates: [-122.1639, 37.423] // [longitude, latitude]
                }
                // Optionally, specify a maximum distance (in meters)
                // $maxDistance: 1000,
              }
            }
          });
        case 4:
          nearbyJobPostings = _context7.sent;
          return _context7.abrupt("return", res.json(nearbyJobPostings));
        case 6:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function getNearbyJobPostings(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
var JobPostingController = {
  createJobPosting: createJobPosting,
  updateJobPosting: updateJobPosting,
  deleteJobPosting: deleteJobPosting,
  getAllJobPostings: getAllJobPostings,
  getJobApplications: getJobApplications,
  getJobPosting: getJobPosting,
  getNearbyJobPostings: getNearbyJobPostings
};
var _default = JobPostingController;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfSm9iUG9zdGluZ01vZGVsIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfQ29tcGFueU1vZGVsIiwiX0pvYkFwcGxpY2F0aW9uTW9kZWwiLCJvYmoiLCJfX2VzTW9kdWxlIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsImV4cG9ydHMiLCJPcCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093biIsImhhc093blByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJrZXkiLCJkZXNjIiwidmFsdWUiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImVyciIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY3JlYXRlIiwiY29udGV4dCIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsImFyZyIsInR5cGUiLCJjYWxsIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIm1ldGhvZCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiUHJvbWlzZUltcGwiLCJpbnZva2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVjb3JkIiwicmVzdWx0IiwiX3R5cGVvZiIsIl9fYXdhaXQiLCJ0aGVuIiwidW53cmFwcGVkIiwiZXJyb3IiLCJwcmV2aW91c1Byb21pc2UiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsInN0YXRlIiwiRXJyb3IiLCJkb25lUmVzdWx0IiwiZGVsZWdhdGUiLCJkZWxlZ2F0ZVJlc3VsdCIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsImRvbmUiLCJtZXRob2ROYW1lIiwidW5kZWZpbmVkIiwiVHlwZUVycm9yIiwiaW5mbyIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJlbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXRlcmFibGUiLCJpdGVyYXRvck1ldGhvZCIsImlzTmFOIiwibGVuZ3RoIiwiaSIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsIml0ZXIiLCJrZXlzIiwidmFsIiwib2JqZWN0IiwicmV2ZXJzZSIsInBvcCIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJvd25LZXlzIiwiZW51bWVyYWJsZU9ubHkiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJzeW1ib2xzIiwiZmlsdGVyIiwic3ltIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwidGFyZ2V0IiwiYXJndW1lbnRzIiwic291cmNlIiwiX2RlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJfdG9Qcm9wZXJ0eUtleSIsIl90b1ByaW1pdGl2ZSIsIlN0cmluZyIsImlucHV0IiwiaGludCIsInByaW0iLCJ0b1ByaW1pdGl2ZSIsInJlcyIsIk51bWJlciIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsIl9uZXh0IiwiX3Rocm93IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmdzIiwiY3JlYXRlSm9iUG9zdGluZyIsIl9yZWYiLCJfY2FsbGVlIiwicmVxIiwiX3JlcSR1c2VyIiwiY29tcGFueSIsIm5ld0pvYlBvc3RpbmciLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiQ29tcGFueU1vZGVsIiwiZmluZEJ5SWQiLCJ1c2VyIiwidXNlcklkIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJKb2JQb3N0aW5nTW9kZWwiLCJib2R5IiwiX2lkIiwibG9jYXRpb24iLCJzYXZlIiwidDAiLCJfeCIsIl94MiIsInVwZGF0ZUpvYlBvc3RpbmciLCJfcmVmMiIsIl9jYWxsZWUyIiwiX3JlcSR1c2VyMiIsImlkIiwiY29tcGFueUlkIiwidXBkYXRlZEpvYlBvc3RpbmciLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJwYXJhbXMiLCJjb25zb2xlIiwibG9nIiwiZmluZE9uZUFuZFVwZGF0ZSIsInJ1blZhbGlkYXRvcnMiLCJfeDMiLCJfeDQiLCJkZWxldGVKb2JQb3N0aW5nIiwiX3JlZjMiLCJfY2FsbGVlMyIsIl9yZXEkdXNlcjMiLCJkZWxldGVkSm9iUG9zdGluZyIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsImZpbmRPbmVBbmREZWxldGUiLCJfeDUiLCJfeDYiLCJnZXRKb2JQb3N0aW5nIiwiX3JlZjQiLCJfY2FsbGVlNCIsIl9yZXEkdXNlcjQiLCJ3b3JrZXJJZCIsIndvcmtlciIsImpvYkFwcGxpY2F0aW9uIiwiYWxyZWFkeUFwcGxpZWQiLCJqb2JQb3N0aW5nIiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0IiwicXVlcnkiLCJKb2JBcHBsaWNhdGlvbk1vZGVsIiwiZmluZCIsInBvcHVsYXRlIiwicGF0aCIsInNlbGVjdCIsIl94NyIsIl94OCIsImdldEFsbEpvYlBvc3RpbmdzIiwiX3JlZjUiLCJfY2FsbGVlNSIsInBhZ2UiLCJsaW1pdCIsImRheU9mV2VlayIsIm1pblBheSIsImpvYlR5cGUiLCJyZXF1ZXN0ZXJMb2NhdGlvbiIsInJlcXVlc3RlckRpc3RhbmNlIiwic29ydEZpZWxkIiwic29ydE9yZGVyIiwibWF0Y2hTdGFnZSIsImdlb05lYXJTdGFnZSIsInByb2plY3Rpb25TdGFnZSIsInBpcGVsaW5lIiwiam9iUG9zdGluZ3MiLCJ0b3RhbEpvYlBvc3RpbmdzIiwidG90YWxQYWdlcyIsIl9jYWxsZWU1JCIsIl9jb250ZXh0NSIsInBhcnNlSW50IiwiQXJyYXkiLCJpc0FycmF5IiwicGFyc2VGbG9hdCIsInNvcnRCeSIsIm9yZGVyIiwiJGluIiwicGF5bWVudCIsIiRndGUiLCJzdGFydCIsIkRhdGUiLCIkZ2VvTmVhciIsIm5lYXIiLCJjb29yZGluYXRlcyIsInNwbGl0IiwiZGlzdGFuY2VGaWVsZCIsInNwaGVyaWNhbCIsIm1heERpc3RhbmNlIiwiJHByb2plY3QiLCJkaXN0YW5jZSIsIiRtYXRjaCIsIiRsb29rdXAiLCJmcm9tIiwibG9jYWxGaWVsZCIsImZvcmVpZ25GaWVsZCIsImFzIiwiJHVud2luZCIsIiRhZGRGaWVsZHMiLCJjb21wYW55TmFtZSIsImRpc3RhbmNlSW5NaWxlcyIsIiRkaXZpZGUiLCIkc29ydCIsIiRza2lwIiwiJGxpbWl0IiwiQm9vbGVhbiIsImFnZ3JlZ2F0ZSIsImNvdW50RG9jdW1lbnRzIiwiTWF0aCIsImNlaWwiLCJjdXJyZW50UGFnZSIsIl94OSIsIl94MTAiLCJnZXRKb2JBcHBsaWNhdGlvbnMiLCJfcmVmNiIsIl9jYWxsZWU2IiwiX3JlcSR1c2VyNSIsImpvYlBvc3RpbmdJZCIsImFwcGxpY2F0aW9ucyIsIl9jYWxsZWU2JCIsIl9jb250ZXh0NiIsImpvYk5hbWUiLCJfeDExIiwiX3gxMiIsImdldE5lYXJieUpvYlBvc3RpbmdzIiwiX3JlZjciLCJfY2FsbGVlNyIsIm5lYXJieUpvYlBvc3RpbmdzIiwiX2NhbGxlZTckIiwiX2NvbnRleHQ3IiwiZW5zdXJlSW5kZXhlcyIsIiRuZWFyIiwiJGdlb21ldHJ5IiwiX3gxMyIsIl94MTQiLCJKb2JQb3N0aW5nQ29udHJvbGxlciIsIl9kZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FwcC9jb250cm9sbGVycy9Kb2JzL0pvYlBvc3RpbmdDb250cm9sbGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcydcblxuaW1wb3J0IEpvYlBvc3RpbmdNb2RlbCBmcm9tICdAL2FwcC9tb2RlbHMvSm9iUG9zdGluZ01vZGVsJ1xuaW1wb3J0IENvbXBhbnlNb2RlbCBmcm9tICdAL2FwcC9tb2RlbHMvQ29tcGFueU1vZGVsJ1xuaW1wb3J0IHsgSUNvbXBhbnkgfSBmcm9tICdAL2FwcC9pbnRlcmZhY2VzL21vZGVscy9Db21wYW55J1xuaW1wb3J0IHsgSUpvYkFwcGxpY2F0aW9uIH0gZnJvbSAnQC9hcHAvaW50ZXJmYWNlcy9tb2RlbHMvSm9iQXBwbGljYXRpb24nXG5pbXBvcnQgSm9iQXBwbGljYXRpb25Nb2RlbCBmcm9tICdAL2FwcC9tb2RlbHMvSm9iQXBwbGljYXRpb25Nb2RlbCdcbmltcG9ydCB7IElKb2JQb3N0aW5nIH0gZnJvbSAnQC9hcHAvaW50ZXJmYWNlcy9tb2RlbHMvSm9iUG9zdGluZydcbmltcG9ydCBXb3JrZXJNb2RlbCBmcm9tICdAL2FwcC9tb2RlbHMvV29ya2VyTW9kZWwnXG5cbmNvbnN0IGNyZWF0ZUpvYlBvc3RpbmcgPSBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG5cdGNvbnN0IGNvbXBhbnk6IElDb21wYW55IHwgbnVsbCA9IGF3YWl0IENvbXBhbnlNb2RlbC5maW5kQnlJZChyZXEudXNlcj8udXNlcklkKVxuXG5cdGlmICghY29tcGFueSkge1xuXHRcdHJldHVybiByZXNcblx0XHRcdC5zdGF0dXMoNDAxKVxuXHRcdFx0Lmpzb24oeyBtZXNzYWdlOiAnT25seSBhdXRoZW50aWNhdGVkIGNvbXBhbmllcyBjYW4gY3JlYXRlIGpvYiBwb3N0aW5ncycgfSlcblx0fVxuXG5cdGNvbnN0IG5ld0pvYlBvc3RpbmcgPSBuZXcgSm9iUG9zdGluZ01vZGVsKHtcblx0XHQuLi5yZXEuYm9keSxcblx0XHRjb21wYW55OiBjb21wYW55Ll9pZCxcblx0XHRsb2NhdGlvbjogY29tcGFueS5sb2NhdGlvbixcblx0fSlcblxuXHR0cnkge1xuXHRcdGF3YWl0IG5ld0pvYlBvc3Rpbmcuc2F2ZSgpXG5cdFx0cmVzLnN0YXR1cygyMDEpLmpzb24oeyBuZXdKb2JQb3N0aW5nIH0pXG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0cmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiAoZXJyb3IgYXMgRXJyb3IpLm1lc3NhZ2UgfSlcblx0fVxufVxuXG5jb25zdCB1cGRhdGVKb2JQb3N0aW5nID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuXHRjb25zdCB7IGlkIH0gPSByZXEucGFyYW1zXG5cdGNvbnN0IGNvbXBhbnlJZCA9IHJlcS51c2VyPy51c2VySWRcblx0Y29uc29sZS5sb2cocmVxLnBhcmFtcywgcmVxLnVzZXIpXG5cdHRyeSB7XG5cdFx0Y29uc3QgdXBkYXRlZEpvYlBvc3RpbmcgPSBhd2FpdCBKb2JQb3N0aW5nTW9kZWwuZmluZE9uZUFuZFVwZGF0ZShcblx0XHRcdHsgX2lkOiBpZCwgY29tcGFueTogY29tcGFueUlkIH0sXG5cdFx0XHRyZXEuYm9keSxcblx0XHRcdHsgbmV3OiB0cnVlLCBydW5WYWxpZGF0b3JzOiB0cnVlIH1cblx0XHQpXG5cblx0XHRpZiAoIXVwZGF0ZWRKb2JQb3N0aW5nKSB7XG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBlcnJvcjogJ0pvYiBwb3N0aW5nIG5vdCBmb3VuZCcgfSlcblx0XHR9XG5cblx0XHRyZXMuc3RhdHVzKDIwMCkuanNvbih1cGRhdGVkSm9iUG9zdGluZylcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmxvZyhlcnJvcilcblx0XHRyZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiAoZXJyb3IgYXMgRXJyb3IpLm1lc3NhZ2UgfSlcblx0fVxufVxuXG5jb25zdCBkZWxldGVKb2JQb3N0aW5nID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuXHRjb25zdCB7IGlkIH0gPSByZXEucGFyYW1zXG5cdGNvbnN0IGNvbXBhbnlJZCA9IHJlcS51c2VyPy51c2VySWRcblxuXHR0cnkge1xuXHRcdGNvbnN0IGRlbGV0ZWRKb2JQb3N0aW5nID0gYXdhaXQgSm9iUG9zdGluZ01vZGVsLmZpbmRPbmVBbmREZWxldGUoe1xuXHRcdFx0X2lkOiBpZCxcblx0XHRcdGNvbXBhbnlJZCxcblx0XHR9KVxuXG5cdFx0aWYgKCFkZWxldGVkSm9iUG9zdGluZykge1xuXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgZXJyb3I6ICdKb2IgcG9zdGluZyBub3QgZm91bmQnIH0pXG5cdFx0fVxuXG5cdFx0cmVzLnN0YXR1cygyMDApLmpzb24oZGVsZXRlZEpvYlBvc3RpbmcpXG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0cmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogKGVycm9yIGFzIEVycm9yKS5tZXNzYWdlIH0pXG5cdH1cbn1cblxuY29uc3QgZ2V0Sm9iUG9zdGluZyA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcblx0Y29uc3QgeyBpZCB9ID0gcmVxLnBhcmFtc1xuXHRjb25zdCB3b3JrZXJJZCA9IHJlcS51c2VyPy51c2VySWRcblx0Y29uc3QgeyB3b3JrZXIgfSA9IHJlcS5xdWVyeVxuXG5cdGxldCBqb2JBcHBsaWNhdGlvbiwgYWxyZWFkeUFwcGxpZWRcblxuXHRpZiAod29ya2VyKSB7XG5cdFx0am9iQXBwbGljYXRpb24gPSBhd2FpdCBKb2JBcHBsaWNhdGlvbk1vZGVsLmZpbmQoe1xuXHRcdFx0d29ya2VyOiB3b3JrZXJJZCxcblx0XHRcdGpvYlBvc3Rpbmc6IGlkLFxuXHRcdH0pXG5cdFx0YWxyZWFkeUFwcGxpZWQgPSBqb2JBcHBsaWNhdGlvbi5sZW5ndGggPj0gMVxuXHR9XG5cblx0dHJ5IHtcblx0XHRjb25zdCBqb2JQb3N0aW5nID0gYXdhaXQgSm9iUG9zdGluZ01vZGVsLmZpbmRCeUlkKGlkKS5wb3B1bGF0ZSh7XG5cdFx0XHRwYXRoOiAnY29tcGFueScsXG5cdFx0XHRzZWxlY3Q6ICctZW1haWwgLWNyZWF0ZWRBdCAtdXBkYXRlZEF0IC11c2VybmFtZScsXG5cdFx0fSlcblxuXHRcdGlmICgham9iUG9zdGluZykge1xuXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgZXJyb3I6ICdKb2IgcG9zdGluZyBub3QgZm91bmQnIH0pXG5cdFx0fVxuXG5cdFx0cmVzLnN0YXR1cygyMDApLmpzb24oe1xuXHRcdFx0am9iUG9zdGluZyxcblx0XHRcdGFscmVhZHlBcHBsaWVkLFxuXHRcdH0pXG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0cmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogKGVycm9yIGFzIEVycm9yKS5tZXNzYWdlIH0pXG5cdH1cbn1cblxuY29uc3QgZ2V0QWxsSm9iUG9zdGluZ3MgPSBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG5cdGNvbnNvbGUubG9nKHJlcS5xdWVyeSlcblx0Y29uc3QgcGFnZSA9IHBhcnNlSW50KHJlcS5xdWVyeS5wYWdlIGFzIHN0cmluZykgfHwgMVxuXHRjb25zdCBsaW1pdCA9IHBhcnNlSW50KHJlcS5xdWVyeS5saW1pdCBhcyBzdHJpbmcpIHx8IDEwXG5cblx0Ly8gRXh0cmFjdCBmaWx0ZXIgcGFyYW1zXG5cdGNvbnN0IGRheU9mV2VlayA9IEFycmF5LmlzQXJyYXkocmVxLnF1ZXJ5LmRheU9mV2Vlaylcblx0XHQ/IHJlcS5xdWVyeS5kYXlPZldlZWtcblx0XHQ6IFtyZXEucXVlcnkuZGF5T2ZXZWVrXVxuXHRjb25zdCBtaW5QYXkgPSBwYXJzZUludChyZXEucXVlcnkubWluUGF5IGFzIHN0cmluZylcblx0Y29uc3Qgam9iVHlwZSA9IHJlcS5xdWVyeS5qb2JUeXBlIGFzIHN0cmluZ1tdXG5cdGNvbnN0IHJlcXVlc3RlckxvY2F0aW9uID0gcmVxLnF1ZXJ5LnJlcXVlc3RlckxvY2F0aW9uIGFzIHN0cmluZ1xuXHRjb25zdCByZXF1ZXN0ZXJEaXN0YW5jZSA9XG5cdFx0cGFyc2VGbG9hdChyZXEucXVlcnkucmVxdWVzdGVyRGlzdGFuY2UgYXMgc3RyaW5nKSB8fCAxMFxuXHRjb25zdCBzb3J0RmllbGQgPSByZXEucXVlcnkuc29ydEJ5IGFzIHN0cmluZyAvLyBUaGlzIGlzIHRoZSBmaWVsZCB0byBzb3J0IGJ5XG5cdGNvbnN0IHNvcnRPcmRlciA9IHBhcnNlSW50KHJlcS5xdWVyeS5vcmRlciBhcyBzdHJpbmcpIHx8IDEgLy8gVGhpcyBpcyB0aGUgb3JkZXIgdG8gc29ydCBpbi4gMSBmb3IgYXNjZW5kaW5nLCAtMSBmb3IgZGVzY2VuZGluZy5cblx0Ly8gQnVpbGQgbWF0Y2ggc3RhZ2Vcblx0Y29uc3QgbWF0Y2hTdGFnZTogYW55ID0ge31cblx0aWYgKGRheU9mV2Vlay5sZW5ndGggPiAwICYmIGRheU9mV2Vla1swXSAhPSB1bmRlZmluZWQpXG5cdFx0bWF0Y2hTdGFnZS5kYXlPZldlZWsgPSB7ICRpbjogZGF5T2ZXZWVrIH1cblx0aWYgKG1pblBheSkgbWF0Y2hTdGFnZS5wYXltZW50ID0geyAkZ3RlOiBtaW5QYXkgfVxuXHRpZiAoam9iVHlwZSkgbWF0Y2hTdGFnZS50eXBlID0geyAkaW46IGpvYlR5cGUgfVxuXHRtYXRjaFN0YWdlLnN0YXJ0ID0geyAkZ3RlOiBuZXcgRGF0ZSgpIH1cblxuXHRjb25zdCBnZW9OZWFyU3RhZ2UgPVxuXHRcdHJlcXVlc3RlckxvY2F0aW9uICYmIHJlcXVlc3RlckRpc3RhbmNlXG5cdFx0XHQ/IHtcblx0XHRcdFx0XHQkZ2VvTmVhcjoge1xuXHRcdFx0XHRcdFx0bmVhcjoge1xuXHRcdFx0XHRcdFx0XHR0eXBlOiAnUG9pbnQnLFxuXHRcdFx0XHRcdFx0XHRjb29yZGluYXRlczogW1xuXHRcdFx0XHRcdFx0XHRcdHBhcnNlRmxvYXQocmVxdWVzdGVyTG9jYXRpb24uc3BsaXQoJywnKVswXSksXG5cdFx0XHRcdFx0XHRcdFx0cGFyc2VGbG9hdChyZXF1ZXN0ZXJMb2NhdGlvbi5zcGxpdCgnLCcpWzFdKSxcblx0XHRcdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRkaXN0YW5jZUZpZWxkOiAnZGlzdGFuY2UnLFxuXHRcdFx0XHRcdFx0c3BoZXJpY2FsOiB0cnVlLFxuXHRcdFx0XHRcdFx0bWF4RGlzdGFuY2U6IHJlcXVlc3RlckRpc3RhbmNlICogMTYwOS4zNCwgLy8gbWlsZXMgdG8gbWV0ZXJzXG5cdFx0XHRcdFx0fSxcblx0XHRcdCAgfVxuXHRcdFx0OiBudWxsXG5cblx0Y29uc3QgcHJvamVjdGlvblN0YWdlID0gZ2VvTmVhclN0YWdlXG5cdFx0PyB7ICRwcm9qZWN0OiB7IGNvbXBhbnk6IDAsIGRpc3RhbmNlOiAwIH0gfVxuXHRcdDogeyAkcHJvamVjdDogeyBjb21wYW55OiAwIH0gfVxuXG5cdGNvbnN0IHBpcGVsaW5lID0gW1xuXHRcdGdlb05lYXJTdGFnZSxcblx0XHRPYmplY3Qua2V5cyhtYXRjaFN0YWdlKS5sZW5ndGggPiAwID8geyAkbWF0Y2g6IG1hdGNoU3RhZ2UgfSA6IG51bGwsXG5cdFx0e1xuXHRcdFx0JGxvb2t1cDoge1xuXHRcdFx0XHRmcm9tOiAnY29tcGFuaWVzJyxcblx0XHRcdFx0bG9jYWxGaWVsZDogJ2NvbXBhbnknLFxuXHRcdFx0XHRmb3JlaWduRmllbGQ6ICdfaWQnLFxuXHRcdFx0XHRhczogJ2NvbXBhbnknLFxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdHsgJHVud2luZDogJyRjb21wYW55JyB9LCAvLyBGbGF0dGVuIHRoZSAnY29tcGFueScgYXJyYXlcblx0XHR7XG5cdFx0XHQkYWRkRmllbGRzOiB7XG5cdFx0XHRcdGNvbXBhbnlOYW1lOiAnJGNvbXBhbnkubmFtZScsXG5cdFx0XHRcdGRpc3RhbmNlSW5NaWxlczogZ2VvTmVhclN0YWdlXG5cdFx0XHRcdFx0PyB7ICRkaXZpZGU6IFsnJGRpc3RhbmNlJywgMTYwOS4zNF0gfVxuXHRcdFx0XHRcdDogdW5kZWZpbmVkLCAvLyBDb252ZXJ0ICdkaXN0YW5jZScgZnJvbSBtZXRlcnMgdG8gbWlsZXNcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRwcm9qZWN0aW9uU3RhZ2UsXG5cdFx0eyAkc29ydDogeyBbc29ydEZpZWxkXTogc29ydE9yZGVyIH0gfSwgLy8gQWRkIHRoZSBzb3J0IHN0YWdlIGhlcmVcblx0XHR7ICRza2lwOiAocGFnZSAtIDEpICogbGltaXQgfSxcblx0XHR7ICRsaW1pdDogbGltaXQgfSxcblx0XS5maWx0ZXIoQm9vbGVhbikgLy8gRmlsdGVyIG91dCBhbnkgc3RhZ2VzIHRoYXQgYXJlIGVtcHR5XG5cblx0dHJ5IHtcblx0XHRjb25zdCBqb2JQb3N0aW5ncyA9IGF3YWl0IEpvYlBvc3RpbmdNb2RlbC5hZ2dyZWdhdGUocGlwZWxpbmUgYXMgYW55KVxuXG5cdFx0Y29uc3QgdG90YWxKb2JQb3N0aW5ncyA9IGF3YWl0IEpvYlBvc3RpbmdNb2RlbC5jb3VudERvY3VtZW50cyhtYXRjaFN0YWdlKVxuXHRcdGNvbnN0IHRvdGFsUGFnZXMgPSBNYXRoLmNlaWwodG90YWxKb2JQb3N0aW5ncyAvIGxpbWl0KVxuXG5cdFx0cmVzLmpzb24oe1xuXHRcdFx0dG90YWxQYWdlcyxcblx0XHRcdGN1cnJlbnRQYWdlOiBwYWdlLFxuXHRcdFx0am9iUG9zdGluZ3MsXG5cdFx0fSlcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRyZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAoZXJyb3IgYXMgRXJyb3IpLm1lc3NhZ2UgfSlcblx0fVxufVxuXG5jb25zdCBnZXRKb2JBcHBsaWNhdGlvbnMgPSBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgY29tcGFueUlkID0gcmVxLnVzZXI/LnVzZXJJZFxuXG5cdFx0Y29uc3Qgam9iUG9zdGluZ0lkID0gcmVxLnBhcmFtcy5pZFxuXG5cdFx0Y29uc3Qgam9iUG9zdGluZzogSUpvYlBvc3RpbmcgfCBudWxsID0gYXdhaXQgSm9iUG9zdGluZ01vZGVsLmZpbmRCeUlkKFxuXHRcdFx0am9iUG9zdGluZ0lkXG5cdFx0KVxuXG5cdFx0aWYgKCFqb2JQb3N0aW5nKSB7XG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnSm9iIHBvc3Rpbmcgbm90IGZvdW5kJyB9KVxuXHRcdH1cblxuXHRcdGlmIChjb21wYW55SWQgIT0gam9iUG9zdGluZy5jb21wYW55KSB7XG5cdFx0XHRyZXR1cm4gcmVzXG5cdFx0XHRcdC5zdGF0dXMoNDAzKVxuXHRcdFx0XHQuanNvbih7IG1lc3NhZ2U6ICdOb3QgYXV0aG9yaXplZCB0byB2aWV3IHJlc291cmNlJyB9KVxuXHRcdH1cblxuXHRcdGNvbnN0IGFwcGxpY2F0aW9uczogSUpvYkFwcGxpY2F0aW9uW10gfCBudWxsID1cblx0XHRcdGF3YWl0IEpvYkFwcGxpY2F0aW9uTW9kZWwuZmluZCh7IGpvYlBvc3Rpbmc6IGpvYlBvc3RpbmdJZCB9KS5wb3B1bGF0ZShcblx0XHRcdFx0J3dvcmtlcidcblx0XHRcdClcblxuXHRcdGlmICghYXBwbGljYXRpb25zKSB7XG5cdFx0XHRyZXR1cm4gcmVzXG5cdFx0XHRcdC5zdGF0dXMoNDA0KVxuXHRcdFx0XHQuanNvbih7IG1lc3NhZ2U6ICdObyBhcHBsaWNhdGlvbnMgZm9yIHRoaXMgam9iIHBvc3RpbmcuJyB9KVxuXHRcdH1cblxuXHRcdC8vIGlmIChTdHJpbmcoam9iUG9zdGluZy5jb21wYW55KSAhPT0gU3RyaW5nKHJlcS51c2VyPy51c2VySWQpKSB7XG5cdFx0Ly8gXHRyZXR1cm4gcmVzXG5cdFx0Ly8gXHRcdC5zdGF0dXMoNDAzKVxuXHRcdC8vIFx0XHQuanNvbih7IG1lc3NhZ2U6ICdVbmF1dGhvcml6ZWQgdG8gYWNjZXNzIHRoaXMgam9iIHBvc3RpbmcuJyB9KVxuXHRcdC8vIH1cblxuXHRcdHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgYXBwbGljYXRpb25zLCBqb2JOYW1lOiBqb2JQb3N0aW5nLm5hbWUgfSlcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRyZXMuc3RhdHVzKDUwMCkuanNvbih7XG5cdFx0XHRtZXNzYWdlOiAnQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgZmV0Y2hpbmcgam9iIGFwcGxpY2F0aW9ucy4nLFxuXHRcdFx0ZXJyb3IsXG5cdFx0fSlcblx0fVxufVxuXG5jb25zdCBnZXROZWFyYnlKb2JQb3N0aW5ncyA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcblx0Ly8gVGhlbiwgdXNlIHRoYXQgbG9jYXRpb24gdG8gZmluZCBuZWFyYnkgam9iIHBvc3RpbmdzXG5cdGF3YWl0IENvbXBhbnlNb2RlbC5lbnN1cmVJbmRleGVzKCkuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSlcblx0Y29uc3QgbmVhcmJ5Sm9iUG9zdGluZ3MgPSBhd2FpdCBDb21wYW55TW9kZWwuZmluZCh7XG5cdFx0bG9jYXRpb246IHtcblx0XHRcdCRuZWFyOiB7XG5cdFx0XHRcdCRnZW9tZXRyeToge1xuXHRcdFx0XHRcdHR5cGU6ICdQb2ludCcsXG5cdFx0XHRcdFx0Y29vcmRpbmF0ZXM6IFstMTIyLjE2MzksIDM3LjQyM10sIC8vIFtsb25naXR1ZGUsIGxhdGl0dWRlXVxuXHRcdFx0XHR9LFxuXHRcdFx0XHQvLyBPcHRpb25hbGx5LCBzcGVjaWZ5IGEgbWF4aW11bSBkaXN0YW5jZSAoaW4gbWV0ZXJzKVxuXHRcdFx0XHQvLyAkbWF4RGlzdGFuY2U6IDEwMDAsXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH0pXG5cblx0cmV0dXJuIHJlcy5qc29uKG5lYXJieUpvYlBvc3RpbmdzKVxufVxuXG5jb25zdCBKb2JQb3N0aW5nQ29udHJvbGxlciA9IHtcblx0Y3JlYXRlSm9iUG9zdGluZyxcblx0dXBkYXRlSm9iUG9zdGluZyxcblx0ZGVsZXRlSm9iUG9zdGluZyxcblx0Z2V0QWxsSm9iUG9zdGluZ3MsXG5cdGdldEpvYkFwcGxpY2F0aW9ucyxcblx0Z2V0Sm9iUG9zdGluZyxcblx0Z2V0TmVhcmJ5Sm9iUG9zdGluZ3MsXG59XG5cbmV4cG9ydCBkZWZhdWx0IEpvYlBvc3RpbmdDb250cm9sbGVyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQSxJQUFBQSxnQkFBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUMsYUFBQSxHQUFBRixzQkFBQSxDQUFBQyxPQUFBO0FBR0EsSUFBQUUsb0JBQUEsR0FBQUgsc0JBQUEsQ0FBQUMsT0FBQTtBQUFrRSxTQUFBRCx1QkFBQUksR0FBQSxXQUFBQSxHQUFBLElBQUFBLEdBQUEsQ0FBQUMsVUFBQSxHQUFBRCxHQUFBLGdCQUFBQSxHQUFBO0FBQUEsU0FBQUUsb0JBQUEsa0JBTGxFLHFKQUFBQSxtQkFBQSxZQUFBQSxvQkFBQSxXQUFBQyxPQUFBLFNBQUFBLE9BQUEsT0FBQUMsRUFBQSxHQUFBQyxNQUFBLENBQUFDLFNBQUEsRUFBQUMsTUFBQSxHQUFBSCxFQUFBLENBQUFJLGNBQUEsRUFBQUMsY0FBQSxHQUFBSixNQUFBLENBQUFJLGNBQUEsY0FBQVQsR0FBQSxFQUFBVSxHQUFBLEVBQUFDLElBQUEsSUFBQVgsR0FBQSxDQUFBVSxHQUFBLElBQUFDLElBQUEsQ0FBQUMsS0FBQSxLQUFBQyxPQUFBLHdCQUFBQyxNQUFBLEdBQUFB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