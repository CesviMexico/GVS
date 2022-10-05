import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Form } from 'antd';

const FormCat2 = () => {
    return (
        <>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={12}>
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: "Please input your email" }]}
                    >
                        <TextField
                            label="email"
                            fullWidth
                            variant="filled"
                            size="small"
                        />
                    </Form.Item>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <Form.Item
                        name="gender"
                        rules={[{ required: true, message: "Please input your last gender" }]}
                    >
                        <TextField
                            label="gender"
                            fullWidth
                            variant="standard"
                            size="small"
                        />
                    </Form.Item>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <Form.Item
                        name="ip_address"
                        rules={[{ required: true, message: "Please input your last ip_address" }]}
                    >
                        <TextField
                            label="ip_address"
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
export default FormCat2;