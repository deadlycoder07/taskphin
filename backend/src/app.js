const express = require('express');
const bodyParser = require('body-parser');
const candidateRoutes = require('./routes/candidateRoutes');
const cors = require('cors');

const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use('/api/v1/candidates', candidateRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
