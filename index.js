const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    console.log('testiing cidci :', );
  res.send('🚀 Hello from Jenkins CI/CD Pipeline!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
