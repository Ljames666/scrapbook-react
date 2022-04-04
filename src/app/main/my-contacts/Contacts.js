import DemoContent from '@fuse/core/DemoContent';
import { styled } from '@mui/material/styles';
import FusePageCarded from '@fuse/core/FusePageCarded';
import { useTranslation } from 'react-i18next';

const Root = styled(FusePageCarded)({
  '& .FusePageCarded-header': {},
  '& .FusePageCarded-toolbar': {},
  '& .FusePageCarded-content': {},
  '& .FusePageCarded-sidebarHeader': {},
  '& .FusePageCarded-sidebarContent': {},
});

function ContactsPage(props) {
  const { t } = useTranslation('contacts');

  return (
    <Root
      header={
        <div className="p-24">
          <h4>{t('TITLE')}</h4>
        </div>
      }
      contentToolbar={
        <div className="px-24">
          <h4>Content Toolbar</h4>
        </div>
      }
      content={
        <div className="p-24">
          <h4>Content</h4>
          <br />
          <DemoContent />
        </div>
      }
      leftSidebarHeader={
        <div className="p-24">
          <h4>Content</h4>
        </div>
      }
      leftSidebarContent={
        <div className="p-24">
          <h4>Content</h4>
        </div>
      }
      innerScroll
      sidebarInner
    />
  );
}

export default ContactsPage;
