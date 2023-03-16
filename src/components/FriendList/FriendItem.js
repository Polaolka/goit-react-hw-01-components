import PropTypes from 'prop-types';
import css from '../FriendList/FriendList.module.css';

export const FriendtItem = ({ avatar, name, isOnline, id }) => {
  return (
    <>
      <span className={isOnline ? css.online : css.offline}></span>
      <img src={avatar} alt="User avatar" className={css.avatar} width="48" />
      <p className={css.name}>{name}</p>
    </>
  );
};

FriendtItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};
