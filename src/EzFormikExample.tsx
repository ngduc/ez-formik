import * as React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import EzField from './EzField';
import EzSubmit from './EzSubmit';

const schema = Yup.object().shape({
  email: Yup.string().required('Email is required!'),
  dob: Yup.string().required('Birthday is required!')
});

export default class extends React.Component {
  state: any = {};

  render() {
    return (
      <div>
        <Formik
          initialValues={{}}
          validationSchema={schema}
          onSubmit={(values: any, { setSubmitting }: any) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 500);
            setSubmitting(false);
          }}
          render={() => (
            <Form>
              <EzField>Email | email</EzField>
              <EzField>Birthday | Date of birth (mm/dd/yyyy) | dob</EzField>
              <EzSubmit />
            </Form>
          )}
        />
      </div>
    );
  }
}
