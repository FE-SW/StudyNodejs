const Sequelize = require('sequelize');

class Comment extends Sequelize.Model {
  static initiate(sequelize) {
    Comment.init({
      comment: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: Sequelize.NOW,
      },
    }, {
      sequelize,
      timestamps: false,
      modelName: 'Comment',
      tableName: 'comments',
      paranoid: false,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    });
  }

  // user:comment = 1:N (belongsTo로 표현)
  // belongsTo가 있는 테이블에 컬럼이 생김
  // foreignKey: 나의키(나의 commenter 컬럼이 남의 id를 참조하고있음)
  // targetKey: 남의키
  static associate(db) {
    db.Comment.belongsTo(db.User, { foreignKey: 'commenter', targetKey: 'id' }); 
  }
};

module.exports = Comment;
