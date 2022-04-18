import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import { Divider, Icon, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { taskSelectAll } from 'app/store/main/taskSlice';
import { setModalState } from 'app/store/main/modaisSlice';

export default function SidebarTask() {
  const dispatch = useDispatch();
  const taskRedux = useSelector(taskSelectAll);

  const handleClick = () => {
    const openCreate = {
      showModal: true,
      name: 'criar',
    };

    dispatch(setModalState(openCreate));
  };
  const handleFavorites = () => {
    dispatch(setModalState({ favorite: true }));
  };
  const handleAll = () => {
    dispatch(setModalState({ favorite: false }));
  };

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <ListItem key="novaTarefa" disablePadding>
        <ListItemButton role={undefined} onClick={handleClick} dense>
          <Icon>add</Icon>
          <Typography sx={{ fontSize: '2rem', marginLeft: '1rem' }}>Tarefa</Typography>
        </ListItemButton>
      </ListItem>
      <Divider />
      <ListItem key="all" disablePadding>
        <ListItemButton role={undefined} onClick={handleAll} dense>
          <Icon>filter_list</Icon>
          <Typography sx={{ fontSize: '2rem', marginLeft: '1rem' }}>Todas</Typography>
        </ListItemButton>
      </ListItem>
      <Divider />
      <ListItem key="favorite" disablePadding>
        <ListItemButton role={undefined} onClick={handleFavorites} dense>
          <Icon>star</Icon>
          <Typography sx={{ fontSize: '2rem', marginLeft: '1rem' }}>Favoritas</Typography>
        </ListItemButton>
      </ListItem>
    </List>
  );
}
