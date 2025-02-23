import React from "react";
import { Container, Grid, Typography, Link, Box } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: "#333", color: "white", padding: "20px 0" }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Important Links
            </Typography>
            <Link href="/about" color="inherit" display="block">
              About Us
            </Link>
            <Link href="/privacy" color="inherit" display="block">
              Privacy Policy
            </Link>
            <Link href="/terms" color="inherit" display="block">
              Terms of Service
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Working Hours
            </Typography>
            <Typography variant="body1">Mon - Fri: 9 AM - 5 PM</Typography>
            <Typography variant="body1">Sat: 9 AM - 1PM</Typography>
            <Typography variant="body1">Sun: Closed</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body1">Email: hub@book.com</Typography>
            <Typography variant="body1">Phone: (+250) 78-456-7890</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
