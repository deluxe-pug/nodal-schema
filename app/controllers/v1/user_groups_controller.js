module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const UserGroup = Nodal.require('app/models/user_group.js');
  const User = Nodal.require('app/models/user.js');
  const Group = Nodal.require('app/models/group.js');

  class V1UserGroupsController extends Nodal.Controller {

    index() {

      UserGroup.query()
        .join('user')
        .join('group')
        .where(this.params.query)
        .end((err, models) => {

          this.respond(err || models, [{'user': ['id', 'name']}, {'group': ['id', 'name']}]);

        });

    }

    show() {
 
      UserGroup.find(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

    create() {

      let user_id;
      let group_id;
      let user_group;
      const userName = { name: this.params.body.userName };
      const groupName = { name: this.params.body.groupName };

      User.findOrCreateBy("name", userName, (err, user) => {
        if ( err ) { return this.respond(err); } // make sure your handle error
        user_id = user.get('id');

        Group.findOrCreateBy("name", groupName, (err, group) => {
          if ( err ) { return this.respond(err); } // every step!!!
          group_id = group.get('id');

          user_group = { user_id, group_id };
          
          UserGroup.create(user_group, (err, userGroup) => {
            this.respond(err || userGroup);
          });

        });

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
