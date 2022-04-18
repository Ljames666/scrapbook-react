import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import FuseAnimate from '@fuse/core/FuseAnimate';
import { TextFieldFormsy } from '@fuse/core/formsy';
import Formsy from 'formsy-react';
import {
  Button,
  Card,
  CardContent,
  InputAdornment,
  Icon,
  IconButton,
  Typography,
} from '@mui/material';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

import { apiSubmitRegister } from 'app/auth/store/registerSlice';
import { Root, GradientSection } from './styleds';

function Register() {
  const dispatch = useDispatch();

  const [isFormValid, setIsFormValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const formRef = useRef(null);

  function disableButton() {
    setIsFormValid(false);
  }

  function enableButton() {
    setIsFormValid(true);
  }

  function handleSubmit(model) {
    dispatch(apiSubmitRegister(model));
    formRef.current.reset();
  }

  return (
    <Root
      sx={{ height: '90vh' }}
      className="flex flex-col flex-auto flex-shrink-0 p-24 md:flex-row md:p-0"
    >
      <GradientSection className="flex flex-col flex-grow-0 items-center text-white p-16 text-center md:p-128 md:items-start md:flex-shrink-0 md:flex-1 md:text-left">
        <FuseAnimate animation="transition.slideUpIn" delay={300}>
          <Typography variant="h3" color="inherit" className="font-800 leading-tight">
            Bem-vindo ao seu
            <br /> Scrapbook!
          </Typography>
        </FuseAnimate>

        <FuseAnimate delay={600}>
          <Typography variant="h5" color="inherit" className="mt-32 mb-32">
            Um App onde vôce pode organizar e administratar suas tarefas, contatos e notas em geral.
          </Typography>
        </FuseAnimate>

        <FuseAnimate delay={1200}>
          <Typography variant="h4" className=" font-bold text-20 sm:text-24">
            Cadastre-se agora <DoubleArrowIcon />
          </Typography>
        </FuseAnimate>
      </GradientSection>

      <FuseAnimate animation={{ translateX: [0, '100%'] }} delay={1200}>
        <Card className="w-full max-w-400 mx-auto m-16 md:m-0" square>
          <CardContent
            sx={{ height: '90%' }}
            className="flex flex-col items-center justify-center p-32 md:p-48 md:pt-128 "
          >
            <img
              style={{ borderRadius: '5px', border: '1px solid whitesmoke' }}
              className="w-128 mb-32"
              src="assets/images/logos/myScrapbook.png"
              alt="logo"
            />

            <Formsy
              onValidSubmit={handleSubmit}
              onValid={enableButton}
              onInvalid={disableButton}
              ref={formRef}
              className="flex flex-col justify-center w-full"
            >
              <TextFieldFormsy
                className="mb-12"
                type="text"
                name="name"
                label="Name"
                // validations="isName"
                // validationErrors="This is not a valid name"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Icon className="text-20" color="action">
                        account_box
                      </Icon>
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
                required
              />
              <TextFieldFormsy
                className="mb-12"
                type="text"
                name="username"
                label="Username"
                // validations="isUsername"
                // validationErrors="This is not a valid username"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Icon className="text-20" color="action">
                        child_care
                      </Icon>
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
                required
              />
              <TextFieldFormsy
                className="mb-12"
                type="text"
                name="email"
                label="E-mail"
                // validations="isEmail"
                // validationErrors="This is not a valid email"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Icon className="text-20" color="action">
                        email
                      </Icon>
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
                required
              />

              <TextFieldFormsy
                className="mb-12"
                type="password"
                name="password"
                label="Senha"
                InputProps={{
                  className: 'pr-2',
                  type: showPassword ? 'text' : 'password',
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword(!showPassword)}>
                        <Icon className="text-20" color="action">
                          {showPassword ? 'visibility' : 'visibility_off'}
                        </Icon>
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
                required
              />
              <TextFieldFormsy
                className="mb-12"
                type="password"
                name="reppeatPassword"
                label="Repita a senha"
                InputProps={{
                  className: 'pr-2',
                  type: showPassword ? 'text' : 'password',
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword(!showPassword)}>
                        <Icon className="text-20" color="action">
                          {showPassword ? 'visibility' : 'visibility_off'}
                        </Icon>
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
                required
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                className="w-full mx-auto mt-10"
                aria-label="SEND"
                disabled={!isFormValid}
                value="legacy"
              >
                Enviar
              </Button>
            </Formsy>

            <div className="flex flex-col items-center justify-center pt-24 pb-32">
              <span className="font-medium">Já tem conta?</span>
              <Link className="font-medium" to="/login">
                Entre agora
              </Link>
            </div>
          </CardContent>
        </Card>
      </FuseAnimate>
    </Root>
  );
}

export default Register;
