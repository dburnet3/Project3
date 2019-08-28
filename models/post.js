module.exports = function (sequelize, DataTypes) {
    const Post = sequelize.define("Post", {
        post_title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        post_body: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Post;
};