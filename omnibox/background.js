function resetDefaultSuggestion() {
    chrome.omnibox.setDefaultSuggestion({
    	description: 'swaggerhub: Search the SwaggerHub API for %s'
    });
   
    chrome.omnibox.onInputEntered.addListener(function(text) {
    	navigate("https://swagger.io/tools/swaggerhub/search/" + text);
    });
  
}

function navigate(url) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.update(tabs[0].id, {url: url});
    });
}

  resetDefaultSuggestion();

