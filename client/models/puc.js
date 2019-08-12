module.exports = function (sequelize, DataTypes) {
    const Puc = sequelize.define("Puc", {
        puc_name: {
            type: DataTypes.String,
            allowNull: false
        }
    });
    return Puc;
};