import React, { useState } from "react";
import { Image } from "react-native";
import * as Yup from "yup";
import authApi, { LoginProps } from "../api/auth";
import useAuth from "../auth/useAuth";
import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  const { logIn } = useAuth();
  const [loginFail, setLoginFail] = useState(false);
  const handleSubmit = ({ email, password }: LoginProps) => {
    return authApi.login({ email, password }).then((res) => {
      if (!res.ok) setLoginFail(true);
      if (typeof res.data === "string") {
        logIn(res.data);
      }
    });
  };

  return (
    <Screen>
      <Image
        className="w-[80px] h-[80px] self-center mt-12 mb-5"
        source={require("../assets/logo-red.png")}
      />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          error={"Invalid email or password."}
          visible={loginFail}
        />
        <AppFormField
          name="email"
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          name="password"
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" extraClassName="mt-2.5" />
      </AppForm>
    </Screen>
  );
};

export default LoginScreen;
