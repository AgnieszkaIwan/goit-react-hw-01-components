import { ProfileComponent } from 'components/Profile';
import { Statistics } from 'components/Statistics';
import data from '../data.json';
import { FriendList } from 'components/FriendList';
import friends from '../friends.json';
import { TransactionHistory } from 'components/TransactionHistory';
import transactions from '../transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <div>
        <h1>Profile Component</h1>
        <ProfileComponent />
      </div>
      <div>
        <h1>Statistics</h1>
        <Statistics title="Upload stats" stats={data} />
      </div>
      <div>
        <h1>Friend List</h1>
        <FriendList friends={friends} />
      </div>
      <div>
        <div>
          <h1>Transaction History</h1>
          <TransactionHistory items={transactions} />
        </div>
      </div>
    </div>
  );
};
