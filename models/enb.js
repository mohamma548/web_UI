var mongoose=require('mongoose');
var enb_schema= mongoose.enb_schema;
var schema=new enb_schema({
  imagepath:{ type:String,required:true},
  eNB_name:{ type:String,required:true},  
  description:{ type:String,required:true},
  location_ip:{ type:String,required:true},
});

model.exports=mongoose.model('enb',schema);
