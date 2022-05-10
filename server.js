const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');
const Data = require('./model/coinData');
const mongoose = require('mongoose');
const Uri='mongodb+srv://rishabh768:80RpvayiO4SbzQRf@mycluster.ibnza.mongodb.net/QuadB?retryWrites=true&w=majority'

mongoose.connect(Uri).then(res=>console.log('conneted to database')).catch(err=>console.log(err))
app.use(cors());

// Get the data from wazirx api 
app.get('/getdata', async (req, res) => {

    let response = await axios.get('https://api.wazirx.com/api/v2/tickers');
    let arr = [];
    for (let key in response.data) {
        let data =  response.data[key] ;
        arr.push(data);
    }

    let coinData = arr.slice(0, 10).map((item) => ({
        name: item.name,
        sell: item.sell,
        volume: item.volume,
        buy: item.buy,
        last: item.last,
        base_unit: item.base_unit
    }));

    res.status(200).json({ message: 'Success' });
   });

    //Run this for inserting the multiple data into database
    const insertData = async (data) => {
        try {
            const inserted = await Data.insertMany(data);
            console.log(inserted);
        } catch (error) {
            throw new Error('Failed to insert');
        }
       
    }


    //Getting the data from My database

app.get('/',async (req,res) => {
       
    let data = await Data.find();
    res.status(200).send(data);
});



const port = 3000;
app.listen(port, () => console.log('server is running'));