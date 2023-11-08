import * as sessionService from "../../utilities/session-service";
import { useState, useEffect } from "react";
import IdvSessionCard from "../../components/IdvSessionCard/IdvSessionCard";
import HomeSessionCard from "../../components/IdvSessionCard/HomeSessionCard";
export default function HomePage() {
  const [lastItem, setLastItem] = useState({});

  async function getLastItem() {
    try {
      const lastSession = await sessionService.getLastItem();
      console.log("home page log ", lastSession);
      setLastItem(lastSession);
      console.log(lastItem);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getLastItem();
  }, []);

  return (
    <>
      <div>
        <h1>GRAPPLE FORGE</h1>
        <h4>Month info/ recap </h4>
        <h4>Next Training Sessions is ... </h4>

        <h4>Previous Session</h4>
        <IdvSessionCard selectedItem={lastItem} />
        <HomeSessionCard selectedItem={lastItem} />
      </div>
    </>
  );
}
