'use client';

import { Checkout } from "@/templates/Checkout";
import { Button, FormControlLabel, Grid, Radio, RadioGroup, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

export default function Login() {
    const { control, handleSubmit } = useForm();

    const onSubmit = (data:any) => {
      console.log(data);
    };

  return (<Checkout/>);
}