const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory database (for demo purposes)
let chemicals = [
  {
    id: uuidv4(),
    name: 'Acetone',
    formula: 'CH₃COCH₃',
    purity: '99.5%',
    quantity: 200,
    unit: 'L',
    supplier: 'Los Pollos Hermanos Supply',
    dangerLevel: 'low',
    status: 'available'
  },
  {
    id: uuidv4(),
    name: 'Methylamine',
    formula: 'CH₃NH₂',
    purity: '99.8%',
    quantity: 50,
    unit: 'L',
    supplier: 'Golden Moth Chemical',
    dangerLevel: 'high',
    status: 'available'
  },
  {
    id: uuidv4(),
    name: 'Pseudoephedrine',
    formula: 'C₁₀H₁₅NO',
    purity: '98.2%',
    quantity: 25,
    unit: 'kg',
    supplier: 'Los Pollos Hermanos Supply',
    dangerLevel: 'medium',
    status: 'low-stock'
  },
  {
    id: uuidv4(),
    name: 'Phenylacetic Acid',
    formula: 'C₈H₈O₂',
    purity: '99.1%',
    quantity: 15,
    unit: 'kg',
    supplier: 'Madrigal Electromotive',
    dangerLevel: 'medium',
    status: 'available'
  },
  {
    id: uuidv4(),
    name: 'Red Phosphorus',
    formula: 'P₄',
    purity: '97.5%',
    quantity: 5,
    unit: 'kg',
    supplier: 'Gray Matter Technologies',
    dangerLevel: 'high',
    status: 'critical'
  }
];

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Breaking Bad Chemical Inventory API is running' });
});

app.get('/api/chemicals', (req, res) => {
  res.json(chemicals);
});

app.get('/api/chemicals/:id', (req, res) => {
  const chemical = chemicals.find(c => c.id === req.params.id);
  if (!chemical) {
    return res.status(404).json({ error: 'Chemical not found' });
  }
  res.json(chemical);
});

app.post('/api/chemicals', (req, res) => {
  const newChemical = {
    id: uuidv4(),
    ...req.body
  };
  chemicals.push(newChemical);
  res.status(201).json(newChemical);
});

app.put('/api/chemicals/:id', (req, res) => {
  const index = chemicals.findIndex(c => c.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: 'Chemical not found' });
  }
  chemicals[index] = { ...chemicals[index], ...req.body };
  res.json(chemicals[index]);
});

app.delete('/api/chemicals/:id', (req, res) => {
  const index = chemicals.findIndex(c => c.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: 'Chemical not found' });
  }
  chemicals.splice(index, 1);
  res.status(204).send();
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Breaking Bad Chemical Inventory API running on port ${PORT}`);
});
