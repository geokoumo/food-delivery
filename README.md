Food Delivery Full-Stack Application
This is a full-stack food delivery web application that allows users to browse restaurants, order food, and make payments online. The platform also includes an admin panel to manage products, orders, and users.

🛠️ Tech Stack
Frontend: React, Vite, Axios

Backend: Node.js, Express.js, MongoDB, Mongoose

Admin Panel: React, Vite

Authentication: JWT

Payments: Stripe

Other Tools: Dotenv, Bcrypt, Multer, Cors

1. Clone the repository
git clone https://github.com/geokoumo/food-delivery.git
cd food-delivery

2. Install dependencies for all projects
cd backend
npm install

cd ../frontend
npm install

cd ../admin
npm install

⚙️ Environment Variables
Create a .env file inside the backend/ folder with the following variables:

MONGO_URL=your_mongodb_connection_string
STRIPE_SECRET_KEY=your_stripe_secret
JWT_SECRET=your_jwt_secret

Running the Applications
Start Backend API
cd backend
npm run server
Start Frontend (User site)
cd frontend
npm run dev
Start Admin Panel
cd admin
npm run dev

Features
User authentication & JWT authorization

Product management

Order management

Stripe payment integration

Role-based access control

Responsive UI for users & admins

RESTful API
