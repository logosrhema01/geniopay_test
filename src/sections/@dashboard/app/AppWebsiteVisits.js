import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, Select, Box } from '@mui/material';
//
import { BaseOptionChart } from '../../../components/charts';
import CardHeader from '../../../components/CardHeader';

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    name: '',
    type: 'line',
    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
  }
];

export default function AppWebsiteVisits() {
  const chartOptions = merge(BaseOptionChart(), {
    stroke: { width: [3] },
    plotOptions: { bar: { columnWidth: '11%', borderRadius: 4 } },
    fill: { type: ['solid'] },
    labels: [
      '01/01/2003',
      '02/01/2003',
      '03/01/2003',
      '04/01/2003',
      '05/01/2003',
      '06/01/2003',
      '07/01/2003',
      '08/01/2003',
      '09/01/2003',
      '10/01/2003',
      '11/01/2003'
    ],
    xaxis: { type: 'datetime' },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y) => {
          if (typeof y !== 'undefined') {
            return `$${y.toFixed(0)}`;
          }
          return y;
        }
      }
    }
  });

  return (
    <Card>
      <CardHeader
        title="Activity"
        gridRight={0}
        gridLeft={2}
        gridContent={0}
        content={
          <Select
            data={[
              { value: '0', name: 'Month' },
              { value: '1', name: 'Day' },
              { value: '2', name: 'Year' },
              { value: '3', name: 'Week' }
            ]}
            name="Month"
            defaultIndex={0}
            variant="standard"
            sx={{
              width: '80px',
              height: '37.19px',
              marginTop: 1.5,
              border: '0px'
            }}
          />
        }
        right={
          <a
            style={{
              height: '37.19px',
              marginTop: 20,
              marginLeft: 60,
              color: '#017189'
            }}
          >
            View Transaction History
          </a>
        }
      />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type="line" series={CHART_DATA} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
