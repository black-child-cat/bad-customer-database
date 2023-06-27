$(document).ready(function () {
	$("#myForm").on("submit", function (e) {
		e.preventDefault();

		$.ajax({
			type: "POST",
			url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSd17JP12Gt74VwS16cBsbFV5bvjKOt-N0BgTzBiEmBXXEDcnA/formResponse",
			data: $(this).serialize(),
			success: function (response) {
				// レスポンスに基づいて何かを行う
				console.log(response);
				alert("データ送信に成功しました。");
				$("#myForm")[0].reset();
				$(".toast").toast("show");
			},
			error: function (error) {
				// エラー時の処理
				console.log(error);
				alert(JSON.stringify(error));
				$("#myForm")[0].reset();
				$(".toast").toast("show");
			},
		});
	});
});
