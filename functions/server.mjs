
import express from "express";
import ServerlessHttp from "serverless-http";
import products from '../db/products.mjs'
import products2 from '../db/products2.mjs'
import products3 from '../db/products3.mjs'
import products4 from '../db/products4.mjs'
import products5 from '../db/products5.mjs'
import products6 from '../db/products6.mjs'
import products7 from '../db/products7.mjs'
import products8 from '../db/products8.mjs'
import products9 from '../db/products9.mjs'
import products10 from '../db/products10.mjs'

const app = express();
app.get('/products?', (req, res) => {
  res.json(products)
});
app.put("products", (req,res) => {
  const id = req.query.id;
  const bodyData = req.body
  const data = products.filter((data) => data.id !== id)
})
app.post('/products/add_new', (req, res) => {
  const data = req.body
  res.json(data)
  res.send(`${data} has been sucsessful added`)
});
app.get('/products2', (req, res) => {
  res.json(products2)
});
app.put("products2", (req,res) => {
  const id = req.query.id;
  const bodyData = req.body
  const data = products2.filter((data) => data.id !== id)
})
app.post('/products2/add_new', (req, res) => {
  const data = req.body
  res.json(data)
  res.send(`${data} has been sucsessful added`)
});
app.get('/products3', (req, res) => {
  res.json(products3)
});
app.put("products3", (req,res) => {
  const id = req.query.id;
  const bodyData = req.body
  const data = products3.filter((data) => data.id !== id)
})
app.post('/products3/add_new', (req, res) => {
  const data = req.body
  res.json(data)
  res.send(`${data} has been sucsessful added`)
});
app.get('/products4', (req, res) => {
  res.json(products4)
});
app.put("products4", (req,res) => {
  const id = req.query.id;
  const bodyData = req.body
  const data = products4.filter((data) => data.id !== id)
})
app.post('/products4/add_new', (req, res) => {
  const data = req.body
  res.json(data)
  res.send(`${data} has been sucsessful added`)
});
app.get('/products5', (req, res) => {
  res.json(products5)
});
app.put("products5", (req,res) => {
  const id = req.query.id;
  const bodyData = req.body
  const data = products5.filter((data) => data.id !== id)
})
app.post('/products5/add_new', (req, res) => {
  const data = req.body
  res.json(data)
  res.send(`${data} has been sucsessful added`)
});
app.get('/products6', (req, res) => {
  res.json(products6)
});
app.put("products6", (req,res) => {
  const id = req.query.id;
  const bodyData = req.body
  const data = products6.filter((data) => data.id !== id)
})
app.post('/products6/add_new', (req, res) => {
  const data = req.body
  res.json(data)
  res.send(`${data} has been sucsessful added`)
});
app.get('/products7', (req, res) => {
  res.json(products7)
});
app.put("products7", (req,res) => {
  const id = req.query.id;
  const bodyData = req.body
  const data = products.filter((data) => data.id !== id)
})
app.post('/products7/add_new', (req, res) => {
  const data = req.body
  res.json(data)
  res.send(`${data} has been sucsessful added`)
});
app.get('/products8', (req, res) => {
  res.json(products8)
});
app.put("products8", (req,res) => {
  const id = req.query.id;
  const bodyData = req.body
  const data = products.filter((data) => data.id !== id)
})
app.post('/products8/add_new', (req, res) => {
  const data = req.body
  res.json(data)
  res.send(`${data} has been sucsessful added`)
});
app.get('/products9', (req, res) => {
  res.json(products9)
});
app.put("products9", (req,res) => {
  const id = req.query.id;
  const bodyData = req.body
  const data = products.filter((data) => data.id !== id)
})
app.post('/products9/add_new', (req, res) => {
  const data = req.body
  res.json(data)
  res.send(`${data} has been sucsessful added`)
});
app.get('/products10', (req, res) => {
  res.json(products10)
});
app.put("products10", (req,res) => {
  const id = req.query.id;
  const bodyData = req.body
  const data = products.filter((data) => data.id !== id)
})
app.post('/products10/add_new', (req, res) => {
  const data = req.body
  res.json(data)
  res.send(`${data} has been sucsessful added`)
});

export const handler2 = ServerlessHttp(app);
export const handler = async (event, context) => {
  const result = await handler2(event, context);
  return result;
};
