import { useDispatch } from 'react-redux';

import FuseAnimate from '@fuse/core/FuseAnimate';
import FuseCountdown from '@fuse/core/FuseCountdown';

import {
  // Button,
  Card,
  CardContent,
  // InputAdornment,
  Icon,
  // IconButton,
  Typography,
} from '@mui/material';
// import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

import { Root, GradientSection } from './styleds';

function Release() {
  const dispatch = useDispatch();

  return (
    <Root
      sx={{ height: '80vh' }}
      className="flex flex-col flex-auto flex-shrink-0 p-24 md:flex-row md:p-0"
    >
      <GradientSection
        sx={{ height: '100%', width: '100%' }}
        className="flex flex-col flex-auto flex-shrink-0 items-center justify-center p-24 md:flex-row md:p-0"
      >
        <FuseAnimate delay={300}>
          <Card sx={{ height: '70%', width: '20%' }} elevation={12}>
            <CardContent className="flex flex-col  items-center justify-center p-28  md:p-6">
              <img
                style={{ borderRadius: '10px' }}
                className="w-200 my-28"
                src="assets/images/logos/myScrapbook.png"
                alt="logo"
              />
              <Icon sx={{ fontSize: '70px' }}>construction</Icon>
              <Typography sx={{ textAlign: 'center' }} className="px-4 mb-16">
                Em manutenção!
              </Typography>
            </CardContent>
          </Card>
        </FuseAnimate>
      </GradientSection>
    </Root>
  );
}

export default Release;
