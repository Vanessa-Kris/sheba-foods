import {
  Box,
  Button,
  Card,
  Grid,
  Typography,
  Modal,
  Avatar,
  Rating,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { Unstable_NumberInput as BaseNumberInput } from "@mui/base/Unstable_NumberInput";
import { styled } from "@mui/system";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import emailjs from "emailjs-com";
import Loader from "../Components/Loader";
import {
  GoogleFormProvider,
  useGoogleForm,
  useShortAnswerInput,
  useLongAnswerInput,
} from "react-google-forms-hooks";
import form from "../Scripts/review_form.json";

export function ShortAnswerInput({ id }) {
  const { register, label } = useShortAnswerInput(id);

  return (
    <div>
      <Typography variant="p">{label}</Typography> <br />
      <TextField type="text" {...register()} sx={{ mb: 3, width: "70%" }} />
    </div>
  );
}

export function LongAnswerInput({ id }) {
  const { register, label } = useLongAnswerInput(id);

  return (
    <div>
      <Typography variant="p">{label}</Typography> <br />
      <TextField
        type="text"
        rows={4}
        multiline
        {...register()}
        sx={{ width: "70%" }}
      />
      {/* <input type="text" {...register()} /> */}
    </div>
  );
}

const NumberInput = React.forwardRef(function CustomNumberInput(props, ref) {
  return (
    <BaseNumberInput
      slots={{
        root: StyledInputRoot,
        input: StyledInput,
        incrementButton: StyledButton,
        decrementButton: StyledButton,
      }}
      slotProps={{
        incrementButton: {
          children: <AddIcon fontSize="small" />,
          className: "increment",
        },
        decrementButton: {
          children: <RemoveIcon fontSize="small" />,
        },
      }}
      {...props}
      ref={ref}
    />
  );
});

export function QuantityInput() {
  return <NumberInput aria-label="Quantity Input" min={1} max={30} />;
}

const blue = {
  100: "#daecff",
  200: "#b6daff",
  300: "#66b2ff",
  400: "#3399ff",
  500: "#007fff",
  600: "#0072e5",
  700: "#0059B2",
  800: "#004c99",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const StyledInputRoot = styled("div")(
  ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-weight: 400;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[500]};
    display: flex;
    flex-flow: row nowrap;
   
  `
);

const StyledInput = styled("input")(
  ({ theme }) => `
    font-size: 0.875rem;
    font-family: inherit;
    font-weight: 400;
    line-height: 1.375;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    box-shadow: 0px 2px 4px ${
      theme.palette.mode === "dark" ? "rgba(0,0,0, 0.5)" : "rgba(0,0,0, 0.05)"
    };
    border-radius: 8px;
    margin: 0 8px;
    padding: 10px 12px;
    outline: 0;
    min-width: 0;
    width: 4rem;
    text-align: center;
  
    &:hover {
      border-color: ${blue[400]};
    }
  
    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${
        theme.palette.mode === "dark" ? blue[700] : blue[200]
      };
    }
  
    &:focus-visible {
      outline: 0;
    }
  `
);

const StyledButton = styled("button")(
  ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    line-height: 1.5;
    border: 1px solid;
    border-radius: 99px;
    border-color: ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
    background: ${theme.palette.mode === "dark" ? grey[900] : grey[50]};
    color: ${theme.palette.mode === "dark" ? grey[200] : grey[900]};
    width: 32px;
    height: 32px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 120ms;
  
    &:hover {
      cursor: pointer;
      background: ${theme.palette.mode === "dark" ? blue[700] : blue[500]};
      border-color: ${theme.palette.mode === "dark" ? blue[500] : blue[400]};
      color: ${grey[50]};
    }
  
    &:focus-visible {
      outline: 0;
    }
  
    &.increment {
      order: 1;
    }
  `
);

