'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
  db = require('../../config/sequelize');

/**
 * Globals
 */
var user, <%= camelizedModelName %>;

/**
 * Unit tests
 */
describe('<%= humanizedModelName %> Model Unit Tests:', function() {
  beforeEach(function(done) {
    user = db.User.build({
      firstName: 'Full',
      lastName: 'Name',
      displayName: 'Full Name',
      email: 'test@test.com',
      username: 'username',
      password: 'password',
      provider: 'local'
    });

    user.save().done(function(err) {
      <%= camelizedModelName %> = new <%= classifiedModelName %>({
        // Add model fields
        // ...
      });

      done(err);
    });
  });

  describe('Method Save', function() {
    it('should be able to save without problems', function(done) {
      return <%= camelizedModelName %>.save().done(function(err,<%= camelizedModelName %>) {
        should.not.exist(err);
        done();
      });
    });
  });

  afterEach(function(done) {
    db.<%= classifiedModelName %>.destroy().done(function(err){/*console.log(err);*/});
    db.User.destroy().done(function(err){/*console.log(err);*/});

    done();
  });
});
