$(document).ready(function() {
	
	$("#mouse").click(function() {
		$("#mouseImgDiv").slideDown();
	})
	
	$("#toys").click(function() {
		$("#toyImgDiv").slideDown();
	})
	
	$("#situation").click(function() {
		$("#situationText").slideDown();
	})
	
	$("#city").click(function() {
		$("#cityText").slideDown();
	})
	
	$("#re").click(function() {
		$("#reText").slideDown();
	})
	
	$("#photo").click(function() {
		$("#photoImg").slideDown();
	})

	count();
	
})

function count() {
		$.ajax({
		type: "POST",
		url: "http://junting6.arts244.courses.bengrosser.com/admin/count.php", //同目录下的php文件
		data: "info=" + "1", // 等号前后不要加空格
		success: function(msg) { //请求成功后的回调函数

			$("#count").html("total visits:" + msg);

		}
	})
}


