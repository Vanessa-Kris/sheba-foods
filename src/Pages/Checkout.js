import { Box, Button, Typography, TextField } from "@mui/material";
import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  GoogleFormProvider,
  useGoogleForm,
  useShortAnswerInput,
  useLongAnswerInput,
} from "react-google-forms-hooks";
import form from "../Scripts/order_form.json";
import { MuiTelInput } from "mui-tel-input";
import { useNavigate } from "react-router-dom";

export function Quantity({ id, setQuantity }) {
  const { label, register } = useShortAnswerInput(id);

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value, 10) || 0);
  };

  return (
    <div>
      <Typography variant="p">{label}</Typography> <br />
      <TextField
        type="number"
        {...register()}
        sx={{ mb: 3 }}
        onChange={handleQuantityChange}
      />
    </div>
  );
}

export function Name({ id }) {
  const { label, register } = useShortAnswerInput(id);

  return (
    <div>
      <Typography variant="p">{label}</Typography> <br />
      <TextField type="text" {...register()} sx={{ mb: 3 }} />
    </div>
  );
}

export function PhoneNumber({ id }) {
  const { label, register } = useShortAnswerInput(id);
  const [value, setValue] = React.useState("");

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Typography variant="p">{label}</Typography> <br />
      <MuiTelInput
        // forceCallingCode
        // focusOnSelectCountry
        defaultCountry={"NG"}
        {...register()}
        sx={{ mb: 3 }}
        value={value}
        onChange={handleChange}
      />
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
        rows={2}
        multiline
        {...register()}
        sx={{ mb: 3 }}
      />
    </div>
  );
}

export default function Checkout() {
  const [quantity, setQuantity] = useState(0);
  const navigate = useNavigate();

  const handleOrderSubmit = async (data) => {
    await methods.submitToGoogleForms(data);
    methods.reset();
  };

  const methods = useGoogleForm({ form });

  const calculateTotalAmount = () => {
    const rate = 2000; // Assuming rate is 2000
    return quantity * rate;
  };

  const handlePayButtonClick = async () => {
    // Submit the form before navigating
    await methods.handleSubmit(handleOrderSubmit)();
    // Navigate to the pay page
    navigate(`/products/tom-brown-whole-meal/checkout/pay`);
  };

  return (
    <Box className="chekout">
      <GoogleFormProvider {...methods}>
        <Box
          component="form"
          onSubmit={methods.handleSubmit(handleOrderSubmit)}
          sx={{
            p: { md: 15, sm: 10, xs: 3 },
            pt: { md: 15, sm: 13, xs: 13 },
          }}
        >
          <Box
            sx={{
              mx: { md: 35, sm: 20, xs: 2 },
              bgcolor: "#FFC07F",
              p: 4,
              borderRadius: "10px",
            }}
          >
            <Name id="1798456288" />
            <LongAnswerInput id="1137631739" />
            <Quantity id="668826625" setQuantity={setQuantity} />
            <PhoneNumber id="1822547612" />
            <Typography variant="p" align="center" sx={{ pt: 2, pb: 2 }}>
              Total Amount: ₦{calculateTotalAmount()}
            </Typography>

            <Button
              type="submit"
              variant="contained"
              sx={{ width: "100%" }}
              onClick={handlePayButtonClick}
            >
              Pay
            </Button>
          </Box>
        </Box>
      </GoogleFormProvider>
    </Box>
  );
}
