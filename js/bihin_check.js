const form = document.forms.checkForm;
const chk = [
    document.getElementById('chk1'),
    document.getElementById('chk2'),
    document.getElementById('chk3')
];
const qty = [
    document.getElementById('qty1'),
    document.getElementById('qty2'),
    document.getElementById('qty3')
];

// 未入力チェック、未入力がなければサブミット
function emptyCheck() {
    submitOK = true;
    for (let j in qty) {
        let k = parseInt(qty[j].value, 10);
        // 実在庫数が有効で、かつ値が整数値である場合
        if (!qty[j].disabled && !Number.isInteger(k)) {
            submitOK = false;
            break;
        }
    }

    if (submitOK) {
        form.submit();
        return;
    }
    alert("未入力の項目があります");
}

// チェックボックスの状態に応じて実在個数入力欄を有効／無効化する処理
function switchDisable(i) {
    if (chk[i].checked) {
        qty[i].disabled = true;
        qty[i].value = "";       
    } else {
        qty[i].disabled = false;
    }
}
