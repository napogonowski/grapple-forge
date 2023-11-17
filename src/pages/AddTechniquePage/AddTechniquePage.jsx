import TechniqueFormOne from "../../components/TechniqueForm/TechniqueFormOne";
import TechniqueFormTwo from "../../components/TechniqueForm/TechniqueFormTwo";
import { useState } from "react";

export default function AddTechniquePage() {
  const [nameEntered, setNameEntered] = useState(false);

  return (
    <>
      <h1>Add What You've Learned</h1>
      {nameEntered ? (
        <TechniqueFormTwo />
      ) : (
        <TechniqueFormOne setNameEntered={setNameEntered} />
      )}
    </>
  );
}
