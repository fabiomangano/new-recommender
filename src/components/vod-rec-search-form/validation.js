import * as Yup from 'yup';

export const initialValues = {
  title: '',
  selectedEvent: null,
};

export const validationSchema = Yup.object().shape({
  title: Yup.string(),
  selectedEvent: Yup.object().required(),
});
