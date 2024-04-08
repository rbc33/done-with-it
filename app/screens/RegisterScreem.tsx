import React, { useState } from "react";
import * as Yup from "yup";
import Screen from "../components/Screen";
import {
  AppForm as Form,
  AppFormField as FormField,
  SubmitButton,
} from "../components/forms";
import userApi, { RegisterProps } from "../api/users";
import useAuth from "../auth/useAuth";
import authApi from "../api/auth";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(4).label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password"),
});

const RegisterScreen = () => {
  const registerApi = useApi(userApi.register);
  const loginApi = useApi(authApi.login);
  const auth = useAuth();
  const [error, setError] = useState<string>(null!);
  const handleSubmit = async (userInfo: RegisterProps) => {
    const result = await registerApi.request(userInfo);

    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("Unexpected error");
      }
      return;
    }
    const { data: authToken } = await loginApi.request({
      email: userInfo.email,
      password: userInfo.password,
    });
    auth.logIn(authToken!);
  };
  return (
    <>
      <ActivityIndicator
        visible={loginApi.isloading || registerApi.isloading}
      />
      <Screen>
        <Form
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <FormField
            name="name"
            autoCapitalize="words"
            autoCorrect={false}
            icon="account"
            placeholder="Name"
            textContentType="name"
          />
          <FormField
            name="email"
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <FormField
            name="password"
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="Register" extraClassName="mt-2.5" />
        </Form>
      </Screen>
    </>
  );
};

export default RegisterScreen;
