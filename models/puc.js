module.exports = function (sequelize, DataTypes) {
    const Puc = sequelize.define("Puc", {
        puc_name: {
            type: DataTypes.STRING,
            allowNull: true

        }
    });
    return Puc;
};