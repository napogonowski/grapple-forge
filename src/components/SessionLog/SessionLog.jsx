import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
export default function SessionLog({ userItems }) {
  // console.log("here!!", userItems)
  return (
    <>
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>#</TableHead>
              <TableHead>Class Type</TableHead>
              <TableHead>Technique</TableHead>
              <TableHead>Date</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {userItems.map((item, index) => (
              
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item.classType}</TableCell>
                <TableCell>{item.technique}</TableCell>
                <TableCell>{new Date(item.date).toDateString()}</TableCell>
                <TableCell>View</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
