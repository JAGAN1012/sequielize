const Sequelize=require('sequelize');
const { toDefaultValue } = require('sequelize/lib/utils');
const seq=new Sequelize('sequelize','root','root',{
    
    dialect:'mysql'
});
const {DataTypes}=Sequelize;


    seq.authenticate().then(()=>{
        console.log("connection succefully");
    }).catch((error)=>{
        console.log(" not connected",error);
    })
    console.log("another")  
   
    const User = seq.define('user', {
       user_id :{
        type:  DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
          
        },
        username: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING,
          
        },
        name: {
          type: DataTypes.INTEGER,
         defaultValue:21
        },
        student:{
            type: DataTypes.BOOLEAN

        }
      },{
          freezeTableName:true,
          timestamps:false
      });

      User.sync({alter:true}).then(()=>{
        const user =User.build({ username:"MANI",password:"toy",age:23,student:true})
       return user.save();
      }).then((data)=>{
        console.log(data.toJSON());

         console.log("value inserted");
      }).catch((err)=>{
        console.log("table not created")
      })