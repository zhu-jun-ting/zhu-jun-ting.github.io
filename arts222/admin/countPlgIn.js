// countPlgIn.js

/**
 *This file is a plug in javascript file under the folder named "admin"
 *this file requires jQuery file, please insert the jQuery before the implication this file.
 *
 *last updated: 9/13/2019
 */

 /**
 *Method name: count()
 *Method function: make a register of one visit. 
 */
 
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
