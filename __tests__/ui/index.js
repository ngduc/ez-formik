import React, { Component } from 'react';
import { render } from 'react-dom';

import '../../lib/css/spectre.css';
import '../../lib/css/styles.css';
import { EzFormikExample } from '../../lib';

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>ez-formik</h1>
        <EzFormikExample />
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#app'));
