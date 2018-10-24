"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var formik_1 = require("formik");
var Yup = require("yup");
var EzField_1 = require("./EzField");
var EzSubmit_1 = require("./EzSubmit");
var default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        return _this;
    }
    default_1.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(formik_1.Formik, { initialValues: {}, validationSchema: Yup.object().shape({
                    email: Yup.string().required('Email is required!'),
                    dob: Yup.string().required('Birthday is required!')
                }), onSubmit: function (values, _a) {
                    var setSubmitting = _a.setSubmitting;
                    setTimeout(function () {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 500);
                    setSubmitting(false);
                }, render: function () { return (React.createElement(formik_1.Form, null,
                    React.createElement(EzField_1["default"], null, "Email | email"),
                    React.createElement(EzField_1["default"], null, "Birthday | Date of birth (mm/dd/yyyy) | dob"),
                    React.createElement(EzSubmit_1["default"], null))); } })));
    };
    return default_1;
}(React.Component));
exports["default"] = default_1;
