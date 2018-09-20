const mysql = require('mysql');
// MySQLとのコネクションの作成
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'mrtry',
    password : 'mrtry',
    database: 'POLITICS_DB'
});
// table名
const thread_list_table = 'thread_list';
const thread_table = 'thread';

// colum名
const thread_list_column = ['id','tag_id','property_id','thread_no'];
const thread_column = ['thread_no','time','id','replay','text'];

module.exports.thread_list = function(req,res){
    if(req.query.id == undefined){
        res.status(404).send('Sorry cant find that!');
    }
    sql = 'SELECT * FROM ' + thread_list_table + ' where ' + thread_list_column[0] + '=' + '\''+ req.query.id +'\'' + ';'; 
    console.log(sql);

    str = ''
    connection.query(sql,function (error, results, fields) {
        if (error) throw error;
        console.log(str)
        res.send(results)
        return str;
    });
}


module.exports.userinfo = function(req,res){
    if(req.query.addr != undefined){
        if(req.query.property_id != undefined){
            // 住所と立候補者が指定されている
            sql = 'SELECT * FROM ' + user_inofo_table + ' where ' + user_info_column[5] + '=' + '\''+ req.query.addr +'\'' + ' and ' 
                + user_info_column[2] + '=' + '\''+ req.query.property_id +'\'' + ';'; 
            // sql = 'SELECT * FROM ' + stock_table + ' order by ' + stock_column[0] + ';';
        }else{
            // 住所だけが指定されている
            sql = 'SELECT * FROM ' + user_inofo_table + ' where ' + user_info_column[5] + '=' + '\''+ req.query.addr +'\'' + ';'; 
        }
    }else{
        if(req.query.property_id != undefined){
            // 立候補者だけが指定があるか
            sql = 'SELECT * FROM ' + user_inofo_table + ' where ' + user_info_column[2] + '=' + '\''+ req.query.property_id +'\'' + ';'; 
        }else{
            // 何も指定なし
            sql = 'SELECT * FROM ' + user_inofo_table + ';';
        }
    }
    console.log(sql);

    str = ''
    connection.query(sql,function (error, results, fields) {
        if (error) throw error;
        console.log(str)
        res.send(results)
        return str;
    });
}