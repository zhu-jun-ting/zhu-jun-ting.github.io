$(document).ready(function() {
	$.ajax({
		type: "POST",
		url: "http://junting6.arts244.courses.bengrosser.com/admin/count.php", //同目录下的php文件
		data: "info=" + "1", // 等号前后不要加空格
		success: function(msg) { //请求成功后的回调函数

			$("#count").html("total visits:" + msg);

		}
	})
})
