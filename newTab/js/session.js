
function populateSessionData() {

    if ( ! $.fn.DataTable.isDataTable( '#saved-session-table' ) ) {
        initCurrentSessionData();
        initSavedSessionTable();
    }   
}

function initCurrentSessionData() {
	chrome.windows.getAll({
		populate: true
	}, function (windows) {
		console.log("window value is: ", windows);
		windows.forEach(function (window) {

			var windowDiv = document.createElement("div");

			var div = document.createElement("div");
			div.id = "div_" + window.id;
			div.className = "window";

			var windowTextNode = document.createTextNode('window');

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

			windowDiv.appendChild(div);


			window.tabs.forEach(function (tab) {
				console.log(tab.favIconUrl);
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
				windowDiv.appendChild(div);
			});

			$('#window-list').append(windowDiv);
		});

    });
    
}

function initSavedSessionTable() {
    var table = $('#saved-session-table').DataTable( {
        "ajax": "../objects.txt",
        "columns": [
            {
                "className":      'details-control',
                "orderable":      false,
                "data":           null,
                "defaultContent": ''
            },
            { "data": "name" },
            { "data": "position" },
            { "data": "office" },
            { "data": "salary" }
        ],
        "order": [[1, 'asc']]
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
            row.child( format(row.data()) ).show();
            tr.addClass('shown');
        }
    } );
};

function format ( d ) {
    // `d` is the original data object for the row
    return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+
        '<tr>'+
            '<td>Full name:</td>'+
            '<td>'+d.name+'</td>'+
        '</tr>'+
        '<tr>'+
            '<td>Extension number:</td>'+
            '<td>'+d.extn+'</td>'+
        '</tr>'+
        '<tr>'+
            '<td>Extra info:</td>'+
            '<td>And any further details here (images etc)...</td>'+
        '</tr>'+
    '</table>';
}

