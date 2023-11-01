import * as sessionService from "../../utilities/session-service";
import { useState } from "react";
import { Link } from "react-router-dom";
import SessionLog from "../../components/SessionLog/SessionLog";

export default function SessionPage({ user }) {
  const [userItems, setUserItems] = useState([]);

  async function getUserItems({ user }) {
    const items = await sessionService.getUserItems(user);
    setUserItems(items);
  }

  return (
    <>
      <div>
        <h1>SESSION PAGE</h1>
        <Link to="/sessions/new">
          <button>Add Session</button>
        </Link>

        <h2>Session History</h2>
        <SessionLog userItems={userItems} />
      </div>
    </>
  );
}