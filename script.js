// complete the given function

function palindrome(str){
    var lowerStr = str.toLowerCase().split(" ").join("");
	var start = 0;
	var end = lowerStr.length-1;
	while (start != end) {
		if(lowerStr[start] !== lowerStr[end]){
			return false;
		}

		start++;
		end--;
	}
	return true;
}
module.exports = palindrome
