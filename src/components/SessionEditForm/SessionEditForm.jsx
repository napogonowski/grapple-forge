import * as sessionService from "../../utilities/session-service";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

import { useState } from "react";
export default function SessionEditForm({ selectedItem, toggleEdit, onSaved }) {
  const [editItem, setEditItem] = useState({
    _id: selectedItem._id,
    classType: selectedItem.classType,
    date: selectedItem.date,
    technique: selectedItem.technique,
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
      // console.log("handleSave function", updatedItem)
      onSaved(updatedItem);
      toggleEdit();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl text-center mt-10	">
        Edit Form
      </h1>
      <div className="flex justify-center mt-10">
        <form
          className="grid grid-cols-2 w-1/2 m-5 text-left border-2 rounded-md p-5"
          autoComplete="off"
          onSubmit={_handleSubmit}
        >
          <Label className="p-3 text-lg	 ">Class Type: </Label>
          <Input
            className="p-3 mb-3 "
            type="text"
            name="classType"
            value={editItem.classType}
            onChange={_handleChange}
          />

          <Label className="p-3 text-lg ">Date: </Label>
          <Input
            className="p-3 mb-3"
            type="date"
            name="date"
            value={editItem.date}
            onChange={_handleChange}
          />

          <Label className="p-3 text-lg ">Technique(s): </Label>
          <Input
            className="p-3 mb-3"
            type="text"
            name="technique"
            value={editItem.technique}
            onChange={_handleChange}
          />

          <Label className="p-3 text-lg ">Notes: </Label>
          <Textarea
            className="p-3 mb-5 "
            type="text"
            name="notes"
            value={editItem.notes}
            onChange={_handleChange}
          />

          <Button className="col-span-2 m-3">Save</Button>
        </form>
      </div>
    </>
  );
}
