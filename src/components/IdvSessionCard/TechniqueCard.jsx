import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "../ui/card";
export default function TechniqueCard() {
  return (
    <>
      <Card>
        <CardHeader>Technique Name</CardHeader>
        <CardContent>
          <p>Technique Classification</p>
          <p>Technique notes</p>
        </CardContent>
      </Card>
    </>
  );
}
