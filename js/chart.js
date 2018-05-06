/*!
* Chart.js
* http://chartjs.org/
* Version: 2.7.1
*
* Copyright 2017 Nick Downie
* Released under the MIT license
* https://github.com/chartjs/Chart.js/blob/master/LICENSE.md
*/ !(function(
  t
) {
  if ("object" == typeof exports && "undefined" != typeof module)
    module.exports = t();
  else if ("function" == typeof define && define.amd) define([], t);
  else {
    ("undefined" != typeof window
      ? window
      : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
          ? self
          : this
    ).Chart = t();
  }
})(function() {
  return (function t(e, n, i) {
    function a(o, s) {
      if (!n[o]) {
        if (!e[o]) {
          var l = "function" == typeof require && require;
          if (!s && l) return l(o, !0);
          if (r) return r(o, !0);
          var u = new Error("Cannot find module '" + o + "'");
          throw ((u.code = "MODULE_NOT_FOUND"), u);
        }
        var d = (n[o] = { exports: {} });
        e[o][0].call(
          d.exports,
          function(t) {
            var n = e[o][1][t];
            return a(n || t);
          },
          d,
          d.exports,
          t,
          e,
          n,
          i
        );
      }
      return n[o].exports;
    }
    for (
      var r = "function" == typeof require && require, o = 0;
      o < i.length;
      o++
    )
      a(i[o]);
    return a;
  })(
    {
      1: [
        function(t, e, n) {
          function i(t) {
            if (t) {
              var e = [0, 0, 0],
                n = 1,
                i = t.match(/^#([a-fA-F0-9]{3})$/i);
              if (i) {
                i = i[1];
                for (a = 0; a < e.length; a++) e[a] = parseInt(i[a] + i[a], 16);
              } else if ((i = t.match(/^#([a-fA-F0-9]{6})$/i))) {
                i = i[1];
                for (a = 0; a < e.length; a++)
                  e[a] = parseInt(i.slice(2 * a, 2 * a + 2), 16);
              } else if (
                (i = t.match(
                  /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i
                ))
              ) {
                for (a = 0; a < e.length; a++) e[a] = parseInt(i[a + 1]);
                n = parseFloat(i[4]);
              } else if (
                (i = t.match(
                  /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i
                ))
              ) {
                for (a = 0; a < e.length; a++)
                  e[a] = Math.round(2.55 * parseFloat(i[a + 1]));
                n = parseFloat(i[4]);
              } else if ((i = t.match(/(\w+)/))) {
                if ("transparent" == i[1]) return [0, 0, 0, 0];
                if (!(e = c[i[1]])) return;
              }
              for (var a = 0; a < e.length; a++) e[a] = u(e[a], 0, 255);
              return (n = n || 0 == n ? u(n, 0, 1) : 1), (e[3] = n), e;
            }
          }
          function a(t) {
            if (t) {
              var e = t.match(
                /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/
              );
              if (e) {
                var n = parseFloat(e[4]);
                return [
                  u(parseInt(e[1]), 0, 360),
                  u(parseFloat(e[2]), 0, 100),
                  u(parseFloat(e[3]), 0, 100),
                  u(isNaN(n) ? 1 : n, 0, 1)
                ];
              }
            }
          }
          function r(t) {
            if (t) {
              var e = t.match(
                /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/
              );
              if (e) {
                var n = parseFloat(e[4]);
                return [
                  u(parseInt(e[1]), 0, 360),
                  u(parseFloat(e[2]), 0, 100),
                  u(parseFloat(e[3]), 0, 100),
                  u(isNaN(n) ? 1 : n, 0, 1)
                ];
              }
            }
          }
          function o(t, e) {
            return (
              void 0 === e && (e = void 0 !== t[3] ? t[3] : 1),
              "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")"
            );
          }
          function s(t, e) {
            return (
              "rgba(" +
              Math.round(t[0] / 255 * 100) +
              "%, " +
              Math.round(t[1] / 255 * 100) +
              "%, " +
              Math.round(t[2] / 255 * 100) +
              "%, " +
              (e || t[3] || 1) +
              ")"
            );
          }
          function l(t, e) {
            return (
              void 0 === e && (e = void 0 !== t[3] ? t[3] : 1),
              "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")"
            );
          }
          function u(t, e, n) {
            return Math.min(Math.max(e, t), n);
          }
          function d(t) {
            var e = t.toString(16).toUpperCase();
            return e.length < 2 ? "0" + e : e;
          }
          var c = t(5);
          e.exports = {
            getRgba: i,
            getHsla: a,
            getRgb: function(t) {
              var e = i(t);
              return e && e.slice(0, 3);
            },
            getHsl: function(t) {
              var e = a(t);
              return e && e.slice(0, 3);
            },
            getHwb: r,
            getAlpha: function(t) {
              var e = i(t);
              return e ? e[3] : (e = a(t)) ? e[3] : (e = r(t)) ? e[3] : void 0;
            },
            hexString: function(t) {
              return "#" + d(t[0]) + d(t[1]) + d(t[2]);
            },
            rgbString: function(t, e) {
              return e < 1 || (t[3] && t[3] < 1)
                ? o(t, e)
                : "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")";
            },
            rgbaString: o,
            percentString: function(t, e) {
              return e < 1 || (t[3] && t[3] < 1)
                ? s(t, e)
                : "rgb(" +
                    Math.round(t[0] / 255 * 100) +
                    "%, " +
                    Math.round(t[1] / 255 * 100) +
                    "%, " +
                    Math.round(t[2] / 255 * 100) +
                    "%)";
            },
            percentaString: s,
            hslString: function(t, e) {
              return e < 1 || (t[3] && t[3] < 1)
                ? l(t, e)
                : "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)";
            },
            hslaString: l,
            hwbString: function(t, e) {
              return (
                void 0 === e && (e = void 0 !== t[3] ? t[3] : 1),
                "hwb(" +
                  t[0] +
                  ", " +
                  t[1] +
                  "%, " +
                  t[2] +
                  "%" +
                  (void 0 !== e && 1 !== e ? ", " + e : "") +
                  ")"
              );
            },
            keyword: function(t) {
              return h[t.slice(0, 3)];
            }
          };
          var h = {};
          for (var f in c) h[c[f]] = f;
        },
        { 5: 5 }
      ],
      2: [
        function(t, e, n) {
          var i = t(4),
            a = t(1),
            r = function(t) {
              if (t instanceof r) return t;
              if (!(this instanceof r)) return new r(t);
              (this.valid = !1),
                (this.values = {
                  rgb: [0, 0, 0],
                  hsl: [0, 0, 0],
                  hsv: [0, 0, 0],
                  hwb: [0, 0, 0],
                  cmyk: [0, 0, 0, 0],
                  alpha: 1
                });
              var e;
              "string" == typeof t
                ? (e = a.getRgba(t))
                  ? this.setValues("rgb", e)
                  : (e = a.getHsla(t))
                    ? this.setValues("hsl", e)
                    : (e = a.getHwb(t)) && this.setValues("hwb", e)
                : "object" == typeof t &&
                  (void 0 !== (e = t).r || void 0 !== e.red
                    ? this.setValues("rgb", e)
                    : void 0 !== e.l || void 0 !== e.lightness
                      ? this.setValues("hsl", e)
                      : void 0 !== e.v || void 0 !== e.value
                        ? this.setValues("hsv", e)
                        : void 0 !== e.w || void 0 !== e.whiteness
                          ? this.setValues("hwb", e)
                          : (void 0 === e.c && void 0 === e.cyan) ||
                            this.setValues("cmyk", e));
            };
          (r.prototype = {
            isValid: function() {
              return this.valid;
            },
            rgb: function() {
              return this.setSpace("rgb", arguments);
            },
            hsl: function() {
              return this.setSpace("hsl", arguments);
            },
            hsv: function() {
              return this.setSpace("hsv", arguments);
            },
            hwb: function() {
              return this.setSpace("hwb", arguments);
            },
            cmyk: function() {
              return this.setSpace("cmyk", arguments);
            },
            rgbArray: function() {
              return this.values.rgb;
            },
            hslArray: function() {
              return this.values.hsl;
            },
            hsvArray: function() {
              return this.values.hsv;
            },
            hwbArray: function() {
              var t = this.values;
              return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb;
            },
            cmykArray: function() {
              return this.values.cmyk;
            },
            rgbaArray: function() {
              var t = this.values;
              return t.rgb.concat([t.alpha]);
            },
            hslaArray: function() {
              var t = this.values;
              return t.hsl.concat([t.alpha]);
            },
            alpha: function(t) {
              return void 0 === t
                ? this.values.alpha
                : (this.setValues("alpha", t), this);
            },
            red: function(t) {
              return this.setChannel("rgb", 0, t);
            },
            green: function(t) {
              return this.setChannel("rgb", 1, t);
            },
            blue: function(t) {
              return this.setChannel("rgb", 2, t);
            },
            hue: function(t) {
              return (
                t && (t = (t %= 360) < 0 ? 360 + t : t),
                this.setChannel("hsl", 0, t)
              );
            },
            saturation: function(t) {
              return this.setChannel("hsl", 1, t);
            },
            lightness: function(t) {
              return this.setChannel("hsl", 2, t);
            },
            saturationv: function(t) {
              return this.setChannel("hsv", 1, t);
            },
            whiteness: function(t) {
              return this.setChannel("hwb", 1, t);
            },
            blackness: function(t) {
              return this.setChannel("hwb", 2, t);
            },
            value: function(t) {
              return this.setChannel("hsv", 2, t);
            },
            cyan: function(t) {
              return this.setChannel("cmyk", 0, t);
            },
            magenta: function(t) {
              return this.setChannel("cmyk", 1, t);
            },
            yellow: function(t) {
              return this.setChannel("cmyk", 2, t);
            },
            black: function(t) {
              return this.setChannel("cmyk", 3, t);
            },
            hexString: function() {
              return a.hexString(this.values.rgb);
            },
            rgbString: function() {
              return a.rgbString(this.values.rgb, this.values.alpha);
            },
            rgbaString: function() {
              return a.rgbaString(this.values.rgb, this.values.alpha);
            },
            percentString: function() {
              return a.percentString(this.values.rgb, this.values.alpha);
            },
            hslString: function() {
              return a.hslString(this.values.hsl, this.values.alpha);
            },
            hslaString: function() {
              return a.hslaString(this.values.hsl, this.values.alpha);
            },
            hwbString: function() {
              return a.hwbString(this.values.hwb, this.values.alpha);
            },
            keyword: function() {
              return a.keyword(this.values.rgb, this.values.alpha);
            },
            rgbNumber: function() {
              var t = this.values.rgb;
              return (t[0] << 16) | (t[1] << 8) | t[2];
            },
            luminosity: function() {
              for (var t = this.values.rgb, e = [], n = 0; n < t.length; n++) {
                var i = t[n] / 255;
                e[n] =
                  i <= 0.03928 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4);
              }
              return 0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2];
            },
            contrast: function(t) {
              var e = this.luminosity(),
                n = t.luminosity();
              return e > n ? (e + 0.05) / (n + 0.05) : (n + 0.05) / (e + 0.05);
            },
            level: function(t) {
              var e = this.contrast(t);
              return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : "";
            },
            dark: function() {
              var t = this.values.rgb;
              return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128;
            },
            light: function() {
              return !this.dark();
            },
            negate: function() {
              for (var t = [], e = 0; e < 3; e++)
                t[e] = 255 - this.values.rgb[e];
              return this.setValues("rgb", t), this;
            },
            lighten: function(t) {
              var e = this.values.hsl;
              return (e[2] += e[2] * t), this.setValues("hsl", e), this;
            },
            darken: function(t) {
              var e = this.values.hsl;
              return (e[2] -= e[2] * t), this.setValues("hsl", e), this;
            },
            saturate: function(t) {
              var e = this.values.hsl;
              return (e[1] += e[1] * t), this.setValues("hsl", e), this;
            },
            desaturate: function(t) {
              var e = this.values.hsl;
              return (e[1] -= e[1] * t), this.setValues("hsl", e), this;
            },
            whiten: function(t) {
              var e = this.values.hwb;
              return (e[1] += e[1] * t), this.setValues("hwb", e), this;
            },
            blacken: function(t) {
              var e = this.values.hwb;
              return (e[2] += e[2] * t), this.setValues("hwb", e), this;
            },
            greyscale: function() {
              var t = this.values.rgb,
                e = 0.3 * t[0] + 0.59 * t[1] + 0.11 * t[2];
              return this.setValues("rgb", [e, e, e]), this;
            },
            clearer: function(t) {
              var e = this.values.alpha;
              return this.setValues("alpha", e - e * t), this;
            },
            opaquer: function(t) {
              var e = this.values.alpha;
              return this.setValues("alpha", e + e * t), this;
            },
            rotate: function(t) {
              var e = this.values.hsl,
                n = (e[0] + t) % 360;
              return (
                (e[0] = n < 0 ? 360 + n : n), this.setValues("hsl", e), this
              );
            },
            mix: function(t, e) {
              var n = this,
                i = t,
                a = void 0 === e ? 0.5 : e,
                r = 2 * a - 1,
                o = n.alpha() - i.alpha(),
                s = ((r * o == -1 ? r : (r + o) / (1 + r * o)) + 1) / 2,
                l = 1 - s;
              return this.rgb(
                s * n.red() + l * i.red(),
                s * n.green() + l * i.green(),
                s * n.blue() + l * i.blue()
              ).alpha(n.alpha() * a + i.alpha() * (1 - a));
            },
            toJSON: function() {
              return this.rgb();
            },
            clone: function() {
              var t,
                e,
                n = new r(),
                i = this.values,
                a = n.values;
              for (var o in i)
                i.hasOwnProperty(o) &&
                  ((t = i[o]),
                  "[object Array]" === (e = {}.toString.call(t))
                    ? (a[o] = t.slice(0))
                    : "[object Number]" === e
                      ? (a[o] = t)
                      : console.error("unexpected color value:", t));
              return n;
            }
          }),
            (r.prototype.spaces = {
              rgb: ["red", "green", "blue"],
              hsl: ["hue", "saturation", "lightness"],
              hsv: ["hue", "saturation", "value"],
              hwb: ["hue", "whiteness", "blackness"],
              cmyk: ["cyan", "magenta", "yellow", "black"]
            }),
            (r.prototype.maxes = {
              rgb: [255, 255, 255],
              hsl: [360, 100, 100],
              hsv: [360, 100, 100],
              hwb: [360, 100, 100],
              cmyk: [100, 100, 100, 100]
            }),
            (r.prototype.getValues = function(t) {
              for (var e = this.values, n = {}, i = 0; i < t.length; i++)
                n[t.charAt(i)] = e[t][i];
              return 1 !== e.alpha && (n.a = e.alpha), n;
            }),
            (r.prototype.setValues = function(t, e) {
              var n,
                a = this.values,
                r = this.spaces,
                o = this.maxes,
                s = 1;
              if (((this.valid = !0), "alpha" === t)) s = e;
              else if (e.length)
                (a[t] = e.slice(0, t.length)), (s = e[t.length]);
              else if (void 0 !== e[t.charAt(0)]) {
                for (n = 0; n < t.length; n++) a[t][n] = e[t.charAt(n)];
                s = e.a;
              } else if (void 0 !== e[r[t][0]]) {
                var l = r[t];
                for (n = 0; n < t.length; n++) a[t][n] = e[l[n]];
                s = e.alpha;
              }
              if (
                ((a.alpha = Math.max(
                  0,
                  Math.min(1, void 0 === s ? a.alpha : s)
                )),
                "alpha" === t)
              )
                return !1;
              var u;
              for (n = 0; n < t.length; n++)
                (u = Math.max(0, Math.min(o[t][n], a[t][n]))),
                  (a[t][n] = Math.round(u));
              for (var d in r) d !== t && (a[d] = i[t][d](a[t]));
              return !0;
            }),
            (r.prototype.setSpace = function(t, e) {
              var n = e[0];
              return void 0 === n
                ? this.getValues(t)
                : ("number" == typeof n && (n = Array.prototype.slice.call(e)),
                  this.setValues(t, n),
                  this);
            }),
            (r.prototype.setChannel = function(t, e, n) {
              var i = this.values[t];
              return void 0 === n
                ? i[e]
                : n === i[e]
                  ? this
                  : ((i[e] = n), this.setValues(t, i), this);
            }),
            "undefined" != typeof window && (window.Color = r),
            (e.exports = r);
        },
        { 1: 1, 4: 4 }
      ],
      3: [
        function(t, e, n) {
          function i(t) {
            var e,
              n,
              i,
              a = t[0] / 255,
              r = t[1] / 255,
              o = t[2] / 255,
              s = Math.min(a, r, o),
              l = Math.max(a, r, o),
              u = l - s;
            return (
              l == s
                ? (e = 0)
                : a == l
                  ? (e = (r - o) / u)
                  : r == l
                    ? (e = 2 + (o - a) / u)
                    : o == l && (e = 4 + (a - r) / u),
              (e = Math.min(60 * e, 360)) < 0 && (e += 360),
              (i = (s + l) / 2),
              (n = l == s ? 0 : i <= 0.5 ? u / (l + s) : u / (2 - l - s)),
              [e, 100 * n, 100 * i]
            );
          }
          function a(t) {
            var e,
              n,
              i,
              a = t[0],
              r = t[1],
              o = t[2],
              s = Math.min(a, r, o),
              l = Math.max(a, r, o),
              u = l - s;
            return (
              (n = 0 == l ? 0 : u / l * 1e3 / 10),
              l == s
                ? (e = 0)
                : a == l
                  ? (e = (r - o) / u)
                  : r == l
                    ? (e = 2 + (o - a) / u)
                    : o == l && (e = 4 + (a - r) / u),
              (e = Math.min(60 * e, 360)) < 0 && (e += 360),
              (i = l / 255 * 1e3 / 10),
              [e, n, i]
            );
          }
          function o(t) {
            var e = t[0],
              n = t[1],
              a = t[2];
            return [
              i(t)[0],
              100 * (1 / 255 * Math.min(e, Math.min(n, a))),
              100 * (a = 1 - 1 / 255 * Math.max(e, Math.max(n, a)))
            ];
          }
          function s(t) {
            var e,
              n,
              i,
              a,
              r = t[0] / 255,
              o = t[1] / 255,
              s = t[2] / 255;
            return (
              (a = Math.min(1 - r, 1 - o, 1 - s)),
              (e = (1 - r - a) / (1 - a) || 0),
              (n = (1 - o - a) / (1 - a) || 0),
              (i = (1 - s - a) / (1 - a) || 0),
              [100 * e, 100 * n, 100 * i, 100 * a]
            );
          }
          function l(t) {
            return S[JSON.stringify(t)];
          }
          function u(t) {
            var e = t[0] / 255,
              n = t[1] / 255,
              i = t[2] / 255;
            return [
              100 *
                (0.4124 *
                  (e =
                    e > 0.04045
                      ? Math.pow((e + 0.055) / 1.055, 2.4)
                      : e / 12.92) +
                  0.3576 *
                    (n =
                      n > 0.04045
                        ? Math.pow((n + 0.055) / 1.055, 2.4)
                        : n / 12.92) +
                  0.1805 *
                    (i =
                      i > 0.04045
                        ? Math.pow((i + 0.055) / 1.055, 2.4)
                        : i / 12.92)),
              100 * (0.2126 * e + 0.7152 * n + 0.0722 * i),
              100 * (0.0193 * e + 0.1192 * n + 0.9505 * i)
            ];
          }
          function d(t) {
            var e,
              n,
              i,
              a = u(t),
              r = a[0],
              o = a[1],
              s = a[2];
            return (
              (r /= 95.047),
              (o /= 100),
              (s /= 108.883),
              (r = r > 0.008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116),
              (o = o > 0.008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116),
              (s = s > 0.008856 ? Math.pow(s, 1 / 3) : 7.787 * s + 16 / 116),
              (e = 116 * o - 16),
              (n = 500 * (r - o)),
              (i = 200 * (o - s)),
              [e, n, i]
            );
          }
          function c(t) {
            var e,
              n,
              i,
              a,
              r,
              o = t[0] / 360,
              s = t[1] / 100,
              l = t[2] / 100;
            if (0 == s) return (r = 255 * l), [r, r, r];
            (e = 2 * l - (n = l < 0.5 ? l * (1 + s) : l + s - l * s)),
              (a = [0, 0, 0]);
            for (var u = 0; u < 3; u++)
              (i = o + 1 / 3 * -(u - 1)) < 0 && i++,
                i > 1 && i--,
                (r =
                  6 * i < 1
                    ? e + 6 * (n - e) * i
                    : 2 * i < 1
                      ? n
                      : 3 * i < 2
                        ? e + (n - e) * (2 / 3 - i) * 6
                        : e),
                (a[u] = 255 * r);
            return a;
          }
          function h(t) {
            var e = t[0] / 60,
              n = t[1] / 100,
              i = t[2] / 100,
              a = Math.floor(e) % 6,
              r = e - Math.floor(e),
              o = 255 * i * (1 - n),
              s = 255 * i * (1 - n * r),
              l = 255 * i * (1 - n * (1 - r)),
              i = 255 * i;
            switch (a) {
              case 0:
                return [i, l, o];
              case 1:
                return [s, i, o];
              case 2:
                return [o, i, l];
              case 3:
                return [o, s, i];
              case 4:
                return [l, o, i];
              case 5:
                return [i, o, s];
            }
          }
          function f(t) {
            var e,
              n,
              i,
              a,
              o = t[0] / 360,
              s = t[1] / 100,
              l = t[2] / 100,
              u = s + l;
            switch (
              (u > 1 && ((s /= u), (l /= u)),
              (e = Math.floor(6 * o)),
              (n = 1 - l),
              (i = 6 * o - e),
              0 != (1 & e) && (i = 1 - i),
              (a = s + i * (n - s)),
              e)
            ) {
              default:
              case 6:
              case 0:
                (r = n), (g = a), (b = s);
                break;
              case 1:
                (r = a), (g = n), (b = s);
                break;
              case 2:
                (r = s), (g = n), (b = a);
                break;
              case 3:
                (r = s), (g = a), (b = n);
                break;
              case 4:
                (r = a), (g = s), (b = n);
                break;
              case 5:
                (r = n), (g = s), (b = a);
            }
            return [255 * r, 255 * g, 255 * b];
          }
          function m(t) {
            var e,
              n,
              i,
              a = t[0] / 100,
              r = t[1] / 100,
              o = t[2] / 100,
              s = t[3] / 100;
            return (
              (e = 1 - Math.min(1, a * (1 - s) + s)),
              (n = 1 - Math.min(1, r * (1 - s) + s)),
              (i = 1 - Math.min(1, o * (1 - s) + s)),
              [255 * e, 255 * n, 255 * i]
            );
          }
          function p(t) {
            var e,
              n,
              i,
              a = t[0] / 100,
              r = t[1] / 100,
              o = t[2] / 100;
            return (
              (e = 3.2406 * a + -1.5372 * r + -0.4986 * o),
              (n = -0.9689 * a + 1.8758 * r + 0.0415 * o),
              (i = 0.0557 * a + -0.204 * r + 1.057 * o),
              (e =
                e > 0.0031308
                  ? 1.055 * Math.pow(e, 1 / 2.4) - 0.055
                  : (e *= 12.92)),
              (n =
                n > 0.0031308
                  ? 1.055 * Math.pow(n, 1 / 2.4) - 0.055
                  : (n *= 12.92)),
              (i =
                i > 0.0031308
                  ? 1.055 * Math.pow(i, 1 / 2.4) - 0.055
                  : (i *= 12.92)),
              (e = Math.min(Math.max(0, e), 1)),
              (n = Math.min(Math.max(0, n), 1)),
              (i = Math.min(Math.max(0, i), 1)),
              [255 * e, 255 * n, 255 * i]
            );
          }
          function v(t) {
            var e,
              n,
              i,
              a = t[0],
              r = t[1],
              o = t[2];
            return (
              (a /= 95.047),
              (r /= 100),
              (o /= 108.883),
              (a = a > 0.008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116),
              (r = r > 0.008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116),
              (o = o > 0.008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116),
              (e = 116 * r - 16),
              (n = 500 * (a - r)),
              (i = 200 * (r - o)),
              [e, n, i]
            );
          }
          function y(t) {
            var e,
              n,
              i,
              a,
              r = t[0],
              o = t[1],
              s = t[2];
            return (
              r <= 8
                ? (a = (n = 100 * r / 903.3) / 100 * 7.787 + 16 / 116)
                : ((n = 100 * Math.pow((r + 16) / 116, 3)),
                  (a = Math.pow(n / 100, 1 / 3))),
              (e =
                e / 95.047 <= 0.008856
                  ? (e = 95.047 * (o / 500 + a - 16 / 116) / 7.787)
                  : 95.047 * Math.pow(o / 500 + a, 3)),
              (i =
                i / 108.883 <= 0.008859
                  ? (i = 108.883 * (a - s / 200 - 16 / 116) / 7.787)
                  : 108.883 * Math.pow(a - s / 200, 3)),
              [e, n, i]
            );
          }
          function x(t) {
            var e,
              n,
              i,
              a = t[0],
              r = t[1],
              o = t[2];
            return (
              (e = Math.atan2(o, r)),
              (n = 360 * e / 2 / Math.PI) < 0 && (n += 360),
              (i = Math.sqrt(r * r + o * o)),
              [a, i, n]
            );
          }
          function _(t) {
            return p(y(t));
          }
          function k(t) {
            var e,
              n,
              i,
              a = t[0],
              r = t[1];
            return (
              (i = t[2] / 360 * 2 * Math.PI),
              (e = r * Math.cos(i)),
              (n = r * Math.sin(i)),
              [a, e, n]
            );
          }
          function w(t) {
            return M[t];
          }
          e.exports = {
            rgb2hsl: i,
            rgb2hsv: a,
            rgb2hwb: o,
            rgb2cmyk: s,
            rgb2keyword: l,
            rgb2xyz: u,
            rgb2lab: d,
            rgb2lch: function(t) {
              return x(d(t));
            },
            hsl2rgb: c,
            hsl2hsv: function(t) {
              var e,
                n,
                i = t[0],
                a = t[1] / 100,
                r = t[2] / 100;
              return 0 === r
                ? [0, 0, 0]
                : ((r *= 2),
                  (a *= r <= 1 ? r : 2 - r),
                  (n = (r + a) / 2),
                  (e = 2 * a / (r + a)),
                  [i, 100 * e, 100 * n]);
            },
            hsl2hwb: function(t) {
              return o(c(t));
            },
            hsl2cmyk: function(t) {
              return s(c(t));
            },
            hsl2keyword: function(t) {
              return l(c(t));
            },
            hsv2rgb: h,
            hsv2hsl: function(t) {
              var e,
                n,
                i = t[0],
                a = t[1] / 100,
                r = t[2] / 100;
              return (
                (n = (2 - a) * r),
                (e = a * r),
                (e /= n <= 1 ? n : 2 - n),
                (e = e || 0),
                (n /= 2),
                [i, 100 * e, 100 * n]
              );
            },
            hsv2hwb: function(t) {
              return o(h(t));
            },
            hsv2cmyk: function(t) {
              return s(h(t));
            },
            hsv2keyword: function(t) {
              return l(h(t));
            },
            hwb2rgb: f,
            hwb2hsl: function(t) {
              return i(f(t));
            },
            hwb2hsv: function(t) {
              return a(f(t));
            },
            hwb2cmyk: function(t) {
              return s(f(t));
            },
            hwb2keyword: function(t) {
              return l(f(t));
            },
            cmyk2rgb: m,
            cmyk2hsl: function(t) {
              return i(m(t));
            },
            cmyk2hsv: function(t) {
              return a(m(t));
            },
            cmyk2hwb: function(t) {
              return o(m(t));
            },
            cmyk2keyword: function(t) {
              return l(m(t));
            },
            keyword2rgb: w,
            keyword2hsl: function(t) {
              return i(w(t));
            },
            keyword2hsv: function(t) {
              return a(w(t));
            },
            keyword2hwb: function(t) {
              return o(w(t));
            },
            keyword2cmyk: function(t) {
              return s(w(t));
            },
            keyword2lab: function(t) {
              return d(w(t));
            },
            keyword2xyz: function(t) {
              return u(w(t));
            },
            xyz2rgb: p,
            xyz2lab: v,
            xyz2lch: function(t) {
              return x(v(t));
            },
            lab2xyz: y,
            lab2rgb: _,
            lab2lch: x,
            lch2lab: k,
            lch2xyz: function(t) {
              return y(k(t));
            },
            lch2rgb: function(t) {
              return _(k(t));
            }
          };
          var M = {
              aliceblue: [240, 248, 255],
              antiquewhite: [250, 235, 215],
              aqua: [0, 255, 255],
              aquamarine: [127, 255, 212],
              azure: [240, 255, 255],
              beige: [245, 245, 220],
              bisque: [255, 228, 196],
              black: [0, 0, 0],
              blanchedalmond: [255, 235, 205],
              blue: [0, 0, 255],
              blueviolet: [138, 43, 226],
              brown: [165, 42, 42],
              burlywood: [222, 184, 135],
              cadetblue: [95, 158, 160],
              chartreuse: [127, 255, 0],
              chocolate: [210, 105, 30],
              coral: [255, 127, 80],
              cornflowerblue: [100, 149, 237],
              cornsilk: [255, 248, 220],
              crimson: [220, 20, 60],
              cyan: [0, 255, 255],
              darkblue: [0, 0, 139],
              darkcyan: [0, 139, 139],
              darkgoldenrod: [184, 134, 11],
              darkgray: [169, 169, 169],
              darkgreen: [0, 100, 0],
              darkgrey: [169, 169, 169],
              darkkhaki: [189, 183, 107],
              darkmagenta: [139, 0, 139],
              darkolivegreen: [85, 107, 47],
              darkorange: [255, 140, 0],
              darkorchid: [153, 50, 204],
              darkred: [139, 0, 0],
              darksalmon: [233, 150, 122],
              darkseagreen: [143, 188, 143],
              darkslateblue: [72, 61, 139],
              darkslategray: [47, 79, 79],
              darkslategrey: [47, 79, 79],
              darkturquoise: [0, 206, 209],
              darkviolet: [148, 0, 211],
              deeppink: [255, 20, 147],
              deepskyblue: [0, 191, 255],
              dimgray: [105, 105, 105],
              dimgrey: [105, 105, 105],
              dodgerblue: [30, 144, 255],
              firebrick: [178, 34, 34],
              floralwhite: [255, 250, 240],
              forestgreen: [34, 139, 34],
              fuchsia: [255, 0, 255],
              gainsboro: [220, 220, 220],
              ghostwhite: [248, 248, 255],
              gold: [255, 215, 0],
              goldenrod: [218, 165, 32],
              gray: [128, 128, 128],
              green: [0, 128, 0],
              greenyellow: [173, 255, 47],
              grey: [128, 128, 128],
              honeydew: [240, 255, 240],
              hotpink: [255, 105, 180],
              indianred: [205, 92, 92],
              indigo: [75, 0, 130],
              ivory: [255, 255, 240],
              khaki: [240, 230, 140],
              lavender: [230, 230, 250],
              lavenderblush: [255, 240, 245],
              lawngreen: [124, 252, 0],
              lemonchiffon: [255, 250, 205],
              lightblue: [173, 216, 230],
              lightcoral: [240, 128, 128],
              lightcyan: [224, 255, 255],
              lightgoldenrodyellow: [250, 250, 210],
              lightgray: [211, 211, 211],
              lightgreen: [144, 238, 144],
              lightgrey: [211, 211, 211],
              lightpink: [255, 182, 193],
              lightsalmon: [255, 160, 122],
              lightseagreen: [32, 178, 170],
              lightskyblue: [135, 206, 250],
              lightslategray: [119, 136, 153],
              lightslategrey: [119, 136, 153],
              lightsteelblue: [176, 196, 222],
              lightyellow: [255, 255, 224],
              lime: [0, 255, 0],
              limegreen: [50, 205, 50],
              linen: [250, 240, 230],
              magenta: [255, 0, 255],
              maroon: [128, 0, 0],
              mediumaquamarine: [102, 205, 170],
              mediumblue: [0, 0, 205],
              mediumorchid: [186, 85, 211],
              mediumpurple: [147, 112, 219],
              mediumseagreen: [60, 179, 113],
              mediumslateblue: [123, 104, 238],
              mediumspringgreen: [0, 250, 154],
              mediumturquoise: [72, 209, 204],
              mediumvioletred: [199, 21, 133],
              midnightblue: [25, 25, 112],
              mintcream: [245, 255, 250],
              mistyrose: [255, 228, 225],
              moccasin: [255, 228, 181],
              navajowhite: [255, 222, 173],
              navy: [0, 0, 128],
              oldlace: [253, 245, 230],
              olive: [128, 128, 0],
              olivedrab: [107, 142, 35],
              orange: [255, 165, 0],
              orangered: [255, 69, 0],
              orchid: [218, 112, 214],
              palegoldenrod: [238, 232, 170],
              palegreen: [152, 251, 152],
              paleturquoise: [175, 238, 238],
              palevioletred: [219, 112, 147],
              papayawhip: [255, 239, 213],
              peachpuff: [255, 218, 185],
              peru: [205, 133, 63],
              pink: [255, 192, 203],
              plum: [221, 160, 221],
              powderblue: [176, 224, 230],
              purple: [128, 0, 128],
              rebeccapurple: [102, 51, 153],
              red: [255, 0, 0],
              rosybrown: [188, 143, 143],
              royalblue: [65, 105, 225],
              saddlebrown: [139, 69, 19],
              salmon: [250, 128, 114],
              sandybrown: [244, 164, 96],
              seagreen: [46, 139, 87],
              seashell: [255, 245, 238],
              sienna: [160, 82, 45],
              silver: [192, 192, 192],
              skyblue: [135, 206, 235],
              slateblue: [106, 90, 205],
              slategray: [112, 128, 144],
              slategrey: [112, 128, 144],
              snow: [255, 250, 250],
              springgreen: [0, 255, 127],
              steelblue: [70, 130, 180],
              tan: [210, 180, 140],
              teal: [0, 128, 128],
              thistle: [216, 191, 216],
              tomato: [255, 99, 71],
              turquoise: [64, 224, 208],
              violet: [238, 130, 238],
              wheat: [245, 222, 179],
              white: [255, 255, 255],
              whitesmoke: [245, 245, 245],
              yellow: [255, 255, 0],
              yellowgreen: [154, 205, 50]
            },
            S = {};
          for (var D in M) S[JSON.stringify(M[D])] = D;
        },
        {}
      ],
      4: [
        function(t, e, n) {
          var i = t(3),
            a = function() {
              return new u();
            };
          for (var r in i) {
            a[r + "Raw"] = (function(t) {
              return function(e) {
                return (
                  "number" == typeof e &&
                    (e = Array.prototype.slice.call(arguments)),
                  i[t](e)
                );
              };
            })(r);
            var o = /(\w+)2(\w+)/.exec(r),
              s = o[1],
              l = o[2];
            (a[s] = a[s] || {})[l] = a[r] = (function(t) {
              return function(e) {
                "number" == typeof e &&
                  (e = Array.prototype.slice.call(arguments));
                var n = i[t](e);
                if ("string" == typeof n || void 0 === n) return n;
                for (var a = 0; a < n.length; a++) n[a] = Math.round(n[a]);
                return n;
              };
            })(r);
          }
          var u = function() {
            this.convs = {};
          };
          (u.prototype.routeSpace = function(t, e) {
            var n = e[0];
            return void 0 === n
              ? this.getValues(t)
              : ("number" == typeof n && (n = Array.prototype.slice.call(e)),
                this.setValues(t, n));
          }),
            (u.prototype.setValues = function(t, e) {
              return (
                (this.space = t), (this.convs = {}), (this.convs[t] = e), this
              );
            }),
            (u.prototype.getValues = function(t) {
              var e = this.convs[t];
              if (!e) {
                var n = this.space,
                  i = this.convs[n];
                (e = a[n][t](i)), (this.convs[t] = e);
              }
              return e;
            }),
            ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function(t) {
              u.prototype[t] = function(e) {
                return this.routeSpace(t, arguments);
              };
            }),
            (e.exports = a);
        },
        { 3: 3 }
      ],
      5: [
        function(t, e, n) {
          "use strict";
          e.exports = {
            aliceblue: [240, 248, 255],
            antiquewhite: [250, 235, 215],
            aqua: [0, 255, 255],
            aquamarine: [127, 255, 212],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            bisque: [255, 228, 196],
            black: [0, 0, 0],
            blanchedalmond: [255, 235, 205],
            blue: [0, 0, 255],
            blueviolet: [138, 43, 226],
            brown: [165, 42, 42],
            burlywood: [222, 184, 135],
            cadetblue: [95, 158, 160],
            chartreuse: [127, 255, 0],
            chocolate: [210, 105, 30],
            coral: [255, 127, 80],
            cornflowerblue: [100, 149, 237],
            cornsilk: [255, 248, 220],
            crimson: [220, 20, 60],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgoldenrod: [184, 134, 11],
            darkgray: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkgrey: [169, 169, 169],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkseagreen: [143, 188, 143],
            darkslateblue: [72, 61, 139],
            darkslategray: [47, 79, 79],
            darkslategrey: [47, 79, 79],
            darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211],
            deeppink: [255, 20, 147],
            deepskyblue: [0, 191, 255],
            dimgray: [105, 105, 105],
            dimgrey: [105, 105, 105],
            dodgerblue: [30, 144, 255],
            firebrick: [178, 34, 34],
            floralwhite: [255, 250, 240],
            forestgreen: [34, 139, 34],
            fuchsia: [255, 0, 255],
            gainsboro: [220, 220, 220],
            ghostwhite: [248, 248, 255],
            gold: [255, 215, 0],
            goldenrod: [218, 165, 32],
            gray: [128, 128, 128],
            green: [0, 128, 0],
            greenyellow: [173, 255, 47],
            grey: [128, 128, 128],
            honeydew: [240, 255, 240],
            hotpink: [255, 105, 180],
            indianred: [205, 92, 92],
            indigo: [75, 0, 130],
            ivory: [255, 255, 240],
            khaki: [240, 230, 140],
            lavender: [230, 230, 250],
            lavenderblush: [255, 240, 245],
            lawngreen: [124, 252, 0],
            lemonchiffon: [255, 250, 205],
            lightblue: [173, 216, 230],
            lightcoral: [240, 128, 128],
            lightcyan: [224, 255, 255],
            lightgoldenrodyellow: [250, 250, 210],
            lightgray: [211, 211, 211],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightsalmon: [255, 160, 122],
            lightseagreen: [32, 178, 170],
            lightskyblue: [135, 206, 250],
            lightslategray: [119, 136, 153],
            lightslategrey: [119, 136, 153],
            lightsteelblue: [176, 196, 222],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            limegreen: [50, 205, 50],
            linen: [250, 240, 230],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            mediumaquamarine: [102, 205, 170],
            mediumblue: [0, 0, 205],
            mediumorchid: [186, 85, 211],
            mediumpurple: [147, 112, 219],
            mediumseagreen: [60, 179, 113],
            mediumslateblue: [123, 104, 238],
            mediumspringgreen: [0, 250, 154],
            mediumturquoise: [72, 209, 204],
            mediumvioletred: [199, 21, 133],
            midnightblue: [25, 25, 112],
            mintcream: [245, 255, 250],
            mistyrose: [255, 228, 225],
            moccasin: [255, 228, 181],
            navajowhite: [255, 222, 173],
            navy: [0, 0, 128],
            oldlace: [253, 245, 230],
            olive: [128, 128, 0],
            olivedrab: [107, 142, 35],
            orange: [255, 165, 0],
            orangered: [255, 69, 0],
            orchid: [218, 112, 214],
            palegoldenrod: [238, 232, 170],
            palegreen: [152, 251, 152],
            paleturquoise: [175, 238, 238],
            palevioletred: [219, 112, 147],
            papayawhip: [255, 239, 213],
            peachpuff: [255, 218, 185],
            peru: [205, 133, 63],
            pink: [255, 192, 203],
            plum: [221, 160, 221],
            powderblue: [176, 224, 230],
            purple: [128, 0, 128],
            rebeccapurple: [102, 51, 153],
            red: [255, 0, 0],
            rosybrown: [188, 143, 143],
            royalblue: [65, 105, 225],
            saddlebrown: [139, 69, 19],
            salmon: [250, 128, 114],
            sandybrown: [244, 164, 96],
            seagreen: [46, 139, 87],
            seashell: [255, 245, 238],
            sienna: [160, 82, 45],
            silver: [192, 192, 192],
            skyblue: [135, 206, 235],
            slateblue: [106, 90, 205],
            slategray: [112, 128, 144],
            slategrey: [112, 128, 144],
            snow: [255, 250, 250],
            springgreen: [0, 255, 127],
            steelblue: [70, 130, 180],
            tan: [210, 180, 140],
            teal: [0, 128, 128],
            thistle: [216, 191, 216],
            tomato: [255, 99, 71],
            turquoise: [64, 224, 208],
            violet: [238, 130, 238],
            wheat: [245, 222, 179],
            white: [255, 255, 255],
            whitesmoke: [245, 245, 245],
            yellow: [255, 255, 0],
            yellowgreen: [154, 205, 50]
          };
        },
        {}
      ],
      6: [
        function(t, e, n) {
          !(function(t, i) {
            "object" == typeof n && void 0 !== e
              ? (e.exports = i())
              : (t.moment = i());
          })(this, function() {
            "use strict";
            function n() {
              return xe.apply(null, arguments);
            }
            function i(t) {
              return (
                t instanceof Array ||
                "[object Array]" === Object.prototype.toString.call(t)
              );
            }
            function a(t) {
              return (
                null != t &&
                "[object Object]" === Object.prototype.toString.call(t)
              );
            }
            function r(t) {
              var e;
              for (e in t) return !1;
              return !0;
            }
            function o(t) {
              return void 0 === t;
            }
            function s(t) {
              return (
                "number" == typeof t ||
                "[object Number]" === Object.prototype.toString.call(t)
              );
            }
            function l(t) {
              return (
                t instanceof Date ||
                "[object Date]" === Object.prototype.toString.call(t)
              );
            }
            function u(t, e) {
              var n,
                i = [];
              for (n = 0; n < t.length; ++n) i.push(e(t[n], n));
              return i;
            }
            function d(t, e) {
              return Object.prototype.hasOwnProperty.call(t, e);
            }
            function c(t, e) {
              for (var n in e) d(e, n) && (t[n] = e[n]);
              return (
                d(e, "toString") && (t.toString = e.toString),
                d(e, "valueOf") && (t.valueOf = e.valueOf),
                t
              );
            }
            function h(t, e, n, i) {
              return Yt(t, e, n, i, !0).utc();
            }
            function f() {
              return {
                empty: !1,
                unusedTokens: [],
                unusedInput: [],
                overflow: -2,
                charsLeftOver: 0,
                nullInput: !1,
                invalidMonth: null,
                invalidFormat: !1,
                userInvalidated: !1,
                iso: !1,
                parsedDateParts: [],
                meridiem: null,
                rfc2822: !1,
                weekdayMismatch: !1
              };
            }
            function g(t) {
              return null == t._pf && (t._pf = f()), t._pf;
            }
            function m(t) {
              if (null == t._isValid) {
                var e = g(t),
                  n = ke.call(e.parsedDateParts, function(t) {
                    return null != t;
                  }),
                  i =
                    !isNaN(t._d.getTime()) &&
                    e.overflow < 0 &&
                    !e.empty &&
                    !e.invalidMonth &&
                    !e.invalidWeekday &&
                    !e.nullInput &&
                    !e.invalidFormat &&
                    !e.userInvalidated &&
                    (!e.meridiem || (e.meridiem && n));
                if (
                  (t._strict &&
                    (i =
                      i &&
                      0 === e.charsLeftOver &&
                      0 === e.unusedTokens.length &&
                      void 0 === e.bigHour),
                  null != Object.isFrozen && Object.isFrozen(t))
                )
                  return i;
                t._isValid = i;
              }
              return t._isValid;
            }
            function p(t) {
              var e = h(NaN);
              return null != t ? c(g(e), t) : (g(e).userInvalidated = !0), e;
            }
            function v(t, e) {
              var n, i, a;
              if (
                (o(e._isAMomentObject) ||
                  (t._isAMomentObject = e._isAMomentObject),
                o(e._i) || (t._i = e._i),
                o(e._f) || (t._f = e._f),
                o(e._l) || (t._l = e._l),
                o(e._strict) || (t._strict = e._strict),
                o(e._tzm) || (t._tzm = e._tzm),
                o(e._isUTC) || (t._isUTC = e._isUTC),
                o(e._offset) || (t._offset = e._offset),
                o(e._pf) || (t._pf = g(e)),
                o(e._locale) || (t._locale = e._locale),
                we.length > 0)
              )
                for (n = 0; n < we.length; n++)
                  o((a = e[(i = we[n])])) || (t[i] = a);
              return t;
            }
            function y(t) {
              v(this, t),
                (this._d = new Date(null != t._d ? t._d.getTime() : NaN)),
                this.isValid() || (this._d = new Date(NaN)),
                !1 === Me && ((Me = !0), n.updateOffset(this), (Me = !1));
            }
            function b(t) {
              return (
                t instanceof y || (null != t && null != t._isAMomentObject)
              );
            }
            function x(t) {
              return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
            }
            function _(t) {
              var e = +t,
                n = 0;
              return 0 !== e && isFinite(e) && (n = x(e)), n;
            }
            function k(t, e, n) {
              var i,
                a = Math.min(t.length, e.length),
                r = Math.abs(t.length - e.length),
                o = 0;
              for (i = 0; i < a; i++)
                ((n && t[i] !== e[i]) || (!n && _(t[i]) !== _(e[i]))) && o++;
              return o + r;
            }
            function w(t) {
              !1 === n.suppressDeprecationWarnings &&
                "undefined" != typeof console &&
                console.warn &&
                console.warn("Deprecation warning: " + t);
            }
            function M(t, e) {
              var i = !0;
              return c(function() {
                if (
                  (null != n.deprecationHandler &&
                    n.deprecationHandler(null, t),
                  i)
                ) {
                  for (var a, r = [], o = 0; o < arguments.length; o++) {
                    if (((a = ""), "object" == typeof arguments[o])) {
                      a += "\n[" + o + "] ";
                      for (var s in arguments[0])
                        a += s + ": " + arguments[0][s] + ", ";
                      a = a.slice(0, -2);
                    } else a = arguments[o];
                    r.push(a);
                  }
                  w(
                    t +
                      "\nArguments: " +
                      Array.prototype.slice.call(r).join("") +
                      "\n" +
                      new Error().stack
                  ),
                    (i = !1);
                }
                return e.apply(this, arguments);
              }, e);
            }
            function S(t, e) {
              null != n.deprecationHandler && n.deprecationHandler(t, e),
                Se[t] || (w(e), (Se[t] = !0));
            }
            function D(t) {
              return (
                t instanceof Function ||
                "[object Function]" === Object.prototype.toString.call(t)
              );
            }
            function C(t, e) {
              var n,
                i = c({}, t);
              for (n in e)
                d(e, n) &&
                  (a(t[n]) && a(e[n])
                    ? ((i[n] = {}), c(i[n], t[n]), c(i[n], e[n]))
                    : null != e[n]
                      ? (i[n] = e[n])
                      : delete i[n]);
              for (n in t)
                d(t, n) && !d(e, n) && a(t[n]) && (i[n] = c({}, i[n]));
              return i;
            }
            function P(t) {
              null != t && this.set(t);
            }
            function T(t, e) {
              var n = t.toLowerCase();
              Te[n] = Te[n + "s"] = Te[e] = t;
            }
            function A(t) {
              return "string" == typeof t
                ? Te[t] || Te[t.toLowerCase()]
                : void 0;
            }
            function I(t) {
              var e,
                n,
                i = {};
              for (n in t) d(t, n) && (e = A(n)) && (i[e] = t[n]);
              return i;
            }
            function O(t, e) {
              Ae[t] = e;
            }
            function F(t) {
              var e = [];
              for (var n in t) e.push({ unit: n, priority: Ae[n] });
              return (
                e.sort(function(t, e) {
                  return t.priority - e.priority;
                }),
                e
              );
            }
            function R(t, e) {
              return function(i) {
                return null != i
                  ? (W(this, t, i), n.updateOffset(this, e), this)
                  : L(this, t);
              };
            }
            function L(t, e) {
              return t.isValid()
                ? t._d["get" + (t._isUTC ? "UTC" : "") + e]()
                : NaN;
            }
            function W(t, e, n) {
              t.isValid() && t._d["set" + (t._isUTC ? "UTC" : "") + e](n);
            }
            function Y(t, e, n) {
              var i = "" + Math.abs(t),
                a = e - i.length;
              return (
                (t >= 0 ? (n ? "+" : "") : "-") +
                Math.pow(10, Math.max(0, a))
                  .toString()
                  .substr(1) +
                i
              );
            }
            function N(t, e, n, i) {
              var a = i;
              "string" == typeof i &&
                (a = function() {
                  return this[i]();
                }),
                t && (Re[t] = a),
                e &&
                  (Re[e[0]] = function() {
                    return Y(a.apply(this, arguments), e[1], e[2]);
                  }),
                n &&
                  (Re[n] = function() {
                    return this.localeData().ordinal(
                      a.apply(this, arguments),
                      t
                    );
                  });
            }
            function z(t) {
              return t.match(/\[[\s\S]/)
                ? t.replace(/^\[|\]$/g, "")
                : t.replace(/\\/g, "");
            }
            function B(t) {
              var e,
                n,
                i = t.match(Ie);
              for (e = 0, n = i.length; e < n; e++)
                Re[i[e]] ? (i[e] = Re[i[e]]) : (i[e] = z(i[e]));
              return function(e) {
                var a,
                  r = "";
                for (a = 0; a < n; a++) r += D(i[a]) ? i[a].call(e, t) : i[a];
                return r;
              };
            }
            function V(t, e) {
              return t.isValid()
                ? ((e = H(e, t.localeData())),
                  (Fe[e] = Fe[e] || B(e)),
                  Fe[e](t))
                : t.localeData().invalidDate();
            }
            function H(t, e) {
              var n = 5;
              for (Oe.lastIndex = 0; n >= 0 && Oe.test(t); )
                (t = t.replace(Oe, function(t) {
                  return e.longDateFormat(t) || t;
                })),
                  (Oe.lastIndex = 0),
                  (n -= 1);
              return t;
            }
            function E(t, e, n) {
              Ke[t] = D(e)
                ? e
                : function(t, i) {
                    return t && n ? n : e;
                  };
            }
            function j(t, e) {
              return d(Ke, t) ? Ke[t](e._strict, e._locale) : new RegExp(U(t));
            }
            function U(t) {
              return q(
                t
                  .replace("\\", "")
                  .replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(
                    t,
                    e,
                    n,
                    i,
                    a
                  ) {
                    return e || n || i || a;
                  })
              );
            }
            function q(t) {
              return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
            }
            function G(t, e) {
              var n,
                i = e;
              for (
                "string" == typeof t && (t = [t]),
                  s(e) &&
                    (i = function(t, n) {
                      n[e] = _(t);
                    }),
                  n = 0;
                n < t.length;
                n++
              )
                Qe[t[n]] = i;
            }
            function Z(t, e) {
              G(t, function(t, n, i, a) {
                (i._w = i._w || {}), e(t, i._w, i, a);
              });
            }
            function X(t, e, n) {
              null != e && d(Qe, t) && Qe[t](e, n._a, n, t);
            }
            function J(t, e) {
              return new Date(Date.UTC(t, e + 1, 0)).getUTCDate();
            }
            function K(t, e, n) {
              var i,
                a,
                r,
                o = t.toLocaleLowerCase();
              if (!this._monthsParse)
                for (
                  this._monthsParse = [],
                    this._longMonthsParse = [],
                    this._shortMonthsParse = [],
                    i = 0;
                  i < 12;
                  ++i
                )
                  (r = h([2e3, i])),
                    (this._shortMonthsParse[i] = this.monthsShort(
                      r,
                      ""
                    ).toLocaleLowerCase()),
                    (this._longMonthsParse[i] = this.months(
                      r,
                      ""
                    ).toLocaleLowerCase());
              return n
                ? "MMM" === e
                  ? -1 !== (a = un.call(this._shortMonthsParse, o))
                    ? a
                    : null
                  : -1 !== (a = un.call(this._longMonthsParse, o))
                    ? a
                    : null
                : "MMM" === e
                  ? -1 !== (a = un.call(this._shortMonthsParse, o))
                    ? a
                    : -1 !== (a = un.call(this._longMonthsParse, o))
                      ? a
                      : null
                  : -1 !== (a = un.call(this._longMonthsParse, o))
                    ? a
                    : -1 !== (a = un.call(this._shortMonthsParse, o))
                      ? a
                      : null;
            }
            function Q(t, e) {
              var n;
              if (!t.isValid()) return t;
              if ("string" == typeof e)
                if (/^\d+$/.test(e)) e = _(e);
                else if (((e = t.localeData().monthsParse(e)), !s(e))) return t;
              return (
                (n = Math.min(t.date(), J(t.year(), e))),
                t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n),
                t
              );
            }
            function $(t) {
              return null != t
                ? (Q(this, t), n.updateOffset(this, !0), this)
                : L(this, "Month");
            }
            function tt() {
              function t(t, e) {
                return e.length - t.length;
              }
              var e,
                n,
                i = [],
                a = [],
                r = [];
              for (e = 0; e < 12; e++)
                (n = h([2e3, e])),
                  i.push(this.monthsShort(n, "")),
                  a.push(this.months(n, "")),
                  r.push(this.months(n, "")),
                  r.push(this.monthsShort(n, ""));
              for (i.sort(t), a.sort(t), r.sort(t), e = 0; e < 12; e++)
                (i[e] = q(i[e])), (a[e] = q(a[e]));
              for (e = 0; e < 24; e++) r[e] = q(r[e]);
              (this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i")),
                (this._monthsShortRegex = this._monthsRegex),
                (this._monthsStrictRegex = new RegExp(
                  "^(" + a.join("|") + ")",
                  "i"
                )),
                (this._monthsShortStrictRegex = new RegExp(
                  "^(" + i.join("|") + ")",
                  "i"
                ));
            }
            function et(t) {
              return nt(t) ? 366 : 365;
            }
            function nt(t) {
              return (t % 4 == 0 && t % 100 != 0) || t % 400 == 0;
            }
            function it(t, e, n, i, a, r, o) {
              var s = new Date(t, e, n, i, a, r, o);
              return (
                t < 100 &&
                  t >= 0 &&
                  isFinite(s.getFullYear()) &&
                  s.setFullYear(t),
                s
              );
            }
            function at(t) {
              var e = new Date(Date.UTC.apply(null, arguments));
              return (
                t < 100 &&
                  t >= 0 &&
                  isFinite(e.getUTCFullYear()) &&
                  e.setUTCFullYear(t),
                e
              );
            }
            function rt(t, e, n) {
              var i = 7 + e - n;
              return -((7 + at(t, 0, i).getUTCDay() - e) % 7) + i - 1;
            }
            function ot(t, e, n, i, a) {
              var r,
                o,
                s = 1 + 7 * (e - 1) + (7 + n - i) % 7 + rt(t, i, a);
              return (
                s <= 0
                  ? (o = et((r = t - 1)) + s)
                  : s > et(t)
                    ? ((r = t + 1), (o = s - et(t)))
                    : ((r = t), (o = s)),
                { year: r, dayOfYear: o }
              );
            }
            function st(t, e, n) {
              var i,
                a,
                r = rt(t.year(), e, n),
                o = Math.floor((t.dayOfYear() - r - 1) / 7) + 1;
              return (
                o < 1
                  ? (i = o + lt((a = t.year() - 1), e, n))
                  : o > lt(t.year(), e, n)
                    ? ((i = o - lt(t.year(), e, n)), (a = t.year() + 1))
                    : ((a = t.year()), (i = o)),
                { week: i, year: a }
              );
            }
            function lt(t, e, n) {
              var i = rt(t, e, n),
                a = rt(t + 1, e, n);
              return (et(t) - i + a) / 7;
            }
            function ut(t, e) {
              return "string" != typeof t
                ? t
                : isNaN(t)
                  ? "number" == typeof (t = e.weekdaysParse(t))
                    ? t
                    : null
                  : parseInt(t, 10);
            }
            function dt(t, e) {
              return "string" == typeof t
                ? e.weekdaysParse(t) % 7 || 7
                : isNaN(t)
                  ? null
                  : t;
            }
            function ct(t, e, n) {
              var i,
                a,
                r,
                o = t.toLocaleLowerCase();
              if (!this._weekdaysParse)
                for (
                  this._weekdaysParse = [],
                    this._shortWeekdaysParse = [],
                    this._minWeekdaysParse = [],
                    i = 0;
                  i < 7;
                  ++i
                )
                  (r = h([2e3, 1]).day(i)),
                    (this._minWeekdaysParse[i] = this.weekdaysMin(
                      r,
                      ""
                    ).toLocaleLowerCase()),
                    (this._shortWeekdaysParse[i] = this.weekdaysShort(
                      r,
                      ""
                    ).toLocaleLowerCase()),
                    (this._weekdaysParse[i] = this.weekdays(
                      r,
                      ""
                    ).toLocaleLowerCase());
              return n
                ? "dddd" === e
                  ? -1 !== (a = un.call(this._weekdaysParse, o))
                    ? a
                    : null
                  : "ddd" === e
                    ? -1 !== (a = un.call(this._shortWeekdaysParse, o))
                      ? a
                      : null
                    : -1 !== (a = un.call(this._minWeekdaysParse, o))
                      ? a
                      : null
                : "dddd" === e
                  ? -1 !== (a = un.call(this._weekdaysParse, o))
                    ? a
                    : -1 !== (a = un.call(this._shortWeekdaysParse, o))
                      ? a
                      : -1 !== (a = un.call(this._minWeekdaysParse, o))
                        ? a
                        : null
                  : "ddd" === e
                    ? -1 !== (a = un.call(this._shortWeekdaysParse, o))
                      ? a
                      : -1 !== (a = un.call(this._weekdaysParse, o))
                        ? a
                        : -1 !== (a = un.call(this._minWeekdaysParse, o))
                          ? a
                          : null
                    : -1 !== (a = un.call(this._minWeekdaysParse, o))
                      ? a
                      : -1 !== (a = un.call(this._weekdaysParse, o))
                        ? a
                        : -1 !== (a = un.call(this._shortWeekdaysParse, o))
                          ? a
                          : null;
            }
            function ht() {
              function t(t, e) {
                return e.length - t.length;
              }
              var e,
                n,
                i,
                a,
                r,
                o = [],
                s = [],
                l = [],
                u = [];
              for (e = 0; e < 7; e++)
                (n = h([2e3, 1]).day(e)),
                  (i = this.weekdaysMin(n, "")),
                  (a = this.weekdaysShort(n, "")),
                  (r = this.weekdays(n, "")),
                  o.push(i),
                  s.push(a),
                  l.push(r),
                  u.push(i),
                  u.push(a),
                  u.push(r);
              for (
                o.sort(t), s.sort(t), l.sort(t), u.sort(t), e = 0;
                e < 7;
                e++
              )
                (s[e] = q(s[e])), (l[e] = q(l[e])), (u[e] = q(u[e]));
              (this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i")),
                (this._weekdaysShortRegex = this._weekdaysRegex),
                (this._weekdaysMinRegex = this._weekdaysRegex),
                (this._weekdaysStrictRegex = new RegExp(
                  "^(" + l.join("|") + ")",
                  "i"
                )),
                (this._weekdaysShortStrictRegex = new RegExp(
                  "^(" + s.join("|") + ")",
                  "i"
                )),
                (this._weekdaysMinStrictRegex = new RegExp(
                  "^(" + o.join("|") + ")",
                  "i"
                ));
            }
            function ft() {
              return this.hours() % 12 || 12;
            }
            function gt(t, e) {
              N(t, 0, 0, function() {
                return this.localeData().meridiem(
                  this.hours(),
                  this.minutes(),
                  e
                );
              });
            }
            function mt(t, e) {
              return e._meridiemParse;
            }
            function pt(t) {
              return t ? t.toLowerCase().replace("_", "-") : t;
            }
            function vt(t) {
              for (var e, n, i, a, r = 0; r < t.length; ) {
                for (
                  e = (a = pt(t[r]).split("-")).length,
                    n = (n = pt(t[r + 1])) ? n.split("-") : null;
                  e > 0;

                ) {
                  if ((i = yt(a.slice(0, e).join("-")))) return i;
                  if (n && n.length >= e && k(a, n, !0) >= e - 1) break;
                  e--;
                }
                r++;
              }
              return null;
            }
            function yt(n) {
              var i = null;
              if (!Sn[n] && void 0 !== e && e && e.exports)
                try {
                  (i = kn._abbr), t("./locale/" + n), bt(i);
                } catch (t) {}
              return Sn[n];
            }
            function bt(t, e) {
              var n;
              return t && (n = o(e) ? _t(t) : xt(t, e)) && (kn = n), kn._abbr;
            }
            function xt(t, e) {
              if (null !== e) {
                var n = Mn;
                if (((e.abbr = t), null != Sn[t]))
                  S(
                    "defineLocaleOverride",
                    "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
                  ),
                    (n = Sn[t]._config);
                else if (null != e.parentLocale) {
                  if (null == Sn[e.parentLocale])
                    return (
                      Dn[e.parentLocale] || (Dn[e.parentLocale] = []),
                      Dn[e.parentLocale].push({ name: t, config: e }),
                      null
                    );
                  n = Sn[e.parentLocale]._config;
                }
                return (
                  (Sn[t] = new P(C(n, e))),
                  Dn[t] &&
                    Dn[t].forEach(function(t) {
                      xt(t.name, t.config);
                    }),
                  bt(t),
                  Sn[t]
                );
              }
              return delete Sn[t], null;
            }
            function _t(t) {
              var e;
              if (
                (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t)
              )
                return kn;
              if (!i(t)) {
                if ((e = yt(t))) return e;
                t = [t];
              }
              return vt(t);
            }
            function kt(t) {
              var e,
                n = t._a;
              return (
                n &&
                  -2 === g(t).overflow &&
                  ((e =
                    n[tn] < 0 || n[tn] > 11
                      ? tn
                      : n[en] < 1 || n[en] > J(n[$e], n[tn])
                        ? en
                        : n[nn] < 0 ||
                          n[nn] > 24 ||
                          (24 === n[nn] &&
                            (0 !== n[an] || 0 !== n[rn] || 0 !== n[on]))
                          ? nn
                          : n[an] < 0 || n[an] > 59
                            ? an
                            : n[rn] < 0 || n[rn] > 59
                              ? rn
                              : n[on] < 0 || n[on] > 999
                                ? on
                                : -1),
                  g(t)._overflowDayOfYear && (e < $e || e > en) && (e = en),
                  g(t)._overflowWeeks && -1 === e && (e = sn),
                  g(t)._overflowWeekday && -1 === e && (e = ln),
                  (g(t).overflow = e)),
                t
              );
            }
            function wt(t) {
              var e,
                n,
                i,
                a,
                r,
                o,
                s = t._i,
                l = Cn.exec(s) || Pn.exec(s);
              if (l) {
                for (g(t).iso = !0, e = 0, n = An.length; e < n; e++)
                  if (An[e][1].exec(l[1])) {
                    (a = An[e][0]), (i = !1 !== An[e][2]);
                    break;
                  }
                if (null == a) return void (t._isValid = !1);
                if (l[3]) {
                  for (e = 0, n = In.length; e < n; e++)
                    if (In[e][1].exec(l[3])) {
                      r = (l[2] || " ") + In[e][0];
                      break;
                    }
                  if (null == r) return void (t._isValid = !1);
                }
                if (!i && null != r) return void (t._isValid = !1);
                if (l[4]) {
                  if (!Tn.exec(l[4])) return void (t._isValid = !1);
                  o = "Z";
                }
                (t._f = a + (r || "") + (o || "")), At(t);
              } else t._isValid = !1;
            }
            function Mt(t) {
              var e,
                n,
                i,
                a,
                r,
                o,
                s,
                l,
                u = {
                  " GMT": " +0000",
                  " EDT": " -0400",
                  " EST": " -0500",
                  " CDT": " -0500",
                  " CST": " -0600",
                  " MDT": " -0600",
                  " MST": " -0700",
                  " PDT": " -0700",
                  " PST": " -0800"
                };
              if (
                ((e = t._i
                  .replace(/\([^\)]*\)|[\n\t]/g, " ")
                  .replace(/(\s\s+)/g, " ")
                  .replace(/^\s|\s$/g, "")),
                (n = Fn.exec(e)))
              ) {
                if (
                  ((i = n[1] ? "ddd" + (5 === n[1].length ? ", " : " ") : ""),
                  (a = "D MMM " + (n[2].length > 10 ? "YYYY " : "YY ")),
                  (r = "HH:mm" + (n[4] ? ":ss" : "")),
                  n[1])
                ) {
                  var d = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
                    new Date(n[2]).getDay()
                  ];
                  if (n[1].substr(0, 3) !== d)
                    return (g(t).weekdayMismatch = !0), void (t._isValid = !1);
                }
                switch (n[5].length) {
                  case 2:
                    s =
                      0 === l
                        ? " +0000"
                        : ((l =
                            "YXWVUTSRQPONZABCDEFGHIKLM".indexOf(
                              n[5][1].toUpperCase()
                            ) - 12) < 0
                            ? " -"
                            : " +") +
                          ("" + l).replace(/^-?/, "0").match(/..$/)[0] +
                          "00";
                    break;
                  case 4:
                    s = u[n[5]];
                    break;
                  default:
                    s = u[" GMT"];
                }
                (n[5] = s),
                  (t._i = n.splice(1).join("")),
                  (o = " ZZ"),
                  (t._f = i + a + r + o),
                  At(t),
                  (g(t).rfc2822 = !0);
              } else t._isValid = !1;
            }
            function St(t) {
              var e = On.exec(t._i);
              null === e
                ? (wt(t),
                  !1 === t._isValid &&
                    (delete t._isValid,
                    Mt(t),
                    !1 === t._isValid &&
                      (delete t._isValid, n.createFromInputFallback(t))))
                : (t._d = new Date(+e[1]));
            }
            function Dt(t, e, n) {
              return null != t ? t : null != e ? e : n;
            }
            function Ct(t) {
              var e = new Date(n.now());
              return t._useUTC
                ? [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()]
                : [e.getFullYear(), e.getMonth(), e.getDate()];
            }
            function Pt(t) {
              var e,
                n,
                i,
                a,
                r = [];
              if (!t._d) {
                for (
                  i = Ct(t),
                    t._w && null == t._a[en] && null == t._a[tn] && Tt(t),
                    null != t._dayOfYear &&
                      ((a = Dt(t._a[$e], i[$e])),
                      (t._dayOfYear > et(a) || 0 === t._dayOfYear) &&
                        (g(t)._overflowDayOfYear = !0),
                      (n = at(a, 0, t._dayOfYear)),
                      (t._a[tn] = n.getUTCMonth()),
                      (t._a[en] = n.getUTCDate())),
                    e = 0;
                  e < 3 && null == t._a[e];
                  ++e
                )
                  t._a[e] = r[e] = i[e];
                for (; e < 7; e++)
                  t._a[e] = r[e] =
                    null == t._a[e] ? (2 === e ? 1 : 0) : t._a[e];
                24 === t._a[nn] &&
                  0 === t._a[an] &&
                  0 === t._a[rn] &&
                  0 === t._a[on] &&
                  ((t._nextDay = !0), (t._a[nn] = 0)),
                  (t._d = (t._useUTC ? at : it).apply(null, r)),
                  null != t._tzm &&
                    t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm),
                  t._nextDay && (t._a[nn] = 24);
              }
            }
            function Tt(t) {
              var e, n, i, a, r, o, s, l;
              if (null != (e = t._w).GG || null != e.W || null != e.E)
                (r = 1),
                  (o = 4),
                  (n = Dt(e.GG, t._a[$e], st(Nt(), 1, 4).year)),
                  (i = Dt(e.W, 1)),
                  ((a = Dt(e.E, 1)) < 1 || a > 7) && (l = !0);
              else {
                (r = t._locale._week.dow), (o = t._locale._week.doy);
                var u = st(Nt(), r, o);
                (n = Dt(e.gg, t._a[$e], u.year)),
                  (i = Dt(e.w, u.week)),
                  null != e.d
                    ? ((a = e.d) < 0 || a > 6) && (l = !0)
                    : null != e.e
                      ? ((a = e.e + r), (e.e < 0 || e.e > 6) && (l = !0))
                      : (a = r);
              }
              i < 1 || i > lt(n, r, o)
                ? (g(t)._overflowWeeks = !0)
                : null != l
                  ? (g(t)._overflowWeekday = !0)
                  : ((s = ot(n, i, a, r, o)),
                    (t._a[$e] = s.year),
                    (t._dayOfYear = s.dayOfYear));
            }
            function At(t) {
              if (t._f !== n.ISO_8601)
                if (t._f !== n.RFC_2822) {
                  (t._a = []), (g(t).empty = !0);
                  var e,
                    i,
                    a,
                    r,
                    o,
                    s = "" + t._i,
                    l = s.length,
                    u = 0;
                  for (
                    a = H(t._f, t._locale).match(Ie) || [], e = 0;
                    e < a.length;
                    e++
                  )
                    (r = a[e]),
                      (i = (s.match(j(r, t)) || [])[0]) &&
                        ((o = s.substr(0, s.indexOf(i))).length > 0 &&
                          g(t).unusedInput.push(o),
                        (s = s.slice(s.indexOf(i) + i.length)),
                        (u += i.length)),
                      Re[r]
                        ? (i ? (g(t).empty = !1) : g(t).unusedTokens.push(r),
                          X(r, i, t))
                        : t._strict && !i && g(t).unusedTokens.push(r);
                  (g(t).charsLeftOver = l - u),
                    s.length > 0 && g(t).unusedInput.push(s),
                    t._a[nn] <= 12 &&
                      !0 === g(t).bigHour &&
                      t._a[nn] > 0 &&
                      (g(t).bigHour = void 0),
                    (g(t).parsedDateParts = t._a.slice(0)),
                    (g(t).meridiem = t._meridiem),
                    (t._a[nn] = It(t._locale, t._a[nn], t._meridiem)),
                    Pt(t),
                    kt(t);
                } else Mt(t);
              else wt(t);
            }
            function It(t, e, n) {
              var i;
              return null == n
                ? e
                : null != t.meridiemHour
                  ? t.meridiemHour(e, n)
                  : null != t.isPM
                    ? ((i = t.isPM(n)) && e < 12 && (e += 12),
                      i || 12 !== e || (e = 0),
                      e)
                    : e;
            }
            function Ot(t) {
              var e, n, i, a, r;
              if (0 === t._f.length)
                return (g(t).invalidFormat = !0), void (t._d = new Date(NaN));
              for (a = 0; a < t._f.length; a++)
                (r = 0),
                  (e = v({}, t)),
                  null != t._useUTC && (e._useUTC = t._useUTC),
                  (e._f = t._f[a]),
                  At(e),
                  m(e) &&
                    ((r += g(e).charsLeftOver),
                    (r += 10 * g(e).unusedTokens.length),
                    (g(e).score = r),
                    (null == i || r < i) && ((i = r), (n = e)));
              c(t, n || e);
            }
            function Ft(t) {
              if (!t._d) {
                var e = I(t._i);
                (t._a = u(
                  [
                    e.year,
                    e.month,
                    e.day || e.date,
                    e.hour,
                    e.minute,
                    e.second,
                    e.millisecond
                  ],
                  function(t) {
                    return t && parseInt(t, 10);
                  }
                )),
                  Pt(t);
              }
            }
            function Rt(t) {
              var e = new y(kt(Lt(t)));
              return e._nextDay && (e.add(1, "d"), (e._nextDay = void 0)), e;
            }
            function Lt(t) {
              var e = t._i,
                n = t._f;
              return (
                (t._locale = t._locale || _t(t._l)),
                null === e || (void 0 === n && "" === e)
                  ? p({ nullInput: !0 })
                  : ("string" == typeof e && (t._i = e = t._locale.preparse(e)),
                    b(e)
                      ? new y(kt(e))
                      : (l(e) ? (t._d = e) : i(n) ? Ot(t) : n ? At(t) : Wt(t),
                        m(t) || (t._d = null),
                        t))
              );
            }
            function Wt(t) {
              var e = t._i;
              o(e)
                ? (t._d = new Date(n.now()))
                : l(e)
                  ? (t._d = new Date(e.valueOf()))
                  : "string" == typeof e
                    ? St(t)
                    : i(e)
                      ? ((t._a = u(e.slice(0), function(t) {
                          return parseInt(t, 10);
                        })),
                        Pt(t))
                      : a(e)
                        ? Ft(t)
                        : s(e)
                          ? (t._d = new Date(e))
                          : n.createFromInputFallback(t);
            }
            function Yt(t, e, n, o, s) {
              var l = {};
              return (
                (!0 !== n && !1 !== n) || ((o = n), (n = void 0)),
                ((a(t) && r(t)) || (i(t) && 0 === t.length)) && (t = void 0),
                (l._isAMomentObject = !0),
                (l._useUTC = l._isUTC = s),
                (l._l = n),
                (l._i = t),
                (l._f = e),
                (l._strict = o),
                Rt(l)
              );
            }
            function Nt(t, e, n, i) {
              return Yt(t, e, n, i, !1);
            }
            function zt(t, e) {
              var n, a;
              if ((1 === e.length && i(e[0]) && (e = e[0]), !e.length))
                return Nt();
              for (n = e[0], a = 1; a < e.length; ++a)
                (e[a].isValid() && !e[a][t](n)) || (n = e[a]);
              return n;
            }
            function Bt(t) {
              for (var e in t)
                if (-1 === Wn.indexOf(e) || (null != t[e] && isNaN(t[e])))
                  return !1;
              for (var n = !1, i = 0; i < Wn.length; ++i)
                if (t[Wn[i]]) {
                  if (n) return !1;
                  parseFloat(t[Wn[i]]) !== _(t[Wn[i]]) && (n = !0);
                }
              return !0;
            }
            function Vt(t) {
              var e = I(t),
                n = e.year || 0,
                i = e.quarter || 0,
                a = e.month || 0,
                r = e.week || 0,
                o = e.day || 0,
                s = e.hour || 0,
                l = e.minute || 0,
                u = e.second || 0,
                d = e.millisecond || 0;
              (this._isValid = Bt(e)),
                (this._milliseconds =
                  +d + 1e3 * u + 6e4 * l + 1e3 * s * 60 * 60),
                (this._days = +o + 7 * r),
                (this._months = +a + 3 * i + 12 * n),
                (this._data = {}),
                (this._locale = _t()),
                this._bubble();
            }
            function Ht(t) {
              return t instanceof Vt;
            }
            function Et(t) {
              return t < 0 ? -1 * Math.round(-1 * t) : Math.round(t);
            }
            function jt(t, e) {
              N(t, 0, 0, function() {
                var t = this.utcOffset(),
                  n = "+";
                return (
                  t < 0 && ((t = -t), (n = "-")),
                  n + Y(~~(t / 60), 2) + e + Y(~~t % 60, 2)
                );
              });
            }
            function Ut(t, e) {
              var n = (e || "").match(t);
              if (null === n) return null;
              var i = ((n[n.length - 1] || []) + "").match(Yn) || ["-", 0, 0],
                a = 60 * i[1] + _(i[2]);
              return 0 === a ? 0 : "+" === i[0] ? a : -a;
            }
            function qt(t, e) {
              var i, a;
              return e._isUTC
                ? ((i = e.clone()),
                  (a =
                    (b(t) || l(t) ? t.valueOf() : Nt(t).valueOf()) -
                    i.valueOf()),
                  i._d.setTime(i._d.valueOf() + a),
                  n.updateOffset(i, !1),
                  i)
                : Nt(t).local();
            }
            function Gt(t) {
              return 15 * -Math.round(t._d.getTimezoneOffset() / 15);
            }
            function Zt() {
              return !!this.isValid() && (this._isUTC && 0 === this._offset);
            }
            function Xt(t, e) {
              var n,
                i,
                a,
                r = t,
                o = null;
              return (
                Ht(t)
                  ? (r = { ms: t._milliseconds, d: t._days, M: t._months })
                  : s(t)
                    ? ((r = {}), e ? (r[e] = t) : (r.milliseconds = t))
                    : (o = Nn.exec(t))
                      ? ((n = "-" === o[1] ? -1 : 1),
                        (r = {
                          y: 0,
                          d: _(o[en]) * n,
                          h: _(o[nn]) * n,
                          m: _(o[an]) * n,
                          s: _(o[rn]) * n,
                          ms: _(Et(1e3 * o[on])) * n
                        }))
                      : (o = zn.exec(t))
                        ? ((n = "-" === o[1] ? -1 : 1),
                          (r = {
                            y: Jt(o[2], n),
                            M: Jt(o[3], n),
                            w: Jt(o[4], n),
                            d: Jt(o[5], n),
                            h: Jt(o[6], n),
                            m: Jt(o[7], n),
                            s: Jt(o[8], n)
                          }))
                        : null == r
                          ? (r = {})
                          : "object" == typeof r &&
                            ("from" in r || "to" in r) &&
                            ((a = Qt(Nt(r.from), Nt(r.to))),
                            ((r = {}).ms = a.milliseconds),
                            (r.M = a.months)),
                (i = new Vt(r)),
                Ht(t) && d(t, "_locale") && (i._locale = t._locale),
                i
              );
            }
            function Jt(t, e) {
              var n = t && parseFloat(t.replace(",", "."));
              return (isNaN(n) ? 0 : n) * e;
            }
            function Kt(t, e) {
              var n = { milliseconds: 0, months: 0 };
              return (
                (n.months = e.month() - t.month() + 12 * (e.year() - t.year())),
                t
                  .clone()
                  .add(n.months, "M")
                  .isAfter(e) && --n.months,
                (n.milliseconds = +e - +t.clone().add(n.months, "M")),
                n
              );
            }
            function Qt(t, e) {
              var n;
              return t.isValid() && e.isValid()
                ? ((e = qt(e, t)),
                  t.isBefore(e)
                    ? (n = Kt(t, e))
                    : (((n = Kt(e, t)).milliseconds = -n.milliseconds),
                      (n.months = -n.months)),
                  n)
                : { milliseconds: 0, months: 0 };
            }
            function $t(t, e) {
              return function(n, i) {
                var a, r;
                return (
                  null === i ||
                    isNaN(+i) ||
                    (S(
                      e,
                      "moment()." +
                        e +
                        "(period, number) is deprecated. Please use moment()." +
                        e +
                        "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
                    ),
                    (r = n),
                    (n = i),
                    (i = r)),
                  (n = "string" == typeof n ? +n : n),
                  (a = Xt(n, i)),
                  te(this, a, t),
                  this
                );
              };
            }
            function te(t, e, i, a) {
              var r = e._milliseconds,
                o = Et(e._days),
                s = Et(e._months);
              t.isValid() &&
                ((a = null == a || a),
                r && t._d.setTime(t._d.valueOf() + r * i),
                o && W(t, "Date", L(t, "Date") + o * i),
                s && Q(t, L(t, "Month") + s * i),
                a && n.updateOffset(t, o || s));
            }
            function ee(t, e) {
              var n,
                i = 12 * (e.year() - t.year()) + (e.month() - t.month()),
                a = t.clone().add(i, "months");
              return (
                (n =
                  e - a < 0
                    ? (e - a) / (a - t.clone().add(i - 1, "months"))
                    : (e - a) / (t.clone().add(i + 1, "months") - a)),
                -(i + n) || 0
              );
            }
            function ne(t) {
              var e;
              return void 0 === t
                ? this._locale._abbr
                : (null != (e = _t(t)) && (this._locale = e), this);
            }
            function ie() {
              return this._locale;
            }
            function ae(t, e) {
              N(0, [t, t.length], 0, e);
            }
            function re(t, e, n, i, a) {
              var r;
              return null == t
                ? st(this, i, a).year
                : ((r = lt(t, i, a)),
                  e > r && (e = r),
                  oe.call(this, t, e, n, i, a));
            }
            function oe(t, e, n, i, a) {
              var r = ot(t, e, n, i, a),
                o = at(r.year, 0, r.dayOfYear);
              return (
                this.year(o.getUTCFullYear()),
                this.month(o.getUTCMonth()),
                this.date(o.getUTCDate()),
                this
              );
            }
            function se(t) {
              return t;
            }
            function le(t, e, n, i) {
              var a = _t(),
                r = h().set(i, e);
              return a[n](r, t);
            }
            function ue(t, e, n) {
              if ((s(t) && ((e = t), (t = void 0)), (t = t || ""), null != e))
                return le(t, e, n, "month");
              var i,
                a = [];
              for (i = 0; i < 12; i++) a[i] = le(t, i, n, "month");
              return a;
            }
            function de(t, e, n, i) {
              "boolean" == typeof t
                ? (s(e) && ((n = e), (e = void 0)), (e = e || ""))
                : ((n = e = t),
                  (t = !1),
                  s(e) && ((n = e), (e = void 0)),
                  (e = e || ""));
              var a = _t(),
                r = t ? a._week.dow : 0;
              if (null != n) return le(e, (n + r) % 7, i, "day");
              var o,
                l = [];
              for (o = 0; o < 7; o++) l[o] = le(e, (o + r) % 7, i, "day");
              return l;
            }
            function ce(t, e, n, i) {
              var a = Xt(e, n);
              return (
                (t._milliseconds += i * a._milliseconds),
                (t._days += i * a._days),
                (t._months += i * a._months),
                t._bubble()
              );
            }
            function he(t) {
              return t < 0 ? Math.floor(t) : Math.ceil(t);
            }
            function fe(t) {
              return 4800 * t / 146097;
            }
            function ge(t) {
              return 146097 * t / 4800;
            }
            function me(t) {
              return function() {
                return this.as(t);
              };
            }
            function pe(t) {
              return function() {
                return this.isValid() ? this._data[t] : NaN;
              };
            }
            function ve(t, e, n, i, a) {
              return a.relativeTime(e || 1, !!n, t, i);
            }
            function ye(t, e, n) {
              var i = Xt(t).abs(),
                a = hi(i.as("s")),
                r = hi(i.as("m")),
                o = hi(i.as("h")),
                s = hi(i.as("d")),
                l = hi(i.as("M")),
                u = hi(i.as("y")),
                d = (a <= fi.ss && ["s", a]) ||
                  (a < fi.s && ["ss", a]) ||
                  (r <= 1 && ["m"]) ||
                  (r < fi.m && ["mm", r]) ||
                  (o <= 1 && ["h"]) ||
                  (o < fi.h && ["hh", o]) ||
                  (s <= 1 && ["d"]) ||
                  (s < fi.d && ["dd", s]) ||
                  (l <= 1 && ["M"]) ||
                  (l < fi.M && ["MM", l]) ||
                  (u <= 1 && ["y"]) || ["yy", u];
              return (d[2] = e), (d[3] = +t > 0), (d[4] = n), ve.apply(null, d);
            }
            function be() {
              if (!this.isValid()) return this.localeData().invalidDate();
              var t,
                e,
                n,
                i = gi(this._milliseconds) / 1e3,
                a = gi(this._days),
                r = gi(this._months);
              (e = x((t = x(i / 60)) / 60)), (i %= 60), (t %= 60);
              var o = (n = x(r / 12)),
                s = (r %= 12),
                l = a,
                u = e,
                d = t,
                c = i,
                h = this.asSeconds();
              return h
                ? (h < 0 ? "-" : "") +
                    "P" +
                    (o ? o + "Y" : "") +
                    (s ? s + "M" : "") +
                    (l ? l + "D" : "") +
                    (u || d || c ? "T" : "") +
                    (u ? u + "H" : "") +
                    (d ? d + "M" : "") +
                    (c ? c + "S" : "")
                : "P0D";
            }
            var xe,
              _e,
              ke = (_e = Array.prototype.some
                ? Array.prototype.some
                : function(t) {
                    for (
                      var e = Object(this), n = e.length >>> 0, i = 0;
                      i < n;
                      i++
                    )
                      if (i in e && t.call(this, e[i], i, e)) return !0;
                    return !1;
                  }),
              we = (n.momentProperties = []),
              Me = !1,
              Se = {};
            (n.suppressDeprecationWarnings = !1), (n.deprecationHandler = null);
            var De,
              Ce,
              Pe = (De = Object.keys
                ? Object.keys
                : function(t) {
                    var e,
                      n = [];
                    for (e in t) d(t, e) && n.push(e);
                    return n;
                  }),
              Te = {},
              Ae = {},
              Ie = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
              Oe = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
              Fe = {},
              Re = {},
              Le = /\d/,
              We = /\d\d/,
              Ye = /\d{3}/,
              Ne = /\d{4}/,
              ze = /[+-]?\d{6}/,
              Be = /\d\d?/,
              Ve = /\d\d\d\d?/,
              He = /\d\d\d\d\d\d?/,
              Ee = /\d{1,3}/,
              je = /\d{1,4}/,
              Ue = /[+-]?\d{1,6}/,
              qe = /\d+/,
              Ge = /[+-]?\d+/,
              Ze = /Z|[+-]\d\d:?\d\d/gi,
              Xe = /Z|[+-]\d\d(?::?\d\d)?/gi,
              Je = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
              Ke = {},
              Qe = {},
              $e = 0,
              tn = 1,
              en = 2,
              nn = 3,
              an = 4,
              rn = 5,
              on = 6,
              sn = 7,
              ln = 8,
              un = (Ce = Array.prototype.indexOf
                ? Array.prototype.indexOf
                : function(t) {
                    var e;
                    for (e = 0; e < this.length; ++e)
                      if (this[e] === t) return e;
                    return -1;
                  });
            N("M", ["MM", 2], "Mo", function() {
              return this.month() + 1;
            }),
              N("MMM", 0, 0, function(t) {
                return this.localeData().monthsShort(this, t);
              }),
              N("MMMM", 0, 0, function(t) {
                return this.localeData().months(this, t);
              }),
              T("month", "M"),
              O("month", 8),
              E("M", Be),
              E("MM", Be, We),
              E("MMM", function(t, e) {
                return e.monthsShortRegex(t);
              }),
              E("MMMM", function(t, e) {
                return e.monthsRegex(t);
              }),
              G(["M", "MM"], function(t, e) {
                e[tn] = _(t) - 1;
              }),
              G(["MMM", "MMMM"], function(t, e, n, i) {
                var a = n._locale.monthsParse(t, i, n._strict);
                null != a ? (e[tn] = a) : (g(n).invalidMonth = t);
              });
            var dn = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
              cn = "January_February_March_April_May_June_July_August_September_October_November_December".split(
                "_"
              ),
              hn = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
              fn = Je,
              gn = Je;
            N("Y", 0, 0, function() {
              var t = this.year();
              return t <= 9999 ? "" + t : "+" + t;
            }),
              N(0, ["YY", 2], 0, function() {
                return this.year() % 100;
              }),
              N(0, ["YYYY", 4], 0, "year"),
              N(0, ["YYYYY", 5], 0, "year"),
              N(0, ["YYYYYY", 6, !0], 0, "year"),
              T("year", "y"),
              O("year", 1),
              E("Y", Ge),
              E("YY", Be, We),
              E("YYYY", je, Ne),
              E("YYYYY", Ue, ze),
              E("YYYYYY", Ue, ze),
              G(["YYYYY", "YYYYYY"], $e),
              G("YYYY", function(t, e) {
                e[$e] = 2 === t.length ? n.parseTwoDigitYear(t) : _(t);
              }),
              G("YY", function(t, e) {
                e[$e] = n.parseTwoDigitYear(t);
              }),
              G("Y", function(t, e) {
                e[$e] = parseInt(t, 10);
              }),
              (n.parseTwoDigitYear = function(t) {
                return _(t) + (_(t) > 68 ? 1900 : 2e3);
              });
            var mn = R("FullYear", !0);
            N("w", ["ww", 2], "wo", "week"),
              N("W", ["WW", 2], "Wo", "isoWeek"),
              T("week", "w"),
              T("isoWeek", "W"),
              O("week", 5),
              O("isoWeek", 5),
              E("w", Be),
              E("ww", Be, We),
              E("W", Be),
              E("WW", Be, We),
              Z(["w", "ww", "W", "WW"], function(t, e, n, i) {
                e[i.substr(0, 1)] = _(t);
              });
            N("d", 0, "do", "day"),
              N("dd", 0, 0, function(t) {
                return this.localeData().weekdaysMin(this, t);
              }),
              N("ddd", 0, 0, function(t) {
                return this.localeData().weekdaysShort(this, t);
              }),
              N("dddd", 0, 0, function(t) {
                return this.localeData().weekdays(this, t);
              }),
              N("e", 0, 0, "weekday"),
              N("E", 0, 0, "isoWeekday"),
              T("day", "d"),
              T("weekday", "e"),
              T("isoWeekday", "E"),
              O("day", 11),
              O("weekday", 11),
              O("isoWeekday", 11),
              E("d", Be),
              E("e", Be),
              E("E", Be),
              E("dd", function(t, e) {
                return e.weekdaysMinRegex(t);
              }),
              E("ddd", function(t, e) {
                return e.weekdaysShortRegex(t);
              }),
              E("dddd", function(t, e) {
                return e.weekdaysRegex(t);
              }),
              Z(["dd", "ddd", "dddd"], function(t, e, n, i) {
                var a = n._locale.weekdaysParse(t, i, n._strict);
                null != a ? (e.d = a) : (g(n).invalidWeekday = t);
              }),
              Z(["d", "e", "E"], function(t, e, n, i) {
                e[i] = _(t);
              });
            var pn = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
                "_"
              ),
              vn = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
              yn = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
              bn = Je,
              xn = Je,
              _n = Je;
            N("H", ["HH", 2], 0, "hour"),
              N("h", ["hh", 2], 0, ft),
              N("k", ["kk", 2], 0, function() {
                return this.hours() || 24;
              }),
              N("hmm", 0, 0, function() {
                return "" + ft.apply(this) + Y(this.minutes(), 2);
              }),
              N("hmmss", 0, 0, function() {
                return (
                  "" +
                  ft.apply(this) +
                  Y(this.minutes(), 2) +
                  Y(this.seconds(), 2)
                );
              }),
              N("Hmm", 0, 0, function() {
                return "" + this.hours() + Y(this.minutes(), 2);
              }),
              N("Hmmss", 0, 0, function() {
                return (
                  "" +
                  this.hours() +
                  Y(this.minutes(), 2) +
                  Y(this.seconds(), 2)
                );
              }),
              gt("a", !0),
              gt("A", !1),
              T("hour", "h"),
              O("hour", 13),
              E("a", mt),
              E("A", mt),
              E("H", Be),
              E("h", Be),
              E("k", Be),
              E("HH", Be, We),
              E("hh", Be, We),
              E("kk", Be, We),
              E("hmm", Ve),
              E("hmmss", He),
              E("Hmm", Ve),
              E("Hmmss", He),
              G(["H", "HH"], nn),
              G(["k", "kk"], function(t, e, n) {
                var i = _(t);
                e[nn] = 24 === i ? 0 : i;
              }),
              G(["a", "A"], function(t, e, n) {
                (n._isPm = n._locale.isPM(t)), (n._meridiem = t);
              }),
              G(["h", "hh"], function(t, e, n) {
                (e[nn] = _(t)), (g(n).bigHour = !0);
              }),
              G("hmm", function(t, e, n) {
                var i = t.length - 2;
                (e[nn] = _(t.substr(0, i))),
                  (e[an] = _(t.substr(i))),
                  (g(n).bigHour = !0);
              }),
              G("hmmss", function(t, e, n) {
                var i = t.length - 4,
                  a = t.length - 2;
                (e[nn] = _(t.substr(0, i))),
                  (e[an] = _(t.substr(i, 2))),
                  (e[rn] = _(t.substr(a))),
                  (g(n).bigHour = !0);
              }),
              G("Hmm", function(t, e, n) {
                var i = t.length - 2;
                (e[nn] = _(t.substr(0, i))), (e[an] = _(t.substr(i)));
              }),
              G("Hmmss", function(t, e, n) {
                var i = t.length - 4,
                  a = t.length - 2;
                (e[nn] = _(t.substr(0, i))),
                  (e[an] = _(t.substr(i, 2))),
                  (e[rn] = _(t.substr(a)));
              });
            var kn,
              wn = R("Hours", !0),
              Mn = {
                calendar: {
                  sameDay: "[Today at] LT",
                  nextDay: "[Tomorrow at] LT",
                  nextWeek: "dddd [at] LT",
                  lastDay: "[Yesterday at] LT",
                  lastWeek: "[Last] dddd [at] LT",
                  sameElse: "L"
                },
                longDateFormat: {
                  LTS: "h:mm:ss A",
                  LT: "h:mm A",
                  L: "MM/DD/YYYY",
                  LL: "MMMM D, YYYY",
                  LLL: "MMMM D, YYYY h:mm A",
                  LLLL: "dddd, MMMM D, YYYY h:mm A"
                },
                invalidDate: "Invalid date",
                ordinal: "%d",
                dayOfMonthOrdinalParse: /\d{1,2}/,
                relativeTime: {
                  future: "in %s",
                  past: "%s ago",
                  s: "a few seconds",
                  ss: "%d seconds",
                  m: "a minute",
                  mm: "%d minutes",
                  h: "an hour",
                  hh: "%d hours",
                  d: "a day",
                  dd: "%d days",
                  M: "a month",
                  MM: "%d months",
                  y: "a year",
                  yy: "%d years"
                },
                months: cn,
                monthsShort: hn,
                week: { dow: 0, doy: 6 },
                weekdays: pn,
                weekdaysMin: yn,
                weekdaysShort: vn,
                meridiemParse: /[ap]\.?m?\.?/i
              },
              Sn = {},
              Dn = {},
              Cn = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
              Pn = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
              Tn = /Z|[+-]\d\d(?::?\d\d)?/,
              An = [
                ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                ["YYYY-DDD", /\d{4}-\d{3}/],
                ["YYYY-MM", /\d{4}-\d\d/, !1],
                ["YYYYYYMMDD", /[+-]\d{10}/],
                ["YYYYMMDD", /\d{8}/],
                ["GGGG[W]WWE", /\d{4}W\d{3}/],
                ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                ["YYYYDDD", /\d{7}/]
              ],
              In = [
                ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                ["HH:mm", /\d\d:\d\d/],
                ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                ["HHmmss", /\d\d\d\d\d\d/],
                ["HHmm", /\d\d\d\d/],
                ["HH", /\d\d/]
              ],
              On = /^\/?Date\((\-?\d+)/i,
              Fn = /^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;
            (n.createFromInputFallback = M(
              "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
              function(t) {
                t._d = new Date(t._i + (t._useUTC ? " UTC" : ""));
              }
            )),
              (n.ISO_8601 = function() {}),
              (n.RFC_2822 = function() {});
            var Rn = M(
                "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
                function() {
                  var t = Nt.apply(null, arguments);
                  return this.isValid() && t.isValid()
                    ? t < this
                      ? this
                      : t
                    : p();
                }
              ),
              Ln = M(
                "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
                function() {
                  var t = Nt.apply(null, arguments);
                  return this.isValid() && t.isValid()
                    ? t > this
                      ? this
                      : t
                    : p();
                }
              ),
              Wn = [
                "year",
                "quarter",
                "month",
                "week",
                "day",
                "hour",
                "minute",
                "second",
                "millisecond"
              ];
            jt("Z", ":"),
              jt("ZZ", ""),
              E("Z", Xe),
              E("ZZ", Xe),
              G(["Z", "ZZ"], function(t, e, n) {
                (n._useUTC = !0), (n._tzm = Ut(Xe, t));
              });
            var Yn = /([\+\-]|\d\d)/gi;
            n.updateOffset = function() {};
            var Nn = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
              zn = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
            (Xt.fn = Vt.prototype),
              (Xt.invalid = function() {
                return Xt(NaN);
              });
            var Bn = $t(1, "add"),
              Vn = $t(-1, "subtract");
            (n.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ"),
              (n.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]");
            var Hn = M(
              "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
              function(t) {
                return void 0 === t ? this.localeData() : this.locale(t);
              }
            );
            N(0, ["gg", 2], 0, function() {
              return this.weekYear() % 100;
            }),
              N(0, ["GG", 2], 0, function() {
                return this.isoWeekYear() % 100;
              }),
              ae("gggg", "weekYear"),
              ae("ggggg", "weekYear"),
              ae("GGGG", "isoWeekYear"),
              ae("GGGGG", "isoWeekYear"),
              T("weekYear", "gg"),
              T("isoWeekYear", "GG"),
              O("weekYear", 1),
              O("isoWeekYear", 1),
              E("G", Ge),
              E("g", Ge),
              E("GG", Be, We),
              E("gg", Be, We),
              E("GGGG", je, Ne),
              E("gggg", je, Ne),
              E("GGGGG", Ue, ze),
              E("ggggg", Ue, ze),
              Z(["gggg", "ggggg", "GGGG", "GGGGG"], function(t, e, n, i) {
                e[i.substr(0, 2)] = _(t);
              }),
              Z(["gg", "GG"], function(t, e, i, a) {
                e[a] = n.parseTwoDigitYear(t);
              }),
              N("Q", 0, "Qo", "quarter"),
              T("quarter", "Q"),
              O("quarter", 7),
              E("Q", Le),
              G("Q", function(t, e) {
                e[tn] = 3 * (_(t) - 1);
              }),
              N("D", ["DD", 2], "Do", "date"),
              T("date", "D"),
              O("date", 9),
              E("D", Be),
              E("DD", Be, We),
              E("Do", function(t, e) {
                return t
                  ? e._dayOfMonthOrdinalParse || e._ordinalParse
                  : e._dayOfMonthOrdinalParseLenient;
              }),
              G(["D", "DD"], en),
              G("Do", function(t, e) {
                e[en] = _(t.match(Be)[0], 10);
              });
            var En = R("Date", !0);
            N("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
              T("dayOfYear", "DDD"),
              O("dayOfYear", 4),
              E("DDD", Ee),
              E("DDDD", Ye),
              G(["DDD", "DDDD"], function(t, e, n) {
                n._dayOfYear = _(t);
              }),
              N("m", ["mm", 2], 0, "minute"),
              T("minute", "m"),
              O("minute", 14),
              E("m", Be),
              E("mm", Be, We),
              G(["m", "mm"], an);
            var jn = R("Minutes", !1);
            N("s", ["ss", 2], 0, "second"),
              T("second", "s"),
              O("second", 15),
              E("s", Be),
              E("ss", Be, We),
              G(["s", "ss"], rn);
            var Un = R("Seconds", !1);
            N("S", 0, 0, function() {
              return ~~(this.millisecond() / 100);
            }),
              N(0, ["SS", 2], 0, function() {
                return ~~(this.millisecond() / 10);
              }),
              N(0, ["SSS", 3], 0, "millisecond"),
              N(0, ["SSSS", 4], 0, function() {
                return 10 * this.millisecond();
              }),
              N(0, ["SSSSS", 5], 0, function() {
                return 100 * this.millisecond();
              }),
              N(0, ["SSSSSS", 6], 0, function() {
                return 1e3 * this.millisecond();
              }),
              N(0, ["SSSSSSS", 7], 0, function() {
                return 1e4 * this.millisecond();
              }),
              N(0, ["SSSSSSSS", 8], 0, function() {
                return 1e5 * this.millisecond();
              }),
              N(0, ["SSSSSSSSS", 9], 0, function() {
                return 1e6 * this.millisecond();
              }),
              T("millisecond", "ms"),
              O("millisecond", 16),
              E("S", Ee, Le),
              E("SS", Ee, We),
              E("SSS", Ee, Ye);
            var qn;
            for (qn = "SSSS"; qn.length <= 9; qn += "S") E(qn, qe);
            for (qn = "S"; qn.length <= 9; qn += "S")
              G(qn, function(t, e) {
                e[on] = _(1e3 * ("0." + t));
              });
            var Gn = R("Milliseconds", !1);
            N("z", 0, 0, "zoneAbbr"), N("zz", 0, 0, "zoneName");
            var Zn = y.prototype;
            (Zn.add = Bn),
              (Zn.calendar = function(t, e) {
                var i = t || Nt(),
                  a = qt(i, this).startOf("day"),
                  r = n.calendarFormat(this, a) || "sameElse",
                  o = e && (D(e[r]) ? e[r].call(this, i) : e[r]);
                return this.format(
                  o || this.localeData().calendar(r, this, Nt(i))
                );
              }),
              (Zn.clone = function() {
                return new y(this);
              }),
              (Zn.diff = function(t, e, n) {
                var i, a, r, o;
                return this.isValid() && (i = qt(t, this)).isValid()
                  ? ((a = 6e4 * (i.utcOffset() - this.utcOffset())),
                    "year" === (e = A(e)) || "month" === e || "quarter" === e
                      ? ((o = ee(this, i)),
                        "quarter" === e ? (o /= 3) : "year" === e && (o /= 12))
                      : ((r = this - i),
                        (o =
                          "second" === e
                            ? r / 1e3
                            : "minute" === e
                              ? r / 6e4
                              : "hour" === e
                                ? r / 36e5
                                : "day" === e
                                  ? (r - a) / 864e5
                                  : "week" === e
                                    ? (r - a) / 6048e5
                                    : r)),
                    n ? o : x(o))
                  : NaN;
              }),
              (Zn.endOf = function(t) {
                return void 0 === (t = A(t)) || "millisecond" === t
                  ? this
                  : ("date" === t && (t = "day"),
                    this.startOf(t)
                      .add(1, "isoWeek" === t ? "week" : t)
                      .subtract(1, "ms"));
              }),
              (Zn.format = function(t) {
                t || (t = this.isUtc() ? n.defaultFormatUtc : n.defaultFormat);
                var e = V(this, t);
                return this.localeData().postformat(e);
              }),
              (Zn.from = function(t, e) {
                return this.isValid() &&
                  ((b(t) && t.isValid()) || Nt(t).isValid())
                  ? Xt({ to: this, from: t })
                      .locale(this.locale())
                      .humanize(!e)
                  : this.localeData().invalidDate();
              }),
              (Zn.fromNow = function(t) {
                return this.from(Nt(), t);
              }),
              (Zn.to = function(t, e) {
                return this.isValid() &&
                  ((b(t) && t.isValid()) || Nt(t).isValid())
                  ? Xt({ from: this, to: t })
                      .locale(this.locale())
                      .humanize(!e)
                  : this.localeData().invalidDate();
              }),
              (Zn.toNow = function(t) {
                return this.to(Nt(), t);
              }),
              (Zn.get = function(t) {
                return (t = A(t)), D(this[t]) ? this[t]() : this;
              }),
              (Zn.invalidAt = function() {
                return g(this).overflow;
              }),
              (Zn.isAfter = function(t, e) {
                var n = b(t) ? t : Nt(t);
                return (
                  !(!this.isValid() || !n.isValid()) &&
                  ("millisecond" === (e = A(o(e) ? "millisecond" : e))
                    ? this.valueOf() > n.valueOf()
                    : n.valueOf() <
                      this.clone()
                        .startOf(e)
                        .valueOf())
                );
              }),
              (Zn.isBefore = function(t, e) {
                var n = b(t) ? t : Nt(t);
                return (
                  !(!this.isValid() || !n.isValid()) &&
                  ("millisecond" === (e = A(o(e) ? "millisecond" : e))
                    ? this.valueOf() < n.valueOf()
                    : this.clone()
                        .endOf(e)
                        .valueOf() < n.valueOf())
                );
              }),
              (Zn.isBetween = function(t, e, n, i) {
                return (
                  ("(" === (i = i || "()")[0]
                    ? this.isAfter(t, n)
                    : !this.isBefore(t, n)) &&
                  (")" === i[1] ? this.isBefore(e, n) : !this.isAfter(e, n))
                );
              }),
              (Zn.isSame = function(t, e) {
                var n,
                  i = b(t) ? t : Nt(t);
                return (
                  !(!this.isValid() || !i.isValid()) &&
                  ("millisecond" === (e = A(e || "millisecond"))
                    ? this.valueOf() === i.valueOf()
                    : ((n = i.valueOf()),
                      this.clone()
                        .startOf(e)
                        .valueOf() <= n &&
                        n <=
                          this.clone()
                            .endOf(e)
                            .valueOf()))
                );
              }),
              (Zn.isSameOrAfter = function(t, e) {
                return this.isSame(t, e) || this.isAfter(t, e);
              }),
              (Zn.isSameOrBefore = function(t, e) {
                return this.isSame(t, e) || this.isBefore(t, e);
              }),
              (Zn.isValid = function() {
                return m(this);
              }),
              (Zn.lang = Hn),
              (Zn.locale = ne),
              (Zn.localeData = ie),
              (Zn.max = Ln),
              (Zn.min = Rn),
              (Zn.parsingFlags = function() {
                return c({}, g(this));
              }),
              (Zn.set = function(t, e) {
                if ("object" == typeof t)
                  for (var n = F((t = I(t))), i = 0; i < n.length; i++)
                    this[n[i].unit](t[n[i].unit]);
                else if (((t = A(t)), D(this[t]))) return this[t](e);
                return this;
              }),
              (Zn.startOf = function(t) {
                switch ((t = A(t))) {
                  case "year":
                    this.month(0);
                  case "quarter":
                  case "month":
                    this.date(1);
                  case "week":
                  case "isoWeek":
                  case "day":
                  case "date":
                    this.hours(0);
                  case "hour":
                    this.minutes(0);
                  case "minute":
                    this.seconds(0);
                  case "second":
                    this.milliseconds(0);
                }
                return (
                  "week" === t && this.weekday(0),
                  "isoWeek" === t && this.isoWeekday(1),
                  "quarter" === t &&
                    this.month(3 * Math.floor(this.month() / 3)),
                  this
                );
              }),
              (Zn.subtract = Vn),
              (Zn.toArray = function() {
                var t = this;
                return [
                  t.year(),
                  t.month(),
                  t.date(),
                  t.hour(),
                  t.minute(),
                  t.second(),
                  t.millisecond()
                ];
              }),
              (Zn.toObject = function() {
                var t = this;
                return {
                  years: t.year(),
                  months: t.month(),
                  date: t.date(),
                  hours: t.hours(),
                  minutes: t.minutes(),
                  seconds: t.seconds(),
                  milliseconds: t.milliseconds()
                };
              }),
              (Zn.toDate = function() {
                return new Date(this.valueOf());
              }),
              (Zn.toISOString = function() {
                if (!this.isValid()) return null;
                var t = this.clone().utc();
                return t.year() < 0 || t.year() > 9999
                  ? V(t, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
                  : D(Date.prototype.toISOString)
                    ? this.toDate().toISOString()
                    : V(t, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
              }),
              (Zn.inspect = function() {
                if (!this.isValid())
                  return "moment.invalid(/* " + this._i + " */)";
                var t = "moment",
                  e = "";
                this.isLocal() ||
                  ((t =
                    0 === this.utcOffset() ? "moment.utc" : "moment.parseZone"),
                  (e = "Z"));
                var n = "[" + t + '("]',
                  i =
                    0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
                  a = e + '[")]';
                return this.format(n + i + "-MM-DD[T]HH:mm:ss.SSS" + a);
              }),
              (Zn.toJSON = function() {
                return this.isValid() ? this.toISOString() : null;
              }),
              (Zn.toString = function() {
                return this.clone()
                  .locale("en")
                  .format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
              }),
              (Zn.unix = function() {
                return Math.floor(this.valueOf() / 1e3);
              }),
              (Zn.valueOf = function() {
                return this._d.valueOf() - 6e4 * (this._offset || 0);
              }),
              (Zn.creationData = function() {
                return {
                  input: this._i,
                  format: this._f,
                  locale: this._locale,
                  isUTC: this._isUTC,
                  strict: this._strict
                };
              }),
              (Zn.year = mn),
              (Zn.isLeapYear = function() {
                return nt(this.year());
              }),
              (Zn.weekYear = function(t) {
                return re.call(
                  this,
                  t,
                  this.week(),
                  this.weekday(),
                  this.localeData()._week.dow,
                  this.localeData()._week.doy
                );
              }),
              (Zn.isoWeekYear = function(t) {
                return re.call(
                  this,
                  t,
                  this.isoWeek(),
                  this.isoWeekday(),
                  1,
                  4
                );
              }),
              (Zn.quarter = Zn.quarters = function(t) {
                return null == t
                  ? Math.ceil((this.month() + 1) / 3)
                  : this.month(3 * (t - 1) + this.month() % 3);
              }),
              (Zn.month = $),
              (Zn.daysInMonth = function() {
                return J(this.year(), this.month());
              }),
              (Zn.week = Zn.weeks = function(t) {
                var e = this.localeData().week(this);
                return null == t ? e : this.add(7 * (t - e), "d");
              }),
              (Zn.isoWeek = Zn.isoWeeks = function(t) {
                var e = st(this, 1, 4).week;
                return null == t ? e : this.add(7 * (t - e), "d");
              }),
              (Zn.weeksInYear = function() {
                var t = this.localeData()._week;
                return lt(this.year(), t.dow, t.doy);
              }),
              (Zn.isoWeeksInYear = function() {
                return lt(this.year(), 1, 4);
              }),
              (Zn.date = En),
              (Zn.day = Zn.days = function(t) {
                if (!this.isValid()) return null != t ? this : NaN;
                var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return null != t
                  ? ((t = ut(t, this.localeData())), this.add(t - e, "d"))
                  : e;
              }),
              (Zn.weekday = function(t) {
                if (!this.isValid()) return null != t ? this : NaN;
                var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
                return null == t ? e : this.add(t - e, "d");
              }),
              (Zn.isoWeekday = function(t) {
                if (!this.isValid()) return null != t ? this : NaN;
                if (null != t) {
                  var e = dt(t, this.localeData());
                  return this.day(this.day() % 7 ? e : e - 7);
                }
                return this.day() || 7;
              }),
              (Zn.dayOfYear = function(t) {
                var e =
                  Math.round(
                    (this.clone().startOf("day") -
                      this.clone().startOf("year")) /
                      864e5
                  ) + 1;
                return null == t ? e : this.add(t - e, "d");
              }),
              (Zn.hour = Zn.hours = wn),
              (Zn.minute = Zn.minutes = jn),
              (Zn.second = Zn.seconds = Un),
              (Zn.millisecond = Zn.milliseconds = Gn),
              (Zn.utcOffset = function(t, e, i) {
                var a,
                  r = this._offset || 0;
                if (!this.isValid()) return null != t ? this : NaN;
                if (null != t) {
                  if ("string" == typeof t) {
                    if (null === (t = Ut(Xe, t))) return this;
                  } else Math.abs(t) < 16 && !i && (t *= 60);
                  return (
                    !this._isUTC && e && (a = Gt(this)),
                    (this._offset = t),
                    (this._isUTC = !0),
                    null != a && this.add(a, "m"),
                    r !== t &&
                      (!e || this._changeInProgress
                        ? te(this, Xt(t - r, "m"), 1, !1)
                        : this._changeInProgress ||
                          ((this._changeInProgress = !0),
                          n.updateOffset(this, !0),
                          (this._changeInProgress = null))),
                    this
                  );
                }
                return this._isUTC ? r : Gt(this);
              }),
              (Zn.utc = function(t) {
                return this.utcOffset(0, t);
              }),
              (Zn.local = function(t) {
                return (
                  this._isUTC &&
                    (this.utcOffset(0, t),
                    (this._isUTC = !1),
                    t && this.subtract(Gt(this), "m")),
                  this
                );
              }),
              (Zn.parseZone = function() {
                if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
                else if ("string" == typeof this._i) {
                  var t = Ut(Ze, this._i);
                  null != t ? this.utcOffset(t) : this.utcOffset(0, !0);
                }
                return this;
              }),
              (Zn.hasAlignedHourOffset = function(t) {
                return (
                  !!this.isValid() &&
                  ((t = t ? Nt(t).utcOffset() : 0),
                  (this.utcOffset() - t) % 60 == 0)
                );
              }),
              (Zn.isDST = function() {
                return (
                  this.utcOffset() >
                    this.clone()
                      .month(0)
                      .utcOffset() ||
                  this.utcOffset() >
                    this.clone()
                      .month(5)
                      .utcOffset()
                );
              }),
              (Zn.isLocal = function() {
                return !!this.isValid() && !this._isUTC;
              }),
              (Zn.isUtcOffset = function() {
                return !!this.isValid() && this._isUTC;
              }),
              (Zn.isUtc = Zt),
              (Zn.isUTC = Zt),
              (Zn.zoneAbbr = function() {
                return this._isUTC ? "UTC" : "";
              }),
              (Zn.zoneName = function() {
                return this._isUTC ? "Coordinated Universal Time" : "";
              }),
              (Zn.dates = M(
                "dates accessor is deprecated. Use date instead.",
                En
              )),
              (Zn.months = M(
                "months accessor is deprecated. Use month instead",
                $
              )),
              (Zn.years = M(
                "years accessor is deprecated. Use year instead",
                mn
              )),
              (Zn.zone = M(
                "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
                function(t, e) {
                  return null != t
                    ? ("string" != typeof t && (t = -t),
                      this.utcOffset(t, e),
                      this)
                    : -this.utcOffset();
                }
              )),
              (Zn.isDSTShifted = M(
                "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
                function() {
                  if (!o(this._isDSTShifted)) return this._isDSTShifted;
                  var t = {};
                  if ((v(t, this), (t = Lt(t))._a)) {
                    var e = t._isUTC ? h(t._a) : Nt(t._a);
                    this._isDSTShifted =
                      this.isValid() && k(t._a, e.toArray()) > 0;
                  } else this._isDSTShifted = !1;
                  return this._isDSTShifted;
                }
              ));
            var Xn = P.prototype;
            (Xn.calendar = function(t, e, n) {
              var i = this._calendar[t] || this._calendar.sameElse;
              return D(i) ? i.call(e, n) : i;
            }),
              (Xn.longDateFormat = function(t) {
                var e = this._longDateFormat[t],
                  n = this._longDateFormat[t.toUpperCase()];
                return e || !n
                  ? e
                  : ((this._longDateFormat[t] = n.replace(
                      /MMMM|MM|DD|dddd/g,
                      function(t) {
                        return t.slice(1);
                      }
                    )),
                    this._longDateFormat[t]);
              }),
              (Xn.invalidDate = function() {
                return this._invalidDate;
              }),
              (Xn.ordinal = function(t) {
                return this._ordinal.replace("%d", t);
              }),
              (Xn.preparse = se),
              (Xn.postformat = se),
              (Xn.relativeTime = function(t, e, n, i) {
                var a = this._relativeTime[n];
                return D(a) ? a(t, e, n, i) : a.replace(/%d/i, t);
              }),
              (Xn.pastFuture = function(t, e) {
                var n = this._relativeTime[t > 0 ? "future" : "past"];
                return D(n) ? n(e) : n.replace(/%s/i, e);
              }),
              (Xn.set = function(t) {
                var e, n;
                for (n in t)
                  D((e = t[n])) ? (this[n] = e) : (this["_" + n] = e);
                (this._config = t),
                  (this._dayOfMonthOrdinalParseLenient = new RegExp(
                    (this._dayOfMonthOrdinalParse.source ||
                      this._ordinalParse.source) +
                      "|" +
                      /\d{1,2}/.source
                  ));
              }),
              (Xn.months = function(t, e) {
                return t
                  ? i(this._months)
                    ? this._months[t.month()]
                    : this._months[
                        (this._months.isFormat || dn).test(e)
                          ? "format"
                          : "standalone"
                      ][t.month()]
                  : i(this._months)
                    ? this._months
                    : this._months.standalone;
              }),
              (Xn.monthsShort = function(t, e) {
                return t
                  ? i(this._monthsShort)
                    ? this._monthsShort[t.month()]
                    : this._monthsShort[dn.test(e) ? "format" : "standalone"][
                        t.month()
                      ]
                  : i(this._monthsShort)
                    ? this._monthsShort
                    : this._monthsShort.standalone;
              }),
              (Xn.monthsParse = function(t, e, n) {
                var i, a, r;
                if (this._monthsParseExact) return K.call(this, t, e, n);
                for (
                  this._monthsParse ||
                    ((this._monthsParse = []),
                    (this._longMonthsParse = []),
                    (this._shortMonthsParse = [])),
                    i = 0;
                  i < 12;
                  i++
                ) {
                  if (
                    ((a = h([2e3, i])),
                    n &&
                      !this._longMonthsParse[i] &&
                      ((this._longMonthsParse[i] = new RegExp(
                        "^" + this.months(a, "").replace(".", "") + "$",
                        "i"
                      )),
                      (this._shortMonthsParse[i] = new RegExp(
                        "^" + this.monthsShort(a, "").replace(".", "") + "$",
                        "i"
                      ))),
                    n ||
                      this._monthsParse[i] ||
                      ((r =
                        "^" +
                        this.months(a, "") +
                        "|^" +
                        this.monthsShort(a, "")),
                      (this._monthsParse[i] = new RegExp(
                        r.replace(".", ""),
                        "i"
                      ))),
                    n && "MMMM" === e && this._longMonthsParse[i].test(t))
                  )
                    return i;
                  if (n && "MMM" === e && this._shortMonthsParse[i].test(t))
                    return i;
                  if (!n && this._monthsParse[i].test(t)) return i;
                }
              }),
              (Xn.monthsRegex = function(t) {
                return this._monthsParseExact
                  ? (d(this, "_monthsRegex") || tt.call(this),
                    t ? this._monthsStrictRegex : this._monthsRegex)
                  : (d(this, "_monthsRegex") || (this._monthsRegex = gn),
                    this._monthsStrictRegex && t
                      ? this._monthsStrictRegex
                      : this._monthsRegex);
              }),
              (Xn.monthsShortRegex = function(t) {
                return this._monthsParseExact
                  ? (d(this, "_monthsRegex") || tt.call(this),
                    t ? this._monthsShortStrictRegex : this._monthsShortRegex)
                  : (d(this, "_monthsShortRegex") ||
                      (this._monthsShortRegex = fn),
                    this._monthsShortStrictRegex && t
                      ? this._monthsShortStrictRegex
                      : this._monthsShortRegex);
              }),
              (Xn.week = function(t) {
                return st(t, this._week.dow, this._week.doy).week;
              }),
              (Xn.firstDayOfYear = function() {
                return this._week.doy;
              }),
              (Xn.firstDayOfWeek = function() {
                return this._week.dow;
              }),
              (Xn.weekdays = function(t, e) {
                return t
                  ? i(this._weekdays)
                    ? this._weekdays[t.day()]
                    : this._weekdays[
                        this._weekdays.isFormat.test(e)
                          ? "format"
                          : "standalone"
                      ][t.day()]
                  : i(this._weekdays)
                    ? this._weekdays
                    : this._weekdays.standalone;
              }),
              (Xn.weekdaysMin = function(t) {
                return t ? this._weekdaysMin[t.day()] : this._weekdaysMin;
              }),
              (Xn.weekdaysShort = function(t) {
                return t ? this._weekdaysShort[t.day()] : this._weekdaysShort;
              }),
              (Xn.weekdaysParse = function(t, e, n) {
                var i, a, r;
                if (this._weekdaysParseExact) return ct.call(this, t, e, n);
                for (
                  this._weekdaysParse ||
                    ((this._weekdaysParse = []),
                    (this._minWeekdaysParse = []),
                    (this._shortWeekdaysParse = []),
                    (this._fullWeekdaysParse = [])),
                    i = 0;
                  i < 7;
                  i++
                ) {
                  if (
                    ((a = h([2e3, 1]).day(i)),
                    n &&
                      !this._fullWeekdaysParse[i] &&
                      ((this._fullWeekdaysParse[i] = new RegExp(
                        "^" + this.weekdays(a, "").replace(".", ".?") + "$",
                        "i"
                      )),
                      (this._shortWeekdaysParse[i] = new RegExp(
                        "^" +
                          this.weekdaysShort(a, "").replace(".", ".?") +
                          "$",
                        "i"
                      )),
                      (this._minWeekdaysParse[i] = new RegExp(
                        "^" + this.weekdaysMin(a, "").replace(".", ".?") + "$",
                        "i"
                      ))),
                    this._weekdaysParse[i] ||
                      ((r =
                        "^" +
                        this.weekdays(a, "") +
                        "|^" +
                        this.weekdaysShort(a, "") +
                        "|^" +
                        this.weekdaysMin(a, "")),
                      (this._weekdaysParse[i] = new RegExp(
                        r.replace(".", ""),
                        "i"
                      ))),
                    n && "dddd" === e && this._fullWeekdaysParse[i].test(t))
                  )
                    return i;
                  if (n && "ddd" === e && this._shortWeekdaysParse[i].test(t))
                    return i;
                  if (n && "dd" === e && this._minWeekdaysParse[i].test(t))
                    return i;
                  if (!n && this._weekdaysParse[i].test(t)) return i;
                }
              }),
              (Xn.weekdaysRegex = function(t) {
                return this._weekdaysParseExact
                  ? (d(this, "_weekdaysRegex") || ht.call(this),
                    t ? this._weekdaysStrictRegex : this._weekdaysRegex)
                  : (d(this, "_weekdaysRegex") || (this._weekdaysRegex = bn),
                    this._weekdaysStrictRegex && t
                      ? this._weekdaysStrictRegex
                      : this._weekdaysRegex);
              }),
              (Xn.weekdaysShortRegex = function(t) {
                return this._weekdaysParseExact
                  ? (d(this, "_weekdaysRegex") || ht.call(this),
                    t
                      ? this._weekdaysShortStrictRegex
                      : this._weekdaysShortRegex)
                  : (d(this, "_weekdaysShortRegex") ||
                      (this._weekdaysShortRegex = xn),
                    this._weekdaysShortStrictRegex && t
                      ? this._weekdaysShortStrictRegex
                      : this._weekdaysShortRegex);
              }),
              (Xn.weekdaysMinRegex = function(t) {
                return this._weekdaysParseExact
                  ? (d(this, "_weekdaysRegex") || ht.call(this),
                    t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
                  : (d(this, "_weekdaysMinRegex") ||
                      (this._weekdaysMinRegex = _n),
                    this._weekdaysMinStrictRegex && t
                      ? this._weekdaysMinStrictRegex
                      : this._weekdaysMinRegex);
              }),
              (Xn.isPM = function(t) {
                return "p" === (t + "").toLowerCase().charAt(0);
              }),
              (Xn.meridiem = function(t, e, n) {
                return t > 11 ? (n ? "pm" : "PM") : n ? "am" : "AM";
              }),
              bt("en", {
                dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function(t) {
                  var e = t % 10;
                  return (
                    t +
                    (1 === _((t % 100) / 10)
                      ? "th"
                      : 1 === e
                        ? "st"
                        : 2 === e
                          ? "nd"
                          : 3 === e
                            ? "rd"
                            : "th")
                  );
                }
              }),
              (n.lang = M(
                "moment.lang is deprecated. Use moment.locale instead.",
                bt
              )),
              (n.langData = M(
                "moment.langData is deprecated. Use moment.localeData instead.",
                _t
              ));
            var Jn = Math.abs,
              Kn = me("ms"),
              Qn = me("s"),
              $n = me("m"),
              ti = me("h"),
              ei = me("d"),
              ni = me("w"),
              ii = me("M"),
              ai = me("y"),
              ri = pe("milliseconds"),
              oi = pe("seconds"),
              si = pe("minutes"),
              li = pe("hours"),
              ui = pe("days"),
              di = pe("months"),
              ci = pe("years"),
              hi = Math.round,
              fi = { ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11 },
              gi = Math.abs,
              mi = Vt.prototype;
            return (
              (mi.isValid = function() {
                return this._isValid;
              }),
              (mi.abs = function() {
                var t = this._data;
                return (
                  (this._milliseconds = Jn(this._milliseconds)),
                  (this._days = Jn(this._days)),
                  (this._months = Jn(this._months)),
                  (t.milliseconds = Jn(t.milliseconds)),
                  (t.seconds = Jn(t.seconds)),
                  (t.minutes = Jn(t.minutes)),
                  (t.hours = Jn(t.hours)),
                  (t.months = Jn(t.months)),
                  (t.years = Jn(t.years)),
                  this
                );
              }),
              (mi.add = function(t, e) {
                return ce(this, t, e, 1);
              }),
              (mi.subtract = function(t, e) {
                return ce(this, t, e, -1);
              }),
              (mi.as = function(t) {
                if (!this.isValid()) return NaN;
                var e,
                  n,
                  i = this._milliseconds;
                if ("month" === (t = A(t)) || "year" === t)
                  return (
                    (e = this._days + i / 864e5),
                    (n = this._months + fe(e)),
                    "month" === t ? n : n / 12
                  );
                switch (((e = this._days + Math.round(ge(this._months))), t)) {
                  case "week":
                    return e / 7 + i / 6048e5;
                  case "day":
                    return e + i / 864e5;
                  case "hour":
                    return 24 * e + i / 36e5;
                  case "minute":
                    return 1440 * e + i / 6e4;
                  case "second":
                    return 86400 * e + i / 1e3;
                  case "millisecond":
                    return Math.floor(864e5 * e) + i;
                  default:
                    throw new Error("Unknown unit " + t);
                }
              }),
              (mi.asMilliseconds = Kn),
              (mi.asSeconds = Qn),
              (mi.asMinutes = $n),
              (mi.asHours = ti),
              (mi.asDays = ei),
              (mi.asWeeks = ni),
              (mi.asMonths = ii),
              (mi.asYears = ai),
              (mi.valueOf = function() {
                return this.isValid()
                  ? this._milliseconds +
                      864e5 * this._days +
                      (this._months % 12) * 2592e6 +
                      31536e6 * _(this._months / 12)
                  : NaN;
              }),
              (mi._bubble = function() {
                var t,
                  e,
                  n,
                  i,
                  a,
                  r = this._milliseconds,
                  o = this._days,
                  s = this._months,
                  l = this._data;
                return (
                  (r >= 0 && o >= 0 && s >= 0) ||
                    (r <= 0 && o <= 0 && s <= 0) ||
                    ((r += 864e5 * he(ge(s) + o)), (o = 0), (s = 0)),
                  (l.milliseconds = r % 1e3),
                  (t = x(r / 1e3)),
                  (l.seconds = t % 60),
                  (e = x(t / 60)),
                  (l.minutes = e % 60),
                  (n = x(e / 60)),
                  (l.hours = n % 24),
                  (o += x(n / 24)),
                  (a = x(fe(o))),
                  (s += a),
                  (o -= he(ge(a))),
                  (i = x(s / 12)),
                  (s %= 12),
                  (l.days = o),
                  (l.months = s),
                  (l.years = i),
                  this
                );
              }),
              (mi.get = function(t) {
                return (t = A(t)), this.isValid() ? this[t + "s"]() : NaN;
              }),
              (mi.milliseconds = ri),
              (mi.seconds = oi),
              (mi.minutes = si),
              (mi.hours = li),
              (mi.days = ui),
              (mi.weeks = function() {
                return x(this.days() / 7);
              }),
              (mi.months = di),
              (mi.years = ci),
              (mi.humanize = function(t) {
                if (!this.isValid()) return this.localeData().invalidDate();
                var e = this.localeData(),
                  n = ye(this, !t, e);
                return t && (n = e.pastFuture(+this, n)), e.postformat(n);
              }),
              (mi.toISOString = be),
              (mi.toString = be),
              (mi.toJSON = be),
              (mi.locale = ne),
              (mi.localeData = ie),
              (mi.toIsoString = M(
                "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
                be
              )),
              (mi.lang = Hn),
              N("X", 0, 0, "unix"),
              N("x", 0, 0, "valueOf"),
              E("x", Ge),
              E("X", /[+-]?\d+(\.\d{1,3})?/),
              G("X", function(t, e, n) {
                n._d = new Date(1e3 * parseFloat(t, 10));
              }),
              G("x", function(t, e, n) {
                n._d = new Date(_(t));
              }),
              (n.version = "2.18.1"),
              (function(t) {
                xe = t;
              })(Nt),
              (n.fn = Zn),
              (n.min = function() {
                return zt("isBefore", [].slice.call(arguments, 0));
              }),
              (n.max = function() {
                return zt("isAfter", [].slice.call(arguments, 0));
              }),
              (n.now = function() {
                return Date.now ? Date.now() : +new Date();
              }),
              (n.utc = h),
              (n.unix = function(t) {
                return Nt(1e3 * t);
              }),
              (n.months = function(t, e) {
                return ue(t, e, "months");
              }),
              (n.isDate = l),
              (n.locale = bt),
              (n.invalid = p),
              (n.duration = Xt),
              (n.isMoment = b),
              (n.weekdays = function(t, e, n) {
                return de(t, e, n, "weekdays");
              }),
              (n.parseZone = function() {
                return Nt.apply(null, arguments).parseZone();
              }),
              (n.localeData = _t),
              (n.isDuration = Ht),
              (n.monthsShort = function(t, e) {
                return ue(t, e, "monthsShort");
              }),
              (n.weekdaysMin = function(t, e, n) {
                return de(t, e, n, "weekdaysMin");
              }),
              (n.defineLocale = xt),
              (n.updateLocale = function(t, e) {
                if (null != e) {
                  var n,
                    i = Mn;
                  null != Sn[t] && (i = Sn[t]._config),
                    ((n = new P((e = C(i, e)))).parentLocale = Sn[t]),
                    (Sn[t] = n),
                    bt(t);
                } else
                  null != Sn[t] &&
                    (null != Sn[t].parentLocale
                      ? (Sn[t] = Sn[t].parentLocale)
                      : null != Sn[t] && delete Sn[t]);
                return Sn[t];
              }),
              (n.locales = function() {
                return Pe(Sn);
              }),
              (n.weekdaysShort = function(t, e, n) {
                return de(t, e, n, "weekdaysShort");
              }),
              (n.normalizeUnits = A),
              (n.relativeTimeRounding = function(t) {
                return void 0 === t
                  ? hi
                  : "function" == typeof t && ((hi = t), !0);
              }),
              (n.relativeTimeThreshold = function(t, e) {
                return (
                  void 0 !== fi[t] &&
                  (void 0 === e
                    ? fi[t]
                    : ((fi[t] = e), "s" === t && (fi.ss = e - 1), !0))
                );
              }),
              (n.calendarFormat = function(t, e) {
                var n = t.diff(e, "days", !0);
                return n < -6
                  ? "sameElse"
                  : n < -1
                    ? "lastWeek"
                    : n < 0
                      ? "lastDay"
                      : n < 1
                        ? "sameDay"
                        : n < 2
                          ? "nextDay"
                          : n < 7
                            ? "nextWeek"
                            : "sameElse";
              }),
              (n.prototype = Zn),
              n
            );
          });
        },
        {}
      ],
      7: [
        function(t, e, n) {
          var i = t(29)();
          (i.helpers = t(45)),
            t(27)(i),
            (i.defaults = t(25)),
            (i.Element = t(26)),
            (i.elements = t(40)),
            (i.Interaction = t(28)),
            (i.platform = t(48)),
            t(31)(i),
            t(22)(i),
            t(23)(i),
            t(24)(i),
            t(30)(i),
            t(33)(i),
            t(32)(i),
            t(35)(i),
            t(54)(i),
            t(52)(i),
            t(53)(i),
            t(55)(i),
            t(56)(i),
            t(57)(i),
            t(15)(i),
            t(16)(i),
            t(17)(i),
            t(18)(i),
            t(19)(i),
            t(20)(i),
            t(21)(i),
            t(8)(i),
            t(9)(i),
            t(10)(i),
            t(11)(i),
            t(12)(i),
            t(13)(i),
            t(14)(i);
          var a = [];
          a.push(t(49)(i), t(50)(i), t(51)(i)),
            i.plugins.register(a),
            i.platform.initialize(),
            (e.exports = i),
            "undefined" != typeof window && (window.Chart = i),
            (i.canvasHelpers = i.helpers.canvas);
        },
        {
          10: 10,
          11: 11,
          12: 12,
          13: 13,
          14: 14,
          15: 15,
          16: 16,
          17: 17,
          18: 18,
          19: 19,
          20: 20,
          21: 21,
          22: 22,
          23: 23,
          24: 24,
          25: 25,
          26: 26,
          27: 27,
          28: 28,
          29: 29,
          30: 30,
          31: 31,
          32: 32,
          33: 33,
          35: 35,
          40: 40,
          45: 45,
          48: 48,
          49: 49,
          50: 50,
          51: 51,
          52: 52,
          53: 53,
          54: 54,
          55: 55,
          56: 56,
          57: 57,
          8: 8,
          9: 9
        }
      ],
      8: [
        function(t, e, n) {
          "use strict";
          e.exports = function(t) {
            t.Bar = function(e, n) {
              return (n.type = "bar"), new t(e, n);
            };
          };
        },
        {}
      ],
      9: [
        function(t, e, n) {
          "use strict";
          e.exports = function(t) {
            t.Bubble = function(e, n) {
              return (n.type = "bubble"), new t(e, n);
            };
          };
        },
        {}
      ],
      10: [
        function(t, e, n) {
          "use strict";
          e.exports = function(t) {
            t.Doughnut = function(e, n) {
              return (n.type = "doughnut"), new t(e, n);
            };
          };
        },
        {}
      ],
      11: [
        function(t, e, n) {
          "use strict";
          e.exports = function(t) {
            t.Line = function(e, n) {
              return (n.type = "line"), new t(e, n);
            };
          };
        },
        {}
      ],
      12: [
        function(t, e, n) {
          "use strict";
          e.exports = function(t) {
            t.PolarArea = function(e, n) {
              return (n.type = "polarArea"), new t(e, n);
            };
          };
        },
        {}
      ],
      13: [
        function(t, e, n) {
          "use strict";
          e.exports = function(t) {
            t.Radar = function(e, n) {
              return (n.type = "radar"), new t(e, n);
            };
          };
        },
        {}
      ],
      14: [
        function(t, e, n) {
          "use strict";
          e.exports = function(t) {
            t.Scatter = function(e, n) {
              return (n.type = "scatter"), new t(e, n);
            };
          };
        },
        {}
      ],
      15: [
        function(t, e, n) {
          "use strict";
          var i = t(25),
            a = t(40),
            r = t(45);
          i._set("bar", {
            hover: { mode: "label" },
            scales: {
              xAxes: [
                {
                  type: "category",
                  categoryPercentage: 0.8,
                  barPercentage: 0.9,
                  offset: !0,
                  gridLines: { offsetGridLines: !0 }
                }
              ],
              yAxes: [{ type: "linear" }]
            }
          }),
            i._set("horizontalBar", {
              hover: { mode: "index", axis: "y" },
              scales: {
                xAxes: [{ type: "linear", position: "bottom" }],
                yAxes: [
                  {
                    position: "left",
                    type: "category",
                    categoryPercentage: 0.8,
                    barPercentage: 0.9,
                    offset: !0,
                    gridLines: { offsetGridLines: !0 }
                  }
                ]
              },
              elements: { rectangle: { borderSkipped: "left" } },
              tooltips: {
                callbacks: {
                  title: function(t, e) {
                    var n = "";
                    return (
                      t.length > 0 &&
                        (t[0].yLabel
                          ? (n = t[0].yLabel)
                          : e.labels.length > 0 &&
                            t[0].index < e.labels.length &&
                            (n = e.labels[t[0].index])),
                      n
                    );
                  },
                  label: function(t, e) {
                    return (
                      (e.datasets[t.datasetIndex].label || "") + ": " + t.xLabel
                    );
                  }
                },
                mode: "index",
                axis: "y"
              }
            }),
            (e.exports = function(t) {
              (t.controllers.bar = t.DatasetController.extend({
                dataElementType: a.Rectangle,
                initialize: function() {
                  var e,
                    n = this;
                  t.DatasetController.prototype.initialize.apply(n, arguments),
                    ((e = n.getMeta()).stack = n.getDataset().stack),
                    (e.bar = !0);
                },
                update: function(t) {
                  var e,
                    n,
                    i = this,
                    a = i.getMeta().data;
                  for (i._ruler = i.getRuler(), e = 0, n = a.length; e < n; ++e)
                    i.updateElement(a[e], e, t);
                },
                updateElement: function(t, e, n) {
                  var i = this,
                    a = i.chart,
                    o = i.getMeta(),
                    s = i.getDataset(),
                    l = t.custom || {},
                    u = a.options.elements.rectangle;
                  (t._xScale = i.getScaleForId(o.xAxisID)),
                    (t._yScale = i.getScaleForId(o.yAxisID)),
                    (t._datasetIndex = i.index),
                    (t._index = e),
                    (t._model = {
                      datasetLabel: s.label,
                      label: a.data.labels[e],
                      borderSkipped: l.borderSkipped
                        ? l.borderSkipped
                        : u.borderSkipped,
                      backgroundColor: l.backgroundColor
                        ? l.backgroundColor
                        : r.valueAtIndexOrDefault(
                            s.backgroundColor,
                            e,
                            u.backgroundColor
                          ),
                      borderColor: l.borderColor
                        ? l.borderColor
                        : r.valueAtIndexOrDefault(
                            s.borderColor,
                            e,
                            u.borderColor
                          ),
                      borderWidth: l.borderWidth
                        ? l.borderWidth
                        : r.valueAtIndexOrDefault(
                            s.borderWidth,
                            e,
                            u.borderWidth
                          )
                    }),
                    i.updateElementGeometry(t, e, n),
                    t.pivot();
                },
                updateElementGeometry: function(t, e, n) {
                  var i = this,
                    a = t._model,
                    r = i.getValueScale(),
                    o = r.getBasePixel(),
                    s = r.isHorizontal(),
                    l = i._ruler || i.getRuler(),
                    u = i.calculateBarValuePixels(i.index, e),
                    d = i.calculateBarIndexPixels(i.index, e, l);
                  (a.horizontal = s),
                    (a.base = n ? o : u.base),
                    (a.x = s ? (n ? o : u.head) : d.center),
                    (a.y = s ? d.center : n ? o : u.head),
                    (a.height = s ? d.size : void 0),
                    (a.width = s ? void 0 : d.size);
                },
                getValueScaleId: function() {
                  return this.getMeta().yAxisID;
                },
                getIndexScaleId: function() {
                  return this.getMeta().xAxisID;
                },
                getValueScale: function() {
                  return this.getScaleForId(this.getValueScaleId());
                },
                getIndexScale: function() {
                  return this.getScaleForId(this.getIndexScaleId());
                },
                getStackCount: function(t) {
                  var e,
                    n,
                    i = this,
                    a = i.chart,
                    r = i.getIndexScale().options.stacked,
                    o = void 0 === t ? a.data.datasets.length : t + 1,
                    s = [];
                  for (e = 0; e < o; ++e)
                    (n = a.getDatasetMeta(e)).bar &&
                      a.isDatasetVisible(e) &&
                      (!1 === r ||
                        (!0 === r && -1 === s.indexOf(n.stack)) ||
                        (void 0 === r &&
                          (void 0 === n.stack || -1 === s.indexOf(n.stack)))) &&
                      s.push(n.stack);
                  return s.length;
                },
                getStackIndex: function(t) {
                  return this.getStackCount(t) - 1;
                },
                getRuler: function() {
                  var t,
                    e,
                    n = this,
                    i = n.getIndexScale(),
                    a = n.getStackCount(),
                    r = n.index,
                    o = [],
                    s = i.isHorizontal(),
                    l = s ? i.left : i.top,
                    u = l + (s ? i.width : i.height);
                  for (t = 0, e = n.getMeta().data.length; t < e; ++t)
                    o.push(i.getPixelForValue(null, t, r));
                  return {
                    pixels: o,
                    start: l,
                    end: u,
                    stackCount: a,
                    scale: i
                  };
                },
                calculateBarValuePixels: function(t, e) {
                  var n,
                    i,
                    a,
                    r,
                    o,
                    s,
                    l = this,
                    u = l.chart,
                    d = l.getMeta(),
                    c = l.getValueScale(),
                    h = u.data.datasets,
                    f = c.getRightValue(h[t].data[e]),
                    g = c.options.stacked,
                    m = d.stack,
                    p = 0;
                  if (g || (void 0 === g && void 0 !== m))
                    for (n = 0; n < t; ++n)
                      (i = u.getDatasetMeta(n)).bar &&
                        i.stack === m &&
                        i.controller.getValueScaleId() === c.id &&
                        u.isDatasetVisible(n) &&
                        ((a = c.getRightValue(h[n].data[e])),
                        ((f < 0 && a < 0) || (f >= 0 && a > 0)) && (p += a));
                  return (
                    (r = c.getPixelForValue(p)),
                    (o = c.getPixelForValue(p + f)),
                    (s = (o - r) / 2),
                    { size: s, base: r, head: o, center: o + s / 2 }
                  );
                },
                calculateBarIndexPixels: function(t, e, n) {
                  var i,
                    a,
                    o,
                    s,
                    l,
                    u,
                    d = this,
                    c = n.scale.options,
                    h = d.getStackIndex(t),
                    f = n.pixels,
                    g = f[e],
                    m = f.length,
                    p = n.start,
                    v = n.end;
                  return (
                    1 === m
                      ? ((i = g > p ? g - p : v - g),
                        (a = g < v ? v - g : g - p))
                      : (e > 0 &&
                          ((i = (g - f[e - 1]) / 2), e === m - 1 && (a = i)),
                        e < m - 1 &&
                          ((a = (f[e + 1] - g) / 2), 0 === e && (i = a))),
                    (o = i * c.categoryPercentage),
                    (s = a * c.categoryPercentage),
                    (l = (o + s) / n.stackCount),
                    (u = l * c.barPercentage),
                    (u = Math.min(
                      r.valueOrDefault(c.barThickness, u),
                      r.valueOrDefault(c.maxBarThickness, 1 / 0)
                    )),
                    (g -= o),
                    (g += l * h),
                    (g += (l - u) / 2),
                    { size: u, base: g, head: g + u, center: g + u / 2 }
                  );
                },
                draw: function() {
                  var t = this,
                    e = t.chart,
                    n = t.getValueScale(),
                    i = t.getMeta().data,
                    a = t.getDataset(),
                    o = i.length,
                    s = 0;
                  for (r.canvas.clipArea(e.ctx, e.chartArea); s < o; ++s)
                    isNaN(n.getRightValue(a.data[s])) || i[s].draw();
                  r.canvas.unclipArea(e.ctx);
                },
                setHoverStyle: function(t) {
                  var e = this.chart.data.datasets[t._datasetIndex],
                    n = t._index,
                    i = t.custom || {},
                    a = t._model;
                  (a.backgroundColor = i.hoverBackgroundColor
                    ? i.hoverBackgroundColor
                    : r.valueAtIndexOrDefault(
                        e.hoverBackgroundColor,
                        n,
                        r.getHoverColor(a.backgroundColor)
                      )),
                    (a.borderColor = i.hoverBorderColor
                      ? i.hoverBorderColor
                      : r.valueAtIndexOrDefault(
                          e.hoverBorderColor,
                          n,
                          r.getHoverColor(a.borderColor)
                        )),
                    (a.borderWidth = i.hoverBorderWidth
                      ? i.hoverBorderWidth
                      : r.valueAtIndexOrDefault(
                          e.hoverBorderWidth,
                          n,
                          a.borderWidth
                        ));
                },
                removeHoverStyle: function(t) {
                  var e = this.chart.data.datasets[t._datasetIndex],
                    n = t._index,
                    i = t.custom || {},
                    a = t._model,
                    o = this.chart.options.elements.rectangle;
                  (a.backgroundColor = i.backgroundColor
                    ? i.backgroundColor
                    : r.valueAtIndexOrDefault(
                        e.backgroundColor,
                        n,
                        o.backgroundColor
                      )),
                    (a.borderColor = i.borderColor
                      ? i.borderColor
                      : r.valueAtIndexOrDefault(
                          e.borderColor,
                          n,
                          o.borderColor
                        )),
                    (a.borderWidth = i.borderWidth
                      ? i.borderWidth
                      : r.valueAtIndexOrDefault(
                          e.borderWidth,
                          n,
                          o.borderWidth
                        ));
                }
              })),
                (t.controllers.horizontalBar = t.controllers.bar.extend({
                  getValueScaleId: function() {
                    return this.getMeta().xAxisID;
                  },
                  getIndexScaleId: function() {
                    return this.getMeta().yAxisID;
                  }
                }));
            });
        },
        { 25: 25, 40: 40, 45: 45 }
      ],
      16: [
        function(t, e, n) {
          "use strict";
          var i = t(25),
            a = t(40),
            r = t(45);
          i._set("bubble", {
            hover: { mode: "single" },
            scales: {
              xAxes: [{ type: "linear", position: "bottom", id: "x-axis-0" }],
              yAxes: [{ type: "linear", position: "left", id: "y-axis-0" }]
            },
            tooltips: {
              callbacks: {
                title: function() {
                  return "";
                },
                label: function(t, e) {
                  var n = e.datasets[t.datasetIndex].label || "",
                    i = e.datasets[t.datasetIndex].data[t.index];
                  return (
                    n + ": (" + t.xLabel + ", " + t.yLabel + ", " + i.r + ")"
                  );
                }
              }
            }
          }),
            (e.exports = function(t) {
              t.controllers.bubble = t.DatasetController.extend({
                dataElementType: a.Point,
                update: function(t) {
                  var e = this,
                    n = e.getMeta().data;
                  r.each(n, function(n, i) {
                    e.updateElement(n, i, t);
                  });
                },
                updateElement: function(t, e, n) {
                  var i = this,
                    a = i.getMeta(),
                    r = t.custom || {},
                    o = i.getScaleForId(a.xAxisID),
                    s = i.getScaleForId(a.yAxisID),
                    l = i._resolveElementOptions(t, e),
                    u = i.getDataset().data[e],
                    d = i.index,
                    c = n
                      ? o.getPixelForDecimal(0.5)
                      : o.getPixelForValue(
                          "object" == typeof u ? u : NaN,
                          e,
                          d
                        ),
                    h = n ? s.getBasePixel() : s.getPixelForValue(u, e, d);
                  (t._xScale = o),
                    (t._yScale = s),
                    (t._options = l),
                    (t._datasetIndex = d),
                    (t._index = e),
                    (t._model = {
                      backgroundColor: l.backgroundColor,
                      borderColor: l.borderColor,
                      borderWidth: l.borderWidth,
                      hitRadius: l.hitRadius,
                      pointStyle: l.pointStyle,
                      radius: n ? 0 : l.radius,
                      skip: r.skip || isNaN(c) || isNaN(h),
                      x: c,
                      y: h
                    }),
                    t.pivot();
                },
                setHoverStyle: function(t) {
                  var e = t._model,
                    n = t._options;
                  (e.backgroundColor = r.valueOrDefault(
                    n.hoverBackgroundColor,
                    r.getHoverColor(n.backgroundColor)
                  )),
                    (e.borderColor = r.valueOrDefault(
                      n.hoverBorderColor,
                      r.getHoverColor(n.borderColor)
                    )),
                    (e.borderWidth = r.valueOrDefault(
                      n.hoverBorderWidth,
                      n.borderWidth
                    )),
                    (e.radius = n.radius + n.hoverRadius);
                },
                removeHoverStyle: function(t) {
                  var e = t._model,
                    n = t._options;
                  (e.backgroundColor = n.backgroundColor),
                    (e.borderColor = n.borderColor),
                    (e.borderWidth = n.borderWidth),
                    (e.radius = n.radius);
                },
                _resolveElementOptions: function(t, e) {
                  var n,
                    i,
                    a,
                    o = this,
                    s = o.chart,
                    l = s.data.datasets[o.index],
                    u = t.custom || {},
                    d = s.options.elements.point,
                    c = r.options.resolve,
                    h = l.data[e],
                    f = {},
                    g = {
                      chart: s,
                      dataIndex: e,
                      dataset: l,
                      datasetIndex: o.index
                    },
                    m = [
                      "backgroundColor",
                      "borderColor",
                      "borderWidth",
                      "hoverBackgroundColor",
                      "hoverBorderColor",
                      "hoverBorderWidth",
                      "hoverRadius",
                      "hitRadius",
                      "pointStyle"
                    ];
                  for (n = 0, i = m.length; n < i; ++n)
                    f[(a = m[n])] = c([u[a], l[a], d[a]], g, e);
                  return (
                    (f.radius = c(
                      [u.radius, h ? h.r : void 0, l.radius, d.radius],
                      g,
                      e
                    )),
                    f
                  );
                }
              });
            });
        },
        { 25: 25, 40: 40, 45: 45 }
      ],
      17: [
        function(t, e, n) {
          "use strict";
          var i = t(25),
            a = t(40),
            r = t(45);
          i._set("doughnut", {
            animation: { animateRotate: !0, animateScale: !1 },
            hover: { mode: "single" },
            legendCallback: function(t) {
              var e = [];
              e.push('<ul class="' + t.id + '-legend">');
              var n = t.data,
                i = n.datasets,
                a = n.labels;
              if (i.length)
                for (var r = 0; r < i[0].data.length; ++r)
                  e.push(
                    '<li><span style="background-color:' +
                      i[0].backgroundColor[r] +
                      '"></span>'
                  ),
                    a[r] && e.push(a[r]),
                    e.push("</li>");
              return e.push("</ul>"), e.join("");
            },
            legend: {
              labels: {
                generateLabels: function(t) {
                  var e = t.data;
                  return e.labels.length && e.datasets.length
                    ? e.labels.map(function(n, i) {
                        var a = t.getDatasetMeta(0),
                          o = e.datasets[0],
                          s = a.data[i],
                          l = (s && s.custom) || {},
                          u = r.valueAtIndexOrDefault,
                          d = t.options.elements.arc;
                        return {
                          text: n,
                          fillStyle: l.backgroundColor
                            ? l.backgroundColor
                            : u(o.backgroundColor, i, d.backgroundColor),
                          strokeStyle: l.borderColor
                            ? l.borderColor
                            : u(o.borderColor, i, d.borderColor),
                          lineWidth: l.borderWidth
                            ? l.borderWidth
                            : u(o.borderWidth, i, d.borderWidth),
                          hidden: isNaN(o.data[i]) || a.data[i].hidden,
                          index: i
                        };
                      })
                    : [];
                }
              },
              onClick: function(t, e) {
                var n,
                  i,
                  a,
                  r = e.index,
                  o = this.chart;
                for (n = 0, i = (o.data.datasets || []).length; n < i; ++n)
                  (a = o.getDatasetMeta(n)).data[r] &&
                    (a.data[r].hidden = !a.data[r].hidden);
                o.update();
              }
            },
            cutoutPercentage: 50,
            rotation: -0.5 * Math.PI,
            circumference: 2 * Math.PI,
            tooltips: {
              callbacks: {
                title: function() {
                  return "";
                },
                label: function(t, e) {
                  var n = e.labels[t.index],
                    i = ": " + e.datasets[t.datasetIndex].data[t.index];
                  return r.isArray(n) ? ((n = n.slice())[0] += i) : (n += i), n;
                }
              }
            }
          }),
            i._set("pie", r.clone(i.doughnut)),
            i._set("pie", { cutoutPercentage: 0 }),
            (e.exports = function(t) {
              t.controllers.doughnut = t.controllers.pie = t.DatasetController.extend(
                {
                  dataElementType: a.Arc,
                  linkScales: r.noop,
                  getRingIndex: function(t) {
                    for (var e = 0, n = 0; n < t; ++n)
                      this.chart.isDatasetVisible(n) && ++e;
                    return e;
                  },
                  update: function(t) {
                    var e = this,
                      n = e.chart,
                      i = n.chartArea,
                      a = n.options,
                      o = a.elements.arc,
                      s = i.right - i.left - o.borderWidth,
                      l = i.bottom - i.top - o.borderWidth,
                      u = Math.min(s, l),
                      d = { x: 0, y: 0 },
                      c = e.getMeta(),
                      h = a.cutoutPercentage,
                      f = a.circumference;
                    if (f < 2 * Math.PI) {
                      var g = a.rotation % (2 * Math.PI),
                        m =
                          (g +=
                            2 *
                            Math.PI *
                            (g >= Math.PI ? -1 : g < -Math.PI ? 1 : 0)) + f,
                        p = { x: Math.cos(g), y: Math.sin(g) },
                        v = { x: Math.cos(m), y: Math.sin(m) },
                        y =
                          (g <= 0 && m >= 0) ||
                          (g <= 2 * Math.PI && 2 * Math.PI <= m),
                        b =
                          (g <= 0.5 * Math.PI && 0.5 * Math.PI <= m) ||
                          (g <= 2.5 * Math.PI && 2.5 * Math.PI <= m),
                        x =
                          (g <= -Math.PI && -Math.PI <= m) ||
                          (g <= Math.PI && Math.PI <= m),
                        _ =
                          (g <= 0.5 * -Math.PI && 0.5 * -Math.PI <= m) ||
                          (g <= 1.5 * Math.PI && 1.5 * Math.PI <= m),
                        k = h / 100,
                        w = {
                          x: x
                            ? -1
                            : Math.min(
                                p.x * (p.x < 0 ? 1 : k),
                                v.x * (v.x < 0 ? 1 : k)
                              ),
                          y: _
                            ? -1
                            : Math.min(
                                p.y * (p.y < 0 ? 1 : k),
                                v.y * (v.y < 0 ? 1 : k)
                              )
                        },
                        M = {
                          x: y
                            ? 1
                            : Math.max(
                                p.x * (p.x > 0 ? 1 : k),
                                v.x * (v.x > 0 ? 1 : k)
                              ),
                          y: b
                            ? 1
                            : Math.max(
                                p.y * (p.y > 0 ? 1 : k),
                                v.y * (v.y > 0 ? 1 : k)
                              )
                        },
                        S = {
                          width: 0.5 * (M.x - w.x),
                          height: 0.5 * (M.y - w.y)
                        };
                      (u = Math.min(s / S.width, l / S.height)),
                        (d = { x: -0.5 * (M.x + w.x), y: -0.5 * (M.y + w.y) });
                    }
                    (n.borderWidth = e.getMaxBorderWidth(c.data)),
                      (n.outerRadius = Math.max((u - n.borderWidth) / 2, 0)),
                      (n.innerRadius = Math.max(
                        h ? n.outerRadius / 100 * h : 0,
                        0
                      )),
                      (n.radiusLength =
                        (n.outerRadius - n.innerRadius) /
                        n.getVisibleDatasetCount()),
                      (n.offsetX = d.x * n.outerRadius),
                      (n.offsetY = d.y * n.outerRadius),
                      (c.total = e.calculateTotal()),
                      (e.outerRadius =
                        n.outerRadius -
                        n.radiusLength * e.getRingIndex(e.index)),
                      (e.innerRadius = Math.max(
                        e.outerRadius - n.radiusLength,
                        0
                      )),
                      r.each(c.data, function(n, i) {
                        e.updateElement(n, i, t);
                      });
                  },
                  updateElement: function(t, e, n) {
                    var i = this,
                      a = i.chart,
                      o = a.chartArea,
                      s = a.options,
                      l = s.animation,
                      u = (o.left + o.right) / 2,
                      d = (o.top + o.bottom) / 2,
                      c = s.rotation,
                      h = s.rotation,
                      f = i.getDataset(),
                      g =
                        n && l.animateRotate
                          ? 0
                          : t.hidden
                            ? 0
                            : i.calculateCircumference(f.data[e]) *
                              (s.circumference / (2 * Math.PI)),
                      m = n && l.animateScale ? 0 : i.innerRadius,
                      p = n && l.animateScale ? 0 : i.outerRadius,
                      v = r.valueAtIndexOrDefault;
                    r.extend(t, {
                      _datasetIndex: i.index,
                      _index: e,
                      _model: {
                        x: u + a.offsetX,
                        y: d + a.offsetY,
                        startAngle: c,
                        endAngle: h,
                        circumference: g,
                        outerRadius: p,
                        innerRadius: m,
                        label: v(f.label, e, a.data.labels[e])
                      }
                    });
                    var y = t._model;
                    this.removeHoverStyle(t),
                      (n && l.animateRotate) ||
                        ((y.startAngle =
                          0 === e
                            ? s.rotation
                            : i.getMeta().data[e - 1]._model.endAngle),
                        (y.endAngle = y.startAngle + y.circumference)),
                      t.pivot();
                  },
                  removeHoverStyle: function(e) {
                    t.DatasetController.prototype.removeHoverStyle.call(
                      this,
                      e,
                      this.chart.options.elements.arc
                    );
                  },
                  calculateTotal: function() {
                    var t,
                      e = this.getDataset(),
                      n = this.getMeta(),
                      i = 0;
                    return (
                      r.each(n.data, function(n, a) {
                        (t = e.data[a]),
                          isNaN(t) || n.hidden || (i += Math.abs(t));
                      }),
                      i
                    );
                  },
                  calculateCircumference: function(t) {
                    var e = this.getMeta().total;
                    return e > 0 && !isNaN(t) ? 2 * Math.PI * (t / e) : 0;
                  },
                  getMaxBorderWidth: function(t) {
                    for (
                      var e, n, i = 0, a = this.index, r = t.length, o = 0;
                      o < r;
                      o++
                    )
                      (e = t[o]._model ? t[o]._model.borderWidth : 0),
                        (i =
                          (n = t[o]._chart
                            ? t[o]._chart.config.data.datasets[a]
                                .hoverBorderWidth
                            : 0) > (i = e > i ? e : i)
                            ? n
                            : i);
                    return i;
                  }
                }
              );
            });
        },
        { 25: 25, 40: 40, 45: 45 }
      ],
      18: [
        function(t, e, n) {
          "use strict";
          var i = t(25),
            a = t(40),
            r = t(45);
          i._set("line", {
            showLines: !0,
            spanGaps: !1,
            hover: { mode: "label" },
            scales: {
              xAxes: [{ type: "category", id: "x-axis-0" }],
              yAxes: [{ type: "linear", id: "y-axis-0" }]
            }
          }),
            (e.exports = function(t) {
              function e(t, e) {
                return r.valueOrDefault(t.showLine, e.showLines);
              }
              t.controllers.line = t.DatasetController.extend({
                datasetElementType: a.Line,
                dataElementType: a.Point,
                update: function(t) {
                  var n,
                    i,
                    a,
                    o = this,
                    s = o.getMeta(),
                    l = s.dataset,
                    u = s.data || [],
                    d = o.chart.options,
                    c = d.elements.line,
                    h = o.getScaleForId(s.yAxisID),
                    f = o.getDataset(),
                    g = e(f, d);
                  for (
                    g &&
                      ((a = l.custom || {}),
                      void 0 !== f.tension &&
                        void 0 === f.lineTension &&
                        (f.lineTension = f.tension),
                      (l._scale = h),
                      (l._datasetIndex = o.index),
                      (l._children = u),
                      (l._model = {
                        spanGaps: f.spanGaps ? f.spanGaps : d.spanGaps,
                        tension: a.tension
                          ? a.tension
                          : r.valueOrDefault(f.lineTension, c.tension),
                        backgroundColor: a.backgroundColor
                          ? a.backgroundColor
                          : f.backgroundColor || c.backgroundColor,
                        borderWidth: a.borderWidth
                          ? a.borderWidth
                          : f.borderWidth || c.borderWidth,
                        borderColor: a.borderColor
                          ? a.borderColor
                          : f.borderColor || c.borderColor,
                        borderCapStyle: a.borderCapStyle
                          ? a.borderCapStyle
                          : f.borderCapStyle || c.borderCapStyle,
                        borderDash: a.borderDash
                          ? a.borderDash
                          : f.borderDash || c.borderDash,
                        borderDashOffset: a.borderDashOffset
                          ? a.borderDashOffset
                          : f.borderDashOffset || c.borderDashOffset,
                        borderJoinStyle: a.borderJoinStyle
                          ? a.borderJoinStyle
                          : f.borderJoinStyle || c.borderJoinStyle,
                        fill: a.fill
                          ? a.fill
                          : void 0 !== f.fill
                            ? f.fill
                            : c.fill,
                        steppedLine: a.steppedLine
                          ? a.steppedLine
                          : r.valueOrDefault(f.steppedLine, c.stepped),
                        cubicInterpolationMode: a.cubicInterpolationMode
                          ? a.cubicInterpolationMode
                          : r.valueOrDefault(
                              f.cubicInterpolationMode,
                              c.cubicInterpolationMode
                            )
                      }),
                      l.pivot()),
                      n = 0,
                      i = u.length;
                    n < i;
                    ++n
                  )
                    o.updateElement(u[n], n, t);
                  for (
                    g &&
                      0 !== l._model.tension &&
                      o.updateBezierControlPoints(),
                      n = 0,
                      i = u.length;
                    n < i;
                    ++n
                  )
                    u[n].pivot();
                },
                getPointBackgroundColor: function(t, e) {
                  var n = this.chart.options.elements.point.backgroundColor,
                    i = this.getDataset(),
                    a = t.custom || {};
                  return (
                    a.backgroundColor
                      ? (n = a.backgroundColor)
                      : i.pointBackgroundColor
                        ? (n = r.valueAtIndexOrDefault(
                            i.pointBackgroundColor,
                            e,
                            n
                          ))
                        : i.backgroundColor && (n = i.backgroundColor),
                    n
                  );
                },
                getPointBorderColor: function(t, e) {
                  var n = this.chart.options.elements.point.borderColor,
                    i = this.getDataset(),
                    a = t.custom || {};
                  return (
                    a.borderColor
                      ? (n = a.borderColor)
                      : i.pointBorderColor
                        ? (n = r.valueAtIndexOrDefault(
                            i.pointBorderColor,
                            e,
                            n
                          ))
                        : i.borderColor && (n = i.borderColor),
                    n
                  );
                },
                getPointBorderWidth: function(t, e) {
                  var n = this.chart.options.elements.point.borderWidth,
                    i = this.getDataset(),
                    a = t.custom || {};
                  return (
                    isNaN(a.borderWidth)
                      ? !isNaN(i.pointBorderWidth) ||
                        r.isArray(i.pointBorderWidth)
                        ? (n = r.valueAtIndexOrDefault(
                            i.pointBorderWidth,
                            e,
                            n
                          ))
                        : isNaN(i.borderWidth) || (n = i.borderWidth)
                      : (n = a.borderWidth),
                    n
                  );
                },
                updateElement: function(t, e, n) {
                  var i,
                    a,
                    o = this,
                    s = o.getMeta(),
                    l = t.custom || {},
                    u = o.getDataset(),
                    d = o.index,
                    c = u.data[e],
                    h = o.getScaleForId(s.yAxisID),
                    f = o.getScaleForId(s.xAxisID),
                    g = o.chart.options.elements.point;
                  void 0 !== u.radius &&
                    void 0 === u.pointRadius &&
                    (u.pointRadius = u.radius),
                    void 0 !== u.hitRadius &&
                      void 0 === u.pointHitRadius &&
                      (u.pointHitRadius = u.hitRadius),
                    (i = f.getPixelForValue(
                      "object" == typeof c ? c : NaN,
                      e,
                      d
                    )),
                    (a = n ? h.getBasePixel() : o.calculatePointY(c, e, d)),
                    (t._xScale = f),
                    (t._yScale = h),
                    (t._datasetIndex = d),
                    (t._index = e),
                    (t._model = {
                      x: i,
                      y: a,
                      skip: l.skip || isNaN(i) || isNaN(a),
                      radius:
                        l.radius ||
                        r.valueAtIndexOrDefault(u.pointRadius, e, g.radius),
                      pointStyle:
                        l.pointStyle ||
                        r.valueAtIndexOrDefault(u.pointStyle, e, g.pointStyle),
                      backgroundColor: o.getPointBackgroundColor(t, e),
                      borderColor: o.getPointBorderColor(t, e),
                      borderWidth: o.getPointBorderWidth(t, e),
                      tension: s.dataset._model ? s.dataset._model.tension : 0,
                      steppedLine:
                        !!s.dataset._model && s.dataset._model.steppedLine,
                      hitRadius:
                        l.hitRadius ||
                        r.valueAtIndexOrDefault(
                          u.pointHitRadius,
                          e,
                          g.hitRadius
                        )
                    });
                },
                calculatePointY: function(t, e, n) {
                  var i,
                    a,
                    r,
                    o = this,
                    s = o.chart,
                    l = o.getMeta(),
                    u = o.getScaleForId(l.yAxisID),
                    d = 0,
                    c = 0;
                  if (u.options.stacked) {
                    for (i = 0; i < n; i++)
                      if (
                        ((a = s.data.datasets[i]),
                        "line" === (r = s.getDatasetMeta(i)).type &&
                          r.yAxisID === u.id &&
                          s.isDatasetVisible(i))
                      ) {
                        var h = Number(u.getRightValue(a.data[e]));
                        h < 0 ? (c += h || 0) : (d += h || 0);
                      }
                    var f = Number(u.getRightValue(t));
                    return f < 0
                      ? u.getPixelForValue(c + f)
                      : u.getPixelForValue(d + f);
                  }
                  return u.getPixelForValue(t);
                },
                updateBezierControlPoints: function() {
                  function t(t, e, n) {
                    return Math.max(Math.min(t, n), e);
                  }
                  var e,
                    n,
                    i,
                    a,
                    o = this,
                    s = o.getMeta(),
                    l = o.chart.chartArea,
                    u = s.data || [];
                  if (
                    (s.dataset._model.spanGaps &&
                      (u = u.filter(function(t) {
                        return !t._model.skip;
                      })),
                    "monotone" === s.dataset._model.cubicInterpolationMode)
                  )
                    r.splineCurveMonotone(u);
                  else
                    for (e = 0, n = u.length; e < n; ++e)
                      (i = u[e]._model),
                        (a = r.splineCurve(
                          r.previousItem(u, e)._model,
                          i,
                          r.nextItem(u, e)._model,
                          s.dataset._model.tension
                        )),
                        (i.controlPointPreviousX = a.previous.x),
                        (i.controlPointPreviousY = a.previous.y),
                        (i.controlPointNextX = a.next.x),
                        (i.controlPointNextY = a.next.y);
                  if (o.chart.options.elements.line.capBezierPoints)
                    for (e = 0, n = u.length; e < n; ++e)
                      ((i = u[e]._model).controlPointPreviousX = t(
                        i.controlPointPreviousX,
                        l.left,
                        l.right
                      )),
                        (i.controlPointPreviousY = t(
                          i.controlPointPreviousY,
                          l.top,
                          l.bottom
                        )),
                        (i.controlPointNextX = t(
                          i.controlPointNextX,
                          l.left,
                          l.right
                        )),
                        (i.controlPointNextY = t(
                          i.controlPointNextY,
                          l.top,
                          l.bottom
                        ));
                },
                draw: function() {
                  var t = this,
                    n = t.chart,
                    i = t.getMeta(),
                    a = i.data || [],
                    o = n.chartArea,
                    s = a.length,
                    l = 0;
                  for (
                    r.canvas.clipArea(n.ctx, o),
                      e(t.getDataset(), n.options) && i.dataset.draw(),
                      r.canvas.unclipArea(n.ctx);
                    l < s;
                    ++l
                  )
                    a[l].draw(o);
                },
                setHoverStyle: function(t) {
                  var e = this.chart.data.datasets[t._datasetIndex],
                    n = t._index,
                    i = t.custom || {},
                    a = t._model;
                  (a.radius =
                    i.hoverRadius ||
                    r.valueAtIndexOrDefault(
                      e.pointHoverRadius,
                      n,
                      this.chart.options.elements.point.hoverRadius
                    )),
                    (a.backgroundColor =
                      i.hoverBackgroundColor ||
                      r.valueAtIndexOrDefault(
                        e.pointHoverBackgroundColor,
                        n,
                        r.getHoverColor(a.backgroundColor)
                      )),
                    (a.borderColor =
                      i.hoverBorderColor ||
                      r.valueAtIndexOrDefault(
                        e.pointHoverBorderColor,
                        n,
                        r.getHoverColor(a.borderColor)
                      )),
                    (a.borderWidth =
                      i.hoverBorderWidth ||
                      r.valueAtIndexOrDefault(
                        e.pointHoverBorderWidth,
                        n,
                        a.borderWidth
                      ));
                },
                removeHoverStyle: function(t) {
                  var e = this,
                    n = e.chart.data.datasets[t._datasetIndex],
                    i = t._index,
                    a = t.custom || {},
                    o = t._model;
                  void 0 !== n.radius &&
                    void 0 === n.pointRadius &&
                    (n.pointRadius = n.radius),
                    (o.radius =
                      a.radius ||
                      r.valueAtIndexOrDefault(
                        n.pointRadius,
                        i,
                        e.chart.options.elements.point.radius
                      )),
                    (o.backgroundColor = e.getPointBackgroundColor(t, i)),
                    (o.borderColor = e.getPointBorderColor(t, i)),
                    (o.borderWidth = e.getPointBorderWidth(t, i));
                }
              });
            });
        },
        { 25: 25, 40: 40, 45: 45 }
      ],
      19: [
        function(t, e, n) {
          "use strict";
          var i = t(25),
            a = t(40),
            r = t(45);
          i._set("polarArea", {
            scale: {
              type: "radialLinear",
              angleLines: { display: !1 },
              gridLines: { circular: !0 },
              pointLabels: { display: !1 },
              ticks: { beginAtZero: !0 }
            },
            animation: { animateRotate: !0, animateScale: !0 },
            startAngle: -0.5 * Math.PI,
            legendCallback: function(t) {
              var e = [];
              e.push('<ul class="' + t.id + '-legend">');
              var n = t.data,
                i = n.datasets,
                a = n.labels;
              if (i.length)
                for (var r = 0; r < i[0].data.length; ++r)
                  e.push(
                    '<li><span style="background-color:' +
                      i[0].backgroundColor[r] +
                      '"></span>'
                  ),
                    a[r] && e.push(a[r]),
                    e.push("</li>");
              return e.push("</ul>"), e.join("");
            },
            legend: {
              labels: {
                generateLabels: function(t) {
                  var e = t.data;
                  return e.labels.length && e.datasets.length
                    ? e.labels.map(function(n, i) {
                        var a = t.getDatasetMeta(0),
                          o = e.datasets[0],
                          s = a.data[i].custom || {},
                          l = r.valueAtIndexOrDefault,
                          u = t.options.elements.arc;
                        return {
                          text: n,
                          fillStyle: s.backgroundColor
                            ? s.backgroundColor
                            : l(o.backgroundColor, i, u.backgroundColor),
                          strokeStyle: s.borderColor
                            ? s.borderColor
                            : l(o.borderColor, i, u.borderColor),
                          lineWidth: s.borderWidth
                            ? s.borderWidth
                            : l(o.borderWidth, i, u.borderWidth),
                          hidden: isNaN(o.data[i]) || a.data[i].hidden,
                          index: i
                        };
                      })
                    : [];
                }
              },
              onClick: function(t, e) {
                var n,
                  i,
                  a,
                  r = e.index,
                  o = this.chart;
                for (n = 0, i = (o.data.datasets || []).length; n < i; ++n)
                  (a = o.getDatasetMeta(n)).data[r].hidden = !a.data[r].hidden;
                o.update();
              }
            },
            tooltips: {
              callbacks: {
                title: function() {
                  return "";
                },
                label: function(t, e) {
                  return e.labels[t.index] + ": " + t.yLabel;
                }
              }
            }
          }),
            (e.exports = function(t) {
              t.controllers.polarArea = t.DatasetController.extend({
                dataElementType: a.Arc,
                linkScales: r.noop,
                update: function(t) {
                  var e = this,
                    n = e.chart,
                    i = n.chartArea,
                    a = e.getMeta(),
                    o = n.options,
                    s = o.elements.arc,
                    l = Math.min(i.right - i.left, i.bottom - i.top);
                  (n.outerRadius = Math.max((l - s.borderWidth / 2) / 2, 0)),
                    (n.innerRadius = Math.max(
                      o.cutoutPercentage
                        ? n.outerRadius / 100 * o.cutoutPercentage
                        : 1,
                      0
                    )),
                    (n.radiusLength =
                      (n.outerRadius - n.innerRadius) /
                      n.getVisibleDatasetCount()),
                    (e.outerRadius = n.outerRadius - n.radiusLength * e.index),
                    (e.innerRadius = e.outerRadius - n.radiusLength),
                    (a.count = e.countVisibleElements()),
                    r.each(a.data, function(n, i) {
                      e.updateElement(n, i, t);
                    });
                },
                updateElement: function(t, e, n) {
                  for (
                    var i = this,
                      a = i.chart,
                      o = i.getDataset(),
                      s = a.options,
                      l = s.animation,
                      u = a.scale,
                      d = a.data.labels,
                      c = i.calculateCircumference(o.data[e]),
                      h = u.xCenter,
                      f = u.yCenter,
                      g = 0,
                      m = i.getMeta(),
                      p = 0;
                    p < e;
                    ++p
                  )
                    isNaN(o.data[p]) || m.data[p].hidden || ++g;
                  var v = s.startAngle,
                    y = t.hidden
                      ? 0
                      : u.getDistanceFromCenterForValue(o.data[e]),
                    b = v + c * g,
                    x = b + (t.hidden ? 0 : c),
                    _ = l.animateScale
                      ? 0
                      : u.getDistanceFromCenterForValue(o.data[e]);
                  r.extend(t, {
                    _datasetIndex: i.index,
                    _index: e,
                    _scale: u,
                    _model: {
                      x: h,
                      y: f,
                      innerRadius: 0,
                      outerRadius: n ? _ : y,
                      startAngle: n && l.animateRotate ? v : b,
                      endAngle: n && l.animateRotate ? v : x,
                      label: r.valueAtIndexOrDefault(d, e, d[e])
                    }
                  }),
                    i.removeHoverStyle(t),
                    t.pivot();
                },
                removeHoverStyle: function(e) {
                  t.DatasetController.prototype.removeHoverStyle.call(
                    this,
                    e,
                    this.chart.options.elements.arc
                  );
                },
                countVisibleElements: function() {
                  var t = this.getDataset(),
                    e = this.getMeta(),
                    n = 0;
                  return (
                    r.each(e.data, function(e, i) {
                      isNaN(t.data[i]) || e.hidden || n++;
                    }),
                    n
                  );
                },
                calculateCircumference: function(t) {
                  var e = this.getMeta().count;
                  return e > 0 && !isNaN(t) ? 2 * Math.PI / e : 0;
                }
              });
            });
        },
        { 25: 25, 40: 40, 45: 45 }
      ],
      20: [
        function(t, e, n) {
          "use strict";
          var i = t(25),
            a = t(40),
            r = t(45);
          i._set("radar", {
            scale: { type: "radialLinear" },
            elements: { line: { tension: 0 } }
          }),
            (e.exports = function(t) {
              t.controllers.radar = t.DatasetController.extend({
                datasetElementType: a.Line,
                dataElementType: a.Point,
                linkScales: r.noop,
                update: function(t) {
                  var e = this,
                    n = e.getMeta(),
                    i = n.dataset,
                    a = n.data,
                    o = i.custom || {},
                    s = e.getDataset(),
                    l = e.chart.options.elements.line,
                    u = e.chart.scale;
                  void 0 !== s.tension &&
                    void 0 === s.lineTension &&
                    (s.lineTension = s.tension),
                    r.extend(n.dataset, {
                      _datasetIndex: e.index,
                      _scale: u,
                      _children: a,
                      _loop: !0,
                      _model: {
                        tension: o.tension
                          ? o.tension
                          : r.valueOrDefault(s.lineTension, l.tension),
                        backgroundColor: o.backgroundColor
                          ? o.backgroundColor
                          : s.backgroundColor || l.backgroundColor,
                        borderWidth: o.borderWidth
                          ? o.borderWidth
                          : s.borderWidth || l.borderWidth,
                        borderColor: o.borderColor
                          ? o.borderColor
                          : s.borderColor || l.borderColor,
                        fill: o.fill
                          ? o.fill
                          : void 0 !== s.fill
                            ? s.fill
                            : l.fill,
                        borderCapStyle: o.borderCapStyle
                          ? o.borderCapStyle
                          : s.borderCapStyle || l.borderCapStyle,
                        borderDash: o.borderDash
                          ? o.borderDash
                          : s.borderDash || l.borderDash,
                        borderDashOffset: o.borderDashOffset
                          ? o.borderDashOffset
                          : s.borderDashOffset || l.borderDashOffset,
                        borderJoinStyle: o.borderJoinStyle
                          ? o.borderJoinStyle
                          : s.borderJoinStyle || l.borderJoinStyle
                      }
                    }),
                    n.dataset.pivot(),
                    r.each(
                      a,
                      function(n, i) {
                        e.updateElement(n, i, t);
                      },
                      e
                    ),
                    e.updateBezierControlPoints();
                },
                updateElement: function(t, e, n) {
                  var i = this,
                    a = t.custom || {},
                    o = i.getDataset(),
                    s = i.chart.scale,
                    l = i.chart.options.elements.point,
                    u = s.getPointPositionForValue(e, o.data[e]);
                  void 0 !== o.radius &&
                    void 0 === o.pointRadius &&
                    (o.pointRadius = o.radius),
                    void 0 !== o.hitRadius &&
                      void 0 === o.pointHitRadius &&
                      (o.pointHitRadius = o.hitRadius),
                    r.extend(t, {
                      _datasetIndex: i.index,
                      _index: e,
                      _scale: s,
                      _model: {
                        x: n ? s.xCenter : u.x,
                        y: n ? s.yCenter : u.y,
                        tension: a.tension
                          ? a.tension
                          : r.valueOrDefault(
                              o.lineTension,
                              i.chart.options.elements.line.tension
                            ),
                        radius: a.radius
                          ? a.radius
                          : r.valueAtIndexOrDefault(o.pointRadius, e, l.radius),
                        backgroundColor: a.backgroundColor
                          ? a.backgroundColor
                          : r.valueAtIndexOrDefault(
                              o.pointBackgroundColor,
                              e,
                              l.backgroundColor
                            ),
                        borderColor: a.borderColor
                          ? a.borderColor
                          : r.valueAtIndexOrDefault(
                              o.pointBorderColor,
                              e,
                              l.borderColor
                            ),
                        borderWidth: a.borderWidth
                          ? a.borderWidth
                          : r.valueAtIndexOrDefault(
                              o.pointBorderWidth,
                              e,
                              l.borderWidth
                            ),
                        pointStyle: a.pointStyle
                          ? a.pointStyle
                          : r.valueAtIndexOrDefault(
                              o.pointStyle,
                              e,
                              l.pointStyle
                            ),
                        hitRadius: a.hitRadius
                          ? a.hitRadius
                          : r.valueAtIndexOrDefault(
                              o.pointHitRadius,
                              e,
                              l.hitRadius
                            )
                      }
                    }),
                    (t._model.skip = a.skip
                      ? a.skip
                      : isNaN(t._model.x) || isNaN(t._model.y));
                },
                updateBezierControlPoints: function() {
                  var t = this.chart.chartArea,
                    e = this.getMeta();
                  r.each(e.data, function(n, i) {
                    var a = n._model,
                      o = r.splineCurve(
                        r.previousItem(e.data, i, !0)._model,
                        a,
                        r.nextItem(e.data, i, !0)._model,
                        a.tension
                      );
                    (a.controlPointPreviousX = Math.max(
                      Math.min(o.previous.x, t.right),
                      t.left
                    )),
                      (a.controlPointPreviousY = Math.max(
                        Math.min(o.previous.y, t.bottom),
                        t.top
                      )),
                      (a.controlPointNextX = Math.max(
                        Math.min(o.next.x, t.right),
                        t.left
                      )),
                      (a.controlPointNextY = Math.max(
                        Math.min(o.next.y, t.bottom),
                        t.top
                      )),
                      n.pivot();
                  });
                },
                setHoverStyle: function(t) {
                  var e = this.chart.data.datasets[t._datasetIndex],
                    n = t.custom || {},
                    i = t._index,
                    a = t._model;
                  (a.radius = n.hoverRadius
                    ? n.hoverRadius
                    : r.valueAtIndexOrDefault(
                        e.pointHoverRadius,
                        i,
                        this.chart.options.elements.point.hoverRadius
                      )),
                    (a.backgroundColor = n.hoverBackgroundColor
                      ? n.hoverBackgroundColor
                      : r.valueAtIndexOrDefault(
                          e.pointHoverBackgroundColor,
                          i,
                          r.getHoverColor(a.backgroundColor)
                        )),
                    (a.borderColor = n.hoverBorderColor
                      ? n.hoverBorderColor
                      : r.valueAtIndexOrDefault(
                          e.pointHoverBorderColor,
                          i,
                          r.getHoverColor(a.borderColor)
                        )),
                    (a.borderWidth = n.hoverBorderWidth
                      ? n.hoverBorderWidth
                      : r.valueAtIndexOrDefault(
                          e.pointHoverBorderWidth,
                          i,
                          a.borderWidth
                        ));
                },
                removeHoverStyle: function(t) {
                  var e = this.chart.data.datasets[t._datasetIndex],
                    n = t.custom || {},
                    i = t._index,
                    a = t._model,
                    o = this.chart.options.elements.point;
                  (a.radius = n.radius
                    ? n.radius
                    : r.valueAtIndexOrDefault(e.pointRadius, i, o.radius)),
                    (a.backgroundColor = n.backgroundColor
                      ? n.backgroundColor
                      : r.valueAtIndexOrDefault(
                          e.pointBackgroundColor,
                          i,
                          o.backgroundColor
                        )),
                    (a.borderColor = n.borderColor
                      ? n.borderColor
                      : r.valueAtIndexOrDefault(
                          e.pointBorderColor,
                          i,
                          o.borderColor
                        )),
                    (a.borderWidth = n.borderWidth
                      ? n.borderWidth
                      : r.valueAtIndexOrDefault(
                          e.pointBorderWidth,
                          i,
                          o.borderWidth
                        ));
                }
              });
            });
        },
        { 25: 25, 40: 40, 45: 45 }
      ],
      21: [
        function(t, e, n) {
          "use strict";
          t(25)._set("scatter", {
            hover: { mode: "single" },
            scales: {
              xAxes: [{ id: "x-axis-1", type: "linear", position: "bottom" }],
              yAxes: [{ id: "y-axis-1", type: "linear", position: "left" }]
            },
            showLines: !1,
            tooltips: {
              callbacks: {
                title: function() {
                  return "";
                },
                label: function(t) {
                  return "(" + t.xLabel + ", " + t.yLabel + ")";
                }
              }
            }
          }),
            (e.exports = function(t) {
              t.controllers.scatter = t.controllers.line;
            });
        },
        { 25: 25 }
      ],
      22: [
        function(t, e, n) {
          "use strict";
          var i = t(25),
            a = t(26),
            r = t(45);
          i._set("global", {
            animation: {
              duration: 1e3,
              easing: "easeOutQuart",
              onProgress: r.noop,
              onComplete: r.noop
            }
          }),
            (e.exports = function(t) {
              (t.Animation = a.extend({
                chart: null,
                currentStep: 0,
                numSteps: 60,
                easing: "",
                render: null,
                onAnimationProgress: null,
                onAnimationComplete: null
              })),
                (t.animationService = {
                  frameDuration: 17,
                  animations: [],
                  dropFrames: 0,
                  request: null,
                  addAnimation: function(t, e, n, i) {
                    var a,
                      r,
                      o = this.animations;
                    for (
                      e.chart = t, i || (t.animating = !0), a = 0, r = o.length;
                      a < r;
                      ++a
                    )
                      if (o[a].chart === t) return void (o[a] = e);
                    o.push(e), 1 === o.length && this.requestAnimationFrame();
                  },
                  cancelAnimation: function(t) {
                    var e = r.findIndex(this.animations, function(e) {
                      return e.chart === t;
                    });
                    -1 !== e &&
                      (this.animations.splice(e, 1), (t.animating = !1));
                  },
                  requestAnimationFrame: function() {
                    var t = this;
                    null === t.request &&
                      (t.request = r.requestAnimFrame.call(window, function() {
                        (t.request = null), t.startDigest();
                      }));
                  },
                  startDigest: function() {
                    var t = this,
                      e = Date.now(),
                      n = 0;
                    t.dropFrames > 1 &&
                      ((n = Math.floor(t.dropFrames)),
                      (t.dropFrames = t.dropFrames % 1)),
                      t.advance(1 + n);
                    var i = Date.now();
                    (t.dropFrames += (i - e) / t.frameDuration),
                      t.animations.length > 0 && t.requestAnimationFrame();
                  },
                  advance: function(t) {
                    for (var e, n, i = this.animations, a = 0; a < i.length; )
                      (n = (e = i[a]).chart),
                        (e.currentStep = (e.currentStep || 0) + t),
                        (e.currentStep = Math.min(e.currentStep, e.numSteps)),
                        r.callback(e.render, [n, e], n),
                        r.callback(e.onAnimationProgress, [e], n),
                        e.currentStep >= e.numSteps
                          ? (r.callback(e.onAnimationComplete, [e], n),
                            (n.animating = !1),
                            i.splice(a, 1))
                          : ++a;
                  }
                }),
                Object.defineProperty(
                  t.Animation.prototype,
                  "animationObject",
                  {
                    get: function() {
                      return this;
                    }
                  }
                ),
                Object.defineProperty(t.Animation.prototype, "chartInstance", {
                  get: function() {
                    return this.chart;
                  },
                  set: function(t) {
                    this.chart = t;
                  }
                });
            });
        },
        { 25: 25, 26: 26, 45: 45 }
      ],
      23: [
        function(t, e, n) {
          "use strict";
          var i = t(25),
            a = t(45),
            r = t(28),
            o = t(48);
          e.exports = function(t) {
            function e(t) {
              var e = ((t = t || {}).data = t.data || {});
              return (
                (e.datasets = e.datasets || []),
                (e.labels = e.labels || []),
                (t.options = a.configMerge(
                  i.global,
                  i[t.type],
                  t.options || {}
                )),
                t
              );
            }
            function n(t) {
              var e = t.options;
              e.scale
                ? (t.scale.options = e.scale)
                : e.scales &&
                  e.scales.xAxes.concat(e.scales.yAxes).forEach(function(e) {
                    t.scales[e.id].options = e;
                  }),
                (t.tooltip._options = e.tooltips);
            }
            function s(t) {
              return "top" === t || "bottom" === t;
            }
            var l = t.plugins;
            (t.types = {}),
              (t.instances = {}),
              (t.controllers = {}),
              a.extend(t.prototype, {
                construct: function(n, i) {
                  var r = this;
                  i = e(i);
                  var s = o.acquireContext(n, i),
                    l = s && s.canvas,
                    u = l && l.height,
                    d = l && l.width;
                  (r.id = a.uid()),
                    (r.ctx = s),
                    (r.canvas = l),
                    (r.config = i),
                    (r.width = d),
                    (r.height = u),
                    (r.aspectRatio = u ? d / u : null),
                    (r.options = i.options),
                    (r._bufferedRender = !1),
                    (r.chart = r),
                    (r.controller = r),
                    (t.instances[r.id] = r),
                    Object.defineProperty(r, "data", {
                      get: function() {
                        return r.config.data;
                      },
                      set: function(t) {
                        r.config.data = t;
                      }
                    }),
                    s && l
                      ? (r.initialize(), r.update())
                      : console.error(
                          "Failed to create chart: can't acquire context from the given item"
                        );
                },
                initialize: function() {
                  var t = this;
                  return (
                    l.notify(t, "beforeInit"),
                    a.retinaScale(t, t.options.devicePixelRatio),
                    t.bindEvents(),
                    t.options.responsive && t.resize(!0),
                    t.ensureScalesHaveIDs(),
                    t.buildScales(),
                    t.initToolTip(),
                    l.notify(t, "afterInit"),
                    t
                  );
                },
                clear: function() {
                  return a.canvas.clear(this), this;
                },
                stop: function() {
                  return t.animationService.cancelAnimation(this), this;
                },
                resize: function(t) {
                  var e = this,
                    n = e.options,
                    i = e.canvas,
                    r = (n.maintainAspectRatio && e.aspectRatio) || null,
                    o = Math.max(0, Math.floor(a.getMaximumWidth(i))),
                    s = Math.max(
                      0,
                      Math.floor(r ? o / r : a.getMaximumHeight(i))
                    );
                  if (
                    (e.width !== o || e.height !== s) &&
                    ((i.width = e.width = o),
                    (i.height = e.height = s),
                    (i.style.width = o + "px"),
                    (i.style.height = s + "px"),
                    a.retinaScale(e, n.devicePixelRatio),
                    !t)
                  ) {
                    var u = { width: o, height: s };
                    l.notify(e, "resize", [u]),
                      e.options.onResize && e.options.onResize(e, u),
                      e.stop(),
                      e.update(e.options.responsiveAnimationDuration);
                  }
                },
                ensureScalesHaveIDs: function() {
                  var t = this.options,
                    e = t.scales || {},
                    n = t.scale;
                  a.each(e.xAxes, function(t, e) {
                    t.id = t.id || "x-axis-" + e;
                  }),
                    a.each(e.yAxes, function(t, e) {
                      t.id = t.id || "y-axis-" + e;
                    }),
                    n && (n.id = n.id || "scale");
                },
                buildScales: function() {
                  var e = this,
                    n = e.options,
                    i = (e.scales = {}),
                    r = [];
                  n.scales &&
                    (r = r.concat(
                      (n.scales.xAxes || []).map(function(t) {
                        return {
                          options: t,
                          dtype: "category",
                          dposition: "bottom"
                        };
                      }),
                      (n.scales.yAxes || []).map(function(t) {
                        return {
                          options: t,
                          dtype: "linear",
                          dposition: "left"
                        };
                      })
                    )),
                    n.scale &&
                      r.push({
                        options: n.scale,
                        dtype: "radialLinear",
                        isDefault: !0,
                        dposition: "chartArea"
                      }),
                    a.each(r, function(n) {
                      var r = n.options,
                        o = a.valueOrDefault(r.type, n.dtype),
                        l = t.scaleService.getScaleConstructor(o);
                      if (l) {
                        s(r.position) !== s(n.dposition) &&
                          (r.position = n.dposition);
                        var u = new l({
                          id: r.id,
                          options: r,
                          ctx: e.ctx,
                          chart: e
                        });
                        (i[u.id] = u),
                          u.mergeTicksOptions(),
                          n.isDefault && (e.scale = u);
                      }
                    }),
                    t.scaleService.addScalesToLayout(this);
                },
                buildOrUpdateControllers: function() {
                  var e = this,
                    n = [],
                    i = [];
                  return (
                    a.each(
                      e.data.datasets,
                      function(a, r) {
                        var o = e.getDatasetMeta(r),
                          s = a.type || e.config.type;
                        if (
                          (o.type &&
                            o.type !== s &&
                            (e.destroyDatasetMeta(r),
                            (o = e.getDatasetMeta(r))),
                          (o.type = s),
                          n.push(o.type),
                          o.controller)
                        )
                          o.controller.updateIndex(r);
                        else {
                          var l = t.controllers[o.type];
                          if (void 0 === l)
                            throw new Error(
                              '"' + o.type + '" is not a chart type.'
                            );
                          (o.controller = new l(e, r)), i.push(o.controller);
                        }
                      },
                      e
                    ),
                    i
                  );
                },
                resetElements: function() {
                  var t = this;
                  a.each(
                    t.data.datasets,
                    function(e, n) {
                      t.getDatasetMeta(n).controller.reset();
                    },
                    t
                  );
                },
                reset: function() {
                  this.resetElements(), this.tooltip.initialize();
                },
                update: function(t) {
                  var e = this;
                  if (
                    ((t && "object" == typeof t) ||
                      (t = { duration: t, lazy: arguments[1] }),
                    n(e),
                    !1 !== l.notify(e, "beforeUpdate"))
                  ) {
                    e.tooltip._data = e.data;
                    var i = e.buildOrUpdateControllers();
                    a.each(
                      e.data.datasets,
                      function(t, n) {
                        e.getDatasetMeta(n).controller.buildOrUpdateElements();
                      },
                      e
                    ),
                      e.updateLayout(),
                      a.each(i, function(t) {
                        t.reset();
                      }),
                      e.updateDatasets(),
                      e.tooltip.initialize(),
                      (e.lastActive = []),
                      l.notify(e, "afterUpdate"),
                      e._bufferedRender
                        ? (e._bufferedRequest = {
                            duration: t.duration,
                            easing: t.easing,
                            lazy: t.lazy
                          })
                        : e.render(t);
                  }
                },
                updateLayout: function() {
                  var e = this;
                  !1 !== l.notify(e, "beforeLayout") &&
                    (t.layoutService.update(this, this.width, this.height),
                    l.notify(e, "afterScaleUpdate"),
                    l.notify(e, "afterLayout"));
                },
                updateDatasets: function() {
                  var t = this;
                  if (!1 !== l.notify(t, "beforeDatasetsUpdate")) {
                    for (var e = 0, n = t.data.datasets.length; e < n; ++e)
                      t.updateDataset(e);
                    l.notify(t, "afterDatasetsUpdate");
                  }
                },
                updateDataset: function(t) {
                  var e = this,
                    n = e.getDatasetMeta(t),
                    i = { meta: n, index: t };
                  !1 !== l.notify(e, "beforeDatasetUpdate", [i]) &&
                    (n.controller.update(),
                    l.notify(e, "afterDatasetUpdate", [i]));
                },
                render: function(e) {
                  var n = this;
                  (e && "object" == typeof e) ||
                    (e = { duration: e, lazy: arguments[1] });
                  var i = e.duration,
                    r = e.lazy;
                  if (!1 !== l.notify(n, "beforeRender")) {
                    var o = n.options.animation,
                      s = function(t) {
                        l.notify(n, "afterRender"),
                          a.callback(o && o.onComplete, [t], n);
                      };
                    if (
                      o &&
                      ((void 0 !== i && 0 !== i) ||
                        (void 0 === i && 0 !== o.duration))
                    ) {
                      var u = new t.Animation({
                        numSteps: (i || o.duration) / 16.66,
                        easing: e.easing || o.easing,
                        render: function(t, e) {
                          var n = a.easing.effects[e.easing],
                            i = e.currentStep,
                            r = i / e.numSteps;
                          t.draw(n(r), r, i);
                        },
                        onAnimationProgress: o.onProgress,
                        onAnimationComplete: s
                      });
                      t.animationService.addAnimation(n, u, i, r);
                    } else
                      n.draw(), s(new t.Animation({ numSteps: 0, chart: n }));
                    return n;
                  }
                },
                draw: function(t) {
                  var e = this;
                  e.clear(),
                    a.isNullOrUndef(t) && (t = 1),
                    e.transition(t),
                    !1 !== l.notify(e, "beforeDraw", [t]) &&
                      (a.each(
                        e.boxes,
                        function(t) {
                          t.draw(e.chartArea);
                        },
                        e
                      ),
                      e.scale && e.scale.draw(),
                      e.drawDatasets(t),
                      e._drawTooltip(t),
                      l.notify(e, "afterDraw", [t]));
                },
                transition: function(t) {
                  for (
                    var e = this, n = 0, i = (e.data.datasets || []).length;
                    n < i;
                    ++n
                  )
                    e.isDatasetVisible(n) &&
                      e.getDatasetMeta(n).controller.transition(t);
                  e.tooltip.transition(t);
                },
                drawDatasets: function(t) {
                  var e = this;
                  if (!1 !== l.notify(e, "beforeDatasetsDraw", [t])) {
                    for (
                      var n = (e.data.datasets || []).length - 1;
                      n >= 0;
                      --n
                    )
                      e.isDatasetVisible(n) && e.drawDataset(n, t);
                    l.notify(e, "afterDatasetsDraw", [t]);
                  }
                },
                drawDataset: function(t, e) {
                  var n = this,
                    i = n.getDatasetMeta(t),
                    a = { meta: i, index: t, easingValue: e };
                  !1 !== l.notify(n, "beforeDatasetDraw", [a]) &&
                    (i.controller.draw(e),
                    l.notify(n, "afterDatasetDraw", [a]));
                },
                _drawTooltip: function(t) {
                  var e = this,
                    n = e.tooltip,
                    i = { tooltip: n, easingValue: t };
                  !1 !== l.notify(e, "beforeTooltipDraw", [i]) &&
                    (n.draw(), l.notify(e, "afterTooltipDraw", [i]));
                },
                getElementAtEvent: function(t) {
                  return r.modes.single(this, t);
                },
                getElementsAtEvent: function(t) {
                  return r.modes.label(this, t, { intersect: !0 });
                },
                getElementsAtXAxis: function(t) {
                  return r.modes["x-axis"](this, t, { intersect: !0 });
                },
                getElementsAtEventForMode: function(t, e, n) {
                  var i = r.modes[e];
                  return "function" == typeof i ? i(this, t, n) : [];
                },
                getDatasetAtEvent: function(t) {
                  return r.modes.dataset(this, t, { intersect: !0 });
                },
                getDatasetMeta: function(t) {
                  var e = this,
                    n = e.data.datasets[t];
                  n._meta || (n._meta = {});
                  var i = n._meta[e.id];
                  return (
                    i ||
                      (i = n._meta[e.id] = {
                        type: null,
                        data: [],
                        dataset: null,
                        controller: null,
                        hidden: null,
                        xAxisID: null,
                        yAxisID: null
                      }),
                    i
                  );
                },
                getVisibleDatasetCount: function() {
                  for (
                    var t = 0, e = 0, n = this.data.datasets.length;
                    e < n;
                    ++e
                  )
                    this.isDatasetVisible(e) && t++;
                  return t;
                },
                isDatasetVisible: function(t) {
                  var e = this.getDatasetMeta(t);
                  return "boolean" == typeof e.hidden
                    ? !e.hidden
                    : !this.data.datasets[t].hidden;
                },
                generateLegend: function() {
                  return this.options.legendCallback(this);
                },
                destroyDatasetMeta: function(t) {
                  var e = this.id,
                    n = this.data.datasets[t],
                    i = n._meta && n._meta[e];
                  i && (i.controller.destroy(), delete n._meta[e]);
                },
                destroy: function() {
                  var e,
                    n,
                    i = this,
                    r = i.canvas;
                  for (i.stop(), e = 0, n = i.data.datasets.length; e < n; ++e)
                    i.destroyDatasetMeta(e);
                  r &&
                    (i.unbindEvents(),
                    a.canvas.clear(i),
                    o.releaseContext(i.ctx),
                    (i.canvas = null),
                    (i.ctx = null)),
                    l.notify(i, "destroy"),
                    delete t.instances[i.id];
                },
                toBase64Image: function() {
                  return this.canvas.toDataURL.apply(this.canvas, arguments);
                },
                initToolTip: function() {
                  var e = this;
                  e.tooltip = new t.Tooltip(
                    {
                      _chart: e,
                      _chartInstance: e,
                      _data: e.data,
                      _options: e.options.tooltips
                    },
                    e
                  );
                },
                bindEvents: function() {
                  var t = this,
                    e = (t._listeners = {}),
                    n = function() {
                      t.eventHandler.apply(t, arguments);
                    };
                  a.each(t.options.events, function(i) {
                    o.addEventListener(t, i, n), (e[i] = n);
                  }),
                    t.options.responsive &&
                      ((n = function() {
                        t.resize();
                      }),
                      o.addEventListener(t, "resize", n),
                      (e.resize = n));
                },
                unbindEvents: function() {
                  var t = this,
                    e = t._listeners;
                  e &&
                    (delete t._listeners,
                    a.each(e, function(e, n) {
                      o.removeEventListener(t, n, e);
                    }));
                },
                updateHoverStyle: function(t, e, n) {
                  var i,
                    a,
                    r,
                    o = n ? "setHoverStyle" : "removeHoverStyle";
                  for (a = 0, r = t.length; a < r; ++a)
                    (i = t[a]) &&
                      this.getDatasetMeta(i._datasetIndex).controller[o](i);
                },
                eventHandler: function(t) {
                  var e = this,
                    n = e.tooltip;
                  if (!1 !== l.notify(e, "beforeEvent", [t])) {
                    (e._bufferedRender = !0), (e._bufferedRequest = null);
                    var i = e.handleEvent(t);
                    (i |= n && n.handleEvent(t)),
                      l.notify(e, "afterEvent", [t]);
                    var a = e._bufferedRequest;
                    return (
                      a
                        ? e.render(a)
                        : i &&
                          !e.animating &&
                          (e.stop(),
                          e.render(e.options.hover.animationDuration, !0)),
                      (e._bufferedRender = !1),
                      (e._bufferedRequest = null),
                      e
                    );
                  }
                },
                handleEvent: function(t) {
                  var e = this,
                    n = e.options || {},
                    i = n.hover,
                    r = !1;
                  return (
                    (e.lastActive = e.lastActive || []),
                    "mouseout" === t.type
                      ? (e.active = [])
                      : (e.active = e.getElementsAtEventForMode(t, i.mode, i)),
                    a.callback(
                      n.onHover || n.hover.onHover,
                      [t.native, e.active],
                      e
                    ),
                    ("mouseup" !== t.type && "click" !== t.type) ||
                      (n.onClick && n.onClick.call(e, t.native, e.active)),
                    e.lastActive.length &&
                      e.updateHoverStyle(e.lastActive, i.mode, !1),
                    e.active.length &&
                      i.mode &&
                      e.updateHoverStyle(e.active, i.mode, !0),
                    (r = !a.arrayEquals(e.active, e.lastActive)),
                    (e.lastActive = e.active),
                    r
                  );
                }
              }),
              (t.Controller = t);
          };
        },
        { 25: 25, 28: 28, 45: 45, 48: 48 }
      ],
      24: [
        function(t, e, n) {
          "use strict";
          var i = t(45);
          e.exports = function(t) {
            function e(t, e) {
              t._chartjs
                ? t._chartjs.listeners.push(e)
                : (Object.defineProperty(t, "_chartjs", {
                    configurable: !0,
                    enumerable: !1,
                    value: { listeners: [e] }
                  }),
                  a.forEach(function(e) {
                    var n = "onData" + e.charAt(0).toUpperCase() + e.slice(1),
                      a = t[e];
                    Object.defineProperty(t, e, {
                      configurable: !0,
                      enumerable: !1,
                      value: function() {
                        var e = Array.prototype.slice.call(arguments),
                          r = a.apply(this, e);
                        return (
                          i.each(t._chartjs.listeners, function(t) {
                            "function" == typeof t[n] && t[n].apply(t, e);
                          }),
                          r
                        );
                      }
                    });
                  }));
            }
            function n(t, e) {
              var n = t._chartjs;
              if (n) {
                var i = n.listeners,
                  r = i.indexOf(e);
                -1 !== r && i.splice(r, 1),
                  i.length > 0 ||
                    (a.forEach(function(e) {
                      delete t[e];
                    }),
                    delete t._chartjs);
              }
            }
            var a = ["push", "pop", "shift", "splice", "unshift"];
            (t.DatasetController = function(t, e) {
              this.initialize(t, e);
            }),
              i.extend(t.DatasetController.prototype, {
                datasetElementType: null,
                dataElementType: null,
                initialize: function(t, e) {
                  var n = this;
                  (n.chart = t), (n.index = e), n.linkScales(), n.addElements();
                },
                updateIndex: function(t) {
                  this.index = t;
                },
                linkScales: function() {
                  var t = this,
                    e = t.getMeta(),
                    n = t.getDataset();
                  null === e.xAxisID &&
                    (e.xAxisID =
                      n.xAxisID || t.chart.options.scales.xAxes[0].id),
                    null === e.yAxisID &&
                      (e.yAxisID =
                        n.yAxisID || t.chart.options.scales.yAxes[0].id);
                },
                getDataset: function() {
                  return this.chart.data.datasets[this.index];
                },
                getMeta: function() {
                  return this.chart.getDatasetMeta(this.index);
                },
                getScaleForId: function(t) {
                  return this.chart.scales[t];
                },
                reset: function() {
                  this.update(!0);
                },
                destroy: function() {
                  this._data && n(this._data, this);
                },
                createMetaDataset: function() {
                  var t = this,
                    e = t.datasetElementType;
                  return (
                    e && new e({ _chart: t.chart, _datasetIndex: t.index })
                  );
                },
                createMetaData: function(t) {
                  var e = this,
                    n = e.dataElementType;
                  return (
                    n &&
                    new n({
                      _chart: e.chart,
                      _datasetIndex: e.index,
                      _index: t
                    })
                  );
                },
                addElements: function() {
                  var t,
                    e,
                    n = this,
                    i = n.getMeta(),
                    a = n.getDataset().data || [],
                    r = i.data;
                  for (t = 0, e = a.length; t < e; ++t)
                    r[t] = r[t] || n.createMetaData(t);
                  i.dataset = i.dataset || n.createMetaDataset();
                },
                addElementAndReset: function(t) {
                  var e = this.createMetaData(t);
                  this.getMeta().data.splice(t, 0, e),
                    this.updateElement(e, t, !0);
                },
                buildOrUpdateElements: function() {
                  var t = this,
                    i = t.getDataset(),
                    a = i.data || (i.data = []);
                  t._data !== a &&
                    (t._data && n(t._data, t), e(a, t), (t._data = a)),
                    t.resyncElements();
                },
                update: i.noop,
                transition: function(t) {
                  for (
                    var e = this.getMeta(),
                      n = e.data || [],
                      i = n.length,
                      a = 0;
                    a < i;
                    ++a
                  )
                    n[a].transition(t);
                  e.dataset && e.dataset.transition(t);
                },
                draw: function() {
                  var t = this.getMeta(),
                    e = t.data || [],
                    n = e.length,
                    i = 0;
                  for (t.dataset && t.dataset.draw(); i < n; ++i) e[i].draw();
                },
                removeHoverStyle: function(t, e) {
                  var n = this.chart.data.datasets[t._datasetIndex],
                    a = t._index,
                    r = t.custom || {},
                    o = i.valueAtIndexOrDefault,
                    s = t._model;
                  (s.backgroundColor = r.backgroundColor
                    ? r.backgroundColor
                    : o(n.backgroundColor, a, e.backgroundColor)),
                    (s.borderColor = r.borderColor
                      ? r.borderColor
                      : o(n.borderColor, a, e.borderColor)),
                    (s.borderWidth = r.borderWidth
                      ? r.borderWidth
                      : o(n.borderWidth, a, e.borderWidth));
                },
                setHoverStyle: function(t) {
                  var e = this.chart.data.datasets[t._datasetIndex],
                    n = t._index,
                    a = t.custom || {},
                    r = i.valueAtIndexOrDefault,
                    o = i.getHoverColor,
                    s = t._model;
                  (s.backgroundColor = a.hoverBackgroundColor
                    ? a.hoverBackgroundColor
                    : r(e.hoverBackgroundColor, n, o(s.backgroundColor))),
                    (s.borderColor = a.hoverBorderColor
                      ? a.hoverBorderColor
                      : r(e.hoverBorderColor, n, o(s.borderColor))),
                    (s.borderWidth = a.hoverBorderWidth
                      ? a.hoverBorderWidth
                      : r(e.hoverBorderWidth, n, s.borderWidth));
                },
                resyncElements: function() {
                  var t = this,
                    e = t.getMeta(),
                    n = t.getDataset().data,
                    i = e.data.length,
                    a = n.length;
                  a < i
                    ? e.data.splice(a, i - a)
                    : a > i && t.insertElements(i, a - i);
                },
                insertElements: function(t, e) {
                  for (var n = 0; n < e; ++n) this.addElementAndReset(t + n);
                },
                onDataPush: function() {
                  this.insertElements(
                    this.getDataset().data.length - 1,
                    arguments.length
                  );
                },
                onDataPop: function() {
                  this.getMeta().data.pop();
                },
                onDataShift: function() {
                  this.getMeta().data.shift();
                },
                onDataSplice: function(t, e) {
                  this.getMeta().data.splice(t, e),
                    this.insertElements(t, arguments.length - 2);
                },
                onDataUnshift: function() {
                  this.insertElements(0, arguments.length);
                }
              }),
              (t.DatasetController.extend = i.inherits);
          };
        },
        { 45: 45 }
      ],
      25: [
        function(t, e, n) {
          "use strict";
          var i = t(45);
          e.exports = {
            _set: function(t, e) {
              return i.merge(this[t] || (this[t] = {}), e);
            }
          };
        },
        { 45: 45 }
      ],
      26: [
        function(t, e, n) {
          "use strict";
          function i(t, e, n, i) {
            var r,
              o,
              s,
              l,
              u,
              d,
              c,
              h,
              f,
              g = Object.keys(n);
            for (r = 0, o = g.length; r < o; ++r)
              if (
                ((s = g[r]),
                (d = n[s]),
                e.hasOwnProperty(s) || (e[s] = d),
                (l = e[s]) !== d && "_" !== s[0])
              ) {
                if (
                  (t.hasOwnProperty(s) || (t[s] = l),
                  (u = t[s]),
                  (c = typeof d) === typeof u)
                )
                  if ("string" === c) {
                    if ((h = a(u)).valid && (f = a(d)).valid) {
                      e[s] = f.mix(h, i).rgbString();
                      continue;
                    }
                  } else if ("number" === c && isFinite(u) && isFinite(d)) {
                    e[s] = u + (d - u) * i;
                    continue;
                  }
                e[s] = d;
              }
          }
          var a = t(2),
            r = t(45),
            o = function(t) {
              r.extend(this, t), this.initialize.apply(this, arguments);
            };
          r.extend(o.prototype, {
            initialize: function() {
              this.hidden = !1;
            },
            pivot: function() {
              var t = this;
              return (
                t._view || (t._view = r.clone(t._model)), (t._start = {}), t
              );
            },
            transition: function(t) {
              var e = this,
                n = e._model,
                a = e._start,
                r = e._view;
              return n && 1 !== t
                ? (r || (r = e._view = {}),
                  a || (a = e._start = {}),
                  i(a, r, n, t),
                  e)
                : ((e._view = n), (e._start = null), e);
            },
            tooltipPosition: function() {
              return { x: this._model.x, y: this._model.y };
            },
            hasValue: function() {
              return r.isNumber(this._model.x) && r.isNumber(this._model.y);
            }
          }),
            (o.extend = r.inherits),
            (e.exports = o);
        },
        { 2: 2, 45: 45 }
      ],
      27: [
        function(t, e, n) {
          "use strict";
          var i = t(2),
            a = t(25),
            r = t(45);
          e.exports = function(t) {
            function e(t, e, n) {
              var i;
              return (
                "string" == typeof t
                  ? ((i = parseInt(t, 10)),
                    -1 !== t.indexOf("%") && (i = i / 100 * e.parentNode[n]))
                  : (i = t),
                i
              );
            }
            function n(t) {
              return void 0 !== t && null !== t && "none" !== t;
            }
            function o(t, i, a) {
              var r = document.defaultView,
                o = t.parentNode,
                s = r.getComputedStyle(t)[i],
                l = r.getComputedStyle(o)[i],
                u = n(s),
                d = n(l),
                c = Number.POSITIVE_INFINITY;
              return u || d
                ? Math.min(u ? e(s, t, a) : c, d ? e(l, o, a) : c)
                : "none";
            }
            (r.configMerge = function() {
              return r.merge(
                r.clone(arguments[0]),
                [].slice.call(arguments, 1),
                {
                  merger: function(e, n, i, a) {
                    var o = n[e] || {},
                      s = i[e];
                    "scales" === e
                      ? (n[e] = r.scaleMerge(o, s))
                      : "scale" === e
                        ? (n[e] = r.merge(o, [
                            t.scaleService.getScaleDefaults(s.type),
                            s
                          ]))
                        : r._merger(e, n, i, a);
                  }
                }
              );
            }),
              (r.scaleMerge = function() {
                return r.merge(
                  r.clone(arguments[0]),
                  [].slice.call(arguments, 1),
                  {
                    merger: function(e, n, i, a) {
                      if ("xAxes" === e || "yAxes" === e) {
                        var o,
                          s,
                          l,
                          u = i[e].length;
                        for (n[e] || (n[e] = []), o = 0; o < u; ++o)
                          (l = i[e][o]),
                            (s = r.valueOrDefault(
                              l.type,
                              "xAxes" === e ? "category" : "linear"
                            )),
                            o >= n[e].length && n[e].push({}),
                            !n[e][o].type || (l.type && l.type !== n[e][o].type)
                              ? r.merge(n[e][o], [
                                  t.scaleService.getScaleDefaults(s),
                                  l
                                ])
                              : r.merge(n[e][o], l);
                      } else r._merger(e, n, i, a);
                    }
                  }
                );
              }),
              (r.where = function(t, e) {
                if (r.isArray(t) && Array.prototype.filter) return t.filter(e);
                var n = [];
                return (
                  r.each(t, function(t) {
                    e(t) && n.push(t);
                  }),
                  n
                );
              }),
              (r.findIndex = Array.prototype.findIndex
                ? function(t, e, n) {
                    return t.findIndex(e, n);
                  }
                : function(t, e, n) {
                    n = void 0 === n ? t : n;
                    for (var i = 0, a = t.length; i < a; ++i)
                      if (e.call(n, t[i], i, t)) return i;
                    return -1;
                  }),
              (r.findNextWhere = function(t, e, n) {
                r.isNullOrUndef(n) && (n = -1);
                for (var i = n + 1; i < t.length; i++) {
                  var a = t[i];
                  if (e(a)) return a;
                }
              }),
              (r.findPreviousWhere = function(t, e, n) {
                r.isNullOrUndef(n) && (n = t.length);
                for (var i = n - 1; i >= 0; i--) {
                  var a = t[i];
                  if (e(a)) return a;
                }
              }),
              (r.isNumber = function(t) {
                return !isNaN(parseFloat(t)) && isFinite(t);
              }),
              (r.almostEquals = function(t, e, n) {
                return Math.abs(t - e) < n;
              }),
              (r.almostWhole = function(t, e) {
                var n = Math.round(t);
                return n - e < t && n + e > t;
              }),
              (r.max = function(t) {
                return t.reduce(function(t, e) {
                  return isNaN(e) ? t : Math.max(t, e);
                }, Number.NEGATIVE_INFINITY);
              }),
              (r.min = function(t) {
                return t.reduce(function(t, e) {
                  return isNaN(e) ? t : Math.min(t, e);
                }, Number.POSITIVE_INFINITY);
              }),
              (r.sign = Math.sign
                ? function(t) {
                    return Math.sign(t);
                  }
                : function(t) {
                    return 0 == (t = +t) || isNaN(t) ? t : t > 0 ? 1 : -1;
                  }),
              (r.log10 = Math.log10
                ? function(t) {
                    return Math.log10(t);
                  }
                : function(t) {
                    return Math.log(t) / Math.LN10;
                  }),
              (r.toRadians = function(t) {
                return t * (Math.PI / 180);
              }),
              (r.toDegrees = function(t) {
                return t * (180 / Math.PI);
              }),
              (r.getAngleFromPoint = function(t, e) {
                var n = e.x - t.x,
                  i = e.y - t.y,
                  a = Math.sqrt(n * n + i * i),
                  r = Math.atan2(i, n);
                return (
                  r < -0.5 * Math.PI && (r += 2 * Math.PI),
                  { angle: r, distance: a }
                );
              }),
              (r.distanceBetweenPoints = function(t, e) {
                return Math.sqrt(
                  Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)
                );
              }),
              (r.aliasPixel = function(t) {
                return t % 2 == 0 ? 0 : 0.5;
              }),
              (r.splineCurve = function(t, e, n, i) {
                var a = t.skip ? e : t,
                  r = e,
                  o = n.skip ? e : n,
                  s = Math.sqrt(
                    Math.pow(r.x - a.x, 2) + Math.pow(r.y - a.y, 2)
                  ),
                  l = Math.sqrt(
                    Math.pow(o.x - r.x, 2) + Math.pow(o.y - r.y, 2)
                  ),
                  u = s / (s + l),
                  d = l / (s + l),
                  c = i * (u = isNaN(u) ? 0 : u),
                  h = i * (d = isNaN(d) ? 0 : d);
                return {
                  previous: {
                    x: r.x - c * (o.x - a.x),
                    y: r.y - c * (o.y - a.y)
                  },
                  next: { x: r.x + h * (o.x - a.x), y: r.y + h * (o.y - a.y) }
                };
              }),
              (r.EPSILON = Number.EPSILON || 1e-14),
              (r.splineCurveMonotone = function(t) {
                var e,
                  n,
                  i,
                  a,
                  o = (t || []).map(function(t) {
                    return { model: t._model, deltaK: 0, mK: 0 };
                  }),
                  s = o.length;
                for (e = 0; e < s; ++e)
                  if (!(i = o[e]).model.skip) {
                    if (
                      ((n = e > 0 ? o[e - 1] : null),
                      (a = e < s - 1 ? o[e + 1] : null) && !a.model.skip)
                    ) {
                      var l = a.model.x - i.model.x;
                      i.deltaK = 0 !== l ? (a.model.y - i.model.y) / l : 0;
                    }
                    !n || n.model.skip
                      ? (i.mK = i.deltaK)
                      : !a || a.model.skip
                        ? (i.mK = n.deltaK)
                        : this.sign(n.deltaK) !== this.sign(i.deltaK)
                          ? (i.mK = 0)
                          : (i.mK = (n.deltaK + i.deltaK) / 2);
                  }
                var u, d, c, h;
                for (e = 0; e < s - 1; ++e)
                  (i = o[e]),
                    (a = o[e + 1]),
                    i.model.skip ||
                      a.model.skip ||
                      (r.almostEquals(i.deltaK, 0, this.EPSILON)
                        ? (i.mK = a.mK = 0)
                        : ((u = i.mK / i.deltaK),
                          (d = a.mK / i.deltaK),
                          (h = Math.pow(u, 2) + Math.pow(d, 2)) <= 9 ||
                            ((c = 3 / Math.sqrt(h)),
                            (i.mK = u * c * i.deltaK),
                            (a.mK = d * c * i.deltaK))));
                var f;
                for (e = 0; e < s; ++e)
                  (i = o[e]).model.skip ||
                    ((n = e > 0 ? o[e - 1] : null),
                    (a = e < s - 1 ? o[e + 1] : null),
                    n &&
                      !n.model.skip &&
                      ((f = (i.model.x - n.model.x) / 3),
                      (i.model.controlPointPreviousX = i.model.x - f),
                      (i.model.controlPointPreviousY = i.model.y - f * i.mK)),
                    a &&
                      !a.model.skip &&
                      ((f = (a.model.x - i.model.x) / 3),
                      (i.model.controlPointNextX = i.model.x + f),
                      (i.model.controlPointNextY = i.model.y + f * i.mK)));
              }),
              (r.nextItem = function(t, e, n) {
                return n
                  ? e >= t.length - 1
                    ? t[0]
                    : t[e + 1]
                  : e >= t.length - 1
                    ? t[t.length - 1]
                    : t[e + 1];
              }),
              (r.previousItem = function(t, e, n) {
                return n
                  ? e <= 0
                    ? t[t.length - 1]
                    : t[e - 1]
                  : e <= 0
                    ? t[0]
                    : t[e - 1];
              }),
              (r.niceNum = function(t, e) {
                var n = Math.floor(r.log10(t)),
                  i = t / Math.pow(10, n);
                return (
                  (e
                    ? i < 1.5
                      ? 1
                      : i < 3
                        ? 2
                        : i < 7
                          ? 5
                          : 10
                    : i <= 1
                      ? 1
                      : i <= 2
                        ? 2
                        : i <= 5
                          ? 5
                          : 10) * Math.pow(10, n)
                );
              }),
              (r.requestAnimFrame =
                "undefined" == typeof window
                  ? function(t) {
                      t();
                    }
                  : window.requestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.oRequestAnimationFrame ||
                    window.msRequestAnimationFrame ||
                    function(t) {
                      return window.setTimeout(t, 1e3 / 60);
                    }),
              (r.getRelativePosition = function(t, e) {
                var n,
                  i,
                  a = t.originalEvent || t,
                  o = t.currentTarget || t.srcElement,
                  s = o.getBoundingClientRect(),
                  l = a.touches;
                l && l.length > 0
                  ? ((n = l[0].clientX), (i = l[0].clientY))
                  : ((n = a.clientX), (i = a.clientY));
                var u = parseFloat(r.getStyle(o, "padding-left")),
                  d = parseFloat(r.getStyle(o, "padding-top")),
                  c = parseFloat(r.getStyle(o, "padding-right")),
                  h = parseFloat(r.getStyle(o, "padding-bottom")),
                  f = s.right - s.left - u - c,
                  g = s.bottom - s.top - d - h;
                return (
                  (n = Math.round(
                    (n - s.left - u) / f * o.width / e.currentDevicePixelRatio
                  )),
                  (i = Math.round(
                    (i - s.top - d) / g * o.height / e.currentDevicePixelRatio
                  )),
                  { x: n, y: i }
                );
              }),
              (r.getConstraintWidth = function(t) {
                return o(t, "max-width", "clientWidth");
              }),
              (r.getConstraintHeight = function(t) {
                return o(t, "max-height", "clientHeight");
              }),
              (r.getMaximumWidth = function(t) {
                var e = t.parentNode;
                if (!e) return t.clientWidth;
                var n = parseInt(r.getStyle(e, "padding-left"), 10),
                  i = parseInt(r.getStyle(e, "padding-right"), 10),
                  a = e.clientWidth - n - i,
                  o = r.getConstraintWidth(t);
                return isNaN(o) ? a : Math.min(a, o);
              }),
              (r.getMaximumHeight = function(t) {
                var e = t.parentNode;
                if (!e) return t.clientHeight;
                var n = parseInt(r.getStyle(e, "padding-top"), 10),
                  i = parseInt(r.getStyle(e, "padding-bottom"), 10),
                  a = e.clientHeight - n - i,
                  o = r.getConstraintHeight(t);
                return isNaN(o) ? a : Math.min(a, o);
              }),
              (r.getStyle = function(t, e) {
                return t.currentStyle
                  ? t.currentStyle[e]
                  : document.defaultView
                      .getComputedStyle(t, null)
                      .getPropertyValue(e);
              }),
              (r.retinaScale = function(t, e) {
                var n = (t.currentDevicePixelRatio =
                  e || window.devicePixelRatio || 1);
                if (1 !== n) {
                  var i = t.canvas,
                    a = t.height,
                    r = t.width;
                  (i.height = a * n),
                    (i.width = r * n),
                    t.ctx.scale(n, n),
                    (i.style.height = a + "px"),
                    (i.style.width = r + "px");
                }
              }),
              (r.fontString = function(t, e, n) {
                return e + " " + t + "px " + n;
              }),
              (r.longestText = function(t, e, n, i) {
                var a = ((i = i || {}).data = i.data || {}),
                  o = (i.garbageCollect = i.garbageCollect || []);
                i.font !== e &&
                  ((a = i.data = {}),
                  (o = i.garbageCollect = []),
                  (i.font = e)),
                  (t.font = e);
                var s = 0;
                r.each(n, function(e) {
                  void 0 !== e && null !== e && !0 !== r.isArray(e)
                    ? (s = r.measureText(t, a, o, s, e))
                    : r.isArray(e) &&
                      r.each(e, function(e) {
                        void 0 === e ||
                          null === e ||
                          r.isArray(e) ||
                          (s = r.measureText(t, a, o, s, e));
                      });
                });
                var l = o.length / 2;
                if (l > n.length) {
                  for (var u = 0; u < l; u++) delete a[o[u]];
                  o.splice(0, l);
                }
                return s;
              }),
              (r.measureText = function(t, e, n, i, a) {
                var r = e[a];
                return (
                  r || ((r = e[a] = t.measureText(a).width), n.push(a)),
                  r > i && (i = r),
                  i
                );
              }),
              (r.numberOfLabelLines = function(t) {
                var e = 1;
                return (
                  r.each(t, function(t) {
                    r.isArray(t) && t.length > e && (e = t.length);
                  }),
                  e
                );
              }),
              (r.color = i
                ? function(t) {
                    return (
                      t instanceof CanvasGradient &&
                        (t = a.global.defaultColor),
                      i(t)
                    );
                  }
                : function(t) {
                    return console.error("Color.js not found!"), t;
                  }),
              (r.getHoverColor = function(t) {
                return t instanceof CanvasPattern
                  ? t
                  : r
                      .color(t)
                      .saturate(0.5)
                      .darken(0.1)
                      .rgbString();
              });
          };
        },
        { 2: 2, 25: 25, 45: 45 }
      ],
      28: [
        function(t, e, n) {
          "use strict";
          function i(t, e) {
            return t.native ? { x: t.x, y: t.y } : u.getRelativePosition(t, e);
          }
          function a(t, e) {
            var n, i, a, r, o;
            for (i = 0, r = t.data.datasets.length; i < r; ++i)
              if (t.isDatasetVisible(i))
                for (
                  a = 0, o = (n = t.getDatasetMeta(i)).data.length;
                  a < o;
                  ++a
                ) {
                  var s = n.data[a];
                  s._view.skip || e(s);
                }
          }
          function r(t, e) {
            var n = [];
            return (
              a(t, function(t) {
                t.inRange(e.x, e.y) && n.push(t);
              }),
              n
            );
          }
          function o(t, e, n, i) {
            var r = Number.POSITIVE_INFINITY,
              o = [];
            return (
              a(t, function(t) {
                if (!n || t.inRange(e.x, e.y)) {
                  var a = t.getCenterPoint(),
                    s = i(e, a);
                  s < r ? ((o = [t]), (r = s)) : s === r && o.push(t);
                }
              }),
              o
            );
          }
          function s(t) {
            var e = -1 !== t.indexOf("x"),
              n = -1 !== t.indexOf("y");
            return function(t, i) {
              var a = e ? Math.abs(t.x - i.x) : 0,
                r = n ? Math.abs(t.y - i.y) : 0;
              return Math.sqrt(Math.pow(a, 2) + Math.pow(r, 2));
            };
          }
          function l(t, e, n) {
            var a = i(e, t);
            n.axis = n.axis || "x";
            var l = s(n.axis),
              u = n.intersect ? r(t, a) : o(t, a, !1, l),
              d = [];
            return u.length
              ? (t.data.datasets.forEach(function(e, n) {
                  if (t.isDatasetVisible(n)) {
                    var i = t.getDatasetMeta(n).data[u[0]._index];
                    i && !i._view.skip && d.push(i);
                  }
                }),
                d)
              : [];
          }
          var u = t(45);
          e.exports = {
            modes: {
              single: function(t, e) {
                var n = i(e, t),
                  r = [];
                return (
                  a(t, function(t) {
                    if (t.inRange(n.x, n.y)) return r.push(t), r;
                  }),
                  r.slice(0, 1)
                );
              },
              label: l,
              index: l,
              dataset: function(t, e, n) {
                var a = i(e, t);
                n.axis = n.axis || "xy";
                var l = s(n.axis),
                  u = n.intersect ? r(t, a) : o(t, a, !1, l);
                return (
                  u.length > 0 &&
                    (u = t.getDatasetMeta(u[0]._datasetIndex).data),
                  u
                );
              },
              "x-axis": function(t, e) {
                return l(t, e, { intersect: !1 });
              },
              point: function(t, e) {
                return r(t, i(e, t));
              },
              nearest: function(t, e, n) {
                var a = i(e, t);
                n.axis = n.axis || "xy";
                var r = s(n.axis),
                  l = o(t, a, n.intersect, r);
                return (
                  l.length > 1 &&
                    l.sort(function(t, e) {
                      var n = t.getArea() - e.getArea();
                      return (
                        0 === n && (n = t._datasetIndex - e._datasetIndex), n
                      );
                    }),
                  l.slice(0, 1)
                );
              },
              x: function(t, e, n) {
                var r = i(e, t),
                  o = [],
                  s = !1;
                return (
                  a(t, function(t) {
                    t.inXRange(r.x) && o.push(t),
                      t.inRange(r.x, r.y) && (s = !0);
                  }),
                  n.intersect && !s && (o = []),
                  o
                );
              },
              y: function(t, e, n) {
                var r = i(e, t),
                  o = [],
                  s = !1;
                return (
                  a(t, function(t) {
                    t.inYRange(r.y) && o.push(t),
                      t.inRange(r.x, r.y) && (s = !0);
                  }),
                  n.intersect && !s && (o = []),
                  o
                );
              }
            }
          };
        },
        { 45: 45 }
      ],
      29: [
        function(t, e, n) {
          "use strict";
          t(25)._set("global", {
            responsive: !0,
            responsiveAnimationDuration: 0,
            maintainAspectRatio: !0,
            events: [
              "mousemove",
              "mouseout",
              "click",
              "touchstart",
              "touchmove"
            ],
            hover: {
              onHover: null,
              mode: "nearest",
              intersect: !0,
              animationDuration: 400
            },
            onClick: null,
            defaultColor: "rgba(0,0,0,0.1)",
            defaultFontColor: "#666",
            defaultFontFamily:
              "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            defaultFontSize: 12,
            defaultFontStyle: "normal",
            showLines: !0,
            elements: {},
            layout: { padding: { top: 0, right: 0, bottom: 0, left: 0 } }
          }),
            (e.exports = function() {
              var t = function(t, e) {
                return this.construct(t, e), this;
              };
              return (t.Chart = t), t;
            });
        },
        { 25: 25 }
      ],
      30: [
        function(t, e, n) {
          "use strict";
          var i = t(45);
          e.exports = function(t) {
            function e(t, e) {
              return i.where(t, function(t) {
                return t.position === e;
              });
            }
            function n(t, e) {
              t.forEach(function(t, e) {
                return (t._tmpIndex_ = e), t;
              }),
                t.sort(function(t, n) {
                  var i = e ? n : t,
                    a = e ? t : n;
                  return i.weight === a.weight
                    ? i._tmpIndex_ - a._tmpIndex_
                    : i.weight - a.weight;
                }),
                t.forEach(function(t) {
                  delete t._tmpIndex_;
                });
            }
            t.layoutService = {
              defaults: {},
              addBox: function(t, e) {
                t.boxes || (t.boxes = []),
                  (e.fullWidth = e.fullWidth || !1),
                  (e.position = e.position || "top"),
                  (e.weight = e.weight || 0),
                  t.boxes.push(e);
              },
              removeBox: function(t, e) {
                var n = t.boxes ? t.boxes.indexOf(e) : -1;
                -1 !== n && t.boxes.splice(n, 1);
              },
              configure: function(t, e, n) {
                for (
                  var i,
                    a = ["fullWidth", "position", "weight"],
                    r = a.length,
                    o = 0;
                  o < r;
                  ++o
                )
                  (i = a[o]), n.hasOwnProperty(i) && (e[i] = n[i]);
              },
              update: function(t, a, r) {
                function o(t) {
                  var e = i.findNextWhere(D, function(e) {
                    return e.box === t;
                  });
                  if (e)
                    if (t.isHorizontal()) {
                      var n = {
                        left: Math.max(I, C),
                        right: Math.max(O, P),
                        top: 0,
                        bottom: 0
                      };
                      t.update(t.fullWidth ? b : M, x / 2, n);
                    } else t.update(e.minSize.width, S);
                }
                function s(t) {
                  t.isHorizontal()
                    ? ((t.left = t.fullWidth ? d : I),
                      (t.right = t.fullWidth ? a - c : I + M),
                      (t.top = B),
                      (t.bottom = B + t.height),
                      (B = t.bottom))
                    : ((t.left = z),
                      (t.right = z + t.width),
                      (t.top = F),
                      (t.bottom = F + S),
                      (z = t.right));
                }
                if (t) {
                  var l = t.options.layout || {},
                    u = i.options.toPadding(l.padding),
                    d = u.left,
                    c = u.right,
                    h = u.top,
                    f = u.bottom,
                    g = e(t.boxes, "left"),
                    m = e(t.boxes, "right"),
                    p = e(t.boxes, "top"),
                    v = e(t.boxes, "bottom"),
                    y = e(t.boxes, "chartArea");
                  n(g, !0), n(m, !1), n(p, !0), n(v, !1);
                  var b = a - d - c,
                    x = r - h - f,
                    _ = x / 2,
                    k = (a - b / 2) / (g.length + m.length),
                    w = (r - _) / (p.length + v.length),
                    M = b,
                    S = x,
                    D = [];
                  i.each(g.concat(m, p, v), function(t) {
                    var e,
                      n = t.isHorizontal();
                    n
                      ? ((e = t.update(t.fullWidth ? b : M, w)),
                        (S -= e.height))
                      : ((e = t.update(k, _)), (M -= e.width)),
                      D.push({ horizontal: n, minSize: e, box: t });
                  });
                  var C = 0,
                    P = 0,
                    T = 0,
                    A = 0;
                  i.each(p.concat(v), function(t) {
                    if (t.getPadding) {
                      var e = t.getPadding();
                      (C = Math.max(C, e.left)), (P = Math.max(P, e.right));
                    }
                  }),
                    i.each(g.concat(m), function(t) {
                      if (t.getPadding) {
                        var e = t.getPadding();
                        (T = Math.max(T, e.top)), (A = Math.max(A, e.bottom));
                      }
                    });
                  var I = d,
                    O = c,
                    F = h,
                    R = f;
                  i.each(g.concat(m), o),
                    i.each(g, function(t) {
                      I += t.width;
                    }),
                    i.each(m, function(t) {
                      O += t.width;
                    }),
                    i.each(p.concat(v), o),
                    i.each(p, function(t) {
                      F += t.height;
                    }),
                    i.each(v, function(t) {
                      R += t.height;
                    }),
                    i.each(g.concat(m), function(t) {
                      var e = i.findNextWhere(D, function(e) {
                          return e.box === t;
                        }),
                        n = { left: 0, right: 0, top: F, bottom: R };
                      e && t.update(e.minSize.width, S, n);
                    }),
                    (I = d),
                    (O = c),
                    (F = h),
                    (R = f),
                    i.each(g, function(t) {
                      I += t.width;
                    }),
                    i.each(m, function(t) {
                      O += t.width;
                    }),
                    i.each(p, function(t) {
                      F += t.height;
                    }),
                    i.each(v, function(t) {
                      R += t.height;
                    });
                  var L = Math.max(C - I, 0);
                  (I += L), (O += Math.max(P - O, 0));
                  var W = Math.max(T - F, 0);
                  (F += W), (R += Math.max(A - R, 0));
                  var Y = r - F - R,
                    N = a - I - O;
                  (N === M && Y === S) ||
                    (i.each(g, function(t) {
                      t.height = Y;
                    }),
                    i.each(m, function(t) {
                      t.height = Y;
                    }),
                    i.each(p, function(t) {
                      t.fullWidth || (t.width = N);
                    }),
                    i.each(v, function(t) {
                      t.fullWidth || (t.width = N);
                    }),
                    (S = Y),
                    (M = N));
                  var z = d + L,
                    B = h + W;
                  i.each(g.concat(p), s),
                    (z += M),
                    (B += S),
                    i.each(m, s),
                    i.each(v, s),
                    (t.chartArea = {
                      left: I,
                      top: F,
                      right: I + M,
                      bottom: F + S
                    }),
                    i.each(y, function(e) {
                      (e.left = t.chartArea.left),
                        (e.top = t.chartArea.top),
                        (e.right = t.chartArea.right),
                        (e.bottom = t.chartArea.bottom),
                        e.update(M, S);
                    });
                }
              }
            };
          };
        },
        { 45: 45 }
      ],
      31: [
        function(t, e, n) {
          "use strict";
          var i = t(25),
            a = t(26),
            r = t(45);
          i._set("global", { plugins: {} }),
            (e.exports = function(t) {
              (t.plugins = {
                _plugins: [],
                _cacheId: 0,
                register: function(t) {
                  var e = this._plugins;
                  [].concat(t).forEach(function(t) {
                    -1 === e.indexOf(t) && e.push(t);
                  }),
                    this._cacheId++;
                },
                unregister: function(t) {
                  var e = this._plugins;
                  [].concat(t).forEach(function(t) {
                    var n = e.indexOf(t);
                    -1 !== n && e.splice(n, 1);
                  }),
                    this._cacheId++;
                },
                clear: function() {
                  (this._plugins = []), this._cacheId++;
                },
                count: function() {
                  return this._plugins.length;
                },
                getAll: function() {
                  return this._plugins;
                },
                notify: function(t, e, n) {
                  var i,
                    a,
                    r,
                    o,
                    s,
                    l = this.descriptors(t),
                    u = l.length;
                  for (i = 0; i < u; ++i)
                    if (
                      ((a = l[i]),
                      (r = a.plugin),
                      "function" == typeof (s = r[e]) &&
                        ((o = [t].concat(n || [])).push(a.options),
                        !1 === s.apply(r, o)))
                    )
                      return !1;
                  return !0;
                },
                descriptors: function(t) {
                  var e = t._plugins || (t._plugins = {});
                  if (e.id === this._cacheId) return e.descriptors;
                  var n = [],
                    a = [],
                    o = (t && t.config) || {},
                    s = (o.options && o.options.plugins) || {};
                  return (
                    this._plugins.concat(o.plugins || []).forEach(function(t) {
                      if (-1 === n.indexOf(t)) {
                        var e = t.id,
                          o = s[e];
                        !1 !== o &&
                          (!0 === o && (o = r.clone(i.global.plugins[e])),
                          n.push(t),
                          a.push({ plugin: t, options: o || {} }));
                      }
                    }),
                    (e.descriptors = a),
                    (e.id = this._cacheId),
                    a
                  );
                }
              }),
                (t.pluginService = t.plugins),
                (t.PluginBase = a.extend({}));
            });
        },
        { 25: 25, 26: 26, 45: 45 }
      ],
      32: [
        function(t, e, n) {
          "use strict";
          function i(t) {
            var e,
              n,
              i = [];
            for (e = 0, n = t.length; e < n; ++e) i.push(t[e].label);
            return i;
          }
          function a(t, e, n) {
            var i = t.getPixelForTick(e);
            return (
              n &&
                (i -=
                  0 === e
                    ? (t.getPixelForTick(1) - i) / 2
                    : (i - t.getPixelForTick(e - 1)) / 2),
              i
            );
          }
          var r = t(25),
            o = t(26),
            s = t(45),
            l = t(34);
          r._set("scale", {
            display: !0,
            position: "left",
            offset: !1,
            gridLines: {
              display: !0,
              color: "rgba(0, 0, 0, 0.1)",
              lineWidth: 1,
              drawBorder: !0,
              drawOnChartArea: !0,
              drawTicks: !0,
              tickMarkLength: 10,
              zeroLineWidth: 1,
              zeroLineColor: "rgba(0,0,0,0.25)",
              zeroLineBorderDash: [],
              zeroLineBorderDashOffset: 0,
              offsetGridLines: !1,
              borderDash: [],
              borderDashOffset: 0
            },
            scaleLabel: {
              display: !1,
              labelString: "",
              lineHeight: 1.2,
              padding: { top: 4, bottom: 4 }
            },
            ticks: {
              beginAtZero: !1,
              minRotation: 0,
              maxRotation: 50,
              mirror: !1,
              padding: 0,
              reverse: !1,
              display: !0,
              autoSkip: !0,
              autoSkipPadding: 0,
              labelOffset: 0,
              callback: l.formatters.values,
              minor: {},
              major: {}
            }
          }),
            (e.exports = function(t) {
              function e(t, e, n) {
                return s.isArray(e)
                  ? s.longestText(t, n, e)
                  : t.measureText(e).width;
              }
              function n(t) {
                var e = s.valueOrDefault,
                  n = r.global,
                  i = e(t.fontSize, n.defaultFontSize),
                  a = e(t.fontStyle, n.defaultFontStyle),
                  o = e(t.fontFamily, n.defaultFontFamily);
                return {
                  size: i,
                  style: a,
                  family: o,
                  font: s.fontString(i, a, o)
                };
              }
              function l(t) {
                return s.options.toLineHeight(
                  s.valueOrDefault(t.lineHeight, 1.2),
                  s.valueOrDefault(t.fontSize, r.global.defaultFontSize)
                );
              }
              t.Scale = o.extend({
                getPadding: function() {
                  var t = this;
                  return {
                    left: t.paddingLeft || 0,
                    top: t.paddingTop || 0,
                    right: t.paddingRight || 0,
                    bottom: t.paddingBottom || 0
                  };
                },
                getTicks: function() {
                  return this._ticks;
                },
                mergeTicksOptions: function() {
                  var t = this.options.ticks;
                  !1 === t.minor && (t.minor = { display: !1 }),
                    !1 === t.major && (t.major = { display: !1 });
                  for (var e in t)
                    "major" !== e &&
                      "minor" !== e &&
                      (void 0 === t.minor[e] && (t.minor[e] = t[e]),
                      void 0 === t.major[e] && (t.major[e] = t[e]));
                },
                beforeUpdate: function() {
                  s.callback(this.options.beforeUpdate, [this]);
                },
                update: function(t, e, n) {
                  var i,
                    a,
                    r,
                    o,
                    l,
                    u,
                    d = this;
                  for (
                    d.beforeUpdate(),
                      d.maxWidth = t,
                      d.maxHeight = e,
                      d.margins = s.extend(
                        { left: 0, right: 0, top: 0, bottom: 0 },
                        n
                      ),
                      d.longestTextCache = d.longestTextCache || {},
                      d.beforeSetDimensions(),
                      d.setDimensions(),
                      d.afterSetDimensions(),
                      d.beforeDataLimits(),
                      d.determineDataLimits(),
                      d.afterDataLimits(),
                      d.beforeBuildTicks(),
                      l = d.buildTicks() || [],
                      d.afterBuildTicks(),
                      d.beforeTickToLabelConversion(),
                      r = d.convertTicksToLabels(l) || d.ticks,
                      d.afterTickToLabelConversion(),
                      d.ticks = r,
                      i = 0,
                      a = r.length;
                    i < a;
                    ++i
                  )
                    (o = r[i]),
                      (u = l[i])
                        ? (u.label = o)
                        : l.push((u = { label: o, major: !1 }));
                  return (
                    (d._ticks = l),
                    d.beforeCalculateTickRotation(),
                    d.calculateTickRotation(),
                    d.afterCalculateTickRotation(),
                    d.beforeFit(),
                    d.fit(),
                    d.afterFit(),
                    d.afterUpdate(),
                    d.minSize
                  );
                },
                afterUpdate: function() {
                  s.callback(this.options.afterUpdate, [this]);
                },
                beforeSetDimensions: function() {
                  s.callback(this.options.beforeSetDimensions, [this]);
                },
                setDimensions: function() {
                  var t = this;
                  t.isHorizontal()
                    ? ((t.width = t.maxWidth),
                      (t.left = 0),
                      (t.right = t.width))
                    : ((t.height = t.maxHeight),
                      (t.top = 0),
                      (t.bottom = t.height)),
                    (t.paddingLeft = 0),
                    (t.paddingTop = 0),
                    (t.paddingRight = 0),
                    (t.paddingBottom = 0);
                },
                afterSetDimensions: function() {
                  s.callback(this.options.afterSetDimensions, [this]);
                },
                beforeDataLimits: function() {
                  s.callback(this.options.beforeDataLimits, [this]);
                },
                determineDataLimits: s.noop,
                afterDataLimits: function() {
                  s.callback(this.options.afterDataLimits, [this]);
                },
                beforeBuildTicks: function() {
                  s.callback(this.options.beforeBuildTicks, [this]);
                },
                buildTicks: s.noop,
                afterBuildTicks: function() {
                  s.callback(this.options.afterBuildTicks, [this]);
                },
                beforeTickToLabelConversion: function() {
                  s.callback(this.options.beforeTickToLabelConversion, [this]);
                },
                convertTicksToLabels: function() {
                  var t = this,
                    e = t.options.ticks;
                  t.ticks = t.ticks.map(e.userCallback || e.callback, this);
                },
                afterTickToLabelConversion: function() {
                  s.callback(this.options.afterTickToLabelConversion, [this]);
                },
                beforeCalculateTickRotation: function() {
                  s.callback(this.options.beforeCalculateTickRotation, [this]);
                },
                calculateTickRotation: function() {
                  var t = this,
                    e = t.ctx,
                    a = t.options.ticks,
                    r = i(t._ticks),
                    o = n(a);
                  e.font = o.font;
                  var l = a.minRotation || 0;
                  if (r.length && t.options.display && t.isHorizontal())
                    for (
                      var u,
                        d = s.longestText(e, o.font, r, t.longestTextCache),
                        c = d,
                        h = t.getPixelForTick(1) - t.getPixelForTick(0) - 6;
                      c > h && l < a.maxRotation;

                    ) {
                      var f = s.toRadians(l);
                      if (((u = Math.cos(f)), Math.sin(f) * d > t.maxHeight)) {
                        l--;
                        break;
                      }
                      l++, (c = u * d);
                    }
                  t.labelRotation = l;
                },
                afterCalculateTickRotation: function() {
                  s.callback(this.options.afterCalculateTickRotation, [this]);
                },
                beforeFit: function() {
                  s.callback(this.options.beforeFit, [this]);
                },
                fit: function() {
                  var t = this,
                    a = (t.minSize = { width: 0, height: 0 }),
                    r = i(t._ticks),
                    o = t.options,
                    u = o.ticks,
                    d = o.scaleLabel,
                    c = o.gridLines,
                    h = o.display,
                    f = t.isHorizontal(),
                    g = n(u),
                    m = o.gridLines.tickMarkLength;
                  if (
                    ((a.width = f
                      ? t.isFullWidth()
                        ? t.maxWidth - t.margins.left - t.margins.right
                        : t.maxWidth
                      : h && c.drawTicks
                        ? m
                        : 0),
                    (a.height = f ? (h && c.drawTicks ? m : 0) : t.maxHeight),
                    d.display && h)
                  ) {
                    var p = l(d) + s.options.toPadding(d.padding).height;
                    f ? (a.height += p) : (a.width += p);
                  }
                  if (u.display && h) {
                    var v = s.longestText(t.ctx, g.font, r, t.longestTextCache),
                      y = s.numberOfLabelLines(r),
                      b = 0.5 * g.size,
                      x = t.options.ticks.padding;
                    if (f) {
                      t.longestLabelWidth = v;
                      var _ = s.toRadians(t.labelRotation),
                        k = Math.cos(_),
                        w = Math.sin(_) * v + g.size * y + b * (y - 1) + b;
                      (a.height = Math.min(t.maxHeight, a.height + w + x)),
                        (t.ctx.font = g.font);
                      var M = e(t.ctx, r[0], g.font),
                        S = e(t.ctx, r[r.length - 1], g.font);
                      0 !== t.labelRotation
                        ? ((t.paddingLeft =
                            "bottom" === o.position ? k * M + 3 : k * b + 3),
                          (t.paddingRight =
                            "bottom" === o.position ? k * b + 3 : k * S + 3))
                        : ((t.paddingLeft = M / 2 + 3),
                          (t.paddingRight = S / 2 + 3));
                    } else
                      u.mirror ? (v = 0) : (v += x + b),
                        (a.width = Math.min(t.maxWidth, a.width + v)),
                        (t.paddingTop = g.size / 2),
                        (t.paddingBottom = g.size / 2);
                  }
                  t.handleMargins(), (t.width = a.width), (t.height = a.height);
                },
                handleMargins: function() {
                  var t = this;
                  t.margins &&
                    ((t.paddingLeft = Math.max(
                      t.paddingLeft - t.margins.left,
                      0
                    )),
                    (t.paddingTop = Math.max(t.paddingTop - t.margins.top, 0)),
                    (t.paddingRight = Math.max(
                      t.paddingRight - t.margins.right,
                      0
                    )),
                    (t.paddingBottom = Math.max(
                      t.paddingBottom - t.margins.bottom,
                      0
                    )));
                },
                afterFit: function() {
                  s.callback(this.options.afterFit, [this]);
                },
                isHorizontal: function() {
                  return (
                    "top" === this.options.position ||
                    "bottom" === this.options.position
                  );
                },
                isFullWidth: function() {
                  return this.options.fullWidth;
                },
                getRightValue: function(t) {
                  if (s.isNullOrUndef(t)) return NaN;
                  if ("number" == typeof t && !isFinite(t)) return NaN;
                  if (t)
                    if (this.isHorizontal()) {
                      if (void 0 !== t.x) return this.getRightValue(t.x);
                    } else if (void 0 !== t.y) return this.getRightValue(t.y);
                  return t;
                },
                getLabelForIndex: s.noop,
                getPixelForValue: s.noop,
                getValueForPixel: s.noop,
                getPixelForTick: function(t) {
                  var e = this,
                    n = e.options.offset;
                  if (e.isHorizontal()) {
                    var i =
                        (e.width - (e.paddingLeft + e.paddingRight)) /
                        Math.max(e._ticks.length - (n ? 0 : 1), 1),
                      a = i * t + e.paddingLeft;
                    n && (a += i / 2);
                    var r = e.left + Math.round(a);
                    return (r += e.isFullWidth() ? e.margins.left : 0);
                  }
                  var o = e.height - (e.paddingTop + e.paddingBottom);
                  return e.top + t * (o / (e._ticks.length - 1));
                },
                getPixelForDecimal: function(t) {
                  var e = this;
                  if (e.isHorizontal()) {
                    var n =
                        (e.width - (e.paddingLeft + e.paddingRight)) * t +
                        e.paddingLeft,
                      i = e.left + Math.round(n);
                    return (i += e.isFullWidth() ? e.margins.left : 0);
                  }
                  return e.top + t * e.height;
                },
                getBasePixel: function() {
                  return this.getPixelForValue(this.getBaseValue());
                },
                getBaseValue: function() {
                  var t = this,
                    e = t.min,
                    n = t.max;
                  return t.beginAtZero
                    ? 0
                    : e < 0 && n < 0
                      ? n
                      : e > 0 && n > 0
                        ? e
                        : 0;
                },
                _autoSkip: function(t) {
                  var e,
                    n,
                    i,
                    a,
                    r = this,
                    o = r.isHorizontal(),
                    l = r.options.ticks.minor,
                    u = t.length,
                    d = s.toRadians(r.labelRotation),
                    c = Math.cos(d),
                    h = r.longestLabelWidth * c,
                    f = [];
                  for (
                    l.maxTicksLimit && (a = l.maxTicksLimit),
                      o &&
                        ((e = !1),
                        (h + l.autoSkipPadding) * u >
                          r.width - (r.paddingLeft + r.paddingRight) &&
                          (e =
                            1 +
                            Math.floor(
                              (h + l.autoSkipPadding) *
                                u /
                                (r.width - (r.paddingLeft + r.paddingRight))
                            )),
                        a && u > a && (e = Math.max(e, Math.floor(u / a)))),
                      n = 0;
                    n < u;
                    n++
                  )
                    (i = t[n]),
                      ((e > 1 && n % e > 0) || (n % e == 0 && n + e >= u)) &&
                        n !== u - 1 &&
                        delete i.label,
                      f.push(i);
                  return f;
                },
                draw: function(t) {
                  var e = this,
                    i = e.options;
                  if (i.display) {
                    var o = e.ctx,
                      u = r.global,
                      d = i.ticks.minor,
                      c = i.ticks.major || d,
                      h = i.gridLines,
                      f = i.scaleLabel,
                      g = 0 !== e.labelRotation,
                      m = e.isHorizontal(),
                      p = d.autoSkip ? e._autoSkip(e.getTicks()) : e.getTicks(),
                      v = s.valueOrDefault(d.fontColor, u.defaultFontColor),
                      y = n(d),
                      b = s.valueOrDefault(c.fontColor, u.defaultFontColor),
                      x = n(c),
                      _ = h.drawTicks ? h.tickMarkLength : 0,
                      k = s.valueOrDefault(f.fontColor, u.defaultFontColor),
                      w = n(f),
                      M = s.options.toPadding(f.padding),
                      S = s.toRadians(e.labelRotation),
                      D = [],
                      C = "right" === i.position ? e.left : e.right - _,
                      P = "right" === i.position ? e.left + _ : e.right,
                      T = "bottom" === i.position ? e.top : e.bottom - _,
                      A = "bottom" === i.position ? e.top + _ : e.bottom;
                    if (
                      (s.each(p, function(n, r) {
                        if (!s.isNullOrUndef(n.label)) {
                          var o,
                            l,
                            c,
                            f,
                            v = n.label;
                          r === e.zeroLineIndex &&
                          i.offset === h.offsetGridLines
                            ? ((o = h.zeroLineWidth),
                              (l = h.zeroLineColor),
                              (c = h.zeroLineBorderDash),
                              (f = h.zeroLineBorderDashOffset))
                            : ((o = s.valueAtIndexOrDefault(h.lineWidth, r)),
                              (l = s.valueAtIndexOrDefault(h.color, r)),
                              (c = s.valueOrDefault(
                                h.borderDash,
                                u.borderDash
                              )),
                              (f = s.valueOrDefault(
                                h.borderDashOffset,
                                u.borderDashOffset
                              )));
                          var y,
                            b,
                            x,
                            k,
                            w,
                            M,
                            I,
                            O,
                            F,
                            R,
                            L = "middle",
                            W = "middle",
                            Y = d.padding;
                          if (m) {
                            var N = _ + Y;
                            "bottom" === i.position
                              ? ((W = g ? "middle" : "top"),
                                (L = g ? "right" : "center"),
                                (R = e.top + N))
                              : ((W = g ? "middle" : "bottom"),
                                (L = g ? "left" : "center"),
                                (R = e.bottom - N));
                            var z = a(e, r, h.offsetGridLines && p.length > 1);
                            z < e.left && (l = "rgba(0,0,0,0)"),
                              (z += s.aliasPixel(o)),
                              (F = e.getPixelForTick(r) + d.labelOffset),
                              (y = x = w = I = z),
                              (b = T),
                              (k = A),
                              (M = t.top),
                              (O = t.bottom);
                          } else {
                            var B,
                              V = "left" === i.position;
                            d.mirror
                              ? ((L = V ? "left" : "right"), (B = Y))
                              : ((L = V ? "right" : "left"), (B = _ + Y)),
                              (F = V ? e.right - B : e.left + B);
                            var H = a(e, r, h.offsetGridLines && p.length > 1);
                            H < e.top && (l = "rgba(0,0,0,0)"),
                              (H += s.aliasPixel(o)),
                              (R = e.getPixelForTick(r) + d.labelOffset),
                              (y = C),
                              (x = P),
                              (w = t.left),
                              (I = t.right),
                              (b = k = M = O = H);
                          }
                          D.push({
                            tx1: y,
                            ty1: b,
                            tx2: x,
                            ty2: k,
                            x1: w,
                            y1: M,
                            x2: I,
                            y2: O,
                            labelX: F,
                            labelY: R,
                            glWidth: o,
                            glColor: l,
                            glBorderDash: c,
                            glBorderDashOffset: f,
                            rotation: -1 * S,
                            label: v,
                            major: n.major,
                            textBaseline: W,
                            textAlign: L
                          });
                        }
                      }),
                      s.each(D, function(t) {
                        if (
                          (h.display &&
                            (o.save(),
                            (o.lineWidth = t.glWidth),
                            (o.strokeStyle = t.glColor),
                            o.setLineDash &&
                              (o.setLineDash(t.glBorderDash),
                              (o.lineDashOffset = t.glBorderDashOffset)),
                            o.beginPath(),
                            h.drawTicks &&
                              (o.moveTo(t.tx1, t.ty1), o.lineTo(t.tx2, t.ty2)),
                            h.drawOnChartArea &&
                              (o.moveTo(t.x1, t.y1), o.lineTo(t.x2, t.y2)),
                            o.stroke(),
                            o.restore()),
                          d.display)
                        ) {
                          o.save(),
                            o.translate(t.labelX, t.labelY),
                            o.rotate(t.rotation),
                            (o.font = t.major ? x.font : y.font),
                            (o.fillStyle = t.major ? b : v),
                            (o.textBaseline = t.textBaseline),
                            (o.textAlign = t.textAlign);
                          var e = t.label;
                          if (s.isArray(e))
                            for (var n = 0, i = 0; n < e.length; ++n)
                              o.fillText("" + e[n], 0, i), (i += 1.5 * y.size);
                          else o.fillText(e, 0, 0);
                          o.restore();
                        }
                      }),
                      f.display)
                    ) {
                      var I,
                        O,
                        F = 0,
                        R = l(f) / 2;
                      if (m)
                        (I = e.left + (e.right - e.left) / 2),
                          (O =
                            "bottom" === i.position
                              ? e.bottom - R - M.bottom
                              : e.top + R + M.top);
                      else {
                        var L = "left" === i.position;
                        (I = L ? e.left + R + M.top : e.right - R - M.top),
                          (O = e.top + (e.bottom - e.top) / 2),
                          (F = L ? -0.5 * Math.PI : 0.5 * Math.PI);
                      }
                      o.save(),
                        o.translate(I, O),
                        o.rotate(F),
                        (o.textAlign = "center"),
                        (o.textBaseline = "middle"),
                        (o.fillStyle = k),
                        (o.font = w.font),
                        o.fillText(f.labelString, 0, 0),
                        o.restore();
                    }
                    if (h.drawBorder) {
                      (o.lineWidth = s.valueAtIndexOrDefault(h.lineWidth, 0)),
                        (o.strokeStyle = s.valueAtIndexOrDefault(h.color, 0));
                      var W = e.left,
                        Y = e.right,
                        N = e.top,
                        z = e.bottom,
                        B = s.aliasPixel(o.lineWidth);
                      m
                        ? ((N = z = "top" === i.position ? e.bottom : e.top),
                          (N += B),
                          (z += B))
                        : ((W = Y = "left" === i.position ? e.right : e.left),
                          (W += B),
                          (Y += B)),
                        o.beginPath(),
                        o.moveTo(W, N),
                        o.lineTo(Y, z),
                        o.stroke();
                    }
                  }
                }
              });
            });
        },
        { 25: 25, 26: 26, 34: 34, 45: 45 }
      ],
      33: [
        function(t, e, n) {
          "use strict";
          var i = t(25),
            a = t(45);
          e.exports = function(t) {
            t.scaleService = {
              constructors: {},
              defaults: {},
              registerScaleType: function(t, e, n) {
                (this.constructors[t] = e), (this.defaults[t] = a.clone(n));
              },
              getScaleConstructor: function(t) {
                return this.constructors.hasOwnProperty(t)
                  ? this.constructors[t]
                  : void 0;
              },
              getScaleDefaults: function(t) {
                return this.defaults.hasOwnProperty(t)
                  ? a.merge({}, [i.scale, this.defaults[t]])
                  : {};
              },
              updateScaleDefaults: function(t, e) {
                var n = this;
                n.defaults.hasOwnProperty(t) &&
                  (n.defaults[t] = a.extend(n.defaults[t], e));
              },
              addScalesToLayout: function(e) {
                a.each(e.scales, function(n) {
                  (n.fullWidth = n.options.fullWidth),
                    (n.position = n.options.position),
                    (n.weight = n.options.weight),
                    t.layoutService.addBox(e, n);
                });
              }
            };
          };
        },
        { 25: 25, 45: 45 }
      ],
      34: [
        function(t, e, n) {
          "use strict";
          var i = t(45);
          e.exports = {
            generators: {
              linear: function(t, e) {
                var n,
                  a = [];
                if (t.stepSize && t.stepSize > 0) n = t.stepSize;
                else {
                  var r = i.niceNum(e.max - e.min, !1);
                  n = i.niceNum(r / (t.maxTicks - 1), !0);
                }
                var o = Math.floor(e.min / n) * n,
                  s = Math.ceil(e.max / n) * n;
                t.min &&
                  t.max &&
                  t.stepSize &&
                  i.almostWhole((t.max - t.min) / t.stepSize, n / 1e3) &&
                  ((o = t.min), (s = t.max));
                var l = (s - o) / n;
                (l = i.almostEquals(l, Math.round(l), n / 1e3)
                  ? Math.round(l)
                  : Math.ceil(l)),
                  a.push(void 0 !== t.min ? t.min : o);
                for (var u = 1; u < l; ++u) a.push(o + u * n);
                return a.push(void 0 !== t.max ? t.max : s), a;
              },
              logarithmic: function(t, e) {
                var n,
                  a,
                  r = [],
                  o = i.valueOrDefault,
                  s = o(t.min, Math.pow(10, Math.floor(i.log10(e.min)))),
                  l = Math.floor(i.log10(e.max)),
                  u = Math.ceil(e.max / Math.pow(10, l));
                0 === s
                  ? ((n = Math.floor(i.log10(e.minNotZero))),
                    (a = Math.floor(e.minNotZero / Math.pow(10, n))),
                    r.push(s),
                    (s = a * Math.pow(10, n)))
                  : ((n = Math.floor(i.log10(s))),
                    (a = Math.floor(s / Math.pow(10, n))));
                do {
                  r.push(s),
                    10 === ++a && ((a = 1), ++n),
                    (s = a * Math.pow(10, n));
                } while (n < l || (n === l && a < u));
                var d = o(t.max, s);
                return r.push(d), r;
              }
            },
            formatters: {
              values: function(t) {
                return i.isArray(t) ? t : "" + t;
              },
              linear: function(t, e, n) {
                var a = n.length > 3 ? n[2] - n[1] : n[1] - n[0];
                Math.abs(a) > 1 &&
                  t !== Math.floor(t) &&
                  (a = t - Math.floor(t));
                var r = i.log10(Math.abs(a)),
                  o = "";
                if (0 !== t) {
                  var s = -1 * Math.floor(r);
                  (s = Math.max(Math.min(s, 20), 0)), (o = t.toFixed(s));
                } else o = "0";
                return o;
              },
              logarithmic: function(t, e, n) {
                var a = t / Math.pow(10, Math.floor(i.log10(t)));
                return 0 === t
                  ? "0"
                  : 1 === a ||
                    2 === a ||
                    5 === a ||
                    0 === e ||
                    e === n.length - 1
                    ? t.toExponential()
                    : "";
              }
            }
          };
        },
        { 45: 45 }
      ],
      35: [
        function(t, e, n) {
          "use strict";
          var i = t(25),
            a = t(26),
            r = t(45);
          i._set("global", {
            tooltips: {
              enabled: !0,
              custom: null,
              mode: "nearest",
              position: "average",
              intersect: !0,
              backgroundColor: "rgba(0,0,0,0.8)",
              titleFontStyle: "bold",
              titleSpacing: 2,
              titleMarginBottom: 6,
              titleFontColor: "#fff",
              titleAlign: "left",
              bodySpacing: 2,
              bodyFontColor: "#fff",
              bodyAlign: "left",
              footerFontStyle: "bold",
              footerSpacing: 2,
              footerMarginTop: 6,
              footerFontColor: "#fff",
              footerAlign: "left",
              yPadding: 6,
              xPadding: 6,
              caretPadding: 2,
              caretSize: 5,
              cornerRadius: 6,
              multiKeyBackground: "#fff",
              displayColors: !0,
              borderColor: "rgba(0,0,0,0)",
              borderWidth: 0,
              callbacks: {
                beforeTitle: r.noop,
                title: function(t, e) {
                  var n = "",
                    i = e.labels,
                    a = i ? i.length : 0;
                  if (t.length > 0) {
                    var r = t[0];
                    r.xLabel
                      ? (n = r.xLabel)
                      : a > 0 && r.index < a && (n = i[r.index]);
                  }
                  return n;
                },
                afterTitle: r.noop,
                beforeBody: r.noop,
                beforeLabel: r.noop,
                label: function(t, e) {
                  var n = e.datasets[t.datasetIndex].label || "";
                  return n && (n += ": "), (n += t.yLabel);
                },
                labelColor: function(t, e) {
                  var n = e.getDatasetMeta(t.datasetIndex).data[t.index]._view;
                  return {
                    borderColor: n.borderColor,
                    backgroundColor: n.backgroundColor
                  };
                },
                labelTextColor: function() {
                  return this._options.bodyFontColor;
                },
                afterLabel: r.noop,
                afterBody: r.noop,
                beforeFooter: r.noop,
                footer: r.noop,
                afterFooter: r.noop
              }
            }
          }),
            (e.exports = function(t) {
              function e(t, e) {
                var n = r.color(t);
                return n.alpha(e * n.alpha()).rgbaString();
              }
              function n(t, e) {
                return (
                  e &&
                    (r.isArray(e)
                      ? Array.prototype.push.apply(t, e)
                      : t.push(e)),
                  t
                );
              }
              function o(t) {
                var e = t._xScale,
                  n = t._yScale || t._scale,
                  i = t._index,
                  a = t._datasetIndex;
                return {
                  xLabel: e ? e.getLabelForIndex(i, a) : "",
                  yLabel: n ? n.getLabelForIndex(i, a) : "",
                  index: i,
                  datasetIndex: a,
                  x: t._model.x,
                  y: t._model.y
                };
              }
              function s(t) {
                var e = i.global,
                  n = r.valueOrDefault;
                return {
                  xPadding: t.xPadding,
                  yPadding: t.yPadding,
                  xAlign: t.xAlign,
                  yAlign: t.yAlign,
                  bodyFontColor: t.bodyFontColor,
                  _bodyFontFamily: n(t.bodyFontFamily, e.defaultFontFamily),
                  _bodyFontStyle: n(t.bodyFontStyle, e.defaultFontStyle),
                  _bodyAlign: t.bodyAlign,
                  bodyFontSize: n(t.bodyFontSize, e.defaultFontSize),
                  bodySpacing: t.bodySpacing,
                  titleFontColor: t.titleFontColor,
                  _titleFontFamily: n(t.titleFontFamily, e.defaultFontFamily),
                  _titleFontStyle: n(t.titleFontStyle, e.defaultFontStyle),
                  titleFontSize: n(t.titleFontSize, e.defaultFontSize),
                  _titleAlign: t.titleAlign,
                  titleSpacing: t.titleSpacing,
                  titleMarginBottom: t.titleMarginBottom,
                  footerFontColor: t.footerFontColor,
                  _footerFontFamily: n(t.footerFontFamily, e.defaultFontFamily),
                  _footerFontStyle: n(t.footerFontStyle, e.defaultFontStyle),
                  footerFontSize: n(t.footerFontSize, e.defaultFontSize),
                  _footerAlign: t.footerAlign,
                  footerSpacing: t.footerSpacing,
                  footerMarginTop: t.footerMarginTop,
                  caretSize: t.caretSize,
                  cornerRadius: t.cornerRadius,
                  backgroundColor: t.backgroundColor,
                  opacity: 0,
                  legendColorBackground: t.multiKeyBackground,
                  displayColors: t.displayColors,
                  borderColor: t.borderColor,
                  borderWidth: t.borderWidth
                };
              }
              function l(t, e) {
                var n = t._chart.ctx,
                  i = 2 * e.yPadding,
                  a = 0,
                  o = e.body,
                  s = o.reduce(function(t, e) {
                    return (
                      t + e.before.length + e.lines.length + e.after.length
                    );
                  }, 0);
                s += e.beforeBody.length + e.afterBody.length;
                var l = e.title.length,
                  u = e.footer.length,
                  d = e.titleFontSize,
                  c = e.bodyFontSize,
                  h = e.footerFontSize;
                (i += l * d),
                  (i += l ? (l - 1) * e.titleSpacing : 0),
                  (i += l ? e.titleMarginBottom : 0),
                  (i += s * c),
                  (i += s ? (s - 1) * e.bodySpacing : 0),
                  (i += u ? e.footerMarginTop : 0),
                  (i += u * h),
                  (i += u ? (u - 1) * e.footerSpacing : 0);
                var f = 0,
                  g = function(t) {
                    a = Math.max(a, n.measureText(t).width + f);
                  };
                return (
                  (n.font = r.fontString(
                    d,
                    e._titleFontStyle,
                    e._titleFontFamily
                  )),
                  r.each(e.title, g),
                  (n.font = r.fontString(
                    c,
                    e._bodyFontStyle,
                    e._bodyFontFamily
                  )),
                  r.each(e.beforeBody.concat(e.afterBody), g),
                  (f = e.displayColors ? c + 2 : 0),
                  r.each(o, function(t) {
                    r.each(t.before, g), r.each(t.lines, g), r.each(t.after, g);
                  }),
                  (f = 0),
                  (n.font = r.fontString(
                    h,
                    e._footerFontStyle,
                    e._footerFontFamily
                  )),
                  r.each(e.footer, g),
                  (a += 2 * e.xPadding),
                  { width: a, height: i }
                );
              }
              function u(t, e) {
                var n = t._model,
                  i = t._chart,
                  a = t._chart.chartArea,
                  r = "center",
                  o = "center";
                n.y < e.height
                  ? (o = "top")
                  : n.y > i.height - e.height && (o = "bottom");
                var s,
                  l,
                  u,
                  d,
                  c,
                  h = (a.left + a.right) / 2,
                  f = (a.top + a.bottom) / 2;
                "center" === o
                  ? ((s = function(t) {
                      return t <= h;
                    }),
                    (l = function(t) {
                      return t > h;
                    }))
                  : ((s = function(t) {
                      return t <= e.width / 2;
                    }),
                    (l = function(t) {
                      return t >= i.width - e.width / 2;
                    })),
                  (u = function(t) {
                    return t + e.width > i.width;
                  }),
                  (d = function(t) {
                    return t - e.width < 0;
                  }),
                  (c = function(t) {
                    return t <= f ? "top" : "bottom";
                  }),
                  s(n.x)
                    ? ((r = "left"), u(n.x) && ((r = "center"), (o = c(n.y))))
                    : l(n.x) &&
                      ((r = "right"), d(n.x) && ((r = "center"), (o = c(n.y))));
                var g = t._options;
                return {
                  xAlign: g.xAlign ? g.xAlign : r,
                  yAlign: g.yAlign ? g.yAlign : o
                };
              }
              function d(t, e, n) {
                var i = t.x,
                  a = t.y,
                  r = t.caretSize,
                  o = t.caretPadding,
                  s = t.cornerRadius,
                  l = n.xAlign,
                  u = n.yAlign,
                  d = r + o,
                  c = s + o;
                return (
                  "right" === l
                    ? (i -= e.width)
                    : "center" === l && (i -= e.width / 2),
                  "top" === u
                    ? (a += d)
                    : (a -= "bottom" === u ? e.height + d : e.height / 2),
                  "center" === u
                    ? "left" === l
                      ? (i += d)
                      : "right" === l && (i -= d)
                    : "left" === l
                      ? (i -= c)
                      : "right" === l && (i += c),
                  { x: i, y: a }
                );
              }
              (t.Tooltip = a.extend({
                initialize: function() {
                  (this._model = s(this._options)), (this._lastActive = []);
                },
                getTitle: function() {
                  var t = this,
                    e = t._options.callbacks,
                    i = e.beforeTitle.apply(t, arguments),
                    a = e.title.apply(t, arguments),
                    r = e.afterTitle.apply(t, arguments),
                    o = [];
                  return (o = n(o, i)), (o = n(o, a)), (o = n(o, r));
                },
                getBeforeBody: function() {
                  var t = this._options.callbacks.beforeBody.apply(
                    this,
                    arguments
                  );
                  return r.isArray(t) ? t : void 0 !== t ? [t] : [];
                },
                getBody: function(t, e) {
                  var i = this,
                    a = i._options.callbacks,
                    o = [];
                  return (
                    r.each(t, function(t) {
                      var r = { before: [], lines: [], after: [] };
                      n(r.before, a.beforeLabel.call(i, t, e)),
                        n(r.lines, a.label.call(i, t, e)),
                        n(r.after, a.afterLabel.call(i, t, e)),
                        o.push(r);
                    }),
                    o
                  );
                },
                getAfterBody: function() {
                  var t = this._options.callbacks.afterBody.apply(
                    this,
                    arguments
                  );
                  return r.isArray(t) ? t : void 0 !== t ? [t] : [];
                },
                getFooter: function() {
                  var t = this,
                    e = t._options.callbacks,
                    i = e.beforeFooter.apply(t, arguments),
                    a = e.footer.apply(t, arguments),
                    r = e.afterFooter.apply(t, arguments),
                    o = [];
                  return (o = n(o, i)), (o = n(o, a)), (o = n(o, r));
                },
                update: function(e) {
                  var n,
                    i,
                    a = this,
                    c = a._options,
                    h = a._model,
                    f = (a._model = s(c)),
                    g = a._active,
                    m = a._data,
                    p = { xAlign: h.xAlign, yAlign: h.yAlign },
                    v = { x: h.x, y: h.y },
                    y = { width: h.width, height: h.height },
                    b = { x: h.caretX, y: h.caretY };
                  if (g.length) {
                    f.opacity = 1;
                    var x = [],
                      _ = [];
                    b = t.Tooltip.positioners[c.position].call(
                      a,
                      g,
                      a._eventPosition
                    );
                    var k = [];
                    for (n = 0, i = g.length; n < i; ++n) k.push(o(g[n]));
                    c.filter &&
                      (k = k.filter(function(t) {
                        return c.filter(t, m);
                      })),
                      c.itemSort &&
                        (k = k.sort(function(t, e) {
                          return c.itemSort(t, e, m);
                        })),
                      r.each(k, function(t) {
                        x.push(c.callbacks.labelColor.call(a, t, a._chart)),
                          _.push(
                            c.callbacks.labelTextColor.call(a, t, a._chart)
                          );
                      }),
                      (f.title = a.getTitle(k, m)),
                      (f.beforeBody = a.getBeforeBody(k, m)),
                      (f.body = a.getBody(k, m)),
                      (f.afterBody = a.getAfterBody(k, m)),
                      (f.footer = a.getFooter(k, m)),
                      (f.x = Math.round(b.x)),
                      (f.y = Math.round(b.y)),
                      (f.caretPadding = c.caretPadding),
                      (f.labelColors = x),
                      (f.labelTextColors = _),
                      (f.dataPoints = k),
                      (v = d(f, (y = l(this, f)), (p = u(this, y))));
                  } else f.opacity = 0;
                  return (
                    (f.xAlign = p.xAlign),
                    (f.yAlign = p.yAlign),
                    (f.x = v.x),
                    (f.y = v.y),
                    (f.width = y.width),
                    (f.height = y.height),
                    (f.caretX = b.x),
                    (f.caretY = b.y),
                    (a._model = f),
                    e && c.custom && c.custom.call(a, f),
                    a
                  );
                },
                drawCaret: function(t, e) {
                  var n = this._chart.ctx,
                    i = this._view,
                    a = this.getCaretPosition(t, e, i);
                  n.lineTo(a.x1, a.y1),
                    n.lineTo(a.x2, a.y2),
                    n.lineTo(a.x3, a.y3);
                },
                getCaretPosition: function(t, e, n) {
                  var i,
                    a,
                    r,
                    o,
                    s,
                    l,
                    u = n.caretSize,
                    d = n.cornerRadius,
                    c = n.xAlign,
                    h = n.yAlign,
                    f = t.x,
                    g = t.y,
                    m = e.width,
                    p = e.height;
                  if ("center" === h)
                    (s = g + p / 2),
                      "left" === c
                        ? ((a = (i = f) - u), (r = i), (o = s + u), (l = s - u))
                        : ((a = (i = f + m) + u),
                          (r = i),
                          (o = s - u),
                          (l = s + u));
                  else if (
                    ("left" === c
                      ? ((i = (a = f + d + u) - u), (r = a + u))
                      : "right" === c
                        ? ((i = (a = f + m - d - u) - u), (r = a + u))
                        : ((i = (a = f + m / 2) - u), (r = a + u)),
                    "top" === h)
                  )
                    (s = (o = g) - u), (l = o);
                  else {
                    (s = (o = g + p) + u), (l = o);
                    var v = r;
                    (r = i), (i = v);
                  }
                  return { x1: i, x2: a, x3: r, y1: o, y2: s, y3: l };
                },
                drawTitle: function(t, n, i, a) {
                  var o = n.title;
                  if (o.length) {
                    (i.textAlign = n._titleAlign), (i.textBaseline = "top");
                    var s = n.titleFontSize,
                      l = n.titleSpacing;
                    (i.fillStyle = e(n.titleFontColor, a)),
                      (i.font = r.fontString(
                        s,
                        n._titleFontStyle,
                        n._titleFontFamily
                      ));
                    var u, d;
                    for (u = 0, d = o.length; u < d; ++u)
                      i.fillText(o[u], t.x, t.y),
                        (t.y += s + l),
                        u + 1 === o.length && (t.y += n.titleMarginBottom - l);
                  }
                },
                drawBody: function(t, n, i, a) {
                  var o = n.bodyFontSize,
                    s = n.bodySpacing,
                    l = n.body;
                  (i.textAlign = n._bodyAlign),
                    (i.textBaseline = "top"),
                    (i.font = r.fontString(
                      o,
                      n._bodyFontStyle,
                      n._bodyFontFamily
                    ));
                  var u = 0,
                    d = function(e) {
                      i.fillText(e, t.x + u, t.y), (t.y += o + s);
                    };
                  (i.fillStyle = e(n.bodyFontColor, a)),
                    r.each(n.beforeBody, d);
                  var c = n.displayColors;
                  (u = c ? o + 2 : 0),
                    r.each(l, function(s, l) {
                      var u = e(n.labelTextColors[l], a);
                      (i.fillStyle = u),
                        r.each(s.before, d),
                        r.each(s.lines, function(r) {
                          c &&
                            ((i.fillStyle = e(n.legendColorBackground, a)),
                            i.fillRect(t.x, t.y, o, o),
                            (i.lineWidth = 1),
                            (i.strokeStyle = e(
                              n.labelColors[l].borderColor,
                              a
                            )),
                            i.strokeRect(t.x, t.y, o, o),
                            (i.fillStyle = e(
                              n.labelColors[l].backgroundColor,
                              a
                            )),
                            i.fillRect(t.x + 1, t.y + 1, o - 2, o - 2),
                            (i.fillStyle = u)),
                            d(r);
                        }),
                        r.each(s.after, d);
                    }),
                    (u = 0),
                    r.each(n.afterBody, d),
                    (t.y -= s);
                },
                drawFooter: function(t, n, i, a) {
                  var o = n.footer;
                  o.length &&
                    ((t.y += n.footerMarginTop),
                    (i.textAlign = n._footerAlign),
                    (i.textBaseline = "top"),
                    (i.fillStyle = e(n.footerFontColor, a)),
                    (i.font = r.fontString(
                      n.footerFontSize,
                      n._footerFontStyle,
                      n._footerFontFamily
                    )),
                    r.each(o, function(e) {
                      i.fillText(e, t.x, t.y),
                        (t.y += n.footerFontSize + n.footerSpacing);
                    }));
                },
                drawBackground: function(t, n, i, a, r) {
                  (i.fillStyle = e(n.backgroundColor, r)),
                    (i.strokeStyle = e(n.borderColor, r)),
                    (i.lineWidth = n.borderWidth);
                  var o = n.xAlign,
                    s = n.yAlign,
                    l = t.x,
                    u = t.y,
                    d = a.width,
                    c = a.height,
                    h = n.cornerRadius;
                  i.beginPath(),
                    i.moveTo(l + h, u),
                    "top" === s && this.drawCaret(t, a),
                    i.lineTo(l + d - h, u),
                    i.quadraticCurveTo(l + d, u, l + d, u + h),
                    "center" === s && "right" === o && this.drawCaret(t, a),
                    i.lineTo(l + d, u + c - h),
                    i.quadraticCurveTo(l + d, u + c, l + d - h, u + c),
                    "bottom" === s && this.drawCaret(t, a),
                    i.lineTo(l + h, u + c),
                    i.quadraticCurveTo(l, u + c, l, u + c - h),
                    "center" === s && "left" === o && this.drawCaret(t, a),
                    i.lineTo(l, u + h),
                    i.quadraticCurveTo(l, u, l + h, u),
                    i.closePath(),
                    i.fill(),
                    n.borderWidth > 0 && i.stroke();
                },
                draw: function() {
                  var t = this._chart.ctx,
                    e = this._view;
                  if (0 !== e.opacity) {
                    var n = { width: e.width, height: e.height },
                      i = { x: e.x, y: e.y },
                      a = Math.abs(e.opacity < 0.001) ? 0 : e.opacity,
                      r =
                        e.title.length ||
                        e.beforeBody.length ||
                        e.body.length ||
                        e.afterBody.length ||
                        e.footer.length;
                    this._options.enabled &&
                      r &&
                      (this.drawBackground(i, e, t, n, a),
                      (i.x += e.xPadding),
                      (i.y += e.yPadding),
                      this.drawTitle(i, e, t, a),
                      this.drawBody(i, e, t, a),
                      this.drawFooter(i, e, t, a));
                  }
                },
                handleEvent: function(t) {
                  var e = this,
                    n = e._options,
                    i = !1;
                  if (
                    ((e._lastActive = e._lastActive || []),
                    "mouseout" === t.type
                      ? (e._active = [])
                      : (e._active = e._chart.getElementsAtEventForMode(
                          t,
                          n.mode,
                          n
                        )),
                    !(i = !r.arrayEquals(e._active, e._lastActive)))
                  )
                    return !1;
                  if (((e._lastActive = e._active), n.enabled || n.custom)) {
                    e._eventPosition = { x: t.x, y: t.y };
                    var a = e._model;
                    e.update(!0),
                      e.pivot(),
                      (i |= a.x !== e._model.x || a.y !== e._model.y);
                  }
                  return i;
                }
              })),
                (t.Tooltip.positioners = {
                  average: function(t) {
                    if (!t.length) return !1;
                    var e,
                      n,
                      i = 0,
                      a = 0,
                      r = 0;
                    for (e = 0, n = t.length; e < n; ++e) {
                      var o = t[e];
                      if (o && o.hasValue()) {
                        var s = o.tooltipPosition();
                        (i += s.x), (a += s.y), ++r;
                      }
                    }
                    return { x: Math.round(i / r), y: Math.round(a / r) };
                  },
                  nearest: function(t, e) {
                    var n,
                      i,
                      a,
                      o = e.x,
                      s = e.y,
                      l = Number.POSITIVE_INFINITY;
                    for (n = 0, i = t.length; n < i; ++n) {
                      var u = t[n];
                      if (u && u.hasValue()) {
                        var d = u.getCenterPoint(),
                          c = r.distanceBetweenPoints(e, d);
                        c < l && ((l = c), (a = u));
                      }
                    }
                    if (a) {
                      var h = a.tooltipPosition();
                      (o = h.x), (s = h.y);
                    }
                    return { x: o, y: s };
                  }
                });
            });
        },
        { 25: 25, 26: 26, 45: 45 }
      ],
      36: [
        function(t, e, n) {
          "use strict";
          var i = t(25),
            a = t(26),
            r = t(45);
          i._set("global", {
            elements: {
              arc: {
                backgroundColor: i.global.defaultColor,
                borderColor: "#fff",
                borderWidth: 2
              }
            }
          }),
            (e.exports = a.extend({
              inLabelRange: function(t) {
                var e = this._view;
                return (
                  !!e &&
                  Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2)
                );
              },
              inRange: function(t, e) {
                var n = this._view;
                if (n) {
                  for (
                    var i = r.getAngleFromPoint(n, { x: t, y: e }),
                      a = i.angle,
                      o = i.distance,
                      s = n.startAngle,
                      l = n.endAngle;
                    l < s;

                  )
                    l += 2 * Math.PI;
                  for (; a > l; ) a -= 2 * Math.PI;
                  for (; a < s; ) a += 2 * Math.PI;
                  var u = a >= s && a <= l,
                    d = o >= n.innerRadius && o <= n.outerRadius;
                  return u && d;
                }
                return !1;
              },
              getCenterPoint: function() {
                var t = this._view,
                  e = (t.startAngle + t.endAngle) / 2,
                  n = (t.innerRadius + t.outerRadius) / 2;
                return { x: t.x + Math.cos(e) * n, y: t.y + Math.sin(e) * n };
              },
              getArea: function() {
                var t = this._view;
                return (
                  Math.PI *
                  ((t.endAngle - t.startAngle) / (2 * Math.PI)) *
                  (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2))
                );
              },
              tooltipPosition: function() {
                var t = this._view,
                  e = t.startAngle + (t.endAngle - t.startAngle) / 2,
                  n = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
                return { x: t.x + Math.cos(e) * n, y: t.y + Math.sin(e) * n };
              },
              draw: function() {
                var t = this._chart.ctx,
                  e = this._view,
                  n = e.startAngle,
                  i = e.endAngle;
                t.beginPath(),
                  t.arc(e.x, e.y, e.outerRadius, n, i),
                  t.arc(e.x, e.y, e.innerRadius, i, n, !0),
                  t.closePath(),
                  (t.strokeStyle = e.borderColor),
                  (t.lineWidth = e.borderWidth),
                  (t.fillStyle = e.backgroundColor),
                  t.fill(),
                  (t.lineJoin = "bevel"),
                  e.borderWidth && t.stroke();
              }
            }));
        },
        { 25: 25, 26: 26, 45: 45 }
      ],
      37: [
        function(t, e, n) {
          "use strict";
          var i = t(25),
            a = t(26),
            r = t(45),
            o = i.global;
          i._set("global", {
            elements: {
              line: {
                tension: 0.4,
                backgroundColor: o.defaultColor,
                borderWidth: 3,
                borderColor: o.defaultColor,
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0,
                borderJoinStyle: "miter",
                capBezierPoints: !0,
                fill: !0
              }
            }
          }),
            (e.exports = a.extend({
              draw: function() {
                var t,
                  e,
                  n,
                  i,
                  a = this,
                  s = a._view,
                  l = a._chart.ctx,
                  u = s.spanGaps,
                  d = a._children.slice(),
                  c = o.elements.line,
                  h = -1;
                for (
                  a._loop && d.length && d.push(d[0]),
                    l.save(),
                    l.lineCap = s.borderCapStyle || c.borderCapStyle,
                    l.setLineDash &&
                      l.setLineDash(s.borderDash || c.borderDash),
                    l.lineDashOffset = s.borderDashOffset || c.borderDashOffset,
                    l.lineJoin = s.borderJoinStyle || c.borderJoinStyle,
                    l.lineWidth = s.borderWidth || c.borderWidth,
                    l.strokeStyle = s.borderColor || o.defaultColor,
                    l.beginPath(),
                    h = -1,
                    t = 0;
                  t < d.length;
                  ++t
                )
                  (e = d[t]),
                    (n = r.previousItem(d, t)),
                    (i = e._view),
                    0 === t
                      ? i.skip || (l.moveTo(i.x, i.y), (h = t))
                      : ((n = -1 === h ? n : d[h]),
                        i.skip ||
                          ((h !== t - 1 && !u) || -1 === h
                            ? l.moveTo(i.x, i.y)
                            : r.canvas.lineTo(l, n._view, e._view),
                          (h = t)));
                l.stroke(), l.restore();
              }
            }));
        },
        { 25: 25, 26: 26, 45: 45 }
      ],
      38: [
        function(t, e, n) {
          "use strict";
          function i(t) {
            var e = this._view;
            return (
              !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hitRadius, 2)
            );
          }
          var a = t(25),
            r = t(26),
            o = t(45),
            s = a.global.defaultColor;
          a._set("global", {
            elements: {
              point: {
                radius: 3,
                pointStyle: "circle",
                backgroundColor: s,
                borderColor: s,
                borderWidth: 1,
                hitRadius: 1,
                hoverRadius: 4,
                hoverBorderWidth: 1
              }
            }
          }),
            (e.exports = r.extend({
              inRange: function(t, e) {
                var n = this._view;
                return (
                  !!n &&
                  Math.pow(t - n.x, 2) + Math.pow(e - n.y, 2) <
                    Math.pow(n.hitRadius + n.radius, 2)
                );
              },
              inLabelRange: i,
              inXRange: i,
              inYRange: function(t) {
                var e = this._view;
                return (
                  !!e &&
                  Math.pow(t - e.y, 2) < Math.pow(e.radius + e.hitRadius, 2)
                );
              },
              getCenterPoint: function() {
                var t = this._view;
                return { x: t.x, y: t.y };
              },
              getArea: function() {
                return Math.PI * Math.pow(this._view.radius, 2);
              },
              tooltipPosition: function() {
                var t = this._view;
                return { x: t.x, y: t.y, padding: t.radius + t.borderWidth };
              },
              draw: function(t) {
                var e = this._view,
                  n = this._model,
                  i = this._chart.ctx,
                  r = e.pointStyle,
                  l = e.radius,
                  u = e.x,
                  d = e.y,
                  c = o.color,
                  h = 0;
                e.skip ||
                  ((i.strokeStyle = e.borderColor || s),
                  (i.lineWidth = o.valueOrDefault(
                    e.borderWidth,
                    a.global.elements.point.borderWidth
                  )),
                  (i.fillStyle = e.backgroundColor || s),
                  void 0 !== t &&
                    (n.x < t.left ||
                      1.01 * t.right < n.x ||
                      n.y < t.top ||
                      1.01 * t.bottom < n.y) &&
                    (n.x < t.left
                      ? (h = (u - n.x) / (t.left - n.x))
                      : 1.01 * t.right < n.x
                        ? (h = (n.x - u) / (n.x - t.right))
                        : n.y < t.top
                          ? (h = (d - n.y) / (t.top - n.y))
                          : 1.01 * t.bottom < n.y &&
                            (h = (n.y - d) / (n.y - t.bottom)),
                    (h = Math.round(100 * h) / 100),
                    (i.strokeStyle = c(i.strokeStyle)
                      .alpha(h)
                      .rgbString()),
                    (i.fillStyle = c(i.fillStyle)
                      .alpha(h)
                      .rgbString())),
                  o.canvas.drawPoint(i, r, l, u, d));
              }
            }));
        },
        { 25: 25, 26: 26, 45: 45 }
      ],
      39: [
        function(t, e, n) {
          "use strict";
          function i(t) {
            return void 0 !== t._view.width;
          }
          function a(t) {
            var e,
              n,
              a,
              r,
              o = t._view;
            if (i(t)) {
              var s = o.width / 2;
              (e = o.x - s),
                (n = o.x + s),
                (a = Math.min(o.y, o.base)),
                (r = Math.max(o.y, o.base));
            } else {
              var l = o.height / 2;
              (e = Math.min(o.x, o.base)),
                (n = Math.max(o.x, o.base)),
                (a = o.y - l),
                (r = o.y + l);
            }
            return { left: e, top: a, right: n, bottom: r };
          }
          var r = t(25),
            o = t(26);
          r._set("global", {
            elements: {
              rectangle: {
                backgroundColor: r.global.defaultColor,
                borderColor: r.global.defaultColor,
                borderSkipped: "bottom",
                borderWidth: 0
              }
            }
          }),
            (e.exports = o.extend({
              draw: function() {
                function t(t) {
                  return v[(y + t) % 4];
                }
                var e,
                  n,
                  i,
                  a,
                  r,
                  o,
                  s,
                  l = this._chart.ctx,
                  u = this._view,
                  d = u.borderWidth;
                if (
                  (u.horizontal
                    ? ((e = u.base),
                      (n = u.x),
                      (i = u.y - u.height / 2),
                      (a = u.y + u.height / 2),
                      (r = n > e ? 1 : -1),
                      (o = 1),
                      (s = u.borderSkipped || "left"))
                    : ((e = u.x - u.width / 2),
                      (n = u.x + u.width / 2),
                      (i = u.y),
                      (r = 1),
                      (o = (a = u.base) > i ? 1 : -1),
                      (s = u.borderSkipped || "bottom")),
                  d)
                ) {
                  var c = Math.min(Math.abs(e - n), Math.abs(i - a)),
                    h = (d = d > c ? c : d) / 2,
                    f = e + ("left" !== s ? h * r : 0),
                    g = n + ("right" !== s ? -h * r : 0),
                    m = i + ("top" !== s ? h * o : 0),
                    p = a + ("bottom" !== s ? -h * o : 0);
                  f !== g && ((i = m), (a = p)), m !== p && ((e = f), (n = g));
                }
                l.beginPath(),
                  (l.fillStyle = u.backgroundColor),
                  (l.strokeStyle = u.borderColor),
                  (l.lineWidth = d);
                var v = [[e, a], [e, i], [n, i], [n, a]],
                  y = ["bottom", "left", "top", "right"].indexOf(s, 0);
                -1 === y && (y = 0);
                var b = t(0);
                l.moveTo(b[0], b[1]);
                for (var x = 1; x < 4; x++) (b = t(x)), l.lineTo(b[0], b[1]);
                l.fill(), d && l.stroke();
              },
              height: function() {
                var t = this._view;
                return t.base - t.y;
              },
              inRange: function(t, e) {
                var n = !1;
                if (this._view) {
                  var i = a(this);
                  n =
                    t >= i.left && t <= i.right && e >= i.top && e <= i.bottom;
                }
                return n;
              },
              inLabelRange: function(t, e) {
                var n = this;
                if (!n._view) return !1;
                var r = a(n);
                return i(n)
                  ? t >= r.left && t <= r.right
                  : e >= r.top && e <= r.bottom;
              },
              inXRange: function(t) {
                var e = a(this);
                return t >= e.left && t <= e.right;
              },
              inYRange: function(t) {
                var e = a(this);
                return t >= e.top && t <= e.bottom;
              },
              getCenterPoint: function() {
                var t,
                  e,
                  n = this._view;
                return (
                  i(this)
                    ? ((t = n.x), (e = (n.y + n.base) / 2))
                    : ((t = (n.x + n.base) / 2), (e = n.y)),
                  { x: t, y: e }
                );
              },
              getArea: function() {
                var t = this._view;
                return t.width * Math.abs(t.y - t.base);
              },
              tooltipPosition: function() {
                var t = this._view;
                return { x: t.x, y: t.y };
              }
            }));
        },
        { 25: 25, 26: 26 }
      ],
      40: [
        function(t, e, n) {
          "use strict";
          (e.exports = {}),
            (e.exports.Arc = t(36)),
            (e.exports.Line = t(37)),
            (e.exports.Point = t(38)),
            (e.exports.Rectangle = t(39));
        },
        { 36: 36, 37: 37, 38: 38, 39: 39 }
      ],
      41: [
        function(t, e, n) {
          "use strict";
          var i = t(42),
            n = (e.exports = {
              clear: function(t) {
                t.ctx.clearRect(0, 0, t.width, t.height);
              },
              roundedRect: function(t, e, n, i, a, r) {
                if (r) {
                  var o = Math.min(r, i / 2),
                    s = Math.min(r, a / 2);
                  t.moveTo(e + o, n),
                    t.lineTo(e + i - o, n),
                    t.quadraticCurveTo(e + i, n, e + i, n + s),
                    t.lineTo(e + i, n + a - s),
                    t.quadraticCurveTo(e + i, n + a, e + i - o, n + a),
                    t.lineTo(e + o, n + a),
                    t.quadraticCurveTo(e, n + a, e, n + a - s),
                    t.lineTo(e, n + s),
                    t.quadraticCurveTo(e, n, e + o, n);
                } else t.rect(e, n, i, a);
              },
              drawPoint: function(t, e, n, i, a) {
                var r, o, s, l, u, d;
                if (
                  !e ||
                  "object" != typeof e ||
                  ("[object HTMLImageElement]" !== (r = e.toString()) &&
                    "[object HTMLCanvasElement]" !== r)
                ) {
                  if (!(isNaN(n) || n <= 0)) {
                    switch (e) {
                      default:
                        t.beginPath(),
                          t.arc(i, a, n, 0, 2 * Math.PI),
                          t.closePath(),
                          t.fill();
                        break;
                      case "triangle":
                        t.beginPath(),
                          (u = (o = 3 * n / Math.sqrt(3)) * Math.sqrt(3) / 2),
                          t.moveTo(i - o / 2, a + u / 3),
                          t.lineTo(i + o / 2, a + u / 3),
                          t.lineTo(i, a - 2 * u / 3),
                          t.closePath(),
                          t.fill();
                        break;
                      case "rect":
                        (d = 1 / Math.SQRT2 * n),
                          t.beginPath(),
                          t.fillRect(i - d, a - d, 2 * d, 2 * d),
                          t.strokeRect(i - d, a - d, 2 * d, 2 * d);
                        break;
                      case "rectRounded":
                        var c = n / Math.SQRT2,
                          h = i - c,
                          f = a - c,
                          g = Math.SQRT2 * n;
                        t.beginPath(),
                          this.roundedRect(t, h, f, g, g, n / 2),
                          t.closePath(),
                          t.fill();
                        break;
                      case "rectRot":
                        (d = 1 / Math.SQRT2 * n),
                          t.beginPath(),
                          t.moveTo(i - d, a),
                          t.lineTo(i, a + d),
                          t.lineTo(i + d, a),
                          t.lineTo(i, a - d),
                          t.closePath(),
                          t.fill();
                        break;
                      case "cross":
                        t.beginPath(),
                          t.moveTo(i, a + n),
                          t.lineTo(i, a - n),
                          t.moveTo(i - n, a),
                          t.lineTo(i + n, a),
                          t.closePath();
                        break;
                      case "crossRot":
                        t.beginPath(),
                          (s = Math.cos(Math.PI / 4) * n),
                          (l = Math.sin(Math.PI / 4) * n),
                          t.moveTo(i - s, a - l),
                          t.lineTo(i + s, a + l),
                          t.moveTo(i - s, a + l),
                          t.lineTo(i + s, a - l),
                          t.closePath();
                        break;
                      case "star":
                        t.beginPath(),
                          t.moveTo(i, a + n),
                          t.lineTo(i, a - n),
                          t.moveTo(i - n, a),
                          t.lineTo(i + n, a),
                          (s = Math.cos(Math.PI / 4) * n),
                          (l = Math.sin(Math.PI / 4) * n),
                          t.moveTo(i - s, a - l),
                          t.lineTo(i + s, a + l),
                          t.moveTo(i - s, a + l),
                          t.lineTo(i + s, a - l),
                          t.closePath();
                        break;
                      case "line":
                        t.beginPath(),
                          t.moveTo(i - n, a),
                          t.lineTo(i + n, a),
                          t.closePath();
                        break;
                      case "dash":
                        t.beginPath(),
                          t.moveTo(i, a),
                          t.lineTo(i + n, a),
                          t.closePath();
                    }
                    t.stroke();
                  }
                } else
                  t.drawImage(
                    e,
                    i - e.width / 2,
                    a - e.height / 2,
                    e.width,
                    e.height
                  );
              },
              clipArea: function(t, e) {
                t.save(),
                  t.beginPath(),
                  t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top),
                  t.clip();
              },
              unclipArea: function(t) {
                t.restore();
              },
              lineTo: function(t, e, n, i) {
                if (n.steppedLine)
                  return (
                    ("after" === n.steppedLine && !i) ||
                    ("after" !== n.steppedLine && i)
                      ? t.lineTo(e.x, n.y)
                      : t.lineTo(n.x, e.y),
                    void t.lineTo(n.x, n.y)
                  );
                n.tension
                  ? t.bezierCurveTo(
                      i ? e.controlPointPreviousX : e.controlPointNextX,
                      i ? e.controlPointPreviousY : e.controlPointNextY,
                      i ? n.controlPointNextX : n.controlPointPreviousX,
                      i ? n.controlPointNextY : n.controlPointPreviousY,
                      n.x,
                      n.y
                    )
                  : t.lineTo(n.x, n.y);
              }
            });
          (i.clear = n.clear),
            (i.drawRoundedRectangle = function(t) {
              t.beginPath(), n.roundedRect.apply(n, arguments), t.closePath();
            });
        },
        { 42: 42 }
      ],
      42: [
        function(t, e, n) {
          "use strict";
          var i = {
            noop: function() {},
            uid: (function() {
              var t = 0;
              return function() {
                return t++;
              };
            })(),
            isNullOrUndef: function(t) {
              return null === t || void 0 === t;
            },
            isArray: Array.isArray
              ? Array.isArray
              : function(t) {
                  return "[object Array]" === Object.prototype.toString.call(t);
                },
            isObject: function(t) {
              return (
                null !== t &&
                "[object Object]" === Object.prototype.toString.call(t)
              );
            },
            valueOrDefault: function(t, e) {
              return void 0 === t ? e : t;
            },
            valueAtIndexOrDefault: function(t, e, n) {
              return i.valueOrDefault(i.isArray(t) ? t[e] : t, n);
            },
            callback: function(t, e, n) {
              if (t && "function" == typeof t.call) return t.apply(n, e);
            },
            each: function(t, e, n, a) {
              var r, o, s;
              if (i.isArray(t))
                if (((o = t.length), a))
                  for (r = o - 1; r >= 0; r--) e.call(n, t[r], r);
                else for (r = 0; r < o; r++) e.call(n, t[r], r);
              else if (i.isObject(t))
                for (o = (s = Object.keys(t)).length, r = 0; r < o; r++)
                  e.call(n, t[s[r]], s[r]);
            },
            arrayEquals: function(t, e) {
              var n, a, r, o;
              if (!t || !e || t.length !== e.length) return !1;
              for (n = 0, a = t.length; n < a; ++n)
                if (
                  ((r = t[n]),
                  (o = e[n]),
                  r instanceof Array && o instanceof Array)
                ) {
                  if (!i.arrayEquals(r, o)) return !1;
                } else if (r !== o) return !1;
              return !0;
            },
            clone: function(t) {
              if (i.isArray(t)) return t.map(i.clone);
              if (i.isObject(t)) {
                for (
                  var e = {}, n = Object.keys(t), a = n.length, r = 0;
                  r < a;
                  ++r
                )
                  e[n[r]] = i.clone(t[n[r]]);
                return e;
              }
              return t;
            },
            _merger: function(t, e, n, a) {
              var r = e[t],
                o = n[t];
              i.isObject(r) && i.isObject(o)
                ? i.merge(r, o, a)
                : (e[t] = i.clone(o));
            },
            _mergerIf: function(t, e, n) {
              var a = e[t],
                r = n[t];
              i.isObject(a) && i.isObject(r)
                ? i.mergeIf(a, r)
                : e.hasOwnProperty(t) || (e[t] = i.clone(r));
            },
            merge: function(t, e, n) {
              var a,
                r,
                o,
                s,
                l,
                u = i.isArray(e) ? e : [e],
                d = u.length;
              if (!i.isObject(t)) return t;
              for (a = (n = n || {}).merger || i._merger, r = 0; r < d; ++r)
                if (((e = u[r]), i.isObject(e)))
                  for (l = 0, s = (o = Object.keys(e)).length; l < s; ++l)
                    a(o[l], t, e, n);
              return t;
            },
            mergeIf: function(t, e) {
              return i.merge(t, e, { merger: i._mergerIf });
            },
            extend: function(t) {
              for (var e = 1, n = arguments.length; e < n; ++e)
                i.each(arguments[e], function(e, n) {
                  t[n] = e;
                });
              return t;
            },
            inherits: function(t) {
              var e = this,
                n =
                  t && t.hasOwnProperty("constructor")
                    ? t.constructor
                    : function() {
                        return e.apply(this, arguments);
                      },
                a = function() {
                  this.constructor = n;
                };
              return (
                (a.prototype = e.prototype),
                (n.prototype = new a()),
                (n.extend = i.inherits),
                t && i.extend(n.prototype, t),
                (n.__super__ = e.prototype),
                n
              );
            }
          };
          (e.exports = i),
            (i.callCallback = i.callback),
            (i.indexOf = function(t, e, n) {
              return Array.prototype.indexOf.call(t, e, n);
            }),
            (i.getValueOrDefault = i.valueOrDefault),
            (i.getValueAtIndexOrDefault = i.valueAtIndexOrDefault);
        },
        {}
      ],
      43: [
        function(t, e, n) {
          "use strict";
          var i = t(42),
            a = {
              linear: function(t) {
                return t;
              },
              easeInQuad: function(t) {
                return t * t;
              },
              easeOutQuad: function(t) {
                return -t * (t - 2);
              },
              easeInOutQuad: function(t) {
                return (t /= 0.5) < 1
                  ? 0.5 * t * t
                  : -0.5 * (--t * (t - 2) - 1);
              },
              easeInCubic: function(t) {
                return t * t * t;
              },
              easeOutCubic: function(t) {
                return (t -= 1) * t * t + 1;
              },
              easeInOutCubic: function(t) {
                return (t /= 0.5) < 1
                  ? 0.5 * t * t * t
                  : 0.5 * ((t -= 2) * t * t + 2);
              },
              easeInQuart: function(t) {
                return t * t * t * t;
              },
              easeOutQuart: function(t) {
                return -((t -= 1) * t * t * t - 1);
              },
              easeInOutQuart: function(t) {
                return (t /= 0.5) < 1
                  ? 0.5 * t * t * t * t
                  : -0.5 * ((t -= 2) * t * t * t - 2);
              },
              easeInQuint: function(t) {
                return t * t * t * t * t;
              },
              easeOutQuint: function(t) {
                return (t -= 1) * t * t * t * t + 1;
              },
              easeInOutQuint: function(t) {
                return (t /= 0.5) < 1
                  ? 0.5 * t * t * t * t * t
                  : 0.5 * ((t -= 2) * t * t * t * t + 2);
              },
              easeInSine: function(t) {
                return 1 - Math.cos(t * (Math.PI / 2));
              },
              easeOutSine: function(t) {
                return Math.sin(t * (Math.PI / 2));
              },
              easeInOutSine: function(t) {
                return -0.5 * (Math.cos(Math.PI * t) - 1);
              },
              easeInExpo: function(t) {
                return 0 === t ? 0 : Math.pow(2, 10 * (t - 1));
              },
              easeOutExpo: function(t) {
                return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
              },
              easeInOutExpo: function(t) {
                return 0 === t
                  ? 0
                  : 1 === t
                    ? 1
                    : (t /= 0.5) < 1
                      ? 0.5 * Math.pow(2, 10 * (t - 1))
                      : 0.5 * (2 - Math.pow(2, -10 * --t));
              },
              easeInCirc: function(t) {
                return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1);
              },
              easeOutCirc: function(t) {
                return Math.sqrt(1 - (t -= 1) * t);
              },
              easeInOutCirc: function(t) {
                return (t /= 0.5) < 1
                  ? -0.5 * (Math.sqrt(1 - t * t) - 1)
                  : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
              },
              easeInElastic: function(t) {
                var e = 1.70158,
                  n = 0,
                  i = 1;
                return 0 === t
                  ? 0
                  : 1 === t
                    ? 1
                    : (n || (n = 0.3),
                      i < 1
                        ? ((i = 1), (e = n / 4))
                        : (e = n / (2 * Math.PI) * Math.asin(1 / i)),
                      -i *
                        Math.pow(2, 10 * (t -= 1)) *
                        Math.sin((t - e) * (2 * Math.PI) / n));
              },
              easeOutElastic: function(t) {
                var e = 1.70158,
                  n = 0,
                  i = 1;
                return 0 === t
                  ? 0
                  : 1 === t
                    ? 1
                    : (n || (n = 0.3),
                      i < 1
                        ? ((i = 1), (e = n / 4))
                        : (e = n / (2 * Math.PI) * Math.asin(1 / i)),
                      i *
                        Math.pow(2, -10 * t) *
                        Math.sin((t - e) * (2 * Math.PI) / n) +
                        1);
              },
              easeInOutElastic: function(t) {
                var e = 1.70158,
                  n = 0,
                  i = 1;
                return 0 === t
                  ? 0
                  : 2 == (t /= 0.5)
                    ? 1
                    : (n || (n = 0.45),
                      i < 1
                        ? ((i = 1), (e = n / 4))
                        : (e = n / (2 * Math.PI) * Math.asin(1 / i)),
                      t < 1
                        ? i *
                          Math.pow(2, 10 * (t -= 1)) *
                          Math.sin((t - e) * (2 * Math.PI) / n) *
                          -0.5
                        : i *
                            Math.pow(2, -10 * (t -= 1)) *
                            Math.sin((t - e) * (2 * Math.PI) / n) *
                            0.5 +
                          1);
              },
              easeInBack: function(t) {
                var e = 1.70158;
                return t * t * ((e + 1) * t - e);
              },
              easeOutBack: function(t) {
                var e = 1.70158;
                return (t -= 1) * t * ((e + 1) * t + e) + 1;
              },
              easeInOutBack: function(t) {
                var e = 1.70158;
                return (t /= 0.5) < 1
                  ? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5
                  : 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
              },
              easeInBounce: function(t) {
                return 1 - a.easeOutBounce(1 - t);
              },
              easeOutBounce: function(t) {
                return t < 1 / 2.75
                  ? 7.5625 * t * t
                  : t < 2 / 2.75
                    ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                    : t < 2.5 / 2.75
                      ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                      : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
              },
              easeInOutBounce: function(t) {
                return t < 0.5
                  ? 0.5 * a.easeInBounce(2 * t)
                  : 0.5 * a.easeOutBounce(2 * t - 1) + 0.5;
              }
            };
          (e.exports = { effects: a }), (i.easingEffects = a);
        },
        { 42: 42 }
      ],
      44: [
        function(t, e, n) {
          "use strict";
          var i = t(42);
          e.exports = {
            toLineHeight: function(t, e) {
              var n = ("" + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
              if (!n || "normal" === n[1]) return 1.2 * e;
              switch (((t = +n[2]), n[3])) {
                case "px":
                  return t;
                case "%":
                  t /= 100;
              }
              return e * t;
            },
            toPadding: function(t) {
              var e, n, a, r;
              return (
                i.isObject(t)
                  ? ((e = +t.top || 0),
                    (n = +t.right || 0),
                    (a = +t.bottom || 0),
                    (r = +t.left || 0))
                  : (e = n = a = r = +t || 0),
                {
                  top: e,
                  right: n,
                  bottom: a,
                  left: r,
                  height: e + a,
                  width: r + n
                }
              );
            },
            resolve: function(t, e, n) {
              var a, r, o;
              for (a = 0, r = t.length; a < r; ++a)
                if (
                  void 0 !== (o = t[a]) &&
                  (void 0 !== e && "function" == typeof o && (o = o(e)),
                  void 0 !== n && i.isArray(o) && (o = o[n]),
                  void 0 !== o)
                )
                  return o;
            }
          };
        },
        { 42: 42 }
      ],
      45: [
        function(t, e, n) {
          "use strict";
          (e.exports = t(42)),
            (e.exports.easing = t(43)),
            (e.exports.canvas = t(41)),
            (e.exports.options = t(44));
        },
        { 41: 41, 42: 42, 43: 43, 44: 44 }
      ],
      46: [
        function(t, e, n) {
          e.exports = {
            acquireContext: function(t) {
              return (
                t && t.canvas && (t = t.canvas),
                (t && t.getContext("2d")) || null
              );
            }
          };
        },
        {}
      ],
      47: [
        function(t, e, n) {
          "use strict";
          function i(t, e) {
            var n = p.getStyle(t, e),
              i = n && n.match(/^(\d+)(\.\d+)?px$/);
            return i ? Number(i[1]) : void 0;
          }
          function a(t, e) {
            var n = t.style,
              a = t.getAttribute("height"),
              r = t.getAttribute("width");
            if (
              ((t[v] = {
                initial: {
                  height: a,
                  width: r,
                  style: {
                    display: n.display,
                    height: n.height,
                    width: n.width
                  }
                }
              }),
              (n.display = n.display || "block"),
              null === r || "" === r)
            ) {
              var o = i(t, "width");
              void 0 !== o && (t.width = o);
            }
            if (null === a || "" === a)
              if ("" === t.style.height)
                t.height = t.width / (e.options.aspectRatio || 2);
              else {
                var s = i(t, "height");
                void 0 !== o && (t.height = s);
              }
            return t;
          }
          function r(t, e, n) {
            t.addEventListener(e, n, w);
          }
          function o(t, e, n) {
            t.removeEventListener(e, n, w);
          }
          function s(t, e, n, i, a) {
            return {
              type: t,
              chart: e,
              native: a || null,
              x: void 0 !== n ? n : null,
              y: void 0 !== i ? i : null
            };
          }
          function l(t, e) {
            var n = k[t.type] || t.type,
              i = p.getRelativePosition(t, e);
            return s(n, e, i.x, i.y, t);
          }
          function u(t, e) {
            var n = !1,
              i = [];
            return function() {
              (i = Array.prototype.slice.call(arguments)),
                (e = e || this),
                n ||
                  ((n = !0),
                  p.requestAnimFrame.call(window, function() {
                    (n = !1), t.apply(e, i);
                  }));
            };
          }
          function d(t) {
            var e = document.createElement("div"),
              n = y + "size-monitor",
              i =
                "position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;";
            (e.style.cssText = i),
              (e.className = n),
              (e.innerHTML =
                '<div class="' +
                n +
                '-expand" style="' +
                i +
                '"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="' +
                n +
                '-shrink" style="' +
                i +
                '"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div>');
            var a = e.childNodes[0],
              o = e.childNodes[1];
            e._reset = function() {
              (a.scrollLeft = 1e6),
                (a.scrollTop = 1e6),
                (o.scrollLeft = 1e6),
                (o.scrollTop = 1e6);
            };
            var s = function() {
              e._reset(), t();
            };
            return (
              r(a, "scroll", s.bind(a, "expand")),
              r(o, "scroll", s.bind(o, "shrink")),
              e
            );
          }
          function c(t, e) {
            var n = t[v] || (t[v] = {}),
              i = (n.renderProxy = function(t) {
                t.animationName === x && e();
              });
            p.each(_, function(e) {
              r(t, e, i);
            }),
              (n.reflow = !!t.offsetParent),
              t.classList.add(b);
          }
          function h(t) {
            var e = t[v] || {},
              n = e.renderProxy;
            n &&
              (p.each(_, function(e) {
                o(t, e, n);
              }),
              delete e.renderProxy),
              t.classList.remove(b);
          }
          function f(t, e, n) {
            var i = t[v] || (t[v] = {}),
              a = (i.resizer = d(
                u(function() {
                  if (i.resizer) return e(s("resize", n));
                })
              ));
            c(t, function() {
              if (i.resizer) {
                var e = t.parentNode;
                e && e !== a.parentNode && e.insertBefore(a, e.firstChild),
                  a._reset();
              }
            });
          }
          function g(t) {
            var e = t[v] || {},
              n = e.resizer;
            delete e.resizer,
              h(t),
              n && n.parentNode && n.parentNode.removeChild(n);
          }
          function m(t, e) {
            var n = t._style || document.createElement("style");
            t._style ||
              ((t._style = n),
              (e = "/* Chart.js */\n" + e),
              n.setAttribute("type", "text/css"),
              document.getElementsByTagName("head")[0].appendChild(n)),
              n.appendChild(document.createTextNode(e));
          }
          var p = t(45),
            v = "$chartjs",
            y = "chartjs-",
            b = y + "render-monitor",
            x = y + "render-animation",
            _ = ["animationstart", "webkitAnimationStart"],
            k = {
              touchstart: "mousedown",
              touchmove: "mousemove",
              touchend: "mouseup",
              pointerenter: "mouseenter",
              pointerdown: "mousedown",
              pointermove: "mousemove",
              pointerup: "mouseup",
              pointerleave: "mouseout",
              pointerout: "mouseout"
            },
            w = !!(function() {
              var t = !1;
              try {
                var e = Object.defineProperty({}, "passive", {
                  get: function() {
                    t = !0;
                  }
                });
                window.addEventListener("e", null, e);
              } catch (t) {}
              return t;
            })() && { passive: !0 };
          (e.exports = {
            _enabled:
              "undefined" != typeof window && "undefined" != typeof document,
            initialize: function() {
              var t = "from{opacity:0.99}to{opacity:1}";
              m(
                this,
                "@-webkit-keyframes " +
                  x +
                  "{" +
                  t +
                  "}@keyframes " +
                  x +
                  "{" +
                  t +
                  "}." +
                  b +
                  "{-webkit-animation:" +
                  x +
                  " 0.001s;animation:" +
                  x +
                  " 0.001s;}"
              );
            },
            acquireContext: function(t, e) {
              "string" == typeof t
                ? (t = document.getElementById(t))
                : t.length && (t = t[0]),
                t && t.canvas && (t = t.canvas);
              var n = t && t.getContext && t.getContext("2d");
              return n && n.canvas === t ? (a(t, e), n) : null;
            },
            releaseContext: function(t) {
              var e = t.canvas;
              if (e[v]) {
                var n = e[v].initial;
                ["height", "width"].forEach(function(t) {
                  var i = n[t];
                  p.isNullOrUndef(i)
                    ? e.removeAttribute(t)
                    : e.setAttribute(t, i);
                }),
                  p.each(n.style || {}, function(t, n) {
                    e.style[n] = t;
                  }),
                  (e.width = e.width),
                  delete e[v];
              }
            },
            addEventListener: function(t, e, n) {
              var i = t.canvas;
              if ("resize" !== e) {
                var a = n[v] || (n[v] = {});
                r(
                  i,
                  e,
                  ((a.proxies || (a.proxies = {}))[t.id + "_" + e] = function(
                    e
                  ) {
                    n(l(e, t));
                  })
                );
              } else f(i, n, t);
            },
            removeEventListener: function(t, e, n) {
              var i = t.canvas;
              if ("resize" !== e) {
                var a = ((n[v] || {}).proxies || {})[t.id + "_" + e];
                a && o(i, e, a);
              } else g(i);
            }
          }),
            (p.addEvent = r),
            (p.removeEvent = o);
        },
        { 45: 45 }
      ],
      48: [
        function(t, e, n) {
          "use strict";
          var i = t(45),
            a = t(46),
            r = t(47),
            o = r._enabled ? r : a;
          e.exports = i.extend(
            {
              initialize: function() {},
              acquireContext: function() {},
              releaseContext: function() {},
              addEventListener: function() {},
              removeEventListener: function() {}
            },
            o
          );
        },
        { 45: 45, 46: 46, 47: 47 }
      ],
      49: [
        function(t, e, n) {
          "use strict";
          var i = t(25),
            a = t(40),
            r = t(45);
          i._set("global", { plugins: { filler: { propagate: !0 } } }),
            (e.exports = function() {
              function t(t, e, n) {
                var i,
                  a = t._model || {},
                  r = a.fill;
                if (
                  (void 0 === r && (r = !!a.backgroundColor),
                  !1 === r || null === r)
                )
                  return !1;
                if (!0 === r) return "origin";
                if (
                  ((i = parseFloat(r, 10)), isFinite(i) && Math.floor(i) === i)
                )
                  return (
                    ("-" !== r[0] && "+" !== r[0]) || (i = e + i),
                    !(i === e || i < 0 || i >= n) && i
                  );
                switch (r) {
                  case "bottom":
                    return "start";
                  case "top":
                    return "end";
                  case "zero":
                    return "origin";
                  case "origin":
                  case "start":
                  case "end":
                    return r;
                  default:
                    return !1;
                }
              }
              function e(t) {
                var e,
                  n = t.el._model || {},
                  i = t.el._scale || {},
                  a = t.fill,
                  r = null;
                if (isFinite(a)) return null;
                if (
                  ("start" === a
                    ? (r = void 0 === n.scaleBottom ? i.bottom : n.scaleBottom)
                    : "end" === a
                      ? (r = void 0 === n.scaleTop ? i.top : n.scaleTop)
                      : void 0 !== n.scaleZero
                        ? (r = n.scaleZero)
                        : i.getBasePosition
                          ? (r = i.getBasePosition())
                          : i.getBasePixel && (r = i.getBasePixel()),
                  void 0 !== r && null !== r)
                ) {
                  if (void 0 !== r.x && void 0 !== r.y) return r;
                  if ("number" == typeof r && isFinite(r))
                    return (
                      (e = i.isHorizontal()),
                      { x: e ? r : null, y: e ? null : r }
                    );
                }
                return null;
              }
              function n(t, e, n) {
                var i,
                  a = t[e].fill,
                  r = [e];
                if (!n) return a;
                for (; !1 !== a && -1 === r.indexOf(a); ) {
                  if (!isFinite(a)) return a;
                  if (!(i = t[a])) return !1;
                  if (i.visible) return a;
                  r.push(a), (a = i.fill);
                }
                return !1;
              }
              function o(t) {
                var e = t.fill,
                  n = "dataset";
                return !1 === e
                  ? null
                  : (isFinite(e) || (n = "boundary"), d[n](t));
              }
              function s(t) {
                return t && !t.skip;
              }
              function l(t, e, n, i, a) {
                var o;
                if (i && a) {
                  for (t.moveTo(e[0].x, e[0].y), o = 1; o < i; ++o)
                    r.canvas.lineTo(t, e[o - 1], e[o]);
                  for (t.lineTo(n[a - 1].x, n[a - 1].y), o = a - 1; o > 0; --o)
                    r.canvas.lineTo(t, n[o], n[o - 1], !0);
                }
              }
              function u(t, e, n, i, a, r) {
                var o,
                  u,
                  d,
                  c,
                  h,
                  f,
                  g,
                  m = e.length,
                  p = i.spanGaps,
                  v = [],
                  y = [],
                  b = 0,
                  x = 0;
                for (t.beginPath(), o = 0, u = m + !!r; o < u; ++o)
                  (h = n((c = e[(d = o % m)]._view), d, i)),
                    (f = s(c)),
                    (g = s(h)),
                    f && g
                      ? ((b = v.push(c)), (x = y.push(h)))
                      : b &&
                        x &&
                        (p
                          ? (f && v.push(c), g && y.push(h))
                          : (l(t, v, y, b, x),
                            (b = x = 0),
                            (v = []),
                            (y = [])));
                l(t, v, y, b, x), t.closePath(), (t.fillStyle = a), t.fill();
              }
              var d = {
                dataset: function(t) {
                  var e = t.fill,
                    n = t.chart,
                    i = n.getDatasetMeta(e),
                    a =
                      (i && n.isDatasetVisible(e) && i.dataset._children) || [],
                    r = a.length || 0;
                  return r
                    ? function(t, e) {
                        return (e < r && a[e]._view) || null;
                      }
                    : null;
                },
                boundary: function(t) {
                  var e = t.boundary,
                    n = e ? e.x : null,
                    i = e ? e.y : null;
                  return function(t) {
                    return { x: null === n ? t.x : n, y: null === i ? t.y : i };
                  };
                }
              };
              return {
                id: "filler",
                afterDatasetsUpdate: function(i, r) {
                  var s,
                    l,
                    u,
                    d,
                    c = (i.data.datasets || []).length,
                    h = r.propagate,
                    f = [];
                  for (l = 0; l < c; ++l)
                    (d = null),
                      (u = (s = i.getDatasetMeta(l)).dataset) &&
                        u._model &&
                        u instanceof a.Line &&
                        (d = {
                          visible: i.isDatasetVisible(l),
                          fill: t(u, l, c),
                          chart: i,
                          el: u
                        }),
                      (s.$filler = d),
                      f.push(d);
                  for (l = 0; l < c; ++l)
                    (d = f[l]) &&
                      ((d.fill = n(f, l, h)),
                      (d.boundary = e(d)),
                      (d.mapper = o(d)));
                },
                beforeDatasetDraw: function(t, e) {
                  var n = e.meta.$filler;
                  if (n) {
                    var a = t.ctx,
                      o = n.el,
                      s = o._view,
                      l = o._children || [],
                      d = n.mapper,
                      c = s.backgroundColor || i.global.defaultColor;
                    d &&
                      c &&
                      l.length &&
                      (r.canvas.clipArea(a, t.chartArea),
                      u(a, l, d, s, c, o._loop),
                      r.canvas.unclipArea(a));
                  }
                }
              };
            });
        },
        { 25: 25, 40: 40, 45: 45 }
      ],
      50: [
        function(t, e, n) {
          "use strict";
          var i = t(25),
            a = t(26),
            r = t(45);
          i._set("global", {
            legend: {
              display: !0,
              position: "top",
              fullWidth: !0,
              reverse: !1,
              weight: 1e3,
              onClick: function(t, e) {
                var n = e.datasetIndex,
                  i = this.chart,
                  a = i.getDatasetMeta(n);
                (a.hidden =
                  null === a.hidden ? !i.data.datasets[n].hidden : null),
                  i.update();
              },
              onHover: null,
              labels: {
                boxWidth: 40,
                padding: 10,
                generateLabels: function(t) {
                  var e = t.data;
                  return r.isArray(e.datasets)
                    ? e.datasets.map(function(e, n) {
                        return {
                          text: e.label,
                          fillStyle: r.isArray(e.backgroundColor)
                            ? e.backgroundColor[0]
                            : e.backgroundColor,
                          hidden: !t.isDatasetVisible(n),
                          lineCap: e.borderCapStyle,
                          lineDash: e.borderDash,
                          lineDashOffset: e.borderDashOffset,
                          lineJoin: e.borderJoinStyle,
                          lineWidth: e.borderWidth,
                          strokeStyle: e.borderColor,
                          pointStyle: e.pointStyle,
                          datasetIndex: n
                        };
                      }, this)
                    : [];
                }
              }
            },
            legendCallback: function(t) {
              var e = [];
              e.push('<ul class="' + t.id + '-legend">');
              for (var n = 0; n < t.data.datasets.length; n++)
                e.push(
                  '<li><span style="background-color:' +
                    t.data.datasets[n].backgroundColor +
                    '"></span>'
                ),
                  t.data.datasets[n].label && e.push(t.data.datasets[n].label),
                  e.push("</li>");
              return e.push("</ul>"), e.join("");
            }
          }),
            (e.exports = function(t) {
              function e(t, e) {
                return t.usePointStyle ? e * Math.SQRT2 : t.boxWidth;
              }
              function n(e, n) {
                var i = new t.Legend({ ctx: e.ctx, options: n, chart: e });
                o.configure(e, i, n), o.addBox(e, i), (e.legend = i);
              }
              var o = t.layoutService,
                s = r.noop;
              return (
                (t.Legend = a.extend({
                  initialize: function(t) {
                    r.extend(this, t),
                      (this.legendHitBoxes = []),
                      (this.doughnutMode = !1);
                  },
                  beforeUpdate: s,
                  update: function(t, e, n) {
                    var i = this;
                    return (
                      i.beforeUpdate(),
                      (i.maxWidth = t),
                      (i.maxHeight = e),
                      (i.margins = n),
                      i.beforeSetDimensions(),
                      i.setDimensions(),
                      i.afterSetDimensions(),
                      i.beforeBuildLabels(),
                      i.buildLabels(),
                      i.afterBuildLabels(),
                      i.beforeFit(),
                      i.fit(),
                      i.afterFit(),
                      i.afterUpdate(),
                      i.minSize
                    );
                  },
                  afterUpdate: s,
                  beforeSetDimensions: s,
                  setDimensions: function() {
                    var t = this;
                    t.isHorizontal()
                      ? ((t.width = t.maxWidth),
                        (t.left = 0),
                        (t.right = t.width))
                      : ((t.height = t.maxHeight),
                        (t.top = 0),
                        (t.bottom = t.height)),
                      (t.paddingLeft = 0),
                      (t.paddingTop = 0),
                      (t.paddingRight = 0),
                      (t.paddingBottom = 0),
                      (t.minSize = { width: 0, height: 0 });
                  },
                  afterSetDimensions: s,
                  beforeBuildLabels: s,
                  buildLabels: function() {
                    var t = this,
                      e = t.options.labels || {},
                      n = r.callback(e.generateLabels, [t.chart], t) || [];
                    e.filter &&
                      (n = n.filter(function(n) {
                        return e.filter(n, t.chart.data);
                      })),
                      t.options.reverse && n.reverse(),
                      (t.legendItems = n);
                  },
                  afterBuildLabels: s,
                  beforeFit: s,
                  fit: function() {
                    var t = this,
                      n = t.options,
                      a = n.labels,
                      o = n.display,
                      s = t.ctx,
                      l = i.global,
                      u = r.valueOrDefault,
                      d = u(a.fontSize, l.defaultFontSize),
                      c = u(a.fontStyle, l.defaultFontStyle),
                      h = u(a.fontFamily, l.defaultFontFamily),
                      f = r.fontString(d, c, h),
                      g = (t.legendHitBoxes = []),
                      m = t.minSize,
                      p = t.isHorizontal();
                    if (
                      (p
                        ? ((m.width = t.maxWidth), (m.height = o ? 10 : 0))
                        : ((m.width = o ? 10 : 0), (m.height = t.maxHeight)),
                      o)
                    )
                      if (((s.font = f), p)) {
                        var v = (t.lineWidths = [0]),
                          y = t.legendItems.length ? d + a.padding : 0;
                        (s.textAlign = "left"),
                          (s.textBaseline = "top"),
                          r.each(t.legendItems, function(n, i) {
                            var r =
                              e(a, d) + d / 2 + s.measureText(n.text).width;
                            v[v.length - 1] + r + a.padding >= t.width &&
                              ((y += d + a.padding), (v[v.length] = t.left)),
                              (g[i] = { left: 0, top: 0, width: r, height: d }),
                              (v[v.length - 1] += r + a.padding);
                          }),
                          (m.height += y);
                      } else {
                        var b = a.padding,
                          x = (t.columnWidths = []),
                          _ = a.padding,
                          k = 0,
                          w = 0,
                          M = d + b;
                        r.each(t.legendItems, function(t, n) {
                          var i = e(a, d) + d / 2 + s.measureText(t.text).width;
                          w + M > m.height &&
                            ((_ += k + a.padding), x.push(k), (k = 0), (w = 0)),
                            (k = Math.max(k, i)),
                            (w += M),
                            (g[n] = { left: 0, top: 0, width: i, height: d });
                        }),
                          (_ += k),
                          x.push(k),
                          (m.width += _);
                      }
                    (t.width = m.width), (t.height = m.height);
                  },
                  afterFit: s,
                  isHorizontal: function() {
                    return (
                      "top" === this.options.position ||
                      "bottom" === this.options.position
                    );
                  },
                  draw: function() {
                    var t = this,
                      n = t.options,
                      a = n.labels,
                      o = i.global,
                      s = o.elements.line,
                      l = t.width,
                      u = t.lineWidths;
                    if (n.display) {
                      var d,
                        c = t.ctx,
                        h = r.valueOrDefault,
                        f = h(a.fontColor, o.defaultFontColor),
                        g = h(a.fontSize, o.defaultFontSize),
                        m = h(a.fontStyle, o.defaultFontStyle),
                        p = h(a.fontFamily, o.defaultFontFamily),
                        v = r.fontString(g, m, p);
                      (c.textAlign = "left"),
                        (c.textBaseline = "middle"),
                        (c.lineWidth = 0.5),
                        (c.strokeStyle = f),
                        (c.fillStyle = f),
                        (c.font = v);
                      var y = e(a, g),
                        b = t.legendHitBoxes,
                        x = function(t, e, i) {
                          if (!(isNaN(y) || y <= 0)) {
                            c.save(),
                              (c.fillStyle = h(i.fillStyle, o.defaultColor)),
                              (c.lineCap = h(i.lineCap, s.borderCapStyle)),
                              (c.lineDashOffset = h(
                                i.lineDashOffset,
                                s.borderDashOffset
                              )),
                              (c.lineJoin = h(i.lineJoin, s.borderJoinStyle)),
                              (c.lineWidth = h(i.lineWidth, s.borderWidth)),
                              (c.strokeStyle = h(
                                i.strokeStyle,
                                o.defaultColor
                              ));
                            var a = 0 === h(i.lineWidth, s.borderWidth);
                            if (
                              (c.setLineDash &&
                                c.setLineDash(h(i.lineDash, s.borderDash)),
                              n.labels && n.labels.usePointStyle)
                            ) {
                              var l = g * Math.SQRT2 / 2,
                                u = l / Math.SQRT2,
                                d = t + u,
                                f = e + u;
                              r.canvas.drawPoint(c, i.pointStyle, l, d, f);
                            } else
                              a || c.strokeRect(t, e, y, g),
                                c.fillRect(t, e, y, g);
                            c.restore();
                          }
                        },
                        _ = function(t, e, n, i) {
                          var a = g / 2,
                            r = y + a + t,
                            o = e + a;
                          c.fillText(n.text, r, o),
                            n.hidden &&
                              (c.beginPath(),
                              (c.lineWidth = 2),
                              c.moveTo(r, o),
                              c.lineTo(r + i, o),
                              c.stroke());
                        },
                        k = t.isHorizontal();
                      d = k
                        ? {
                            x: t.left + (l - u[0]) / 2,
                            y: t.top + a.padding,
                            line: 0
                          }
                        : {
                            x: t.left + a.padding,
                            y: t.top + a.padding,
                            line: 0
                          };
                      var w = g + a.padding;
                      r.each(t.legendItems, function(e, n) {
                        var i = c.measureText(e.text).width,
                          r = y + g / 2 + i,
                          o = d.x,
                          s = d.y;
                        k
                          ? o + r >= l &&
                            ((s = d.y += w),
                            d.line++,
                            (o = d.x = t.left + (l - u[d.line]) / 2))
                          : s + w > t.bottom &&
                            ((o = d.x = o + t.columnWidths[d.line] + a.padding),
                            (s = d.y = t.top + a.padding),
                            d.line++),
                          x(o, s, e),
                          (b[n].left = o),
                          (b[n].top = s),
                          _(o, s, e, i),
                          k ? (d.x += r + a.padding) : (d.y += w);
                      });
                    }
                  },
                  handleEvent: function(t) {
                    var e = this,
                      n = e.options,
                      i = "mouseup" === t.type ? "click" : t.type,
                      a = !1;
                    if ("mousemove" === i) {
                      if (!n.onHover) return;
                    } else {
                      if ("click" !== i) return;
                      if (!n.onClick) return;
                    }
                    var r = t.x,
                      o = t.y;
                    if (
                      r >= e.left &&
                      r <= e.right &&
                      o >= e.top &&
                      o <= e.bottom
                    )
                      for (var s = e.legendHitBoxes, l = 0; l < s.length; ++l) {
                        var u = s[l];
                        if (
                          r >= u.left &&
                          r <= u.left + u.width &&
                          o >= u.top &&
                          o <= u.top + u.height
                        ) {
                          if ("click" === i) {
                            n.onClick.call(e, t.native, e.legendItems[l]),
                              (a = !0);
                            break;
                          }
                          if ("mousemove" === i) {
                            n.onHover.call(e, t.native, e.legendItems[l]),
                              (a = !0);
                            break;
                          }
                        }
                      }
                    return a;
                  }
                })),
                {
                  id: "legend",
                  beforeInit: function(t) {
                    var e = t.options.legend;
                    e && n(t, e);
                  },
                  beforeUpdate: function(t) {
                    var e = t.options.legend,
                      a = t.legend;
                    e
                      ? (r.mergeIf(e, i.global.legend),
                        a ? (o.configure(t, a, e), (a.options = e)) : n(t, e))
                      : a && (o.removeBox(t, a), delete t.legend);
                  },
                  afterEvent: function(t, e) {
                    var n = t.legend;
                    n && n.handleEvent(e);
                  }
                }
              );
            });
        },
        { 25: 25, 26: 26, 45: 45 }
      ],
      51: [
        function(t, e, n) {
          "use strict";
          var i = t(25),
            a = t(26),
            r = t(45);
          i._set("global", {
            title: {
              display: !1,
              fontStyle: "bold",
              fullWidth: !0,
              lineHeight: 1.2,
              padding: 10,
              position: "top",
              text: "",
              weight: 2e3
            }
          }),
            (e.exports = function(t) {
              function e(e, i) {
                var a = new t.Title({ ctx: e.ctx, options: i, chart: e });
                n.configure(e, a, i), n.addBox(e, a), (e.titleBlock = a);
              }
              var n = t.layoutService,
                o = r.noop;
              return (
                (t.Title = a.extend({
                  initialize: function(t) {
                    var e = this;
                    r.extend(e, t), (e.legendHitBoxes = []);
                  },
                  beforeUpdate: o,
                  update: function(t, e, n) {
                    var i = this;
                    return (
                      i.beforeUpdate(),
                      (i.maxWidth = t),
                      (i.maxHeight = e),
                      (i.margins = n),
                      i.beforeSetDimensions(),
                      i.setDimensions(),
                      i.afterSetDimensions(),
                      i.beforeBuildLabels(),
                      i.buildLabels(),
                      i.afterBuildLabels(),
                      i.beforeFit(),
                      i.fit(),
                      i.afterFit(),
                      i.afterUpdate(),
                      i.minSize
                    );
                  },
                  afterUpdate: o,
                  beforeSetDimensions: o,
                  setDimensions: function() {
                    var t = this;
                    t.isHorizontal()
                      ? ((t.width = t.maxWidth),
                        (t.left = 0),
                        (t.right = t.width))
                      : ((t.height = t.maxHeight),
                        (t.top = 0),
                        (t.bottom = t.height)),
                      (t.paddingLeft = 0),
                      (t.paddingTop = 0),
                      (t.paddingRight = 0),
                      (t.paddingBottom = 0),
                      (t.minSize = { width: 0, height: 0 });
                  },
                  afterSetDimensions: o,
                  beforeBuildLabels: o,
                  buildLabels: o,
                  afterBuildLabels: o,
                  beforeFit: o,
                  fit: function() {
                    var t = this,
                      e = r.valueOrDefault,
                      n = t.options,
                      a = n.display,
                      o = e(n.fontSize, i.global.defaultFontSize),
                      s = t.minSize,
                      l = r.isArray(n.text) ? n.text.length : 1,
                      u = r.options.toLineHeight(n.lineHeight, o),
                      d = a ? l * u + 2 * n.padding : 0;
                    t.isHorizontal()
                      ? ((s.width = t.maxWidth), (s.height = d))
                      : ((s.width = d), (s.height = t.maxHeight)),
                      (t.width = s.width),
                      (t.height = s.height);
                  },
                  afterFit: o,
                  isHorizontal: function() {
                    var t = this.options.position;
                    return "top" === t || "bottom" === t;
                  },
                  draw: function() {
                    var t = this,
                      e = t.ctx,
                      n = r.valueOrDefault,
                      a = t.options,
                      o = i.global;
                    if (a.display) {
                      var s,
                        l,
                        u,
                        d = n(a.fontSize, o.defaultFontSize),
                        c = n(a.fontStyle, o.defaultFontStyle),
                        h = n(a.fontFamily, o.defaultFontFamily),
                        f = r.fontString(d, c, h),
                        g = r.options.toLineHeight(a.lineHeight, d),
                        m = g / 2 + a.padding,
                        p = 0,
                        v = t.top,
                        y = t.left,
                        b = t.bottom,
                        x = t.right;
                      (e.fillStyle = n(a.fontColor, o.defaultFontColor)),
                        (e.font = f),
                        t.isHorizontal()
                          ? ((l = y + (x - y) / 2), (u = v + m), (s = x - y))
                          : ((l = "left" === a.position ? y + m : x - m),
                            (u = v + (b - v) / 2),
                            (s = b - v),
                            (p =
                              Math.PI * ("left" === a.position ? -0.5 : 0.5))),
                        e.save(),
                        e.translate(l, u),
                        e.rotate(p),
                        (e.textAlign = "center"),
                        (e.textBaseline = "middle");
                      var _ = a.text;
                      if (r.isArray(_))
                        for (var k = 0, w = 0; w < _.length; ++w)
                          e.fillText(_[w], 0, k, s), (k += g);
                      else e.fillText(_, 0, 0, s);
                      e.restore();
                    }
                  }
                })),
                {
                  id: "title",
                  beforeInit: function(t) {
                    var n = t.options.title;
                    n && e(t, n);
                  },
                  beforeUpdate: function(a) {
                    var o = a.options.title,
                      s = a.titleBlock;
                    o
                      ? (r.mergeIf(o, i.global.title),
                        s ? (n.configure(a, s, o), (s.options = o)) : e(a, o))
                      : s &&
                        (t.layoutService.removeBox(a, s), delete a.titleBlock);
                  }
                }
              );
            });
        },
        { 25: 25, 26: 26, 45: 45 }
      ],
      52: [
        function(t, e, n) {
          "use strict";
          e.exports = function(t) {
            var e = t.Scale.extend({
              getLabels: function() {
                var t = this.chart.data;
                return (
                  this.options.labels ||
                  (this.isHorizontal() ? t.xLabels : t.yLabels) ||
                  t.labels
                );
              },
              determineDataLimits: function() {
                var t = this,
                  e = t.getLabels();
                (t.minIndex = 0), (t.maxIndex = e.length - 1);
                var n;
                void 0 !== t.options.ticks.min &&
                  ((n = e.indexOf(t.options.ticks.min)),
                  (t.minIndex = -1 !== n ? n : t.minIndex)),
                  void 0 !== t.options.ticks.max &&
                    ((n = e.indexOf(t.options.ticks.max)),
                    (t.maxIndex = -1 !== n ? n : t.maxIndex)),
                  (t.min = e[t.minIndex]),
                  (t.max = e[t.maxIndex]);
              },
              buildTicks: function() {
                var t = this,
                  e = t.getLabels();
                t.ticks =
                  0 === t.minIndex && t.maxIndex === e.length - 1
                    ? e
                    : e.slice(t.minIndex, t.maxIndex + 1);
              },
              getLabelForIndex: function(t, e) {
                var n = this,
                  i = n.chart.data,
                  a = n.isHorizontal();
                return i.yLabels && !a
                  ? n.getRightValue(i.datasets[e].data[t])
                  : n.ticks[t - n.minIndex];
              },
              getPixelForValue: function(t, e) {
                var n,
                  i = this,
                  a = i.options.offset,
                  r = Math.max(i.maxIndex + 1 - i.minIndex - (a ? 0 : 1), 1);
                if (
                  (void 0 !== t &&
                    null !== t &&
                    (n = i.isHorizontal() ? t.x : t.y),
                  void 0 !== n || (void 0 !== t && isNaN(e)))
                ) {
                  var o = i.getLabels();
                  t = n || t;
                  var s = o.indexOf(t);
                  e = -1 !== s ? s : e;
                }
                if (i.isHorizontal()) {
                  var l = i.width / r,
                    u = l * (e - i.minIndex);
                  return a && (u += l / 2), i.left + Math.round(u);
                }
                var d = i.height / r,
                  c = d * (e - i.minIndex);
                return a && (c += d / 2), i.top + Math.round(c);
              },
              getPixelForTick: function(t) {
                return this.getPixelForValue(
                  this.ticks[t],
                  t + this.minIndex,
                  null
                );
              },
              getValueForPixel: function(t) {
                var e = this,
                  n = e.options.offset,
                  i = Math.max(e._ticks.length - (n ? 0 : 1), 1),
                  a = e.isHorizontal(),
                  r = (a ? e.width : e.height) / i;
                return (
                  (t -= a ? e.left : e.top),
                  n && (t -= r / 2),
                  (t <= 0 ? 0 : Math.round(t / r)) + e.minIndex
                );
              },
              getBasePixel: function() {
                return this.bottom;
              }
            });
            t.scaleService.registerScaleType("category", e, {
              position: "bottom"
            });
          };
        },
        {}
      ],
      53: [
        function(t, e, n) {
          "use strict";
          var i = t(25),
            a = t(45),
            r = t(34);
          e.exports = function(t) {
            var e = {
                position: "left",
                ticks: { callback: r.formatters.linear }
              },
              n = t.LinearScaleBase.extend({
                determineDataLimits: function() {
                  function t(t) {
                    return o ? t.xAxisID === e.id : t.yAxisID === e.id;
                  }
                  var e = this,
                    n = e.options,
                    i = e.chart,
                    r = i.data.datasets,
                    o = e.isHorizontal();
                  (e.min = null), (e.max = null);
                  var s = n.stacked;
                  if (
                    (void 0 === s &&
                      a.each(r, function(e, n) {
                        if (!s) {
                          var a = i.getDatasetMeta(n);
                          i.isDatasetVisible(n) &&
                            t(a) &&
                            void 0 !== a.stack &&
                            (s = !0);
                        }
                      }),
                    n.stacked || s)
                  ) {
                    var l = {};
                    a.each(r, function(r, o) {
                      var s = i.getDatasetMeta(o),
                        u = [
                          s.type,
                          void 0 === n.stacked && void 0 === s.stack ? o : "",
                          s.stack
                        ].join(".");
                      void 0 === l[u] &&
                        (l[u] = { positiveValues: [], negativeValues: [] });
                      var d = l[u].positiveValues,
                        c = l[u].negativeValues;
                      i.isDatasetVisible(o) &&
                        t(s) &&
                        a.each(r.data, function(t, i) {
                          var a = +e.getRightValue(t);
                          isNaN(a) ||
                            s.data[i].hidden ||
                            ((d[i] = d[i] || 0),
                            (c[i] = c[i] || 0),
                            n.relativePoints
                              ? (d[i] = 100)
                              : a < 0
                                ? (c[i] += a)
                                : (d[i] += a));
                        });
                    }),
                      a.each(l, function(t) {
                        var n = t.positiveValues.concat(t.negativeValues),
                          i = a.min(n),
                          r = a.max(n);
                        (e.min = null === e.min ? i : Math.min(e.min, i)),
                          (e.max = null === e.max ? r : Math.max(e.max, r));
                      });
                  } else
                    a.each(r, function(n, r) {
                      var o = i.getDatasetMeta(r);
                      i.isDatasetVisible(r) &&
                        t(o) &&
                        a.each(n.data, function(t, n) {
                          var i = +e.getRightValue(t);
                          isNaN(i) ||
                            o.data[n].hidden ||
                            (null === e.min
                              ? (e.min = i)
                              : i < e.min && (e.min = i),
                            null === e.max
                              ? (e.max = i)
                              : i > e.max && (e.max = i));
                        });
                    });
                  (e.min = isFinite(e.min) && !isNaN(e.min) ? e.min : 0),
                    (e.max = isFinite(e.max) && !isNaN(e.max) ? e.max : 1),
                    this.handleTickRangeOptions();
                },
                getTickLimit: function() {
                  var t,
                    e = this,
                    n = e.options.ticks;
                  if (e.isHorizontal())
                    t = Math.min(
                      n.maxTicksLimit ? n.maxTicksLimit : 11,
                      Math.ceil(e.width / 50)
                    );
                  else {
                    var r = a.valueOrDefault(
                      n.fontSize,
                      i.global.defaultFontSize
                    );
                    t = Math.min(
                      n.maxTicksLimit ? n.maxTicksLimit : 11,
                      Math.ceil(e.height / (2 * r))
                    );
                  }
                  return t;
                },
                handleDirectionalChanges: function() {
                  this.isHorizontal() || this.ticks.reverse();
                },
                getLabelForIndex: function(t, e) {
                  return +this.getRightValue(
                    this.chart.data.datasets[e].data[t]
                  );
                },
                getPixelForValue: function(t) {
                  var e,
                    n = this,
                    i = n.start,
                    a = +n.getRightValue(t),
                    r = n.end - i;
                  return n.isHorizontal()
                    ? ((e = n.left + n.width / r * (a - i)), Math.round(e))
                    : ((e = n.bottom - n.height / r * (a - i)), Math.round(e));
                },
                getValueForPixel: function(t) {
                  var e = this,
                    n = e.isHorizontal(),
                    i = n ? e.width : e.height,
                    a = (n ? t - e.left : e.bottom - t) / i;
                  return e.start + (e.end - e.start) * a;
                },
                getPixelForTick: function(t) {
                  return this.getPixelForValue(this.ticksAsNumbers[t]);
                }
              });
            t.scaleService.registerScaleType("linear", n, e);
          };
        },
        { 25: 25, 34: 34, 45: 45 }
      ],
      54: [
        function(t, e, n) {
          "use strict";
          var i = t(45),
            a = t(34);
          e.exports = function(t) {
            var e = i.noop;
            t.LinearScaleBase = t.Scale.extend({
              getRightValue: function(e) {
                return "string" == typeof e
                  ? +e
                  : t.Scale.prototype.getRightValue.call(this, e);
              },
              handleTickRangeOptions: function() {
                var t = this,
                  e = t.options.ticks;
                if (e.beginAtZero) {
                  var n = i.sign(t.min),
                    a = i.sign(t.max);
                  n < 0 && a < 0 ? (t.max = 0) : n > 0 && a > 0 && (t.min = 0);
                }
                var r = void 0 !== e.min || void 0 !== e.suggestedMin,
                  o = void 0 !== e.max || void 0 !== e.suggestedMax;
                void 0 !== e.min
                  ? (t.min = e.min)
                  : void 0 !== e.suggestedMin &&
                    (null === t.min
                      ? (t.min = e.suggestedMin)
                      : (t.min = Math.min(t.min, e.suggestedMin))),
                  void 0 !== e.max
                    ? (t.max = e.max)
                    : void 0 !== e.suggestedMax &&
                      (null === t.max
                        ? (t.max = e.suggestedMax)
                        : (t.max = Math.max(t.max, e.suggestedMax))),
                  r !== o &&
                    t.min >= t.max &&
                    (r ? (t.max = t.min + 1) : (t.min = t.max - 1)),
                  t.min === t.max && (t.max++, e.beginAtZero || t.min--);
              },
              getTickLimit: e,
              handleDirectionalChanges: e,
              buildTicks: function() {
                var t = this,
                  e = t.options.ticks,
                  n = t.getTickLimit(),
                  r = {
                    maxTicks: (n = Math.max(2, n)),
                    min: e.min,
                    max: e.max,
                    stepSize: i.valueOrDefault(e.fixedStepSize, e.stepSize)
                  },
                  o = (t.ticks = a.generators.linear(r, t));
                t.handleDirectionalChanges(),
                  (t.max = i.max(o)),
                  (t.min = i.min(o)),
                  e.reverse
                    ? (o.reverse(), (t.start = t.max), (t.end = t.min))
                    : ((t.start = t.min), (t.end = t.max));
              },
              convertTicksToLabels: function() {
                var e = this;
                (e.ticksAsNumbers = e.ticks.slice()),
                  (e.zeroLineIndex = e.ticks.indexOf(0)),
                  t.Scale.prototype.convertTicksToLabels.call(e);
              }
            });
          };
        },
        { 34: 34, 45: 45 }
      ],
      55: [
        function(t, e, n) {
          "use strict";
          var i = t(45),
            a = t(34);
          e.exports = function(t) {
            var e = {
                position: "left",
                ticks: { callback: a.formatters.logarithmic }
              },
              n = t.Scale.extend({
                determineDataLimits: function() {
                  function t(t) {
                    return l ? t.xAxisID === e.id : t.yAxisID === e.id;
                  }
                  var e = this,
                    n = e.options,
                    a = n.ticks,
                    r = e.chart,
                    o = r.data.datasets,
                    s = i.valueOrDefault,
                    l = e.isHorizontal();
                  (e.min = null), (e.max = null), (e.minNotZero = null);
                  var u = n.stacked;
                  if (
                    (void 0 === u &&
                      i.each(o, function(e, n) {
                        if (!u) {
                          var i = r.getDatasetMeta(n);
                          r.isDatasetVisible(n) &&
                            t(i) &&
                            void 0 !== i.stack &&
                            (u = !0);
                        }
                      }),
                    n.stacked || u)
                  ) {
                    var d = {};
                    i.each(o, function(a, o) {
                      var s = r.getDatasetMeta(o),
                        l = [
                          s.type,
                          void 0 === n.stacked && void 0 === s.stack ? o : "",
                          s.stack
                        ].join(".");
                      r.isDatasetVisible(o) &&
                        t(s) &&
                        (void 0 === d[l] && (d[l] = []),
                        i.each(a.data, function(t, i) {
                          var a = d[l],
                            r = +e.getRightValue(t);
                          isNaN(r) ||
                            s.data[i].hidden ||
                            ((a[i] = a[i] || 0),
                            n.relativePoints ? (a[i] = 100) : (a[i] += r));
                        }));
                    }),
                      i.each(d, function(t) {
                        var n = i.min(t),
                          a = i.max(t);
                        (e.min = null === e.min ? n : Math.min(e.min, n)),
                          (e.max = null === e.max ? a : Math.max(e.max, a));
                      });
                  } else
                    i.each(o, function(n, a) {
                      var o = r.getDatasetMeta(a);
                      r.isDatasetVisible(a) &&
                        t(o) &&
                        i.each(n.data, function(t, n) {
                          var i = +e.getRightValue(t);
                          isNaN(i) ||
                            o.data[n].hidden ||
                            (null === e.min
                              ? (e.min = i)
                              : i < e.min && (e.min = i),
                            null === e.max
                              ? (e.max = i)
                              : i > e.max && (e.max = i),
                            0 !== i &&
                              (null === e.minNotZero || i < e.minNotZero) &&
                              (e.minNotZero = i));
                        });
                    });
                  (e.min = s(a.min, e.min)),
                    (e.max = s(a.max, e.max)),
                    e.min === e.max &&
                      (0 !== e.min && null !== e.min
                        ? ((e.min = Math.pow(
                            10,
                            Math.floor(i.log10(e.min)) - 1
                          )),
                          (e.max = Math.pow(
                            10,
                            Math.floor(i.log10(e.max)) + 1
                          )))
                        : ((e.min = 1), (e.max = 10)));
                },
                buildTicks: function() {
                  var t = this,
                    e = t.options.ticks,
                    n = { min: e.min, max: e.max },
                    r = (t.ticks = a.generators.logarithmic(n, t));
                  t.isHorizontal() || r.reverse(),
                    (t.max = i.max(r)),
                    (t.min = i.min(r)),
                    e.reverse
                      ? (r.reverse(), (t.start = t.max), (t.end = t.min))
                      : ((t.start = t.min), (t.end = t.max));
                },
                convertTicksToLabels: function() {
                  (this.tickValues = this.ticks.slice()),
                    t.Scale.prototype.convertTicksToLabels.call(this);
                },
                getLabelForIndex: function(t, e) {
                  return +this.getRightValue(
                    this.chart.data.datasets[e].data[t]
                  );
                },
                getPixelForTick: function(t) {
                  return this.getPixelForValue(this.tickValues[t]);
                },
                getPixelForValue: function(t) {
                  var e,
                    n,
                    a,
                    r = this,
                    o = r.start,
                    s = +r.getRightValue(t),
                    l = r.options.ticks;
                  return (
                    r.isHorizontal()
                      ? ((a = i.log10(r.end) - i.log10(o)),
                        0 === s
                          ? (n = r.left)
                          : ((e = r.width),
                            (n = r.left + e / a * (i.log10(s) - i.log10(o)))))
                      : ((e = r.height),
                        0 !== o || l.reverse
                          ? 0 === r.end && l.reverse
                            ? ((a = i.log10(r.start) - i.log10(r.minNotZero)),
                              (n =
                                s === r.end
                                  ? r.top
                                  : s === r.minNotZero
                                    ? r.top + 0.02 * e
                                    : r.top +
                                      0.02 * e +
                                      0.98 *
                                        e /
                                        a *
                                        (i.log10(s) - i.log10(r.minNotZero))))
                            : 0 === s
                              ? (n = l.reverse ? r.top : r.bottom)
                              : ((a = i.log10(r.end) - i.log10(o)),
                                (e = r.height),
                                (n =
                                  r.bottom - e / a * (i.log10(s) - i.log10(o))))
                          : ((a = i.log10(r.end) - i.log10(r.minNotZero)),
                            (n =
                              s === o
                                ? r.bottom
                                : s === r.minNotZero
                                  ? r.bottom - 0.02 * e
                                  : r.bottom -
                                    0.02 * e -
                                    0.98 *
                                      e /
                                      a *
                                      (i.log10(s) - i.log10(r.minNotZero))))),
                    n
                  );
                },
                getValueForPixel: function(t) {
                  var e,
                    n,
                    a = this,
                    r = i.log10(a.end) - i.log10(a.start);
                  return (
                    a.isHorizontal()
                      ? ((n = a.width),
                        (e = a.start * Math.pow(10, (t - a.left) * r / n)))
                      : ((n = a.height),
                        (e = Math.pow(10, (a.bottom - t) * r / n) / a.start)),
                    e
                  );
                }
              });
            t.scaleService.registerScaleType("logarithmic", n, e);
          };
        },
        { 34: 34, 45: 45 }
      ],
      56: [
        function(t, e, n) {
          "use strict";
          var i = t(25),
            a = t(45),
            r = t(34);
          e.exports = function(t) {
            function e(t) {
              var e = t.options;
              return e.angleLines.display || e.pointLabels.display
                ? t.chart.data.labels.length
                : 0;
            }
            function n(t) {
              var e = t.options.pointLabels,
                n = a.valueOrDefault(e.fontSize, p.defaultFontSize),
                i = a.valueOrDefault(e.fontStyle, p.defaultFontStyle),
                r = a.valueOrDefault(e.fontFamily, p.defaultFontFamily);
              return {
                size: n,
                style: i,
                family: r,
                font: a.fontString(n, i, r)
              };
            }
            function o(t, e, n) {
              return a.isArray(n)
                ? {
                    w: a.longestText(t, t.font, n),
                    h: n.length * e + 1.5 * (n.length - 1) * e
                  }
                : { w: t.measureText(n).width, h: e };
            }
            function s(t, e, n, i, a) {
              return t === i || t === a
                ? { start: e - n / 2, end: e + n / 2 }
                : t < i || t > a
                  ? { start: e - n - 5, end: e }
                  : { start: e, end: e + n + 5 };
            }
            function l(t) {
              var i,
                r,
                l,
                u = n(t),
                d = Math.min(t.height / 2, t.width / 2),
                c = { r: t.width, l: 0, t: t.height, b: 0 },
                h = {};
              (t.ctx.font = u.font), (t._pointLabelSizes = []);
              var f = e(t);
              for (i = 0; i < f; i++) {
                (l = t.getPointPosition(i, d)),
                  (r = o(t.ctx, u.size, t.pointLabels[i] || "")),
                  (t._pointLabelSizes[i] = r);
                var g = t.getIndexAngle(i),
                  m = a.toDegrees(g) % 360,
                  p = s(m, l.x, r.w, 0, 180),
                  v = s(m, l.y, r.h, 90, 270);
                p.start < c.l && ((c.l = p.start), (h.l = g)),
                  p.end > c.r && ((c.r = p.end), (h.r = g)),
                  v.start < c.t && ((c.t = v.start), (h.t = g)),
                  v.end > c.b && ((c.b = v.end), (h.b = g));
              }
              t.setReductions(d, c, h);
            }
            function u(t) {
              var e = Math.min(t.height / 2, t.width / 2);
              (t.drawingArea = Math.round(e)), t.setCenterPoint(0, 0, 0, 0);
            }
            function d(t) {
              return 0 === t || 180 === t
                ? "center"
                : t < 180
                  ? "left"
                  : "right";
            }
            function c(t, e, n, i) {
              if (a.isArray(e))
                for (var r = n.y, o = 1.5 * i, s = 0; s < e.length; ++s)
                  t.fillText(e[s], n.x, r), (r += o);
              else t.fillText(e, n.x, n.y);
            }
            function h(t, e, n) {
              90 === t || 270 === t
                ? (n.y -= e.h / 2)
                : (t > 270 || t < 90) && (n.y -= e.h);
            }
            function f(t) {
              var i = t.ctx,
                r = a.valueOrDefault,
                o = t.options,
                s = o.angleLines,
                l = o.pointLabels;
              (i.lineWidth = s.lineWidth), (i.strokeStyle = s.color);
              var u = t.getDistanceFromCenterForValue(
                  o.ticks.reverse ? t.min : t.max
                ),
                f = n(t);
              i.textBaseline = "top";
              for (var g = e(t) - 1; g >= 0; g--) {
                if (s.display) {
                  var m = t.getPointPosition(g, u);
                  i.beginPath(),
                    i.moveTo(t.xCenter, t.yCenter),
                    i.lineTo(m.x, m.y),
                    i.stroke(),
                    i.closePath();
                }
                if (l.display) {
                  var v = t.getPointPosition(g, u + 5),
                    y = r(l.fontColor, p.defaultFontColor);
                  (i.font = f.font), (i.fillStyle = y);
                  var b = t.getIndexAngle(g),
                    x = a.toDegrees(b);
                  (i.textAlign = d(x)),
                    h(x, t._pointLabelSizes[g], v),
                    c(i, t.pointLabels[g] || "", v, f.size);
                }
              }
            }
            function g(t, n, i, r) {
              var o = t.ctx;
              if (
                ((o.strokeStyle = a.valueAtIndexOrDefault(n.color, r - 1)),
                (o.lineWidth = a.valueAtIndexOrDefault(n.lineWidth, r - 1)),
                t.options.gridLines.circular)
              )
                o.beginPath(),
                  o.arc(t.xCenter, t.yCenter, i, 0, 2 * Math.PI),
                  o.closePath(),
                  o.stroke();
              else {
                var s = e(t);
                if (0 === s) return;
                o.beginPath();
                var l = t.getPointPosition(0, i);
                o.moveTo(l.x, l.y);
                for (var u = 1; u < s; u++)
                  (l = t.getPointPosition(u, i)), o.lineTo(l.x, l.y);
                o.closePath(), o.stroke();
              }
            }
            function m(t) {
              return a.isNumber(t) ? t : 0;
            }
            var p = i.global,
              v = {
                display: !0,
                animate: !0,
                position: "chartArea",
                angleLines: {
                  display: !0,
                  color: "rgba(0, 0, 0, 0.1)",
                  lineWidth: 1
                },
                gridLines: { circular: !1 },
                ticks: {
                  showLabelBackdrop: !0,
                  backdropColor: "rgba(255,255,255,0.75)",
                  backdropPaddingY: 2,
                  backdropPaddingX: 2,
                  callback: r.formatters.linear
                },
                pointLabels: {
                  display: !0,
                  fontSize: 10,
                  callback: function(t) {
                    return t;
                  }
                }
              },
              y = t.LinearScaleBase.extend({
                setDimensions: function() {
                  var t = this,
                    e = t.options,
                    n = e.ticks;
                  (t.width = t.maxWidth),
                    (t.height = t.maxHeight),
                    (t.xCenter = Math.round(t.width / 2)),
                    (t.yCenter = Math.round(t.height / 2));
                  var i = a.min([t.height, t.width]),
                    r = a.valueOrDefault(n.fontSize, p.defaultFontSize);
                  t.drawingArea = e.display
                    ? i / 2 - (r / 2 + n.backdropPaddingY)
                    : i / 2;
                },
                determineDataLimits: function() {
                  var t = this,
                    e = t.chart,
                    n = Number.POSITIVE_INFINITY,
                    i = Number.NEGATIVE_INFINITY;
                  a.each(e.data.datasets, function(r, o) {
                    if (e.isDatasetVisible(o)) {
                      var s = e.getDatasetMeta(o);
                      a.each(r.data, function(e, a) {
                        var r = +t.getRightValue(e);
                        isNaN(r) ||
                          s.data[a].hidden ||
                          ((n = Math.min(r, n)), (i = Math.max(r, i)));
                      });
                    }
                  }),
                    (t.min = n === Number.POSITIVE_INFINITY ? 0 : n),
                    (t.max = i === Number.NEGATIVE_INFINITY ? 0 : i),
                    t.handleTickRangeOptions();
                },
                getTickLimit: function() {
                  var t = this.options.ticks,
                    e = a.valueOrDefault(t.fontSize, p.defaultFontSize);
                  return Math.min(
                    t.maxTicksLimit ? t.maxTicksLimit : 11,
                    Math.ceil(this.drawingArea / (1.5 * e))
                  );
                },
                convertTicksToLabels: function() {
                  var e = this;
                  t.LinearScaleBase.prototype.convertTicksToLabels.call(e),
                    (e.pointLabels = e.chart.data.labels.map(
                      e.options.pointLabels.callback,
                      e
                    ));
                },
                getLabelForIndex: function(t, e) {
                  return +this.getRightValue(
                    this.chart.data.datasets[e].data[t]
                  );
                },
                fit: function() {
                  this.options.pointLabels.display ? l(this) : u(this);
                },
                setReductions: function(t, e, n) {
                  var i = this,
                    a = e.l / Math.sin(n.l),
                    r = Math.max(e.r - i.width, 0) / Math.sin(n.r),
                    o = -e.t / Math.cos(n.t),
                    s = -Math.max(e.b - i.height, 0) / Math.cos(n.b);
                  (a = m(a)),
                    (r = m(r)),
                    (o = m(o)),
                    (s = m(s)),
                    (i.drawingArea = Math.min(
                      Math.round(t - (a + r) / 2),
                      Math.round(t - (o + s) / 2)
                    )),
                    i.setCenterPoint(a, r, o, s);
                },
                setCenterPoint: function(t, e, n, i) {
                  var a = this,
                    r = a.width - e - a.drawingArea,
                    o = t + a.drawingArea,
                    s = n + a.drawingArea,
                    l = a.height - i - a.drawingArea;
                  (a.xCenter = Math.round((o + r) / 2 + a.left)),
                    (a.yCenter = Math.round((s + l) / 2 + a.top));
                },
                getIndexAngle: function(t) {
                  return (
                    t * (2 * Math.PI / e(this)) +
                    (this.chart.options && this.chart.options.startAngle
                      ? this.chart.options.startAngle
                      : 0) *
                      Math.PI *
                      2 /
                      360
                  );
                },
                getDistanceFromCenterForValue: function(t) {
                  var e = this;
                  if (null === t) return 0;
                  var n = e.drawingArea / (e.max - e.min);
                  return e.options.ticks.reverse
                    ? (e.max - t) * n
                    : (t - e.min) * n;
                },
                getPointPosition: function(t, e) {
                  var n = this,
                    i = n.getIndexAngle(t) - Math.PI / 2;
                  return {
                    x: Math.round(Math.cos(i) * e) + n.xCenter,
                    y: Math.round(Math.sin(i) * e) + n.yCenter
                  };
                },
                getPointPositionForValue: function(t, e) {
                  return this.getPointPosition(
                    t,
                    this.getDistanceFromCenterForValue(e)
                  );
                },
                getBasePosition: function() {
                  var t = this,
                    e = t.min,
                    n = t.max;
                  return t.getPointPositionForValue(
                    0,
                    t.beginAtZero
                      ? 0
                      : e < 0 && n < 0
                        ? n
                        : e > 0 && n > 0
                          ? e
                          : 0
                  );
                },
                draw: function() {
                  var t = this,
                    e = t.options,
                    n = e.gridLines,
                    i = e.ticks,
                    r = a.valueOrDefault;
                  if (e.display) {
                    var o = t.ctx,
                      s = this.getIndexAngle(0),
                      l = r(i.fontSize, p.defaultFontSize),
                      u = r(i.fontStyle, p.defaultFontStyle),
                      d = r(i.fontFamily, p.defaultFontFamily),
                      c = a.fontString(l, u, d);
                    a.each(t.ticks, function(e, a) {
                      if (a > 0 || i.reverse) {
                        var u = t.getDistanceFromCenterForValue(
                          t.ticksAsNumbers[a]
                        );
                        if (
                          (n.display && 0 !== a && g(t, n, u, a), i.display)
                        ) {
                          var d = r(i.fontColor, p.defaultFontColor);
                          if (
                            ((o.font = c),
                            o.save(),
                            o.translate(t.xCenter, t.yCenter),
                            o.rotate(s),
                            i.showLabelBackdrop)
                          ) {
                            var h = o.measureText(e).width;
                            (o.fillStyle = i.backdropColor),
                              o.fillRect(
                                -h / 2 - i.backdropPaddingX,
                                -u - l / 2 - i.backdropPaddingY,
                                h + 2 * i.backdropPaddingX,
                                l + 2 * i.backdropPaddingY
                              );
                          }
                          (o.textAlign = "center"),
                            (o.textBaseline = "middle"),
                            (o.fillStyle = d),
                            o.fillText(e, 0, -u),
                            o.restore();
                        }
                      }
                    }),
                      (e.angleLines.display || e.pointLabels.display) && f(t);
                  }
                }
              });
            t.scaleService.registerScaleType("radialLinear", y, v);
          };
        },
        { 25: 25, 34: 34, 45: 45 }
      ],
      57: [
        function(t, e, n) {
          "use strict";
          function i(t, e) {
            return t - e;
          }
          function a(t) {
            var e,
              n,
              i,
              a = {},
              r = [];
            for (e = 0, n = t.length; e < n; ++e)
              a[(i = t[e])] || ((a[i] = !0), r.push(i));
            return r;
          }
          function r(t, e, n, i) {
            if ("linear" === i || !t.length)
              return [{ time: e, pos: 0 }, { time: n, pos: 1 }];
            var a,
              r,
              o,
              s,
              l,
              u = [],
              d = [e];
            for (a = 0, r = t.length; a < r; ++a)
              (s = t[a]) > e && s < n && d.push(s);
            for (d.push(n), a = 0, r = d.length; a < r; ++a)
              (l = d[a + 1]),
                (o = d[a - 1]),
                (s = d[a]),
                (void 0 !== o &&
                  void 0 !== l &&
                  Math.round((l + o) / 2) === s) ||
                  u.push({ time: s, pos: a / (r - 1) });
            return u;
          }
          function o(t, e, n) {
            for (var i, a, r, o = 0, s = t.length - 1; o >= 0 && o <= s; ) {
              if (((i = (o + s) >> 1), (a = t[i - 1] || null), (r = t[i]), !a))
                return { lo: null, hi: r };
              if (r[e] < n) o = i + 1;
              else {
                if (!(a[e] > n)) return { lo: a, hi: r };
                s = i - 1;
              }
            }
            return { lo: r, hi: null };
          }
          function s(t, e, n, i) {
            var a = o(t, e, n),
              r = a.lo ? (a.hi ? a.lo : t[t.length - 2]) : t[0],
              s = a.lo ? (a.hi ? a.hi : t[t.length - 1]) : t[1],
              l = s[e] - r[e],
              u = l ? (n - r[e]) / l : 0,
              d = (s[i] - r[i]) * u;
            return r[i] + d;
          }
          function l(t, e) {
            var n = e.parser,
              i = e.parser || e.format;
            return "function" == typeof n
              ? n(t)
              : "string" == typeof t && "string" == typeof i
                ? v(t, i)
                : (t instanceof v || (t = v(t)),
                  t.isValid() ? t : "function" == typeof i ? i(t) : t);
          }
          function u(t, e) {
            if (b.isNullOrUndef(t)) return null;
            var n = e.options.time,
              i = l(e.getRightValue(t), n);
            return i.isValid()
              ? (n.round && i.startOf(n.round), i.valueOf())
              : null;
          }
          function d(t, e, n, i) {
            var a,
              r,
              o,
              s = e - t,
              l = k[n],
              u = l.size,
              d = l.steps;
            if (!d) return Math.ceil(s / ((i || 1) * u));
            for (
              a = 0, r = d.length;
              a < r && ((o = d[a]), !(Math.ceil(s / (u * o)) <= i));
              ++a
            );
            return o;
          }
          function c(t, e, n, i) {
            var a,
              r,
              o,
              s = w.length;
            for (a = w.indexOf(t); a < s - 1; ++a)
              if (
                ((r = k[w[a]]),
                (o = r.steps ? r.steps[r.steps.length - 1] : _),
                r.common && Math.ceil((n - e) / (o * r.size)) <= i)
              )
                return w[a];
            return w[s - 1];
          }
          function h(t, e, n, i) {
            var a,
              r,
              o = v.duration(v(i).diff(v(n)));
            for (a = w.length - 1; a >= w.indexOf(e); a--)
              if (((r = w[a]), k[r].common && o.as(r) >= t.length)) return r;
            return w[e ? w.indexOf(e) : 0];
          }
          function f(t) {
            for (var e = w.indexOf(t) + 1, n = w.length; e < n; ++e)
              if (k[w[e]].common) return w[e];
          }
          function g(t, e, n, i) {
            var a,
              r = i.time,
              o = r.unit || c(r.minUnit, t, e, n),
              s = f(o),
              l = b.valueOrDefault(r.stepSize, r.unitStepSize),
              u = "week" === o && r.isoWeekday,
              h = i.ticks.major.enabled,
              g = k[o],
              m = v(t),
              p = v(e),
              y = [];
            for (
              l || (l = d(t, e, o, n)),
                u && ((m = m.isoWeekday(u)), (p = p.isoWeekday(u))),
                m = m.startOf(u ? "day" : o),
                (p = p.startOf(u ? "day" : o)) < e && p.add(1, o),
                a = v(m),
                h &&
                  s &&
                  !u &&
                  !r.round &&
                  (a.startOf(s), a.add(~~((m - a) / (g.size * l)) * l, o));
              a < p;
              a.add(l, o)
            )
              y.push(+a);
            return y.push(+a), y;
          }
          function m(t, e, n, i, a) {
            var r,
              o,
              l = 0,
              u = 0;
            return (
              a.offset &&
                e.length &&
                (a.time.min ||
                  ((r = e.length > 1 ? e[1] : i),
                  (o = e[0]),
                  (l = (s(t, "time", r, "pos") - s(t, "time", o, "pos")) / 2)),
                a.time.max ||
                  ((r = e[e.length - 1]),
                  (o = e.length > 1 ? e[e.length - 2] : n),
                  (u = (s(t, "time", r, "pos") - s(t, "time", o, "pos")) / 2))),
              { left: l, right: u }
            );
          }
          function p(t, e) {
            var n,
              i,
              a,
              r,
              o = [];
            for (n = 0, i = t.length; n < i; ++n)
              (a = t[n]),
                (r = !!e && a === +v(a).startOf(e)),
                o.push({ value: a, major: r });
            return o;
          }
          var v = t(6);
          v = "function" == typeof v ? v : window.moment;
          var y = t(25),
            b = t(45),
            x = Number.MIN_SAFE_INTEGER || -9007199254740991,
            _ = Number.MAX_SAFE_INTEGER || 9007199254740991,
            k = {
              millisecond: {
                common: !0,
                size: 1,
                steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
              },
              second: { common: !0, size: 1e3, steps: [1, 2, 5, 10, 30] },
              minute: { common: !0, size: 6e4, steps: [1, 2, 5, 10, 30] },
              hour: { common: !0, size: 36e5, steps: [1, 2, 3, 6, 12] },
              day: { common: !0, size: 864e5, steps: [1, 2, 5] },
              week: { common: !1, size: 6048e5, steps: [1, 2, 3, 4] },
              month: { common: !0, size: 2628e6, steps: [1, 2, 3] },
              quarter: { common: !1, size: 7884e6, steps: [1, 2, 3, 4] },
              year: { common: !0, size: 3154e7 }
            },
            w = Object.keys(k);
          e.exports = function(t) {
            var e = t.Scale.extend({
              initialize: function() {
                if (!v)
                  throw new Error(
                    "Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com"
                  );
                this.mergeTicksOptions(),
                  t.Scale.prototype.initialize.call(this);
              },
              update: function() {
                var e = this,
                  n = e.options;
                return (
                  n.time &&
                    n.time.format &&
                    console.warn(
                      "options.time.format is deprecated and replaced by options.time.parser."
                    ),
                  t.Scale.prototype.update.apply(e, arguments)
                );
              },
              getRightValue: function(e) {
                return (
                  e && void 0 !== e.t && (e = e.t),
                  t.Scale.prototype.getRightValue.call(this, e)
                );
              },
              determineDataLimits: function() {
                var t,
                  e,
                  n,
                  r,
                  o,
                  s,
                  l = this,
                  d = l.chart,
                  c = l.options.time,
                  h = _,
                  f = x,
                  g = [],
                  m = [],
                  p = [];
                for (t = 0, n = d.data.labels.length; t < n; ++t)
                  p.push(u(d.data.labels[t], l));
                for (t = 0, n = (d.data.datasets || []).length; t < n; ++t)
                  if (d.isDatasetVisible(t))
                    if (((o = d.data.datasets[t].data), b.isObject(o[0])))
                      for (m[t] = [], e = 0, r = o.length; e < r; ++e)
                        (s = u(o[e], l)), g.push(s), (m[t][e] = s);
                    else g.push.apply(g, p), (m[t] = p.slice(0));
                  else m[t] = [];
                p.length &&
                  ((p = a(p).sort(i)),
                  (h = Math.min(h, p[0])),
                  (f = Math.max(f, p[p.length - 1]))),
                  g.length &&
                    ((g = a(g).sort(i)),
                    (h = Math.min(h, g[0])),
                    (f = Math.max(f, g[g.length - 1]))),
                  (h = u(c.min, l) || h),
                  (f = u(c.max, l) || f),
                  (h = h === _ ? +v().startOf("day") : h),
                  (f = f === x ? +v().endOf("day") + 1 : f),
                  (l.min = Math.min(h, f)),
                  (l.max = Math.max(h + 1, f)),
                  (l._horizontal = l.isHorizontal()),
                  (l._table = []),
                  (l._timestamps = { data: g, datasets: m, labels: p });
              },
              buildTicks: function() {
                var t,
                  e,
                  n,
                  i = this,
                  a = i.min,
                  o = i.max,
                  s = i.options,
                  l = s.time,
                  d = [],
                  c = [];
                switch (s.ticks.source) {
                  case "data":
                    d = i._timestamps.data;
                    break;
                  case "labels":
                    d = i._timestamps.labels;
                    break;
                  case "auto":
                  default:
                    d = g(a, o, i.getLabelCapacity(a), s);
                }
                for (
                  "ticks" === s.bounds &&
                    d.length &&
                    ((a = d[0]), (o = d[d.length - 1])),
                    a = u(l.min, i) || a,
                    o = u(l.max, i) || o,
                    t = 0,
                    e = d.length;
                  t < e;
                  ++t
                )
                  (n = d[t]) >= a && n <= o && c.push(n);
                return (
                  (i.min = a),
                  (i.max = o),
                  (i._unit = l.unit || h(c, l.minUnit, i.min, i.max)),
                  (i._majorUnit = f(i._unit)),
                  (i._table = r(i._timestamps.data, a, o, s.distribution)),
                  (i._offsets = m(i._table, c, a, o, s)),
                  p(c, i._majorUnit)
                );
              },
              getLabelForIndex: function(t, e) {
                var n = this,
                  i = n.chart.data,
                  a = n.options.time,
                  r = i.labels && t < i.labels.length ? i.labels[t] : "",
                  o = i.datasets[e].data[t];
                return (
                  b.isObject(o) && (r = n.getRightValue(o)),
                  a.tooltipFormat && (r = l(r, a).format(a.tooltipFormat)),
                  r
                );
              },
              tickFormatFunction: function(t, e, n, i) {
                var a = this,
                  r = a.options,
                  o = t.valueOf(),
                  s = r.time.displayFormats,
                  l = s[a._unit],
                  u = a._majorUnit,
                  d = s[u],
                  c = t
                    .clone()
                    .startOf(u)
                    .valueOf(),
                  h = r.ticks.major,
                  f = h.enabled && u && d && o === c,
                  g = t.format(i || (f ? d : l)),
                  m = f ? h : r.ticks.minor,
                  p = b.valueOrDefault(m.callback, m.userCallback);
                return p ? p(g, e, n) : g;
              },
              convertTicksToLabels: function(t) {
                var e,
                  n,
                  i = [];
                for (e = 0, n = t.length; e < n; ++e)
                  i.push(this.tickFormatFunction(v(t[e].value), e, t));
                return i;
              },
              getPixelForOffset: function(t) {
                var e = this,
                  n = e._horizontal ? e.width : e.height,
                  i = e._horizontal ? e.left : e.top,
                  a = s(e._table, "time", t, "pos");
                return (
                  i +
                  n *
                    (e._offsets.left + a) /
                    (e._offsets.left + 1 + e._offsets.right)
                );
              },
              getPixelForValue: function(t, e, n) {
                var i = this,
                  a = null;
                if (
                  (void 0 !== e &&
                    void 0 !== n &&
                    (a = i._timestamps.datasets[n][e]),
                  null === a && (a = u(t, i)),
                  null !== a)
                )
                  return i.getPixelForOffset(a);
              },
              getPixelForTick: function(t) {
                var e = this.getTicks();
                return t >= 0 && t < e.length
                  ? this.getPixelForOffset(e[t].value)
                  : null;
              },
              getValueForPixel: function(t) {
                var e = this,
                  n = e._horizontal ? e.width : e.height,
                  i = e._horizontal ? e.left : e.top,
                  a =
                    (n ? (t - i) / n : 0) *
                      (e._offsets.left + 1 + e._offsets.left) -
                    e._offsets.right,
                  r = s(e._table, "pos", a, "time");
                return v(r);
              },
              getLabelWidth: function(t) {
                var e = this,
                  n = e.options.ticks,
                  i = e.ctx.measureText(t).width,
                  a = b.toRadians(n.maxRotation),
                  r = Math.cos(a),
                  o = Math.sin(a);
                return (
                  i * r +
                  b.valueOrDefault(n.fontSize, y.global.defaultFontSize) * o
                );
              },
              getLabelCapacity: function(t) {
                var e = this,
                  n = e.options.time.displayFormats.millisecond,
                  i = e.tickFormatFunction(v(t), 0, [], n),
                  a = e.getLabelWidth(i),
                  r = e.isHorizontal() ? e.width : e.height;
                return Math.floor(r / a);
              }
            });
            t.scaleService.registerScaleType("time", e, {
              position: "bottom",
              distribution: "linear",
              bounds: "data",
              time: {
                parser: !1,
                format: !1,
                unit: !1,
                round: !1,
                displayFormat: !1,
                isoWeekday: !1,
                minUnit: "millisecond",
                displayFormats: {
                  millisecond: "h:mm:ss.SSS a",
                  second: "h:mm:ss a",
                  minute: "h:mm a",
                  hour: "hA",
                  day: "MMM D",
                  week: "ll",
                  month: "MMM YYYY",
                  quarter: "[Q]Q - YYYY",
                  year: "YYYY"
                }
              },
              ticks: { autoSkip: !1, source: "auto", major: { enabled: !1 } }
            });
          };
        },
        { 25: 25, 45: 45, 6: 6 }
      ]
    },
    {},
    [7]
  )(7);
});
