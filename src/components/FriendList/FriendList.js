import PropTypes from 'prop-types';
import css from '../FriendList/FriendList.module.css';
import { FriendtItem } from './FriendItem';

export const FriendList = ({ friends }) => {
    return <ul className={css.friendList}>
    {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li className={css.item} key={id}>
            <FriendtItem
            avatar = {avatar}
            name = {name}
            isOnline = {isOnline}
            />
          </li>
        );
      })}
  </ul>
    
}

  FriendList.prototype = {
    friends: PropTypes.arrayOf(PropTypes.object)
  .isRequired,
};

