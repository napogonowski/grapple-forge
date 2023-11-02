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
  return (
    <>
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Session Number #</CardTitle>
            <CardDescription>
              {new Date(selectedItem.date).toDateString()}
            </CardDescription>
            <CardTitle>{selectedItem.classType}</CardTitle>
          </CardHeader>
          <CardContent>
            <h5>{selectedItem.technique}</h5>
            <p>{selectedItem.notes}</p>
          </CardContent>
          <CardFooter>
            <Button onClick={toggleEdit}>Edit</Button>
            <Button onClick={() => _handleDelete(selectedId)}>Delete</Button>
            <Link to="/sessions">
              <Button>Back</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
