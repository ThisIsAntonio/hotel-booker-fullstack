# Hotel Booker – Fullstack App (Django + Angular)

A full-stack hotel reservation management system built with Django (REST API) and Angular.  
This project includes secure login, full CRUD for reservations, responsive UI with Bootstrap, and deployment on Firebase (frontend) and PythonAnywhere (backend).

---

## ✨ Features

- 🔐 JWT-based login authentication
- 📋 Create, view, update, and delete reservations
- 📧 Fields: guest name, email, phone, room number, check-in & check-out
- 🔎 Search reservations by name, room, phone or email
- ⚙️ Protected routes using Angular guards
- 📱 Responsive Bootstrap interface
- 🌍 Deployed on Firebase & PythonAnywhere

---

## 🖼️ Screenshots

### ✅ Home & Reservation List

![Home screen](./screenshots/HomeScreen.png)

### ✏️ Editing a Reservation

![Editing](./screenshots/EditingaReservation.png)

### 🔐 Login Page

![Login](./screenshots/Login.png)

---

## ⚙️ Tech Stack

**Frontend**  
- Angular 17  
- Bootstrap 5  
- Angular Standalone Components  
- Firebase Hosting

**Backend**  
- Django 5  
- Django REST Framework  
- JWT Authentication  
- PythonAnywhere

---

## 🚀 Local Setup

```bash
# Backend
cd hotel-booker
python -m venv env
env\Scripts\activate
pip install -r requirements.txt
python manage.py runserver

# Frontend
cd hotel-booker-frontend
npm install
ng serve

📡 Live Demo
🔗 Frontend: https://hotel-booker-frontend2.web.app/login

🔗 Backend: https://thisisantonio.pythonanywhere.com/api/reservations/