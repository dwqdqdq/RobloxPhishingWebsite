! function(n) {
    var r = {};

    function a(e) {
        if (r[e]) return r[e].exports;
        var t = r[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return n[e].call(t.exports, t, t.exports, a), t.l = !0, t.exports
    }
    a.m = n, a.c = r, a.d = function(e, t, n) {
        a.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, a.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, a.t = function(t, e) {
        if (1 & e && (t = a(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (a.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) a.d(n, r, function(e) {
                return t[e]
            }.bind(null, r));
        return n
    }, a.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return a.d(t, "a", t), t
    }, a.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, a.p = "", a(a.s = 27)
}([function(e, t) {
    e.exports = React
}, function(e, t) {
    e.exports = PropTypes
}, function(e, t) {
    e.exports = Roblox
}, , function(e, t) {
    e.exports = ReactStyleGuide
}, , function(e, t) {
    e.exports = CoreUtilities
}, , function(e, t) {
    e.exports = RobloxThumbnails
}, function(e, t) {
    e.exports = ReactUtilities
}, function(e, t, n) {
    var r;

    function c(e) {
        return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    /*!
      Copyright (c) 2017 Jed Watson.
      Licensed under the MIT License (MIT), see
      http://jedwatson.github.io/classnames
    */
    /*!
      Copyright (c) 2017 Jed Watson.
      Licensed under the MIT License (MIT), see
      http://jedwatson.github.io/classnames
    */
    ! function() {
        "use strict";
        var i = {}.hasOwnProperty;

        function l() {
            for (var e = [], t = 0; t < arguments.length; t++) {
                var n = arguments[t];
                if (n) {
                    var r = c(n);
                    if ("string" === r || "number" === r) e.push(n);
                    else if (Array.isArray(n) && n.length) {
                        var a = l.apply(null, n);
                        a && e.push(a)
                    } else if ("object" === r)
                        for (var o in n) i.call(n, o) && n[o] && e.push(o)
                }
            }
            return e.join(" ")
        }
        e.exports ? (l.default = l, e.exports = l) : "object" === c(n(13)) && n(13) ? void 0 === (r = function() {
            return l
        }.apply(t, [])) || (e.exports = r) : window.classNames = l
    }()
}, function(e, t) {
    e.exports = HeaderScripts
}, function(e, t) {
    e.exports = ReactDOM
}, function(t, e) {
    (function(e) {
        t.exports = e
    }).call(this, {})
}, , , , , , , , , , , , , function(e, t, n) {}, function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(6),
        g = n(0),
        y = n.n(g),
        a = n(12),
        o = n(1),
        i = n.n(o),
        l = n(9),
        h = n(4),
        c = {
            common: ["CommonUI.Controls"],
            feature: "Feature.ProfileBadges"
        },
        u = n(2),
        s = u.EnvironmentUrls.websiteUrl,
        m = "Heading.PlayerAssetsBadges",
        d = "Action.SeeAll",
        p = 6,
        v = function(e) {
            return "".concat(s, "/users/").concat(e, "/inventory/#!/badges")
        },
        S = "Heading.RobloxBadge",
        f = "Action.SeeMore",
        b = "Action.SeeLess",
        w = 6;

    function E(e) {
        var t = e.translate,
            n = e.headerLabel,
            r = e.isSeeAllShown,
            a = e.url,
            o = e.seeMoreLessCallback,
            i = e.seeMore,
            l = e.isSeeMoreShown,
            c = null;
        return o && (c = i ? b : f), y.a.createElement("div", {
            className: "container-header"
        }, y.a.createElement("h3", null, n), r && y.a.createElement(h.Link, {
            url: a,
            class: "btn-fixed-width btn-secondary-xs btn-more see-all-link-icon"
        }, t(d)), l && y.a.createElement(h.Link, {
            onClick: o,
            class: "btn-fixed-width btn-secondary-xs btn-more see-all-link"
        }, t(c)))
    }
    E.defaultProps = {
        isSeeAllShown: !1,
        url: "",
        seeMoreLessCallback: null,
        seeMore: "",
        isSeeMoreShown: !1
    }, E.propTypes = {
        translate: i.a.func.isRequired,
        headerLabel: i.a.string.isRequired,
        isSeeAllShown: i.a.bool,
        url: i.a.string,
        seeMoreLessCallback: i.a.func,
        seeMore: i.a.string,
        isSeeMoreShown: i.a.bool
    };
    var x = E,
        O = n(10),
        j = n.n(O),
        T = n(8),
        A = u.EnvironmentUrls.websiteUrl,
        M = {
            1: "icon-badge-administrator",
            2: "icon-badge-friendship",
            3: "icon-badge-combat-initiation",
            4: "icon-badge-warrior",
            5: "icon-badge-bloxxer",
            6: "icon-badge-homestead",
            7: "icon-badge-bricksmith",
            8: "icon-badge-inviter",
            11: "icon-badge-builders-club",
            12: "icon-badge-veteran",
            14: "icon-badge-ambassador",
            15: "icon-badge-turbo-builders-club",
            16: "icon-badge-outrageous-builders-club",
            17: "icon-badge-official-model-maker",
            18: "icon-badge-welcome-to-the-club",
            33: "icon-badge-official-model-maker",
            34: "icon-badge-welcome-to-the-club"
        },
        k = function(e, t) {
            var n = r.seoName.formatSeoName(t);
            return "".concat(A, "/badges/").concat(e, "/").concat(n)
        },
        L = function(e) {
            return "".concat(A, "/info/roblox-badges#Badge").concat(e)
        },
        I = function(e) {
            return M[e] || null
        },
        R = "playerBadge",
        C = "robloxBadge";

    function N(e) {
        var t = e.badgeData,
            n = e.badgeType,
            r = t.id,
            a = t.name,
            o = t.description,
            i = "",
            l = "",
            c = "";
        switch (n) {
            case R:
                i = k(r, a), l = y.a.createElement(T.Thumbnail2d, {
                    type: T.ThumbnailTypes.badgeIcon,
                    size: T.DefaultThumbnailSize,
                    targetId: r,
                    imgClassName: "asset-thumb-container",
                    format: T.ThumbnailFormat.png,
                    altName: o
                });
                break;
            case C:
            default:
                i = L(r), c = j()("border asset-thumb-container", [I(r)]), l = y.a.createElement("span", {
                    className: c,
                    title: a
                })
        }
        return y.a.createElement("li", {
            className: "list-item asset-item"
        }, y.a.createElement(h.Link, {
            url: i,
            title: o
        }, l, y.a.createElement("span", {
            className: "font-header-2 text-overflow item-name"
        }, a)))
    }
    N.propTypes = {
        badgeData: i.a.arrayOf(i.a.shape({
            id: i.a.number,
            name: i.a.string,
            description: i.a.string,
            iconImageId: i.a.number
        })).isRequired,
        badgeType: i.a.string.isRequired
    };
    var P = N;

    function U(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n = [],
                r = !0,
                a = !1,
                o = void 0;
            try {
                for (var i, l = e[Symbol.iterator](); !(r = (i = l.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
            } catch (e) {
                a = !0, o = e
            } finally {
                try {
                    r || null == l.return || l.return()
                } finally {
                    if (a) throw o
                }
            }
            return n
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function B(e) {
        var t = e.badgesData,
            n = e.badgeType,
            r = e.isSectionHeightAuto,
            a = j()("hlist badge-list", {
                "badge-list-more": r
            }),
            o = U(Object(g.useState)([]), 2),
            i = o[0],
            l = o[1];
        return Object(g.useEffect)(function() {
            return (null == t ? void 0 : t.length) && l(t),
                function() {}
        }, [t]), y.a.createElement("div", {
            className: "section-content remove-panel"
        }, y.a.createElement("ul", {
            className: a
        }, 0 < (null == i ? void 0 : i.length) && i.map(function(e) {
            return y.a.createElement(P, {
                badgeData: e,
                badgeType: n
            })
        })))
    }
    B.defaultProps = {
        isSectionHeightAuto: !1
    }, B.propTypes = {
        badgesData: i.a.arrayOf(i.a.shape({})).isRequired,
        badgeType: i.a.string.isRequired,
        isSectionHeightAuto: i.a.bool
    };
    var D = B,
        q = u.EnvironmentUrls.badgesApi,
        H = u.EnvironmentUrls.accountInformationApi,
        F = function(e) {
            return {
                url: "".concat(q, "/v1/users/").concat(document.getElementById("scriptProfileBadges").getAttribute("userid"), "/badges"),
                withCredentials: !0
            }
        },
        _ = function(e) {
            return {
                url: "".concat(H, "/v1/users/").concat(document.getElementById("scriptProfileBadges").getAttribute("userid"), "/roblox-badges"),
                withCredentials: !0
            }
        },
        z = {
            desc: "Desc"
        },
        G = function(e) {
            var t = {
                sortOrder: z.desc
            };
            return r.httpService.get(F(e), t).then(function(e) {
                return e.data
            })
        },
        J = function(e) {
            return r.httpService.get(_(e), {}).then(function(e) {
                return e.data
            })
        },
        K = n(11),
        Q = function() {
            var e, t, n = null === (e = window) || void 0 === e ? void 0 : null === (t = e.location) || void 0 === t ? void 0 : t.pathname,
                r = n ? n.split("/") : [];
            return (null == r ? void 0 : r.length) && 3 < r.length && !Number.isNaN(r[2]) ? r[2] : null === K.authenticatedUser || void 0 === K.authenticatedUser ? void 0 : K.authenticatedUser.id
        };

    function V() {
        return (V = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }

    function W(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n = [],
                r = !0,
                a = !1,
                o = void 0;
            try {
                for (var i, l = e[Symbol.iterator](); !(r = (i = l.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
            } catch (e) {
                a = !0, o = e
            } finally {
                try {
                    r || null == l.return || l.return()
                } finally {
                    if (a) throw o
                }
            }
            return n
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function X(e) {
        var t = e.translate,
            n = W(Object(g.useState)(!1), 2),
            r = n[0],
            a = n[1],
            o = W(Object(g.useState)([]), 2),
            i = o[0],
            l = o[1],
            c = W(Object(g.useState)(!1), 2),
            u = c[0],
            s = c[1],
            d = Q(),
            f = v(d),
            b = Object(g.useCallback)(function() {
                a(!0), G(d).then(function(e) {
                    if (null == e ? void 0 : e.data) {
                        var t = p;
                        s(!!e.nextPageCursor || e.data.length > t);
                        var n = e.data.slice(0, t);
                        l(n)
                    }
                }).catch(console.debug).finally(function() {
                    a(!1)
                })
            }, [d]);
        return Object(g.useEffect)(function() {
            return b(),
                function() {}
        }, [b]), y.a.createElement(y.a.Fragment, null, r ? y.a.createElement(h.Loading, null) : null, 0 < i.length && y.a.createElement(y.a.Fragment, null, y.a.createElement(x, V({
            headerLabel: t(m),
            isSeeAllShown: u,
            url: f
        }, e)), y.a.createElement(D, V({
            badgesData: i,
            isInitializedLoading: r,
            badgeType: R
        }, e))))
    }
    X.propTypes = {
        translate: i.a.func.isRequired
    };
    var Y = Object(l.withTranslations)(X, c);

    function Z() {
        return (Z = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }

    function $(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n = [],
                r = !0,
                a = !1,
                o = void 0;
            try {
                for (var i, l = e[Symbol.iterator](); !(r = (i = l.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
            } catch (e) {
                a = !0, o = e
            } finally {
                try {
                    r || null == l.return || l.return()
                } finally {
                    if (a) throw o
                }
            }
            return n
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function ee(e) {
        var t = e.translate,
            n = $(Object(g.useState)(!1), 2),
            r = n[0],
            a = n[1],
            o = $(Object(g.useState)([]), 2),
            i = o[0],
            l = o[1],
            c = $(Object(g.useState)(!1), 2),
            u = c[0],
            s = c[1],
            d = $(Object(g.useState)(!1), 2),
            f = d[0],
            b = d[1],
            m = Q(),
            p = Object(g.useCallback)(function() {
                a(!0), J(m).then(function(e) {
                    e && (b((null == e ? void 0 : e.length) > w), l(e))
                }).catch(console.debug).finally(function() {
                    a(!1)
                })
            }, [m]);
        return Object(g.useEffect)(function() {
            return p(),
                function() {}
        }, [p]), y.a.createElement(y.a.Fragment, null, r ? y.a.createElement(h.Loading, null) : null, 0 < i.length && y.a.createElement(y.a.Fragment, null, y.a.createElement(x, Z({
            headerLabel: t(S),
            seeMoreLessCallback: function() {
                s(function(e) {
                    return !e
                })
            },
            seeMore: u,
            isSeeMoreShown: f
        }, e)), y.a.createElement(D, Z({
            badgesData: i,
            isInitializedLoading: r,
            isSectionHeightAuto: u,
            badgeType: C
        }, e))))
    }
    ee.propTypes = {
        translate: i.a.func.isRequired
    };
    var te = Object(l.withTranslations)(ee, c),
        ne = (n(26), "roblox-badges-container"),
        re = "player-badges-container";
    Object(r.ready)(function() {
        document.getElementById(ne) && Object(a.render)(y.a.createElement(te, null), document.getElementById(ne)), document.getElementById(re) && Object(a.render)(y.a.createElement(Y, null), document.getElementById(re))
    })
}]);
//# sourceMappingURL=https://js.rbxcdn.com/03f6e7b47fd38c4f892a-profileBadges.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("ProfileBadges");