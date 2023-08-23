!function() {
    var e = /\+/g;
    function t(e) {
        if (!arguments[1]) {
            return;
        }
        for (i = 1; i < arguments.length; i++) {
            var t = arguments[i];
            for (var r in t) {
                if (!e[r] && t.hasOwnProperty(r)) {
                    e[r] = t[r];
                }
            }
        }
        return e;
    }
    function r(e) {
        return e && {}.toString.call(e) === "[object Function]";
    }
    function n(e) {
        return u.raw ? e : encodeURIComponent(e);
    }
    function a(e) {
        return u.raw ? e : decodeURIComponent(e);
    }
    function o(e) {
        return n(u.json ? JSON.stringify(e) : String(e));
    }
    function s(t) {
        if (t.indexOf('"') === 0) {
            t = t.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\");
        }
        try {
            t = decodeURIComponent(t.replace(e, " "));
            return u.json ? JSON.parse(t) : t;
        } catch (e) {}
    }
    function c(e, t) {
        var n = u.raw ? e : s(e);
        return r(t) ? t(n) : n;
    }
    var u = window.CookieObject = function(e, i, s) {
        if (arguments.length > 1 && !r(i)) {
            s = t({}, u.defaults, s);
            if (typeof s.expires === "number") {
                var f = s.expires, l = s.expires = new Date();
                l.setMilliseconds(l.getMilliseconds() + f * 864e5);
            }
            return document.cookie = [ n(e), "=", o(i), s.expires ? "; expires=" + s.expires.toUTCString() : "", s.path ? "; path=" + s.path : "", s.domain ? "; domain=" + s.domain : "", s.secure ? "; secure" : "" ].join("");
        }
        var d = e ? undefined : {}, p = document.cookie ? document.cookie.split("; ") : [], m = 0, h = p.length;
        for (;m < h; m++) {
            var g = p[m].split("="), v = a(g.shift()), y = g.join("=");
            if (e === v) {
                d = c(y, i);
                break;
            }
            if (!e && (y = c(y)) !== undefined) {
                d[v] = y;
            }
        }
        return d;
    };
    u.defaults = {};
    window.removeCookie = function(e, r) {
        window.CookieObject(e, "", t({}, r, {
            expires: -1
        }));
        return !window.CookieObject(e);
    };
}();

