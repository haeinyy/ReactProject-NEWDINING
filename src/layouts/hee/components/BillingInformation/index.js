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
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Billing page components
import Bill from "layouts/hee/components/Bill";

function BillingInformation() {
  const styleObj3 = {
    display: "-webkit-inline-box"
  }
  const styleObj4 = {
    paddingLeft: "8px"
  }

  return (
    <Card id="delete-account">
      <MDBox pt={1} pb={2} px={2} style={styleObj4}>
        <p>9/12</p>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0} style={styleObj3}>
          <Bill
            name="KOREAN"
            company="viking burrito"
            email="oliver@burrito.com"
            vat="FRB1235476"
          />
          <Bill
            name="ASIAN"
            company="viking burrito"
            email="oliver@burrito.com"
            vat="FRB1235476"
          />
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default BillingInformation;
