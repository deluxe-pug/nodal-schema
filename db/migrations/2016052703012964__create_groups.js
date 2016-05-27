module.exports = (function() {

  "use strict";

  const Nodal = require('nodal');

  class CreateGroups extends Nodal.Migration {

    constructor(db) {
      super(db);
      this.id = 2016052703012964;
    }

    up() {

      return [
        this.createTable("groups", [{"name":"name","type":"string"}])
      ];

    }

    down() {

      return [
        this.dropTable("groups")
      ];

    }

  }

  return CreateGroups;

})();
