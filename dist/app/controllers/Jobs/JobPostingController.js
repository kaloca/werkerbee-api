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
          _context2.prev = 2;
          _context2.next = 5;
          return _JobPostingModel["default"].findOneAndUpdate({
            _id: id,
            company: companyId
          }, req.body, {
            "new": true,
            runValidators: true
          });
        case 5:
          updatedJobPosting = _context2.sent;
          if (updatedJobPosting) {
            _context2.next = 8;
            break;
          }
          return _context2.abrupt("return", res.status(404).json({
            error: 'Job posting not found'
          }));
        case 8:
          res.status(200).json(updatedJobPosting);
          _context2.next = 15;
          break;
        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](2);
          console.log(_context2.t0);
          res.status(400).json({
            error: _context2.t0.message
          });
        case 15:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[2, 11]]);
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
    var _req$user4, id, workerId, worker, jobApplication, alreadyApplied, jobPosting;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          id = req.params.id;
          workerId = (_req$user4 = req.user) === null || _req$user4 === void 0 ? void 0 : _req$user4.userId;
          worker = req.query.worker;
          if (!worker) {
            _context4.next = 9;
            break;
          }
          _context4.next = 7;
          return _JobApplicationModel["default"].find({
            worker: workerId,
            jobPosting: id
          });
        case 7:
          jobApplication = _context4.sent;
          alreadyApplied = jobApplication.length >= 1;
        case 9:
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
          _context4.t0 = _context4["catch"](0);
          res.status(500).json({
            error: _context4.t0.message
          });
        case 20:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 17]]);
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
              companyUsername: '$company.username',
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
          _context5.prev = 20;
          _context5.next = 23;
          return _JobPostingModel["default"].aggregate(pipeline);
        case 23:
          jobPostings = _context5.sent;
          _context5.next = 26;
          return _JobPostingModel["default"].countDocuments(matchStage);
        case 26:
          totalJobPostings = _context5.sent;
          totalPages = Math.ceil(totalJobPostings / limit);
          res.json({
            totalPages: totalPages,
            currentPage: page,
            jobPostings: jobPostings
          });
          _context5.next = 34;
          break;
        case 31:
          _context5.prev = 31;
          _context5.t0 = _context5["catch"](20);
          res.status(500).json({
            error: _context5.t0.message
          });
        case 34:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[20, 31]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfSm9iUG9zdGluZ01vZGVsIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfQ29tcGFueU1vZGVsIiwiX0pvYkFwcGxpY2F0aW9uTW9kZWwiLCJvYmoiLCJfX2VzTW9kdWxlIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsImV4cG9ydHMiLCJPcCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093biIsImhhc093blByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJrZXkiLCJkZXNjIiwidmFsdWUiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImVyciIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY3JlYXRlIiwiY29udGV4dCIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsImFyZyIsInR5cGUiLCJjYWxsIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIm1ldGhvZCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiUHJvbWlzZUltcGwiLCJpbnZva2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVjb3JkIiwicmVzdWx0IiwiX3R5cGVvZiIsIl9fYXdhaXQiLCJ0aGVuIiwidW53cmFwcGVkIiwiZXJyb3IiLCJwcmV2aW91c1Byb21pc2UiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsInN0YXRlIiwiRXJyb3IiLCJkb25lUmVzdWx0IiwiZGVsZWdhdGUiLCJkZWxlZ2F0ZVJlc3VsdCIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsImRvbmUiLCJtZXRob2ROYW1lIiwidW5kZWZpbmVkIiwiVHlwZUVycm9yIiwiaW5mbyIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJlbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXRlcmFibGUiLCJpdGVyYXRvck1ldGhvZCIsImlzTmFOIiwibGVuZ3RoIiwiaSIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsIml0ZXIiLCJrZXlzIiwidmFsIiwib2JqZWN0IiwicmV2ZXJzZSIsInBvcCIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJvd25LZXlzIiwiZW51bWVyYWJsZU9ubHkiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJzeW1ib2xzIiwiZmlsdGVyIiwic3ltIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwidGFyZ2V0IiwiYXJndW1lbnRzIiwic291cmNlIiwiX2RlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJfdG9Qcm9wZXJ0eUtleSIsIl90b1ByaW1pdGl2ZSIsIlN0cmluZyIsImlucHV0IiwiaGludCIsInByaW0iLCJ0b1ByaW1pdGl2ZSIsInJlcyIsIk51bWJlciIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsIl9uZXh0IiwiX3Rocm93IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmdzIiwiY3JlYXRlSm9iUG9zdGluZyIsIl9yZWYiLCJfY2FsbGVlIiwicmVxIiwiX3JlcSR1c2VyIiwiY29tcGFueSIsIm5ld0pvYlBvc3RpbmciLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiQ29tcGFueU1vZGVsIiwiZmluZEJ5SWQiLCJ1c2VyIiwidXNlcklkIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJKb2JQb3N0aW5nTW9kZWwiLCJib2R5IiwiX2lkIiwibG9jYXRpb24iLCJzYXZlIiwidDAiLCJfeCIsIl94MiIsInVwZGF0ZUpvYlBvc3RpbmciLCJfcmVmMiIsIl9jYWxsZWUyIiwiX3JlcSR1c2VyMiIsImlkIiwiY29tcGFueUlkIiwidXBkYXRlZEpvYlBvc3RpbmciLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJwYXJhbXMiLCJmaW5kT25lQW5kVXBkYXRlIiwicnVuVmFsaWRhdG9ycyIsImNvbnNvbGUiLCJsb2ciLCJfeDMiLCJfeDQiLCJkZWxldGVKb2JQb3N0aW5nIiwiX3JlZjMiLCJfY2FsbGVlMyIsIl9yZXEkdXNlcjMiLCJkZWxldGVkSm9iUG9zdGluZyIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsImZpbmRPbmVBbmREZWxldGUiLCJfeDUiLCJfeDYiLCJnZXRKb2JQb3N0aW5nIiwiX3JlZjQiLCJfY2FsbGVlNCIsIl9yZXEkdXNlcjQiLCJ3b3JrZXJJZCIsIndvcmtlciIsImpvYkFwcGxpY2F0aW9uIiwiYWxyZWFkeUFwcGxpZWQiLCJqb2JQb3N0aW5nIiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0IiwicXVlcnkiLCJKb2JBcHBsaWNhdGlvbk1vZGVsIiwiZmluZCIsInBvcHVsYXRlIiwicGF0aCIsInNlbGVjdCIsIl94NyIsIl94OCIsImdldEFsbEpvYlBvc3RpbmdzIiwiX3JlZjUiLCJfY2FsbGVlNSIsInBhZ2UiLCJsaW1pdCIsImRheU9mV2VlayIsIm1pblBheSIsImpvYlR5cGUiLCJyZXF1ZXN0ZXJMb2NhdGlvbiIsInJlcXVlc3RlckRpc3RhbmNlIiwiY29tcGFueVR5cGUiLCJjb21wYW55VXNlcm5hbWUiLCJzb3J0RmllbGQiLCJzb3J0T3JkZXIiLCJtYXRjaFN0YWdlIiwiZ2VvTmVhclN0YWdlIiwicHJvamVjdGlvblN0YWdlIiwicGlwZWxpbmUiLCJqb2JQb3N0aW5ncyIsInRvdGFsSm9iUG9zdGluZ3MiLCJ0b3RhbFBhZ2VzIiwiX2NhbGxlZTUkIiwiX2NvbnRleHQ1IiwicGFyc2VJbnQiLCJBcnJheSIsImlzQXJyYXkiLCJwYXJzZUZsb2F0Iiwic29ydEJ5Iiwib3JkZXIiLCJmaWxsZWQiLCIkaW4iLCJwYXltZW50IiwiJGd0ZSIsInN0YXJ0IiwiRGF0ZSIsIiRnZW9OZWFyIiwibmVhciIsImNvb3JkaW5hdGVzIiwic3BsaXQiLCJkaXN0YW5jZUZpZWxkIiwic3BoZXJpY2FsIiwibWF4RGlzdGFuY2UiLCIkcHJvamVjdCIsImRpc3RhbmNlIiwiJG1hdGNoIiwiJGxvb2t1cCIsImZyb20iLCJsb2NhbEZpZWxkIiwiZm9yZWlnbkZpZWxkIiwiYXMiLCIkdW53aW5kIiwiJGFkZEZpZWxkcyIsImNvbXBhbnlOYW1lIiwiZGlzdGFuY2VJbk1pbGVzIiwiJGRpdmlkZSIsIiRyZWdleCIsIlJlZ0V4cCIsImNvbmNhdCIsIiRzb3J0IiwiJHNraXAiLCIkbGltaXQiLCJCb29sZWFuIiwiYWdncmVnYXRlIiwiY291bnREb2N1bWVudHMiLCJNYXRoIiwiY2VpbCIsImN1cnJlbnRQYWdlIiwiX3g5IiwiX3gxMCIsImdldEpvYkFwcGxpY2F0aW9ucyIsIl9yZWY2IiwiX2NhbGxlZTYiLCJfcmVxJHVzZXI1Iiwiam9iUG9zdGluZ0lkIiwiYXBwbGljYXRpb25zIiwiX2NhbGxlZTYkIiwiX2NvbnRleHQ2Iiwiam9iTmFtZSIsIl94MTEiLCJfeDEyIiwiZ2V0TmVhcmJ5Sm9iUG9zdGluZ3MiLCJfcmVmNyIsIl9jYWxsZWU3IiwibmVhcmJ5Sm9iUG9zdGluZ3MiLCJfY2FsbGVlNyQiLCJfY29udGV4dDciLCJlbnN1cmVJbmRleGVzIiwiJG5lYXIiLCIkZ2VvbWV0cnkiLCJfeDEzIiwiX3gxNCIsIkpvYlBvc3RpbmdDb250cm9sbGVyIiwiX2RlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBwL2NvbnRyb2xsZXJzL0pvYnMvSm9iUG9zdGluZ0NvbnRyb2xsZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJ1xuXG5pbXBvcnQgSm9iUG9zdGluZ01vZGVsIGZyb20gJ0AvYXBwL21vZGVscy9Kb2JQb3N0aW5nTW9kZWwnXG5pbXBvcnQgQ29tcGFueU1vZGVsIGZyb20gJ0AvYXBwL21vZGVscy9Db21wYW55TW9kZWwnXG5pbXBvcnQgeyBJQ29tcGFueSB9IGZyb20gJ0AvYXBwL2ludGVyZmFjZXMvbW9kZWxzL0NvbXBhbnknXG5pbXBvcnQgeyBJSm9iQXBwbGljYXRpb24gfSBmcm9tICdAL2FwcC9pbnRlcmZhY2VzL21vZGVscy9Kb2JBcHBsaWNhdGlvbidcbmltcG9ydCBKb2JBcHBsaWNhdGlvbk1vZGVsIGZyb20gJ0AvYXBwL21vZGVscy9Kb2JBcHBsaWNhdGlvbk1vZGVsJ1xuaW1wb3J0IHsgSUpvYlBvc3RpbmcgfSBmcm9tICdAL2FwcC9pbnRlcmZhY2VzL21vZGVscy9Kb2JQb3N0aW5nJ1xuaW1wb3J0IFdvcmtlck1vZGVsIGZyb20gJ0AvYXBwL21vZGVscy9Xb3JrZXJNb2RlbCdcblxuY29uc3QgY3JlYXRlSm9iUG9zdGluZyA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcblx0Y29uc3QgY29tcGFueTogSUNvbXBhbnkgfCBudWxsID0gYXdhaXQgQ29tcGFueU1vZGVsLmZpbmRCeUlkKHJlcS51c2VyPy51c2VySWQpXG5cblx0aWYgKCFjb21wYW55KSB7XG5cdFx0cmV0dXJuIHJlc1xuXHRcdFx0LnN0YXR1cyg0MDEpXG5cdFx0XHQuanNvbih7IG1lc3NhZ2U6ICdPbmx5IGF1dGhlbnRpY2F0ZWQgY29tcGFuaWVzIGNhbiBjcmVhdGUgam9iIHBvc3RpbmdzJyB9KVxuXHR9XG5cblx0Y29uc3QgbmV3Sm9iUG9zdGluZyA9IG5ldyBKb2JQb3N0aW5nTW9kZWwoe1xuXHRcdC4uLnJlcS5ib2R5LFxuXHRcdGNvbXBhbnk6IGNvbXBhbnkuX2lkLFxuXHRcdGxvY2F0aW9uOiBjb21wYW55LmxvY2F0aW9uLFxuXHR9KVxuXG5cdHRyeSB7XG5cdFx0YXdhaXQgbmV3Sm9iUG9zdGluZy5zYXZlKClcblx0XHRyZXMuc3RhdHVzKDIwMSkuanNvbih7IG5ld0pvYlBvc3RpbmcgfSlcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRyZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6IChlcnJvciBhcyBFcnJvcikubWVzc2FnZSB9KVxuXHR9XG59XG5cbmNvbnN0IHVwZGF0ZUpvYlBvc3RpbmcgPSBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG5cdGNvbnN0IHsgaWQgfSA9IHJlcS5wYXJhbXNcblx0Y29uc3QgY29tcGFueUlkID0gcmVxLnVzZXI/LnVzZXJJZFxuXG5cdHRyeSB7XG5cdFx0Y29uc3QgdXBkYXRlZEpvYlBvc3RpbmcgPSBhd2FpdCBKb2JQb3N0aW5nTW9kZWwuZmluZE9uZUFuZFVwZGF0ZShcblx0XHRcdHsgX2lkOiBpZCwgY29tcGFueTogY29tcGFueUlkIH0sXG5cdFx0XHRyZXEuYm9keSxcblx0XHRcdHsgbmV3OiB0cnVlLCBydW5WYWxpZGF0b3JzOiB0cnVlIH1cblx0XHQpXG5cblx0XHRpZiAoIXVwZGF0ZWRKb2JQb3N0aW5nKSB7XG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBlcnJvcjogJ0pvYiBwb3N0aW5nIG5vdCBmb3VuZCcgfSlcblx0XHR9XG5cblx0XHRyZXMuc3RhdHVzKDIwMCkuanNvbih1cGRhdGVkSm9iUG9zdGluZylcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmxvZyhlcnJvcilcblx0XHRyZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiAoZXJyb3IgYXMgRXJyb3IpLm1lc3NhZ2UgfSlcblx0fVxufVxuXG5jb25zdCBkZWxldGVKb2JQb3N0aW5nID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuXHRjb25zdCB7IGlkIH0gPSByZXEucGFyYW1zXG5cdGNvbnN0IGNvbXBhbnlJZCA9IHJlcS51c2VyPy51c2VySWRcblxuXHR0cnkge1xuXHRcdGNvbnN0IGRlbGV0ZWRKb2JQb3N0aW5nID0gYXdhaXQgSm9iUG9zdGluZ01vZGVsLmZpbmRPbmVBbmREZWxldGUoe1xuXHRcdFx0X2lkOiBpZCxcblx0XHRcdGNvbXBhbnlJZCxcblx0XHR9KVxuXG5cdFx0aWYgKCFkZWxldGVkSm9iUG9zdGluZykge1xuXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgZXJyb3I6ICdKb2IgcG9zdGluZyBub3QgZm91bmQnIH0pXG5cdFx0fVxuXG5cdFx0cmVzLnN0YXR1cygyMDApLmpzb24oZGVsZXRlZEpvYlBvc3RpbmcpXG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0cmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogKGVycm9yIGFzIEVycm9yKS5tZXNzYWdlIH0pXG5cdH1cbn1cblxuY29uc3QgZ2V0Sm9iUG9zdGluZyA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCB7IGlkIH0gPSByZXEucGFyYW1zXG5cdFx0Y29uc3Qgd29ya2VySWQgPSByZXEudXNlcj8udXNlcklkXG5cdFx0Y29uc3QgeyB3b3JrZXIgfSA9IHJlcS5xdWVyeVxuXG5cdFx0bGV0IGpvYkFwcGxpY2F0aW9uLCBhbHJlYWR5QXBwbGllZFxuXG5cdFx0aWYgKHdvcmtlcikge1xuXHRcdFx0am9iQXBwbGljYXRpb24gPSBhd2FpdCBKb2JBcHBsaWNhdGlvbk1vZGVsLmZpbmQoe1xuXHRcdFx0XHR3b3JrZXI6IHdvcmtlcklkLFxuXHRcdFx0XHRqb2JQb3N0aW5nOiBpZCxcblx0XHRcdH0pXG5cdFx0XHRhbHJlYWR5QXBwbGllZCA9IGpvYkFwcGxpY2F0aW9uLmxlbmd0aCA+PSAxXG5cdFx0fVxuXG5cdFx0Y29uc3Qgam9iUG9zdGluZyA9IGF3YWl0IEpvYlBvc3RpbmdNb2RlbC5maW5kQnlJZChpZCkucG9wdWxhdGUoe1xuXHRcdFx0cGF0aDogJ2NvbXBhbnknLFxuXHRcdFx0c2VsZWN0OiAnLWNyZWF0ZWRBdCAtdXBkYXRlZEF0Jyxcblx0XHR9KVxuXG5cdFx0aWYgKCFqb2JQb3N0aW5nKSB7XG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBlcnJvcjogJ0pvYiBwb3N0aW5nIG5vdCBmb3VuZCcgfSlcblx0XHR9XG5cblx0XHRyZXMuc3RhdHVzKDIwMCkuanNvbih7XG5cdFx0XHRqb2JQb3N0aW5nLFxuXHRcdFx0YWxyZWFkeUFwcGxpZWQsXG5cdFx0fSlcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRyZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAoZXJyb3IgYXMgRXJyb3IpLm1lc3NhZ2UgfSlcblx0fVxufVxuXG5jb25zdCBnZXRBbGxKb2JQb3N0aW5ncyA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcblx0Y29uc3QgcGFnZSA9IHBhcnNlSW50KHJlcS5xdWVyeS5wYWdlIGFzIHN0cmluZykgfHwgMVxuXHRjb25zdCBsaW1pdCA9IHBhcnNlSW50KHJlcS5xdWVyeS5saW1pdCBhcyBzdHJpbmcpIHx8IDEwXG5cblx0Ly8gRXh0cmFjdCBmaWx0ZXIgcGFyYW1zXG5cdGNvbnN0IGRheU9mV2VlayA9IEFycmF5LmlzQXJyYXkocmVxLnF1ZXJ5LmRheU9mV2Vlaylcblx0XHQ/IHJlcS5xdWVyeS5kYXlPZldlZWtcblx0XHQ6IFtyZXEucXVlcnkuZGF5T2ZXZWVrXVxuXHRjb25zdCBtaW5QYXkgPSBwYXJzZUludChyZXEucXVlcnkubWluUGF5IGFzIHN0cmluZylcblx0Y29uc3Qgam9iVHlwZSA9IHJlcS5xdWVyeS5qb2JUeXBlIGFzIHN0cmluZ1tdXG5cdGNvbnN0IHJlcXVlc3RlckxvY2F0aW9uID0gcmVxLnF1ZXJ5LnJlcXVlc3RlckxvY2F0aW9uIGFzIHN0cmluZ1xuXHRjb25zdCByZXF1ZXN0ZXJEaXN0YW5jZSA9XG5cdFx0cGFyc2VGbG9hdChyZXEucXVlcnkucmVxdWVzdGVyRGlzdGFuY2UgYXMgc3RyaW5nKSB8fCAxMFxuXHRjb25zdCBjb21wYW55VHlwZSA9IHJlcS5xdWVyeS5jb21wYW55VHlwZSBhcyBzdHJpbmdcblx0Y29uc3QgY29tcGFueVVzZXJuYW1lID0gcmVxLnF1ZXJ5LmNvbXBhbnlVc2VybmFtZSBhcyBzdHJpbmdcblx0Y29uc3Qgc29ydEZpZWxkID0gcmVxLnF1ZXJ5LnNvcnRCeSBhcyBzdHJpbmcgLy8gVGhpcyBpcyB0aGUgZmllbGQgdG8gc29ydCBieVxuXHRjb25zdCBzb3J0T3JkZXIgPSBwYXJzZUludChyZXEucXVlcnkub3JkZXIgYXMgc3RyaW5nKSB8fCAxIC8vIFRoaXMgaXMgdGhlIG9yZGVyIHRvIHNvcnQgaW4uIDEgZm9yIGFzY2VuZGluZywgLTEgZm9yIGRlc2NlbmRpbmcuXG5cdC8vIEJ1aWxkIG1hdGNoIHN0YWdlXG5cdGNvbnN0IG1hdGNoU3RhZ2U6IGFueSA9IHt9XG5cdG1hdGNoU3RhZ2UuZmlsbGVkID0ge1xuXHRcdCRpbjogW2ZhbHNlLCB1bmRlZmluZWRdLFxuXHR9XG5cdGlmIChkYXlPZldlZWsubGVuZ3RoID4gMCAmJiBkYXlPZldlZWtbMF0gIT0gdW5kZWZpbmVkKVxuXHRcdG1hdGNoU3RhZ2UuZGF5T2ZXZWVrID0geyAkaW46IGRheU9mV2VlayB9XG5cdGlmIChtaW5QYXkpIG1hdGNoU3RhZ2UucGF5bWVudCA9IHsgJGd0ZTogbWluUGF5IH1cblx0aWYgKGpvYlR5cGUpIG1hdGNoU3RhZ2UudHlwZSA9IHsgJGluOiBqb2JUeXBlIH1cblx0bWF0Y2hTdGFnZS5zdGFydCA9IHsgJGd0ZTogbmV3IERhdGUoKSB9XG5cblx0Y29uc3QgZ2VvTmVhclN0YWdlID1cblx0XHRyZXF1ZXN0ZXJMb2NhdGlvbiAmJiByZXF1ZXN0ZXJEaXN0YW5jZVxuXHRcdFx0PyB7XG5cdFx0XHRcdFx0JGdlb05lYXI6IHtcblx0XHRcdFx0XHRcdG5lYXI6IHtcblx0XHRcdFx0XHRcdFx0dHlwZTogJ1BvaW50Jyxcblx0XHRcdFx0XHRcdFx0Y29vcmRpbmF0ZXM6IFtcblx0XHRcdFx0XHRcdFx0XHRwYXJzZUZsb2F0KHJlcXVlc3RlckxvY2F0aW9uLnNwbGl0KCcsJylbMF0pLFxuXHRcdFx0XHRcdFx0XHRcdHBhcnNlRmxvYXQocmVxdWVzdGVyTG9jYXRpb24uc3BsaXQoJywnKVsxXSksXG5cdFx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0ZGlzdGFuY2VGaWVsZDogJ2Rpc3RhbmNlJyxcblx0XHRcdFx0XHRcdHNwaGVyaWNhbDogdHJ1ZSxcblx0XHRcdFx0XHRcdG1heERpc3RhbmNlOiByZXF1ZXN0ZXJEaXN0YW5jZSAqIDE2MDkuMzQsIC8vIG1pbGVzIHRvIG1ldGVyc1xuXHRcdFx0XHRcdH0sXG5cdFx0XHQgIH1cblx0XHRcdDogbnVsbFxuXG5cdGNvbnN0IHByb2plY3Rpb25TdGFnZSA9IGdlb05lYXJTdGFnZVxuXHRcdD8geyAkcHJvamVjdDogeyBjb21wYW55OiAwLCBkaXN0YW5jZTogMCB9IH1cblx0XHQ6IHsgJHByb2plY3Q6IHsgY29tcGFueTogMCB9IH1cblxuXHRjb25zdCBwaXBlbGluZSA9IFtcblx0XHRnZW9OZWFyU3RhZ2UsXG5cdFx0T2JqZWN0LmtleXMobWF0Y2hTdGFnZSkubGVuZ3RoID4gMCA/IHsgJG1hdGNoOiBtYXRjaFN0YWdlIH0gOiBudWxsLFxuXHRcdHtcblx0XHRcdCRsb29rdXA6IHtcblx0XHRcdFx0ZnJvbTogJ2NvbXBhbmllcycsXG5cdFx0XHRcdGxvY2FsRmllbGQ6ICdjb21wYW55Jyxcblx0XHRcdFx0Zm9yZWlnbkZpZWxkOiAnX2lkJyxcblx0XHRcdFx0YXM6ICdjb21wYW55Jyxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHR7ICR1bndpbmQ6ICckY29tcGFueScgfSwgLy8gRmxhdHRlbiB0aGUgJ2NvbXBhbnknIGFycmF5XG5cdFx0e1xuXHRcdFx0JGFkZEZpZWxkczoge1xuXHRcdFx0XHRjb21wYW55TmFtZTogJyRjb21wYW55Lm5hbWUnLFxuXHRcdFx0XHRjb21wYW55VXNlcm5hbWU6ICckY29tcGFueS51c2VybmFtZScsXG5cdFx0XHRcdGRpc3RhbmNlSW5NaWxlczogZ2VvTmVhclN0YWdlXG5cdFx0XHRcdFx0PyB7ICRkaXZpZGU6IFsnJGRpc3RhbmNlJywgMTYwOS4zNF0gfVxuXHRcdFx0XHRcdDogdW5kZWZpbmVkLCAvLyBDb252ZXJ0ICdkaXN0YW5jZScgZnJvbSBtZXRlcnMgdG8gbWlsZXNcblx0XHRcdH0sXG5cdFx0fSxcblx0XHQoZmFsc2UgJiYgY29tcGFueVR5cGUpIHx8IGNvbXBhbnlVc2VybmFtZVxuXHRcdFx0PyB7XG5cdFx0XHRcdFx0JG1hdGNoOiB7XG5cdFx0XHRcdFx0XHQuLi4oY29tcGFueVR5cGUgJiYge1xuXHRcdFx0XHRcdFx0XHQnY29tcGFueS50eXBlJzogeyAkcmVnZXg6IG5ldyBSZWdFeHAoYF4ke2NvbXBhbnlUeXBlfSRgLCAnaScpIH0sXG5cdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdC4uLihjb21wYW55VXNlcm5hbWUgJiYgeyAnY29tcGFueS51c2VybmFtZSc6IGNvbXBhbnlVc2VybmFtZSB9KSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0ICB9XG5cdFx0XHQ6IG51bGwsXG5cdFx0cHJvamVjdGlvblN0YWdlLFxuXHRcdHsgJHNvcnQ6IHsgW3NvcnRGaWVsZF06IHNvcnRPcmRlciB9IH0sIC8vIEFkZCB0aGUgc29ydCBzdGFnZSBoZXJlXG5cdFx0eyAkc2tpcDogKHBhZ2UgLSAxKSAqIGxpbWl0IH0sXG5cdFx0eyAkbGltaXQ6IGxpbWl0IH0sXG5cdF0uZmlsdGVyKEJvb2xlYW4pIC8vIEZpbHRlciBvdXQgYW55IHN0YWdlcyB0aGF0IGFyZSBlbXB0eVxuXG5cdHRyeSB7XG5cdFx0Y29uc3Qgam9iUG9zdGluZ3MgPSBhd2FpdCBKb2JQb3N0aW5nTW9kZWwuYWdncmVnYXRlKHBpcGVsaW5lIGFzIGFueSlcblxuXHRcdGNvbnN0IHRvdGFsSm9iUG9zdGluZ3MgPSBhd2FpdCBKb2JQb3N0aW5nTW9kZWwuY291bnREb2N1bWVudHMobWF0Y2hTdGFnZSlcblx0XHRjb25zdCB0b3RhbFBhZ2VzID0gTWF0aC5jZWlsKHRvdGFsSm9iUG9zdGluZ3MgLyBsaW1pdClcblxuXHRcdHJlcy5qc29uKHtcblx0XHRcdHRvdGFsUGFnZXMsXG5cdFx0XHRjdXJyZW50UGFnZTogcGFnZSxcblx0XHRcdGpvYlBvc3RpbmdzLFxuXHRcdH0pXG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0cmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogKGVycm9yIGFzIEVycm9yKS5tZXNzYWdlIH0pXG5cdH1cbn1cblxuY29uc3QgZ2V0Sm9iQXBwbGljYXRpb25zID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IGNvbXBhbnlJZCA9IHJlcS51c2VyPy51c2VySWRcblxuXHRcdGNvbnN0IGpvYlBvc3RpbmdJZCA9IHJlcS5wYXJhbXMuaWRcblxuXHRcdGNvbnN0IGpvYlBvc3Rpbmc6IElKb2JQb3N0aW5nIHwgbnVsbCA9IGF3YWl0IEpvYlBvc3RpbmdNb2RlbC5maW5kQnlJZChcblx0XHRcdGpvYlBvc3RpbmdJZFxuXHRcdClcblxuXHRcdGlmICgham9iUG9zdGluZykge1xuXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogJ0pvYiBwb3N0aW5nIG5vdCBmb3VuZCcgfSlcblx0XHR9XG5cblx0XHRpZiAoY29tcGFueUlkICE9IGpvYlBvc3RpbmcuY29tcGFueSkge1xuXHRcdFx0cmV0dXJuIHJlc1xuXHRcdFx0XHQuc3RhdHVzKDQwMylcblx0XHRcdFx0Lmpzb24oeyBtZXNzYWdlOiAnTm90IGF1dGhvcml6ZWQgdG8gdmlldyByZXNvdXJjZScgfSlcblx0XHR9XG5cblx0XHRjb25zdCBhcHBsaWNhdGlvbnM6IElKb2JBcHBsaWNhdGlvbltdIHwgbnVsbCA9XG5cdFx0XHRhd2FpdCBKb2JBcHBsaWNhdGlvbk1vZGVsLmZpbmQoeyBqb2JQb3N0aW5nOiBqb2JQb3N0aW5nSWQgfSkucG9wdWxhdGUoXG5cdFx0XHRcdCd3b3JrZXInXG5cdFx0XHQpXG5cblx0XHRpZiAoIWFwcGxpY2F0aW9ucykge1xuXHRcdFx0cmV0dXJuIHJlc1xuXHRcdFx0XHQuc3RhdHVzKDQwNClcblx0XHRcdFx0Lmpzb24oeyBtZXNzYWdlOiAnTm8gYXBwbGljYXRpb25zIGZvciB0aGlzIGpvYiBwb3N0aW5nLicgfSlcblx0XHR9XG5cblx0XHQvLyBpZiAoU3RyaW5nKGpvYlBvc3RpbmcuY29tcGFueSkgIT09IFN0cmluZyhyZXEudXNlcj8udXNlcklkKSkge1xuXHRcdC8vIFx0cmV0dXJuIHJlc1xuXHRcdC8vIFx0XHQuc3RhdHVzKDQwMylcblx0XHQvLyBcdFx0Lmpzb24oeyBtZXNzYWdlOiAnVW5hdXRob3JpemVkIHRvIGFjY2VzcyB0aGlzIGpvYiBwb3N0aW5nLicgfSlcblx0XHQvLyB9XG5cblx0XHRyZXMuc3RhdHVzKDIwMCkuanNvbih7IGFwcGxpY2F0aW9ucywgam9iTmFtZTogam9iUG9zdGluZy5uYW1lIH0pXG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0cmVzLnN0YXR1cyg1MDApLmpzb24oe1xuXHRcdFx0bWVzc2FnZTogJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIGZldGNoaW5nIGpvYiBhcHBsaWNhdGlvbnMuJyxcblx0XHRcdGVycm9yLFxuXHRcdH0pXG5cdH1cbn1cblxuY29uc3QgZ2V0TmVhcmJ5Sm9iUG9zdGluZ3MgPSBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG5cdC8vIFRoZW4sIHVzZSB0aGF0IGxvY2F0aW9uIHRvIGZpbmQgbmVhcmJ5IGpvYiBwb3N0aW5nc1xuXHRhd2FpdCBDb21wYW55TW9kZWwuZW5zdXJlSW5kZXhlcygpLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpXG5cdGNvbnN0IG5lYXJieUpvYlBvc3RpbmdzID0gYXdhaXQgQ29tcGFueU1vZGVsLmZpbmQoe1xuXHRcdGxvY2F0aW9uOiB7XG5cdFx0XHQkbmVhcjoge1xuXHRcdFx0XHQkZ2VvbWV0cnk6IHtcblx0XHRcdFx0XHR0eXBlOiAnUG9pbnQnLFxuXHRcdFx0XHRcdGNvb3JkaW5hdGVzOiBbLTEyMi4xNjM5LCAzNy40MjNdLCAvLyBbbG9uZ2l0dWRlLCBsYXRpdHVkZV1cblx0XHRcdFx0fSxcblx0XHRcdFx0Ly8gT3B0aW9uYWxseSwgc3BlY2lmeSBhIG1heGltdW0gZGlzdGFuY2UgKGluIG1ldGVycylcblx0XHRcdFx0Ly8gJG1heERpc3RhbmNlOiAxMDAwLFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9KVxuXG5cdHJldHVybiByZXMuanNvbihuZWFyYnlKb2JQb3N0aW5ncylcbn1cblxuY29uc3QgSm9iUG9zdGluZ0NvbnRyb2xsZXIgPSB7XG5cdGNyZWF0ZUpvYlBvc3RpbmcsXG5cdHVwZGF0ZUpvYlBvc3RpbmcsXG5cdGRlbGV0ZUpvYlBvc3RpbmcsXG5cdGdldEFsbEpvYlBvc3RpbmdzLFxuXHRnZXRKb2JBcHBsaWNhdGlvbnMsXG5cdGdldEpvYlBvc3RpbmcsXG5cdGdldE5lYXJieUpvYlBvc3RpbmdzLFxufVxuXG5leHBvcnQgZGVmYXVsdCBKb2JQb3N0aW5nQ29udHJvbGxlclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUEsSUFBQUEsZ0JBQUEsR0FBQUMsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFDLGFBQUEsR0FBQUYsc0JBQUEsQ0FBQUMsT0FBQTtBQUdBLElBQUFFLG9CQUFBLEdBQUFILHNCQUFBLENBQUFDLE9BQUE7QUFBa0UsU0FBQUQsdUJBQUFJLEdBQUEsV0FBQUEsR0FBQSxJQUFBQSxHQUFBLENBQUFDLFVBQUEsR0FBQUQsR0FBQSxnQkFBQUEsR0FBQTtBQUFBLFNBQUFFLG9CQUFBLGtCQUxsRSxxSkFBQUEsbUJBQUEsWUFBQUEsb0JBQUEsV0FBQUMsT0FBQSxTQUFBQSxPQUFBLE9BQUFDLEVBQUEsR0FBQUMsTUFBQSxDQUFBQyxTQUFBLEVBQUFDLE1BQUEsR0FBQUgsRUFBQSxDQUFBSSxjQUFBLEVBQUFDLGNBQUEsR0FBQUosTUFBQSxDQUFBSSxjQUFBLGNBQUFULEdBQUEsRUFBQVUsR0FBQSxFQUFBQyxJQUFBLElBQUFYLEdBQUEsQ0FBQVUsR0FBQSxJQUFBQyxJQUFBLENBQUFDLEtBQUEsS0FBQUMsT0FBQSx3QkFBQUMsTUFBQSxHQUFBQSxNQUFBLE9BQUFDLGNBQUEsR0FBQUYsT0FBQSxDQUFBRyxRQUFBLGtCQUFBQyxtQkFBQSxHQUFBSixPQUFBLENBQUFLLGFBQUEsdUJBQUFDLGlCQUFBLEdBQUFOLE9BQUEsQ0FBQU8sV0FBQSw4QkFBQUMsT0FBQXJCLEdBQUEsRUFBQVUsR0FBQSxFQUFBRSxLQUFBLFdBQUFQLE1BQUEsQ0FBQUksY0FBQSxDQUFBVCxHQUFBLEVBQUFVLEdBQUEsSUFBQUUsS0FBQSxFQUFBQSxLQUFBLEVBQUFVLFVBQUEsTUFBQUMsWUFBQSxNQUFBQyxRQUFBLFNBQUF4QixHQUFBLENBQUFVLEdBQUEsV0FBQVcsTUFBQSxtQkFBQUksR0FBQSxJQUFBSixNQUFBLFlBQUFBLE9BQUFyQixHQUFBLEVBQUFVLEdBQUEsRUFBQUUsS0FBQSxXQUFBWixHQUFBLENBQUFVLEdBQUEsSUFBQUUsS0FBQSxnQkFBQWMsS0FBQUMsT0FBQSxFQUFBQyxPQUFBLEVBQUFDLElBQUEsRUFBQUMsV0FBQSxRQUFBQyxjQUFBLEdBQUFILE9BQUEsSUFBQUEsT0FBQSxDQUFBdEIsU0FBQSxZQUFBMEIsU0FBQSxHQUFBSixPQUFBLEdBQUFJLFNBQUEsRUFBQUMsU0FBQSxHQUFBNUIsTUFBQSxDQUFBNkIsTUFBQSxDQUFBSCxjQUFBLENBQUF6QixTQUFBLEdBQUE2QixPQUFBLE9BQUFDLE9BQUEsQ0FBQU4sV0FBQSxnQkFBQXJCLGNBQUEsQ0FBQXdCLFNBQUEsZUFBQXJCLEtBQUEsRUFBQXlCLGdCQUFBLENBQUFWLE9BQUEsRUFBQUUsSUFBQSxFQUFBTSxPQUFBLE1BQUFGLFNBQUEsYUFBQUssU0FBQUMsRUFBQSxFQUFBdkMsR0FBQSxFQUFBd0MsR0FBQSxtQkFBQUMsSUFBQSxZQUFBRCxHQUFBLEVBQUFELEVBQUEsQ0FBQUcsSUFBQSxDQUFBMUMsR0FBQSxFQUFBd0MsR0FBQSxjQUFBZixHQUFBLGFBQUFnQixJQUFBLFdBQUFELEdBQUEsRUFBQWYsR0FBQSxRQUFBdEIsT0FBQSxDQUFBdUIsSUFBQSxHQUFBQSxJQUFBLE1BQUFpQixnQkFBQSxnQkFBQVgsVUFBQSxjQUFBWSxrQkFBQSxjQUFBQywyQkFBQSxTQUFBQyxpQkFBQSxPQUFBekIsTUFBQSxDQUFBeUIsaUJBQUEsRUFBQS9CLGNBQUEscUNBQUFnQyxRQUFBLEdBQUExQyxNQUFBLENBQUEyQyxjQUFBLEVBQUFDLHVCQUFBLEdBQUFGLFFBQUEsSUFBQUEsUUFBQSxDQUFBQSxRQUFBLENBQUFHLE1BQUEsUUFBQUQsdUJBQUEsSUFBQUEsdUJBQUEsS0FBQTdDLEVBQUEsSUFBQUcsTUFBQSxDQUFBbUMsSUFBQSxDQUFBTyx1QkFBQSxFQUFBbEMsY0FBQSxNQUFBK0IsaUJBQUEsR0FBQUcsdUJBQUEsT0FBQUUsRUFBQSxHQUFBTiwwQkFBQSxDQUFBdkMsU0FBQSxHQUFBMEIsU0FBQSxDQUFBMUIsU0FBQSxHQUFBRCxNQUFBLENBQUE2QixNQUFBLENBQUFZLGlCQUFBLFlBQUFNLHNCQUFBOUMsU0FBQSxnQ0FBQStDLE9BQUEsV0FBQUMsTUFBQSxJQUFBakMsTUFBQSxDQUFBZixTQUFBLEVBQUFnRCxNQUFBLFlBQUFkLEdBQUEsZ0JBQUFlLE9BQUEsQ0FBQUQsTUFBQSxFQUFBZCxHQUFBLHNCQUFBZ0IsY0FBQXZCLFNBQUEsRUFBQXdCLFdBQUEsYUFBQUMsT0FBQUosTUFBQSxFQUFBZCxHQUFBLEVBQUFtQixPQUFBLEVBQUFDLE1BQUEsUUFBQUMsTUFBQSxHQUFBdkIsUUFBQSxDQUFBTCxTQUFBLENBQUFxQixNQUFBLEdBQUFyQixTQUFBLEVBQUFPLEdBQUEsbUJBQUFxQixNQUFBLENBQUFwQixJQUFBLFFBQUFxQixNQUFBLEdBQUFELE1BQUEsQ0FBQXJCLEdBQUEsRUFBQTVCLEtBQUEsR0FBQWtELE1BQUEsQ0FBQWxELEtBQUEsU0FBQUEsS0FBQSxnQkFBQW1ELE9BQUEsQ0FBQW5ELEtBQUEsS0FBQUwsTUFBQSxDQUFBbUMsSUFBQSxDQUFBOUIsS0FBQSxlQUFBNkMsV0FBQSxDQUFBRSxPQUFBLENBQUEvQyxLQUFBLENBQUFvRCxPQUFBLEVBQUFDLElBQUEsV0FBQXJELEtBQUEsSUFBQThDLE1BQUEsU0FBQTlDLEtBQUEsRUFBQStDLE9BQUEsRUFBQUMsTUFBQSxnQkFBQW5DLEdBQUEsSUFBQWlDLE1BQUEsVUFBQWpDLEdBQUEsRUFBQWtDLE9BQUEsRUFBQUMsTUFBQSxRQUFBSCxXQUFBLENBQUFFLE9BQUEsQ0FBQS9DLEtBQUEsRUFBQXFELElBQUEsV0FBQUMsU0FBQSxJQUFBSixNQUFBLENBQUFsRCxLQUFBLEdBQUFzRCxTQUFBLEVBQUFQLE9BQUEsQ0FBQUcsTUFBQSxnQkFBQUssS0FBQSxXQUFBVCxNQUFBLFVBQUFTLEtBQUEsRUFBQVIsT0FBQSxFQUFBQyxNQUFBLFNBQUFBLE1BQUEsQ0FBQUMsTUFBQSxDQUFBckIsR0FBQSxTQUFBNEIsZUFBQSxFQUFBM0QsY0FBQSxvQkFBQUcsS0FBQSxXQUFBQSxNQUFBMEMsTUFBQSxFQUFBZCxHQUFBLGFBQUE2QiwyQkFBQSxlQUFBWixXQUFBLFdBQUFFLE9BQUEsRUFBQUMsTUFBQSxJQUFBRixNQUFBLENBQUFKLE1BQUEsRUFBQWQsR0FBQSxFQUFBbUIsT0FBQSxFQUFBQyxNQUFBLGdCQUFBUSxlQUFBLEdBQUFBLGVBQUEsR0FBQUEsZUFBQSxDQUFBSCxJQUFBLENBQUFJLDBCQUFBLEVBQUFBLDBCQUFBLElBQUFBLDBCQUFBLHFCQUFBaEMsaUJBQUFWLE9BQUEsRUFBQUUsSUFBQSxFQUFBTSxPQUFBLFFBQUFtQyxLQUFBLHNDQUFBaEIsTUFBQSxFQUFBZCxHQUFBLHdCQUFBOEIsS0FBQSxZQUFBQyxLQUFBLHNEQUFBRCxLQUFBLG9CQUFBaEIsTUFBQSxRQUFBZCxHQUFBLFNBQUFnQyxVQUFBLFdBQUFyQyxPQUFBLENBQUFtQixNQUFBLEdBQUFBLE1BQUEsRUFBQW5CLE9BQUEsQ0FBQUssR0FBQSxHQUFBQSxHQUFBLFVBQUFpQyxRQUFBLEdBQUF0QyxPQUFBLENBQUFzQyxRQUFBLE1BQUFBLFFBQUEsUUFBQUMsY0FBQSxHQUFBQyxtQkFBQSxDQUFBRixRQUFBLEVBQUF0QyxPQUFBLE9BQUF1QyxjQUFBLFFBQUFBLGNBQUEsS0FBQS9CLGdCQUFBLG1CQUFBK0IsY0FBQSxxQkFBQXZDLE9BQUEsQ0FBQW1CLE1BQUEsRUFBQW5CLE9BQUEsQ0FBQXlDLElBQUEsR0FBQXpDLE9BQUEsQ0FBQTBDLEtBQUEsR0FBQTFDLE9BQUEsQ0FBQUssR0FBQSxzQkFBQUwsT0FBQSxDQUFBbUIsTUFBQSw2QkFBQWdCLEtBQUEsUUFBQUEsS0FBQSxnQkFBQW5DLE9BQUEsQ0FBQUssR0FBQSxFQUFBTCxPQUFBLENBQUEyQyxpQkFBQSxDQUFBM0MsT0FBQSxDQUFBSyxHQUFBLHVCQUFBTCxPQUFBLENBQUFtQixNQUFBLElBQUFuQixPQUFBLENBQUE0QyxNQUFBLFdBQUE1QyxPQUFBLENBQUFLLEdBQUEsR0FBQThCLEtBQUEsb0JBQUFULE1BQUEsR0FBQXZCLFFBQUEsQ0FBQVgsT0FBQSxFQUFBRSxJQUFBLEVBQUFNLE9BQUEsb0JBQUEwQixNQUFBLENBQUFwQixJQUFBLFFBQUE2QixLQUFBLEdBQUFuQyxPQUFBLENBQUE2QyxJQUFBLG1DQUFBbkIsTUFBQSxDQUFBckIsR0FBQSxLQUFBRyxnQkFBQSxxQkFBQS9CLEtBQUEsRUFBQWlELE1BQUEsQ0FBQXJCLEdBQUEsRUFBQXdDLElBQUEsRUFBQTdDLE9BQUEsQ0FBQTZDLElBQUEsa0JBQUFuQixNQUFBLENBQUFwQixJQUFBLEtBQUE2QixLQUFBLGdCQUFBbkMsT0FBQSxDQUFBbUIsTUFBQSxZQUFBbkIsT0FBQSxDQUFBSyxHQUFBLEdBQUFxQixNQUFBLENBQUFyQixHQUFBLG1CQUFBbUMsb0JBQUFGLFFBQUEsRUFBQXRDLE9BQUEsUUFBQThDLFVBQUEsR0FBQTlDLE9BQUEsQ0FBQW1CLE1BQUEsRUFBQUEsTUFBQSxHQUFBbUIsUUFBQSxDQUFBekQsUUFBQSxDQUFBaUUsVUFBQSxPQUFBQyxTQUFBLEtBQUE1QixNQUFBLFNBQUFuQixPQUFBLENBQUFzQyxRQUFBLHFCQUFBUSxVQUFBLElBQUFSLFFBQUEsQ0FBQXpELFFBQUEsZUFBQW1CLE9BQUEsQ0FBQW1CLE1BQUEsYUFBQW5CLE9BQUEsQ0FBQUssR0FBQSxHQUFBMEMsU0FBQSxFQUFBUCxtQkFBQSxDQUFBRixRQUFBLEVBQUF0QyxPQUFBLGVBQUFBLE9BQUEsQ0FBQW1CLE1BQUEsa0JBQUEyQixVQUFBLEtBQUE5QyxPQUFBLENBQUFtQixNQUFBLFlBQUFuQixPQUFBLENBQUFLLEdBQUEsT0FBQTJDLFNBQUEsdUNBQUFGLFVBQUEsaUJBQUF0QyxnQkFBQSxNQUFBa0IsTUFBQSxHQUFBdkIsUUFBQSxDQUFBZ0IsTUFBQSxFQUFBbUIsUUFBQSxDQUFBekQsUUFBQSxFQUFBbUIsT0FBQSxDQUFBSyxHQUFBLG1CQUFBcUIsTUFBQSxDQUFBcEIsSUFBQSxTQUFBTixPQUFBLENBQUFtQixNQUFBLFlBQUFuQixPQUFBLENBQUFLLEdBQUEsR0FBQXFCLE1BQUEsQ0FBQXJCLEdBQUEsRUFBQUwsT0FBQSxDQUFBc0MsUUFBQSxTQUFBOUIsZ0JBQUEsTUFBQXlDLElBQUEsR0FBQXZCLE1BQUEsQ0FBQXJCLEdBQUEsU0FBQTRDLElBQUEsR0FBQUEsSUFBQSxDQUFBSixJQUFBLElBQUE3QyxPQUFBLENBQUFzQyxRQUFBLENBQUFZLFVBQUEsSUFBQUQsSUFBQSxDQUFBeEUsS0FBQSxFQUFBdUIsT0FBQSxDQUFBbUQsSUFBQSxHQUFBYixRQUFBLENBQUFjLE9BQUEsZUFBQXBELE9BQUEsQ0FBQW1CLE1BQUEsS0FBQW5CLE9BQUEsQ0FBQW1CLE1BQUEsV0FBQW5CLE9BQUEsQ0FBQUssR0FBQSxHQUFBMEMsU0FBQSxHQUFBL0MsT0FBQSxDQUFBc0MsUUFBQSxTQUFBOUIsZ0JBQUEsSUFBQXlDLElBQUEsSUFBQWpELE9BQUEsQ0FBQW1CLE1BQUEsWUFBQW5CLE9BQUEsQ0FBQUssR0FBQSxPQUFBMkMsU0FBQSxzQ0FBQWhELE9BQUEsQ0FBQXNDLFFBQUEsU0FBQTlCLGdCQUFBLGNBQUE2QyxhQUFBQyxJQUFBLFFBQUFDLEtBQUEsS0FBQUMsTUFBQSxFQUFBRixJQUFBLFlBQUFBLElBQUEsS0FBQUMsS0FBQSxDQUFBRSxRQUFBLEdBQUFILElBQUEsV0FBQUEsSUFBQSxLQUFBQyxLQUFBLENBQUFHLFVBQUEsR0FBQUosSUFBQSxLQUFBQyxLQUFBLENBQUFJLFFBQUEsR0FBQUwsSUFBQSxXQUFBTSxVQUFBLENBQUFDLElBQUEsQ0FBQU4sS0FBQSxjQUFBTyxjQUFBUCxLQUFBLFFBQUE3QixNQUFBLEdBQUE2QixLQUFBLENBQUFRLFVBQUEsUUFBQXJDLE1BQUEsQ0FBQXBCLElBQUEsb0JBQUFvQixNQUFBLENBQUFyQixHQUFBLEVBQUFrRCxLQUFBLENBQUFRLFVBQUEsR0FBQXJDLE1BQUEsYUFBQXpCLFFBQUFOLFdBQUEsU0FBQWlFLFVBQUEsTUFBQUosTUFBQSxhQUFBN0QsV0FBQSxDQUFBdUIsT0FBQSxDQUFBbUMsWUFBQSxjQUFBVyxLQUFBLGlCQUFBakQsT0FBQWtELFFBQUEsUUFBQUEsUUFBQSxRQUFBQyxjQUFBLEdBQUFELFFBQUEsQ0FBQXJGLGNBQUEsT0FBQXNGLGNBQUEsU0FBQUEsY0FBQSxDQUFBM0QsSUFBQSxDQUFBMEQsUUFBQSw0QkFBQUEsUUFBQSxDQUFBZCxJQUFBLFNBQUFjLFFBQUEsT0FBQUUsS0FBQSxDQUFBRixRQUFBLENBQUFHLE1BQUEsU0FBQUMsQ0FBQSxPQUFBbEIsSUFBQSxZQUFBQSxLQUFBLGFBQUFrQixDQUFBLEdBQUFKLFFBQUEsQ0FBQUcsTUFBQSxPQUFBaEcsTUFBQSxDQUFBbUMsSUFBQSxDQUFBMEQsUUFBQSxFQUFBSSxDQUFBLFVBQUFsQixJQUFBLENBQUExRSxLQUFBLEdBQUF3RixRQUFBLENBQUFJLENBQUEsR0FBQWxCLElBQUEsQ0FBQU4sSUFBQSxPQUFBTSxJQUFBLFNBQUFBLElBQUEsQ0FBQTFFLEtBQUEsR0FBQXNFLFNBQUEsRUFBQUksSUFBQSxDQUFBTixJQUFBLE9BQUFNLElBQUEsWUFBQUEsSUFBQSxDQUFBQSxJQUFBLEdBQUFBLElBQUEsZUFBQUEsSUFBQSxFQUFBZCxVQUFBLGVBQUFBLFdBQUEsYUFBQTVELEtBQUEsRUFBQXNFLFNBQUEsRUFBQUYsSUFBQSxpQkFBQXBDLGlCQUFBLENBQUF0QyxTQUFBLEdBQUF1QywwQkFBQSxFQUFBcEMsY0FBQSxDQUFBMEMsRUFBQSxtQkFBQXZDLEtBQUEsRUFBQWlDLDBCQUFBLEVBQUF0QixZQUFBLFNBQUFkLGNBQUEsQ0FBQW9DLDBCQUFBLG1CQUFBakMsS0FBQSxFQUFBZ0MsaUJBQUEsRUFBQXJCLFlBQUEsU0FBQXFCLGlCQUFBLENBQUE2RCxXQUFBLEdBQUFwRixNQUFBLENBQUF3QiwwQkFBQSxFQUFBMUIsaUJBQUEsd0JBQUFoQixPQUFBLENBQUF1RyxtQkFBQSxhQUFBQyxNQUFBLFFBQUFDLElBQUEsd0JBQUFELE1BQUEsSUFBQUEsTUFBQSxDQUFBRSxXQUFBLFdBQUFELElBQUEsS0FBQUEsSUFBQSxLQUFBaEUsaUJBQUEsNkJBQUFnRSxJQUFBLENBQUFILFdBQUEsSUFBQUcsSUFBQSxDQUFBRSxJQUFBLE9BQUEzRyxPQUFBLENBQUE0RyxJQUFBLGFBQUFKLE1BQUEsV0FBQXRHLE1BQUEsQ0FBQTJHLGNBQUEsR0FBQTNHLE1BQUEsQ0FBQTJHLGNBQUEsQ0FBQUwsTUFBQSxFQUFBOUQsMEJBQUEsS0FBQThELE1BQUEsQ0FBQU0sU0FBQSxHQUFBcEUsMEJBQUEsRUFBQXhCLE1BQUEsQ0FBQXNGLE1BQUEsRUFBQXhGLGlCQUFBLHlCQUFBd0YsTUFBQSxDQUFBckcsU0FBQSxHQUFBRCxNQUFBLENBQUE2QixNQUFBLENBQUFpQixFQUFBLEdBQUF3RCxNQUFBLEtBQUF4RyxPQUFBLENBQUErRyxLQUFBLGFBQUExRSxHQUFBLGFBQUF3QixPQUFBLEVBQUF4QixHQUFBLE9BQUFZLHFCQUFBLENBQUFJLGFBQUEsQ0FBQWxELFNBQUEsR0FBQWUsTUFBQSxDQUFBbUMsYUFBQSxDQUFBbEQsU0FBQSxFQUFBVyxtQkFBQSxpQ0FBQWQsT0FBQSxDQUFBcUQsYUFBQSxHQUFBQSxhQUFBLEVBQUFyRCxPQUFBLENBQUFnSCxLQUFBLGFBQUF4RixPQUFBLEVBQUFDLE9BQUEsRUFBQUMsSUFBQSxFQUFBQyxXQUFBLEVBQUEyQixXQUFBLGVBQUFBLFdBQUEsS0FBQUEsV0FBQSxHQUFBMkQsT0FBQSxPQUFBQyxJQUFBLE9BQUE3RCxhQUFBLENBQUE5QixJQUFBLENBQUFDLE9BQUEsRUFBQUMsT0FBQSxFQUFBQyxJQUFBLEVBQUFDLFdBQUEsR0FBQTJCLFdBQUEsVUFBQXRELE9BQUEsQ0FBQXVHLG1CQUFBLENBQUE5RSxPQUFBLElBQUF5RixJQUFBLEdBQUFBLElBQUEsQ0FBQS9CLElBQUEsR0FBQXJCLElBQUEsV0FBQUgsTUFBQSxXQUFBQSxNQUFBLENBQUFrQixJQUFBLEdBQUFsQixNQUFBLENBQUFsRCxLQUFBLEdBQUF5RyxJQUFBLENBQUEvQixJQUFBLFdBQUFsQyxxQkFBQSxDQUFBRCxFQUFBLEdBQUE5QixNQUFBLENBQUE4QixFQUFBLEVBQUFoQyxpQkFBQSxnQkFBQUUsTUFBQSxDQUFBOEIsRUFBQSxFQUFBcEMsY0FBQSxpQ0FBQU0sTUFBQSxDQUFBOEIsRUFBQSw2REFBQWhELE9BQUEsQ0FBQW1ILElBQUEsYUFBQUMsR0FBQSxRQUFBQyxNQUFBLEdBQUFuSCxNQUFBLENBQUFrSCxHQUFBLEdBQUFELElBQUEsZ0JBQUE1RyxHQUFBLElBQUE4RyxNQUFBLEVBQUFGLElBQUEsQ0FBQXRCLElBQUEsQ0FBQXRGLEdBQUEsVUFBQTRHLElBQUEsQ0FBQUcsT0FBQSxhQUFBbkMsS0FBQSxXQUFBZ0MsSUFBQSxDQUFBZixNQUFBLFNBQUE3RixHQUFBLEdBQUE0RyxJQUFBLENBQUFJLEdBQUEsUUFBQWhILEdBQUEsSUFBQThHLE1BQUEsU0FBQWxDLElBQUEsQ0FBQTFFLEtBQUEsR0FBQUYsR0FBQSxFQUFBNEUsSUFBQSxDQUFBTixJQUFBLE9BQUFNLElBQUEsV0FBQUEsSUFBQSxDQUFBTixJQUFBLE9BQUFNLElBQUEsUUFBQW5GLE9BQUEsQ0FBQStDLE1BQUEsR0FBQUEsTUFBQSxFQUFBZCxPQUFBLENBQUE5QixTQUFBLEtBQUF1RyxXQUFBLEVBQUF6RSxPQUFBLEVBQUErRCxLQUFBLFdBQUFBLE1BQUF3QixhQUFBLGFBQUFDLElBQUEsV0FBQXRDLElBQUEsV0FBQVYsSUFBQSxRQUFBQyxLQUFBLEdBQUFLLFNBQUEsT0FBQUYsSUFBQSxZQUFBUCxRQUFBLGNBQUFuQixNQUFBLGdCQUFBZCxHQUFBLEdBQUEwQyxTQUFBLE9BQUFhLFVBQUEsQ0FBQTFDLE9BQUEsQ0FBQTRDLGFBQUEsSUFBQTBCLGFBQUEsV0FBQWIsSUFBQSxrQkFBQUEsSUFBQSxDQUFBZSxNQUFBLE9BQUF0SCxNQUFBLENBQUFtQyxJQUFBLE9BQUFvRSxJQUFBLE1BQUFSLEtBQUEsRUFBQVEsSUFBQSxDQUFBZ0IsS0FBQSxjQUFBaEIsSUFBQSxJQUFBNUIsU0FBQSxNQUFBNkMsSUFBQSxXQUFBQSxLQUFBLFNBQUEvQyxJQUFBLFdBQUFnRCxVQUFBLFFBQUFqQyxVQUFBLElBQUFHLFVBQUEsa0JBQUE4QixVQUFBLENBQUF2RixJQUFBLFFBQUF1RixVQUFBLENBQUF4RixHQUFBLGNBQUF5RixJQUFBLEtBQUFuRCxpQkFBQSxXQUFBQSxrQkFBQW9ELFNBQUEsYUFBQWxELElBQUEsUUFBQWtELFNBQUEsTUFBQS9GLE9BQUEsa0JBQUFnRyxPQUFBQyxHQUFBLEVBQUFDLE1BQUEsV0FBQXhFLE1BQUEsQ0FBQXBCLElBQUEsWUFBQW9CLE1BQUEsQ0FBQXJCLEdBQUEsR0FBQTBGLFNBQUEsRUFBQS9GLE9BQUEsQ0FBQW1ELElBQUEsR0FBQThDLEdBQUEsRUFBQUMsTUFBQSxLQUFBbEcsT0FBQSxDQUFBbUIsTUFBQSxXQUFBbkIsT0FBQSxDQUFBSyxHQUFBLEdBQUEwQyxTQUFBLEtBQUFtRCxNQUFBLGFBQUE3QixDQUFBLFFBQUFULFVBQUEsQ0FBQVEsTUFBQSxNQUFBQyxDQUFBLFNBQUFBLENBQUEsUUFBQWQsS0FBQSxRQUFBSyxVQUFBLENBQUFTLENBQUEsR0FBQTNDLE1BQUEsR0FBQTZCLEtBQUEsQ0FBQVEsVUFBQSxpQkFBQVIsS0FBQSxDQUFBQyxNQUFBLFNBQUF3QyxNQUFBLGFBQUF6QyxLQUFBLENBQUFDLE1BQUEsU0FBQWlDLElBQUEsUUFBQVUsUUFBQSxHQUFBL0gsTUFBQSxDQUFBbUMsSUFBQSxDQUFBZ0QsS0FBQSxlQUFBNkMsVUFBQSxHQUFBaEksTUFBQSxDQUFBbUMsSUFBQSxDQUFBZ0QsS0FBQSxxQkFBQTRDLFFBQUEsSUFBQUMsVUFBQSxhQUFBWCxJQUFBLEdBQUFsQyxLQUFBLENBQUFFLFFBQUEsU0FBQXVDLE1BQUEsQ0FBQXpDLEtBQUEsQ0FBQUUsUUFBQSxnQkFBQWdDLElBQUEsR0FBQWxDLEtBQUEsQ0FBQUcsVUFBQSxTQUFBc0MsTUFBQSxDQUFBekMsS0FBQSxDQUFBRyxVQUFBLGNBQUF5QyxRQUFBLGFBQUFWLElBQUEsR0FBQWxDLEtBQUEsQ0FBQUUsUUFBQSxTQUFBdUMsTUFBQSxDQUFBekMsS0FBQSxDQUFBRSxRQUFBLHFCQUFBMkMsVUFBQSxZQUFBaEUsS0FBQSxxREFBQXFELElBQUEsR0FBQWxDLEtBQUEsQ0FBQUcsVUFBQSxTQUFBc0MsTUFBQSxDQUFBekMsS0FBQSxDQUFBRyxVQUFBLFlBQUFkLE1BQUEsV0FBQUEsT0FBQXRDLElBQUEsRUFBQUQsR0FBQSxhQUFBZ0UsQ0FBQSxRQUFBVCxVQUFBLENBQUFRLE1BQUEsTUFBQUMsQ0FBQSxTQUFBQSxDQUFBLFFBQUFkLEtBQUEsUUFBQUssVUFBQSxDQUFBUyxDQUFBLE9BQUFkLEtBQUEsQ0FBQUMsTUFBQSxTQUFBaUMsSUFBQSxJQUFBckgsTUFBQSxDQUFBbUMsSUFBQSxDQUFBZ0QsS0FBQSx3QkFBQWtDLElBQUEsR0FBQWxDLEtBQUEsQ0FBQUcsVUFBQSxRQUFBMkMsWUFBQSxHQUFBOUMsS0FBQSxhQUFBOEMsWUFBQSxpQkFBQS9GLElBQUEsbUJBQUFBLElBQUEsS0FBQStGLFlBQUEsQ0FBQTdDLE1BQUEsSUFBQW5ELEdBQUEsSUFBQUEsR0FBQSxJQUFBZ0csWUFBQSxDQUFBM0MsVUFBQSxLQUFBMkMsWUFBQSxjQUFBM0UsTUFBQSxHQUFBMkUsWUFBQSxHQUFBQSxZQUFBLENBQUF0QyxVQUFBLGNBQUFyQyxNQUFBLENBQUFwQixJQUFBLEdBQUFBLElBQUEsRUFBQW9CLE1BQUEsQ0FBQXJCLEdBQUEsR0FBQUEsR0FBQSxFQUFBZ0csWUFBQSxTQUFBbEYsTUFBQSxnQkFBQWdDLElBQUEsR0FBQWtELFlBQUEsQ0FBQTNDLFVBQUEsRUFBQWxELGdCQUFBLFNBQUE4RixRQUFBLENBQUE1RSxNQUFBLE1BQUE0RSxRQUFBLFdBQUFBLFNBQUE1RSxNQUFBLEVBQUFpQyxRQUFBLG9CQUFBakMsTUFBQSxDQUFBcEIsSUFBQSxRQUFBb0IsTUFBQSxDQUFBckIsR0FBQSxxQkFBQXFCLE1BQUEsQ0FBQXBCLElBQUEsbUJBQUFvQixNQUFBLENBQUFwQixJQUFBLFFBQUE2QyxJQUFBLEdBQUF6QixNQUFBLENBQUFyQixHQUFBLGdCQUFBcUIsTUFBQSxDQUFBcEIsSUFBQSxTQUFBd0YsSUFBQSxRQUFBekYsR0FBQSxHQUFBcUIsTUFBQSxDQUFBckIsR0FBQSxPQUFBYyxNQUFBLGtCQUFBZ0MsSUFBQSx5QkFBQXpCLE1BQUEsQ0FBQXBCLElBQUEsSUFBQXFELFFBQUEsVUFBQVIsSUFBQSxHQUFBUSxRQUFBLEdBQUFuRCxnQkFBQSxLQUFBK0YsTUFBQSxXQUFBQSxPQUFBN0MsVUFBQSxhQUFBVyxDQUFBLFFBQUFULFVBQUEsQ0FBQVEsTUFBQSxNQUFBQyxDQUFBLFNBQUFBLENBQUEsUUFBQWQsS0FBQSxRQUFBSyxVQUFBLENBQUFTLENBQUEsT0FBQWQsS0FBQSxDQUFBRyxVQUFBLEtBQUFBLFVBQUEsY0FBQTRDLFFBQUEsQ0FBQS9DLEtBQUEsQ0FBQVEsVUFBQSxFQUFBUixLQUFBLENBQUFJLFFBQUEsR0FBQUcsYUFBQSxDQUFBUCxLQUFBLEdBQUEvQyxnQkFBQSx5QkFBQWdHLE9BQUFoRCxNQUFBLGFBQUFhLENBQUEsUUFBQVQsVUFBQSxDQUFBUSxNQUFBLE1BQUFDLENBQUEsU0FBQUEsQ0FBQSxRQUFBZCxLQUFBLFFBQUFLLFVBQUEsQ0FBQVMsQ0FBQSxPQUFBZCxLQUFBLENBQUFDLE1BQUEsS0FBQUEsTUFBQSxRQUFBOUIsTUFBQSxHQUFBNkIsS0FBQSxDQUFBUSxVQUFBLGtCQUFBckMsTUFBQSxDQUFBcEIsSUFBQSxRQUFBbUcsTUFBQSxHQUFBL0UsTUFBQSxDQUFBckIsR0FBQSxFQUFBeUQsYUFBQSxDQUFBUCxLQUFBLFlBQUFrRCxNQUFBLGdCQUFBckUsS0FBQSw4QkFBQXNFLGFBQUEsV0FBQUEsY0FBQXpDLFFBQUEsRUFBQWYsVUFBQSxFQUFBRSxPQUFBLGdCQUFBZCxRQUFBLEtBQUF6RCxRQUFBLEVBQUFrQyxNQUFBLENBQUFrRCxRQUFBLEdBQUFmLFVBQUEsRUFBQUEsVUFBQSxFQUFBRSxPQUFBLEVBQUFBLE9BQUEsb0JBQUFqQyxNQUFBLFVBQUFkLEdBQUEsR0FBQTBDLFNBQUEsR0FBQXZDLGdCQUFBLE9BQUF4QyxPQUFBO0FBQUEsU0FBQTJJLFFBQUF0QixNQUFBLEVBQUF1QixjQUFBLFFBQUF6QixJQUFBLEdBQUFqSCxNQUFBLENBQUFpSCxJQUFBLENBQUFFLE1BQUEsT0FBQW5ILE1BQUEsQ0FBQTJJLHFCQUFBLFFBQUFDLE9BQUEsR0FBQTVJLE1BQUEsQ0FBQTJJLHFCQUFBLENBQUF4QixNQUFBLEdBQUF1QixjQUFBLEtBQUFFLE9BQUEsR0FBQUEsT0FBQSxDQUFBQyxNQUFBLFdBQUFDLEdBQUEsV0FBQTlJLE1BQUEsQ0FBQStJLHdCQUFBLENBQUE1QixNQUFBLEVBQUEyQixHQUFBLEVBQUE3SCxVQUFBLE9BQUFnRyxJQUFBLENBQUF0QixJQUFBLENBQUFxRCxLQUFBLENBQUEvQixJQUFBLEVBQUEyQixPQUFBLFlBQUEzQixJQUFBO0FBQUEsU0FBQWdDLGNBQUFDLE1BQUEsYUFBQS9DLENBQUEsTUFBQUEsQ0FBQSxHQUFBZ0QsU0FBQSxDQUFBakQsTUFBQSxFQUFBQyxDQUFBLFVBQUFpRCxNQUFBLFdBQUFELFNBQUEsQ0FBQWhELENBQUEsSUFBQWdELFNBQUEsQ0FBQWhELENBQUEsUUFBQUEsQ0FBQSxPQUFBc0MsT0FBQSxDQUFBekksTUFBQSxDQUFBb0osTUFBQSxPQUFBcEcsT0FBQSxXQUFBM0MsR0FBQSxJQUFBZ0osZUFBQSxDQUFBSCxNQUFBLEVBQUE3SSxHQUFBLEVBQUErSSxNQUFBLENBQUEvSSxHQUFBLFNBQUFMLE1BQUEsQ0FBQXNKLHlCQUFBLEdBQUF0SixNQUFBLENBQUF1SixnQkFBQSxDQUFBTCxNQUFBLEVBQUFsSixNQUFBLENBQUFzSix5QkFBQSxDQUFBRixNQUFBLEtBQUFYLE9BQUEsQ0FBQXpJLE1BQUEsQ0FBQW9KLE1BQUEsR0FBQXBHLE9BQUEsV0FBQTNDLEdBQUEsSUFBQUwsTUFBQSxDQUFBSSxjQUFBLENBQUE4SSxNQUFBLEVBQUE3SSxHQUFBLEVBQUFMLE1BQUEsQ0FBQStJLHdCQUFBLENBQUFLLE1BQUEsRUFBQS9JLEdBQUEsaUJBQUE2SSxNQUFBO0FBQUEsU0FBQUcsZ0JBQUExSixHQUFBLEVBQUFVLEdBQUEsRUFBQUUsS0FBQSxJQUFBRixHQUFBLEdBQUFtSixjQUFBLENBQUFuSixHQUFBLE9BQUFBLEdBQUEsSUFBQVYsR0FBQSxJQUFBSyxNQUFBLENBQUFJLGNBQUEsQ0FBQVQsR0FBQSxFQUFBVSxHQUFBLElBQUFFLEtBQUEsRUFBQUEsS0FBQSxFQUFBVSxVQUFBLFFBQUFDLFlBQUEsUUFBQUMsUUFBQSxvQkFBQXhCLEdBQUEsQ0FBQVUsR0FBQSxJQUFBRSxLQUFBLFdBQUFaLEdBQUE7QUFBQSxTQUFBNkosZUFBQXJILEdBQUEsUUFBQTlCLEdBQUEsR0FBQW9KLFlBQUEsQ0FBQXRILEdBQUEsb0JBQUF1QixPQUFBLENBQUFyRCxHQUFBLGlCQUFBQSxHQUFBLEdBQUFxSixNQUFBLENBQUFySixHQUFBO0FBQUEsU0FBQW9KLGFBQUFFLEtBQUEsRUFBQUMsSUFBQSxRQUFBbEcsT0FBQSxDQUFBaUcsS0FBQSxrQkFBQUEsS0FBQSxrQkFBQUEsS0FBQSxNQUFBRSxJQUFBLEdBQUFGLEtBQUEsQ0FBQWxKLE1BQUEsQ0FBQXFKLFdBQUEsT0FBQUQsSUFBQSxLQUFBaEYsU0FBQSxRQUFBa0YsR0FBQSxHQUFBRixJQUFBLENBQUF4SCxJQUFBLENBQUFzSCxLQUFBLEVBQUFDLElBQUEsb0JBQUFsRyxPQUFBLENBQUFxRyxHQUFBLHVCQUFBQSxHQUFBLFlBQUFqRixTQUFBLDREQUFBOEUsSUFBQSxnQkFBQUYsTUFBQSxHQUFBTSxNQUFBLEVBQUFMLEtBQUE7QUFBQSxTQUFBTSxtQkFBQUMsR0FBQSxFQUFBNUcsT0FBQSxFQUFBQyxNQUFBLEVBQUE0RyxLQUFBLEVBQUFDLE1BQUEsRUFBQS9KLEdBQUEsRUFBQThCLEdBQUEsY0FBQTRDLElBQUEsR0FBQW1GLEdBQUEsQ0FBQTdKLEdBQUEsRUFBQThCLEdBQUEsT0FBQTVCLEtBQUEsR0FBQXdFLElBQUEsQ0FBQXhFLEtBQUEsV0FBQXVELEtBQUEsSUFBQVAsTUFBQSxDQUFBTyxLQUFBLGlCQUFBaUIsSUFBQSxDQUFBSixJQUFBLElBQUFyQixPQUFBLENBQUEvQyxLQUFBLFlBQUF3RyxPQUFBLENBQUF6RCxPQUFBLENBQUEvQyxLQUFBLEVBQUFxRCxJQUFBLENBQUF1RyxLQUFBLEVBQUFDLE1BQUE7QUFBQSxTQUFBQyxrQkFBQW5JLEVBQUEsNkJBQUFWLElBQUEsU0FBQThJLElBQUEsR0FBQW5CLFNBQUEsYUFBQXBDLE9BQUEsV0FBQXpELE9BQUEsRUFBQUMsTUFBQSxRQUFBMkcsR0FBQSxHQUFBaEksRUFBQSxDQUFBOEcsS0FBQSxDQUFBeEgsSUFBQSxFQUFBOEksSUFBQSxZQUFBSCxNQUFBNUosS0FBQSxJQUFBMEosa0JBQUEsQ0FBQUMsR0FBQSxFQUFBNUcsT0FBQSxFQUFBQyxNQUFBLEVBQUE0RyxLQUFBLEVBQUFDLE1BQUEsVUFBQTdKLEtBQUEsY0FBQTZKLE9BQUFoSixHQUFBLElBQUE2SSxrQkFBQSxDQUFBQyxHQUFBLEVBQUE1RyxPQUFBLEVBQUFDLE1BQUEsRUFBQTRHLEtBQUEsRUFBQUMsTUFBQSxXQUFBaEosR0FBQSxLQUFBK0ksS0FBQSxDQUFBdEYsU0FBQTtBQVNBLElBQU0wRixnQkFBZ0I7RUFBQSxJQUFBQyxJQUFBLEdBQUFILGlCQUFBLGVBQUF4SyxtQkFBQSxHQUFBNkcsSUFBQSxDQUFHLFNBQUErRCxRQUFPQyxHQUFZLEVBQUVYLEdBQWE7SUFBQSxJQUFBWSxTQUFBO0lBQUEsSUFBQUMsT0FBQSxFQUFBQyxhQUFBO0lBQUEsT0FBQWhMLG1CQUFBLEdBQUF3QixJQUFBLFVBQUF5SixTQUFBQyxRQUFBO01BQUEsa0JBQUFBLFFBQUEsQ0FBQXhELElBQUEsR0FBQXdELFFBQUEsQ0FBQTlGLElBQUE7UUFBQTtVQUFBOEYsUUFBQSxDQUFBOUYsSUFBQTtVQUFBLE9BQ25CK0Ysd0JBQVksQ0FBQ0MsUUFBUSxFQUFBTixTQUFBLEdBQUNELEdBQUcsQ0FBQ1EsSUFBSSxjQUFBUCxTQUFBLHVCQUFSQSxTQUFBLENBQVVRLE1BQU0sQ0FBQztRQUFBO1VBQXhFUCxPQUF3QixHQUFBRyxRQUFBLENBQUF4RyxJQUFBO1VBQUEsSUFFekJxRyxPQUFPO1lBQUFHLFFBQUEsQ0FBQTlGLElBQUE7WUFBQTtVQUFBO1VBQUEsT0FBQThGLFFBQUEsQ0FBQXJHLE1BQUEsV0FDSnFGLEdBQUcsQ0FDUnFCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FDWEMsSUFBSSxDQUFDO1lBQUVDLE9BQU8sRUFBRTtVQUF1RCxDQUFDLENBQUM7UUFBQTtVQUd0RVQsYUFBYSxHQUFHLElBQUlVLDJCQUFlLENBQUF0QyxhQUFBLENBQUFBLGFBQUEsS0FDckN5QixHQUFHLENBQUNjLElBQUk7WUFDWFosT0FBTyxFQUFFQSxPQUFPLENBQUNhLEdBQUc7WUFDcEJDLFFBQVEsRUFBRWQsT0FBTyxDQUFDYztVQUFRLEVBQzFCLENBQUM7VUFBQVgsUUFBQSxDQUFBeEQsSUFBQTtVQUFBd0QsUUFBQSxDQUFBOUYsSUFBQTtVQUFBLE9BR0s0RixhQUFhLENBQUNjLElBQUksQ0FBQyxDQUFDO1FBQUE7VUFDMUI1QixHQUFHLENBQUNxQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFUixhQUFhLEVBQWJBO1VBQWMsQ0FBQyxDQUFDO1VBQUFFLFFBQUEsQ0FBQTlGLElBQUE7VUFBQTtRQUFBO1VBQUE4RixRQUFBLENBQUF4RCxJQUFBO1VBQUF3RCxRQUFBLENBQUFhLEVBQUEsR0FBQWIsUUFBQTtVQUV2Q2hCLEdBQUcsQ0FBQ3FCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLE9BQU8sRUFBRVAsUUFBQSxDQUFBYSxFQUFBLENBQWlCTjtVQUFRLENBQUMsQ0FBQztRQUFBO1FBQUE7VUFBQSxPQUFBUCxRQUFBLENBQUFyRCxJQUFBO01BQUE7SUFBQSxHQUFBK0MsT0FBQTtFQUFBLENBRTVEO0VBQUEsZ0JBckJLRixnQkFBZ0JBLENBQUFzQixFQUFBLEVBQUFDLEdBQUE7SUFBQSxPQUFBdEIsSUFBQSxDQUFBeEIsS0FBQSxPQUFBRyxTQUFBO0VBQUE7QUFBQSxHQXFCckI7QUFFRCxJQUFNNEMsZ0JBQWdCO0VBQUEsSUFBQUMsS0FBQSxHQUFBM0IsaUJBQUEsZUFBQXhLLG1CQUFBLEdBQUE2RyxJQUFBLENBQUcsU0FBQXVGLFNBQU92QixHQUFZLEVBQUVYLEdBQWE7SUFBQSxJQUFBbUMsVUFBQTtJQUFBLElBQUFDLEVBQUEsRUFBQUMsU0FBQSxFQUFBQyxpQkFBQTtJQUFBLE9BQUF4TSxtQkFBQSxHQUFBd0IsSUFBQSxVQUFBaUwsVUFBQUMsU0FBQTtNQUFBLGtCQUFBQSxTQUFBLENBQUFoRixJQUFBLEdBQUFnRixTQUFBLENBQUF0SCxJQUFBO1FBQUE7VUFDbERrSCxFQUFFLEdBQUt6QixHQUFHLENBQUM4QixNQUFNLENBQWpCTCxFQUFFO1VBQ0pDLFNBQVMsSUFBQUYsVUFBQSxHQUFHeEIsR0FBRyxDQUFDUSxJQUFJLGNBQUFnQixVQUFBLHVCQUFSQSxVQUFBLENBQVVmLE1BQU07VUFBQW9CLFNBQUEsQ0FBQWhGLElBQUE7VUFBQWdGLFNBQUEsQ0FBQXRILElBQUE7VUFBQSxPQUdEc0csMkJBQWUsQ0FBQ2tCLGdCQUFnQixDQUMvRDtZQUFFaEIsR0FBRyxFQUFFVSxFQUFFO1lBQUV2QixPQUFPLEVBQUV3QjtVQUFVLENBQUMsRUFDL0IxQixHQUFHLENBQUNjLElBQUksRUFDUjtZQUFFLE9BQUssSUFBSTtZQUFFa0IsYUFBYSxFQUFFO1VBQUssQ0FDbEMsQ0FBQztRQUFBO1VBSktMLGlCQUFpQixHQUFBRSxTQUFBLENBQUFoSSxJQUFBO1VBQUEsSUFNbEI4SCxpQkFBaUI7WUFBQUUsU0FBQSxDQUFBdEgsSUFBQTtZQUFBO1VBQUE7VUFBQSxPQUFBc0gsU0FBQSxDQUFBN0gsTUFBQSxXQUNkcUYsR0FBRyxDQUFDcUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRXZILEtBQUssRUFBRTtVQUF3QixDQUFDLENBQUM7UUFBQTtVQUdoRWlHLEdBQUcsQ0FBQ3FCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDZ0IsaUJBQWlCLENBQUM7VUFBQUUsU0FBQSxDQUFBdEgsSUFBQTtVQUFBO1FBQUE7VUFBQXNILFNBQUEsQ0FBQWhGLElBQUE7VUFBQWdGLFNBQUEsQ0FBQVgsRUFBQSxHQUFBVyxTQUFBO1VBRXZDSSxPQUFPLENBQUNDLEdBQUcsQ0FBQUwsU0FBQSxDQUFBWCxFQUFNLENBQUM7VUFDbEI3QixHQUFHLENBQUNxQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFdkgsS0FBSyxFQUFFeUksU0FBQSxDQUFBWCxFQUFBLENBQWlCTjtVQUFRLENBQUMsQ0FBQztRQUFBO1FBQUE7VUFBQSxPQUFBaUIsU0FBQSxDQUFBN0UsSUFBQTtNQUFBO0lBQUEsR0FBQXVFLFFBQUE7RUFBQSxDQUUxRDtFQUFBLGdCQXBCS0YsZ0JBQWdCQSxDQUFBYyxHQUFBLEVBQUFDLEdBQUE7SUFBQSxPQUFBZCxLQUFBLENBQUFoRCxLQUFBLE9BQUFHLFNBQUE7RUFBQTtBQUFBLEdBb0JyQjtBQUVELElBQU00RCxnQkFBZ0I7RUFBQSxJQUFBQyxLQUFBLEdBQUEzQyxpQkFBQSxlQUFBeEssbUJBQUEsR0FBQTZHLElBQUEsQ0FBRyxTQUFBdUcsU0FBT3ZDLEdBQVksRUFBRVgsR0FBYTtJQUFBLElBQUFtRCxVQUFBO0lBQUEsSUFBQWYsRUFBQSxFQUFBQyxTQUFBLEVBQUFlLGlCQUFBO0lBQUEsT0FBQXROLG1CQUFBLEdBQUF3QixJQUFBLFVBQUErTCxVQUFBQyxTQUFBO01BQUEsa0JBQUFBLFNBQUEsQ0FBQTlGLElBQUEsR0FBQThGLFNBQUEsQ0FBQXBJLElBQUE7UUFBQTtVQUNsRGtILEVBQUUsR0FBS3pCLEdBQUcsQ0FBQzhCLE1BQU0sQ0FBakJMLEVBQUU7VUFDSkMsU0FBUyxJQUFBYyxVQUFBLEdBQUd4QyxHQUFHLENBQUNRLElBQUksY0FBQWdDLFVBQUEsdUJBQVJBLFVBQUEsQ0FBVS9CLE1BQU07VUFBQWtDLFNBQUEsQ0FBQTlGLElBQUE7VUFBQThGLFNBQUEsQ0FBQXBJLElBQUE7VUFBQSxPQUdEc0csMkJBQWUsQ0FBQytCLGdCQUFnQixDQUFDO1lBQ2hFN0IsR0FBRyxFQUFFVSxFQUFFO1lBQ1BDLFNBQVMsRUFBVEE7VUFDRCxDQUFDLENBQUM7UUFBQTtVQUhJZSxpQkFBaUIsR0FBQUUsU0FBQSxDQUFBOUksSUFBQTtVQUFBLElBS2xCNEksaUJBQWlCO1lBQUFFLFNBQUEsQ0FBQXBJLElBQUE7WUFBQTtVQUFBO1VBQUEsT0FBQW9JLFNBQUEsQ0FBQTNJLE1BQUEsV0FDZHFGLEdBQUcsQ0FBQ3FCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUV2SCxLQUFLLEVBQUU7VUFBd0IsQ0FBQyxDQUFDO1FBQUE7VUFHaEVpRyxHQUFHLENBQUNxQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQzhCLGlCQUFpQixDQUFDO1VBQUFFLFNBQUEsQ0FBQXBJLElBQUE7VUFBQTtRQUFBO1VBQUFvSSxTQUFBLENBQUE5RixJQUFBO1VBQUE4RixTQUFBLENBQUF6QixFQUFBLEdBQUF5QixTQUFBO1VBRXZDdEQsR0FBRyxDQUFDcUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRXZILEtBQUssRUFBRXVKLFNBQUEsQ0FBQXpCLEVBQUEsQ0FBaUJOO1VBQVEsQ0FBQyxDQUFDO1FBQUE7UUFBQTtVQUFBLE9BQUErQixTQUFBLENBQUEzRixJQUFBO01BQUE7SUFBQSxHQUFBdUYsUUFBQTtFQUFBLENBRTFEO0VBQUEsZ0JBbEJLRixnQkFBZ0JBLENBQUFRLEdBQUEsRUFBQUMsR0FBQTtJQUFBLE9BQUFSLEtBQUEsQ0FBQWhFLEtBQUEsT0FBQUcsU0FBQTtFQUFBO0FBQUEsR0FrQnJCO0FBRUQsSUFBTXNFLGFBQWE7RUFBQSxJQUFBQyxLQUFBLEdBQUFyRCxpQkFBQSxlQUFBeEssbUJBQUEsR0FBQTZHLElBQUEsQ0FBRyxTQUFBaUgsU0FBT2pELEdBQVksRUFBRVgsR0FBYTtJQUFBLElBQUE2RCxVQUFBLEVBQUF6QixFQUFBLEVBQUEwQixRQUFBLEVBQUFDLE1BQUEsRUFBQUMsY0FBQSxFQUFBQyxjQUFBLEVBQUFDLFVBQUE7SUFBQSxPQUFBcE8sbUJBQUEsR0FBQXdCLElBQUEsVUFBQTZNLFVBQUFDLFNBQUE7TUFBQSxrQkFBQUEsU0FBQSxDQUFBNUcsSUFBQSxHQUFBNEcsU0FBQSxDQUFBbEosSUFBQTtRQUFBO1VBQUFrSixTQUFBLENBQUE1RyxJQUFBO1VBRTlDNEUsRUFBRSxHQUFLekIsR0FBRyxDQUFDOEIsTUFBTSxDQUFqQkwsRUFBRTtVQUNKMEIsUUFBUSxJQUFBRCxVQUFBLEdBQUdsRCxHQUFHLENBQUNRLElBQUksY0FBQTBDLFVBQUEsdUJBQVJBLFVBQUEsQ0FBVXpDLE1BQU07VUFDekIyQyxNQUFNLEdBQUtwRCxHQUFHLENBQUMwRCxLQUFLLENBQXBCTixNQUFNO1VBQUEsS0FJVkEsTUFBTTtZQUFBSyxTQUFBLENBQUFsSixJQUFBO1lBQUE7VUFBQTtVQUFBa0osU0FBQSxDQUFBbEosSUFBQTtVQUFBLE9BQ2NvSiwrQkFBbUIsQ0FBQ0MsSUFBSSxDQUFDO1lBQy9DUixNQUFNLEVBQUVELFFBQVE7WUFDaEJJLFVBQVUsRUFBRTlCO1VBQ2IsQ0FBQyxDQUFDO1FBQUE7VUFIRjRCLGNBQWMsR0FBQUksU0FBQSxDQUFBNUosSUFBQTtVQUlkeUosY0FBYyxHQUFHRCxjQUFjLENBQUM3SCxNQUFNLElBQUksQ0FBQztRQUFBO1VBQUFpSSxTQUFBLENBQUFsSixJQUFBO1VBQUEsT0FHbkJzRywyQkFBZSxDQUFDTixRQUFRLENBQUNrQixFQUFFLENBQUMsQ0FBQ29DLFFBQVEsQ0FBQztZQUM5REMsSUFBSSxFQUFFLFNBQVM7WUFDZkMsTUFBTSxFQUFFO1VBQ1QsQ0FBQyxDQUFDO1FBQUE7VUFISVIsVUFBVSxHQUFBRSxTQUFBLENBQUE1SixJQUFBO1VBQUEsSUFLWDBKLFVBQVU7WUFBQUUsU0FBQSxDQUFBbEosSUFBQTtZQUFBO1VBQUE7VUFBQSxPQUFBa0osU0FBQSxDQUFBekosTUFBQSxXQUNQcUYsR0FBRyxDQUFDcUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRXZILEtBQUssRUFBRTtVQUF3QixDQUFDLENBQUM7UUFBQTtVQUdoRWlHLEdBQUcsQ0FBQ3FCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQ3BCNEMsVUFBVSxFQUFWQSxVQUFVO1lBQ1ZELGNBQWMsRUFBZEE7VUFDRCxDQUFDLENBQUM7VUFBQUcsU0FBQSxDQUFBbEosSUFBQTtVQUFBO1FBQUE7VUFBQWtKLFNBQUEsQ0FBQTVHLElBQUE7VUFBQTRHLFNBQUEsQ0FBQXZDLEVBQUEsR0FBQXVDLFNBQUE7VUFFRnBFLEdBQUcsQ0FBQ3FCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUV2SCxLQUFLLEVBQUVxSyxTQUFBLENBQUF2QyxFQUFBLENBQWlCTjtVQUFRLENBQUMsQ0FBQztRQUFBO1FBQUE7VUFBQSxPQUFBNkMsU0FBQSxDQUFBekcsSUFBQTtNQUFBO0lBQUEsR0FBQWlHLFFBQUE7RUFBQSxDQUUxRDtFQUFBLGdCQWhDS0YsYUFBYUEsQ0FBQWlCLEdBQUEsRUFBQUMsR0FBQTtJQUFBLE9BQUFqQixLQUFBLENBQUExRSxLQUFBLE9BQUFHLFNBQUE7RUFBQTtBQUFBLEdBZ0NsQjtBQUVELElBQU15RixpQkFBaUI7RUFBQSxJQUFBQyxLQUFBLEdBQUF4RSxpQkFBQSxlQUFBeEssbUJBQUEsR0FBQTZHLElBQUEsQ0FBRyxTQUFBb0ksU0FBT3BFLEdBQVksRUFBRVgsR0FBYTtJQUFBLElBQUFnRixJQUFBLEVBQUFDLEtBQUEsRUFBQUMsU0FBQSxFQUFBQyxNQUFBLEVBQUFDLE9BQUEsRUFBQUMsaUJBQUEsRUFBQUMsaUJBQUEsRUFBQUMsV0FBQSxFQUFBQyxlQUFBLEVBQUFDLFNBQUEsRUFBQUMsU0FBQSxFQUFBQyxVQUFBLEVBQUFDLFlBQUEsRUFBQUMsZUFBQSxFQUFBQyxRQUFBLEVBQUFDLFdBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsVUFBQTtJQUFBLE9BQUFuUSxtQkFBQSxHQUFBd0IsSUFBQSxVQUFBNE8sVUFBQUMsU0FBQTtNQUFBLGtCQUFBQSxTQUFBLENBQUEzSSxJQUFBLEdBQUEySSxTQUFBLENBQUFqTCxJQUFBO1FBQUE7VUFDckQ4SixJQUFJLEdBQUdvQixRQUFRLENBQUN6RixHQUFHLENBQUMwRCxLQUFLLENBQUNXLElBQWMsQ0FBQyxJQUFJLENBQUM7VUFDOUNDLEtBQUssR0FBR21CLFFBQVEsQ0FBQ3pGLEdBQUcsQ0FBQzBELEtBQUssQ0FBQ1ksS0FBZSxDQUFDLElBQUksRUFBRSxFQUV2RDtVQUNNQyxTQUFTLEdBQUdtQixLQUFLLENBQUNDLE9BQU8sQ0FBQzNGLEdBQUcsQ0FBQzBELEtBQUssQ0FBQ2EsU0FBUyxDQUFDLEdBQ2pEdkUsR0FBRyxDQUFDMEQsS0FBSyxDQUFDYSxTQUFTLEdBQ25CLENBQUN2RSxHQUFHLENBQUMwRCxLQUFLLENBQUNhLFNBQVMsQ0FBQztVQUNsQkMsTUFBTSxHQUFHaUIsUUFBUSxDQUFDekYsR0FBRyxDQUFDMEQsS0FBSyxDQUFDYyxNQUFnQixDQUFDO1VBQzdDQyxPQUFPLEdBQUd6RSxHQUFHLENBQUMwRCxLQUFLLENBQUNlLE9BQU87VUFDM0JDLGlCQUFpQixHQUFHMUUsR0FBRyxDQUFDMEQsS0FBSyxDQUFDZ0IsaUJBQWlCO1VBQy9DQyxpQkFBaUIsR0FDdEJpQixVQUFVLENBQUM1RixHQUFHLENBQUMwRCxLQUFLLENBQUNpQixpQkFBMkIsQ0FBQyxJQUFJLEVBQUU7VUFDbERDLFdBQVcsR0FBRzVFLEdBQUcsQ0FBQzBELEtBQUssQ0FBQ2tCLFdBQVc7VUFDbkNDLGVBQWUsR0FBRzdFLEdBQUcsQ0FBQzBELEtBQUssQ0FBQ21CLGVBQWU7VUFDM0NDLFNBQVMsR0FBRzlFLEdBQUcsQ0FBQzBELEtBQUssQ0FBQ21DLE1BQU0sRUFBVztVQUN2Q2QsU0FBUyxHQUFHVSxRQUFRLENBQUN6RixHQUFHLENBQUMwRCxLQUFLLENBQUNvQyxLQUFlLENBQUMsSUFBSSxDQUFDLEVBQUM7VUFDM0Q7VUFDTWQsVUFBZSxHQUFHLENBQUMsQ0FBQztVQUMxQkEsVUFBVSxDQUFDZSxNQUFNLEdBQUc7WUFDbkJDLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRTdMLFNBQVM7VUFDdkIsQ0FBQztVQUNELElBQUlvSyxTQUFTLENBQUMvSSxNQUFNLEdBQUcsQ0FBQyxJQUFJK0ksU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJcEssU0FBUyxFQUNwRDZLLFVBQVUsQ0FBQ1QsU0FBUyxHQUFHO1lBQUV5QixHQUFHLEVBQUV6QjtVQUFVLENBQUM7VUFDMUMsSUFBSUMsTUFBTSxFQUFFUSxVQUFVLENBQUNpQixPQUFPLEdBQUc7WUFBRUMsSUFBSSxFQUFFMUI7VUFBTyxDQUFDO1VBQ2pELElBQUlDLE9BQU8sRUFBRU8sVUFBVSxDQUFDdE4sSUFBSSxHQUFHO1lBQUVzTyxHQUFHLEVBQUV2QjtVQUFRLENBQUM7VUFDL0NPLFVBQVUsQ0FBQ21CLEtBQUssR0FBRztZQUFFRCxJQUFJLEVBQUUsSUFBSUUsSUFBSSxDQUFDO1VBQUUsQ0FBQztVQUVqQ25CLFlBQVksR0FDakJQLGlCQUFpQixJQUFJQyxpQkFBaUIsR0FDbkM7WUFDQTBCLFFBQVEsRUFBRTtjQUNUQyxJQUFJLEVBQUU7Z0JBQ0w1TyxJQUFJLEVBQUUsT0FBTztnQkFDYjZPLFdBQVcsRUFBRSxDQUNaWCxVQUFVLENBQUNsQixpQkFBaUIsQ0FBQzhCLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUMzQ1osVUFBVSxDQUFDbEIsaUJBQWlCLENBQUM4QixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Y0FFN0MsQ0FBQztjQUNEQyxhQUFhLEVBQUUsVUFBVTtjQUN6QkMsU0FBUyxFQUFFLElBQUk7Y0FDZkMsV0FBVyxFQUFFaEMsaUJBQWlCLEdBQUcsT0FBTyxDQUFFO1lBQzNDO1VBQ0EsQ0FBQyxHQUNELElBQUk7VUFFRk8sZUFBZSxHQUFHRCxZQUFZLEdBQ2pDO1lBQUUyQixRQUFRLEVBQUU7Y0FBRTFHLE9BQU8sRUFBRSxDQUFDO2NBQUUyRyxRQUFRLEVBQUU7WUFBRTtVQUFFLENBQUMsR0FDekM7WUFBRUQsUUFBUSxFQUFFO2NBQUUxRyxPQUFPLEVBQUU7WUFBRTtVQUFFLENBQUM7VUFFekJpRixRQUFRLEdBQUcsQ0FDaEJGLFlBQVksRUFDWjNQLE1BQU0sQ0FBQ2lILElBQUksQ0FBQ3lJLFVBQVUsQ0FBQyxDQUFDeEosTUFBTSxHQUFHLENBQUMsR0FBRztZQUFFc0wsTUFBTSxFQUFFOUI7VUFBVyxDQUFDLEdBQUcsSUFBSSxFQUNsRTtZQUNDK0IsT0FBTyxFQUFFO2NBQ1JDLElBQUksRUFBRSxXQUFXO2NBQ2pCQyxVQUFVLEVBQUUsU0FBUztjQUNyQkMsWUFBWSxFQUFFLEtBQUs7Y0FDbkJDLEVBQUUsRUFBRTtZQUNMO1VBQ0QsQ0FBQyxFQUNEO1lBQUVDLE9BQU8sRUFBRTtVQUFXLENBQUM7VUFBRTtVQUN6QjtZQUNDQyxVQUFVLEVBQUU7Y0FDWEMsV0FBVyxFQUFFLGVBQWU7Y0FDNUJ6QyxlQUFlLEVBQUUsbUJBQW1CO2NBQ3BDMEMsZUFBZSxFQUFFdEMsWUFBWSxHQUMxQjtnQkFBRXVDLE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBRSxPQUFPO2NBQUUsQ0FBQyxHQUNuQ3JOLFNBQVMsQ0FBRTtZQUNmO1VBQ0QsQ0FBQyxFQUNBLEtBQUssSUFBSXlLLFdBQVcsSUFBS0MsZUFBZSxHQUN0QztZQUNBaUMsTUFBTSxFQUFBdkksYUFBQSxDQUFBQSxhQUFBLEtBQ0RxRyxXQUFXLElBQUk7Y0FDbEIsY0FBYyxFQUFFO2dCQUFFNkMsTUFBTSxFQUFFLElBQUlDLE1BQU0sS0FBQUMsTUFBQSxDQUFLL0MsV0FBVyxRQUFLLEdBQUc7Y0FBRTtZQUMvRCxDQUFDLEdBQ0dDLGVBQWUsSUFBSTtjQUFFLGtCQUFrQixFQUFFQTtZQUFnQixDQUFDO1VBRS9ELENBQUMsR0FDRCxJQUFJLEVBQ1BLLGVBQWUsRUFDZjtZQUFFMEMsS0FBSyxFQUFBakosZUFBQSxLQUFLbUcsU0FBUyxFQUFHQyxTQUFTO1VBQUcsQ0FBQztVQUFFO1VBQ3ZDO1lBQUU4QyxLQUFLLEVBQUUsQ0FBQ3hELElBQUksR0FBRyxDQUFDLElBQUlDO1VBQU0sQ0FBQyxFQUM3QjtZQUFFd0QsTUFBTSxFQUFFeEQ7VUFBTSxDQUFDLENBQ2pCLENBQUNuRyxNQUFNLENBQUM0SixPQUFPLENBQUMsRUFBQztVQUFBdkMsU0FBQSxDQUFBM0ksSUFBQTtVQUFBMkksU0FBQSxDQUFBakwsSUFBQTtVQUFBLE9BR1NzRywyQkFBZSxDQUFDbUgsU0FBUyxDQUFDN0MsUUFBZSxDQUFDO1FBQUE7VUFBOURDLFdBQVcsR0FBQUksU0FBQSxDQUFBM0wsSUFBQTtVQUFBMkwsU0FBQSxDQUFBakwsSUFBQTtVQUFBLE9BRWNzRywyQkFBZSxDQUFDb0gsY0FBYyxDQUFDakQsVUFBVSxDQUFDO1FBQUE7VUFBbkVLLGdCQUFnQixHQUFBRyxTQUFBLENBQUEzTCxJQUFBO1VBQ2hCeUwsVUFBVSxHQUFHNEMsSUFBSSxDQUFDQyxJQUFJLENBQUM5QyxnQkFBZ0IsR0FBR2YsS0FBSyxDQUFDO1VBRXREakYsR0FBRyxDQUFDc0IsSUFBSSxDQUFDO1lBQ1IyRSxVQUFVLEVBQVZBLFVBQVU7WUFDVjhDLFdBQVcsRUFBRS9ELElBQUk7WUFDakJlLFdBQVcsRUFBWEE7VUFDRCxDQUFDLENBQUM7VUFBQUksU0FBQSxDQUFBakwsSUFBQTtVQUFBO1FBQUE7VUFBQWlMLFNBQUEsQ0FBQTNJLElBQUE7VUFBQTJJLFNBQUEsQ0FBQXRFLEVBQUEsR0FBQXNFLFNBQUE7VUFFRm5HLEdBQUcsQ0FBQ3FCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUV2SCxLQUFLLEVBQUVvTSxTQUFBLENBQUF0RSxFQUFBLENBQWlCTjtVQUFRLENBQUMsQ0FBQztRQUFBO1FBQUE7VUFBQSxPQUFBNEUsU0FBQSxDQUFBeEksSUFBQTtNQUFBO0lBQUEsR0FBQW9ILFFBQUE7RUFBQSxDQUUxRDtFQUFBLGdCQXJHS0YsaUJBQWlCQSxDQUFBbUUsR0FBQSxFQUFBQyxJQUFBO0lBQUEsT0FBQW5FLEtBQUEsQ0FBQTdGLEtBQUEsT0FBQUcsU0FBQTtFQUFBO0FBQUEsR0FxR3RCO0FBRUQsSUFBTThKLGtCQUFrQjtFQUFBLElBQUFDLEtBQUEsR0FBQTdJLGlCQUFBLGVBQUF4SyxtQkFBQSxHQUFBNkcsSUFBQSxDQUFHLFNBQUF5TSxTQUFPekksR0FBWSxFQUFFWCxHQUFhO0lBQUEsSUFBQXFKLFVBQUEsRUFBQWhILFNBQUEsRUFBQWlILFlBQUEsRUFBQXBGLFVBQUEsRUFBQXFGLFlBQUE7SUFBQSxPQUFBelQsbUJBQUEsR0FBQXdCLElBQUEsVUFBQWtTLFVBQUFDLFNBQUE7TUFBQSxrQkFBQUEsU0FBQSxDQUFBak0sSUFBQSxHQUFBaU0sU0FBQSxDQUFBdk8sSUFBQTtRQUFBO1VBQUF1TyxTQUFBLENBQUFqTSxJQUFBO1VBRXJENkUsU0FBUyxJQUFBZ0gsVUFBQSxHQUFHMUksR0FBRyxDQUFDUSxJQUFJLGNBQUFrSSxVQUFBLHVCQUFSQSxVQUFBLENBQVVqSSxNQUFNO1VBRTVCa0ksWUFBWSxHQUFHM0ksR0FBRyxDQUFDOEIsTUFBTSxDQUFDTCxFQUFFO1VBQUFxSCxTQUFBLENBQUF2TyxJQUFBO1VBQUEsT0FFV3NHLDJCQUFlLENBQUNOLFFBQVEsQ0FDcEVvSSxZQUNELENBQUM7UUFBQTtVQUZLcEYsVUFBOEIsR0FBQXVGLFNBQUEsQ0FBQWpQLElBQUE7VUFBQSxJQUkvQjBKLFVBQVU7WUFBQXVGLFNBQUEsQ0FBQXZPLElBQUE7WUFBQTtVQUFBO1VBQUEsT0FBQXVPLFNBQUEsQ0FBQTlPLE1BQUEsV0FDUHFGLEdBQUcsQ0FBQ3FCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLE9BQU8sRUFBRTtVQUF3QixDQUFDLENBQUM7UUFBQTtVQUFBLE1BRzlEYyxTQUFTLElBQUk2QixVQUFVLENBQUNyRCxPQUFPO1lBQUE0SSxTQUFBLENBQUF2TyxJQUFBO1lBQUE7VUFBQTtVQUFBLE9BQUF1TyxTQUFBLENBQUE5TyxNQUFBLFdBQzNCcUYsR0FBRyxDQUNScUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUNYQyxJQUFJLENBQUM7WUFBRUMsT0FBTyxFQUFFO1VBQWtDLENBQUMsQ0FBQztRQUFBO1VBQUFrSSxTQUFBLENBQUF2TyxJQUFBO1VBQUEsT0FJaERvSiwrQkFBbUIsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVMLFVBQVUsRUFBRW9GO1VBQWEsQ0FBQyxDQUFDLENBQUM5RSxRQUFRLENBQ3BFLFFBQ0QsQ0FBQztRQUFBO1VBSEkrRSxZQUFzQyxHQUFBRSxTQUFBLENBQUFqUCxJQUFBO1VBQUEsSUFLdkMrTyxZQUFZO1lBQUFFLFNBQUEsQ0FBQXZPLElBQUE7WUFBQTtVQUFBO1VBQUEsT0FBQXVPLFNBQUEsQ0FBQTlPLE1BQUEsV0FDVHFGLEdBQUcsQ0FDUnFCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FDWEMsSUFBSSxDQUFDO1lBQUVDLE9BQU8sRUFBRTtVQUF3QyxDQUFDLENBQUM7UUFBQTtVQUc3RDtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBdkIsR0FBRyxDQUFDcUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRWlJLFlBQVksRUFBWkEsWUFBWTtZQUFFRyxPQUFPLEVBQUV4RixVQUFVLENBQUN4SDtVQUFLLENBQUMsQ0FBQztVQUFBK00sU0FBQSxDQUFBdk8sSUFBQTtVQUFBO1FBQUE7VUFBQXVPLFNBQUEsQ0FBQWpNLElBQUE7VUFBQWlNLFNBQUEsQ0FBQTVILEVBQUEsR0FBQTRILFNBQUE7VUFFaEV6SixHQUFHLENBQUNxQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUNwQkMsT0FBTyxFQUFFLG9EQUFvRDtZQUM3RHhILEtBQUssRUFBQTBQLFNBQUEsQ0FBQTVIO1VBQ04sQ0FBQyxDQUFDO1FBQUE7UUFBQTtVQUFBLE9BQUE0SCxTQUFBLENBQUE5TCxJQUFBO01BQUE7SUFBQSxHQUFBeUwsUUFBQTtFQUFBLENBRUg7RUFBQSxnQkE1Q0tGLGtCQUFrQkEsQ0FBQVMsSUFBQSxFQUFBQyxJQUFBO0lBQUEsT0FBQVQsS0FBQSxDQUFBbEssS0FBQSxPQUFBRyxTQUFBO0VBQUE7QUFBQSxHQTRDdkI7QUFFRCxJQUFNeUssb0JBQW9CO0VBQUEsSUFBQUMsS0FBQSxHQUFBeEosaUJBQUEsZUFBQXhLLG1CQUFBLEdBQUE2RyxJQUFBLENBQUcsU0FBQW9OLFNBQU9wSixHQUFZLEVBQUVYLEdBQWE7SUFBQSxJQUFBZ0ssaUJBQUE7SUFBQSxPQUFBbFUsbUJBQUEsR0FBQXdCLElBQUEsVUFBQTJTLFVBQUFDLFNBQUE7TUFBQSxrQkFBQUEsU0FBQSxDQUFBMU0sSUFBQSxHQUFBME0sU0FBQSxDQUFBaFAsSUFBQTtRQUFBO1VBQUFnUCxTQUFBLENBQUFoUCxJQUFBO1VBQUEsT0FFeEQrRix3QkFBWSxDQUFDa0osYUFBYSxDQUFDLENBQUMsU0FBTSxDQUFDLFVBQUM5UyxHQUFHO1lBQUEsT0FBS3VMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDeEwsR0FBRyxDQUFDO1VBQUEsRUFBQztRQUFBO1VBQUE2UyxTQUFBLENBQUFoUCxJQUFBO1VBQUEsT0FDbkMrRix3QkFBWSxDQUFDc0QsSUFBSSxDQUFDO1lBQ2pENUMsUUFBUSxFQUFFO2NBQ1R5SSxLQUFLLEVBQUU7Z0JBQ05DLFNBQVMsRUFBRTtrQkFDVmhTLElBQUksRUFBRSxPQUFPO2tCQUNiNk8sV0FBVyxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUU7Z0JBQ25DO2dCQUNBO2dCQUNBO2NBQ0Q7WUFDRDtVQUNELENBQUMsQ0FBQztRQUFBO1VBWEk4QyxpQkFBaUIsR0FBQUUsU0FBQSxDQUFBMVAsSUFBQTtVQUFBLE9BQUEwUCxTQUFBLENBQUF2UCxNQUFBLFdBYWhCcUYsR0FBRyxDQUFDc0IsSUFBSSxDQUFDMEksaUJBQWlCLENBQUM7UUFBQTtRQUFBO1VBQUEsT0FBQUUsU0FBQSxDQUFBdk0sSUFBQTtNQUFBO0lBQUEsR0FBQW9NLFFBQUE7RUFBQSxDQUNsQztFQUFBLGdCQWpCS0Ysb0JBQW9CQSxDQUFBUyxJQUFBLEVBQUFDLElBQUE7SUFBQSxPQUFBVCxLQUFBLENBQUE3SyxLQUFBLE9BQUFHLFNBQUE7RUFBQTtBQUFBLEdBaUJ6QjtBQUVELElBQU1vTCxvQkFBb0IsR0FBRztFQUM1QmhLLGdCQUFnQixFQUFoQkEsZ0JBQWdCO0VBQ2hCd0IsZ0JBQWdCLEVBQWhCQSxnQkFBZ0I7RUFDaEJnQixnQkFBZ0IsRUFBaEJBLGdCQUFnQjtFQUNoQjZCLGlCQUFpQixFQUFqQkEsaUJBQWlCO0VBQ2pCcUUsa0JBQWtCLEVBQWxCQSxrQkFBa0I7RUFDbEJ4RixhQUFhLEVBQWJBLGFBQWE7RUFDYm1HLG9CQUFvQixFQUFwQkE7QUFDRCxDQUFDO0FBQUEsSUFBQVksUUFBQSxHQUVjRCxvQkFBb0I7QUFBQXpVLE9BQUEsY0FBQTBVLFFBQUEifQ==