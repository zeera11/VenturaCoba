# Ventura
Smart travel planning application that helps users discover destinations, generate itineraries, manage travel budgets, and track expenses through an integrated travel planning platform.

*hosting link : ventura-app.netlify.app*
## Key Features
* Destination Picker
* Smart Budget Planner
* Duration-Based Itinerary Generator
* Category-Based Recommendation
* Expense Tracker
<h2>Application Preview</h2>

<table align="center">
  <tr>
    <td align="center">
      <img width="280" src="https://github.com/user-attachments/assets/5d298da4-67d3-471f-8822-865b46714ebc"><br>
      <b>Trip Schedule</b>
    </td>
    <td align="center">
      <img width="280" src="https://github.com/user-attachments/assets/11e6107e-338a-4098-882e-0e0515c9a8a3"><br>
      <b>Destination Filter</b>
    </td>
  </tr>

  <tr>
    <td align="center">
      <img width="280" src="https://github.com/user-attachments/assets/a1f3351f-d430-4dd4-9055-f68f70f39546"><br>
      <b>Explore Destination</b>
    </td>
    <td align="center">
      <img width="280" src="https://github.com/user-attachments/assets/6d3e2641-c90b-4f43-b31b-280ee81bbcf8"><br>
      <b>Expense Tracker</b>
    </td>
  </tr>
</table>


## Prasyarat Software & Editor 

Sebelum memulai instalasi, pastikan Anda telah menginstal software dan ekstensi berikut agar kode terbaca dengan benar di editor (VS Code) dan tidak muncul garis merah:

### 1. Software Utama (Wajib Terinstal di OS)
* **[Node.js](https://nodejs.org/) (Versi 18 LTS atau 20 LTS)** – Untuk menjalankan server backend NestJS.
* **[Flutter SDK](https://docs.flutter.dev/get-started/install)** – Pastikan perintah `flutter` sudah bisa dipanggil di terminal/command prompt.
* **Google Chrome** – Browser utama untuk menjalankan aplikasi frontend.

### 2. Ekstensi VS Code (Wajib Diinstal di VS Code)
Jika menggunakan VS Code, instal ekstensi berikut melalui menu Extensions (`Ctrl + Shift + X`):
* **Flutter** (oleh Dart Code) – Mengaktifkan dukungan autocomplete dan run aplikasi Flutter.
* **Dart** (oleh Dart Code) – Terinstal otomatis saat menginstal ekstensi Flutter.

---

## Menjalankan Proyek di Browser (Chrome)
### Opsi 1: Mulai Cepat via Menu Interaktif (Windows)
Jika Anda menggunakan Windows, cukup jalankan file .bat berikut di folder VenturaProject:
```cmd
run-ventura.bat
```
Pilih opsi **`[2] Run Backend Services + Frontend (Chrome Web Browser)`**. Skrip ini akan secara otomatis memvalidasi lingkungan Node.js & Flutter Anda, menginstal dependensi yang kurang, lalu menjalankan backend dan browser Chrome secara bersamaan.

### Opsi 2: Memulai Secara Manual via Terminal
Jika Anda ingin menjalankan perintah secara manual, buka terminal di root folder proyek:

#### 1. Jalankan Backend & Frontend (Chrome) Bersamaan
Cukup jalankan satu perintah berikut untuk memulai seluruh microservice backend dan meluncurkan frontend di Chrome secara otomatis:
```bash
npm run start:all:chrome
```

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
| Service         | Port | Responsibility                                        |
| --------------- | ---- | ----------------------------------------------------- |
| API Gateway     | 3000 | Routes incoming requests to the appropriate service   |
| Auth Service    | 3001 | Authentication, authorization, and JWT management     |
| Finance Service | 3002 | Budgeting, expense tracking, and financial management |
| Travel Service  | 3003 | Travel planning and recommendation generation         |
## Request Flow

```text
Client
   │
   ▼
API Gateway (3000)
   │
   ├──► Auth Service (3001)
   ├──► Finance Service (3002)
   └──► Travel Service (3003)
```
All client requests pass through the API Gateway, which forwards them to the corresponding microservice.

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
## JWT Strategy
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
