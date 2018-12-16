// get the userData chromeStorage entry
chrome.storage.sync.get(function(result) {
    applyRules(result.userData);
});

function applyRules(userData) {
    Object.keys(userData)
        .forEach(function eachKey(key) { 
            var rule = userData[key];
            if (rule.url === window.location.href) {
                if (rule.html !== "") {
                    document.body.innerHTML += rule.html;
                }
                if (rule.css !== "") {
                    document.head.innerHTML += '<style type="text/css">' + rule.css + '</style>';
                }
                if (rule.js !== "") {
                    var s = document.createElement("script");
                    s.type = "text/javascript";
                    s.text = rule.js;
                    document.head.appendChild(s);
                }
             }
    });
}
