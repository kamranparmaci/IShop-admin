import React from 'react';
import { styled } from '@mui/material/styles';
import {
  TextField,
  Button,
  Grid,
  InputAdornment,
  IconButton,
} from '@mui/material';
import {
  useForm,
  SubmitHandler,
  FormProvider,
  Controller,
} from 'react-hook-form';
import {
  VisibilityOff,
  Visibility,
  AccountCircle,
  EmailRounded,
} from '@mui/icons-material';

import DropZoneSection from '../../../UIs/dropzone';
import { useRegisterSuperadminMutation } from '../../../features/apis/auth';

// Create a new styled component based on the Button component
const StyledButton = styled(Button)({
  // Apply your custom styles here

  color: '#fff',
  borderRadius: '8px',
  padding: '12px 24px',
  fontSize: '16px',
  fontWeight: 500,
});

interface SuperadminRegisterInput {
  username: string;
  password: string;
  email: string;
  avatar: FileList;
}

const SuperadminRegisterForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const methods = useForm<SuperadminRegisterInput>();

  const [registerSuperadmin, result] = useRegisterSuperadminMutation();

  const handleDrop = (acceptedFiles: any) => {
    methods.setValue('avatar', acceptedFiles);
  };

  const onSubmit: SubmitHandler<SuperadminRegisterInput> = (data) => {
    const formData = new FormData();
    for (const value in data) {
      if (value !== 'avatar') {
        formData.append(value, data[value]);
      }
    }

    formData.append('avatar', methods.watch('avatar')[0].name);

    registerSuperadmin(formData);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="username"
              label="Username"
              {...methods.register('username')}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="password"
              label="Password"
              {...methods.register('password')}
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(true)}
                      onMouseDown={() => setShowPassword(false)}
                      edge="end"
                      sx={{ ml: -4 }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="email"
              label="Email"
              {...methods.register('email')}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <EmailRounded />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <DropZoneSection onDrop={handleDrop} />
            {methods.watch('avatar') && (
              <img
                src={URL.createObjectURL(methods.watch('avatar')[0])}
                alt=""
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                }}
              />
            )}
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              size="large"
              type="submit"
              sx={{ width: '100%' }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </FormProvider>
  );
};

export default SuperadminRegisterForm;
