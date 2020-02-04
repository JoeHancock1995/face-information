var request = require("request");

var options = {
  method: 'POST',
  url: 'https://faceplusplus-faceplusplus.p.rapidapi.com/facepp/v3/detect',
  qs: {
    return_attributes: 'gender,age,smiling,ethnicity,beauty,eyegaze',
    image_url: 'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/12342862_10153177259895906_7208783592759744741_n.jpg?_nc_cat=108&_nc_ohc=9HxsyrWAkToAX9wIreh&_nc_ht=scontent-dfw5-2.xx&oh=ad5a362adb59ed816b20a7420791bb1d&oe=5EC84E12'
  },
  headers: {
    'x-rapidapi-host': 'faceplusplus-faceplusplus.p.rapidapi.com',
    'x-rapidapi-key': 'db35a6e934mshcd2113b29a0d16ep1396c3jsn103d25abe78a',
    'content-type': 'application/x-www-form-urlencoded'
  },
  form: {}
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);
  
	console.log(body);
});

// const axios = require("axios");

// axios({
//     "method":"POST",
//     "url":"https://faceplusplus-faceplusplus.p.rapidapi.com/facepp/v3/detect",
//     "headers":{
//     "content-type":"application/x-www-form-urlencoded",
//     "x-rapidapi-host":"faceplusplus-faceplusplus.p.rapidapi.com",
//     "x-rapidapi-key":"db35a6e934mshcd2113b29a0d16ep1396c3jsn103d25abe78a"
//     },"params":{
//     "return_attributes":"gender,age,smiling,emotion,beauty",
//     "image_url":"https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/12342862_10153177259895906_7208783592759744741_n.jpg?_nc_cat=108&_nc_ohc=9HxsyrWAkToAX9wIreh&_nc_ht=scontent-dfw5-2.xx&oh=ad5a362adb59ed816b20a7420791bb1d&oe=5EC84E12"
//     },"data":{
    
//     }
//     })
//     .then((response)=>{
//       console.log(response)
//     })
//     .catch((error)=>{
//       console.log(error)
//     })