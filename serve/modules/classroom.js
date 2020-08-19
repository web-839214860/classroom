module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        'classroom',
        {
            c_id: {
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            c_name: {
                type: DataTypes.STRING,
                field: 'c_name'
            },
            c_person: {
                type: DataTypes.INTEGER,
                field: 'c_person'
            },
            c_use:{
                type: DataTypes.STRING,
                field:'c_use'
            },
            c_position:{
               type:DataTypes.STRING,
               field:'c_position'
            },
            c_media:{
                type: DataTypes.INTEGER,
                field: 'c_media'
            }
        }
    );
}