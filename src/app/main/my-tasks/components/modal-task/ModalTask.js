import { useState, useEffect } from 'react';
import { Typography, Grid, Paper, Modal, TextField, Button, Icon } from '@mui/material';

import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export default function ModalTaskComponent({
  showModal,
  showLoading,
  // action,
  actionCancel,
  // titleButtom,
  msg,
  item,
}) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setOpen(showModal);
  }, [showModal]);

  useEffect(() => {
    setLoading(showLoading);
  }, [showLoading]);

  const handleClose = () => {
    // actionCancel();
    setOpen(false);
  };

  return (
    <Modal open={open} onClose={handleClose} className="w-full h-screen">
      <Grid container>
        <Paper
          elevation={24}
          className="absolute w-320  bg-white "
          style={{ top: 'calc(50% - 160px)', left: 'calc(50% - 160px)' }}
        >
          <Grid
            item
            xs={12}
            className=" flex justify-start"
            sx={{ backgroundColor: '#212529', borderRadius: '10px 10px 0 0' }}
          >
            <Typography color="primary" className="font-600 text-20 my-8 px-8 text-center">
              {item ? 'Editar' : 'Nova Tarefa'}
            </Typography>
          </Grid>
          <Grid item xs={12} className="flex justify-end">
            <button type="button" onClick={handleClose}>
              <HighlightOffIcon color="primary" />
            </button>
          </Grid>
          <Grid item xs={12} className="p-4">
            <TextField
              type="text"
              label="Title"
              variant="outlined"
              fullWidth
              color="warning"
              sx={{ color: '#212529' }}
            />
          </Grid>
          <Grid item xs={12} className="p-4 mt-8">
            <TextField
              id="outlined-multiline-static"
              label="Multiline"
              multiline
              rows={4}
              defaultValue="Default Value"
              fullWidth
              sx={{ color: '#212529' }}
            />
          </Grid>
          <Grid item xs={12} className="p-4 flex items-center justify-between">
            {item ? <Button>Salvar</Button> : <Button>Postar</Button>}
            {item ? <Icon sx={{ color: '#212529' }}>delete</Icon> : null}
          </Grid>
        </Paper>
      </Grid>
    </Modal>
  );
}
