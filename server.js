

const val = [{
  num: 3,
  price: 50,
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




/*
//本地端存儲寫法
const Datastore = require('nedb')
// 建立本端資料庫
const database = new Datastore({  // 此法較穩定
  filename: './dataStore/database.db',
  autoload: true
});

//另一種 nedb 新增寫法
//const database = new name("db.db") // 這樣會自動創建
//database.loadDatabase();



// 插入
databaseInsert(val);
function databaseInsert(parameter) { // parameter 是傳入的值
  database.insert(parameter); 
}

// 搜尋
database.find({
  status: 1 // 查詢項目
}, (err, output) => {
  if(err){
    console.log(err);
  }
  output.forEach((element, index) => {
    console.log(element); // 輸出找到的 typrof object // forEach 為一直跑 object 陣列，直到全部跑完
  });
});

//removeData();
function removeData (){
  database.remove({

  }, (err, output) => {

  });
}
*/

const cors = require('cors'); // 一個前後端連接協定，詳細功能不了解，只知道可以跑
const express = require('express');
require('dotenv').config();
const https = require('https');
const fs = require('fs');
const { name } = require('nodeman/lib/mustache');
const app = express()
const port =  3000 ; // 存在 dotenv，只知道可以跑，其他就不知道了
//const portNotLocal = process.env.PORT; // 這一行是在處理外接網站實用的，暫且不用管


app.use(cors());
app.use(express.static('public')); // 選取並僅能使用特定資料夾，資安方面才這樣搞
app.use(express.json()); // 導入 json 函式
app.use(express.json({limit: '1mb'})); // 限制輸入大小


let test_info = JSON.stringify(val);


/*
// 以下為 mongodb 處理
// 尚未有 delete 功能

// 參考資料 :https://reurl.cc/ez6dYW

const Hi = require('./models/blog');
const mongoose = require('mongoose');
const mongodbURL = 'mongodb+srv://School_Fair_BackEnd:user1234@cluster0.cmjndt1.mongodb.net/school_data';
mongoose.connect(mongodbURL)
  .then((result) =>  app.listen(port, () => {
    console.log(`Server has on port: ${port} \nServer is connected to MongoDB`) // 連接資料庫成功時，會跳出連接伺服器成功
  })) 
  .catch((err) => console.log(err) );

const blog = new Hi({
  title: 'adfbvdc',
  snippet: 'b',
  body: 'abcd',
  status: 5
});
// 儲存進入 mongodb

function saveMongodb (){

  blog.save()
  .then((result) => { // 正確處理
    console.log(result);
  })
  .catch((err) => { // 錯誤處理
    console.log(err);
  });

}
//saveMongodb();

// 尋找 mongodb 的內容
function findMongodb () {
// 注意是用 Hi 並非 blog，且 find 裡面包的是 object，他可以包很多個查詢值，也可以只包一個。 find 會跳出所有察遜到的鍵值

  Hi.find({status: 5, body: 'abcd'}) 
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  })

}
//findMongodb();

//刪除 mongodb 內容
function removeMongodb () { // 這功能好像還有 remove 無法使用，但 deleteMany 和 deleteOne 可以使用
  Hi.deleteMany({status: 5})
  .then((result) => {
    console.log('success');
  })
  .catch((err) => {
    console.log(err);
  })
}
//removeMongodb();

*/






// 先把他註解掉的原因，是因為上面的 mongodb 要用，mongodb 拿下面註解程式碼，當成測試他有順利抓到 mongodb 資歷庫

app.listen(port, () => {
  console.log(`Server has on port: ${port}`)
});



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
// 話說下面有很多要修改的值，然後我忘記改 :)
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
