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
      <div className="flex">
        <div className="flex-1 mx-auto max-w-7xl">
          <Table>
            <TableHeader className="">
              <TableRow className="	text-lg">
                <TableHead className="text-slate-800 hidden md:block ">
                  #
                </TableHead>
                <TableHead className="text-slate-800">Class Type</TableHead>
                <TableHead className="text-slate-800">Technique</TableHead>
                <TableHead className=" text-slate-800 hidden md:block ">
                  Date
                </TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="text-left md:text-base	">
              {userItems.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="hidden md:block">{index + 1}</TableCell>
                  <TableCell>{item.classType}</TableCell>
                  <TableCell>{item.technique.name}</TableCell>
                  <TableCell className="hidden md:block">
                    {new Date(item.date).toDateString()}
                  </TableCell>
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
      </div>
    </>
  );
}
