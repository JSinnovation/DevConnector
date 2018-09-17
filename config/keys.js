 /* module.exports = {
  mongoURI:"mongodb://Yaakov:Yaakov11@ds149252.mlab.com:49252/skyhawkconnector",
  secretOrKey:"somethingsecret"
};  */
/* module.exports = {
  mongoURI: "mongodb://localhost:27017/devconnector",
  secretOrKey: "somethingsecret"
};
  */
 module.exports = {
  mongoURI: 
  process.env.MONGODB,
  //'mongodb://Happy:Happy613@ds149252.mlab.com:49252/skyhawkconnector',
  //secretOrKey: 'secret'
  secretOrkey: process.env.SECRET
};