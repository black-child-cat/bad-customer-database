$(document).ready(function () {
	/**
	 * Googleフォームにデータを送信する
	 */
	$("#myForm").on("submit", function (e) {
		e.preventDefault();
		$.ajax({
			type: "POST",
			// url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSd17JP12Gt74VwS16cBsbFV5bvjKOt-N0BgTzBiEmBXXEDcnA/formResponse",
			url: "https://script.google.com/macros/s/AKfycbw93QLIui5MQknGdMaM-3rKAOzr3bfXiRqRhKG5_2Up-l27m6zIZAO5k8Y25nUwHfH9/exec",
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

	/**
	 * スプレッドシートのデータを取得する
	 */
	$.get('https://script.google.com/macros/s/AKfycbzu1duO3IqNnS3wJeL-L1h8ZTMNcyLItkwQGRgHti9aFfqoGjJjr3BwwtZS7HcXiPtH/exec', function(data) {
		// console.log(data);
		// $('#result').text(JSON.stringify(data));
		var items = [];
		$.each(data, function(key, val) {
			items.push('<tr class="text-nowrap">');
			items.push('<td>' + val[1] + '</td>');
			items.push('<td>' + val[2] + '</td>');
			items.push('<td>' + val[5] + '</td>');
			items.push('<td>' + val[4] + '</td>');
			// 他のデータ
			items.push("</tr>");
		});
		$("#dataTable tbody").append(items.join(""));
    });
});
