import { Box, Grid, Typography, CardActionArea, Card, CardContent, CssBaseline } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { DrawerAppBar } from "../../src/navBar";
import { firebaseStorageContext } from "../../Contexts/firebaseStorage";
import Image from 'next/image'
import { Footer } from "../../src/footer";
import { useRouter } from "next/router";
import { AuthenticationContext } from "../../Contexts/authentication";

export default function BrowseNovels() {

    const { folderArray } = useContext(firebaseStorageContext);
    const router = useRouter();

    const { logRoute } = useContext(AuthenticationContext);

    useEffect(()=>{
      logRoute();
    });


    function NovelCard({title}) {

        const imgLocation = `/NovelCovers/${title}.webp`;
        
        const routeTo = () => {
            const route = `/browse/${title}`;
            router.push(route);
        }

        return (
            <Grid item lg={4} md={12} sm={12} xs={12}
                sx={{
                    display:'flex',
                    alignItems: 'Center',
                    justifyContent: 'center',
                }}
            >
            <Box
                sx={{
                    display:'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mt:2,
                    mb:3
                }}
            >
                <Card>
                    <CardActionArea onClick={routeTo}>
                        <Box
                            sx={{
                                display:'block',
                                width: '400px',
                            }}

                            data-key={title}
                        >
                            <Image
                                src={imgLocation}
                                alt={title}
                                width={290}
                                height={415}
                                layout='responsive'
                            />
                            <CardContent>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Typography variant='p' fontSize={16}>
                                    {title}
                                </Typography>
                            </Box>
                        </CardContent> 
                        </Box>
                    </CardActionArea>
                </Card>
            </Box>
        </Grid>
        )
    }

    return (
        <>
            <CssBaseline/>
            <DrawerAppBar/>
            <Grid container justifyContent='space-around'>
            {
                folderArray.sort().map((item, index) => <NovelCard key={index} title={item} /> )
            }
            </Grid>
            <Footer/>
        </>
    )
}