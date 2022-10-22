import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Typography } from '@mui/material'
import Box from '@mui/material/Box';
import { useContext } from 'react';
import { firebaseStorageContext } from '../Contexts/firebaseStorage';



export function Example(props) {

    const {folderArray} = useContext(firebaseStorageContext);

    return (
        <Box
        sx={{
            alignItems: 'Center',
            justifyContent: 'center',
            pb: 2
        }}
        >
            <Carousel>
                {
                    folderArray.map( (item, i) => <Item key={i} item={item} /> )
                }
            </Carousel>
        </Box>
    )
}

function Item(props)
{
    const bgImg = `./NovelCovers/${props.item}.webp`;
    return (
        <Box sx={{
            display:'flex',
            alignItems: 'Center',
            justifyContent: 'center',
            flexDirection: 'column',
            pt: 3
          }}>
            <img src={bgImg} height='400px'/>
            <Typography variant='h6' mt={2}>
            {props.item}
            </Typography>

            {/* <Button className="CheckButton">
                Check it out!
            </Button> */}
        </Box>
    )
}