import { Link as RouterLink } from 'react-router-dom';
// material
import {
  Grid,
  Button,
  Container,
  Stack,
  Typography,
  Box,
  List,
  ListItem,
  Avatar,
  ListItemText
} from '@mui/material';
// components
import Page from '../components/Page';
import Tab from '../components/Tab';
import Iconify from '../components/Iconify';
import { BlogPostsSort, BlogPostsSearch } from '../sections/@dashboard/blog';
//
import POSTS from '../_mocks_/blog';

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'all', label: 'All' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' }
];
function TabList() {
  return (
    <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {[0, 1].map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem key={value} disablePadding>
            <Box
              sx={{
                m: 0.5,
                p: 2,
                height: '80px',
                width: '90%',
                borderRadius: 1,
                bgcolor: '#EEF7F9'
              }}
            >
              <Grid container spacing={0}>
                <Grid item xs={2}>
                  <Avatar
                    alt="USA"
                    src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                  />
                </Grid>
                <Grid item xs={6}>
                  <ListItemText id={labelId} primary="USD Wallet" />
                  <ListItemText id={labelId} primary="USD" />
                </Grid>
                <Grid item xs={4}>
                  <ListItemText id={labelId} primary="$2,000,000.50" />
                  <ListItemText
                    id={labelId}
                    sx={{ textAlign: 'right' }}
                    primary={value === 0 ? 'Default' : ''}
                  />
                </Grid>
              </Grid>
            </Box>
          </ListItem>
        );
      })}
    </List>
  );
}
const TAB_DATA = [
  {
    title: 'Active (3)',
    content: <TabList />
  },
  {
    title: 'InActive (2)',
    content: <p>InActive</p>
  },
  {
    title: 'Closed (0)',
    content: <p>Closed</p>
  }
];

// ----------------------------------------------------------------------

export default function Blog() {
  return (
    <Page title="GenioPay: Wallets">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="subtitle2" gutterBottom>
            Your Wallet (s)
          </Typography>
          <Button
            variant="contained"
            component={RouterLink}
            to="#"
            startIcon={<Iconify icon="eva:plus-fill" />}
          >
            Create New Wallet
          </Button>
        </Stack>

        <Stack mb={5} direction="row" spacing={3} alignItems="center">
          <BlogPostsSearch posts={POSTS} />
          <BlogPostsSort options={SORT_OPTIONS} />
        </Stack>

        <Grid container spacing={3} sx={{ mt: 5 }}>
          <Container component={Box}>
            <Grid container spacing={3} sx={{ p: 2 }}>
              <Grid xs={12} md={6}>
                <Tab tabs={TAB_DATA} defaultValue={0} />
              </Grid>
              <Grid xs={12} md={6}>
                <p>Hi</p>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Container>
    </Page>
  );
}
