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

import { useState, useEffect } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import curved9 from "assets/images/curved-images/curved-6.jpg";

//Axios
import axios from "axios";
import CONFIG from "../../../config/site.config";

function SignIn({history}) {
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSetRememberMe = () => {
    setRememberMe(!rememberMe);
  }

  useEffect(() => {
    const remenber = () => {
      if(rememberMe === true){
        if(email.length > 0 && password.length > 0){
          let user = {
            email: email,
            password: password
          }
          localStorage.setItem("user", JSON.stringify(user));
        }else {
          alert("Please fill in the email and password fields");
          setRememberMe(false);
        }
      }else if(rememberMe === false){
        localStorage.removeItem("user");
      }
    }
    remenber();
  }, [rememberMe]);

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      email,
      password,
    };

    axios.post(CONFIG.url_api + "/user/login", user).then((res) => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", res.data.user);
    }).catch((err) => {
      console.log(err);
    }).finally(() => {
      history.push("/dashboard/home");
    });
  }

  return (
    <CoverLayout
      title="Bem Vindo!"
      description="Entre com seu email e senha para acessar o sistema."
      image={curved9}
    >
      <SoftBox component="form" role="form">
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Email
            </SoftTypography>
          </SoftBox>
          <input type="email" placeholder="Email" value={email} onChange={(e) => handleChangeEmail(e)} />
        </SoftBox>
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Senha
            </SoftTypography>
          </SoftBox>
          <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
        </SoftBox>
        <SoftBox display="flex" alignItems="center">
          <Switch checked={rememberMe} onChange={handleSetRememberMe} />
          <SoftTypography
            variant="button"
            fontWeight="regular"
            onClick={handleSetRememberMe}
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            &nbsp;&nbsp;Remember me
          </SoftTypography>
        </SoftBox>
        <SoftBox mt={4} mb={1}>
          <SoftButton variant="gradient" color="info" onClick={handleSubmit} fullWidth>
            Entrar
          </SoftButton>
        </SoftBox>
        <SoftBox mt={3} textAlign="center">
          <SoftTypography variant="button" color="text" fontWeight="regular">
            Don&apos;t have an account?{" "}
            <SoftTypography
              component={Link}
              to="/authentication/sign-up"
              variant="button"
              color="info"
              fontWeight="medium"
              textGradient
            >
              Sign up
            </SoftTypography>
          </SoftTypography>
        </SoftBox>
      </SoftBox>
    </CoverLayout>
  );
}

export default SignIn;
