const Sequelize = require('sequelize');

class User extends Sequelize.Model {
  static initiate(sequelize) {
    User.init({
      name: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true,
      },
      age: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      married: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      comment: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      created_at: { 
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    }, {
      sequelize,
      timestamps: false, //true면 createdAt과 updatedAt이 자동으로 생성됨
      underscored: false,
      modelName: 'User',
      tableName: 'users',
      paranoid: false,  //soft delete(특정 기간동안 저장되었다가 삭제됨)
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  // user:comment = 1:N (hasMany로 표현)
  // foreignKey: 남의키(comment의 commenter 컬럼이 내 id를 참조하고있음)
  // targetKey: 나의키
  static associate(db) {
    db.User.hasMany(db.Comment, { foreignKey: 'commenter', sourceKey: 'id' });
  }
};

module.exports = User;
