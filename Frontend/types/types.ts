export type StatusType = "Pending" | "Completed";

export type ButtonVariants =
  | "default"
  | "link"
  | "warning"
  | "success"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | null
  | undefined;

export interface TaskProps {
  _id: number;
  title: string;
  description: string | null;
  status: string;
  due_date: Date | null;
  createdAt: Date;
  updatedAt: Date;
}
