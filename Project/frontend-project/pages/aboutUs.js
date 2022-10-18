import { Typography } from "@mui/material";
import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import { DrawerAppBar } from "./navBar";

export default function AboutUs() {

    return (
        <>
            <CssBaseline/>
            <DrawerAppBar/>
            <Typography>
                AboutUs route
            </Typography>
        </>
    )
}