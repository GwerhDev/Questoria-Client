import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createAdventure } from '../../middlewares/redux/actions/adventure';
import { createQuest } from '../../middlewares/redux/actions/quest';

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
    <div>
      {step === 1 ? (
        <form onSubmit={handleAdventureSubmit}>
          <h2>Create Adventure</h2>
          <input
            type="text"
            placeholder="Adventure Name"
            value={adventureData.name}
            onChange={(e) => setAdventureData({ ...adventureData, name: e.target.value })}
          />
          <textarea
            placeholder="Adventure Description"
            value={adventureData.description}
            onChange={(e) => setAdventureData({ ...adventureData, description: e.target.value })}
          />
          <button type="submit">Create Adventure</button>
        </form>
      ) : (
        <form onSubmit={handleQuestSubmit}>
          <h2>Add Quest</h2>
          <input
            type="text"
            placeholder="Quest Title"
            value={questData.title}
            onChange={(e) => setQuestData({ ...questData, title: e.target.value })}
          />
          <textarea
            placeholder="Quest Description"
            value={questData.description}
            onChange={(e) => setQuestData({ ...questData, description: e.target.value })}
          />
          <input
            type="text"
            placeholder="Reward ID"
            value={questData.rewardId}
            onChange={(e) => setQuestData({ ...questData, rewardId: e.target.value })}
          />
          <input
            type="number"
            placeholder="Level Requirement"
            value={questData.levelRequirement}
            onChange={(e) => setQuestData({ ...questData, levelRequirement: parseInt(e.target.value) })}
          />
          <button type="submit">Add Quest</button>
        </form>
      )}
    </div>
  );
};

export default CreateAdventureQuest;
