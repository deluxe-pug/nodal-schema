module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const User = Nodal.require('app/models/user.js');
  const Group = Nodal.require('app/models/group.js');

  class UserGroup extends Nodal.Model {}

  UserGroup.setDatabase(Nodal.require('db/main.js'));
  UserGroup.setSchema(Nodal.my.Schema.models.UserGroup);

  UserGroup.joinsTo(User, {multiple: true});
  UserGroup.joinsTo(Group, {multiple: true});


  return UserGroup;

})();
