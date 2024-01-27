import { Box, Button, Typography, Modal } from "@mui/material";
import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from "react-router-dom";

export default function Pay() {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const navigate = useNavigate();

  const handleOpenModal = () => {
    setShowSuccessModal(true);
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    navigate(`/`);
  };

  return (
    <Box className="chekout">
      <Box
        sx={{ p: { md: 15, sm: 10, xs: 3 }, pt: { md: 22, sm: 20, xs: 19 } }}
      >
        <Box
          sx={{
            mx: { md: 35, sm: 20, xs: 2 },
            bgcolor: "#FFC07F",
            p: 4,
            borderRadius: "10px",
          }}
        >
          <Typography variant="h6" align="center">
            Scan to pay
          </Typography>
          <Box component="img" src="/frame.png" sx={{ width: "100%" }} />
          <Typography variant="h6" align="center" sx={{ pt: 5, pb: 2 }}>
            Or pay to:
          </Typography>
          <Typography variant="p" align="center">
            <b>Account Name</b>: Sheba Christopher
          </Typography>{" "}
          <br />
          <Typography variant="p" align="center">
            <b>Account Number</b>: xxx xxx xxx xxx
          </Typography>
          <Button
            type="submit"
            variant="contained"
            sx={{ width: "100%" }}
            onClick={handleOpenModal} // Show Success Modal on button click
          >
            Done
          </Button>
        </Box>
      </Box>
      {/* Success Modal */}
      <Modal
        open={showSuccessModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Thank you, your order has been received!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            We appreciate your purchase and we will get to you soon.
          </Typography>
          <Button onClick={handleCloseModal} sx={{ mt: 2 }}>
            Close
          </Button>
        </Box>
      </Modal>
    </Box>
  );
}
