const form = document.forms.consumeForm;
const qty = [
    document.getElementById('qty1'),
    document.getElementById('qty2'),
    document.getElementById('qty3')
];

// 未入力チェック、未入力がなければサブミット
function emptyCheck(j) {
    submitOK = true;
    if (qty[j].value == "") {
        submitOK = false;
    }

    if (submitOK) {
        form.submit();
    } else {
        alert("未入力の項目があります")
    }
}

