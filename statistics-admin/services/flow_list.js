const { querySql, queryOne } = require('../db')

function login(username, password) {
    return querySql(`select * from admin_user where username='${username}' and password = '${password}'`)
}

function findUser(username) {
    return queryOne(`select id, username, nickname, role, avatar from admin_user where username='${username}'`)
}

function findFlowList() {
    return querySql(`select * from flow_list`)
}

module.exports = {
    login,
    findUser,
    findFlowList
}


// CREATE TABLE `flow_list` (
//     `Id` int(11) NOT NULL AUTO_INCREMENT,  
//     `province` varchar(18) NOT NULL unique,
//     `area` varchar(18) NOT NULL,
//     `taday_pv` int(18) NOT NULL,
//     `taday_uv` int(18) NOT NULL,
//     `taday_ip` int(18) NOT NULL,
//     `target_uv` int(18) NOT NULL,
//     `sum_uv` int(18) NOT NULL,
//     `time` datetime NOT NULL,
//     `month` varchar(8) NOT NULL,
// PRIMARY KEY (`Id`)
// ) ENGINE=InnoDB AUTO_INCREMENT=1018 DEFAULT CHARSET=utf8;
