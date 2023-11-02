import * as sessionService from "../../utilities/session-service";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import SessionLog from "../../components/SessionLog/SessionLog";

export default function SessionPage({ user }) {
  const [userItems, setUserItems] = useState([]);

  async function getUserItems({ user }) {
    const items = await sessionService.getUserItems(user);
    console.log("SP log", items);
    setUserItems(items);
  }

  useEffect(() => {
    getUserItems({ user });
  }, []);

  return (
    <>
      <div>
        <h1>SESSION PAGE</h1>
        <Link to="/sessions/new">
          <Button>Add Session</Button>
        </Link>

        <h2>Session History</h2>
        <SessionLog userItems={userItems} />
      </div>
    </>
  );
}
