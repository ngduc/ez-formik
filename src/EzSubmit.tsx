import * as React from 'react';

const EzSubmit = (props: any) => {
  return (
    <button type="submit" className="ez-btn ez-btn--filled ez-btn--primary ez-submit" {...props}>
      {props.children || 'Submit'}
    </button>
  );
};

export default EzSubmit;
