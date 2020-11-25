const e = require('express');
var express=require('express');
var app=express();
var port=8900;
const path=require('path');


var restaurent=
[
    {
        "_id" : "1",
        "name" : "Gulab",
        "city_name" : "Delhi",
        "city":"1",
        "area":"11",
        "locality" : "Pitampura, New Delhi",
        "thumb": "https://b.zmtcdn.com/data/pictures/chains/3/6303/640252389ddc3f264dd0e9f2741e73cd.jpg",
        "cost": 450, 
        "address":"Shop 1, Plot D,  Pitampura, New Delhi Complex, Chincholi, Delhi-110006, Delhi",
    },
    {
        "_id" : "2",
        "name" : "Pandit Ji Paratha Hut",
        "locality" : "Ashok Vihar Phase 2",
        "city name" : "Delhi",
        "city":"1", 
        "area":"12",
        "address":"Shop 44, Plot C,  Ahok Vihar Phase 2,Chincholi, Delhi-110006, Delhi",
        "thumb" : 
        "https://b.zmtcdn.com/data/pictures/chains/3/6303/640252389ddc3f264dd0e9f2741e73cd.jpg",
        "cost":230,
        "contact_number":"45352465",
       
    },
    {
        "_id" : "3",
        "name" : "Food Adda",
        "locality" : "Borivali West",
        "city name" : "Mumbai",
        "city":"2", 
        "area":"21",
        "address":"Borivali West, Mumbai-210006, Mumbai",
        "thumb" : 
        "https://b.zmtcdn.com/data/pictures/7/18690357/0df7f4ca0c645a68a1657b1e69b015fa.jpg",
        "cost": 530,
        "contact_number":"467564",
    },
    {
        "_id" : "4",
        "name" : "Apna Punjab",
        "locality" : "Magarpatta",
        "city name" : "Pune",
        "city":"3", 
        "area":"31",
        "address":"Borivali West, Mumbai-210006, Mumbai",
        "thumb" : 
        "https://b.zmtcdn.com/data/res_imagery/6508401_RESTAURANT_21a925c42f2f93c9709e1945b9eae56f.jpg",
        "cost":670,
        "contact_number":"6508401"
    },
    {
        "_id" : "5",
        "name" : "Empire Restaurant",
        "locality" : "Rajajinagar",
        "city name" : "Bangalore",
        "city": "4",
        "area":"41",
        "address":"Rajajinagar, Bangalore-430006, Bangalore",
        "thumb": "https://b.zmtcdn.com/data/pictures/1/50471/bcf68da39dcfb0fe5bcfb742c337385e.jpg",
        "cost":230,
        "contact_number":"8731537",
        
    }
]
  
var city=[
    {
        "_id":1,
        "name": "Pitampura, New Delhi",
	    "city_name":"Delhi",
        "city":1,
        "area":11,
        "country_name" :"India"
    },
    {
        "_id": 2,
        "name": "Ashok Vihar Phase 2",
        "city_name":"Delhi",
        "city": 1,
        "area":12,
        "country_name":"India"
    },
    {
        "_id": 3,
        "name": "Laxmi Nagar",
        "city_name":"Delhi",
        "city": 1,
        "area":13,
        "country_name":"India"
    },
    {
        "_id": 4,
        "name": "Lajpat Nagar 2",
        "city_name":"Delhi",
        "city": 1,
        "area":14,
        "country_name":"India"
    },
    {
        "_id": 5,
        "name": "Borivali West",
        "city_name":"Mumbai",
        "city": 2,
        "area":21,
        "country_name":"India"
    },
    {
        "_id": 6,
        "name": "Mira Road",
        "city_name":"Mumbai",
        "city": 2,
        "area":22,
        "country_name":"India"
    },
    {
        "_id": 7,
        "name": "Sion",
        "city_name":"Mumbai",
        "city": 2,
        "area":23,
        "country_name":"India"
    },
    {
        "_id": 8,
        "name": "Mohammad Ali Road",
        "city_name":"Mumbai",
        "city": 2,
        "area":24,
        "country_name":"India"
    },
    {
        "_id": 9,
        "name": "Magarpatta",
        "city_name":"Pune",
        "city": 3,
        "area":31,
        "country_name":"India"
    },
    {
        "_id": 10,
        "name": "Koregaon Park",
        "city_name":"Pune",
        "city": 3,
        "area":32,
        "country_name":"India"
    },
    {
        "_id": 11,
        "name": "Rajajinagar",
        "city_name":"Bangalore",
        "city": 4,
        "area":41,
        "country_name":"India"
    },
    {
        "_id": 12,
        "name": "Koramangala 6th Block",
        "city_name":"Bangalore",
        "city": 4,
        "area":42,
        "country_name":"India"
    },
    {
        "_id": 13,
        "name": "Sector70, Chandigarh",
	    "city_name":"Chandigarh",
        "city": 5,
        "area":51,
        "country_name": "India"
    },
    {
        "_id": 14,
        "name": "Sector 28, Chandigarh",
	    "city_name":"Chandigarh",
        "city": 5,
        "area":52,
        "country_name": "India"
    }
]

app.use(express.static(path.join(__dirname,'build')));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'build/index.html'))
});

app.get('/city',(req,res) => {
    res.send(city)
});

app.get('/rest',(req,res) => {
  res.send(restaurent)
});

app.listen(port,(err)=>{
    if(err) throw err;
    console.log(`Server is running on port ${port}`)
})