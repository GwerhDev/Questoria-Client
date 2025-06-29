import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createAdventure } from '../../middlewares/redux/actions/adventure';
import { createQuest } from '../../middlewares/redux/actions/quest';
import { Box, Typography, TextField, Button } from '@mui/material';

const CreateAdventureQuest: React.FC = () => {
  const dispatch: any = useDispatch();
  const [step, setStep] = useState(1);
  const [adventureId, setAdventureId] = useState('');
  const [adventureData, setAdventureData] = useState({ name: '', description: '' });
  const [questData, setQuestData] = useState({ title: '', description: '', rewardId: '', levelRequirement: 0 });

  const handleAdventureSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await dispatch(createAdventure(adventureData));
    if (response) {
      setAdventureId(response.adventureId);
      setStep(2);
    }
  };

  const handleQuestSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await dispatch(createQuest({ ...questData, adventureId }));
    // Optionally, redirect or show a success message
  };

  return (
    <Box>
      {step === 1 ? (
        <Box component="form" onSubmit={handleAdventureSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Create Adventure
          </Typography>
          <TextField
            label="Adventure Name"
            variant="outlined"
            fullWidth
            value={adventureData.name}
            onChange={(e) => setAdventureData({ ...adventureData, name: e.target.value })}
          />
          <TextField
            label="Adventure Description"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={adventureData.description}
            onChange={(e) => setAdventureData({ ...adventureData, description: e.target.value })}
          />
          <Button type="submit" variant="contained">
            Create Adventure
          </Button>
        </Box>
      ) : (
        <Box component="form" onSubmit={handleQuestSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Add Quest
          </Typography>
          <TextField
            label="Quest Title"
            variant="outlined"
            fullWidth
            value={questData.title}
            onChange={(e) => setQuestData({ ...questData, title: e.target.value })}
          />
          <TextField
            label="Quest Description"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={questData.description}
            onChange={(e) => setQuestData({ ...questData, description: e.target.value })}
          />
          <TextField
            label="Reward ID"
            variant="outlined"
            fullWidth
            value={questData.rewardId}
            onChange={(e) => setQuestData({ ...questData, rewardId: e.target.value })}
          />
          <TextField
            label="Level Requirement"
            variant="outlined"
            fullWidth
            type="number"
            value={questData.levelRequirement}
            onChange={(e) => setQuestData({ ...questData, levelRequirement: parseInt(e.target.value) })}
          />
          <Button type="submit" variant="contained">
            Add Quest
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default CreateAdventureQuest;

