const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use(express.json());

let cart = [];

app.get('/cart', (req, res) => {
    res.json(cart);
});

app.get('/cart/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = cart.find(item => item.id === id);
    if (item) {
        res.json(item);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

app.post('/cart', (req, res) => {
    const { id, name, price, quantity } = req.body;
    const existingItem = cart.find(item => item.id === id);
    if (!existingItem) {
        cart.push({ id, name, price, quantity });
        res.status(201).json({ message: 'Item added to cart', cart });
    } else {
        res.status(400).json({ message: 'Item already exists in the cart' });
    }
});

app.put('/cart/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { quantity } = req.body;
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity = quantity;
        res.json({ message: 'Quantity updated', cart });
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

app.delete('/cart/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = cart.findIndex(item => item.id === id);
    if (index !== -1) {
        cart.splice(index, 1);
        res.json({ message: 'Item removed', cart });
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
