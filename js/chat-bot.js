function chatBot() {
	
	// current user input
	this.input;
	
	/**
	 * respondTo
	 * 
	 * return nothing to skip response
	 * return string for one response
	 * return array of strings for multiple responses
	 * 
	 * @param input - input chat string
	 * @return reply of chat-bot
	 */
	this.respondTo = function(input) {
		
		this.input = input.toLowerCase();
		var output, meows, i;
		output = "";
		meows = Math.floor(Math.random() * 4) + 1;
		for (i = 0; i < meows; i++) {
			switch (Math.floor(Math.random() * 5)) {
				case 0:
					output += "meow";
					break;
				case 1:
					output += "maw";
					break;
				case 2:
					output += "purr";
					break;
				case 3:
					output += "meow-meow";
					break;
				case 4:
					output += "maw-maw";
					break;
			}
			switch (Math.floor(Math.random() * 10)) {
				case 0:
					output += "?";
					break;
				case 2:
					output += "!";
					break;
				case 4:
					output += "...";
					break;
			}
			if ((meows > 1) && (i != meows)) { output += " "; }
		}
		return output;
	}
	
	/**
	 * match
	 * 
	 * @param regex - regex string to match
	 * @return boolean - whether or not the input string matches the regex
	 */
	this.match = function(regex) {
	
		return new RegExp(regex).test(this.input);
	}
}
