import { Grid, Box, Typography } from '@mui/material';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import DevicesIcon from '@mui/icons-material/Devices';

export function BrowseCard() {
  return (
    <Grid item lg={4} md={6} sm={12} xs={12}
        sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent:'center',
            my: 4

        }}>
        <Box 
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: "345px",
            }}
        >
            <ContentPasteSearchIcon
                sx={{
                    fontSize:'70px',
                    mb: 1
                }}
            />
            <Typography variant='h5' sx={{mb: 1}}>
                Browse
            </Typography>
            <Typography variant='p'
                sx={{
                    textAlign: 'center',
                    fontSize: '15px',
                    mb: 1
                }}
            >
            {`Check if it's avaiable on us!`}
            </Typography>

        </Box>
    </Grid>
    
  );
}

export function DownloadCard() {
    return (
      <Grid item lg={4} md={6} sm={12} xs={12}
          sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent:'center',
              my: 4
  
          }}>
          <Box 
              sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  maxWidth: "345px",
              }}
          >
              <FileDownloadIcon
                  sx={{
                      fontSize:'70px',
                      mb: 1
                  }}
              />
              <Typography variant='h5' sx={{mb: 1}}>
                  Download
              </Typography>
              <Typography variant='p'
                  sx={{
                      textAlign: 'center',
                      fontSize: '15px',
                      mb: 1
                  }}
              >
              No waiting time, or unnecessary redirects!
              </Typography>
          </Box>
      </Grid>
      
    );
  }

export function EnjoyCard() {
    return (
        <Grid item lg={4} md={6} sm={12} xs={12}
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent:'center',
                my: 4

            }}>
            <Box 
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    maxWidth: "345px",
                }}
            >
                <DevicesIcon
                    sx={{
                        fontSize:'70px',
                        mb: 1
                    }}
                />
                <Typography variant='h5' sx={{mb: 1}}>
                    Enjoy
                </Typography>
                <Typography variant='p'
                    sx={{
                        textAlign: 'center',
                        fontSize: '15px',
                        mb: 1
                    }}
                >
                Read in any device you want!
                </Typography>

            </Box>
        </Grid>
        
    );
}