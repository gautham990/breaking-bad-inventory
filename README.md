# Breaking Bad Chemical Inventory

A Breaking Bad themed microservices application for managing chemical inventory. This demo project showcases a 2-tier architecture with a React frontend and Node.js backend, both containerized using Docker.

## 🧪 Features

- **Chemical Inventory Management**: Add, view, and delete chemicals
- **Breaking Bad Theme**: Dark green/black color scheme with iconic branding
- **Danger Level Tracking**: High, Medium, Low danger classifications
- **Stock Status Monitoring**: Available, Low Stock, Critical status tracking
- **Responsive Design**: Mobile-friendly interface
- **Microservices Architecture**: Separate frontend and backend containers
- **RESTful API**: Full CRUD operations for chemical management

## 🏗️ Architecture

```
Frontend (React) ←→ Backend (Node.js/Express)
     ↓                      ↓
  Port 3000              Port 5000
```

## 🚀 Quick Start

### Prerequisites
- Docker
- Docker Compose

### Running the Application

1. **Clone or create the project structure**:
```bash
mkdir breaking-bad-inventory
cd breaking-bad-inventory
```

2. **Create the project files** using the provided artifacts above, with this structure:
```
breaking-bad-inventory/
├── docker-compose.yml
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── Dockerfile
│   ├── package.json
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── App.js
│       ├── App.css
│       └── index.js
└── README.md
```

3. **Start the application**:
```bash
docker-compose up --build
```

4. **Access the application**:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## 📋 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| GET | `/api/chemicals` | Get all chemicals |
| GET | `/api/chemicals/:id` | Get chemical by ID |
| POST | `/api/chemicals` | Add new chemical |
| PUT | `/api/chemicals/:id` | Update chemical |
| DELETE | `/api/chemicals/:id` | Delete chemical |

## 🎨 Theme Features

- **Colors**: Dark green (#0f4c3a), neon green (#00ff88), danger red (#ff4444)
- **Typography**: Roboto Condensed for that industrial feel
- **Logo**: Iconic "Br" and "Ba" elements from the periodic table
- **Cards**: Gradient backgrounds with hover effects
- **Status Indicators**: Color-coded danger levels and stock status

## 🔧 Development

### Backend Development
```bash
cd backend
npm install
npm run dev  # Uses nodemon for hot reloading
```

### Frontend Development
```bash
cd frontend
npm install
npm start
```

## 📦 Docker Commands

```bash
# Build and run
docker-compose up --build

# Run in background
docker-compose up -d

# View logs
docker-compose logs -f

# Stop containers
docker-compose down

# Rebuild specific service
docker-compose build frontend
docker-compose build backend
```

## 🧬 Sample Chemical Data

The application comes pre-loaded with Breaking Bad themed chemicals:
- **Methylamine** (CH₃NH₂) - High danger, 50L
- **Pseudoephedrine** (C₁₀H₁₅NO) - Medium danger, 25kg
- **Phenylacetic Acid** (C₈H₈O₂) - Medium danger, 15kg
- **Red Phosphorus** (P₄) - High danger, 5kg

## 🛡️ Security Note

This is a demo application with in-memory data storage. For production use, implement:
- Database persistence (PostgreSQL, MongoDB)
- Authentication and authorization
- Input validation and sanitization
- HTTPS/TLS encryption
- Rate limiting
- CORS configuration

## 🎯 Future Enhancements

- Database integration (PostgreSQL/MongoDB)
- User authentication system
- Advanced search and filtering
- Chemical reaction calculator
- Inventory alerts and notifications
- Export functionality (PDF/Excel)
- Audit logging
- Multi-lab support

## 📝 Environment Variables

### Backend
- `NODE_ENV`: Development environment
- `PORT`: Server port (default: 5000)

### Frontend
- `REACT_APP_API_URL`: Backend API URL

## 🎬 Breaking Bad References

- **Suppliers**: Golden Moth Chemical, Los Pollos Hermanos Supply, Madrigal Electromotive, Gray Matter Technologies
- **Quotes**: "I am the one who knocks" in footer
- **Styling**: Inspired by the show's dark, industrial aesthetic
- **Lab Theme**: Heisenberg's Lab Management System

---

*"Say my name." - This inventory system is the one who stocks.*
