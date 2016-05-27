module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');

  class Group extends Nodal.Model {}

  Group.setDatabase(Nodal.require('db/main.js'));
  Group.setSchema(Nodal.my.Schema.models.Group);

  return Group;

})();
