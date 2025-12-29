# 🌲 PineVox Internship Prep API

A custom-built RESTful API designed to programmatically manage and serve interview preparation materials for the PineVox internship recruitment process. 

This project demonstrates core Backend Development skills including **API design**, **dynamic routing**, **file handling**, and **server-side logic**, directly aligning with the requirements for the Node.js Backend Intern role.

## 🚀 Key Features

* **Dynamic Data Serving:** Fetches structured data from a JSON database file (`pinevox_db.json`) on demand.
* **Role-Based Routing:** Uses dynamic route parameters (`:role`) to serve specific study roadmaps for Frontend, Backend, or Analyst roles.
* **Quiz Logic:** Includes a server-side algorithm to randomly select and serve interview questions for practice.
* **Error Handling:** Implements proper HTTP 404 error responses for invalid requests.

## 🛠️ Tech Stack

* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** JSON (File System storage)
* **Tools:** Postman (for testing endpoints)

---

## 📂 Project Structure

```text
PineVox-Prep-API/
├── node_modules/
├── pinevox_db.json    # The "Database" containing roles & questions
├── server.js          # Main server logic & route definitions
├── package.json       # Project dependencies
└── README.md          # Documentation
```

## API Endpoints

| Method | Endpoint       | Description                                              |
|--------|----------------|----------------------------------------------------------|
| GET    | /info          | Returns company values, tech stack, and focus areas.     |
| GET    | /roles         | Lists all available internship positions.                |
| GET    | /prep/:role    | Returns the detailed study roadmap and interview questions for a specific role (e.g., /prep/backend). |
| GET    | /quiz/:role    | Returns a random interview question and a tip for that role. |

---

## 🏁 Getting Started

### Clone the repository
```bash
git clone https://github.com/TANAY-BARGIR/Pinevox-Internship-Preparation-API.git
cd pinevox-prep-api
```
### Install Dependencies
```bash
npm install
```
### Start the Server
```bash
node server.js
```
### Test the API

Open your browser or Postman and visit: http://localhost:3000/info

---

## 💡 Why I Built This

### This project serves two purposes:

* To organize my study materials for the PineVox internship in a structured way.

* To demonstrate practical proficiency in Node.js and API Development, which are core requirements for the Backend Intern position.
