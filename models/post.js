module.exports = function (sequelize, DataTypes) {
    const Post = sequelize.define("Post", {
        post_title: {
            type: DataTypes.STRING,
        },
        post_body: {
            type: DataTypes.STRING,
        }
    });
    return Post;
};