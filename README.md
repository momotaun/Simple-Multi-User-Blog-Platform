# Simple-Multi-User-Blog-Platform [![tag](https://img.shields.io/github/tag/Mottie/GitHub-userscripts.svg)](https://github.com/momotaun/fastapi-react-auth/tags)
A full-stack demo project featuring user registration, login with JWT (access & refresh), and protected blog post management using **FastAPI** as the backend and **React + TypeScript** as the frontend.

---

## 📝 Description
A boilerplate authentication and blog system with:

- FastAPI backend (JWT auth, CRUD, protected routes)
- React frontend (login/register forms, protected UI, Tailwind CSS)
- Docker Compose setup for unified deployment

---

## 📛 Badges

Coming soon…

---

## ✅ Requirements and Prerequisites

This project was created using:

- `FastAPI` (Python)
- `React` with `TypeScript`
- `Tailwind CSS`
- `Docker` + `Docker Compose`

You’ll need to install:

1. [Docker](https://www.docker.com/)
2. [Node.js](https://nodejs.org/en/) (for local frontend dev)
3. [Python 3.10+](https://www.python.org/) (for local backend dev)

---

## 🚀 Installation

### 1. Clone the repository

## Installation
  1. Clone the repository
  
```sh
git clone https://github.com/momotaun/Simple-Multi-User-Blog-Platform.git
```

  2. Create your own working branch
  
```sh
git branch [username]
```

  3. Switch to your working branch
  
```sh
git checkout [username]
```

  4. Merge if necessary :shipit:

```sh
git merge main
```

## 📌 Usage

### 🔐 Authentication

- Navigate to `http://localhost:5173/register` to create a new user account.
- Go to `http://localhost:5173/login` to log in using your credentials.
- Upon successful login, a JWT access token is stored in `localStorage`.

### 🧠 Auth Behavior

- Protected routes like **Create Post** or **Edit Post** are only accessible to logged-in users.
- The app automatically attaches the `Authorization: Bearer <access_token>` header for protected requests.
- A `401 Unauthorized` response will trigger an **auto logout** and redirect the user to the login page.

### 📝 Posts Functionality

- All users (even unauthenticated) can view public posts at `/`.
- Logged-in users can:
  - Create posts from `/create-post`
  - Edit and delete only their own posts from the post list or detail view
  - View the author’s email and publication date on each post

### 📫 Backend API Endpoints

| Method | Endpoint              | Description                  | Auth Required |
|--------|------------------------|------------------------------|---------------|
| POST   | `/api/v1/login`        | User login                   | ❌            |
| POST   | `/api/v1/register`     | User registration            | ❌            |
| GET    | `/api/v1/users/me`     | Get current user             | ✅            |
| POST   | `/api/v1/posts/`       | Create a new post            | ✅            |
| GET    | `/api/v1/posts/`       | Get all posts                | ❌            |
| GET    | `/api/v1/posts/{id}`   | Get a specific post          | ❌            |
| PUT    | `/api/v1/posts/{id}`   | Update a post (author only)  | ✅            |
| DELETE | `/api/v1/posts/{id}`   | Delete a post (author only)  | ✅            |

> 📌 All authenticated requests must include the header:
> `Authorization: Bearer <access_token>`

### 🧪 Testing with Postman

1. Login via `/api/v1/login` using `form-data`:
   - `username`: your email
   - `password`: your password

2. Copy the `access_token` from the JSON response.

3. In Postman, go to **Authorization > Type: Bearer Token**, paste the token.

4. Now call any protected routes like `POST /api/v1/posts/`.

## 📦 Folder Structure

```bash
fastapi-react-auth/
├── backend/                         # FastAPI backend app
│   ├── app/
│   │   ├── api/                     # API routes
│   │   │   └── v1/
│   │   │       ├── login.py
│   │   │       ├── refresh.py
│   │   │       ├── users.py
│   │   │       └── posts.py
│   │   ├── core/                    # Config & security utilities
│   │   │   ├── config.py
│   │   │   └── security.py
│   │   ├── crud/                    # Business logic layer
│   │   │   ├── user.py
│   │   │   └── post.py
│   │   ├── db/                      # DB initialization and session
│   │   │   ├── session.py
│   │   │   └── __init__.py
│   │   ├── dependencies/            # Dependency injections
│   │   │   └── auth.py
│   │   ├── models/                  # SQLAlchemy models
│   │   │   ├── user.py
│   │   │   └── post.py
│   │   ├── schemas/                 # Pydantic schemas
│   │   │   ├── user.py
│   │   │   └── post.py
│   │   ├── main.py                  # App entrypoint
│   │   └── __init__.py
│   ├── requirements.txt            # Python dependencies
│   ├── Dockerfile                  # Backend Dockerfile
│   └── .env                        # Environment variables
│
├── frontend/
│   ├── app/
│   │   ├── src/
│   │   │   ├── components/          # Shared UI components (Header, Footer, etc.)
│   │   │   ├── context/             # Auth context for JWT storage
│   │   │   ├── pages/               # Page views (Home, Login, Register, CreatePost)
│   │   │   ├── services/            # Axios and API helpers
│   │   │   ├── App.tsx              # App wrapper with router
│   │   │   ├── index.tsx            # ReactDOM entrypoint
│   │   │   └── index.css            # Tailwind base styles
│   │   ├── public/                  # Static files
│   │   ├── tsconfig.json
│   │   ├── vite.config.ts
│   │   ├── tailwind.config.js
│   │   ├── postcss.config.js
│   │   └── .env                     # Frontend environment variables
│   └── Dockerfile                  # Frontend Dockerfile
│
├── docker-compose.yml              # Full stack orchestration
└── README.md                       # Project documentation
```

## 🛣️ Roadmap

This section outlines the planned features and enhancements for the project. ✅ indicates completed tasks.

### ✅ Core Features (MVP)
- [x] User registration with hashed password
- [x] Login with JWT access & refresh tokens
- [x] Auto logout on token expiration (frontend)
- [x] Post creation (protected route)
- [x] Post editing (author-only)
- [x] Post deletion (author-only)
- [x] Post listing for public
- [x] Responsive UI with Tailwind CSS
- [x] Dockerized backend & frontend
- [x] React Context for auth state management

---

### 🧠 User Experience Improvements
- [ ] Toast notifications (login success/error, post save, etc.)
- [ ] Loading spinners for API calls
- [ ] Post preview before publishing

---

### 🔐 Authentication Enhancements
- [x] Refresh token endpoint (backend)
- [ ] Automatic access token refresh (frontend)

---

### 🧪 Testing
- [ ] Unit tests for backend (CRUD & auth)
- [ ] Frontend component tests (React Testing Library)
- [ ] Integration tests for protected routes

---

### 🌐 Deployment
- [ ] CI/CD with GitHub Actions
- [ ] Docker image publishing to Docker Hub
- [ ] Kubernetes manifests for production deployment
- [ ] Optional: Deploy preview environments (Vercel/Render/Fly.io)

---

### 📄 Documentation
- [x] Complete project README
- [ ] API documentation using Swagger or ReDoc
- [ ] Postman collection export

## 👨‍💻 Authors & Acknowledgments

### Author
- **Moeketsi Motaung**  
  Developer and architect of the full-stack authentication and blog system using FastAPI and React.

### Tools & Technologies
- [FastAPI](https://fastapi.tiangolo.com/) – Modern, fast (high-performance) web framework for building APIs with Python.
- [React](https://reactjs.org/) – JavaScript library for building user interfaces.
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework for rapid UI development.
- [SQLAlchemy](https://www.sqlalchemy.org/) – Python SQL toolkit and ORM.
- [Pydantic](https://pydantic-docs.helpmanual.io/) – Data validation and settings management using Python type hints.
- [Docker](https://www.docker.com/) – Containerization platform to run backend and frontend services.

### Special Thanks
- The open-source community for maintaining powerful and modern dev tools.
- [tiangolo](https://github.com/tiangolo) for the FastAPI project and excellent documentation.
- Stack Overflow, GitHub discussions, and countless blog authors for best practices and debugging support.

## License

##
