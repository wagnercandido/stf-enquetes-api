const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());

const server = require('http').Server(app);
const io = require('socket.io')(server);

// Banco de dados - acesso Wagner Cândido
// mongoose.connect('mongodb+srv://admin:admin@cluster0-ky2dx.mongodb.net/enquetes-copy?retryWrites=true&w=majority',
//     {
//         useNewUrlParser: true,
//     }
// );

// Banco de acesso - acesso Stefanini Dev
mongoose.connect('mongodb+srv://root:root@cluster0-lubnd.mongodb.net/pocka-enquetes?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
    }
);

app.use((req, res, next) => {
    req.io = io;
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(require('./routes'));

server.listen(process.env.PORT || 3333); 