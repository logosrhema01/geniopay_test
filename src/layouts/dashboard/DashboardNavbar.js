import PropTypes from 'prop-types';
// material
import { alpha, styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, IconButton, Typography, Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
// components
import Iconify from '../../components/Iconify';
//
import Searchbar from './Searchbar';
import AccountPopover from './AccountPopover';
import PlantedPopover from './PlantedPopover';
import NotificationsPopover from './NotificationsPopover';

// mocks
import account from '../../_mocks_/account';

import useResponsive from '../../hooks/useResponsive';
// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  backgroundColor: alpha(theme.palette.background.default, 0.72),
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${DRAWER_WIDTH + 1}px)`
  }
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5)
  }
}));

// ----------------------------------------------------------------------

DashboardNavbar.propTypes = {
  onOpenSidebar: PropTypes.func
};

export default function DashboardNavbar({ onOpenSidebar }) {
  const isDesktop = useResponsive('up', 'lg');
  return (
    <RootStyle>
      <ToolbarStyle>
        <IconButton
          onClick={onOpenSidebar}
          sx={{ mr: 1, color: 'text.primary', display: { lg: 'none' } }}
        >
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>

        <Typography variant="h5" sx={{ color: 'black' }}>
          {isDesktop ? `Welcome, ${account.displayName}` : 'Hi, H.S'}
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
          {isDesktop ? (
            <>
              <Searchbar />
              <PlantedPopover />
              <NotificationsPopover />
              <AccountPopover />
            </>
          ) : (
            <>
              <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
              </IconButton>
              <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <Iconify icon="emojione:deciduous-tree" />
              </IconButton>
              <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <Iconify icon="eva:bell-outline" width={20} height={20} />
              </IconButton>
              <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <Avatar
                  src={account.photoURL}
                  sx={{
                    padding: 0,
                    width: 20,
                    height: 20
                  }}
                  alt="photoURL"
                />
              </IconButton>
            </>
          )}
        </Stack>
      </ToolbarStyle>
    </RootStyle>
  );
}
