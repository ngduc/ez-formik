import * as React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import DisplayFormikState from './DisplayFormikState';

import EzForm from './EzForm';
import EzField from './EzField';
import EzButton from './EzButton';

const schema = Yup.object().shape({
  email: Yup.string().required('Email is required!'),
  dob: Yup.string().required('Birthday is required!')
});

export default class extends React.Component {
  state: any = {};

  onSubmit = (values: any, { setSubmitting }: any) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 800);
    setSubmitting(true);
  }

  renderForm = (props: any) => (
    <EzForm use="spectre">
      <EzField>Email | email</EzField>
      <EzField>Birthday | Date of birth (mm/dd/yyyy) | dob</EzField>

      <EzButton type="submit" disabled={props.isSubmitting} />
      <EzButton gap={10} disabled>Cancel</EzButton>

      <DisplayFormikState {...props} />
    </EzForm>
  )

  renderHorizontalForm = (props: any) => {
    const css = {
      label: 'col-3 col-sm-12',
      control: 'col-9 col-sm-12',
      error: 'left25pct'
    }
    return (
      <EzForm use="spectre" css={css}>
        <EzField>Email | email</EzField>
        <EzField>Birthday | Date of birth (mm/dd/yyyy) | dob</EzField>

        <EzButton leftGap={'25%'} type="submit" disabled={props.isSubmitting} />
        <EzButton gap={10} disabled>Cancel</EzButton>

        <DisplayFormikState {...props} />
      </EzForm>
    )
  }

  render() {
    return (
      <div>
        <Formik
          initialValues={{}}
          validationSchema={schema}
          onSubmit={this.onSubmit}
          render={this.renderForm}
        />

        <hr />
        <h3>Horizontal Form</h3>
        <Formik
          initialValues={{}}
          validationSchema={schema}
          onSubmit={this.onSubmit}
          render={this.renderHorizontalForm}
        />
      </div>
    );
  }
}
