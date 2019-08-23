module.exports = function (sequelize, DataTypes) {
    const Activity = sequelize.define("Activity", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        time_slots: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dow: {
            type: DataTypes.STRING,
            allowNull: false
        },
        taken: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        }
    });
    return Activity;
};