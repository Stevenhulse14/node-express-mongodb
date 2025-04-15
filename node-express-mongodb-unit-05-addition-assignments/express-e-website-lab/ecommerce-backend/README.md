# E-Commerce Backend API

A complete RESTful API for an e-commerce platform built with Node.js, Express, and MongoDB. This backend includes user authentication with email verification, product management, shopping cart functionality, order processing, and Stripe payment integration.

## Features

### User Management

- Registration with email verification
- JWT authentication
- Password reset functionality
- Role-based access control (admin/user)

### Product Management

- CRUD operations for products
- Category filtering and search
- Pagination

### Shopping Cart

- Add/remove items
- Update quantities
- Stock validation

### Order Processing

- Create orders
- Payment processing with Stripe
- Order history
- Admin order management

### Security

- Password hashing with bcrypt
- JWT authentication
- Input validation
- Protected routes

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn
- Stripe account for payment processing
- SMTP server access for email functionality (Mailtrap for testing)

## Installation

```bash
git clone https://github.com/yourusername/ecommerce-backend.git
cd ecommerce-backend
npm install
# or
yarn install
cp .env.example .env
```

Configure your environment variables in the `.env` file:

```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your_jwt_secret_key_here
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your_email@example.com
EMAIL_PASSWORD=your_email_password
EMAIL_FROM=your_email@example.com
EMAIL_FROM_NAME=E-Commerce Store
BASE_URL=http://localhost:5000
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
```

## Project Structure

```
backend/
├── server.js
├── config/
│   └── db.js
├── routes/
│   ├── userRoutes.js
│   ├── productRoutes.js
│   ├── cartRoutes.js
│   └── orderRoutes.js
├── controllers/
│   ├── userController.js
│   ├── productController.js
│   ├── cartController.js
│   └── orderController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   ├── User.js
│   ├── Product.js
│   ├── Cart.js
│   └── Order.js
├── helpers/
│   ├── hashPassword.js
│   └── emailService.js
└── .env
```

## Running the Server

### Development Mode

```bash
npm run dev
# or
yarn dev
```

### Production Mode

```bash
npm start
# or
yarn start
```

## Setting Up Stripe Webhooks

```bash
stripe login
stripe listen --forward-to http://localhost:5000/api/orders/webhook
```

Copy the webhook secret into `.env` as `STRIPE_WEBHOOK_SECRET`.

## Setting Up Email Verification

- Configure SMTP in `.env`
- Use Mailtrap or Ethereal Email for development
- Ensure `BASE_URL` is correct

## API Endpoints

### Authentication

- POST `/api/users/register`
- GET `/api/users/verify/:token`
- POST `/api/users/resend-verification`
- POST `/api/users/login`
- POST `/api/users/forgot-password`
- POST `/api/users/reset-password/:token`

### User Management

- GET `/api/users/profile`
- PUT `/api/users/profile`
- GET `/api/users` (admin)
- DELETE `/api/users/:id` (admin)
- PUT `/api/users/:id/role` (admin)

### Products

- GET `/api/products`
- GET `/api/products/categories`
- GET `/api/products/:id`
- POST `/api/products` (admin)
- PUT `/api/products/:id` (admin)
- DELETE `/api/products/:id` (admin)

### Cart

- GET `/api/cart`
- POST `/api/cart`
- PUT `/api/cart/:itemId`
- DELETE `/api/cart/:itemId`
- DELETE `/api/cart`

### Orders

- POST `/api/orders`
- GET `/api/orders/myorders`
- GET `/api/orders/:id`
- POST `/api/orders/:id/create-payment-intent`
- PUT `/api/orders/:id/pay`
- GET `/api/orders` (admin)
- PUT `/api/orders/:id/deliver` (admin)

## Example API Calls

### Register

```json
POST /api/users/register
{
  "username": "testuser",
  "email": "test@example.com",
  "password": "password123"
}
```

### Login

```json
POST /api/users/login
{
  "email": "test@example.com",
  "password": "password123"
}
```

### Create Product (Admin)

```json
POST /api/products
Authorization: Bearer TOKEN
{
  "name": "Test Product",
  "description": "Description",
  "price": 19.99,
  "category": "Electronics",
  "stock": 10,
  "images": ["https://example.com/image.jpg"]
}
```

### Add Item to Cart

```json
POST /api/cart
Authorization: Bearer TOKEN
{
  "productId": "ID",
  "quantity": 2
}
```

### Create Order

```json
POST /api/orders
Authorization: Bearer TOKEN
{
  "shippingAddress": {
    "address": "123 Main St",
    "city": "Boston",
    "postalCode": "02108",
    "country": "USA"
  },
  "paymentMethod": "stripe"
}
```

### Create Payment Intent

```json
POST /api/orders/:id/create-payment-intent
Authorization: Bearer TOKEN
{}
```

## Admin User Setup

Update the user in MongoDB:

```javascript
db.users.updateOne({ email: "admin@example.com" }, { $set: { role: "admin" } });
```

## Deployment

### Heroku

```bash
heroku login
heroku create your-app-name
heroku config:set MONGO_URI=...
heroku config:set JWT_SECRET=...
git push heroku main
```

### Vercel

Create `vercel.json` and set environment variables in dashboard.

### Docker

```Dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD ["npm", "start"]
```

```bash
docker build -t ecommerce-backend .
docker run -p 5000:5000 --env-file .env ecommerce-backend
```

## Troubleshooting

### MongoDB Issues

- Check connection string
- Atlas network settings

### Email Issues

- Validate SMTP config
- Use Mailtrap for testing

### Stripe Issues

- Check API keys
- Ensure webhook forwarding

### JWT Issues

- Ensure valid secret
- Proper Authorization header

## Security Considerations

- Use HTTPS
- Store secrets in `.env`
- Rate limiting
- Updated dependencies
- CORS restrictions in production

## Performance Optimization

- MongoDB indexes
- Caching
- Pagination
- Compression middleware

## Contributing

1. Fork repo
2. Create branch
3. Commit changes
4. Push
5. Open PR

## License

MIT License
