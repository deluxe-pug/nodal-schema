module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const UserGroup = Nodal.require('app/models/user_group.js');

  class User extends Nodal.Model {}

  User.setDatabase(Nodal.require('db/main.js'));
  User.setSchema(Nodal.my.Schema.models.User);

  User.joinedBy(UserGroup, {multiple: true});

  return User;

})();
