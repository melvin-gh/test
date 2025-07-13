import { useState } from "react";
import "./App.css";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App({children}) {
  const [bill, setBill] = useState('')
  const [paidByUser, setPaidByUser] = useState('')
  const [whoIsPaying, setWhoIsPaying] = useState('')
  return (
    <div className="app">
      <div className="sidebar">
        <Friendlist />
        <FormAndFriend />
        <Button>Add Friend</Button>
      </div>
      <FormSplitBill setBill={setBill} setPaidByUser={setPaidByUser} setWhoIsPaying={setWhoIsPaying} bill={bill} paidByUser={paidByUser} whoIsPaying={whoIsPaying} />
    </div>
  );
}
function Friendlist() {
  const friends = initialFriends;
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}
function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {friend.balance}$
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      {friend.balance > 0 && (
        <p className="green">
          {" "}
          {friend.name} owes you {friend.balance}$
        </p>
      )}
      <Button>Select</Button>
    </li>
  );
}
function Button({ children }) {
  return <button className="button">{children}</button>;
}
function FormAndFriend() {
  return (
    <form className="form-and-friend">
      <label>👪Friend name</label>
      <input type="text" />

      <label>🖼️Image URL</label>
      <input type="text" />

      <Button>Add</Button>
    </form>
  );
}
function FormSplitBill({setBill, setWhoIsPaying, setPaidByUser, bill, whoIsPaying, paidByUser }) {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with X</h2>
      <label>💰Bill value</label>
      <input type="text" value={bill} onChange={(e)=>(setBill(Number(e.target.value)))}/>

      <label>👦Your expense</label>
      <input type="text" value={paidByUser} onChange={(e)=>(setPaidByUser(Number(e.target.value)))}/>

      <label>👪X's expenses</label>
      <input type="text" value={whoIsPaying} onChange={(e)=>(setWhoIsPaying(Number(e.target.value)))}/>

      <label>🤑Who is paying the bill</label>
      <select>
        <option value="user">you</option>
        <option value="friend">X</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}
export default App;
