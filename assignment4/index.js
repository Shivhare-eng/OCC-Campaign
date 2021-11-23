console.log("// Creation of Object in js ::module.exports=Product;");

const product1=require('./calc');

const p2=new product1((10,40),(40,10),(10,40),(40,10));

console.log(p2.display());