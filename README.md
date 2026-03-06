# WaiterApp

WaiterApp is a **cloud-native restaurant order management platform** designed to streamline operational workflows between waiters, kitchen staff, and management.  
The system provides a **real-time order processing environment** across web and mobile interfaces, backed by a scalable backend infrastructure designed for **Amazon Web Services (AWS)**.

The project demonstrates **production-grade backend architecture, cloud infrastructure design, and full-stack system integration**, simulating the development of a modern distributed system used in real restaurant environments.

<img width="4720" height="2384" alt="image" src="https://github.com/user-attachments/assets/e64e4fc7-20bc-471a-99b7-b04fecd7359c" />


---

# Architecture Overview

WaiterApp follows a **cloud-native, service-oriented architecture**, composed of three main applications connected through secure REST APIs.

The platform includes:

- A **backend API** responsible for domain logic, order lifecycle management, and secure service communication  
- A **web dashboard** used by kitchen staff to monitor and update incoming orders in real time  
- A **mobile application built with Dart and Flutter** used by waiters to create and manage table orders  

The system is designed with **scalability, reliability, and cloud deployment in mind**, following modern backend and infrastructure best practices.


<img width="1344" height="768" alt="mobilewaiter" src="https://github.com/user-attachments/assets/ad2a3f87-8e78-41c7-90f3-001cb6716d74" />

---

# Backend API

The backend was built using **Node.js, Express, and TypeScript**, following **RESTful API architecture** and modular service design.

Key backend capabilities include:

- RESTful API architecture with structured routing and service layers  
- Data modeling and persistence using **MongoDB and Mongoose**  
- Order lifecycle management and product catalog services  
- Image upload and media handling using **Multer**  
- Static file hosting and asset management  
- Input validation and API request handling  
- Production build configuration and environment management  

The backend architecture focuses on **maintainability, scalability, and clear separation of concerns**, following modern backend engineering practices.

---

# Cloud Infrastructure (AWS)

The platform is designed to run on **Amazon Web Services (AWS)** with a scalable and production-ready cloud infrastructure.

The infrastructure design includes:

- **AWS EC2** for backend service hosting  
- **AWS S3** for static asset storage and image hosting  
- **AWS API Gateway** for secure API routing and external access management  
- **AWS Lambda** for serverless backend processing and asynchronous workloads  
- **AWS DynamoDB / MongoDB Atlas** for scalable data persistence  
- **AWS CloudFront** for content delivery and caching optimization  
- **AWS Route 53** for DNS management and domain configuration  

Infrastructure is designed following **cloud-native architecture principles**, focusing on:

- High availability  
- Horizontal scalability  
- Secure access control  
- Production deployment readiness  

Future infrastructure improvements may include:

- **Infrastructure as Code (IaC)** using Terraform or AWS CloudFormation  
- **CI/CD pipelines** using GitHub Actions and AWS CodeBuild  
- **Containerization using Docker**  
- **Observability and monitoring using AWS CloudWatch**

---

# Web Dashboard

The kitchen dashboard was built with **React and TypeScript**, providing a real-time operational interface for kitchen staff.

Features include:

- Monitoring incoming orders in real time  
- Updating order preparation status  
- Organizing items by preparation stage  
- Component-based UI architecture  

The web interface was developed with **Vite** and **styled-components**, enabling a modular and scalable frontend architecture.

---

# Mobile Application (Flutter)

The mobile application is being developed with **Dart and Flutter**, targeting Android and iOS devices used by waiters.

Key capabilities include:

- Browsing product categories and menu items  
- Creating and managing table orders  
- Sending orders to the kitchen system in real time  
- Managing active orders and status updates  

The mobile application communicates with the backend through **secure REST APIs**, ensuring consistent system synchronization across devices.

---

# System Design Principles

The platform was designed following modern **software architecture and cloud engineering practices**, including:

- RESTful API design  
- Modular backend architecture  
- Scalable cloud infrastructure  
- Secure service communication  
- Real-time operational workflows  
- Production-ready deployment patterns  

The project simulates a **real-world production system** used in restaurant environments, focusing on **backend scalability, infrastructure design, and distributed system architecture**.

---

# Technology Stack

## Backend
- Node.js  
- Express  
- TypeScript  
- MongoDB  
- Mongoose  
- Multer  

## Web
- React  
- TypeScript  
- Vite  
- styled-components  

## Mobile
- Dart  
- Flutter  

## Cloud & Infrastructure
- Amazon Web Services (AWS)  
- EC2  
- S3  
- API Gateway  
- Lambda  
- CloudFront  
- Route 53  

## DevOps & Infrastructure
- GitHub  
- CI/CD Pipelines  
- Cloud Deployment  
- Scalable Backend Architecture  

## Design
- Figma

---

# Key Engineering Focus

- Cloud-native backend architecture  
- Scalable infrastructure design  
- RESTful API engineering  
- Real-time operational systems  
- Distributed service communication  
- Production-ready deployment environments
