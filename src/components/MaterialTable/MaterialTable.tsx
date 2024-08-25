import { useMemo } from "react";
import "./MaterialTable.scss";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
  MRT_ExpandAllButton,
} from "material-react-table";
import { data, type Person } from "../../data";
import { Box, Stack } from "@mui/material";

const MaterialTable = () => {
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        header: "Name",
        accessorKey: "name",
      },
      {
        header: "Mission ID",
        accessorKey: "id",
      },
      {
        header: "Brand",
        accessorKey: "brand",
      },
      {
        header: "Start",
        accessorKey: "start",
      },
      {
        header: "End",
        accessorKey: "end",
      },
      {
        header: "Mission Status",
        accessorKey: "status",
      },
      {
        header: "Type",
        accessorKey: "type",
      },
      {
        header: "Openings",
        accessorKey: "openings",
      },
      {
        header: "Signed Up",
        accessorKey: "signedup",
      },
      {
        header: "Submitted",
        accessorKey: "submitted",
      },
      {
        header: "Approved",
        accessorKey: "approved",
      },
      {
        header: "State",
        accessorKey: "state",
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
    displayColumnDefOptions: {
      "mrt-row-expand": {
        Header: () => (
          <Stack direction="row" alignItems="center">
            <MRT_ExpandAllButton table={table} />
            <Box>Groups</Box>
          </Stack>
        ),
        GroupedCell: ({ row, table }) => {
          const { grouping } = table.getState();
          return row.getValue(grouping[grouping.length - 1]);
        },
        enableResizing: true,
        muiTableBodyCellProps: ({ row }) => ({
          sx: (theme) => ({
            color:
              row.depth === 0
                ? theme.palette.primary.main
                : row.depth === 1
                ? theme.palette.secondary.main
                : undefined,
          }),
        }),
        size: 200,
      },
    },
    enableGrouping: true,
    enableColumnResizing: true,
    groupedColumnMode: "remove",
    initialState: {
      density: "compact",
      expanded: true, 
      grouping: ["state"], 
      pagination: { pageIndex: 0, pageSize: 10 },
      sorting: [{ id: "state", desc: false }],
    },
  });
  return (
    <div className="materialTable">
      <MaterialReactTable table={table} />
    </div>
  );
};

export default MaterialTable;
