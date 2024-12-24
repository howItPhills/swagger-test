const express = require("express");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();
const port = 3000;

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Express API",
      version: "1.0.0",
    },
  },
  apis: ["./index.js"],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /api/v1/resource:
 *   get:
 *     description: Get the resource
 *     responses:
 *       200:
 *         description: Success
 */
app.get("/api/v1/resource", (req, res) => {
  res.send("GET request to the resource");
});

/**
 * @swagger
 * /api/v1/resource:
 *   post:
 *     description: Create a new resource
 *     responses:
 *       200:
 *         description: Success
 */
app.post("/api/v1/resource", (req, res) => {
  res.send("POST request to the resource");
});

/**
 * @swagger
 * /api/v1/resource:
 *   put:
 *     description: Update the resource
 *     responses:
 *       200:
 *         description: Success
 */
app.put("/api/v1/resource", (req, res) => {
  res.send("PUT request to the resource");
});

/**
 * @swagger
 * /api/v1/resource:
 *   delete:
 *     description: Delete the resource
 *     responses:
 *       200:
 *         description: Success
 */
app.delete("/api/v1/resource", (req, res) => {
  res.send("DELETE request to the resource");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
