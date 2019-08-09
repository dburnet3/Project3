module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {

        user_type: {
            type: DataTypes.STRING,
            allowNull: true
        },
        user_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        user_password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return User;
};