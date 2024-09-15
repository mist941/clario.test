import { useState } from 'react';

type FormValues = Record<string, string>;
type FormTouched = Record<string, boolean>;
type FormErrors = Record<string, Record<string, boolean> | string>;
type ChangeFieldValue = (field: string, value: string) => void;

type FormHookResponse = {
  values: FormValues;
  touched: FormTouched;
  errors: FormErrors;
  changeValue: ChangeFieldValue;
}

const useForm = (): FormHookResponse => {
  const [values, setValues] = useState<FormValues>({});
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<FormTouched>({});

  const changeValue: ChangeFieldValue = (field, value) => {
    setValues(prevState => ({ ...prevState, [field]: value }));
  };

  return {
    values,
    errors,
    touched,
    changeValue,
  };
};

export default useForm;