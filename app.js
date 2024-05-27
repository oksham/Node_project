const path=require('path');
const bodyparser=require('body-parser');
const express=require('express');
const app=express();

app.set('view engine','pug');
app.set('views','views');

const adminData=require('./routes/admin');
const shopRoutes=require('./routes/shop');

app.use(bodyparser.urlencoded());
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminData.routes);  
app.use(shopRoutes); 

app.use((req,res,next)=>{
    //res.status(404).sendFile(path.join(__dirname,'views','404.html'));
    //res.render('add_product',{pageTile:'Add Product'});
    res.status(404).render('404',{error:'Page not found'});
});

app.listen(3000);