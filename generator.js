let pronoun = ['the','our']; 
let adj = ['great', 'big' ]; 
let noun = ['jogger','racoon'];

for (i=0; i<pronoun.length; i++){
	for(j=0; j<adj.length; j++){
		for(k=0; k<noun.length; k++){
			document.write(pronoun[i] + " "+adj[j] + " "+noun [k] + "\n");
		}
	}
}