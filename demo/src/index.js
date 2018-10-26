import React, { Component } from 'react';
import { render } from 'react-dom';
import './styles.css';

// import '../../lib/css/bootstrap4.css';
import '../../lib/css/spectre.css';
import '../../lib/css/styles.css'; // default Theme
import { EzFormikExample } from '../../lib';

class Demo extends Component {
  render() {
    return (
      <div style={{ width: '70%' }}>
        <h1>ez-formik</h1>
        <EzFormikExample />
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
