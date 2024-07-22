document.addEventListener("DOMContentLoaded", () => {
    document
        .getElementById("ContactForm1_contact-form-submit")
        .classList.add(
            "w-full",
            "py-3",
            "px-4",
            "inline-flex",
            "justify-center",
            "items-center",
            "gap-x-2",
            "text-sm",
            "font-semibold",
            "rounded-lg",
            "border",
            "border-transparent",
            "bg-blue-600",
            "text-white",
            "hover:bg-blue-700",
            "disabled:opacity-50",
            "disabled:pointer-events-none"
        );
    const e = document.getElementById("postbody"),
        t = e.getElementsByTagName("img");
    for (let e of t) e.classList.add("w-full", "object-cover", "rounded-xl");
    const n = e.getElementsByTagName("p");
    for (let e of n)
        e.classList.add(
            "text-lg",
            "pb-6",
            "text-gray-800",
            "dark:text-neutral-200"
        );
}),
    document.addEventListener("DOMContentLoaded", () => {
        fetch("https://mee.hsinghhira.me/src/json/work.json")
            .then((e) => e.json())
            .then((e) => {
                const t = document.getElementById("work");
                e.work.forEach((e) => {
                    const n = document.createElement("div");
                    n.className = "work-item";
                    const o = new Date(e.startDate).toLocaleDateString("en-US", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                    }),
                        a = e.endDate
                            ? new Date(e.endDate).toLocaleDateString("en-US", {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                            })
                            : "Current",
                        r = e.image
                            ? e.image
                            : "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhgW2ptfHYLpVA8Fssjwi0Oz9tqGgoRbyN2iH8M_pjdqJQHYHYenOuGmj2IUfauVSwfh10QbfhUxjrEes5wf09jc8TV9KV37_gaYMELYRRgjX79WAafStnhJI-kHpWwjmagogMXmn-eWMRYHBvVQcG5kMwo9E3Ot_vLZMbEp4h4PK3n1C3Gm6JbiGVnMiU/s1600/noimage.png";
                    (n.innerHTML = `<div class="flex gap-x-3"><div><div class="relative z-10 w-14 flex justify-center items-center"><img class="w-14 h-14 p-1 rounded-full ring-2" src="${r}" /></div></div><div class="grow pb-8 px-2"><h3 class="flex gap-x-1.5 text-lg font-semibold text-gray-800 dark:text-white">${e.position} at ${e.company}</h3><p class="mt-1 text-sm font-medium text-gray-400 dark:text-neutral-500">${o} - ${a} / ${e.term}</p><p class="text-md py-2 font-medium text-gray-800 dark:text-neutral-200">${e.summary}</p></div></div>`),
                        t.appendChild(n);
                });
            })
            .catch((e) => { });
    }),
    document.addEventListener("DOMContentLoaded", () => {
        fetch("https://mee.hsinghhira.me/src/json/edu.json")
            .then((e) => e.json())
            .then((e) => {
                const t = document.getElementById("edu");
                e.education.forEach((e) => {
                    const n = document.createElement("div");
                    n.className = "edu-item";
                    const o = new Date(e.startDate).toLocaleDateString("en-US", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                    }),
                        a = e.endDate
                            ? new Date(e.endDate).toLocaleDateString("en-US", {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                            })
                            : "Current",
                        r = e.image
                            ? e.image
                            : "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhgW2ptfHYLpVA8Fssjwi0Oz9tqGgoRbyN2iH8M_pjdqJQHYHYenOuGmj2IUfauVSwfh10QbfhUxjrEes5wf09jc8TV9KV37_gaYMELYRRgjX79WAafStnhJI-kHpWwjmagogMXmn-eWMRYHBvVQcG5kMwo9E3Ot_vLZMbEp4h4PK3n1C3Gm6JbiGVnMiU/s1600/noimage.png";
                    (n.innerHTML = `<div class="flex gap-x-3"><div><div class="relative z-10 w-14 flex justify-center items-center"><img class="w-14 h-14 p-1 rounded-full ring-2" src="${r}" /></div></div><div class="grow pb-8 px-2"><h3 class="flex gap-x-1.5 text-lg font-semibold text-gray-800 dark:text-white">${e.institution}</h3><p class="mt-1 text-sm font-medium text-gray-400 dark:text-neutral-500">${o} - ${a}</p><p class="text-md py-2 font-medium text-gray-800 dark:text-neutral-200">${e.studyType}</p></div></div>`),
                        t.appendChild(n);
                });
            })
            .catch((e) => { });
    });

    imgr=new Array();
    imgr[0]="http://3.bp.blogspot.com/-zP87C2q9yog/UVopoHY30SI/AAAAAAAAE5k/AIyPvrpGLn8/s1600/picture_not_available.png";
    showRandomImg=true;

  function HSH_Widget(json) {
  j = (showRandomImg) ? Math.floor((imgr.length + 1) * Math.random()) : 0;
  img = new Array();
  if (6 <= json.feed.entry.length) {
      maxpost = 6
  } else {
      maxpost = json.feed.entry.length
  }
  for (var i = 0; i < maxpost; i++) {
      var entry = json.feed.entry[i];
      var posttitle = entry.title.$t.substring(0, 30) + '...';
      var pcm;
      var posturl;
      if (i == json.feed.entry.length) break;
      for (var k = 0; k < entry.link.length; k++) {
          if (entry.link[k].rel == 'alternate') {
              posturl = entry.link[k].href;
              break
          }
      }
      for (var k = 0; k < entry.link.length; k++) {
          if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
              pcm = entry.link[k].title.split(" ")[0];
              break
          }
      }
      if ("content" in entry) {
          var postcontent = entry.content.$t
      } else if ("summary" in entry) {
          var postcontent = entry.summary.$t
      } else var postcontent = "";
      postdate = entry.published.$t;
      if (j > imgr.length - 1) j = 0;
      img[i] = "";
      s = postcontent;
      a = s.indexOf("<img");
      b = s.indexOf("src=\"", a);
      c = s.indexOf("\"", b + 5);
      d = s.substr(b + 5, c - b - 5);
      if ((a != -1) && (b != -1) && (c != -1) && (d != "")) {
          if (i == 0) {
              img[i] = d;
          } else {
              img[i] = d;
          }
      }
      var trtd = '<div class="column"><a href="' + posturl + '"><img class="column_img" src="' + img[i] + '" width="250px"></a><h7><a href="' + posturl + '">' + posttitle + '</a></h7></div>';
      document.write(trtd)       
      j++
  }
}

      
    var currentPage = 1;

    function hsinghhira(e) {
        console.log('Callback function triggered');
        if (!e || !e.feed || !e.feed.entry) {
            console.error('Invalid feed data');
            return;
        }
    
        var t = document.getElementById("content");
        t.innerHTML = "";
    
        for (var n = 0; n < e.feed.entry.length; n++) {
            if (n >= 5 * (currentPage - 1) && n < 5 * currentPage) {
                var o = "";
                for (var a = 0; a < e.feed.entry[n].link.length; a++) {
                    if ("alternate" === e.feed.entry[n].link[a].rel) {
                        o = e.feed.entry[n].link[a].href;
                        break;
                    }
                }
    
                var r = "";
                var content = e.feed.entry[n].content.$t;
                if (content.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/)) {
                    var l = content.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/).pop();
                    if (l.length === 11) r = "//img.youtube.com/vi/" + l + "/0.jpg";
                } else if (e.feed.entry[n].media$thumbnail) {
                    r = e.feed.entry[n].media$thumbnail.url.replace("/s72-w640-h312-c/", "/s500/");
                } else if (content.match(/src="(.+?\.(jpg|gif|png))"/)) {
                    r = content.match(/src="(.+?\.(jpg|gif|png))"/)[1];
                } else {
                    r = "https://github.com/hsinghhira.png";
                }
    
                var d = (content || "")
                    .replace(/(<([^>]+)>)/gi, "")
                    .substring(0, 100) + "...";
    
                var s = `
                  <a class="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40" href="${o}">
                      <div class="aspect-w-16 aspect-h-11">
                          <img class="w-full object-cover rounded-xl" src="${r}" alt="${e.feed.entry[n].title.$t}">
                      </div>
                      <div class="my-6">
                          <h3 class="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
                              ${e.feed.entry[n].title.$t}
                          </h3>
                          <p class="mt-5 text-gray-600 dark:text-neutral-400">
                              ${d}
                          </p>
                      </div>
                      <div class="mt-auto flex items-center gap-x-3">
                          <img class="size-8 rounded-full" src="https://github.com/hsinghhira.png?size=200" alt="Harman Singh Hira">
                          <div>
                              <h5 class="text-sm text-gray-800 dark:text-neutral-200">By Harman Singh Hira</h5>
                          </div>
                      </div>
                  </a>
                `;
    
                var c = document.createElement("div");
                c.innerHTML = s;
                t.appendChild(c);
            }
        }
    
        var m = document.getElementById("nextPageLink");
        if (5 * currentPage < e.feed.entry.length) {
            m.style.display = "";
        } else {
            m.style.display = "none";
        }
    }
    
    function loadNextPage() {
        currentPage++;
        loadPosts();
    }
    
    function loadPosts() {
        console.log('Loading posts for page', currentPage);
        var script = document.createElement("script");
        script.src = "https://me.hsinghhira.me/feeds/posts/default/-/Project/?max-results=600&alt=json-in-script&callback=hsinghhira";
        script.onerror = function() {
            console.error('Failed to load script');
        };
        document.body.appendChild(script);
    }
    
    window.onpopstate = function (e) {
        currentPage = e.state && e.state.page ? e.state.page : 1;
        loadPosts();
    };
    
    currentPage = 1;
    loadPosts();
    



