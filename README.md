# Infinity-Task-Manager
An assignment project

### Live link
[1] https://task-manager-frontend-murex-five.vercel.app/

### Link for guidance to create cluster and collection in mongodb:
[1] https://www.youtube.com/watch?v=RwkLddYwU8c

- Create a database (any name) with two collections
- users
- tasks
- It should look like the following way as shown in image

<img width="393" height="173" alt="image" src="https://github.com/user-attachments/assets/7edf333a-2706-4a2c-9097-d41c49f2fbf5" />

## Run with Docker
### Requirements:
- Docker Desktop installed
- MongoDb working url as directed in above section

## Steps:
### Download images from Docker hub with following commands :
``` bash
docker pull aviralshukla06/infinity-task-backend:latest
docker pull aviralshukla06/infinity-task-frontend:latest
```
- See the images in ypur system:
``` bash
docker images
```
- Follow the commands to run backend image:
``` bash
docker run -p 3000:3000 -e MONGO_URL="your-mongoDb-connection-string/url" -e JWT_SECRET="secret-thet-you-wish" aviralshukla06/infinity-task-backend:latest
```
- This will expose the backend API on http://localhost:3000
- Follow the commands to run frontend image:
``` bash
docker run -p 5173:5173 aviralshukla06/infinity-task-frontend:latest
```
### Now open your browser and go to:
``` bash
http://localhost:5173/
```

## Overview
Infinity Task Manager is a full-stack task management application designed to help users efficiently create, view, edit, and delete tasks. The project includes a backend API and a frontend interface, enabling seamless task management on any machine. It provides a clean, user-friendly experience for managing daily tasks, deadlines, and statuses.

***

## Technologies Used

### Backend
- Node.js
- Express.js
- TypeScript.js
- MongoDB (via Mongoose)
- dotenv for environment variable management
- Cors for handling cross-origin requests

### Frontend
- React.js
- TypeScript.js
- Axios for API communication
- React Router for routing
- CSS (or any included styling libraries)

***

## Prerequisites

Before starting, make sure you have the following installed on your machine:

- Node.js (with npm)
- TypeScript.js
- MongoDB (local setup or Atlas cloud instance)
- Git (optional, for cloning the repo)

***

## Installation and Setup

### Clone the repository

Open your terminal and run:

```bash
git clone https://github.com/aviralshukla-06/Infinity-Task-Manager.git
cd Infinity-Task-Manager
```

***

### Backend Setup

1. Navigate to the backend directory:

```bash
cd backendTaskManager
```



2. Install dependencies:

```bash
npm install
```

Make a change in `tsconfig.json` search for the keys and set values as given below:
```bash
"rootDir": "./src",
"outDir": "./dist",
```

3. Create a `.env` file in the `backendTaskManager` folder based on `.env.example` and configure your environment variables:

```
MONGO_URL=your_mongo_connection_string/Name_of_your_colection
JWT_SECRET=your_custom_secret
```

Make sure your MongoDB URI is correctly set (can be local or cloud URI).

4. Start the backend server:

```bash
node dist/index.js
```

The backend server will run on `http://localhost:3000` by default.

***

### Frontend Setup

1. Open a new terminal tab/window and navigate to the frontend directory:

```bash
cd frontendTask
```

2. Install frontend dependencies:

```bash
npm install
```

3. Create a `.env` file in the `frontendTask` directory if environment variables are needed (check `.env.example` if provided).

4. Start the frontend app:

```bash
npm run dev
```

The frontend React app will run on `http://localhost:5173` by default.

***

## Usage

- Open your browser and navigate to `http://localhost:5173`.
- You can now create, view, update, and delete tasks.
- The frontend communicates with the backend API to manage tasks persistently.
- All CRUD operations are supported via the intuitive UI.

***

## Project Structure

### Backend (`backendTaskManager`)
- `index` - Main backend application entry point.
- `api/tasks` - Routes defining API endpoints for tasks.
- `db/` - Contains Mongoose schemas/models for task data.
- `.env` - Environment variables for configuration.

### Frontend (`frontendTask`)
- `src/` - React source files including components, pages, and services.
- `App.jsx` - Main React component with routing and layout.

***

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or fix:

```bash
git checkout -b feature-or-fix-name
```

3. Make your changes and commit:

```bash
git commit -m "Description of your changes"
```

4. Push the branch to your fork:

```bash
git push origin feature-or-fix-name
```

5. Open a Pull Request on the original repository.

***

## License

This project is licensed under the MIT License.

***

## Contact

For any questions or suggestions, please open an issue on the GitHub repo.

***

Now you have a robust task manager application ready to install and run on any machine with Node.js and MongoDB installed. Enjoy managing your tasks seamlessly with Infinity Task Manager!

