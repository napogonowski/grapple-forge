import TechniqueCard from "../../components/IdvSessionCard/TechniqueCard";
import { Button } from "../../components/ui/button";

export default function TechniquePage() {
  return (
    <>
      <h1>Techniques</h1>
      <div>
        <TechniqueCard />
      </div>
      <Button>Add New Technique </Button>
    </>
  );
}
