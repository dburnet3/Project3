module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {

        primaryUser: {
            type: DataTypes.STRING,
            allowNull: true
        },
        secondaryUser: {
            type: DataTypes.STRING,
            allowNull: true
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return User;
};