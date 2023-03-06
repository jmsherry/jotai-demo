import React from "react";
import Typography from "@mui/material/Typography";

function NotFound() {
  return (
    <Typography
      component={`h1`}
      variant="h3"
      sx={{ textAlign: "center", marginBlockEnd: "0.5em" }}
    >
      404 Page Not Found
    </Typography>
  );
}

export default NotFound;
