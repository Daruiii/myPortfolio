const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/api/projects', (req, res) => {
  res.json([
    {
      id: 1,
      title: 'Portfolio Project',
      description: 'A personal portfolio website built with React and Node.js',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    },
    // Ajoutez d'autres projets ici
  ]);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
