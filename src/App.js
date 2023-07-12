// import logo from './logo.svg';
import './App.css';
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import user from "./data/user.json";
import data from "./data/data.json";
import friendlist from "./data/friends.json";
import transactionHistory from "./data/transactions.json";
import FriendList from './components/FriendList/friendList';
import TransactionHistory from './components/TransactionHistory/transactionHistory.jsx';

function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        title="Upload stats"
        stats={data}
      />
        <FriendList 
        data={friendlist} />
      <TransactionHistory
      items={transactionHistory}/>
    </div>
  
  );
}

export default App;
