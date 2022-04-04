import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const Root = styled('div')(({ theme }) => ({
  '& > .logo-icon': {
    transition: theme.transitions.create(['width', 'height'], {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeInOut,
    }),
  },
  '& > .badge, & > .logo-text': {
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeInOut,
    }),
  },
}));

function Logo() {
  return (
    <Root className="flex items-center">
      <img
        style={{ borderRadius: '5px', border: '1px solid whitesmoke' }}
        className="logo-icon w-24 h-24"
        src="assets/images/logos/myScrapbook.png"
        alt="logo"
      />
      <Typography
        sx={{ color: 'whitesmoke' }}
        className="logo-text text-16 leading-none mx-12 font-medium"
      >
        My Scrapbook
      </Typography>
    </Root>
  );
}

export default Logo;
