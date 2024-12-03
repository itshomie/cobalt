const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, this is the Cobalt project!');
});

// 示例 API 端点
app.get('/api/example', (req, res) => {
  res.json({ message: 'Example API endpoint is working!' });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
