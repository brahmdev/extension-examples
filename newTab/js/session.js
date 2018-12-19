function populateSessionData() {
    chrome.windows.getAll({populate:true},function(windows){
    console.log("window value is: ", windows);
    windows.forEach(function(window){
        
        var currentSessionDetailCountSpan = document.createElement("span");
        currentSessionDetailCountSpan.className = 'current-session-detail-count';
        var currentSessionDetailCountTextNode = document.createTextNode(windows.length + " Windows " + window.tabs.length + " Tabs");
        currentSessionDetailCountSpan.appendChild(currentSessionDetailCountTextNode);
        $('#session-page').append(currentSessionDetailCountSpan);
        
        var windowDiv = document.createElement("div");

        var div = document.createElement("div");
        div.id = "div_" + window.id;
        div.className = "window";

        var windowTextNode = document.createTextNode('window');

        var windowTabCountSpan = document.createElement("span");
        windowTabCountSpan.className = 'tab-count';
        var windowTabCountTextNode = document.createTextNode("(" +window.tabs.length + " tabs)");
        windowTabCountSpan.appendChild(windowTabCountTextNode);

        var img = new Image();
        img.className = "window-image";
        img.id = "img_" +  window.id;
        img.src = '../img/win.png';

        div.appendChild(img);
        div.appendChild(windowTextNode);
        div.appendChild(windowTabCountSpan);
        
        windowDiv.appendChild(div);
        

        window.tabs.forEach(function(tab){
            console.log(tab.favIconUrl);
            var div = document.createElement("div");
            div.id = "div_" + tab.id;
            div.className = "tab";

            var anchor = document.createElement("a");
            anchor.id = tab.id;
            anchor.className = "tab-anchor";
            anchor.setAttribute("href",  tab.url);
            anchor.setAttribute("target", "_blank");
            anchor.setAttribute("title", tab.url);  
            anchor.appendChild(document.createTextNode(tab.title));

            var img = new Image();
            img.className = "tab-image";
            img.id = "img_" +  tab.id;
            img.src = (tab.favIconUrl === undefined || tab.favIconUrl === '') ? '../img/default.png' : tab.favIconUrl;

            div.appendChild(img);
            div.appendChild(anchor);
            
            //$('#tabs').append(div);
            windowDiv.appendChild(div);
        });
        
        $('#window-list').append(windowDiv);
    });
  });
}