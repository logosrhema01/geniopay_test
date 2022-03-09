import { Button } from '@mui/material';
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

export default function PlantedPopover() {
  return (
    <Button
      variant="text"
      sx={{
        padding: 0
      }}
      size="small"
      startIcon={<Iconify icon="emojione:deciduous-tree" />}
    >
      0 planted
    </Button>
  );
}
