import { FormEvent, useEffect, useState } from 'react';

type FormValues = Record<string, string>;
type FormTouched = Record<string, boolean>;
type FormErrors = Record<string, Record<string, boolean> | string>;
type ChangeFieldValue = (field: string, value: string) => void;
type ChangeFieldTouched = (field: string, value: boolean) => void;

type FormHookInput = {
  validate: (values: FormValues) => FormErrors;
  submit: (values: FormValues) => void;
}

type FormHookOutput = {
  values: FormValues;
  touched: FormTouched;
  errors: FormErrors;
  changeValue: ChangeFieldValue;
  changeTouched: ChangeFieldTouched;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const useForm = ({ validate, submit }: FormHookInput): FormHookOutput => {
  const [values, setValues] = useState<FormValues>({});
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
    if (Object.keys(errors).length > 0) return;
    submit(values);
  };

  return {
    values,
    errors,
    touched,
    changeValue,
    changeTouched,
    onSubmit,
  };
};

export default useForm;