(function(e) {
    if ("object" === typeof exports && "undefined" !== typeof module) module.f = e(); else if ("function" === typeof define && define.M) define([], e); else {
        var t;
        "undefined" !== typeof window ? t = window : "undefined" !== typeof global ? t = global : "undefined" !== typeof self ? t = self : t = this;
        t.ID3 = e();
    }
})(function() {
    return function e(t, r, n) {
        function i(o, s) {
            if (!r[o]) {
                if (!t[o]) {
                    var c = "function" == typeof require && require;
                    if (!s && c) return c(o, !0);
                    if (a) return a(o, !0);
                    c = Error("Cannot find module '" + o + "'");
                    throw c.code = "MODULE_NOT_FOUND", c;
                }
                c = r[o] = {
                    f: {}
                };
                t[o][0].call(c.f, function(e) {
                    var r = t[o][1][e];
                    return i(r ? r : e);
                }, c, c.f, e, t, r, n);
            }
            return r[o].f;
        }
        for (var a = "function" == typeof require && require, o = 0; o < n.length; o++) i(n[o]);
        return i;
    }({
        1: [ function(e, t) {
            var r = e("./stringutils");
            if ("undefined" !== typeof document) {
                var n = document.createElement("script");
                n.type = "text/vbscript";
                n.textContent = "Function IEBinary_getByteAt(strBinary, iOffset)\r\n\tIEBinary_getByteAt = AscB(MidB(strBinary,iOffset+1,1))\r\nEnd Function\r\nFunction IEBinary_getLength(strBinary)\r\n\tIEBinary_getLength = LenB(strBinary)\r\nEnd Function\r\n";
                document.getElementsByTagName("head")[0].appendChild(n);
            } else e("btoa"), e("atob");
            t.f = function(e, t, n) {
                var i = t || 0, a = 0;
                "string" == typeof e ? (a = n || e.length, this.a = function(t) {
                    return e.charCodeAt(t + i) & 255;
                }) : "unknown" == typeof e && (a = n || IEBinary_getLength(e), this.a = function(t) {
                    return IEBinary_getByteAt(e, t + i);
                });
                this.s = function(e, t) {
                    for (var r = Array(t), n = 0; n < t; n++) r[n] = this.a(e + n);
                    return r;
                };
                this.l = function() {
                    return a;
                };
                this.g = function(e, t) {
                    return 0 != (this.a(e) & 1 << t);
                };
                this.F = function(e) {
                    e = (this.a(e + 1) << 8) + this.a(e);
                    0 > e && (e += 65536);
                    return e;
                };
                this.m = function(e) {
                    var t = this.a(e), r = this.a(e + 1), n = this.a(e + 2);
                    e = this.a(e + 3);
                    t = (((t << 8) + r << 8) + n << 8) + e;
                    0 > t && (t += 4294967296);
                    return t;
                };
                this.w = function(e) {
                    var t = this.a(e), r = this.a(e + 1);
                    e = this.a(e + 2);
                    t = ((t << 8) + r << 8) + e;
                    0 > t && (t += 16777216);
                    return t;
                };
                this.c = function(e, t) {
                    for (var r = [], n = e, i = 0; n < e + t; n++, i++) r[i] = String.fromCharCode(this.a(n));
                    return r.join("");
                };
                this.h = function(e, t, n) {
                    e = this.s(e, t);
                    switch (n.toLowerCase()) {
                      case "utf-16":
                      case "utf-16le":
                      case "utf-16be":
                        n = r.J(e, n);
                        break;

                      case "utf-8":
                        n = r.K(e);
                        break;

                      default:
                        n = r.I(e);
                    }
                    return n;
                };
                this.i = function(e, t) {
                    t();
                };
            };
        }, {
            "./stringutils": 9,
            atob: void 0,
            btoa: void 0
        } ],
        2: [ function(e, t) {
            var r = e("./binaryfile");
            t.f = function(t, n, i) {
                function a(e, t, r, n, i, a) {
                    var s = o();
                    s ? ("undefined" === typeof a && (a = !0), t && ("undefined" != typeof s.onload ? (s.onload = function() {
                        "200" == s.status || "206" == s.status ? (s.fileSize = i || s.getResponseHeader("Content-Length"), 
                        t(s)) : r && r({
                            error: "xhr",
                            xhr: s
                        });
                        s = null;
                    }, r && (s.onerror = function() {
                        r({
                            error: "xhr",
                            xhr: s
                        });
                        s = null;
                    })) : s.onreadystatechange = function() {
                        4 == s.readyState && ("200" == s.status || "206" == s.status ? (s.fileSize = i || s.getResponseHeader("Content-Length"), 
                        t(s)) : r && r({
                            error: "xhr",
                            xhr: s
                        }), s = null);
                    }), s.open("GET", e, a), s.overrideMimeType && s.overrideMimeType("text/plain; charset=x-user-defined"), 
                    n && s.setRequestHeader("Range", "bytes=" + n[0] + "-" + n[1]), s.setRequestHeader("If-Modified-Since", "Sat, 01 Jan 1970 00:00:00 GMT"), 
                    s.send(null)) : r && r({
                        error: "Unable to create XHR object"
                    });
                }
                function o() {
                    var t = null;
                    "undefined" === typeof window ? t = new (e("xmlhttprequest").XMLHttpRequest)() : window.XMLHttpRequest ? t = new window.XMLHttpRequest() : window.ActiveXObject && (t = new window.ActiveXObject("Microsoft.XMLHTTP"));
                    return t;
                }
                function s(e, t, r) {
                    var n = o();
                    n ? (t && ("undefined" != typeof n.onload ? (n.onload = function() {
                        "200" == n.status || "206" == n.status ? t(this) : r && r({
                            error: "xhr",
                            xhr: n
                        });
                        n = null;
                    }, r && (n.onerror = function() {
                        r({
                            error: "xhr",
                            xhr: n
                        });
                        n = null;
                    })) : n.onreadystatechange = function() {
                        4 == n.readyState && ("200" == n.status || "206" == n.status ? t(this) : r && r({
                            error: "xhr",
                            xhr: n
                        }), n = null);
                    }), n.open("HEAD", e, !0), n.send(null)) : r && r({
                        error: "Unable to create XHR object"
                    });
                }
                function c(e, t) {
                    var n, o;
                    function s(e) {
                        var t = ~~(e[0] / n) - o;
                        e = ~~(e[1] / n) + 1 + o;
                        0 > t && (t = 0);
                        e >= blockTotal && (e = blockTotal - 1);
                        return [ t, e ];
                    }
                    function c(r, o) {
                        for (;l[r[0]]; ) if (r[0]++, r[0] > r[1]) {
                            o && o();
                            return;
                        }
                        for (;l[r[1]]; ) if (r[1]--, r[0] > r[1]) {
                            o && o();
                            return;
                        }
                        var s = [ r[0] * n, (r[1] + 1) * n - 1 ];
                        a(e, function(e) {
                            parseInt(e.getResponseHeader("Content-Length"), 10) == t && (r[0] = 0, r[1] = blockTotal - 1, 
                            s[0] = 0, s[1] = t - 1);
                            e = {
                                data: e.W || e.responseText,
                                offset: s[0]
                            };
                            for (var n = r[0]; n <= r[1]; n++) l[n] = e;
                            o && o();
                        }, i, s, u, !!o);
                    }
                    var u, f = new r("", 0, t), l = [];
                    n = n || 2048;
                    o = "undefined" === typeof o ? 0 : o;
                    blockTotal = ~~((t - 1) / n) + 1;
                    for (var d in f) f.hasOwnProperty(d) && "function" === typeof f[d] && (this[d] = f[d]);
                    this.a = function(e) {
                        var t;
                        c(s([ e, e ]));
                        return (t = l[~~(e / n)]) && "string" == typeof t.data ? t.data.charCodeAt(e - t.offset) & 255 : t && "unknown" == typeof t.data ? IEBinary_getByteAt(t.data, e - t.offset) : "";
                    };
                    this.i = function(e, t) {
                        c(s(e), t);
                    };
                }
                (function() {
                    s(t, function(e) {
                        e = parseInt(e.getResponseHeader("Content-Length"), 10) || -1;
                        n(new c(t, e));
                    }, i);
                })();
            };
        }, {
            "./binaryfile": 1,
            xmlhttprequest: void 0
        } ],
        3: [ function(e, t) {
            var r = e("./binaryfile");
            t.f = function(e, t) {
                return function(n, i) {
                    var a = t || new FileReader();
                    a.onload = function(e) {
                        i(new r(e.target.result));
                    };
                    a.readAsBinaryString(e);
                };
            };
        }, {
            "./binaryfile": 1
        } ],
        4: [ function(e, t) {
            function r(e) {
                return "ftypM4A" == e.c(4, 7) ? n : "ID3" == e.c(0, 3) ? a : i;
            }
            var n = e("./id4"), i = e("./id3v1"), a = e("./id3v2"), o = e("./bufferedbinaryajax"), s = e("./filereader");
            "undefined" !== typeof window && (window.FileAPIReader = s);
            var c = {}, u = {}, f = [ 0, 7 ];
            c.B = function(e) {
                delete u[e];
            };
            c.A = function() {
                u = {};
            };
            c.H = function(e, t, n) {
                n = n || {};
                (n.dataReader || o)(e, function(i) {
                    i.i(f, function() {
                        var a = r(i);
                        a.u(i, function() {
                            var r = n.tags, o = a.v(i, r), r = u[e] || {}, s;
                            for (s in o) o.hasOwnProperty(s) && (r[s] = o[s]);
                            u[e] = r;
                            t && t();
                        });
                    });
                }, n.onError);
            };
            c.D = function(e) {
                if (!u[e]) return null;
                var t = {}, r;
                for (r in u[e]) u[e].hasOwnProperty(r) && (t[r] = u[e][r]);
                return t;
            };
            c.G = function(e, t) {
                return u[e] ? u[e][t] : null;
            };
            c.FileAPIReader = s;
            c.loadTags = c.H;
            c.getAllTags = c.D;
            c.getTag = c.G;
            c.clearTags = c.B;
            c.clearAll = c.A;
            t.f = c;
        }, {
            "./bufferedbinaryajax": 2,
            "./filereader": 3,
            "./id3v1": 5,
            "./id3v2": 6,
            "./id4": 8
        } ],
        5: [ function(e, t) {
            var r = {}, n = "Blues;Classic Rock;Country;Dance;Disco;Funk;Grunge;Hip-Hop;Jazz;Metal;New Age;Oldies;Other;Pop;R&B;Rap;Reggae;Rock;Techno;Industrial;Alternative;Ska;Death Metal;Pranks;Soundtrack;Euro-Techno;Ambient;Trip-Hop;Vocal;Jazz+Funk;Fusion;Trance;Classical;Instrumental;Acid;House;Game;Sound Clip;Gospel;Noise;AlternRock;Bass;Soul;Punk;Space;Meditative;Instrumental Pop;Instrumental Rock;Ethnic;Gothic;Darkwave;Techno-Industrial;Electronic;Pop-Folk;Eurodance;Dream;Southern Rock;Comedy;Cult;Gangsta;Top 40;Christian Rap;Pop/Funk;Jungle;Native American;Cabaret;New Wave;Psychadelic;Rave;Showtunes;Trailer;Lo-Fi;Tribal;Acid Punk;Acid Jazz;Polka;Retro;Musical;Rock & Roll;Hard Rock;Folk;Folk-Rock;National Folk;Swing;Fast Fusion;Bebob;Latin;Revival;Celtic;Bluegrass;Avantgarde;Gothic Rock;Progressive Rock;Psychedelic Rock;Symphonic Rock;Slow Rock;Big Band;Chorus;Easy Listening;Acoustic;Humour;Speech;Chanson;Opera;Chamber Music;Sonata;Symphony;Booty Bass;Primus;Porn Groove;Satire;Slow Jam;Club;Tango;Samba;Folklore;Ballad;Power Ballad;Rhythmic Soul;Freestyle;Duet;Punk Rock;Drum Solo;Acapella;Euro-House;Dance Hall".split(";");
            r.u = function(e, t) {
                var r = e.l();
                e.i([ r - 128 - 1, r ], t);
            };
            r.v = function(e) {
                var t = e.l() - 128;
                if ("TAG" == e.c(t, 3)) {
                    var r = e.c(t + 3, 30).replace(/\0/g, ""), i = e.c(t + 33, 30).replace(/\0/g, ""), a = e.c(t + 63, 30).replace(/\0/g, ""), o = e.c(t + 93, 4).replace(/\0/g, "");
                    if (0 == e.a(t + 97 + 28)) var s = e.c(t + 97, 28).replace(/\0/g, ""), c = e.a(t + 97 + 29); else s = "", 
                    c = 0;
                    e = e.a(t + 97 + 30);
                    return {
                        version: "1.1",
                        title: r,
                        artist: i,
                        album: a,
                        year: o,
                        comment: s,
                        track: c,
                        genre: 255 > e ? n[e] : ""
                    };
                }
                return {};
            };
            t.f = r;
        }, {} ],
        6: [ function(e, t) {
            function r(e, t) {
                var r = t.a(e), n = t.a(e + 1), i = t.a(e + 2);
                return t.a(e + 3) & 127 | (i & 127) << 7 | (n & 127) << 14 | (r & 127) << 21;
            }
            var n = e("./id3v2frames");
            n.frames = {
                BUF: "Recommended buffer size",
                CNT: "Play counter",
                COM: "Comments",
                CRA: "Audio encryption",
                CRM: "Encrypted meta frame",
                ETC: "Event timing codes",
                EQU: "Equalization",
                GEO: "General encapsulated object",
                IPL: "Involved people list",
                LNK: "Linked information",
                MCI: "Music CD Identifier",
                MLL: "MPEG location lookup table",
                PIC: "Attached picture",
                POP: "Popularimeter",
                REV: "Reverb",
                RVA: "Relative volume adjustment",
                SLT: "Synchronized lyric/text",
                STC: "Synced tempo codes",
                TAL: "Album/Movie/Show title",
                TBP: "BPM (Beats Per Minute)",
                TCM: "Composer",
                TCO: "Content type",
                TCR: "Copyright message",
                TDA: "Date",
                TDY: "Playlist delay",
                TEN: "Encoded by",
                TFT: "File type",
                TIM: "Time",
                TKE: "Initial key",
                TLA: "Language(s)",
                TLE: "Length",
                TMT: "Media type",
                TOA: "Original artist(s)/performer(s)",
                TOF: "Original filename",
                TOL: "Original Lyricist(s)/text writer(s)",
                TOR: "Original release year",
                TOT: "Original album/Movie/Show title",
                TP1: "Lead artist(s)/Lead performer(s)/Soloist(s)/Performing group",
                TP2: "Band/Orchestra/Accompaniment",
                TP3: "Conductor/Performer refinement",
                TP4: "Interpreted, remixed, or otherwise modified by",
                TPA: "Part of a set",
                TPB: "Publisher",
                TRC: "ISRC (International Standard Recording Code)",
                TRD: "Recording dates",
                TRK: "Track number/Position in set",
                TSI: "Size",
                TSS: "Software/hardware and settings used for encoding",
                TT1: "Content group description",
                TT2: "Title/Songname/Content description",
                TT3: "Subtitle/Description refinement",
                TXT: "Lyricist/text writer",
                TXX: "User defined text information frame",
                TYE: "Year",
                UFI: "Unique file identifier",
                ULT: "Unsychronized lyric/text transcription",
                WAF: "Official audio file webpage",
                WAR: "Official artist/performer webpage",
                WAS: "Official audio source webpage",
                WCM: "Commercial information",
                WCP: "Copyright/Legal information",
                WPB: "Publishers official webpage",
                WXX: "User defined URL link frame",
                AENC: "Audio encryption",
                APIC: "Attached picture",
                COMM: "Comments",
                COMR: "Commercial frame",
                ENCR: "Encryption method registration",
                EQUA: "Equalization",
                ETCO: "Event timing codes",
                GEOB: "General encapsulated object",
                GRID: "Group identification registration",
                IPLS: "Involved people list",
                LINK: "Linked information",
                MCDI: "Music CD identifier",
                MLLT: "MPEG location lookup table",
                OWNE: "Ownership frame",
                PRIV: "Private frame",
                PCNT: "Play counter",
                POPM: "Popularimeter",
                POSS: "Position synchronisation frame",
                RBUF: "Recommended buffer size",
                RVAD: "Relative volume adjustment",
                RVRB: "Reverb",
                SYLT: "Synchronized lyric/text",
                SYTC: "Synchronized tempo codes",
                TALB: "Album/Movie/Show title",
                TBPM: "BPM (beats per minute)",
                TCOM: "Composer",
                TCON: "Content type",
                TCOP: "Copyright message",
                TDAT: "Date",
                TDLY: "Playlist delay",
                TENC: "Encoded by",
                TEXT: "Lyricist/Text writer",
                TFLT: "File type",
                TIME: "Time",
                TIT1: "Content group description",
                TIT2: "Title/songname/content description",
                TIT3: "Subtitle/Description refinement",
                TKEY: "Initial key",
                TLAN: "Language(s)",
                TLEN: "Length",
                TMED: "Media type",
                TOAL: "Original album/movie/show title",
                TOFN: "Original filename",
                TOLY: "Original lyricist(s)/text writer(s)",
                TOPE: "Original artist(s)/performer(s)",
                TORY: "Original release year",
                TOWN: "File owner/licensee",
                TPE1: "Lead performer(s)/Soloist(s)",
                TPE2: "Band/orchestra/accompaniment",
                TPE3: "Conductor/performer refinement",
                TPE4: "Interpreted, remixed, or otherwise modified by",
                TPOS: "Part of a set",
                TPUB: "Publisher",
                TRCK: "Track number/Position in set",
                TRDA: "Recording dates",
                TRSN: "Internet radio station name",
                TRSO: "Internet radio station owner",
                TSIZ: "Size",
                TSRC: "ISRC (international standard recording code)",
                TSSE: "Software/Hardware and settings used for encoding",
                TYER: "Year",
                TXXX: "User defined text information frame",
                UFID: "Unique file identifier",
                USER: "Terms of use",
                USLT: "Unsychronized lyric/text transcription",
                WCOM: "Commercial information",
                WCOP: "Copyright/Legal information",
                WOAF: "Official audio file webpage",
                WOAR: "Official artist/performer webpage",
                WOAS: "Official audio source webpage",
                WORS: "Official internet radio station homepage",
                WPAY: "Payment",
                WPUB: "Publishers official webpage",
                WXXX: "User defined URL link frame"
            };
            var i = {
                title: [ "TIT2", "TT2" ],
                artist: [ "TPE1", "TP1" ],
                album: [ "TALB", "TAL" ],
                year: [ "TYER", "TYE" ],
                comment: [ "COMM", "COM" ],
                track: [ "TRCK", "TRK" ],
                genre: [ "TCON", "TCO" ],
                picture: [ "APIC", "PIC" ],
                lyrics: [ "USLT", "ULT" ]
            }, a = [ "title", "artist", "album", "track" ];
            n.u = function(e, t) {
                e.i([ 0, r(6, e) ], t);
            };
            n.v = function(e, t) {
                var o = 0, s = e.a(o + 3);
                if (4 < s) return {
                    version: ">2.4"
                };
                var c = e.a(o + 4), u = e.g(o + 5, 7), f = e.g(o + 5, 6), l = e.g(o + 5, 5), d = r(o + 6, e), o = o + 10;
                if (f) var p = e.m(o), o = o + (p + 4);
                var s = {
                    version: "2." + s + "." + c,
                    major: s,
                    revision: c,
                    flags: {
                        unsynchronisation: u,
                        extended_header: f,
                        experimental_indicator: l
                    },
                    size: d
                }, m;
                if (u) m = {}; else {
                    for (var d = d - 10, u = e, c = t, f = {}, l = s.major, p = [], h = 0, g; g = (c || a)[h]; h++) p = p.concat(i[g] || [ g ]);
                    for (c = p; o < d; ) {
                        p = null;
                        h = u;
                        g = o;
                        var v = null;
                        switch (l) {
                          case 2:
                            m = h.c(g, 3);
                            var y = h.w(g + 3), T = 6;
                            break;

                          case 3:
                            m = h.c(g, 4);
                            y = h.m(g + 4);
                            T = 10;
                            break;

                          case 4:
                            m = h.c(g, 4), y = r(g + 4, h), T = 10;
                        }
                        if ("" == m) break;
                        o += T + y;
                        if (!(0 > c.indexOf(m))) {
                            if (2 < l) var v = h, C = g + 8, v = {
                                message: {
                                    Y: v.g(C, 6),
                                    R: v.g(C, 5),
                                    V: v.g(C, 4)
                                },
                                format: {
                                    T: v.g(C + 1, 7),
                                    N: v.g(C + 1, 3),
                                    P: v.g(C + 1, 2),
                                    L: v.g(C + 1, 1),
                                    C: v.g(C + 1, 0)
                                }
                            };
                            g += T;
                            v && v.format.C && (r(g, h), g += 4, y -= 4);
                            v && v.format.L || (m in n.b ? p = n.b[m] : "T" == m[0] && (p = n.b["T*"]), p = p ? p(g, y, h, v) : void 0, 
                            p = {
                                id: m,
                                size: y,
                                description: m in n.frames ? n.frames[m] : "Unknown",
                                data: p
                            }, m in f ? (f[m].id && (f[m] = [ f[m] ]), f[m].push(p)) : f[m] = p);
                        }
                    }
                    m = f;
                }
                for (var b in i) if (i.hasOwnProperty(b)) {
                    e: {
                        y = i[b];
                        "string" == typeof y && (y = [ y ]);
                        T = 0;
                        for (o = void 0; o = y[T]; T++) if (o in m) {
                            e = m[o].data;
                            break e;
                        }
                        e = void 0;
                    }
                    e && (s[b] = e);
                }
                for (var V in m) m.hasOwnProperty(V) && (s[V] = m[V]);
                return s;
            };
            t.f = n;
        }, {
            "./id3v2frames": 7
        } ],
        7: [ function(e, t) {
            function r(e) {
                var t;
                switch (e) {
                  case 0:
                    t = "iso-8859-1";
                    break;

                  case 1:
                    t = "utf-16";
                    break;

                  case 2:
                    t = "utf-16be";
                    break;

                  case 3:
                    t = "utf-8";
                }
                return t;
            }
            var n = {
                b: {}
            }, i = "32x32 pixels 'file icon' (PNG only);Other file icon;Cover (front);Cover (back);Leaflet page;Media (e.g. lable side of CD);Lead artist/lead performer/soloist;Artist/performer;Conductor;Band/Orchestra;Composer;Lyricist/text writer;Recording Location;During recording;During performance;Movie/video screen capture;A bright coloured fish;Illustration;Band/artist logotype;Publisher/Studio logotype".split(";");
            n.b.APIC = function(e, t, n, a, o) {
                o = o || "3";
                a = e;
                var s = r(n.a(e));
                switch (o) {
                  case "2":
                    var c = n.c(e + 1, 3);
                    e += 4;
                    break;

                  case "3":
                  case "4":
                    c = n.h(e + 1, t - (e - a), ""), e += 1 + c.j;
                }
                o = n.a(e, 1);
                o = i[o];
                s = n.h(e + 1, t - (e - a), s);
                e += 1 + s.j;
                return {
                    format: c.toString(),
                    type: o,
                    description: s.toString(),
                    data: n.s(e, a + t - e)
                };
            };
            n.b.COMM = function(e, t, n) {
                var i = e, a = r(n.a(e)), o = n.c(e + 1, 3), s = n.h(e + 4, t - 4, a);
                e += 4 + s.j;
                e = n.h(e, i + t - e, a);
                return {
                    language: o,
                    X: s.toString(),
                    text: e.toString()
                };
            };
            n.b.COM = n.b.COMM;
            n.b.PIC = function(e, t, r, i) {
                return n.b.APIC(e, t, r, i, "2");
            };
            n.b.PCNT = function(e, t, r) {
                return r.S(e);
            };
            n.b.CNT = n.b.PCNT;
            n.b["T*"] = function(e, t, n) {
                var i = r(n.a(e));
                return n.h(e + 1, t - 1, i).toString();
            };
            n.b.TCON = function(e, t, r) {
                return n.b["T*"].apply(this, arguments).replace(/^\(\d+\)/, "");
            };
            n.b.TCO = n.b.TCON;
            n.b.USLT = function(e, t, n) {
                var i = e, a = r(n.a(e)), o = n.c(e + 1, 3), s = n.h(e + 4, t - 4, a);
                e += 4 + s.j;
                e = n.h(e, i + t - e, a);
                return {
                    language: o,
                    O: s.toString(),
                    U: e.toString()
                };
            };
            n.b.ULT = n.b.USLT;
            t.f = n;
        }, {} ],
        8: [ function(e, t) {
            function r(e, t, n, a) {
                var o = e.m(t);
                if (0 == o) a(); else {
                    var s = e.c(t + 4, 4);
                    -1 < [ "moov", "udta", "meta", "ilst" ].indexOf(s) ? ("meta" == s && (t += 4), e.i([ t + 8, t + 8 + 8 ], function() {
                        r(e, t + 8, o - 8, a);
                    })) : e.i([ t + (s in i.o ? 0 : o), t + o + 8 ], function() {
                        r(e, t + o, n, a);
                    });
                }
            }
            function n(e, t, r, a, o) {
                o = void 0 === o ? "" : o + "  ";
                for (var s = r; s < r + a; ) {
                    var c = t.m(s);
                    if (0 == c) break;
                    var u = t.c(s + 4, 4);
                    if (-1 < [ "moov", "udta", "meta", "ilst" ].indexOf(u)) {
                        "meta" == u && (s += 4);
                        n(e, t, s + 8, c - 8, o);
                        break;
                    }
                    if (i.o[u]) {
                        var f = t.w(s + 16 + 1), l = i.o[u], f = i.types[f];
                        if ("trkn" == u) e[l[0]] = t.a(s + 16 + 11), e.count = t.a(s + 16 + 13); else {
                            var u = s + 16 + 4 + 4, d = c - 16 - 4 - 4, p;
                            switch (f) {
                              case "text":
                                p = t.h(u, d, "UTF-8");
                                break;

                              case "uint8":
                                p = t.F(u);
                                break;

                              case "jpeg":
                              case "png":
                                p = {
                                    format: "image/" + f,
                                    data: t.s(u, d)
                                };
                            }
                            e[l[0]] = "comment" === l[0] ? {
                                text: p
                            } : p;
                        }
                    }
                    s += c;
                }
            }
            var i = {
                types: {
                    0: "uint8",
                    1: "text",
                    13: "jpeg",
                    14: "png",
                    21: "uint8"
                },
                o: {
                    "©alb": [ "album" ],
                    "©art": [ "artist" ],
                    "©ART": [ "artist" ],
                    aART: [ "artist" ],
                    "©day": [ "year" ],
                    "©nam": [ "title" ],
                    "©gen": [ "genre" ],
                    trkn: [ "track" ],
                    "©wrt": [ "composer" ],
                    "©too": [ "encoder" ],
                    cprt: [ "copyright" ],
                    covr: [ "picture" ],
                    "©grp": [ "grouping" ],
                    keyw: [ "keyword" ],
                    "©lyr": [ "lyrics" ],
                    "©cmt": [ "comment" ],
                    tmpo: [ "tempo" ],
                    cpil: [ "compilation" ],
                    disk: [ "disc" ]
                },
                u: function(e, t) {
                    e.i([ 0, 7 ], function() {
                        r(e, 0, e.l(), t);
                    });
                },
                v: function(e) {
                    var t = {};
                    n(t, e, 0, e.l());
                    return t;
                }
            };
            t.f = i;
        }, {} ],
        9: [ function(e, t) {
            t.f = {
                J: function(e, t, r) {
                    var n = 0, i = 1, a = 0;
                    r = Math.min(r || e.length, e.length);
                    254 == e[0] && 255 == e[1] ? (t = !0, n = 2) : 255 == e[0] && 254 == e[1] && (t = !1, 
                    n = 2);
                    t && (i = 0, a = 1);
                    t = [];
                    for (var o = 0; n < r; o++) {
                        var s = e[n + i], c = (s << 8) + e[n + a], n = n + 2;
                        if (0 == c) break; else 216 > s || 224 <= s ? t[o] = String.fromCharCode(c) : (s = (e[n + i] << 8) + e[n + a], 
                        n += 2, t[o] = String.fromCharCode(c, s));
                    }
                    e = new String(t.join(""));
                    e.j = n;
                    return e;
                },
                K: function(e, t) {
                    var r = 0;
                    t = Math.min(t || e.length, e.length);
                    239 == e[0] && 187 == e[1] && 191 == e[2] && (r = 3);
                    for (var n = [], i = 0; r < t; i++) {
                        var a = e[r++];
                        if (0 == a) break; else if (128 > a) n[i] = String.fromCharCode(a); else if (194 <= a && 224 > a) {
                            var o = e[r++];
                            n[i] = String.fromCharCode(((a & 31) << 6) + (o & 63));
                        } else if (224 <= a && 240 > a) {
                            var o = e[r++], s = e[r++];
                            n[i] = String.fromCharCode(((a & 255) << 12) + ((o & 63) << 6) + (s & 63));
                        } else if (240 <= a && 245 > a) {
                            var o = e[r++], s = e[r++], c = e[r++], a = ((a & 7) << 18) + ((o & 63) << 12) + ((s & 63) << 6) + (c & 63) - 65536;
                            n[i] = String.fromCharCode((a >> 10) + 55296, (a & 1023) + 56320);
                        }
                    }
                    n = new String(n.join(""));
                    n.j = r;
                    return n;
                },
                I: function(e, t) {
                    var r = [];
                    t = t || e.length;
                    for (var n = 0; n < t; ) {
                        var i = e[n++];
                        if (0 == i) break;
                        r[n - 1] = String.fromCharCode(i);
                    }
                    r = new String(r.join(""));
                    r.j = n;
                    return r;
                }
            };
        }, {} ]
    }, {}, [ 4 ])(4);
});

