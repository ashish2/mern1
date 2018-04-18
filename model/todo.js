'use strict';

// Dependencies
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TodoSchema = new Schema({
	date = Date,
	category = String,
	type = String, // cash/credit
	amount = Number
});

