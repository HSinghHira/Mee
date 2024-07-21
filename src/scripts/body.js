document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("ContactForm1_contact-form-submit")
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
var currentPage = 1;
function hsinghhira(e) {
    var t = document.getElementById("content");
    t.innerHTML = "";
    for (var n = 0; n < e.feed.entry.length; n++)
        if (n >= 5 * (currentPage - 1) && n < 5 * currentPage) {
            for (var o = "", a = 0; a < e.feed.entry[n].link.length; a++)
                if ("alternate" === e.feed.entry[n].link[a].rel) {
                    o = e.feed.entry[n].link[a].href;
                    break;
                }
            var r = "";
            if (
                e.feed.entry[n].content.$t.match(
                    /youtube\.com.*(\?v=|\/embed\/)(.{11})/
                )
            ) {
                var l = e.feed.entry[n].content.$t
                    .match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/)
                    .pop();
                11 == l.length && (r = "//img.youtube.com/vi/" + l + "/0.jpg");
            } else
            r = e.feed.entry[n].media$thumbnail
            ? e.feed.entry[n].media$thumbnail.url
            : e.feed.entry[n].content.$t.match(/src="(.+?\.(jpg|gif|png))"/)
                ? e.feed.entry[n].content.$t.match(/src="(.+?\.(jpg|gif|png))"/)[1]
                : "https://github.com/hsinghhira.png";
        
            var d =
                (e.feed.entry[n].content.$t || "")
                    .replace(/(<([^>]+)>)/gi, "")
                    .substring(0, 100) + "...",
                s = `\n              <a class="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40" href="${o}">\n                  <div class="aspect-w-16 aspect-h-11">\n                      <img class="w-full object-cover rounded-xl" src="${r}" alt="${e.feed.entry[n].title.$t}">\n                  </div>\n                  <div class="my-6">\n                      <h3 class="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">\n                          ${e.feed.entry[n].title.$t}\n                      </h3>\n                      <p class="mt-5 text-gray-600 dark:text-neutral-400">\n                          ${d}\n                      </p>\n                  </div>\n                  <div class="mt-auto flex items-center gap-x-3">\n                      <img class="size-8 rounded-full" src="https://github.com/hsinghhira.png?size=200" alt="Harman Singh Hira">\n                      <div>\n                          <h5 class="text-sm text-gray-800 dark:text-neutral-200">By Harman Singh Hira</h5>\n                      </div>\n                  </div>\n              </a>\n              `,
                c = document.createElement("div");
            (c.innerHTML = s), t.appendChild(c);
        }
    var i = document.getElementById("nextPageLink");
    5 * currentPage < e.feed.entry.length
        ? (i.style.display = "")
        : (i.style.display = "none");
}
function loadNextPage() {
    currentPage++, loadPosts();
}
function loadPosts() {
    var e = document.createElement("script");
    (e.src =
        "https://me.hsinghhira.me/feeds/posts/default/-/Project/?max-results=600&alt=json-in-script&callback=hsinghhira"),
        document.body.appendChild(e);
}
(window.onpopstate = function (e) {
    (currentPage = e.state && e.state.page ? e.state.page : 1), loadPosts();
}),
    (currentPage = 1),
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
