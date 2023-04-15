import { useEffect, useState } from 'react';
import './App.css';

const usersTest = [
  { firstname: "user1", age: 33 },
  { firstname: "user2", age: 44 },
  { firstname: "user3", age: 55 }
];

function App() {
  const [users, setUsers] = useState(null);
  const [data, setData] = useState(null);
  async function callBackendAPI() {
    const response = await fetch('/express_backend');
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  async function callUsersAPI() {
    const response = await fetch('/users');
    const body = await response.json();
    if (response.status !== 200) { throw Error(body.message) }
    return body;
  };

  async function sendUsersAPI() {
    const response = await fetch('/start', {
      method: "POST",
      headers: {
        'Content-type': "application/json"
      },
      body: JSON.stringify(usersTest)
    });
    const body = await response.json();
    if (response.status !== 200) { throw Error(body.message) }
    return body;
  };

  function xxx() {
    fetch('/start', {
      method: "POST",
      headers: { 'Content-type': "application/json" },
      body: JSON.stringify(usersTest)
    });
  }

  useEffect(() => {
    callBackendAPI()
      .then(res => setData(res.express))
      .catch(err => console.log(err));

    sendUsersAPI()
      .then(res => { setUsers(res); })
      .catch(err => console.log(err));

    /* callUsersAPI()
      .then(res => { setUsers(res); })
      .catch(err => console.log(err)); */
  }, []);

  return (
    <div className="App">
      <h1>Welcome to React</h1>
      <p>{data}</p>
      {
        users === null ? <h1>Loading...</h1> :
          users.map((user, i) =>
            <h1 key={i}>FirstName: {user.firstname} , Age: {user.age}</h1>
          )
      }
    </div>
  );
}

export default App;
