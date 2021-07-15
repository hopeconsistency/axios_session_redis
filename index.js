const express = require("express");
const router = require("./routes");
const session = require("./middleware/session");
const app = express();

const PORT = 5000;

app.use(express.json());
app.use(session);
app.use(router);

app.listen(PORT, () => console.log(`Server at ${PORT}`));
