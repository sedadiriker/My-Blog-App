import { object, string } from "yup";
import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import { Box, Button, TextField } from "@mui/material";
import useAuthRequest from "../../hooks/useAuthRequest"

const LoginForm = () => {
  const loginSchema = object({
    username: string()
      .required("Username is required"),
    password: string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(12, "Password must be at most 10 characters")
      .matches(/\d+/, "The password must contain at least one number")
      .matches(
        /[a-z]+/,
        "The password must contain at least one lowercase letter"
      ),
  });

  const { login } = useAuthRequest();

  return (
    <Formik
    initialValues={{ username: "", password: "" }}
    validationSchema={loginSchema}
    onSubmit={(values, actions) => {
      login(values);
      actions.resetForm();
      actions.setSubmitting(false);
    }}
  >
    {({
      values,
      handleChange,
      handleBlur,
      touched,
      errors,
      isSubmitting,
    }) => (
      <Form>
        <Box
          m={"auto"}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            py: "3rem",
            px: "1.5rem",
            borderRadius: "10px",
            width:{xs:"90%",md:"60%"}
          }}
        >
          <TextField
            placeholder="test@test.com"
            label="username"
            name="username"
            id="username"
            type="username"
            variant="outlined"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.username && Boolean(errors.username)}
            helperText={touched.username && errors.username}
            InputProps={{
              sx: {
                color: "white",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#37B3E2",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#37B3E2",
                },
              },
            }}
            InputLabelProps={{
              sx: {
                color: "white",
              },
            }}
          />

          <TextField
          placeholder="123456Cl*"
            label="Password"
            name="password"
            id="password"
            type="password"
            variant="outlined"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
            InputProps={{
              sx: {
                color: "white",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#37B3E2",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#37B3E2",
                },
              },
            }}
            InputLabelProps={{
              sx: {
                color: "white",
              },
            }}
          />
          {/* <Box style={{ textAlign: "right" }}>
              <Link style={{ color: "#11B4BB", display: "inline" }}>
                Forgot password
              </Link>
            </Box> */}
          <Button
            variant="contained"
            type="submit"
            disabled={isSubmitting}
            color="primary"
            sx={{ width: "30%", m: "auto" }}
          >
            Login
          </Button>
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/register" style={{ color: "#a0d6e8" }}>
              Do you have not an account?
            </Link>
          </Box>
          
        </Box>
      </Form>
    )}
  </Formik>
  )
}

export default LoginForm