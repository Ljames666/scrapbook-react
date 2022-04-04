import { styled } from '@mui/material/styles';
import FusePageCarded from '@fuse/core/FusePageCarded';

import { Icon } from '@mui/material';
import CheckboxList from './components/tasks-list/List';
import ModalTaskComponent from './components/modal-task/ModalTask';

const Root = styled(FusePageCarded)({
  '& .FusePageCarded-header': {},
  '& .FusePageCarded-toolbar': {},
  '& .FusePageCarded-content': {},
  '& .FusePageCarded-sidebarHeader': {},
  '& .FusePageCarded-sidebarContent': {},
});

function TasksPage(props) {
  return (
    <Root
      header={
        <div className="p-24">
          <h1> tarefas</h1>
        </div>
      }
      contentToolbar={
        <div className="px-24">
          <h4>Content Toolbar</h4>
        </div>
      }
      content={
        <>
          <CheckboxList />
          <ModalTaskComponent showModal={false} msg="oi" item />
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
      leftSidebarContent={
        <div className="p-24">
          <h4>Content</h4>
        </div>
      }
      sidebarInner
    />
  );
}

export default TasksPage;
