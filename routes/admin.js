const path=require('path');
const rootDir=require('../util/path');
const express=require('express');
const router=express.Router();
const products=[];

router.get('/add-product',(req,res,next)=>{
    console.log('add product');
    //res.sendFile(path.join(rootDir,'views','add-product.html'));
    res.render('add_product',{pageTile:'Add Product'});
});    
router.post('/add-product',(req,res,next)=>{
    products.push({title: req.body.title});
    //products.push(req.body.title);
    //console.log(req.body);
    res.redirect('/');
});
//module.exports=router;
exports.routes=router;
exports.products=products;