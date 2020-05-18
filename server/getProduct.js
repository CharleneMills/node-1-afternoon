const products = require('../products.json');

module.exports = {

    getProduct: (req, res) => {
        const {pId} = req.params
        const product = products.find(element => element.id === +pId)
        
        if(product){
           return res.status(200).send(product)
        } else {
            return res.status(500).send('Item not in List')
        }
        
    }

}

