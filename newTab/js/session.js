var sessionData = '';
var windowsArray = [];

function populateSessionData() {

    if ( ! $.fn.DataTable.isDataTable( '#saved-session-table' ) ) {
        initCurrentSessionData();
        //initSavedSessionTable();
    }   

     // get the userData chromeStorage entry
     chrome.storage.local.get(['savedSessionData'], function(result) {
        savedSessionData = $.isEmptyObject(result) ? initSavedSessionTable(result) : initSavedSessionTable(result.savedSessionData);
        console.log("stored value is: ", savedSessionData);            
    });

    $('#save-session').click(function () {
        var sessionData = {};
        var savedSessionData;
        sessionData.DT_RowId = new Date().toISOString();
        sessionData.session_name = $("#session-name").val();
        sessionData.saved_at = new Date().toISOString();
        sessionData.windows = windowsArray;
        console.log(sessionData);

        chrome.storage.local.get(['savedSessionData'], function(result) {
            console.log("store value is: ", result);
            if (result && result.savedSessionData && result.savedSessionData.length > 0) {
                result.savedSessionData.push(sessionData);
                savedSessionData = result.savedSessionData;
            } else {
                savedSessionData = [];
                savedSessionData.push(sessionData);
            }
            chrome.storage.local.set({savedSessionData}, function() {
                console.log('Value is set to ' + JSON.stringify(savedSessionData));
                $('#saveSessionModalCenter').modal('hide');
                var table = $('#saved-session-table').DataTable();
                //table.ajax.reload();
                table.clear().rows.add(savedSessionData).draw();
            });
        // initRuleTable(result);
            
        });
    });
}

function initCurrentSessionData() {
	chrome.windows.getAll({
		populate: true
	}, function (windows) {
        
		windows.forEach(function (window) {

            var tabsArray = []

			var windowDiv = document.createElement("div");

			var div = document.createElement("div");
			div.id = "div_" + window.id;
			div.className = "window";

			var windowTextNode = document.createTextNode('window_' + window.id);

			var windowTabCountSpan = document.createElement("span");
			windowTabCountSpan.className = 'tab-count';
			var windowTabCountTextNode = document.createTextNode("(" + window.tabs.length + " tabs)");
			windowTabCountSpan.appendChild(windowTabCountTextNode);

			var img = new Image();
			img.className = "window-image";
			img.id = "img_" + window.id;
			img.src = '../img/win.png';

			div.appendChild(img);
			div.appendChild(windowTextNode);
			div.appendChild(windowTabCountSpan);

            var windowObject = {};
            windowObject.name = "window_" + window.id;

			windowDiv.appendChild(div);

			window.tabs.forEach(function (tab) {
				var div = document.createElement("div");
				div.id = "div_" + tab.id;
				div.className = "tab";

				var anchor = document.createElement("a");
				anchor.id = tab.id;
				anchor.className = "tab-anchor";
				anchor.setAttribute("href", tab.url);
				anchor.setAttribute("target", "_blank");
				anchor.setAttribute("title", tab.url);
				anchor.appendChild(document.createTextNode(tab.title));

				var img = new Image();
				img.className = "tab-image";
				img.id = "img_" + tab.id;
				img.src = (tab.favIconUrl === undefined || tab.favIconUrl === '') ? '../img/default.png' : tab.favIconUrl;

				div.appendChild(img);
				div.appendChild(anchor);

                //$('#tabs').append(div);
                var tabObject = {};
                tabObject.id = tab.id;
                tabObject.url = tab.url;
                tabObject.title = tab.title;
                tabObject.favIconUrl = tab.favIconUrl;

                tabsArray.push(tabObject);
				windowDiv.appendChild(div);
			});
            windowObject.tabs = tabsArray;
            windowsArray.push(windowObject);
			$('#window-list').append(windowDiv);
		});
    });
}

function initSavedSessionTable(savedSessionData) {
    var table = $('#saved-session-table').DataTable( {
        //"ajax": "../objects.txt",
        data: $.map( savedSessionData, function (value, key) {
            return value;
        } ),
        "columns": [
            {
                "className":      'details-control',
                "orderable":      false,
                "data":           null,
                "defaultContent": ''
            },
            { "data": "session_name" },
            { "data": "saved_at" },
            { "data": "windows" }
        ],
        "columnDefs": [
            { "visible": false,  "targets": [ 3 ] }
         ],
        "order": [[1, 'asc']],
        "bDestroy": true,
    } );
     
    // Add event listener for opening and closing details
    $('#saved-session-table tbody').on('click', 'td.details-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row( tr );
 
        if ( row.child.isShown() ) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        }
        else {
            // Open this row
            var tabInfo = showTabInfo(row.data().windows);
            if (tabInfo !== undefined) {
                row.child( tabInfo ).show();
            }
            tr.addClass('shown');
        }
    } );
};

function showTabInfo ( windows ) {
    // `d` is the original data object for the row
   
    var dataToReturn ='';
    windows.forEach(function (window) {
        dataToReturn += '<div class="window window-saved-session"><img class="window-image" src="../img/win.png"></img><span>' + window.name + '</span></div>';
       
        window.tabs.forEach(function (tab) {
            dataToReturn += '<div class="child-row-tab-info">';
            var favIconUrl = '../img/default.png';
            if (tab.favIconUrl && (tab.favIconUrl !== '' || tab.favIconUrl != null)) {
                favIconUrl = tab.favIconUrl;
            }
            dataToReturn += '<img class="tab-image" src="' + favIconUrl+ '"></img>'
            dataToReturn += '<a class="tab-anchor" target="_blank" href="' + tab.url + '" title="' + tab.url + '">' + tab.title + '</<>'
            dataToReturn += "</div>";
        });
    });
    return dataToReturn;
}