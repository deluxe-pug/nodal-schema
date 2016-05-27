module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const UserGroup = Nodal.require('app/models/user_group.js');

  class Group extends Nodal.Model {}

  Group.setDatabase(Nodal.require('db/main.js'));
  Group.setSchema(Nodal.my.Schema.models.Group);

  Group.joinedBy(UserGroup, {multiple: true});

  return Group;

})();
