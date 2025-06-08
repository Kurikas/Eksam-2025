import express from "express";
import { Sequelize, DataTypes } from 'sequelize';
import multer from 'multer'; // Multer is still here but not used in the update route
import path from 'path';

export const api = new express.Router();

// --- DATABASE SETUP (SQLite) ---
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite',
  logging: false
});

// --- DATABASE MODELS ---
const Product = sequelize.define('Product', {
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  price: { type: DataTypes.FLOAT, allowNull: false },
  material: { type: DataTypes.STRING },
  imageUrl: { type: DataTypes.STRING }
});

const Contact = sequelize.define('Contact', {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  phone: { type: DataTypes.STRING }, // Corrected from 'phone' to 'phone' to match other files
  message: { type: DataTypes.TEXT, allowNull: false }
});

sequelize.sync();

// --- ADMIN AUTHENTICATION ---
const ADMIN_PASSWORD = "your_secure_password"; 

function checkAdmin(req, res, next) {
    if (req.session.isAdmin) {
        next();
    } else {
        res.status(401).send("Unauthorized");
    }
}

api.post('/login', (req, res) => {
    const { password } = req.body;
    if (password === ADMIN_PASSWORD) {
        req.session.isAdmin = true;
        res.sendStatus(200);
    } else {
        res.status(401).send('Incorrect password');
    }
});

api.post('/logout', (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
});

// --- API ENDPOINTS ---

// GET all products (Public)
api.get("/products", async (req, res) => {
    const products = await Product.findAll();
    res.json(products);
});

// GET all contact messages (Admin only)
api.get("/contacts", checkAdmin, async (req, res) => {
    const contacts = await Contact.findAll({ order: [['createdAt', 'DESC']] });
    res.json(contacts);
});

// POST a new contact message (Public)
api.post("/contacts", async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;
        await Contact.create({ name, email, phone, message });
        res.status(201).send("Message saved.");
    } catch (error) {
        res.status(400).send("Error saving message.");
    }
});

// **MODIFIED ENDPOINT**
// UPDATE a product's data (Admin only) - Image upload is removed.
api.post("/products/update/:id", checkAdmin, async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (product) {
            // Update only the data fields from the form body
            product.name = req.body.name || product.name;
            product.description = req.body.description || product.description;
            product.price = req.body.price || product.price;
            product.material = req.body.material || product.material;
            
            // The imageUrl is NOT touched
            
            await product.save();
            res.redirect('/admin_dashboard.html'); // Redirect back to dashboard
        } else {
            res.status(404).send("Product not found");
        }
    } catch (error) {
        console.error("Update Error:", error);
        res.status(500).send("Error updating product.");
    }
});
