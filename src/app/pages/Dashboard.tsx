import React from 'react';
import { Box, Heading, Text, Button, Container, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={8} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <Heading fontSize="xl">Dashboard de Administración</Heading>
          <Text mt={4}>Bienvenido al panel de control. Selecciona una opción:</Text>
        </Box>

        <Box>
          <Button as={Link} to="/dashboard/create" colorScheme="teal" size="lg" w="full">
            Crear Aventura y Quests
          </Button>
          {/* Futuras opciones aquí */}
        </Box>
      </VStack>
    </Container>
  );
};

export default Dashboard;