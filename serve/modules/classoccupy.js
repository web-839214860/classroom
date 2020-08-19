var moment = require('moment');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        'classoccupy',
        {
            o_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            c_id: {
                type: DataTypes.STRING,
                field: 'c_id'
            },
            t_id: {
                type: DataTypes.STRING,
                field: 't_id'
            },
            c_name: {
                type: DataTypes.STRING,
                field: 'c_name'
            },
            c_person: {
                type: DataTypes.STRING,
                field: 'c_person'
            },
            c_media: {
                type: DataTypes.STRING,
                field: 'c_media'
            },
            t_useTime: {
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
        }
        }
        );
}