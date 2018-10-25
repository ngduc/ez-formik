"use strict";
exports.__esModule = true;
var React = require("react");
var formik_1 = require("formik");
var getClasses = function (use) {
    var defaults = {
        group: '',
        label: 'ez-label',
        control: 'ez-field',
        invalidControl: 'ez-field-error',
        error: 'ez-error'
    };
    if (use === 'bootstrap') {
        defaults.group = 'form-group';
        defaults.control = 'form-control';
        defaults.invalidControl = 'is-invalid';
        defaults.error = 'invalid-feedback';
    }
    if (use === 'spectre') {
        defaults.group = 'form-group';
        defaults.label = 'form-label';
        defaults.control = 'form-input';
        defaults.invalidControl = 'is-error';
        defaults.error = 'form-input-hint';
    }
    return defaults;
};
var EzField = function (props) {
    if (!props.children) {
        throw 'EzField is being used incorrectly: missing props.children';
        return null;
    }
    var arr = props.children.split('|').map(function (item) { return item.trim(); });
    var fieldName = arr[arr.length - 1];
    var placeholder = arr.length === 3 ? arr[1] : '';
    var errors = props.formik.errors;
    var hasErrors = props.formik.errors.hasOwnProperty(fieldName) &&
        (props.formik.touched.hasOwnProperty(fieldName) || props.formik.submitCount > 0);
    var classes = getClasses(props.formik.ezUse);
    var css = props.formik.ezCss || {};
    var labelCss = css.label || props.labelCss || '';
    var labelClass = labelCss ? classes.label + " " + labelCss : classes.label;
    var controlCss = css.control || props.controlCss || '';
    var controlClass = controlCss ? classes.control + " " + controlCss : classes.control;
    var errorCss = css.error || props.errorCss || '';
    var errorClass = errorCss ? classes.error + " " + errorCss : classes.error;
    return (React.createElement("div", { className: classes.group },
        React.createElement("label", { htmlFor: fieldName, className: labelClass }, arr[0]),
        React.createElement(formik_1.FastField, { name: fieldName, placeholder: placeholder, onChange: props.formik.handleChange, validate: props.validate, className: controlClass + " " + (hasErrors ? classes.invalidControl : '') }),
        hasErrors && React.createElement("span", { className: errorClass }, errors[fieldName])));
};
exports["default"] = formik_1.connect(EzField);
