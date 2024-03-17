// テーブルにソート機能を付与するための処理
$(document).ready(function() {
    $('#bihin').tablesorter({
        headers:{
            0: { sorter: "digit" },  // 備品番号
            1: { sorter: false },    // 状態区分
            2: { sorter: "text" },   // 備品名
            3: { sorter: "digit" },  // 在庫数
            4: { sorter: "digit" },  // 発注点
            5: { sorter: "digit" },  // 登録日
            6: { sorter: "digit" },  // 更新日
        }
    });
});

// 備品名リンク押下時警告表示処理
const form = document.forms.insertForm;
function goEditCheck(bihinnNo) {
    if (!form.submitBtn.disabled) {
        // submitボタンが有効状態なら確認ダイアログを表示する
        if (!window.confirm('このまま移動すると入力中の内容は破棄されます。\n'
        +'登録する場合は"追加を登録"ボタンを押下してください。\n'
        +'入力内容を破棄して移動してよろしいですか？')) {
            // キャンセル押下時は何もせずに終了
            return ;
        }
    }
    window.location.href = 'bihin_edit.html?id='+bihinnNo;
}

// 挿入行のテキストボックスが編集された場合にsubmitボタンを有効化
function switchDisable() {
    form.submitBtn.disabled = false;
}

let num = 1;
const limit = 5;
function addRowBihin() {
    nowDate = new Date(); 
    // 年月日を取得
    const year = nowDate.getFullYear();
    const month = nowDate.getMonth()+1;
    const day = nowDate.getDate();

    if (num <= limit) {
        const table = document.getElementById("bihin");
        // 行を行末に追加
        const row = table.insertRow(-1);
        //td分追加
        const cell1 = row.insertCell(-1);
        const cell2 = row.insertCell(-1);
        const cell3 = row.insertCell(-1);
        const cell4 = row.insertCell(-1);
        const cell5 = row.insertCell(-1);
        const cell6 = row.insertCell(-1);
        const cell7 = row.insertCell(-1);
        // セルの内容入力
        cell1.innerHTML = '-----';
        cell2.innerHTML = '有効';
        cell3.innerHTML = '<input type="text" size="5" onchange="switchDisable()">';
        cell4.innerHTML = '<input class="quantity" type="number" value="0" min="0">';
        cell5.innerHTML = '<input class="quantity" type="number" value="0" min="0">';
        cell6.innerHTML = year + '-' + month + '-' + day;
        cell7.innerHTML = '-';
        num++;
    } else {
        alert('一度に追加できるのは' + limit + '件までです');
    }
}