var moment = require('moment');
module.exports = function(sequelize,DataTypes){
    return sequelize.define(
        'user',
        {
            id:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            u_id:{
                type: DataTypes.STRING,
                field: 'u_id'
            },
            u_password:{
                type: DataTypes.STRING,
                field: 'u_password'
            },
            u_name:{
                type: DataTypes.STRING,
                field: 'u_name'
            },
            u_role:{
                type:DataTypes.INTEGER,
                field:'u_role'
            },
            solt:{
                type: DataTypes.STRING,
                field: 'solt'
            },
            u_sex:{
                type: DataTypes.INTEGER,
                field: 'u_sex'
            },
            u_birthday:{
                type:DataTypes.DATE,
                field:'u_birthday',
                get() {
                    return moment(this.getDataValue('u_birthday')).format('YYYY-MM-DD');
                }
            },
            u_position:{
                type: DataTypes.STRING,
                field: 'u_position'
            }
        }
    );
}

