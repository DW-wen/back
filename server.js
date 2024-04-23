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

const express = require('express')
const app = express()
const port = 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(express.json({limit: '1mb'}));


const val = {
  info: 'hi bro',
  sound: 'yo man'
};
app.get('/info', (req, res) => {
  //const {dynamic} = req.params; // 解除 object 狀態
  //const {key} = req.query; // params: jame // query = key

  //console.log(dynamic, key);
    res.status(200).json(val); // 回傳
});


app.post('/', (req, res) => {
  const parcel = req.body; // 獲得前端資料
  console.log(parcel.test, parcel.input);
  
  if(!parcel){
    return res.status(500).send({status: failed});
  }
  res.status(200).send({status: 'received'});
});

app.listen(port, () => {
  
  console.log(`Server has on port: ${port}`)
});