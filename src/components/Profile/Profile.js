import PropTypes from "prop-types";
import defaultImage from "./defaultImage.png";
import css from "../Profile/Profile.module.css";
// import User from 'user.json'

// username: Jacques Gluke,
// tag: jgluke,
// location: Ocho Rios, Jamaica,
// avatar: https://cdn-icons-png.flaticon.com/512/2922/2922506.png,
// stats: {
//   followers: 5603,
//   views: 4827,
//   likes: 1308


export const Profile = ({
    username = "User Name",
    tag,
    location,
    avatar = defaultImage,
    stats: { followers, views, likes },
  }) => {
    return <div className={css.profile}>
    <div className={css.description}>
      <img
        src={avatar}
        alt="User avatar"
        className={css.avatar}
      />
      <p className={css.name}>{username}</p>
      <p className={css.tag}>{tag}</p>
      <p className={css.location}>{location}</p>
    </div>
    <ul className={css.stats}>
      <li>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>{followers}</span>
      </li>
      <li>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>{views}</span>
      </li>
      <li>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>{likes}</span>
      </li>
    </ul>
  </div>
}