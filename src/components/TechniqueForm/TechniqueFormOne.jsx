import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useState } from "react";
import * as techniqueService from "../../utilities/technique-service";
export default function TechniqueFormOne({ setNameEntered }) {
  const [newTech, setNewTech] = useState("");
  async function _handleSubmit(e) {
    e.preventDefault();
    try {
      const newTechnique = await techniqueService.createTechnique(newTech);
      setNameEntered(true);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <form onSubmit={_handleSubmit}>
        <Label>Technique Name</Label>
        <Input
          type="text"
          value={newTech}
          onChange={(e) => setNewTech(e.target.value)}
        />

        <Button>Next</Button>
      </form>
    </>
  );
}
