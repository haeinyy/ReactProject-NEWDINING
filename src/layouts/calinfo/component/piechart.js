/*
Pie Chart 화면
*/

import { PieChart } from 'react-minimal-pie-chart';

// @mui material components
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

// Material Dashboard 2 React components
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';
import MDButton from 'components/MDButton';

function Charts(props) {
  console.log(
    '넘어온 탄단지 = ' + props.tan + '/' + props.dan + '/' + props.gi
  );
  return (
    <Grid item xs={12}>
      <Card>
        <MDBox
          // mx={2}
          mt={3}
          py={2}
          px={2}
          variant="gradient"
          bgColor="info"
          coloredShadow="light"
        >
          <MDTypography variant="h4" color="white" align="center">
            Pie Chart
          </MDTypography>
        </MDBox>
        <MDBox mt={3} lineHeight={1}>
          <MDBox
            sx={{
              display: 'flex',
              mt: 1,
              mr: 1,
              ml: 1,
            }}
          >
            <MDButton color="success" variant="gradient" fullWidth>
              탄수화물
            </MDButton>
            <MDBox sx={{ mx: 1, width: '7rem', minWidth: '7rem' }}>
              <MDButton color="warning" variant="gradient" fullWidth>
                단백질
              </MDButton>
            </MDBox>
            <MDButton color="error" variant="gradient" fullWidth>
              지방
            </MDButton>
          </MDBox>
        </MDBox>

        <PieChart
          data={[
            { title: 'tan', value: props.tan, color: '#367E18' },
            { title: 'dan', value: props.dan, color: '#FFE9A0' },
            { title: 'gi', value: props.gi, color: '#CC3636' },
          ]}
          label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}%`}
          lineWidth={40}
          lengthAngle={360}
          rounded
          animate
          labelStyle={{
            fontSize: '7px',
            fill: '#33333',
          }}
          labelPosition={80}
          // viewBoxSize={[150, 150]}
          radius={40}
          center={[50, 52]}
        />
      </Card>
    </Grid>
  );
}

export default Charts;
