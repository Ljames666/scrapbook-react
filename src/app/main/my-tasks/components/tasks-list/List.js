import { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import { Button, Divider, Icon } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { taskSelectAll } from 'app/store/main/taskSlice';
import { modaisSelectAll, setModalState } from 'app/store/main/modaisSlice';

export default function CheckboxList() {
  const dispatch = useDispatch();
  const taskRedux = useSelector(taskSelectAll);
  const modalRedux = useSelector(modaisSelectAll);

  // const [checked, setChecked] = useState([0]);
  const [favorite, setFavorite] = useState([]);

  // const handleToggle = (value) => () => {
  //   const currentIndex = checked.indexOf(value);
  //   const newChecked = [...checked];

  //   if (currentIndex === -1) {
  //     newChecked.push(value);
  //   } else {
  //     newChecked.splice(currentIndex, 1);
  //   }

  //   setChecked(newChecked);
  // };

  const handleClick = () => {
    const openCreate = {
      showModal: true,
      name: 'criar',
    };

    dispatch(setModalState(openCreate));
  };

  const handleEdit = (itemId) => () => {
    const openEdit = {
      showModal: true,
      name: 'editar',
      id: itemId,
    };

    dispatch(setModalState(openEdit));
  };

  const handleDelete = (itemId) => () => {
    const openDelete = {
      showModal: true,
      name: 'deletar',
      id: itemId,
    };

    dispatch(setModalState(openDelete));
  };

  const handleFavorites = (item) => () => {
    const currentIndex = favorite.indexOf(item);
    const newFavorite = [...favorite];

    if (currentIndex === -1) {
      newFavorite.push(item);
    } else {
      newFavorite.splice(currentIndex, 1);
    }

    setFavorite(newFavorite);
  };

  if (!taskRedux.length) {
    return (
      <div className="flex items-center justify-center mt-96">
        <Button variant="outlined" size="large" onClick={handleClick}>
          Crie seu primeiro recado!
        </Button>
      </div>
    );
  }

  if (modalRedux.favorite === true && favorite.length > 0) {
    return (
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <ListItem key="title" disablePadding>
          <ListItemText id="1" primary="Título" sx={{ marginLeft: 9 }} />
          <ListItemText id="1" primary="Descrição" edge="center" />
        </ListItem>
        <Divider />
        {favorite.map((item) => {
          const labelId = `checkbox-list-label-${item.id}`;
          const labelId2 = `checkbox-list-label2-${item.id}`;
          return (
            <>
              <ListItem
                key={item.id}
                secondaryAction={
                  <>
                    <IconButton
                      sx={{ marginRight: 1 }}
                      edge="end"
                      aria-label="favorite"
                      onClick={handleFavorites(item)}
                    >
                      {favorite.indexOf(item) !== -1 ? (
                        <Icon sx={{ color: '#f2b106' }}>star</Icon>
                      ) : (
                        <Icon>star_outline</Icon>
                      )}
                    </IconButton>
                    <IconButton
                      sx={{ marginRight: 1 }}
                      edge="end"
                      aria-label="edit"
                      onClick={handleEdit(item.id)}
                    >
                      <Icon>edit</Icon>
                    </IconButton>
                    <IconButton edge="end" aria-label="delete" onClick={handleDelete(item.id)}>
                      <Icon>delete</Icon>
                    </IconButton>
                  </>
                }
                disablePadding
              >
                <ListItemButton role={undefined} onClick={handleFavorites(item)} dense>
                  {/* <ListItemIcon>
                     <Checkbox
                      edge="start"
                      checked={checked.indexOf(item) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ 'aria-labelledby': labelId }}
                    /> 
                  </ListItemIcon> */}

                  <ListItemText id={labelId} primary={item.description} />
                  <ListItemText id={labelId2} primary={item.details} edge="center" />
                </ListItemButton>
              </ListItem>
              <Divider />
            </>
          );
        })}
      </List>
    );
  }

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <ListItem key="title" disablePadding>
        <ListItemText id="1" primary="Título" sx={{ marginLeft: 9 }} />
        <ListItemText id="2" primary="Descrição" edge="center" />
      </ListItem>
      <Divider />
      {taskRedux.map((item) => {
        const labelId = `checkbox-list-label-${item.id}`;
        const labelId2 = `checkbox-list-label2-${item.id}`;

        return (
          <>
            <ListItem
              key={item.id}
              secondaryAction={
                <>
                  <IconButton
                    sx={{ marginRight: 1 }}
                    edge="end"
                    aria-label="favorite"
                    onClick={handleFavorites(item)}
                  >
                    {favorite.indexOf(item) !== -1 ? (
                      <Icon sx={{ color: '#f2b106' }}>star</Icon>
                    ) : (
                      <Icon>star_outline</Icon>
                    )}
                  </IconButton>
                  <IconButton
                    sx={{ marginRight: 1 }}
                    edge="end"
                    aria-label="edit"
                    onClick={handleEdit(item.id)}
                  >
                    <Icon>edit</Icon>
                  </IconButton>
                  <IconButton edge="end" aria-label="delete" onClick={handleDelete(item.id)}>
                    <Icon>delete</Icon>
                  </IconButton>
                </>
              }
              disablePadding
            >
              <ListItemButton role={undefined} onClick={handleFavorites(item)} dense>
                {/* <ListItemIcon>
                   <Checkbox
                    edge="start"
                    checked={checked.indexOf(item) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  /> 
                </ListItemIcon> */}
                <ListItemText id={labelId} primary={item.description} />
                <ListItemText id={labelId2} primary={item.details} edge="center" />
              </ListItemButton>
            </ListItem>
            <Divider />
          </>
        );
      })}
    </List>
  );
}
