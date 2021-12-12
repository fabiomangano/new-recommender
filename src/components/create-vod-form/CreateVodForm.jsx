import React from 'react';
import * as Yup from 'yup';
import { Formik, Field, Form } from 'formik';
import SelectField from '../select-field/SelectField';
import DatePicker from '../date-picker/DatePicker';
import Button from '../button/Button';
import Slot from '../slot/Slot';
import style from './CreateVodForm.module.css';

const clusters = [
  { value: 'cluster 1', label: 'Cluster 1' },
  { value: 'cluster 2', label: 'Cluster 2' },
];

const initialValues = {
  cluster: '',
};

const validationSchema = Yup.object().shape({
  cluster: Yup.string().required('cluster is required'),
});

const CreateVodForm = () => {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className={style.bar}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Field
                  name="cluster"
                  label="Cluster: "
                  placeholder="select a cluster..."
                  component={SelectField}
                  options={clusters}
                />
                {errors.cluster && touched.cluster ? (
                  <div>{errors.cluster}</div>
                ) : null}
                &nbsp;&nbsp;&nbsp;
                <Field
                  name="startDate"
                  label="Start Date: "
                  component={DatePicker}
                  placeholder="select a date..."
                />
              </div>
              <Button>Load Recs</Button>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '60px',
              }}
            >
              <Slot />
              <Slot />
              <Slot />
              <Slot />
              <Slot />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateVodForm;
