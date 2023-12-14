import * as sessionService from "../../utilities/session-service";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

import { useState } from "react";
export default function SessionEditForm({ selectedItem, toggleEdit, onSaved }) {
  const formattedDate = new Date(selectedItem.date).toISOString().split("T")[0];

  const [editItem, setEditItem] = useState({
    _id: selectedItem._id,
    classType: selectedItem.classType,
    date: formattedDate,
    technique: selectedItem.technique.name,
    notes: selectedItem.notes,
  });

  function _handleChange(e) {
    const { name, value } = e.target;
    const newItem = { ...editItem, [name]: value };
    setEditItem(newItem);
  }
  async function _handleSubmit(e) {
    e.preventDefault();
    try {
      const updatedItem = await sessionService.editItem(editItem);
      onSaved(updatedItem);
      toggleEdit();
    } catch (error) {
      console.log(error);
    }
  }
  console.log("Edit Page", selectedItem);
  return (
    <>
      <div className="flex">
        <div className="flex-1 mx-auto max-w-4xl ">
          <form autoComplete="off" onSubmit={_handleSubmit}>
            <div className="m-5 justify-center border-2 rounded-md p-5">
              <Input
                className="p-3 mb-3 text-base"
                type="text"
                name="classType"
                value={editItem.classType}
                onChange={_handleChange}
              />

              <Input
                className="p-3 mb-3 text-base"
                type="date"
                name="date"
                value={editItem.date}
                onChange={_handleChange}
              />

              <Input
                className="p-3 mb-3 text-base"
                type="text"
                name="technique"
                value={editItem.technique}
                onChange={_handleChange}
              />

              <Textarea
                className="p-3 text-base "
                type="text"
                name="notes"
                value={editItem.notes}
                onChange={_handleChange}
              />

              <Button className="m-5 p-5 text-base mx-auto transition delay-150  hover:bg-amber-500 duration-300">
                Save
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
