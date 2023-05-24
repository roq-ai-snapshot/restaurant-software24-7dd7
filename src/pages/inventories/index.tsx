import AppLayout from 'layout/app-layout';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Box, Text } from '@chakra-ui/react';
import useSWR from 'swr';
import { Spinner } from '@chakra-ui/react';
import { getInventories } from 'apiSdk/inventories';
import { InventoryInterface } from 'interfaces/inventory';
import { Error } from 'components/error';

function InventoryListPage() {
  const { data, error, isLoading } = useSWR<InventoryInterface[]>(() => true, getInventories);

  return (
    <AppLayout>
      <Text as="h1" fontSize="2xl" fontWeight="bold">
        Inventory
      </Text>
      <Box bg="white" p={4} rounded="md" shadow="md">
        {error && <Error error={error} />}
        {isLoading ? (
          <Spinner />
        ) : (
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Id</Th>
                  <Th>Restaurant Id</Th>
                  <Th>Item Name</Th>
                  <Th>Quantity</Th>
                  <Th>Unit</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data?.map((record) => (
                  <Tr key={record.id}>
                    <Td>{record.id}</Td>
                    <Td>{record.restaurant_id}</Td>
                    <Td>{record.item_name}</Td>
                    <Td>{record.quantity}</Td>
                    <Td>{record.unit}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        )}
      </Box>
    </AppLayout>
  );
}
export default InventoryListPage;
