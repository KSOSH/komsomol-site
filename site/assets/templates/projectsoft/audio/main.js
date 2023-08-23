!function() {
    var e = -1;
    const t = document.querySelectorAll("ul.audio-list li a"), a = document.getElementById("audioPlayer"), r = Array.prototype.slice.call(t);
    if (player && a && r.length) {
        player.volume = CookieObject("audioVolume") || 1;
        const t = a.querySelector(".title"), l = a.querySelector(".time"), i = a.querySelector(".cover"), o = a.querySelector(".volume-bar"), n = o ? o.querySelector(".bar") : null, s = a.querySelector(".progress-bar"), c = s ? s.querySelector(".bar") : null, u = a.querySelector(".btn-play"), d = a.querySelector(".btns-prev"), p = a.querySelector(".btns-next"), y = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAANSURBVBhXYzix//l/AAgvA25TRp6zAAAAAElFTkSuQmCC", A = function(o) {
            let n = document.querySelector(`ul.audio-list li a[data-audio-index="${e}"`), u = e + 1, d = n ? n.innerHTML : "";
            u = u > 9 ? u : "0" + u;
            switch (o.type) {
              case "play":
                a.classList.add("play");
                r.forEach(function(e, t, a) {
                    e.parentNode.classList.remove("play");
                    e.parentNode.classList.remove("select");
                });
                n && (n.parentNode.classList.add("play"), n.parentNode.classList.add("select"));
                break;

              case "pause":
                a.classList.remove("play");
                r.forEach(function(e, t, a) {
                    e.parentNode.classList.remove("play");
                    e.parentNode.classList.remove("select");
                });
                n && n.parentNode.classList.add("select");
                break;

              case "metadata":
                if (t) {
                    o.object.title && (t.innerHTML = `${u}. ` + o.object.title);
                }
                if (i) {
                    o.object.picture && (i.style.backgroundImage = `url('${o.object.picture}')`);
                }
                break;

              case "stop":
                a.classList.remove("play");
                ++e;
                r.forEach(function(e, t, a) {
                    e.parentNode.classList.remove("play");
                    e.parentNode.classList.remove("select");
                });
                e = e < r.length ? e : 0;
                n = document.querySelector(`ul.audio-list li a[data-audio-index="${e}"`);
                n && n.click();
                break;

              case "volume":
                if (CookieObject && o.object.volume >= 0) {
                    h(o.object.volume * 100 + "%");
                    CookieObject("audioVolume", o.object.volume, {
                        expires: 360
                    });
                }
                break;

              case "error":
                player.stop();
                c && (L("0%"), s.setAttribute("data-audio-duration", 0));
                a.classList.remove("play");
                r.forEach(function(e, t, a) {
                    e.parentNode.classList.remove("play");
                    e.parentNode.classList.remove("select");
                });
                n && n.parentNode.classList.add("select");
                break;

              default:
                break;
            }
            if (l && o.object.time) {
                l.innerText = o.object.time.curStr + " / " + o.object.time.durStr;
                c && (L(o.object.percent + "%"), s.setAttribute("data-audio-duration", o.object.duration));
            }
        }, f = function(t) {
            t.preventDefault();
            a.classList.remove("play");
            --e;
            r.forEach(function(e, t, a) {
                e.parentNode.classList.remove("play");
                e.parentNode.classList.remove("select");
            });
            e = e > r.length ? r.length - 1 : e < 0 ? r.length - 1 : e;
            console.log(e);
            link = document.querySelector(`ul.audio-list li a[data-audio-index="${e}"`);
            link && link.click();
            return !1;
        }, m = function(t) {
            t.preventDefault();
            a.classList.remove("play");
            ++e;
            r.forEach(function(e, t, a) {
                e.parentNode.classList.remove("play");
                e.parentNode.classList.remove("select");
            });
            e = e < r.length ? e : 0;
            link = document.querySelector(`ul.audio-list li a[data-audio-index="${e}"`);
            link && link.click();
            return !1;
        }, b = function(t) {
            t.preventDefault();
            if (e >= 0) {
                player.isPlaying() ? player.pause() : player.play();
            } else if (r.length) {
                player.play();
            }
            return !1;
        }, v = function(a) {
            a.preventDefault();
            e = Number(this.getAttribute("data-audio-index"));
            if (e >= 0 && e < r.length) {
                if (player.stream != this.href) {
                    let a = this.innerHTML, r = e + 1;
                    r = r > 9 ? r : "0" + r;
                    player.isPlaying() && player.stop();
                    player.stream = this.href;
                    player.play();
                    t && (t.innerHTML = `${r}. ` + a);
                    i && (i.style.backgroundImage = `url('${y}')`);
                } else {
                    player.isPlaying() ? player.pause() : player.play();
                }
            }
            return !1;
        }, h = function(e) {
            if (n) {
                n.style.width = e;
            }
        }, L = function(e) {
            if (c) {
                c.style.width = e;
            }
        };
        evt = [ "play", "playing", "timeupdate", "pause", "stop", "abort", "emptied", "error", "volume", "metadata", "error" ];
        t && (t.innerHTML = "&nbsp;");
        l && (l.innerText = "00:00 / 00:00");
        evt.forEach(function(e) {
            player.addEventListener(e, A);
        });
        if (r.length) {
            r.forEach(function(e, t, a) {
                let r = document.createElement("a"), l = document.createElement("span"), i = e.parentNode;
                r.innerHTML = "";
                l.innerHTML = " ";
                r.href = e.href;
                r.classList.add("icon-download");
                r.setAttribute("download", e.innerText + "");
                r.setAttribute("target", "_blank");
                r.setAttribute("title", "СКАЧАТЬ \n" + r.getAttribute("download"));
                i.appendChild(l);
                i.appendChild(r);
                e.setAttribute("data-audio-index", t);
                e.addEventListener("click", v);
            });
            u && u.addEventListener("click", b);
        }
        i && (i.style.backgroundImage = `url('${y}')`);
        s && s.addEventListener("click", function(e) {
            let t = player.audioElement;
            if (player.isPlaying()) {
                let a = Number(s.getAttribute("data-audio-duration")), r = parseFloat(this.offsetWidth), l = parseFloat(e.offsetX), i = parseFloat(l * a / r);
                if (a && i) {
                    t.currentTime = i;
                }
            }
        });
        o && o.addEventListener("click", function(e) {
            let t = parseFloat(this.offsetWidth), a = parseFloat(e.offsetX), r = parseFloat(a / t);
            player.volume = r;
        });
        d && d.addEventListener("click", f);
        p && p.addEventListener("click", m);
    }
}();