//JSONslider v.1.2.0
//http://www.github.com/dcdeiv/simple-sidebar
// GPLv2 http://www.gnu.org/licenses/gpl-2.0-standalone.html
!function (a) {
    a.fn.simpleSidebar = function (b) {
        var c, d, e, f = {
            settings: {
                opener: void 0,
                wrapper: void 0,
                ignore: void 0,
                data: "ssbplugin",
                animation: {
                    duration: 500,
                    easing: "swing"
                }
            },
            sidebar: {
                align: void 0,
                width: 350,
                gap: 64,
                closingLinks: "a",
                css: {
                    zIndex: 3e3
                }
            },
            mask: {
                css: {
                    backgroundColor: "black",
                    opacity: .5,
                    filter: "Alpha(opacity=50)"
                }
            },
            subWrapper: {
                css: {
                    position: "relative",
                    height: "100%",
                    overflow: "auto"
                }
            }
        }, g = a.extend(!0, f, b), h = this, i = a(g.settings.opener), j = a(g.settings.wrapper), k = a(g.settings.ignore), l = g.settings.data, m = g.settings.animation.duration, n = g.settings.animation.easing, o = g.sidebar.align, p = g.sidebar.width, q = g.sidebar.gap, r = g.sidebar.closingLinks, s = g.sidebar.css, t = g.mask.css, u = g.subWrapper.css, v = p + q, x = a("*").not(k).not(h).filter(function () {
            return "fixed" == a(this).css("position")
        }), y = a("*").not(k).filter(function () {
            return "absolute" == a(this).css("position")
        }), z = x.add(y).add(h).add(j).not(k);
        w = a(window).width(),
            MaskDef = {
                position: "fixed",
                top: -200,
                right: -200,
                left: -200,
                bottom: -200,
                zIndex: g.sidebar.css.zIndex - 1
            },
            maskStyle = a.extend({}, t, MaskDef),
            clicks = 0,
            overflowTrue = function () {
                a("body, html").css({
                    overflow: "hidden"
                }),
                    clicks = 0
            }
            ,
            overflowFalse = function () {
                a("body, html").css({
                    overflow: "auto"
                }),
                    clicks = 1
            }
            ,
            h.css(s).wrapInner("<div data-" + l + '="sub-wrapper"></div>');
        var B = h.children().filter(function () {
            return "sub-wrapper" === a(this).data(l)
        });
        B.css(u),
            a("body").append("<div data-" + l + '="mask"></div>');
        var C = a("body").children().filter(function () {
            return "mask" === a(this).data(l)
        });
        return C.css(maskStyle).hide(),
            c = v > w ? w - q : p,
            void 0 === o || "left" === o ? h.css({
                position: "fixed",
                top: 0,
                bottom: 0,
                left: 0,
                width: c,
                marginLeft: -c
            }) : h.css({
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                width: c,
                marginRight: -c
            }),
            i.click(function () {
                var b = h.width();
                d = void 0 === o || "left" === o ? {
                    marginLeft: "+=" + b,
                    marginRight: "-=" + b
                } : {
                    marginRight: "+=" + b,
                    marginLeft: "-=" + b
                },
                    z.each(function () {
                        a(this).animate(d, {
                            duration: m,
                            easing: n,
                            complete: overflowTrue
                        })
                    }),
                    C.fadeIn()
            }),
            C.click(function () {
                clicks++;
                var b = h.width()
                    , c = function (a) {
                        return 0 === a % 2 ? !0 : !1
                    };
                void 0 === o || "left" === o ? (d = {
                    marginLeft: "+=" + b,
                    marginRight: "-=" + b
                },
                    e = {
                        marginRight: "+=" + b,
                        marginLeft: "-=" + b
                    }) : (d = {
                        marginRight: "+=" + b,
                        marginLeft: "-=" + b
                    },
                        e = {
                            marginLeft: "+=" + b,
                            marginRight: "-=" + b
                        }),
                    !1 === c(clicks) ? (z.each(function () {
                        a(this).animate(e, {
                            duration: m,
                            easing: n,
                            complete: overflowFalse
                        })
                    }),
                        C.fadeOut()) : !0 === c(clicks) && (z.each(function () {
                            a(this).animate(d, {
                                duration: m,
                                easing: n,
                                complete: overflowTrue
                            })
                        }),
                            C.fadeIn())
            }),
            h.click(function () {
                var b = h.width();
                e = void 0 === o || "left" === o ? {
                    marginRight: "+=" + b,
                    marginLeft: "-=" + b
                } : {
                    marginLeft: "+=" + b,
                    marginRight: "-=" + b
                },
                    z.each(function () {
                        a(this).animate(e, {
                            duration: m,
                            easing: n,
                            complete: overflowFalse
                        }),
                            C.fadeOut()
                    })
            }),
            a(window).resize(function () {
                var b, c, d = a(this).width();
                b = v > d ? d - q : p,
                    h.css({
                        width: b
                    }),
                    void 0 === o || "left" === o ? (c = parseInt(h.css("margin-left")),
                        0 > c ? h.css({
                            marginLeft: -b
                        }) : z.not(h).css({
                            marginLeft: +b,
                            marginRight: -b
                        })) : (c = parseInt(h.css("margin-right")),
                            0 > c ? h.css({
                                marginRight: -b
                            }) : z.not(h).css({
                                marginLeft: -b,
                                marginRight: +b
                            }))
            }),
            this
    }
}(jQuery);
