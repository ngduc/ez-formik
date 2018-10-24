"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var React = require("react");
var EzSubmit = function (props) {
    return (React.createElement("button", __assign({ type: "submit", className: "ez-btn ez-btn--filled ez-btn--primary ez-submit" }, props), props.children || 'Submit'));
};
exports["default"] = EzSubmit;
