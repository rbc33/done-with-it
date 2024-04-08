import { Formik, FormikValues } from "formik";
import React, { ReactNode } from "react";
import * as Yup from "yup";

interface AppFormProps<T> {
  initialValues: T;
  onSubmit: (values: T, FormikBag: any) => void | Promise<any>;
  validationSchema: Yup.ObjectSchema<any>;
  children: ReactNode;
}

const AppForm = <T extends FormikValues>({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}: AppFormProps<T>) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formikProps) => (
        <>
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, { ...formikProps });
            }
            return child;
          })}
        </>
      )}
    </Formik>
  );
};

export default AppForm;
