// import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import { styled, alpha } from '@mui/material/styles';
import Icon from '@mui/material/Icon';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FuseNavBadge from '../../FuseNavBadge';

const Root = styled(ListItem)(({ theme, ...props }) => ({
  height: 40,
  width: '100%',
  borderRadius: '6px',
  margin: '0 0 4px 0',
  paddingRight: 12,
  paddingLeft: props.itempadding,
  color: alpha(theme.palette.text.primary, 0.7),
  cursor: 'pointer',
  textDecoration: 'none!important',
  '&:hover': {
    color: theme.palette.text.primary,
  },
  '&.active': {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.primary.main,
    pointerEvents: 'none',
    transition: 'border-radius .15s cubic-bezier(0.4,0.0,0.2,1)',
    '& > .fuse-list-item-text-primary': {
      color: 'inherit',
    },
    '& > .fuse-list-item-icon': {
      color: 'inherit',
    },
  },
  '& >.fuse-list-item-icon': {
    marginRight: 12,
    color: 'inherit',
  },
  '& > .fuse-list-item-text': {},
}));
// todo:criar switch para onClick com respectivos dispachs!
function FuseNavVerticalButton(props) {
  const dispatch = useDispatch();
  const { item, nestedLevel } = props;

  const itempadding = nestedLevel > 0 ? 28 + nestedLevel * 16 : 12;

  return useMemo(
    () => (
      <Root
        button
        // activeClassName="active"
        className="fuse-list-item"
        onClick={() => dispatch(item.onClick)}
        end={item.end}
        itempadding={itempadding}
        role="button"
      >
        {item.icon && (
          <Icon
            className={clsx('fuse-list-item-icon text-20 shrink-0', item.iconClass)}
            color="action"
          >
            {item.icon}
          </Icon>
        )}

        <ListItemText
          className="fuse-list-item-text"
          primary={item.title}
          classes={{ primary: 'text-13 font-medium fuse-list-item-text-primary' }}
        />
        {item.badge && <FuseNavBadge badge={item.badge} />}
      </Root>
    ),
    [item.badge, item.end, item.icon, item.iconClass, item.id, item.title, itempadding]
  );
}

FuseNavVerticalButton.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    icon: PropTypes.string,
    onClick: PropTypes.func,
  }),
};

FuseNavVerticalButton.defaultProps = {};

const NavVerticalButton = FuseNavVerticalButton;

export default NavVerticalButton;
