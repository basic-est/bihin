const form = document.forms.orderForm;
const qty = [
    document.getElementById('qty1'),
    document.getElementById('qty2'),
    document.getElementById('qty3')
];

// 未入力チェック、未入力がなければサブミット
function emptyCheck() {
    submitOK = true;
    validationMessage = "処理を中断します";
    for (let j in qty) {
        let k = parseInt(qty[j].value, 10);
        let l = parseInt(qty[j].step, 10);
        // 値が整数値でない場合
        if (!Number.isInteger(k)) {
            submitOK = false;
            validationMessage = "未入力の項目があります";
            break;
        }else if(k%l != 0) {
            submitOK = window.confirm("発注数に最低発注数量で割り切れない数値が入力されています。\n"+
            "処理を続けてよろしいですか？")
            break;
        }
    }

    if (submitOK) {
        alert("入荷確認を受付けました。\n"+
        "発注数に入力された値を在庫数に足しこみ、\n"+
        "データベースを修正します。")
        form.submit();
    } else {
        alert(validationMessage)
    }
}

let num = 1;
const limit = 10;
function addRowOrder() {

    
    if (num <= limit) {
        const table = document.getElementById("order");
        // 行を行末に追加
        const row = table.insertRow(-1);
        //td分追加
        const cell1 = row.insertCell(-1);
        const cell2 = row.insertCell(-1);
        const cell3 = row.insertCell(-1);
        const cell4 = row.insertCell(-1);
        const cell5 = row.insertCell(-1);
        // セルの内容入力
        cell1.innerHTML = '-----';
        cell2.innerHTML = '    <select>'+
            '        <option value="1">B5用紙</option>'+
            '        <option value="2">ふせん小</option>'+
            '        <option value="3">ティッシュボックス</option>'+
            '      </select>';
        cell3.innerHTML = '0';
        cell4.innerHTML = '0';
        cell5.innerHTML = '<input type="number" id="qty3" class="quantity" min="0" value="0" step="10" required>'+
            '<div class="error-message">発注数が不正です</div>';
        num++;
    } else {
        alert('一度に追加できるのは' + limit + '件までです');
    }
}
