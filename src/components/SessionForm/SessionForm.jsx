import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as sessionService from "../../utilities/session-service";
export default function SessionForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    classType: "",
    date: new Date(),
    technique: "",
    notes: "",
  });

  function _handleChange(e) {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
  }

  async function _handleSubmit(e) {
    e.preventDefault();
    try {
      const newSessionItem = await sessionService.createItem(formData);
      setFormData({
        classType: "",
        date: new Date(),
        technique: "",
        notes: "",
      });
      navigate("/sessions");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="flex justify-center mt-5">
        <form
          className="grid grid-cols-2 w-1/2 m-5 text-left border-2 rounded-md p-5"
          autoComplete="off"
          onSubmit={_handleSubmit}
        >
          <Label className="p-3 text-lg ">Class Type</Label>
          <Input
            className="p-3 mb-3"
            type="text"
            name="classType"
            value={formData.classType}
            onChange={_handleChange}
          />

          <Label className="p-3 text-lg ">Date</Label>
          <Input
            className="p-3 mb-3"
            type="date"
            name="date"
            value={formData.date}
            onChange={_handleChange}
          />

          <Label className="p-3 text-lg ">Technique(s)</Label>
          <Input
            className="p-3 mb-3"
            type="text"
            name="technique"
            value={formData.technique}
            onChange={_handleChange}
          />

          <Label className="p-3 text-lg ">Notes</Label>
          <Textarea
            className="p-3 mb-5 "
            type="text"
            name="notes"
            value={formData.notes}
            onChange={_handleChange}
          />

          <Button className="col-span-2 m-5">Submit</Button>
        </form>
      </div>
    </>
  );
}
