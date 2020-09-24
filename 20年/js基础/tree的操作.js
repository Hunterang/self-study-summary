//深度遍历将所有节点全部返回
function dfs(tree) {
    let result = [];

    if (!tree.href && !tree.src) {} else {
        result.push(tree);
    }

    if (tree.children && tree.children.length) {
        for (var i = 0; i < tree.children.length; i++) {
            result = result.concat(this.dfs(tree.children[i]));
        }
    }
    return result;
}
//广度遍历将所有节点全部返回
function bfs(tree) {
    let result = [];
    let arr = [tree];
    while (arr.length) {
        let start = arr.shift();
        result.push(start);
        if (start.children && start.children.length) {
            arr.push(...start.children);
        }
    }
}
//添加方法
function mountAdd(tree, type = "approvarAmount") {
    if (!tree) return;
    // console.log(tree);
    if (tree.children && tree.children.length) {
        for (var i = 0; i < tree.children.length; i++) {
            this.mountAdd(tree.children[i], type);
            tree[type] += tree.children[i][type];
        }
    }
}
// 根据父子索引进行添加，充分利用引用关系
function toTree(data) {
    // 删除 所有 children,以防止多次调用
    data.forEach(function(item) {
        delete item.children;
    });
    var map = {};
    data.forEach(function(item) {
        map[item.finNo] = item;
    });
    var val = [];
    data.forEach(function(item) {
        var parent = map[item.parentFinNo]; // 好绕啊，如果找到索引，那么说明此项不在顶级当中,那么需要把此项添加到，他对应的父级中
        if (parent) {
            (parent.children || (parent.children = [])).push(item);
        } else {
            val.push(item);
        }
    });
    return val;
}