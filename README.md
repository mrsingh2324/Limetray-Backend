## Overview

This is the backend for the Limetray project, which provides a RESTful API to manage items and cart operations, including the ability to retrieve items, add/remove items from the cart, and save the cart.

## Features
- **Get Items:** Fetches a list of items available for adding to the cart.
- **Manage Cart:** Add, update, and remove items from the cart.
- **Save Cart:** Save the current cart items to a database or in-memory storage.
- **Error Handling:** Handles cases such as empty cart or invalid requests.

## Tech Stack
- **Node.js** with **Express.js**: Backend framework for building the API.
- **Axios**: For handling HTTP requests on the frontend.

## Requirements
- Node.js (v14 or above)
- Environment configuration file `.env`

## Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/your-username/limetray-backend.git
cd server
npm i
nodemon start
