import React, { useState } from "react";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import { Form, } from 'antd';

const FormCat = () => {
    return (
        <>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={12}>
                    <Form.Item
                        name="first_name"
                        rules={[{ required: true, message: "Please input your first name" }]}
                    >
                        <TextField
                            label="Nombre"
                            fullWidth
                            variant="filled"
                            size="small"
                        />
                    </Form.Item>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <Form.Item
                        name="last_name"
                        rules={[{ required: true, message: "Please input your last name" }]}
                    >
                        <TextField
                            label="Apellido"
                            fullWidth
                            variant="standard"
                            size="small"
                        />
                    </Form.Item>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <Form.Item
                        label="Genero"
                        name="gender"
                        rules={[{ required: true, message: "Please input your gender" }]}
                    >
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="Female" control={<Radio />} label="Female" />
                            <FormControlLabel value="Male" control={<Radio />} label="Male" />
                            <FormControlLabel value="Other" control={<Radio />} label="Other" />
                        </RadioGroup>


                    </Form.Item>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: "Please input your email" }]}
                    >
                        <TextField
                            label="Corre"
                            fullWidth
                            variant="standard"
                            size="small"
                        />
                    </Form.Item>
                </Grid>
            </Grid>
        </>
    );
};
export default FormCat;