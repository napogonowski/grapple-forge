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
      <div className="flex justify-center mt-20 ">
        <div className="flex-1 mx-auto max-w-xl ">
          <Card className="border-2 rounded-md p-5">
            <CardHeader>
              <CardTitle className="text-3xl">
                {selectedItem.classType}
              </CardTitle>
              <CardDescription className="text-base">
                {new Date(selectedItem.date).toDateString()}
              </CardDescription>
            </CardHeader>
            <CardContent className="">
              <h5 className="m-2 text-xl font-bold">
                {selectedItem.technique && selectedItem.technique.name}
              </h5>
              <p className="mt-7 leading-snug text-justify subpixel-antialiased whitespace-pre-line ">
                {selectedItem.notes}
              </p>
            </CardContent>
            <CardFooter className="justify-center mt-4">
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
      </div>
    </>
  );
}
