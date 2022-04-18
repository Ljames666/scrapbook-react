import DemoContent from '@fuse/core/DemoContent';
import { styled } from '@mui/material/styles';
import FusePageSimple from '@fuse/core/FusePageSimple';
import { useTranslation } from 'react-i18next';

const Root = styled(FusePageSimple)({
  '& .FusePageSimple-header': {},
  '& .FusePageSimple-toolbar': {},
  '& .FusePageSimple-content': {},
  '& .FusePageSimple-sidebarHeader': {},
  '& .FusePageSimple-sidebarContent': {},
});

function HomePage(props) {
  const { t } = useTranslation('homePage');

  return (
    <Root
      sx={{ overflow: 'hidden' }}
      // header={
      //   <div className="p-24">
      //     <img
      //       style={{
      //         width: '100px',
      //         height: 'auto',
      //         borderRadius: '5px',
      //         border: '1px solid whitesmoke',
      //       }}
      //       src="assets/images/logos/myScrapbook.png"
      //       alt="logo"
      //     />
      //     <h4>{t('TITLE')}</h4>
      //   </div>
      // }
      // contentToolbar={
      //   <div className="px-24">
      //     <h4>Content Toolbar</h4>
      //   </div>
      // }
      content={
        <div className="p-24">
          <h4>Content</h4>
          <br />
          <DemoContent />
        </div>
      }
      innerScroll
      sidebarInner
    />
  );
}

export default HomePage;
