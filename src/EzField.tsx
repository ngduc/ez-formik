import * as React from 'react';
import { connect, FastField, FormikContext } from 'formik';

const getClasses = (use: string) => {
  const defaults = {
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

const EzField = (props: any) => {
  if (!props.children) {
    throw 'EzField is being used incorrectly: missing props.children';
    return null;
  }
  const arr = props.children.split('|').map((item: string) => item.trim());
  const fieldName = arr[arr.length - 1];
  const placeholder = arr.length === 3 ? arr[1] : '';

  const errors = props.formik.errors;
  const hasErrors =
    props.formik.errors.hasOwnProperty(fieldName) &&
    (props.formik.touched.hasOwnProperty(fieldName) || props.formik.submitCount > 0);

  const classes = getClasses(props.formik.ezUse);
  const css = props.formik.ezCss || {}
  const labelCss = css.label || props.labelCss || ''
  const labelClass = labelCss ? `${classes.label} ${labelCss}` : classes.label

  const controlCss = css.control || props.controlCss || ''
  const controlClass = controlCss ? `${classes.control} ${controlCss}` : classes.control

  const errorCss = css.error || props.errorCss || ''
  const errorClass = errorCss ? `${classes.error} ${errorCss}` : classes.error
  return (
    <div className={classes.group}>
      <label htmlFor={fieldName} className={labelClass}>
        {arr[0]}
      </label>
      <FastField
        name={fieldName}
        placeholder={placeholder}
        onChange={props.formik.handleChange}
        validate={props.validate}
        className={`${controlClass} ${hasErrors ? classes.invalidControl : ''}`}
      />
      {hasErrors && <span className={errorClass}>{errors[fieldName]}</span>}
    </div>
  );
};
export default connect(EzField);
