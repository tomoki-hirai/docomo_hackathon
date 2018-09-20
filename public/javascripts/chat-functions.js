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
        sql = 'SELECT * FROM ' + thread_list_table + ' where ' + thread_list_column[0] + '=' + '\''+ req.query.id +'\'' + ';'; 
    }
    if(req.query.tag_id == undefined){
        res.status(404).send('Sorry cant find that!');
        sql = 'SELECT * FROM ' + thread_list_table + ' where ' + thread_list_column[1] + '=' + '\''+ req.query.tag_id +'\'' + ';'; 
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


module.exports.thread = function(req,res){
    if(req.query.thread_no == undefined){
        res.status(404).send('Sorry cant find that!');
    }
    sql = 'SELECT * FROM ' + thread_table + ' where ' + thread_column[0] + '=' + '\''+ req.query.thread_no +'\'' + ';'; 
    console.log(sql);

    str = ''
    connection.query(sql,function (error, results, fields) {
        if (error) throw error;
        console.log(str)
        res.send(results)
        return str;
    });
}