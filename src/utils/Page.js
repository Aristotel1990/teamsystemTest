import PropTypes from "prop-types";
import { forwardRef, useEffect, useCallback } from "react";
// material
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
// utils

// ----------------------------------------------------------------------

const Page = forwardRef(({ children, title = "", ...other }, ref) => {
  return (
    <Box ref={ref} {...other}>
      {children}
    </Box>
  );
});

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default Page;