export default function WholeMeal() {
  const handleReviewSubmit = async (data) => {
    await methods.submitToGoogleForms(data);
    methods.reset(); // Clear the form fields
    alert("Thank you for your review");
  };

  const methods = useGoogleForm({ form });
  const onSubmit = async (data) => {
    await methods.submitToGoogleForms(data);
  };

  const [quantity, setQuantity] = useState(1);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleBuyNowClick = () => {
    // Replace these values with your actual EmailJS template ID and user ID
    const templateId = "template_ya27w0e";
    const userId = "Eb_XTdDj678dCvBW3";

    // Replace this with the actual data you want to send
    const templateParams = {
      itemName: "Tom Brown Whole Meal",
      quantity: quantity,
    };

    setLoading(true);
    // Send the email using EmailJS
    emailjs
      .send("default_service", templateId, templateParams, userId)
      .then((response) => {
        console.log("Email sent successfully", response);
        setShowSuccessModal(true);
      })
      .catch((error) => {
        console.error("Error sending email", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <Box sx={{ m: { md: 15, sm: 10, xs: 3 }, pt: { md: 5, sm: 13, xs: 13 } }}>
      <Grid container columnSpacing={8} rowSpacing={5}>
        <Grid item md={6} sm={6} xs={12}>
          <Card sx={{ p: 3 }}>
            <Carousel>
              <div>
                <img src="/file.jpeg" alt="tom brown whole meal" />
              </div>
              <div>
                <img src="/wm.jpg" alt="tom brown whole meal" />
              </div>
              <div>
                <img src="/wm2.jpg" alt="tom brown whole meal" />
              </div>
            </Carousel>
          </Card>
        </Grid>
        <Grid item md={6} sm={6} xs={12} justifyContent="center" my="auto">
          <Card sx={{ p: 3 }}>
            <Typography variant="h3" sx={{ mb: 3 }}>
              Tom Brown Whole Meal
            </Typography>
            <Typography variant="h4">NGN 2000</Typography>
            <br />
            <Box>
              <Typography variant="h6"> Quantity :</Typography>
              <QuantityInput />
            </Box>
            <Box sx={{ mt: 5 }}>
              <Grid container columnSpacing={2}>
                <Grid item md={6} sm={6} xs={4}>
                  <Typography sx={{ fontWeight: "500 !important" }}>
                    Product:{" "}
                  </Typography>
                  <Typography sx={{ fontWeight: 500 }}>Size: </Typography>
                  <Typography sx={{ fontWeight: 500 }}>Category: </Typography>
                  <Typography sx={{ fontWeight: 500 }}>Brand: </Typography>
                  <Typography sx={{ fontWeight: 500 }}>
                    Health Benefits:{" "}
                  </Typography>
                </Grid>
                <Grid item md={6} sm={6} xs={8} sx={{ color: "#505050" }}>
                  <Typography>Tom brown whole meal </Typography>
                  <Typography>500 grams </Typography>
                  <Typography>Grains </Typography>
                  <Typography>Sheba Meals </Typography>
                  <Typography component="a" href="/health-book">
                    See here{" "}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <Button
              fullWidth
              variant="outlined"
              onClick={handleBuyNowClick}
              sx={{ mt: 5, p: 2, bgcolor: "green" }}
            >
              {loading ? <Loader /> : "Buy Now"}
            </Button>

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
          </Card>
        </Grid>
      </Grid>
      <Box sx={{ pt: 10 }}>
        <Typography variant="h5" sx={{ py: 3, fontWeight: 500 }}>
          Customer Reviews
        </Typography>
        <Box>
          <Avatar />
          <Typography variant="body2">
            {" "}
            Tom Brown is such a unique whole meal different from others and the
            taste is out of this world, but I think you need to work on the
            quantity.{" "}
          </Typography>
          <Rating value={4} />
          <br />
          <Typography variant="p">Benny Boy</Typography>
        </Box>
        {/*  */}
        <Box sx={{ pt: 5 }}>
          <Avatar />
          <Typography variant="body2">
            {" "}
            Person no fit believe say na 2k I buy am. E goess.{" "}
          </Typography>
          <Rating value={5} />
          <br />
          <Typography variant="p">OG Successful</Typography>
        </Box>
        {/*  */}
        <Box sx={{ pt: 5 }}>
          <Avatar />
          <Typography variant="body2">
            {" "}
            It's really good, I like the taste no dislikes{" "}
          </Typography>
          <Rating value={5} />
          <br />
          <Typography variant="p">Danino</Typography>
        </Box>
        {/*  */}
        <Box sx={{ pt: 5 }}>
          <Avatar />
          <Typography variant="body2">
            {" "}
            Tom Brown is my life saver, I eat it everyday and I'm looking fresh
            because of Tom Brown{" "}
          </Typography>
          <Rating value={5} />
          <br />
          <Typography variant="p">Michelle</Typography>
        </Box>
        {/*  */}
        <Box sx={{ pt: 5 }}>
          <Avatar />
          <Typography variant="body2">
            {" "}
            I and my baby really love Tom Brown Whole meal{" "}
          </Typography>
          <Rating value={5} />
          <br />
          <Typography variant="p">Mr Kizz</Typography>
        </Box>

        <Typography variant="h6" sx={{ py: 3, fontWeight: 500 }}>
          Leave a review
        </Typography>
        <GoogleFormProvider {...methods}>
          <Box
            component="form"
            onSubmit={methods.handleSubmit(handleReviewSubmit)}
          >
            <ShortAnswerInput id="2021980687" />
            <LongAnswerInput id="751519843" /> <br />
            <Button type="submit" sx={{ bgcolor: "green" }}>
              Submit
            </Button>
          </Box>
        </GoogleFormProvider>
      </Box>
    </Box>
  );
}
