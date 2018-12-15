document.addEventListener("DOMContentLoaded", function() {
    
 });
	  
$(document).ready(function () {
	$('#sidebarCollapse').on('click', function () {
		$('#sidebar').toggleClass('active');
	});
	
	$('#apps-menu').on('click', function () {
		$('#apps-modal').modal('toggle');
	});
	
	$('#my-rules').on('click', function () {
    $('#rules-modal').modal('toggle');
    
    var table = $('#example').DataTable( {
      "ajax": "../data.json",
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
  $('#example tbody').on('click', 'td.details-control', function () {
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
});
	
  $(".apps-modal").load("../apps-modal.html"); 
	$(".rules-modal").load("../rules-modal.html"); 
	
	chrome.management.getAll(getAllCallback);
});

var getAllCallback = function(list) {
  var apps = document.getElementById("apps");
  for(var i in list) {
    // we don't want to do anything with extensions yet.
    var extInf = list[i];
     var app = document.createElement("div");
    if(extInf.isApp && extInf.enabled) {
      var img = new Image();
      img.className = "installed-apps-img";
      img.src = find128Image(extInf.icons);
      img.setAttribute("title", extInf.name);   
      img.addEventListener("click", (function(ext) {
    	    return function() {
    	        chrome.management.launchApp(ext.id);
    	    };
    	})(extInf));

      var closeIconImage = new Image();
      closeIconImage.className = "close-icon";
      closeIconImage.id = "close-icon";

      var name = document.createElement("div");
      name.className = "installed-apps-name";
      name.textContent = extInf.name;
      name.setAttribute("title", extInf.name);
      app.className = "installed-app";
      app.appendChild(img);
      app.appendChild(closeIconImage);
      app.appendChild(name);
      apps.appendChild(app);
	  
	getAllGoogleServices();
	getAllSocialApps();
    getAllNewsApps();
  }
}
};

var getAllGoogleServices = function() {
  var services = document.getElementById("google-services");
  for(let i in cjgShortcuts.mostPopular) {
    // we don't want to do anything with extensions yet.
    var extInf = cjgShortcuts.list[i];
    if(extInf !== undefined && extInf.u !== undefined && extInf.u.indexOf("google") > 1) {
      var service = document.createElement("div");

      var anchor = document.createElement("a");
      anchor.setAttribute("href",  extInf.u);
      anchor.setAttribute("target", "_blank");	    
      var img = new Image();
      img.className = "image";
	    img.id = "img_" +  extInf.i18n;
      img.src = "img/48/" + extInf.icon + "_48dp.svg";
      img.setAttribute("title", extInf.name);   
      anchor.appendChild(img);

      var name = document.createElement("div");
      name.className = "name";
      name.textContent = extInf.name;
      service.className = "service";
      service.appendChild(anchor);
      service.appendChild(name);
      services.appendChild(service);
    }
  } 
};

var getAllSocialApps = function() {
  var socialApps = document.getElementById("social-apps");
  for(let i in socialMedia.socialApps) {
    // we don't want to do anything with extensions yet.
    var extInf = socialMedia.socialApps[i];
    if(extInf !== undefined && extInf.url !== undefined && extInf.category === 'messenger') {
      var socialApp = document.createElement("div");

      var anchor = document.createElement("a");
      anchor.setAttribute("href",  extInf.url);
      anchor.setAttribute("target", "_blank");	    
      var img = document.createElement("div");;
      img.className = "social-image";
      img.id = "img_" +  extInf.i18n;
      //img.src = "img/48/" + extInf.icon + "_48dp.svg";
      img.setAttribute("title", extInf.title);
      img.setAttribute("style", "background:url('" + extInf.icon +"') round;")   
      anchor.appendChild(img);

      var name = document.createElement("div");
      name.className = "name";
      name.textContent = extInf.title;
      socialApp.className = "social-app";
      socialApp.appendChild(anchor);
      socialApp.appendChild(name);
      socialApps.appendChild(socialApp);
    }
  }
};

var getAllNewsApps = function() {
  var newsApps = document.getElementById("news-apps");
  for(let i in news.newsApps) {
    // we don't want to do anything with extensions yet.
    var extInf = news.newsApps[i];
    if(extInf !== undefined && extInf.url !== undefined && extInf.category === 'news') {
      var newsApp = document.createElement("div");

      var anchor = document.createElement("a");
      anchor.setAttribute("href",  extInf.url);
      anchor.setAttribute("target", "_blank");      
      var img = document.createElement("div");;
      img.className = "social-image";
      img.id = "img_" +  extInf.i18n;
      //img.src = "img/48/" + extInf.icon + "_48dp.svg";
      img.setAttribute("title", extInf.title);
      img.setAttribute("style", "background:url('" + extInf.icon +"') round;")   
      anchor.appendChild(img);

      var name = document.createElement("div");
      name.className = "name";
      name.textContent = extInf.title;
      newsApp.className = "social-app";
      newsApp.appendChild(anchor);
      newsApp.appendChild(name);
      newsApps.appendChild(newsApp);
    }
  }
};

var find128Image = function(icons) {
  for(var icon in icons) {
    if(icons[icon].size == "128") {
      return icons[icon].url;
    }
  }

  return "/noicon.png";
};

