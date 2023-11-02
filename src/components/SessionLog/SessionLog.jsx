import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
export default function SessionLog({ userItems }) {
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
                <TableCell>
                  <Link to={`{?selectedId=${item._id}`}>
                    <Button>Details</Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
