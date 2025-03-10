// Reverses a string.
function reverse(string) {
	return Array.from(string).reverse().join("");
}

// Returns true for a palindrom, false otherwise.
function palindrome(string) {
	let processedContent = string.toLowerCase();
	return processedContent === reverse(processedContent);
}