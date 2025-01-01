import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useForm, Controller } from "react-hook-form";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useNavigate, useParams } from "react-router-dom";
import { resetPassword } from "../../api/login-api"; 

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

const ResetForm = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const { id } = useParams();
  
  const handleSnackClose = () => {
    setOpen(false);
    navigate("/login"); 
  };

  const defaultValues = {
    password: "",
    repeatPassword: ""
  };

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues });

  const onSubmit = async (data) => {
    const { password, repeatPassword } = data;
    try {
        if (password === repeatPassword){
            console.log(password)
            const result = await resetPassword(id, password)
            console.log(result)
            navigate('/login')
        }
        else{
            setErrorMessage("Passwords do not match");
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
          name="password"
          control={control}
          rules={{
            required: "Password is required",
            minLength: { value: 6, message: "Password must be at least 6 characters long" },
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
              label="New Password"
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

<Controller
          name="repeatPassword"
          control={control}
          rules={{
            required: "Password is required",
            minLength: { value: 6, message: "Password must be at least 6 characters long" },
          }}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TextField
              sx={styles.textField}
              variant="outlined"
              margin="normal"
              required
              name="repeatPassword"
              value={value}
              onChange={onChange}
              label="Repeat New Password"
              type="password"
              id="repeatPassword"
            />
          )}
        />
        {errors.repeatPassword && (
          <Typography variant="h6" component="p" align="center">
            {errors.repeatPassword.message}
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

export default ResetForm;
