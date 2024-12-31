import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useForm, Controller } from "react-hook-form";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import { login, getMoviePlayList, getShowPlayList } from "../../api/login-api"; // Ensure login API accepts username
import { setUsername, setlogin } from "../../user/user";
import { updateFavoriteShows } from "../../contexts/showsContext";
import { updateFavoriteMovies } from "../../contexts/moviesContext";
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
  errorMessage: {
    color: "red",
    marginTop: 2,
    textAlign: "center",
  },
};

const LoginForm = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { authenticateUser } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");

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
      const result = await login(data.username, data.password); 
      console.log("Login result:", JSON.stringify(result, null, 2));
      console.log(result)
      if (result.success) {
        setOpen(true);
        setUsername(data.username);
        authenticateUser(result.token)
        setlogin(true);
        console.log(await getShowPlayList(data.username))
        const showResponse = await getShowPlayList(data.username);
        const showPlaylist = showResponse.msg;
        console.log(showPlaylist);
        const movieResponse = await getMoviePlayList(data.username);
        const moviePlaylist = movieResponse.msg;
        console.log(moviePlaylist);
        updateFavoriteShows(showPlaylist);
        updateFavoriteMovies(moviePlaylist);

        navigate("/movies");
      } else {
        console.error(result.message);
        setErrorMessage("Incorrect password or username.");

      }
    } catch (error) {
      console.error("Error logging in user:", error);
      setErrorMessage("An error occurred while logging in.");
    }
  };

  return (
    <Box component="div" sx={styles.root}>
      <Typography component="h2" variant="h3" align="center">
        Login
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
          <Typography variant="h4">Login successful!</Typography>
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
              value={value}
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

        {errorMessage && (
          <Typography variant="h6" component="p" sx={styles.errorMessage}>
            {errorMessage}
          </Typography>
        )}

        <Box sx={styles.buttons}>
          <Button type="submit" variant="contained" color="primary">
            Login
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

export default LoginForm;
