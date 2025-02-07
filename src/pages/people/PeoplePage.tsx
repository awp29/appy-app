import React from "react";
import Nav from "../../components/nav/Nav";
import SingleColumnPage from "../../components/page/SingleColumnPage";
import PageTitle from "../../components/page/PageTitle";
import PageDescription from "../../components/page/PageDescription";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
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
import Pagination from "../../components/table/pagination/Pagination";
import ChevronLeftIcon from "../../assets/icons/chevronLeft.svg?react";
import ChevronRightIcon from "../../assets/icons/chevronRight.svg?react";
import ChevronDownIcon from "../../assets/icons/chevronDown.svg?react";

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
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const table = useReactTable({
    enableRowSelection: true,
    columns,
    data: mockPeople,
    state: {
      pagination,
      globalFilter,
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    onGlobalFilterChange: setGlobalFilter,
  });

  // AP-TODO: USE THIS TO DELETE MULTIPLE ROWS ETC
  // const selectedRows = table.getSelectedRowModel().rows;

  const firstRowIndex = pagination.pageIndex * pagination.pageSize + 1;
  const lastRowIndex = firstRowIndex + pagination.pageSize - 1;

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

          <Pagination>
            <div className="flex items-center gap-1">
              <button className="flex items-center justify-between w-[46px]">
                <span className="text-weak text-[14px] underline">
                  {String(pagination.pageIndex + 1).padStart(2, "0")}
                </span>
                <ChevronDownIcon />
              </button>

              <span className="text-weak text-[14px]">of 10 pages</span>

              <div className="flex items-center">
                <Pagination.PageButton
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
                >
                  <ChevronLeftIcon width={20} />
                </Pagination.PageButton>

                <Pagination.PageButton
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
                >
                  <ChevronRightIcon width={20} />
                </Pagination.PageButton>
              </div>
            </div>

            <span className="text-weak text-[14px]">
              Showing {firstRowIndex} - {lastRowIndex} of {table.getRowCount()}
            </span>
          </Pagination>
        </div>
      </SingleColumnPage>
    </div>
  );
};

export default PeoplePage;
