module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');

  class UserGroup extends Nodal.Model {}

  UserGroup.setDatabase(Nodal.require('db/main.js'));
  UserGroup.setSchema(Nodal.my.Schema.models.UserGroup);

  return UserGroup;

})();
