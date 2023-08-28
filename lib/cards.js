function tsvToJSON(tsv) {
    let lines = tsv.split("\n");
    let result = [];
    let headers = lines[0].split("\t");

    for(let i = 1; i < lines.length; i++) { 
        let obj = {};
        let currentline = lines[i].split("\t");

        for(var j = 0; j < headers.length; j++) {
            obj[headers[j].toLowerCase()] = currentline[j];
        }
        result.push(obj);
    }

    return result;
}

function cardToTable(tabl, card) {
    // TODO: add a card to table from data
    let tabDiv = document.getElementById(tabl);
    let cDiv = document.createElement('div');
    cDiv.className = 'card';
    if(card['layout'])
        cDiv.className += " " + card['layout'];
    let sTit = document.createElement('span');
    sTit.className = 'title';
    sTit.innerHTML = card['title'];

    let sSign = document.createElement('span');
    sSign.className = 'sign';
    sSign.innerHTML = card['sentiment'];

    cDiv.appendChild(sTit);
    cDiv.appendChild(sSign);

    console.log(tabl);
    tabDiv.appendChild(cDiv);
}

/*fetch("cards.tsv")
  .then((res) => res.text())
  .then((text) => {
    console.log(tsvToJSON(text));
  })
  .catch((e) => console.error(e));
*/
cardsData = `ID	Title	Sentiment	Layout	Short	Long	Links	Scoring
0	Technical Debt	-1	tech				scope:-1
0	Siloed experise	-1	team				xfunc:-1
0	External dependecies	-1	team				xfunc:-1    
0	Vertical Slicing	+1	scope	Break down large stories/epics into slices of value			scope:+1
0	Iteration planning	+1	scope	Break down scope by planning for iterations. Setting goals and getting the team on-board			scope:+1
0	Retrospectives	+1	team	Improve ways-of-working by focusing on improvements and feedback			contimpr:+1
0	Peer programming	+1	team	Improve team knowledge sharing and error detection by peer work			xfunc:+1
`;

window.addEventListener("DOMContentLoaded", function() {  
    cards = tsvToJSON(cardsData);

    for(var i = 0; i < cards.length; i++) {
        let c = cards[i];
        cardToTable('hand', c);
    }
});