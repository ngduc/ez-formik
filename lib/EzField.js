"use strict";
exports.__esModule = true;
var React = require("react");
var formik_1 = require("formik");
var EzFieldComp = function (props) {
    if (!props.children) {
        throw 'EzField is being used incorrectly: missing props.children';
        return null;
    }
    var arr = props.children.split('|').map(function (item) { return item.trim(); });
    var fieldName = arr[arr.length - 1];
    var placeholder = arr.length === 3 ? arr[1] : '';
    var errors = props.formik.errors;
    var hasErrors = typeof props.formik.errors[fieldName] !== 'undefined' &&
        (props.formik.touched[fieldName] || props.formik.submitCount > 0);
    return (React.createElement("div", null,
        React.createElement("label", { htmlFor: fieldName, className: "ez-label" }, arr[0]),
        React.createElement(formik_1.FastField, { name: fieldName, placeholder: placeholder, onChange: props.formik.handleChange, validate: props.validate, className: "ez-field " + (hasErrors ? 'ez-field-error' : '') }),
        hasErrors && React.createElement("span", { className: "ez-error" }, errors[fieldName])));
};
var EzField = formik_1.connect(EzFieldComp);
exports["default"] = EzField;
