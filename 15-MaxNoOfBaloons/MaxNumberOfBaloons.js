var maxNumberOfBalloons = function(text) {


    let counts = {b:0, a:0, l:0, o:0, n:0};
    
    for(var i = 0; i < text.length; i++) {
        let c = text[i];
        // console.log(c);
        // console.log(counts[c]);
        if(counts[c] !== undefined) {
            counts[c]++;
            // console.log(counts[c]);
        }
    }
    counts.l = Math.floor(counts.l/2);
    counts.o = Math.floor(counts.o/2);

    let minCount = Number.MAX_VALUE;
    for(let a in counts) {
        if(counts[a] < minCount) {
            minCount = counts[a];
        }
        
    }
    console.log(minCount);
    return minCount;
};
maxNumberOfBalloons('nlaebolkoballoonballoon');