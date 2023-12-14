import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as sessionService from "../../utilities/session-service";
import * as techniqueService from "../../utilities/technique-service";
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
      // handling the technique data
      // either have to create or get the technique via the users input
      const techniqueData = { name: formData.technique };
      const existingTechnique = await techniqueService.getTechniqueByName(
        formData.technique
      );
      // variable to hold either new or exisiting technique ID
      let techniqueId;

      if (!existingTechnique) {
        const createdTechnique = await techniqueService.createTechnique(
          techniqueData
        );
        techniqueId = createdTechnique._id;
      } else {
        techniqueId = existingTechnique._id;
      }

      const newSessionItemData = {
        ...formData,
        technique: techniqueId,
      };

      const newSessionItem = await sessionService.createItem(
        newSessionItemData
      );
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
      <div className="flex">
        <div className="flex-1 mx-auto max-w-4xl">
          <form autoComplete="off" onSubmit={_handleSubmit}>
            <div className="m-5 justify-center border-2 rounded-md p-5">
              <Input
                className="p-3 mb-3 text-base bg-slate-200"
                type="text"
                name="classType"
                value={formData.classType}
                onChange={_handleChange}
                placeholder="Class Type"
              />

              <Input
                className="p-3 mb-3 text-base bg-slate-200"
                type="date"
                name="date"
                value={formData.date}
                onChange={_handleChange}
              />

              <Input
                className="p-3 mb-3 text-base bg-slate-200"
                type="text"
                name="technique"
                value={formData.technique}
                onChange={_handleChange}
                placeholder="Techniques learned"
              />

              <Textarea
                className="p-3 text-base bg-slate-200"
                type="text"
                name="notes"
                value={formData.notes}
                onChange={_handleChange}
                placeholder="Session notes"
              />
            </div>
            <Button className="m-5 p-5 text-base mx-auto">Submit</Button>
          </form>
        </div>
      </div>
    </>
  );
}
