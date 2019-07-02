'use strict';
const mongoose = require('mongoose');
const Product = mongoose.model('Customer');


exports.create = async (data) => {
    var customer = new Customer(data);
    await customer.save();
}