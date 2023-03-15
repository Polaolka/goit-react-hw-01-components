import { Profile } from './Profile/Profile';
import { FriendList } from './FriendList/FriendList';
import { Statistics } from './Statistics/Statistics';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { Section } from './Section/Section';


import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import user from 'user.json';

export const App = () => {
 
  return (
    <div>
      <Section title={'Social network profile'}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>
      <Section title="Statistics">
        <Statistics 
        title="Upload stats" 
        data={data} />
      </Section>
      <Section title="FriendList">
        <FriendList 
        friends={friends} />
      </Section>
      <Section title="Transaction history">
        <TransactionHistory 
        transactions={transactions} />
      </Section>
    </div>
  );
};
