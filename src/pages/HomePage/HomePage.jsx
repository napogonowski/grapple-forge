import * as sessionService from "../../utilities/session-service";
import { useState, useEffect } from "react";
import HomeSessionCard from "../../components/IdvSessionCard/HomeSessionCard";
export default function HomePage() {
  const [lastItem, setLastItem] = useState({});

  async function getLastItem() {
    try {
      console.log("hello its started");
      const lastSession = await sessionService.getLastItem();
      console.log("home page log ", lastSession);
      setLastItem(lastSession);
      // console.log(lastItem);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getLastItem();
  }, [getLastItem]);

  console.log("Homepage log __", lastItem);
  console.log("HELLLLLO");

  return (
    <>
      <div>
        <h1>GRAPPLE FORGE</h1>
        <h4>Month info/ recap </h4>
        <h4>Next Training Sessions is ... </h4>
        <div className="mt-10">
          <h4 className="text-4xl font-extrabold tracking-wide lg:text-5xl mb-5">
            Previous Session
          </h4>
          <HomeSessionCard selectedItem={lastItem} />
        </div>
      </div>
    </>
  );
}
