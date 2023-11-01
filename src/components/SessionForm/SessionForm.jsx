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
      <div>
        <form autoComplete="off" onSubmit={_handleSubmit}>
          <label>Class Type</label>
          <input
            type="text"
            name="classType"
            value={formData.classType}
            onChange={_handleChange}
          />

          <label>Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={_handleChange}
          />

          <label>Technique(s)</label>
          <input
            type="text"
            name="technique"
            value={formData.technique}
            onChange={_handleChange}
          />

          <label>Notes</label>
          <textarea
            type="text"
            name="notes"
            value={formData.notes}
            onChange={_handleChange}
          />

          <button>Submit</button>
        </form>
      </div>
    </>
  );
}
