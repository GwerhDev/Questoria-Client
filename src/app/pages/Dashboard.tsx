import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button, Card, CardContent } from '@mui/material';

const Dashboard: React.FC = () => {
  return (
    <Box>
      <Card>
        <CardContent>
          <Typography variant="h4" component="h1" gutterBottom>
            Dashboard
          </Typography>
          <Typography variant="body1" paragraph>
            Welcome to the admin and teacher dashboard.
          </Typography>
          <Button variant="contained" component={Link} to="/dashboard/create">
            Create Adventure and Quests
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Dashboard;
