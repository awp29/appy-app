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
import Checkbox from "../../components/form/Checkbox";
import { CheckboxIcon } from "../../components/form/types";
import PrimaryButton from "../../components/button/PrimaryButton";
import { useNavigate } from "react-router";
import PageHeader from "../../components/page/PageHeader";
import { Person } from "./types";
import { mockPeople } from "./mockData";
import { format } from "date-fns";

const columnHelper = createColumnHelper<Person>();

const columns = [
  columnHelper.display({
    id: "select-col",
    header: ({ table }) => (
      <Checkbox
        iconType={CheckboxIcon.Dash}
        onChange={table.getToggleAllRowsSelectedHandler()}
        checked={table.getIsAllRowsSelected()}
      />
    ),

    cell: ({ row }) => {
      return (
        <Checkbox
          onChange={row.getToggleSelectedHandler()}
          checked={row.getIsSelected()}
        />
      );
    },
  }),
  columnHelper.accessor("details", {
    header: () => <HeaderText>Employee</HeaderText>,
    cell: (info) => {
      const details = info.getValue();

      return (
        <CellText className="flex flex-col">
          <span className="text-strong">{details.name}</span>
          <span>{details.email}</span>
        </CellText>
      );
    },
  }),
  columnHelper.accessor("role", {
    header: () => <HeaderText>Email</HeaderText>,
    cell: (info) => <CellText>{info.getValue()}</CellText>,
  }),
  columnHelper.accessor("team", {
    header: () => <HeaderText>Team</HeaderText>,
    cell: (info) => {
      return <CellText>{info.getValue()}</CellText>;
    },
  }),
  columnHelper.accessor("dateJoined", {
    header: () => <HeaderText>Joined</HeaderText>,
    cell: (info) => {
      const dateJoined = info.getValue();
      const formatedDate = format(new Date(dateJoined), "MMM dd, yyyy");
      return <CellText>{formatedDate}</CellText>;
    },
  }),
];

const PeoplePage: React.FC = () => {
  const navigate = useNavigate();
  const [globalFilter, setGlobalFilter] = React.useState("");

  const table = useReactTable({
    enableRowSelection: true,
    columns,
    data: mockPeople,
    getCoreRowModel: getCoreRowModel(),
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
  });

  // AP-TODO: USE THIS TO DELETE MULTIPLE ROWS ETC
  // const selectedRows = table.getSelectedRowModel().rows;

  return (
    <div className="flex">
      <Nav />

      <SingleColumnPage>
        <PageHeader>
          <PageTitle>People</PageTitle>
          <PageDescription>Have a little spy on your people</PageDescription>

          <PrimaryButton
            className="ml-auto"
            onClick={() => navigate("/addmember")}
          >
            Add member
          </PrimaryButton>
        </PageHeader>

        <div className="w-full">
          <table className="w-full">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="border-b-[1px] border-t-[1px] border-solid border-stroke-weak h-[48px]"
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
                  className="h-[80px] border-b-[1px] border-solid border-stroke-weak"
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
