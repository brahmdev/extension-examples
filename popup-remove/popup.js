chrome.runtime.sendMessage('hello', 
    function (response) {
        document.getElementById('text').textContent = response.msg;
    }
);
