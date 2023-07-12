import express from 'express';


const router = express.Router();

//adding a route

router.get('/',(req, res)=>{
    res.send("Router is working");
});


//exporting the router

export default router;