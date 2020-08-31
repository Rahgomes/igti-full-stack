import express from 'express';
import mongoose from 'mongoose';
import { accountsRouter } from './routes/accountsRouter.js';

(async () => {
    try {
        await mongoose.connect('mongodb+srv://zirah352:Euro2016@clusterbootcamp.bbalc.mongodb.net/my-bank-api?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Conectado ao mongodb com sucesso");
    } catch (error) {
        console.log("Erro ao conectar ao mongodb: " + error);
    }
})();

const app = express();
app.use(express.json());
app.use(accountsRouter);

app.listen(3000, () => {
    console.log("API iniciada!!!");
})