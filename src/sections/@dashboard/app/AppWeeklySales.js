import { PropTypes } from 'prop-types';
// material
import { styled } from '@mui/material/styles';
import { Card, Grid, Typography, Stack, Avatar } from '@mui/material';
// utils
import account from '../../../_mocks_/account';
// component

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(2, 0),
  color: theme.palette.primary.darker,
  backgroundColor: '#FFF6E6'
}));

// ----------------------------------------------------------------------
WalletCard.propTypes = {
  color: PropTypes.object.isRequired,
  walletName: PropTypes.object.isRequired,
  walletSign: PropTypes.object.isRequired,
  walletBalance: PropTypes.object.isRequired,
  walletImg: PropTypes.object
};

export default function WalletCard(props) {
  return (
    <RootStyle sx={{ color: props.color }}>
      <Grid container sx={{ py: 0, px: 2 }}>
        <Grid item xs={6}>
          <Typography
            variant="caption"
            sx={{
              textOverflow: 'clip',
              whiteSpace: 'nowrap',
              verticalAlign: 'text-top',
              textAlign: 'left',
              pb: 1.5,
              color: 'gray',
              pt: 0
            }}
            component="p"
          >
            <p>{props.walletName}</p>
            <p>{props.walletSign}</p>
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{
              verticalAlign: 'text-bottom',
              pt: 1.5,
              pb: 0,
              color: 'black',
              px: 0,
              textAlign: 'left'
            }}
          >
            {props.walletBalance}
          </Typography>
        </Grid>
        <Grid item xs={3} alignItems="right" sx={{ py: 1, pl: 9 }}>
          <Stack alignItems="center" spacing={0} sx={{ borderRadius: 5, position: 'relative' }}>
            <Avatar src={props.walletImg || account.photoURL} alt="photoURL" />
          </Stack>
        </Grid>
      </Grid>
    </RootStyle>
  );
}
