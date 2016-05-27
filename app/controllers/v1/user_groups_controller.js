module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const UserGroup = Nodal.require('app/models/user_group.js');

  class V1UserGroupsController extends Nodal.Controller {

    index() {

      UserGroup.query()
        .where(this.params.query)
        .end((err, models) => {

          this.respond(err || models);

        });

    }

    show() {

      UserGroup.find(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

    create() {

      UserGroup.create(this.params.body, (err, model) => {

        this.respond(err || model);

      });

    }

    update() {

      UserGroup.update(this.params.route.id, this.params.body, (err, model) => {

        this.respond(err || model);

      });

    }

    destroy() {

      UserGroup.destroy(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

  }

  return V1UserGroupsController;

})();
