import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { contactStrings } from "../../../utils/strings";
import { validEmailRegex } from "../../../utils/helpers";
import { getFormspreeUrl } from "../../../utils/helpers";
import Styles from "./styles";

const noErrors = {
  firstName: "",
  lastName: "",
  email: "",
  message: ""
};

export default () => {
  const classes = Styles();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [errorFields, setErrorFields] = useState(noErrors);

  const handleFieldChange = (fieldName, value) => {
    if (fieldName === "firstName") {
      setFirstName(value);
    } else if (fieldName === "lastName") {
      setLastName(value);
    } else if (fieldName === "email") {
      setEmail(value);
    } else if (fieldName === "message") {
      setMessage(value);
    }
  };

  const handleError = errorMessage => {
    if (errorMessage.includes("empty")) {
      setErrorFields({
        firstName: "Can't be empty.",
        lastName: "Can't be empty.",
        email: "Can't be empty.",
        message: "Can't be empty."
      });
    } else if (errorMessage.includes("email")) {
      setErrorFields({
        ...noErrors,
        email: "Oops invalid email."
      });
    }
  };

  const validateFields = fields => {
    return new Promise((resolve, reject) => {
      let errors = {};

      // first name
      if (fields.includes("firstName")) {
        if (!firstName) {
          errors.firstName = "Can't be empty.";
        } else if (firstName.length < 3) {
          errors.firstName = "Come on, enter a real name";
        }
      }

      // last name
      if (fields.includes("lastName")) {
        if (!lastName) {
          errors.lastName = "Can't be empty.";
        } else if (lastName.length < 3) {
          errors.lastName = "Come on, enter a real name";
        }
      }

      // email
      if (fields.includes("email")) {
        if (!email) {
          errors.email = "Can't be empty.";
        } else if (!validEmailRegex.test(email)) {
          errors.email = "Email is not valid.";
        }
      }

      // message
      if (fields.includes("message")) {
        if (!message) {
          errors.message = "Can't be empty.";
        } else if (message.length < 20) {
          errors.message = "Come on, enter a proper question!";
        }
      }

      if (Object.keys(errors).length === 0) {
        resolve();
      } else {
        reject(errors);
      }
    });
  };

  const handleBlur = fieldName => {
    if (status !== "error") {
      return;
    }

    validateFields([fieldName])
      .then(() => {
        setErrorFields(errorFields => {
          return {
            ...errorFields,
            [fieldName]: ""
          };
        });
      })
      .catch(errors => {
        setStatus("error");
        setErrorFields(errorFields => {
          return {
            ...errorFields,
            ...errors
          };
        });
      });
  };

  const submitForm = e => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();

    validateFields(["firstName", "lastName", "email", "message"])
      .then(() => {
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");

        xhr.onreadystatechange = () => {
          if (xhr.readyState !== XMLHttpRequest.DONE) {
            return;
          }

          if (xhr.status === 200) {
            form.reset();
            setStatus("success");
          } else {
            setStatus("error");
            handleError(xhr.responseText);
          }
        };
        xhr.send(data);
      })
      .catch(errors => {
        setStatus("error");
        setErrorFields({
          ...noErrors,
          ...errors
        });
      });
  };

  return (
    <Container maxWidth="sm" align="center" className={classes.container}>
      <form
        noValidate
        autoComplete="off"
        onSubmit={submitForm}
        action={getFormspreeUrl()}
        method="POST"
      >
        <Grid container>
          <Grid item xs={12} sm={12} md={6} className={classes.textField}>
            <TextField
              fullWidth
              label={contactStrings.firstName}
              margin="normal"
              variant="filled"
              name="firstName"
              error={status === "error" && errorFields.firstName !== ""}
              helperText={status === "error" ? errorFields.firstName : ""}
              value={firstName}
              onChange={e => handleFieldChange("firstName", e.target.value)}
              onBlur={() => handleBlur("firstName")}
              InputProps={{
                className: classes.input
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} className={classes.textField}>
            <TextField
              fullWidth
              label={contactStrings.lastName}
              margin="normal"
              variant="filled"
              name="lastName"
              error={status === "error" && errorFields.lastName !== ""}
              helperText={status === "error" ? errorFields.lastName : ""}
              value={lastName}
              onChange={e => handleFieldChange("lastName", e.target.value)}
              onBlur={() => handleBlur("lastName")}
              InputProps={{
                className: classes.input
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} className={classes.textField}>
            <TextField
              fullWidth
              label={contactStrings.email}
              margin="normal"
              variant="filled"
              name="email"
              error={status === "error" && errorFields.email !== ""}
              helperText={status === "error" ? errorFields.email : ""}
              value={email}
              onChange={e => handleFieldChange("email", e.target.value)}
              onBlur={() => handleBlur("email")}
              InputProps={{
                className: classes.input
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} className={classes.textField}>
            <TextField
              fullWidth
              multiline
              rows="6"
              label={contactStrings.question}
              margin="normal"
              variant="filled"
              name="message"
              error={status === "error" && errorFields.message !== ""}
              helperText={status === "error" ? errorFields.message : ""}
              value={message}
              onChange={e => handleFieldChange("message", e.target.value)}
              onBlur={() => handleBlur("message")}
              InputProps={{
                className: classes.input
              }}
            />
          </Grid>
        </Grid>
        <div className={classes.submit}>
          {status === "success" ? (
            <p>{contactStrings.thanks}</p>
          ) : (
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              type="submit"
            >
              {contactStrings.send}
            </Button>
          )}
        </div>
      </form>
    </Container>
  );
};
