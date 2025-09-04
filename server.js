import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import contactRoutes from './routes/contactRoutes.js';
import cors from 'cors'
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/contacts',contactRoutes)

app.get('/',(req,res)=>{
    res.send("Server working fine ...")
})

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
