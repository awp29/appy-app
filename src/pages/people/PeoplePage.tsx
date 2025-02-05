import React from "react";
import Nav from "../../components/nav/Nav";
import SingleColumnPage from "../../components/page/SingleColumnPage";
import PageTitle from "../../components/page/PageTitle";
import PageDescription from "../../components/page/PageDescription";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import HeaderLabel from "../../components/table/HeaderLabel";

type Person = {
  name: string;
  role: string;
  email: string;
  lastActive: string;
  budget: number;
};

const people: Person[] = [
  {
    name: "John Smith",
    role: "Designer",
    email: "j.smith@appyapp.com",
    lastActive: "2025-02-03T13:55:29+00:00",
    budget: 8590.03,
  },
  {
    name: "Brooklyn Sims",
    role: "UX Designer",
    email: "b.sims@appyapp.com",
    lastActive: "2025-04-03T09:23:01+00:00",
    budget: -2201.04,
  },
];

const columnHelper = createColumnHelper<Person>();

const columns = [
  columnHelper.display({
    id: "select-col",
    header: ({ table }) => (
      <input
        type="checkbox"
        onChange={table.getToggleAllRowsSelectedHandler()}
        checked={table.getIsAllRowsSelected()}
      />
    ),

    cell: ({ row }) => {
      return (
        <input
          type="checkbox"
          onChange={row.getToggleSelectedHandler()}
          checked={row.getIsSelected()}
        />
      );
    },
  }),
  columnHelper.accessor("name", {
    header: () => <HeaderLabel>Name</HeaderLabel>,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("role", {
    header: () => <HeaderLabel>Role</HeaderLabel>,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("email", {
    header: () => <HeaderLabel>Email</HeaderLabel>,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("lastActive", {
    header: () => <HeaderLabel>Last Active</HeaderLabel>,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("budget", {
    header: () => <HeaderLabel className="text-right">Budget</HeaderLabel>,
    cell: (info) => <div className="text-right">{info.getValue()}</div>,
  }),
];

const PeoplePage: React.FC = () => {
  const table = useReactTable({
    enableRowSelection: true,
    columns,
    data: people,
    getCoreRowModel: getCoreRowModel(),
  });

  // AP-TODO: USE THIS TO DELETE MULTIPLE ROWS ETC
  // const selectedRows = table.getSelectedRowModel().rows;

  return (
    <div className="flex">
      <Nav />

      <SingleColumnPage>
        <PageTitle>People</PageTitle>
        <PageDescription>Have a little spy on your people</PageDescription>

        <div className="mt-[48px] w-full">
          <table className="w-full">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="border-b-2 border-t-2 border-solid border-stroke-weak h-[48px]"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SingleColumnPage>
    </div>
  );
};

export default PeoplePage;
