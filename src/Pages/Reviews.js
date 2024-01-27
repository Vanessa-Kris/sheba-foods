import {
  Box,
  Button,
  Typography,
  Avatar,
  Rating,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
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

export default function Review() {
  const handleReviewSubmit = async (data) => {
    await methods.submitToGoogleForms(data);
    methods.reset(); // Clear the form fields
    alert("Thank you for your review");
  };

  const methods = useGoogleForm({ form });
  const onSubmit = async (data) => {
    await methods.submitToGoogleForms(data);
  };

  return (
    <Box sx={{ m: { md: 15, sm: 10, xs: 3 } }}>
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
