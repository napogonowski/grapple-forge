import * as sessionService from "../../utilities/session-service";
import { Button } from "../ui/button";
import { useState } from "react";
export default function SessionEditForm({ selectedItem, toggleEdit }) {
  const [editItem, setEditItem] = useState({
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
      toggleEdit();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div>
        <h1>Edit Form</h1>
        <form autoComplete="off">
          <label>Class Type: </label>
          <input
            type="text"
            name="classType"
            value={editItem.classType}
            onChange={_handleChange}
          />

          <label>Date: </label>
          <input
            type="date"
            name="date"
            value={editItem.date}
            onChange={_handleChange}
          />

          <label>Technique(s): </label>
          <input
            type="text"
            name="technique"
            value={editItem.technique}
            onChange={_handleChange}
          />

          <label>Notes: </label>
          <textarea
            type="text"
            name="notes"
            value={editItem.notes}
            onChange={_handleChange}
          />

          <Button>Save</Button>
        </form>
      </div>
    </>
  );
}
