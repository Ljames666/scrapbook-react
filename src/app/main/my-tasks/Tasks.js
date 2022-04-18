import { styled } from '@mui/material/styles';
import FusePageCarded from '@fuse/core/FusePageCarded';

import { Icon } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTask } from 'app/store/main/taskSlice';
import CheckboxList from './components/tasks-list/List';
import ModalTaskComponent from './components/modal-task/ModalTask';
import SidebarTaskComponent from './components/sidebar-content-task/sidebar';

const Root = styled(FusePageCarded)({
  '& .FusePageCarded-header': {},
  '& .FusePageCarded-toolbar': {},
  '& .FusePageCarded-content': {},
  '& .FusePageCarded-sidebarHeader': {},
  '& .FusePageCarded-sidebarContent': {},
});

function TasksPage() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getTask(userId.user.user.id));
  }, [dispatch, userId]);
  return (
    <Root
      contentToolbar={
        <div className="px-24">
          <h3>Suas tarefas {userId.user.user.name}</h3>
        </div>
      }
      content={
        <>
          <CheckboxList />
          <ModalTaskComponent />
        </>
      }
      leftSidebarHeader={
        <div className="p-24 flex flex-col items-start justify-center">
          <img
            style={{
              width: '100px',
              height: 'auto',
              borderRadius: '5px',
              border: '1px solid whitesmoke',
            }}
            src="assets/images/logos/myScrapbook.png"
            alt="logo"
          />

          <div style={{ fontWeight: 'bold' }} className="flex items-center justify-center">
            <Icon sx={{ marginRight: '3px' }}>fact_check</Icon>
            <h2>Tarefas</h2>
          </div>
        </div>
      }
      leftSidebarContent={<SidebarTaskComponent />}
      sidebarInner
    />
  );
}

export default TasksPage;
