const express = require('express');

const app = express();
const PORT = 3001;

//middleware to parse json body
app.use(express.json());

//sample route
app.get('/test', (req, res) => {
  res.send('Hello World!');
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}
);