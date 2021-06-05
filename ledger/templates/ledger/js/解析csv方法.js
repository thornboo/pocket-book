$.ajax({
    url: "http://127.0.0.1:8000/static/data/bill.csv",
    dataType: 'text',  //指定服务器返回的数据类型
    success: function (data) {
        console.log(data);
    },
    error: function () {
        console.log("error:");
    },
    complete: function () {
        console.log("始终执行!");
    }
}).done(successFunction);

function successFunction(data) {
    var allRows = data.split(/\r?\n|\r/);  //查找换行和回车
    var table = '<table>';
    for (var singleRow = 0; singleRow < allRows.length; singleRow++) {
        if (singleRow === 0) {
            table += '<thead>';
            table += '<tr>';
        } else {
            table += '<tr>';
        }
        var rowCells = allRows[singleRow].split(',');  //以逗号分割
        for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
            if (singleRow === 0) {
                table += '<th>';
                table += rowCells[rowCell];
                table += '</th>';
            } else {
                table += '<td>';
                table += rowCells[rowCell];
                table += '</td>';
            }
        }
        if (singleRow === 0) {
            table += '</tr>';
            table += '</thead>';
            table += '<tbody>';
        } else {
            table += '</tr>';
        }
    }
    table += '</tbody>';
    table += '</table>';
    $('body').append(table);
}