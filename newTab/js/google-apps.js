var cjgShortcuts = function() {
    "use strict";
    function o(o) {
        for (var e = o, t = e + "/", n = !1, a = 0; !n && a < s.length;) {
            var c = ".google." + s[a] + "/";
            t.indexOf(c) !== -1 && (e = t.replace(c, ".google.com"), n = !0), a++
        }
        return e
    }
    function e(o) {
        return o.split(/\/u\/\d\//)
            .join("/")
            .split(/\/b\/\d{21}\//)
            .join("/")
    }
    function t(t, n) {
        var s = new window.URL(t),
            c = o(s.host) + e(s.pathname),
            i = [];
        return Object.keys(a)
            .forEach(function(o) {
                var e = a[o],
                    t = e.nu && c.indexOf(e.nu) !== -1 && (n || !e.subId || e.subId === o);
                t && i.push(o)
            }), i.sort(function(o, e) {
                return a[o].nu < a[e].nu ? 1 : -1
            }), i
    }
    function n(o, e) {
        var t = o in a && "u" in a[o];
        if (!t) return null;
        var n = a[o],
            s = e && e.authuser,
            c = s || "0",
            i = e && e.pageId,
            u = i && n.bu;
        if (u) return "0" === c && (u = u.replace("u/[authuser]/b/[pageid]/", "b/" + i + "/")), u.replace("[authuser]", c)
            .replace("[pageid]", i);
        var g = 1 === n.aum || s && (2 === n.aum || "0" !== s);
        return g && n.au && n.au.replace("[authuser]", c) || n.u
    }
    var a = {
            1: {
                name: "About Google",
                i18n: "cj_i18n_00450",
                icon: "googleg",
                badge: "info",
                u: "https://www.google.com/about/",
                nu: "www.google.com/about"
            },
            2: {
                name: "Ad Manager",
                i18n: "cj_i18n_01097",
                icon: "ad_manager",
                u: "https://admanager.google.com/",
                nu: "admanager.google.com",
                au: "https://admanager.google.com/?authuser=[authuser]",
                aum: 1
            },
            4: {
                name: "AdSense",
                i18n: "cj_i18n_00179",
                icon: "ad_sense",
                u: "https://www.google.com/adsense/new/home",
                nu: "www.google.com/adsense/new/home",
                au: "https://www.google.com/adsense/new/?authuser=[authuser]"
            },
            5: {
                subId: "157",
                name: "Advanced search",
                i18n: "cj_i18n_00406",
                icon: "googleg",
                badge: "search",
                u: "https://www.google.com/advanced_search",
                nu: "www.google.com/advanced_search",
                au: "https://www.google.com/advanced_search?authuser=[authuser]"
            },
            6: {
                name: "Ads",
                i18n: "cj_i18n_01095",
                icon: "ads",
                u: "https://ads.google.com/aw/overview",
                nu: "ads.google.com/aw/overview",
                au: "https://ads.google.com/aw/overview?authuser=[authuser]"
            },
            8: {
                subId: "6",
                name: "My Client Center",
                i18n: "cj_i18n_00453",
                icon: "ads",
                badge: "person",
                u: "https://adwords.google.com/mcm/Mcm",
                nu: "adwords.google.com/mcm/Mcm",
                au: "https://adwords.google.com/mcm/Mcm?authuser=[authuser]"
            },
            10: {
                name: "Alerts",
                i18n: "cj_i18n_00183",
                icon: "alerts",
                u: "https://www.google.com/alerts",
                nu: "www.google.com/alerts",
                au: "https://www.google.com/alerts?authuser=[authuser]"
            },
            11: {
                name: "Analytics",
                i18n: "cj_i18n_00186",
                icon: "analytics",
                u: "https://analytics.google.com/analytics/web/",
                nu: "analytics.google.com/analytics/web",
                au: "https://analytics.google.com/analytics/web/?authuser=[authuser]"
            },
            14: {
                name: "Api Explorer",
                i18n: "cj_i18n_00454",
                icon: "developers",
                u: "https://developers.google.com/apis-explorer/",
                nu: "developers.google.com/apis-explorer",
                au: "https://developers.google.com/apis-explorer/?authuser=[authuser]"
            },
            15: {
                subId: "374",
                name: "App Engine",
                i18n: "cj_i18n_00455",
                icon: "cloud",
                badge: "cj_gcp_appengine",
                u: "https://console.cloud.google.com/appengine",
                nu: "console.cloud.google.com/appengine",
                au: "https://console.cloud.google.com/appengine?authuser=[authuser]"
            },
            16: {
                name: "G Suite",
                i18n: "cj_i18n_00456",
                icon: "apps",
                u: "https://gsuite.google.com/",
                nu: "gsuite.google.com"
            },
            17: {
                name: "G Suite Marketplace",
                i18n: "cj_i18n_00457",
                icon: "apps_marketplace",
                u: "https://gsuite.google.com/marketplace/",
                nu: "gsuite.google.com/marketplace",
                au: "https://gsuite.google.com/u/[authuser]/marketplace/"
            },
            18: {
                name: "Arts & Culture",
                i18n: "cj_i18n_00458",
                icon: "arts_and_culture",
                u: "https://artsandculture.google.com/",
                nu: "artsandculture.google.com",
                au: "https://artsandculture.google.com/u/[authuser]/"
            },
            20: {
                name: "Blogs & Social Media",
                i18n: "cj_i18n_00459",
                icon: "blogger",
                badge: "mode_comment",
                u: "https://www.google.com/press/blog-social-directory.html",
                nu: "www.google.com/press/blog-social-directory.html"
            },
            21: {
                name: "Blogger",
                i18n: "cj_i18n_00189",
                icon: "blogger",
                u: "https://www.blogger.com/",
                nu: "www.blogger.com"
            },
            23: {
                name: "Bookmarks",
                i18n: "cj_i18n_00190",
                icon: "bookmarks",
                u: "https://www.google.com/bookmarks/",
                nu: "www.google.com/bookmarks",
                au: "https://www.google.com/bookmarks/?authuser=[authuser]"
            },
            24: {
                name: "Books",
                i18n: "cj_i18n_00460",
                icon: "books",
                u: "https://books.google.com/",
                nu: "books.google.com",
                au: "https://books.google.com/?authuser=[authuser]"
            },
            27: {
                name: "Calendar",
                i18n: "cj_i18n_00302",
                icon: "calendar",
                u: "https://calendar.google.com/calendar/r",
                nu: "calendar.google.com/calendar/r",
                au: "https://calendar.google.com/calendar/b/[authuser]/r"
            },
            28: {
                subId: "27",
                name: "New event",
                i18n: "cj_i18n_00268",
                icon: "calendar",
                badge: "add",
                u: "https://calendar.google.com/calendar/r/eventedit",
                nu: "calendar.google.com/calendar/r/eventedit",
                au: "https://calendar.google.com/calendar/b/[authuser]/r/eventedit"
            },
            30: {
                name: "Chrome Experiments",
                i18n: "cj_i18n_00461",
                icon: "chrome_experiments",
                u: "https://experiments.withgoogle.com/collection/chrome",
                nu: "experiments.withgoogle.com/collection/chrome"
            },
            31: {
                name: "Chrome Web Store",
                i18n: "cj_i18n_00462",
                icon: "chrome_web_store",
                u: "https://chrome.google.com/webstore/",
                nu: "chrome.google.com/webstore",
                au: "https://chrome.google.com/webstore/?authuser=[authuser]"
            },
            32: {
                subId: "31",
                name: "Developer Dashboard",
                i18n: "cj_i18n_00463",
                icon: "chrome_web_store",
                badge: "build",
                u: "https://chrome.google.com/webstore/developer/dashboard/",
                nu: "chrome.google.com/webstore/developer/dashboard",
                au: "https://chrome.google.com/webstore/developer/dashboard?authuser=[authuser]"
            },
            33: {
                subId: "31",
                name: "Extensions",
                i18n: "cj_i18n_00464",
                icon: "chrome_web_store",
                badge: "extension",
                u: "https://chrome.google.com/webstore/category/extensions",
                nu: "chrome.google.com/webstore/category/extensions",
                au: "https://chrome.google.com/webstore/category/extensions?authuser=[authuser]"
            },
            34: {
                subId: "31",
                name: "Themes",
                i18n: "cj_i18n_00465",
                icon: "chrome_web_store",
                badge: "palette",
                u: "https://chrome.google.com/webstore/category/themes",
                nu: "chrome.google.com/webstore/category/themes",
                au: "https://chrome.google.com/webstore/category/themes?authuser=[authuser]"
            },
            35: {
                name: "Cloud Print",
                i18n: "cj_i18n_00332",
                icon: "cloudprint",
                u: "https://www.google.com/cloudprint/",
                nu: "www.google.com/cloudprint",
                au: "https://www.google.com/cloudprint?user=[authuser]"
            },
            37: {
                name: "Surveys",
                i18n: "cj_i18n_00467",
                icon: "surveys",
                u: "https://surveys.google.com/your-surveys",
                nu: "surveys.google.com/your-surveys",
                au: "https://surveys.google.com/your-surveys?authuser=[authuser]"
            },
            38: {
                subId: "37",
                name: "New survey",
                i18n: "cj_i18n_00468",
                icon: "surveys",
                badge: "add",
                u: "https://surveys.google.com/create/",
                nu: "surveys.google.com/create",
                au: "https://surveys.google.com/create?authuser=[authuser]"
            },
            39: {
                name: "Contacts",
                i18n: "cj_i18n_00314",
                icon: "contacts",
                u: "https://contacts.google.com/",
                nu: "contacts.google.com",
                au: "https://contacts.google.com/u/[authuser]/"
            },
            41: {
                name: "CS4HS",
                i18n: "cj_i18n_00469",
                icon: "googleg",
                u: "https://www.cs4hs.com/",
                nu: "www.cs4hs.com"
            },
            42: {
                name: "Custom Search",
                i18n: "cj_i18n_00276",
                icon: "custom_search",
                u: "https://cse.google.com/cse/all",
                nu: "cse.google.com/cse/all"
            },
            43: {
                subId: "79",
                name: "Dashboard",
                i18n: "cj_i18n_00470",
                icon: "my_account",
                badge: "dashboard",
                u: "https://myaccount.google.com/dashboard",
                nu: "myaccount.google.com/dashboard",
                au: "https://myaccount.google.com/u/[authuser]/dashboard",
                bu: "https://myaccount.google.com/u/[authuser]/b/[pageid]/dashboard"
            },
            45: {
                name: "Developers",
                i18n: "cj_i18n_00343",
                icon: "developers",
                u: "https://developers.google.com/",
                nu: "developers.google.com",
                au: "https://developers.google.com/?authuser=[authuser]"
            },
            46: {
                name: "Docs",
                i18n: "cj_i18n_00391",
                icon: "docs",
                u: "https://docs.google.com/document/",
                nu: "docs.google.com/document",
                au: "https://docs.google.com/document/u/[authuser]/",
                aum: 1
            },
            47: {
                name: "Drawings",
                i18n: "cj_i18n_00409",
                icon: "drawings",
                u: "https://docs.google.com/drawings/create",
                nu: "docs.google.com/drawings/create",
                au: "https://docs.google.com/drawings/u/[authuser]/create",
                aum: 2
            },
            48: {
                name: "Drive",
                i18n: "cj_i18n_00390",
                icon: "drive",
                u: "https://drive.google.com/drive/my-drive",
                nu: "drive.google.com/drive/my-drive",
                au: "https://drive.google.com/drive/u/[authuser]/my-drive"
            },
            49: {
                name: "Earth",
                i18n: "cj_i18n_00471",
                icon: "earth",
                u: "https://earth.google.com/web/",
                nu: "earth.google.com/web"
            },
            50: {
                name: "Earth Engine",
                i18n: "cj_i18n_00472",
                icon: "earth_engine",
                u: "https://earthengine.google.com/",
                nu: "earthengine.google.com"
            },
            53: {
                name: "Feedburner",
                i18n: "cj_i18n_00474",
                icon: "feedburner",
                u: "https://feedburner.google.com/fb/a/myfeeds",
                nu: "feedburner.google.com/fb/a/myfeeds"
            },
            54: {
                name: "Finance",
                i18n: "cj_i18n_00412",
                icon: "finance",
                u: "https://www.google.com/finance",
                nu: "www.google.com/finance",
                au: "https://www.google.com/finance?authuser=[authuser]"
            },
            55: {
                subId: "54",
                name: "Currency converter",
                i18n: "cj_i18n_00829",
                icon: "finance",
                badge: "swap_horiz",
                u: "https://www.google.com/search?q=Currency+converter&hl=en",
                nu: "www.google.com/search?q=Currency+converter&hl=en",
                au: "https://www.google.com/search?q=Currency+converter&hl=en&authuser=[authuser]"
            },
            56: {
                name: "Flights",
                i18n: "cj_i18n_00414",
                icon: "flights",
                u: "https://www.google.com/flights/",
                nu: "www.google.com/flights",
                au: "https://www.google.com/flights/?authuser=[authuser]"
            },
            57: {
                name: "Forms",
                i18n: "cj_i18n_00408",
                icon: "forms",
                u: "https://docs.google.com/forms/",
                nu: "docs.google.com/forms",
                au: "https://docs.google.com/forms/u/[authuser]/",
                aum: 1
            },
            58: {
                name: "Fusion Tables",
                i18n: "cj_i18n_00446",
                icon: "fusion_tables",
                u: "https://fusiontables.google.com/DataSource?dsrcid=implicit",
                nu: "fusiontables.google.com/DataSource?dsrcid=implicit"
            },
            59: {
                name: "Gmail",
                i18n: "cj_i18n_00416",
                icon: "googlemail",
                u: "https://mail.google.com/mail/",
                nu: "mail.google.com/mail",
                au: "https://mail.google.com/mail/u/[authuser]/",
                aum: 1
            },
            60: {
                subId: "59",
                name: "New email",
                i18n: "cj_i18n_00476",
                icon: "googlemail",
                badge: "add",
                u: "https://mail.google.com/mail/?view=cm",
                nu: "mail.google.com/mail/?view=cm",
                au: "https://mail.google.com/mail/u/[authuser]/?view=cm",
                aum: 1
            },
            61: {
                name: "Fonts",
                i18n: "cj_i18n_00415",
                icon: "fonts",
                u: "https://fonts.google.com/",
                nu: "fonts.google.com"
            },
            62: {
                name: "Input Tools",
                i18n: "cj_i18n_00477",
                icon: "input_tools",
                u: "https://www.google.com/inputtools/try/",
                nu: "www.google.com/inputtools/try"
            },
            63: {
                name: "Play Console",
                i18n: "cj_i18n_00478",
                icon: "play_devconsole",
                u: "https://play.google.com/apps/publish/",
                nu: "play.google.com/apps/publish",
                au: "https://play.google.com/apps/publish?authuser=[authuser]"
            },
            64: {
                name: "Play Artist Hub",
                i18n: "cj_i18n_00479",
                icon: "play_music",
                badge: "person",
                u: "https://play.google.com/music/publish/",
                nu: "play.google.com/music/publish",
                au: "https://play.google.com/music/publish/?u=[authuser]"
            },
            65: {
                name: "Play Books",
                i18n: "cj_i18n_00285",
                icon: "play_books",
                u: "https://play.google.com/books",
                nu: "play.google.com/books",
                au: "https://play.google.com/books?authuser=[authuser]",
                aum: 2
            },
            68: {
                name: "Play Movies",
                i18n: "cj_i18n_00424",
                icon: "play_movies",
                u: "https://play.google.com/movies",
                nu: "play.google.com/movies",
                au: "https://play.google.com/movies?authuser=[authuser]",
                aum: 2
            },
            69: {
                name: "Play Music",
                i18n: "cj_i18n_00431",
                icon: "play_music",
                u: "https://play.google.com/music/listen",
                nu: "play.google.com/music/listen",
                au: "https://play.google.com/music/listen?u=[authuser]"
            },
            70: {
                name: "Play Store",
                i18n: "cj_i18n_00430",
                icon: "play_store",
                u: "https://play.google.com/store",
                nu: "play.google.com/store",
                au: "https://play.google.com/store?authuser=[authuser]",
                aum: 2
            },
            71: {
                subId: "70",
                name: "Apps",
                i18n: "cj_i18n_00216",
                icon: "play_store",
                badge: "play_apps",
                u: "https://play.google.com/store/apps",
                nu: "play.google.com/store/apps",
                au: "https://play.google.com/store/apps?authuser=[authuser]",
                aum: 2
            },
            72: {
                subId: "70",
                name: "Books",
                i18n: "cj_i18n_00218",
                icon: "play_store",
                badge: "play_books",
                u: "https://play.google.com/store/books",
                nu: "play.google.com/store/books",
                au: "https://play.google.com/store/books?authuser=[authuser]",
                aum: 2
            },
            73: {
                name: "Google Store",
                i18n: "cj_i18n_00223",
                icon: "google_store",
                u: "https://store.google.com/",
                nu: "store.google.com",
                au: "https://store.google.com/?authuser=[authuser]",
                aum: 2
            },
            75: {
                subId: "70",
                name: "Movies",
                i18n: "cj_i18n_00480",
                icon: "play_store",
                badge: "play_movies",
                u: "https://play.google.com/store/movies",
                nu: "play.google.com/store/movies",
                au: "https://play.google.com/store/movies?authuser=[authuser]",
                aum: 2
            },
            76: {
                subId: "70",
                name: "Music",
                i18n: "cj_i18n_00219",
                icon: "play_store",
                badge: "play_music",
                u: "https://play.google.com/store/music",
                nu: "play.google.com/store/music",
                au: "https://play.google.com/store/music?authuser=[authuser]",
                aum: 2
            },
            77: {
                subId: "70",
                name: "Account",
                i18n: "cj_i18n_00481",
                icon: "play_store",
                badge: "person",
                u: "https://play.google.com/store/account",
                nu: "play.google.com/store/account",
                au: "https://play.google.com/store/account?authuser=[authuser]",
                aum: 2
            },
            78: {
                subId: "70",
                name: "Settings",
                i18n: "cj_i18n_00298",
                icon: "play_store",
                badge: "settings",
                u: "https://play.google.com/settings/",
                nu: "play.google.com/settings",
                au: "https://play.google.com/u/[authuser]/settings",
                aum: 2
            },
            79: {
                name: "My Account",
                i18n: "cj_i18n_00419",
                icon: "my_account",
                u: "https://myaccount.google.com/",
                nu: "myaccount.google.com",
                au: "https://myaccount.google.com/u/[authuser]/",
                bu: "https://myaccount.google.com/u/[authuser]/b/[pageid]/"
            },
            80: {
                name: "Merchandise Store",
                i18n: "cj_i18n_00482",
                icon: "googleg",
                u: "https://googlemerchandisestore.com/",
                nu: "googlemerchandisestore.com"
            },
            81: {
                subId: "565",
                name: "Android TV",
                i18n: "cj_i18n_00483",
                icon: "android_tv",
                u: "https://www.android.com/tv/",
                nu: "www.android.com/tv"
            },
            82: {
                name: "Google+",
                i18n: "cj_i18n_00417",
                icon: "gplus",
                u: "https://plus.google.com/",
                nu: "plus.google.com",
                au: "https://plus.google.com/u/[authuser]/",
                bu: "https://plus.google.com/u/[authuser]/b/[pageid]/"
            },
            83: {
                subId: "82",
                name: "People",
                i18n: "cj_i18n_00295",
                icon: "gplus",
                badge: "people",
                u: "https://plus.google.com/people",
                nu: "plus.google.com/people",
                au: "https://plus.google.com/u/[authuser]/people",
                bu: "https://plus.google.com/u/[authuser]/b/[pageid]/people"
            },
            84: {
                subId: "82",
                name: "Events",
                i18n: "cj_i18n_00484",
                icon: "gplus",
                badge: "event",
                u: "https://plus.google.com/events",
                nu: "plus.google.com/events",
                au: "https://plus.google.com/u/[authuser]/events",
                bu: "https://plus.google.com/u/[authuser]/b/[pageid]/events"
            },
            85: {
                subId: "82",
                name: "What's hot",
                i18n: "cj_i18n_00485",
                icon: "gplus",
                badge: "whatshot",
                u: "https://plus.google.com/explore",
                nu: "plus.google.com/explore",
                au: "https://plus.google.com/u/[authuser]/create",
                bu: "https://plus.google.com/u/[authuser]/b/[pageid]/explore"
            },
            89: {
                name: "Photos",
                i18n: "cj_i18n_00429",
                icon: "photos",
                u: "https://photos.google.com/",
                nu: "photos.google.com",
                au: "https://photos.google.com/u/[authuser]/",
                bu: "https://photos.google.com/u/[authuser]/b/[pageid]/"
            },
            90: {
                subId: "82",
                name: "Profile",
                i18n: "cj_i18n_00294",
                icon: "gplus",
                badge: "account_circle",
                u: "https://plus.google.com/me",
                nu: "plus.google.com/me",
                au: "https://plus.google.com/u/[authuser]/me",
                bu: "https://plus.google.com/u/[authuser]/b/[pageid]/me"
            },
            91: {
                subId: "146",
                name: "Government requests",
                i18n: "cj_i18n_00486",
                icon: "googleg",
                u: "https://transparencyreport.google.com/government-removals/overview",
                nu: "transparencyreport.google.com/government-removals/overview"
            },
            93: {
                name: "Groups",
                i18n: "cj_i18n_00418",
                icon: "groups",
                u: "https://groups.google.com/#!overview",
                nu: "groups.google.com/#!overview",
                au: "https://groups.google.com/?authuser=[authuser]#!overview",
                aum: 2
            },
            94: {
                name: "Hotels",
                i18n: "cj_i18n_01030",
                icon: "hotels",
                u: "https://www.google.com/travel/hotels",
                nu: "www.google.com/travel/hotels",
                au: "https://www.google.com/u/[authuser]/travel/hotels"
            },
            96: {
                name: "Images",
                i18n: "cj_i18n_00488",
                icon: "images",
                u: "https://www.google.com/imghp",
                nu: "www.google.com/imghp",
                au: "https://www.google.com/imghp?authuser=[authuser]"
            },
            97: {
                name: "Keep",
                i18n: "cj_i18n_00422",
                icon: "keep",
                u: "https://keep.google.com/",
                nu: "keep.google.com",
                au: "https://keep.google.com/u/[authuser]/"
            },
            99: {
                name: "LIFE photo archive",
                i18n: "cj_i18n_00489",
                icon: "life",
                u: "http://images.google.com/hosted/life",
                nu: "images.google.com/hosted/life"
            },
            101: {
                name: "Maps",
                i18n: "cj_i18n_00423",
                icon: "maps",
                u: "https://www.google.com/maps/",
                nu: "www.google.com/maps",
                au: "https://www.google.com/maps/?authuser=[authuser]"
            },
            102: {
                name: "Maps Indoor",
                i18n: "cj_i18n_00491",
                icon: "maps",
                badge: "layers",
                u: "https://maps.google.com/floorplans/find",
                nu: "maps.google.com/floorplans/find"
            },
            103: {
                name: "Mars",
                i18n: "cj_i18n_00492",
                icon: "mars",
                u: "https://www.google.com/mars/",
                nu: "www.google.com/mars"
            },
            104: {
                name: "Merchant Center",
                i18n: "cj_i18n_00493",
                icon: "merchant_center",
                u: "https://merchants.google.com/mc/merchantdashboard",
                nu: "merchants.google.com/mc/merchantdashboard",
                au: "https://merchants.google.com/mc/merchantdashboard?authuser=[authuser]"
            },
            106: {
                name: "Moon",
                i18n: "cj_i18n_00494",
                icon: "moon",
                u: "https://www.google.com/moon/",
                nu: "www.google.com/moon"
            },
            108: {
                name: "My Devices",
                i18n: "cj_i18n_00495",
                icon: "my_devices",
                u: "https://www.google.com/apps/mydevices/b/0",
                nu: "www.google.com/apps/mydevices/b/0"
            },
            109: {
                name: "News",
                i18n: "cj_i18n_00425",
                icon: "news",
                u: "https://news.google.com/",
                nu: "news.google.com",
                au: "https://news.google.com/u/[authuser]/"
            },
            110: {
                name: "News Archive",
                i18n: "cj_i18n_00496",
                icon: "news",
                badge: "schedule",
                u: "https://news.google.com/newspapers/",
                nu: "news.google.com/newspapers",
                au: "https://news.google.com/newspapers?authuser=[authuser]"
            },
            113: {
                name: "Pacman",
                i18n: "cj_i18n_00497",
                icon: "pacman",
                u: "https://www.google.com/doodles/30th-anniversary-of-pac-man",
                nu: "www.google.com/doodles/30th-anniversary-of-pac-man"
            },
            115: {
                name: "Patents",
                i18n: "cj_i18n_00427",
                icon: "patents",
                u: "https://patents.google.com/",
                nu: "patents.google.com",
                au: "https://patents.google.com/?authuser=[authuser]"
            },
            120: {
                name: "Public Alerts",
                i18n: "cj_i18n_00498",
                icon: "public_alerts",
                u: "https://www.google.org/publicalerts",
                nu: "www.google.org/publicalerts"
            },
            121: {
                name: "Public Data Explorer",
                i18n: "cj_i18n_00499",
                icon: "dot_org",
                badge: "bubble_chart",
                u: "https://www.google.com/publicdata/directory",
                nu: "www.google.com/publicdata/directory"
            },
            125: {
                name: "Scholar",
                i18n: "cj_i18n_00433",
                icon: "scholar",
                u: "https://scholar.google.com/",
                nu: "scholar.google.com",
                au: "https://scholar.google.com/?authuser=[authuser]"
            },
            126: {
                name: "Apps Script",
                i18n: "cj_i18n_00447",
                icon: "script",
                u: "https://script.google.com/home",
                nu: "script.google.com/home",
                au: "https://script.google.com/u/[authuser]/home",
                aum: 2
            },
            127: {
                name: "Search Settings",
                i18n: "cj_i18n_00500",
                icon: "googleg",
                badge: "settings",
                u: "https://www.google.com/preferences",
                nu: "www.google.com/preferences",
                au: "https://www.google.com/preferences?authuser=[authuser]"
            },
            128: {
                name: "Sheets",
                i18n: "cj_i18n_00393",
                icon: "sheets",
                u: "https://docs.google.com/spreadsheets/",
                nu: "docs.google.com/spreadsheets",
                au: "https://docs.google.com/spreadsheets/u/[authuser]/",
                aum: 1
            },
            129: {
                name: "Shopping",
                i18n: "cj_i18n_00435",
                icon: "shopping",
                u: "https://www.google.com/shopping",
                nu: "www.google.com/shopping",
                au: "https://www.google.com/shopping?authuser=[authuser]"
            },
            130: {
                name: "Classic Sites",
                i18n: "cj_i18n_00111",
                icon: "sites",
                u: "https://sites.google.com/",
                nu: "sites.google.com",
                au: "https://sites.google.com/site/sites/?authuser=[authuser]",
                aum: 2
            },
            132: {
                name: "Sky",
                i18n: "cj_i18n_00501",
                icon: "skymap",
                u: "https://www.google.com/sky/",
                nu: "www.google.com/sky"
            },
            133: {
                name: "Slides",
                i18n: "cj_i18n_00407",
                icon: "slides",
                u: "https://docs.google.com/presentation/",
                nu: "docs.google.com/presentation",
                au: "https://docs.google.com/presentation/u/[authuser]/",
                aum: 1
            },
            137: {
                name: "Help",
                i18n: "cj_i18n_00438",
                icon: "help",
                u: "https://support.google.com/",
                nu: "support.google.com",
                au: "https://support.google.com/?authuser=[authuser]"
            },
            138: {
                name: "Product Forums",
                i18n: "cj_i18n_00502",
                icon: "help",
                badge: "mode_comment",
                u: "https://productforums.google.com/forum/",
                nu: "productforums.google.com/forum",
                au: "https://productforums.google.com/forum/?authuser=[authuser]"
            },
            139: {
                name: "Takeout",
                i18n: "cj_i18n_00503",
                icon: "my_account",
                badge: "file_download",
                u: "https://takeout.google.com/settings/takeout",
                nu: "takeout.google.com/settings/takeout",
                au: "https://takeout.google.com/settings/u/[authuser]/takeout",
                bu: "https://takeout.google.com/settings/u/[authuser]/b/[pageid]/takeout"
            },
            140: {
                name: "Tasks",
                i18n: "cj_i18n_00439",
                icon: "tasks",
                u: "https://mail.google.com/tasks/canvas",
                nu: "mail.google.com/tasks/canvas"
            },
            142: {
                subId: "46",
                name: "Template gallery",
                i18n: "cj_i18n_00405",
                icon: "docs",
                badge: "category",
                u: "https://docs.google.com/document/?ftv=1",
                nu: "docs.google.com/document/?ftv=1",
                au: "https://docs.google.com/document/u/[authuser]/?ftv=1",
                aum: 1
            },
            143: {
                subId: "101",
                name: "Transit",
                i18n: "cj_i18n_00504",
                icon: "maps",
                badge: "directions_transit",
                u: "https://www.google.com/maps/?f=d&dirflg=r",
                nu: "www.google.com/maps/?f=d&dirflg=r"
            },
            144: {
                name: "Translate",
                i18n: "cj_i18n_00440",
                icon: "translate",
                u: "https://translate.google.com/",
                nu: "translate.google.com",
                au: "https://translate.google.com/?authuser=[authuser]"
            },
            145: {
                name: "Translator Toolkit",
                i18n: "cj_i18n_00505",
                icon: "translator_toolkit",
                u: "https://translate.google.com/toolkit/list",
                nu: "translate.google.com/toolkit/list"
            },
            146: {
                name: "Transparency Report",
                i18n: "cj_i18n_00506",
                icon: "googleg",
                u: "https://transparencyreport.google.com/",
                nu: "transparencyreport.google.com"
            },
            147: {
                name: "Trends",
                i18n: "cj_i18n_00441",
                icon: "trends",
                u: "https://trends.google.com/trends/",
                nu: "trends.google.com/trends"
            },
            149: {
                subId: "147",
                name: "Trending searches",
                i18n: "cj_i18n_00195",
                icon: "trends",
                badge: "trending_up",
                u: "https://trends.google.com/trends/trendingsearches/daily",
                nu: "trends.google.com/trends/trendingsearches/daily"
            },
            151: {
                name: "Trusted Tester",
                i18n: "cj_i18n_00508",
                icon: "googleg",
                u: "https://www.google.com/trustedtester/",
                nu: "www.google.com/trustedtester",
                au: "https://www.google.com/trustedtester/?authuser=[authuser]"
            },
            152: {
                name: "Url Shortener",
                i18n: "cj_i18n_00442",
                icon: "goo_gl",
                u: "https://goo.gl/",
                nu: "goo.gl"
            },
            153: {
                name: "Videos",
                i18n: "cj_i18n_00509",
                icon: "videos",
                u: "https://www.google.com/videohp",
                nu: "www.google.com/videohp",
                au: "https://www.google.com/videohp?authuser=[authuser]"
            },
            154: {
                name: "Voice",
                i18n: "cj_i18n_00443",
                icon: "voice",
                u: "https://voice.google.com/",
                nu: "voice.google.com",
                au: "https://voice.google.com/u/[authuser]/",
                aum: 1
            },
            155: {
                name: "Google Pay",
                i18n: "cj_i18n_01010",
                icon: "pay",
                u: "https://pay.google.com/payments/home",
                nu: "pay.google.com/payments/home",
                au: "https://pay.google.com/u/[authuser]/home"
            },
            157: {
                name: "Search",
                i18n: "cj_i18n_00434",
                icon: "googleg",
                u: "https://www.google.com/webhp",
                nu: "www.google.com/webhp",
                au: "https://www.google.com/webhp?authuser=[authuser]"
            },
            158: {
                name: "Search Console",
                i18n: "cj_i18n_00444",
                icon: "search_console",
                u: "https://www.google.com/webmasters/tools/home",
                nu: "www.google.com/webmasters/tools/home",
                au: "https://www.google.com/webmasters/tools/home?authuser=[authuser]"
            },
            160: {
                name: "YouTube",
                i18n: "cj_i18n_00445",
                icon: "youtube",
                u: "https://www.youtube.com/",
                nu: "www.youtube.com",
                au: "https://www.youtube.com/signin?authuser=[authuser]",
                bu: "https://www.youtube.com/signin?authuser=[authuser]&pageid=[pageid]",
                aum: 2
            },
            161: {
                subId: "320",
                name: "Analytics",
                i18n: "cj_i18n_00510",
                icon: "youtube_creator",
                badge: "timeline",
                u: "https://www.youtube.com/analytics",
                nu: "www.youtube.com/analytics",
                au: "https://www.youtube.com/signin?authuser=[authuser]&next=analytics",
                bu: "https://www.youtube.com/signin?authuser=[authuser]&pageid=[pageid]&next=analytics",
                aum: 2
            },
            162: {
                name: "YouTube on TV",
                i18n: "cj_i18n_00840",
                icon: "youtube",
                badge: "tv",
                u: "https://www.youtube.com/tv",
                nu: "www.youtube.com/tv"
            },
            163: {
                subId: "147",
                name: "Year in search",
                i18n: "cj_i18n_00512",
                icon: "trends",
                badge: "public",
                u: "https://trends.google.com/trends/yis/2017/",
                nu: "trends.google.com/trends/yis/2017"
            },
            164: {
                name: "Tag Manager",
                i18n: "cj_i18n_00513",
                icon: "tag_manager",
                u: "https://tagmanager.google.com/",
                nu: "tagmanager.google.com",
                au: "https://tagmanager.google.com/?authuser=[authuser]"
            },
            165: {
                name: "Tables Search",
                i18n: "cj_i18n_00514",
                icon: "fusion_tables",
                badge: "search",
                u: "https://research.google.com/tables",
                nu: "research.google.com/tables",
                au: "https://research.google.com/tables?authuser=[authuser]"
            },
            167: {
                name: "My Maps",
                i18n: "cj_i18n_00410",
                icon: "my_maps",
                u: "https://www.google.com/maps/d/",
                nu: "www.google.com/maps/d",
                au: "https://www.google.com/maps/d/u/[authuser]/"
            },
            169: {
                name: "AdWords Express",
                i18n: "cj_i18n_00515",
                icon: "adwords_express",
                u: "https://adwords.google.com/express/plus/Plus",
                nu: "adwords.google.com/express/plus/Plus",
                au: "https://adwords.google.com/express/plus/Business?authuser=[authuser]",
                bu: "https://adwords.google.com/express/plus/Plus?authuser=[authuser]&__p=[pageid]"
            },
            170: {
                subId: "82",
                name: "Communities",
                i18n: "cj_i18n_00293",
                icon: "gplus",
                badge: "communities",
                u: "https://plus.google.com/communities",
                nu: "plus.google.com/communities",
                au: "https://plus.google.com/u/[authuser]/communities",
                bu: "https://plus.google.com/u/[authuser]/b/[pageid]/communities"
            },
            171: {
                name: "Admin",
                i18n: "cj_i18n_00177",
                icon: "admin",
                u: "https://admin.google.com/AdminHome",
                nu: "admin.google.com/AdminHome",
                au: "https://admin.google.com/AdminHome?authuser=[authuser]",
                aum: 2
            },
            172: {
                subId: "23",
                name: "Add this",
                i18n: "cj_i18n_00516",
                icon: "bookmarks",
                badge: "arrow_forward"
            },
            175: {
                subId: "59",
                name: "Mail this",
                i18n: "cj_i18n_00517",
                icon: "googlemail",
                badge: "arrow_forward"
            },
            176: {
                subId: "101",
                name: "Map this",
                i18n: "cj_i18n_00518",
                icon: "maps",
                badge: "arrow_forward"
            },
            178: {
                subId: "152",
                name: "Shorten url",
                i18n: "cj_i18n_00519",
                icon: "goo_gl",
                badge: "link"
            },
            179: {
                name: "Find My Device",
                i18n: "cj_i18n_00520",
                icon: "device_manager",
                u: "https://www.google.com/android/find",
                nu: "www.google.com/android/find",
                au: "https://www.google.com/android/find?u=[authuser]"
            },
            180: {
                subId: "160",
                name: "My subscriptions",
                i18n: "cj_i18n_00521",
                icon: "youtube",
                badge: "my_subscriptions",
                u: "https://www.youtube.com/feed/subscriptions",
                nu: "www.youtube.com/feed/subscriptions",
                au: "https://www.youtube.com/signin?authuser=[authuser]&next=feed%2Fsubscriptions",
                bu: "https://www.youtube.com/signin?authuser=[authuser]&pageid=[pageid]&next=feed%2Fsubscriptions",
                aum: 2
            },
            181: {
                name: "Feedback Reports",
                i18n: "cj_i18n_00522",
                icon: "feedback",
                u: "https://www.google.com/tools/feedback/reports",
                nu: "www.google.com/tools/feedback/reports",
                au: "https://www.google.com/tools/feedback/reports?authuser=[authuser]",
                bu: "https://www.google.com/tools/feedback/reports?authuser=[authuser]&pageId=[pageid]"
            },
            182: {
                subId: "6",
                name: "Keyword Planner",
                i18n: "cj_i18n_00523",
                icon: "ads",
                badge: "vpn_key",
                u: "https://ads.google.com/aw/keywordplanner/home",
                nu: "ads.google.com/aw/keywordplanner/home",
                au: "https://ads.google.com/aw/keywordplanner/home?authuser=[authuser]"
            },
            184: {
                name: "Studio",
                i18n: "cj_i18n_01098",
                icon: "studio",
                u: "https://www.google.com/doubleclick/studio/",
                nu: "www.google.com/doubleclick/studio"
            },
            185: {
                name: "Maps Timeline",
                i18n: "cj_i18n_00525",
                icon: "maps",
                badge: "timeline",
                u: "https://www.google.com/maps/timeline",
                nu: "www.google.com/maps/timeline",
                au: "https://www.google.com/maps/timeline?authuser=[authuser]"
            },
            186: {
                name: "Analytics Gallery",
                i18n: "cj_i18n_00526",
                icon: "analytics",
                badge: "extension",
                u: "https://analytics.google.com/analytics/gallery/",
                nu: "analytics.google.com/analytics/gallery"
            },
            188: {
                name: "ReCaptcha",
                i18n: "cj_i18n_00527",
                icon: "recaptcha",
                u: "https://www.google.com/recaptcha/admin",
                nu: "www.google.com/recaptcha/admin"
            },
            189: {
                subId: "147",
                name: "Explore",
                i18n: "cj_i18n_00061",
                icon: "trends",
                badge: "search",
                u: "https://trends.google.com/trends/explore",
                nu: "trends.google.com/trends/explore"
            },
            190: {
                subId: "158",
                name: "My Removal Requests",
                i18n: "cj_i18n_00528",
                icon: "search_console",
                badge: "block",
                u: "https://www.google.com/webmasters/tools/removals",
                nu: "www.google.com/webmasters/tools/removals",
                au: "https://www.google.com/webmasters/tools/removals?authuser=[authuser]"
            },
            192: {
                name: "Earth Tour Builder",
                i18n: "cj_i18n_00529",
                icon: "earth",
                badge: "directions",
                u: "https://tourbuilder.withgoogle.com/",
                nu: "tourbuilder.withgoogle.com"
            },
            196: {
                name: "Person Finder",
                i18n: "cj_i18n_00530",
                icon: "dot_org",
                badge: "person",
                u: "https://google.org/personfinder/global/home.html",
                nu: "google.org/personfinder/global/home.html"
            },
            197: {
                name: "Crisis Map",
                i18n: "cj_i18n_00531",
                icon: "dot_org",
                badge: "map",
                u: "https://www.google.org/crisismap/",
                nu: "www.google.org/crisismap"
            },
            198: {
                name: "Fiber - My Fiber",
                i18n: "cj_i18n_00532",
                icon: "fiber",
                badge: "person",
                u: "https://fiber.google.com/myfiber/",
                nu: "fiber.google.com/myfiber"
            },
            200: {
                subId: "147",
                name: "Top charts",
                i18n: "cj_i18n_00192",
                icon: "trends",
                badge: "bar_chart",
                u: "https://trends.google.com/trends/topcharts",
                nu: "trends.google.com/trends/topcharts"
            },
            201: {
                subId: "160",
                name: "Trending",
                i18n: "cj_i18n_00153",
                icon: "youtube",
                badge: "youtube_trending",
                u: "https://www.youtube.com/feed/trending",
                nu: "www.youtube.com/feed/trending",
                au: "https://www.youtube.com/signin?authuser=[authuser]&next=feed%2Ftrending",
                bu: "https://www.youtube.com/signin?authuser=[authuser]&pageid=[pageid]&next=feed%2Ftrending",
                aum: 2
            },
            202: {
                subId: "374",
                name: "APIs & Services",
                i18n: "cj_i18n_01142",
                icon: "cloud",
                badge: "cj_gcp_api",
                u: "https://console.cloud.google.com/apis/dashboard",
                nu: "console.cloud.google.com/apis/dashboard",
                au: "https://console.cloud.google.com/apis/dashboard?authuser=[authuser]"
            },
            203: {
                name: "Shortlists",
                i18n: "cj_i18n_00436",
                icon: "shortlists",
                u: "https://www.google.com/shopping/shortlists/",
                nu: "www.google.com/shopping/shortlists",
                au: "https://www.google.com/shopping/shortlists/u/[authuser]/",
                aum: 1
            },
            204: {
                name: "Partners",
                i18n: "cj_i18n_00534",
                icon: "googleg",
                badge: "person",
                u: "https://www.google.com/partners/",
                nu: "www.google.com/partners",
                au: "https://www.google.com/partners/?authuser=[authuser]"
            },
            205: {
                name: "Cultural Institute",
                i18n: "cj_i18n_00535",
                icon: "arts_and_culture",
                badge: "info",
                u: "https://www.google.com/culturalinstitute/about/",
                nu: "www.google.com/culturalinstitute/about"
            },
            206: {
                subId: "469",
                name: "Campaign Url Builder",
                i18n: "cj_i18n_00833",
                icon: "analytics_tools",
                badge: "link",
                u: "https://ga-dev-tools.appspot.com/campaign-url-builder/",
                nu: "ga-dev-tools.appspot.com/campaign-url-builder"
            },
            207: {
                name: "Google Tips",
                i18n: "cj_i18n_00537",
                icon: "tips",
                u: "https://get.google.com/apptips/tips/",
                nu: "get.google.com/apptips/tips"
            },
            208: {
                name: "Planning Tools",
                i18n: "cj_i18n_00538",
                icon: "googleg",
                u: "https://www.thinkwithgoogle.com/tools/",
                nu: "www.thinkwithgoogle.com/tools"
            },
            209: {
                name: "Play Books Partner Center",
                i18n: "cj_i18n_00539",
                icon: "play_books",
                badge: "person",
                u: "https://play.google.com/books/publish/",
                nu: "play.google.com/books/publish",
                au: "https://play.google.com/books/publish/u/[authuser]/"
            },
            210: {
                subId: "109",
                name: "Favorites",
                i18n: "cj_i18n_00692",
                icon: "news",
                badge: "star",
                u: "https://news.google.com/my/library",
                nu: "news.google.com/my/library",
                au: "https://news.google.com/u/[authuser]/my/library"
            },
            211: {
                subId: "757",
                name: "Training Center",
                i18n: "cj_i18n_01041",
                icon: "newslab",
                u: "https://newsinitiative.withgoogle.com/training/",
                nu: "newsinitiative.withgoogle.com/training"
            },
            213: {
                name: "G Suite Status Dashboard",
                i18n: "cj_i18n_00541",
                icon: "apps",
                badge: "planner_review",
                u: "https://www.google.com/appsstatus",
                nu: "www.google.com/appsstatus"
            },
            214: {
                name: "Jigsaw",
                i18n: "cj_i18n_00542",
                icon: "jigsaw",
                u: "https://jigsaw.google.com/",
                nu: "jigsaw.google.com"
            },
            215: {
                subId: "73",
                name: "Phones",
                i18n: "cj_i18n_01040",
                icon: "google_store",
                badge: "phone_android",
                u: "https://store.google.com/category/phones",
                nu: "store.google.com/category/phones"
            },
            216: {
                name: "A Google a day",
                i18n: "cj_i18n_00544",
                icon: "googleg",
                u: "http://www.agoogleaday.com/",
                nu: "www.agoogleaday.com"
            },
            217: {
                subId: "157",
                name: "About",
                i18n: "cj_i18n_00838",
                icon: "googleg",
                badge: "info",
                u: "https://www.google.com/search/about/",
                nu: "www.google.com/search/about"
            },
            218: {
                name: "Hangouts",
                i18n: "cj_i18n_00420",
                icon: "hangouts",
                u: "https://hangouts.google.com/",
                nu: "hangouts.google.com",
                au: "https://hangouts.google.com/?authuser=[authuser]"
            },
            219: {
                subId: "39",
                name: "Add contact",
                i18n: "cj_i18n_00546",
                icon: "contacts",
                badge: "add",
                u: "https://www.google.com/contacts/#contact/new",
                nu: "www.google.com/contacts/#contact/new",
                au: "https://www.google.com/contacts/u/[authuser]/#contact/new"
            },
            220: {
                subId: "158",
                name: "Structured Data Testing Tool",
                i18n: "cj_i18n_00270",
                icon: "search_console",
                badge: "build",
                u: "https://search.google.com/structured-data/testing-tool/",
                nu: "search.google.com/structured-data/testing-tool",
                au: "https://search.google.com/structured-data/testing-tool/u/[authuser]/"
            },
            221: {
                name: "PageSpeed Insights",
                i18n: "cj_i18n_00275",
                icon: "pagespeed",
                u: "https://developers.google.com/speed/pagespeed/insights/",
                nu: "developers.google.com/speed/pagespeed/insights"
            },
            222: {
                subId: "42",
                name: "New search engine",
                i18n: "cj_i18n_00547",
                icon: "custom_search",
                badge: "add",
                u: "https://cse.google.com/cse/create/new",
                nu: "cse.google.com/cse/create/new"
            },
            223: {
                subId: "158",
                name: "Structured Data Markup Helper",
                i18n: "cj_i18n_00271",
                icon: "search_console",
                badge: "build",
                u: "https://www.google.com/webmasters/markup-helper/",
                nu: "www.google.com/webmasters/markup-helper",
                au: "https://www.google.com/webmasters/markup-helper/u/[authuser]/"
            },
            224: {
                subId: "158",
                name: "Email Markup Tester",
                i18n: "cj_i18n_00272",
                icon: "search_console",
                badge: "email",
                u: "https://www.google.com/webmasters/markup-tester/",
                nu: "www.google.com/webmasters/markup-tester",
                au: "https://www.google.com/webmasters/markup-tester/u/[authuser]/"
            },
            225: {
                name: "Follow Your World",
                i18n: "cj_i18n_00548",
                icon: "earth",
                badge: "place",
                u: "https://followyourworld.appspot.com/",
                nu: "followyourworld.appspot.com"
            },
            226: {
                name: "Glass",
                i18n: "cj_i18n_00549",
                icon: "glass",
                u: "https://x.company/glass/",
                nu: "x.company/glass"
            },
            227: {
                subId: "70",
                name: "Wishlist",
                i18n: "cj_i18n_00550",
                icon: "play_store",
                badge: "cjg_wishlist",
                u: "https://play.google.com/wishlist",
                nu: "play.google.com/wishlist",
                au: "https://play.google.com/wishlist?authuser=[authuser]",
                aum: 2
            },
            228: {
                name: "OAuth 2.0 Playground",
                i18n: "cj_i18n_00551",
                icon: "oauth2",
                u: "https://developers.google.com/oauthplayground/",
                nu: "developers.google.com/oauthplayground"
            },
            230: {
                name: "Global Market Finder",
                i18n: "cj_i18n_00552",
                icon: "googleg",
                u: "https://marketfinder.thinkwithgoogle.com/intl/en/",
                nu: "marketfinder.thinkwithgoogle.com/intl/en"
            },
            231: {
                name: "GV",
                i18n: "cj_i18n_00553",
                icon: "googleg",
                u: "https://www.gv.com/",
                nu: "www.gv.com"
            },
            232: {
                name: "Classroom",
                i18n: "cj_i18n_00305",
                icon: "classroom",
                u: "https://classroom.google.com/",
                nu: "classroom.google.com",
                au: "https://classroom.google.com/u/[authuser]/"
            },
            234: {
                name: "My Business",
                i18n: "cj_i18n_00554",
                icon: "my_business",
                u: "https://business.google.com/",
                nu: "business.google.com",
                au: "https://business.google.com/u/[authuser]/",
                bu: "https://business.google.com/u/[authuser]/b/[pageid]/"
            },
            235: {
                subId: "234",
                name: "Add location",
                i18n: "cj_i18n_00555",
                icon: "my_business",
                badge: "add",
                u: "https://business.google.com/create",
                nu: "business.google.com/create",
                au: "https://business.google.com/u/[authuser]/create"
            },
            236: {
                name: "Mobile Apps",
                i18n: "cj_i18n_00556",
                icon: "mobile",
                u: "https://get.google.com/apptips/apps/",
                nu: "get.google.com/apptips/apps"
            },
            237: {
                name: "Think with Google",
                i18n: "cj_i18n_00557",
                icon: "googleg",
                u: "https://www.thinkwithgoogle.com/",
                nu: "www.thinkwithgoogle.com"
            },
            238: {
                name: "Zero Moment of Truth",
                i18n: "cj_i18n_00558",
                icon: "googleg",
                u: "https://www.thinkwithgoogle.com/marketing-resources/micro-moments/zero-moment-truth/",
                nu: "www.thinkwithgoogle.com/marketing-resources/micro-moments/zero-moment-truth"
            },
            240: {
                name: "Careers",
                i18n: "cj_i18n_00560",
                icon: "googleg",
                u: "https://careers.google.com/",
                nu: "careers.google.com"
            },
            241: {
                name: "Drive storage",
                i18n: "cj_i18n_00561",
                icon: "drive",
                badge: "storage",
                u: "https://drive.google.com/settings/storage",
                nu: "drive.google.com/settings/storage",
                au: "https://drive.google.com/u/[authuser]/settings/storage"
            },
            242: {
                name: "Design",
                i18n: "cj_i18n_00562",
                icon: "design",
                u: "https://design.google/",
                nu: "design.google"
            },
            243: {
                name: "G Suite Toolbox Site",
                i18n: "cj_i18n_00563",
                icon: "apps",
                badge: "service_toolbox",
                u: "https://toolbox.googleapps.com/apps/main/",
                nu: "toolbox.googleapps.com/apps/main"
            },
            244: {
                name: "Think with Google - Experience & Design",
                i18n: "cj_i18n_00564",
                icon: "creative_sandbox",
                u: "https://www.thinkwithgoogle.com/marketing-resources/experience-design/",
                nu: "www.thinkwithgoogle.com/marketing-resources/experience-design"
            },
            246: {
                name: "Webmasters",
                i18n: "cj_i18n_00565",
                icon: "search_console",
                u: "https://www.google.com/webmasters/",
                nu: "www.google.com/webmasters"
            },
            247: {
                subId: "79",
                name: "2-Step verification",
                i18n: "cj_i18n_00566",
                icon: "my_account",
                badge: "security",
                u: "https://myaccount.google.com/signinoptions/two-step-verification",
                nu: "myaccount.google.com/signinoptions/two-step-verification",
                au: "https://myaccount.google.com/u/[authuser]/signinoptions/two-step-verification",
                bu: "https://myaccount.google.com/u/[authuser]/b/[pageid]/signinoptions/two-step-verification"
            },
            248: {
                subId: "439",
                name: "Press Corner",
                i18n: "cj_i18n_00567",
                icon: "googleg",
                badge: "news",
                u: "https://www.blog.google/press/",
                nu: "www.blog.google/press"
            },
            251: {
                name: "Project Loon",
                i18n: "cj_i18n_00569",
                icon: "x",
                u: "https://loon.co/",
                nu: "loon.co"
            },
            252: {
                name: "Entrepreneurs",
                i18n: "cj_i18n_00570",
                icon: "googleg",
                u: "https://www.googleforentrepreneurs.com/",
                nu: "www.googleforentrepreneurs.com"
            },
            253: {
                name: "Advisory Council",
                i18n: "cj_i18n_00571",
                icon: "googleg",
                u: "https://archive.google.com/advisorycouncil/",
                nu: "archive.google.com/advisorycouncil"
            },
            254: {
                subId: "6",
                name: "About",
                i18n: "cj_i18n_00838",
                icon: "ads",
                badge: "info",
                u: "https://ads.google.com/home/",
                nu: "ads.google.com/home"
            },
            255: {
                name: "Scholars Program",
                i18n: "cj_i18n_00827",
                icon: "googleg",
                badge: "school",
                u: "https://www.womentechmakers.com/scholars",
                nu: "www.womentechmakers.com/scholars"
            },
            256: {
                name: "Google for Education",
                i18n: "cj_i18n_00574",
                icon: "googleg",
                badge: "school",
                u: "https://edu.google.com/",
                nu: "edu.google.com"
            },
            257: {
                name: "Business Solutions",
                i18n: "cj_i18n_00575",
                icon: "googleg",
                badge: "business",
                u: "https://www.google.com/services/",
                nu: "www.google.com/services"
            },
            258: {
                name: "News Producer",
                i18n: "cj_i18n_01065",
                icon: "news",
                badge: "person",
                u: "https://www.google.com/producer/home",
                nu: "www.google.com/producer/home"
            },
            259: {
                name: "Spectrum Database",
                i18n: "cj_i18n_00577",
                icon: "googleg",
                u: "https://www.google.com/get/spectrumdatabase/",
                nu: "www.google.com/get/spectrumdatabase"
            },
            260: {
                name: "Safety Center",
                i18n: "cj_i18n_00578",
                icon: "my_account",
                badge: "security",
                u: "https://safety.google/",
                nu: "safety.google"
            },
            261: {
                name: "Chrome",
                i18n: "cj_i18n_00579",
                icon: "chrome",
                u: "https://www.google.com/chrome/",
                nu: "www.google.com/chrome"
            },
            262: {
                name: "AdMob",
                i18n: "cj_i18n_00580",
                icon: "admob",
                u: "https://apps.admob.com/",
                nu: "apps.admob.com"
            },
            263: {
                name: "Application Security",
                i18n: "cj_i18n_00581",
                icon: "my_account",
                badge: "security",
                u: "https://www.google.com/about/appsecurity/",
                nu: "www.google.com/about/appsecurity"
            },
            264: {
                name: "Alphabet Investor Relations",
                i18n: "cj_i18n_00582",
                icon: "alphabet",
                badge: "business",
                u: "https://abc.xyz/investor/",
                nu: "abc.xyz/investor"
            },
            266: {
                name: "Nik Collection",
                i18n: "cj_i18n_00583",
                icon: "nik_collection",
                u: "https://www.google.com/nikcollection/",
                nu: "www.google.com/nikcollection"
            },
            267: {
                name: "Earth Outreach",
                i18n: "cj_i18n_00584",
                icon: "earth",
                badge: "language",
                u: "https://www.google.com/earth/outreach/",
                nu: "www.google.com/earth/outreach"
            },
            268: {
                name: "Cloud Solutions",
                i18n: "cj_i18n_01066",
                icon: "google_cloud",
                badge: "drive_keep",
                u: "https://cloud.google.com/solutions/",
                nu: "cloud.google.com/solutions",
                au: "https://cloud.google.com/solutions/?authuser=[authuser]"
            },
            269: {
                name: "Doodles",
                i18n: "cj_i18n_00586",
                icon: "googleg",
                u: "https://www.google.com/doodles",
                nu: "www.google.com/doodles"
            },
            270: {
                name: "Dot Org",
                i18n: "cj_i18n_00587",
                icon: "dot_org",
                u: "https://www.google.org/",
                nu: "www.google.org"
            },
            271: {
                name: "Domains",
                i18n: "cj_i18n_00588",
                icon: "domains",
                u: "https://domains.google.com/registrar",
                nu: "domains.google.com/registrar",
                au: "https://domains.google.com/registrar?authuser=[authuser]"
            },
            272: {
                subId: "157",
                name: "Calculator",
                i18n: "cj_i18n_00589",
                icon: "calculator",
                u: "https://www.google.com/search?q=calculator",
                nu: "www.google.com/search?q=calculator",
                au: "https://www.google.com/search?q=calculator&authuser=[authuser]"
            },
            273: {
                name: "Maps Smarty Pins",
                i18n: "cj_i18n_00590",
                icon: "maps",
                badge: "pin_drop",
                u: "https://smartypins.withgoogle.com/",
                nu: "smartypins.withgoogle.com"
            },
            274: {
                name: "Analytics Academy",
                i18n: "cj_i18n_00591",
                icon: "analytics",
                badge: "school",
                u: "https://analytics.google.com/analytics/academy/",
                nu: "analytics.google.com/analytics/academy",
                au: "https://analytics.google.com/analytics/academy/?authuser=[authuser]"
            },
            275: {
                name: "Street Art",
                i18n: "cj_i18n_00592",
                icon: "googleg",
                u: "https://streetart.withgoogle.com/",
                nu: "streetart.withgoogle.com"
            },
            277: {
                name: "YouTube Creator Academy",
                i18n: "cj_i18n_00593",
                icon: "youtube_creator",
                badge: "school",
                u: "https://creatoracademy.youtube.com/",
                nu: "creatoracademy.youtube.com"
            },
            279: {
                name: "Spell Up",
                i18n: "cj_i18n_00594",
                icon: "googleg",
                u: "https://spellup.withgoogle.com/",
                nu: "spellup.withgoogle.com"
            },
            280: {
                subId: "218",
                name: "New hangout",
                i18n: "cj_i18n_00595",
                icon: "hangouts",
                badge: "add",
                u: "https://hangouts.google.com/call/",
                nu: "hangouts.google.com/call",
                au: "https://hangouts.google.com/u/[authuser]/call/"
            },
            281: {
                name: "Contact Google",
                i18n: "cj_i18n_00596",
                icon: "googleg",
                u: "https://www.google.com/contact/",
                nu: "www.google.com/contact"
            },
            283: {
                name: "Cloud Platform",
                i18n: "cj_i18n_00597",
                icon: "google_cloud",
                u: "https://cloud.google.com/",
                nu: "cloud.google.com",
                au: "https://cloud.google.com/?authuser=[authuser]"
            },
            286: {
                subId: "45",
                name: "Products",
                i18n: "cj_i18n_00835",
                icon: "developers",
                badge: "apps",
                u: "https://developers.google.com/products/",
                nu: "developers.google.com/products",
                au: "https://developers.google.com/products/?authuser=[authuser]"
            },
            287: {
                name: "Web Designer",
                i18n: "cj_i18n_00600",
                icon: "web_designer",
                u: "https://www.google.com/webdesigner/",
                nu: "www.google.com/webdesigner"
            },
            288: {
                name: "Research",
                i18n: "cj_i18n_00601",
                icon: "research",
                u: "https://ai.google/research",
                nu: "ai.google/research"
            },
            289: {
                name: "GWT",
                i18n: "cj_i18n_00602",
                icon: "gwt",
                u: "http://www.gwtproject.org/",
                nu: "www.gwtproject.org"
            },
            291: {
                name: "Sync",
                i18n: "cj_i18n_00603",
                icon: "sync",
                u: "https://www.google.com/sync/index.html",
                nu: "www.google.com/sync/index.html"
            },
            293: {
                name: "Public DNS",
                i18n: "cj_i18n_00605",
                icon: "public_dns",
                u: "https://developers.google.com/speed/public-dns/",
                nu: "developers.google.com/speed/public-dns",
                au: "https://developers.google.com/speed/public-dns/?authuser=[authuser]"
            },
            294: {
                name: "Correlate",
                i18n: "cj_i18n_00194",
                icon: "trends",
                badge: "compare_arrows",
                u: "https://www.google.com/trends/correlate",
                nu: "www.google.com/trends/correlate"
            },
            295: {
                name: "Inbox",
                i18n: "cj_i18n_00421",
                icon: "inbox",
                u: "https://inbox.google.com/",
                nu: "inbox.google.com",
                au: "https://inbox.google.com/u/[authuser]/"
            },
            296: {
                name: "Express",
                i18n: "cj_i18n_00411",
                icon: "express",
                u: "https://express.google.com/",
                nu: "express.google.com",
                au: "https://express.google.com/u/[authuser]/"
            },
            297: {
                subId: "374",
                name: "BigQuery",
                i18n: "cj_i18n_00606",
                icon: "cloud",
                badge: "cj_gcp_bigquery",
                u: "https://console.cloud.google.com/bigquery",
                nu: "console.cloud.google.com/bigquery",
                au: "https://console.cloud.google.com/bigquery?authuser=[authuser]"
            },
            298: {
                name: "Fit",
                i18n: "cj_i18n_00413",
                icon: "fit",
                u: "https://fit.google.com/",
                nu: "fit.google.com",
                au: "https://fit.google.com/u/[authuser]/"
            },
            299: {
                subId: "46",
                name: "New document",
                i18n: "cj_i18n_00607",
                icon: "docs",
                badge: "add",
                u: "https://docs.google.com/document/create",
                nu: "docs.google.com/document/create",
                au: "https://docs.google.com/document/u/[authuser]/create",
                aum: 2
            },
            300: {
                subId: "128",
                name: "New spreadsheet",
                i18n: "cj_i18n_00608",
                icon: "sheets",
                badge: "add",
                u: "https://docs.google.com/spreadsheets/create",
                nu: "docs.google.com/spreadsheets/create",
                au: "https://docs.google.com/spreadsheets/u/[authuser]/create",
                aum: 2
            },
            301: {
                subId: "133",
                name: "New presentation",
                i18n: "cj_i18n_00609",
                icon: "slides",
                badge: "add",
                u: "https://docs.google.com/presentation/create",
                nu: "docs.google.com/presentation/create",
                au: "https://docs.google.com/presentation/u/[authuser]/create",
                aum: 2
            },
            302: {
                name: "Wear OS",
                i18n: "cj_i18n_01023",
                icon: "wear_os",
                u: "https://wearos.google.com/",
                nu: "wearos.google.com"
            },
            303: {
                subId: "565",
                name: "Android Auto",
                i18n: "cj_i18n_00611",
                icon: "android_auto",
                u: "https://www.android.com/auto/",
                nu: "www.android.com/auto"
            },
            304: {
                subId: "565",
                name: "Android Play",
                i18n: "cj_i18n_00612",
                icon: "play_apps",
                badge: "play_prism",
                u: "https://www.android.com/play/",
                nu: "www.android.com/play"
            },
            305: {
                subId: "565",
                name: "Android Tablets",
                i18n: "cj_i18n_00613",
                icon: "play_apps",
                badge: "tablet",
                u: "https://www.android.com/tablets/",
                nu: "www.android.com/tablets"
            },
            306: {
                subId: "565",
                name: "Android Phones",
                i18n: "cj_i18n_00614",
                icon: "play_apps",
                badge: "smartphone",
                u: "https://www.android.com/phones/",
                nu: "www.android.com/phones"
            },
            307: {
                name: "Project Fi",
                i18n: "cj_i18n_00615",
                icon: "fi",
                u: "https://fi.google.com/account",
                nu: "fi.google.com/account",
                au: "https://fi.google.com/account?u=[authuser]"
            },
            308: {
                name: "Vault",
                i18n: "cj_i18n_00616",
                icon: "vault",
                u: "https://ediscovery.google.com/discovery/",
                nu: "ediscovery.google.com/discovery",
                au: "https://ediscovery.google.com/discovery/u/[authuser]/"
            },
            310: {
                name: "Swiffy",
                i18n: "cj_i18n_00617",
                icon: "developers",
                u: "https://developers.google.com/swiffy/",
                nu: "developers.google.com/swiffy",
                au: "https://developers.google.com/swiffy/?authuser=[authuser]"
            },
            311: {
                subId: "82",
                name: "Collections",
                i18n: "cj_i18n_00292",
                icon: "gplus",
                badge: "google_collections",
                u: "https://plus.google.com/collections",
                nu: "plus.google.com/collections",
                au: "https://plus.google.com/u/[authuser]/collections",
                bu: "https://plus.google.com/u/[authuser]/b/[pageid]/collections"
            },
            312: {
                subId: "70",
                name: "Wear Apps",
                i18n: "cj_i18n_00618",
                icon: "play_store",
                badge: "watch",
                u: "https://play.google.com/store/apps/category/ANDROID_WEAR",
                nu: "play.google.com/store/apps/category/ANDROID_WEAR",
                au: "https://play.google.com/store/apps/category/ANDROID_WEAR?authuser=[authuser]",
                aum: 2
            },
            315: {
                name: "Migration for Outlook",
                i18n: "cj_i18n_00619",
                icon: "apps",
                badge: "email",
                u: "https://tools.google.com/dlpage/outlookmigration",
                nu: "tools.google.com/dlpage/outlookmigration"
            },
            316: {
                subId: "89",
                name: "Albums",
                i18n: "cj_i18n_00400",
                icon: "photos",
                badge: "photo_library",
                u: "https://photos.google.com/albums",
                nu: "photos.google.com/albums",
                au: "https://photos.google.com/u/[authuser]/albums",
                bu: "https://photos.google.com/u/[authuser]/b/[pageid]/albums"
            },
            317: {
                subId: "89",
                name: "Assistant",
                i18n: "cj_i18n_00620",
                icon: "photos",
                badge: "assistant",
                u: "https://photos.google.com/assistant",
                nu: "photos.google.com/assistant",
                au: "https://photos.google.com/u/[authuser]/assistant",
                bu: "https://photos.google.com/u/[authuser]/b/[pageid]/assistant"
            },
            319: {
                name: "YouTube Trends",
                i18n: "cj_i18n_00621",
                icon: "youtube",
                badge: "trending_up",
                u: "https://youtube-trends.blogspot.com/",
                nu: "youtube-trends.blogspot.com"
            },
            320: {
                name: "Studio Classic",
                i18n: "cj_i18n_01067",
                icon: "youtube_creator",
                badge: "history",
                u: "https://www.youtube.com/dashboard",
                nu: "www.youtube.com/dashboard",
                au: "https://www.youtube.com/signin?authuser=[authuser]&next=dashboard",
                bu: "https://www.youtube.com/signin?authuser=[authuser]&pageid=[pageid]&next=dashboard",
                aum: 2
            },
            321: {
                subId: "320",
                name: "Live streaming",
                i18n: "cj_i18n_00623",
                icon: "youtube_creator",
                badge: "youtube_live",
                u: "https://www.youtube.com/live_dashboard",
                nu: "www.youtube.com/live_dashboard",
                au: "https://www.youtube.com/signin?authuser=[authuser]&next=live_dashboard_splash",
                bu: "https://www.youtube.com/signin?authuser=[authuser]&pageid=[pageid]&next=live_dashboard_splash",
                aum: 2
            },
            322: {
                subId: "320",
                name: "Community",
                i18n: "cj_i18n_00624",
                icon: "youtube_creator",
                badge: "people",
                u: "https://www.youtube.com/comments",
                nu: "www.youtube.com/comments",
                au: "https://www.youtube.com/signin?authuser=[authuser]&next=comments",
                bu: "https://www.youtube.com/signin?authuser=[authuser]&pageid=[pageid]&next=comments",
                aum: 2
            },
            323: {
                subId: "320",
                name: "Channel",
                i18n: "cj_i18n_00625",
                icon: "youtube_creator",
                badge: "person",
                u: "https://www.youtube.com/features",
                nu: "www.youtube.com/features",
                au: "https://www.youtube.com/signin?authuser=[authuser]&next=features",
                bu: "https://www.youtube.com/signin?authuser=[authuser]&pageid=[pageid]&next=features",
                aum: 2
            },
            324: {
                subId: "320",
                name: "Create",
                i18n: "cj_i18n_00626",
                icon: "youtube_creator",
                badge: "add",
                u: "https://www.youtube.com/audiolibrary/music",
                nu: "www.youtube.com/audiolibrary/music",
                au: "https://www.youtube.com/signin?authuser=[authuser]&next=audiolibrary%2Fmusic",
                bu: "https://www.youtube.com/signin?authuser=[authuser]&pageid=[pageid]&next=audiolibrary%2Fmusic",
                aum: 2
            },
            325: {
                name: "Maps Treks",
                i18n: "cj_i18n_00627",
                icon: "maps",
                u: "https://www.google.com/maps/about/treks/",
                nu: "www.google.com/maps/about/treks"
            },
            326: {
                name: "Maps Playground",
                i18n: "cj_i18n_00628",
                icon: "maps",
                u: "https://www.google.com/maps/about/play/",
                nu: "www.google.com/maps/about/play"
            },
            327: {
                name: "Maps Content Providers",
                i18n: "cj_i18n_00629",
                icon: "maps",
                u: "https://maps.google.com/help/maps/mapcontent/",
                nu: "maps.google.com/help/maps/mapcontent"
            },
            328: {
                subId: "489",
                name: "Publish",
                i18n: "cj_i18n_00630",
                icon: "streetview",
                badge: "file_upload",
                u: "https://www.google.com/streetview/publish/",
                nu: "www.google.com/streetview/publish"
            },
            329: {
                subId: "57",
                name: "New form",
                i18n: "cj_i18n_00631",
                icon: "forms",
                badge: "add",
                u: "https://docs.google.com/forms/create",
                nu: "docs.google.com/forms/create",
                au: "https://docs.google.com/forms/u/[authuser]/create",
                aum: 2
            },
            330: {
                name: "Gaming",
                i18n: "cj_i18n_01068",
                icon: "youtube_gaming",
                u: "https://gaming.youtube.com/",
                nu: "gaming.youtube.com",
                au: "https://www.youtube.com/signin?authuser=[authuser]&next=https%3A%2F%2Fgaming.youtube.com%2F",
                bu: "https://www.youtube.com/signin?authuser=[authuser]&pageid=[pageid]&next=https%3A%2F%2Fgaming.youtube.com%2F",
                aum: 2
            },
            331: {
                subId: "101",
                name: "New direction",
                i18n: "cj_i18n_00633",
                icon: "maps",
                badge: "add",
                u: "https://www.google.com/maps/dir/?api=1",
                nu: "www.google.com/maps/dir/?api=1",
                au: "https://www.google.com/maps/dir/?api=1&authuser=[authuser]"
            },
            332: {
                subId: "101",
                name: "My contributions",
                i18n: "cj_i18n_00634",
                icon: "maps",
                badge: "cj_rate_review",
                u: "https://www.google.com/maps/contrib/",
                nu: "www.google.com/maps/contrib",
                au: "https://www.google.com/maps/contrib/?authuser=[authuser]"
            },
            333: {
                name: "Cardboard",
                i18n: "cj_i18n_00635",
                icon: "cardboard",
                u: "https://vr.google.com/cardboard/",
                nu: "vr.google.com/cardboard"
            },
            334: {
                name: "About me",
                i18n: "cj_i18n_00161",
                icon: "aboutme",
                u: "https://aboutme.google.com/",
                nu: "aboutme.google.com",
                au: "https://aboutme.google.com/u/[authuser]/",
                bu: "https://aboutme.google.com/u/[authuser]/b/[pageid]/"
            },
            335: {
                name: "Santa Tracker",
                i18n: "cj_i18n_00636",
                icon: "santa_tracker",
                u: "https://santatracker.google.com/",
                nu: "santatracker.google.com"
            },
            336: {
                subId: "158",
                name: "Mobile-Friendly Test",
                i18n: "cj_i18n_00287",
                icon: "search_console",
                badge: "smartphone",
                u: "https://search.google.com/test/mobile-friendly",
                nu: "search.google.com/test/mobile-friendly",
                au: "https://search.google.com/u/[authuser]/test/mobile-friendly",
                bu: "https://search.google.com/u/[authuser]/b/[pageid]/test/mobile-friendly"
            },
            338: {
                name: "Rich Media Gallery",
                i18n: "cj_i18n_00637",
                icon: "ads",
                badge: "extension",
                u: "https://richmediagallery.com/",
                nu: "richmediagallery.com"
            },
            339: {
                name: "Consumer Barometer",
                i18n: "cj_i18n_00638",
                icon: "trends",
                badge: "people",
                u: "https://www.consumerbarometer.com/",
                nu: "www.consumerbarometer.com"
            },
            340: {
                name: "Fiber",
                i18n: "cj_i18n_00639",
                icon: "fiber",
                u: "https://fiber.google.com/",
                nu: "fiber.google.com"
            },
            341: {
                subId: "18",
                name: "Historic moments",
                i18n: "cj_i18n_00640",
                icon: "arts_and_culture",
                badge: "account_balance",
                u: "https://artsandculture.google.com/project/historic-moments",
                nu: "artsandculture.google.com/project/historic-moments",
                au: "https://artsandculture.google.com/u/[authuser]/project/historic-moments"
            },
            342: {
                subId: "18",
                name: "Projects",
                i18n: "cj_i18n_00641",
                icon: "arts_and_culture",
                badge: "view_carousel",
                u: "https://artsandculture.google.com/project",
                nu: "artsandculture.google.com/project",
                au: "https://artsandculture.google.com/u/[authuser]/project"
            },
            343: {
                name: "Google+ Create",
                i18n: "cj_i18n_00642",
                icon: "gplus",
                badge: "add",
                u: "https://plus.google.com/create",
                nu: "plus.google.com/create",
                au: "https://plus.google.com/u/[authuser]/create",
                bu: "https://plus.google.com/u/[authuser]/b/[pageid]/create"
            },
            344: {
                name: "G Suite User Hub",
                i18n: "cj_i18n_00643",
                icon: "apps",
                badge: "apps",
                u: "https://apps.google.com/user/hub",
                nu: "apps.google.com/user/hub",
                au: "https://apps.google.com/u/[authuser]/user/hub"
            },
            345: {
                name: "Digital Garage",
                i18n: "cj_i18n_00644",
                icon: "googleg",
                u: "https://learndigital.withgoogle.com/digitalgarage",
                nu: "learndigital.withgoogle.com/digitalgarage"
            },
            346: {
                subId: "155",
                name: "About",
                i18n: "cj_i18n_00838",
                icon: "pay",
                badge: "info",
                u: "https://pay.google.com/about/",
                nu: "pay.google.com/about"
            },
            347: {
                name: "Impact Challenge - disabilities",
                i18n: "cj_i18n_00646",
                icon: "dot_org",
                badge: "accessible",
                u: "https://www.google.org/impactchallenge/disabilities/",
                nu: "www.google.org/impactchallenge/disabilities"
            },
            348: {
                name: "OnHub",
                i18n: "cj_i18n_00647",
                icon: "on",
                u: "https://on.google.com/hub/",
                nu: "on.google.com/hub"
            },
            349: {
                name: "Code the Road",
                i18n: "cj_i18n_00648",
                icon: "developers",
                u: "https://codetheroad.withgoogle.com/",
                nu: "codetheroad.withgoogle.com"
            },
            350: {
                name: "X - The Moonshot Factory",
                i18n: "cj_i18n_00649",
                icon: "x",
                u: "https://x.company/",
                nu: "x.company"
            },
            351: {
                name: "Translate Community",
                i18n: "cj_i18n_00650",
                icon: "translate_community",
                u: "https://translate.google.com/community",
                nu: "translate.google.com/community",
                au: "https://translate.google.com/community?authuser=[authuser]"
            },
            352: {
                name: "Website Translator",
                i18n: "cj_i18n_00651",
                icon: "translate",
                badge: "public",
                u: "https://translate.google.com/manager/website/add",
                nu: "translate.google.com/manager/website/add",
                au: "https://translate.google.com/manager/website/add?authuser=[authuser]"
            },
            353: {
                name: "Expeditions",
                i18n: "cj_i18n_00652",
                icon: "expeditions",
                u: "https://edu.google.com/products/vr-ar/expeditions/",
                nu: "edu.google.com/products/vr-ar/expeditions"
            },
            354: {
                name: "Unfiltered News",
                i18n: "cj_i18n_00653",
                icon: "unfiltered_news",
                u: "https://unfiltered.news/",
                nu: "unfiltered.news"
            },
            356: {
                name: "Makani",
                i18n: "cj_i18n_00655",
                icon: "makani",
                u: "https://x.company/makani/",
                nu: "x.company/makani"
            },
            357: {
                name: "Manufacturer Center",
                i18n: "cj_i18n_00656",
                icon: "manufacturer_center",
                u: "https://manufacturers.google.com/mc/overview",
                nu: "manufacturers.google.com/mc/overview"
            },
            359: {
                name: "Collections",
                i18n: "cj_i18n_00432",
                icon: "save",
                u: "https://www.google.com/collections/",
                nu: "www.google.com/collections",
                au: "https://www.google.com/collections/?authuser=[authuser]"
            },
            360: {
                name: "Advertiser Community",
                i18n: "cj_i18n_00658",
                icon: "ads",
                badge: "forum",
                u: "https://www.en.advertisercommunity.com/",
                nu: "www.en.advertisercommunity.com"
            },
            361: {
                name: "G Suite Learning Center",
                i18n: "cj_i18n_00659",
                icon: "apps",
                badge: "school",
                u: "https://gsuite.google.com/learning-center/",
                nu: "gsuite.google.com/learning-center"
            },
            362: {
                name: "From the G Suite",
                i18n: "cj_i18n_00660",
                icon: "apps",
                badge: "tv",
                u: "https://gsuite.google.com/apps-show/#/",
                nu: "gsuite.google.com/apps-show/#"
            },
            363: {
                name: "G Suite Setup",
                i18n: "cj_i18n_00661",
                icon: "apps",
                badge: "settings",
                u: "https://gsuite.google.com/setup/",
                nu: "gsuite.google.com/setup"
            },
            364: {
                name: "G Suite Certification",
                i18n: "cj_i18n_00662",
                icon: "apps",
                badge: "school",
                u: "https://cloud.google.com/certification/gsuite",
                nu: "cloud.google.com/certification/gsuite"
            },
            366: {
                name: "Data Studio",
                i18n: "cj_i18n_00333",
                icon: "data_studio",
                u: "https://datastudio.google.com/",
                nu: "datastudio.google.com",
                au: "https://datastudio.google.com/u/[authuser]/"
            },
            367: {
                name: "Optimize",
                i18n: "cj_i18n_00664",
                icon: "optimize",
                u: "https://optimize.google.com/optimize/home/",
                nu: "optimize.google.com/optimize/home",
                au: "https://optimize.google.com/optimize/home/?authuser=[authuser]"
            },
            368: {
                name: "Audience Center",
                i18n: "cj_i18n_00665",
                icon: "audience_center",
                u: "https://audiencecenter.google.com/",
                nu: "audiencecenter.google.com",
                au: "https://audiencecenter.google.com/?authuser=[authuser]"
            },
            369: {
                name: "Attribution",
                i18n: "cj_i18n_00666",
                icon: "attribution",
                u: "https://attribution.google.com/",
                nu: "attribution.google.com",
                au: "https://attribution.google.com/?authuser=[authuser]"
            },
            370: {
                name: "Alphabet",
                i18n: "cj_i18n_00667",
                icon: "alphabet",
                u: "https://abc.xyz/",
                nu: "abc.xyz"
            },
            371: {
                name: "Monorail",
                i18n: "cj_i18n_00668",
                icon: "monorail",
                u: "https://monorail-prod.appspot.com/hosting/",
                nu: "monorail-prod.appspot.com/hosting"
            },
            372: {
                name: "One Today",
                i18n: "cj_i18n_00669",
                icon: "one_today",
                u: "https://onetoday.google.com/",
                nu: "onetoday.google.com",
                au: "https://onetoday.google.com/?authuser=[authuser]"
            },
            374: {
                name: "Cloud Console",
                i18n: "cj_i18n_00670",
                icon: "cloud",
                u: "https://console.cloud.google.com/",
                nu: "console.cloud.google.com",
                au: "https://console.cloud.google.com/?authuser=[authuser]"
            },
            375: {
                name: "Firebase Console",
                i18n: "cj_i18n_00671",
                icon: "firebase",
                badge: "dashboard",
                u: "https://console.firebase.google.com/",
                nu: "console.firebase.google.com",
                au: "https://console.firebase.google.com/?authuser=[authuser]"
            },
            376: {
                name: "Firebase",
                i18n: "cj_i18n_00672",
                icon: "firebase",
                u: "https://firebase.google.com/",
                nu: "firebase.google.com",
                au: "https://firebase.google.com/?authuser=[authuser]"
            },
            378: {
                subId: "158",
                name: "Preview Tool",
                i18n: "cj_i18n_00673",
                icon: "search_console",
                badge: "search",
                u: "https://search.google.com/appindex/preview/",
                nu: "search.google.com/appindex/preview",
                au: "https://search.google.com/appindex/preview/u/[authuser]/"
            },
            379: {
                subId: "171",
                name: "Users",
                i18n: "cj_i18n_00240",
                icon: "admin",
                badge: "person",
                u: "https://admin.google.com/AdminHome#UserList:",
                nu: "admin.google.com/AdminHome#UserList:",
                au: "https://admin.google.com/AdminHome?authuser=[authuser]#UserList:",
                aum: 2
            },
            380: {
                subId: "171",
                name: "Apps",
                i18n: "cj_i18n_00241",
                icon: "admin",
                badge: "apps",
                u: "https://admin.google.com/AdminHome#UnifiedAppsHub:",
                nu: "admin.google.com/AdminHome#UnifiedAppsHub:",
                au: "https://admin.google.com/AdminHome?authuser=[authuser]#UnifiedAppsHub:",
                aum: 2
            },
            381: {
                subId: "171",
                name: "Domains",
                i18n: "cj_i18n_00244",
                icon: "admin",
                badge: "alternate_email",
                u: "https://admin.google.com/AdminHome#DomainsDetails:",
                nu: "admin.google.com/AdminHome#DomainsDetails:",
                au: "https://admin.google.com/AdminHome?authuser=[authuser]#DomainsDetails:",
                aum: 2
            },
            382: {
                subId: "171",
                name: "Data migration",
                i18n: "cj_i18n_00243",
                icon: "admin",
                badge: "forward",
                u: "https://admin.google.com/AdminHome#Migration:",
                nu: "admin.google.com/AdminHome#Migration:",
                au: "https://admin.google.com/AdminHome?authuser=[authuser]#Migration:",
                aum: 2
            },
            384: {
                subId: "171",
                name: "Device management",
                i18n: "cj_i18n_00246",
                icon: "admin",
                badge: "devices",
                u: "https://admin.google.com/AdminHome#Devices:",
                nu: "admin.google.com/AdminHome#Devices:",
                au: "https://admin.google.com/AdminHome?authuser=[authuser]#Devices:",
                aum: 2
            },
            385: {
                subId: "171",
                name: "Support",
                i18n: "cj_i18n_00247",
                icon: "admin",
                badge: "help",
                u: "https://admin.google.com/AdminHome#Support:",
                nu: "admin.google.com/AdminHome#Support:",
                au: "https://admin.google.com/AdminHome?authuser=[authuser]#Support:",
                aum: 2
            },
            386: {
                subId: "171",
                name: "Groups",
                i18n: "cj_i18n_00248",
                icon: "admin",
                badge: "people",
                u: "https://admin.google.com/AdminHome#GroupList:",
                nu: "admin.google.com/AdminHome#GroupList:",
                au: "https://admin.google.com/AdminHome?authuser=[authuser]#GroupList:",
                aum: 2
            },
            387: {
                subId: "171",
                name: "Company profile",
                i18n: "cj_i18n_00249",
                icon: "admin",
                badge: "business",
                u: "https://admin.google.com/AdminHome#CompanyProfile:",
                nu: "admin.google.com/AdminHome#CompanyProfile:",
                au: "https://admin.google.com/AdminHome?authuser=[authuser]#CompanyProfile:",
                aum: 2
            },
            388: {
                subId: "171",
                name: "Security",
                i18n: "cj_i18n_00250",
                icon: "admin",
                badge: "security",
                u: "https://admin.google.com/AdminHome#SecuritySettings:",
                nu: "admin.google.com/AdminHome#SecuritySettings:",
                au: "https://admin.google.com/AdminHome?authuser=[authuser]#SecuritySettings:",
                aum: 2
            },
            389: {
                subId: "171",
                name: "Billing",
                i18n: "cj_i18n_00251",
                icon: "admin",
                badge: "payment",
                u: "https://admin.google.com/AdminHome#DomainSettings/notab=1&subtab=subscriptions",
                nu: "admin.google.com/AdminHome#DomainSettings/notab=1&subtab=subscriptions",
                au: "https://admin.google.com/AdminHome?authuser=[authuser]#DomainSettings/notab=1&subtab=subscriptions",
                aum: 2
            },
            390: {
                subId: "171",
                name: "Admin roles",
                i18n: "cj_i18n_00674",
                icon: "admin",
                badge: "lock",
                u: "https://admin.google.com/AdminHome#DomainSettings/notab=1&subtab=roles",
                nu: "admin.google.com/AdminHome#DomainSettings/notab=1&subtab=roles",
                au: "https://admin.google.com/AdminHome?authuser=[authuser]#DomainSettings/notab=1&subtab=roles",
                aum: 2
            },
            391: {
                subId: "171",
                name: "Reports",
                i18n: "cj_i18n_00675",
                icon: "admin",
                badge: "drive_chart",
                u: "https://admin.google.com/AdminHome#Reports:",
                nu: "admin.google.com/AdminHome#Reports:",
                au: "https://admin.google.com/AdminHome?authuser=[authuser]#Reports:",
                aum: 2
            },
            392: {
                name: "Contributor",
                i18n: "cj_i18n_00676",
                icon: "contributor",
                u: "https://contributor.google.com/v/beta",
                nu: "contributor.google.com/v/beta",
                au: "https://contributor.google.com/u/[authuser]/v/beta"
            },
            394: {
                name: "Postmaster",
                i18n: "cj_i18n_00678",
                icon: "postmaster",
                u: "https://postmaster.google.com/managedomains",
                nu: "postmaster.google.com/managedomains",
                au: "https://postmaster.google.com/u/[authuser]/managedomains"
            },
            395: {
                name: "VR",
                i18n: "cj_i18n_00679",
                icon: "vr",
                u: "https://vr.google.com/",
                nu: "vr.google.com"
            },
            397: {
                name: "Jibe",
                i18n: "cj_i18n_00680",
                icon: "googleg",
                u: "https://jibe.google.com/",
                nu: "jibe.google.com"
            },
            398: {
                name: "Peering",
                i18n: "cj_i18n_00681",
                icon: "googleg",
                u: "https://peering.google.com/",
                nu: "peering.google.com"
            },
            399: {
                name: "Internet Authority G2",
                i18n: "cj_i18n_00682",
                icon: "googleg",
                u: "https://pki.google.com/",
                nu: "pki.google.com"
            },
            400: {
                name: "Partner Dash",
                i18n: "cj_i18n_00683",
                icon: "googleg",
                u: "https://partnerdash.google.com/partnerdash/",
                nu: "partnerdash.google.com/partnerdash",
                au: "https://partnerdash.google.com/partnerdash/u/[authuser]/"
            },
            401: {
                name: "News Publisher Center",
                i18n: "cj_i18n_00684",
                icon: "news",
                badge: "file_upload",
                u: "https://partnerdash.google.com/publisher/",
                nu: "partnerdash.google.com/publisher",
                au: "https://partnerdash.google.com/publisher/u/[authuser]/"
            },
            402: {
                name: "Scholar Inclusions",
                i18n: "cj_i18n_00685",
                icon: "scholar",
                badge: "add",
                u: "https://partnerdash.google.com/partnerdash/d/scholarinclusions/",
                nu: "partnerdash.google.com/partnerdash/d/scholarinclusions",
                au: "https://partnerdash.google.com/partnerdash/u/[authuser]/d/scholarinclusions"
            },
            403: {
                name: "Developers - CLA",
                i18n: "cj_i18n_00686",
                icon: "developers",
                u: "https://cla.developers.google.com/clas",
                nu: "cla.developers.google.com/clas",
                au: "https://cla.developers.google.com/clas?authuser=[authuser]"
            },
            404: {
                name: "Developers - Codelabs",
                i18n: "cj_i18n_00687",
                icon: "developers",
                badge: "experiment",
                u: "https://codelabs.developers.google.com/",
                nu: "codelabs.developers.google.com"
            },
            405: {
                name: "Sites",
                i18n: "cj_i18n_00112",
                icon: "atari",
                u: "https://sites.google.com/new",
                nu: "sites.google.com/new",
                au: "https://sites.google.com/new?authuser=[authuser]"
            },
            406: {
                subId: "405",
                name: "New site",
                i18n: "cj_i18n_00688",
                icon: "atari",
                badge: "add",
                u: "https://sites.google.com/create",
                nu: "sites.google.com/create",
                au: "https://sites.google.com/create?authuser=[authuser]"
            },
            407: {
                name: "My Activity",
                i18n: "cj_i18n_00689",
                icon: "my_account",
                u: "https://myactivity.google.com/myactivity",
                nu: "myactivity.google.com/myactivity",
                au: "https://myactivity.google.com/myactivity?authuser=[authuser]",
                bu: "https://myactivity.google.com/myactivity?authuser=[authuser]&pageId=[pageid]"
            },
            408: {
                name: "Books ngrams",
                i18n: "cj_i18n_00690",
                icon: "books",
                badge: "timeline",
                u: "https://books.google.com/ngrams",
                nu: "books.google.com/ngrams"
            },
            409: {
                name: "Album Archive",
                i18n: "cj_i18n_00181",
                icon: "photos",
                badge: "schedule",
                u: "https://get.google.com/albumarchive/",
                nu: "get.google.com/albumarchive",
                au: "https://get.google.com/u/[authuser]/albumarchive/",
                bu: "https://get.google.com/u/[authuser]/b/[pageid]/albumarchive/"
            },
            410: {
                name: "Nonprofits",
                i18n: "cj_i18n_00691",
                icon: "googleg",
                u: "https://www.google.com/nonprofits/account/home",
                nu: "www.google.com/nonprofits/account/home",
                au: "https://www.google.com/nonprofits/account/u/[authuser]/home"
            },
            411: {
                subId: "18",
                name: "Favorites",
                i18n: "cj_i18n_00692",
                icon: "arts_and_culture",
                badge: "favorite",
                u: "https://artsandculture.google.com/profile?tab=gl",
                nu: "artsandculture.google.com/profile?tab=gl",
                au: "https://artsandculture.google.com/u/[authuser]/profile?tab=gl"
            },
            412: {
                name: "Diversity",
                i18n: "cj_i18n_00693",
                icon: "googleg",
                u: "https://diversity.google/",
                nu: "diversity.google"
            },
            413: {
                name: "Arts & Culture - Cervantes",
                i18n: "cj_i18n_00694",
                icon: "arts_and_culture",
                badge: "person",
                u: "https://cervantes.withgoogle.com/",
                nu: "cervantes.withgoogle.com"
            },
            414: {
                name: "Chrome for Work Shop",
                i18n: "cj_i18n_00695",
                icon: "chrome",
                badge: "shopping_cart",
                u: "https://chromebusinessdevices.withgoogle.com/",
                nu: "chromebusinessdevices.withgoogle.com"
            },
            415: {
                name: "Google for Education Products",
                i18n: "cj_i18n_00696",
                icon: "googleg",
                badge: "school",
                u: "https://eduproducts.withgoogle.com/",
                nu: "eduproducts.withgoogle.com"
            },
            416: {
                name: "Project Blocks",
                i18n: "cj_i18n_00697",
                icon: "googleg",
                u: "https://projectbloks.withgoogle.com/",
                nu: "projectbloks.withgoogle.com"
            },
            417: {
                name: "Making Science",
                i18n: "cj_i18n_00698",
                icon: "googleg",
                u: "https://makingscience.withgoogle.com/",
                nu: "makingscience.withgoogle.com"
            },
            418: {
                name: "Quotas",
                i18n: "cj_i18n_01146",
                icon: "script",
                badge: "dashboard",
                u: "https://developers.google.com/apps-script/guides/services/quotas",
                nu: "developers.google.com/apps-script/guides/services/quotas",
                au: "https://developers.google.com/apps-script/guides/services/quotas?authuser=[authuser]"
            },
            419: {
                name: "Image Labeler",
                i18n: "cj_i18n_00700",
                icon: "googleg",
                u: "https://crowdsource.google.com/imagelabeler/category",
                nu: "crowdsource.google.com/imagelabeler/category",
                au: "https://crowdsource.google.com/u/[authuser]/imagelabeler/category"
            },
            420: {
                name: "Teacher center",
                i18n: "cj_i18n_01084",
                icon: "apps",
                badge: "school",
                u: "https://teachercenter.withgoogle.com/",
                nu: "teachercenter.withgoogle.com"
            },
            421: {
                name: "Elections",
                i18n: "cj_i18n_00702",
                icon: "googleg",
                u: "https://elections.google/",
                nu: "elections.google"
            },
            423: {
                name: "re:Work",
                i18n: "cj_i18n_00703",
                icon: "googleg",
                u: "https://rework.withgoogle.com/",
                nu: "rework.withgoogle.com"
            },
            425: {
                name: "Vulnerability Reward Program",
                i18n: "cj_i18n_00705",
                icon: "googleg",
                badge: "bug_report",
                u: "https://bughunter.withgoogle.com/",
                nu: "bughunter.withgoogle.com"
            },
            426: {
                name: "Merchandise Store - USA/Canada",
                i18n: "cj_i18n_00706",
                icon: "googleg",
                u: "https://shop.googlemerchandisestore.com/",
                nu: "shop.googlemerchandisestore.com"
            },
            427: {
                name: "Merchandise Store - International",
                i18n: "cj_i18n_00707",
                icon: "googleg",
                u: "https://your.googlemerchandisestore.com/",
                nu: "your.googlemerchandisestore.com"
            },
            430: {
                name: "G Suite Support",
                i18n: "cj_i18n_00709",
                icon: "apps",
                badge: "help",
                u: "https://gsuite.google.com/support/",
                nu: "gsuite.google.com/support"
            },
            431: {
                name: "Science fair",
                i18n: "cj_i18n_00710",
                icon: "googleg",
                u: "https://www.googlesciencefair.com/",
                nu: "www.googlesciencefair.com"
            },
            432: {
                name: "Chromecast built-in",
                i18n: "cj_i18n_00711",
                icon: "cast",
                u: "https://www.google.com/chromecast/built-in/",
                nu: "www.google.com/chromecast/built-in"
            },
            433: {
                name: "Cloud Platform Podcast",
                i18n: "cj_i18n_00712",
                icon: "cloud",
                badge: "cj_podcast",
                u: "https://www.gcppodcast.com/",
                nu: "www.gcppodcast.com"
            },
            435: {
                name: "G Suite What's new",
                i18n: "cj_i18n_00714",
                icon: "apps",
                badge: "star",
                u: "https://gsuite.google.com/whatsnew/",
                nu: "gsuite.google.com/whatsnew"
            },
            436: {
                name: "Careers Applications",
                i18n: "cj_i18n_00715",
                icon: "googleg",
                u: "https://www.google.com/about/careers/applications/",
                nu: "www.google.com/about/careers/applications",
                au: "https://www.google.com/about/careers/applications/u/[authuser]/"
            },
            437: {
                name: "Why Google Cloud",
                i18n: "cj_i18n_01069",
                icon: "google_cloud",
                badge: "info",
                u: "https://cloud.google.com/why-google-cloud/",
                nu: "cloud.google.com/why-google-cloud",
                au: "https://cloud.google.com/why-google-cloud/?authuser=[authuser]"
            },
            438: {
                subId: "73",
                name: "Home",
                i18n: "cj_i18n_00717",
                icon: "google_store",
                u: "https://store.google.com/product/google_home",
                nu: "store.google.com/product/google_home"
            },
            439: {
                name: "The Keyword",
                i18n: "cj_i18n_00718",
                icon: "googleg",
                badge: "news",
                u: "https://www.blog.google/",
                nu: "www.blog.google"
            },
            440: {
                name: "Registry",
                i18n: "cj_i18n_00719",
                icon: "googleg",
                u: "https://www.registry.google/",
                nu: "www.registry.google"
            },
            441: {
                name: "Station",
                i18n: "cj_i18n_00720",
                icon: "googleg",
                u: "https://station.google.com/",
                nu: "station.google.com"
            },
            442: {
                name: "Cloud Partners",
                i18n: "cj_i18n_00721",
                icon: "google_cloud",
                badge: "person",
                u: "https://cloud.google.com/partners/become-a-partner/",
                nu: "cloud.google.com/partners/become-a-partner",
                au: "https://cloud.google.com/partners/become-a-partner/?authuser=[authuser]"
            },
            443: {
                name: "G Suite Referrer Program",
                i18n: "cj_i18n_00722",
                icon: "apps",
                badge: "forward",
                u: "https://gsuite.google.com/landing/partners/referral/",
                nu: "gsuite.google.com/landing/partners/referral"
            },
            444: {
                name: "Wifi",
                i18n: "cj_i18n_00723",
                icon: "wifi",
                u: "https://store.google.com/product/google_wifi",
                nu: "store.google.com/product/google_wifi"
            },
            446: {
                name: "Women Techmakers",
                i18n: "cj_i18n_00725",
                icon: "googleg",
                u: "https://www.womentechmakers.com/",
                nu: "www.womentechmakers.com"
            },
            447: {
                name: "Tilt Brush",
                i18n: "cj_i18n_00726",
                icon: "tilt_brush",
                u: "https://www.tiltbrush.com/",
                nu: "www.tiltbrush.com"
            },
            448: {
                name: "Noto Fonts",
                i18n: "cj_i18n_00727",
                icon: "fonts",
                badge: "check_box_outline_blank",
                u: "https://www.google.com/get/noto/",
                nu: "www.google.com/get/noto"
            },
            449: {
                name: "Assistant",
                i18n: "cj_i18n_00728",
                icon: "assistant",
                u: "https://assistant.google.com/",
                nu: "assistant.google.com"
            },
            450: {
                name: "Allo",
                i18n: "cj_i18n_00729",
                icon: "allo",
                u: "https://allo.google.com/web",
                nu: "allo.google.com/web"
            },
            451: {
                name: "Duo",
                i18n: "cj_i18n_00730",
                icon: "duo",
                u: "https://duo.google.com/",
                nu: "duo.google.com"
            },
            452: {
                name: "Top Contributors",
                i18n: "cj_i18n_00731",
                icon: "top_contributor",
                u: "https://topcontributor.withgoogle.com/",
                nu: "topcontributor.withgoogle.com"
            },
            453: {
                name: "Cloud Status Dashboard",
                i18n: "cj_i18n_00732",
                icon: "cloud",
                badge: "dashboard",
                u: "https://status.cloud.google.com/",
                nu: "status.cloud.google.com"
            },
            454: {
                name: "Motion Stills",
                i18n: "cj_i18n_00733",
                icon: "googleg",
                u: "https://get.google.com/motionstills/",
                nu: "get.google.com/motionstills"
            },
            456: {
                subId: "830",
                name: "About",
                i18n: "cj_i18n_00838",
                icon: "trips",
                badge: "info",
                u: "https://get.google.com/trips/",
                nu: "get.google.com/trips"
            },
            457: {
                name: "Local Guides",
                i18n: "cj_i18n_00736",
                icon: "local_guides",
                u: "https://maps.google.com/localguides/home",
                nu: "maps.google.com/localguides/home"
            },
            458: {
                name: "YouTube Jobs",
                i18n: "cj_i18n_00737",
                icon: "youtube",
                badge: "work",
                u: "https://www.youtube.com/yt/jobs/",
                nu: "www.youtube.com/yt/jobs"
            },
            459: {
                name: "Material Design",
                i18n: "cj_i18n_00738",
                icon: "material_design",
                u: "https://material.io/",
                nu: "material.io"
            },
            460: {
                name: "Resizer",
                i18n: "cj_i18n_00739",
                icon: "material_design_resizer",
                u: "https://material.io/tools/resizer/",
                nu: "material.io/tools/resizer"
            },
            461: {
                name: "Material icons",
                i18n: "cj_i18n_00740",
                icon: "material_design_icons",
                u: "https://material.io/tools/icons/",
                nu: "material.io/tools/icons"
            },
            462: {
                subId: "459",
                name: "Design",
                i18n: "cj_i18n_01042",
                icon: "material_design_guidelines",
                u: "https://material.io/design/",
                nu: "material.io/design"
            },
            463: {
                name: "Device Metrics",
                i18n: "cj_i18n_00742",
                icon: "material_design_devices",
                u: "https://material.io/tools/devices/",
                nu: "material.io/tools/devices"
            },
            464: {
                name: "Weather",
                i18n: "cj_i18n_00743",
                icon: "weather",
                u: "https://www.google.com/search?q=weather",
                nu: "www.google.com/search?q=weather",
                au: "https://www.google.com/search?q=weather&authuser=[authuser]"
            },
            465: {
                subId: "79",
                name: "Brand accounts",
                i18n: "cj_i18n_00744",
                icon: "my_account",
                badge: "pages",
                u: "https://myaccount.google.com/brandaccounts",
                nu: "myaccount.google.com/brandaccounts",
                au: "https://myaccount.google.com/u/[authuser]/brandaccounts"
            },
            466: {
                name: "Ads Settings",
                i18n: "cj_i18n_00745",
                icon: "ads",
                badge: "settings",
                u: "https://adssettings.google.com/",
                nu: "adssettings.google.com",
                au: "https://adssettings.google.com/u/[authuser]/"
            },
            467: {
                name: "Gallery",
                i18n: "cj_i18n_00746",
                icon: "material_design_gallery",
                u: "https://gallery.io/",
                nu: "gallery.io"
            },
            469: {
                name: "Analytics Demos & Tools",
                i18n: "cj_i18n_00832",
                icon: "analytics_tools",
                u: "https://ga-dev-tools.appspot.com/",
                nu: "ga-dev-tools.appspot.com"
            },
            470: {
                subId: "79",
                name: "Sign in & security",
                i18n: "cj_i18n_00749",
                icon: "my_account",
                badge: "security",
                u: "https://myaccount.google.com/security",
                nu: "myaccount.google.com/security",
                au: "https://myaccount.google.com/u/[authuser]/security",
                bu: "https://myaccount.google.com/u/[authuser]/b/[pageid]/security"
            },
            471: {
                name: "A.I. Experiments",
                i18n: "cj_i18n_00750",
                icon: "googleg",
                u: "https://experiments.withgoogle.com/collection/ai",
                nu: "experiments.withgoogle.com/collection/ai"
            },
            472: {
                name: "Android Experiments",
                i18n: "cj_i18n_00751",
                icon: "play_apps",
                badge: "experiment",
                u: "https://experiments.withgoogle.com/collection/android",
                nu: "experiments.withgoogle.com/collection/android"
            },
            473: {
                subId: "18",
                name: "Experiments",
                i18n: "cj_i18n_00830",
                icon: "arts_and_culture",
                badge: "experiment",
                u: "https://experiments.withgoogle.com/collection/arts-culture",
                nu: "experiments.withgoogle.com/collection/arts-culture"
            },
            474: {
                name: "In-Store",
                i18n: "cj_i18n_00753",
                icon: "googleg",
                badge: "store",
                u: "https://instore.withgoogle.com/",
                nu: "instore.withgoogle.com"
            },
            475: {
                subId: "79",
                name: "Personal info & privacy",
                i18n: "cj_i18n_00754",
                icon: "my_account",
                badge: "person",
                u: "https://myaccount.google.com/privacy",
                nu: "myaccount.google.com/privacy",
                au: "https://myaccount.google.com/u/[authuser]/privacy",
                bu: "https://myaccount.google.com/u/[authuser]/b/[pageid]/privacy"
            },
            476: {
                subId: "79",
                name: "Account preferences",
                i18n: "cj_i18n_00755",
                icon: "my_account",
                badge: "settings",
                u: "https://myaccount.google.com/preferences",
                nu: "myaccount.google.com/preferences",
                au: "https://myaccount.google.com/u/[authuser]/preferences",
                bu: "https://myaccount.google.com/u/[authuser]/b/[pageid]/preferences"
            },
            477: {
                subId: "374",
                name: "Compute Engine",
                i18n: "cj_i18n_00756",
                icon: "cloud",
                badge: "cj_gcp_compute",
                u: "https://console.cloud.google.com/compute",
                nu: "console.cloud.google.com/compute",
                au: "https://console.cloud.google.com/compute?authuser=[authuser]"
            },
            478: {
                subId: "374",
                name: "Kubernetes Engine",
                i18n: "cj_i18n_01135",
                icon: "cloud",
                badge: "cj_gcp_kubernetes",
                u: "https://console.cloud.google.com/kubernetes",
                nu: "console.cloud.google.com/kubernetes",
                au: "https://console.cloud.google.com/kubernetes?authuser=[authuser]"
            },
            479: {
                subId: "82",
                name: "Discover",
                i18n: "cj_i18n_00926",
                icon: "gplus",
                badge: "explore",
                u: "https://plus.google.com/discover",
                nu: "plus.google.com/discover",
                au: "https://plus.google.com/u/[authuser]/discover",
                bu: "https://plus.google.com/u/[authuser]/b/[pageid]/discover"
            },
            480: {
                name: "YouTube Creator Community",
                i18n: "cj_i18n_00759",
                icon: "youtube_creator",
                badge: "forum",
                u: "https://www.contributorscommunity.com/",
                nu: "www.contributorscommunity.com"
            },
            481: {
                name: "YouTube Space",
                i18n: "cj_i18n_01070",
                icon: "youtube",
                badge: "weekend",
                u: "https://www.youtube.com/yt/space/",
                nu: "www.youtube.com/yt/space"
            },
            482: {
                name: "YouTube Creator Services Directory",
                i18n: "cj_i18n_00761",
                icon: "youtube_creator",
                badge: "trending_up",
                u: "https://servicesdirectory.withyoutube.com/",
                nu: "servicesdirectory.withyoutube.com"
            },
            483: {
                name: "YouTube NextUp",
                i18n: "cj_i18n_00762",
                icon: "youtube_creator",
                badge: "forward",
                u: "https://www.youtube.com/creators/nextup/",
                nu: "www.youtube.com/creators/nextup"
            },
            484: {
                name: "YouTube Creator Hub",
                i18n: "cj_i18n_00763",
                icon: "youtube_creator",
                badge: "apps",
                u: "https://www.youtube.com/creators/",
                nu: "www.youtube.com/creators"
            },
            485: {
                subId: "158",
                name: "AMP Test",
                i18n: "cj_i18n_00288",
                icon: "search_console",
                badge: "amp",
                u: "https://search.google.com/test/amp",
                nu: "search.google.com/test/amp",
                au: "https://search.google.com/u/[authuser]/test/amp",
                bu: "https://search.google.com/u/[authuser]/b/[pageid]/test/amp"
            },
            486: {
                subId: "145",
                name: "Document upload",
                i18n: "cj_i18n_00764",
                icon: "translator_toolkit",
                badge: "file_upload",
                u: "https://translate.google.com/toolkit/docupload",
                nu: "translate.google.com/toolkit/docupload"
            },
            487: {
                subId: "54",
                name: "Your Stock",
                i18n: "cj_i18n_01119",
                icon: "finance",
                badge: "account_circle",
                u: "https://www.google.com/finance?kbtab=YOUR_STOCKS",
                nu: "www.google.com/finance?kbtab=YOUR_STOCKS",
                au: "https://www.google.com/finance?kbtab=YOUR_STOCKS&authuser=[authuser]"
            },
            489: {
                name: "Street View",
                i18n: "cj_i18n_00765",
                icon: "streetview",
                u: "https://www.google.com/streetview/",
                nu: "www.google.com/streetview"
            },
            490: {
                name: "Search Ads",
                i18n: "cj_i18n_01099",
                icon: "search_ads",
                u: "https://searchads.google.com/ds",
                nu: "searchads.google.com/ds",
                au: "https://searchads.google.com/ds?authuser=[authuser]"
            },
            491: {
                name: "Display & Video",
                i18n: "cj_i18n_01112",
                icon: "display_video",
                u: "https://www.google.com/ddm/bidmanager/",
                nu: "www.google.com/ddm/bidmanager"
            },
            492: {
                name: "Code Archive",
                i18n: "cj_i18n_00768",
                icon: "developers",
                badge: "archive",
                u: "https://code.google.com/archive/",
                nu: "code.google.com/archive"
            },
            493: {
                name: "App Maker",
                i18n: "cj_i18n_00769",
                icon: "app_maker",
                u: "https://appmaker.google.com/",
                nu: "appmaker.google.com",
                au: "https://appmaker.google.com/?authuser=[authuser]"
            },
            494: {
                name: "Remixer",
                i18n: "cj_i18n_00770",
                icon: "material_design_remixer",
                u: "https://material.io/tools/remixer/",
                nu: "material.io/tools/remixer"
            },
            495: {
                name: "Polymer",
                i18n: "cj_i18n_00771",
                icon: "polymer",
                u: "https://www.polymer-project.org/",
                nu: "www.polymer-project.org"
            },
            496: {
                subId: "158",
                name: "Report paid links",
                i18n: "cj_i18n_00772",
                icon: "search_console",
                u: "https://www.google.com/webmasters/tools/paidlinks",
                nu: "www.google.com/webmasters/tools/paidlinks",
                au: "https://www.google.com/webmasters/tools/paidlinks?authuser=[authuser]"
            },
            497: {
                subId: "158",
                name: "Transcoder",
                i18n: "cj_i18n_00773",
                icon: "search_console",
                u: "https://www.google.com/webmasters/tools/transcoder",
                nu: "www.google.com/webmasters/tools/transcoder",
                au: "https://www.google.com/webmasters/tools/transcoder?authuser=[authuser]"
            },
            498: {
                subId: "158",
                name: "Crawl URL",
                i18n: "cj_i18n_00774",
                icon: "search_console",
                badge: "link",
                u: "https://www.google.com/webmasters/tools/submit-url",
                nu: "www.google.com/webmasters/tools/submit-url",
                au: "https://www.google.com/webmasters/tools/submit-url?authuser=[authuser]"
            },
            499: {
                name: "Safe Browsing",
                i18n: "cj_i18n_00775",
                icon: "safe_browsing",
                u: "https://safebrowsing.google.com/",
                nu: "safebrowsing.google.com"
            },
            500: {
                name: "Safe Browsing Alerts",
                i18n: "cj_i18n_00776",
                icon: "safe_browsing",
                badge: "notifications",
                u: "https://www.google.com/safebrowsing/alerts/",
                nu: "www.google.com/safebrowsing/alerts"
            },
            501: {
                subId: "499",
                name: "Report Malware",
                i18n: "cj_i18n_00828",
                icon: "safe_browsing",
                badge: "bug_report",
                u: "https://safebrowsing.google.com/safebrowsing/report_badware/",
                nu: "safebrowsing.google.com/safebrowsing/report_badware"
            },
            502: {
                subId: "499",
                name: "Report Phishing Page",
                i18n: "cj_i18n_00826",
                icon: "safe_browsing",
                badge: "report",
                u: "https://safebrowsing.google.com/safebrowsing/report_phish/",
                nu: "safebrowsing.google.com/safebrowsing/report_phish"
            },
            503: {
                subId: "499",
                name: "Report Incorrect Phishing Warning",
                i18n: "cj_i18n_00825",
                icon: "safe_browsing",
                badge: "report_off",
                u: "https://safebrowsing.google.com/safebrowsing/report_error/",
                nu: "safebrowsing.google.com/safebrowsing/report_error"
            },
            504: {
                name: "Movies and TV Partner Portal",
                i18n: "cj_i18n_00780",
                icon: "youtube_movies",
                badge: "person",
                u: "https://partnerdash.google.com/movies/partners/",
                nu: "partnerdash.google.com/movies/partners",
                au: "https://partnerdash.google.com/movies/partners/u/[authuser]/",
                aum: 1
            },
            505: {
                name: "Partner Android Build",
                i18n: "cj_i18n_00781",
                icon: "play_apps",
                u: "https://partnerdash.google.com/build/",
                nu: "partnerdash.google.com/build",
                au: "https://partnerdash.google.com/build/u/[authuser]/"
            },
            506: {
                name: "Hotel Ads Center",
                i18n: "cj_i18n_00782",
                icon: "hotels",
                badge: "ad",
                u: "https://partnerdash.google.com/hotelads/",
                nu: "partnerdash.google.com/hotelads",
                au: "https://partnerdash.google.com/hotelads/u/[authuser]/"
            },
            507: {
                name: "Local Guides Connect",
                i18n: "cj_i18n_00783",
                icon: "local_guides",
                badge: "link",
                u: "https://www.localguidesconnect.com/",
                nu: "www.localguidesconnect.com"
            },
            508: {
                subId: "48",
                name: "Starred",
                i18n: "cj_i18n_00004",
                icon: "drive",
                badge: "star",
                u: "https://drive.google.com/drive/starred",
                nu: "drive.google.com/drive/starred",
                au: "https://drive.google.com/drive/u/[authuser]/starred"
            },
            509: {
                name: "Webmaster Central",
                i18n: "cj_i18n_00784",
                icon: "search_console",
                u: "https://www.google.com/webmasters/verification/home",
                nu: "www.google.com/webmasters/verification/home",
                au: "https://www.google.com/webmasters/verification/home?authuser=[authuser]"
            },
            510: {
                name: "Zagat",
                i18n: "cj_i18n_00785",
                icon: "googleg",
                u: "https://www.zagat.com/",
                nu: "www.zagat.com"
            },
            511: {
                name: "Law Enforcement Request System",
                i18n: "cj_i18n_00786",
                icon: "googleg",
                u: "https://lers.google.com/",
                nu: "lers.google.com",
                au: "https://lers.google.com/u/[authuser]/"
            },
            512: {
                name: "Reserve with Google",
                i18n: "cj_i18n_00787",
                icon: "maps",
                u: "https://www.google.com/maps/reserve/",
                nu: "www.google.com/maps/reserve"
            },
            514: {
                name: "Advanced Technology and Projects",
                i18n: "cj_i18n_00789",
                icon: "googleg",
                u: "https://atap.google.com/",
                nu: "atap.google.com"
            },
            515: {
                name: "Crowdsource",
                i18n: "cj_i18n_00790",
                icon: "crowdsource",
                u: "https://crowdsource.google.com/",
                nu: "crowdsource.google.com"
            },
            516: {
                name: "The Cube",
                i18n: "cj_i18n_00791",
                icon: "googleg",
                u: "https://cube.withgoogle.com/",
                nu: "cube.withgoogle.com"
            },
            517: {
                subId: "459",
                name: "Develop",
                i18n: "cj_i18n_01043",
                icon: "material_design_components",
                u: "https://material.io/develop/",
                nu: "material.io/develop"
            },
            518: {
                name: "Made with Code",
                i18n: "cj_i18n_00793",
                icon: "made_with_code",
                u: "https://www.madewithcode.com/",
                nu: "www.madewithcode.com"
            },
            519: {
                name: "Featured photos screensaver",
                i18n: "cj_i18n_00794",
                icon: "gplus",
                badge: "photo",
                u: "https://plus.google.com/featuredphotos",
                nu: "plus.google.com/featuredphotos",
                au: "https://plus.google.com/u/[authuser]/featuredphotos",
                bu: "https://plus.google.com/u/[authuser]/b/[pageid]/featuredphotos"
            },
            520: {
                name: "Wifi - Device Sharing",
                i18n: "cj_i18n_00795",
                icon: "wifi",
                badge: "person_add",
                u: "https://on.here/",
                nu: "on.here"
            },
            521: {
                subId: "1",
                name: "Products",
                i18n: "cj_i18n_00835",
                icon: "googleg",
                badge: "apps",
                u: "https://www.google.com/about/products/",
                nu: "www.google.com/about/products"
            },
            522: {
                subId: "48",
                name: "Recent",
                i18n: "cj_i18n_00003",
                icon: "drive",
                badge: "schedule",
                u: "https://drive.google.com/drive/recent",
                nu: "drive.google.com/drive/recent",
                au: "https://drive.google.com/drive/u/[authuser]/recent"
            },
            523: {
                name: "Chromium",
                i18n: "cj_i18n_00797",
                icon: "chrome_chromium",
                u: "https://www.chromium.org/",
                nu: "www.chromium.org"
            },
            524: {
                name: "CapitalG",
                i18n: "cj_i18n_00798",
                icon: "alphabet",
                badge: "attach_money",
                u: "https://www.capitalg.com/",
                nu: "www.capitalg.com"
            },
            525: {
                name: "Waze",
                i18n: "cj_i18n_00799",
                icon: "waze",
                u: "https://www.waze.com/",
                nu: "www.waze.com"
            },
            526: {
                subId: "79",
                name: "Saved passwords",
                i18n: "cj_i18n_00800",
                icon: "my_account",
                badge: "lock",
                u: "https://passwords.google.com/",
                nu: "passwords.google.com",
                au: "https://passwords.google.com/u/[authuser]/"
            },
            527: {
                subId: "234",
                name: "Reviews",
                i18n: "cj_i18n_00801",
                icon: "my_business",
                badge: "star",
                u: "https://business.google.com/reviews/",
                nu: "business.google.com/reviews",
                au: "https://business.google.com/u/[authuser]/reviews/",
                bu: "https://business.google.com/u/[authuser]/b/[pageid]/reviews/"
            },
            528: {
                subId: "234",
                name: "Settings",
                i18n: "cj_i18n_00298",
                icon: "my_business",
                badge: "settings",
                u: "https://business.google.com/settings",
                nu: "business.google.com/settings",
                au: "https://business.google.com/u/[authuser]/settings"
            },
            529: {
                subId: "234",
                name: "Locations",
                i18n: "cj_i18n_00802",
                icon: "my_business",
                badge: "business",
                u: "https://business.google.com/locations",
                nu: "business.google.com/locations",
                au: "https://business.google.com/u/[authuser]/locations"
            },
            531: {
                name: "Google+ for your brand",
                i18n: "cj_i18n_00803",
                icon: "gplus",
                badge: "pages",
                u: "https://plus.google.com/brand",
                nu: "plus.google.com/brand",
                au: "https://plus.google.com/u/[authuser]/brand",
                bu: "https://plus.google.com/u/[authuser]/b/[pageid]/brand"
            },
            532: {
                name: "Issue Tracker",
                i18n: "cj_i18n_00804",
                icon: "googleg",
                u: "https://issuetracker.google.com/issues",
                nu: "issuetracker.google.com/issues",
                au: "https://issuetracker.google.com/u/[authuser]/issues"
            },
            533: {
                subId: "24",
                name: "Advanced search",
                i18n: "cj_i18n_00406",
                icon: "books",
                badge: "search",
                u: "https://books.google.com/advanced_book_search",
                nu: "books.google.com/advanced_book_search",
                au: "https://books.google.com/advanced_book_search?authuser=[authuser]"
            },
            535: {
                subId: "96",
                name: "Advanced search",
                i18n: "cj_i18n_00406",
                icon: "images",
                badge: "search",
                u: "https://www.google.com/advanced_image_search",
                nu: "www.google.com/advanced_image_search",
                au: "https://www.google.com/advanced_image_search?authuser=[authuser]"
            },
            536: {
                subId: "115",
                name: "Advanced search",
                i18n: "cj_i18n_00406",
                icon: "patents",
                badge: "search",
                u: "https://patents.google.com/advanced",
                nu: "patents.google.com/advanced",
                au: "https://patents.google.com/advanced?authuser=[authuser]"
            },
            537: {
                name: "Cloud Search",
                i18n: "cj_i18n_00806",
                icon: "cloud_search",
                u: "https://cloudsearch.google.com/cloudsearch",
                nu: "cloudsearch.google.com/cloudsearch",
                au: "https://cloudsearch.google.com/cloudsearch?authuser=[authuser]"
            },
            538: {
                subId: "295",
                name: "Snoozed",
                i18n: "cj_i18n_00300",
                icon: "inbox",
                badge: "schedule",
                u: "https://inbox.google.com/snoozed",
                nu: "inbox.google.com/snoozed",
                au: "https://inbox.google.com/u/[authuser]/snoozed"
            },
            539: {
                subId: "295",
                name: "Done",
                i18n: "cj_i18n_00301",
                icon: "inbox",
                badge: "bigtop_done",
                u: "https://inbox.google.com/done",
                nu: "inbox.google.com/done",
                au: "https://inbox.google.com/u/[authuser]/done"
            },
            540: {
                subId: "295",
                name: "Reminders",
                i18n: "cj_i18n_00081",
                icon: "inbox",
                badge: "reminders_alt",
                u: "https://inbox.google.com/reminders",
                nu: "inbox.google.com/reminders",
                au: "https://inbox.google.com/u/[authuser]/reminders"
            },
            541: {
                subId: "295",
                name: "Trips",
                i18n: "cj_i18n_00307",
                icon: "inbox",
                badge: "travel",
                u: "https://inbox.google.com/trips",
                nu: "inbox.google.com/trips",
                au: "https://inbox.google.com/u/[authuser]/trips"
            },
            542: {
                subId: "295",
                name: "Saved",
                i18n: "cj_i18n_00309",
                icon: "inbox",
                badge: "bookmark",
                u: "https://inbox.google.com/cluster/%23^sv_i",
                nu: "inbox.google.com/cluster/%23^sv_i",
                au: "https://inbox.google.com/u/[authuser]/cluster/%23^sv_i"
            },
            543: {
                subId: "24",
                name: "My library",
                i18n: "cj_i18n_00807",
                icon: "books",
                badge: "library_books",
                u: "https://books.google.com/books",
                nu: "books.google.com/books",
                au: "https://books.google.com/books?authuser=[authuser]"
            },
            544: {
                name: "Chat history",
                i18n: "cj_i18n_00808",
                icon: "hangouts",
                badge: "history",
                u: "https://mail.google.com/mail/#chats",
                nu: "mail.google.com/mail/#chats",
                au: "https://mail.google.com/mail/u/[authuser]/#chats",
                aum: 1
            },
            545: {
                name: "Meet",
                i18n: "cj_i18n_00809",
                icon: "meet",
                u: "https://meet.google.com/",
                nu: "meet.google.com",
                au: "https://meet.google.com/?authuser=[authuser]"
            },
            546: {
                name: "Smart Lock",
                i18n: "cj_i18n_00810",
                icon: "smart_lock",
                u: "https://get.google.com/smartlock/",
                nu: "get.google.com/smartlock"
            },
            547: {
                name: "Tag Assist",
                i18n: "cj_i18n_00811",
                icon: "googleg",
                u: "https://get.google.com/tagassistant/",
                nu: "get.google.com/tagassistant"
            },
            548: {
                name: "Accelerator",
                i18n: "cj_i18n_00812",
                icon: "accelerator",
                u: "https://accelerator.withgoogle.com/",
                nu: "accelerator.withgoogle.com"
            },
            549: {
                subId: "740",
                name: "About",
                i18n: "cj_i18n_00838",
                icon: "jamboard",
                badge: "info",
                u: "https://gsuite.google.com/products/jamboard/",
                nu: "gsuite.google.com/products/jamboard"
            },
            550: {
                name: "Waymo",
                i18n: "cj_i18n_00814",
                icon: "googleg",
                badge: "directions_car",
                u: "https://waymo.com/",
                nu: "waymo.com"
            },
            551: {
                subId: "128",
                name: "Template gallery",
                i18n: "cj_i18n_00405",
                icon: "sheets",
                badge: "category",
                u: "https://docs.google.com/spreadsheets/?ftv=1",
                nu: "docs.google.com/spreadsheets/?ftv=1",
                au: "https://docs.google.com/spreadsheets/u/[authuser]/?ftv=1",
                aum: 1
            },
            552: {
                subId: "133",
                name: "Template gallery",
                i18n: "cj_i18n_00405",
                icon: "slides",
                badge: "category",
                u: "https://docs.google.com/presentation/?ftv=1",
                nu: "docs.google.com/presentation/?ftv=1",
                au: "https://docs.google.com/presentation/u/[authuser]/?ftv=1",
                aum: 1
            },
            553: {
                subId: "57",
                name: "Template gallery",
                i18n: "cj_i18n_00405",
                icon: "forms",
                badge: "category",
                u: "https://docs.google.com/forms/?ftv=1",
                nu: "docs.google.com/forms/?ftv=1",
                au: "https://docs.google.com/forms/u/[authuser]/?ftv=1",
                aum: 1
            },
            555: {
                subId: "374",
                name: "Cloud Marketplace",
                i18n: "cj_i18n_00816",
                icon: "cloud",
                badge: "shopping_cart",
                u: "https://console.cloud.google.com/marketplace",
                nu: "console.cloud.google.com/marketplace",
                au: "https://console.cloud.google.com/marketplace?authuser=[authuser]"
            },
            556: {
                name: "Family Link",
                i18n: "cj_i18n_00817",
                icon: "family_link",
                u: "https://families.google.com/familylink/",
                nu: "families.google.com/familylink"
            },
            557: {
                subId: "101",
                name: "My places",
                i18n: "cj_i18n_00818",
                icon: "maps",
                badge: "place",
                u: "https://www.google.com/maps/@/data=!4m2!10m1!1e2",
                nu: "www.google.com/maps/@/data=!4m2!10m1!1e2",
                au: "https://www.google.com/maps/@/data=!4m2!10m1!1e2?authuser=[authuser]"
            },
            559: {
                name: "Chat",
                i18n: "cj_i18n_00819",
                icon: "chat",
                u: "https://chat.google.com/",
                nu: "chat.google.com",
                au: "https://chat.google.com/u/[authuser]/"
            },
            560: {
                name: "Chromium bugs",
                i18n: "cj_i18n_00820",
                icon: "chrome_chromium",
                badge: "bug_report",
                u: "https://bugs.chromium.org/p/chromium/issues/list",
                nu: "bugs.chromium.org/p/chromium/issues/list"
            },
            561: {
                subId: "97",
                name: "Reminders",
                i18n: "cj_i18n_00081",
                icon: "keep",
                badge: "reminders_alt",
                u: "https://keep.google.com/#reminders",
                nu: "keep.google.com/#reminders",
                au: "https://keep.google.com/u/[authuser]/#reminders"
            },
            562: {
                subId: "97",
                name: "Archive",
                i18n: "cj_i18n_00821",
                icon: "keep",
                badge: "archive",
                u: "https://keep.google.com/#archive",
                nu: "keep.google.com/#archive",
                au: "https://keep.google.com/u/[authuser]/#archive"
            },
            563: {
                name: "Open Source",
                i18n: "cj_i18n_00834",
                icon: "googleg",
                u: "https://opensource.google.com/",
                nu: "opensource.google.com"
            },
            564: {
                subId: "499",
                name: "Site Status",
                i18n: "cj_i18n_00831",
                icon: "safe_browsing",
                badge: "planner_review",
                u: "https://transparencyreport.google.com/safe-browsing/search",
                nu: "transparencyreport.google.com/safe-browsing/search"
            },
            565: {
                name: "Android",
                i18n: "cj_i18n_00837",
                icon: "play_apps",
                u: "https://www.android.com/",
                nu: "www.android.com"
            },
            566: {
                name: "Material Motion",
                i18n: "cj_i18n_00839",
                icon: "material_design_motion",
                u: "https://material-motion.github.io/material-motion/",
                nu: "material-motion.github.io/material-motion"
            },
            567: {
                name: "YouTube TV",
                i18n: "cj_i18n_00511",
                icon: "youtube_television",
                u: "https://tv.youtube.com/",
                nu: "tv.youtube.com"
            },
            568: {
                name: "Color Tool",
                i18n: "cj_i18n_00841",
                icon: "material_design_color",
                u: "https://material.io/tools/color/",
                nu: "material.io/tools/color"
            },
            569: {
                name: "Design Sprint Kit",
                i18n: "cj_i18n_00842",
                icon: "design",
                badge: "event",
                u: "https://designsprintkit.withgoogle.com/",
                nu: "designsprintkit.withgoogle.com"
            },
            570: {
                name: "AutoDraw",
                i18n: "cj_i18n_00843",
                icon: "design",
                badge: "edit",
                u: "https://www.autodraw.com/",
                nu: "www.autodraw.com"
            },
            571: {
                name: "Color Picker",
                i18n: "cj_i18n_00844",
                icon: "googleg",
                u: "https://www.google.com/search?q=color+picker",
                nu: "www.google.com/search?q=color+picker",
                au: "https://www.google.com/search?q=color+picker&authuser=[authuser]"
            },
            572: {
                name: "Unit Converter",
                i18n: "cj_i18n_00845",
                icon: "googleg",
                badge: "swap_horiz",
                u: "https://www.google.com/search?q=unit+converter",
                nu: "www.google.com/search?q=unit+converter",
                au: "https://www.google.com/search?q=unit+converter&authuser=[authuser]"
            },
            573: {
                name: "Project Shield",
                i18n: "cj_i18n_00846",
                icon: "googleg",
                badge: "shield",
                u: "https://projectshield.withgoogle.com/public/",
                nu: "projectshield.withgoogle.com/public"
            },
            574: {
                name: "Speak to Go",
                i18n: "cj_i18n_00847",
                icon: "googleg",
                u: "https://speaktogo.withgoogle.com/",
                nu: "speaktogo.withgoogle.com"
            },
            575: {
                name: "Quick, Draw!",
                i18n: "cj_i18n_00848",
                icon: "googleg",
                u: "https://quickdraw.withgoogle.com/",
                nu: "quickdraw.withgoogle.com"
            },
            576: {
                name: "Cloud Next",
                i18n: "cj_i18n_00849",
                icon: "googleg",
                u: "https://cloudnext.withgoogle.com/",
                nu: "cloudnext.withgoogle.com"
            },
            577: {
                name: "foo.bar",
                i18n: "cj_i18n_00850",
                icon: "googleg",
                u: "https://foobar.withgoogle.com/",
                nu: "foobar.withgoogle.com"
            },
            578: {
                name: "Android Open Source",
                i18n: "cj_i18n_00851",
                icon: "play_apps",
                u: "https://source.android.com/",
                nu: "source.android.com"
            },
            579: {
                name: "Jump",
                i18n: "cj_i18n_00852",
                icon: "googleg",
                u: "https://vr.google.com/jump/",
                nu: "vr.google.com/jump"
            },
            580: {
                name: "Android Studio",
                i18n: "cj_i18n_00853",
                icon: "android_studio",
                u: "https://developer.android.com/studio/",
                nu: "developer.android.com/studio"
            },
            581: {
                name: "Android Developers",
                i18n: "cj_i18n_00854",
                icon: "play_apps",
                u: "https://developer.android.com/",
                nu: "developer.android.com"
            },
            582: {
                name: "Build with Chrome",
                i18n: "cj_i18n_00855",
                icon: "chrome",
                badge: "build",
                u: "https://www.buildwithchrome.com/",
                nu: "www.buildwithchrome.com"
            },
            583: {
                name: "Chromium OS",
                i18n: "cj_i18n_00856",
                icon: "chrome_chromium",
                badge: "laptop_chromebook",
                u: "https://www.chromium.org/chromium-os",
                nu: "www.chromium.org/chromium-os"
            },
            584: {
                name: "YouTube Go",
                i18n: "cj_i18n_00857",
                icon: "youtube_go",
                u: "https://play.google.com/store/apps/details?id=com.google.android.apps.youtube.mango",
                nu: "play.google.com/store/apps/details?id=com.google.android.apps.youtube.mango",
                au: "https://play.google.com/store/apps/details?id=com.google.android.apps.youtube.mango&authuser=[authuser]",
                aum: 2
            },
            586: {
                subId: "157",
                name: "Timer",
                i18n: "cj_i18n_00859",
                icon: "googleg",
                badge: "timer",
                u: "https://www.google.com/search?q=timer",
                nu: "www.google.com/search?q=timer",
                au: "https://www.google.com/search?q=timer&authuser=[authuser]"
            },
            587: {
                subId: "157",
                name: "Stopwatch",
                i18n: "cj_i18n_00860",
                icon: "googleg",
                badge: "timer",
                u: "https://www.google.com/search?q=stopwatch",
                nu: "www.google.com/search?q=stopwatch",
                au: "https://www.google.com/search?q=stopwatch&authuser=[authuser]"
            },
            588: {
                name: "Chrome Canary",
                i18n: "cj_i18n_00861",
                icon: "chrome_canary",
                u: "https://www.google.com/chrome/canary/",
                nu: "www.google.com/chrome/canary"
            },
            589: {
                name: "My apps",
                i18n: "cj_i18n_00862",
                icon: "play_store",
                badge: "play_apps",
                u: "https://play.google.com/apps",
                nu: "play.google.com/apps",
                au: "https://play.google.com/apps?authuser=[authuser]",
                aum: 2
            },
            590: {
                subId: "101",
                name: "Location sharing",
                i18n: "cj_i18n_00863",
                icon: "maps",
                badge: "person",
                u: "https://www.google.com/maps/@/data=!4m2!7m1!2e1",
                nu: "www.google.com/maps/@/data=!4m2!7m1!2e1",
                au: "https://www.google.com/maps/@/data=!3m1!4b1!4m2!7m1!2e1?authuser=[authuser]"
            },
            591: {
                subId: "651",
                name: "Nest Weave",
                i18n: "cj_i18n_00864",
                icon: "developers",
                badge: "nest_thermostat",
                u: "https://nest.com/weave/",
                nu: "nest.com/weave",
                au: "https://nest.com/weave/?authuser=[authuser]"
            },
            592: {
                name: "TensorFlow",
                i18n: "cj_i18n_00865",
                icon: "developers",
                u: "https://www.tensorflow.org/",
                nu: "www.tensorflow.org"
            },
            593: {
                name: "AMP Project",
                i18n: "cj_i18n_00866",
                icon: "developers",
                badge: "amp",
                u: "https://www.ampproject.org/",
                nu: "www.ampproject.org"
            },
            594: {
                name: "Google.ai",
                i18n: "cj_i18n_00867",
                icon: "googleg",
                u: "https://ai.google/",
                nu: "ai.google"
            },
            595: {
                subId: "89",
                name: "Photo books",
                i18n: "cj_i18n_00868",
                icon: "photos",
                badge: "book",
                u: "https://photos.google.com/photobooks",
                nu: "photos.google.com/photobooks",
                au: "https://photos.google.com/u/[authuser]/photobooks",
                bu: "https://photos.google.com/u/[authuser]/b/[pageid]/photobooks"
            },
            596: {
                name: "Actions from Google",
                i18n: "cj_i18n_00869",
                icon: "developers",
                u: "https://developers.google.com/actions/",
                nu: "developers.google.com/actions",
                au: "https://developers.google.com/actions/?authuser=[authuser]"
            },
            597: {
                name: "G Pay for Business",
                i18n: "cj_i18n_01071",
                icon: "pay",
                badge: "business",
                u: "https://pay.google.com/about/business/",
                nu: "pay.google.com/about/business"
            },
            598: {
                name: "Android Beta Program",
                i18n: "cj_i18n_00871",
                icon: "play_apps",
                u: "https://www.google.com/android/beta",
                nu: "www.google.com/android/beta",
                au: "https://www.google.com/android/beta?u=[authuser]"
            },
            599: {
                name: "Android Enterprise",
                i18n: "cj_i18n_00872",
                icon: "play_apps",
                u: "https://www.android.com/enterprise/",
                nu: "www.android.com/enterprise"
            },
            601: {
                name: "Google for Retail",
                i18n: "cj_i18n_00874",
                icon: "shopping",
                badge: "shopping_cart",
                u: "https://www.google.com/retail/",
                nu: "www.google.com/retail"
            },
            602: {
                name: "Maps Platform",
                i18n: "cj_i18n_01109",
                icon: "google_cloud",
                badge: "maps",
                u: "https://cloud.google.com/maps-platform/",
                nu: "cloud.google.com/maps-platform"
            },
            603: {
                name: "Data Gif Maker",
                i18n: "cj_i18n_00876",
                icon: "googleg",
                u: "https://datagifmaker.withgoogle.com/",
                nu: "datagifmaker.withgoogle.com"
            },
            604: {
                name: "Poly",
                i18n: "cj_i18n_00967",
                icon: "poly",
                u: "https://poly.google.com/",
                nu: "poly.google.com",
                au: "https://vr.google.com/u/[authuser]/sketches/",
                bu: "https://vr.google.com/u/[authuser]/b/[pageid]/sketches/"
            },
            605: {
                name: "Accessibility",
                i18n: "cj_i18n_00878",
                icon: "accessibility",
                u: "https://www.google.com/accessibility/",
                nu: "www.google.com/accessibility"
            },
            606: {
                name: "Qibla Finder",
                i18n: "cj_i18n_01085",
                icon: "googleg",
                u: "https://qalam.withgoogle.com/",
                nu: "qalam.withgoogle.com"
            },
            607: {
                name: "Daydream",
                i18n: "cj_i18n_00880",
                icon: "daydream",
                u: "https://vr.google.com/daydream/",
                nu: "vr.google.com/daydream"
            },
            608: {
                name: "Ads Help",
                i18n: "cj_i18n_01096",
                icon: "ads",
                badge: "help",
                u: "https://support.google.com/google-ads/",
                nu: "support.google.com/google-ads",
                au: "https://support.google.com/google-ads/?authuser=[authuser]"
            },
            609: {
                name: "Cloud Transformation Gallery",
                i18n: "cj_i18n_00882",
                icon: "google_cloud",
                u: "https://transformationgallery.withgoogle.com/",
                nu: "transformationgallery.withgoogle.com"
            },
            610: {
                name: "Be Internet Awesome",
                i18n: "cj_i18n_00883",
                icon: "googleg",
                u: "https://beinternetawesome.withgoogle.com/",
                nu: "beinternetawesome.withgoogle.com"
            },
            611: {
                name: "Go Global",
                i18n: "cj_i18n_00884",
                icon: "googleg",
                u: "https://goglobal.withgoogle.com/",
                nu: "goglobal.withgoogle.com"
            },
            612: {
                name: "Qibla Finder",
                i18n: "cj_i18n_00885",
                icon: "googleg",
                u: "https://qiblafinder.withgoogle.com/",
                nu: "qiblafinder.withgoogle.com"
            },
            613: {
                name: "Families",
                i18n: "cj_i18n_00897",
                icon: "family_link",
                badge: "dashboard",
                u: "https://families.google.com/families",
                nu: "families.google.com/families",
                au: "https://families.google.com/u/[authuser]/families",
                bu: "https://families.google.com/u/[authuser]/b/[pageid]/families"
            },
            615: {
                subId: "82",
                name: "Notifications",
                i18n: "cj_i18n_00296",
                icon: "gplus",
                badge: "notifications",
                u: "https://plus.google.com/notifications",
                nu: "plus.google.com/notifications",
                au: "https://plus.google.com/u/[authuser]/notifications",
                bu: "https://plus.google.com/u/[authuser]/b/[pageid]/notifications"
            },
            616: {
                name: "Code Jam",
                i18n: "cj_i18n_00889",
                icon: "googleg",
                u: "https://codejam.withgoogle.com/codejam/",
                nu: "codejam.withgoogle.com/codejam"
            },
            617: {
                name: "Capture the Flag",
                i18n: "cj_i18n_00890",
                icon: "googleg",
                badge: "flag",
                u: "https://capturetheflag.withgoogle.com/",
                nu: "capturetheflag.withgoogle.com"
            },
            618: {
                name: "YouTube Cannes",
                i18n: "cj_i18n_00891",
                icon: "youtube",
                badge: "beach_access",
                u: "https://cannes.withgoogle.com/",
                nu: "cannes.withgoogle.com"
            },
            620: {
                name: "Google for News Partners",
                i18n: "cj_i18n_00893",
                icon: "googleg",
                u: "https://newspartners.withgoogle.com/",
                nu: "newspartners.withgoogle.com"
            },
            621: {
                name: "Toontastic",
                i18n: "cj_i18n_00894",
                icon: "googleg",
                u: "https://toontastic.withgoogle.com/",
                nu: "toontastic.withgoogle.com"
            },
            622: {
                name: "Maps APIs Styling Wizard",
                i18n: "cj_i18n_00895",
                icon: "maps",
                u: "https://mapstyle.withgoogle.com/",
                nu: "mapstyle.withgoogle.com"
            },
            623: {
                name: "Window Wonderland",
                i18n: "cj_i18n_00896",
                icon: "shopping",
                badge: "border_all",
                u: "https://windowwonderland.withgoogle.com/",
                nu: "windowwonderland.withgoogle.com"
            },
            624: {
                name: "Learn Web Tech",
                i18n: "cj_i18n_00886",
                icon: "googleg",
                u: "https://learnwebtech.withgoogle.com/",
                nu: "learnwebtech.withgoogle.com"
            },
            626: {
                name: "Partner Rewards",
                i18n: "cj_i18n_00888",
                icon: "googleg",
                u: "https://partnerrewards.withgoogle.com/",
                nu: "partnerrewards.withgoogle.com"
            },
            627: {
                name: "Cast SDK Developer Console",
                i18n: "cj_i18n_00898",
                icon: "cast",
                badge: "code",
                u: "https://cast.google.com/publish/",
                nu: "cast.google.com/publish"
            },
            628: {
                name: "Project Baseline",
                i18n: "cj_i18n_00899",
                icon: "googleg",
                u: "https://baseline.google.com/",
                nu: "baseline.google.com"
            },
            629: {
                name: "Public DNS Query",
                i18n: "cj_i18n_00900",
                icon: "public_dns",
                badge: "search",
                u: "https://dns.google.com/",
                nu: "dns.google.com"
            },
            630: {
                subId: "260",
                name: "Privacy",
                i18n: "cj_i18n_00901",
                icon: "my_account",
                badge: "lock",
                u: "https://safety.google/privacy/",
                nu: "safety.google/privacy"
            },
            631: {
                name: "Protect Your Election",
                i18n: "cj_i18n_00902",
                icon: "googleg",
                u: "https://protectyourelection.withgoogle.com/",
                nu: "protectyourelection.withgoogle.com"
            },
            632: {
                name: "Test Your Mobile Website Speed",
                i18n: "cj_i18n_00903",
                icon: "pagespeed",
                badge: "swap_driving_apps_wheel",
                u: "https://testmysite.withgoogle.com/",
                nu: "testmysite.withgoogle.com"
            },
            633: {
                name: "Hire",
                i18n: "cj_i18n_00904",
                icon: "hire",
                u: "https://hire.withgoogle.com/",
                nu: "hire.withgoogle.com"
            },
            634: {
                subId: "633",
                name: "About",
                i18n: "cj_i18n_00838",
                icon: "hire",
                badge: "info",
                u: "https://hire.google.com/",
                nu: "hire.google.com"
            },
            635: {
                name: "Shared endorsement",
                i18n: "cj_i18n_00905",
                icon: "my_account",
                badge: "rate_review",
                u: "https://myaccount.google.com/shared-endorsements",
                nu: "myaccount.google.com/shared-endorsements",
                au: "https://myaccount.google.com/u/[authuser]/shared-endorsements",
                bu: "https://myaccount.google.com/u/[authuser]/b/[pageid]/shared-endorsements"
            },
            636: {
                subId: "125",
                name: "Settings",
                i18n: "cj_i18n_00298",
                icon: "scholar",
                badge: "settings",
                u: "https://scholar.google.com/scholar_settings",
                nu: "scholar.google.com/scholar_settings",
                au: "https://scholar.google.com/scholar_settings?authuser=[authuser]"
            },
            637: {
                name: "Pride",
                i18n: "cj_i18n_00906",
                icon: "googleg",
                u: "https://pride.google/",
                nu: "pride.google"
            },
            638: {
                name: "Gradient Ventures",
                i18n: "cj_i18n_00907",
                icon: "googleg",
                u: "https://gradient.google/",
                nu: "gradient.google"
            },
            639: {
                name: "Opinion Rewards",
                i18n: "cj_i18n_00908",
                icon: "opinion_rewards",
                u: "https://surveys.google.com/google-opinion-rewards/",
                nu: "surveys.google.com/google-opinion-rewards"
            },
            640: {
                name: "Content Security Policy",
                i18n: "cj_i18n_00909",
                icon: "developers",
                u: "https://csp.withgoogle.com/docs/index.html",
                nu: "csp.withgoogle.com/docs/index.html"
            },
            641: {
                name: "Campus",
                i18n: "cj_i18n_00910",
                icon: "campus",
                u: "https://www.googleforentrepreneurs.com/campuses/",
                nu: "www.googleforentrepreneurs.com/campuses"
            },
            642: {
                name: "Blocks",
                i18n: "cj_i18n_00911",
                icon: "blocks",
                u: "https://vr.google.com/blocks/",
                nu: "vr.google.com/blocks",
                au: "https://vr.google.com/u/[authuser]/objects/",
                bu: "https://vr.google.com/u/[authuser]/b/[pageid]/objects/"
            },
            643: {
                name: "Accelerate with Google",
                i18n: "cj_i18n_00921",
                icon: "googleg",
                u: "https://accelerate.withgoogle.com/",
                nu: "accelerate.withgoogle.com"
            },
            644: {
                name: "Academy for ads",
                i18n: "cj_i18n_00912",
                icon: "ads",
                badge: "school",
                u: "https://landing.google.com/academyforads/",
                nu: "landing.google.com/academyforads"
            },
            645: {
                name: "Wing",
                i18n: "cj_i18n_01144",
                icon: "x",
                u: "https://wing.com/",
                nu: "wing.com"
            },
            646: {
                name: "Verily",
                i18n: "cj_i18n_00914",
                icon: "alphabet",
                badge: "favorite",
                u: "https://verily.com/",
                nu: "verily.com"
            },
            647: {
                name: "Crisis Response",
                i18n: "cj_i18n_00915",
                icon: "dot_org",
                badge: "target",
                u: "https://crisisresponse.google/",
                nu: "crisisresponse.google"
            },
            648: {
                name: "Business Groups",
                i18n: "cj_i18n_00916",
                icon: "gbg",
                u: "https://developers.google.com/programs/gbg/",
                nu: "developers.google.com/programs/gbg",
                au: "https://developers.google.com/programs/gbg/?authuser=[authuser]"
            },
            649: {
                name: "Backup and Sync",
                i18n: "cj_i18n_00917",
                icon: "backup_and_sync",
                u: "https://www.google.com/drive/download/",
                nu: "www.google.com/drive/download"
            },
            650: {
                name: "Nest",
                i18n: "cj_i18n_00922",
                icon: "googleg",
                u: "https://nest.com/",
                nu: "nest.com"
            },
            651: {
                name: "Nest Developers",
                i18n: "cj_i18n_00923",
                icon: "googleg",
                badge: "code",
                u: "https://developers.nest.com/",
                nu: "developers.nest.com"
            },
            652: {
                subId: "651",
                name: "Nest Console",
                i18n: "cj_i18n_00925",
                icon: "developers",
                badge: "nest_thermostat",
                u: "https://console.developers.nest.com/",
                nu: "console.developers.nest.com"
            },
            653: {
                subId: "450",
                name: "About",
                i18n: "cj_i18n_00838",
                icon: "allo",
                badge: "info",
                u: "https://allo.google.com/",
                nu: "allo.google.com"
            },
            654: {
                name: "User Research",
                i18n: "cj_i18n_00924",
                icon: "googleg",
                u: "https://userresearch.google.com/",
                nu: "userresearch.google.com"
            },
            655: {
                name: "Password Alert",
                i18n: "cj_i18n_00918",
                icon: "googleg",
                u: "https://chrome.google.com/webstore/detail/password-alert/noondiphcddnnabmjcihcjfbhfklnnep",
                nu: "chrome.google.com/webstore/detail/password-alert/noondiphcddnnabmjcihcjfbhfklnnep"
            },
            656: {
                name: "AIY Projects",
                i18n: "cj_i18n_00919",
                icon: "aiy",
                u: "https://aiyprojects.withgoogle.com/",
                nu: "aiyprojects.withgoogle.com"
            },
            657: {
                name: "Partner Marketing Hub",
                i18n: "cj_i18n_00920",
                icon: "googleg",
                u: "https://partnermarketinghub.withgoogle.com/",
                nu: "partnermarketinghub.withgoogle.com"
            },
            658: {
                name: "AR Experiments",
                i18n: "cj_i18n_00927",
                icon: "googleg",
                u: "https://experiments.withgoogle.com/collection/ar",
                nu: "experiments.withgoogle.com/collection/ar"
            },
            659: {
                name: "WebVR Experiments",
                i18n: "cj_i18n_00928",
                icon: "googleg",
                u: "https://experiments.withgoogle.com/collection/webvr",
                nu: "experiments.withgoogle.com/collection/webvr"
            },
            660: {
                name: "The Advantage Program",
                i18n: "cj_i18n_00929",
                icon: "googleg",
                u: "https://opportunities.withgoogle.com/hub/home/",
                nu: "opportunities.withgoogle.com/hub/home"
            },
            661: {
                name: "Experiments",
                i18n: "cj_i18n_00930",
                icon: "googleg",
                u: "https://experiments.withgoogle.com/",
                nu: "experiments.withgoogle.com"
            },
            662: {
                name: "Ads Traffic Quality",
                i18n: "cj_i18n_00931",
                icon: "ads",
                badge: "traffic",
                u: "https://www.google.com/ads/adtrafficquality/",
                nu: "www.google.com/ads/adtrafficquality"
            },
            663: {
                name: "Tech Dev Guide",
                i18n: "cj_i18n_00932",
                icon: "developers",
                u: "https://techdevguide.withgoogle.com/",
                nu: "techdevguide.withgoogle.com"
            },
            664: {
                name: "SMS Applications",
                i18n: "cj_i18n_00933",
                icon: "mobile",
                badge: "sms",
                u: "https://get.google.com/telinfo/",
                nu: "get.google.com/telinfo"
            },
            665: {
                name: "ARCore",
                i18n: "cj_i18n_00934",
                icon: "developers",
                u: "https://developers.google.com/ar/",
                nu: "developers.google.com/ar",
                au: "https://developers.google.com/ar/?authuser=[authuser]"
            },
            666: {
                name: "Startup",
                i18n: "cj_i18n_00935",
                icon: "googleg",
                u: "https://startup.google.com/",
                nu: "startup.google.com"
            },
            667: {
                name: "Wear OS Design Guidelines",
                i18n: "cj_i18n_01025",
                icon: "wear_os",
                badge: "palette",
                u: "https://designguidelines.withgoogle.com/wearos/",
                nu: "designguidelines.withgoogle.com/wearos"
            },
            668: {
                name: "AMI",
                i18n: "cj_i18n_00937",
                icon: "googleg",
                u: "https://ami.withgoogle.com/",
                nu: "ami.withgoogle.com"
            },
            670: {
                name: "Hash code",
                i18n: "cj_i18n_00939",
                icon: "developers",
                u: "https://hashcode.withgoogle.com/",
                nu: "hashcode.withgoogle.com"
            },
            671: {
                name: "Summer of code",
                i18n: "cj_i18n_00940",
                icon: "developers",
                u: "https://summerofcode.withgoogle.com/",
                nu: "summerofcode.withgoogle.com"
            },
            672: {
                name: "Table",
                i18n: "cj_i18n_00941",
                icon: "googleg",
                u: "https://tabel.withgoogle.com/",
                nu: "tabel.withgoogle.com"
            },
            673: {
                name: "Stories",
                i18n: "cj_i18n_00942",
                icon: "googleg",
                u: "https://stories.withgoogle.com/",
                nu: "stories.withgoogle.com"
            },
            674: {
                name: "Partner Rewards",
                i18n: "cj_i18n_00943",
                icon: "googleg",
                u: "https://partnerrewards.withgoogle.com/",
                nu: "partnerrewards.withgoogle.com"
            },
            675: {
                name: "DevArt",
                i18n: "cj_i18n_00944",
                icon: "developers",
                badge: "category",
                u: "https://devart.withgoogle.com/",
                nu: "devart.withgoogle.com"
            },
            676: {
                name: "Verne",
                i18n: "cj_i18n_00945",
                icon: "googleg",
                u: "https://verne.withgoogle.com/",
                nu: "verne.withgoogle.com"
            },
            677: {
                name: "Editions at Play",
                i18n: "cj_i18n_00946",
                icon: "books",
                u: "https://editionsatplay.withgoogle.com/",
                nu: "editionsatplay.withgoogle.com"
            },
            678: {
                name: "Edu Transformation Center",
                i18n: "cj_i18n_00947",
                icon: "googleg",
                u: "https://edutransformationcenter.withgoogle.com/",
                nu: "edutransformationcenter.withgoogle.com"
            },
            679: {
                name: "Anti-Malvertising",
                i18n: "cj_i18n_00948",
                icon: "googleg",
                u: "https://anti-malvertising.withgoogle.com/",
                nu: "anti-malvertising.withgoogle.com"
            },
            680: {
                name: "Experiments Challenge",
                i18n: "cj_i18n_00949",
                icon: "googleg",
                badge: "experiment",
                u: "https://experimentschallenge.withgoogle.com/",
                nu: "experimentschallenge.withgoogle.com"
            },
            681: {
                name: "Edu Directory",
                i18n: "cj_i18n_00950",
                icon: "googleg",
                badge: "school",
                u: "https://edudirectory.withgoogle.com/",
                nu: "edudirectory.withgoogle.com"
            },
            682: {
                name: "Edu Certification Exams",
                i18n: "cj_i18n_00951",
                icon: "googleg",
                badge: "school",
                u: "https://eduexams.withgoogle.com/",
                nu: "eduexams.withgoogle.com"
            },
            683: {
                name: "Earth View",
                i18n: "cj_i18n_00952",
                icon: "earth",
                badge: "search",
                u: "https://earthview.withgoogle.com/",
                nu: "earthview.withgoogle.com"
            },
            684: {
                name: "Tech Day",
                i18n: "cj_i18n_00953",
                icon: "googleg",
                u: "https://techday.withgoogle.com/",
                nu: "techday.withgoogle.com"
            },
            685: {
                name: "The Searching Planet Story",
                i18n: "cj_i18n_00954",
                icon: "googleg",
                u: "https://searchingplanet.withgoogle.com/en/",
                nu: "searchingplanet.withgoogle.com/en"
            },
            686: {
                name: "On Hub Makers",
                i18n: "cj_i18n_00955",
                icon: "googleg",
                u: "https://onhubmakers.withgoogle.com/",
                nu: "onhubmakers.withgoogle.com"
            },
            687: {
                name: "Grow with Google",
                i18n: "cj_i18n_00956",
                icon: "googleg",
                u: "https://grow.google/",
                nu: "grow.google"
            },
            688: {
                name: "Kick with Chrome",
                i18n: "cj_i18n_00957",
                icon: "chrome",
                badge: "youtube_sports",
                u: "https://kickwithchrome.withgoogle.com/",
                nu: "kickwithchrome.withgoogle.com"
            },
            689: {
                name: "Android Dev Summit",
                i18n: "cj_i18n_00958",
                icon: "play_apps",
                u: "https://developer.android.com/dev-summit/",
                nu: "developer.android.com/dev-summit"
            },
            690: {
                name: "Code-in",
                i18n: "cj_i18n_00959",
                icon: "developers",
                u: "https://codein.withgoogle.com/",
                nu: "codein.withgoogle.com"
            },
            691: {
                name: "Data Center Mural Project",
                i18n: "cj_i18n_00960",
                icon: "googleg",
                u: "https://datacentermurals.withgoogle.com/",
                nu: "datacentermurals.withgoogle.com"
            },
            692: {
                name: "IamRemarkable",
                i18n: "cj_i18n_00961",
                icon: "googleg",
                u: "https://iamremarkable.withgoogle.com/",
                nu: "iamremarkable.withgoogle.com"
            },
            693: {
                name: "Cloud OnAir",
                i18n: "cj_i18n_00962",
                icon: "google_cloud",
                u: "https://cloudonair.withgoogle.com/",
                nu: "cloudonair.withgoogle.com"
            },
            694: {
                name: "Petra",
                i18n: "cj_i18n_00963",
                icon: "googleg",
                u: "https://petravr.withgoogle.com/",
                nu: "petravr.withgoogle.com"
            },
            696: {
                name: "Maps Solutions Partner",
                i18n: "cj_i18n_00965",
                icon: "maps",
                u: "https://mapssolutions.withgoogle.com/",
                nu: "mapssolutions.withgoogle.com"
            },
            697: {
                name: "Partners Game On",
                i18n: "cj_i18n_00966",
                icon: "googleg",
                u: "https://partnersgameon.withgoogle.com/",
                nu: "partnersgameon.withgoogle.com"
            },
            698: {
                name: "Resume builder",
                i18n: "cj_i18n_00968",
                icon: "googleg",
                u: "https://resumebuilder.withgoogle.com/",
                nu: "resumebuilder.withgoogle.com"
            },
            699: {
                name: "Dublin Rising",
                i18n: "cj_i18n_00969",
                icon: "arts_and_culture",
                u: "https://dublinrising.withgoogle.com/",
                nu: "dublinrising.withgoogle.com"
            },
            700: {
                name: "Innovation Japan",
                i18n: "cj_i18n_00970",
                icon: "googleg",
                u: "https://innovationjapan.withgoogle.com/",
                nu: "innovationjapan.withgoogle.com"
            },
            701: {
                name: "reconciliation plan",
                i18n: "cj_i18n_00971",
                icon: "googleg",
                u: "https://reconciliationactionplan.withgoogle.com/",
                nu: "reconciliationactionplan.withgoogle.com"
            },
            702: {
                name: "Chrome Business Partners",
                i18n: "cj_i18n_00972",
                icon: "chrome",
                badge: "business",
                u: "https://cloud.withgoogle.com/partners/?products=CHROME",
                nu: "cloud.withgoogle.com/partners/?products=CHROME"
            },
            703: {
                name: "Community Space",
                i18n: "cj_i18n_00973",
                icon: "googleg",
                u: "https://communityspace.withgoogle.com/",
                nu: "communityspace.withgoogle.com"
            },
            704: {
                name: "Magic Minute Project",
                i18n: "cj_i18n_00974",
                icon: "android_wear",
                u: "https://magicminute.withgoogle.com/",
                nu: "magicminute.withgoogle.com"
            },
            705: {
                name: "Doodle wall",
                i18n: "cj_i18n_00975",
                icon: "googleg",
                u: "https://doodle.withgoogle.com/",
                nu: "doodle.withgoogle.com"
            },
            706: {
                name: "CSSI-Extension",
                i18n: "cj_i18n_00976",
                icon: "googleg",
                u: "https://cssiextension.withgoogle.com/",
                nu: "cssiextension.withgoogle.com"
            },
            708: {
                name: "Museum of the World",
                i18n: "cj_i18n_00978",
                icon: "arts_and_culture",
                badge: "account_balance",
                u: "https://britishmuseum.withgoogle.com/",
                nu: "britishmuseum.withgoogle.com"
            },
            709: {
                name: "Applied CS skills",
                i18n: "cj_i18n_00979",
                icon: "googleg",
                u: "https://appliedcsskills.withgoogle.com/",
                nu: "appliedcsskills.withgoogle.com"
            },
            710: {
                name: "Fiber events",
                i18n: "cj_i18n_00980",
                icon: "fiber",
                badge: "event",
                u: "https://fiberevents.withgoogle.com/",
                nu: "fiberevents.withgoogle.com"
            },
            711: {
                name: "Frightgeist",
                i18n: "cj_i18n_00981",
                icon: "googleg",
                u: "https://frightgeist.withgoogle.com/",
                nu: "frightgeist.withgoogle.com"
            },
            712: {
                name: "Play Game Fest",
                i18n: "cj_i18n_00982",
                icon: "play",
                u: "https://gamefest.withgoogle.com/",
                nu: "gamefest.withgoogle.com"
            },
            713: {
                name: "igniteCS",
                i18n: "cj_i18n_00983",
                icon: "googleg",
                u: "https://ignitecs.withgoogle.com/",
                nu: "ignitecs.withgoogle.com"
            },
            714: {
                name: "Talks at Google",
                i18n: "cj_i18n_00984",
                icon: "googleg",
                u: "https://talksat.withgoogle.com/",
                nu: "talksat.withgoogle.com"
            },
            715: {
                name: "Thru the dark",
                i18n: "cj_i18n_00985",
                icon: "googleg",
                u: "https://throughthedark.withgoogle.com/",
                nu: "throughthedark.withgoogle.com"
            },
            716: {
                name: "Developers newsletter",
                i18n: "cj_i18n_00986",
                icon: "developers",
                badge: "news",
                u: "https://developers.google.com/newsletter/",
                nu: "developers.google.com/newsletter"
            },
            717: {
                name: "Developers events",
                i18n: "cj_i18n_00987",
                icon: "developers",
                badge: "event",
                u: "https://developers.google.com/events/",
                nu: "developers.google.com/events"
            },
            718: {
                name: "Cloud Partner Directory",
                i18n: "cj_i18n_00988",
                icon: "google_cloud",
                badge: "people",
                u: "https://cloud.withgoogle.com/partners/",
                nu: "cloud.withgoogle.com/partners"
            },
            719: {
                name: "YouTube rewinds",
                i18n: "cj_i18n_00989",
                icon: "youtube",
                badge: "fast_rewind",
                u: "https://www.youtube.com/rewind",
                nu: "www.youtube.com/rewind",
                au: "https://www.youtube.com/signin?authuser=[authuser]&next=rewind",
                bu: "https://www.youtube.com/signin?authuser=[authuser]&pageid=[pageid]&next=rewind",
                aum: 2
            },
            720: {
                subId: "234",
                name: "Posts",
                i18n: "cj_i18n_00990",
                icon: "my_business",
                badge: "post",
                u: "https://business.google.com/posts",
                nu: "business.google.com/posts",
                au: "https://business.google.com/u/[authuser]/posts",
                bu: "https://business.google.com/u/[authuser]/b/[pageid]/posts"
            },
            725: {
                name: "Message Center",
                i18n: "cj_i18n_00995",
                icon: "admin",
                badge: "message",
                u: "https://email-quarantine.google.com/messagecenter",
                nu: "email-quarantine.google.com/messagecenter",
                au: "https://email-quarantine.google.com/messagecenter?authuser=[authuser]"
            },
            726: {
                name: "Admin Quarantine",
                i18n: "cj_i18n_00996",
                icon: "admin",
                badge: "email",
                u: "https://email-quarantine.google.com/adminreview",
                nu: "email-quarantine.google.com/adminreview",
                au: "https://email-quarantine.google.com/adminreview?authuser=[authuser]"
            },
            727: {
                name: "Play for Work",
                i18n: "cj_i18n_00997",
                icon: "play",
                badge: "business",
                u: "https://play.google.com/work",
                nu: "play.google.com/work",
                au: "https://play.google.com/work?authuser=[authuser]",
                aum: 2
            },
            728: {
                name: "Android Management Experience",
                i18n: "cj_i18n_00998",
                icon: "play_apps",
                u: "https://enterprise.google.com/android/experience",
                nu: "enterprise.google.com/android/experience",
                au: "https://enterprise.google.com/u/[authuser]/android/experience"
            },
            729: {
                name: "Play Games",
                i18n: "cj_i18n_00999",
                icon: "play_apps",
                badge: "play_games",
                u: "https://play.google.com/store/apps/details?id=com.google.android.play.games",
                nu: "play.google.com/store/apps/details?id=com.google.android.play.games",
                au: "https://play.google.com/store/apps/details?id=com.google.android.play.games&authuser=[authuser]",
                aum: 2
            },
            730: {
                subId: "126",
                name: "New script",
                i18n: "cj_i18n_01000",
                icon: "script",
                badge: "add",
                u: "https://script.google.com/create",
                nu: "script.google.com/create",
                au: "https://script.google.com/u/[authuser]/create",
                aum: 2
            },
            731: {
                subId: "158",
                name: "Search Console Beta",
                i18n: "cj_i18n_01001",
                icon: "search_console",
                u: "https://search.google.com/search-console",
                nu: "search.google.com/search-console",
                au: "https://search.google.com/u/[authuser]/search-console"
            },
            732: {
                name: "YouTube for Artists",
                i18n: "cj_i18n_01002",
                icon: "youtube",
                badge: "person",
                u: "https://artists.youtube.com/",
                nu: "artists.youtube.com"
            },
            733: {
                name: "Studio",
                i18n: "cj_i18n_01072",
                icon: "youtube_creator",
                u: "https://studio.youtube.com/",
                nu: "studio.youtube.com",
                au: "https://www.youtube.com/signin?authuser=[authuser]&next=https%3A%2F%2Fstudio.youtube.com%2F",
                bu: "https://www.youtube.com/signin?authuser=[authuser]&pageid=[pageid]&next=https%3A%2F%2Fstudio.youtube.com%2F",
                aum: 2
            },
            734: {
                name: "Remote Desktop",
                i18n: "cj_i18n_01004",
                icon: "chrome",
                badge: "screen_share",
                u: "https://remotedesktop.google.com/",
                nu: "remotedesktop.google.com",
                au: "https://remotedesktop.google.com/u/[authuser]/"
            },
            735: {
                subId: "158",
                name: "Rich Results Test",
                i18n: "cj_i18n_01005",
                icon: "search_console",
                u: "https://search.google.com/test/rich-results",
                nu: "search.google.com/test/rich-results",
                au: "https://search.google.com/u/[authuser]/test/rich-results",
                bu: "https://search.google.com/u/[authuser]/b/[pageid]/test/rich-results"
            },
            736: {
                subId: "79",
                name: "App passwords",
                i18n: "cj_i18n_01006",
                icon: "my_account",
                badge: "lock",
                u: "https://myaccount.google.com/apppasswords",
                nu: "myaccount.google.com/apppasswords",
                au: "https://myaccount.google.com/u/[authuser]/apppasswords"
            },
            737: {
                name: "Ads Status Dashboard",
                i18n: "cj_i18n_01007",
                icon: "ads",
                badge: "planner_review",
                u: "https://ads.google.com/status",
                nu: "ads.google.com/status"
            },
            738: {
                subId: "734",
                name: "Access",
                i18n: "cj_i18n_01008",
                icon: "chrome",
                badge: "screen_share",
                u: "https://remotedesktop.google.com/access",
                nu: "remotedesktop.google.com/access",
                au: "https://remotedesktop.google.com/u/[authuser]/access"
            },
            739: {
                subId: "734",
                name: "Support",
                i18n: "cj_i18n_01009",
                icon: "chrome",
                badge: "screen_share",
                u: "https://remotedesktop.google.com/support",
                nu: "remotedesktop.google.com/support",
                au: "https://remotedesktop.google.com/u/[authuser]/support"
            },
            740: {
                name: "Jamboard",
                i18n: "cj_i18n_00813",
                icon: "jamboard",
                u: "https://jamboard.google.com/",
                nu: "jamboard.google.com",
                au: "https://jamboard.google.com/u/[authuser]/"
            },
            741: {
                name: "Bulletin",
                i18n: "cj_i18n_01011",
                icon: "bulletin",
                u: "https://bulletin.google.com/",
                nu: "bulletin.google.com",
                au: "https://bulletin.google.com/u/[authuser]/"
            },
            742: {
                name: "Chromebook Partner Toolkit",
                i18n: "cj_i18n_01013",
                icon: "chrome",
                badge: "person",
                u: "https://chromebooktoolkit.withgoogle.com/",
                nu: "chromebooktoolkit.withgoogle.com"
            },
            743: {
                name: "Retail Toolkit",
                i18n: "cj_i18n_01014",
                icon: "googleg",
                u: "https://retailtoolkit.withgoogle.com/",
                nu: "retailtoolkit.withgoogle.com"
            },
            744: {
                name: "Android Partners Portal",
                i18n: "cj_i18n_01015",
                icon: "play_apps",
                u: "https://partner-android.appspot.com/home",
                nu: "partner-android.appspot.com/home"
            },
            745: {
                name: "Made by Google Partner Toolkit",
                i18n: "cj_i18n_01016",
                icon: "googleg",
                u: "https://madebytoolkit.withgoogle.com/",
                nu: "madebytoolkit.withgoogle.com"
            },
            746: {
                name: "Device art generator",
                i18n: "cj_i18n_01017",
                icon: "play_apps",
                u: "https://developer.android.com/distribute/marketing-tools/device-art-generator",
                nu: "developer.android.com/distribute/marketing-tools/device-art-generator"
            },
            747: {
                name: "Play Badges",
                i18n: "cj_i18n_01018",
                icon: "play",
                u: "https://play.google.com/intl/en/badges/",
                nu: "play.google.com/intl/en/badges"
            },
            748: {
                name: "Google I/O",
                i18n: "cj_i18n_01012",
                icon: "googleg",
                u: "https://events.google.com/io/",
                nu: "events.google.com/io"
            },
            749: {
                subId: "18",
                name: "Profile",
                i18n: "cj_i18n_01019",
                icon: "arts_and_culture",
                badge: "person",
                u: "https://artsandculture.google.com/project",
                nu: "artsandculture.google.com/project",
                au: "https://artsandculture.google.com/u/[authuser]/project"
            },
            750: {
                name: "Donation History",
                i18n: "cj_i18n_01020",
                icon: "one_today",
                u: "https://donate.google.com/history",
                nu: "donate.google.com/history",
                au: "https://donate.google.com/history?authuser=[authuser]"
            },
            751: {
                subId: "372",
                name: "Featured Projects",
                i18n: "cj_i18n_01021",
                icon: "one_today",
                u: "https://onetoday.google.com/home/projects",
                nu: "onetoday.google.com/home/projects"
            },
            752: {
                name: "Nonprofit Portal",
                i18n: "cj_i18n_01022",
                icon: "one_today",
                u: "https://donate.google.com/home/nonprofits",
                nu: "donate.google.com/home/nonprofits",
                au: "https://donate.google.com/home/nonprofits?authuser=[authuser]"
            },
            753: {
                name: "Flutter",
                i18n: "cj_i18n_01024",
                icon: "flutter",
                u: "https://flutter.io/",
                nu: "flutter.io"
            },
            754: {
                name: "Supplier Hub",
                i18n: "cj_i18n_01026",
                icon: "googleg",
                u: "https://supplierhub.google.com/",
                nu: "supplierhub.google.com",
                au: "https://supplierhub.google.com/u/[authuser]/"
            },
            755: {
                name: "Supply Chain Central",
                i18n: "cj_i18n_01027",
                icon: "googleg",
                u: "https://supplychain.google.com/central/",
                nu: "supplychain.google.com/central",
                au: "https://supplychain.google.com/central/u/[authuser]/"
            },
            756: {
                name: "Shopping List",
                i18n: "cj_i18n_01028",
                icon: "shoppinglist",
                u: "https://shoppinglist.google.com/",
                nu: "shoppinglist.google.com",
                au: "https://shoppinglist.google.com/u/[authuser]/"
            },
            757: {
                name: "News Initiative",
                i18n: "cj_i18n_01029",
                icon: "news",
                u: "https://newsinitiative.withgoogle.com/",
                nu: "newsinitiative.withgoogle.com"
            },
            758: {
                name: "April Fools",
                i18n: "cj_i18n_01031",
                icon: "aprilfools",
                u: "https://aprilfools.jeurissen.co/",
                nu: "aprilfools.jeurissen.co"
            },
            759: {
                subId: "101",
                name: "PWA",
                i18n: "cj_i18n_01032",
                icon: "maps",
                u: "https://www.google.com/maps/?force=pwa",
                nu: "www.google.com/maps/?force=pwa",
                au: "https://www.google.com/maps/?force=pwa&authuser=[authuser]"
            },
            760: {
                subId: "101",
                name: "Lite",
                i18n: "cj_i18n_01033",
                icon: "maps",
                badge: "offline_bolt",
                u: "https://www.google.com/maps/@?force=lite&dg=opt&newdg=1",
                nu: "www.google.com/maps/@?force=lite&dg=opt&newdg=1",
                au: "https://www.google.com/maps/?force=lite&authuser=[authuser]"
            },
            761: {
                name: "Home",
                i18n: "cj_i18n_01034",
                icon: "google_home",
                u: "https://play.google.com/store/apps/details?id=com.google.android.apps.chromecast.app",
                nu: "play.google.com/store/apps/details?id=com.google.android.apps.chromecast.app",
                au: "https://play.google.com/store/apps/details?id=com.google.android.apps.chromecast.app&authuser=[authuser]",
                aum: 2
            },
            762: {
                name: "Files",
                i18n: "cj_i18n_01145",
                icon: "files_go",
                u: "https://files.google.com/",
                nu: "files.google.com"
            },
            763: {
                name: "Gboard",
                i18n: "cj_i18n_01036",
                icon: "gboard",
                u: "https://play.google.com/store/apps/details?id=com.google.android.inputmethod.latin",
                nu: "play.google.com/store/apps/details?id=com.google.android.inputmethod.latin",
                au: "https://play.google.com/store/apps/details?id=com.google.android.inputmethod.latin&authuser=[authuser]",
                aum: 2
            },
            764: {
                name: "Destinations",
                i18n: "cj_i18n_01037",
                icon: "travel",
                u: "https://www.google.com/destination/compare?dest_mid=%2Fm%2F02j9z",
                nu: "www.google.com/destination/compare?dest_mid=%2Fm%2F02j9z",
                au: "https://www.google.com/destination/compare?authuser=[authuser]&dest_mid=%2Fm%2F02j9z"
            },
            765: {
                name: "Device Registration",
                i18n: "cj_i18n_01038",
                icon: "play_apps",
                u: "https://www.google.com/android/uncertified/",
                nu: "www.google.com/android/uncertified"
            },
            766: {
                name: "Video Quality Report",
                i18n: "cj_i18n_01039",
                icon: "googleg",
                u: "https://www.google.com/get/videoqualityreport/",
                nu: "www.google.com/get/videoqualityreport"
            },
            767: {
                name: "Datally",
                i18n: "cj_i18n_01044",
                icon: "datally",
                u: "https://datally.google.com/",
                nu: "datally.google.com"
            },
            768: {
                name: "Science Journal",
                i18n: "cj_i18n_01045",
                icon: "googleg",
                u: "https://sciencejournal.withgoogle.com/",
                nu: "sciencejournal.withgoogle.com"
            },
            769: {
                name: "Snapseed",
                i18n: "cj_i18n_01046",
                icon: "snapseed",
                u: "https://play.google.com/store/apps/details?id=com.niksoftware.snapseed",
                nu: "play.google.com/store/apps/details?id=com.niksoftware.snapseed",
                au: "https://play.google.com/store/apps/details?id=com.niksoftware.snapseed&authuser=[authuser]",
                aum: 2
            },
            770: {
                name: "GPay India",
                i18n: "cj_i18n_01111",
                icon: "pay",
                badge: "language",
                u: "https://pay.google.com/intl/en_in/about/",
                nu: "pay.google.com/intl/en_in/about"
            },
            771: {
                name: "Clips",
                i18n: "cj_i18n_01048",
                icon: "clips",
                u: "https://store.google.com/product/google_clips",
                nu: "store.google.com/product/google_clips",
                au: "https://store.google.com/us/product/google_clips?authuser=[authuser]"
            },
            772: {
                name: "Semantris",
                i18n: "cj_i18n_01049",
                icon: "research",
                u: "https://research.google.com/semantris/",
                nu: "research.google.com/semantris"
            },
            773: {
                name: "Semantic Experiences",
                i18n: "cj_i18n_01050",
                icon: "research",
                u: "https://research.google.com/semanticexperiences/",
                nu: "research.google.com/semanticexperiences"
            },
            774: {
                name: "Talk to Books",
                i18n: "cj_i18n_01051",
                icon: "books",
                badge: "chat_bubble",
                u: "https://books.google.com/talktobooks/",
                nu: "books.google.com/talktobooks"
            },
            775: {
                name: "Online Marketing Challenge",
                i18n: "cj_i18n_01052",
                icon: "ads",
                badge: "campaign_shopping",
                u: "https://get.google.com/onlinechallenge/",
                nu: "get.google.com/onlinechallenge"
            },
            776: {
                name: "Android Things",
                i18n: "cj_i18n_01053",
                icon: "play_apps",
                u: "https://developer.android.com/things/",
                nu: "developer.android.com/things"
            },
            777: {
                name: "Theme Editor",
                i18n: "cj_i18n_01054",
                icon: "material_design_remixer",
                badge: "palette",
                u: "https://material.io/tools/theme-editor/",
                nu: "material.io/tools/theme-editor"
            },
            778: {
                subId: "109",
                name: "For you",
                i18n: "cj_i18n_01055",
                icon: "news",
                badge: "person",
                u: "https://news.google.com/foryou",
                nu: "news.google.com/foryou",
                au: "https://news.google.com/u/[authuser]/foryou"
            },
            779: {
                name: "Digital Welbeing",
                i18n: "cj_i18n_01056",
                icon: "googleg",
                u: "https://wellbeing.google/",
                nu: "wellbeing.google"
            },
            780: {
                name: "YouTube Music",
                i18n: "cj_i18n_01057",
                icon: "youtube_music",
                u: "https://music.youtube.com/",
                nu: "music.youtube.com",
                au: "https://www.youtube.com/signin?authuser=[authuser]&next=https%3A%2F%2Fmusic.youtube.com%2F",
                bu: "https://www.youtube.com/signin?authuser=[authuser]&pageid=[pageid]&next=https%3A%2F%2Fmusic.youtube.com%2F",
                aum: 2
            },
            781: {
                name: "YouTube Movies",
                i18n: "cj_i18n_01058",
                icon: "youtube_movies",
                u: "https://www.youtube.com/movies",
                nu: "www.youtube.com/movies",
                au: "https://www.youtube.com/signin?authuser=[authuser]&next=movies",
                bu: "https://www.youtube.com/signin?authuser=[authuser]&pageid=[pageid]&next=movies",
                aum: 2
            },
            782: {
                name: "YouTube Kids",
                i18n: "cj_i18n_01059",
                icon: "youtube_kids",
                u: "https://kids.youtube.com/",
                nu: "kids.youtube.com"
            },
            783: {
                subId: "160",
                name: "Go Live",
                i18n: "cj_i18n_01060",
                icon: "youtube",
                badge: "youtube_live",
                u: "https://www.youtube.com/webcam",
                nu: "www.youtube.com/webcam",
                au: "https://www.youtube.com/signin?authuser=[authuser]&next=webcam",
                bu: "https://www.youtube.com/signin?authuser=[authuser]&pageid=[pageid]&next=webcam",
                aum: 2
            },
            784: {
                name: "Music Charts",
                i18n: "cj_i18n_01061",
                icon: "youtube",
                badge: "queue_music",
                u: "https://charts.youtube.com/",
                nu: "charts.youtube.com"
            },
            785: {
                name: "YouTube advertising",
                i18n: "cj_i18n_01143",
                icon: "youtube",
                badge: "ad",
                u: "https://www.youtube.com/yt/advertise/",
                nu: "www.youtube.com/yt/advertise"
            },
            786: {
                name: "Purchases",
                i18n: "cj_i18n_01063",
                icon: "youtube",
                badge: "my_subscriptions",
                u: "https://www.youtube.com/feed/subscriptions",
                nu: "www.youtube.com/feed/subscriptions",
                au: "https://www.youtube.com/signin?authuser=[authuser]&next=feed%2Fsubscriptions",
                bu: "https://www.youtube.com/signin?authuser=[authuser]&pageid=[pageid]&next=feed%2Fsubscriptions",
                aum: 2
            },
            787: {
                name: "One",
                i18n: "cj_i18n_01064",
                icon: "one",
                u: "https://one.google.com/",
                nu: "one.google.com",
                au: "https://one.google.com/u/[authuser]/"
            },
            788: {
                subId: "171",
                name: "Rules",
                i18n: "cj_i18n_01073",
                icon: "admin",
                badge: "search_hands_free",
                u: "https://admin.google.com/AdminHome#Rules:",
                nu: "admin.google.com/AdminHome#Rules:",
                au: "https://admin.google.com/AdminHome?authuser=[authuser]#Rules:",
                aum: 2
            },
            789: {
                name: "Events",
                i18n: "cj_i18n_01074",
                icon: "youtube_creator",
                badge: "event",
                u: "https://www.youtube.com/creators/events/",
                nu: "www.youtube.com/creators/events"
            },
            790: {
                name: "Awards",
                i18n: "cj_i18n_01075",
                icon: "youtube_creator",
                badge: "trophy",
                u: "https://www.youtube.com/creators/awards/",
                nu: "www.youtube.com/creators/awards"
            },
            791: {
                name: "Benefit levels",
                i18n: "cj_i18n_01076",
                icon: "youtube_creator",
                badge: "thumb_up_alt",
                u: "https://www.youtube.com/creators/benefits/",
                nu: "www.youtube.com/creators/benefits"
            },
            792: {
                name: "Partner Managers",
                i18n: "cj_i18n_01077",
                icon: "youtube_creator",
                badge: "person",
                u: "https://www.youtube.com/creators/partner-managers/",
                nu: "www.youtube.com/creators/partner-managers"
            },
            793: {
                name: "Cloud Products",
                i18n: "cj_i18n_01078",
                icon: "google_cloud",
                badge: "apps",
                u: "https://cloud.google.com/products/",
                nu: "cloud.google.com/products",
                au: "https://cloud.google.com/products/?authuser=[authuser]"
            },
            794: {
                subId: "6",
                name: "Audience Manager",
                i18n: "cj_i18n_01079",
                icon: "ads",
                badge: "people",
                u: "https://ads.google.com/aw/audiences/management",
                nu: "ads.google.com/aw/audiences/management",
                au: "https://ads.google.com/aw/audiences/management?authuser=[authuser]"
            },
            795: {
                subId: "6",
                name: "Negative keyword lists",
                i18n: "cj_i18n_01080",
                icon: "ads",
                badge: "font_download",
                u: "https://ads.google.com/aw/negativekeywordlist",
                nu: "ads.google.com/aw/negativekeywordlist",
                au: "https://ads.google.com/aw/negativekeywordlist?authuser=[authuser]"
            },
            796: {
                subId: "6",
                name: "Shared budgets",
                i18n: "cj_i18n_01081",
                icon: "ads",
                badge: "account_balance_wallet",
                u: "https://ads.google.com/aw/sharedbudgets",
                nu: "ads.google.com/aw/sharedbudgets",
                au: "https://ads.google.com/aw/sharedbudgets?authuser=[authuser]"
            },
            797: {
                subId: "6",
                name: "Placement exclusion lists",
                i18n: "cj_i18n_01082",
                icon: "ads",
                badge: "block",
                u: "https://ads.google.com/aw/placementexclusionlists",
                nu: "ads.google.com/aw/placementexclusionlists",
                au: "https://ads.google.com/aw/placementexclusionlists?authuser=[authuser]"
            },
            798: {
                name: "Messages",
                i18n: "cj_i18n_01084",
                icon: "messages",
                u: "https://messages.android.com/",
                nu: "messages.android.com"
            },
            799: {
                name: "Trusted Contacts",
                i18n: "cj_i18n_01086",
                icon: "contacts",
                badge: "lock",
                u: "https://contacts.google.com/trustedcontacts/dashboard/",
                nu: "contacts.google.com/trustedcontacts/dashboard",
                au: "https://contacts.google.com/trustedcontacts/u/[authuser]/dashboard/"
            },
            800: {
                name: "Reservations",
                i18n: "cj_i18n_01087",
                icon: "my_account",
                u: "https://myaccount.google.com/reservations",
                nu: "myaccount.google.com/reservations",
                au: "https://myaccount.google.com/u/[authuser]/reservations",
                bu: "https://myaccount.google.com/u/[authuser]/b/[pageid]/reservations"
            },
            801: {
                name: "Purchases",
                i18n: "cj_i18n_01088",
                icon: "my_account",
                u: "https://myaccount.google.com/purchases",
                nu: "myaccount.google.com/purchases",
                au: "https://myaccount.google.com/u/[authuser]/purchases",
                bu: "https://myaccount.google.com/u/[authuser]/b/[pageid]/purchases"
            },
            802: {
                name: "Subscriptions",
                i18n: "cj_i18n_01089",
                icon: "my_account",
                u: "https://myaccount.google.com/subscriptions",
                nu: "myaccount.google.com/subscriptions",
                au: "https://myaccount.google.com/u/[authuser]/subscriptions",
                bu: "https://myaccount.google.com/u/[authuser]/b/[pageid]/subscriptions"
            },
            803: {
                name: "Google for Nonprofits",
                i18n: "cj_i18n_01094",
                icon: "googleg",
                u: "https://www.google.com/nonprofits/",
                nu: "www.google.com/nonprofits"
            },
            804: {
                name: "Google for Publishers",
                i18n: "cj_i18n_01091",
                icon: "googleg",
                u: "https://www.google.com/ads/publisher/",
                nu: "www.google.com/ads/publisher"
            },
            805: {
                name: "Certified Publisher partner",
                i18n: "cj_i18n_01092",
                icon: "googleg",
                u: "https://www.google.com/ads/publisher/partners/",
                nu: "www.google.com/ads/publisher/partners"
            },
            806: {
                subId: "813",
                name: "About",
                i18n: "cj_i18n_00838",
                icon: "marketing_platform",
                badge: "info",
                u: "https://marketingplatform.google.com/",
                nu: "marketingplatform.google.com"
            },
            807: {
                subId: "813",
                name: "Partners",
                i18n: "cj_i18n_01093",
                icon: "marketing_platform",
                badge: "person",
                u: "https://marketingplatform.google.com/about/partners/",
                nu: "marketingplatform.google.com/about/partners"
            },
            808: {
                name: "Podcast Publisher Tools",
                i18n: "cj_i18n_01100",
                icon: "podcasts",
                badge: "person",
                u: "https://search.google.com/devtools/podcast/preview",
                nu: "search.google.com/devtools/podcast/preview"
            },
            809: {
                name: "Campaign Manager",
                i18n: "cj_i18n_01101",
                icon: "campaign_manager",
                u: "https://www.google.com/dfa/trafficking/",
                nu: "www.google.com/dfa/trafficking",
                au: "https://www.google.com/dfa/trafficking/?authuser=[authuser]",
                aum: 2
            },
            810: {
                name: "Publisher University",
                i18n: "cj_i18n_01102",
                icon: "googleg",
                u: "https://publisheruniversity.withgoogle.com/",
                nu: "publisheruniversity.withgoogle.com"
            },
            811: {
                name: "Enterprise Partners",
                i18n: "cj_i18n_01103",
                icon: "play_apps",
                u: "https://androidenterprisepartners.withgoogle.com/",
                nu: "androidenterprisepartners.withgoogle.com"
            },
            812: {
                name: "Comparison Shopping Partners",
                i18n: "cj_i18n_01104",
                icon: "shopping",
                u: "https://comparisonshoppingpartners.withgoogle.com/",
                nu: "comparisonshoppingpartners.withgoogle.com"
            },
            813: {
                name: "Marketing Platform",
                i18n: "cj_i18n_01090",
                icon: "marketing_platform",
                u: "https://marketingplatform.google.com/home",
                nu: "marketingplatform.google.com/home",
                au: "https://marketingplatform.google.com/home?authuser=[authuser]"
            },
            814: {
                subId: "813",
                name: "Integration Center",
                i18n: "cj_i18n_01105",
                icon: "marketing_platform",
                badge: "swap_horiz",
                u: "https://marketingplatform.google.com/home?openIntegrationCenter=true",
                nu: "marketingplatform.google.com/home?openIntegrationCenter=true",
                au: "https://marketingplatform.google.com/home?openIntegrationCenter=true&authuser=[authuser]"
            },
            815: {
                subId: "813",
                name: "Administration",
                i18n: "cj_i18n_01106",
                icon: "marketing_platform",
                badge: "settings",
                u: "https://marketingplatform.google.com/home/accounts",
                nu: "marketingplatform.google.com/home/accounts",
                au: "https://marketingplatform.google.com/home/accounts?authuser=[authuser]"
            },
            816: {
                subId: "813",
                name: "Recently Viewed",
                i18n: "cj_i18n_01107",
                icon: "marketing_platform",
                badge: "history",
                u: "https://marketingplatform.google.com/home/recents",
                nu: "marketingplatform.google.com/home/recents",
                au: "https://marketingplatform.google.com/home/recents?authuser=[authuser]"
            },
            817: {
                subId: "31",
                name: "Dev Console Beta",
                i18n: "cj_i18n_01108",
                icon: "chrome_web_store",
                badge: "build",
                u: "https://chrome.google.com/webstore/devconsole/",
                nu: "chrome.google.com/webstore/devconsole",
                au: "https://chrome.google.com/u/[authuser]/webstore/devconsole/"
            },
            818: {
                subId: "374",
                name: "Maps Platform",
                i18n: "cj_i18n_01109",
                icon: "cloud",
                badge: "maps",
                u: "https://console.cloud.google.com/google/maps-apis/overview",
                nu: "console.cloud.google.com/google/maps-apis/overview",
                au: "https://console.cloud.google.com/google/maps-apis/overview?authuser=[authuser]"
            },
            819: {
                subId: "54",
                name: "Local Markets",
                i18n: "cj_i18n_01113",
                icon: "finance",
                badge: "place",
                u: "https://www.google.com/finance?kbtab=LOCAL_MARKETS",
                nu: "www.google.com/finance?kbtab=LOCAL_MARKETS",
                au: "https://www.google.com/finance?kbtab=LOCAL_MARKETS&authuser=[authuser]"
            },
            820: {
                subId: "54",
                name: "World Markets",
                i18n: "cj_i18n_01114",
                icon: "finance",
                badge: "language",
                u: "https://www.google.com/finance?kbtab=WORLD_MARKETS",
                nu: "www.google.com/finance?kbtab=WORLD_MARKETS",
                au: "https://www.google.com/finance?kbtab=WORLD_MARKETS&authuser=[authuser]"
            },
            821: {
                name: "Find your laptop",
                i18n: "cj_i18n_01115",
                icon: "chrome",
                badge: "laptop_chromebook",
                u: "https://www.google.com/chromebook/find-yours/",
                nu: "www.google.com/chromebook/find-yours"
            },
            822: {
                subId: "31",
                name: "Library",
                i18n: "cj_i18n_01116",
                icon: "chrome_web_store",
                badge: "account_circle",
                u: "https://chrome.google.com/webstore/user/library",
                nu: "chrome.google.com/webstore/user/library",
                au: "https://chrome.google.com/webstore/user/library?authuser=[authuser]"
            },
            823: {
                name: "Sustainability",
                i18n: "cj_i18n_01117",
                icon: "googleg",
                u: "https://sustainability.google/",
                nu: "sustainability.google"
            },
            824: {
                name: "Android ELS",
                i18n: "cj_i18n_01118",
                icon: "googleg",
                u: "https://crisisresponse.google/emergencylocationservice/",
                nu: "crisisresponse.google/emergencylocationservice"
            },
            825: {
                subId: "809",
                name: "Trafficking",
                i18n: "cj_i18n_01120",
                icon: "campaign_manager",
                badge: "traffic",
                u: "https://www.google.com/dfa/trafficking/",
                nu: "www.google.com/dfa/trafficking",
                au: "https://www.google.com/dfa/trafficking/?authuser=[authuser]"
            },
            826: {
                subId: "809",
                name: "Planning",
                i18n: "cj_i18n_01121",
                icon: "campaign_manager",
                badge: "date",
                u: "https://www.google.com/ddm/planning/",
                nu: "www.google.com/ddm/planning",
                au: "https://www.google.com/ddm/planning/u/[authuser]/"
            },
            827: {
                subId: "809",
                name: "Reporting and Attribution",
                i18n: "cj_i18n_01122",
                icon: "campaign_manager",
                badge: "assignment",
                u: "https://ddm.google.com/analytics/dfa/",
                nu: "ddm.google.com/analytics/dfa",
                au: "https://ddm.google.com/analytics/dfa/?authuser=[authuser]"
            },
            828: {
                name: "Travel Trends",
                i18n: "cj_i18n_01123",
                icon: "travel",
                badge: "trending_up",
                u: "https://googletrends.github.io/traveltrends/",
                nu: "googletrends.github.io/traveltrends"
            },
            829: {
                name: "Flights + Hotels",
                i18n: "cj_i18n_01124",
                icon: "flights_and_hotels",
                u: "https://www.google.com/travel/flights-hotels/search/",
                nu: "www.google.com/travel/flights-hotels/search",
                au: "https://www.google.com/u/[authuser]/travel/flights-hotels/search/"
            },
            830: {
                name: "Trips",
                i18n: "cj_i18n_00735",
                icon: "trips",
                u: "https://www.google.com/search?ibp=dst;dest_mid:u,trifp:t%253Dyts&q=My+trips",
                nu: "www.google.com/search?ibp=dst;dest_mid:u,trifp:t%253Dyts&q=My+trips",
                au: "https://www.google.com/search?ibp=dst;dest_mid:u,trifp:t%253Dyts&q=My+trips&authuser=[authuser]"
            },
            831: {
                subId: "56",
                name: "Tracked flight prices",
                i18n: "cj_i18n_01125",
                icon: "flights",
                badge: "flag",
                u: "https://www.google.com/flights/?tfs=CAoQBA#flt=t:s",
                nu: "www.google.com/flights/?tfs=CAoQBA#flt=t:s",
                au: "https://www.google.com/flights?authuser=[authuser]&tfs=CAoQBA#flt=t:s"
            },
            832: {
                name: "Permissions",
                i18n: "cj_i18n_01126",
                icon: "googleg",
                badge: "lock",
                u: "https://www.google.com/permissions/",
                nu: "www.google.com/permissions"
            },
            833: {
                name: "Stackdriver",
                i18n: "cj_i18n_01127",
                icon: "googleg",
                u: "https://app.google.stackdriver.com/",
                nu: "app.google.stackdriver.com"
            },
            834: {
                subId: "154",
                name: "Messages",
                i18n: "cj_i18n_01128",
                icon: "voice",
                badge: "message",
                u: "https://voice.google.com/messages",
                nu: "voice.google.com/messages",
                au: "https://voice.google.com/u/[authuser]/messages",
                aum: 1
            },
            835: {
                subId: "154",
                name: "Voicemail",
                i18n: "cj_i18n_01129",
                icon: "voice",
                badge: "voicemail",
                u: "https://voice.google.com/voicemail",
                nu: "voice.google.com/voicemail",
                au: "https://voice.google.com/u/[authuser]/voicemail",
                aum: 1
            },
            836: {
                name: "Code Next",
                i18n: "cj_i18n_01130",
                icon: "googleg",
                u: "https://codenext.withgoogle.com/",
                nu: "codenext.withgoogle.com"
            },
            837: {
                name: "Shopping Insights",
                i18n: "cj_i18n_01131",
                icon: "googleg",
                u: "https://shopping.thinkwithgoogle.com/",
                nu: "shopping.thinkwithgoogle.com"
            },
            838: {
                name: "Create with Google",
                i18n: "cj_i18n_01132",
                icon: "googleg",
                u: "https://create.withgoogle.com/",
                nu: "create.withgoogle.com"
            },
            839: {
                name: "Keyboard",
                i18n: "cj_i18n_01133",
                icon: "googleg",
                u: "https://creatability.withgoogle.com/keyboard/",
                nu: "creatability.withgoogle.com/keyboard"
            },
            840: {
                name: "Product Experts",
                i18n: "cj_i18n_01134",
                icon: "googleg",
                u: "https://productexperts.withgoogle.com/",
                nu: "productexperts.withgoogle.com"
            },
            841: {
                subId: "374",
                name: "Cloud functions",
                i18n: "cj_i18n_01136",
                icon: "cloud",
                badge: "cj_gcp_functions",
                u: "https://console.cloud.google.com/functions",
                nu: "console.cloud.google.com/functions",
                au: "https://console.cloud.google.com/functions?authuser=[authuser]"
            },
            842: {
                subId: "374",
                name: "IAM & admin",
                i18n: "cj_i18n_01137",
                icon: "cloud",
                badge: "cj_gcp_iam",
                u: "https://console.cloud.google.com/iam-admin/iam",
                nu: "console.cloud.google.com/iam-admin/iam",
                au: "https://console.cloud.google.com/iam-admin/iam?authuser=[authuser]"
            },
            843: {
                subId: "374",
                name: "Security",
                i18n: "cj_i18n_01138",
                icon: "cloud",
                badge: "security",
                u: "https://console.cloud.google.com/security",
                nu: "console.cloud.google.com/security",
                au: "https://console.cloud.google.com/security?authuser=[authuser]"
            },
            844: {
                subId: "374",
                name: "Billing",
                i18n: "cj_i18n_01139",
                icon: "cloud",
                badge: "payment",
                u: "https://console.cloud.google.com/billing",
                nu: "console.cloud.google.com/billing",
                au: "https://console.cloud.google.com/billing?authuser=[authuser]"
            },
            845: {
                subId: "374",
                name: "Support",
                i18n: "cj_i18n_01140",
                icon: "cloud",
                badge: "accessibility",
                u: "https://console.cloud.google.com/support/overview",
                nu: "console.cloud.google.com/support/overview",
                au: "https://console.cloud.google.com/support/overview?authuser=[authuser]"
            },
            846: {
                name: "Beacons dashboard",
                i18n: "cj_i18n_01141",
                icon: "developers",
                u: "https://developers.google.com/beacons/dashboard/",
                nu: "developers.google.com/beacons/dashboard",
                au: "https://developers.google.com/beacons/dashboard/?authuser=[authuser]"
            },
            847: {
                name: "SPAN",
                i18n: "cj_i18n_01147",
                icon: "design",
                u: "https://design.google/span2018/",
                nu: "design.google/span2018"
            }
        },
        s = ["ac", "ad", "ae", "am", "as", "at", "az", "ba", "be", "bf", "bg", "bi", "bj", "bs", "by", "ca", "cat", "cc", "cd", "cf", "cg", "ch", "ci", "cl", "cm", "cn", "co.bw", "co.ck", "co.cr", "co.id", "co.il", "co.in", "co.jp", "co.ke", "co.kr", "co.ls", "co.ma", "co.mz", "co.nz", "co.th", "co.tz", "co.ug", "co.uk", "co.uz", "co.ve", "co.vi", "co.za", "co.zm", "co.zw", "com", "com.af", "com.ag", "com.ai", "com.ar", "com.au", "com.bd", "com.bh", "com.bn", "com.bo", "com.br", "com.by", "com.bz", "com.co", "com.cu", "com.cy", "com.do", "com.ec", "com.eg", "com.et", "com.fj", "com.gh", "com.gi", "com.gt", "com.hk", "com.jm", "com.kh", "com.kw", "com.lb", "com.lc", "com.ly", "com.mt", "com.mx", "com.my", "com.na", "com.nf", "com.ng", "com.ni", "com.np", "com.om", "com.pa", "com.pe", "com.ph", "com.pk", "com.pr", "com.py", "com.qa", "com.sa", "com.sb", "com.sg", "com.sl", "com.sv", "com.tj", "com.tn", "com.tr", "com.tw", "com.ua", "com.uy", "com.vc", "com.vn", "cv", "cz", "de", "dj", "dk", "dm", "dz", "ee", "es", "fi", "fm", "fr", "ga", "gd", "ge", "gf", "gg", "gl", "gm", "gp", "gr", "gy", "hn", "hr", "ht", "hu", "ie", "im", "io", "iq", "is", "it.ao", "it", "je", "jo", "kg", "ki", "kz", "la", "li", "lk", "lt", "lu", "lv", "md", "me", "mg", "mk", "ml", "mn", "ms", "mu", "mv", "mw", "ne", "nl", "no", "nr", "nu", "pl", "pn", "ps", "pt", "ro", "rs", "ru", "rw", "sc", "se", "sh", "si", "sk", "sm", "sn", "so", "st", "td", "tg", "tk", "tl", "tm", "to", "tt", "us", "vg", "vu", "ws"],
        c = {
            3: "6",
            13: "202",
            52: "421",
            74: "210",
            92: "823",
            285: "6",
            355: "550",
            358: "813",
            424: "693",
            434: "73",
            445: "215",
            455: "665",
            468: "459",
            487: "54",
            488: "155",
            558: "718",
            585: "39",
            600: "442",
            614: "613",
            707: "657",
            721: "234",
            722: "234",
            723: "234",
            724: "234"
        },
        i = {
            1: "157",
            2: "96",
            3: "93",
            5: "109",
            6: "129",
            8: "101",
            10: "24",
            12: "153",
            17: "236",
            22: "115",
            23: "59",
            24: "27",
            25: "46",
            27: "54",
            30: "21",
            31: "89",
            36: "160",
            38: "130",
            45: "158",
            49: "48",
            51: "144",
            53: "39",
            60: "147",
            67: "407",
            72: "154",
            77: "145",
            78: "70",
            84: "308",
            105: "152",
            108: "10",
            117: "137",
            118: "121",
            119: "82",
            136: "97",
            162: "204",
            166: "69",
            169: "410",
            170: "307",
            175: "295",
            177: "332",
            182: "35",
            184: "42",
            185: "297",
            189: "108",
            192: "79",
            199: "171",
            206: "56",
            207: "94",
            208: "224",
            210: "504",
            211: "527",
            212: "155",
            213: "188",
            216: "165",
            218: "167",
            223: "725",
            225: "627",
            228: "169",
            232: "271",
            233: "436",
            240: "185",
            248: "296",
            256: "298",
            258: "537",
            260: "234",
            261: "723",
            265: "232",
            268: "628",
            269: "241",
            275: "532",
            277: "234",
            279: "394",
            281: "133",
            283: "128",
            297: "210",
            300: "218",
            303: "17",
            316: "334",
            322: "82",
            330: "57",
            334: "56",
            338: "359",
            339: "220",
            340: "336",
            348: "378",
            353: "512",
            356: "728",
            357: "740",
            362: "155",
            364: "488",
            377: "418",
            378: "392",
            385: "559",
            393: "604",
            395: "126",
            401: "179",
            402: "405",
            404: "764",
            409: "466",
            411: "545",
            421: "817",
            426: "109",
            429: "49",
            430: "155",
            438: "741"
        },
        u = {
            10: "108",
            21: "30",
            24: "10",
            27: "24",
            39: "53",
            46: "25",
            48: "49",
            54: "27",
            56: "206",
            59: "23",
            69: "166",
            70: "78",
            79: "192",
            82: "119",
            89: "31",
            93: "3",
            96: "2",
            97: "136",
            100: "177",
            101: "8",
            109: "5",
            115: "22",
            129: "6",
            130: "38",
            137: "117",
            144: "51",
            147: "60",
            153: "12",
            154: "72",
            155: "212",
            157: "1",
            158: "45",
            160: "36",
            169: "228",
            171: "199",
            236: "17",
            295: "175",
            308: "84"
        },
        g = ["157", "59", "27", "144", "48", "97", "101", "160", "109", "295", "82"],
        m = ["59", "160", "172", "27", "48", "144", "101", "109", "157", "178", "97", "89", "82", "175", "295", "39", "11", "70", "96", "69", "4", "180", "46", "31", "128", "154", "23", "54", "21", "176", "158", "140", "218", "232", "93", "6", "43", "125", "33", "130", "156", "116", "299", "155", "129", "152", "182", "60", "79", "177", "171", "179", "359", "65", "16", "272", "298", "63", "133", "162", "185", "56", "167", "246", "261", "280", "71", "164", "215", "24", "5", "114", "170", "241", "28", "108", "174", "49", "61", "68", "73", "75", "10", "104", "300", "35", "377", "90", "107", "207", "216", "234", "242", "333", "375", "80", "113", "132", "247", "287", "307", "311", "334", "103", "106", "147", "217", "243", "317", "34", "42", "62", "1", "110", "17", "202", "214", "219", "222", "236", "271", "276", "288", "289", "291", "30", "316", "353", "362", "365", "55", "57", "100", "115", "126", "137", "139", "149", "15", "153", "161", "192", "201", "221", "237", "244", "286", "294", "301", "306", "308", "310", "320", "330", "346", "366", "370", "40", "45", "50", "52", "77", "85", "87", "99", "118", "120", "127", "142", "188", "194", "196", "197", "2", "20", "204", "205", "208", "210", "211", "213", "223", "226", "235", "240", "248", "251", "252", "253", "254", "256", "264", "265", "267", "268", "270", "273", "274", "275", "277", "279", "281", "293", "296", "297", "304", "305", "318", "32", "321", "325", "326", "328", "331", "332", "347", "350", "351", "357", "369", "371", "373", "53", "64", "78", "91"],
        r = ["allo", "custom_search", "dot_org", "maps", "my_business", "search_console", "streetview", "translate"];
    return {
        gbIdToShortcutIdMap: i,
        shortcutIdToGbIdMap: u,
        defaultSelection: g,
        legacyShortcuts: c,
        mostPopular: m,
        badgeOnLeftIcons: r,
        list: a,
        findMatches: t,
        getUrl: n
    }
}();
