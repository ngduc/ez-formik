# ez-formik

Easy-to-use components to use with formik - hence the name ez-formik.

*"Let it take care of the work so you don't have to"*

### 🌟 Features

`Easy    Flexible    Fast    Layouts    Theme`

- Formik is easy, ez-formik is ...easier.
- Simplify Formik but will not stand in your way. You are still free to follow Formik at any point.
- Use FastField to avoid too many re-renders.
- Work with different CSS Frameworks / Form Layouts (Tentcss (default), Bootstrap, Spectre, etc.)

### 📦 Usage

```JS
$ npm install ez-formik

import { EzField, EzSubmit } from 'ez-formik';

<EzForm use="bootstrap">
  <EzField>Email | email</EzField>
  <EzField>Birthday | Date of birth (mm/dd/yyyy) | dob</EzField>

  <EzButton type="submit" />
  <EzButton>Cancel</EzButton>
</EzForm>
```

Result:

[![Screenshot](screenshot.png)](src/EzFormikExample.tsx)

### 📖 Documentation

[Change Log](/CHANGELOG.md)

### 🙌 Thanks

All contributions are welcome!