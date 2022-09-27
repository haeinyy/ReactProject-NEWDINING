/*
칼로리 테이블
*/

// api 연동
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// @mui material components
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

// Material Dashboard 2 React components
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';
import MDAvatar from 'components/MDAvatar';
import MDProgress from 'components/MDProgress';

// Material Dashboard 2 React example components
import DataTable from 'examples/Tables/DataTable';

// Data
import calorieTableData from 'layouts/calinfo/data/calorieTableData';
import CalorieTableData from 'layouts/calinfo/data/calorieTableData';
import data from 'layouts/calinfo/data/calorieTableData';

// Images
import LogoAsana from 'assets/images/small-logos/logo-asana.svg';
import logoGithub from 'assets/images/small-logos/github.svg';
import logoAtlassian from 'assets/images/small-logos/logo-atlassian.svg';
import logoSlack from 'assets/images/small-logos/logo-slack.svg';
import logoSpotify from 'assets/images/small-logos/logo-spotify.svg';
import logoInvesion from 'assets/images/small-logos/logo-invision.svg';
import { ConstructionRounded } from '@mui/icons-material';

// const tan = 0;
// const dan = 0;
// const gi = 0;
// const { tan, dan, gi } = ingrident;
// const totalcal = 0;
// const date = '20220925';
// const url = '/diets/diet?date=' + date;

// const Setting = () => {
//   const [data, setData] = useState(null);
//   useEffect(() => {
//     axios({
//       method: 'get',
//       url: url,
//     })
//       .then((res) => {
//         setData(res.data);
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   }, []);
// };
// const [data, setData] = useState(null);
function Data(props) {
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

  const Progress = ({ color, value }) => (
    <MDBox display="flex" alignItems="center">
      <MDTypography variant="caption" color="text" fontWeight="medium">
        {value}%
      </MDTypography>
      <MDBox ml={0.5} width="9rem">
        <MDProgress variant="gradient" color={color} value={value} />
      </MDBox>
    </MDBox>
  );

  return {
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
            {props.tan}
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
            40g
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
            60g
          </MDTypography>
        ),
      },
    ],
  };
}

function Tables(props) {
  //   const { columns: pColumns, rows: pRows } = Data();
  //   const { columns: pColumns, rows: pRows } = data;
  //   console.log(pColumns);
  // const date = '20220925';
  // const url = '/diets/diet?date=' + date;

  // const res = await axios.get(url);
  // console.log(res.data);
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

  const Progress = ({ color, value }) => (
    <MDBox display="flex" alignItems="center">
      <MDTypography variant="caption" color="text" fontWeight="medium">
        {value}%
      </MDTypography>
      <MDBox ml={0.5} width="9rem">
        <MDProgress variant="gradient" color={color} value={value} />
      </MDBox>
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
            9월 22일 (목)
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
