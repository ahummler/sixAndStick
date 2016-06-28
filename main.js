prompt("HI");
var str = "<h5>"''"</h5>";
var chars = str.split("");
var result = '';
for (var i = 0; i < chars.length; i++;){
	if (i % 2 == 0){
		result += '<div class="color1">'+chars[i]+'</div>';
		} else {
			result += '<div class="color2">'+chars[i]+'</div>';
		}

}
document.write('<h5>'+result+'</h5>');