import express from "express";

const PORT = 5228;

const app = express();

const handleListning = () => console.log(`Server Listening on port ${PORT}`);

app.listen(PORT, handleListning);