var themeToggleBtn,
    themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon"),
    themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");
"dark" === localStorage.getItem("color-theme") ||
    (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ? themeToggleLightIcon.classList.remove("hidden")
    : themeToggleDarkIcon.classList.remove("hidden"),
    (themeToggleBtn = document.getElementById("theme-toggle")).addEventListener(
        "click",
        function () {
            themeToggleDarkIcon.classList.toggle("hidden"),
                themeToggleLightIcon.classList.toggle("hidden"),
                localStorage.getItem("color-theme")
                    ? "light" === localStorage.getItem("color-theme")
                        ? (document.documentElement.classList.add("dark"),
                            localStorage.setItem("color-theme", "dark"))
                        : (document.documentElement.classList.remove("dark"),
                            localStorage.setItem("color-theme", "light"))
                    : document.documentElement.classList.contains("dark")
                        ? (document.documentElement.classList.remove("dark"),
                            localStorage.setItem("color-theme", "light"))
                        : (document.documentElement.classList.add("dark"),
                            localStorage.setItem("color-theme", "dark"));
        }
    ),
    (themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon")),
    (themeToggleLightIcon = document.getElementById("theme-toggle-light-icon")),
    "dark" === localStorage.getItem("color-theme") ||
        (!("color-theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
        ? themeToggleLightIcon.classList.remove("hidden")
        : themeToggleDarkIcon.classList.remove("hidden"),
    (themeToggleBtn = document.getElementById("theme-toggle")).addEventListener(
        "click",
        function () {
            themeToggleDarkIcon.classList.toggle("hidden"),
                themeToggleLightIcon.classList.toggle("hidden"),
                localStorage.getItem("color-theme")
                    ? "light" === localStorage.getItem("color-theme")
                        ? (document.documentElement.classList.add("dark"),
                            localStorage.setItem("color-theme", "dark"))
                        : (document.documentElement.classList.remove("dark"),
                            localStorage.setItem("color-theme", "light"))
                    : document.documentElement.classList.contains("dark")
                        ? (document.documentElement.classList.remove("dark"),
                            localStorage.setItem("color-theme", "light"))
                        : (document.documentElement.classList.add("dark"),
                            localStorage.setItem("color-theme", "dark"));
        }
    );
