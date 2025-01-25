'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NotificationTicket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  NotificationTicket.init({
    subject:{
      type: DataTypes.STRING,
      allwoNull: false,
    },
    content:{
      type: DataTypes.STRING,
      allwoNull: false,
    } ,
    recepientEmail:{
      type: DataTypes.STRING,
      allwoNull: false,
    },
    status:{
      type: DataTypes.STRING,
      allwoNull: false,
      values:["PENDING","SUCCESS","FAILED"],
      defaultValue:"PENDING"
    },
    notificationTime:{
      type: DataTypes.DATE,
      allowNull: false
    } 
  }, {
    sequelize,
    modelName: 'NotificationTicket',
  });
  return NotificationTicket;
};