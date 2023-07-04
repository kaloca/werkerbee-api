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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfSm9iUG9zdGluZ01vZGVsIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfQ29tcGFueU1vZGVsIiwiX0pvYkFwcGxpY2F0aW9uTW9kZWwiLCJvYmoiLCJfX2VzTW9kdWxlIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsImV4cG9ydHMiLCJPcCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093biIsImhhc093blByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJrZXkiLCJkZXNjIiwidmFsdWUiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImVyciIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY3JlYXRlIiwiY29udGV4dCIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsImFyZyIsInR5cGUiLCJjYWxsIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIm1ldGhvZCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiUHJvbWlzZUltcGwiLCJpbnZva2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVjb3JkIiwicmVzdWx0IiwiX3R5cGVvZiIsIl9fYXdhaXQiLCJ0aGVuIiwidW53cmFwcGVkIiwiZXJyb3IiLCJwcmV2aW91c1Byb21pc2UiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsInN0YXRlIiwiRXJyb3IiLCJkb25lUmVzdWx0IiwiZGVsZWdhdGUiLCJkZWxlZ2F0ZVJlc3VsdCIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsImRvbmUiLCJtZXRob2ROYW1lIiwidW5kZWZpbmVkIiwiVHlwZUVycm9yIiwiaW5mbyIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJlbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXRlcmFibGUiLCJpdGVyYXRvck1ldGhvZCIsImlzTmFOIiwibGVuZ3RoIiwiaSIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsIml0ZXIiLCJrZXlzIiwidmFsIiwib2JqZWN0IiwicmV2ZXJzZSIsInBvcCIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJvd25LZXlzIiwiZW51bWVyYWJsZU9ubHkiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJzeW1ib2xzIiwiZmlsdGVyIiwic3ltIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwidGFyZ2V0IiwiYXJndW1lbnRzIiwic291cmNlIiwiX2RlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJfdG9Qcm9wZXJ0eUtleSIsIl90b1ByaW1pdGl2ZSIsIlN0cmluZyIsImlucHV0IiwiaGludCIsInByaW0iLCJ0b1ByaW1pdGl2ZSIsInJlcyIsIk51bWJlciIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsIl9uZXh0IiwiX3Rocm93IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmdzIiwiY3JlYXRlSm9iUG9zdGluZyIsIl9yZWYiLCJfY2FsbGVlIiwicmVxIiwiX3JlcSR1c2VyIiwiY29tcGFueSIsIm5ld0pvYlBvc3RpbmciLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiQ29tcGFueU1vZGVsIiwiZmluZEJ5SWQiLCJ1c2VyIiwidXNlcklkIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJKb2JQb3N0aW5nTW9kZWwiLCJib2R5IiwiX2lkIiwibG9jYXRpb24iLCJzYXZlIiwidDAiLCJfeCIsIl94MiIsInVwZGF0ZUpvYlBvc3RpbmciLCJfcmVmMiIsIl9jYWxsZWUyIiwiX3JlcSR1c2VyMiIsImlkIiwiY29tcGFueUlkIiwidXBkYXRlZEpvYlBvc3RpbmciLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJwYXJhbXMiLCJjb25zb2xlIiwibG9nIiwiZmluZE9uZUFuZFVwZGF0ZSIsInJ1blZhbGlkYXRvcnMiLCJfeDMiLCJfeDQiLCJkZWxldGVKb2JQb3N0aW5nIiwiX3JlZjMiLCJfY2FsbGVlMyIsIl9yZXEkdXNlcjMiLCJkZWxldGVkSm9iUG9zdGluZyIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsImZpbmRPbmVBbmREZWxldGUiLCJfeDUiLCJfeDYiLCJnZXRKb2JQb3N0aW5nIiwiX3JlZjQiLCJfY2FsbGVlNCIsIl9yZXEkdXNlcjQiLCJ3b3JrZXJJZCIsIndvcmtlciIsImpvYkFwcGxpY2F0aW9uIiwiYWxyZWFkeUFwcGxpZWQiLCJqb2JQb3N0aW5nIiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0IiwicXVlcnkiLCJKb2JBcHBsaWNhdGlvbk1vZGVsIiwiZmluZCIsInBvcHVsYXRlIiwicGF0aCIsInNlbGVjdCIsIl94NyIsIl94OCIsImdldEFsbEpvYlBvc3RpbmdzIiwiX3JlZjUiLCJfY2FsbGVlNSIsInBhZ2UiLCJsaW1pdCIsImRheU9mV2VlayIsIm1pblBheSIsImpvYlR5cGUiLCJyZXF1ZXN0ZXJMb2NhdGlvbiIsInJlcXVlc3RlckRpc3RhbmNlIiwiY29tcGFueVR5cGUiLCJjb21wYW55VXNlcm5hbWUiLCJzb3J0RmllbGQiLCJzb3J0T3JkZXIiLCJtYXRjaFN0YWdlIiwiZ2VvTmVhclN0YWdlIiwicHJvamVjdGlvblN0YWdlIiwicGlwZWxpbmUiLCJqb2JQb3N0aW5ncyIsInRvdGFsSm9iUG9zdGluZ3MiLCJ0b3RhbFBhZ2VzIiwiX2NhbGxlZTUkIiwiX2NvbnRleHQ1IiwicGFyc2VJbnQiLCJBcnJheSIsImlzQXJyYXkiLCJwYXJzZUZsb2F0Iiwic29ydEJ5Iiwib3JkZXIiLCJmaWxsZWQiLCIkaW4iLCJwYXltZW50IiwiJGd0ZSIsInN0YXJ0IiwiRGF0ZSIsIiRnZW9OZWFyIiwibmVhciIsImNvb3JkaW5hdGVzIiwic3BsaXQiLCJkaXN0YW5jZUZpZWxkIiwic3BoZXJpY2FsIiwibWF4RGlzdGFuY2UiLCIkcHJvamVjdCIsImRpc3RhbmNlIiwiJG1hdGNoIiwiJGxvb2t1cCIsImZyb20iLCJsb2NhbEZpZWxkIiwiZm9yZWlnbkZpZWxkIiwiYXMiLCIkdW53aW5kIiwiJGFkZEZpZWxkcyIsImNvbXBhbnlOYW1lIiwiZGlzdGFuY2VJbk1pbGVzIiwiJGRpdmlkZSIsIiRyZWdleCIsIlJlZ0V4cCIsImNvbmNhdCIsIiRzb3J0IiwiJHNraXAiLCIkbGltaXQiLCJCb29sZWFuIiwiYWdncmVnYXRlIiwiY291bnREb2N1bWVudHMiLCJNYXRoIiwiY2VpbCIsImN1cnJlbnRQYWdlIiwiX3g5IiwiX3gxMCIsImdldEpvYkFwcGxpY2F0aW9ucyIsIl9yZWY2IiwiX2NhbGxlZTYiLCJfcmVxJHVzZXI1Iiwiam9iUG9zdGluZ0lkIiwiYXBwbGljYXRpb25zIiwiX2NhbGxlZTYkIiwiX2NvbnRleHQ2Iiwiam9iTmFtZSIsIl94MTEiLCJfeDEyIiwiZ2V0TmVhcmJ5Sm9iUG9zdGluZ3MiLCJfcmVmNyIsIl9jYWxsZWU3IiwibmVhcmJ5Sm9iUG9zdGluZ3MiLCJfY2FsbGVlNyQiLCJfY29udGV4dDciLCJlbnN1cmVJbmRleGVzIiwiJG5lYXIiLCIkZ2VvbWV0cnkiLCJfeDEzIiwiX3gxNCIsIkpvYlBvc3RpbmdDb250cm9sbGVyIiwiX2RlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBwL2NvbnRyb2xsZXJzL0pvYnMvSm9iUG9zdGluZ0NvbnRyb2xsZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJ1xuXG5pbXBvcnQgSm9iUG9zdGluZ01vZGVsIGZyb20gJ0AvYXBwL21vZGVscy9Kb2JQb3N0aW5nTW9kZWwnXG5pbXBvcnQgQ29tcGFueU1vZGVsIGZyb20gJ0AvYXBwL21vZGVscy9Db21wYW55TW9kZWwnXG5pbXBvcnQgeyBJQ29tcGFueSB9IGZyb20gJ0AvYXBwL2ludGVyZmFjZXMvbW9kZWxzL0NvbXBhbnknXG5pbXBvcnQgeyBJSm9iQXBwbGljYXRpb24gfSBmcm9tICdAL2FwcC9pbnRlcmZhY2VzL21vZGVscy9Kb2JBcHBsaWNhdGlvbidcbmltcG9ydCBKb2JBcHBsaWNhdGlvbk1vZGVsIGZyb20gJ0AvYXBwL21vZGVscy9Kb2JBcHBsaWNhdGlvbk1vZGVsJ1xuaW1wb3J0IHsgSUpvYlBvc3RpbmcgfSBmcm9tICdAL2FwcC9pbnRlcmZhY2VzL21vZGVscy9Kb2JQb3N0aW5nJ1xuaW1wb3J0IFdvcmtlck1vZGVsIGZyb20gJ0AvYXBwL21vZGVscy9Xb3JrZXJNb2RlbCdcblxuY29uc3QgY3JlYXRlSm9iUG9zdGluZyA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcblx0Y29uc3QgY29tcGFueTogSUNvbXBhbnkgfCBudWxsID0gYXdhaXQgQ29tcGFueU1vZGVsLmZpbmRCeUlkKHJlcS51c2VyPy51c2VySWQpXG5cblx0aWYgKCFjb21wYW55KSB7XG5cdFx0cmV0dXJuIHJlc1xuXHRcdFx0LnN0YXR1cyg0MDEpXG5cdFx0XHQuanNvbih7IG1lc3NhZ2U6ICdPbmx5IGF1dGhlbnRpY2F0ZWQgY29tcGFuaWVzIGNhbiBjcmVhdGUgam9iIHBvc3RpbmdzJyB9KVxuXHR9XG5cblx0Y29uc3QgbmV3Sm9iUG9zdGluZyA9IG5ldyBKb2JQb3N0aW5nTW9kZWwoe1xuXHRcdC4uLnJlcS5ib2R5LFxuXHRcdGNvbXBhbnk6IGNvbXBhbnkuX2lkLFxuXHRcdGxvY2F0aW9uOiBjb21wYW55LmxvY2F0aW9uLFxuXHR9KVxuXG5cdHRyeSB7XG5cdFx0YXdhaXQgbmV3Sm9iUG9zdGluZy5zYXZlKClcblx0XHRyZXMuc3RhdHVzKDIwMSkuanNvbih7IG5ld0pvYlBvc3RpbmcgfSlcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRyZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6IChlcnJvciBhcyBFcnJvcikubWVzc2FnZSB9KVxuXHR9XG59XG5cbmNvbnN0IHVwZGF0ZUpvYlBvc3RpbmcgPSBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG5cdGNvbnN0IHsgaWQgfSA9IHJlcS5wYXJhbXNcblx0Y29uc3QgY29tcGFueUlkID0gcmVxLnVzZXI/LnVzZXJJZFxuXHRjb25zb2xlLmxvZyhyZXEucGFyYW1zLCByZXEudXNlcilcblx0dHJ5IHtcblx0XHRjb25zdCB1cGRhdGVkSm9iUG9zdGluZyA9IGF3YWl0IEpvYlBvc3RpbmdNb2RlbC5maW5kT25lQW5kVXBkYXRlKFxuXHRcdFx0eyBfaWQ6IGlkLCBjb21wYW55OiBjb21wYW55SWQgfSxcblx0XHRcdHJlcS5ib2R5LFxuXHRcdFx0eyBuZXc6IHRydWUsIHJ1blZhbGlkYXRvcnM6IHRydWUgfVxuXHRcdClcblxuXHRcdGlmICghdXBkYXRlZEpvYlBvc3RpbmcpIHtcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IGVycm9yOiAnSm9iIHBvc3Rpbmcgbm90IGZvdW5kJyB9KVxuXHRcdH1cblxuXHRcdHJlcy5zdGF0dXMoMjAwKS5qc29uKHVwZGF0ZWRKb2JQb3N0aW5nKVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUubG9nKGVycm9yKVxuXHRcdHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6IChlcnJvciBhcyBFcnJvcikubWVzc2FnZSB9KVxuXHR9XG59XG5cbmNvbnN0IGRlbGV0ZUpvYlBvc3RpbmcgPSBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG5cdGNvbnN0IHsgaWQgfSA9IHJlcS5wYXJhbXNcblx0Y29uc3QgY29tcGFueUlkID0gcmVxLnVzZXI/LnVzZXJJZFxuXG5cdHRyeSB7XG5cdFx0Y29uc3QgZGVsZXRlZEpvYlBvc3RpbmcgPSBhd2FpdCBKb2JQb3N0aW5nTW9kZWwuZmluZE9uZUFuZERlbGV0ZSh7XG5cdFx0XHRfaWQ6IGlkLFxuXHRcdFx0Y29tcGFueUlkLFxuXHRcdH0pXG5cblx0XHRpZiAoIWRlbGV0ZWRKb2JQb3N0aW5nKSB7XG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBlcnJvcjogJ0pvYiBwb3N0aW5nIG5vdCBmb3VuZCcgfSlcblx0XHR9XG5cblx0XHRyZXMuc3RhdHVzKDIwMCkuanNvbihkZWxldGVkSm9iUG9zdGluZylcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRyZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiAoZXJyb3IgYXMgRXJyb3IpLm1lc3NhZ2UgfSlcblx0fVxufVxuXG5jb25zdCBnZXRKb2JQb3N0aW5nID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuXHRjb25zdCB7IGlkIH0gPSByZXEucGFyYW1zXG5cdGNvbnN0IHdvcmtlcklkID0gcmVxLnVzZXI/LnVzZXJJZFxuXHRjb25zdCB7IHdvcmtlciB9ID0gcmVxLnF1ZXJ5XG5cblx0bGV0IGpvYkFwcGxpY2F0aW9uLCBhbHJlYWR5QXBwbGllZFxuXG5cdGlmICh3b3JrZXIpIHtcblx0XHRqb2JBcHBsaWNhdGlvbiA9IGF3YWl0IEpvYkFwcGxpY2F0aW9uTW9kZWwuZmluZCh7XG5cdFx0XHR3b3JrZXI6IHdvcmtlcklkLFxuXHRcdFx0am9iUG9zdGluZzogaWQsXG5cdFx0fSlcblx0XHRhbHJlYWR5QXBwbGllZCA9IGpvYkFwcGxpY2F0aW9uLmxlbmd0aCA+PSAxXG5cdH1cblxuXHR0cnkge1xuXHRcdGNvbnN0IGpvYlBvc3RpbmcgPSBhd2FpdCBKb2JQb3N0aW5nTW9kZWwuZmluZEJ5SWQoaWQpLnBvcHVsYXRlKHtcblx0XHRcdHBhdGg6ICdjb21wYW55Jyxcblx0XHRcdHNlbGVjdDogJy1lbWFpbCAtY3JlYXRlZEF0IC11cGRhdGVkQXQgLXVzZXJuYW1lJyxcblx0XHR9KVxuXG5cdFx0aWYgKCFqb2JQb3N0aW5nKSB7XG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBlcnJvcjogJ0pvYiBwb3N0aW5nIG5vdCBmb3VuZCcgfSlcblx0XHR9XG5cblx0XHRyZXMuc3RhdHVzKDIwMCkuanNvbih7XG5cdFx0XHRqb2JQb3N0aW5nLFxuXHRcdFx0YWxyZWFkeUFwcGxpZWQsXG5cdFx0fSlcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRyZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAoZXJyb3IgYXMgRXJyb3IpLm1lc3NhZ2UgfSlcblx0fVxufVxuXG5jb25zdCBnZXRBbGxKb2JQb3N0aW5ncyA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcblx0Y29uc29sZS5sb2cocmVxLnF1ZXJ5KVxuXHRjb25zdCBwYWdlID0gcGFyc2VJbnQocmVxLnF1ZXJ5LnBhZ2UgYXMgc3RyaW5nKSB8fCAxXG5cdGNvbnN0IGxpbWl0ID0gcGFyc2VJbnQocmVxLnF1ZXJ5LmxpbWl0IGFzIHN0cmluZykgfHwgMTBcblxuXHQvLyBFeHRyYWN0IGZpbHRlciBwYXJhbXNcblx0Y29uc3QgZGF5T2ZXZWVrID0gQXJyYXkuaXNBcnJheShyZXEucXVlcnkuZGF5T2ZXZWVrKVxuXHRcdD8gcmVxLnF1ZXJ5LmRheU9mV2Vla1xuXHRcdDogW3JlcS5xdWVyeS5kYXlPZldlZWtdXG5cdGNvbnN0IG1pblBheSA9IHBhcnNlSW50KHJlcS5xdWVyeS5taW5QYXkgYXMgc3RyaW5nKVxuXHRjb25zdCBqb2JUeXBlID0gcmVxLnF1ZXJ5LmpvYlR5cGUgYXMgc3RyaW5nW11cblx0Y29uc3QgcmVxdWVzdGVyTG9jYXRpb24gPSByZXEucXVlcnkucmVxdWVzdGVyTG9jYXRpb24gYXMgc3RyaW5nXG5cdGNvbnN0IHJlcXVlc3RlckRpc3RhbmNlID1cblx0XHRwYXJzZUZsb2F0KHJlcS5xdWVyeS5yZXF1ZXN0ZXJEaXN0YW5jZSBhcyBzdHJpbmcpIHx8IDEwXG5cdGNvbnN0IGNvbXBhbnlUeXBlID0gcmVxLnF1ZXJ5LmNvbXBhbnlUeXBlIGFzIHN0cmluZ1xuXHRjb25zdCBjb21wYW55VXNlcm5hbWUgPSByZXEucXVlcnkuY29tcGFueVVzZXJuYW1lIGFzIHN0cmluZ1xuXHRjb25zdCBzb3J0RmllbGQgPSByZXEucXVlcnkuc29ydEJ5IGFzIHN0cmluZyAvLyBUaGlzIGlzIHRoZSBmaWVsZCB0byBzb3J0IGJ5XG5cdGNvbnN0IHNvcnRPcmRlciA9IHBhcnNlSW50KHJlcS5xdWVyeS5vcmRlciBhcyBzdHJpbmcpIHx8IDEgLy8gVGhpcyBpcyB0aGUgb3JkZXIgdG8gc29ydCBpbi4gMSBmb3IgYXNjZW5kaW5nLCAtMSBmb3IgZGVzY2VuZGluZy5cblx0Ly8gQnVpbGQgbWF0Y2ggc3RhZ2Vcblx0Y29uc3QgbWF0Y2hTdGFnZTogYW55ID0ge31cblx0bWF0Y2hTdGFnZS5maWxsZWQgPSB7XG5cdFx0JGluOiBbZmFsc2UsIHVuZGVmaW5lZF0sXG5cdH1cblx0aWYgKGRheU9mV2Vlay5sZW5ndGggPiAwICYmIGRheU9mV2Vla1swXSAhPSB1bmRlZmluZWQpXG5cdFx0bWF0Y2hTdGFnZS5kYXlPZldlZWsgPSB7ICRpbjogZGF5T2ZXZWVrIH1cblx0aWYgKG1pblBheSkgbWF0Y2hTdGFnZS5wYXltZW50ID0geyAkZ3RlOiBtaW5QYXkgfVxuXHRpZiAoam9iVHlwZSkgbWF0Y2hTdGFnZS50eXBlID0geyAkaW46IGpvYlR5cGUgfVxuXHRtYXRjaFN0YWdlLnN0YXJ0ID0geyAkZ3RlOiBuZXcgRGF0ZSgpIH1cblxuXHRjb25zdCBnZW9OZWFyU3RhZ2UgPVxuXHRcdHJlcXVlc3RlckxvY2F0aW9uICYmIHJlcXVlc3RlckRpc3RhbmNlXG5cdFx0XHQ/IHtcblx0XHRcdFx0XHQkZ2VvTmVhcjoge1xuXHRcdFx0XHRcdFx0bmVhcjoge1xuXHRcdFx0XHRcdFx0XHR0eXBlOiAnUG9pbnQnLFxuXHRcdFx0XHRcdFx0XHRjb29yZGluYXRlczogW1xuXHRcdFx0XHRcdFx0XHRcdHBhcnNlRmxvYXQocmVxdWVzdGVyTG9jYXRpb24uc3BsaXQoJywnKVswXSksXG5cdFx0XHRcdFx0XHRcdFx0cGFyc2VGbG9hdChyZXF1ZXN0ZXJMb2NhdGlvbi5zcGxpdCgnLCcpWzFdKSxcblx0XHRcdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRkaXN0YW5jZUZpZWxkOiAnZGlzdGFuY2UnLFxuXHRcdFx0XHRcdFx0c3BoZXJpY2FsOiB0cnVlLFxuXHRcdFx0XHRcdFx0bWF4RGlzdGFuY2U6IHJlcXVlc3RlckRpc3RhbmNlICogMTYwOS4zNCwgLy8gbWlsZXMgdG8gbWV0ZXJzXG5cdFx0XHRcdFx0fSxcblx0XHRcdCAgfVxuXHRcdFx0OiBudWxsXG5cblx0Y29uc3QgcHJvamVjdGlvblN0YWdlID0gZ2VvTmVhclN0YWdlXG5cdFx0PyB7ICRwcm9qZWN0OiB7IGNvbXBhbnk6IDAsIGRpc3RhbmNlOiAwIH0gfVxuXHRcdDogeyAkcHJvamVjdDogeyBjb21wYW55OiAwIH0gfVxuXG5cdGNvbnN0IHBpcGVsaW5lID0gW1xuXHRcdGdlb05lYXJTdGFnZSxcblx0XHRPYmplY3Qua2V5cyhtYXRjaFN0YWdlKS5sZW5ndGggPiAwID8geyAkbWF0Y2g6IG1hdGNoU3RhZ2UgfSA6IG51bGwsXG5cdFx0e1xuXHRcdFx0JGxvb2t1cDoge1xuXHRcdFx0XHRmcm9tOiAnY29tcGFuaWVzJyxcblx0XHRcdFx0bG9jYWxGaWVsZDogJ2NvbXBhbnknLFxuXHRcdFx0XHRmb3JlaWduRmllbGQ6ICdfaWQnLFxuXHRcdFx0XHRhczogJ2NvbXBhbnknLFxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdHsgJHVud2luZDogJyRjb21wYW55JyB9LCAvLyBGbGF0dGVuIHRoZSAnY29tcGFueScgYXJyYXlcblx0XHR7XG5cdFx0XHQkYWRkRmllbGRzOiB7XG5cdFx0XHRcdGNvbXBhbnlOYW1lOiAnJGNvbXBhbnkubmFtZScsXG5cdFx0XHRcdGRpc3RhbmNlSW5NaWxlczogZ2VvTmVhclN0YWdlXG5cdFx0XHRcdFx0PyB7ICRkaXZpZGU6IFsnJGRpc3RhbmNlJywgMTYwOS4zNF0gfVxuXHRcdFx0XHRcdDogdW5kZWZpbmVkLCAvLyBDb252ZXJ0ICdkaXN0YW5jZScgZnJvbSBtZXRlcnMgdG8gbWlsZXNcblx0XHRcdH0sXG5cdFx0fSxcblx0XHQoZmFsc2UgJiYgY29tcGFueVR5cGUpIHx8IGNvbXBhbnlVc2VybmFtZVxuXHRcdFx0PyB7XG5cdFx0XHRcdFx0JG1hdGNoOiB7XG5cdFx0XHRcdFx0XHQuLi4oY29tcGFueVR5cGUgJiYge1xuXHRcdFx0XHRcdFx0XHQnY29tcGFueS50eXBlJzogeyAkcmVnZXg6IG5ldyBSZWdFeHAoYF4ke2NvbXBhbnlUeXBlfSRgLCAnaScpIH0sXG5cdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdC4uLihjb21wYW55VXNlcm5hbWUgJiYgeyAnY29tcGFueS51c2VybmFtZSc6IGNvbXBhbnlVc2VybmFtZSB9KSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0ICB9XG5cdFx0XHQ6IG51bGwsXG5cdFx0cHJvamVjdGlvblN0YWdlLFxuXHRcdHsgJHNvcnQ6IHsgW3NvcnRGaWVsZF06IHNvcnRPcmRlciB9IH0sIC8vIEFkZCB0aGUgc29ydCBzdGFnZSBoZXJlXG5cdFx0eyAkc2tpcDogKHBhZ2UgLSAxKSAqIGxpbWl0IH0sXG5cdFx0eyAkbGltaXQ6IGxpbWl0IH0sXG5cdF0uZmlsdGVyKEJvb2xlYW4pIC8vIEZpbHRlciBvdXQgYW55IHN0YWdlcyB0aGF0IGFyZSBlbXB0eVxuXG5cdHRyeSB7XG5cdFx0Y29uc3Qgam9iUG9zdGluZ3MgPSBhd2FpdCBKb2JQb3N0aW5nTW9kZWwuYWdncmVnYXRlKHBpcGVsaW5lIGFzIGFueSlcblxuXHRcdGNvbnN0IHRvdGFsSm9iUG9zdGluZ3MgPSBhd2FpdCBKb2JQb3N0aW5nTW9kZWwuY291bnREb2N1bWVudHMobWF0Y2hTdGFnZSlcblx0XHRjb25zdCB0b3RhbFBhZ2VzID0gTWF0aC5jZWlsKHRvdGFsSm9iUG9zdGluZ3MgLyBsaW1pdClcblxuXHRcdHJlcy5qc29uKHtcblx0XHRcdHRvdGFsUGFnZXMsXG5cdFx0XHRjdXJyZW50UGFnZTogcGFnZSxcblx0XHRcdGpvYlBvc3RpbmdzLFxuXHRcdH0pXG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0cmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogKGVycm9yIGFzIEVycm9yKS5tZXNzYWdlIH0pXG5cdH1cbn1cblxuY29uc3QgZ2V0Sm9iQXBwbGljYXRpb25zID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IGNvbXBhbnlJZCA9IHJlcS51c2VyPy51c2VySWRcblxuXHRcdGNvbnN0IGpvYlBvc3RpbmdJZCA9IHJlcS5wYXJhbXMuaWRcblxuXHRcdGNvbnN0IGpvYlBvc3Rpbmc6IElKb2JQb3N0aW5nIHwgbnVsbCA9IGF3YWl0IEpvYlBvc3RpbmdNb2RlbC5maW5kQnlJZChcblx0XHRcdGpvYlBvc3RpbmdJZFxuXHRcdClcblxuXHRcdGlmICgham9iUG9zdGluZykge1xuXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogJ0pvYiBwb3N0aW5nIG5vdCBmb3VuZCcgfSlcblx0XHR9XG5cblx0XHRpZiAoY29tcGFueUlkICE9IGpvYlBvc3RpbmcuY29tcGFueSkge1xuXHRcdFx0cmV0dXJuIHJlc1xuXHRcdFx0XHQuc3RhdHVzKDQwMylcblx0XHRcdFx0Lmpzb24oeyBtZXNzYWdlOiAnTm90IGF1dGhvcml6ZWQgdG8gdmlldyByZXNvdXJjZScgfSlcblx0XHR9XG5cblx0XHRjb25zdCBhcHBsaWNhdGlvbnM6IElKb2JBcHBsaWNhdGlvbltdIHwgbnVsbCA9XG5cdFx0XHRhd2FpdCBKb2JBcHBsaWNhdGlvbk1vZGVsLmZpbmQoeyBqb2JQb3N0aW5nOiBqb2JQb3N0aW5nSWQgfSkucG9wdWxhdGUoXG5cdFx0XHRcdCd3b3JrZXInXG5cdFx0XHQpXG5cblx0XHRpZiAoIWFwcGxpY2F0aW9ucykge1xuXHRcdFx0cmV0dXJuIHJlc1xuXHRcdFx0XHQuc3RhdHVzKDQwNClcblx0XHRcdFx0Lmpzb24oeyBtZXNzYWdlOiAnTm8gYXBwbGljYXRpb25zIGZvciB0aGlzIGpvYiBwb3N0aW5nLicgfSlcblx0XHR9XG5cblx0XHQvLyBpZiAoU3RyaW5nKGpvYlBvc3RpbmcuY29tcGFueSkgIT09IFN0cmluZyhyZXEudXNlcj8udXNlcklkKSkge1xuXHRcdC8vIFx0cmV0dXJuIHJlc1xuXHRcdC8vIFx0XHQuc3RhdHVzKDQwMylcblx0XHQvLyBcdFx0Lmpzb24oeyBtZXNzYWdlOiAnVW5hdXRob3JpemVkIHRvIGFjY2VzcyB0aGlzIGpvYiBwb3N0aW5nLicgfSlcblx0XHQvLyB9XG5cblx0XHRyZXMuc3RhdHVzKDIwMCkuanNvbih7IGFwcGxpY2F0aW9ucywgam9iTmFtZTogam9iUG9zdGluZy5uYW1lIH0pXG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0cmVzLnN0YXR1cyg1MDApLmpzb24oe1xuXHRcdFx0bWVzc2FnZTogJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIGZldGNoaW5nIGpvYiBhcHBsaWNhdGlvbnMuJyxcblx0XHRcdGVycm9yLFxuXHRcdH0pXG5cdH1cbn1cblxuY29uc3QgZ2V0TmVhcmJ5Sm9iUG9zdGluZ3MgPSBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG5cdC8vIFRoZW4sIHVzZSB0aGF0IGxvY2F0aW9uIHRvIGZpbmQgbmVhcmJ5IGpvYiBwb3N0aW5nc1xuXHRhd2FpdCBDb21wYW55TW9kZWwuZW5zdXJlSW5kZXhlcygpLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpXG5cdGNvbnN0IG5lYXJieUpvYlBvc3RpbmdzID0gYXdhaXQgQ29tcGFueU1vZGVsLmZpbmQoe1xuXHRcdGxvY2F0aW9uOiB7XG5cdFx0XHQkbmVhcjoge1xuXHRcdFx0XHQkZ2VvbWV0cnk6IHtcblx0XHRcdFx0XHR0eXBlOiAnUG9pbnQnLFxuXHRcdFx0XHRcdGNvb3JkaW5hdGVzOiBbLTEyMi4xNjM5LCAzNy40MjNdLCAvLyBbbG9uZ2l0dWRlLCBsYXRpdHVkZV1cblx0XHRcdFx0fSxcblx0XHRcdFx0Ly8gT3B0aW9uYWxseSwgc3BlY2lmeSBhIG1heGltdW0gZGlzdGFuY2UgKGluIG1ldGVycylcblx0XHRcdFx0Ly8gJG1heERpc3RhbmNlOiAxMDAwLFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9KVxuXG5cdHJldHVybiByZXMuanNvbihuZWFyYnlKb2JQb3N0aW5ncylcbn1cblxuY29uc3QgSm9iUG9zdGluZ0NvbnRyb2xsZXIgPSB7XG5cdGNyZWF0ZUpvYlBvc3RpbmcsXG5cdHVwZGF0ZUpvYlBvc3RpbmcsXG5cdGRlbGV0ZUpvYlBvc3RpbmcsXG5cdGdldEFsbEpvYlBvc3RpbmdzLFxuXHRnZXRKb2JBcHBsaWNhdGlvbnMsXG5cdGdldEpvYlBvc3RpbmcsXG5cdGdldE5lYXJieUpvYlBvc3RpbmdzLFxufVxuXG5leHBvcnQgZGVmYXVsdCBKb2JQb3N0aW5nQ29udHJvbGxlclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUEsSUFBQUEsZ0JBQUEsR0FBQUMsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFDLGFBQUEsR0FBQUYsc0JBQUEsQ0FBQUMsT0FBQTtBQUdBLElBQUFFLG9CQUFBLEdBQUFILHNCQUFBLENBQUFDLE9BQUE7QUFBa0UsU0FBQUQsdUJBQUFJLEdBQUEsV0FBQUEsR0FBQSxJQUFBQSxHQUFBLENBQUFDLFVBQUEsR0FBQUQsR0FBQSxnQkFBQUEsR0FBQTtBQUFBLFNBQUFFLG9CQUFBLGtCQUxsRSxxSkFBQUEsbUJBQUEsWUFBQUEsb0JBQUEsV0FBQUMsT0FBQSxTQUFBQSxPQUFBLE9BQUFDLEVBQUEsR0FBQUMsTUFBQSxDQUFBQyxTQUFBLEVBQUFDLE1BQUEsR0FBQUgsRUFBQSxDQUFBSSxjQUFBLEVBQUFDLGNBQUEsR0FBQUosTUFBQSxDQUFBSSxjQUFBLGNBQUFULEdBQUEsRUFBQVUsR0FBQSxFQUFBQyxJQUFBLElBQUFYLEdBQUEsQ0FBQVUsR0FBQSxJQUFBQyxJQUFBLENBQUFDLEtBQUEsS0FBQUMsT0FBQSx3QkFBQUMsTUFBQSxHQUFBQSxNQUFBLE9BQUFDLGNBQUEsR0FBQUYsT0FBQSxDQUFBRyxRQUFBLGtCQUFBQyxtQkFBQSxHQUFBSixPQUFBLENBQUFLLGFBQUEsdUJBQUFDLGlCQUFBLEdBQUFOLE9BQUEsQ0FBQU8sV0FBQSw4QkFBQUMsT0FBQXJCLEdBQUEsRUFBQVUsR0FBQSxFQUFBRSxLQUFBLFdBQUFQLE1BQUEsQ0FBQUksY0FBQSxDQUFBVCxHQUFBLEVBQUFVLEdBQUEsSUFBQUUsS0FBQSxFQUFBQSxLQUFBLEVBQUFVLFVBQUEsTUFBQUMsWUFBQSxNQUFBQyxRQUFBLFNBQUF4QixHQUFBLENBQUFVLEdBQUEsV0FBQVcsTUFBQSxtQkFBQUksR0FBQSxJQUFBSixNQUFBLFlBQUFBLE9BQUFyQixHQUFBLEVB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