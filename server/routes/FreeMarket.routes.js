const ItemController = require('../controllers/Item.controller');
const PaymentController = require('../controllers/Payment.controller');
const ShopController = require('../controllers/Shop.controller');
const UserController = require('../controllers/User.controller');

module.exports = function(app) {
    app.post('/api/item/new', ItemController.createItem);
    app.get('/api/item/:id', ItemController.getOneItem);
    app.put('/api/item/:id', ItemController.updateItem);

    app.post('/api/payment/new', PaymentController.createPayment);
    app.get('/api/payment/:id', PaymentController.getOnePayment);
    app.put('/api/payment/:id', PaymentController.updatePayment);

    app.post('/api/shop/new', ShopController.createShop);
    app.get('/api/shop/:id', ShopController.getOneShop);
    app.put('/api/shop/:id', ShopController.updateShop);

    app.post('/api/user/new', UserController.createUser);
    app.get('/api/user/:id', UserController.getOneUser);
    app.put('/api/user/:id', UserController.updateUser);
}