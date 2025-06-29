import React, { useState, useEffect, useCallback } from 'react';
import { Box, Heading, Button, Container, VStack, Input, Textarea } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/toast';
import { useDispatch, useSelector } from 'react-redux';
import { createAdventure } from '../../middlewares/redux/actions/adventure';
import { createQuest } from '../../middlewares/redux/actions/quest';
import { CLEAR_ADVENTURE_CREATION_STATE } from '../../middlewares/misc/consts';
import { AppDispatch, RootState } from '../../middlewares/redux/store';

const CreateAdventureForm = ({ isLoading, onSubmit }) => {
  const [adventureName, setAdventureName] = useState('');
  const [adventureDescription, setAdventureDescription] = useState('');

  const handleSubmit = () => {
    onSubmit({ name: adventureName, description: adventureDescription });
  };

  return (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
      <Heading as="h2" size="lg" mb={4}>
        Crear Nueva Aventura
      </Heading>
      <VStack spacing={4}>
        <Input
          placeholder="Nombre de la Aventura"
          value={adventureName}
          onChange={(e) => setAdventureName(e.target.value)}
        />
        <Textarea
          placeholder="Descripción de la Aventura"
          value={adventureDescription}
          onChange={(e) => setAdventureDescription(e.target.value)}
          rows={4}
        />
        <Button
          colorScheme="blue"
          onClick={handleSubmit}
          isLoading={isLoading}
          loadingText="Creando..."
          w="full"
        >
          Crear Aventura
        </Button>
      </VStack>
    </Box>
  );
};

const CreateQuestForm = ({ adventureId, adventureName, isLoading, onSubmit }) => {
  const [questTitle, setQuestTitle] = useState('');
  const [questDescription, setQuestDescription] = useState('');
  const [rewardId, setRewardId] = useState('');
  const [levelRequirement, setLevelRequirement] = useState(1);

  const handleSubmit = () => {
    onSubmit({ title: questTitle, description: questDescription, rewardId, levelRequirement, adventureId });
    setQuestTitle('');
    setQuestDescription('');
    setRewardId('');
    setLevelRequirement(1);
  };

  return (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
      <Heading as="h2" size="lg" mb={4}>
        Añadir Quests a la Aventura: {adventureName}
      </Heading>
      <VStack spacing={4}>
        <Input
          placeholder="Título de la Quest"
          value={questTitle}
          onChange={(e) => setQuestTitle(e.target.value)}
        />
        <Textarea
          placeholder="Descripción de la Quest"
          value={questDescription}
          onChange={(e) => setQuestDescription(e.target.value)}
          rows={4}
        />
        <Input
          placeholder="ID de Recompensa"
          value={rewardId}
          onChange={(e) => setRewardId(e.target.value)}
        />
        <Input
          placeholder="Nivel Requerido"
          type="number"
          value={levelRequirement}
          onChange={(e) => setLevelRequirement(Number(e.target.value))}
        />
        <Button
          colorScheme="green"
          onClick={handleSubmit}
          isLoading={isLoading}
          loadingText="Añadiendo..."
          w="full"
        >
          Añadir Quest
        </Button>
      </VStack>
    </Box>
  );
};

const CreateAdventureQuest = () => {
  const dispatch: AppDispatch = useDispatch();
  const toast = useToast();
  const { loading: adventureLoading, error: adventureError, adventureId, success: adventureSuccess } = useSelector((state: RootState) => state.adventureCreation);
  const { loading: questLoading, error: questError, success: questSuccess } = useSelector((state: RootState) => state.questCreation);
  const [adventureName, setAdventureName] = useState('');

  const handleCreateAdventure = useCallback(async (data) => {
    setAdventureName(data.name);
    await dispatch(createAdventure(data));
  }, [dispatch]);

  const handleCreateQuest = useCallback(async (data) => {
    await dispatch(createQuest(data));
  }, [dispatch]);

  const handleFinish = useCallback(() => {
    dispatch({ type: CLEAR_ADVENTURE_CREATION_STATE });
    setAdventureName('');
  }, [dispatch]);

  useEffect(() => {
    if (adventureSuccess) {
      toast({
        title: "Aventura creada.",
        description: "Ahora puedes añadir quests a esta aventura.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
  }, [adventureSuccess, toast]);

  useEffect(() => {
    if (questSuccess) {
      toast({
        title: "Quest añadida.",
        description: "La quest ha sido añadida exitosamente.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
  }, [questSuccess, toast]);

  useEffect(() => {
    if (adventureError) {
      toast({
        title: "Error al crear aventura.",
        description: adventureError,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  }, [adventureError, toast]);

  useEffect(() => {
    if (questError) {
      toast({
        title: "Error al añadir quest.",
        description: questError,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  }, [questError, toast]);

  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="xl">
          Crear Aventura y Quests
        </Heading>

        {!adventureId ? (
          <CreateAdventureForm isLoading={adventureLoading} onSubmit={handleCreateAdventure} />
        ) : (
          <VStack spacing={8} align="stretch">
            <CreateQuestForm adventureId={adventureId} adventureName={adventureName} isLoading={questLoading} onSubmit={handleCreateQuest} />
            <Button
              variant="outline"
              colorScheme="red"
              onClick={handleFinish}
              w="full"
            >
              Terminar y Crear Nueva Aventura
            </Button>
          </VStack>
        )}
      </VStack>
    </Container>
  );
};

export default CreateAdventureQuest;