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
var formik_1 = require("formik");
var Yup = require("yup");
var DisplayFormikState_1 = require("./DisplayFormikState");
var EzForm_1 = require("./EzForm");
var EzField_1 = require("./EzField");
var EzButton_1 = require("./EzButton");
var schema = Yup.object().shape({
    email: Yup.string().required('Email is required!'),
    dob: Yup.string().required('Birthday is required!')
});
var default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        _this.onSubmit = function (values, _a) {
            var setSubmitting = _a.setSubmitting;
            setTimeout(function () {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }, 800);
            setSubmitting(true);
        };
        _this.renderForm = function (props) { return (React.createElement(EzForm_1["default"], { use: "spectre" },
            React.createElement(EzField_1["default"], null, "Email | email"),
            React.createElement(EzField_1["default"], null, "Birthday | Date of birth (mm/dd/yyyy) | dob"),
            React.createElement(EzButton_1["default"], { type: "submit", disabled: props.isSubmitting }),
            React.createElement(EzButton_1["default"], { gap: 10, disabled: true }, "Cancel"),
            React.createElement(DisplayFormikState_1["default"], __assign({}, props)))); };
        _this.renderHorizontalForm = function (props) {
            var css = {
                label: 'col-3 col-sm-12',
                control: 'col-9 col-sm-12',
                error: 'left25pct'
            };
            return (React.createElement(EzForm_1["default"], { use: "spectre", css: css },
                React.createElement(EzField_1["default"], null, "Email | email"),
                React.createElement(EzField_1["default"], null, "Birthday | Date of birth (mm/dd/yyyy) | dob"),
                React.createElement(EzButton_1["default"], { leftGap: '25%', type: "submit", disabled: props.isSubmitting }),
                React.createElement(EzButton_1["default"], { gap: 10, disabled: true }, "Cancel"),
                React.createElement(DisplayFormikState_1["default"], __assign({}, props))));
        };
        return _this;
    }
    default_1.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(formik_1.Formik, { initialValues: {}, validationSchema: schema, onSubmit: this.onSubmit, render: this.renderForm }),
            React.createElement("hr", null),
            React.createElement("h3", null, "Horizontal Form"),
            React.createElement(formik_1.Formik, { initialValues: {}, validationSchema: schema, onSubmit: this.onSubmit, render: this.renderHorizontalForm })));
    };
    return default_1;
}(React.Component));
exports["default"] = default_1;
