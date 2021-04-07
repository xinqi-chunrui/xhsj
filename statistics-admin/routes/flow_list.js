const { log } = require('debug');
var express = require('express');
var router = express.Router();
const Result = require('../modules/Result');
const { findFlowList } = require('../services/flow_list')

/* GET users listing. */
router.get('/', (req, res, next) => {
    res.send('success!!');
});


router.post('/list', (req, res, next) => {
    findFlowList().then(list => {
        console.log(list)
        if (list) {
            new Result(list, '查询成功').success(res)
        } else {
            new Result('查询失败').fail(res)
        }
    })
});

module.exports = router;
