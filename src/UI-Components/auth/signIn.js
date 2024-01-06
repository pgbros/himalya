import React, { useState } from 'react';
import { Button, TextField, Paper, Typography, Avatar } from '@mui/material';
import poster from "../../assets/images/hostelPoster.png"
import hostelLogo from "../../assets/images/h-logo.jpg"
import { styled } from '@mui/system';

const StyledContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  height: '100vh',
}));

const StyledPoster = styled('div')(({ theme }) => ({
  flex: 1,
  background: 'linear-gradient(to right, #2196F3, #21CBF3)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  // padding: theme.spacing(4),
}));

const StyledSignIn = styled(Paper)(({ theme }) => ({
  width: 350,
  margin: theme.spacing(8),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(4),
  position: 'relative',
  borderRadius: theme.spacing(2), // Rounded corners
  overflow: 'hidden',
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(20),
  height: theme.spacing(20),
  marginTop:"100px"
  // margin: `-${theme.spacing(5)} 0 ${theme.spacing(2)} 0`, // Adjust margins for positioning
  // background: theme.palette.primary.main,
}));

const StyledForm = styled('form')(({ theme }) => ({
  display: 'flex',
  marginTop:"20px",
  flexDirection: 'column',
  gap: theme.spacing(2),
  width: '100%',
}));

const SignIn = (props) => {
  const { handleSignIn, mode, setMode } = props;
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ userName: '', password: '' });

  const validateForm = () => {
    let valid = true;
    const newErrors = { userName: '', password: '' };

    if (!userName.trim()) {
      newErrors.userName = 'User Name is required';
      valid = false;
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSignInClick = () => {
    if (validateForm()) {
      handleSignIn(userName, password);
    }
  };

  return (
    <StyledContainer>
      <StyledPoster>
        {/* Add your poster content here */}
        <img src={poster} style={{width:"100%",height:"100%"}} />
      </StyledPoster>
      <StyledSignIn elevation={3}>
        <StyledAvatar>
          {/* You can use an icon or an image for the profile icon */}
          <img src={hostelLogo} style={{width:"120%"}}/>
        </StyledAvatar>
        <Typography variant="h5" align="center" marginTop={"100px"} gutterBottom>
          {mode}
        </Typography>
        <StyledForm>
          <TextField
            label="User Name"
            variant="outlined"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            fullWidth
            error={!!errors.userName}
            helperText={errors.userName}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            error={!!errors.password}
            helperText={errors.password}
          />
          <Button variant="contained" color="primary" onClick={handleSignInClick} fullWidth>
            {mode}
          </Button>
        </StyledForm>
        <Button variant="outlined" color="primary" style={{marginTop:"20px"}} onClick={()=>{mode=="SIGN IN"?setMode("SIGN UP"):setMode("SIGN IN")}} fullWidth>
          {mode=="SIGN IN"?"SIGN UP":"SIGN IN"}
        </Button>
      </StyledSignIn>
    </StyledContainer>
  );
};

export default SignIn;
