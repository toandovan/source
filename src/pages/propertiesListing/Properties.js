import AppAnimate from '@crema/core/AppAnimate';
import AppGridContainer from '@crema/core/AppGridContainer';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import AppCardMedia from '@crema/core/AppCard/AppCardMedia';
import { styled } from '@mui/material/styles';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import KeyIcon from '@mui/icons-material/Key';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import Typography from '@mui/material/Typography';
import AppSearchBar from '@crema/core/AppSearchBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CardMedia from '@mui/material/CardMedia';
import { Button, Divider, Input } from '@mui/material';
import AppCardMedia from '@crema/core/AppCard/AppCardMedia';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import TextField from '@mui/material/TextField';
const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  }));

const PropertiesListing= ()=>{
    return (<AppAnimate animation='transition.slideUpIn' delay={200}>
        <Box flex={1}>
            <AppGridContainer>
                <Grid item  xs={12} md={12} sx={{
                    background: `url('/assets/images/landingPage.png')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'bottom right',
                    backgroundSize: '50% 100%',
                }}>
                    <Grid item xs={12} md={4} sx={{
                        
                    }}>
                    <Typography sx={{
                            fontSize: "30pt",
                            fontWeight: 'bold',
                    }}>
                            Buy, rent, or sell your property easyly
                    </Typography>
                    <Typography sx={{
                            marginTop: '20px',
                            marginRight: '20px',
                            paddingRight: '5px',
                            fontWeight: 'bold',
                    }}>
                            A great platfom to buy, sell , or even rent your properties without any commisions
                    </Typography>
                    </Grid>
                    <Grid item  xs={12} md={12} sx={{paddingTop: '25px'}}>
                        <Grid  item  xs={12} md={8}>
                            <Grid item xs={12} md={12} lg={12}  >
                                <Tabs sx={{
                                            width: '300px',
                                            border:'1px solid',
                                            borderRadius: '10px',
                                            borderBottomLeftRadius: '0px',
                                            borderBottomRightRadius: '0px',
                                            justifyContent:'center',
                                            background: 'white',
                                            borderColor: '#e6e6ff'
                                        }}>
                                    <Tab label="Rent" />
                                    <Tab label="Buy" />
                                    <Tab label="Sell" />
                                </Tabs>
                            </Grid>
                            <Grid item xs={12} md={12} lg={12} sx={{
                                background: 'white'
                            }}>
                               <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    border:'1px solid',
                                    borderRadius: '10px',
                                    padding: '10px',
                                    borderTopLeftRadius: '0px',
                                    borderColor: '#e6e6ff'
                               }}>
                                    <Box sx={{width: '35%'}}>
                                        <TextField
                                            id="location"
                                            label="Location"
                                            // value={}
                                            // onChange={handleChange}
                                        />
                                    </Box>
                                    <Box sx={{width: '35%'}}>
                                        <TextField
                                                id="when"
                                                label="When"
                                                // value={}
                                                // onChange={handleChange}
                                            />
                                    </Box>
                                    <Box sx={{width: '30%', display: 'flex' ,justifyContent: 'center'}}>
                                        <Button variant="contained">Browser Properties</Button>
                                    </Box>
                               </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12} md={6} sx={{paddingTop: '25px'}}>
                        <Grid item xs={6} md={6}>
                            <Badge
                                overlap="circular"
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                badgeContent={
                                <SmallAvatar alt="Remy Sharp"/>
                                }
                            >
                                <Avatar>
                                    <GroupsOutlinedIcon/>
                                </Avatar>
                            </Badge>
                            <Typography variant='h2'>50k+ renters</Typography>
                            <Typography>believe in our service</Typography>
                        </Grid>
                        <Grid item xs={6} md={6}>
                        <Badge
                                overlap="circular"
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                badgeContent={
                                <SmallAvatar alt="Remy Sharp"/>
                                }
                            >
                                <Avatar>
                                    <ApartmentOutlinedIcon></ApartmentOutlinedIcon>
                                </Avatar>
                            </Badge>
                            <Typography  variant='h2'>10k+ properties</Typography>
                            <Typography>ready for occupancy</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                
                <Grid container  xs={12} md={12} sx={{
                    paddingTop: '50px'
                }}>
                    <Grid item xs={12} md={4} sx={{
                    padding: '30px'
                }}>
                        <CardMedia sx={{
                        borderStyle: 'solid',
                        minHeight: '400px',
                        border: '1px solid',
                        borderRadius: '10px',
                        padding: '30px',
                        }}>
                            <Box sx={{display: 'flex'}}>
                            <Box sx={{width: '80%'}}>
                                <Typography sx={{fontWeight: 'bold', fontSize: 20}}>
                                The new way to find your new home
                                </Typography>
                                <Typography sx={{margin: '20px 0 20px 0'}}>
                                Find your dream place to live in with more than 10k+
                                properties listed.
                                </Typography>
                            </Box>
                            </Box>
                            <Box
                            sx={{
                                display: 'inline-flex',
                                fontSize: '15px',
                            }}
                            >
                            <Box sx={{width: '100%', display: 'flex' ,justifyContent: 'center'}}>
                                <Button variant="contained">Browser Properties</Button>
                            </Box>
                        </Box>
                    </CardMedia>
                    </Grid>
                    <Grid container xs={12} md={8} sx={{
                    padding: '30px'
                }}>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={6}>
                                <MapsHomeWorkOutlinedIcon></MapsHomeWorkOutlinedIcon>
                                <Typography sx={{fontWeight: 'bold', fontSize: 16}}>
                                    Property Insurance
                                </Typography>
                                <Typography>
                                    We offer our customer property protection of liability coverage and insurace for their better life
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <LocalAtmIcon></LocalAtmIcon>
                                <Typography sx={{fontWeight: 'bold', fontSize: 16}}>
                                    Best Price
                                </Typography>
                                <Typography>
                                    Not sure what you should be charging for your property? No need to worry, let us do the numbers for you.
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <ArrowCircleDownIcon></ArrowCircleDownIcon>
                                <Typography sx={{fontWeight: 'bold', fontSize: 16}}>
                                    Lowest Commission
                                </Typography>
                                <Typography>
                                    You no longer have to negotiate commissions and haggle with other agents it only cost 2%!
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <LocationOnIcon></LocationOnIcon>
                                <Typography sx={{fontWeight: 'bold', fontSize: 16}}>
                                    Overall Control
                                </Typography>
                                <Typography>
                                    Get a virtual tour, and schedule visits before you rent or buy any proerties. You get overall control.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item  xs={12} md={12} align="center" sx={{
                    paddingBottom: '30px'
                }}>
                    <Grid item xs={12} md={4} sx={{
                            
                        }}>
                        <Typography sx={{
                                fontSize: "25px",
                                fontWeight: 'bold',
                        }}>
                                Based on your location
                        </Typography>
                        <Typography sx={{
                                marginTop: '20px',
                                marginRight: '20px',
                                paddingRight: '5px',
                        }}>
                               Some of our picked properties near you location
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container  xs={12} md={12} sx={{
                    paddingBottom: '30px'
                }}>
                    <Grid item xs={12} md={6} lg={6}>
                        <Tabs sx={{
                                    width: '300px',
                                    border:'1px solid',
                                    borderRadius: '10px',
                                    borderBottomLeftRadius: '0px',
                                    borderBottomRightRadius: '0px',
                                    justifyContent:'center',
                                    background: 'white',
                                    borderColor: '#e6e6ff'
                                }}>
                            <Tab icon={<KeyIcon />} iconPosition="start" label="Rent" />
                            <Tab icon={<ShoppingBagIcon />} iconPosition="start" label="Buy" />
                            <Tab icon={<StorefrontIcon />} iconPosition="start" label="Sell" />
                        </Tabs>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <AppSearchBar iconPosition='right' placeholder='Search…' />
                    </Grid>
                </Grid>
                <Grid container>
                            <Grid item xs={2} md={4} lg={4}>
                                <AppCardMedia></AppCardMedia>
                            </Grid>
                            <Grid item xs={2} md={4} lg={4}>
                                <AppCardMedia></AppCardMedia>
                            </Grid>
                            <Grid item xs={2} md={4} lg={4}>
                                <AppCardMedia></AppCardMedia>
                            </Grid>
                            <Grid item xs={2} md={4} lg={4}>
                                <AppCardMedia></AppCardMedia>   
                            </Grid>
                            <Grid item xs={2} md={4} lg={4}>
                                <AppCardMedia></AppCardMedia>
                            </Grid>
                            <Grid item xs={2} md={4} lg={4}>
                                <AppCardMedia></AppCardMedia>
                            </Grid>        
                </Grid>
                <Grid xs={12} md={12} llg={12} align="center" sx={{
                    padding: '30px'
                }}>
                    <Box sx={{width: '30%', display: 'flex' ,justifyContent: 'center'}}>
                        <Button variant="contained">Browser Properties</Button>
                    </Box>
                </Grid>
                <Grid xs={12} md={12} lg={12}>
                    <Grid>
                       <Typography> We make iit easy for tenants and landlords</Typography>
                       <Typography> We make iit easy for tenants and landlords</Typography>
                    </Grid>
                    
                    <Grid>
                        <Box>Vurtual home tour</Box>
                        <Box>Vurtual home tour</Box>
                        <Box>Vurtual home tour</Box>
                    </Grid>
                    <Divider></Divider>
                    <Grid>
                        <Box>
                            <Typography> 7.4% </Typography>
                            <Typography> Property Return Rate </Typography>
                        </Box>
                        <Box>
                            <Typography> 3,856 </Typography>
                            <Typography> Property in Sell & Rent </Typography>
                        </Box>
                        <Box>
                            <Typography> 2,540 </Typography>
                            <Typography> Daily Completed transactions </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid>
                    <Typography> No Span Promise</Typography>
                    <Typography>Are you a landlord?</Typography>
                    <Input></Input>
                </Grid>
            </AppGridContainer>
        </Box>
    </AppAnimate>);
};

export default PropertiesListing;