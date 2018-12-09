document.addEventListener("DOMContentLoaded", function() {
        //chrome.management.getAll(getAllCallback);
		getAllGoogleServices();
 });
	  
$(document).ready(function () {
	$('#sidebarCollapse').on('click', function () {
		$('#sidebar').toggleClass('active');
	});
	
	$('#apps-menu').on('click', function () {
		$('#apps-modal').modal('toggle');
	});
	
	//console.log("**************** ",cjgShortcuts.mostPopular);
	//console.log("List**********	 ",cjgShortcuts.list["59"]);
});

var getAllCallback = function(list) {
  var apps = document.getElementById("apps");
  for(var i in list) {
    // we don't want to do anything with extensions yet.
    var extInf = list[i];
      var app = document.createElement("div");
 if(extInf.isApp && extInf.enabled) {
      var img = new Image();
      img.className = "image";
      img.src = find128Image(extInf.icon);
      img.setAttribute("title", extInf.name);   
      img.addEventListener("click", (function(ext) {
	    return function() {
	        chrome.management.launchApp(ext.id);
	    };
	})(extInf));

      var name = document.createElement("div");
      name.className = "name";
      name.textContent = extInf.name;
      app.className = "app";
      app.appendChild(img);
      app.appendChild(name);
      apps.appendChild(app);
  }
}
};

var getAllGoogleServices = function() {
  var services = document.getElementById("google-services");
  for(var i in cjgShortcuts.mostPopular) {
    // we don't want to do anything with extensions yet.
    var extInf = cjgShortcuts.list[i];
    if(extInf !== undefined) {
      var service = document.createElement("div");

      var img = new Image();
      img.className = "image";
	  //console.log(extInf.name , " : ", extInf.icon);
      img.src = "images/48/" + extInf.icon + "_48dp.svg";
      img.setAttribute("title", extInf.name);   
      img.addEventListener("click", (function(ext) {
	    return function() {
	        window.location.href = extInf.u;
	    };
	})(extInf));

      var name = document.createElement("div");
      name.className = "name";
      name.textContent = extInf.name;
      service.className = "service";
      service.appendChild(img);
      service.appendChild(name);
      services.appendChild(service);
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

