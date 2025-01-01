import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useForm, Controller } from "react-hook-form";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import { getEmail } from "../../api/login-api"; 

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
  errorMessage: {
    color: "red",
    marginTop: 2,
    textAlign: "center",
  },
};

const ResetPasswordForm = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  
  const handleSnackClose = () => {
    setOpen(false); 
  };

  const defaultValues = {
    email: "",
  };

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues });

  const onSubmit = async (data) => {
    try {
      const result = await getEmail(data.email);
      console.log(result); 
  
      if (result && result.msg) {
        setOpen(true);  
        navigate("/login");
        console.log("Password reset sent to:", data.email);
      } else {
        setErrorMessage(result.message || "An error occurred");
      }
    } catch (error) {
      console.error("Error resetting password:", error);
      setErrorMessage("An error occurred");
    }
  };

  return (
    <Box component="div" sx={styles.root}>
      <Typography component="h2" variant="h3" align="center">
        Reset Password
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
          <Typography variant="h4">Password reset request sent successfully!</Typography>
        </MuiAlert>
      </Snackbar>

      <form sx={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
        <Controller
          name="email"
          control={control}
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Please provide a valid email address",
            },
          }}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TextField
              sx={styles.textField}
              variant="outlined"
              margin="normal"
              required
              onChange={onChange}
              value={value}
              id="email"
              label="Email"
              name="email"
              autoFocus
            />
          )}
        />
        {errors.email && (
          <Typography variant="h6" component="p" align="center">
            {errors.email.message}
          </Typography>
        )}

        {errorMessage && (
          <Typography variant="h6" component="p" sx={styles.errorMessage}>
            {errorMessage}
          </Typography>
        )}

        <Box sx={styles.buttons}>
          <Button type="submit" variant="contained" color="primary">
            Reset Password
          </Button>
          <Button
            type="reset"
            variant="contained"
            color="secondary"
            onClick={() => {
              reset({
                email: "",
              });
              setErrorMessage("");
            }}
          >
            Reset
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default ResetPasswordForm;
