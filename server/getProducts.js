const products = require('../products.json');

module.exports = {

    getProducts: (req, res) => {
        const {price} = req.query

        if(price){
            const filteredProducts = products.filter(element => element.price >= +price)
            return res.status(200).send(filteredProducts)
        }
           
        return res.status(200).send(products)
        
    }


     // getProducts: (req, res) => {
    //     const {qPrice} = req.query

    //     let filteredProducts = products.filter(element => element.price >= +qPrice)
    //     console.log(filteredProducts)
       
    //     if(filteredProducts === []){
    //         return res.status(500).send('We appoligize for the inconvenience but there are no items in that price range')
    //     } else if(filteredProducts){
    //         return res.status(200).send(filteredProducts)
    //     }
        
    // }


}