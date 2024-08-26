function HSH_Widget(e) {
  (j = showRandomImg ? Math.floor((imgr.length + 1) * Math.random()) : 0),
    (img = new Array()),
    6 <= e.feed.entry.length ? (maxpost = 6) : (maxpost = e.feed.entry.length);
  for (var t = 0; t < maxpost; t++) {
    var r,
      i = e.feed.entry[t],
      l = i.title.$t.substring(0, 30) + "...";
    if (t == e.feed.entry.length) break;
    for (var n = 0; n < i.link.length; n++)
      if ("alternate" == i.link[n].rel) {
        r = i.link[n].href;
        break;
      }
    for (n = 0; n < i.link.length; n++)
      if ("replies" == i.link[n].rel && "text/html" == i.link[n].type) {
        i.link[n].title.split(" ")[0];
        break;
      }
    if ("content" in i) var o = i.content.$t;
    else if ("summary" in i) o = i.summary.$t;
    else o = "";
    (postdate = i.published.$t),
      j > imgr.length - 1 && (j = 0),
      (img[t] = ""),
      (s = o),
      (a = s.indexOf("<img")),
      (b = s.indexOf('src="', a)),
      (c = s.indexOf('"', b + 5)),
      (d = s.substr(b + 5, c - b - 5)),
      -1 != a && -1 != b && -1 != c && "" != d && (img[t] = d);
    var g =
      '<a class="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40" href="' +
      r +
      '"><div class="aspect-w-16 aspect-h-11"><img class="w-full object-cover rounded-xl" src="' +
      img[t] +
      '" alt="' +
      l +
      '"></div><div class="my-6"><h3 class="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">' +
      l +
      '</h3><p class="mt-5 text-gray-600 dark:text-neutral-400">' +
      o +
      '</p></div><div class="mt-auto flex items-center gap-x-3"><img class="size-8 rounded-full" src="https://github.com/hsinghhira.png?size=200" alt="Harman Singh Hira"><div><h5 class="text-sm text-gray-800 dark:text-neutral-200">By Harman Singh Hira</h5></div></div></a>';
    document.write(g), j++;
  }
}
(imgr = new Array()),
  (imgr[0] =
    "http://3.bp.blogspot.com/-zP87C2q9yog/UVopoHY30SI/AAAAAAAAE5k/AIyPvrpGLn8/s1600/picture_not_available.png"),
  (showRandomImg = !0);
