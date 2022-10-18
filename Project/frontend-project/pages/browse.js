import { Typography } from "@mui/material";
import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import { DrawerAppBar } from "./navBar";

export default function BrowseNovels() {

    return (
        <>
            <CssBaseline/>
            <DrawerAppBar/>
            <Typography>
                Browse route
            </Typography>
        </>
    )
}