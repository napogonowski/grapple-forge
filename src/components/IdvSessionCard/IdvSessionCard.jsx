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
export default function IdvSessionCard({
  selectedItem,
  _handleDelete,
  toggleEdit,
  selectedId,
}) {
  console.log("card log ", selectedItem);
  return (
    <>
      <div className="flex justify-center mt-10 ">
        <Card>
          <CardHeader>
            <CardTitle>Session Number #</CardTitle>

            <CardDescription>
              {new Date(selectedItem.date).toDateString()}
            </CardDescription>
          </CardHeader>
          <CardTitle>{selectedItem.classType}</CardTitle>
          <CardContent>
            <h5 className="mt-3">{selectedItem.technique && selectedItem.technique.name}</h5>
            <p>{selectedItem.notes}</p>
          </CardContent>
          <CardFooter className="m-3 ">
            <Link to="/sessions">
              <Button className="m-1 p-5 transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-amber-500 duration-300 ">
                Back
              </Button>
            </Link>
            <Button
              className="m-1 p-5 transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-amber-500 duration-300 "
              onClick={toggleEdit}
            >
              Edit
            </Button>
            <Button
              className="m-1 p-5 transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-amber-500 duration-300 "
              onClick={() => _handleDelete(selectedId)}
            >
              Delete
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
