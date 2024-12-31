import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useForm, Controller } from "react-hook-form";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import { signup } from "../../api/login-api";
import { setUsername, setlogin } from "../../user/user";
import { useAuth } from "../../contexts/authContext";

const styles = {
  root: {
    marginTop: 2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    width: "100%",
    maxWidth: "400px",
    "& > * ": {
      marginTop: 2,
    },
  },
  textField: {
    width: "100%", 
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  snack: {
    width: "50%",
    "& > * ": {
      width: "100%",
    },
  },
};

const RegisterForm = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { authenticateUser } = useAuth();
  

  const handleSnackClose = () => {
    setOpen(false);
    navigate("/"); 
  };

  const defaultValues = {
    username: "",
    password: "",
  };

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues });

  const onSubmit = async (data) => {
    try {
      const result = await signup(data.username, data.password);
      console.log("Signup Result:", result);

      if (result && result.success) {
        setOpen(true);
        setUsername(data.username);
        authenticateUser(result.token)
        setlogin(true);
        navigate("/movies");
      } else {
        console.error("Signup failed:", result.message || "Unexpected response structure");
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <Box component="div" sx={styles.root}>
      <Typography component="h2" variant="h3" align="center">
        Register
      </Typography>
      <Snackbar
        sx={styles.snack}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        onClose={handleSnackClose}
      >
        <MuiAlert
          severity="success"
          variant="filled"
          onClose={handleSnackClose}
        >
          <Typography variant="h4">Register successful!</Typography>
        </MuiAlert>
      </Snackbar>

      <form sx={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
        <Controller
          name="username"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TextField
              sx={styles.textField}
              variant="outlined"
              margin="normal"
              required
              onChange={onChange}
              id="username"
              label="Username"
              name="username"
              autoFocus
            />
          )}
        />
        {errors.username && (
          <Typography variant="h6" component="p" align="center">
            {errors.username.message}
          </Typography>
        )}

        <Controller
          name="password"
          control={control}
          rules={{
            required: "Password is required",
            minLength: { value: 6, message: "Password must be at least 6 characters long" },
            pattern: {
              value: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              message: "Password must contain at least one letter, one digit, and one special character",
            },
          }}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TextField
              sx={styles.textField}
              variant="outlined"
              margin="normal"
              required
              name="password"
              value={value}
              onChange={onChange}
              label="Password"
              type="password"
              id="password"
            />
          )}
        />
        {errors.password && (
          <Typography variant="h6" component="p" align="center">
            {errors.password.message}
          </Typography>
        )}

        <Box sx={styles.buttons}>
          <Button type="submit" variant="contained" color="primary">
            Register
          </Button>
          <Button
            type="reset"
            variant="contained"
            color="secondary"
            onClick={() => {
              reset({
                username: "",
                password: "",
              });
            }}
          >
            Reset
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default RegisterForm;
