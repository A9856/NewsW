import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { ShoppingCart } from '@mui/icons-material';
import Carousel from 'react-material-ui-carousel';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { Grid, TextField, Paper } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import img1 from "../../Assests/images/a.png"
const pages = ['Home', 'About', 'Shop', 'Feature', 'Services', 'ContactUS',];
const settings = ['Profile', 'Cart', 'Checkout', 'Logout'];
var items = [
    { pic: "img1" },
    { pic: "/Images/b1.jpg" },
    { pic: "/Images/b2.webp" },
    { pic: "/Images/b3.jpg" },
    { pic: "/Images/b4.jpg" },
    { pic: "/Images/b5.webp" },
    { pic: "/Images/b6.webp" },
    { pic: "/Images/b7.webp" },
    { pic: "/Images/b8.webp" },
    { pic: "/Images/b9.webp" },
    { pic: "/Images/b10.jpg" },
    { pic: "/Images/b11.png" },
    { pic: "/Images/b12.webp" },
    { pic: "/Images/b13.avif" },
    { pic: "/Images/i.webp" },
    { pic: "/Images/i2.webp" },
    { pic: "/Images/i3.webp" },
    { pic: "/Images/i4.jpg" },
    { pic: "/Images/i5.webp" },
    { pic: "/Images/i6.jpeg" }
]
// function Item(props)
// {
//     return (
//        <img src={props.item.pic} height={500} width={"100%"}/>
//     )
// }

export default function MaterialUIExample() {
    let data = [
        { id: 1, name: "Product1", basePrice: 2400, discount: 50, finalPrice: 1200, pic: "img1" },
        { id: 2, name: "Product2", basePrice: 2400, discount: 50, finalPrice: 1200, pic: "/Images/b1.jpg" },
        { id: 3, name: "Product3", basePrice: 2400, discount: 50, finalPrice: 1200, pic: "/Images/b2.webp" },
        { id: 4, name: "Product4", basePrice: 2400, discount: 50, finalPrice: 1200, pic: "/Images/b3.jpg" },
        { id: 5, name: "Product5", basePrice: 2400, discount: 50, finalPrice: 1200, pic: "/Images/b4.jpg" },
        { id: 6, name: "Product6", basePrice: 2400, discount: 50, finalPrice: 1200, pic: "/Images/b5.webp" },
        { id: 7, name: "Product7", basePrice: 2400, discount: 50, finalPrice: 1200, pic: "/Images/b6.webp" },
        { id: 8, name: "Product8", basePrice: 2400, discount: 50, finalPrice: 1200, pic: "/Images/b7.webp" },
        { id: 9, name: "Product9", basePrice: 2400, discount: 50, finalPrice: 1200, pic: "/Images/b8.webp" },
        { id: 10, name: "Product10", basePrice: 2400, discount: 50, finalPrice: 1200, pic: "/Images/b9.webp" },
        { id: 11, name: "Product11", basePrice: 2400, discount: 50, finalPrice: 1200, pic: "/Images/b10.jpg" },
        { id: 12, name: "Product12", basePrice: 2400, discount: 50, finalPrice: 1200, pic: "/Images/b11.png" },
        { id: 13, name: "Product13", basePrice: 2400, discount: 50, finalPrice: 1200, pic: "/Images/b12.webp" },
        { id: 14, name: "Product14", basePrice: 2400, discount: 50, finalPrice: 1200, pic: "/Images/b13.avif" },
        { id: 15, name: "Product15", basePrice: 2400, discount: 50, finalPrice: 1200, pic: "/Images/i.webp" },
        { id: 16, name: "Product16", basePrice: 2400, discount: 50, finalPrice: 1200, pic: "/Images/i2.webp" },
        { id: 17, name: "Product17", basePrice: 2400, discount: 50, finalPrice: 1200, pic: "/Images/i3.webp" },
        { id: 18, name: "Product18", basePrice: 2400, discount: 50, finalPrice: 1200, pic: "/Images/i4.jpg" },
        { id: 19, name: "Product19", basePrice: 2400, discount: 50, finalPrice: 1200, pic: "/Images/i5.webp" },
        { id: 20, name: "Product20", basePrice: 2400, discount: 50, finalPrice: 1200, pic: "/Images/i6.jpeg" }
    ]
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    /* Button Delete 
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };*/

    /* for delete button 
    const handleDelete = () => {
        console.log("Item Deleted!"); // Replace this with your delete function
        setOpen(false);
    };  */


    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <ShoppingCart sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.1rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Dcart
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{ display: { xs: 'block', md: 'none' } }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <ShoppingCart sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.1rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Dcart
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/Images/b14.jpeg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>             
            <Carousel>
                {
                    items.map((item) => <img key={item.id} src={item.pic} height={500} width={"100%"} />)
                }
            </Carousel>
            <Grid container>
                {data.map((p) => {
                    return <Grid item key={p.id} xl={2} lg={3} md={4} sm={6} xs={12}>
                        <Card className='mb-3'>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={p.pic}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {p.name}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        <del className='text-danger'>&#8377;{p.basePrice}</del>{p.finalPrice}<sup>{p.discount}%Off</sup>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" variant='contained' className='back text-light text-center w-100'>
                                    Add to Cart
                                </Button>
                            </CardActions>
                        </Card>

                    </Grid>
                })}
            </Grid>
            <Grid container spacing={2} sx={{ padding: 4 }}>
                {/* Image Section */}
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} sx={{ padding: 2, textAlign: "center" }}>
                        <img
                            src="/Images/b15.jpeg"
                            alt="Placeholder" width={"100%"}
                            className='w-100'
                        />
                    </Paper>
                </Grid>

                {/* Form Section */}
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} sx={{ padding: 3 }}>
                        <Typography variant="h5" gutterBottom>
                            Contact Form
                        </Typography>
                        <form>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField fullWidth label="Full Name" variant="outlined" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth label="Email" type="email" variant="outlined" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth label="Password" type="Passwrod" variant="outlined" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Message"
                                        variant="outlined"
                                        multiline
                                        rows={4}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="contained" color="primary" fullWidth>
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Paper>
                </Grid>
    
      <Button variant="contained" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            component: 'form',
            onSubmit: (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              const email = formJson.email;
              console.log(email);
              handleClose();
            },
          },
        }}
      >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogContent>
          
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="e"
            label="Full Name"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Subscribe</Button>
        </DialogActions>
      </Dialog>
    
            </Grid>
            
            {/* for delete button 
             <div>
                <Button variant="contained" color="error" onClick={handleClickOpen}>
                    Delete Item
                </Button>

                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Confirm Delete</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Are you sure you want to delete this item? This action cannot be undone.
                        </DialogContentText>
                    </DialogContent>

                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={handleDelete} color="error" variant="contained">
                            Confirm Delete
                        </Button>
                    </DialogActions>
                </Dialog>
            </div> */}
        </>
    );
}

