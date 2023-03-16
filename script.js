// complete the given function

function palindrome(str){
    var lowerStr = str.toLowerCase().split(" ").join("");
	var start = 0;
	var end = str.length;
	while (start != end) {
		if(str.charAt(start) != str.charAt(end)){
			return false;
			break;
		}
	}
	return true;
}
module.exports = palindrome
