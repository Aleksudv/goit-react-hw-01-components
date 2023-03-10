import { Profile } from "./Profile/Profile";
import { StatisticsList } from "./StatisticsList/StatisticsList";
import { FriendsList } from "./FriendList/FriendList";
import { TransactionList } from "./TransactionList/TransactionList";

import user from '../user.json'
import statistics from '../data.json'
import friends from '../friends.json'
import transactions from '../transactions.json'


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
      username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}/>
      
      <StatisticsList        
        statistics={statistics} title="Upload stats"/>
      <FriendsList friends={friends} />
      <TransactionList transactions={transactions} />
    </div>
  );
};