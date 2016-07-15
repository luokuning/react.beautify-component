var hljs = require('highlight/highlight.pack')
export default function() {
    hljs.registerLanguage("css", function(e) {
        var c = "[a-zA-Z-][a-zA-Z0-9_-]*",
            t = {
                b: /[A-Z\_\.\-]+\s*:/,
                rB: !0,
                e: ";",
                eW: !0,
                c: [{
                    cN: "attribute",
                    b: /\S/,
                    e: ":",
                    eE: !0,
                    starts: {
                        eW: !0,
                        eE: !0,
                        c: [{
                            b: /[\w-]+\(/,
                            rB: !0,
                            c: [{
                                cN: "built_in",
                                b: /[\w-]+/
                            }, {
                                b: /\(/,
                                e: /\)/,
                                c: [e.ASM, e.QSM]
                            }]
                        }, e.CSSNM, e.QSM, e.ASM, e.CBCM, {
                            cN: "number",
                            b: "#[0-9A-Fa-f]+"
                        }, {
                            cN: "meta",
                            b: "!important"
                        }]
                    }
                }]
            };
        return {
            cI: !0,
            i: /[=\/|'\$]/,
            c: [e.CBCM, {
                cN: "selector-id",
                b: /#[A-Za-z0-9_-]+/
            }, {
                cN: "selector-class",
                b: /\.[A-Za-z0-9_-]+/
            }, {
                cN: "selector-attr",
                b: /\[/,
                e: /\]/,
                i: "$"
            }, {
                cN: "selector-pseudo",
                b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/
            }, {
                b: "@(font-face|page)",
                l: "[a-z-]+",
                k: "font-face page"
            }, {
                b: "@",
                e: "[{;]",
                i: /:/,
                c: [{
                    cN: "keyword",
                    b: /\w+/
                }, {
                    b: /\s/,
                    eW: !0,
                    eE: !0,
                    r: 0,
                    c: [e.ASM, e.QSM, e.CSSNM]
                }]
            }, {
                cN: "selector-tag",
                b: c,
                r: 0
            }, {
                b: "{",
                e: "}",
                i: /\S/,
                c: [e.CBCM, t]
            }]
        }
    });
    hljs.registerLanguage("javascript", function(e) {
        return {
            aliases: ["js", "jsx"],
            k: {
                keyword: "in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",
                literal: "true false null undefined NaN Infinity",
                built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"
            },
            c: [{
                cN: "meta",
                r: 10,
                b: /^\s*['"]use (strict|asm)['"]/
            }, {
                cN: "meta",
                b: /^#!/,
                e: /$/
            }, e.ASM, e.QSM, {
                cN: "string",
                b: "`",
                e: "`",
                c: [e.BE, {
                    cN: "subst",
                    b: "\\$\\{",
                    e: "\\}"
                }]
            }, e.CLCM, e.CBCM, {
                cN: "number",
                v: [{
                    b: "\\b(0[bB][01]+)"
                }, {
                    b: "\\b(0[oO][0-7]+)"
                }, {
                    b: e.CNR
                }],
                r: 0
            }, {
                b: "(" + e.RSR + "|\\b(case|return|throw)\\b)\\s*",
                k: "return throw case",
                c: [e.CLCM, e.CBCM, e.RM, {
                    b: /</,
                    e: /(\/\w+|\w+\/)>/,
                    sL: "xml",
                    c: [{
                        b: /<\w+\s*\/>/,
                        skip: !0
                    }, {
                        b: /<\w+/,
                        e: /(\/\w+|\w+\/)>/,
                        skip: !0,
                        c: ["self"]
                    }]
                }],
                r: 0
            }, {
                cN: "function",
                bK: "function",
                e: /\{/,
                eE: !0,
                c: [e.inherit(e.TM, {
                    b: /[A-Za-z$_][0-9A-Za-z$_]*/
                }), {
                    cN: "params",
                    b: /\(/,
                    e: /\)/,
                    eB: !0,
                    eE: !0,
                    c: [e.CLCM, e.CBCM]
                }],
                i: /\[|%/
            }, {
                b: /\$[(.]/
            }, e.METHOD_GUARD, {
                cN: "class",
                bK: "class",
                e: /[{;=]/,
                eE: !0,
                i: /[:"\[\]]/,
                c: [{
                    bK: "extends"
                }, e.UTM]
            }, {
                bK: "constructor",
                e: /\{/,
                eE: !0
            }],
            i: /#(?!!)/
        }
    });
    hljs.registerLanguage("json", function(e) {
        var i = {
                literal: "true false null"
            },
            n = [e.QSM, e.CNM],
            r = {
                e: ",",
                eW: !0,
                eE: !0,
                c: n,
                k: i
            },
            t = {
                b: "{",
                e: "}",
                c: [{
                    cN: "attr",
                    b: /"/,
                    e: /"/,
                    c: [e.BE],
                    i: "\\n"
                }, e.inherit(r, {
                    b: /:/
                })],
                i: "\\S"
            },
            c = {
                b: "\\[",
                e: "\\]",
                c: [e.inherit(r)],
                i: "\\S"
            };
        return n.splice(n.length, 0, t, c), {
            c: n,
            k: i,
            i: "\\S"
        }
    });
    hljs.registerLanguage("xml", function(s) {
        var e = "[A-Za-z0-9\\._:-]+",
            t = {
                eW: !0,
                i: /</,
                r: 0,
                c: [{
                    cN: "attr",
                    b: e,
                    r: 0
                }, {
                    b: /=\s*/,
                    r: 0,
                    c: [{
                        cN: "string",
                        endsParent: !0,
                        v: [{
                            b: /"/,
                            e: /"/
                        }, {
                            b: /'/,
                            e: /'/
                        }, {
                            b: /[^\s"'=<>`]+/
                        }]
                    }]
                }]
            };
        return {
            aliases: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist"],
            cI: !0,
            c: [{
                cN: "meta",
                b: "<!DOCTYPE",
                e: ">",
                r: 10,
                c: [{
                    b: "\\[",
                    e: "\\]"
                }]
            }, s.C("<!--", "-->", {
                r: 10
            }), {
                b: "<\\!\\[CDATA\\[",
                e: "\\]\\]>",
                r: 10
            }, {
                b: /<\?(php)?/,
                e: /\?>/,
                sL: "php",
                c: [{
                    b: "/\\*",
                    e: "\\*/",
                    skip: !0
                }]
            }, {
                cN: "tag",
                b: "<style(?=\\s|>|$)",
                e: ">",
                k: {
                    name: "style"
                },
                c: [t],
                starts: {
                    e: "</style>",
                    rE: !0,
                    sL: ["css", "xml"]
                }
            }, {
                cN: "tag",
                b: "<script(?=\\s|>|$)",
                e: ">",
                k: {
                    name: "script"
                },
                c: [t],
                starts: {
                    e: "</script>",
                    rE: !0,
                    sL: ["actionscript", "javascript", "handlebars", "xml"]
                }
            }, {
                cN: "meta",
                v: [{
                    b: /<\?xml/,
                    e: /\?>/,
                    r: 10
                }, {
                    b: /<\?\w+/,
                    e: /\?>/
                }]
            }, {
                cN: "tag",
                b: "</?",
                e: "/?>",
                c: [{
                    cN: "name",
                    b: /[^\/><\s]+/,
                    r: 0
                }, t]
            }]
        }
    });
}
