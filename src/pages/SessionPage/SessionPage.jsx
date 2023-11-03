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
      <div className="mt-20">
        <h2 className="text-4xl font-extrabold tracking-wide lg:text-5xl mb-10">
          Session History
        </h2>
        <SessionLog userItems={userItems} />
        <Link to="/sessions/new">
          <Button className="mt-10 p-5 transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-amber-500 duration-300 ">Add Session</Button>
        </Link>
      </div>
    </>
  );
}
