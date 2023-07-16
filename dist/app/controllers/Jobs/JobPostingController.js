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
            select: '-createdAt -updatedAt'
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
    var page, limit, dayOfWeek, minPay, jobType, requesterLocation, requesterDistance, companyType, companyUsername, sortField, sortOrder, matchStage, geoNearStage, projectionStage, pipeline, jobPostings, totalJobPostings, totalPages;
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
          companyType = req.query.companyType;
          companyUsername = req.query.companyUsername;
          sortField = req.query.sortBy; // This is the field to sort by
          sortOrder = parseInt(req.query.order) || 1; // This is the order to sort in. 1 for ascending, -1 for descending.
          // Build match stage
          matchStage = {};
          matchStage.filled = {
            $in: [false, undefined]
          };
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
          }, false && companyType || companyUsername ? {
            $match: _objectSpread(_objectSpread({}, companyType && {
              'company.type': {
                $regex: new RegExp("^".concat(companyType, "$"), 'i')
              }
            }), companyUsername && {
              'company.username': companyUsername
            })
          } : null, projectionStage, {
            $sort: _defineProperty({}, sortField, sortOrder)
          },
          // Add the sort stage here
          {
            $skip: (page - 1) * limit
          }, {
            $limit: limit
          }].filter(Boolean); // Filter out any stages that are empty
          _context5.prev = 21;
          _context5.next = 24;
          return _JobPostingModel["default"].aggregate(pipeline);
        case 24:
          jobPostings = _context5.sent;
          _context5.next = 27;
          return _JobPostingModel["default"].countDocuments(matchStage);
        case 27:
          totalJobPostings = _context5.sent;
          totalPages = Math.ceil(totalJobPostings / limit);
          res.json({
            totalPages: totalPages,
            currentPage: page,
            jobPostings: jobPostings
          });
          _context5.next = 35;
          break;
        case 32:
          _context5.prev = 32;
          _context5.t0 = _context5["catch"](21);
          res.status(500).json({
            error: _context5.t0.message
          });
        case 35:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[21, 32]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfSm9iUG9zdGluZ01vZGVsIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfQ29tcGFueU1vZGVsIiwiX0pvYkFwcGxpY2F0aW9uTW9kZWwiLCJvYmoiLCJfX2VzTW9kdWxlIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsImV4cG9ydHMiLCJPcCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093biIsImhhc093blByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJrZXkiLCJkZXNjIiwidmFsdWUiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImVyciIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY3JlYXRlIiwiY29udGV4dCIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsImFyZyIsInR5cGUiLCJjYWxsIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIm1ldGhvZCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiUHJvbWlzZUltcGwiLCJpbnZva2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVjb3JkIiwicmVzdWx0IiwiX3R5cGVvZiIsIl9fYXdhaXQiLCJ0aGVuIiwidW53cmFwcGVkIiwiZXJyb3IiLCJwcmV2aW91c1Byb21pc2UiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsInN0YXRlIiwiRXJyb3IiLCJkb25lUmVzdWx0IiwiZGVsZWdhdGUiLCJkZWxlZ2F0ZVJlc3VsdCIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsImRvbmUiLCJtZXRob2ROYW1lIiwidW5kZWZpbmVkIiwiVHlwZUVycm9yIiwiaW5mbyIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJlbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXRlcmFibGUiLCJpdGVyYXRvck1ldGhvZCIsImlzTmFOIiwibGVuZ3RoIiwiaSIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsIml0ZXIiLCJrZXlzIiwidmFsIiwib2JqZWN0IiwicmV2ZXJzZSIsInBvcCIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJvd25LZXlzIiwiZW51bWVyYWJsZU9ubHkiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJzeW1ib2xzIiwiZmlsdGVyIiwic3ltIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwidGFyZ2V0IiwiYXJndW1lbnRzIiwic291cmNlIiwiX2RlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJfdG9Qcm9wZXJ0eUtleSIsIl90b1ByaW1pdGl2ZSIsIlN0cmluZyIsImlucHV0IiwiaGludCIsInByaW0iLCJ0b1ByaW1pdGl2ZSIsInJlcyIsIk51bWJlciIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsIl9uZXh0IiwiX3Rocm93IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmdzIiwiY3JlYXRlSm9iUG9zdGluZyIsIl9yZWYiLCJfY2FsbGVlIiwicmVxIiwiX3JlcSR1c2VyIiwiY29tcGFueSIsIm5ld0pvYlBvc3RpbmciLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiQ29tcGFueU1vZGVsIiwiZmluZEJ5SWQiLCJ1c2VyIiwidXNlcklkIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJKb2JQb3N0aW5nTW9kZWwiLCJib2R5IiwiX2lkIiwibG9jYXRpb24iLCJzYXZlIiwidDAiLCJfeCIsIl94MiIsInVwZGF0ZUpvYlBvc3RpbmciLCJfcmVmMiIsIl9jYWxsZWUyIiwiX3JlcSR1c2VyMiIsImlkIiwiY29tcGFueUlkIiwidXBkYXRlZEpvYlBvc3RpbmciLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJwYXJhbXMiLCJjb25zb2xlIiwibG9nIiwiZmluZE9uZUFuZFVwZGF0ZSIsInJ1blZhbGlkYXRvcnMiLCJfeDMiLCJfeDQiLCJkZWxldGVKb2JQb3N0aW5nIiwiX3JlZjMiLCJfY2FsbGVlMyIsIl9yZXEkdXNlcjMiLCJkZWxldGVkSm9iUG9zdGluZyIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsImZpbmRPbmVBbmREZWxldGUiLCJfeDUiLCJfeDYiLCJnZXRKb2JQb3N0aW5nIiwiX3JlZjQiLCJfY2FsbGVlNCIsIl9yZXEkdXNlcjQiLCJ3b3JrZXJJZCIsIndvcmtlciIsImpvYkFwcGxpY2F0aW9uIiwiYWxyZWFkeUFwcGxpZWQiLCJqb2JQb3N0aW5nIiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0IiwicXVlcnkiLCJKb2JBcHBsaWNhdGlvbk1vZGVsIiwiZmluZCIsInBvcHVsYXRlIiwicGF0aCIsInNlbGVjdCIsIl94NyIsIl94OCIsImdldEFsbEpvYlBvc3RpbmdzIiwiX3JlZjUiLCJfY2FsbGVlNSIsInBhZ2UiLCJsaW1pdCIsImRheU9mV2VlayIsIm1pblBheSIsImpvYlR5cGUiLCJyZXF1ZXN0ZXJMb2NhdGlvbiIsInJlcXVlc3RlckRpc3RhbmNlIiwiY29tcGFueVR5cGUiLCJjb21wYW55VXNlcm5hbWUiLCJzb3J0RmllbGQiLCJzb3J0T3JkZXIiLCJtYXRjaFN0YWdlIiwiZ2VvTmVhclN0YWdlIiwicHJvamVjdGlvblN0YWdlIiwicGlwZWxpbmUiLCJqb2JQb3N0aW5ncyIsInRvdGFsSm9iUG9zdGluZ3MiLCJ0b3RhbFBhZ2VzIiwiX2NhbGxlZTUkIiwiX2NvbnRleHQ1IiwicGFyc2VJbnQiLCJBcnJheSIsImlzQXJyYXkiLCJwYXJzZUZsb2F0Iiwic29ydEJ5Iiwib3JkZXIiLCJmaWxsZWQiLCIkaW4iLCJwYXltZW50IiwiJGd0ZSIsInN0YXJ0IiwiRGF0ZSIsIiRnZW9OZWFyIiwibmVhciIsImNvb3JkaW5hdGVzIiwic3BsaXQiLCJkaXN0YW5jZUZpZWxkIiwic3BoZXJpY2FsIiwibWF4RGlzdGFuY2UiLCIkcHJvamVjdCIsImRpc3RhbmNlIiwiJG1hdGNoIiwiJGxvb2t1cCIsImZyb20iLCJsb2NhbEZpZWxkIiwiZm9yZWlnbkZpZWxkIiwiYXMiLCIkdW53aW5kIiwiJGFkZEZpZWxkcyIsImNvbXBhbnlOYW1lIiwiZGlzdGFuY2VJbk1pbGVzIiwiJGRpdmlkZSIsIiRyZWdleCIsIlJlZ0V4cCIsImNvbmNhdCIsIiRzb3J0IiwiJHNraXAiLCIkbGltaXQiLCJCb29sZWFuIiwiYWdncmVnYXRlIiwiY291bnREb2N1bWVudHMiLCJNYXRoIiwiY2VpbCIsImN1cnJlbnRQYWdlIiwiX3g5IiwiX3gxMCIsImdldEpvYkFwcGxpY2F0aW9ucyIsIl9yZWY2IiwiX2NhbGxlZTYiLCJfcmVxJHVzZXI1Iiwiam9iUG9zdGluZ0lkIiwiYXBwbGljYXRpb25zIiwiX2NhbGxlZTYkIiwiX2NvbnRleHQ2Iiwiam9iTmFtZSIsIl94MTEiLCJfeDEyIiwiZ2V0TmVhcmJ5Sm9iUG9zdGluZ3MiLCJfcmVmNyIsIl9jYWxsZWU3IiwibmVhcmJ5Sm9iUG9zdGluZ3MiLCJfY2FsbGVlNyQiLCJfY29udGV4dDciLCJlbnN1cmVJbmRleGVzIiwiJG5lYXIiLCIkZ2VvbWV0cnkiLCJfeDEzIiwiX3gxNCIsIkpvYlBvc3RpbmdDb250cm9sbGVyIiwiX2RlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBwL2NvbnRyb2xsZXJzL0pvYnMvSm9iUG9zdGluZ0NvbnRyb2xsZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJ1xuXG5pbXBvcnQgSm9iUG9zdGluZ01vZGVsIGZyb20gJ0AvYXBwL21vZGVscy9Kb2JQb3N0aW5nTW9kZWwnXG5pbXBvcnQgQ29tcGFueU1vZGVsIGZyb20gJ0AvYXBwL21vZGVscy9Db21wYW55TW9kZWwnXG5pbXBvcnQgeyBJQ29tcGFueSB9IGZyb20gJ0AvYXBwL2ludGVyZmFjZXMvbW9kZWxzL0NvbXBhbnknXG5pbXBvcnQgeyBJSm9iQXBwbGljYXRpb24gfSBmcm9tICdAL2FwcC9pbnRlcmZhY2VzL21vZGVscy9Kb2JBcHBsaWNhdGlvbidcbmltcG9ydCBKb2JBcHBsaWNhdGlvbk1vZGVsIGZyb20gJ0AvYXBwL21vZGVscy9Kb2JBcHBsaWNhdGlvbk1vZGVsJ1xuaW1wb3J0IHsgSUpvYlBvc3RpbmcgfSBmcm9tICdAL2FwcC9pbnRlcmZhY2VzL21vZGVscy9Kb2JQb3N0aW5nJ1xuaW1wb3J0IFdvcmtlck1vZGVsIGZyb20gJ0AvYXBwL21vZGVscy9Xb3JrZXJNb2RlbCdcblxuY29uc3QgY3JlYXRlSm9iUG9zdGluZyA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcblx0Y29uc3QgY29tcGFueTogSUNvbXBhbnkgfCBudWxsID0gYXdhaXQgQ29tcGFueU1vZGVsLmZpbmRCeUlkKHJlcS51c2VyPy51c2VySWQpXG5cblx0aWYgKCFjb21wYW55KSB7XG5cdFx0cmV0dXJuIHJlc1xuXHRcdFx0LnN0YXR1cyg0MDEpXG5cdFx0XHQuanNvbih7IG1lc3NhZ2U6ICdPbmx5IGF1dGhlbnRpY2F0ZWQgY29tcGFuaWVzIGNhbiBjcmVhdGUgam9iIHBvc3RpbmdzJyB9KVxuXHR9XG5cblx0Y29uc3QgbmV3Sm9iUG9zdGluZyA9IG5ldyBKb2JQb3N0aW5nTW9kZWwoe1xuXHRcdC4uLnJlcS5ib2R5LFxuXHRcdGNvbXBhbnk6IGNvbXBhbnkuX2lkLFxuXHRcdGxvY2F0aW9uOiBjb21wYW55LmxvY2F0aW9uLFxuXHR9KVxuXG5cdHRyeSB7XG5cdFx0YXdhaXQgbmV3Sm9iUG9zdGluZy5zYXZlKClcblx0XHRyZXMuc3RhdHVzKDIwMSkuanNvbih7IG5ld0pvYlBvc3RpbmcgfSlcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRyZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6IChlcnJvciBhcyBFcnJvcikubWVzc2FnZSB9KVxuXHR9XG59XG5cbmNvbnN0IHVwZGF0ZUpvYlBvc3RpbmcgPSBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG5cdGNvbnN0IHsgaWQgfSA9IHJlcS5wYXJhbXNcblx0Y29uc3QgY29tcGFueUlkID0gcmVxLnVzZXI/LnVzZXJJZFxuXHRjb25zb2xlLmxvZyhyZXEucGFyYW1zLCByZXEudXNlcilcblx0dHJ5IHtcblx0XHRjb25zdCB1cGRhdGVkSm9iUG9zdGluZyA9IGF3YWl0IEpvYlBvc3RpbmdNb2RlbC5maW5kT25lQW5kVXBkYXRlKFxuXHRcdFx0eyBfaWQ6IGlkLCBjb21wYW55OiBjb21wYW55SWQgfSxcblx0XHRcdHJlcS5ib2R5LFxuXHRcdFx0eyBuZXc6IHRydWUsIHJ1blZhbGlkYXRvcnM6IHRydWUgfVxuXHRcdClcblxuXHRcdGlmICghdXBkYXRlZEpvYlBvc3RpbmcpIHtcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IGVycm9yOiAnSm9iIHBvc3Rpbmcgbm90IGZvdW5kJyB9KVxuXHRcdH1cblxuXHRcdHJlcy5zdGF0dXMoMjAwKS5qc29uKHVwZGF0ZWRKb2JQb3N0aW5nKVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUubG9nKGVycm9yKVxuXHRcdHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6IChlcnJvciBhcyBFcnJvcikubWVzc2FnZSB9KVxuXHR9XG59XG5cbmNvbnN0IGRlbGV0ZUpvYlBvc3RpbmcgPSBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG5cdGNvbnN0IHsgaWQgfSA9IHJlcS5wYXJhbXNcblx0Y29uc3QgY29tcGFueUlkID0gcmVxLnVzZXI/LnVzZXJJZFxuXG5cdHRyeSB7XG5cdFx0Y29uc3QgZGVsZXRlZEpvYlBvc3RpbmcgPSBhd2FpdCBKb2JQb3N0aW5nTW9kZWwuZmluZE9uZUFuZERlbGV0ZSh7XG5cdFx0XHRfaWQ6IGlkLFxuXHRcdFx0Y29tcGFueUlkLFxuXHRcdH0pXG5cblx0XHRpZiAoIWRlbGV0ZWRKb2JQb3N0aW5nKSB7XG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBlcnJvcjogJ0pvYiBwb3N0aW5nIG5vdCBmb3VuZCcgfSlcblx0XHR9XG5cblx0XHRyZXMuc3RhdHVzKDIwMCkuanNvbihkZWxldGVkSm9iUG9zdGluZylcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRyZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiAoZXJyb3IgYXMgRXJyb3IpLm1lc3NhZ2UgfSlcblx0fVxufVxuXG5jb25zdCBnZXRKb2JQb3N0aW5nID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuXHRjb25zdCB7IGlkIH0gPSByZXEucGFyYW1zXG5cdGNvbnN0IHdvcmtlcklkID0gcmVxLnVzZXI/LnVzZXJJZFxuXHRjb25zdCB7IHdvcmtlciB9ID0gcmVxLnF1ZXJ5XG5cblx0bGV0IGpvYkFwcGxpY2F0aW9uLCBhbHJlYWR5QXBwbGllZFxuXG5cdGlmICh3b3JrZXIpIHtcblx0XHRqb2JBcHBsaWNhdGlvbiA9IGF3YWl0IEpvYkFwcGxpY2F0aW9uTW9kZWwuZmluZCh7XG5cdFx0XHR3b3JrZXI6IHdvcmtlcklkLFxuXHRcdFx0am9iUG9zdGluZzogaWQsXG5cdFx0fSlcblx0XHRhbHJlYWR5QXBwbGllZCA9IGpvYkFwcGxpY2F0aW9uLmxlbmd0aCA+PSAxXG5cdH1cblxuXHR0cnkge1xuXHRcdGNvbnN0IGpvYlBvc3RpbmcgPSBhd2FpdCBKb2JQb3N0aW5nTW9kZWwuZmluZEJ5SWQoaWQpLnBvcHVsYXRlKHtcblx0XHRcdHBhdGg6ICdjb21wYW55Jyxcblx0XHRcdHNlbGVjdDogJy1jcmVhdGVkQXQgLXVwZGF0ZWRBdCcsXG5cdFx0fSlcblxuXHRcdGlmICgham9iUG9zdGluZykge1xuXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgZXJyb3I6ICdKb2IgcG9zdGluZyBub3QgZm91bmQnIH0pXG5cdFx0fVxuXG5cdFx0cmVzLnN0YXR1cygyMDApLmpzb24oe1xuXHRcdFx0am9iUG9zdGluZyxcblx0XHRcdGFscmVhZHlBcHBsaWVkLFxuXHRcdH0pXG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0cmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogKGVycm9yIGFzIEVycm9yKS5tZXNzYWdlIH0pXG5cdH1cbn1cblxuY29uc3QgZ2V0QWxsSm9iUG9zdGluZ3MgPSBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG5cdGNvbnNvbGUubG9nKHJlcS5xdWVyeSlcblx0Y29uc3QgcGFnZSA9IHBhcnNlSW50KHJlcS5xdWVyeS5wYWdlIGFzIHN0cmluZykgfHwgMVxuXHRjb25zdCBsaW1pdCA9IHBhcnNlSW50KHJlcS5xdWVyeS5saW1pdCBhcyBzdHJpbmcpIHx8IDEwXG5cblx0Ly8gRXh0cmFjdCBmaWx0ZXIgcGFyYW1zXG5cdGNvbnN0IGRheU9mV2VlayA9IEFycmF5LmlzQXJyYXkocmVxLnF1ZXJ5LmRheU9mV2Vlaylcblx0XHQ/IHJlcS5xdWVyeS5kYXlPZldlZWtcblx0XHQ6IFtyZXEucXVlcnkuZGF5T2ZXZWVrXVxuXHRjb25zdCBtaW5QYXkgPSBwYXJzZUludChyZXEucXVlcnkubWluUGF5IGFzIHN0cmluZylcblx0Y29uc3Qgam9iVHlwZSA9IHJlcS5xdWVyeS5qb2JUeXBlIGFzIHN0cmluZ1tdXG5cdGNvbnN0IHJlcXVlc3RlckxvY2F0aW9uID0gcmVxLnF1ZXJ5LnJlcXVlc3RlckxvY2F0aW9uIGFzIHN0cmluZ1xuXHRjb25zdCByZXF1ZXN0ZXJEaXN0YW5jZSA9XG5cdFx0cGFyc2VGbG9hdChyZXEucXVlcnkucmVxdWVzdGVyRGlzdGFuY2UgYXMgc3RyaW5nKSB8fCAxMFxuXHRjb25zdCBjb21wYW55VHlwZSA9IHJlcS5xdWVyeS5jb21wYW55VHlwZSBhcyBzdHJpbmdcblx0Y29uc3QgY29tcGFueVVzZXJuYW1lID0gcmVxLnF1ZXJ5LmNvbXBhbnlVc2VybmFtZSBhcyBzdHJpbmdcblx0Y29uc3Qgc29ydEZpZWxkID0gcmVxLnF1ZXJ5LnNvcnRCeSBhcyBzdHJpbmcgLy8gVGhpcyBpcyB0aGUgZmllbGQgdG8gc29ydCBieVxuXHRjb25zdCBzb3J0T3JkZXIgPSBwYXJzZUludChyZXEucXVlcnkub3JkZXIgYXMgc3RyaW5nKSB8fCAxIC8vIFRoaXMgaXMgdGhlIG9yZGVyIHRvIHNvcnQgaW4uIDEgZm9yIGFzY2VuZGluZywgLTEgZm9yIGRlc2NlbmRpbmcuXG5cdC8vIEJ1aWxkIG1hdGNoIHN0YWdlXG5cdGNvbnN0IG1hdGNoU3RhZ2U6IGFueSA9IHt9XG5cdG1hdGNoU3RhZ2UuZmlsbGVkID0ge1xuXHRcdCRpbjogW2ZhbHNlLCB1bmRlZmluZWRdLFxuXHR9XG5cdGlmIChkYXlPZldlZWsubGVuZ3RoID4gMCAmJiBkYXlPZldlZWtbMF0gIT0gdW5kZWZpbmVkKVxuXHRcdG1hdGNoU3RhZ2UuZGF5T2ZXZWVrID0geyAkaW46IGRheU9mV2VlayB9XG5cdGlmIChtaW5QYXkpIG1hdGNoU3RhZ2UucGF5bWVudCA9IHsgJGd0ZTogbWluUGF5IH1cblx0aWYgKGpvYlR5cGUpIG1hdGNoU3RhZ2UudHlwZSA9IHsgJGluOiBqb2JUeXBlIH1cblx0bWF0Y2hTdGFnZS5zdGFydCA9IHsgJGd0ZTogbmV3IERhdGUoKSB9XG5cblx0Y29uc3QgZ2VvTmVhclN0YWdlID1cblx0XHRyZXF1ZXN0ZXJMb2NhdGlvbiAmJiByZXF1ZXN0ZXJEaXN0YW5jZVxuXHRcdFx0PyB7XG5cdFx0XHRcdFx0JGdlb05lYXI6IHtcblx0XHRcdFx0XHRcdG5lYXI6IHtcblx0XHRcdFx0XHRcdFx0dHlwZTogJ1BvaW50Jyxcblx0XHRcdFx0XHRcdFx0Y29vcmRpbmF0ZXM6IFtcblx0XHRcdFx0XHRcdFx0XHRwYXJzZUZsb2F0KHJlcXVlc3RlckxvY2F0aW9uLnNwbGl0KCcsJylbMF0pLFxuXHRcdFx0XHRcdFx0XHRcdHBhcnNlRmxvYXQocmVxdWVzdGVyTG9jYXRpb24uc3BsaXQoJywnKVsxXSksXG5cdFx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0ZGlzdGFuY2VGaWVsZDogJ2Rpc3RhbmNlJyxcblx0XHRcdFx0XHRcdHNwaGVyaWNhbDogdHJ1ZSxcblx0XHRcdFx0XHRcdG1heERpc3RhbmNlOiByZXF1ZXN0ZXJEaXN0YW5jZSAqIDE2MDkuMzQsIC8vIG1pbGVzIHRvIG1ldGVyc1xuXHRcdFx0XHRcdH0sXG5cdFx0XHQgIH1cblx0XHRcdDogbnVsbFxuXG5cdGNvbnN0IHByb2plY3Rpb25TdGFnZSA9IGdlb05lYXJTdGFnZVxuXHRcdD8geyAkcHJvamVjdDogeyBjb21wYW55OiAwLCBkaXN0YW5jZTogMCB9IH1cblx0XHQ6IHsgJHByb2plY3Q6IHsgY29tcGFueTogMCB9IH1cblxuXHRjb25zdCBwaXBlbGluZSA9IFtcblx0XHRnZW9OZWFyU3RhZ2UsXG5cdFx0T2JqZWN0LmtleXMobWF0Y2hTdGFnZSkubGVuZ3RoID4gMCA/IHsgJG1hdGNoOiBtYXRjaFN0YWdlIH0gOiBudWxsLFxuXHRcdHtcblx0XHRcdCRsb29rdXA6IHtcblx0XHRcdFx0ZnJvbTogJ2NvbXBhbmllcycsXG5cdFx0XHRcdGxvY2FsRmllbGQ6ICdjb21wYW55Jyxcblx0XHRcdFx0Zm9yZWlnbkZpZWxkOiAnX2lkJyxcblx0XHRcdFx0YXM6ICdjb21wYW55Jyxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHR7ICR1bndpbmQ6ICckY29tcGFueScgfSwgLy8gRmxhdHRlbiB0aGUgJ2NvbXBhbnknIGFycmF5XG5cdFx0e1xuXHRcdFx0JGFkZEZpZWxkczoge1xuXHRcdFx0XHRjb21wYW55TmFtZTogJyRjb21wYW55Lm5hbWUnLFxuXHRcdFx0XHRkaXN0YW5jZUluTWlsZXM6IGdlb05lYXJTdGFnZVxuXHRcdFx0XHRcdD8geyAkZGl2aWRlOiBbJyRkaXN0YW5jZScsIDE2MDkuMzRdIH1cblx0XHRcdFx0XHQ6IHVuZGVmaW5lZCwgLy8gQ29udmVydCAnZGlzdGFuY2UnIGZyb20gbWV0ZXJzIHRvIG1pbGVzXG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0KGZhbHNlICYmIGNvbXBhbnlUeXBlKSB8fCBjb21wYW55VXNlcm5hbWVcblx0XHRcdD8ge1xuXHRcdFx0XHRcdCRtYXRjaDoge1xuXHRcdFx0XHRcdFx0Li4uKGNvbXBhbnlUeXBlICYmIHtcblx0XHRcdFx0XHRcdFx0J2NvbXBhbnkudHlwZSc6IHsgJHJlZ2V4OiBuZXcgUmVnRXhwKGBeJHtjb21wYW55VHlwZX0kYCwgJ2knKSB9LFxuXHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0XHQuLi4oY29tcGFueVVzZXJuYW1lICYmIHsgJ2NvbXBhbnkudXNlcm5hbWUnOiBjb21wYW55VXNlcm5hbWUgfSksXG5cdFx0XHRcdFx0fSxcblx0XHRcdCAgfVxuXHRcdFx0OiBudWxsLFxuXHRcdHByb2plY3Rpb25TdGFnZSxcblx0XHR7ICRzb3J0OiB7IFtzb3J0RmllbGRdOiBzb3J0T3JkZXIgfSB9LCAvLyBBZGQgdGhlIHNvcnQgc3RhZ2UgaGVyZVxuXHRcdHsgJHNraXA6IChwYWdlIC0gMSkgKiBsaW1pdCB9LFxuXHRcdHsgJGxpbWl0OiBsaW1pdCB9LFxuXHRdLmZpbHRlcihCb29sZWFuKSAvLyBGaWx0ZXIgb3V0IGFueSBzdGFnZXMgdGhhdCBhcmUgZW1wdHlcblxuXHR0cnkge1xuXHRcdGNvbnN0IGpvYlBvc3RpbmdzID0gYXdhaXQgSm9iUG9zdGluZ01vZGVsLmFnZ3JlZ2F0ZShwaXBlbGluZSBhcyBhbnkpXG5cblx0XHRjb25zdCB0b3RhbEpvYlBvc3RpbmdzID0gYXdhaXQgSm9iUG9zdGluZ01vZGVsLmNvdW50RG9jdW1lbnRzKG1hdGNoU3RhZ2UpXG5cdFx0Y29uc3QgdG90YWxQYWdlcyA9IE1hdGguY2VpbCh0b3RhbEpvYlBvc3RpbmdzIC8gbGltaXQpXG5cblx0XHRyZXMuanNvbih7XG5cdFx0XHR0b3RhbFBhZ2VzLFxuXHRcdFx0Y3VycmVudFBhZ2U6IHBhZ2UsXG5cdFx0XHRqb2JQb3N0aW5ncyxcblx0XHR9KVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IChlcnJvciBhcyBFcnJvcikubWVzc2FnZSB9KVxuXHR9XG59XG5cbmNvbnN0IGdldEpvYkFwcGxpY2F0aW9ucyA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCBjb21wYW55SWQgPSByZXEudXNlcj8udXNlcklkXG5cblx0XHRjb25zdCBqb2JQb3N0aW5nSWQgPSByZXEucGFyYW1zLmlkXG5cblx0XHRjb25zdCBqb2JQb3N0aW5nOiBJSm9iUG9zdGluZyB8IG51bGwgPSBhd2FpdCBKb2JQb3N0aW5nTW9kZWwuZmluZEJ5SWQoXG5cdFx0XHRqb2JQb3N0aW5nSWRcblx0XHQpXG5cblx0XHRpZiAoIWpvYlBvc3RpbmcpIHtcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6ICdKb2IgcG9zdGluZyBub3QgZm91bmQnIH0pXG5cdFx0fVxuXG5cdFx0aWYgKGNvbXBhbnlJZCAhPSBqb2JQb3N0aW5nLmNvbXBhbnkpIHtcblx0XHRcdHJldHVybiByZXNcblx0XHRcdFx0LnN0YXR1cyg0MDMpXG5cdFx0XHRcdC5qc29uKHsgbWVzc2FnZTogJ05vdCBhdXRob3JpemVkIHRvIHZpZXcgcmVzb3VyY2UnIH0pXG5cdFx0fVxuXG5cdFx0Y29uc3QgYXBwbGljYXRpb25zOiBJSm9iQXBwbGljYXRpb25bXSB8IG51bGwgPVxuXHRcdFx0YXdhaXQgSm9iQXBwbGljYXRpb25Nb2RlbC5maW5kKHsgam9iUG9zdGluZzogam9iUG9zdGluZ0lkIH0pLnBvcHVsYXRlKFxuXHRcdFx0XHQnd29ya2VyJ1xuXHRcdFx0KVxuXG5cdFx0aWYgKCFhcHBsaWNhdGlvbnMpIHtcblx0XHRcdHJldHVybiByZXNcblx0XHRcdFx0LnN0YXR1cyg0MDQpXG5cdFx0XHRcdC5qc29uKHsgbWVzc2FnZTogJ05vIGFwcGxpY2F0aW9ucyBmb3IgdGhpcyBqb2IgcG9zdGluZy4nIH0pXG5cdFx0fVxuXG5cdFx0Ly8gaWYgKFN0cmluZyhqb2JQb3N0aW5nLmNvbXBhbnkpICE9PSBTdHJpbmcocmVxLnVzZXI/LnVzZXJJZCkpIHtcblx0XHQvLyBcdHJldHVybiByZXNcblx0XHQvLyBcdFx0LnN0YXR1cyg0MDMpXG5cdFx0Ly8gXHRcdC5qc29uKHsgbWVzc2FnZTogJ1VuYXV0aG9yaXplZCB0byBhY2Nlc3MgdGhpcyBqb2IgcG9zdGluZy4nIH0pXG5cdFx0Ly8gfVxuXG5cdFx0cmVzLnN0YXR1cygyMDApLmpzb24oeyBhcHBsaWNhdGlvbnMsIGpvYk5hbWU6IGpvYlBvc3RpbmcubmFtZSB9KVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcblx0XHRcdG1lc3NhZ2U6ICdBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBmZXRjaGluZyBqb2IgYXBwbGljYXRpb25zLicsXG5cdFx0XHRlcnJvcixcblx0XHR9KVxuXHR9XG59XG5cbmNvbnN0IGdldE5lYXJieUpvYlBvc3RpbmdzID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuXHQvLyBUaGVuLCB1c2UgdGhhdCBsb2NhdGlvbiB0byBmaW5kIG5lYXJieSBqb2IgcG9zdGluZ3Ncblx0YXdhaXQgQ29tcGFueU1vZGVsLmVuc3VyZUluZGV4ZXMoKS5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKVxuXHRjb25zdCBuZWFyYnlKb2JQb3N0aW5ncyA9IGF3YWl0IENvbXBhbnlNb2RlbC5maW5kKHtcblx0XHRsb2NhdGlvbjoge1xuXHRcdFx0JG5lYXI6IHtcblx0XHRcdFx0JGdlb21ldHJ5OiB7XG5cdFx0XHRcdFx0dHlwZTogJ1BvaW50Jyxcblx0XHRcdFx0XHRjb29yZGluYXRlczogWy0xMjIuMTYzOSwgMzcuNDIzXSwgLy8gW2xvbmdpdHVkZSwgbGF0aXR1ZGVdXG5cdFx0XHRcdH0sXG5cdFx0XHRcdC8vIE9wdGlvbmFsbHksIHNwZWNpZnkgYSBtYXhpbXVtIGRpc3RhbmNlIChpbiBtZXRlcnMpXG5cdFx0XHRcdC8vICRtYXhEaXN0YW5jZTogMTAwMCxcblx0XHRcdH0sXG5cdFx0fSxcblx0fSlcblxuXHRyZXR1cm4gcmVzLmpzb24obmVhcmJ5Sm9iUG9zdGluZ3MpXG59XG5cbmNvbnN0IEpvYlBvc3RpbmdDb250cm9sbGVyID0ge1xuXHRjcmVhdGVKb2JQb3N0aW5nLFxuXHR1cGRhdGVKb2JQb3N0aW5nLFxuXHRkZWxldGVKb2JQb3N0aW5nLFxuXHRnZXRBbGxKb2JQb3N0aW5ncyxcblx0Z2V0Sm9iQXBwbGljYXRpb25zLFxuXHRnZXRKb2JQb3N0aW5nLFxuXHRnZXROZWFyYnlKb2JQb3N0aW5ncyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgSm9iUG9zdGluZ0NvbnRyb2xsZXJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBLElBQUFBLGdCQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBQyxhQUFBLEdBQUFGLHNCQUFBLENBQUFDLE9BQUE7QUFHQSxJQUFBRSxvQkFBQSxHQUFBSCxzQkFBQSxDQUFBQyxPQUFBO0FBQWtFLFNBQUFELHVCQUFBSSxHQUFBLFdBQUFBLEdBQUEsSUFBQUEsR0FBQSxDQUFBQyxVQUFBLEdBQUFELEdBQUEsZ0JBQUFBLEdBQUE7QUFBQSxTQUFBRSxvQkFBQSxrQkFMbEUscUpBQUFBLG1CQUFBLFlBQUFBLG9CQUFBLFdBQUFDLE9BQUEsU0FBQUEsT0FBQSxPQUFBQyxFQUFBLEdBQUFDLE1BQUEsQ0FBQUMsU0FBQSxFQUFBQyxNQUFBLEdBQUFILEVBQUEsQ0FBQUksY0FBQSxFQUFBQyxjQUFBLEdBQUFKLE1BQUEsQ0FBQUksY0FBQSxjQUFBVCxHQUFBLEVBQUFVLEdBQUEsRUFBQUMsSUFBQSxJQUFBWCxHQUFBLENBQUFVLEdBQUEsSUFBQUMsSUFBQSxDQUFBQyxLQUFBLEtBQUFDLE9BQUEsd0JBQUFDLE1BQUEsR0FBQUEsTUFBQSxPQUFBQyxjQUFBLEdBQUFGLE9BQUEsQ0FBQUcsUUFBQSxrQkFBQUMsbUJBQUEsR0FBQUosT0FBQSxDQUFBSyxhQUFBLHVCQUFBQyxpQkFBQSxHQUFBTixPQUFBLENBQUFPLFdBQUEsOEJBQUFDLE9BQUFyQixHQUFBLEVBQUFVLEdBQUEsRUFBQUUsS0FBQSxXQUFBUCxNQUFBLENBQUFJLGNBQUEsQ0FBQVQsR0FBQSxFQUFBVSxHQUFBLElBQUFFLEtBQUEsRUFBQUEsS0FBQSxFQUFBVSxVQUFBLE1BQUFDLFlBQUEsTUFBQUMsUUFBQSxTQUFBeEIsR0FBQSxDQUFBVSxHQUFBLFdBQUFXLE1BQUEsbUJBQUFJLEdBQUEsSUFBQUosTUFBQSxZQUFBQSxPQUFBckIsR0FBQSxFQUFBVSxHQUFBLEVBQUFFLEtB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