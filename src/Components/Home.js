import * as React from 'react';
import {Link} from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            COURSES
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>

      <div>
        <Card sx={{ maxWidth: 345, marginLeft: '10%', marginTop: '3%' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://www.ku.ac.ae/wp-content/uploads/2022/06/Blockchain-in-the-Oil-and-Gas-Industry-min.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Blockchain
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Blockchain technology is an advanced database mechanism that allows transparent information sharing within a business network
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button component = {Link} to = "/Register" size="small" color="primary">
              Register
            </Button>
          </CardActions>
        </Card>
        {/* Add other Card components as needed */}
        <Card sx={{ maxWidth: 345, marginLeft: '40%' ,marginTop: '-21%' }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image="https://www.techopedia.com/wp-content/uploads/2024/02/cloud_icon_01.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Cloud Computing
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Cloud Computing refers to the delivery of on-demand computing services
         over the Internet on an as-needed basis. 
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button component = {Link} to = "/Register" size="small" color="primary">
        Register
      </Button>
    </CardActions>
  </Card>
  <Card sx={{ maxWidth: 345, marginLeft: '70%' ,marginTop: '-22%' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://www.datapro.in/uploads/19bb9d3025ebdad2986693f18afe08e4.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Advanced Java
          </Typography>
          <Typography variant="body2" color="text.secondary">
                Advanced Java is the collection of technologies and tools that enable 
                developers to create dynamic and secure applications.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button component = {Link} to = "/Register" size="small" color="primary">
          Register
        </Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345, marginLeft: '10%' ,marginTop: '3%' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://1000logos.net/wp-content/uploads/2020/08/Python-Logo.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Python
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Python is a popular programming language. Python can be used on a server to create web applications.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button component = {Link} to = "/Register" size="small" color="primary">
          Register
        </Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345, marginLeft: '40%' ,marginTop: '-22%' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://ehlion.com/wp-content/uploads/2020/11/Technical-English.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Technical English
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Technical English is a specialised language style that enables accurate 
            and efficient communication within and between industries.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button component = {Link} to = "/Register" size="small" color="primary">
          Register
        </Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345, marginLeft: '70%' ,marginTop: '-22%' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://store.hp.com/app/assets/images/uploads/prod/what-is-my-operating-system-hero1573502075719107.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Operating System
          </Typography>
          <Typography variant="body2" color="text.secondary">
          An operating system is the most important software that runs on a computer. 
          It manages the computer's memory and processes.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button component = {Link} to = "/Register" size="small" color="primary">
          Register
        </Button>
      </CardActions>
    </Card>
      </div>
    </Box>
  );
}
