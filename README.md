# 🌩️ AWS Serverless Event Announcement System

A fully serverless web application built on AWS that allows users to create events and receive email notifications by subscribing to the platform.

This project demonstrates how modern cloud applications can be built **without managing servers** using AWS services.

---

# 🔗 Live Website

👉 http://event-announcment-123.s3-website.ap-south-1.amazonaws.com

---

# 📌 Problem Statement

Traditional event announcement systems require backend servers, databases and maintenance.

This project solves the problem by creating a **100% serverless event platform** using AWS.

No servers. No infrastructure management. Fully scalable.

---

# 🎯 Project Objectives

* Build a real-world AWS serverless project
* Understand cloud architecture end-to-end
* Integrate multiple AWS services
* Deploy a live cloud application

---

# 🧠 How The System Works

### Step 1 — User opens website (S3 Hosting)

The frontend is hosted using **Amazon S3 Static Website Hosting**.

### Step 2 — Create Event

User fills event form → Request goes to **API Gateway**

### Step 3 — Backend Processing

API Gateway triggers **AWS Lambda** which:

* Validates data
* Stores event in DynamoDB
* Sends notification via SNS

### Step 4 — Email Notification

All subscribers receive email using **Amazon SNS**

---

# 🏗️ AWS Architecture

S3 (Frontend Hosting)
⬇
API Gateway (REST API)
⬇
AWS Lambda (Backend Logic)
⬇
DynamoDB (Database)
⬇
SNS (Email Notifications)

---

# 🛠️ Tech Stack

## Frontend

* HTML5
* CSS3
* JavaScript
* Amazon S3 Hosting

## Backend (Serverless)

* AWS Lambda
* Amazon API Gateway
* Amazon DynamoDB
* Amazon SNS

---

# ✨ Features

✔ Create new events
✔ Store events in cloud database
✔ Subscribe using email
✔ Send automated email notifications
✔ Fully serverless architecture
✔ Live deployed project

---

# 📂 Project Structure

```
event-announcement-system
│
├── index.html          → View events
├── create-event.html   → Create event page
├── subscribe.html      → Email subscription
├── style.css           → Styling
├── script.js           → API integration
└── README.md
```

---

# ⚙️ API Endpoints

| Method | Endpoint     | Description      |
| ------ | ------------ | ---------------- |
| POST   | /createEvent | Create new event |
| GET    | /events      | Fetch all events |
| POST   | /subscribe   | Subscribe email  |

---

# 📸 Screens (Pages)

• Events Page
• Create Event Page
• Subscribe Page

---

# 📚 Key Learnings

This project helped me learn:

* Serverless Architecture
* Cloud Deployment
* AWS API Gateway + Lambda integration
* DynamoDB CRUD operations
* SNS email automation
* Hosting static websites on S3
* Real world cloud project deployment

---

# 🚀 Future Improvements

* Authentication (AWS Cognito)
* Event image upload (S3)
* Admin dashboard
* Mobile responsive UI
* CI/CD pipeline

---

# 👨‍💻 Author

**Pranjal Singh**
B.Tech – Cloud Computing
Lovely Professional University

---

# ⭐ Support

If you like this project, give it a ⭐ on GitHub!
