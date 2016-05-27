module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const Group = Nodal.require('app/models/group.js');

  class V1GroupsController extends Nodal.Controller {

    index() {

      Group.query()
        .where(this.params.query)
        .end((err, models) => {

          this.respond(err || models);

        });

    }

    show() {

      Group.find(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

    create() {

      Group.create(this.params.body, (err, model) => {

        this.respond(err || model);

      });

    }

    update() {

      Group.update(this.params.route.id, this.params.body, (err, model) => {

        this.respond(err || model);

      });

    }

    destroy() {

      Group.destroy(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

  }

  return V1GroupsController;

})();
