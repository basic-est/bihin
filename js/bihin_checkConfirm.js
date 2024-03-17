let form = document.forms.checkConfirmForm;
let qty = [
    document.getElementById('qty1'),
    document.getElementById('qty2'),
    document.getElementById('qty3')
];

// 未入力チェック、未入力がなければサブミット
function emptyCheck() {
    submitOK = true;
    for (let j in qty) {
        let k = parseInt(qty[j].value, 10);
        // 値が整数値でない場合
        if (!Number.isInteger(k)) {
            submitOK = false;
            break;
        }
    }

    if (submitOK) {
        alert("X件の差異がありました。\n"+
        "実在個数に入力された値でデータベースを修正します。\n"+
        "備品管理に関する注意喚起を行ってください。")
        form.submit();
    } else {
        alert("未入力の項目があります")
    }
}

// チェックボックスの状態に応じて実在個数入力欄を有効／無効化する処理
function switchDisable(i) {
    if (check[i].checked) {
        qty[i].disabled = true;
        qty[i].value = "";       
    } else {
        qty[i].disabled = false;
    }
}
