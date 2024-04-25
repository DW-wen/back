/* 本地端存儲寫法
const Datastore = require('nedb')
const testDatabase = {
  name: 'Tom',
  pay: 20
};
const database = new Datastore({
  filename: './dataStore/database.db',
  autoload: true
});



function databaseInsert() {
  database.insert(testDatabase);
}
//databaseInsert();
database.find({}, (err, output) => {
  if(err){
    console.log(err);
  }
  console.log(output[0].name);
});
*/
/*
另一種 nedb 新增寫法
const database = new name("db.db") // 這樣會自動創建
database.loadDatabase();
*/










const cors = require('cors'); // 一個前後端連接協定，詳細功能不了解，只知道可以跑
const express = require('express');
require('dotenv').config();
const https = require('https');
const fs = require('fs');
const app = express()
const port =  3000 ; // 存在 dotenv，只知道可以跑，其他就不知道了
//const portNotLocal = process.env.PORT;
app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use(express.json({limit: '1mb'}));

app.listen(port, () => {
  
  console.log(`Server has on port: ${port}`)
});



const val = [{
  num: 3,
  price: 30,
  time: {
    hour: 1,
    min: 1,
    sec: 1,
  },
  status: 1,
  order: 1
  }, 
  {
    num: 4,
    price: 30,
    time: {
      hour: 1,
      min: 1,
      sec: 1,
    },
    status: 1,
    order: 2
    }
]
;


let test_info = JSON.stringify(val);





app.get('/info', (req, res) => {
  //const {dynamic} = req.params; // 解除 object 狀態
  //const {key} = req.query; // params: jame // query = key

  //console.log(dynamic, key);
    res.status(200).json(test_info); // 回傳
});


app.post('/', (req, res) => {
  const parcel = req.body; // 獲得前端資料
  console.log(parcel.test, parcel.input);
  
  if(!parcel){
    return res.status(500).send({status: failed});
  }
  res.status(200).send({status: 'received'});
});

/*
資料儲存方法
// initialize webpage
// front -> back
let info_sgin = {
  account: "207", // 包成 string
  position: "chef", // 職位
  password: "12345678" // string type
};

// back -> front
let info_webpage = {
  webpage_data: "<html></html>" 
  // i'll response webpage for you, 
  // you save webpage in localStorage
};


// sending info between front and back
let info_order = {
  account: "207", //class name
  position: "position", // 職位 -> ex: 飲料製作 || 熱狗堡處理

  // 餐點名稱_售價
  expense: 40, // total cost
  beverages: {
    // example
    soda_20: 1, // send me in digit
    juice_35:2
  },
  dishes: {
    // example
    marshmellow_10: 2, // send me in digit
    instant_oodle_35: 0 
  },

  status: "in order / finished", // not yet -> in order, finished -> finished
  orderNumber: 1, // send me in digit
  orderTime: {  // 先在前端將時間設定好
    date: "2024/5/11",
    time: "10:20",
    estimated_finished_time: "10:25",
    estimated_time: 5 // save in digit
  }, 
  
};
*/
