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

    let captions = document.querySelectorAll('a');
    console.log(captions);
for(let i = 0; i < captions.length  ; i++){
        let captionValue = captions[i].dataset.caption;
        console.log(captionValue);
        let searchField = searchtext();
        let searchResult;
        captionValue = captionValue.toLowerCase();
        searchResult = captionValue.indexOf(searchField);
        
    if(searchResult >= 0) {
    console.log(` I found ( ${searchField} ) in fig ${i+1} `);
 
    
    captions[i].parentElement.style.display = "block";
    } else {
        console.log(`I did not find what you are looking for ( ${searchField} ) in fig ${i + 1}`);
        captions[i].parentElement.style.display = "none";
    }
}
});

