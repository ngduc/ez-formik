import * as React from 'react';
import { connect, FormikContext } from 'formik';

const getClasses = (use: string) => {
  const defaults = {
    primary: 'ez-btn ez-btn--filled ez-btn--primary ez-submit',
    secondary: 'ez-btn ez-btn--filled'
  };
  if (use === 'bootstrap') {
    defaults.primary = 'btn btn-primary';
    defaults.secondary = 'btn btn-secondary';
  }
  if (use === 'spectre') {
    defaults.primary = 'btn btn-primary';
    defaults.secondary = 'btn btn-secondary';
  }
  return defaults;
};

// interface IProps {
//   type?: string;
//   submit?: any;
//   gap?: number;
//   formik: any; // FormikContext<{}>
//   children?: any;
// }

const EzButton = (props: any) => {
  const classes = getClasses(props.formik.ezUse);
  const isSubmit = props.submit || props.type === 'submit';
  const type = isSubmit ? 'submit' : 'button';
  const text = props.children ? props.children : isSubmit ? 'Submit' : 'Button';
  const style: any = {}
  if (props.gap) {
    style.marginLeft = props.gap
    style.marginRight = props.gap
  }
  if (props.leftGap) {
    style.marginLeft = props.leftGap;
  }
  if (props.rightGap) {
    style.marginRight = props.rightGap;
  }
  return (
    <button type={type} className={`${isSubmit ? classes.primary : classes.secondary}`} style={style} {...props}>
      {text}
    </button>
  );
};

export default connect(EzButton);
