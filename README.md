# EcoSphere AI

An enterprise ESG (Environmental, Social & Governance) management platform that helps organizations monitor sustainability metrics, CSR initiatives, governance compliance, and reporting through a unified dashboard.

---

## Features

###  Dashboard
- Overall ESG score overview
- Environmental, Social, and Governance metrics
- Department performance insights
- Live backend integration

###  Environmental
- Carbon emissions tracking
- Energy and water consumption
- Waste recycling metrics
- Sustainability goals monitoring

###  Social
- CSR initiatives
- Employee satisfaction metrics
- Diversity indicators
- Training hours
- Community engagement

###  Governance
- Compliance monitoring
- Policy management
- Audit tracking
- Risk overview

###  Reports
- ESG summary dashboard
- Department rankings
- Carbon trend insights
- CSV report export

---

## Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- Lucide React

### Backend
- Node.js
- Express.js

### Architecture
- REST APIs
- Modular MVC Structure
  - Routes
  - Controllers
  - Services

---

## Project Structure

```
ecosphere_dishawagle/

├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── hooks/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── app.js
│   └── server.js
```

---

## API Endpoints

| Method | Endpoint |
|---------|----------|
| GET | `/api/dashboard` |
| GET | `/api/environmental` |
| GET | `/api/social` |
| GET | `/api/governance` |
| GET | `/api/reports` |

---

## Running Locally

### Clone

```bash
git clone https://github.com/dishawagle15/ecosphere_dishawagle.git
cd ecosphere_dishawagle
```

### Backend

```bash
cd backend
npm install
npm run dev
```

Runs on:

```
http://localhost:5001
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Runs on:

```
http://localhost:5173
```
Disha Wagle
