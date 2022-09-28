/*
칼로리 테이블
*/

// @mui material components
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

// Material Dashboard 2 React components
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';
import MDAvatar from 'components/MDAvatar';

// Material Dashboard 2 React example components
import DataTable from 'examples/Tables/DataTable';

// Images
import LogoAsana from 'assets/images/small-logos/logo-asana.svg';

function Tables(props) {
  const Project = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" variant="rounded" />
      <MDTypography
        display="block"
        variant="button"
        fontWeight="medium"
        ml={1}
        lineHeight={1}
      >
        {name}
      </MDTypography>
    </MDBox>
  );

  return (
    // table
    <Grid item xs={12}>
      <Card>
        <MDBox
          mx={2}
          mt={-3}
          py={2}
          px={2}
          variant="gradient"
          bgColor="error"
          borderRadius="lg"
          coloredShadow="info"
        >
          <MDTypography variant="h6" color="white" align="center">
            {props.month}월 {props.day}일 ({props.week})
          </MDTypography>
        </MDBox>

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
            {props.totalcal}cal
          </MDTypography>
        </MDBox>

        <MDBox pt={3}>
          <DataTable
            table={{
              columns: [
                {
                  Header: 'ingredent',
                  accessor: 'ingredent',
                  align: 'left',
                  width: '10%',
                },
                {
                  Header: 'gram',
                  accessor: 'gram',
                  align: 'center',
                  width: '30%',
                },
              ],

              rows: [
                {
                  ingredent: <Project image={LogoAsana} name="탄수화물" />,
                  gram: (
                    <MDTypography
                      component="a"
                      href="#"
                      variant="caption"
                      color="text"
                      fontWeight="medium"
                    >
                      {props.tan}g
                    </MDTypography>
                  ),
                },
                {
                  ingredent: <Project image={LogoAsana} name="단백질" />,
                  gram: (
                    <MDTypography
                      component="a"
                      href="#"
                      variant="caption"
                      color="text"
                      fontWeight="medium"
                    >
                      {props.dan}g
                    </MDTypography>
                  ),
                },
                {
                  ingredent: <Project image={LogoAsana} name="지방" />,
                  gram: (
                    <MDTypography
                      component="a"
                      href="#"
                      variant="caption"
                      color="text"
                      fontWeight="medium"
                    >
                      {props.gi}g
                    </MDTypography>
                  ),
                },
              ],
            }}
            isSorted={false}
            entriesPerPage={false}
            showTotalEntries={false}
            noEndBorder
          />
        </MDBox>
      </Card>
    </Grid>
  );
}

export default Tables;
