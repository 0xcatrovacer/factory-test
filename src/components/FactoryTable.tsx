import React, { useContext } from 'react'
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from "@chakra-ui/react"
import { TableSchema } from "../lib/schemas/table-schema";
import { ThemeContext } from '../lib/themes/mainTheme';

type TableProps = {
  schema: TableSchema;
};

export const FactoryTable: React.FC<TableProps> = ({ schema }) => {
  const { themeObject } = useContext(ThemeContext)

  const visibleColumns = schema.columns.filter((column) => column.visible);

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            {visibleColumns.map((column) => (
              <Th key={column.id} isNumeric={column.isNumeric}>
                {column.label}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {schema.data.map((row, rowIndex) => (
            <Tr key={rowIndex}>
              {visibleColumns.map((column) => (
                <Td key={column.id} isNumeric={column.isNumeric} color={themeObject.primary}>
                  {row[column.id] || "-"}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default FactoryTable