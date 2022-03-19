import React from "react";

import { Navigate, useNavigate } from "react-router-dom";
import { FormWrapper } from "./Styles";
import { useLogin } from "../shared/hooks/useLogin";
import AppLayout from "../components/AppLayout";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useForm, Controller } from "react-hook-form";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login, loggedIn } = useLogin();
  const { control, handleSubmit,  } = useForm();

  const onSubmit = (data) => {
    login();
    navigate("/");
  };
  const style = { width: "100%", margin: "20px 0", padding: "4px 0" };

  if (loggedIn) return <Navigate to="/" />;
  return (
    <AppLayout login={true}>
      <FormWrapper index>
        <h3>Login</h3>
        <h4>Kindly enter your details to log in</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                style={style}
                label="Email Address"
                variant="outlined"
                value={value}
                defaultValue=""
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
                type="email"
              />
            )}
            rules={{
              required: "Email is required",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Please enter a valid email",
              },
            }}
          />

          <Controller
            name="password"
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                style={style}
                label="Password"
                variant="outlined"
                value={value}
                onChange={onChange}
                defaultValue=""
                error={!!error}
                helperText={error ? error.message : null}
                type="password"
              />
            )}
            rules={{ required: "Password required" }}
          />

          <Button
            type="submit"
            variant="contained"
            color={"primary"}
            style={style}
          >
            Log In
          </Button>
          <h5>forgot your password?</h5>
        </form>
        <h6>
          Privacy Policy <span>and</span> Terms of services
        </h6>
      </FormWrapper>
    </AppLayout>
  );
};

export default LoginPage;
