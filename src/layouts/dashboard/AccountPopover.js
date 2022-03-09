// material
import { Button, Box, Typography, Avatar, IconButton } from '@mui/material';
import Iconify from '../../components/Iconify';

//
import account from '../../_mocks_/account';

export default function AccountPopover() {
  return (
    <IconButton
      size="large"
      sx={{
        '&:hover': {
          borderRadius: 0
        }
      }}
    >
      <Avatar
        src={account.photoURL}
        sx={{
          padding: 0,
          width: 30,
          height: 30
        }}
        alt="photoURL"
      />
      <Box sx={{ paddingLeft: 2 }}>
        <Typography
          variant="caption"
          sx={{
            textOverflow: 'clip',
            whiteSpace: 'nowrap',
            textAlign: 'left',
            color: '#22C55E'
          }}
          component="p"
        >
          Verified
        </Typography>

        <Typography variant="subtitle2">{account.displayName}</Typography>
      </Box>
      <Box sx={{ paddingLeft: 0 }}>
        <Iconify icon="gridicons:dropdown" width={20} height={20} />
      </Box>
    </IconButton>
  );
}
