"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var Invoice_js_1 = require("./classes/Invoice.js");
var Payment_js_1 = require("./classes/Payment.js");
var ListTemplate_js_1 = require("./classes/ListTemplate.js");
var form = document.querySelector('.new-item-form');
console.log(form.children);
// inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
// list template instance
var ul = document.querySelector('ul');
var list = new ListTemplate_js_1.ListTemplate(ul);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    var doc;
    if (type.value === 'invoice') {
        doc = new (Invoice_js_1.Invoice.bind.apply(Invoice_js_1.Invoice, __spreadArray([void 0], values, false)))();
    }
    else {
        doc = new (Payment_js_1.Payment.bind.apply(Payment_js_1.Payment, __spreadArray([void 0], values, false)))();
    }
    list.render(doc, type.value, 'end');
});
