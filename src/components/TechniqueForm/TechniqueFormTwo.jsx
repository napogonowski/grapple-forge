import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { useState, useEffect } from "react";
import * as techniqueService from "../../utilities/technique-service";
export default function TechniqueFormTwo() {
  const [editItem, setEditItem] = useState({
    _id: "",
    name: "",
    classification: "",
    notes: "",
  });
  async function getLastItem() {
    try {
      const mostRecent = await techniqueService.getLastItem();
      setEditItem({
        ...editItem,
        name: mostRecent.name,
        _id: mostRecent._id,
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getLastItem();
  }, []);

  return (
    <>
      <h3>{editItem.name}</h3>
      <form action="">
        <Label>Classification</Label>
        <select name="classification" value={editItem.classification}>
          <option value="Submission">Submission</option>
          <option value="Sweep">Sweep</option>
          <option value="Guard">Guard</option>
          <option value="Position">Position</option>
          <option value="Escape">Escape</option>
          <option value="Takedown">Takedown</option>
        </select>
        <Label htmlFor="">Notes</Label>
        <Textarea name="notes" value={editItem.notes} />
        <Button>Save</Button>
      </form>
    </>
  );
}
