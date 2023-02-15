import React, { useState, useEffect } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Center,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { Wrap, WrapItem } from '@chakra-ui/react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Flex,
} from '@chakra-ui/react';

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react';

import {
  PhoneIcon,
  AddIcon,
  WarningIcon,
  ChevronDownIcon,
} from '@chakra-ui/icons';

import { Input } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Heading mt="5" textAlign="center">
          I'm a Heading
        </Heading>
        <Box w="80vw" maxW="900px" m="auto" mt="10">
          <Tabs>
            <TabList>
              <Tab>One</Tab>
              <Tab>Two</Tab>
              <Tab>Three</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Prices />
              </TabPanel>
              <TabPanel>
                <p>two 22222!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

function Prices() {
  let nameRef = React.createRef();
  let priceRef = React.createRef();

  const [data, setState] = useState([]);

  useEffect(() => {
    fetch('/api/prices')
      .then(b => b.json())
      .then(x => {
        setState(x);
      });
  }, []);

  function clk() {
    setState([
      ...data,
      {
        name: nameRef.current.value,
        price: priceRef.current.value,
      },
    ]);
  }

  return (
    <Box>
      <TableContainer m="auto" w="80vw" maxW="900px">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Price</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((x, idx) => {
              return (
                <Tr key={idx}>
                  <Td>{x.name}</Td>
                  <Td>{x.price}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <Box>
        <Flex spacing="2" mt="2">
          <Input ref={nameRef} placeholder="Name" />
          <Input ref={priceRef} placeholder="Price" ml="2" />
          <Button ml="2" onClick={clk}>
            Add
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}

export default App;
