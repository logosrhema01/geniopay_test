import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import {
  Box,
  List,
  ListItem,
  ButtonBase,
  Paper,
  Button,
  IconButton,
  Drawer,
  Grid,
  Typography,
  Divider,
  Stack
} from '@mui/material';
// icons
import { Visibility, VisibilityOff, Star } from '@mui/icons-material';
// mocks_
// hooks
import useResponsive from '../../hooks/useResponsive';
// components
import Logo from '../../components/Logo';
import Scrollbar from '../../components/Scrollbar';
import NavSection from '../../components/NavSection';
//
import sidebarConfig from './SidebarConfig';
import { Wallet } from '../../icons';
// ----------------------------------------------------------------------

const DRAWER_WIDTH = '22vw';

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    width: DRAWER_WIDTH
  }
}));

// ----------------------------------------------------------------------

DashboardSidebar.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func
};

export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }) {
  const { pathname } = useLocation();

  const isDesktop = useResponsive('up', 'lg');
  const [showBalance, setShowBalance] = useState(false);
  const handleShowBalance = () => setShowBalance(!showBalance);

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' }
      }}
    >
      <Box sx={{ px: 5, py: 5, display: 'inline-flex' }}>
        <Logo />
      </Box>

      <Box sx={{ mb: 5, mx: 2.5 }}>
        <Stack
          alignItems="center"
          bgcolor="#2B899D"
          spacing={0}
          sx={{ p: 0.7, borderRadius: 1, position: 'relative' }}
        >
          <List sx={{ width: '95%' }}>
            <ListItem sx={{ py: 0.1 }}>
              <Grid container sx={{ py: 0.2 }}>
                <Grid item xs={3} alignItems="right" sx={{ py: 1, pr: 2 }}>
                  <Stack
                    alignItems="center"
                    bgcolor="white"
                    spacing={0}
                    sx={{ p: 0.7, borderRadius: 1, position: 'relative' }}
                  >
                    <Wallet fontSize="medium" fillColor="#14B8A6" strokeColor="#14B8A6" />
                  </Stack>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="caption"
                    sx={{
                      textOverflow: 'clip',
                      whiteSpace: 'nowrap',
                      color: 'primary.contrastText'
                    }}
                    component="p"
                  >
                    Wallet Balance
                  </Typography>

                  <Typography variant="subtitle2" sx={{ color: 'primary.contrastText' }}>
                    {showBalance ? '$15, 001.00' : '$ ********'}
                  </Typography>
                </Grid>
                <Grid item xs={3} sx={{ p: 1, pl: 2 }}>
                  <IconButton aria-label="visibilty" onClick={handleShowBalance}>
                    {showBalance ? (
                      <VisibilityOff sx={{ color: 'white ' }} />
                    ) : (
                      <Visibility sx={{ color: 'white ' }} />
                    )}
                  </IconButton>
                </Grid>
              </Grid>
            </ListItem>
            <Divider sx={{ color: '#EAFBFF' }} />
            <ListItem sx={{ py: 0.1 }}>
              <Grid container sx={{ py: 0.2 }}>
                <Grid item xs={3} alignItems="right" sx={{ py: 1, pr: 2 }}>
                  <Stack
                    alignItems="center"
                    bgcolor="white"
                    spacing={0}
                    sx={{ p: 0.7, borderRadius: 1, position: 'relative' }}
                  >
                    <Star fontSize="medium" sx={{ color: '#F59E0B' }} />
                  </Stack>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="caption"
                    sx={{
                      textOverflow: 'clip',
                      whiteSpace: 'nowrap',
                      color: 'primary.contrastText'
                    }}
                    component="p"
                  >
                    Awarded Points
                  </Typography>

                  <Typography variant="subtitle2" sx={{ color: 'primary.contrastText' }}>
                    35
                  </Typography>
                </Grid>
              </Grid>
            </ListItem>
            <Divider sx={{ color: '#EAFBFF' }} />
            <ListItem sx={{ py: 0.1 }}>
              <Grid container sx={{ py: 0.2 }}>
                <Grid item xs={6} alignItems="center">
                  <Button
                    variant="contained"
                    sx={{ bgcolor: '#FDA4AF', width: '90%', borderRadius: 0.5 }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        textOverflow: 'clip',
                        whiteSpace: 'nowrap',
                        color: 'primary.contrastText',
                        pt: 0.5
                      }}
                      component="p"
                    >
                      Pay-In
                    </Typography>
                  </Button>
                </Grid>
                <Grid item xs={6} alignItems="center">
                  <Button
                    variant="contained"
                    sx={{ bgcolor: '#FFFFFF', width: '90%', borderRadius: 0.5 }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        textOverflow: 'clip',
                        whiteSpace: 'nowrap',
                        color: 'primary.main',
                        pt: 0.5
                      }}
                      component="p"
                    >
                      Pay-Out
                    </Typography>
                  </Button>
                </Grid>
              </Grid>
            </ListItem>
          </List>
        </Stack>
      </Box>

      <NavSection navConfig={sidebarConfig} />

      <Box sx={{ flexGrow: 1 }} />

      <Paper sx={{ p: 2, mt: 5, mb: 5, mx: 'auto', maxWidth: '85%', flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 50, height: 50 }}>
              <img alt="refer" src="/static/mock-images/refer.png" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography variant="subtitle2">Refer and earn</Typography>
                <Typography variant="caption">Use the below link to invite friends</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box sx={{ p: 2 }}>
          <Button variant="contained" fullWidth size="large">
            Invite friends
          </Button>
        </Box>
      </Paper>
    </Scrollbar>
  );

  return (
    <RootStyle>
      {!isDesktop && (
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { bgcolor: '#017189', maxWidth: '90vw' }
          }}
        >
          {renderContent}
        </Drawer>
      )}

      {isDesktop && (
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: '#017189',
              borderRightStyle: 'dashed'
            }
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </RootStyle>
  );
}
