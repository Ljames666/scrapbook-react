/* eslint-disable no-unneeded-ternary */
import { useState, useEffect } from 'react';
import { Typography, Grid, Paper, Modal, TextField, Button, Icon } from '@mui/material';
import {
  addTask,
  deleteTask,
  postTask,
  putTask,
  taskSelectAll,
  updateTask,
} from 'app/store/main/taskSlice';
import { modaisSelectAll, resetState } from 'app/store/main/modaisSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function ModalTaskComponent() {
  const dispatch = useDispatch();
  const userRedux = useSelector((state) => state.auth.user.user);
  const modalRedux = useSelector(modaisSelectAll);
  const taskRedux = useSelector(taskSelectAll);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  useEffect(() => {
    setOpen(modalRedux.showModal);
    const messageTemp = taskRedux.find((task) => task.id === modalRedux.id);

    setMessage(messageTemp);
  }, [modalRedux.id, modalRedux.showModal, taskRedux]);

  const handleClose = () => {
    dispatch(resetState());
    setOpen(false);
    setTitulo('');
    setDescricao('');
    setMessage('');
  };

  const handlePost = (id) => async () => {
    const newTask = { description: titulo, details: descricao };

    const result = await dispatch(postTask({ userId: id, data: newTask }));
    dispatch(addTask(result.payload));
    handleClose();
  };
  const handleEdit = (item) => () => {
    const newTask = { description: titulo, details: descricao };

    dispatch(putTask({ id: item.id, data: newTask }));

    dispatch(
      updateTask({
        id: item.id,
        changes: {
          description: titulo ? titulo : message.description,
          details: descricao ? descricao : message.details,
        },
      })
    );

    handleClose();
  };

  const handleRemove = (item) => () => {
    dispatch(deleteTask(item.id));

    handleClose();
  };

  if (modalRedux.name === 'criar') {
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
                Nova Tarefa
              </Typography>
            </Grid>

            <Grid item xs={12} className="p-4">
              <TextField
                type="text"
                label="Título"
                variant="outlined"
                fullWidth
                color="warning"
                sx={{
                  '.MuiInputLabel-root': { color: '#FEBE3E' },
                  '.MuiInputBase-root': { color: '#212529' },
                }}
                onChange={(e) => setTitulo(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} className="p-4 mt-8">
              <TextField
                id="outlined-multiline-static"
                label="Descrição"
                multiline
                rows={4}
                fullWidth
                sx={{
                  '.MuiInputLabel-root': { color: '#FEBE3E' },
                  '.MuiInputBase-root': { color: '#212529' },
                }}
                onChange={(e) => setDescricao(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} className="p-4 flex items-center justify-between">
              <Button onClick={handleClose}>Voltar</Button>{' '}
              <Button onClick={handlePost(userRedux.id)}>Postar</Button>
            </Grid>
          </Paper>
        </Grid>
      </Modal>
    );
  }
  if (modalRedux.name === 'editar') {
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
                Editar
              </Typography>
            </Grid>

            <Grid item xs={12} className="p-4">
              <TextField
                type="text"
                label="Título"
                variant="outlined"
                fullWidth
                color="warning"
                sx={{
                  '.MuiInputLabel-root': { color: '#FEBE3E' },
                  '.MuiInputBase-root': { color: '#212529' },
                }}
                value={!titulo && message ? message.description : titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} className="p-4 mt-8">
              <TextField
                id="outlined-multiline-static"
                label="Descrição"
                multiline
                rows={4}
                fullWidth
                sx={{
                  '.MuiInputLabel-root ': { color: '#FEBE3E' },
                  '.MuiInputBase-root ': {
                    color: '#212529',
                  },
                }}
                value={!descricao && message ? message.details : descricao}
                onChange={(e) => setDescricao(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} className="p-4 flex items-center justify-between">
              <Button onClick={handleClose}>Voltar</Button>{' '}
              <Button onClick={handleEdit(message)}>Salvar</Button>
            </Grid>
          </Paper>
        </Grid>
      </Modal>
    );
  }
  if (modalRedux.name === 'deletar') {
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
                Excluir tarefa
              </Typography>
            </Grid>

            <Grid item xs={12} className="p-4 mt-8">
              <Typography sx={{ color: '#212529' }}>
                Deseja excluir esta tarefa? <br />
                {message ? message.description : null}
              </Typography>
            </Grid>
            <Grid item xs={12} className="p-4 flex items-center justify-between">
              <Button onClick={handleClose}>Voltar</Button>
              <Button onClick={handleRemove(message)}>
                <Icon>delete</Icon>
              </Button>
            </Grid>
          </Paper>
        </Grid>
      </Modal>
    );
  }
  return null;
}
