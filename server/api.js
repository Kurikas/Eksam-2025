import express from "express";
import { Sequelize, DataTypes } from 'sequelize';

export const api = new express.Router();
  
// Use SQLite — the DB file will be 'database.sqlite' in your repo
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite',
});

// Example model
const User = sequelize.define('User', {
  username: DataTypes.STRING,
  birthday: DataTypes.DATE,
});

  api.get("/api/examples", async (req, res) => {
   const users = await User.findAll();
    res.send(users.map(user => user.toJSON()));
    //res.send(User.toJSON());
  });
  
  api.post("/api/examples", (req, res) => {
      const { example } = req.body;
      // Sync and use the model
        (async () => {
          await sequelize.sync();
          const jane = await User.create({
            username: 'janedoe',
            birthday: new Date(1990, 6, 20),
          });
        })();
        console.log(jane.toJSON());
      res.sendStatus(204);
  });