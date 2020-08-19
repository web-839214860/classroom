var moment = require('moment');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        'classtable',
        {
            t_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            c_id: {
                type: DataTypes.STRING,
                field: 'c_id'
            },
            t_name: {
                type: DataTypes.STRING,
                field: 't_name'
            },
            t_contact:{
                type: DataTypes.STRING,
                field: 't_contact'
            },
            t_joinPeople:{
                type: DataTypes.STRING,
                field: 't_joinPeople'
            },
            t_useReason:{
                type: DataTypes.STRING,
                field: 't_useReason'
            },
            t_media:{
                type: DataTypes.STRING,
                field: 't_media'
            },
            u_id: {
                type: DataTypes.STRING,
                field: 'u_id'
            },
            t_user:{
                type: DataTypes.STRING,
                field: 't_user'
            },
            t_class:{
                type: DataTypes.STRING,
                field: 't_class'
            },
            t_result:{
                type: DataTypes.STRING,
                field: 't_result'
            },
            t_time: {
                type: DataTypes.DATE,
                field: 't_time',
                get() {
                    return moment(this.getDataValue('t_time')).format('YYYY-MM-DD HH:mm:ss');
                }
            },
            t_useTime:{
                type: DataTypes.DATE,
                field: 't_useTime',
                get() {
                    return moment(this.getDataValue('t_useTime')).format('YYYY-MM-DD HH:mm:ss');
                }
            },
            t_endTime: {
                type: DataTypes.DATE,
                field: 't_endTime',
                get() {
                    return moment(this.getDataValue('t_endTime')).format('YYYY-MM-DD HH:mm:ss');
                }
            },
            user_id:{
                type: DataTypes.STRING,
                field: 'user_id'
            }
        }
    );
}