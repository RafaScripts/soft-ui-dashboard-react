import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import SoftButton from "../SoftButton";
import {Icon} from "@mui/material";
import SoftTypography from "../SoftTypography";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  /*hieght: 700,*/
  bgcolor: 'background.paper',
  borderRadius: 6,
  boxShadow: 24,
  p: 4,
};

export default function ModalAdd({open, setOpen, name, setName, email, setEmail, phone, setPhone, address, setAddress, type_blood, setTypeBlood, birthday, setBirthday, handleSubmit}) {

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Adicionar paciente
          </Typography>
          <div style={{display: "grid", gridTemplateColumns: "repeat(2, 1fr)"}}>
            <TextField style={{marginBottom: "8px", marginRight: "8px"}} fullWidth id="outlined-basic" label="Nome" variant="outlined" value={name} onChange={(e) => setName(e.target.value)}/>
            <TextField style={{marginBottom: "8px", marginRight: "8px"}} fullWidth id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <TextField style={{marginBottom: "8px", marginRight: "8px"}} fullWidth id="outlined-basic" label="Endereço" variant="outlined" value={address} onChange={(e) => setAddress(e.target.value)} />
            <TextField style={{marginBottom: "8px", marginRight: "8px"}} fullWidth id="outlined-basic" label="Telefone" variant="outlined" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <TextField style={{marginBottom: "8px", marginRight: "8px"}} fullWidth id="outlined-basic" label="Tipo Sanguineo" variant="outlined" value={type_blood} onChange={(e) => setTypeBlood(e.target.value)} />
            <TextField style={{marginBottom: "8px", marginRight: "8px"}} fullWidth id="outlined-basic" type='date' label="Data de Nascimento" variant="outlined" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
            {/*<TextField style={{marginBottom: "8px", marginRight: "8px"}} fullWidth id="outlined-basic" label="Historio medico" variant="outlined"/>*/}
          </div>
          <SoftButton color='white' onClick={() => handleClose()}>
            <SoftTypography variant="button" color="dark" textTransform="initial" ml={1}>
              voltar
            </SoftTypography>
          </SoftButton>
          <SoftButton color='dark' onClick={() => handleSubmit()}>
            <Icon>return</Icon>
            <SoftTypography variant="button" color="white" textTransform="initial" ml={1}>
              adicionar
            </SoftTypography>
          </SoftButton>
        </Box>
      </Modal>
    </div>
  );
}