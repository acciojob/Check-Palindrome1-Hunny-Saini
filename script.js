// complete the given function

function palindrome(str){
    var lowerStr = str.toLowerCase();
	var start = 0;
	var end = str.length;
	while (start != end) {
		if(str.charAt(start) != str.charAt(end)){
			return false;
		}
	}
	return true;
}
module.exports = palindrome
