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
                    <Button className="m-1 p-5 transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-amber-500 duration-300 ">
                      Details
                    </Button>
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
