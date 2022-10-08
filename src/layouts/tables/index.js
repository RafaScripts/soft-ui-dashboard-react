/**
=========================================================
* Soft UI Dashboard React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// base
import {useEffect, useState, useCallback} from 'react';

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";

// Data
//import authorsTableData from "layouts/tables/data/authorsTableData";
import pacientTableData from "layouts/tables/data/authorsTableData";
//import projectsTableData from "layouts/tables/data/projectsTableData";
import SoftButton from "../../components/SoftButton";
import {Icon} from "@mui/material";
import ModalAdd from "../../components/modalAdd";

//axios
import axios from 'axios';
import CONFIG from "../../config/site.config";

function Tables() {
  const { columns } = pacientTableData;
  //const { columns: prCols, rows: prRows } = projectsTableData;
  const [viewModal, setViewModal] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [type_blood, setTypeBlood] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleSubmit = async() => {
    const data = {
      name,
      email,
      address,
      phone,
      type_blood,
      birthday
    }

    axios.defaults.headers.common['token'] = localStorage.getItem('token');

    await axios.post( CONFIG.url_api + '/createpacient', data).then((response) => {
      alert('Paciente cadastrado com sucesso!');
      setViewModal(false);
      setName('');
      setEmail('');
      setAddress('');
      setPhone('');
      setTypeBlood('');
      setBirthday('');
    }).catch((error) => {
      alert('Erro ao cadastrar paciente!');
    });

  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SoftTypography variant="h6">Pacientes</SoftTypography>
              <SoftButton color="dark" onClick={() => setViewModal(true)}>
                <Icon>add</Icon>
                <SoftTypography variant="button" color="white" textTransform="initial" ml={1}>
                  Adicionar paciente
                </SoftTypography>
              </SoftButton>
            </SoftBox>
            <SoftBox
              sx={{
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                      `${borderWidth[1]} solid ${borderColor}`,
                  },
                },
              }}
            >
              <Table columns={columns} />
            </SoftBox>
          </Card>
        </SoftBox>
        {/*<Card>
          <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
            <SoftTypography variant="h6">Projects table</SoftTypography>
          </SoftBox>
          <SoftBox
            sx={{
              "& .MuiTableRow-root:not(:last-child)": {
                "& td": {
                  borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                    `${borderWidth[1]} solid ${borderColor}`,
                },
              },
            }}
          >
            <Table columns={prCols} rows={prRows} />
          </SoftBox>
        </Card>*/}
      </SoftBox>
      <ModalAdd
        open={viewModal}
        setOpen={setViewModal}
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
        address={address}
        setAddress={setAddress}
        type_blood={type_blood}
        setTypeBlood={setTypeBlood}
        birthday={birthday}
        setBirthday={setBirthday}
        handleSubmit={handleSubmit}
      />
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
