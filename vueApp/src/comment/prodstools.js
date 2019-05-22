let prods = {}; //向外暴露的对象

let stroage = window.localStorage;

//将数据存储到localstroage中
prods.cunchu = function (data) {
    stroage.setItem("data", JSON.stringify(data)); //存储之前先转换为字符串
}

//取出localstroage数据
let local = JSON.parse(stroage.getItem("data") || '{}');

//增加  {id:num}
prods.add = function (obj) {

    //如果本地存储里面有
    if(local[obj.id]){
        local[obj.id] += obj.num;
    }else{
        local[obj.id] = obj.num;
    }

    this.cunchu(local);  //把数据存到localstroage
}

//删除
prods.delete = function (id) {
    delete local[id];

    this.cunchu(local);
}

// 查询/获取 全部
prods.getAll = function () {
    return local;
    // JSON.parse(stroage.getItem("data") || '{}');
}

//查询  获取总数
prods.getAllnum = function () {
    let sum = 0;

    for(let id in local){
        sum += local[id];
    }

    return sum;
}

export default prods;