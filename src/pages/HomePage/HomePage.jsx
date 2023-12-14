import * as sessionService from "../../utilities/session-service";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import HomeSessionCard from "../../components/IdvSessionCard/HomeSessionCard";
export default function HomePage() {
  const [lastItem, setLastItem] = useState({});

  async function getLastItem() {
    try {
      console.log("hello its started");
      const lastSession = await sessionService.getLastItem();
      console.log("home page log ", lastSession);
      setLastItem(lastSession);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getLastItem();
  }, []);

  return (
    <>
      <div className="mt-10 mx-auto max-w-5xl p-10 ">
        <div className=" grid md:grid-flow-col md:auto-cols-max md:justify-evenly md:justify-items-strech md:content-center		md:grid-cols-3 ">
          <div className="md:col-start-2 md:col-span-3">
            <HomeSessionCard selectedItem={lastItem} />
          </div>
          <Link to="/sessions">
            <Button className="p-5 m-4 text-base transition delay-150  hover:bg-amber-500 duration-300 md:col-start-1  md:max-w-4xl md:max-h-28 md:p-20  ">
              All Sessions
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
