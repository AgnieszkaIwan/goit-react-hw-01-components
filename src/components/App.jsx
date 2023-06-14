import { ProfileComponent } from 'components/Profile';
import { Statistics } from 'components/Statistics';
import data from '../data.json';
import { FriendList } from 'components/FriendList';
import friends from '../friends.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <div>
        <ProfileComponent />
      </div>
      <div>
        <Statistics title="Upload stats" stats={data} />
      </div>
      <div>
        <FriendList friends={friends} />
      </div>
    </div>
  );
};
