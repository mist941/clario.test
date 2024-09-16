import { FormEvent, useEffect, useState } from 'react';

type FormValues = Record<string, string>;
type FormTouched = Record<string, boolean>;
type FormErrors = Record<string, boolean | string>;
type ChangeFieldValue = (field: string, value: string) => void;
type ChangeFieldTouched = (field: string, value: boolean) => void;

type FormHookInput = {
  validate: (values: FormValues) => FormErrors;
  submit: (values: FormValues) => void;
  initialValues: FormValues;
}

type FormHookOutput = {
  values: FormValues;
  touched: FormTouched;
  errors: FormErrors;
  changeValue: ChangeFieldValue;
  changeTouched: ChangeFieldTouched;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  resetForm: () => void;
}

const useForm = ({ validate, submit, initialValues = {} }: FormHookInput): FormHookOutput => {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<FormTouched>({});

  useEffect(() => {
    setErrors(validate(values));
  }, [values]);

  const changeValue: ChangeFieldValue = (field, value) => {
    setValues(prevState => ({ ...prevState, [field]: value }));
  };

  const changeTouched: ChangeFieldTouched = (field, value) => {
    setTouched(prevState => ({ ...prevState, [field]: value }));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const touched: FormTouched = {};
    Object.keys(values).forEach(key => {
      touched[key] = true;
    });
    setTouched(touched);
    setErrors(validate(values));
    if (Object.keys(errors).length > 0) return;
    submit(values);
  };

  const resetForm = () => {
    setErrors({});
    setTouched({});
    setValues(initialValues);
  };

  return {
    values,
    errors,
    touched,
    changeValue,
    changeTouched,
    onSubmit,
    resetForm,
  };
};

export default useForm;