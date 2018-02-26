var Enbs= require('../models/enb');
var mongoose= require('mongoose');
mongoose.connect('localhost:27017/web_int');
var enb= [new Enb({
  imagepath:'https://cdn1.iconfinder.com/data/icons/pixel-perfect-at-16px-volume-1/16/1026-512.png',
  eNB_name:'eNB1',
  description:'sammple mobile eNBs',
  location_ip:'192.168.22.13'
}),
new Enb({
  imagepath:'https://cdn1.iconfinder.com/data/icons/pixel-perfect-at-16px-volume-1/16/1026-512.png',
  eNB_name:'eNB2',
  description:'sammple mobile eNBs',
  location_ip:'192.168.22.13'
}),
new Enb({
  imagepath:'https://cdn1.iconfinder.com/data/icons/pixel-perfect-at-16px-volume-1/16/1026-512.png',
  eNB_name:'eNB3',
  description:'sammple mobile eNBs',
  location_ip:'192.168.22.13'
}),
new Enb({
  imagepath:'https://cdn1.iconfinder.com/data/icons/pixel-perfect-at-16px-volume-1/16/1026-512.png',
  eNB_name:'eNB4',
  description:'sammple mobile eNBs',
  location_ip:'192.168.22.13'
})];

temp=0;
for (var i = 0; i < enb.length; i++) {
  enb[i].save(function(err,res){
    temp ++;
    if(temp==enb.length){
      exit();
    }
  });
}
function exit(){
  enb.disconnect();
}
