import React, { useContext } from 'react';
import {
  AppBar,
  Avatar,
  Button,
  Card,
  CardContent,
  Container,
  IconButton,
  InputBase,
  styled,
  Toolbar,
  Typography,
  Paper,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { MyContext } from '../../MyContext';

const RootContainer = styled('div')({
  flexGrow: 1,
});

const Appbar = styled(AppBar)({
  backgroundColor: (theme) => theme.palette.primary.main,
});

const Title = styled(Typography)({
  flexGrow: 0.92,
  paddingLeft:"20px",
  marginRight: (theme) => theme.spacing(2),
});

const AvatarContainer = styled('div')({
  marginLeft: (theme) => theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
//   justifyContent: 'space-between',
//   width:"130px"
});

const SearchContainer = styled(Paper)({
    position: 'relative',
    borderRadius: 'borderRadius', // Using theme variable directly
    backgroundColor: 'common.white', // Using theme variable directly
    '&:hover': {
      backgroundColor: 'common.white', // Using theme variable directly
    },
    marginRight: 2, // Direct value
    marginLeft: 0,
    height:"40px",
    width: '60%',
    '@media (min-width: 600px)': { // Equivalent to theme.breakpoints.up('sm')
      marginLeft: 3, // Direct value
      width: 'auto',
    },
  });

const SearchIconContainer = styled('div')({
  padding: (theme) => theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const InputRoot = styled('div')({
  color: 'inherit',
  textAlign: 'center',
});

const InputInput = styled('input')({
    padding: (theme) => theme.spacing(1, 1, 1, 0),
    paddingLeft: (theme) => `calc(1em + ${theme.spacing(4)}px)`,
    borderTopLeftRadius: "20px",
    borderBottomLeftRadius: "20px",
    '&::placeholder': {
      paddingLeft: "20px",
      fontSize: "20px" // Adjust the padding value as needed
    },
    transition: (theme) => theme.transitions.create('width'),
    width: '60%',
    height: "45px",
    border: 'none', // Remove the border
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', // Add box shadow
    outline: 'none', // Remove the default outline
  });
  

  const CardContainer = styled('div')({
    marginTop: (theme) => theme.spacing(4),
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gridGap: "30px" // Adjust the gap as needed
  });

const CardItem = styled(Card)({
  maxWidth: 300,
});

const Home = () => {
    const {userName}=useContext(MyContext)
  return (
    <RootContainer>
      <Appbar position="static">
        <Toolbar>
            <MenuIcon/>
          <Title variant="h6">Home</Title>
          <AvatarContainer>
            <Avatar alt={userName} src="/path/to/your/logo.jpg" />
            <Typography variant="body1" sx={{marginLeft:"20px"}}>{userName?userName:"Demo User"}</Typography>
          </AvatarContainer>
        </Toolbar>
      </Appbar>
      <br />
      <br />
            <InputRoot>
              <InputInput placeholder="Search..." aria-label="search" />
              <Button variant='contained' sx={{ height: "45px", borderRadius: '0',width:"150px", borderTopRightRadius:"20px",borderBottomRightRadius:"20px" }}>Search</Button>
            </InputRoot>
            <br />
      <br />
      <Container>
        <CardContainer>
          <CardItem>
            <CardContent>
              <Typography variant="h6">Card 1</Typography>
              <Typography variant="body2">Description for Card 1.</Typography>
            </CardContent>
          </CardItem>
          <CardItem>
            <CardContent>
              <Typography variant="h6">Card 2</Typography>
              <Typography variant="body2">Description for Card 2.</Typography>
            </CardContent>
          </CardItem>
          <CardItem>
            <CardContent>
              <Typography variant="h6">Card 2</Typography>
              <Typography variant="body2">Description for Card 2.</Typography>
            </CardContent>
          </CardItem>
          <CardItem>
            <CardContent>
              <Typography variant="h6">Card 2</Typography>
              <Typography variant="body2">Description for Card 2.</Typography>
            </CardContent>
          </CardItem>
          {/* Add more cards as needed */}
        </CardContainer>
      </Container>
    </RootContainer>
  );
};

export default Home;
