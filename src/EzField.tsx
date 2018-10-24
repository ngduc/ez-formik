import * as React from 'react';
import { connect, FastField } from 'formik';

const EzFieldComp = (props: any) => {
  if (!props.children) {
    throw 'EzField is being used incorrectly: missing props.children';
    return null;
  }
  const arr = props.children.split('|').map((item: string) => item.trim());
  const fieldName = arr[arr.length - 1];
  const placeholder = arr.length === 3 ? arr[1] : '';

  const errors = props.formik.errors;
  const hasErrors =
    typeof props.formik.errors[fieldName] !== 'undefined' &&
    (props.formik.touched[fieldName] || props.formik.submitCount > 0);
  return (
    <div>
      <label htmlFor={fieldName} className="ez-label">
        {arr[0]}
      </label>
      <FastField
        name={fieldName}
        placeholder={placeholder}
        onChange={props.formik.handleChange}
        validate={props.validate}
        className={`ez-field ${hasErrors ? 'ez-field-error' : ''}`}
      />
      {hasErrors && <span className="ez-error">{errors[fieldName]}</span>}
      {/* <ErrorMessage name={fieldName} /> */}
    </div>
  );
};
const EzField = connect(EzFieldComp);

export default EzField;
