import { PropTypes } from 'prop-types';
import { Grid } from '@mui/material';

CardHeader.propTypes = {
  title: PropTypes.object,
  content: PropTypes.object,
  right: PropTypes.object,
  gridLeft: PropTypes.object,
  gridRight: PropTypes.object,
  gridContent: PropTypes.object
};

export default function CardHeader({ title, content, right, gridLeft, gridRight, gridContent }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={gridLeft || 'auto'}>
        <h3
          style={{
            fontStyle: 'normal',
            fontWeight: 'bold',
            verticalAlign: 'middle',
            padding: '15px',
            textAlign: 'center',
            color: '#1B1B1B'
          }}
        >
          {title}
        </h3>
      </Grid>
      <Grid item alignItems="center" sx={{ ml: 5 }} container xs={gridContent || 5}>
        {content}
      </Grid>
      <Grid item xs={gridRight || 'auto'} container>
        {right}
      </Grid>
    </Grid>
  );
}
