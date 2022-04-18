/* eslint-disable react/jsx-no-target-blank */
import AppBar from '@mui/material/AppBar';
import { ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import { memo } from 'react';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { selectFooterTheme } from 'app/store/fuse/settingsSlice';
import clsx from 'clsx';
import { AiFillGithub, AiOutlineCopyrightCircle } from 'react-icons/ai';
import { SiMaterialui, SiReact, SiTailwindcss } from 'react-icons/si';
import { Box, Button } from '@mui/material';

function FooterLayout1(props) {
  const footerTheme = useSelector(selectFooterTheme);

  return (
    <ThemeProvider theme={footerTheme}>
      <AppBar
        id="fuse-footer"
        className={clsx('relative z-20 shadow-md', props.className)}
        color="default"
        style={{ backgroundColor: footerTheme.palette.background.paper }}
      >
        <Toolbar className="min-h-48 md:min-h-36 px-8 sm:px-12 py-0 flex items-center justify-between overflow-x-auto">
          <Typography className="flex items-center justify-between text-sm">
            <AiOutlineCopyrightCircle style={{ margin: '0 5px 8px 20px' }} /> Copyright 2022 by
            Jameson Paz
          </Typography>
          <div style={{ fontSize: '3rem' }} className="flex justify-between">
            <img
              style={{
                width: '70px',
                height: 'auto',
                marginRight: '20px',
              }}
              src="assets/images/logos/logo-white.png"
              alt="logo"
            />

            <SiReact style={{ marginRight: '20px' }} />
            <SiMaterialui style={{ marginRight: '20px' }} />
            <SiTailwindcss style={{ marginRight: '20px' }} />
            <AiFillGithub style={{ marginRight: '20px' }} />
          </div>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default memo(FooterLayout1);
