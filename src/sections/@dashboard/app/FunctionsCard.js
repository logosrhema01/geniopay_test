import { PropTypes } from 'prop-types';
// material
import { styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils
//
import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(1, 0),
  margin: theme.spacing(1, 1),
  width: '90px',
  backgroundColor: 'transparent'
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(5),
  height: theme.spacing(5),
  justifyContent: 'center',
  marginBottom: theme.spacing(3)
}));

// ----------------------------------------------------------------------

FunctionsCard.propTypes = {
  name: PropTypes.object.isRequired,
  icon: PropTypes.object.isRequired,
  color: PropTypes.object
};

export default function FunctionsCard(props) {
  return (
    <RootStyle>
      <IconWrapperStyle sx={{ bgcolor: props.color }}>
        <Iconify sx={{ color: 'white' }} icon={props.icon} width={20} height={20} />
      </IconWrapperStyle>
      <Typography variant="body1" sx={{ maxWidth: '100px' }}>
        {props.name}
      </Typography>
    </RootStyle>
  );
}
