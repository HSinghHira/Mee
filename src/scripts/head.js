function CopyLink() {
  const e = window.location.href;
  navigator.clipboard
    .writeText(e)
    .then(() => {})
    .catch((e) => {});
}
mobilecheck() &&
  $("<link/>", {
    media: "all",
    rel: "stylesheet",
    type: "text/css",
    href: "assets/styles/mobile.css",
  }).appendTo("head"),
  (document.getElementById("year").innerHTML = new Date().getFullYear());
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
    var trtd = '<a class="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40" href="' + posturl + '"><div class="aspect-w-16 aspect-h-11"><img class="w-full object-cover rounded-xl" src="' + img[i] + '" alt="' + posttitle + '"></div><div class="my-6"><h3 class="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">' + posttitle + '</h3><p class="mt-5 text-gray-600 dark:text-neutral-400">' + posttitle + '</p></div><div class="mt-auto flex items-center gap-x-3"><img class="size-8 rounded-full" src="https://github.com/hsinghhira.png?size=200" alt="Harman Singh Hira"><div><h5 class="text-sm text-gray-800 dark:text-neutral-200">By Harman Singh Hira</h5></div></div></a>';
    document.write(trtd)       
    j++
}
}