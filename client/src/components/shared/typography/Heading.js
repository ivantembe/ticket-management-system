import React from "react";
import Typography from "@material-ui/core/Typography";

const Heading = ({ component, variant, label }) => {
  return (
    <Typography component={component} variant={variant}>
      {label}
    </Typography>
  );
};

export default Heading;
