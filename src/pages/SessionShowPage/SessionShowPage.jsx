import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import * as sessionService from "../../utilities/session-service";
export default function SessionShowPage() {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState({});
  const [searchParams] = useSearchParams();
  const selectedId = searchParams.get("selectedId");

  async function getOneItem(selectedId) {
    try {
      const item = await sessionService.getOneItem(selectedId);
      setSelectedItem(item);
    } catch (error) {
      console.log(error);
    }
  }

  async function _handleDelete(selectedId) {
    try {
      const newItemList = await sessionService.deleteOneItem(selectedId);
      navigate("/sessions");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getOneItem(selectedId);
  }, []);
  return (
    <>
      <div>
        <h1>Session Details</h1>
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
              <Button>Edit</Button>
              <Button onClick={() => _handleDelete(selectedId)}>Delete</Button>
              <Link to="/sessions">
                <Button>Back</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
}
