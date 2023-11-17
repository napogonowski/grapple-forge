import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "../ui/card";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
export default function HomeSessionCard({ selectedItem }) {
  console.log("What inside selectedItem", selectedItem);
  return (
    <>
      <div className="flex justify-center mt-5 ">
        <Card>
          <CardHeader>
            <CardTitle>{selectedItem.classType}</CardTitle>

            <CardDescription>
              {new Date(selectedItem.date).toDateString()}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <h5 className="mt-3">{selectedItem.technique && selectedItem.technique.name}</h5>
            <p className="truncate">{selectedItem.notes}</p>
          </CardContent>
          <CardFooter className="m-3 justify-center	">
            <Link to={`/sessions/{?selectedId=${selectedItem._id}`}>
              <Button className="m-2 p-5  transition  delay-150 bg-black hover:bg-amber-500 duration-300 ">
                Details
              </Button>
            </Link>
            <Link to="/sessions">
              <Button className="m-2 p-5 transition  delay-150 bg-black hover:bg-amber-500 duration-300 ">
                All Sessions
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
