! function(t) {
    'use strict';

    function e(t, i) {
        return new e.prototype.init(t, i)
    }
    Function.prototype.bind || (Function.prototype.bind = function(t) {
        var e = this;
        return function() {
            return e.apply(t)
        }
    });
    var i = 0;
    t.fn.redactor = function(i) {
        var o = [],
            r = Array.prototype.slice.call(arguments, 1);
        return 'string' == typeof i ? this.each(function() {
            var e, s = t.data(this, 'redactor');
            if ('\-1' !== i.search(/\./) ? (e = i.split('\.'), 'undefined' != typeof s[e[0]] && (e = s[e[0]][e[1]])) : e = s[i], 'undefined' != typeof s && t.isFunction(e)) {
                var n = e.apply(s, r);
                void(0) !== n && n !== s && o.push(n)
            } else {
                t.error('No\ such\ method\ \"' + i + '\"\ for\ Redactor')
            }
        }) : this.each(function() {
            t.data(this, 'redactor', {}), t.data(this, 'redactor', e(this, i))
        }), 0 === o.length ? this : 1 === o.length ? o[0] : o
    }, t.Redactor = e, t.Redactor.VERSION = '1\.2\.5', t.Redactor.modules = ['air', 'autosave', 'block', 'buffer', 'build', 'button', 'caret', 'clean', 'code', 'core', 'detect', 'dropdown', 'events', 'file', 'focus', 'image', 'indent', 'inline', 'insert', 'keydown', 'keyup', 'lang', 'line', 'link', 'linkify', 'list', 'marker', 'modal', 'observe', 'offset', 'paragraphize', 'paste', 'placeholder', 'progress', 'selection', 'shortcuts', 'storage', 'toolbar', 'upload', 'uploads3', 'utils', 'browser'], t.Redactor.settings = {}, t.Redactor.opts = {
        animation: !1,
        lang: 'en',
        direction: 'ltr',
        focus: !1,
        focusEnd: !1,
        clickToEdit: !1,
        structure: !1,
        tabindex: !1,
        minHeight: !1,
        maxHeight: !1,
        maxWidth: !1,
        plugins: !1,
        callbacks: {},
        placeholder: !1,
        linkify: !0,
        enterKey: !0,
        pastePlainText: !1,
        pasteImages: !0,
        pasteLinks: !0,
        pasteBlockTags: ['pre', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'table', 'tbody', 'thead', 'tfoot', 'th', 'tr', 'td', 'ul', 'ol', 'li', 'blockquote', 'p', 'figure', 'figcaption'],
        pasteInlineTags: ['br', 'strong', 'ins', 'code', 'del', 'span', 'samp', 'kbd', 'sup', 'sub', 'mark', 'var', 'cite', 'small', 'b', 'u', 'em', 'i'],
        preClass: !1,
        preSpaces: 4,
        tabAsSpaces: !1,
        tabKey: !0,
        autosave: !1,
        autosaveName: !1,
        autosaveFields: !1,
        imageUpload: null,
        imageUploadParam: 'file',
        imageUploadFields: !1,
        imageUploadForms: !1,
        imageCaption: !0,
        dragImageUpload: !0,
        multipleImageUpload: !0,
        clipboardImageUpload: !0,
        fileUpload: null,
        fileUploadParam: 'file',
        fileUploadFields: !1,
        fileUploadForms: !1,
        dragFileUpload: !0,
        s3: !1,
        linkTooltip: !0,
        linkNofollow: !1,
        linkSize: 30,
        pasteLinkTarget: !1,
        videoContainerClass: 'video\-container',
        toolbar: !0,
        toolbarFixed: !0,
        toolbarFixedTarget: document,
        toolbarFixedTopOffset: 0,
        toolbarExternal: !1,
        air: !1,
        airWidth: !1,
        formatting: ['p', 'blockquote', 'pre', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
        formattingAdd: !1,
        buttons: ['format', 'bold', 'italic', 'deleted', 'lists', 'image', 'file', 'link'],
        buttonsHide: [],
        buttonsHideOnMobile: [],
        script: !0,
        removeComments: !0,
        replaceTags: {
            b: 'strong',
            i: 'em',
            strike: 'del'
        },
        shortcuts: {
            "ctrl+shift+m, meta+shift+m": {
                func: 'inline\.removeFormat'
            },
            "ctrl+b, meta+b": {
                func: 'inline\.format',
                params: ['bold']
            },
            "ctrl+i, meta+i": {
                func: 'inline\.format',
                params: ['italic']
            },
            "ctrl+h, meta+h": {
                func: 'inline\.format',
                params: ['superscript']
            },
            "ctrl+l, meta+l": {
                func: 'inline\.format',
                params: ['subscript']
            },
            "ctrl+k, meta+k": {
                func: 'link\.show'
            },
            "ctrl+shift+7": {
                func: 'list\.toggle',
                params: ['orderedlist']
            },
            "ctrl+shift+8": {
                func: 'list\.toggle',
                params: ['unorderedlist']
            }
        },
        shortcutsAdd: !1,
        activeButtons: ['deleted', 'italic', 'bold'],
        activeButtonsStates: {
            b: 'bold',
            strong: 'bold',
            i: 'italic',
            em: 'italic',
            del: 'deleted',
            strike: 'deleted'
        },
        langs: {
            en: {
                format: 'Format',
                image: 'Image',
                file: 'File',
                link: 'Link',
                bold: 'Bold',
                italic: 'Italic',
                deleted: 'Strikethrough',
                underline: 'Underline',
                "bold-abbr": 'B',
                "italic-abbr": 'I',
                "deleted-abbr": 'S',
                "underline-abbr": 'U',
                lists: 'Lists',
                "link-insert": 'Insert\ link',
                "link-edit": 'Edit\ link',
                "link-in-new-tab": 'Open\ link\ in\ new\ tab',
                unlink: 'Unlink',
                cancel: 'Cancel',
                close: 'Close',
                insert: 'Insert',
                save: 'Save',
                "delete": 'Delete',
                text: 'Text',
                edit: 'Edit',
                title: 'Title',
                paragraph: 'Normal\ text',
                quote: 'Quote',
                code: 'Code',
                heading1: 'Heading\ 1',
                heading2: 'Heading\ 2',
                heading3: 'Heading\ 3',
                heading4: 'Heading\ 4',
                heading5: 'Heading\ 5',
                heading6: 'Heading\ 6',
                filename: 'Name',
                optional: 'optional',
                unorderedlist: 'Unordered\ List',
                orderedlist: 'Ordered\ List',
                outdent: 'Outdent',
                indent: 'Indent',
                horizontalrule: 'Line',
                "upload-label": 'Drop\ file\ here\ or\ ',
                caption: 'Caption',
                bulletslist: 'Bullets',
                numberslist: 'Numbers',
                "accessibility-help-label": 'Rich\ text\ editor'
            }
        },
        type: 'textarea',
        inline: !1,
        buffer: [],
        rebuffer: [],
        inlineTags: ['a', 'span', 'strong', 'strike', 'b', 'u', 'em', 'i', 'code', 'del', 'ins', 'samp', 'kbd', 'sup', 'sub', 'mark', 'var', 'cite', 'small'],
        blockTags: ['pre', 'ul', 'ol', 'li', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'dl', 'dt', 'dd', 'div', 'td', 'blockquote', 'output', 'figcaption', 'figure', 'address', 'section', 'header', 'footer', 'aside', 'article', 'iframe'],
        paragraphize: !0,
        paragraphizeBlocks: ['table', 'div', 'pre', 'form', 'ul', 'ol', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'dl', 'blockquote', 'figcaption', 'address', 'section', 'header', 'footer', 'aside', 'article', 'object', 'style', 'script', 'iframe', 'select', 'input', 'textarea', 'button', 'option', 'map', 'area', 'math', 'hr', 'fieldset', 'legend', 'hgroup', 'nav', 'figure', 'details', 'menu', 'summary', 'p'],
        emptyHtml: '\<p\>\&\#x200b\;\<\/p\>',
        invisibleSpace: '\&\#x200b\;',
        imageTypes: ['image\/png', 'image\/jpeg', 'image\/gif'],
        userAgent: navigator.userAgent.toLowerCase(),
        observe: {
            dropdowns: []
        },
        regexps: {
            linkyoutube: /https?:\/\/(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube\.com\S*[^\w\-\s])([\w\-]{11})(?=[^\w\-]|$)(?![?=&+%\w.\-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/gi,
            linkvimeo: /https?:\/\/(www\.)?vimeo.com\/(\d+)($|\/)/,
            linkimage: /((https?|www)[^\s]+\.)(jpe?g|png|gif)(\?[^\s-]+)?/gi,
            url: /(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/gi
        }
    }, e.fn = t.Redactor.prototype = {
        keyCode: {
            BACKSPACE: 8,
            DELETE: 46,
            UP: 38,
            DOWN: 40,
            ENTER: 13,
            SPACE: 32,
            ESC: 27,
            TAB: 9,
            CTRL: 17,
            META: 91,
            SHIFT: 16,
            ALT: 18,
            RIGHT: 39,
            LEFT: 37,
            LEFT_WIN: 91
        },
        init: function(e, o) {
            return this['\$element'] = t(e), this.uuid = i++, this.loadOptions(o), this.loadModules(), this.opts.clickToEdit && !this['\$element'].hasClass('redactor\-click\-to\-edit') ? this.loadToEdit(o) : (this['\$element'].hasClass('redactor\-click\-to\-edit') && this['\$element'].removeClass('redactor\-click\-to\-edit'), this.reIsBlock = new RegExp('\^\(' + this.opts.blockTags.join('\|').toUpperCase() + '\)\$', 'i'), this.reIsInline = new RegExp('\^\(' + this.opts.inlineTags.join('\|').toUpperCase() + '\)\$', 'i'), this.opts.dragImageUpload = null === this.opts.imageUpload ? !1 : this.opts.dragImageUpload, this.opts.dragFileUpload = null === this.opts.fileUpload ? !1 : this.opts.dragFileUpload, this.formatting = {}, this.lang.load(), t.extend(this.opts.shortcuts, this.opts.shortcutsAdd), this['\$editor'] = this['\$element'], this.detectType(), this.core.callback('start'), this.core.callback('startToEdit'), this.start = !0, void(this).build.start())
        },
        detectType: function() {
            this.build.isInline() || this.opts.inline ? this.opts.type = 'inline' : this.build.isTag('DIV') ? this.opts.type = 'div' : this.build.isTag('PRE') && (this.opts.type = 'pre')
        },
        loadToEdit: function(e) {
            this['\$element'].on('click\.redactor\-click\-to\-edit', t.proxy(function() {
                this.initToEdit(e)
            }, this)), this['\$element'].addClass('redactor\-click\-to\-edit')
        },
        initToEdit: function(e) {
            t.extend(e.callbacks, {
                startToEdit: function() {
                    this.insert.node(this.marker.get(), !1)
                },
                initToEdit: function() {
                    this.selection.restore(), this.clickToCancelStorage = this.code.get(), t(this.opts.clickToCancel).off('\.redactor\-click\-to\-edit'), t(this.opts.clickToCancel).show().on('click\.redactor\-click\-to\-edit', t.proxy(function(i) {
                        i.preventDefault(), this.core.destroy(), this.events.syncFire = !1, this['\$element'].html(this.clickToCancelStorage), this.core.callback('cancel', this.clickToCancelStorage), this.events.syncFire = !0, this.clickToCancelStorage = '', t(this.opts.clickToCancel).hide(), t(this.opts.clickToSave).hide(), this['\$element'].on('click\.redactor\-click\-to\-edit', t.proxy(function() {
                            this.initToEdit(e)
                        }, this)), this['\$element'].addClass('redactor\-click\-to\-edit')
                    }, this)), t(this.opts.clickToSave).off('\.redactor\-click\-to\-edit'), t(this.opts.clickToSave).show().on('click\.redactor\-click\-to\-edit', t.proxy(function(i) {
                        i.preventDefault(), this.core.destroy(), this.core.callback('save', this.code.get()), t(this.opts.clickToCancel).hide(), t(this.opts.clickToSave).hide(), this['\$element'].on('click\.redactor\-click\-to\-edit', t.proxy(function() {
                            this.initToEdit(e)
                        }, this)), this['\$element'].addClass('redactor\-click\-to\-edit')
                    }, this))
                }
            }), this['\$element'].redactor(e), this['\$element'].off('\.redactor\-click\-to\-edit')
        },
        loadOptions: function(e) {
            var i = {};
            'undefined' != typeof t.Redactor.settings.namespace ? this['\$element'].hasClass(t.Redactor.settings.namespace) && (i = t.Redactor.settings) : i = t.Redactor.settings, this.opts = t.extend({}, t.extend(!0, {}, t.Redactor.opts), t.extend(!0, {}, i), this['\$element'].data(), e)
        },
        getModuleMethods: function(t) {
            return Object.getOwnPropertyNames(t).filter(function(e) {
                return 'function' == typeof t[e]
            })
        },
        loadModules: function() {
            for (var e = t.Redactor.modules.length, i = 0; e > i; i++) {
                this.bindModuleMethods(t.Redactor.modules[i])
            }
        },
        bindModuleMethods: function(t) {
            if ('undefined' != typeof this[t]) {
                this[t] = this[t]();
                for (var e = this.getModuleMethods(this[t]), i = e.length, o = 0; i > o; o++) {
                    this[t][e[o]] = this[t][e[o]].bind(this)
                }
            }
        },
        air: function() {
            return {
                enabled: !1,
                collapsed: function() {
                    this.opts.air && this.selection.get().collapseToStart()
                },
                collapsedEnd: function() {
                    this.opts.air && this.selection.get().collapseToEnd()
                },
                build: function() {
                    this.detect.isMobile() || (this.button.hideButtons(), this.button.hideButtonsOnMobile(), 0 !== this.opts.buttons.length && (this['\$air'] = this.air.createContainer(), this.opts.airWidth !== !1 && this['\$air'].css('width', this.opts.airWidth), this.air.append(), this.button['\$toolbar'] = this['\$air'], this.button.setFormatting(), this.button.load(this.$air), this.core.editor().on('mouseup\.redactor', this, t.proxy(function(t) {
                        '' !== this.selection.text() && this.air.show(t)
                    }, this))))
                },
                append: function() {
                    this['\$air'].appendTo('body')
                },
                createContainer: function() {
                    return t('\<ul\>').addClass('redactor\-air').attr({
                        id: 'redactor\-air\-' + this.uuid,
                        role: 'toolbar'
                    }).hide()
                },
                show: function(e) {
                    this.marker.remove(), this.selection.save(), this.selection.restore(!1), t('\.redactor\-air').hide();
                    var i = 0,
                        o = this['\$air'].innerWidth();
                    t(window).width() < e.clientX + o && (i = 200), this['\$air'].css({
                        left: e.clientX - i + 'px',
                        top: e.clientY + 10 + t(document).scrollTop() + 'px'
                    }).show(), this.air.enabled = !0, this.air.bindHide()
                },
                bindHide: function() {
                    t(document).on('mousedown\.redactor\-air\.' + this.uuid, t.proxy(function(e) {
                        var i = t(e.target).closest('\.redactor\-dropdown').length;
                        if (0 === t(e.target).closest(this.$air).length && 0 === i) {
                            var o = this.air.hide(e);
                            o !== !1 && this.marker.remove()
                        }
                    }, this)).on('keydown\.redactor\-air\.' + this.uuid, t.proxy(function(e) {
                        var i = e.which;
                        if ((this.utils.isRedactorParent(e.target) || t(e.target).hasClass('redactor\-in')) && 0 === t(e.target).closest('\#redactor\-modal').length) {
                            if (i === this.keyCode.ESC) {
                                this.selection.get().collapseToStart(), this.marker.remove()
                            } else {
                                if (i === this.keyCode.BACKSPACE || i === this.keyCode.DELETE) {
                                    var o = this.selection.get(),
                                        r = this.selection.range(o);
                                    r.deleteContents(), this.marker.remove()
                                } else {
                                    i === this.keyCode.ENTER && (this.selection.get().collapseToEnd(), this.marker.remove())
                                }
                            };
                            this.air.enabled ? this.air.hide(e) : (this.selection.get().collapseToStart(), this.marker.remove())
                        }
                    }, this))
                },
                hide: function(e) {
                    var i = e.ctrlKey || e.metaKey || e.shiftKey && e.altKey;
                    return i ? !1 : (this.button.setInactiveAll(), this['\$air'].fadeOut(100), this.air.enabled = !1, void(t)(document).off('mousedown\.redactor\-air\.' + this.uuid))
                }
            }
        },
        autosave: function() {
            return {
                enabled: !1,
                html: !1,
                init: function() {
                    this.opts.autosave && (this.autosave.enabled = !0, this.autosave.name = this.opts.autosaveName ? this.opts.autosaveName : this['\$textarea'].attr('name'))
                },
                is: function() {
                    return this.autosave.enabled
                },
                send: function() {
                    if (this.opts.autosave && (this.autosave.source = this.code.get(), this.autosave.html !== this.autosave.source)) {
                        var e = {};
                        e.name = this.autosave.name, e[this.autosave.name] = this.autosave.source, e = this.autosave.getHiddenFields(e);
                        var i = t.ajax({
                            url: this.opts.autosave,
                            type: 'post',
                            data: e
                        });
                        i.done(this.autosave.success)
                    }
                },
                getHiddenFields: function(e) {
                    return this.opts.autosaveFields === !1 || 'object' != typeof this.opts.autosaveFields ? e : (t.each(this.opts.autosaveFields, t.proxy(function(i, o) {
                        null !== o && 0 === o.toString().indexOf('\#') && (o = t(o).val()), e[i] = o
                    }, this)), e)
                },
                success: function(e) {
                    var i;
                    try {
                        i = t.parseJSON(e)
                    } catch (o) {
                        i = e
                    };
                    var r = 'undefined' == typeof i.error ? 'autosave' : 'autosaveError';
                    this.core.callback(r, this.autosave.name, i), this.autosave.html = this.autosave.source
                },
                disable: function() {
                    this.autosave.enabled = !1, clearInterval(this.autosaveTimeout)
                }
            }
        },
        block: function() {
            return {
                format: function(e, i, o, r) {
                    return e = 'quote' === e ? 'blockquote' : e, this.block.tags = ['p', 'blockquote', 'pre', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div', 'figure'], -1 !== t.inArray(e, this.block.tags) ? ('p' === e && 'undefined' == typeof i && (i = 'class'), this.placeholder.hide(), this.buffer.set(), this.utils.isCollapsed() ? this.block.formatCollapsed(e, i, o, r) : this.block.formatUncollapsed(e, i, o, r)) : void(0)
                },
                formatCollapsed: function(e, i, o, r) {
                    this.selection.save();
                    var s = this.selection.block(),
                        n = s.tagName.toLowerCase();
                    if (-1 === t.inArray(n, this.block.tags)) {
                        return void(this).selection.restore()
                    };
                    n === e && (e = 'p');
                    var a = this.utils.replaceToTag(s, e);
                    if ('object' == typeof i) {
                        r = o;
                        for (var l in i) {
                            a = this.block.setAttr(a, l, i[l], r)
                        }
                    } else {
                        a = this.block.setAttr(a, i, o, r)
                    };
                    return 'pre' === e && 1 === a.length && t(a).html(t.trim(t(a).html())), this.selection.restore(), this.block.removeInlineTags(a), a
                },
                formatUncollapsed: function(e, i, o, r) {
                    this.selection.save();
                    for (var s = [], n = this.selection.blocks(), a = n.length, l = 0; a > l; l++) {
                        var c = n[l].tagName.toLowerCase();
                        if (-1 !== t.inArray(c, this.block.tags)) {
                            var d = this.utils.replaceToTag(n[l], e);
                            if ('object' == typeof i) {
                                r = o;
                                for (var h in i) {
                                    d = this.block.setAttr(d, h, i[h], r)
                                }
                            } else {
                                d = this.block.setAttr(d, i, o, r)
                            };
                            s.push(d), this.block.removeInlineTags(d)
                        }
                    };
                    if (this.selection.restore(), 'pre' === e && 0 !== s.length) {
                        var u = s[0];
                        t.each(s, function(e, i) {
                            0 !== e && (t(u).append('\
' + t.trim(i.html())), t(i).remove())
                        }), s = [], s.push(u)
                    };
                    return s
                },
                removeInlineTags: function(e) {
                    e = e[0] || e;
                    var i = this.opts.inlineTags,
                        o = ['PRE', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'];
                    if (-1 !== t.inArray(e.tagName, o)) {
                        if ('PRE' !== e.tagName) {
                            var r = i.indexOf('a');
                            i.splice(r, 1)
                        };
                        t(e).find(i.join('\,')).not('\.redactor\-selection\-marker').contents().unwrap()
                    }
                },
                setAttr: function(t, e, i, o) {
                    if ('undefined' == typeof e) {
                        return t
                    };
                    var r = 'undefined' == typeof o ? 'replace' : o;
                    return t = 'class' === e ? this.block[r + 'Class'](i, t) : 'remove' === r ? this.block[r + 'Attr'](e, t) : 'removeAll' === r ? this.block[r + 'Attr'](e, t) : this.block[r + 'Attr'](e, i, t)
                },
                getBlocks: function(t) {
                    return 'undefined' == typeof t ? this.selection.blocks() : t
                },
                replaceClass: function(e, i) {
                    return t(this.block.getBlocks(i)).removeAttr('class').addClass(e)[0]
                },
                toggleClass: function(e, i) {
                    return t(this.block.getBlocks(i)).toggleClass(e)[0]
                },
                addClass: function(e, i) {
                    return t(this.block.getBlocks(i)).addClass(e)[0]
                },
                removeClass: function(e, i) {
                    return t(this.block.getBlocks(i)).removeClass(e)[0]
                },
                removeAllClass: function(e) {
                    return t(this.block.getBlocks(e)).removeAttr('class')[0]
                },
                replaceAttr: function(e, i, o) {
                    return o = this.block.removeAttr(e, o), t(o).attr(e, i)[0]
                },
                toggleAttr: function(e, i, o) {
                    o = this.block.getBlocks(o);
                    var r = this,
                        s = [];
                    return t.each(o, function(o, n) {
                        var a = t(n);
                        a.attr(e) ? s.push(r.block.removeAttr(e, n)) : s.push(r.block.addAttr(e, i, n))
                    }), s
                },
                addAttr: function(e, i, o) {
                    return t(this.block.getBlocks(o)).attr(e, i)[0]
                },
                removeAttr: function(e, i) {
                    return t(this.block.getBlocks(i)).removeAttr(e)[0]
                },
                removeAllAttr: function(e) {
                    e = this.block.getBlocks(e);
                    var i = [];
                    return t.each(e, function(e, o) {
                        'undefined' == typeof o.attributes && i.push(o);
                        for (var r = t(o), s = o.attributes.length, n = 0; s > n; n++) {
                            r.removeAttr(o.attributes[n].name)
                        };
                        i.push(r[0])
                    }), i
                }
            }
        },
        buffer: function() {
            return {
                set: function(t) {
                    'undefined' == typeof t && this.buffer.clear(), 'undefined' == typeof t || 'undo' === t ? this.buffer.setUndo() : this.buffer.setRedo()
                },
                setUndo: function() {
                    this.selection.save();
                    var t = this.opts.buffer[this.opts.buffer.length - 1],
                        e = this.core.editor().html();
                    t !== e && this.opts.buffer.push(e), this.selection.restore()
                },
                setRedo: function() {
                    this.selection.save(), this.opts.rebuffer.push(this.core.editor().html()), this.selection.restore()
                },
                getUndo: function() {
                    this.core.editor().html(this.opts.buffer.pop())
                },
                getRedo: function() {
                    this.core.editor().html(this.opts.rebuffer.pop())
                },
                add: function() {
                    this.opts.buffer.push(this.core.editor().html())
                },
                undo: function() {
                    0 !== this.opts.buffer.length && (this.buffer.set('redo'), this.buffer.getUndo(), this.selection.restore())
                },
                redo: function() {
                    0 !== this.opts.rebuffer.length && (this.buffer.set('undo'), this.buffer.getRedo(), this.selection.restore())
                },
                clear: function() {
                    this.opts.rebuffer = []
                }
            }
        },
        build: function() {
            return {
                start: function() {
                    if ('inline' === this.opts.type) {
                        this.opts.type = 'inline'
                    } else {
                        if ('div' === this.opts.type) {
                            var e = t.trim(this['\$editor'].html());
                            '' === e && this['\$editor'].html(this.opts.emptyHtml)
                        } else {
                            'textarea' === this.opts.type && this.build.startTextarea()
                        }
                    };
                    this.build.setIn(), this.build.setId(), this.build.enableEditor(), this.build.setOptions(), this.build.callEditor()
                },
                createContainerBox: function() {
                    this['\$box'] = t('\<div\ class\=\"redactor\-box\"\ role\=\"application\"\ \/\>')
                },
                setIn: function() {
                    this.core.editor().addClass('redactor\-in')
                },
                setId: function() {
                    var t = 'textarea' === this.opts.type ? 'redactor\-uuid\-' + this.uuid : this['\$element'].attr('id');
                    this.core.editor().attr('id', 'undefined' == typeof t ? 'redactor\-uuid\-' + this.uuid : t)
                },
                getName: function() {
                    var t = this['\$element'].attr('name');
                    return 'undefined' == typeof t ? 'content\-' + this.uuid : t
                },
                loadFromTextarea: function() {
                    this['\$editor'] = t('\<div\ \/\>'), this['\$textarea'] = this['\$element'], this['\$element'].attr('name', this.build.getName()), this['\$box'].insertAfter(this.$element).append(this.$editor).append(this.$element), this['\$editor'].addClass('redactor\-editor'), this['\$element'].hide(), this['\$box'].prepend('\<span\ class\=\"redactor\-voice\-label\"\ id\=\"redactor\-voice\-' + this.uuid + '\"\ aria\-hidden\=\"false\"\>' + this.lang.get('accessibility\-help\-label') + '\<\/span\>'), this['\$editor'].attr({
                        "aria-labelledby": 'redactor\-voice\-' + this.uuid,
                        role: 'presentation'
                    })
                },
                startTextarea: function() {
                    this.build.createContainerBox(), this.build.loadFromTextarea(), this.code.start(this.core.textarea().val()), this.core.textarea().val(this.clean.onSync(this['\$editor'].html()))
                },
                isTag: function(t) {
                    return this['\$element'][0].tagName === t
                },
                isInline: function() {
                    return !this.build.isTag('TEXTAREA') && !this.build.isTag('DIV') && !this.build.isTag('PRE')
                },
                enableEditor: function() {
                    this.core.editor().attr({
                        contenteditable: !0
                    })
                },
                setOptions: function() {
                    'inline' === this.opts.type && (this.opts.enterKey = !1), 'inline' !== this.opts.type && 'pre' !== this.opts.type || (this.opts.toolbarMobile = !1, this.opts.toolbar = !1, this.opts.air = !1, this.opts.linkify = !1), this.opts.structure && this.core.editor().addClass('redactor\-structure'), 'textarea' === this.opts.type && (this.core.box().attr('dir', this.opts.direction), this.core.editor().attr('dir', this.opts.direction), this.opts.tabindex && this.core.editor().attr('tabindex', this.opts.tabindex), this.opts.minHeight ? this.core.editor().css('min\-height', this.opts.minHeight) : this.core.editor().css('min\-height', '40px'), this.opts.maxHeight && this.core.editor().css('max\-height', this.opts.maxHeight), this.opts.maxWidth && this.core.editor().css({
                        "max-width": this.opts.maxWidth,
                        margin: 'auto'
                    }))
                },
                callEditor: function() {
                    this.build.disableBrowsersEditing(), this.events.init(), this.build.setHelpers(), (this.opts.toolbar || this.opts.air) && (this.toolbarsButtons = this.button.init()), this.opts.air ? this.air.build() : this.opts.toolbar && this.toolbar.build(), this.detect.isMobile() && this.opts.toolbarMobile && this.opts.air && (this.opts.toolbar = !0, this.toolbar.build()), (this.opts.air || this.opts.toolbar) && (this.core.editor().on('mouseup\.redactor\-observe\.' + this.uuid + '\ keyup\.redactor\-observe\.' + this.uuid + '\ focus\.redactor\-observe\.' + this.uuid + '\ touchstart\.redactor\-observe\.' + this.uuid, t.proxy(this.observe.toolbar, this)), this.core.element().on('blur\.callback\.redactor', t.proxy(function() {
                        this.button.setInactiveAll()
                    }, this))), this.modal.templates(), this.build.plugins(), this.autosave.init(), this.code.html = this.code.cleaned(this.core.editor().html()), this.core.callback('init'), this.core.callback('initToEdit'), this.storage.observe(), this.start = !1
                },
                setHelpers: function() {
                    this.opts.linkify && this.linkify.format(), this.placeholder.init(), this.opts.focus ? setTimeout(this.focus.start, 100) : this.opts.focusEnd && setTimeout(this.focus.end, 100)
                },
                disableBrowsersEditing: function() {
                    try {
                        document.execCommand('enableObjectResizing', !1, !1), document.execCommand('enableInlineTableEditing', !1, !1), document.execCommand('AutoUrlDetect', !1, !1)
                    } catch (t) {}
                },
                plugins: function() {
                    this.opts.plugins && t.each(this.opts.plugins, t.proxy(function(i, o) {
                        var r = 'undefined' != typeof RedactorPlugins && 'undefined' != typeof RedactorPlugins[o] ? RedactorPlugins : e.fn;
                        if (t.isFunction(r[o])) {
                            this[o] = r[o]();
                            for (var s = this.getModuleMethods(this[o]), n = s.length, a = 0; n > a; a++) {
                                this[o][s[a]] = this[o][s[a]].bind(this)
                            };
                            if ('undefined' != typeof this[o].langs) {
                                var l = {};
                                'undefined' != typeof this[o].langs[this.opts.lang] ? l = this[o].langs[this.opts.lang] : 'undefined' == typeof this[o].langs[this.opts.lang] && 'undefined' != typeof this[o].langs.en && (l = this[o].langs.en);
                                var c = this;
                                t.each(l, function(t, e) {
                                    'undefined' == typeof c.opts.curLang[t] && (c.opts.curLang[t] = e)
                                })
                            };
                            t.isFunction(this[o].init) && this[o].init()
                        }
                    }, this))
                }
            }
        },
        button: function() {
            return {
                toolbar: function() {
                    return 'undefined' != typeof this.button['\$toolbar'] && this.button['\$toolbar'] ? this.button['\$toolbar'] : this['\$toolbar']
                },
                init: function() {
                    return {
                        format: {
                            title: this.lang.get('format'),
                            dropdown: {
                                p: {
                                    title: this.lang.get('paragraph'),
                                    func: 'block\.format'
                                },
                                blockquote: {
                                    title: this.lang.get('quote'),
                                    func: 'block\.format'
                                },
                                pre: {
                                    title: this.lang.get('code'),
                                    func: 'block\.format'
                                },
                                h1: {
                                    title: this.lang.get('heading1'),
                                    func: 'block\.format'
                                },
                                h2: {
                                    title: this.lang.get('heading2'),
                                    func: 'block\.format'
                                },
                                h3: {
                                    title: this.lang.get('heading3'),
                                    func: 'block\.format'
                                },
                                h4: {
                                    title: this.lang.get('heading4'),
                                    func: 'block\.format'
                                },
                                h5: {
                                    title: this.lang.get('heading5'),
                                    func: 'block\.format'
                                },
                                h6: {
                                    title: this.lang.get('heading6'),
                                    func: 'block\.format'
                                }
                            }
                        },
                        bold: {
                            title: this.lang.get('bold\-abbr'),
                            label: this.lang.get('bold'),
                            func: 'inline\.format'
                        },
                        italic: {
                            title: this.lang.get('italic\-abbr'),
                            label: this.lang.get('italic'),
                            func: 'inline\.format'
                        },
                        deleted: {
                            title: this.lang.get('deleted\-abbr'),
                            label: this.lang.get('deleted'),
                            func: 'inline\.format'
                        },
                        underline: {
                            title: this.lang.get('underline\-abbr'),
                            label: this.lang.get('underline'),
                            func: 'inline\.format'
                        },
                        lists: {
                            title: this.lang.get('lists'),
                            dropdown: {
                                unorderedlist: {
                                    title: '\&bull\;\ ' + this.lang.get('unorderedlist'),
                                    func: 'list\.toggle'
                                },
                                orderedlist: {
                                    title: '1\.\ ' + this.lang.get('orderedlist'),
                                    func: 'list\.toggle'
                                },
                                outdent: {
                                    title: '\<\ ' + this.lang.get('outdent'),
                                    func: 'indent\.decrease',
                                    observe: {
                                        element: 'li',
                                        out: {
                                            attr: {
                                                "class": 'redactor\-dropdown\-link\-inactive',
                                                "aria-disabled": !0
                                            }
                                        }
                                    }
                                },
                                indent: {
                                    title: '\>\ ' + this.lang.get('indent'),
                                    func: 'indent\.increase',
                                    observe: {
                                        element: 'li',
                                        out: {
                                            attr: {
                                                "class": 'redactor\-dropdown\-link\-inactive',
                                                "aria-disabled": !0
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        ul: {
                            title: '\&bull\;\ ' + this.lang.get('bulletslist'),
                            func: 'list\.toggle'
                        },
                        ol: {
                            title: '1\.\ ' + this.lang.get('numberslist'),
                            func: 'list\.toggle'
                        },
                        outdent: {
                            title: this.lang.get('outdent'),
                            func: 'indent\.decrease'
                        },
                        indent: {
                            title: this.lang.get('indent'),
                            func: 'indent\.increase'
                        },
                        image: {
                            title: this.lang.get('image'),
                            func: 'image\.show'
                        },
                        file: {
                            title: this.lang.get('file'),
                            func: 'file\.show'
                        },
                        link: {
                            title: this.lang.get('link'),
                            dropdown: {
                                link: {
                                    title: this.lang.get('link\-insert'),
                                    func: 'link\.show',
                                    observe: {
                                        element: 'a',
                                        "in": {
                                            title: this.lang.get('link\-edit')
                                        },
                                        out: {
                                            title: this.lang.get('link\-insert')
                                        }
                                    }
                                },
                                unlink: {
                                    title: this.lang.get('unlink'),
                                    func: 'link\.unlink',
                                    observe: {
                                        element: 'a',
                                        out: {
                                            attr: {
                                                "class": 'redactor\-dropdown\-link\-inactive',
                                                "aria-disabled": !0
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        horizontalrule: {
                            title: this.lang.get('horizontalrule'),
                            func: 'line\.insert'
                        }
                    }
                },
                setFormatting: function() {
                    t.each(this.toolbarsButtons.format.dropdown, t.proxy(function(e, i) {
                        -1 === t.inArray(e, this.opts.formatting) && delete this.toolbarsButtons.format.dropdown[e]
                    }, this))
                },
                hideButtons: function() {
                    0 !== this.opts.buttonsHide.length && this.button.hideButtonsSlicer(this.opts.buttonsHide)
                },
                hideButtonsOnMobile: function() {
                    this.detect.isMobile() && 0 !== this.opts.buttonsHideOnMobile.length && this.button.hideButtonsSlicer(this.opts.buttonsHideOnMobile)
                },
                hideButtonsSlicer: function(e) {
                    t.each(e, t.proxy(function(t, e) {
                        var i = this.opts.buttons.indexOf(e); - 1 !== i && this.opts.buttons.splice(i, 1)
                    }, this))
                },
                load: function(e) {
                    this.button.buttons = [], t.each(this.opts.buttons, t.proxy(function(i, o) {
                        !this.toolbarsButtons[o] || 'file' === o && !this.file.is() || 'image' === o && !this.image.is() || e.append(t('\<li\>').append(this.button.build(o, this.toolbarsButtons[o])))
                    }, this))
                },
                build: function(e, i) {
                    if (this.opts.toolbar !== !1) {
                        var o = t('\<a\ href\=\"javascript\:void\(null\)\;\"\ class\=\"re\-button\ re\-' + e + '\"\ title\=\"' + i.title + '\"\ rel\=\"' + e + '\"\ \/\>').html(i.title);
                        if (o.attr({
                                role: 'button',
                                "aria-label": i.title,
                                tabindex: '\-1'
                            }), 'undefined' != typeof i.label && (o.attr('aria\-label', i.label), o.attr('title', i.label)), (i.func || i.command || i.dropdown) && this.button.setEvent(o, e, i), i.dropdown) {
                            o.addClass('redactor\-toolbar\-link\-dropdown').attr('aria\-haspopup', !0);
                            var r = t('\<ul\ class\=\"redactor\-dropdown\ redactor\-dropdown\-' + this.uuid + '\ redactor\-dropdown\-box\-' + e + '\"\ style\=\"display\:\ none\;\"\>');
                            o.data('dropdown', r), this.dropdown.build(e, r, i.dropdown)
                        };
                        return this.button.buttons.push(o), o
                    }
                },
                getButtons: function() {
                    return this.button.toolbar().find('a\.re\-button')
                },
                getButtonsKeys: function() {
                    return this.button.buttons
                },
                setEvent: function(e, i, o) {
                    e.on('mousedown', t.proxy(function(t) {
                        if (t.preventDefault(), e.hasClass('redactor\-button\-disabled')) {
                            return !1
                        };
                        var r = 'func',
                            s = o.func;
                        return o.command ? (r = 'command', s = o.command) : o.dropdown && (r = 'dropdown', s = !1), this.button.toggle(t, i, r, s), !1
                    }, this))
                },
                toggle: function(t, e, i, o, r) {
                    !this.detect.isIe() && this.detect.isDesktop() || (this.utils.freezeScroll(), t.returnValue = !1), 'command' === i ? this.inline.format(o) : 'dropdown' === i ? this.dropdown.show(t, e) : this.button.clickCallback(t, o, e, r), 'dropdown' !== i && this.dropdown.hideAll(!1), this.opts.air && 'dropdown' !== i && this.air.hide(t), !this.detect.isIe() && this.detect.isDesktop() || this.utils.unfreezeScroll()
                },
                clickCallback: function(e, i, o, r) {
                    var s;
                    if (r = 'undefined' == typeof r ? o : r, t.isFunction(i)) {
                        i.call(this, o)
                    } else {
                        if ('\-1' !== i.search(/\./)) {
                            if (s = i.split('\.'), 'undefined' == typeof this[s[0]]) {
                                return
                            };
                            'object' == typeof r ? this[s[0]][s[1]].apply(this, r) : this[s[0]][s[1]].call(this, r)
                        } else {
                            'object' == typeof r ? this[i].apply(this, r) : this[i].call(this, r)
                        }
                    };
                    this.observe.buttons(e, o)
                },
                all: function() {
                    return this.button.buttons
                },
                get: function(t) {
                    return this.opts.toolbar !== !1 ? this.button.toolbar().find('a\.re\-' + t) : void(0)
                },
                set: function(t, e) {
                    if (this.opts.toolbar !== !1) {
                        var i = this.button.toolbar().find('a\.re\-' + t);
                        return i.html(e).attr('aria\-label', e), i
                    }
                },
                add: function(e, i) {
                    if (this.button.isAdded(e) !== !0) {
                        return t()
                    };
                    var o = this.button.build(e, {
                        title: i
                    });
                    return this.button.toolbar().append(t('\<li\>').append(o)), o
                },
                addFirst: function(e, i) {
                    if (this.button.isAdded(e) !== !0) {
                        return t()
                    };
                    var o = this.button.build(e, {
                        title: i
                    });
                    return this.button.toolbar().prepend(t('\<li\>').append(o)), o
                },
                addAfter: function(e, i, o) {
                    if (this.button.isAdded(i) !== !0) {
                        return t()
                    };
                    var r = this.button.build(i, {
                            title: o
                        }),
                        s = this.button.get(e);
                    return 0 !== s.length ? s.parent().after(t('\<li\>').append(r)) : this.button.toolbar().append(t('\<li\>').append(r)), r
                },
                addBefore: function(e, i, o) {
                    if (this.button.isAdded(i) !== !0) {
                        return t()
                    };
                    var r = this.button.build(i, {
                            title: o
                        }),
                        s = this.button.get(e);
                    return 0 !== s.length ? s.parent().before(t('\<li\>').append(r)) : this.button.toolbar().append(t('\<li\>').append(r)), r
                },
                isAdded: function(t) {
                    var e = this.opts.buttonsHideOnMobile.indexOf(t);
                    return !(this.opts.toolbar === !1 || -1 !== e && this.detect.isMobile())
                },
                setIcon: function(t, e) {
                    t.html(e)
                },
                addCallback: function(e, i) {
                    if ('undefined' != typeof e && this.opts.toolbar !== !1) {
                        var o = 'dropdown' === i ? 'dropdown' : 'func',
                            r = e.attr('rel');
                        e.on('mousedown', t.proxy(function(t) {
                            return e.hasClass('redactor\-button\-disabled') ? !1 : void(this).button.toggle(t, r, o, i)
                        }, this))
                    }
                },
                addDropdown: function(e, i) {
                    if (this.opts.toolbar !== !1) {
                        e.addClass('redactor\-toolbar\-link\-dropdown').attr('aria\-haspopup', !0);
                        var o = e.attr('rel');
                        this.button.addCallback(e, 'dropdown');
                        var r = t('\<div\ class\=\"redactor\-dropdown\ redactor\-dropdown\-' + this.uuid + '\ redactor\-dropdown\-box\-' + o + '\"\ style\=\"display\:\ none\;\"\>');
                        return e.data('dropdown', r), i && this.dropdown.build(o, r, i), r
                    }
                },
                setActive: function(t) {
                    this.button.get(t).addClass('redactor\-act')
                },
                setInactive: function(t) {
                    this.button.get(t).removeClass('redactor\-act')
                },
                setInactiveAll: function(t) {
                    var e = this.button.toolbar().find('a\.re\-button');
                    'undefined' != typeof t && (e = e.not('\.re\-' + t)), e.removeClass('redactor\-act')
                },
                disable: function(t) {
                    this.button.get(t).addClass('redactor\-button\-disabled')
                },
                enable: function(t) {
                    this.button.get(t).removeClass('redactor\-button\-disabled')
                },
                disableAll: function(t) {
                    var e = this.button.toolbar().find('a\.re\-button');
                    'undefined' != typeof t && (e = e.not('\.re\-' + t)), e.addClass('redactor\-button\-disabled')
                },
                enableAll: function() {
                    this.button.toolbar().find('a\.re\-button').removeClass('redactor\-button\-disabled')
                },
                remove: function(t) {
                    this.button.get(t).remove()
                }
            }
        },
        caret: function() {
            return {
                set: function(t, e, i) {
                    this.core.editor().focus(), i = 'undefined' == typeof i ? 0 : 1, t = t[0] || t, e = e[0] || e;
                    var o = this.selection.get(),
                        r = this.selection.range(o);
                    try {
                        r.setStart(t, 0), r.setEnd(e, i)
                    } catch (s) {};
                    this.selection.update(o, r)
                },
                prepare: function(t) {
                    return this.detect.isFirefox() && 'undefined' != typeof this.start && this.core.editor().focus(), t[0] || t
                },
                start: function(e) {
                    var i, o;
                    if (e = this.caret.prepare(e)) {
                        if ('BR' === e.tagName) {
                            return this.caret.before(e)
                        };
                        var r = this.utils.isInlineTag(e.tagName);
                        if ('' === e.innerHTML || r) {
                            i = window.getSelection(), o = document.createRange();
                            var s = document.createTextNode('\​');
                            o.setStart(e, 0), o.insertNode(s), o.setStartAfter(s), o.collapse(!0), i.removeAllRanges(), i.addRange(o), r || this.core.editor().on('keydown\.redactor\-remove\-textnode', function() {
                                t(s).remove(), t(this).off('keydown\.redactor\-remove\-textnode')
                            })
                        } else {
                            i = window.getSelection(), i.removeAllRanges(), o = document.createRange(), o.selectNodeContents(e), o.collapse(!0), i.addRange(o)
                        }
                    }
                },
                end: function(e) {
                    var i, o;
                    if (e = this.caret.prepare(e)) {
                        if ('BR' !== e.tagName && '' === e.innerHTML) {
                            return this.caret.start(e)
                        };
                        if ('BR' === e.tagName) {
                            var r = document.createElement('span');
                            return r.className = 'redactor\-invisible\-space', r.innerHTML = '\&\#x200b\;', t(e).after(r), i = window.getSelection(), i.removeAllRanges(), o = document.createRange(), o.setStartBefore(r), o.setEndBefore(r), i.addRange(o), void(t)(r).replaceWith(function() {
                                return t(this).contents()
                            })
                        };
                        if (e.lastChild && 1 === e.lastChild.nodeType) {
                            return this.caret.after(e.lastChild)
                        };
                        i = window.getSelection(), i.removeAllRanges(), o = document.createRange(), o.selectNodeContents(e), o.collapse(!1), i.addRange(o)
                    }
                },
                after: function(e) {
                    var i, o;
                    if (e = this.caret.prepare(e)) {
                        if ('BR' === e.tagName) {
                            return this.caret.end(e)
                        };
                        if (this.utils.isBlockTag(e.tagName)) {
                            var r = this.caret.next(e);
                            return void(('undefined' == typeof r ? this.caret.end(e) : ('TABLE' === r.tagName ? r = t(r).find('th\,\ td').first()[0] : 'UL' !== r.tagName && 'OL' !== r.tagName || (r = t(r).find('li').first()[0]), this.caret.start(r))))
                        };
                        var s = document.createTextNode('\​');
                        i = window.getSelection(), i.removeAllRanges(), o = document.createRange(), o.setStartAfter(e), o.insertNode(s), o.setStartAfter(s), o.collapse(!0), i.addRange(o)
                    }
                },
                before: function(e) {
                    var i, o;
                    if (e = this.caret.prepare(e)) {
                        if (this.utils.isBlockTag(e.tagName)) {
                            var r = this.caret.prev(e);
                            return void(('undefined' == typeof r ? this.caret.start(e) : ('TABLE' === r.tagName ? r = t(r).find('th\,\ td').last()[0] : 'UL' !== r.tagName && 'OL' !== r.tagName || (r = t(r).find('li').last()[0]), this.caret.end(r))))
                        };
                        i = window.getSelection(), i.removeAllRanges(), o = document.createRange(), o.setStartBefore(e), o.collapse(!0), i.addRange(o)
                    }
                },
                next: function(e) {
                    var i = t(e).next();
                    return i.hasClass('redactor\-script\-tag\,\ redactor\-selection\-marker') ? i.next()[0] : i[0]
                },
                prev: function(e) {
                    var i = t(e).prev();
                    return i.hasClass('redactor\-script\-tag\,\ redactor\-selection\-marker') ? i.prev()[0] : i[0]
                },
                offset: function(t) {
                    return this.offset.get(t)
                }
            }
        },
        clean: function() {
            return {
                onSet: function(e) {
                    e = this.clean.savePreCode(e), e = this.clean.saveFormTags(e), this.opts.script && (e = e.replace(/<script(.*?[^>]?)>([\w\W]*?)<\/script>/gi, '\<pre\ class\=\"redactor\-script\-tag\"\ \$1\>\$2\<\/pre\>')), e = e.replace(/\$/g, '\&\#36\;'), e = e.replace(/&amp;/g, '\&'), e = e.replace(/<a href="(.*?[^>]?)В®(.*?[^>]?)">/gi, '\<a\ href\=\"\$1\&reg\$2\"\>'), e = e.replace(/<span(.*?[^>]?)id="selection-marker-1"(.*?[^>]?)>вЂ‹<\/span>/gi, '\[\[\[marker1\]\]\]'), e = e.replace(/<span(.*?[^>]?)id="selection-marker-2"(.*?[^>]?)>вЂ‹<\/span>/gi, '\[\[\[marker2\]\]\]');
                    var i = this,
                        o = t('\<div\/\>').html(t.parseHTML(e, document, !0)),
                        r = this.opts.replaceTags;
                    if (r) {
                        var s = Object.keys(this.opts.replaceTags);
                        o.find(s.join('\,')).each(function(t, e) {
                            i.utils.replaceToTag(e, r[e.tagName.toLowerCase()])
                        })
                    };
                    e = o.html();
                    var n = ['font', 'html', 'head', 'link', 'body', 'meta', 'applet'];
                    return this.opts.script || n.push('script'), e = this.clean.stripTags(e, n), this.opts.removeComments && (e = e.replace(/<!--[\s\S]*?-->/gi, '')), e = this.paragraphize.load(e), e = e.replace('\[\[\[marker1\]\]\]', '\<span\ id\=\"selection\-marker\-1\"\ class\=\"redactor\-selection\-marker\"\>\​\<\/span\>'), e = e.replace('\[\[\[marker2\]\]\]', '\<span\ id\=\"selection\-marker\-2\"\ class\=\"redactor\-selection\-marker\"\>\​\<\/span\>'), -1 !== e.search(/^(||\s||<br\s?\/?>||&nbsp;)$/i) ? this.opts.emptyHtml : e
                },
                onGet: function(t) {
                    return this.clean.onSync(t)
                },
                onSync: function(e) {
                    if (e = e.replace(/\u200B/g, ''), e = e.replace(/&#x200b;/gi, ''), -1 !== e.search(/^<p>(||\s||<br\s?\/?>||&nbsp;)<\/p>$/i)) {
                        return ''
                    };
                    var i = t('\<div\/\>').html(t.parseHTML(e, document, !0));
                    i.find('\*\[style\=\"\"\]').removeAttr('style'), i.find('\*\[class\=\"\"\]').removeAttr('class'), i.find('\*\[rel\=\"\"\]').removeAttr('rel'), i.find('\.redactor\-invisible\-space').each(function() {
                        t(this).contents().unwrap()
                    }), i.find('span').each(function() {
                        0 === this.attributes.length && t(this).contents().unwrap()
                    }), i.find('\.redactor\-selection\-marker\,\ \#redactor\-insert\-marker').remove(), e = i.html(), this.opts.script && (e = e.replace(/<pre class="redactor-script-tag"(.*?[^>]?)>([\w\W]*?)<\/pre>/gi, '\<script\$1\>\$2\<\/script\>')), e = this.clean.restoreFormTags(e), e = e.replace(new RegExp('\<br\\s\?\/\?\>\<\/h', 'gi'), '\<\/h'), e = e.replace(new RegExp('\<br\\s\?\/\?\>\<\/li\>', 'gi'), '\<\/li\>'), e = e.replace(new RegExp('\<\/li\>\<br\\s\?\/\?\>', 'gi'), '\<\/li\>'), e = e.replace(/<pre>/gi, '\<pre\>\
'), this.opts.preClass && (e = e.replace(/<pre>/gi, '\<pre\ class\=\"' + this.opts.preClass + '\"\>')), this.opts.linkNofollow && (e = e.replace(/<a(.*?)rel="nofollow"(.*?[^>])>/gi, '\<a\$1\$2\>'), e = e.replace(/<a(.*?[^>])>/gi, '\<a\$1\ rel\=\"nofollow\"\>'));
                    var o = {
                        "™": '\&trade\;',
                        "\xA9": '\&copy\;',
                        "…": '\&hellip\;',
                        "—": '\&mdash\;',
                        "‐": '\&dash\;'
                    };
                    return t.each(o, function(t, i) {
                        e = e.replace(new RegExp(t, 'g'), i)
                    }), e = e.replace(/&amp;/g, '\&'), e = e.replace(/<p><\/p>/gi, '')
                },
                onPaste: function(e, i, o) {
                    if (o !== !0) {
                        e = e.replace(/<b\sid="internal-source-marker(.*?)">([\w\W]*?)<\/b>/gi, '\$2'), e = e.replace(/<b(.*?)id="docs-internal-guid(.*?)">([\w\W]*?)<\/b>/gi, '\$3');
                        var r = this.clean.isHtmlMsWord(e);
                        r && (e = this.clean.cleanMsWord(e))
                    };
                    return e = t.trim(e), i.pre ? this.opts.preSpaces && (e = e.replace(/\t/g, new Array(this.opts.preSpaces + 1).join('\ '))) : (e = this.clean.replaceBrToNl(e), e = this.clean.removeTagsInsidePre(e)), o !== !0 && (e = this.clean.removeSpans(e), e = this.clean.removeEmptyInlineTags(e), i.encode === !1 && (e = e.replace(/&/g, '\&amp\;'), e = this.clean.convertTags(e, i), e = this.clean.getPlainText(e), e = this.clean.reconvertTags(e, i))), i.text && (e = this.clean.replaceNbspToSpaces(e), e = this.clean.getPlainText(e)), i.lists && (e = e.replace('\
', '\<br\>')), i.encode && (e = this.clean.encodeHtml(e)), i.paragraphize && (e = this.paragraphize.load(e)), e
                },
                getCurrentType: function(t, e) {
                    var i = this.selection.blocks(),
                        o = {
                            text: !1,
                            encode: !1,
                            paragraphize: !0,
                            line: this.clean.isHtmlLine(t),
                            blocks: this.clean.isHtmlBlocked(t),
                            pre: !1,
                            lists: !1,
                            block: !0,
                            inline: !0,
                            links: !0,
                            images: !0
                        };
                    return 1 === i.length && this.utils.isCurrentOrParent(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'a', 'figcaption']) ? (o.text = !0, o.paragraphize = !1, o.inline = !1, o.images = !1, o.links = !1, o.line = !0) : 'inline' === this.opts.type || this.opts.enterKey === !1 ? (o.paragraphize = !1, o.block = !1, o.line = !0) : 1 === i.length && this.utils.isCurrentOrParent(['li']) ? (o.lists = !0, o.block = !1, o.paragraphize = !1, o.images = !1) : 1 === i.length && this.utils.isCurrentOrParent(['th', 'td', 'blockquote']) ? (o.block = !1, o.paragraphize = !1) : ('pre' === this.opts.type || 1 === i.length && this.utils.isCurrentOrParent('pre')) && (o.inline = !1, o.block = !1, o.encode = !0, o.pre = !0, o.paragraphize = !1, o.images = !1, o.links = !1), o.line === !0 && (o.paragraphize = !1), e === !0 && (o.text = !1), o
                },
                isHtmlBlocked: function(t) {
                    var e = t.match(new RegExp('\<\/\(' + this.opts.blockTags.join('\|').toUpperCase() + '\)\>', 'gi')),
                        i = t.match(new RegExp('\<hr\(\.\*\?\[\^\>\]\)\>', 'gi'));
                    return null !== e || null !== i
                },
                isHtmlLine: function(t) {
                    if (this.clean.isHtmlBlocked(t)) {
                        return !1
                    };
                    var e = t.match(/<br\s?\/?>/gi),
                        i = t.match(/\n/gi);
                    return !e && !i
                },
                isHtmlMsWord: function(t) {
                    return t.match(/class="?Mso|style="[^"]*\bmso-|style='[^'']*\bmso-|w:WordDocument/i)
                },
                removeEmptyInlineTags: function(t) {
                    for (var e = this.opts.inlineTags, i = e.length, o = 0; i > o; o++) {
                        t = t.replace(new RegExp('\<' + e[o] + '\[\^\>\]\*\>\(s\
\|\	\)\?\<\/' + e[o] + '\>', 'gi'), '')
                    };
                    return t
                },
                removeSpans: function(t) {
                    return t = t.replace(/<\/span>/gi, ''), t = t.replace(/<span[^>]*>/gi, '')
                },
                cleanMsWord: function(t) {
                    return t = t.replace(/<!--[\s\S]*?-->/g, ''), t = t.replace(/<o:p>[\s\S]*?<\/o:p>/gi, ''), t = t.replace(/\n/g, '\ '), t = t.replace(/<br\s?\/?>|<\/p>|<\/div>|<\/li>|<\/td>/gi, '\
\
')
                },
                replaceNbspToSpaces: function(t) {
                    return t.replace('\&nbsp\;', '\ ')
                },
                replaceBrToNl: function(t) {
                    return t.replace(/<br\s?\/?>/gi, '\
')
                },
                replaceNlToBr: function(t) {
                    return t.replace(/\n/g, '\<br\ \/\>')
                },
                convertTags: function(e, i) {
                    var o = t('\<div\>').html(e);
                    o.find('iframe').remove();
                    var r = o.find('a');
                    if (r.removeAttr('style'), this.opts.pasteLinkTarget !== !1 && r.attr('target', this.opts.pasteLinkTarget), e = o.html(), i.links && this.opts.pasteLinks && (e = e.replace(/<a(.*?)href="(.*?)"(.*?)>(.*?)<\/a>/gi, '\#\#\#a\$1href\=\"\$2\"\$3\#\#\#\$4\#\#\#\/a\#\#\#')), i.images && this.opts.pasteImages && (e = e.replace(/<img(.*?)src="(.*?)"(.*?[^>])>/gi, '\#\#\#img\$1src\=\"\$2\"\$3\#\#\#')), this.opts.pastePlainText) {
                        return e
                    };
                    var s, n = i.lists ? ['ul', 'ol', 'li'] : this.opts.pasteBlockTags;
                    s = i.block || i.lists ? i.inline ? n.concat(this.opts.pasteInlineTags) : n : i.inline ? this.opts.pasteInlineTags : [];
                    for (var a = s.length, l = 0; a > l; l++) {
                        e = e.replace(new RegExp('\<\/' + s[l] + '\>', 'gi'), '\#\#\#\/' + s[l] + '\#\#\#'), e = 'td' === s[l] || 'th' === s[l] ? e.replace(new RegExp('\<' + s[l] + '\(\.\*\?\[\^\>\]\)\(\(colspan\|rowspan\)\=\"\(\.\*\?\[\^\>\]\)\"\)\?\(\.\*\?\[\^\>\]\)\>', 'gi'), '\#\#\#' + s[l] + '\ \$2\#\#\#') : e.replace(new RegExp('\<' + s[l] + '\[\^\>\]\*\>', 'gi'), '\#\#\#' + s[l] + '\#\#\#')
                    };
                    return e
                },
                reconvertTags: function(t, e) {
                    if (e.links && this.opts.pasteLinks && (t = t.replace(/###a(.*?)href="(.*?)"(.*?)###(.*?)###\/a###/gi, '\<a\$1href\=\"\$2\"\$3\>\$4\<\/a\>')), e.images && this.opts.pasteImages && (t = t.replace(/###img(.*?)src="(.*?)"###/gi, '\<img\ src\=\"\$2\"\>')), this.opts.pastePlainText) {
                        return t
                    };
                    var i, o = e.lists ? ['ul', 'ol', 'li'] : this.opts.pasteBlockTags;
                    i = e.block || e.lists ? e.inline ? o.concat(this.opts.pasteInlineTags) : o : e.inline ? this.opts.pasteInlineTags : [];
                    for (var r = i.length, s = 0; r > s; s++) {
                        t = t.replace(new RegExp('\#\#\#\/' + i[s] + '\#\#\#', 'gi'), '\<\/' + i[s] + '\>'), t = t.replace(new RegExp('\#\#\#' + i[s] + '\#\#\#', 'gi'), '\<' + i[s] + '\>')
                    };
                    for (var s = 0; r > s; s++) {
                        'td' !== i[s] && 'th' !== i[s] || (t = t.replace(new RegExp('\#\#\#' + i[s] + 's\?\(\.\*\?\[\^\#\]\)\#\#\#', 'gi'), '\<' + i[s] + '\$1\>'))
                    };
                    return t
                },
                cleanPre: function(e) {
                    e = 'undefined' == typeof e ? t(this.selection.block()).closest('pre', this.core.editor()[0]) : e, t(e).find('br').replaceWith(function() {
                        return document.createTextNode('\
')
                    }), t(e).find('p').replaceWith(function() {
                        return t(this).contents()
                    })
                },
                removeTagsInsidePre: function(e) {
                    var i = t('\<div\ \/\>').append(e);
                    return i.find('pre').replaceWith(function() {
                        var e = t(this).html();
                        return e = e.replace(/<br\s?\/?>|<\/p>|<\/div>|<\/li>|<\/td>/gi, '\
'), e = e.replace(/(<([^>]+)>)/gi, ''), t('\<pre\ \/\>').append(e)
                    }), e = i.html(), i.remove(), e
                },
                getPlainText: function(e) {
                    e = e.replace(/<!--[\s\S]*?-->/gi, ''), e = e.replace(/<style[\s\S]*?style>/gi, ''), e = e.replace(/<\/p>|<\/div>|<\/li>|<\/td>/gi, '\
'), e = e.replace(/<\/H[1-6]>/gi, '\
\
');
                    var i = document.createElement('div');
                    return i.innerHTML = e, e = i.textContent || i.innerText, t.trim(e)
                },
                savePreCode: function(t) {
                    return t = this.clean.savePreFormatting(t), t = this.clean.saveCodeFormatting(t), t = this.clean.restoreSelectionMarkers(t)
                },
                savePreFormatting: function(e) {
                    var i = e.match(/<pre(.*?)>([\w\W]*?)<\/pre>/gi);
                    return null === i ? e : (t.each(i, t.proxy(function(t, i) {
                        var o = i.match(/<pre(.*?)>([\w\W]*?)<\/pre>/i);
                        o[2] = o[2].replace(/<br\s?\/?>/g, '\
'), o[2] = o[2].replace(/&nbsp;/g, '\ '), this.opts.preSpaces && (o[2] = o[2].replace(/\t/g, new Array(this.opts.preSpaces + 1).join('\ '))), o[2] = this.clean.encodeEntities(o[2]), o[2] = o[2].replace(/\$/g, '\&\#36\;'), e = e.replace(i, '\<pre' + o[1] + '\>' + o[2] + '\<\/pre\>')
                    }, this)), e)
                },
                saveCodeFormatting: function(e) {
                    var i = e.match(/<code(.*?)>([\w\W]*?)<\/code>/gi);
                    return null === i ? e : (t.each(i, t.proxy(function(t, i) {
                        var o = i.match(/<code(.*?)>([\w\W]*?)<\/code>/i);
                        o[2] = o[2].replace(/&nbsp;/g, '\ '), o[2] = this.clean.encodeEntities(o[2]), o[2] = o[2].replace(/\$/g, '\&\#36\;'), e = e.replace(i, '\<code' + o[1] + '\>' + o[2] + '\<\/code\>')
                    }, this)), e)
                },
                restoreSelectionMarkers: function(t) {
                    return t = t.replace(/&lt;span id=&quot;selection-marker-([0-9])&quot; class=&quot;redactor-selection-marker&quot;&gt;вЂ‹&lt;\/span&gt;/g, '\<span\ id\=\"selection\-marker\-\$1\"\ class\=\"redactor\-selection\-marker\"\>\​\<\/span\>')
                },
                saveFormTags: function(t) {
                    return t.replace(/<form(.*?)>([\w\W]*?)<\/form>/gi, '\<section\$1\ rel\=\"redactor\-form\-tag\"\>\$2\<\/section\>')
                },
                restoreFormTags: function(t) {
                    return t.replace(/<section(.*?) rel="redactor-form-tag"(.*?)>([\w\W]*?)<\/section>/gi, '\<form\$1\$2\>\$3\<\/form\>')
                },
                encodeHtml: function(t) {
                    return t = t.replace(/вЂќ/g, '\"'), t = t.replace(/вЂњ/g, '\"'), t = t.replace(/вЂ/g, '\''), t = t.replace(/вЂ™/g, '\''), t = this.clean.encodeEntities(t)
                },
                encodeEntities: function(t) {
                    return t = String(t).replace(/&amp;/g, '\&').replace(/&lt;/g, '\<').replace(/&gt;/g, '\>').replace(/&quot;/g, '\"'), t = t.replace(/&/g, '\&amp\;').replace(/</g, '\&lt\;').replace(/>/g, '\&gt\;').replace(/"/g, '\&quot\;')
                },
                stripTags: function(t, e) {
                    if ('undefined' == typeof e) {
                        return t.replace(/(<([^>]+)>)/gi, '')
                    };
                    var i = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
                    return t.replace(i, function(t, i) {
                        return -1 === e.indexOf(i.toLowerCase()) ? t : ''
                    })
                },
                removeMarkers: function(t) {
                    return t.replace(/<span(.*?[^>]?)class="redactor-selection-marker"(.*?[^>]?)>([\w\W]*?)<\/span>/gi, '')
                },
                removeSpaces: function(e) {
                    return e = t.trim(e), e = e.replace(/\n/g, ''), e = e.replace(/[\t]*/g, ''), e = e.replace(/\n\s*\n/g, '\
'), e = e.replace(/^[\s\n]*/g, '\ '), e = e.replace(/[\s\n]*$/g, '\ '), e = e.replace(/>\s{2,}</g, '\>\ \<'), e = e.replace(/\n\n/g, '\
'), e = e.replace(/\u200B/g, '')
                },
                removeSpacesHard: function(e) {
                    return e = t.trim(e), e = e.replace(/\n/g, ''), e = e.replace(/[\t]*/g, ''), e = e.replace(/\n\s*\n/g, '\
'), e = e.replace(/^[\s\n]*/g, ''), e = e.replace(/[\s\n]*$/g, ''), e = e.replace(/>\s{2,}</g, '\>\<'), e = e.replace(/\n\n/g, '\
'), e = e.replace(/\u200B/g, '')
                },
                normalizeCurrentHeading: function() {
                    var t = this.selection.block();
                    this.utils.isCurrentOrParentHeader() && t && t.normalize()
                }
            }
        },
        code: function() {
            return {
                syncFire: !0,
                html: !1,
                start: function(e) {
                    e = t.trim(e), e = e.replace(/^(<span id="selection-marker-1" class="redactor-selection-marker">вЂ‹<\/span>)/, ''), 'textarea' === this.opts.type ? e = this.clean.onSet(e) : 'div' === this.opts.type && '' === e && (e = this.opts.emptyHtml), this.events.stopDetectChanges(), this.core.editor().html(e), this.observe.load(), this.events.startDetectChanges()
                },
                set: function(e) {
                    e = t.trim(e), 'textarea' === this.opts.type ? e = this.clean.onSet(e) : 'div' === this.opts.type && '' === e && (e = this.opts.emptyHtml), this.core.editor().html(e), 'textarea' === this.opts.type && this.core.textarea().val(this.clean.onSync(e)), this.placeholder.enable()
                },
                get: function() {
                    if ('textarea' === this.opts.type) {
                        return this.core.textarea().val()
                    };
                    var t = this.core.editor().html();
                    return t = this.clean.onGet(t)
                },
                sync: function() {
                    if (this.code.syncFire) {
                        var e = this.core.editor().html(),
                            i = this.code.cleaned(e);
                        if (!this.code.isSync(i)) {
                            return this.code.html = i, 'textarea' !== this.opts.type ? (this.core.callback('sync', e), void(this).core.callback('change', e)) : void(('textarea' === this.opts.type && setTimeout(t.proxy(function() {
                                this.code.startSync(e)
                            }, this), 10)))
                        }
                    }
                },
                startSync: function(t) {
                    t = this.core.callback('syncBefore', t), t = this.clean.onSync(t), this.core.textarea().val(t), this.core.callback('sync', t), this.start === !1 && this.core.callback('change', t), this.start = !1
                },
                isSync: function(t) {
                    var e = this.code.html !== !1 ? this.code.html : !1;
                    return e !== !1 && e === t
                },
                cleaned: function(t) {
                    return t = t.replace(/\u200B/g, ''), this.clean.removeMarkers(t)
                }
            }
        },
        core: function() {
            return {
                id: function() {
                    return this['\$editor'].attr('id')
                },
                element: function() {
                    return this['\$element']
                },
                editor: function() {
                    return 'undefined' == typeof this['\$editor'] ? t() : this['\$editor']
                },
                textarea: function() {
                    return this['\$textarea']
                },
                box: function() {
                    return 'textarea' === this.opts.type ? this['\$box'] : this['\$element']
                },
                toolbar: function() {
                    return this['\$toolbar'] ? this['\$toolbar'] : !1
                },
                air: function() {
                    return this['\$air'] ? this['\$air'] : !1
                },
                object: function() {
                    return t.extend({}, this)
                },
                structure: function() {
                    this.core.editor().toggleClass('redactor\-structure')
                },
                addEvent: function(t) {
                    this.core.event = t
                },
                getEvent: function() {
                    return this.core.event
                },
                callback: function(e, i, o) {
                    var r = 'redactor',
                        s = !1,
                        n = t._data(this.core.element()[0], 'events');
                    if ('undefined' != typeof n && 'undefined' != typeof n[e]) {
                        for (var a = n[e].length, l = 0; a > l; l++) {
                            var c = n[e][l].namespace;
                            if (c === 'callback\.' + r) {
                                var d = n[e][l].handler,
                                    h = 'undefined' == typeof o ? [i] : [i, o];
                                s = 'undefined' == typeof h ? d.call(this, i) : d.call(this, i, h)
                            }
                        }
                    };
                    if (s) {
                        return s
                    };
                    if ('undefined' == typeof this.opts.callbacks[e]) {
                        return 'undefined' == typeof o ? i : o
                    };
                    var u = this.opts.callbacks[e];
                    return t.isFunction(u) ? 'undefined' == typeof o ? u.call(this, i) : u.call(this, i, o) : 'undefined' == typeof o ? i : o
                },
                destroy: function() {
                    this.opts.destroyed = !0, this.core.callback('destroy'), this.placeholder.destroy(), this.progress.destroy(), t('\#redactor\-voice\-' + this.uuid).remove(), this.core.editor().removeClass('redactor\-in\ redactor\-structure'), this.core.editor().off('keydown\.redactor\-remove\-textnode'), this.core.editor().off('\.redactor\-observe\.' + this.uuid), this['\$element'].off('\.redactor').removeData('redactor'), this.core.editor().off('\.redactor'), t(document).off('\.redactor\-dropdown'), t(document).off('\.redactor\-air\.' + this.uuid), t(document).off('mousedown\.redactor\-blur\.' + this.uuid), t(document).off('mousedown\.redactor\.' + this.uuid), t(document).off('touchstart\.redactor\.' + this.uuid + '\ click\.redactor\.' + this.uuid), t(window).off('\.redactor\-toolbar\.' + this.uuid), t(window).off('touchmove\.redactor\.' + this.uuid), t('body').off('scroll\.redactor\.' + this.uuid), t(this.opts.toolbarFixedTarget).off('scroll\.redactor\.' + this.uuid);
                    var e = this;
                    this.opts.plugins !== !1 && t.each(this.opts.plugins, function(i, o) {
                        t(window).off('\.redactor\-plugin\-' + o), t(document).off('\.redactor\-plugin\-' + o), t('body').off('\.redactor\-plugin\-' + o), e.core.editor().off('\.redactor\-plugin\-' + o)
                    }), this['\$element'].off('click\.redactor\-click\-to\-edit'), this['\$element'].removeClass('redactor\-click\-to\-edit'), this.core.editor().removeClass('redactor\-editor'), this.core.editor().removeAttr('contenteditable');
                    var i = this.code.get();
                    this.opts.toolbar && this['\$toolbar'] && this['\$toolbar'].find('a').each(function() {
                        var e = t(this);
                        e.data('dropdown') && (e.data('dropdown').remove(), e.data('dropdown', {}))
                    }), 'textarea' === this.opts.type && (this['\$box'].after(this.$element), this['\$box'].remove(), this['\$element'].val(i).show()), this.opts.air && this['\$air'].remove(), this.opts.toolbar && this['\$toolbar'] && this['\$toolbar'].remove(), this['\$modalBox'] && this['\$modalBox'].remove(), this['\$modalOverlay'] && this['\$modalOverlay'].remove(), t('\.redactor\-link\-tooltip').remove(), clearInterval(this.autosaveTimeout)
                }
            }
        },
        detect: function() {
            return {
                isWebkit: function() {
                    return /webkit/ ['test'](this.opts.userAgent)
                },
                isFirefox: function() {
                    return this.opts.userAgent.indexOf('firefox') > -1
                },
                isIe: function(t) {
                    var e;
                    return e = RegExp('msie' + (isNaN(t) ? '' : '\\s' + t), 'i').test(navigator.userAgent), e || (e = !!navigator.userAgent.match(/Trident.*rv[ :]*11\./)), e
                },
                isMobile: function() {
                    return /(iPhone|iPod|BlackBerry|Android)/ ['test'](navigator.userAgent)
                },
                isDesktop: function() {
                    return !/(iPhone|iPod|iPad|BlackBerry|Android)/ ['test'](navigator.userAgent)
                },
                isIpad: function() {
                    return /iPad/ ['test'](navigator.userAgent)
                }
            }
        },
        dropdown: function() {
            return {
                active: !1,
                button: !1,
                key: !1,
                position: [],
                getDropdown: function() {
                    return this.dropdown.active
                },
                build: function(e, i, o) {
                    o = this.dropdown.buildFormatting(e, o), t.each(o, t.proxy(function(t, o) {
                        var r = this.dropdown.buildItem(t, o);
                        this.observe.addDropdown(r, t, o), i.attr('rel', e).append(r)
                    }, this))
                },
                buildFormatting: function(e, i) {
                    return 'format' !== e || this.opts.formattingAdd === !1 ? i : (t.each(this.opts.formattingAdd, t.proxy(function(t, e) {
                        var o = this.utils.isBlockTag(e.args[0]) ? 'block' : 'inline';
                        i[t] = {
                            func: 'block' === o ? 'block\.format' : 'inline\.format',
                            args: e.args,
                            title: e.title
                        }
                    }, this)), i)
                },
                buildItem: function(e, i) {
                    var o = t('\<li\ \/\>');
                    if ('undefined' != typeof i.classname && o.addClass(i.classname), -1 !== e.search(/^divider/i)) {
                        return o.addClass('redactor\-dropdown\-divider'), o
                    };
                    var r = t('\<a\ href\=\"\#\"\ class\=\"redactor\-dropdown\-' + e + '\"\ role\=\"button\"\ \/\>'),
                        s = t('\<span\ \/\>').html(i.title);
                    return r.append(s), r.on('mousedown', t.proxy(function(t) {
                        t.preventDefault(), this.dropdown.buildClick(t, e, i)
                    }, this)), o.append(r), o
                },
                buildClick: function(e, i, o) {
                    if (!t(e.target).hasClass('redactor\-dropdown\-link\-inactive')) {
                        var r = this.dropdown.buildCommand(o);
                        '\ undefined' != typeof o.args ? this.button.toggle(e, i, r.type, r.callback, o.args) : this.button.toggle(e, i, r.type, r.callback)
                    }
                },
                buildCommand: function(t) {
                    var e = {};
                    return e.type = 'func', e.callback = t.func, t.command ? (e.type = 'command', e.callback = t.command) : t.dropdown && (e.type = 'dropdown', e.callback = t.dropdown), e
                },
                show: function(e, i) {
                    return this.detect.isDesktop() && this.core.editor().focus(), this.dropdown.hideAll(!1, i), this.dropdown.key = i, this.dropdown.button = this.button.get(this.dropdown.key), this.dropdown.button.hasClass('dropact') ? void(this).dropdown.hide() : (this.dropdown.active = this.dropdown.button.data('dropdown').appendTo(document.body), this.core.callback('dropdownShow', {
                        dropdown: this.dropdown.active,
                        key: this.dropdown.key,
                        button: this.dropdown.button
                    }), this.button.setActive(this.dropdown.key), this.dropdown.button.addClass('dropact'), this.dropdown.getButtonPosition(), this.button.toolbar().hasClass('toolbar\-fixed\-box') && this.detect.isDesktop() ? this.dropdown.showIsFixedToolbar() : this.dropdown.showIsUnFixedToolbar(), this.detect.isDesktop() && !this.detect.isFirefox() && (this.dropdown.active.on('mouseover\.redactor\-dropdown', t.proxy(this.utils.disableBodyScroll, this)), this.dropdown.active.on('mousedown\.redactor\-dropdown', t.proxy(this.utils.enableBodyScroll, this))), void(e).stopPropagation())
                },
                showIsFixedToolbar: function() {
                    var e = this.dropdown.button.position().top + this.dropdown.button.innerHeight() + this.opts.toolbarFixedTopOffset,
                        i = 'fixed';
                    this.opts.toolbarFixedTarget !== document && (e = this.dropdown.button.innerHeight() + this['\$toolbar'].offset().top + this.opts.toolbarFixedTopOffset, i = 'absolute'), this.dropdown.active.css({
                        position: i,
                        left: this.dropdown.position.left + 'px',
                        top: e + 'px'
                    }).show(), this.dropdown.active.redactorAnimation('slideDown', {
                        duration: 0.2
                    }, t.proxy(function() {
                        this.dropdown.enableCallback(), this.dropdown.enableEvents()
                    }, this))
                },
                showIsUnFixedToolbar: function() {
                    this.dropdown.active.css({
                        position: 'absolute',
                        left: this.dropdown.position.left + 'px',
                        top: this.dropdown.button.innerHeight() + this.dropdown.position.top + 'px'
                    }).show(), this.dropdown.active.redactorAnimation(this.opts.animation ? 'slideDown' : 'show', {
                        duration: 0.2
                    }, t.proxy(function() {
                        this.dropdown.enableCallback(), this.dropdown.enableEvents()
                    }, this))
                },
                enableEvents: function() {
                    t(document).on('mousedown\.redactor\-dropdown', t.proxy(this.dropdown.hideAll, this)), this.core.editor().on('touchstart\.redactor\-dropdown', t.proxy(this.dropdown.hideAll, this)), t(document).on('keyup\.redactor\-dropdown', t.proxy(this.dropdown.closeHandler, this))
                },
                enableCallback: function() {
                    this.core.callback('dropdownShown', {
                        dropdown: this.dropdown.active,
                        key: this.dropdown.key,
                        button: this.dropdown.button
                    })
                },
                getButtonPosition: function() {
                    this.dropdown.position = this.dropdown.button.offset();
                    var e = this.dropdown.active.width();
                    this.dropdown.position.left + e > t(document).width() && (this.dropdown.position.left = Math.max(0, this.dropdown.position.left - e + parseInt(this.dropdown.button.innerWidth())))
                },
                closeHandler: function(t) {
                    t.which === this.keyCode.ESC && (this.dropdown.hideAll(t), this.core.editor().focus())
                },
                hideAll: function(e, i) {
                    if (this.detect.isDesktop() && this.utils.enableBodyScroll(), e === !1 || 0 === t(e.target).closest('\.redactor\-dropdown').length) {
                        var o = 'undefined' == typeof i ? this.button.toolbar().find('a\.dropact') : this.button.toolbar().find('a\.dropact').not('\.re\-' + i),
                            r = 'undefined' == typeof i ? t('\.redactor\-dropdown\-' + this.uuid) : t('\.redactor\-dropdown\-' + this.uuid).not('\.redactor\-dropdown\-box\-' + i);
                        0 !== r.length && (t(document).off('\.redactor\-dropdown'), this.core.editor().off('\.redactor\-dropdown'), t.each(r, t.proxy(function(e, i) {
                            var o = t(i);
                            this.core.callback('dropdownHide', o), o.hide(), o.off('mouseover\ mouseout').off('\.redactor\-dropdown')
                        }, this)), o.removeClass('redactor\-act\ dropact'))
                    }
                },
                hide: function() {
                    this.dropdown.active !== !1 && (this.detect.isDesktop() && this.utils.enableBodyScroll(), this.dropdown.active.redactorAnimation(this.opts.animation ? 'slideUp' : 'hide', {
                        duration: 0.2
                    }, t.proxy(function() {
                        t(document).off('\.redactor\-dropdown'), this.core.editor().off('\.redactor\-dropdown'), this.dropdown.hideOut()
                    }, this)))
                },
                hideOut: function() {
                    this.core.callback('dropdownHide', this.dropdown.active), this.dropdown.button.removeClass('redactor\-act\ dropact'), this.dropdown.active.off('mouseover\ mouseout').off('\.redactor\-dropdown'), this.dropdown.button = !1, this.dropdown.key = !1, this.dropdown.active = !1
                }
            }
        },
        events: function() {
            return {
                focused: !1,
                blured: !0,
                dropImage: !1,
                stopChanges: !1,
                stopDetectChanges: function() {
                    this.events.stopChanges = !0
                },
                startDetectChanges: function() {
                    var t = this;
                    setTimeout(function() {
                        t.events.stopChanges = !1
                    }, 1)
                },
                dragover: function(e) {
                    e.preventDefault(), e.stopPropagation(), 'IMG' === e.target.tagName && t(e.target).addClass('redactor\-image\-dragover')
                },
                dragleave: function(t) {
                    this.core.editor().find('img').removeClass('redactor\-image\-dragover')
                },
                drop: function(t) {
                    return t = t.originalEvent || t, this.core.editor().find('img').removeClass('redactor\-image\-dragover'), 'inline' === this.opts.type || 'pre' === this.opts.type ? (t.preventDefault(), !1) : void(0) !== window.FormData && t.dataTransfer ? 0 === t.dataTransfer.files.length ? this.events.onDrop(t) : (this.events.onDropUpload(t), void(this).core.callback('drop', t)) : !0
                },
                click: function(t) {
                    var e = this.core.getEvent(),
                        i = 'click' === e || 'arrow' === e ? !1 : 'click';
                    this.core.addEvent(i), this.utils.disableSelectAll(), this.core.callback('click', t)
                },
                focus: function(t) {
                    if (!this.rtePaste && (this.events.isCallback('focus') && this.core.callback('focus', t), this.events.focused = !0, this.events.blured = !1, this.selection.current() === !1)) {
                        var e = this.selection.get(),
                            i = this.selection.range(e);
                        i.setStart(this.core.editor()[0], 0), i.setEnd(this.core.editor()[0], 0), this.selection.update(e, i)
                    }
                },
                blur: function(e) {
                    this.start || this.rtePaste || 0 === t(e.target).closest('\#' + this.core.id() + '\,\ \.redactor\-toolbar\,\ \.redactor\-dropdown\,\ \#redactor\-modal\-box').length && (!this.events.blured && this.events.isCallback('blur') && this.core.callback('blur', e), this.events.focused = !1, this.events.blured = !0)
                },
                touchImageEditing: function() {
                    var e = -1;
                    this.events.imageEditing = !1, t(window).on('touchmove\.redactor\.' + this.uuid, t.proxy(function() {
                        this.events.imageEditing = !0, -1 !== e && clearTimeout(e), e = setTimeout(t.proxy(function() {
                            this.events.imageEditing = !1
                        }, this), 500)
                    }, this))
                },
                init: function() {
                    this.core.editor().on('dragover\.redactor\ dragenter\.redactor', t.proxy(this.events.dragover, this)), this.core.editor().on('dragleave\.redactor', t.proxy(this.events.dragleave, this)), this.core.editor().on('drop\.redactor', t.proxy(this.events.drop, this)), this.core.editor().on('click\.redactor', t.proxy(this.events.click, this)), this.core.editor().on('paste\.redactor', t.proxy(this.paste.init, this)), this.core.editor().on('keydown\.redactor', t.proxy(this.keydown.init, this)), this.core.editor().on('keyup\.redactor', t.proxy(this.keyup.init, this)), this.core.editor().on('focus\.redactor', t.proxy(this.events.focus, this)), t(document).on('mousedown\.redactor\-blur\.' + this.uuid, t.proxy(this.events.blur, this)), this.events.touchImageEditing(), this.events.createObserver(), this.events.setupObserver()
                },
                createObserver: function() {
                    var e = this;
                    this.events.observer = new MutationObserver(function(i) {
                        i.forEach(t.proxy(e.events.iterateObserver, e))
                    })
                },
                iterateObserver: function(t) {
                    var e = !1;
                    this.observe.load(), 'textarea' !== this.opts.type && 'div' !== this.opts.type || this.detect.isFirefox() || t.target !== this.core.editor()[0] || (e = !0), e || this.events.changeHandler()
                },
                setupObserver: function() {
                    this.events.observer.observe(this.core.editor()[0], {
                        attributes: !0,
                        subtree: !0,
                        childList: !0,
                        characterData: !0,
                        characterDataOldValue: !0
                    })
                },
                changeHandler: function() {
                    this.events.stopChanges || (this.code.sync(), this.autosave.is() && (clearTimeout(this.autosaveTimeout), this.autosaveTimeout = setTimeout(t.proxy(this.autosave.send, this), 300)))
                },
                onDropUpload: function(t) {
                    if (t.preventDefault(), t.stopPropagation(), (this.opts.dragImageUpload || this.opts.dragFileUpload) && (null !== this.opts.imageUpload || null !== this.opts.fileUpload)) {
                        'IMG' === t.target.tagName && (this.events.dropImage = t.target);
                        var e = t.dataTransfer.files;
                        this.upload.directUpload(e[0], t)
                    }
                },
                onDrop: function(t) {
                    this.core.callback('drop', t)
                },
                isCallback: function(e) {
                    return 'undefined' != typeof this.opts.callbacks[e] && t.isFunction(this.opts.callbacks[e])
                },
                stopDetect: function() {
                    this.events.stopDetectChanges()
                },
                startDetect: function() {
                    this.events.startDetectChanges()
                }
            }
        },
        file: function() {
            return {
                is: function() {
                    return !(!this.opts.fileUpload || !this.opts.fileUpload && !this.opts.s3)
                },
                show: function() {
                    this.modal.load('file', this.lang.get('file'), 700), this.upload.init('\#redactor\-modal\-file\-upload', this.opts.fileUpload, this.file.insert), t('\#redactor\-filename').val(this.selection.get()
                        .toString()), this.modal.show()
                },
                insert: function(e, i, o) {
                    if ('undefined' != typeof e.error) {
                        return this.modal.close(), void(this).core.callback('fileUploadError', e)
                    };
                    this.file.release(o, i), this.buffer.set(), this.air.collapsed();
                    var r = this.file.text(e),
                        s = t('\<a\ \/\>').attr('href', e.url).text(r),
                        n = 'undefined' == typeof e.id ? '' : e.id,
                        a = 'undefined' == typeof e.s3 ? 'file' : 's3';
                    s.attr('data\-' + a, n), s = t(this.insert.node(s)), this.caret.after(s), this.storage.add({
                        type: a,
                        node: s[0],
                        url: s[0].href,
                        id: n
                    }), null !== i && this.core.callback('fileUpload', s, e)
                },
                release: function(t, e) {
                    e ? (this.marker.remove(), this.insert.nodeToPoint(t, this.marker.get()), this.selection.restore()) : this.modal.close()
                },
                text: function(e) {
                    var i = t('\#redactor\-filename').val();
                    return 'undefined' == typeof i || '' === i ? e.name : i
                }
            }
        },
        focus: function() {
            return {
                start: function() {
                    if (this.core.editor().focus(), 'inline' !== this.opts.type) {
                        var t = this.focus.first();
                        t !== !1 && this.caret.start(t)
                    }
                },
                end: function() {
                    this.core.editor().focus();
                    var t = this.opts.inline ? this.core.editor() : this.focus.last();
                    if (0 !== t.length) {
                        var e = this.focus.lastChild(t);
                        if (this.detect.isWebkit() || e === !1) {
                            var i = this.selection.get(),
                                o = this.selection.range(i);
                            null !== o ? (o.selectNodeContents(t[0]), o.collapse(!1), this.selection.update(i, o)) : this.caret.end(t)
                        } else {
                            this.caret.end(e)
                        }
                    }
                },
                first: function() {
                    var t = this.core.editor().children().first();
                    return 0 !== t.length || 0 !== t[0].length && 'BR' !== t[0].tagName && 'HR' !== t[0].tagName && 3 !== t[0].nodeType ? 'UL' === t[0].tagName || 'OL' === t[0].tagName ? t.find('li').first() : t : !1
                },
                last: function() {
                    return this.core.editor().children().last()
                },
                lastChild: function(t) {
                    var e = t[0].lastChild;
                    return null !== e && this.utils.isInlineTag(e.tagName) ? e : !1
                },
                is: function() {
                    return this.core.editor()[0] === document.activeElement
                }
            }
        },
        image: function() {
            return {
                is: function() {
                    return !(!this.opts.imageUpload || !this.opts.imageUpload && !this.opts.s3)
                },
                show: function() {
                    this.modal.load('image', this.lang.get('image'), 700);
                    this.upload.init('#redactor-modal-image-droparea', this.opts.imageUpload, this.image.insert);
                    this.modal.show();
                },
                insert: function(e, i, o) {
                    var r;
                    if ('undefined' != typeof e.error) {
                        return this.modal.close(), this.events.dropImage = !1, void(this).core.callback('imageUploadError', e, o)
                    };
                    if (this.events.dropImage !== !1) {
                        return r = t(this.events.dropImage), this.core.callback('imageDelete', r[0].src, r), r.attr('src', e.url), this.events.dropImage = !1, void(this).core.callback('imageUpload', r, e)
                    };
                    this.placeholder.hide();
                    var s = t('\<figure\>');
                    r = t('\<img\>'), r.attr('src', e.url);
                    var n = 'undefined' == typeof e.id ? '' : e.id,
                        a = 'undefined' == typeof e.s3 ? 'image' : 's3';
                    r.attr('data\-' + a, n), s.append(r);
                    var l = this.utils.isTag(this.selection.current(), 'pre');
                    if (i) {
                        this.air.collapsed();
                        this.marker.remove();
                        var c = this.insert.nodeToPoint(o, this.marker.get()),
                            d = t(c).next();
                        this.selection.restore();
                        this.buffer.set();
                        'undefined' != typeof d && 0 !== d.length && 'IMG' === d[0].tagName ? (this.core.callback('imageDelete', d[0].src, d), d.closest('figure\,\ p', this.core.editor()[0]).replaceWith(s), this.caret.after(s)) : (l ? t(l).after(s) : this.insert.node(s), this.caret.after(s))
                    } else {
                        this.modal.close();
                        this.buffer.set();
                        this.air.collapsed();
                        l ? t(l).after(s) : this.insert.node(s), this.caret.after(s)
                    };
                    this.events.dropImage = !1, this.storage.add({
                        type: a,
                        node: r[0],
                        url: r[0].src,
                        id: n
                    }), null !== i && this.core.callback('imageUpload', r, e)
                },
                setEditable: function(e) {
                    e.on('dragstart', function(t) {
                        t.preventDefault()
                    }), e.off('click\.redactor\ touchstart\.redactor').on('click\.redactor\ touchstart\.redactor', t.proxy(function(i) {
                        setTimeout(t.proxy(function() {
                            this.image.showEdit(e)
                        }, this), 200)
                    }, this))
                },
                showEdit: function(e) {
                    if (!this.events.imageEditing) {
                        this.observe.image = e;
                        var i = e.closest('a', this['\$editor'][0]);
                        if (this.modal.load('image\-edit', this.lang.get('edit'), 705), this.image.buttonDelete = this.modal.getDeleteButton().text(this.lang.get('delete')), this.image.buttonSave = this.modal.getActionButton().text(this.lang.get('save')), this.image.buttonDelete.on('click', t.proxy(this.image.remove, this)), this.image.buttonSave.on('click', t.proxy(this.image.update, this)), this.opts.imageCaption === !1) {
                            t('\#redactor\-image\-caption').val('').hide().prev().hide()
                        } else {
                            var o = e.next();
                            0 !== o.length && 'FIGCAPTION' === o[0].tagName && t('\#redactor\-image\-caption').val(o.text()).show()
                        };
                        t('\#redactor\-image\-preview').html(t('\<img\ src\=\"' + e.attr('src') + '\"\ style\=\"max\-width\:\ 100\%\;\"\>')), t('\#redactor\-image\-title').val(e.attr('alt'));
                        var r = t('\#redactor\-image\-link');
                        r.attr('href', e.attr('src')), 0 !== i.length && (r.val(i.attr('href')), '_blank' === i.attr('target') && t('\#redactor\-image\-link\-blank').prop('checked', !0)), t('\.redactor\-link\-tooltip').remove(), this.modal.show(), this.detect.isDesktop() && t('\#redactor\-image\-title').focus()
                    }
                },
                update: function() {
                    var e = this.observe.image,
                        i = e.closest('a', this.core.editor()[0]),
                        o = t('\#redactor\-image\-title').val().replace(/(<([^>]+)>)/gi, '');
                    e.attr('alt', o).attr('title', o);
                    var r = t.trim(t('\#redactor\-image\-link').val()).replace(/(<([^>]+)>)/gi, '');
                    if ('' !== r) {
                        var s = '\(\(xn\-\-\)\?\[a\-z0\-9\]\+\(\-\[a\-z0\-9\]\+\)\*\\\.\)\+\[a\-z\]\{2\,\}',
                            n = new RegExp('\^\(http\|ftp\|https\)\:\/\/' + s, 'i'),
                            a = new RegExp('\^' + s, 'i'); - 1 === r.search(n) && 0 === r.search(a) && this.opts.linkProtocol && (r = this.opts.linkProtocol + '\:\/\/' + r);
                        var l = !!t('\#redactor\-image\-link\-blank').prop('checked');
                        if (0 === i.length) {
                            var c = t('\<a\ href\=\"' + r + '\"\>' + this.utils.getOuterHtml(e) + '\<\/a\>');
                            l && c.attr('target', '_blank'), e.replaceWith(c)
                        } else {
                            i.attr('href', r), l ? i.attr('target', '_blank') : i.removeAttr('target')
                        }
                    } else {
                        0 !== i.length && i.replaceWith(this.utils.getOuterHtml(e))
                    };
                    var d = t('\#redactor\-image\-caption').val(),
                        h = e.next();
                    0 !== h.length && 'FIGCAPTION' === h[0].tagName || (h = !1), '' !== d ? h === !1 ? (h = t('\<figcaption\ \/\>').text(d), e.after(h)) : h.text(d) : h !== !1 && h.remove(), this.modal.close(), this.buffer.set()
                },
                remove: function(e, i, o) {
                    i = 'undefined' == typeof i ? t(this.observe.image) : i, 'boolean' != typeof e && this.buffer.set(), this.events.stopDetectChanges();
                    var r = i.closest('a', this.core.editor()[0]),
                        s = i.closest('figure', this.core.editor()[0]),
                        n = i.parent();
                    0 !== t('\#redactor\-image\-box').length && (n = t('\#redactor\-image\-box').parent());
                    var a;
                    0 !== s.length ? (a = s.next(), s.remove()) : 0 !== r.length ? (n = r.parent(), r.remove()) : i.remove(), t('\#redactor\-image\-box').remove(), e !== !1 && (0 !== s.length && 0 !== a.length ? this.caret.start(a) : 0 !== n.length && this.caret.start(n)), 'boolean' != typeof e && this.modal.close(), this.utils.restoreScroll(), this.observe.image = !1, this.events.startDetectChanges(), this.placeholder.enable(), this.code.sync()
                }
            }
        },
        indent: function() {
            return {
                increase: function() {
                    if (this.list.get()) {
                        var e = t(this.selection.current()).closest('li'),
                            i = e.closest('ul\,\ ol'),
                            o = e.closest('li'),
                            r = o.prev();
                        if (0 !== r.length && 'LI' === r[0].tagName) {
                            if (this.buffer.set(), this.utils.isCollapsed()) {
                                var s = i[0].tagName,
                                    n = t('\<' + s + '\ \/\>');
                                this.selection.save(), n.append(e), r.append(n), this.selection.restore()
                            } else {
                                document.execCommand('indent'), this.selection.save(), this.indent.removeEmpty(), this.indent.normalize(), this.selection.restore()
                            }
                        }
                    }
                },
                decrease: function() {
                    if (this.list.get()) {
                        var e = t(this.selection.current()).closest('li');
                        e.closest('ul\,\ ol');
                        this.buffer.set(), document.execCommand('outdent');
                        var i = t(this.selection.current()).closest('li', this.core.editor()[0]);
                        if (this.utils.isCollapsed() && this.indent.repositionItem(i), 0 === i.length) {
                            document.execCommand('formatblock', !1, 'p'), i = t(this.selection.current());
                            var o = i.next();
                            0 !== o.length && 'BR' === o[0].tagName && o.remove()
                        };
                        this.selection.save(), this.indent.removeEmpty(), this.indent.normalize(), this.selection.restore()
                    }
                },
                repositionItem: function(t) {
                    var e = t.prev();
                    if (0 !== e.length && 'LI' !== e[0].tagName) {
                        this.selection.save();
                        var i = t.parents('li', this.core.editor()[0]);
                        i.after(t), this.selection.restore()
                    }
                },
                normalize: function() {
                    this.core.editor().find('li').each(t.proxy(function(e, i) {
                        var o = t(i);
                        o.find(this.opts.inlineTags.join('\,')).each(function() {
                            t(this).removeAttr('style')
                        });
                        var r = o.parent();
                        if (0 !== r.length && 'LI' === r[0].tagName) {
                            return void(r).after(o)
                        };
                        var s = o.next();
                        0 === s.length || 'UL' !== s[0].tagName && 'OL' !== s[0].tagName || o.append(s)
                    }, this))
                },
                removeEmpty: function(e) {
                    var i = this.core.editor().find('ul\,\ ol'),
                        o = this.core.editor().find('li');
                    o.each(t.proxy(function(t, e) {
                        this.indent.removeItemEmpty(e)
                    }, this)), i.each(t.proxy(function(t, e) {
                        this.indent.removeItemEmpty(e)
                    }, this)), o.each(t.proxy(function(t, e) {
                        this.indent.removeItemEmpty(e)
                    }, this))
                },
                removeItemEmpty: function(e) {
                    var i = e.innerHTML.replace(/[\t\s\n]/g, '');
                    i = i.replace(/<span><\/span>/g, ''), '' === i && t(e).remove()
                }
            }
        },
        inline: function() {
            return {
                format: function(t, e, i, o) {
                    if (t = t.toLowerCase(), !this.utils.isCurrentOrParent(['PRE'])) {
                        for (var r = ['b', 'bold', 'i', 'italic', 'underline', 'strikethrough', 'deleted', 'superscript', 'subscript'], s = ['strong', 'strong', 'em', 'em', 'u', 'del', 'del', 'sup', 'sub'], n = 0; n < r.length; n++) {
                            t === r[n] && (t = s[n])
                        };
                        this.placeholder.hide(), this.buffer.set(), this.utils.isCollapsed() ? this.inline.formatCollapsed(t, e, i, o) : this.inline.formatUncollapsed(t, e, i, o)
                    }
                },
                formatUncollapsed: function(e, i, o, r) {
                    var s = this,
                        n = this.inline.inlines(),
                        a = this.selection.current();
                    a && n.push(a), this.selection.save(), 'del' !== e && this.core.editor().find('del').each(function(t, e) {
                        s.utils.replaceToTag(e, 'deline')
                    }), 'u' !== e && this.core.editor().find('u').each(function(t, e) {
                        s.utils.replaceToTag(e, 'inline')
                    }), t.each(n, function() {
                        var t = this.tagName.toLowerCase();
                        if (t === e) {
                            var i = s.utils.replaceToTag(this, 'strike');
                            i.addClass('redactor\-converted')
                        }
                    }), this.selection.restore(), document.execCommand('strikethrough');
                    var l = !0,
                        c = this.selection.parent();
                    c !== !1 && 'STRIKE' === c.tagName || (l = !1), this.selection.save(), 'u' !== e && this.core.editor().find('u').replaceWith(function() {
                        return t(this).contents()
                    }), this.core.editor().find('strike').each(function() {
                        var t = s.utils.replaceToTag(this, e);
                        l && s.inline.setAttr(t, i, o, r)
                    }), this.core.editor().find('\.redactor\-converted').each(function() {
                        var i = this.tagName.toLowerCase();
                        i === e && l !== !1 || t(this).replaceWith(function() {
                            return t(this).contents()
                        }), t(this).removeClass('redactor\-converted')
                    }), 'del' !== e && this.core.editor().find('deline').each(function(t, e) {
                        s.utils.replaceToTag(e, 'del')
                    }), 'u' !== e && this.core.editor().find('inline').each(function(t, e) {
                        s.utils.replaceToTag(e, 'u')
                    }), this.selection.restore()
                },
                inlines: function() {
                    var e = [],
                        i = this.inline.nodes();
                    t.each(i, t.proxy(function(t, i) {
                        this.utils.isInline(i) && e.push(i)
                    }, this));
                    var o = this.selection.inline();
                    return o === !1 && 0 === e.length ? [] : o !== !1 && 0 === e.length ? [o] : e
                },
                nodes: function() {
                    var t = document.getSelection();
                    if (!t.rangeCount || t.isCollapsed || !t.getRangeAt(0).commonAncestorContainer) {
                        return []
                    };
                    var e = t.getRangeAt(0);
                    if (3 === e.commonAncestorContainer.nodeType) {
                        for (var i = [], o = e.commonAncestorContainer; o.parentNode && 1 === o.parentNode.childNodes.length;) {
                            i.push(o.parentNode), o = o.parentNode
                        };
                        return i
                    };
                    return [].filter.call(e.commonAncestorContainer.getElementsByTagName('\*'), function(e) {
                        return 'function' == typeof t.containsNode ? t.containsNode(e, !0) : !0
                    })
                },
                formatCollapsed: function(e, i, o, r) {
                    var s = this.selection.inline();
                    if (s) {
                        var n = s.tagName.toLowerCase();
                        if (n === e) {
                            if (this.utils.isEmpty(s.innerHTML)) {
                                this.caret.after(s), t(s).remove()
                            } else {
                                var a = this.inline.insertBreakpoint(s, n);
                                this.caret.after(a)
                            }
                        } else {
                            0 === t(s).closest(e).length ? this.inline.insertInline(e, i, o, r) : this.caret.start(s)
                        }
                    } else {
                        this.inline.insertInline(e, i, o, r)
                    }
                },
                insertBreakpoint: function(e, i) {
                    var o = document.createElement('span');
                    o.id = 'redactor\-inline\-breakpoint', o = this.insert.node(o);
                    var r = this.utils.isEndOfElement(e),
                        s = this.utils.getOuterHtml(e),
                        n = r ? '' : '\<' + i + '\>';
                    s = s.replace(/<span\sid="redactor-inline-breakpoint">вЂ‹<\/span>/i, '\<\/' + i + '\>' + n);
                    var a = t(s);
                    return t(e).replaceWith(a), '' !== n && this.utils.cloneAttributes(e, a.last()), a.first()
                },
                insertInline: function(t, e, i, o) {
                    var r = document.createElement(t);
                    r = this.inline.setAttr(r, e, i, o), this.insert.node(r), this.caret.start(r)
                },
                setAttr: function(t, e, i, o) {
                    if ('undefined' == typeof e) {
                        return t
                    };
                    var r = 'undefined' == typeof o ? 'toggle' : o;
                    return t = 'class' === e ? this.inline[r + 'Class'](i, t) : 'remove' === r ? this.inline[r + 'Attr'](e, t) : 'removeAll' === r ? this.inline[r + 'Attr'](t) : this.inline[r + 'Attr'](e, i, t)
                },
                getInlines: function(t) {
                    return 'undefined' == typeof t ? this.selection.inlines() : t
                },
                update: function(e, i, o, r) {
                    var s = this.selection.inlines(),
                        n = [],
                        a = this;
                    return t.each(s, function(s, l) {
                        if (t.isArray(e)) {
                            if (-1 === t.inArray(l.tagName.toLowerCase(), e)) {
                                return
                            }
                        } else {
                            if ('\*' !== e && l.tagName.toLowerCase() !== e) {
                                return
                            }
                        };
                        n.push(a.inline.setAttr(l, i, o, r))
                    }), n
                },
                replaceClass: function(e, i) {
                    return t(this.inline.getInlines(i)).removeAttr('class').addClass(e)[0]
                },
                toggleClass: function(e, i) {
                    return t(this.inline.getInlines(i)).toggleClass(e)[0]
                },
                addClass: function(e, i) {
                    return t(this.inline.getInlines(i)).addClass(e)[0]
                },
                removeClass: function(e, i) {
                    return t(this.inline.getInlines(i)).removeClass(e)[0]
                },
                removeAllClass: function(e) {
                    return t(this.inline.getInlines(e)).removeAttr('class')[0]
                },
                replaceAttr: function(e, i, o) {
                    return e = this.inline.removeAttr(i, this.inline.getInlines(e)), t(e).attr(i, o)[0]
                },
                toggleAttr: function(e, i, o) {
                    o = this.inline.getInlines(o);
                    var r = this,
                        s = [];
                    return t.each(o, function(o, n) {
                        var a = t(n);
                        a.attr(e) ? s.push(r.inline.removeAttr(e, n)) : s.push(r.inline.addAttr(e, i, n))
                    }), s
                },
                addAttr: function(e, i, o) {
                    return t(this.inline.getInlines(o)).attr(e, i)[0]
                },
                removeAttr: function(e, i) {
                    return t(this.inline.getInlines(i)).removeAttr(e)[0]
                },
                removeAllAttr: function(e) {
                    e = this.inline.getInlines(e);
                    var i = [];
                    return t.each(e, function(e, o) {
                        'undefined' == typeof o.attributes && i.push(o);
                        for (var r = t(o), s = o.attributes.length, n = 0; s > n; n++) {
                            r.removeAttr(o.attributes[n].name)
                        };
                        i.push(r[0])
                    }), i
                },
                removeFormat: function() {
                    document.execCommand('removeFormat')
                }
            }
        },
        insert: function() {
            return {
                set: function(t) {
                    this.placeholder.hide(), this.code.set(t), this.focus.end(), this.placeholder.enable()
                },
                html: function(e, i) {
                    this.placeholder.hide(), this.core.editor().focus();
                    var o = this.selection.block(),
                        r = this.selection.inline();
                    'undefined' == typeof i && (i = this.clean.getCurrentType(e, !0), e = this.clean.onPaste(e, i, !0)), e = t.parseHTML(e);
                    var s = this.selection.get(),
                        n = this.selection.range(s);
                    if (n.deleteContents(), this.selection.update(s, n), i.lists) {
                        var a = t(e);
                        if (0 !== a.length && ('UL' === a[0].tagName || 'OL' === a[0].tagName)) {
                            return void(this).insert.appendLists(o, a)
                        }
                    };
                    if (i.blocks && o) {
                        if (this.utils.isSelectAll()) {
                            this.core.editor().html(e), this.focus.end()
                        } else {
                            var l = this.utils.breakBlockTag();
                            l === !1 ? this.insert.placeHtml(e) : (e = t(e).append(this.marker.get()), 'start' === l.type ? l['\$block'].before(e) : l['\$block'].after(e), this.selection.restore(), this.core.editor().find('p').each(function() {
                                '' === t.trim(this.innerHTML) && t(this).remove()
                            }))
                        }
                    } else {
                        if (r) {
                            var c = t('\<div\/\>').html(e);
                            c.find(r.tagName.toLowerCase()).each(function() {
                                t(this).contents().unwrap()
                            }), e = c.html()
                        };
                        if (this.utils.isSelectAll()) {
                            var d = t(this.opts.emptyHtml);
                            this.core.editor().html('').append(d), d.html(e), this.caret.end(d)
                        } else {
                            this.insert.placeHtml(e)
                        }
                    };
                    this.utils.disableSelectAll(), this.linkify.format(), i.pre && this.clean.cleanPre()
                },
                text: function(e) {
                    e = e.toString(), e = t.trim(e);
                    var i = document.createElement('div');
                    if (i.innerHTML = e, e = i.textContent || i.innerText, 'undefined' != typeof e) {
                        this.placeholder.hide(), this.core.editor().focus();
                        var o = this.selection.blocks();
                        if (e = e.replace(/\n/g, '\ '), this.utils.isSelectAll()) {
                            var r = t(this.opts.emptyHtml);
                            this.core.editor().html('').append(r), r.html(e), this.caret.end(r)
                        } else {
                            var s = this.selection.get(),
                                n = document.createTextNode(e);
                            if (s.getRangeAt && s.rangeCount) {
                                var a = s.getRangeAt(0);
                                a.deleteContents(), a.insertNode(n), a.setStartAfter(n), a.collapse(!0), this.selection.update(s, a)
                            };
                            o.length > 1 && (t(n).wrap('\<p\>'), this.caret.after(n))
                        };
                        this.utils.disableSelectAll(), this.linkify.format(), this.clean.normalizeCurrentHeading()
                    }
                },
                raw: function(t) {
                    this.placeholder.hide(), this.core.editor().focus();
                    var e = this.selection.get(),
                        i = this.selection.range(e);
                    i.deleteContents();
                    var o = document.createElement('div');
                    o.innerHTML = t;
                    for (var r, s, n = document.createDocumentFragment(); r = o.firstChild;) {
                        s = n.appendChild(r)
                    };
                    i.insertNode(n), s && (i = i.cloneRange(), i.setStartAfter(s), i.collapse(!0), e.removeAllRanges(), e.addRange(i))
                },
                node: function(e, i) {
                    this.placeholder.hide(), 'undefined' != typeof this.start && this.core.editor().focus(), e = e[0] || e;
                    var o = this.selection.block(),
                        r = this.utils.isBlockTag(e.tagName);
                    if (this.utils.isSelectAll()) {
                        r ? this.core.editor().html(e) : this.core.editor().html(t('\<p\>').html(e)), this.code.sync()
                    } else {
                        if (r && o) {
                            var s = this.utils.breakBlockTag();
                            s === !1 ? this.insert.placeNode(e, i) : ('start' === s.type ? s['\$block'].before(e) : s['\$block'].after(e), this.core.editor().find('p\:empty').remove())
                        } else {
                            this.insert.placeNode(e, i)
                        }
                    };
                    return this.utils.disableSelectAll(), this.caret.end(e), e
                },
                appendLists: function(e, i) {
                    var o, r = t(e),
                        s = this.utils.isEmpty(e.innerHTML);
                    if (s || this.utils.isEndOfElement(e)) {
                        o = r, i.find('li').each(function() {
                            o.after(this), o = t(this)
                        }), s && r.remove()
                    } else {
                        if (this.utils.isStartOfElement(e)) {
                            i.find('li').each(function() {
                                r.before(this), o = t(this)
                            })
                        } else {
                            var n = this.selection.extractEndOfNode(e);
                            r.after(t('\<li\>').append(n)), r.append(i), o = i
                        }
                    };
                    this.marker.remove(), o && this.caret.end(o), this.linkify.format()
                },
                placeHtml: function(e) {
                    var i = document.createElement('span');
                    i.id = 'redactor\-insert\-marker', i = this.insert.node(i), t(i).before(e), this.selection.restore(), this.caret.after(i), t(i).remove()
                },
                placeNode: function(t, e) {
                    var i = this.selection.get(),
                        o = this.selection.range(i);
                    e !== !1 && o.deleteContents(), o.insertNode(t), o.collapse(!1), this.selection.update(i, o)
                },
                nodeToPoint: function(e, i) {
                    if (this.placeholder.hide(), i = i[0] || i, this.utils.isEmpty()) {
                        return i = this.utils.isBlock(i) ? i : t('\<p\ \/\>').append(i), this.core.editor().html(i), i
                    };
                    var o, r = e.clientX,
                        s = e.clientY;
                    if (document.caretPositionFromPoint) {
                        var n = document.caretPositionFromPoint(r, s),
                            a = document.getSelection();
                        o = a.getRangeAt(0), o.setStart(n.offsetNode, n.offset), o.collapse(!0), o.insertNode(i)
                    } else {
                        if (document.caretRangeFromPoint) {
                            o = document.caretRangeFromPoint(r, s), o.insertNode(i)
                        } else {
                            if ('undefined' != typeof document.body.createTextRange) {
                                o = document.body.createTextRange(), o.moveToPoint(r, s);
                                var l = o.duplicate();
                                l.moveToPoint(r, s), o.setEndPoint('EndToEnd', l), o.select()
                            }
                        }
                    };
                    return i
                },
                nodeToCaretPositionFromPoint: function(t, e) {
                    this.insert.nodeToPoint(t, e)
                },
                marker: function() {
                    this.marker.insert()
                }
            }
        },
        keydown: function() {
            return {
                init: function(e) {
                    if (!this.rtePaste) {
                        var i = e.which,
                            o = i >= 37 && 40 >= i;
                        this.keydown.ctrl = e.ctrlKey || e.metaKey, this.keydown.parent = this.selection.parent(), this.keydown.current = this.selection.current(), this.keydown.block = this.selection.block(), this.keydown.pre = this.utils.isTag(this.keydown.current, 'pre'), this.keydown.blockquote = this.utils.isTag(this.keydown.current, 'blockquote'), this.keydown.figcaption = this.utils.isTag(this.keydown.current, 'figcaption'), this.keydown.figure = this.utils.isTag(this.keydown.current, 'figure');
                        var r = this.core.callback('keydown', e);
                        if (r === !1) {
                            return e.preventDefault(), !1
                        };
                        if (this.shortcuts.init(e, i), this.keydown.checkEvents(o, i), this.keydown.setupBuffer(e, i), this.utils.isSelectAll() && (i === this.keyCode.ENTER || i === this.keyCode.BACKSPACE || i === this.keyCode.DELETE)) {
                            return e.preventDefault(), void(this).code.set(this.opts.emptyHtml)
                        };
                        if (this.keydown.addArrowsEvent(o), this.keydown.setupSelectAll(e, i), !this.opts.enterKey && i === this.keyCode.ENTER) {
                            e.preventDefault();
                            var s = this.selection.get(),
                                n = this.selection.range(s);
                            return void((n.collapsed || n.deleteContents()))
                        };
                        if (this.opts.enterKey && i === this.keyCode.DOWN && this.keydown.onArrowDown(), this.opts.enterKey && i === this.keyCode.UP && this.keydown.onArrowUp(), ('textarea' === this.opts.type || 'div' === this.opts.type) && this.keydown.current && 3 === this.keydown.current.nodeType && t(this.keydown.parent).hasClass('redactor\-in') && this.keydown.wrapToParagraph(), i === this.keyCode.SPACE && (e.ctrlKey || e.shiftKey)) {
                            return e.preventDefault(), this.keydown.onShiftSpace()
                        };
                        if (i === this.keyCode.ENTER && (e.ctrlKey || e.shiftKey)) {
                            return e.preventDefault(), this.keydown.onShiftEnter(e)
                        };
                        if (i === this.keyCode.ENTER && !e.shiftKey && !e.ctrlKey && !e.metaKey) {
                            return this.keydown.onEnter(e)
                        };
                        if (i === this.keyCode.TAB || e.metaKey && 221 === i || e.metaKey && 219 === i) {
                            return this.keydown.onTab(e, i)
                        };
                        if (i !== this.keyCode.BACKSPACE && i !== this.keyCode.DELETE || this.keydown.onBackspaceAndDeleteBefore(), i === this.keyCode.DELETE) {
                            var a = t(this.keydown.block).next();
                            if (this.utils.isEndOfElement(this.keydown.block) && 0 !== a.length && 'FIGURE' === a[0].tagName) {
                                return a.remove(), !1
                            };
                            var l = this.keydown.block && 'LI' === this.keydown.block.tagName ? this.keydown.block : !1;
                            if (l) {
                                var c = t(this.keydown.block).parents('ul\,\ ol').last(),
                                    d = c.next();
                                if (this.utils.isRedactorParent(c) && this.utils.isEndOfElement(c) && 0 !== d.length && ('UL' === d[0].tagName || 'OL' === d[0].tagName)) {
                                    return e.preventDefault(), c.append(d.contents()), d.remove(), !1
                                }
                            };
                            if (this.utils.isEndOfElement(this.keydown.block) && 0 !== a.length && 'PRE' === a[0].tagName) {
                                return t(this.keydown.block).append(a.text()), a.remove(), !1
                            }
                        };
                        if (i === this.keyCode.DELETE && 0 !== t('\#redactor\-image\-box').length && this.image.remove(), i === this.keyCode.BACKSPACE) {
                            if (this.detect.isFirefox() && this.line.removeOnBackspace(e), this.list.combineAfterAndBefore(this.keydown.block)) {
                                return void(e).preventDefault()
                            };
                            var h = this.selection.block();
                            if (h && 'LI' === h.tagName && this.utils.isCollapsed() && this.utils.isStartOfElement()) {
                                return this.indent.decrease(), void(e).preventDefault()
                            };
                            this.keydown.removeInvisibleSpace(), this.keydown.removeEmptyListInTable(e)
                        };
                        i !== this.keyCode.BACKSPACE && i !== this.keyCode.DELETE || this.keydown.onBackspaceAndDeleteAfter(e)
                    }
                },
                onShiftSpace: function() {
                    return this.buffer.set(), this.insert.raw('\&nbsp\;'), !1
                },
                onShiftEnter: function(t) {
                    return this.buffer.set(), this.keydown.pre ? this.keydown.insertNewLine(t) : this.insert.raw('\<br\>')
                },
                onBackspaceAndDeleteBefore: function() {
                    this.utils.saveScroll()
                },
                onBackspaceAndDeleteAfter: function(e) {
                    setTimeout(t.proxy(function() {
                        this.code.syncFire = !1, this.keydown.removeEmptyLists(), this.core.editor().find('\*\[style\]').not('img\,\ \#redactor\-image\-box\,\ \#redactor\-image\-editter').removeAttr('style'), this.keydown.formatEmpty(e), this.code.syncFire = !0
                    }, this), 1)
                },
                onEnter: function(e) {
                    var i = this.core.callback('enter', e);
                    if (i === !1) {
                        return e.preventDefault(), !1
                    };
                    if (this.keydown.blockquote && this.keydown.exitFromBlockquote(e) === !0) {
                        return !1
                    };
                    if (this.keydown.pre) {
                        return this.keydown.insertNewLine(e)
                    };
                    if (this.keydown.blockquote || this.keydown.figcaption) {
                        return this.keydown.insertBreakLine(e)
                    };
                    if (this.keydown.figure) {
                        setTimeout(t.proxy(function() {
                            this.keydown.replaceToParagraph('FIGURE')
                        }, this), 1)
                    } else {
                        if (this.keydown.block) {
                            if (setTimeout(t.proxy(function() {
                                    this.keydown.replaceToParagraph('DIV')
                                }, this), 1), 'LI' === this.keydown.block.tagName) {
                                var o = this.selection.current(),
                                    r = t(o).closest('li', this['\$editor'][0]),
                                    s = r.parents('ul\,ol', this['\$editor'][0]).last();
                                if (0 !== r.length && this.utils.isEmpty(r.html()) && 0 === s.next().length && this.utils.isEmpty(s.find('li').last().html())) {
                                    s.find('li').last().remove();
                                    var n = t(this.opts.emptyHtml);
                                    return s.after(n), this.caret.start(n), !1
                                }
                            }
                        } else {
                            if (!this.keydown.block) {
                                return this.keydown.insertParagraph(e)
                            }
                        }
                    };
                    setTimeout(t.proxy(function() {
                        var e = this.selection.inline();
                        if (e && this.utils.isEmpty(e.innerHTML)) {
                            var i = this.selection.block();
                            t(e).remove();
                            var o = document.createRange();
                            o.setStart(i, 0);
                            var r = document.createTextNode('\​');
                            o.insertNode(r), o.setStartAfter(r), o.collapse(!0);
                            var s = window.getSelection();
                            s.removeAllRanges(), s.addRange(o)
                        }
                    }, this), 1)
                },
                checkEvents: function(t, e) {
                    t || 'click' !== this.core.getEvent() && 'arrow' !== this.core.getEvent() || (this.core.addEvent(!1), this.keydown.checkKeyEvents(e) && this.buffer.set())
                },
                checkKeyEvents: function(e) {
                    var i = this.keyCode,
                        o = [i.BACKSPACE, i.DELETE, i.ENTER, i.ESC, i.TAB, i.CTRL, i.META, i.ALT, i.SHIFT];
                    return -1 === t.inArray(e, o)
                },
                addArrowsEvent: function(t) {
                    return t ? 'click' === this.core.getEvent() || 'arrow' === this.core.getEvent() ? void(this).core.addEvent(!1) : void(this).core.addEvent('arrow') : void(0)
                },
                setupBuffer: function(t, e) {
                    return this.keydown.ctrl && 90 === e && !t.shiftKey && !t.altKey && this.opts.buffer.length ? (t.preventDefault(), void(this).buffer.undo()) : this.keydown.ctrl && 90 === e && t.shiftKey && !t.altKey && 0 !== this.opts.rebuffer.length ? (t.preventDefault(), void(this).buffer.redo()) : void((this.keydown.ctrl || e !== this.keyCode.SPACE && e !== this.keyCode.BACKSPACE && e !== this.keyCode.DELETE && (e !== this.keyCode.ENTER || t.ctrlKey || t.shiftKey) || this.buffer.set()))
                },
                exitFromBlockquote: function(e) {
                    if (this.utils.isEndOfElement(this.keydown.blockquote)) {
                        var i = this.clean.removeSpacesHard(t(this.keydown.blockquote).html());
                        if (-1 !== i.search(/(<br\s?\/?>){3}$/i)) {
                            e.preventDefault();
                            var o = t(this.keydown.blockquote).children().last().prev();
                            o.prev().filter('br').remove(), o.filter('br').remove(), t(this.keydown.blockquote).children().last().filter('br').remove(), t(this.keydown.blockquote).children().last().filter('span').remove();
                            var r = t(this.opts.emptyHtml);
                            return t(this.keydown.blockquote).after(r), this.caret.start(r), !0
                        }
                    }
                },
                onArrowDown: function() {
                    for (var t = [this.keydown.blockquote, this.keydown.pre, this.keydown.figcaption], e = 0; e < t.length; e++) {
                        if (t[e]) {
                            return this.keydown.insertAfterLastElement(t[e]), !1
                        }
                    }
                },
                onArrowUp: function() {
                    for (var t = [this.keydown.blockquote, this.keydown.pre, this.keydown.figcaption], e = 0; e < t.length; e++) {
                        if (t[e]) {
                            return this.keydown.insertBeforeFirstElement(t[e]), !1
                        }
                    }
                },
                insertAfterLastElement: function(e) {
                    if (this.utils.isEndOfElement(e)) {
                        var i = this.core.editor().contents().last(),
                            o = 'FIGCAPTION' === e.tagName ? t(this.keydown.block).parent().next() : t(this.keydown.block).next();
                        if (0 === o.length) {
                            if (0 === i.length && i[0] !== e) {
                                return void(this).caret.start(i)
                            };
                            var r = t(this.opts.emptyHtml);
                            'FIGCAPTION' === e.tagName ? t(e).parent().after(r) : t(e).after(r), this.caret.start(r)
                        }
                    }
                },
                insertBeforeFirstElement: function(e) {
                    if (this.utils.isStartOfElement() && !(this.core.editor().contents().length > 1 && this.core.editor().contents().first()[0] !== e)) {
                        var i = t(this.opts.emptyHtml);
                        t(e).before(i), this.caret.start(i)
                    }
                },
                onTab: function(t, e) {
                    if (!this.opts.tabKey) {
                        return !0
                    };
                    if (this.utils.isEmpty(this.code.get()) && this.opts.tabAsSpaces === !1) {
                        return !0
                    };
                    t.preventDefault(), this.buffer.set();
                    var i;
                    return this.keydown.pre && !t.shiftKey ? (i = this.opts.preSpaces ? document.createTextNode(Array(this.opts.preSpaces + 1).join('\ ')) : document.createTextNode('\	'), this.insert.node(i)) : this.opts.tabAsSpaces !== !1 ? (i = document.createTextNode(Array(this.opts.tabAsSpaces + 1).join('\ ')), this.insert.node(i)) : t.metaKey && 219 === e ? this.indent.decrease() : t.metaKey && 221 === e ? this.indent.increase() : t.shiftKey ? this.indent.decrease() : this.indent.increase(), !1
                },
                setupSelectAll: function(t, e) {
                    this.keydown.ctrl && 65 === e ? this.utils.enableSelectAll() : e === this.keyCode.LEFT_WIN || this.keydown.ctrl || this.utils.disableSelectAll()
                },
                insertNewLine: function(t) {
                    t.preventDefault();
                    var e = document.createTextNode('\
'),
                        i = this.selection.get(),
                        o = this.selection.range(i);
                    return o.deleteContents(), o.insertNode(e), this.caret.after(e), !1
                },
                insertParagraph: function(t) {
                    t.preventDefault();
                    var e = document.createElement('p');
                    e.innerHTML = this.opts.invisibleSpace;
                    var i = this.selection.get(),
                        o = this.selection.range(i);
                    return o.deleteContents(), o.insertNode(e), this.caret.start(e), !1
                },
                insertBreakLine: function(t) {
                    return this.keydown.insertBreakLineProcessing(t)
                },
                insertDblBreakLine: function(t) {
                    return this.keydown.insertBreakLineProcessing(t, !0)
                },
                insertBreakLineProcessing: function(t, e) {
                    t.stopPropagation();
                    var i = document.createElement('br');
                    if (this.insert.node(i), e === !0) {
                        var o = document.createElement('br');
                        this.insert.node(o)
                    };
                    return !1
                },
                wrapToParagraph: function() {
                    var e = t(this.keydown.current),
                        i = t('\<p\>').append(e.clone());
                    e.replaceWith(i);
                    var o = t(i).next();
                    'undefined' != typeof o[0] && 'BR' === o[0].tagName && o.remove(), this.caret.end(i)
                },
                replaceToParagraph: function(e) {
                    var i = this.selection.block(),
                        o = i.innerHTML.replace(/<br\s?\/?>/gi, '');
                    if (i.tagName === e && this.utils.isEmpty(o) && !t(i).hasClass('redactor\-in')) {
                        var r = document.createElement('p');
                        t(i).replaceWith(r);
                        var s = document.createRange();
                        s.setStart(r, 0);
                        var n = document.createTextNode('\​');
                        s.insertNode(n), s.setStartAfter(n), s.collapse(!0);
                        var a = window.getSelection();
                        return a.removeAllRanges(), a.addRange(s), !1
                    };
                    'P' === i.tagName && t(i).removeAttr('class').removeAttr('style')
                },
                removeInvisibleSpace: function() {
                    var e = t(this.keydown.current);
                    0 === e.text().search(/^\u200B$/g) && e.remove()
                },
                removeEmptyListInTable: function(e) {
                    var i = t(this.keydown.current),
                        o = t(this.keydown.parent),
                        r = i.closest('td', this['\$editor'][0]);
                    if (0 !== r.length && i.closest('li', this['\$editor'][0]) && 1 === o.children('li').length) {
                        if (!this.utils.isEmpty(i.text())) {
                            return
                        };
                        e.preventDefault(), i.remove(), o.remove(), this.caret.start(r)
                    }
                },
                removeEmptyLists: function() {
                    var e = function() {
                        var e = t.trim(this.innerHTML).replace(/\/t\/n/g, '');
                        '' === e && t(this).remove()
                    };
                    this.core.editor().find('li').each(e), this.core.editor().find('ul\,\ ol').each(e)
                },
                formatEmpty: function(e) {
                    var i = t.trim(this.core.editor().html());
                    if (this.utils.isEmpty(i)) {
                        return e.preventDefault(), 'inline' === this.opts.type || 'pre' === this.opts.type ? (this.core.editor().html(this.marker.html()), this.selection.restore()) : (this.core.editor().html(this.opts.emptyHtml), this.focus.start()), !1
                    }
                }
            }
        },
        keyup: function() {
            return {
                init: function(e) {
                    if (!this.rtePaste) {
                        var i = e.which;
                        this.keyup.block = this.selection.block(), this.keyup.current = this.selection.current(), this.keyup.parent = this.selection.parent();
                        var o = this.core.callback('keyup', e);
                        if (o === !1) {
                            return e.preventDefault(), !1
                        };
                        if (i === this.keyCode.ENTER && this.keyup.block && 'FIGURE' === this.keyup.block.tagName) {
                            var r = t(this.keyup.block).prev();
                            if (0 !== r.length && 'FIGURE' === r[0].tagName) {
                                var s = this.utils.replaceToTag(r, 'p');
                                return void(this).caret.start(s)
                            }
                        };
                        if (i === this.keyCode.BACKSPACE || i === this.keyCode.DELETE) {
                            if (this.utils.isSelectAll()) {
                                return void(this).focus.start()
                            };
                            if (this.keyup.block && this.keydown.block && 'FIGURE' === this.keyup.block.tagName && this.utils.isStartOfElement(this.keydown.block)) {
                                e.preventDefault(), this.selection.save(), t(this.keyup.block).find('figcaption').remove(), t(this.keyup.block).find('img').first().remove(), this.utils.replaceToTag(this.keyup.block, 'p');
                                var n = this.marker.find();
                                return t('html\,\ body').animate({
                                    scrollTop: n.position().top + 20
                                }, 500), void(this).selection.restore()
                            };
                            if (this.keyup.block && 'P' === this.keyup.block.tagName) {
                                var a = t(this.keyup.block).find('img').length,
                                    l = t(this.keyup.block).text().replace(/\u200B/g, '');
                                '' === l && 0 !== a && this.utils.replaceToTag(this.keyup.block, 'figure')
                            };
                            this.keyup.block && 'FIGURE' === this.keyup.block.tagName && 0 === t(this.keyup.block).find('img').length && (this.selection.save(), this.utils.replaceToTag(this.keyup.block, 'p'), this.selection.restore())
                        };
                        this.linkify.isKey(i) && this.linkify.format()
                    }
                }
            }
        },
        lang: function() {
            return {
                load: function() {
                    this.opts.curLang = this.opts.langs[this.opts.lang]
                },
                get: function(t) {
                    return 'undefined' != typeof this.opts.curLang[t] ? this.opts.curLang[t] : ''
                }
            }
        },
        line: function() {
            return {
                insert: function() {
                    this.buffer.set(), this.insert.html(this.line.getLineHtml());
                    var t = this.core.editor().find('\#redactor\-hr\-tmp\-id');
                    return t.removeAttr('id'), this.core.callback('insertedLine', t), t
                },
                getLineHtml: function() {
                    var t = '\<hr\ id\=\"redactor\-hr\-tmp\-id\"\ \/\>';
                    return !this.detect.isFirefox() && this.utils.isEmpty() && (t += '\<p\>' + this.opts.emptyHtml + '\<\/p\>'), t
                },
                removeOnBackspace: function(e) {
                    if (this.utils.isCollapsed()) {
                        var i = t(this.selection.block());
                        if (0 !== i.length && this.utils.isStartOfElement(i)) {
                            var o = i.prev();
                            o && 'HR' === o[0].tagName && (e.preventDefault(), o.remove())
                        }
                    }
                }
            }
        },
        link: function() {
            return {
                get: function() {
                    return t(this.selection.inlines('a'))
                },
                is: function() {
                    var e = this.selection.nodes(),
                        i = t(this.selection.current()).closest('a', this.core.editor()[0]);
                    return 0 === i.length || e.length > 1 ? !1 : i
                },
                unlink: function(t) {
                    'undefined' != typeof t && t.preventDefault && t.preventDefault(), this.buffer.set();
                    var e = this.selection.inlines('a');
                    if (0 !== e.length) {
                        var i = this.link.replaceLinksToText(e);
                        this.observe.closeAllTooltip(), this.core.callback('deletedLink', i)
                    }
                },
                insert: function(e, i) {
                    var o = this.link.is();
                    if (i !== !0 && (e = this.link.buildLinkFromObject(o, e), e === !1)) {
                        return !1
                    };
                    if (this.buffer.set(), o === !1) {
                        o = t('\<a\ \/\>'), o = this.link.update(o, e), o = t(this.insert.node(o));
                        var r = o.parent();
                        this.utils.isRedactorParent(r) === !1 && o.wrap('\<p\>'), r.hasClass('redactor\-unlink') && r.replaceWith(function() {
                            return t(this).contents()
                        }), this.caret.after(o), this.core.callback('insertedLink', o)
                    } else {
                        o = this.link.update(o, e), this.caret.after(o)
                    }
                },
                update: function(t, e) {
                    return t.text(e.text), t.attr('href', e.url), this.link.target(t, e.target), t
                },
                target: function(t, e) {
                    return e ? t.attr('target', '_blank') : t.removeAttr('target')
                },
                show: function(e) {
                    'undefined' != typeof e && e.preventDefault && e.preventDefault(), this.observe.closeAllTooltip();
                    var i = this.link.is();
                    this.link.buildModal(i);
                    var o = this.link.buildLinkFromElement(i);
                    o.url = this.link.removeSelfHostFromUrl(o.url), this.link.setModalValues(o), this.modal.show(), this.detect.isDesktop() && t('\#redactor\-link\-url').focus()
                },
                setModalValues: function(e) {
                    t('\#redactor\-link\-blank').prop('checked', e.target), t('\#redactor\-link\-url').val(e.url), t('\#redactor\-link\-url\-text').val(e.text)
                },
                buildModal: function(e) {
                    this.modal.load('link', this.lang.get(e === !1 ? 'link\-insert' : 'link\-edit'), 600);
                    var i = this.modal.getActionButton();
                    i.text(this.lang.get(e === !1 ? 'insert' : 'save')).on('click', t.proxy(this.link.callback, this))
                },
                callback: function() {
                    var t = this.link.buildLinkFromModal();
                    return t === !1 ? !1 : (this.modal.close(), void(this).link.insert(t, !0))
                },
                cleanUrl: function(e) {
                    return 'undefined' == typeof e ? '' : t.trim(e.replace(/[^\W\w\D\d+&\'@#\/%?=~_|!:,.;\(\)]/gi, ''))
                },
                cleanText: function(e) {
                    return 'undefined' == typeof e ? '' : t.trim(e.replace(/(<([^>]+)>)/gi, ''))
                },
                getText: function(t) {
                    return '' === t.text && '' !== t.url ? this.link.truncateUrl(t.url.replace(/<|>/g, '')) : t.text
                },
                isUrl: function(t) {
                    var e = '\(\(xn\-\-\)\?\[\\W\\w\\D\\d\]\+\(\-\[\\W\\w\\D\\d\]\+\)\*\\\.\)\+\[\\W\\w\]\{2\,\}',
                        i = new RegExp('\^\(http\|ftp\|https\)\:\/\/' + e, 'i'),
                        o = new RegExp('\^' + e, 'i'),
                        r = new RegExp('\.\(html\|php\)\$', 'i'),
                        s = new RegExp('\^\/', 'i'),
                        n = new RegExp('\^tel\:\(\.\*\?\)', 'i');
                    return -1 === t.search(i) && -1 !== t.search(o) && (t = 'http\:\/\/' + t), -1 !== t.search(i) || -1 !== t.search(r) || -1 !== t.search(s) || -1 !== t.search(n) ? t : !1
                },
                isMailto: function(t) {
                    return -1 !== t.search('\@') && /(http|ftp|https):\/\//i ['test'](t) === !1
                },
                isEmpty: function(t) {
                    return '' === t.url || '' === t.text && '' === t.url
                },
                truncateUrl: function(t) {
                    return t.length > this.opts.linkSize ? t.substring(0, this.opts.linkSize) + '\.\.\.' : t
                },
                parse: function(t) {
                    return this.link.isMailto(t.url) ? t.url = 'mailto\:' + t.url.replace('mailto\:', '') : 0 !== t.url.search('\#') && (t.url = this.link.isUrl(t.url)), this.link.isEmpty(t) || t.url === !1 ? !1 : t
                },
                buildLinkFromModal: function() {
                    var e = {};
                    return e.url = this.link.cleanUrl(t('\#redactor\-link\-url').val()), e.text = this.link.cleanText(t('\#redactor\-link\-url\-text').val()), e.text = this.link.getText(e), e.target = !!t('\#redactor\-link\-blank').prop('checked'), this.link.parse(e)
                },
                buildLinkFromObject: function(t, e) {
                    return e.url = this.link.cleanUrl(e.url), e.text = 'undefined' == typeof e.text && this.selection.is() ? this.selection.text() : this.link.cleanText(e.text), e.text = this.link.getText(e), e.target = t === !1 ? e.target : this.link.buildTarget(t), this.link.parse(e)
                },
                buildLinkFromElement: function(t) {
                    var e = {
                        url: '',
                        text: this.selection.is() ? this.selection.text() : '',
                        target: !1
                    };
                    return t !== !1 && (e.url = t.attr('href'), e.text = t.text(), e.target = this.link.buildTarget(t)), e
                },
                buildTarget: function(t) {
                    return 'undefined' != typeof t.attr('target') && '_blank' === t.attr('target')
                },
                removeSelfHostFromUrl: function(t) {
                    var e = self.location.href.replace('\#', '').replace(/\/$/i, '');
                    return t.replace(/^\/\#/, '\#').replace(e, '').replace('mailto\:', '')
                },
                replaceLinksToText: function(e) {
                    var i, o = t.each(e, function(e, o) {
                        var r = t(o),
                            s = t('\<span\ class\=\"redactor\-unlink\"\ \/\>').append(r.contents());
                        return r.replaceWith(s), 0 === e && (i = s), r
                    });
                    return 1 === e.length && this.selection.isCollapsed() && this.caret.after(i), o
                }
            }
        },
        linkify: function() {
            return {
                isKey: function(t) {
                    return t === this.keyCode.ENTER || t === this.keyCode.SPACE
                },
                isLink: function(t) {
                    return t.nodeValue.match(this.opts.regexps.linkyoutube) || t.nodeValue.match(this.opts.regexps.linkvimeo) || t.nodeValue.match(this.opts.regexps.linkimage) || t.nodeValue.match(this.opts.regexps.url)
                },
                isFiltered: function(e, i) {
                    return 3 === i.nodeType && '' !== t.trim(i.nodeValue) && !t(i).parent().is('pre') && this.linkify.isLink(i)
                },
                handler: function(e, i) {
                    var o = t(i),
                        r = o.text(),
                        s = r;
                    s = s.match(this.opts.regexps.linkyoutube) || s.match(this.opts.regexps.linkvimeo) ? this.linkify.convertVideoLinks(s) : s.match(this.opts.regexps.linkimage) ? this.linkify.convertImages(s) : this.linkify.convertLinks(s), o.before(r.replace(r, s)).remove()
                },
                format: function() {
                    if (this.opts.linkify && !this.utils.isCurrentOrParent('pre')) {
                        this.core.editor().find('\:not\(iframe\,img\,a\,pre\,\.redactor\-unlink\)').addBack().contents().filter(t.proxy(this.linkify.isFiltered, this)).each(t.proxy(this.linkify.handler, this));
                        var e = this.core.editor().find('\.redactor\-linkify\-object').each(t.proxy(function(e, i) {
                            var o = t(i);
                            return o.removeClass('redactor\-linkify\-object'), '' === o.attr('class') && o.removeAttr('class'), 'DIV' === i.tagName ? this.linkify.breakBlockTag(o, 'video') : 'IMG' === i.tagName ? this.linkify.breakBlockTag(o, 'image') : 'A' === i.tagName && this.core.callback('insertedLink', o), o
                        }, this));
                        setTimeout(t.proxy(function() {
                            this.code.sync(), this.core.callback('linkify', e)
                        }, this), 100)
                    }
                },
                breakBlockTag: function(e, i) {
                    var o = this.utils.breakBlockTag();
                    if (o !== !1) {
                        var r = e;
                        'image' === i && (r = t('\<figure\ \/\>').append(e)), 'start' === o.type ? o['\$block'].before(r) : o['\$block'].after(r), 'image' === i && this.caret.after(r)
                    }
                },
                convertVideoLinks: function(t) {
                    var e = '\<div\ class\=\"' + this.opts.videoContainerClass + '\ redactor\-linkify\-object\"\>\<iframe\ class\=\"redactor\-linkify\-object\"\ width\=\"500\"\ height\=\"281\"\ src\=\"',
                        i = '\"\ frameborder\=\"0\"\ allowfullscreen\>\<\/iframe\>\<\/div\>';
                    return t.match(this.opts.regexps.linkyoutube) && (t = t.replace(this.opts.regexps.linkyoutube, e + '\/\/www\.youtube\.com\/embed\/\$1' + i)), t.match(this.opts.regexps.linkvimeo) && (t = t.replace(this.opts.regexps.linkvimeo, e + '\/\/player\.vimeo\.com\/video\/\$2' + i)), t
                },
                convertImages: function(t) {
                    var e = t.match(this.opts.regexps.linkimage);
                    return e ? t.replace(t, '\<img\ src\=\"' + e + '\"\ class\=\"redactor\-linkify\-object\"\ \/\>') : t
                },
                convertLinks: function(e) {
                    var i = e.match(this.opts.regexps.url);
                    if (!i) {
                        return e
                    };
                    i = t.grep(i, function(e, o) {
                        return t.inArray(e, i) === o
                    });
                    for (var o = i.length, r = 0; o > r; r++) {
                        var s = i[r],
                            n = s,
                            a = null !== s.match(/(https?|ftp):\/\//i) ? '' : 'http\:\/\/';
                        n.length > this.opts.linkSize && (n = n.substring(0, this.opts.linkSize) + '\.\.\.'), -1 === n.search('\%') && (n = decodeURIComponent(n));
                        var l = '\\b'; - 1 !== t.inArray(s.slice(-1), ['\/', '\&', '\=']) && (l = '');
                        var c = new RegExp('\(' + s.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\\$\&') + l + '\)', 'g');
                        e = e.replace(c, '\<a\ href\=\"' + a + t.trim(s) + '\"\ class\=\"redactor\-linkify\-object\"\>' + t.trim(n) + '\<\/a\>')
                    };
                    return e
                }
            }
        },
        list: function() {
            return {
                toggle: function(e) {
                    if (!this.utils.inBlocks(['table', 'td', 'th', 'tr'])) {
                        var i = 'orderedlist' === e || 'ol' === e ? 'OL' : 'UL';
                        e = 'OL' === i ? 'orderedlist' : 'unorderedlist';
                        var o = t(this.selection.current()).parentsUntil('\.redactor\-in', 'ul\,\ ol').first();
                        if (this.placeholder.hide(), this.buffer.set(), 0 !== o.length && o[0].tagName === i && this.utils.isRedactorParent(o)) {
                            return this.selection.save(), o.find('ul\,\ ol').each(function() {
                                var e = t(this).closest('li');
                                t(this).find('li').each(function() {
                                    t(e).after(this)
                                })
                            }), o.find('ul\,\ ol').remove(), o.find('li').each(function() {
                                return t(this).replaceWith(function() {
                                    return t('\<p\ \/\>').append(t(this).contents())
                                })
                            }), o.replaceWith(function() {
                                return t(this).contents()
                            }), void(this).selection.restore()
                        };
                        this.selection.save(), 0 !== o.length && o[0].tagName !== i ? o.each(t.proxy(function(t, e) {
                            this.utils.replaceToTag(e, i)
                        }, this)) : document.execCommand('insert' + e), this.selection.restore();
                        var r = this.list.get();
                        if (!r) {
                            return void((this.selection.block() || document.execCommand('formatblock', !1, 'p')))
                        };
                        r.find('span').replaceWith(function() {
                            return t(this).contents()
                        }), r.find(this.opts.inlineTags.join('\,')).each(function() {
                            t(this).removeAttr('style')
                        });
                        var s = r.parent();
                        this.utils.isRedactorParent(s) && 'LI' !== s[0].tagName && this.utils.isBlock(s) && (this.selection.save(), s.replaceWith(s.contents()), this.selection.restore())
                    }
                },
                get: function() {
                    var e = this.selection.current(),
                        i = t(e).closest('ul\,\ ol', this.core.editor()[0]);
                    return 0 === i.length ? !1 : i
                },
                combineAfterAndBefore: function(e) {
                    var i = t(e).prev(),
                        o = t(e).next(),
                        r = e && 'P' === e.tagName && ('\<br\>' === e.innerHTML || '' === e.innerHTML),
                        s = 1 === i.closest('ol\,\ ul').length && 1 === o.closest('ol\,\ ul').length;
                    return r && s ? (i.children('li').last().append(this.marker.get()), i.append(o.contents()), this.selection.restore(), !0) : !1
                }
            }
        },
        marker: function() {
            return {
                get: function(t) {
                    t = 'undefined' == typeof t ? 1 : t;
                    var e = document.createElement('span');
                    return e.id = 'selection\-marker\-' + t, e.className = 'redactor\-selection\-marker', e.innerHTML = this.opts.invisibleSpace, e
                },
                html: function(t) {
                    return this.utils.getOuterHtml(this.marker.get(t))
                },
                find: function(t) {
                    return t = 'undefined' == typeof t ? 1 : t, this.core.editor().find('span\#selection\-marker\-' + t)
                },
                insert: function() {
                    var t = this.selection.get(),
                        e = this.selection.range(t);
                    this.marker.insertNode(e, this.marker.get(1), !0), e && e.collapsed === !1 && this.marker.insertNode(e, this.marker.get(2), !1)
                },
                remove: function() {
                    this.core.editor().find('\.redactor\-selection\-marker').each(this.marker.iterateRemove)
                },
                insertNode: function(e, i, o) {
                    var r = this.selection.parent();
                    if (null !== e && 0 !== t(r).closest('\.redactor\-in').length) {
                        e = e.cloneRange();
                        try {
                            e.collapse(o), e.insertNode(i)
                        } catch (s) {
                            this.focus.start()
                        }
                    }
                },
                iterateRemove: function(e, i) {
                    var o = t(i),
                        r = o.text().replace(/\u200B/g, '');
                    return '' === r ? o.remove() : o.replaceWith(function() {
                        return t(this).contents()
                    })
                }
            }
        },
        modal: function() {
            return {
                callbacks: {},
                templates: function() {
                    this.opts.modal = {
                        "image-edit": String() + '\<div\ class\=\"redactor\-modal\-tab\ redactor\-group\"\ data\-title\=\"General\"\>\<div\ id\=\"redactor\-image\-preview\"\ class\=\"redactor\-modal\-tab\-side\"\>\<\/div\>\<div\ class\=\"redactor\-modal\-tab\-area\"\>\<section\>\<label\>' + this.lang.get('title') + '\<\/label\>\<input\ type\=\"text\"\ id\=\"redactor\-image\-title\"\ \/\>\<\/section\>\<section\>\<label\>' + this.lang.get('caption') + '\<\/label\>\<input\ type\=\"text\"\ id\=\"redactor\-image\-caption\"\ aria\-label\=\"' + this.lang.get('caption') + '\"\ \/\>\<\/section\>\<section\>\<label\>' + this.lang.get('link') + '\<\/label\>\<input\ type\=\"text\"\ id\=\"redactor\-image\-link\"\ aria\-label\=\"' + this.lang.get('link') + '\"\ \/\>\<\/section\>\<section\>\<label\ class\=\"checkbox\"\>\<input\ type\=\"checkbox\"\ id\=\"redactor\-image\-link\-blank\"\ aria\-label\=\"' + this.lang.get('link\-in\-new\-tab') + '\"\>\ ' + this.lang.get('link\-in\-new\-tab') + '\<\/label\>\<\/section\>\<section\>\<button\ id\=\"redactor\-modal\-button\-action\"\>' + this.lang.get('insert') + '\<\/button\>\<button\ id\=\"redactor\-modal\-button\-cancel\"\>' + this.lang.get('cancel') + '\<\/button\>\<button\ id\=\"redactor\-modal\-button\-delete\"\ class\=\"redactor\-modal\-button\-offset\"\>' + this.lang.get('delete') + '\<\/button\>\<\/section\>\<\/div\>\<\/div\>',
                        image: String() + '\<div\ class\=\"redactor\-modal\-tab\"\ data\-title\=\"Upload\"\>\<section\>\<div\ id\=\"redactor\-modal\-image\-droparea\"\>\<\/div\>\<\/section\>\<\/div\>',
                        file: String() + '\<div\ class\=\"redactor\-modal\-tab\"\ data\-title\=\"Upload\"\>\<section\>\<label\>' + this.lang.get('filename') + '\ \<span\ class\=\"desc\"\>\(' + this.lang.get('optional') + '\)\<\/span\>\<\/label\>\<input\ type\=\"text\"\ id\=\"redactor\-filename\"\ aria\-label\=\"' + this.lang.get('filename') + '\"\ \/\>\<br\>\<br\>\<\/section\>\<section\>\<div\ id\=\"redactor\-modal\-file\-upload\"\>\<\/div\>\<\/section\>\<\/div\>',
                        link: String() + '\<div\ class\=\"redactor\-modal\-tab\"\ data\-title\=\"General\"\>\<section\>\<label\>URL\<\/label\>\<input\ type\=\"url\"\ id\=\"redactor\-link\-url\"\ aria\-label\=\"URL\"\ \/\>\<\/section\>\<section\>\<label\>' + this.lang.get('text') + '\<\/label\>\<input\ type\=\"text\"\ id\=\"redactor\-link\-url\-text\"\ aria\-label\=\"' + this.lang.get('text') + '\"\ \/\>\<\/section\>\<section\>\<label\ class\=\"checkbox\"\>\<input\ type\=\"checkbox\"\ id\=\"redactor\-link\-blank\"\>\ ' + this.lang.get('link\-in\-new\-tab') + '\<\/label\>\<\/section\>\<section\>\<button\ id\=\"redactor\-modal\-button\-action\"\>' + this.lang.get('insert') + '\<\/button\>\<button\ id\=\"redactor\-modal\-button\-cancel\"\>' + this.lang.get('cancel') + '\<\/button\>\<\/section\>\<\/div\>'
                    }, t.extend(this.opts, this.opts.modal)
                },
                addCallback: function(t, e) {
                    this.modal.callbacks[t] = e
                },
                addTemplate: function(t, e) {
                    this.opts.modal[t] = e
                },
                getTemplate: function(t) {
                    return this.opts.modal[t]
                },
                getModal: function() {
                    return this['\$modalBody']
                },
                getActionButton: function() {
                    return this['\$modalBody'].find('\#redactor\-modal\-button\-action')
                },
                getCancelButton: function() {
                    return this['\$modalBody'].find('\#redactor\-modal\-button\-cancel')
                },
                getDeleteButton: function() {
                    return this['\$modalBody'].find('\#redactor\-modal\-button\-delete')
                },
                load: function(t, e, i) {
                    'undefined' != typeof this['\$modalBox'] && this['\$modalBox'].hasClass('open') || (this.modal.templateName = t, this.modal.width = i, this.modal.build(), this.modal.enableEvents(), this.modal.setTitle(e), this.modal.setDraggable(), this.modal.setContent(), 'undefined' != typeof this.modal.callbacks[t] && this.modal.callbacks[t].call(this))
                },
                show: function() {
                    this.detect.isDesktop() || document.activeElement.blur(), this.selection.save(), this.modal.buildTabber(), this.detect.isMobile() && (this.modal.width = '96\%'), setTimeout(t.proxy(this.modal.buildWidth, this), 0), t(window).on('resize\.redactor\-modal', t.proxy(this.modal.buildWidth, this)), this['\$modalOverlay'].redactorAnimation('fadeIn', {
                        duration: 0.25
                    }), this['\$modalBox'].addClass('open').show(), this['\$modal'].redactorAnimation('fadeIn', {
                        timing: 'cubic\-bezier\(0\.175\,\ 0\.885\,\ 0\.320\,\ 1\.105\)'
                    }, t.proxy(function() {
                        this.utils.saveScroll(), this.utils.disableBodyScroll(), this.core.callback('modalOpened', this.modal.templateName, this.$modal), t(document).off('focusin\.modal');
                        var e = this['\$modal'].find('input\[type\=text\]\,input\[type\=url\]\,input\[type\=email\]');
                        e.on('keydown\.redactor\-modal', t.proxy(this.modal.setEnter, this))
                    }, this))
                },
                buildWidth: function() {
                    var e = t(window).height(),
                        i = t(window).width(),
                        o = 'number' == typeof this.modal.width;
                    !o && this.modal.width.match(/%$/) ? this['\$modal'].css({
                        width: this.modal.width,
                        "margin-bottom": '16px'
                    }) : parseInt(this.modal.width) > i ? this['\$modal'].css({
                        width: '96\%',
                        "margin-bottom": '2\%'
                    }) : (o && (this.modal.width += 'px'), this['\$modal'].css({
                        width: this.modal.width,
                        "margin-bottom": '16px'
                    }));
                    var r = this['\$modal'].outerHeight(),
                        s = e / 2 - r / 2 + 'px';
                    this.detect.isMobile() ? s = '2\%' : r > e && (s = '16px'), this['\$modal'].css('margin\-top', s)
                },
                buildTabber: function() {
                    this.modal.tabs = this['\$modal'].find('\.redactor\-modal\-tab'), this.modal.tabs.length < 2 || (this.modal['\$tabsBox'] = t('\<div\ id\=\"redactor\-modal\-tabber\"\ \/\>'), t.each(this.modal.tabs, t.proxy(function(e, i) {
                        var o = t('\<a\ href\=\"\#\"\ rel\=\"' + e + '\"\ \/\>').text(t(i).attr('data\-title'));
                        o.on('click', t.proxy(this.modal.showTab, this)), 0 === e && o.addClass('active'), this.modal['\$tabsBox'].append(o)
                    }, this)), this['\$modalBody'].prepend(this.modal.$tabsBox))
                },
                showTab: function(e) {
                    e.preventDefault();
                    var i = t(e.target),
                        o = i.attr('rel');
                    return this.modal.tabs.hide(), this.modal.tabs.eq(o).show(), t('\#redactor\-modal\-tabber').find('a').removeClass('active'), i.addClass('active'), !1
                },
                setTitle: function(t) {
                    this['\$modalHeader'].html(t)
                },
                setContent: function() {
                    this['\$modalBody'].html(this.modal.getTemplate(this.modal.templateName)), this.modal.getCancelButton().on('mousedown', t.proxy(this.modal.close, this))
                },
                setDraggable: function() {
                    'undefined' != typeof t.fn.draggable && (this['\$modal'].draggable({
                        handle: this['\$modalHeader']
                    }), this['\$modalHeader'].css('cursor', 'move'))
                },
                setEnter: function(t) {
                    13 === t.which && (t.preventDefault(), this.modal.getActionButton().click())
                },
                build: function() {
                    this.modal.buildOverlay(), this['\$modalBox'] = t('\<div\ id\=\"redactor\-modal\-box\"\/\>').hide(), this['\$modal'] = t('\<div\ id\=\"redactor\-modal\"\ role\=\"dialog\"\ \/\>'), this['\$modalHeader'] = t('\<div\ id\=\"redactor\-modal\-header\"\ \/\>'), this['\$modalClose'] = t('\<button\ type\=\"button\"\ id\=\"redactor\-modal\-close\"\ aria\-label\=\"' + this.lang.get('close') + '\"\ \/\>').html('\&times\;'), this['\$modalBody'] = t('\<div\ id\=\"redactor\-modal\-body\"\ \/\>'), this['\$modal'].append(this.$modalHeader), this['\$modal'].append(this.$modalBody), this['\$modal'].append(this.$modalClose), this['\$modalBox'].append(this.$modal), this['\$modalBox'].appendTo(document.body)
                },
                buildOverlay: function() {
                    this['\$modalOverlay'] = t('\<div\ id\=\"redactor\-modal\-overlay\"\>').hide(), t('body').prepend(this.$modalOverlay)
                },
                enableEvents: function() {
                    this['\$modalClose'].on('mousedown\.redactor\-modal', t.proxy(this.modal.close, this)), t(document).on('keyup\.redactor\-modal', t.proxy(this.modal.closeHandler, this)), this.core.editor().on('keyup\.redactor\-modal', t.proxy(this.modal.closeHandler, this)), this['\$modalBox'].on('click\.redactor\-modal', t.proxy(this.modal.close, this))
                },
                disableEvents: function() {
                    this['\$modalClose'].off('mousedown\.redactor\-modal'), t(document).off('keyup\.redactor\-modal'), this.core.editor().off('keyup\.redactor\-modal'), this['\$modalBox'].off('click\§\.redactor\-modal'), t(window).off('resize\.redactor\-modal')
                },
                closeHandler: function(t) {
                    t.which === this.keyCode.ESC && this.modal.close(!1)
                },
                close: function(e) {
                    if (e) {
                        if ('redactor\-modal\-button\-cancel' !== t(e.target).attr('id') && e.target !== this['\$modalClose'][0] && e.target !== this['\$modalBox'][0]) {
                            return
                        };
                        e.preventDefault()
                    };
                    this['\$modalBox'] && (this.selection.restore(), this.modal.disableEvents(), this.utils.enableBodyScroll(), this.utils.restoreScroll(), this['\$modalOverlay'].redactorAnimation('fadeOut', {
                        duration: 0.4
                    }, t.proxy(function() {
                        this['\$modalOverlay'].remove()
                    }, this)), this['\$modal'].redactorAnimation('fadeOut', {
                        duration: 0.3,
                        timing: 'cubic\-bezier\(0\.175\,\ 0\.885\,\ 0\.320\,\ 1\.175\)'
                    }, t.proxy(function() {
                        'undefined' != typeof this['\$modalBox'] && (this['\$modalBox'].remove(), this['\$modalBox'] = void(0)), t(document.body).css('overflow', this.modal.bodyOveflow), this.core.callback('modalClosed', this.modal.templateName)
                    }, this)))
                }
            }
        },
        observe: function() {
            return {
                load: function() {
                    'undefined' == typeof this.opts.destroyed && (this.observe.links(), this.observe.images())
                },
                isCurrent: function(e, i) {
                    return 'undefined' == typeof i && (i = t(this.selection.current())), i.is(e) || i.parents(e).length > 0
                },
                toolbar: function() {
                    this.observe.buttons(), this.observe.dropdowns()
                },
                buttons: function(e, i) {
                    var o = this.selection.current(),
                        r = this.selection.parent();
                    return e !== !1 ? this.button.setInactiveAll() : this.button.setInactiveAll(i), e === !1 && 'html' !== i ? void((-1 !== t.inArray(i, this.opts.activeButtons) && this.button.toggleActive(i))) : void((this.utils.isRedactorParent(o) && (this.utils.isCurrentOrParentHeader() || this.utils.isCurrentOrParent(['table', 'pre', 'blockquote', 'li']) ? this.button.disable('horizontalrule') : this.button.enable('horizontalrule'), t.each(this.opts.activeButtonsStates, t.proxy(function(e, i) {
                        var s = t(r).closest(e, this['\$editor'][0]),
                            n = t(o).closest(e, this['\$editor'][0]);
                        (0 === s.length || this.utils.isRedactorParent(s)) && this.utils.isRedactorParent(n) && (0 === s.length && 0 === n.closest(e, this['\$editor'][0]).length || this.button.setActive(i))
                    }, this)))))
                },
                dropdowns: function() {
                    var e = t('\<div\ \/\>').html(this.selection.html()).find('a').length,
                        i = t(this.selection.current()),
                        o = this.utils.isRedactorParent(i);
                    t.each(this.opts.observe.dropdowns, t.proxy(function(t, r) {
                        var s = r.observe,
                            n = s.element,
                            a = r.item,
                            l = 'undefined' != typeof s.in ? s.in : !1,
                            c = 'undefined' != typeof s.out ? s.out : !1;
                        i.closest(n).length > 0 && o || 'a' === n && 0 !== e ? this.observe.setDropdownProperties(a, l, c) : this.observe.setDropdownProperties(a, c, l)
                    }, this))
                },
                setDropdownProperties: function(t, e, i) {
                    i && 'undefined' != typeof i.attr && this.observe.setDropdownAttr(t, i.attr, !0), 'undefined' != typeof e.attr && this.observe.setDropdownAttr(t, e.attr), 'undefined' != typeof e.title && t.find('span').text(e.title)
                },
                setDropdownAttr: function(e, i, o) {
                    t.each(i, function(t, i) {
                        'class' === t ? o ? e.removeClass(i) : e.addClass(i) : o ? e.removeAttr(t) : e.attr(t, i)
                    })
                },
                addDropdown: function(t, e, i) {
                    'undefined' != typeof i.observe && (i.item = t, this.opts.observe.dropdowns.push(i))
                },
                images: function() {
                    this.core.editor().find('img').each(t.proxy(function(e, i) {
                        var o = t(i);
                        o.closest('a', this['\$editor'][0]).on('click', function(t) {
                            t.preventDefault()
                        }), this.image.setEditable(o)
                    }, this))
                },
                links: function() {
                    this.opts.linkTooltip && this.core.editor().find('a').each(t.proxy(function(e, i) {
                        var o = t(i);
                        o.data('cached') !== !0 && (o.data('cached', !0), o.on('touchstart\.redactor\.' + this.uuid + '\ click\.redactor\.' + this.uuid, t.proxy(this.observe.showTooltip, this)))
                    }, this))
                },
                getTooltipPosition: function(t) {
                    return t.offset()
                },
                showTooltip: function(e) {
                    var i = t(e.target);
                    if ('IMG' !== i[0].tagName && ('A' !== i[0].tagName && (i = i.closest('a', this['\$editor'][0])), 'A' === i[0].tagName)) {
                        var o = i,
                            r = this.observe.getTooltipPosition(o),
                            s = t('\<span\ class\=\"redactor\-link\-tooltip\"\>\<\/span\>'),
                            n = o.attr('href');
                        void(0) === n && (n = ''), n.length > 24 && (n = n.substring(0, 24) + '\.\.\.');
                        var a = t('\<a\ href\=\"' + o.attr('href') + '\"\ target\=\"_blank\"\ \/\>').html(n).addClass('redactor\-link\-tooltip\-action'),
                            l = t('\<a\ href\=\"\#\"\ \/\>').html(this.lang.get('edit')).on('click', t.proxy(this.link.show, this)).addClass('redactor\-link\-tooltip\-action'),
                            c = t('\<a\ href\=\"\#\"\ \/\>').html(this.lang.get('unlink')).on('click', t.proxy(this.link.unlink, this)).addClass('redactor\-link\-tooltip\-action');
                        s.append(a).append('\ \|\ ').append(l).append('\ \|\ ').append(c);
                        var d = parseInt(o.css('line\-height'), 10),
                            h = Math.ceil((e.pageY - r.top) / d),
                            u = r.top + h * d;
                        s.css({
                            top: u + 'px',
                            left: r.left + 'px'
                        }), t('\.redactor\-link\-tooltip').remove(), t('body').append(s), this.core.editor().on('touchstart\.redactor\.' + this.uuid + '\ click\.redactor\.' + this.uuid, t.proxy(this.observe.closeTooltip, this)), t(document).on('touchstart\.redactor\.' + this.uuid + '\ click\.redactor\.' + this.uuid, t.proxy(this.observe.closeTooltip, this))
                    }
                },
                closeAllTooltip: function() {
                    t('\.redactor\-link\-tooltip').remove()
                },
                closeTooltip: function(e) {
                    e = e.originalEvent || e;
                    var i = e.target,
                        o = t(i).closest('a', this['\$editor'][0]);
                    0 !== o.length && 'A' === o[0].tagName && 'A' !== i.tagName || 'A' === i.tagName && this.utils.isRedactorParent(i) || t(i).hasClass('redactor\-link\-tooltip\-action') || (this.observe.closeAllTooltip(), this.core.editor().off('touchstart\.redactor\.' + this.uuid + '\ click\.redactor\.' + this.uuid, t.proxy(this.observe.closeTooltip, this)), t(document).off('touchstart\.redactor\.' + this.uuid + '\ click\.redactor\.' + this.uuid, t.proxy(this.observe.closeTooltip, this)))
                }
            }
        },
        offset: function() {
            return {
                get: function(e) {
                    var i = this.offset.clone(e);
                    if (i === !1) {
                        return 0
                    };
                    var o = document.createElement('div');
                    o.appendChild(i.cloneContents()), o.innerHTML = o.innerHTML.replace(/<img(.*?[^>])>$/gi, 'i');
                    var r = t.trim(t(o).text()).replace(/[\t\n\r\n]/g, '').replace(/\u200B/g, '');
                    return r.length
                },
                clone: function(t) {
                    var e = this.selection.get(),
                        i = this.selection.range(e);
                    if (null === i && 'undefined' == typeof t) {
                        return !1
                    };
                    if (t = 'undefined' == typeof t ? this['\$editor'] : t, t === !1) {
                        return !1
                    };
                    t = t[0] || t;
                    var o = i.cloneRange();
                    return o.selectNodeContents(t), o.setEnd(i.endContainer, i.endOffset), o
                },
                set: function(t, e) {
                    e = 'undefined' == typeof e ? t : e, this.focus.is() || this.focus.start();
                    for (var i, o = this.selection.get(), r = this.selection.range(o), s = 0, n = document.createTreeWalker(this['\$editor'][0], NodeFilter.SHOW_TEXT, null, null); null !== (i = n.nextNode());) {
                        if (s += i.nodeValue.length, s > t && (r.setStart(i, i.nodeValue.length + t - s), t = 1 / 0), s >= e) {
                            r.setEnd(i, i.nodeValue.length + e - s);
                            break
                        }
                    };
                    r.collapse(!1), this.selection.update(o, r)
                }
            }
        },
        paragraphize: function() {
            return {
                load: function(e) {
                    return this.opts.paragraphize === !1 || 'inline' === this.opts.type || 'pre' === this.opts.type ? e : '' === e || '\<p\>\<\/p\>' === e ? this.opts.emptyHtml : (e += '\
', this.paragraphize.safes = [], this.paragraphize.z = 0, e = e.replace(/(<br\s?\/?>){1,}\n?<\/blockquote>/gi, '\<\/blockquote\>'), e = e.replace(/<\/pre>/gi, '\<\/pre\>\
\
'), e = this.paragraphize.getSafes(e), e = e.replace('\<br\>', '\
'), e = this.paragraphize.convert(e), e = this.paragraphize.clear(e), e = this.paragraphize.restoreSafes(e), e = e.replace(new RegExp('\<br\\s\?\/\?\>\
\?\<\(' + this.opts.paragraphizeBlocks.join('\|') + '\)\(\.\*\?\[\^\>\]\)\>', 'gi'), '\<p\>\<br\ \/\>\<\/p\>\
\<\$1\$2\>'), t.trim(e))
                },
                getSafes: function(e) {
                    var i = t('\<div\ \/\>').append(e);
                    return i.find('blockquote\ p').replaceWith(function() {
                        return t(this).append('\<br\ \/\>').contents()
                    }), i.find(this.opts.paragraphizeBlocks.join('\,\ ')).each(t.proxy(function(e, i) {
                        return this.paragraphize.z++, this.paragraphize.safes[this.paragraphize.z] = i.outerHTML, t(i).replaceWith('\
\#\#\#\#\#replace' + this.paragraphize.z + '\#\#\#\#\#\
\
')
                    }, this)), i.html()
                },
                restoreSafes: function(e) {
                    return t.each(this.paragraphize.safes, function(t, i) {
                        i = 'undefined' != typeof i ? i.replace(/\$/g, '\&\#36\;') : i, e = e.replace('\#\#\#\#\#replace' + t + '\#\#\#\#\#', i)
                    }), e
                },
                convert: function(e) {
                    e = e.replace(/\r\n/g, 'xparagraphmarkerz'), e = e.replace(/\n/g, 'xparagraphmarkerz'), e = e.replace(/\r/g, 'xparagraphmarkerz');
                    var i = /\s+/g;
                    e = e.replace(i, '\ '), e = t.trim(e);
                    var o = /xparagraphmarkerzxparagraphmarkerz/gi;
                    e = e.replace(o, '\<\/p\>\<p\>');
                    var r = /xparagraphmarkerz/gi;
                    return e = e.replace(r, '\<br\>'), e = '\<p\>' + e + '\<\/p\>', e = e.replace('\<p\>\<\/p\>', ''), e = e.replace('\
\
\
\
', ''), e = e.replace(/<\/p><p>/g, '\<\/p\>\
\
\
\
\<p\>'), e = e.replace(new RegExp('\<br\\s\?\/\?\>\<\/p\>', 'g'), '\<\/p\>'), e = e.replace(new RegExp('\<p\>\<br\\s\?\/\?\>', 'g'), '\<p\>'), e = e.replace(new RegExp('\<p\>\<br\\s\?\/\?\>', 'g'), '\<p\>'), e = e.replace(new RegExp('\<br\\s\?\/\?\>\<\/p\>', 'g'), '\<\/p\>'), e = e.replace(/<p>&nbsp;<\/p>/gi, ''), e = e.replace(/<p>\s?<br>&nbsp;<\/p>/gi, ''), e = e.replace(/<p>\s?<br>/gi, '\<p\>')
                },
                clear: function(t) {
                    return t = t.replace(/<p>(.*?)#####replace(.*?)#####\s?<\/p>/gi, '\<p\>\$1\<\/p\>\#\#\#\#\#replace\$2\#\#\#\#\#'), t = t.replace(/(<br\s?\/?>){2,}<\/p>/gi, '\<\/p\>'), t = t.replace(new RegExp('\<\/blockquote\>\<\/p\>', 'gi'), '\<\/blockquote\>'), t = t.replace(new RegExp('\<p\>\<\/blockquote\>', 'gi'), '\<\/blockquote\>'), t = t.replace(new RegExp('\<p\>\<blockquote\>', 'gi'), '\<blockquote\>'), t = t.replace(new RegExp('\<blockquote\>\<\/p\>', 'gi'), '\<blockquote\>'), t = t.replace(new RegExp('\<p\>\<p\ ', 'gi'), '\<p\ '), t = t.replace(new RegExp('\<p\>\<p\>', 'gi'), '\<p\>'), t = t.replace(new RegExp('\<\/p\>\<\/p\>', 'gi'), '\<\/p\>'), t = t.replace(new RegExp('\<p\>\\s\?\<\/p\>', 'gi'), ''), t = t.replace(new RegExp('\
\<\/p\>', 'gi'), '\<\/p\>'), t = t.replace(new RegExp('\<p\>\	\?\	\?\
\?\<p\>', 'gi'), '\<p\>'), t = t.replace(new RegExp('\<p\>\	\*\<\/p\>', 'gi'), '')
                }
            }
        },
        paste: function() {
            return {
                init: function(e) {
                    this.rtePaste = !0;
                    var i = !('pre' !== this.opts.type && !this.utils.isCurrentOrParent('pre'));
                    return !this.paste.pre && !this.detect.isMobile() && this.opts.clipboardImageUpload && this.opts.imageUpload && this.paste.detectClipboardUpload(e) ? void((this.detect.isIe() && setTimeout(t.proxy(this.paste.clipboardUpload, this), 100))) : (this.utils.saveScroll(), this.selection.save(), this.paste.createPasteBox(i), t(window).on('scroll\.redactor\-freeze', t.proxy(function() {
                        t(window).scrollTop(this.saveBodyScroll)
                    }, this)), void(setTimeout)(t.proxy(function() {
                        var e = this.paste.getPasteBoxCode(i);
                        this.buffer.set(), this.selection.restore(), this.utils.restoreScroll();
                        var o = this.clean.getCurrentType(e);
                        e = this.clean.onPaste(e, o);
                        var r = this.core.callback('paste', e);
                        e = 'undefined' == typeof r ? e : r, this.paste.insert(e, o), this.rtePaste = !1, i && this.clean.cleanPre(), t(window).off('scroll\.redactor\-freeze')
                    }, this), 1))
                },
                getPasteBoxCode: function(t) {
                    var e = t ? this['\$pasteBox'].val() : this['\$pasteBox'].html();
                    return this['\$pasteBox'].remove(), e
                },
                createPasteBox: function(e) {
                    var i = {
                        position: 'fixed',
                        width: 0,
                        top: 0,
                        left: '\-9999px'
                    };
                    this['\$pasteBox'] = e ? t('\<textarea\>').css(i) : t('\<div\>').attr('contenteditable', 'true').css(i), this.paste.appendPasteBox(), this['\$pasteBox'].focus()
                },
                appendPasteBox: function() {
                    if (this.detect.isIe()) {
                        this.core.box().append(this.$pasteBox)
                    } else {
                        var e = t('\.modal\-body\:visible');
                        e.length > 0 ? e.append(this.$pasteBox) : t('body').append(this.$pasteBox)
                    }
                },
                detectClipboardUpload: function(e) {
                    e = e.originalEvent || e;
                    var i = e.clipboardData;
                    if (this.detect.isIe()) {
                        return !0
                    };
                    if (this.detect.isFirefox()) {
                        return !1
                    };
                    var o = i.types;
                    if (-1 !== o.indexOf('public\.tiff')) {
                        return e.preventDefault(), !1
                    };
                    if (i.items && i.items.length) {
                        var r = i.items[0].getAsFile();
                        if (null === r) {
                            return !1
                        };
                        var s = new FileReader;
                        return s.readAsDataURL(r), s.onload = t.proxy(this.paste.insertFromClipboard, this), !0
                    }
                },
                clipboardUpload: function() {
                    var e = this['\$editor'].find('img');
                    t.each(e, t.proxy(function(e, i) {
                        if (-1 !== i.src.search(/^data\:image/i)) {
                            var o = window.FormData ? new FormData : null;
                            if (window.FormData) {
                                this.buffer.set(), this.upload.direct = !0, this.upload.type = 'image', this.upload.url = this.opts.imageUpload, this.upload.callback = t.proxy(function(e) {
                                    if (this.detect.isIe()) {
                                        t(i).wrap(t('\<figure\ \/\>'))
                                    } else {
                                        var o = t(i).parent();
                                        this.utils.replaceToTag(o, 'figure')
                                    };
                                    i.src = e.filelink, this.core.callback('imageUpload', t(i), e)
                                }, this);
                                var r = this.utils.dataURItoBlob(i.src);
                                o.append('clipboard', 1), o.append(this.opts.imageUploadParam, r), this.progress.show(), this.upload.send(o, !1), this.code.sync()
                            }
                        }
                    }, this))
                },
                insertFromClipboard: function(t) {
                    var e = window.FormData ? new FormData : null;
                    if (window.FormData) {
                        this.buffer.set(), this.upload.direct = !0, this.upload.type = 'image', this.upload.url = this.opts.imageUpload, this.upload.callback = this.image.insert;
                        var i = this.utils.dataURItoBlob(t.target.result);
                        e.append('clipboard', 1), e.append(this.opts.imageUploadParam, i), this.progress.show(), this.upload.send(e, t)
                    }
                },
                insert: function(e, i) {
                    i.pre ? this.insert.raw(e) : i.text ? this.insert.text(e) : this.insert.html(e, i), this.detect.isFirefox() && this.opts.clipboardImageUpload && setTimeout(t.proxy(this.paste.clipboardUpload, this), 100)
                }
            }
        },
        placeholder: function() {
            return {
                enable: function() {
                    setTimeout(t.proxy(function() {
                        return this.placeholder.isEditorEmpty() ? this.placeholder.show() : this.placeholder.hide()
                    }, this), 5)
                },
                show: function() {
                    this.core.editor().addClass('redactor\-placeholder')
                },
                update: function(t) {
                    this.opts.placeholder = t, this.core.editor().attr('placeholder', t)
                },
                hide: function() {
                    this.core.editor().removeClass('redactor\-placeholder')
                },
                is: function() {
                    return this.core.editor().hasClass('redactor\-placeholder')
                },
                init: function() {
                    this.placeholder.enabled() && (this.utils.isEditorRelative() || this.utils.setEditorRelative(), this.placeholder.build(), this.placeholder.buildPosition(), this.placeholder.enable(), this.placeholder.enableEvents())
                },
                enabled: function() {
                    return this.opts.placeholder ? this.core.element().attr('placeholder', this.opts.placeholder) : this.placeholder.isAttr()
                },
                enableEvents: function() {
                    this.core.editor().on('keydown\.redactor\-placeholder\.' + this.uuid, t.proxy(this.placeholder.enable, this))
                },
                disableEvents: function() {
                    this.core.editor().off('\.redactor\-placeholder\.' + this.uuid)
                },
                build: function() {
                    this.core.editor().attr('placeholder', this.core.element().attr('placeholder'))
                },
                buildPosition: function() {
                    var e = t('\<style\ \/\>');
                    e.addClass('redactor\-placeholder\-style\-tag'), e.html('\#' + this.core.id() + '\.redactor\-placeholder\:\:after\ ' + this.placeholder.getPosition()), t('head').append(e)
                },
                getPosition: function() {
                    return '\{\ top\:\ ' + this.core.editor().css('padding\-top') + '\;\ left\:\ ' + this.core.editor().css('padding\-left') + '\;\ \}'
                },
                isEditorEmpty: function() {
                    var e = t.trim(this.core.editor().html()).replace(/[\t\n]/g, ''),
                        i = ['', '\<p\>\​\<\/p\>', '\<p\>\​\<br\>\<\/p\>'];
                    return -1 !== t.inArray(e, i)
                },
                isAttr: function() {
                    return 'undefined' != typeof this.core.element().attr('placeholder') && '' !== this.core.element().attr('placeholder')
                },
                destroy: function() {
                    this.core.editor().removeAttr('placeholder'), this.placeholder.hide(), this.placeholder.disableEvents(), t('\.redactor\-placeholder\-style\-tag').remove()
                }
            }
        },
        progress: function() {
            return {
                $box: null,
                $bar: null,
                target: document.body,
                show: function() {
                    this.progress.is() ? this.progress['\$box'].show() : (this.progress.build(), this.progress['\$box'].redactorAnimation('fadeIn'))
                },
                hide: function() {
                    this.progress.is() && this.progress['\$box'].redactorAnimation('fadeOut', {
                        duration: 0.35
                    }, t.proxy(this.progress.destroy, this))
                },
                update: function(t) {
                    this.progress.show(), this.progress['\$bar'].css('width', t + '\%')
                },
                is: function() {
                    return null !== this.progress['\$box']
                },
                build: function() {
                    this.progress['\$bar'] = t('\<span\ \/\>'), this.progress['\$box'] = t('\<div\ id\=\"redactor\-progress\"\ \/\>'), this.progress['\$box'].append(this.progress.$bar), t(this.progress.target).append(this.progress.$box)
                },
                destroy: function() {
                    this.progress.is() && this.progress['\$box'].remove(), this.progress['\$box'] = null, this.progress['\$bar'] = null
                }
            }
        },
        selection: function() {
            return {
                get: function() {
                    return window.getSelection ? window.getSelection() : document.selection && 'Control' !== document.selection.type ? document.selection : null
                },
                range: function(t) {
                    return 'undefined' == typeof t && (t = this.selection.get()), t.getRangeAt && t.rangeCount ? t.getRangeAt(0) : null
                },
                is: function() {
                    return !this.selection.isCollapsed()
                },
                isRedactor: function() {
                    var e = this.selection.range();
                    if (null !== e) {
                        var i = e.startContainer.parentNode;
                        if (t(i).hasClass('redactor\-in') || 0 !== t(i).parents('\.redactor\-in').length) {
                            return !0
                        }
                    };
                    return !1
                },
                isCollapsed: function() {
                    var t = this.selection.get();
                    return null === t ? !1 : t.isCollapsed
                },
                update: function(t, e) {
                    null !== e && (t.removeAllRanges(), t.addRange(e))
                },
                current: function() {
                    var t = this.selection.get();
                    return null === t ? !1 : t.anchorNode
                },
                parent: function() {
                    var t = this.selection.current();
                    return null === t ? !1 : t.parentNode
                },
                block: function(e) {
                    for (e = e || this.selection.current(); e;) {
                        if (this.utils.isBlockTag(e.tagName)) {
                            return t(e).hasClass('redactor\-in') ? !1 : e
                        };
                        e = e.parentNode
                    };
                    return !1
                },
                inline: function(e) {
                    for (e = e || this.selection.current(); e;) {
                        if (this.utils.isInlineTag(e.tagName)) {
                            return t(e).hasClass('redactor\-in') ? !1 : e
                        };
                        e = e.parentNode
                    };
                    return !1
                },
                element: function(e) {
                    for (e || (e = this.selection.current()); e;) {
                        if (1 === e.nodeType) {
                            return t(e).hasClass('redactor\-in') ? !1 : e
                        };
                        e = e.parentNode
                    };
                    return !1
                },
                prev: function() {
                    var t = this.selection.current();
                    return null === t ? !1 : this.selection.current().previousSibling
                },
                next: function() {
                    var t = this.selection.current();
                    return null === t ? !1 : this.selection.current().nextSibling
                },
                blocks: function(e) {
                    var i = [],
                        o = this.selection.nodes(e);
                    t.each(o, t.proxy(function(t, e) {
                        this.utils.isBlock(e) && i.push(e)
                    }, this));
                    var r = this.selection.block();
                    return 0 === i.length && r === !1 ? [] : 0 === i.length && r !== !1 ? [r] : i
                },
                inlines: function(e) {
                    var i = [],
                        o = this.selection.nodes(e);
                    t.each(o, t.proxy(function(t, e) {
                        this.utils.isInline(e) && i.push(e)
                    }, this));
                    var r = this.selection.inline();
                    return 0 === i.length && r === !1 ? [] : 0 === i.length && r !== !1 ? [r] : i
                },
                nodes: function(e) {
                    var i = 'undefined' == typeof e ? [] : t.isArray(e) ? e : [e],
                        o = this.selection.get(),
                        r = this.selection.range(o);
                    if (this.utils.isCollapsed()) {
                        return [this.selection.current()]
                    };
                    var s = r.startContainer,
                        n = r.endContainer;
                    if (s === n) {
                        return [s]
                    };
                    for (var a = []; s && s !== n;) {
                        a.push(s = this.selection.nextNode(s))
                    };
                    for (s = r.startContainer; s && s !== r.commonAncestorContainer;) {
                        a.unshift(s), s = s.parentNode
                    };
                    var l = [];
                    return t.each(a, function(e, o) {
                        var r = 1 !== o.nodeType ? !1 : o.tagName.toLowerCase();
                        t(o).hasClass('redactor\-script\-tag\,\ redactor\-selection\-marker') || r && 0 !== i.length && -1 === t.inArray(r, i) || l.push(o)
                    }), 0 === l.length ? [] : l
                },
                nextNode: function(t) {
                    if (t.hasChildNodes()) {
                        return t.firstChild
                    };
                    for (; t && !t.nextSibling;) {
                        t = t.parentNode
                    };
                    return t ? t.nextSibling : null
                },
                save: function() {
                    this.marker.insert(), this.savedSel = this.core.editor().html()
                },
                restore: function(t) {
                    var e = this.marker.find(1),
                        i = this.marker.find(2);
                    this.detect.isFirefox() && this.core.editor().focus(), 0 !== e.length && 0 !== i.length ? this.caret.set(e, i) : 0 !== e.length ? this.caret.start(e) : this.core.editor().focus(), t !== !1 && (this.marker.remove(), this.savedSel = !1)
                },
                node: function(e) {
                    t(e).prepend(this.marker.get(1)), t(e).append(this.marker.get(2)), this.selection.restore()
                },
                all: function() {
                    this.core.editor().focus();
                    var t = this.selection.get(),
                        e = this.selection.range(t);
                    e.selectNodeContents(this.core.editor()[0]), this.selection.update(t, e)
                },
                remove: function() {
                    this.selection.get().removeAllRanges()
                },
                replace: function(t) {
                    this.insert.html(t)
                },
                text: function() {
                    return this.selection.get()
                        .toString()
                },
                html: function() {
                    var t = '',
                        e = this.selection.get();
                    if (e.rangeCount) {
                        for (var i = document.createElement('div'), o = e.rangeCount, r = 0; o > r; ++r) {
                            i.appendChild(e.getRangeAt(r).cloneContents())
                        };
                        t = this.clean.onGet(i.innerHTML)
                    };
                    return t
                },
                extractEndOfNode: function(t) {
                    var e = this.selection.get(),
                        i = this.selection.range(e),
                        o = i.cloneRange();
                    return o.selectNodeContents(t), o.setStart(i.endContainer, i.endOffset), o.extractContents()
                },
                removeMarkers: function() {
                    this.marker.remove()
                },
                marker: function(t) {
                    return this.marker.get(t)
                },
                markerHtml: function(t) {
                    return this.marker.html(t)
                }
            }
        },
        shortcuts: function() {
            return {
                hotkeysSpecialKeys: {
                    8: 'backspace',
                    9: 'tab',
                    10: 'return',
                    13: 'return',
                    16: 'shift',
                    17: 'ctrl',
                    18: 'alt',
                    19: 'pause',
                    20: 'capslock',
                    27: 'esc',
                    32: 'space',
                    33: 'pageup',
                    34: 'pagedown',
                    35: 'end',
                    36: 'home',
                    37: 'left',
                    38: 'up',
                    39: 'right',
                    40: 'down',
                    45: 'insert',
                    46: 'del',
                    59: '\;',
                    61: '\=',
                    96: '0',
                    97: '1',
                    98: '2',
                    99: '3',
                    100: '4',
                    101: '5',
                    102: '6',
                    103: '7',
                    104: '8',
                    105: '9',
                    106: '\*',
                    107: '\+',
                    109: '\-',
                    110: '\.',
                    111: '\/',
                    112: 'f1',
                    113: 'f2',
                    114: 'f3',
                    115: 'f4',
                    116: 'f5',
                    117: 'f6',
                    118: 'f7',
                    119: 'f8',
                    120: 'f9',
                    121: 'f10',
                    122: 'f11',
                    123: 'f12',
                    144: 'numlock',
                    145: 'scroll',
                    173: '\-',
                    186: '\;',
                    187: '\=',
                    188: '\,',
                    189: '\-',
                    190: '\.',
                    191: '\/',
                    192: '\`',
                    219: '\[',
                    220: '\\',
                    221: '\]',
                    222: '\''
                },
                hotkeysShiftNums: {
                    "`": '\~',
                    1: '\!',
                    2: '\@',
                    3: '\#',
                    4: '\$',
                    5: '\%',
                    6: '\^',
                    7: '\&',
                    8: '\*',
                    9: '\(',
                    0: '\)',
                    "-": '_',
                    "=": '\+',
                    ";": '\:\ ',
                    "\'": '\"',
                    ",": '\<',
                    ".": '\>',
                    "/": '\?',
                    "\\": '\|'
                },
                init: function(e, i) {
                    return this.opts.shortcuts === !1 ? (!e.ctrlKey && !e.metaKey || 66 !== i && 73 !== i || e.preventDefault(), !1) : void(t).each(this.opts.shortcuts, t.proxy(function(t, i) {
                        this.shortcuts.build(e, t, i)
                    }, this))
                },
                build: function(e, i, o) {
                    for (var r = t.proxy(function() {
                            this.shortcuts.buildHandler(o)
                        }, this), s = i.split('\,'), n = s.length, a = 0; n > a; a++) {
                        'string' == typeof s[a] && this.shortcuts.handler(e, t.trim(s[a]), r)
                    }
                },
                buildHandler: function(t) {
                    var e;
                    '\-1' !== t.func.search(/\./) ? (e = t.func.split('\.'), 'undefined' != typeof this[e[0]] && this[e[0]][e[1]].apply(this, t.params)) : this[t.func].apply(this, t.params)
                },
                handler: function(e, i, o) {
                    i = i.toLowerCase().split('\ ');
                    var r = this.shortcuts.hotkeysSpecialKeys[e.keyCode],
                        s = String.fromCharCode(e.which).toLowerCase(),
                        n = '',
                        a = {};
                    t.each(['alt', 'ctrl', 'meta', 'shift'], function(t, i) {
                        e[i + 'Key'] && r !== i && (n += i + '\+')
                    }), r && (a[n + r] = !0), s && (a[n + s] = !0, a[n + this.shortcuts.hotkeysShiftNums[s]] = !0, 'shift\+' === n && (a[this.shortcuts.hotkeysShiftNums[s]] = !0));
                    for (var l = i.length, c = 0; l > c; c++) {
                        if (a[i[c]]) {
                            return e.preventDefault(), o.apply(this, arguments)
                        }
                    }
                }
            }
        },
        storage: function() {
            return {
                data: [],
                add: function(t) {
                    t.status = !0, t.url = decodeURI(this.link.removeSelfHostFromUrl(t.url)), this.storage.data[t.url] = t
                },
                status: function(t, e) {
                    this.storage.data[decodeURI(t)].status = e
                },
                observe: function() {
                    var e = this,
                        i = this.core.editor().find('\[data\-image\]');
                    i.each(function(i, o) {
                        e.storage.add({
                            type: 'image',
                            node: o,
                            url: o.src,
                            id: t(o).attr('data\-image')
                        })
                    });
                    var o = this.core.editor().find('\[data\-file\]');
                    o.each(function(i, o) {
                        e.storage.add({
                            type: 'file',
                            node: o,
                            url: o.href,
                            id: t(o).attr('data\-file')
                        })
                    });
                    var r = this.core.editor().find('\[data\-s3\]');
                    r.each(function(i, o) {
                        var r = 'IMG' === o.tagName ? o.src : o.href;
                        e.storage.add({
                            type: 's3',
                            node: o,
                            url: r,
                            id: t(o).attr('data\-s3')
                        })
                    })
                },
                changes: function() {
                    for (var t in this.storage.data) {
                        var e = this.storage.data[t],
                            i = 'IMG' === e.node.tagName ? 'src' : 'href',
                            o = this.core.editor().find('\[data\-' + e.type + '\]\[' + i + '\=\"' + e.url + '\"\]');
                        0 === o.length ? this.storage.status(e.url, !1) : this.storage.status(e.url, !0)
                    };
                    return this.storage.data
                }
            }
        },
        toolbar: function() {
            return {
                build: function() {
                    this.button.hideButtons(), this.button.hideButtonsOnMobile(), this['\$toolbar'] = this.toolbar.createContainer(), this.toolbar.append(), this.button['\$toolbar'] = this['\$toolbar'], this.button.setFormatting(), this.button.load(this.$toolbar), this.toolbar.setFixed()
                },
                createContainer: function() {
                    return t('\<ul\>').addClass('redactor\-toolbar').attr({
                        id: 'redactor\-toolbar\-' + this.uuid,
                        role: 'toolbar'
                    })
                },
                append: function() {
                    this.opts.toolbarExternal ? (this['\$toolbar'].addClass('redactor\-toolbar\-external'), t(this.opts.toolbarExternal).html(this.$toolbar)) : 'textarea' === this.opts.type ? this['\$box'].prepend(this.$toolbar) : this['\$element'].before(this.$toolbar)
                },
                setFixed: function() {
                    if (this.opts.toolbarFixed && !this.opts.toolbarExternal) {
                        if (this.opts.toolbarFixedTarget !== document) {
                            var e = t(this.opts.toolbarFixedTarget);
                            this.toolbarOffsetTop = 0 === e.length ? 0 : this.core.box().offset().top - e.offset().top
                        };
                        var i = 0 !== this.core.box().closest('\.modal\-body').length ? 1e3 : 0;
                        setTimeout(t.proxy(function() {
                            if (this.toolbar.observeScroll(!1), this.detect.isDesktop()) {
                                t(this.opts.toolbarFixedTarget).on('scroll\.redactor\.' + this.uuid, t.proxy(this.toolbar.observeScroll, this))
                            } else {
                                var e = this;
                                t(this.opts.toolbarFixedTarget).on('scroll\.redactor\.' + this.uuid, function() {
                                    e.core.toolbar().hide(), clearTimeout(t.data(this, 'scrollCheck')), t.data(this, 'scrollCheck', setTimeout(function() {
                                        e.core.toolbar().show(), e.toolbar.observeScroll()
                                    }, 250))
                                })
                            }
                        }, this), i)
                    }
                },
                getBoxTop: function() {
                    return this.opts.toolbarFixedTarget === document ? this.core.box().offset().top : this.toolbarOffsetTop
                },
                observeScroll: function(e) {
                    var i = 0;
                    e !== !1 && (i = this.opts.toolbarFixedTarget === document ? 20 : 0);
                    var o = t(this.opts.toolbarFixedTarget).scrollTop(),
                        r = this.toolbar.getBoxTop();
                    o !== r && (o + this.opts.toolbarFixedTopOffset + i > r ? this.toolbar.observeScrollEnable(o, r) : this.toolbar.observeScrollDisable())
                },
                observeScrollResize: function() {
                    this['\$toolbar'].css({
                        width: this.core.box().innerWidth(),
                        left: this.core.box().offset().left
                    })
                },
                observeScrollEnable: function(e, i) {
                    if ('undefined' != typeof this.fullscreen && this.fullscreen.isOpened === !1) {
                        return void(this).toolbar.observeScrollDisable()
                    };
                    var o = i + this.core.box().outerHeight() - 32,
                        r = this.core.box().innerWidth(),
                        s = this.detect.isDesktop() ? 'fixed' : 'absolute',
                        n = this.detect.isDesktop() ? this.opts.toolbarFixedTopOffset : t(this.opts.toolbarFixedTarget).scrollTop() - i,
                        a = this.detect.isDesktop() ? this.core.box().offset().left : 0;
                    this.opts.toolbarFixedTarget !== document && (s = 'absolute', n = this.opts.toolbarFixedTopOffset + t(this.opts.toolbarFixedTarget).scrollTop() - i, a = 0), this['\$toolbar'].addClass('toolbar\-fixed\-box'), this['\$toolbar'].css({
                        position: s,
                        width: r,
                        top: n,
                        left: a
                    }), e > o && t('\.redactor\-dropdown\-' + this.uuid + '\:visible').hide(), this.toolbar.setDropdownsFixed(), this['\$toolbar'].css('visibility', o > e ? 'visible' : 'hidden'), t(window).on('resize\.redactor\-toolbar\.' + this.uuid, t.proxy(this.toolbar.observeScrollResize, this))
                },
                observeScrollDisable: function() {
                    this['\$toolbar'].css({
                        position: 'relative',
                        width: 'auto',
                        top: 0,
                        left: 0,
                        visibility: 'visible'
                    }), this.toolbar.unsetDropdownsFixed(), this['\$toolbar'].removeClass('toolbar\-fixed\-box'), t(window).off('resize\.redactor\-toolbar\.' + this.uuid)
                },
                setDropdownsFixed: function() {
                    var t = this.opts.toolbarFixedTarget === document && this.detect.isDesktop() ? 'fixed' : 'absolute';
                    this.toolbar.setDropdownPosition(t)
                },
                unsetDropdownsFixed: function() {
                    this.toolbar.setDropdownPosition('absolute')
                },
                setDropdownPosition: function(e) {
                    var i = this;
                    t('\.redactor\-dropdown\-' + this.uuid).each(function() {
                        var o = t(this),
                            r = i.button.get(o.attr('rel')),
                            s = 'fixed' === e ? i.opts.toolbarFixedTopOffset : r.offset().top;
                        o.css({
                            position: e,
                            top: r.innerHeight() + s + 'px'
                        })
                    })
                }
            }
        },
        upload: function() {
            return {
                init: function(e, i, o) {
                    this.upload.direct = !1, this.upload.callback = o, this.upload.url = i, this.upload['\$el'] = t(e), this.upload['\$droparea'] = t('\<div\ id\=\"redactor\-droparea\"\ \/\>'), this.upload['\$placeholdler'] = t('\<div\ id\=\"redactor\-droparea\-placeholder\"\ \/\>').text(this.lang.get('upload\-label')), this.upload['\$input'] = t('\<input\ type\=\"file\"\ name\=\"file\"\ \/\>'), this.upload['\$placeholdler'].append(this.upload.$input), this.upload['\$droparea'].append(this.upload.$placeholdler), this.upload['\$el'].append(this.upload.$droparea), this.upload['\$droparea'].off('redactor\.upload'), this.upload['\$input'].off('redactor\.upload'), this.upload['\$droparea'].on('dragover\.redactor\.upload', t.proxy(this.upload.onDrag, this)), this.upload['\$droparea'].on('dragleave\.redactor\.upload', t.proxy(this.upload.onDragLeave, this)), this.upload['\$input'].on('change\.redactor\.upload', t.proxy(function(t) {
                        t = t.originalEvent || t, this.upload.traverseFile(this.upload['\$input'][0].files[0], t)
                    }, this)), this.upload['\$droparea'].on('drop\.redactor\.upload', t.proxy(function(t) {
                        t.preventDefault(), this.upload['\$droparea'].removeClass('drag\-hover').addClass('drag\-drop'), this.upload.onDrop(t)
                    }, this))
                },
                directUpload: function(t, e) {
                    this.upload.direct = !0, this.upload.traverseFile(t, e)
                },
                onDrop: function(t) {
                    t = t.originalEvent || t;
                    var e = t.dataTransfer.files;
                    if (this.opts.multipleImageUpload) {
                        for (var i = e.length, o = 0; i > o; o++) {
                            this.upload.traverseFile(e[o], t)
                        }
                    } else {
                        this.upload.traverseFile(e[0], t)
                    }
                },
                traverseFile: function(t, e) {
                    if (this.opts.s3) {
                        return this.upload.setConfig(t), void(this).uploads3.send(t, e)
                    };
                    var i = window.FormData ? new FormData : null;
                    if (window.FormData) {
                        this.upload.setConfig(t);
                        var o = 'image' === this.upload.type ? this.opts.imageUploadParam : this.opts.fileUploadParam;
                        i.append(o, t)
                    };
                    this.progress.show(), this.core.callback('uploadStart', e, i), this.upload.send(i, e)
                },
                setConfig: function(t) {
                    this.upload.getType(t), this.upload.direct && (this.upload.url = 'image' === this.upload.type ? this.opts.imageUpload : this.opts.fileUpload, this.upload.callback = 'image' === this.upload.type ? this.image.insert : this.file.insert)
                },
                getType: function(t) {
                    this.upload.type = -1 === this.opts.imageTypes.indexOf(t.type) ? 'file' : 'image', null === this.opts.imageUpload && null !== this.opts.fileUpload && (this.upload.type = 'file')
                },
                getHiddenFields: function(e, i) {
                    return e === !1 || 'object' != typeof e ? i : (t.each(e, t.proxy(function(e, o) {
                        null !== o && 0 === o.toString().indexOf('\#') && (o = t(o).val()), i.append(e, o)
                    }, this)), i)
                },
                send: function(e, i) {
                    'image' === this.upload.type ? (e = this.utils.appendFields(this.opts.imageUploadFields, e), e = this.utils.appendForms(this.opts.imageUploadForms, e), e = this.upload.getHiddenFields(this.upload.imageFields, e)) : (e = this.utils.appendFields(this.opts.fileUploadFields, e), e = this.utils.appendForms(this.opts.fileUploadForms, e), e = this.upload.getHiddenFields(this.upload.fileFields, e));
                    var o = new XMLHttpRequest;
                    o.open('POST', this.upload.url), o.setRequestHeader('X\-Requested\-With', 'XMLHttpRequest'), o.onreadystatechange = t.proxy(function() {
                        if (4 === o.readyState) {
                            var e = o.responseText;
                            e = e.replace(/^\[/, ''), e = e.replace(/\]$/, '');
                            var r;
                            try {
                                r = 'string' == typeof e ? t.parseJSON(e) : e
                            } catch (s) {
                                r = {
                                    error: !0
                                }
                            };
                            this.progress.hide(), this.upload.direct || this.upload['\$droparea'].removeClass('drag\-drop'), this.upload.callback(r, this.upload.direct, i)
                        }
                    }, this), o.send(e)
                },
                onDrag: function(t) {
                    t.preventDefault(), this.upload['\$droparea'].addClass('drag\-hover')
                },
                onDragLeave: function(t) {
                    t.preventDefault(), this.upload['\$droparea'].removeClass('drag\-hover')
                },
                clearImageFields: function() {
                    this.upload.imageFields = {}
                },
                addImageFields: function(t, e) {
                    this.upload.imageFields[t] = e
                },
                removeImageFields: function(t) {
                    delete this.upload.imageFields[t]
                },
                clearFileFields: function() {
                    this.upload.fileFields = {}
                },
                addFileFields: function(t, e) {
                    this.upload.fileFields[t] = e
                },
                removeFileFields: function(t) {
                    delete this.upload.fileFields[t]
                }
            }
        },
        uploads3: function() {
            return {
                send: function(e, i) {
                    this.uploads3.executeOnSignedUrl(e, t.proxy(function(t) {
                        this.uploads3.sendToS3(e, t, i)
                    }, this))
                },
                executeOnSignedUrl: function(t, e) {
                    var i = new XMLHttpRequest,
                        o = -1 === this.opts.s3.search(/\?/) ? '\?' : '\&';
                    i.open('GET', this.opts.s3 + o + 'name\=' + t.name + '\&type\=' + t.type, !0), i.overrideMimeType && i.overrideMimeType('text\/plain\;\ charset\=x\-user\-defined');
                    var r = this;
                    i.onreadystatechange = function(t) {
                        4 === this.readyState && 200 === this.status && (r.progress.show(), e(decodeURIComponent(this.responseText)))
                    }, i.send()
                },
                createCORSRequest: function(t, e) {
                    var i = new XMLHttpRequest;
                    return 'withCredentials' in i ? i.open(t, e, !0) : 'undefined' != typeof XDomainRequest ? (i = new XDomainRequest, i.open(t, e)) : i = null, i
                },
                sendToS3: function(e, i, o) {
                    var r = this.uploads3.createCORSRequest('PUT', i);
                    r && (r.onload = t.proxy(function() {
                        var t;
                        if (this.progress.hide(), 200 !== r.status) {
                            return t = {
                                error: !0
                            }, void(this).upload.callback(t, this.upload.direct, r)
                        };
                        var e = i.split('\?');
                        if (!e[0]) {
                            return !1
                        };
                        if (this.upload.direct || this.upload['\$droparea'].removeClass('drag\-drop'), t = {
                                url: e[0],
                                id: e[0],
                                s3: !0
                            }, 'file' === this.upload.type) {
                            var s = e[0].split('\/');
                            t.name = s[s.length - 1]
                        };
                        this.upload.callback(t, this.upload.direct, o)
                    }, this), r.onerror = function() {}, r.upload.onprogress = function(t) {}, r.setRequestHeader('Content\-Type', e.type), r.setRequestHeader('x\-amz\-acl', 'public\-read'), r.send(e))
                }
            }
        },
        utils: function() {
            return {
                isEmpty: function(e) {
                    return e = 'undefined' == typeof e ? this.core.editor().html() : e, e = e.replace(/[\u200B-\u200D\uFEFF]/g, ''), e = e.replace(/&nbsp;/gi, ''), e = e.replace(/<\/?br\s?\/?>/g, ''), e = e.replace(/\s/g, ''), e = e.replace(/^<p>[^\W\w\D\d]*?<\/p>$/i, ''), e = e.replace(/<iframe(.*?[^>])>$/i, 'iframe'), e = e.replace(/<source(.*?[^>])>$/i, 'source'), e = e.replace(/<[^\/>][^>]*><\/[^>]+>/gi, ''), e = e.replace(/<[^\/>][^>]*><\/[^>]+>/gi, ''), e = t.trim(e), '' === e
                },
                isElement: function(t) {
                    try {
                        return t instanceof HTMLElement
                    } catch (e) {
                        return 'object' == typeof t && 1 === t.nodeType && 'object' == typeof t.style && 'object' == typeof t.ownerDocument
                    }
                },
                strpos: function(t, e, i) {
                    var o = t.indexOf(e, i);
                    return o >= 0 ? o : !1
                },
                dataURItoBlob: function(t) {
                    var e;
                    e = t.split('\,')[0].indexOf('base64') >= 0 ? atob(t.split('\,')[1]) : unescape(t.split('\,')[1]);
                    for (var i = t.split('\,')[0].split('\:')[1].split('\;')[0], o = new Uint8Array(e.length), r = 0; r < e.length; r++) {
                        o[r] = e.charCodeAt(r)
                    };
                    return new Blob([o], {
                        type: i
                    })
                },
                getOuterHtml: function(e) {
                    return t('\<div\>').append(t(e).eq(0).clone()).html()
                },
                cloneAttributes: function(e, i) {
                    e = e[0] || e, i = t(i);
                    for (var o = e.attributes, r = o.length; r--;) {
                        var s = o[r];
                        i.attr(s.name, s.value)
                    };
                    return i
                },
                breakBlockTag: function() {
                    var e = this.selection.block();
                    if (!e) {
                        return !1
                    };
                    var i = this.utils.isEmpty(e.innerHTML),
                        o = e.tagName.toLowerCase();
                    if ('pre' === o || 'li' === o || 'td' === o || 'th' === o) {
                        return !1
                    };
                    if (!i && this.utils.isStartOfElement(e)) {
                        return {
                            $block: t(e),
                            $next: t(e).next(),
                            type: 'start'
                        }
                    };
                    if (!i && this.utils.isEndOfElement(e)) {
                        return {
                            $block: t(e),
                            $next: t(e).next(),
                            type: 'end'
                        }
                    };
                    var r = this.selection.extractEndOfNode(e),
                        s = t('\<' + o + '\ \/\>').append(r);
                    return s = this.utils.cloneAttributes(e, s), t(e).after(s), {
                        $block: t(e),
                        $next: s,
                        type: 'break'
                    }
                },
                inBlocks: function(e) {
                    e = t.isArray(e) ? e : [e];
                    for (var i = this.selection.blocks(), o = i.length, r = !1, s = 0; o > s; s++) {
                        if (i[s] !== !1) {
                            var n = i[s].tagName.toLowerCase(); - 1 !== t.inArray(n, e) && (r = !0)
                        }
                    };
                    return r
                },
                inInlines: function(e) {
                    e = t.isArray(e) ? e : [e];
                    for (var i = this.selection.inlines(), o = i.length, r = !1, s = 0; o > s; s++) {
                        var n = i[s].tagName.toLowerCase(); - 1 !== t.inArray(n, e) && (r = !0)
                    };
                    return r
                },
                isTag: function(e, i) {
                    var o = t(e).closest(i, this.core.editor()[0]);
                    return 1 === o.length ? o[0] : !1
                },
                isBlock: function(t) {
                    return null === t ? !1 : (t = t[0] || t, t && this.utils.isBlockTag(t.tagName))
                },
                isBlockTag: function(t) {
                    return 'undefined' == typeof t ? !1 : this.reIsBlock.test(t)
                },
                isInline: function(t) {
                    return t = t[0] || t, t && this.utils.isInlineTag(t.tagName)
                },
                isInlineTag: function(t) {
                    return 'undefined' == typeof t ? !1 : this.reIsInline.test(t)
                },
                isRedactorParent: function(e) {
                    return e ? 0 === t(e).parents('\.redactor\-in').length || t(e).hasClass('redactor\-in') ? !1 : e : !1
                },
                isCurrentOrParentHeader: function() {
                    return this.utils.isCurrentOrParent(['H1', 'H2', 'H3', 'H4', 'H5', 'H6'])
                },
                isCurrentOrParent: function(e) {
                    var i = this.selection.parent(),
                        o = this.selection.current();
                    if (t.isArray(e)) {
                        var r = 0;
                        return t.each(e, t.proxy(function(t, e) {
                            this.utils.isCurrentOrParentOne(o, i, e) && r++
                        }, this)), 0 !== r
                    };
                    return this.utils.isCurrentOrParentOne(o, i, e)
                },
                isCurrentOrParentOne: function(t, e, i) {
                    return i = i.toUpperCase(), e && e.tagName === i ? e : t && t.tagName === i ? t : !1
                },
                isEditorRelative: function() {
                    var e = this.core.editor().css('position'),
                        i = ['absolute', 'fixed', 'relative'];
                    return -1 !== t.inArray(i, e)
                },
                setEditorRelative: function() {
                    this.core.editor().addClass('redactor\-relative')
                },
                freezeScroll: function() {
                    this.freezeScrollTop = t(document).scrollTop(), t(document).scrollTop(this.freezeScrollTop)
                },
                unfreezeScroll: function() {
                    'undefined' != typeof this.freezeScrollTop && t(document).scrollTop(this.freezeScrollTop)
                },
                saveScroll: function() {
                    this.tmpScrollTop = t(document).scrollTop()
                },
                restoreScroll: function() {
                    'undefined' != typeof this.tmpScrollTop && t(document).scrollTop(this.tmpScrollTop)
                },
                isStartOfElement: function(t) {
                    return 'undefined' != typeof t || (t = this.selection.block()) ? 0 === this.offset.get(t) : !1
                },
                isEndOfElement: function(e) {
                    if ('undefined' == typeof e && (e = this.selection.block(), !e)) {
                        return !1
                    };
                    var i = t.trim(t(e).text()).replace(/[\t\n\r\n]/g, '').replace(/\u200B/g, ''),
                        o = this.offset.get(e);
                    return o === i.length
                },
                removeEmptyAttr: function(e, i) {
                    var o = t(e);
                    return 'undefined' == typeof o.attr(i) ? !0 : '' === o.attr(i) ? (o.removeAttr(i), !0) : !1
                },
                replaceToTag: function(e, i) {
                    var o;
                    return t(e).replaceWith(function() {
                        o = t('\<' + i + '\ \/\>').append(t(this).contents());
                        for (var e = 0; e < this.attributes.length; e++) {
                            o.attr(this.attributes[e].name, this.attributes[e].value)
                        };
                        return o
                    }), o
                },
                isSelectAll: function() {
                    return this.selectAll
                },
                enableSelectAll: function() {
                    this.selectAll = !0
                },
                disableSelectAll: function() {
                    this.selectAll = !1
                },
                disableBodyScroll: function() {
                    var e = t('html'),
                        i = window.innerWidth;
                    if (!i) {
                        var o = document.documentElement.getBoundingClientRect();
                        i = o.right - Math.abs(o.left)
                    };
                    var r = document.body.clientWidth < i,
                        s = this.utils.measureScrollbar();
                    e.css('overflow', 'hidden'), r && e.css('padding\-right', s)
                },
                measureScrollbar: function() {
                    var e = t('body'),
                        i = document.createElement('div');
                    i.className = 'redactor\-scrollbar\-measure', e.append(i);
                    var o = i.offsetWidth - i.clientWidth;
                    return e[0].removeChild(i), o
                },
                enableBodyScroll: function() {
                    t('html').css({
                        overflow: '',
                        "padding-right": ''
                    }), t('body').remove('redactor\-scrollbar\-measure')
                },
                appendFields: function(e, i) {
                    if (!e) {
                        return i
                    };
                    if ('object' == typeof e) {
                        return t.each(e, function(e, o) {
                            null !== o && 0 === o.toString().indexOf('\#') && (o = t(o).val()), i.append(e, o)
                        }), i
                    };
                    var o = t(e);
                    if (0 === o.length) {
                        return i
                    };
                    return o.each(function() {
                        i.append(t(this).attr('name'), t(this).val())
                    }), i
                },
                appendForms: function(e, i) {
                    if (!e) {
                        return i
                    };
                    var o = t(e);
                    if (0 === o.length) {
                        return i
                    };
                    var r = o.serializeArray();
                    return t.each(r, function(t, e) {
                        i.append(e.name, e.value)
                    }), i
                },
                isCollapsed: function() {
                    return this.selection.isCollapsed()
                },
                isMobile: function() {
                    return this.detect.isMobile()
                },
                isDesktop: function() {
                    return this.detect.isDesktop()
                },
                isPad: function() {
                    return this.detect.isIpad()
                }
            }
        },
        browser: function() {
            return {
                webkit: function() {
                    return this.detect.isWebkit()
                },
                ff: function() {
                    return this.detect.isFirefox()
                },
                ie: function() {
                    return this.detect.isIe()
                }
            }
        }
    }, t(window).on('load\.tools\.redactor', function() {
        t('\[data\-tools\=\"redactor\"\]').redactor()
    }), e.prototype.init.prototype = e.prototype
}(jQuery),
function(t) {
    function e(e, i, o, r) {
        var s = {
            duration: 0.5,
            iterate: 1,
            delay: 0,
            prefix: 'redactor\-',
            timing: 'linear'
        };
        this.animation = i, this.slide = 'slideDown' === this.animation || 'slideUp' === this.animation, this['\$element'] = t(e), this.prefixes = ['', '\-moz\-', '\-o\-animation\-', '\-webkit\-'], this.queue = [], 'function' == typeof o ? (r = o, this.opts = s) : this.opts = t.extend(s, o), this.slide && this['\$element'].height(this['\$element'].height()), this.init(r)
    }
    t.fn.redactorAnimation = function(t, i, o) {
        return this.each(function() {
            new e(this, t, i, o)
        })
    }, e.prototype = {
        init: function(t) {
            this.queue.push(this.animation), this.clean(), 'show' === this.animation ? (this.opts.timing = 'linear', this['\$element'].removeClass('hide').show(), 'function' == typeof t && t(this)) : 'hide' === this.animation ? (this.opts.timing = 'linear', this['\$element'].hide(), 'function' == typeof t && t(this)) : this.animate(t)
        },
        animate: function(e) {
            this['\$element'].addClass('animated').css('display', '').removeClass('hide'), this['\$element'].addClass(this.opts.prefix + this.queue[0]), this.set(this.opts.duration + 's', this.opts.delay + 's', this.opts.iterate, this.opts.timing);
            var i = this.queue.length > 1 ? null : e;
            this.complete('AnimationEnd', t.proxy(function() {
                this['\$element'].hasClass(this.opts.prefix + this.queue[0]) && (this.clean(), this.queue.shift(), this.queue.length && this.animate(e))
            }, this), i)
        },
        set: function(t, e, i, o) {
            for (var r = this.prefixes.length; r--;) {
                this['\$element'].css(this.prefixes[r] + 'animation\-duration', t), this['\$element'].css(this.prefixes[r] + 'animation\-delay', e), this['\$element'].css(this.prefixes[r] + 'animation\-iteration\-count', i), this['\$element'].css(this.prefixes[r] + 'animation\-timing\-function', o)
            }
        },
        clean: function() {
            this['\$element'].removeClass('animated'), this['\$element'].removeClass(this.opts.prefix + this.queue[0]), this.set('', '', '', '')
        },
        complete: function(e, i, o) {
            this['\$element'].one(e.toLowerCase() + '\ webkit' + e + '\ o' + e + '\ MS' + e, t.proxy(function() {
                'function' == typeof i && i(), 'function' == typeof o && o(this);
                var e = ['fadeOut', 'slideUp', 'zoomOut', 'slideOutUp', 'slideOutRight', 'slideOutLeft']; - 1 !== t.inArray(this.animation, e) && this['\$element'].css('display', 'none'), this.slide && this['\$element'].css('height', '')
            }, this))
        }
    }
}(jQuery);
