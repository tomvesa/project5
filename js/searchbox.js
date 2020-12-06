// function that takes an input from the searchbox
function searchtext (){
    const searchtext = document.querySelector('#search-input').value;
    //console.log(`I am looking for: ${searchtext}`);
    return searchtext.toLowerCase();
}


// attach the searchText function to the search box to run every time the
// the key is pressed
document.querySelector('#search-input').addEventListener('keyup', function(){
    searchtext();
// select a tags withing containers. Containers hold pictures
    let captions = document.querySelectorAll('.container a');
    //console.log(captions);
for(let i = 0; i < captions.length  ; i++){
        let captionValue = captions[i].dataset.caption; //select caption values from dataset
        //console.log(captionValue);
        let searchField = searchtext();//get the value of the searchbox
        let searchResult;
        captionValue = captionValue.toLowerCase();
        searchResult = captionValue.indexOf(searchField); //matcht search box vs captions
        
    if(searchResult >= 0) {
    //console.log(` I found ( ${searchField} ) in fig ${i+1} `);
 
    captions[i].parentElement.style.display = "block"; //make sure the correct display value when matching searchbox
    } else {
        //console.log(`I did not find what you are looking for ( ${searchField} ) in fig ${i + 1}`);
        captions[i].parentElement.style.display = "none"; //hide picture container when it does not match
    }
}
});

