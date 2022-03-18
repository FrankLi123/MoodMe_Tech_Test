
const express = require('express');
const { userInfo } = require('os');
const router = express.Router()
module.exports = router;


const Model = require('../../models/model')

// GET method that get all the data of restaurants
router.get('/getAll', async(req,res) =>{
        res.header("Access-Control-Allow-Origin", "*");
        const data = await Model.find() 
        res.json(data)
    });


    // GET method that gets restaurant data in specific type;
router.get('/getByType', async(req,res) =>{
    const type = req.query.type;
    res.header("Access-Control-Allow-Origin", "*");


    const data = await Model.find({$text:{$search:type}});
    
    res.json(data)
});


// GET method that gets the data of one specific restaurant. Parameter is its name;
router.get('/getByName', async(req,res) =>{
    const theName = req.query. theName? req.query. theName:0;
    res.header("Access-Control-Allow-Origin", "*");
    const data = await Model.find({name:theName});
    
    res.json(data)
});


// GET method that gets data on a specific page with a specific page Size.
router.get('/getWithParam', async(req,res) =>{
        //  console.log(1);
    const pageSize = req.query.pageSize? parseInt(req.query.pageSize):0;
    const page =req.query.page? parseInt(req.query.page) : 0;
    
    const skipIndex = (page - 1) * pageSize;
    res.header("Access-Control-Allow-Origin", "*");
    const data =await Model.find().limit(pageSize).skip(skipIndex ).exec();
    res.json(data)
    });


router.post('/post', async(req,res) =>{   
})


router.get('/getOne/:id', (req, res) => {
    res.send(req.params.id)
})
