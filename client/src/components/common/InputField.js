import React from "react";
import TextField from "@material-ui/core/TextField";

const InputField = ({ id, label, name, type, autoComplete, autoFocus }) => {
  return (
    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      id={id}
      label={label}
      name={name}
      type={type}
      autoComplete={autoComplete}
      autoFocus={autoFocus}
    />
  );
};

export default InputField;
