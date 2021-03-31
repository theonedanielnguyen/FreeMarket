const ItemController = require('../controllers/Item.controller');
const PaymentController = require('../controllers/Payment.controller');
const ShopController = require('../controllers/Shop.controller');
const TransactionController = require('../controllers/Transaction.controller');
const UserController = require('../controllers/User.controller');

module.exports = function(app) {
    app.post('/api/item/new', ItemController.createItem);
    app.get('/api/item/all', ItemController.getAllItems);
    app.get('/api/item/count', ItemController.getItemCount);
    app.get('/api/item/random/:num', ItemController.random);
    app.get('/api/item/search/:searchQuery', ItemController.search);
    app.delete('/api/item/:id', ItemController.deleteItem);
    app.get('/api/item/:id', ItemController.getOneItem);
    app.put('/api/item/:id', ItemController.updateItem);    

    app.post('/api/payment/new', PaymentController.createPayment);
    app.get('/api/payment/:id', PaymentController.getOnePayment);
    app.put('/api/payment/:id', PaymentController.updatePayment);

    app.post('/api/shop/new', ShopController.createShop);
    app.get('/api/shop/:id', ShopController.getOneShop);
    app.put('/api/shop/:id', ShopController.updateShop);

    app.post('/api/transaction/new', TransactionController.createTransaction);
    app.get('/api/transaction/:id', TransactionController.getOneTransaction);

    app.post('/api/users/new', UserController.createUser);
    app.get('/api/users/:id', UserController.getOneUser);
    app.put('/api/users/:id', UserController.updateUser);
    app.post('/api/users/login', UserController.loginUser);
}