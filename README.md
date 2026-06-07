# coding-project-template
# Paradise Nursery - Shopping Cart Application 🌱

## Project Overview

Paradise Nursery is an online plant shopping application built using React and Redux. The application allows users to browse a variety of house plants, add plants to a shopping cart, manage quantities, and view the total cost of their purchases.

This project was developed as the final project for the React and Redux course.

---

## Features

### Landing Page

* Attractive landing page introducing Paradise Nursery.
* "Get Started" button that navigates users to the product listing page.

### Product Listing Page

* Displays plants categorized into different sections:

  * Air Purifying Plants
  * Aromatic Fragrant Plants
  * Insect Repellent Plants
  * Medicinal Plants
  * Low Maintenance Plants
* Each plant card includes:

  * Plant image
  * Plant name
  * Description
  * Cost
  * Add to Cart button

### Shopping Cart

* View all products added to the cart.
* Increase or decrease product quantities.
* Automatically remove products when quantity reaches zero.
* Delete products directly from the cart.
* Display:

  * Unit cost
  * Quantity
  * Total cost per product
  * Total cart amount

### Navigation

* Navigate between:

  * Home Page
  * Product Listing Page
  * Shopping Cart

### Redux State Management

* Global state management using Redux Toolkit.
* Actions implemented:

  * addItem
  * removeItem
  * updateQuantity

---

## Technologies Used

* React
* Redux Toolkit
* React Redux
* JavaScript (ES6+)
* CSS3
* Vite

---

## Project Structure

```text
src/
│
├── App.jsx
├── AboutUs.jsx
├── ProductList.jsx
├── CartItem.jsx
├── CartSlice.jsx
├── store.js
│
├── App.css
├── AboutUs.css
├── ProductList.css
├── CartItem.css
│
└── main.jsx
```

---

## Installation and Setup

### Clone the Repository

```bash
git clone https://github.com/<your-github-username>/e-plantShopping.git
```

### Navigate to Project Directory

```bash
cd e-plantShopping
```

### Install Dependencies

```bash
npm install
```

### Run the Application

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

---

## Redux Workflow

### Store

```javascript
configureStore({
  reducer: {
    cart: cartReducer,
  },
});
```

### Actions

* addItem()
* removeItem()
* updateQuantity()

### State

```javascript
{
  cart: {
    items: []
  }
}
```

---

## Future Enhancements

* User Authentication
* Wishlist Functionality
* Search and Filter Plants
* Product Details Page
* Online Payment Integration
* Backend Database Integration

---

## Learning Outcomes

This project demonstrates:

* React Functional Components
* Component Composition
* React Hooks (useState)
* Redux Toolkit
* State Management
* Event Handling
* Conditional Rendering
* Dynamic UI Rendering using Array Mapping

---

## Author

**Sadhana M**

Paradise Nursery Shopping Cart Application developed as part of the React and Redux Final Project.
