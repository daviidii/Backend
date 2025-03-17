import {
  DataTableDropdown,
  DataTableEditableCell,
  DataTableStatusCell,
  DatePicker,
} from "#components";
import type { ColumnDef } from "@tanstack/vue-table";
import { h } from "vue";
import type { TaskProps, StatusType, ButtonVariants } from "~/types/types";

export const taskColumns: ColumnDef<TaskProps>[] = [
  {
    accessorKey: "title",
    header: "Title",
    size: 100,
    id: "title",
    cell: (props) => {
      return h(DataTableEditableCell, {
        getValue: props.getValue,
        row: props.row,
        column: props.column,
        table: props.table,
        inputType: "INPUT",
        placeholder: "title",
      });
    },
  },
  {
    accessorKey: "description",
    header: "Description",
    size: 50,
    id: "description",
    cell: (props) => {
      return h(DataTableEditableCell, {
        getValue: props.getValue,
        row: props.row,
        column: props.column,
        table: props.table,
        inputType: "TEXTAREA",
        placeholder: "description",
      });
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    id: "status",
    size: 300,
    cell: (props) => {
      const statusOption: StatusType[] = ["Completed", "Pending"];
      return h(DataTableStatusCell, {
        options: statusOption,
        getValue: props.getValue,
        table: props.table,
        column: props.column,
        row: props.row,
      });
    },
  },
  {
    accessorKey: "due_date",
    header: "Due Date",
    id: "due_date",
    size: 300,
    cell: (props) => {
      return h(DatePicker, {
        getValue: props.getValue,
        table: props.table,
        column: props.column,
        row: props.row,
      });
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: (props) => {
      return h(
        "div",
        { class: "relative" },
        h(DataTableDropdown, { row: props.row, table: props.table })
      );
    },
  },
];
