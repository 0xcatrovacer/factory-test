import { z } from "zod";

const columnSchema = z.object({
  id: z.string(),
  label: z.string(),
  isNumeric: z.boolean(),
  visible: z.boolean(),
});

const rowSchema = z.record(z.union([z.string(), z.number()]));

const tableSchema = z.object({
  columns: z.array(columnSchema),
  data: z.array(rowSchema),
});

export type TableSchema = z.infer<typeof tableSchema>;