import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className="p-10 bg-red-500 text-left">
      <span>Welcome {user.name}</span>
      &nbsp; | &nbsp;
      <Link to="/sessions">Training</Link>
      &nbsp; | &nbsp;
      <Link to="/home">Home</Link>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>
        Log Out
      </Link>
    </nav>
  );
}
