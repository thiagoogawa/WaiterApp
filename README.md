# WaiterApp

WaiterApp is a full-stack ordering system built to support the day-to-day workflow of waiters and kitchen staff in restaurants, bars, and cafés. 
It provides a simple and fast interface for creating orders, managing items, and tracking preparation status in real time across web and mobile environments.

The project was developed as part of the **JStack** course and covers the full product lifecycle — from UI design to backend architecture and cross-platform applications.

<img width="4720" height="2384" alt="waiterapp" src="https://github.com/user-attachments/assets/d446de05-c2f9-4d74-9b61-53221236581e" />


---

## Overview

WaiterApp is composed of three applications that communicate through a RESTful API:

- A backend API responsible for data modeling, business rules, and order flow  
- A web dashboard used by the kitchen to monitor and update orders  
- A mobile app used by waiters to create and manage orders at the table  

The goal of the system is to simulate a real production environment and demonstrate practical full-stack development patterns.

---

## Tech Stack

**Backend**
- Node.js  
- Express  
- TypeScript  
- MongoDB  
- Mongoose  
- Multer  

**Web**
- React  
- TypeScript  
- Vite  
- styled-components  

**Mobile**
- React Native  
- Expo  
- Axios  

**Design**
- Figma  

---

## Backend

The API was built with Node.js, Express, and TypeScript following REST principles.  
It includes:

- Data modeling with Mongoose  
- Categories, products, and orders  
- CRUD endpoints  
- Image upload with Multer  
- Static file serving  
- Basic validation  
- Production build configuration  

---

## Web Dashboard

The kitchen dashboard was developed with React and TypeScript using Vite.  
It provides a real-time interface for:

- Viewing incoming orders  
- Updating order status  
- Organizing items by preparation stage  

The UI is component-based and styled with styled-components.

---

## Mobile App

The mobile app was built with React Native and Expo to run on tablets and smartphones used by waiters.  
It allows:

- Browsing categories and products  
- Creating orders  
- Sending orders to the kitchen  
- Managing active orders  

The app communicates with the API using Axios and includes loading states and filtering for a smooth workflow.

---

