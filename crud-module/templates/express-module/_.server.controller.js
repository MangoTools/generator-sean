'use strict';

/**
* Module dependencies.
*/

var _ = require('lodash'),
  db = require('../../config/sequelize'),
  errorHandler = require('./errors');

/**
* Create a <%= humanizedSingularName %>
*/
exports.create = function(req, res) {
  var <%= camelizedSingularName %> = req.body;

  <%= camelizedSingularName %>.UserId = req.user.id;

  db.<%= classifiedSingularName %>.create(req.body).done(function(err, <%= camelizedSingularName %>){
    if(err){
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    }
    return res.jsonp(<%= camelizedSingularName %>);
  });
};

/**
* Show the current <%= humanizedSingularName %>
*/
exports.read = function(req, res) {
  res.jsonp(req.<%= camelizedSingularName %>);
};

/**
* Update a <%= humanizedSingularName %>
*/
exports.update = function(req, res) {

  var <%= camelizedSingularName %> = req.<%= camelizedSingularName %>;

  <%= camelizedSingularName %> = _.extend(<%= camelizedSingularName %>, req.body);

  <%= camelizedSingularName %>.save().done(function(err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(<%= camelizedSingularName %>);
    }
  });
};

/**
* Delete an <%= humanizedSingularName %>
*/
exports.delete = function(req, res) {
  var <%= camelizedSingularName %> = req.<%= camelizedSingularName %>;

  <%= camelizedSingularName %>.destroy().done(function(err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(<%= camelizedSingularName %>);
    }
  });
};

/**
* List of <%= humanizedPluralName %>
*/
exports.list = function(req, res) {
  db.<%= classifiedSingularName %>.findAll({ include: [{ model: db.User, attributes: ['displayName'] }], order: 'created' }).done(function(err, <%= camelizedPluralName %>) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(<%= camelizedPluralName %>);
    }
  });
};

/**
* <%= humanizedSingularName %> middleware
*/
exports.<%= camelizedSingularName %>ByID = function(req, res, next, id) {
  db.<%= classifiedSingularName %>.find({where: { id: id }, include: [ { model: db.User, attributes: ['displayName'] } ] }).done(function(err, <%= camelizedSingularName %>) {
    if (err) return next(err);
    if (!<%= camelizedSingularName %>) return next(new Error('Failed to load <%= humanizedSingularName %> ' + id));
    req..<%= camelizedSingularName %> = <%= camelizedSingularName %>;
    next();
  });
};

/**
* <%= humanizedSingularName %> authorization middleware
*/
exports.isOwner = function(req, res, next) {
  if (req.<%= camelizedSingularName %>.user.id !== req.user.id) {
    return res.status(403).send({
      message: 'User is not authorized'
    });
  }
  next();
};
