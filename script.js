// complete the given function

function palindrome(str){
    var lowerStr = str.toLowerCase().split(" ").join("");
	var start = 0;
	var end = str.length-1;
	while (start != end) {
		if(str[start] !== str[end]){
			return false;
		}
	}
	return true;
}
module.exports = palindrome
