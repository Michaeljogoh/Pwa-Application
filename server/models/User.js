module.exports = (sequelize , DataTypes ) =>{
  
     const Users = sequelize.define("Users",{
        firstname:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastname:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        mail:{
            type: DataTypes.STRING,
            allowNull: false,
            
        },
     })

     return Users

};

