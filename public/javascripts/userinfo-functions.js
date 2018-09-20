const mysql = require('mysql');
// MySQLとのコネクションの作成
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'mrtry',
    password : 'mrtry',
    database: 'stock_db'
});
// table名
const user_inofo_table = 'user_info';
const sale_table = 'sale';

// colum名
const user_info_column = ['id','mail','property','name','good','addr'];
const sale_column = ['id','sales'];

module.exports.userinfo = function(req,res){

    sql = 'SELECT * FROM ' + user_inofo_table + ';';
    // // nameがあるか
    // if(req.query.name == undefined){
    //     sql = 'SELECT * FROM ' + stock_table + ' order by ' + stock_column[0] + ';';
    // }else{
    //     sql = 'SELECT * FROM ' + stock_table + ' where ' + stock_column[0] + '=' + '\''+ req.query.name +'\'' + ';'; 
    // }
    console.log(sql);

    str = ''
    connection.query(sql,function (error, results, fields) {
        if (error) throw error;
        // let string= JSON.stringify(results);
        // let json =  JSON.parse(string);
        // for(let i = 0; i<json.length; i++){
        //     str = str + json[i].name + ': ' + json[i].amount + '\n';
        // }
        console.log(str)
        res.send(str)
        return str;
    });
}

// module.exports.addstock = function(req){
//     let amount;
//     console.log(req.query.name)
//     // nameがないとERROR
//     if(req.query.name == undefined){
//         return 'ERROR';
//     }
//     // amountがあるか
//     if(req.query.amount == undefined){
//         amount = 1
//     }else{
//         amount = req.query.amount;
//         if(!Number.isInteger(Number(amount))||Number(amount)<0){
//             return 'ERROR';
//         }
//     }
//     // let set = ' set ' + stock_column[1] + '='+amount + ' where ' + stock_column[0] + '=' + '\''+ req.query.name +'\'' + ''
//     // let update = 'update ' + stock_table + set;

//     let values = ' values(' + '\''+ req.query.name +'\'' + ',' + amount + ')'
//     let select = 'select * from ' + stock_table + ' where ' + stock_column[0] + '=' + '\''+ req.query.name +'\'' + ''
//     // let not_exists = ' where not exists (' + select + ')';
//     let insert = 'insert into ' + stock_table + values;
//     let update = ' on duplicate key update ' + stock_column[1] + '=' + stock_column[1] + '+' + amount;
//     let sql = insert + update + ';';
//     console.log(sql)
//     connection.query(sql,function (error, results, fields) {
//         if (error) throw error;
//     });
//     return '';
// }

// module.exports.addstock = function(req){
//     let amount;
//     console.log(req.query.name)
//     // nameがないとERROR
//     if(req.query.name == undefined){
//         return 'ERROR';
//     }
//     // amountがあるか
//     if(req.query.amount == undefined){
//         amount = 1
//     }else{
//         amount = req.query.amount;
//         if(!Number.isInteger(Number(amount))||Number(amount)<0){
//             return 'ERROR';
//         }
//     }
//     // let set = ' set ' + stock_column[1] + '='+amount + ' where ' + stock_column[0] + '=' + '\''+ req.query.name +'\'' + ''
//     // let update = 'update ' + stock_table + set;

//     let values = ' values(' + '\''+ req.query.name +'\'' + ',' + amount + ')'
//     let select = 'select * from ' + stock_table + ' where ' + stock_column[0] + '=' + '\''+ req.query.name +'\'' + ''
//     // let not_exists = ' where not exists (' + select + ')';
//     let insert = 'insert into ' + stock_table + values;
//     let update = ' on duplicate key update ' + stock_column[1] + '=' + stock_column[1] + '+' + amount;
//     let sql = insert + update + ';';
//     console.log(sql)
//     connection.query(sql,function (error, results, fields) {
//         if (error) throw error;
//     });
//     return '';
// }

// module.exports.checkstock = function(req,res){
//     // nameがあるか
//     if(req.query.name == undefined){
//         sql = 'SELECT * FROM ' + stock_table + ' order by ' + stock_column[0] + ';';
//     }else{
//         sql = 'SELECT * FROM ' + stock_table + ' where ' + stock_column[0] + '=' + '\''+ req.query.name +'\'' + ';'; 
//     }
//     console.log(sql);

//     str = ''
//     connection.query(sql,function (error, results, fields) {
//         if (error) throw error;
//         let string=JSON.stringify(results);
//         let json =  JSON.parse(string);
//         for(let i = 0; i<json.length; i++){
//             str = str + json[i].name + ': ' + json[i].amount + '\n';
//         }
//         console.log(str)
//         res.send(str)
//         return str;
//     });
// }

// module.exports.sell = function(req){
//     let name = req.query.name;
//     let amount = req.query.amount;
//     let sql = '';
//     // nameがないとERROR
//     if(name == undefined){
//         return 'ERROR';
//     }
//     // amountがあるか
//     if(amount == undefined){
//         amount = 1
//     }else{
//         amount = amount;
//         if(!Number.isInteger(Number(amount))||Number(amount)<0){
//             return 'ERROR';
//         }
//     }
//     let set = ' set ' + stock_column[1] + '=' + stock_column[1] + '-' + amount + ' where ' + stock_column[0] + '=' + '\''+ req.query.name +'\'' + ''
//     let update = 'update ' + stock_table + set;
//     sql = update + ';';

//     // priceはあるか
//     if(req.query.price == undefined){
        
//     }else{
//         price = req.query.price;
//         if(Number(amount)<0){
//             return 'ERROR';
//         }
//         let values = ' values(1' + ',' + price*amount + ')'
//         let insert = 'insert into ' + sale_table + values;
//         let update = ' on duplicate key update ' + sale_column[1] + '=' + sale_column[1] + '+' + price*amount;
//         sql = insert + update + ';';
//     }

//     connection.query(sql,function (error, results, fields) {
//         if (error) throw error;
//     });
//     return 'a';
// }

// module.exports.checksales = function(req,res){
//     sql = 'SELECT * FROM ' + sale_table + ';'; 

//     connection.query(sql,function (error, results, fields) {
//         if (error) throw error;
//         let string=JSON.stringify(results);
//         let json =  JSON.parse(string);
//         let str = 'sales: '+json[0].sales;
//         res.send(str)
//         return '';
//     });
// }

// module.exports.deleteall = function(){
//     sql = 'delete from ' + stock_table + ';'; 
//     console.log(sql)
//     connection.query(sql,function (error, results, fields) {
//         if (error) throw error;
//     });
//     sql = 'delete from ' + sale_table + ';'; 
//     console.log(sql)
//     connection.query(sql,function (error, results, fields) {
//         if (error) throw error;
//     });
//     return '';
// }
