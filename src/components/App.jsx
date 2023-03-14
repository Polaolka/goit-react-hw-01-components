import { Profile } from './Profile/Profile';
import { FriendList } from './FriendList/FriendList';
import { Statistics } from './Statistics/Statistics';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import user from 'user.json'

// export const App = () => {
//   return (
//     <>
//       {recipes.map((recipe, idx) => (
//         <Recipe key={idx} recipe={recipe} />
//       ))}
//     </>
//   );
// };


export const App = () => {
  return (
    <div>
      <Profile 
                username={user.username}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}/>
    </div>
  );
};
