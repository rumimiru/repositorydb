import Welcome from "./Welcome";
import UserCard from "./UserCard";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <Welcome />

      <h1>User List</h1>

      <UserCard name="Dharam" email="dharam@gmail.com" />
      <UserCard name="Rahul" email="rahul@gmail.com" />
    </div>
  );
}

export default App;
