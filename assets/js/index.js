function postData() {
    var formdata = $('#myForm').serialize();
    $.ajax({
        type: "POST",
        url: "https://script.google.com/macros/s/AKfycbxPE50blPbkr5XUs0kdckHfqYH7bvPJFsblNlaydRxgxLmqChQNJI1OkXwL4vUevLw/exec",
        data: formdata,
        success: function(data){
            alert('データ送信に成功しました。');
        }
    });
}
