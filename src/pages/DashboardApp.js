// material
import { Box, Grid, Container, IconButton, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
import { FunctionsCard, AppWeeklySales, AppWebsiteVisits } from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="Dashboard | GenioPay">
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWeeklySales
              color="#FFF6E6"
              walletName="Personal Account"
              walletSign="USD"
              walletBalance="$10,250.00"
              walletImg="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppWeeklySales
              color="#F1F5F9"
              walletName="EUR Wallet"
              walletSign="EUR"
              walletBalance="€4000.53"
              walletImg="https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg"
            />
          </Grid>
          <Grid item alignItems="center" xs={1}>
            <IconButton sx={{ color: 'text.primary', py: 4 }}>
              <Iconify
                icon="akar-icons:circle-plus"
                sx={{ color: '#008AA8' }}
                width={50}
                height={50}
              />
            </IconButton>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Box>
              <Typography variant="subtitle2" sx={{ color: 'black' }}>
                Quick Links
              </Typography>
              <Typography variant="p" sx={{ color: 'gray' }}>
                Your frequently used actions for easy access.
              </Typography>
            </Box>
            <Grid container spacing={8} sx={{ pt: 7 }}>
              <Grid item xs={3} sm={2} lg={1} sx={{ mx: 1.5 }}>
                <FunctionsCard color="#F97316" name="Add new Wallet" icon="clarity:wallet-solid" />
              </Grid>
              <Grid item xs={3} sm={2} lg={1} sx={{ mx: 1.5 }}>
                <FunctionsCard
                  color="#005061"
                  name="Add new Card"
                  icon="ant-design:credit-card-filled"
                />
              </Grid>
              <Grid item xs={3} sm={2} lg={1} sx={{ mx: 1.5 }}>
                <FunctionsCard
                  color="#F59E0B"
                  name="Balance Exchange"
                  icon="ant-design:dollar-circle-outlined"
                />
              </Grid>
              <Grid item xs={3} sm={2} lg={1} sx={{ mx: 1.5 }}>
                <FunctionsCard color="#5EEAD4" name="Transfer to Account" icon="bx:transfer-alt" />
              </Grid>
              <Grid item xs={3} sm={2} lg={1} sx={{ mx: 1.5 }}>
                <FunctionsCard color="#9333EA" name="Generate Voucher" icon="carbon:ticket" />
              </Grid>
              <Grid item xs={3} sm={2} lg={1} sx={{ mx: 1.5 }}>
                <FunctionsCard color="#FFCB00" name="Mobile Money" icon="fa-solid:money-bill" />
              </Grid>
              <Grid item xs={3} sm={2} lg={1} sx={{ mx: 1.5 }}>
                <FunctionsCard color="#F43F5E" name="Payment Link" icon="bi:link-45deg" />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <AppWebsiteVisits />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
