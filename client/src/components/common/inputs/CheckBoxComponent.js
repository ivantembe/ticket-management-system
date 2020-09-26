import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const CheckBoxComponent = ({ value, label }) => {
  return (
    <FormControlLabel
      control={<Checkbox value={value} color="primary" />}
      label={label}
    />
  );
};

export default CheckBoxComponent;
