import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Grid} from "@mui/material";
import {PatternFormat} from "react-number-format";
import {useSnackbar} from 'notistack';

const FormDialogContact = ({handleClose}) => {
  const {enqueueSnackbar} = useSnackbar();

  return (<React.Fragment>
      <Dialog
        open={true}
        onClose={handleClose}
        PaperProps={{
          component: 'form', onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);

            enqueueSnackbar('Enviamos sua mensagem! EMm breve entraremos em contato! Obrigado!!!', {
              variant: 'success', anchorOrigin: {
                vertical: 'top', horizontal: 'center',
              }
            });

            handleClose();
          },
        }}
      >
        <DialogTitle>Tenho interesse!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Informe seus dados! Em breve entraremos em contato!
          </DialogContentText>
          <Grid container spacing={2} sx={{
            width: '100%'
          }}>
            <Grid item sm={12} md={12} sx={{
              width: '100%'
            }}>
              <TextField
                autoFocus
                required
                margin="dense"
                id="name"
                name="name"
                label="Nome"
                type="text"
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item sm={12} md={12} sx={{
              width: '100%'
            }}>
              <PatternFormat
                format="(##) #####-####"
                name="whatsapp"
                id="whatsapp"
                label="Whatsapp"
                fullWidth
                customInput={TextField}
              />
            </Grid>
            <Grid item sm={12} md={12} sx={{
              width: '100%'
            }}>
              <TextField
                required
                margin="dense"
                id="name"
                name="email"
                label="Email"
                type="email"
                fullWidth
                variant="outlined"
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button type="submit">Enviar</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>);
}

export default FormDialogContact