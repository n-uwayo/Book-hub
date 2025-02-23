import React from "react";
import { Box } from "@mui/material";

const bookImage = "https://karingalhub.com.au/wp-content/uploads/sites/36/2019/01/Book-Hub-980x450px.png"; 

const BookBanner: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "300px", 
        backgroundImage: `url(${bookImage})`,
        backgroundPosition: "center",
        borderRadius: "5px", 
        
      }}
    />
  );
};

export default BookBanner;
