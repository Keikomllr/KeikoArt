KeikoArt is an online art shop where users can browse and purchase unique artworks.
It is built with React for the frontend and Node.js for the backend.
 

This project was developed as part of my portfolio to combine creativity with technical skills.

![screenshot](./screenshots/keikohome.jpg)

#Deploy URL (Live Demo)
- Frontend: https://keikosuzukimoller.netlify.app/
- Backend (API): https://keikoart-production.up.api.railway.app

#Tech Stack
- Frontend: React, Vite, JavaScript, CSS
- Backend: Node.js, Express
- Database: SQLite (or JSON for development)
- Deployment: Netlify (frontend), Render (backend)

# clone
git clone https://github.com/Keikomllr/KeikoArt.git
cd KeikoArt

# set up for client
cd client
npm install
npm run dev

# set up for server
cd ../server
npm install
node server.js




#Project Structure
KeikoArt/
├── client/        # React frontend
├── server/        # Express backend
├── README.md


#Future Improvements
- Connect to a real cloud database (Supabase or PostgreSQL)
- Add user login & authentication
- Complete payment progress
