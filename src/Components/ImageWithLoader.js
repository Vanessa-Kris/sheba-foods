import { Box } from "@mui/material";
import React, { useState } from "react";
import Loader from "./Loader";

const ImageWithLoader = ({ src, alt }) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoaded = () => {
    setLoading(false);
  };

  return (
    <div style={{ position: "relative" }}>
      {loading && <Loader />}
      <Box
        component="img"
        src={src}
        alt={alt}
        onLoad={handleImageLoaded}
        sx={{ display: loading ? "none" : "block", width: "100%" }}
      />
    </div>
  );
};

export default ImageWithLoader;
