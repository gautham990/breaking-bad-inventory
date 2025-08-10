import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

function App() {
  const [chemicals, setChemicals] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newChemical, setNewChemical] = useState({
    name: '',
    formula: '',
    purity: '',
    quantity: '',
    unit: 'L',
    supplier: '',
    dangerLevel: 'low',
    status: 'available'
  });

  useEffect(() => {
    fetchChemicals();
  }, []);

  const fetchChemicals = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/chemicals`);
      setChemicals(response.data);
    } catch (error) {
      console.error('Error fetching chemicals:', error);
    }
  };

  const handleAddChemical = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/api/chemicals`, newChemical);
      setNewChemical({
        name: '',
        formula: '',
        purity: '',
        quantity: '',
        unit: 'L',
        supplier: '',
        dangerLevel: 'low',
        status: 'available'
      });
      setShowAddForm(false);
      fetchChemicals();
    } catch (error) {
      console.error('Error adding chemical:', error);
    }
  };

  const handleDeleteChemical = async (id) => {
    try {
      await axios.delete(`${API_URL}/api/chemicals/${id}`);
      fetchChemicals();
    } catch (error) {
      console.error('Error deleting chemical:', error);
    }
  };

  const getDangerLevelClass = (level) => {
    switch (level) {
      case 'high': return 'danger-high';
      case 'medium': return 'danger-medium';
      default: return 'danger-low';
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'critical': return 'status-critical';
      case 'low-stock': return 'status-low';
      default: return 'status-available';
    }
  };

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <h1 className="logo">
            <span className="logo-br">Br</span>
            <span className="logo-ba">Ba</span>
            <span className="logo-text">Chemical Inventory</span>
          </h1>
          <p className="subtitle">Heisenberg's Lab Management System</p>
        </div>
      </header>

      <main className="main">
        <div className="container">
          <div className="controls">
            <button 
              className="btn btn-primary"
              onClick={() => setShowAddForm(!showAddForm)}
            >
              {showAddForm ? 'Cancel' : 'Add Chemical'}
            </button>
          </div>

          {showAddForm && (
            <form className="add-form" onSubmit={handleAddChemical}>
              <h3>Add New Chemical</h3>
              <div className="form-grid">
                <input
                  type="text"
                  placeholder="Chemical Name"
                  value={newChemical.name}
                  onChange={(e) => setNewChemical({...newChemical, name: e.target.value})}
                  required
                />
                <input
                  type="text"
                  placeholder="Chemical Formula"
                  value={newChemical.formula}
                  onChange={(e) => setNewChemical({...newChemical, formula: e.target.value})}
                  required
                />
                <input
                  type="text"
                  placeholder="Purity %"
                  value={newChemical.purity}
                  onChange={(e) => setNewChemical({...newChemical, purity: e.target.value})}
                  required
                />
                <input
                  type="number"
                  placeholder="Quantity"
                  value={newChemical.quantity}
                  onChange={(e) => setNewChemical({...newChemical, quantity: e.target.value})}
                  required
                />
                <select
                  value={newChemical.unit}
                  onChange={(e) => setNewChemical({...newChemical, unit: e.target.value})}
                >
                  <option value="L">Liters</option>
                  <option value="kg">Kilograms</option>
                  <option value="g">Grams</option>
                  <option value="mL">Milliliters</option>
                </select>
                <input
                  type="text"
                  placeholder="Supplier"
                  value={newChemical.supplier}
                  onChange={(e) => setNewChemical({...newChemical, supplier: e.target.value})}
                  required
                />
                <select
                  value={newChemical.dangerLevel}
                  onChange={(e) => setNewChemical({...newChemical, dangerLevel: e.target.value})}
                >
                  <option value="low">Low Danger</option>
                  <option value="medium">Medium Danger</option>
                  <option value="high">High Danger</option>
                </select>
                <select
                  value={newChemical.status}
                  onChange={(e) => setNewChemical({...newChemical, status: e.target.value})}
                >
                  <option value="available">Available</option>
                  <option value="low-stock">Low Stock</option>
                  <option value="critical">Critical</option>
                </select>
              </div>
              <button type="submit" className="btn btn-success">Add Chemical</button>
            </form>
          )}

          <div className="inventory-grid">
            {chemicals.map(chemical => (
              <div key={chemical.id} className="chemical-card">
                <div className="card-header">
                  <h3 className="chemical-name">{chemical.name}</h3>
                  <div className={`danger-badge ${getDangerLevelClass(chemical.dangerLevel)}`}>
                    {chemical.dangerLevel.toUpperCase()}
                  </div>
                </div>
                <div className="card-content">
                  <div className="formula">{chemical.formula}</div>
                  <div className="purity">Purity: {chemical.purity}</div>
                  <div className="quantity">
                    Stock: {chemical.quantity} {chemical.unit}
                  </div>
                  <div className="supplier">Supplier: {chemical.supplier}</div>
                  <div className={`status ${getStatusClass(chemical.status)}`}>
                    Status: {chemical.status.replace('-', ' ').toUpperCase()}
                  </div>
                </div>
                <div className="card-actions">
                  <button 
                    className="btn btn-danger btn-small"
                    onClick={() => handleDeleteChemical(chemical.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {chemicals.length === 0 && (
            <div className="empty-state">
              <h3>No chemicals in inventory</h3>
              <p>Add some chemicals to get started with your lab inventory.</p>
            </div>
          )}
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Heisenberg Labs. "I am the one who knocks."</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
