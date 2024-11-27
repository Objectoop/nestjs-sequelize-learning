'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('tasks', {
      id : {
        type: Sequelize.DataTypes.UUID,
        primaryKey: true,
        allowNull : false
      },
      title : {
        type: Sequelize.STRING,
        allowNull : false
      },
      description : {
        type: Sequelize.STRING,
      },
      status : {
        type : Sequelize.DataTypes.ENUM(['in_progress','completed','pending']),
        defaultValue : 'pending'
      },
      userId : {
        type: Sequelize.DataTypes.INTEGER,
        allowNull : false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('tasks');
  }
};
