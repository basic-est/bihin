const form = document.forms.updateForm;
const bihinId = document.getElementById("bihinId");
const bihinName = document.getElementById("bihinName");

// 未入力チェック、未入力がなければサブミット
function emptyCheck() {
    submitOK = bihinId.value != "" & bihinName.value != "";
    if (submitOK) {
        form.submit();
        return;
    }
    alert("未入力の項目があります");
}

// フォーム内が編集された時に登録ボタンを有効化する処理
function switchDisable() {
    form.submitBtn.disabled = false;
}

