import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/card";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
export default function HomeSessionCard({ selectedItem }) {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex-1 mx-auto max-w-md">
          <Link to={`/sessions/{?selectedId=${selectedItem._id}`}>
            <Card className="transition delay-150  hover:bg-amber-500 duration-300">
              <CardHeader>
                <h1 className="text-2xl font-bold tracking-tight lg:text-3xl">
                  Previous Session
                </h1>
                <CardTitle className="underline text-2xl">
                  <h1>{selectedItem.classType}</h1>
                </CardTitle>
                <CardDescription className="text-sm m-5">
                  {new Date(selectedItem.date).toDateString()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-base">
                  {selectedItem.technique && selectedItem.technique.name}
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </>
  );
}