var Base64 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function(e) {
        var t = "";
        var r, n, i, a, o, s, c;
        var u = 0;
        e = Base64._utf8_encode(e);
        while (u < e.length) {
            r = e.charCodeAt(u++);
            n = e.charCodeAt(u++);
            i = e.charCodeAt(u++);
            a = r >> 2;
            o = (r & 3) << 4 | n >> 4;
            s = (n & 15) << 2 | i >> 6;
            c = i & 63;
            if (isNaN(n)) {
                s = c = 64;
            } else if (isNaN(i)) {
                c = 64;
            }
            t = t + this._keyStr.charAt(a) + this._keyStr.charAt(o) + this._keyStr.charAt(s) + this._keyStr.charAt(c);
        }
        return t;
    },
    decode: function(e) {
        var t = "";
        var r, n, i;
        var a, o, s, c;
        var u = 0;
        e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (u < e.length) {
            a = this._keyStr.indexOf(e.charAt(u++));
            o = this._keyStr.indexOf(e.charAt(u++));
            s = this._keyStr.indexOf(e.charAt(u++));
            c = this._keyStr.indexOf(e.charAt(u++));
            r = a << 2 | o >> 4;
            n = (o & 15) << 4 | s >> 2;
            i = (s & 3) << 6 | c;
            t = t + String.fromCharCode(r);
            if (s != 64) {
                t = t + String.fromCharCode(n);
            }
            if (c != 64) {
                t = t + String.fromCharCode(i);
            }
        }
        t = Base64._utf8_decode(t);
        return t;
    },
    _utf8_encode: function(e) {
        e = e.replace(/\r\n/g, "\n");
        var t = "";
        for (var r = 0; r < e.length; r++) {
            var n = e.charCodeAt(r);
            if (n < 128) {
                t += String.fromCharCode(n);
            } else if (n > 127 && n < 2048) {
                t += String.fromCharCode(n >> 6 | 192);
                t += String.fromCharCode(n & 63 | 128);
            } else {
                t += String.fromCharCode(n >> 12 | 224);
                t += String.fromCharCode(n >> 6 & 63 | 128);
                t += String.fromCharCode(n & 63 | 128);
            }
        }
        return t;
    },
    _utf8_decode: function(e) {
        var t = "";
        var r = 0;
        var n = c1 = c2 = 0;
        while (r < e.length) {
            n = e.charCodeAt(r);
            if (n < 128) {
                t += String.fromCharCode(n);
                r++;
            } else if (n > 191 && n < 224) {
                c2 = e.charCodeAt(r + 1);
                t += String.fromCharCode((n & 31) << 6 | c2 & 63);
                r += 2;
            } else {
                c2 = e.charCodeAt(r + 1);
                c3 = e.charCodeAt(r + 2);
                t += String.fromCharCode((n & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                r += 3;
            }
        }
        return t;
    }
};

!function() {
    const e = "data:audio/mpeg;base64,/+MQwAAAAANIAYAAAExBTUUzLjkzVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/jEMAnAAADSAHAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/4xDATgAAA0gAAAAAVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV";
    var t = e, r = e, n = false, i = false, a = "", o = null, s, c, u = 1;
    const f = function() {};
    Object.assign(f.prototype, {
        addEventListener: function(e, t) {
            if (this._listeners === undefined) this._listeners = {};
            var r = this._listeners;
            if (r[e] === undefined) {
                r[e] = [];
            }
            if (r[e].indexOf(t) === -1) {
                r[e].push(t);
            }
        },
        hasEventListener: function(e, t) {
            if (this._listeners === undefined) return false;
            var r = this._listeners;
            if (r[e] !== undefined && r[e].indexOf(t) !== -1) {
                return true;
            }
            return false;
        },
        removeEventListener: function(e, t) {
            if (this._listeners === undefined) return;
            var r = this._listeners;
            var n = r[e];
            if (n !== undefined) {
                var i = n.indexOf(t);
                if (i !== -1) {
                    n.splice(i, 1);
                }
            }
        },
        dispatchEvent: function(e) {
            if (this._listeners === undefined) return;
            var t = this._listeners;
            var r = t[e.type];
            if (r !== undefined) {
                e.target = this;
                var n = [], i = 0;
                var a = r.length;
                for (i = 0; i < a; i++) {
                    n[i] = r[i];
                }
                for (i = 0; i < a; i++) {
                    n[i].call(this, e);
                }
            }
        }
    });
    const l = [ "emptied", "loadedmetadata", "loadeddata", "canplay", "canplaythrough", "playing", "ended", "waiting", "durationchange", "timeupdate", "play", "playing", "pause", "progress", "stalled", "suspend", "ratechange", "volumechange" ];
    const d = function(e, t) {
        let r = Math.floor(t % 60), n = Math.floor(t / 60 % 60), i = Math.floor(t / (60 * 60) % 24);
        let a = Math.floor(e % 60), o = Math.floor(e / 60 % 60), s = Math.floor(e / (60 * 60) % 24);
        let c = (i < 10 ? "0" : "") + i, u = (n < 10 ? "0" : "") + n, f = (r < 10 ? "0" : "") + r;
        let l = (s < 10 ? "0" : "") + s, d = (o < 10 ? "0" : "") + o, p = (a < 10 ? "0" : "") + a;
        if (i) {
            return {
                curStr: [ l, d, p ].join(":"),
                durStr: [ c, u, f ].join(":")
            };
        } else {
            return {
                curStr: [ d, p ].join(":"),
                durStr: [ u, f ].join(":")
            };
        }
    };
    const p = function(e) {
        let t = s.currentTime || 0, r = s.duration || 0, a = 0;
        if (r) {
            a = 100 * t / r;
        }
        switch (e.type) {
          case "play":
            n = true;
            i = true;
            c.dispatchEvent({
                type: "play",
                object: {
                    playing: n,
                    progress: i,
                    currentTime: t,
                    duration: r,
                    percent: a,
                    volume: u,
                    time: d(t, r),
                    evt: e.type
                }
            });
            break;

          case "waiting":
            n = true;
            i = true;
            c.dispatchEvent({
                type: "play",
                object: {
                    playing: n,
                    progress: i,
                    currentTime: t,
                    duration: r,
                    percent: a,
                    volume: u,
                    time: d(t, r),
                    evt: e.type
                }
            });
            break;

          case "canplay":
            break;

          case "playing":
            n = true;
            i = false;
            c.dispatchEvent({
                type: "playing",
                object: {
                    playing: n,
                    progress: i,
                    currentTime: t,
                    duration: r,
                    percent: a,
                    volume: u,
                    time: d(t, r),
                    evt: e.type
                }
            });
            break;

          case "durationchange":
          case "timeupdate":
            c.dispatchEvent({
                type: "timeupdate",
                object: {
                    playing: n,
                    progress: i,
                    currentTime: t,
                    duration: r,
                    percent: a,
                    volume: u,
                    time: d(t, r),
                    evt: e.type
                }
            });
            break;

          case "pause":
            n = false;
            i = false;
            c.dispatchEvent({
                type: "pause",
                object: {
                    playing: n,
                    progress: i,
                    currentTime: t,
                    duration: r,
                    percent: a,
                    volume: u,
                    time: d(t, r),
                    evt: e.type
                }
            });
            break;

          case "ended":
            n = false;
            i = false;
            c.dispatchEvent({
                type: "stop",
                object: {
                    playing: n,
                    progress: i,
                    currentTime: t,
                    duration: r,
                    percent: a,
                    volume: u,
                    time: d(t, r),
                    evt: e.type
                }
            });
            break;

          case "abort":
            n = false;
            i = false;
            c.dispatchEvent({
                type: "abort",
                object: {
                    playing: n,
                    progress: i,
                    currentTime: t,
                    duration: r,
                    percent: a,
                    volume: u,
                    time: d(t, r),
                    evt: e.type
                }
            });
            break;

          case "emptied":
            n = false;
            i = false;
            c.dispatchEvent({
                type: "emptied",
                object: {
                    playing: n,
                    progress: i,
                    currentTime: t,
                    duration: r,
                    percent: a,
                    volume: u,
                    time: d(t, r),
                    evt: e.type
                }
            });
            break;

          case "error":
            n = false;
            i = false;
            c.dispatchEvent({
                type: "error",
                object: {
                    playing: n,
                    progress: i,
                    currentTime: t,
                    duration: r,
                    percent: a,
                    volume: u,
                    time: d(t, r),
                    evt: e.type
                }
            });
            break;

          case "volumechange":
            c.dispatchEvent({
                type: "volume",
                object: {
                    playing: n,
                    progress: i,
                    currentTime: t,
                    duration: r,
                    percent: a,
                    volume: u,
                    time: d(t, r),
                    evt: e.type
                }
            });
            break;

          default:
            break;
        }
    };
    const m = function() {
        s = new Audio();
        s.crossOrigin = "anonymous";
        s.preload = "none";
        l.forEach(function(e, t) {
            s.addEventListener(e, p);
        });
        s.src = t;
        c = this;
    };
    m.prototype = {
        isPlaying: function() {
            return n;
        },
        isProgress: function() {
            return i;
        },
        play: function() {
            if (t != r) {
                t = r;
                s.src = r;
            }
            c.dispatchEvent({
                type: "metadata",
                object: {
                    title: null,
                    picture: null,
                    evt: "play_play"
                }
            });
            setTimeout(function() {
                s.play().then(function() {
                    a = "";
                    o = null;
                    try {
                        ID3.loadTags(r, function() {
                            let e = ID3.getAllTags(r), t = null;
                            a = e.title || null;
                            o = e.picture || t;
                            if (e.picture) {
                                let r = "";
                                for (let t = 0; t < e.picture.data.length; t++) {
                                    r += String.fromCharCode(e.picture.data[t]);
                                }
                                t = "data:" + e.picture.format + ";base64," + window.btoa(r);
                            }
                            c.dispatchEvent({
                                type: "metadata",
                                object: {
                                    title: a,
                                    picture: t,
                                    evt: "metadata"
                                }
                            });
                        }, {
                            tags: [ "title", "picture" ],
                            onError: function(e) {
                                if (e.error === "xhr") {
                                    c.dispatchEvent({
                                        type: "metadata",
                                        object: {
                                            title: a,
                                            picture: dataUrl,
                                            evt: "onErrorMetadata"
                                        }
                                    });
                                }
                            }
                        });
                    } catch (e) {
                        c.dispatchEvent({
                            type: "error",
                            object: {
                                playing: false,
                                progress: false,
                                currentTime: 0,
                                duration: 0,
                                percent: 0,
                                volume: u,
                                time: d(0, 0),
                                evt: "error"
                            }
                        });
                    }
                }).catch(function() {
                    c.dispatchEvent({
                        type: "error",
                        object: {
                            playing: false,
                            progress: false,
                            currentTime: 0,
                            duration: 0,
                            percent: 0,
                            volume: u,
                            time: d(0, 0),
                            evt: "error"
                        }
                    });
                });
            }, 10);
        },
        pause: function() {
            s.pause();
            n = false;
        },
        stop: function() {
            s.pause();
            s.currentTime = 0;
            n = false;
            i = false;
            let e = s.currentTime || 0, t = s.duration || 0, r = 0;
            if (t) {
                r = 100 * e / t;
            }
            c.dispatchEvent({
                type: "volume",
                object: {
                    playing: n,
                    progress: i,
                    currentTime: e,
                    duration: t,
                    percent: r,
                    volume: u,
                    time: d(e, t),
                    evt: "stop_play"
                }
            });
        },
        set stream(e) {
            r = e;
            if (this.isPlaying()) {
                if (t != r) {
                    s.pause();
                    s.currentTime = 0;
                    s.src = r;
                }
                this.play();
            }
        },
        get stream() {
            return r;
        },
        set volume(e) {
            u = Math.min(1, Math.max(0, e));
            if (u == s.volume) {
                return;
            }
            s.volume = u;
        },
        get volume() {
            return u;
        },
        set audioElement(e) {
            throw new Error("not set audio");
        },
        get audioElement() {
            return s;
        }
    };
    Object.assign(m.prototype, f.prototype);
    window.player = new m();
}();