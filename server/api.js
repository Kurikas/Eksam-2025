import express from "express";

  export const api = new express.Router();
  
  const EXAMPLES = [
      { example: "test" },
      { example: "dummy" },
  ];
  
  api.get("/api/examples", (req, res) => {
      res.send(EXAMPLES)
  });
  
  api.post("/api/examples", (req, res) => {
      const { example } = req.body;
      EXAMPLES.push({ example, id: EXAMPLES.length });
      res.sendStatus(204);
  });