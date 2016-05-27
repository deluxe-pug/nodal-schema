module.exports = (function() {

  "use strict";

  const Nodal = require('nodal');

  class CreateUserGroups extends Nodal.Migration {

    constructor(db) {
      super(db);
      this.id = 2016052703334370;
    }

    up() {

      return [
        this.createTable("user_groups", [{"name":"user_id","type":"int"},{"name":"group_id","type":"int"}])
      ];

    }

    down() {

      return [
        this.dropTable("user_groups")
      ];

    }

  }

  return CreateUserGroups;

})();
