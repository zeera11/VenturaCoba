# Ventura
Smart travel planning application that helps users discover destinations, generate itineraries, manage travel budgets, and track expenses through an integrated travel planning platform.

hosting link : ventura-app.netlify.app
## Key Features
* Destination Picker
* Smart Budget Planner
* Duration-Based Itinerary Generator
* Category-Based Recommendation
* Expense Tracker
<h2>Application Preview</h2>

<p align="center">
  <img width="250" alt="Detail Plan - Day 1" src="https://github.com/user-attachments/assets/5d298da4-67d3-471f-8822-865b46714ebc" />
  <img width="250" alt="Filter" src="https://github.com/user-attachments/assets/11e6107e-338a-4098-882e-0e0515c9a8a3" />
</p>

<p align="center">
  <img width="250" alt="Explore Destination" src="https://github.com/user-attachments/assets/a1f3351f-d430-4dd4-9055-f68f70f39546" />
  <img width="250" alt="Expense Tracker" src="https://github.com/user-attachments/assets/6d3e2641-c90b-4f43-b31b-280ee81bbcf8" />
</p>

## Tech Stack
### Frontend
* Flutter
* Dart
### Backend
* NestJS
* Node.js
* TypeScript
### Database
* Firebase Firestore
### Authentication
* JWT (JSON Web Token)
* Passport.js
### Architecture
* Microservices Architecture
* API Gateway Pattern
---
# Backend Architecture
The Ventura backend follows a Microservices Architecture consisting of four independent services:
| Service | Port | Responsibility |
|----------|----------|----------|
| API Gateway | 3000 | Routes incoming requests to the appropriate service |
| Auth Service | 3001 | Authentication, authorization, and JWT management |
| Service         | Port | Responsibility                                        |
| --------------- | ---- | ----------------------------------------------------- |
| API Gateway     | 3000 | Routes incoming requests to the appropriate service   |
| Auth Service    | 3001 | Authentication, authorization, and JWT management     |
| Finance Service | 3002 | Budgeting, expense tracking, and financial management |
| Travel Service | 3003 | Travel planning and recommendation generation |
| Travel Service  | 3003 | Travel planning and recommendation generation         |
## Request Flow
## DTO (Data Transfer Object) and Validation
Each microservice implements **DTOs (Data Transfer Objects)** to validate incoming requests before they reach the business logic layer.
Each microservice implements DTOs (Data Transfer Objects) to validate incoming requests before they reach the business logic layer.
DTOs help ensure that:
* Required fields are provided.
* Input data types are valid.
* Invalid or malformed requests are rejected early.
* Data consistency is maintained across services.
By validating incoming data at the service boundary, the system becomes more secure, reliable, and easier to maintain.
## Authentication and Authorization
To secure protected endpoints, the backend implements **JWT (JSON Web Token) Authentication** using:
To secure protected endpoints, the backend implements JWT (JSON Web Token) Authentication using:
### JWT Strategy
The combination of JWT Strategy and JWT Guard helps ensure secure communication between clients and backend services while maintaining stateless authentication.
## API Endpoints
All endpoints are accessed through the **API Gateway (Port 3000)**.
### Auth Service
```http
POST /auth/register
POST /auth/login
GET  /auth/profile
PUT  /auth/profile
```
### Finance Service
```http
POST   /finance/budget
POST   /finance/expense
GET    /finance
GET    /finance/summary
DELETE /finance/expense/:id
```
### Travel Service
```http
GET  /travel/destinations
POST /travel/recommendation
POST /travel/itinerary
GET  /travel/itinerary/list
```
---
## Installation
Untuk menginstal seluruh dependensi backend dan frontend secara otomatis, jalankan perintah ini di root folder:
```bash
npm run install:all
```
### 1. Lokasi untuk File serviceAccountKey.json (Firebase)
File JSON kredensial dari Firebase Console ini harus diletakkan di dalam folder `src/config` pada setiap service backend:
* **Auth Service:** `backend/auth-service/src/config/serviceAccountKey.json`
* **Finance Service:** `backend/finance-service/src/config/serviceAccountKey.json`
* **Travel Service:** `backend/travel-service/src/config/serviceAccountKey.json`
### 2. Lokasi untuk File .env (Environment Variables)
File konfigurasi variabel ini diletakkan di root folder dari masing-masing microservice (bukan di dalam folder `src`):
* **Auth Service:** `backend/auth-service/.env`
* **Finance Service:** `backend/finance-service/.env`
* **Travel Service:** `backend/travel-service/.env`
*(Catatan: Anda tinggal menyalin file yang sudah Anda miliki di laptop Anda saat ini ke folder-folder tersebut).*
---
## Run Project (Local Development)
### Option 1: Quick Start (Windows)
Run the batch script below to start Ventura through an interactive menu:
```cmd
run-ventura.bat
```
### Option 2: Manual Start (Terminal)
#### Run All Backend Services
Start all backend microservices simultaneously:
```bash
npm run start:backend
```
#### Run Individual Services
If needed, each service can also be started separately:
```bash
# API Gateway
npm run start:gateway
# Auth Service
npm run start:auth
# Finance Service
npm run start:finance
# Travel Service
npm run start:travel
```
