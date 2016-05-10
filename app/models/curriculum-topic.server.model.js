'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	  Schema = mongoose.Schema,
		Comment = mongoose.model('Comment');

/**
 * CurriculumTopic Schema
 */
var CurriculumTopicSchema = new Schema({
	id: {
		type: String,
		required: true,
		unique: true
	},
	grade: {
		type: String,
		required: true,
	},
	subject: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	difficulty: {
		type: Number,
		min: 0,
		max: 10,
		default: 0
	},
	totalRankings: {
		type: Number,
		default: 0
	},
	comments: [{
		rating: {
			type: Number,
			min: 0,
			max: 10,
			required: 'Must specifiy diffculty'
		},
		difficultAreas: {
			type: String,
			required: 'Must specify diffcult areas',
			trim: true
		},
		techniques: {
			type: String,
			required: 'Must specify techniques',
			trim: true
		},
		date: {
			type: Date,
			default: Date.now
		}
	}]
});

mongoose.model('CurriculumTopic', CurriculumTopicSchema);
