import { Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import { DrawerAppBar } from "./navBar";
import { firebaseStorageContext } from "../Contexts/firebaseStorage";
import { Box } from "@mui/system";

export default function BrowseNovels() {

    const { folderArray } = useContext(firebaseStorageContext);

    function NovelCard({title}) {

        const imgLocation = `./NovelCovers/${title}.webp`;

        return (
            <Grid item lg={4} md={12} sm={12} sx={12}>
            <Box
                sx={{
                    display:'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 2
                }}
            >
                <img src={imgLocation} alt={title} height='400px' width='auto'/>
                <Typography variant='h6' justifyContent='center' mt={2}>
                    {title}
                </Typography>
            </Box>

        </Grid>
        )
    }

    return (
        <>
            <CssBaseline/>
            <DrawerAppBar/>
            <Grid container /* justifyContent='space-around' */>
            {
                folderArray.sort().map((item, index) => <NovelCard key={index} title={item} /> )
            }
            </Grid>
        </>
    )
}