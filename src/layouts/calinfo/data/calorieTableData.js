/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Icon from '@mui/material/Icon';
import ShinsegaeNavbar from 'examples/Navbars/ShinsegaeNavbar';

// Material Dashboard 2 React components
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';
import MDAvatar from 'components/MDAvatar';
import MDProgress from 'components/MDProgress';

// Images
import LogoAsana from 'assets/images/small-logos/logo-asana.svg';
import logoGithub from 'assets/images/small-logos/github.svg';
import logoAtlassian from 'assets/images/small-logos/logo-atlassian.svg';
import logoSlack from 'assets/images/small-logos/logo-slack.svg';
import logoSpotify from 'assets/images/small-logos/logo-spotify.svg';
import logoInvesion from 'assets/images/small-logos/logo-invision.svg';

export default function data() {
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
            100g
          </MDTypography>
        ),
        completion: <Progress color="info" value={60} />,
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
        completion: <Progress color="info" value={20} />,
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
        completion: <Progress color="info" value={20} />,
      },
    ],
  };
}
