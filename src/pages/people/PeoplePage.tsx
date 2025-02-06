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
import HeaderText from "../../components/table/HeaderText";
import CellText from "../../components/table/CellText";
import { cn } from "../../utils";
import { formatDistance } from "date-fns";
import Checkbox from "../../components/form/Checkbox";
import { CheckboxIcon } from "../../components/form/types";

type Person = {
  user: {
    name: string;
    role: string;
  };
  email: string;
  lastActive: string;
  budget: number;
};

const people: Person[] = [
  {
    user: {
      name: "John Smith",
      role: "Designer",
    },
    email: "j.smith@appyapp.com",
    lastActive: "2025-02-03T13:55:29+00:00",
    budget: 8590.03,
  },
  {
    user: {
      name: "Brooklyn Sims",
      role: "UX Designer",
    },
    email: "b.sims@appyapp.com",
    lastActive: "2025-02-01T09:23:01+00:00",
    budget: -2201.04,
  },
];

const columnHelper = createColumnHelper<Person>();

const columns = [
  columnHelper.display({
    id: "select-col",
    header: ({ table }) => (
      // <input
      //   type="checkbox"
      //   checked={table.getIsAllRowsSelected()}
      //   onChange={table.getToggleAllRowsSelectedHandler()}
      // />

      <Checkbox
        iconType={CheckboxIcon.Dash}
        onChange={table.getToggleAllRowsSelectedHandler()}
        checked={table.getIsAllRowsSelected()}
      />
    ),

    cell: ({ row }) => {
      return (
        // <input
        //   type="checkbox"
        //   checked={row.getIsSelected()}
        //   onChange={row.getToggleSelectedHandler()}
        // />
        <Checkbox
          onChange={row.getToggleSelectedHandler()}
          checked={row.getIsSelected()}
        />
      );
    },
  }),
  columnHelper.accessor("user", {
    header: () => <HeaderText>User</HeaderText>,
    cell: (info) => {
      const user = info.getValue();

      return (
        <CellText className="flex flex-col">
          <span className="text-strong">{user.name}</span>
          <span className="text-[14px]">{user.role}</span>
        </CellText>
      );
    },
  }),
  columnHelper.accessor("email", {
    header: () => <HeaderText>Email</HeaderText>,
    cell: (info) => <CellText>{info.getValue()}</CellText>,
  }),
  columnHelper.accessor("lastActive", {
    header: () => <HeaderText>Last Active</HeaderText>,
    cell: (info) => {
      const lastActive = info.getValue();
      const distance = formatDistance(lastActive, new Date(), {
        addSuffix: true,
      });

      return <CellText>{distance}</CellText>;
    },
  }),
  columnHelper.accessor("budget", {
    header: () => <HeaderText className="text-right">Budget</HeaderText>,
    cell: (info) => {
      const budget = info.getValue();
      const isNegative = budget < 0;

      return (
        <CellText className={cn("text-right", isNegative && "text-error")}>
          {info.getValue()} GBP
        </CellText>
      );
    },
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
                <tr
                  key={row.id}
                  className="h-[80px] border-b-2 border-solid border-stroke-weak"
                >
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
