function ProductList(){
    this.productname = ko.observable("");
    this.productprice = ko.observable("");
    this.products = ko.observableArray([
        {name:'Pepsi', price:30.00},
        {name:'Coke', price:35.00},
        {name:'Dew', price:25.00},
    ]) 
    this.addProduct = function(){
        if(this.productname()!=""&& this.productprice()!=""){
            this.products.push({
                name:this.productname(),
                price:this.productprice()
            })
            this.productname("");
            this.productprice("");
        }
    }

}

const productList = new ProductList();
ko.applyBindings(productList)