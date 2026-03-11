
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
var app = (function () {
    'use strict';

    function noop() { }
    function add_location(element, file, line, column, char) {
        element.__svelte_meta = {
            loc: { file, line, column, char }
        };
    }
    function run(fn) {
        return fn();
    }
    function blank_object() {
        return Object.create(null);
    }
    function run_all(fns) {
        fns.forEach(run);
    }
    function is_function(thing) {
        return typeof thing === 'function';
    }
    function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
    }
    function is_empty(obj) {
        return Object.keys(obj).length === 0;
    }
    function null_to_empty(value) {
        return value == null ? '' : value;
    }

    const globals = (typeof window !== 'undefined'
        ? window
        : typeof globalThis !== 'undefined'
            ? globalThis
            : global);
    function append(target, node) {
        target.appendChild(node);
    }
    function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
    }
    function detach(node) {
        if (node.parentNode) {
            node.parentNode.removeChild(node);
        }
    }
    function destroy_each(iterations, detaching) {
        for (let i = 0; i < iterations.length; i += 1) {
            if (iterations[i])
                iterations[i].d(detaching);
        }
    }
    function element(name) {
        return document.createElement(name);
    }
    function text(data) {
        return document.createTextNode(data);
    }
    function space() {
        return text(' ');
    }
    function empty() {
        return text('');
    }
    function listen(node, event, handler, options) {
        node.addEventListener(event, handler, options);
        return () => node.removeEventListener(event, handler, options);
    }
    function attr(node, attribute, value) {
        if (value == null)
            node.removeAttribute(attribute);
        else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    function set_style(node, key, value, important) {
        if (value == null) {
            node.style.removeProperty(key);
        }
        else {
            node.style.setProperty(key, value, important ? 'important' : '');
        }
    }
    function custom_event(type, detail, { bubbles = false, cancelable = false } = {}) {
        const e = document.createEvent('CustomEvent');
        e.initCustomEvent(type, bubbles, cancelable, detail);
        return e;
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
    }
    function get_current_component() {
        if (!current_component)
            throw new Error('Function called outside component initialization');
        return current_component;
    }
    /**
     * The `onMount` function schedules a callback to run as soon as the component has been mounted to the DOM.
     * It must be called during the component's initialisation (but doesn't need to live *inside* the component;
     * it can be called from an external module).
     *
     * `onMount` does not run inside a [server-side component](/docs#run-time-server-side-component-api).
     *
     * https://svelte.dev/docs#run-time-svelte-onmount
     */
    function onMount(fn) {
        get_current_component().$$.on_mount.push(fn);
    }

    const dirty_components = [];
    const binding_callbacks = [];
    let render_callbacks = [];
    const flush_callbacks = [];
    const resolved_promise = /* @__PURE__ */ Promise.resolve();
    let update_scheduled = false;
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }
    // flush() calls callbacks in this order:
    // 1. All beforeUpdate callbacks, in order: parents before children
    // 2. All bind:this callbacks, in reverse order: children before parents.
    // 3. All afterUpdate callbacks, in order: parents before children. EXCEPT
    //    for afterUpdates called during the initial onMount, which are called in
    //    reverse order: children before parents.
    // Since callbacks might update component values, which could trigger another
    // call to flush(), the following steps guard against this:
    // 1. During beforeUpdate, any updated components will be added to the
    //    dirty_components array and will cause a reentrant call to flush(). Because
    //    the flush index is kept outside the function, the reentrant call will pick
    //    up where the earlier call left off and go through all dirty components. The
    //    current_component value is saved and restored so that the reentrant call will
    //    not interfere with the "parent" flush() call.
    // 2. bind:this callbacks cannot trigger new flush() calls.
    // 3. During afterUpdate, any updated components will NOT have their afterUpdate
    //    callback called a second time; the seen_callbacks set, outside the flush()
    //    function, guarantees this behavior.
    const seen_callbacks = new Set();
    let flushidx = 0; // Do *not* move this inside the flush() function
    function flush() {
        // Do not reenter flush while dirty components are updated, as this can
        // result in an infinite loop. Instead, let the inner flush handle it.
        // Reentrancy is ok afterwards for bindings etc.
        if (flushidx !== 0) {
            return;
        }
        const saved_component = current_component;
        do {
            // first, call beforeUpdate functions
            // and update components
            try {
                while (flushidx < dirty_components.length) {
                    const component = dirty_components[flushidx];
                    flushidx++;
                    set_current_component(component);
                    update(component.$$);
                }
            }
            catch (e) {
                // reset dirty state to not end up in a deadlocked state and then rethrow
                dirty_components.length = 0;
                flushidx = 0;
                throw e;
            }
            set_current_component(null);
            dirty_components.length = 0;
            flushidx = 0;
            while (binding_callbacks.length)
                binding_callbacks.pop()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (let i = 0; i < render_callbacks.length; i += 1) {
                const callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                    callback();
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
        seen_callbacks.clear();
        set_current_component(saved_component);
    }
    function update($$) {
        if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
        }
    }
    /**
     * Useful for example to execute remaining `afterUpdate` callbacks before executing `destroy`.
     */
    function flush_render_callbacks(fns) {
        const filtered = [];
        const targets = [];
        render_callbacks.forEach((c) => fns.indexOf(c) === -1 ? filtered.push(c) : targets.push(c));
        targets.forEach((c) => c());
        render_callbacks = filtered;
    }
    const outroing = new Set();
    function transition_in(block, local) {
        if (block && block.i) {
            outroing.delete(block);
            block.i(local);
        }
    }
    function mount_component(component, target, anchor, customElement) {
        const { fragment, after_update } = component.$$;
        fragment && fragment.m(target, anchor);
        if (!customElement) {
            // onMount happens before the initial afterUpdate
            add_render_callback(() => {
                const new_on_destroy = component.$$.on_mount.map(run).filter(is_function);
                // if the component was destroyed immediately
                // it will update the `$$.on_destroy` reference to `null`.
                // the destructured on_destroy may still reference to the old array
                if (component.$$.on_destroy) {
                    component.$$.on_destroy.push(...new_on_destroy);
                }
                else {
                    // Edge case - component was destroyed immediately,
                    // most likely as a result of a binding initialising
                    run_all(new_on_destroy);
                }
                component.$$.on_mount = [];
            });
        }
        after_update.forEach(add_render_callback);
    }
    function destroy_component(component, detaching) {
        const $$ = component.$$;
        if ($$.fragment !== null) {
            flush_render_callbacks($$.after_update);
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
            // preserve final state?)
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
        }
    }
    function make_dirty(component, i) {
        if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
        }
        component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
    }
    function init(component, options, instance, create_fragment, not_equal, props, append_styles, dirty = [-1]) {
        const parent_component = current_component;
        set_current_component(component);
        const $$ = component.$$ = {
            fragment: null,
            ctx: [],
            // state
            props,
            update: noop,
            not_equal,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
            // everything else
            callbacks: blank_object(),
            dirty,
            skip_bound: false,
            root: options.target || parent_component.$$.root
        };
        append_styles && append_styles($$.root);
        let ready = false;
        $$.ctx = instance
            ? instance(component, options.props || {}, (i, ret, ...rest) => {
                const value = rest.length ? rest[0] : ret;
                if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                    if (!$$.skip_bound && $$.bound[i])
                        $$.bound[i](value);
                    if (ready)
                        make_dirty(component, i);
                }
                return ret;
            })
            : [];
        $$.update();
        ready = true;
        run_all($$.before_update);
        // `false` as a special case of no DOM component
        $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
        if (options.target) {
            if (options.hydrate) {
                const nodes = children(options.target);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.l(nodes);
                nodes.forEach(detach);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.c();
            }
            if (options.intro)
                transition_in(component.$$.fragment);
            mount_component(component, options.target, options.anchor, options.customElement);
            flush();
        }
        set_current_component(parent_component);
    }
    /**
     * Base class for Svelte components. Used when dev=false.
     */
    class SvelteComponent {
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            if (!is_function(callback)) {
                return noop;
            }
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set($$props) {
            if (this.$$set && !is_empty($$props)) {
                this.$$.skip_bound = true;
                this.$$set($$props);
                this.$$.skip_bound = false;
            }
        }
    }

    function dispatch_dev(type, detail) {
        document.dispatchEvent(custom_event(type, Object.assign({ version: '3.59.2' }, detail), { bubbles: true }));
    }
    function append_dev(target, node) {
        dispatch_dev('SvelteDOMInsert', { target, node });
        append(target, node);
    }
    function insert_dev(target, node, anchor) {
        dispatch_dev('SvelteDOMInsert', { target, node, anchor });
        insert(target, node, anchor);
    }
    function detach_dev(node) {
        dispatch_dev('SvelteDOMRemove', { node });
        detach(node);
    }
    function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation, has_stop_immediate_propagation) {
        const modifiers = options === true ? ['capture'] : options ? Array.from(Object.keys(options)) : [];
        if (has_prevent_default)
            modifiers.push('preventDefault');
        if (has_stop_propagation)
            modifiers.push('stopPropagation');
        if (has_stop_immediate_propagation)
            modifiers.push('stopImmediatePropagation');
        dispatch_dev('SvelteDOMAddEventListener', { node, event, handler, modifiers });
        const dispose = listen(node, event, handler, options);
        return () => {
            dispatch_dev('SvelteDOMRemoveEventListener', { node, event, handler, modifiers });
            dispose();
        };
    }
    function attr_dev(node, attribute, value) {
        attr(node, attribute, value);
        if (value == null)
            dispatch_dev('SvelteDOMRemoveAttribute', { node, attribute });
        else
            dispatch_dev('SvelteDOMSetAttribute', { node, attribute, value });
    }
    function set_data_dev(text, data) {
        data = '' + data;
        if (text.data === data)
            return;
        dispatch_dev('SvelteDOMSetData', { node: text, data });
        text.data = data;
    }
    function validate_each_argument(arg) {
        if (typeof arg !== 'string' && !(arg && typeof arg === 'object' && 'length' in arg)) {
            let msg = '{#each} only iterates over array-like objects.';
            if (typeof Symbol === 'function' && arg && Symbol.iterator in arg) {
                msg += ' You can use a spread to convert this iterable into an array.';
            }
            throw new Error(msg);
        }
    }
    function validate_slots(name, slot, keys) {
        for (const slot_key of Object.keys(slot)) {
            if (!~keys.indexOf(slot_key)) {
                console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
            }
        }
    }
    /**
     * Base class for Svelte components with some minor dev-enhancements. Used when dev=true.
     */
    class SvelteComponentDev extends SvelteComponent {
        constructor(options) {
            if (!options || (!options.target && !options.$$inline)) {
                throw new Error("'target' is a required option");
            }
            super();
        }
        $destroy() {
            super.$destroy();
            this.$destroy = () => {
                console.warn('Component was already destroyed'); // eslint-disable-line no-console
            };
        }
        $capture_state() { }
        $inject_state() { }
    }

    /* src/App.svelte generated by Svelte v3.59.2 */

    const { console: console_1 } = globals;
    const file = "src/App.svelte";

    function get_each_context(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[36] = list[i];
    	return child_ctx;
    }

    function get_each_context_1(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[39] = list[i];
    	child_ctx[41] = i;
    	return child_ctx;
    }

    // (802:0) {#if report != null}
    function create_if_block_20(ctx) {
    	let h1;
    	let t0_value = getSpellerTitle(/*report*/ ctx[0]) + "";
    	let t0;
    	let t1;
    	let t2;
    	let h20;
    	let t4;
    	let div0;
    	let pre;
    	let t5_value = JSON.stringify(/*report*/ ctx[0].config, null, 2) + "";
    	let t5;
    	let t6;
    	let h21;
    	let t8;
    	let div5;
    	let div1;
    	let h30;
    	let t10;
    	let table0;
    	let tr0;
    	let th0;
    	let t11;
    	let th1;
    	let t13;
    	let th2;
    	let t15;
    	let tr1;
    	let th3;
    	let t16;
    	let br0;
    	let small0;
    	let t18;
    	let td0;
    	let t19_value = /*wordsPerSecond*/ ctx[30](/*report*/ ctx[0].total_time) + "";
    	let t19;
    	let t20;
    	let td1;
    	let t21_value = humanTime(/*report*/ ctx[0].total_time) + "";
    	let t21;
    	let t22;
    	let tr2;
    	let th4;
    	let t23;
    	let br1;
    	let small1;
    	let t25;
    	let td2;
    	let t26_value = /*wordsPerSecond*/ ctx[30](/*totalRuntime*/ ctx[5]) + "";
    	let t26;
    	let t27;
    	let td3;
    	let t28_value = humanTime(/*totalRuntime*/ ctx[5]) + "";
    	let t28;
    	let t29;
    	let tr3;
    	let th5;
    	let t31;
    	let td4;
    	let t33;
    	let td5;
    	let t34_value = humanTimeMillis(/*report*/ ctx[0].summary.average_time) + "";
    	let t34;
    	let t35;
    	let tr4;
    	let th6;
    	let t36;
    	let br2;
    	let small2;
    	let t38;
    	let td6;
    	let t40;
    	let td7;
    	let t41_value = humanTimeMillis(/*report*/ ctx[0].summary.average_time_95pc) + "";
    	let t41;
    	let t42;
    	let div4;
    	let h31;
    	let t44;
    	let div3;
    	let table1;
    	let tr5;
    	let th7;
    	let t45;
    	let br3;
    	let small3;
    	let t47;
    	let td8;
    	let t48_value = (/*report*/ ctx[0].summary.true_positive || 0) + "";
    	let t48;
    	let t49;
    	let td9;

    	let t50_value = (/*report*/ ctx[0].results.length > 0
    	? ((/*report*/ ctx[0].summary.true_positive || 0) / /*report*/ ctx[0].results.length * 100).toFixed(1) + '%'
    	: 'N/A') + "";

    	let t50;
    	let t51;
    	let tr6;
    	let th8;
    	let t52;
    	let br4;
    	let small4;
    	let t54;
    	let td10;
    	let t55_value = (/*report*/ ctx[0].summary.false_negative || 0) + "";
    	let t55;
    	let t56;
    	let td11;

    	let t57_value = (/*report*/ ctx[0].results.length > 0
    	? ((/*report*/ ctx[0].summary.false_negative || 0) / /*report*/ ctx[0].results.length * 100).toFixed(1) + '%'
    	: 'N/A') + "";

    	let t57;
    	let t58;
    	let tr7;
    	let th9;
    	let t59;
    	let br5;
    	let small5;
    	let t61;
    	let td12;
    	let t62_value = (/*report*/ ctx[0].summary.true_negative || 0) + "";
    	let t62;
    	let t63;
    	let td13;

    	let t64_value = (/*report*/ ctx[0].results.length > 0
    	? ((/*report*/ ctx[0].summary.true_negative || 0) / /*report*/ ctx[0].results.length * 100).toFixed(1) + '%'
    	: 'N/A') + "";

    	let t64;
    	let t65;
    	let tr8;
    	let th10;
    	let t66;
    	let br6;
    	let small6;
    	let t68;
    	let td14;
    	let t69_value = (/*report*/ ctx[0].summary.false_accept || 0) + "";
    	let t69;
    	let t70;
    	let td15;

    	let t71_value = (/*report*/ ctx[0].results.length > 0
    	? ((/*report*/ ctx[0].summary.false_accept || 0) / /*report*/ ctx[0].results.length * 100).toFixed(1) + '%'
    	: 'N/A') + "";

    	let t71;
    	let t72;
    	let tr9;
    	let th11;
    	let t74;
    	let td16;
    	let t75_value = /*report*/ ctx[0].results.length + "";
    	let t75;
    	let t76;
    	let td17;
    	let t78;
    	let div2;
    	let ul0;
    	let li0;
    	let strong0;
    	let t80;
    	let t81_value = formatMetric(/*classifierPrecision*/ ctx[26]()) + "";
    	let t81;
    	let t82;
    	let small7;
    	let t84;
    	let li1;
    	let strong1;
    	let t86;
    	let t87_value = formatMetric(/*classifierRecall*/ ctx[27]()) + "";
    	let t87;
    	let t88;
    	let small8;
    	let t90;
    	let li2;
    	let strong2;
    	let t92;
    	let t93_value = formatMetric(/*classifierAccuracy*/ ctx[28]()) + "";
    	let t93;
    	let t94;
    	let small9;
    	let t96;
    	let li3;
    	let strong3;
    	let t98;
    	let t99_value = formatMetric(/*classifierFScore*/ ctx[29]()) + "";
    	let t99;
    	let t100;
    	let small10;
    	let t102;
    	let h22;
    	let t104;
    	let p;
    	let em;
    	let t105;
    	let t106_value = (/*report*/ ctx[0].summary.true_positive || 0) + "";
    	let t106;
    	let t107;
    	let t108;
    	let div8;
    	let div6;
    	let table2;
    	let tr10;
    	let th12;
    	let t110;
    	let td18;
    	let t112;
    	let td19;
    	let t115;
    	let tr11;
    	let th13;
    	let t117;
    	let td20;
    	let t119;
    	let td21;
    	let t122;
    	let tr12;
    	let th14;
    	let t124;
    	let td22;
    	let t126;
    	let td23;
    	let t129;
    	let tr13;
    	let th15;
    	let t131;
    	let td24;
    	let t133;
    	let td25;
    	let t136;
    	let tr14;
    	let th16;
    	let t138;
    	let td26;
    	let t140;
    	let td27;
    	let t143;
    	let ul1;
    	let t144;
    	let t145;
    	let div7;
    	let ul2;
    	let li4;
    	let strong4;
    	let t147;
    	let t148_value = /*precision*/ ctx[22]() + "";
    	let t148;
    	let t149;
    	let small11;
    	let t151;
    	let li5;
    	let strong5;
    	let t153;
    	let t154_value = /*recall*/ ctx[23]() + "";
    	let t154;
    	let t155;
    	let small12;
    	let t157;
    	let li6;
    	let strong6;
    	let t159;
    	let t160_value = /*accuracy*/ ctx[24]() + "";
    	let t160;
    	let t161;
    	let small13;
    	let t163;
    	let li7;
    	let strong7;
    	let t165;
    	let t166_value = /*fScore*/ ctx[25]() + "";
    	let t166;
    	let t167;
    	let small14;
    	let if_block0 = /*report*/ ctx[0].summary && /*report*/ ctx[0].summary.average_position_of_correct !== undefined && create_if_block_22(ctx);
    	let if_block1 = /*report*/ ctx[0].summary && /*report*/ ctx[0].summary.average_suggestions_for_correct !== undefined && create_if_block_21(ctx);

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			t0 = text(t0_value);
    			t1 = text(" - Accuracy Report");
    			t2 = space();
    			h20 = element("h2");
    			h20.textContent = "Speller Configuration";
    			t4 = space();
    			div0 = element("div");
    			pre = element("pre");
    			t5 = text(t5_value);
    			t6 = space();
    			h21 = element("h2");
    			h21.textContent = "Performance Statistics";
    			t8 = space();
    			div5 = element("div");
    			div1 = element("div");
    			h30 = element("h3");
    			h30.textContent = "Runtime";
    			t10 = space();
    			table0 = element("table");
    			tr0 = element("tr");
    			th0 = element("th");
    			t11 = space();
    			th1 = element("th");
    			th1.textContent = "Words per second";
    			t13 = space();
    			th2 = element("th");
    			th2.textContent = "Total runtime";
    			t15 = space();
    			tr1 = element("tr");
    			th3 = element("th");
    			t16 = text("Real");
    			br0 = element("br");
    			small0 = element("small");
    			small0.textContent = "(clock time, parallelised processing)";
    			t18 = space();
    			td0 = element("td");
    			t19 = text(t19_value);
    			t20 = space();
    			td1 = element("td");
    			t21 = text(t21_value);
    			t22 = space();
    			tr2 = element("tr");
    			th4 = element("th");
    			t23 = text("CPU");
    			br1 = element("br");
    			small1 = element("small");
    			small1.textContent = "(estimated serial processing time)";
    			t25 = space();
    			td2 = element("td");
    			t26 = text(t26_value);
    			t27 = space();
    			td3 = element("td");
    			t28 = text(t28_value);
    			t29 = space();
    			tr3 = element("tr");
    			th5 = element("th");
    			th5.textContent = "Average per word";
    			t31 = space();
    			td4 = element("td");
    			td4.textContent = "-";
    			t33 = space();
    			td5 = element("td");
    			t34 = text(t34_value);
    			t35 = space();
    			tr4 = element("tr");
    			th6 = element("th");
    			t36 = text("Average per word (95%)");
    			br2 = element("br");
    			small2 = element("small");
    			small2.textContent = "(excluding slowest 5%)";
    			t38 = space();
    			td6 = element("td");
    			td6.textContent = "-";
    			t40 = space();
    			td7 = element("td");
    			t41 = text(t41_value);
    			t42 = space();
    			div4 = element("div");
    			h31 = element("h3");
    			h31.textContent = "Spell Checker Classification";
    			t44 = space();
    			div3 = element("div");
    			table1 = element("table");
    			tr5 = element("tr");
    			th7 = element("th");
    			t45 = text("True positive");
    			br3 = element("br");
    			small3 = element("small");
    			small3.textContent = "(correctly flagged)";
    			t47 = space();
    			td8 = element("td");
    			t48 = text(t48_value);
    			t49 = space();
    			td9 = element("td");
    			t50 = text(t50_value);
    			t51 = space();
    			tr6 = element("tr");
    			th8 = element("th");
    			t52 = text("False negative");
    			br4 = element("br");
    			small4 = element("small");
    			small4.textContent = "(incorrectly accepted)";
    			t54 = space();
    			td10 = element("td");
    			t55 = text(t55_value);
    			t56 = space();
    			td11 = element("td");
    			t57 = text(t57_value);
    			t58 = space();
    			tr7 = element("tr");
    			th9 = element("th");
    			t59 = text("True negative");
    			br5 = element("br");
    			small5 = element("small");
    			small5.textContent = "(correctly accepted)";
    			t61 = space();
    			td12 = element("td");
    			t62 = text(t62_value);
    			t63 = space();
    			td13 = element("td");
    			t64 = text(t64_value);
    			t65 = space();
    			tr8 = element("tr");
    			th10 = element("th");
    			t66 = text("False positive");
    			br6 = element("br");
    			small6 = element("small");
    			small6.textContent = "(incorrectly flagged)";
    			t68 = space();
    			td14 = element("td");
    			t69 = text(t69_value);
    			t70 = space();
    			td15 = element("td");
    			t71 = text(t71_value);
    			t72 = space();
    			tr9 = element("tr");
    			th11 = element("th");
    			th11.textContent = "Total words";
    			t74 = space();
    			td16 = element("td");
    			t75 = text(t75_value);
    			t76 = space();
    			td17 = element("td");
    			td17.textContent = "100%";
    			t78 = space();
    			div2 = element("div");
    			ul0 = element("ul");
    			li0 = element("li");
    			strong0 = element("strong");
    			strong0.textContent = "Precision:";
    			t80 = space();
    			t81 = text(t81_value);
    			t82 = space();
    			small7 = element("small");
    			small7.textContent = "Of words flagged as incorrect, how many are actually incorrect";
    			t84 = space();
    			li1 = element("li");
    			strong1 = element("strong");
    			strong1.textContent = "Recall:";
    			t86 = space();
    			t87 = text(t87_value);
    			t88 = space();
    			small8 = element("small");
    			small8.textContent = "Of words that are actually incorrect, how many were flagged as incorrect";
    			t90 = space();
    			li2 = element("li");
    			strong2 = element("strong");
    			strong2.textContent = "Accuracy:";
    			t92 = space();
    			t93 = text(t93_value);
    			t94 = space();
    			small9 = element("small");
    			small9.textContent = "Correct classifications (TP+TN) out of all words";
    			t96 = space();
    			li3 = element("li");
    			strong3 = element("strong");
    			strong3.textContent = "F-score:";
    			t98 = space();
    			t99 = text(t99_value);
    			t100 = space();
    			small10 = element("small");
    			small10.textContent = "Harmonic mean of precision and recall";
    			t102 = space();
    			h22 = element("h2");
    			h22.textContent = "Suggestion Statistics";
    			t104 = space();
    			p = element("p");
    			em = element("em");
    			t105 = text("These statistics apply only to true positive words (");
    			t106 = text(t106_value);
    			t107 = text(" words).");
    			t108 = space();
    			div8 = element("div");
    			div6 = element("div");
    			table2 = element("table");
    			tr10 = element("tr");
    			th12 = element("th");
    			th12.textContent = "In 1st position";
    			t110 = space();
    			td18 = element("td");
    			td18.textContent = `${/*firstPositionCount*/ ctx[17]()}`;
    			t112 = space();
    			td19 = element("td");
    			td19.textContent = `${/*firstPosition*/ ctx[12]()}%`;
    			t115 = space();
    			tr11 = element("tr");
    			th13 = element("th");
    			th13.textContent = "In top 5";
    			t117 = space();
    			td20 = element("td");
    			td20.textContent = `${/*topFiveCount*/ ctx[18]()}`;
    			t119 = space();
    			td21 = element("td");
    			td21.textContent = `${/*topFive*/ ctx[13]()}%`;
    			t122 = space();
    			tr12 = element("tr");
    			th14 = element("th");
    			th14.textContent = "Anywhere";
    			t124 = space();
    			td22 = element("td");
    			td22.textContent = `${/*anywhereCount*/ ctx[19]()}`;
    			t126 = space();
    			td23 = element("td");
    			td23.textContent = `${/*anywhere*/ ctx[14]()}%`;
    			t129 = space();
    			tr13 = element("tr");
    			th15 = element("th");
    			th15.textContent = "No suggestions";
    			t131 = space();
    			td24 = element("td");
    			td24.textContent = `${/*noSuggestionsCount*/ ctx[20]()}`;
    			t133 = space();
    			td25 = element("td");
    			td25.textContent = `${/*noSuggestions*/ ctx[15]()}%`;
    			t136 = space();
    			tr14 = element("tr");
    			th16 = element("th");
    			th16.textContent = "Only wrong";
    			t138 = space();
    			td26 = element("td");
    			td26.textContent = `${/*onlyWrongCount*/ ctx[21]()}`;
    			t140 = space();
    			td27 = element("td");
    			td27.textContent = `${/*onlyWrong*/ ctx[16]()}%`;
    			t143 = space();
    			ul1 = element("ul");
    			if (if_block0) if_block0.c();
    			t144 = space();
    			if (if_block1) if_block1.c();
    			t145 = space();
    			div7 = element("div");
    			ul2 = element("ul");
    			li4 = element("li");
    			strong4 = element("strong");
    			strong4.textContent = "Precision:";
    			t147 = space();
    			t148 = text(t148_value);
    			t149 = text("%\n\t\t\t\t");
    			small11 = element("small");
    			small11.textContent = "Of words that got suggestions, how many got the correct one";
    			t151 = space();
    			li5 = element("li");
    			strong5 = element("strong");
    			strong5.textContent = "Recall:";
    			t153 = space();
    			t154 = text(t154_value);
    			t155 = text("%\n\t\t\t\t");
    			small12 = element("small");
    			small12.textContent = "Of all misspelled words, how many got the correct suggestion";
    			t157 = space();
    			li6 = element("li");
    			strong6 = element("strong");
    			strong6.textContent = "Accuracy:";
    			t159 = space();
    			t160 = text(t160_value);
    			t161 = text("%\n\t\t\t\t");
    			small13 = element("small");
    			small13.textContent = "Correct suggestions out of all suggestions (indicates noise level)";
    			t163 = space();
    			li7 = element("li");
    			strong7 = element("strong");
    			strong7.textContent = "F-score:";
    			t165 = space();
    			t166 = text(t166_value);
    			t167 = text("%\n\t\t\t\t");
    			small14 = element("small");
    			small14.textContent = "Harmonic mean of precision and recall; high only when both are good";
    			attr_dev(h1, "class", "svelte-1b9jcp9");
    			add_location(h1, file, 802, 0, 19411);
    			attr_dev(h20, "class", "svelte-1b9jcp9");
    			add_location(h20, file, 804, 0, 19465);
    			attr_dev(pre, "class", "svelte-1b9jcp9");
    			add_location(pre, file, 806, 0, 19523);
    			attr_dev(div0, "class", "config-block svelte-1b9jcp9");
    			add_location(div0, file, 805, 0, 19496);
    			attr_dev(h21, "class", "svelte-1b9jcp9");
    			add_location(h21, file, 809, 0, 19583);
    			add_location(h30, file, 812, 2, 19663);
    			attr_dev(th0, "class", "svelte-1b9jcp9");
    			add_location(th0, file, 815, 4, 19722);
    			attr_dev(th1, "class", "svelte-1b9jcp9");
    			add_location(th1, file, 816, 4, 19736);
    			attr_dev(th2, "class", "svelte-1b9jcp9");
    			add_location(th2, file, 817, 4, 19766);
    			add_location(tr0, file, 814, 3, 19713);
    			add_location(br0, file, 820, 12, 19818);
    			add_location(small0, file, 820, 16, 19822);
    			attr_dev(th3, "class", "svelte-1b9jcp9");
    			add_location(th3, file, 820, 4, 19810);
    			attr_dev(td0, "class", "svelte-1b9jcp9");
    			add_location(td0, file, 821, 4, 19884);
    			attr_dev(td1, "class", "svelte-1b9jcp9");
    			add_location(td1, file, 822, 4, 19933);
    			add_location(tr1, file, 819, 3, 19801);
    			add_location(br1, file, 825, 11, 20001);
    			add_location(small1, file, 825, 15, 20005);
    			attr_dev(th4, "class", "svelte-1b9jcp9");
    			add_location(th4, file, 825, 4, 19994);
    			attr_dev(td2, "class", "svelte-1b9jcp9");
    			add_location(td2, file, 826, 4, 20064);
    			attr_dev(td3, "class", "svelte-1b9jcp9");
    			add_location(td3, file, 827, 4, 20108);
    			add_location(tr2, file, 824, 3, 19985);
    			attr_dev(th5, "class", "svelte-1b9jcp9");
    			add_location(th5, file, 830, 4, 20164);
    			attr_dev(td4, "class", "svelte-1b9jcp9");
    			add_location(td4, file, 831, 4, 20194);
    			attr_dev(td5, "class", "svelte-1b9jcp9");
    			add_location(td5, file, 832, 4, 20209);
    			add_location(tr3, file, 829, 3, 20155);
    			add_location(br2, file, 835, 30, 20312);
    			add_location(small2, file, 835, 34, 20316);
    			attr_dev(th6, "class", "svelte-1b9jcp9");
    			add_location(th6, file, 835, 4, 20286);
    			attr_dev(td6, "class", "svelte-1b9jcp9");
    			add_location(td6, file, 836, 4, 20363);
    			attr_dev(td7, "class", "svelte-1b9jcp9");
    			add_location(td7, file, 837, 4, 20378);
    			add_location(tr4, file, 834, 3, 20277);
    			attr_dev(table0, "class", "stats-table svelte-1b9jcp9");
    			add_location(table0, file, 813, 2, 19682);
    			attr_dev(div1, "class", "svelte-1b9jcp9");
    			add_location(div1, file, 811, 1, 19655);
    			add_location(h31, file, 842, 2, 20476);
    			add_location(br3, file, 846, 22, 20617);
    			add_location(small3, file, 846, 26, 20621);
    			attr_dev(th7, "class", "svelte-1b9jcp9");
    			add_location(th7, file, 846, 5, 20600);
    			attr_dev(td8, "class", "svelte-1b9jcp9");
    			add_location(td8, file, 847, 5, 20666);
    			attr_dev(td9, "class", "svelte-1b9jcp9");
    			add_location(td9, file, 848, 5, 20716);
    			add_location(tr5, file, 845, 4, 20590);
    			add_location(br4, file, 851, 23, 20890);
    			add_location(small4, file, 851, 27, 20894);
    			attr_dev(th8, "class", "svelte-1b9jcp9");
    			add_location(th8, file, 851, 5, 20872);
    			attr_dev(td10, "class", "svelte-1b9jcp9");
    			add_location(td10, file, 852, 5, 20942);
    			attr_dev(td11, "class", "svelte-1b9jcp9");
    			add_location(td11, file, 853, 5, 20993);
    			add_location(tr6, file, 850, 4, 20862);
    			add_location(br5, file, 856, 22, 21167);
    			add_location(small5, file, 856, 26, 21171);
    			attr_dev(th9, "class", "svelte-1b9jcp9");
    			add_location(th9, file, 856, 5, 21150);
    			attr_dev(td12, "class", "svelte-1b9jcp9");
    			add_location(td12, file, 857, 5, 21217);
    			attr_dev(td13, "class", "svelte-1b9jcp9");
    			add_location(td13, file, 858, 5, 21267);
    			add_location(tr7, file, 855, 4, 21140);
    			add_location(br6, file, 861, 23, 21441);
    			add_location(small6, file, 861, 27, 21445);
    			attr_dev(th10, "class", "svelte-1b9jcp9");
    			add_location(th10, file, 861, 5, 21423);
    			attr_dev(td14, "class", "svelte-1b9jcp9");
    			add_location(td14, file, 862, 5, 21492);
    			attr_dev(td15, "class", "svelte-1b9jcp9");
    			add_location(td15, file, 863, 5, 21541);
    			add_location(tr8, file, 860, 4, 21413);
    			attr_dev(th11, "class", "svelte-1b9jcp9");
    			add_location(th11, file, 866, 5, 21696);
    			attr_dev(td16, "class", "svelte-1b9jcp9");
    			add_location(td16, file, 867, 5, 21722);
    			attr_dev(td17, "class", "svelte-1b9jcp9");
    			add_location(td17, file, 868, 5, 21760);
    			add_location(tr9, file, 865, 4, 21686);
    			attr_dev(table1, "class", "stats-table svelte-1b9jcp9");
    			add_location(table1, file, 844, 3, 20558);
    			attr_dev(strong0, "class", "svelte-1b9jcp9");
    			add_location(strong0, file, 874, 6, 21850);
    			attr_dev(small7, "class", "svelte-1b9jcp9");
    			add_location(small7, file, 875, 6, 21922);
    			attr_dev(li0, "class", "svelte-1b9jcp9");
    			add_location(li0, file, 873, 5, 21839);
    			attr_dev(strong1, "class", "svelte-1b9jcp9");
    			add_location(strong1, file, 878, 6, 22027);
    			attr_dev(small8, "class", "svelte-1b9jcp9");
    			add_location(small8, file, 879, 6, 22093);
    			attr_dev(li1, "class", "svelte-1b9jcp9");
    			add_location(li1, file, 877, 5, 22016);
    			attr_dev(strong2, "class", "svelte-1b9jcp9");
    			add_location(strong2, file, 882, 6, 22208);
    			attr_dev(small9, "class", "svelte-1b9jcp9");
    			add_location(small9, file, 883, 6, 22278);
    			attr_dev(li2, "class", "svelte-1b9jcp9");
    			add_location(li2, file, 881, 5, 22197);
    			attr_dev(strong3, "class", "svelte-1b9jcp9");
    			add_location(strong3, file, 886, 6, 22369);
    			attr_dev(small10, "class", "svelte-1b9jcp9");
    			add_location(small10, file, 887, 6, 22436);
    			attr_dev(li3, "class", "svelte-1b9jcp9");
    			add_location(li3, file, 885, 5, 22358);
    			attr_dev(ul0, "class", "svelte-1b9jcp9");
    			add_location(ul0, file, 872, 4, 21829);
    			attr_dev(div2, "class", "metrics-box svelte-1b9jcp9");
    			add_location(div2, file, 871, 3, 21799);
    			attr_dev(div3, "class", "accuracy-stats-container svelte-1b9jcp9");
    			add_location(div3, file, 843, 2, 20516);
    			attr_dev(div4, "class", "svelte-1b9jcp9");
    			add_location(div4, file, 841, 1, 20468);
    			attr_dev(div5, "class", "accuracy-stats-container svelte-1b9jcp9");
    			add_location(div5, file, 810, 0, 19615);
    			attr_dev(h22, "class", "svelte-1b9jcp9");
    			add_location(h22, file, 895, 0, 22545);
    			add_location(em, file, 896, 3, 22579);
    			add_location(p, file, 896, 0, 22576);
    			attr_dev(th12, "class", "svelte-1b9jcp9");
    			add_location(th12, file, 901, 4, 22776);
    			attr_dev(td18, "class", "svelte-1b9jcp9");
    			add_location(td18, file, 902, 4, 22805);
    			attr_dev(td19, "class", "svelte-1b9jcp9");
    			add_location(td19, file, 903, 4, 22841);
    			add_location(tr10, file, 900, 3, 22767);
    			attr_dev(th13, "class", "svelte-1b9jcp9");
    			add_location(th13, file, 906, 4, 22890);
    			attr_dev(td20, "class", "svelte-1b9jcp9");
    			add_location(td20, file, 907, 4, 22912);
    			attr_dev(td21, "class", "svelte-1b9jcp9");
    			add_location(td21, file, 908, 4, 22942);
    			add_location(tr11, file, 905, 3, 22881);
    			attr_dev(th14, "class", "svelte-1b9jcp9");
    			add_location(th14, file, 911, 4, 22985);
    			attr_dev(td22, "class", "svelte-1b9jcp9");
    			add_location(td22, file, 912, 4, 23007);
    			attr_dev(td23, "class", "svelte-1b9jcp9");
    			add_location(td23, file, 913, 4, 23038);
    			add_location(tr12, file, 910, 3, 22976);
    			attr_dev(th15, "class", "svelte-1b9jcp9");
    			add_location(th15, file, 916, 4, 23082);
    			attr_dev(td24, "class", "svelte-1b9jcp9");
    			add_location(td24, file, 917, 4, 23110);
    			attr_dev(td25, "class", "svelte-1b9jcp9");
    			add_location(td25, file, 918, 4, 23146);
    			add_location(tr13, file, 915, 3, 23073);
    			attr_dev(th16, "class", "svelte-1b9jcp9");
    			add_location(th16, file, 921, 4, 23195);
    			attr_dev(td26, "class", "svelte-1b9jcp9");
    			add_location(td26, file, 922, 4, 23219);
    			attr_dev(td27, "class", "svelte-1b9jcp9");
    			add_location(td27, file, 923, 4, 23251);
    			add_location(tr14, file, 920, 3, 23186);
    			attr_dev(table2, "class", "stats-table svelte-1b9jcp9");
    			add_location(table2, file, 899, 2, 22736);
    			add_location(ul1, file, 927, 2, 23300);
    			attr_dev(div6, "class", "svelte-1b9jcp9");
    			add_location(div6, file, 898, 1, 22728);
    			attr_dev(strong4, "class", "svelte-1b9jcp9");
    			add_location(strong4, file, 943, 4, 23767);
    			attr_dev(small11, "class", "svelte-1b9jcp9");
    			add_location(small11, file, 944, 4, 23814);
    			attr_dev(li4, "class", "svelte-1b9jcp9");
    			add_location(li4, file, 942, 3, 23758);
    			attr_dev(strong5, "class", "svelte-1b9jcp9");
    			add_location(strong5, file, 947, 4, 23910);
    			attr_dev(small12, "class", "svelte-1b9jcp9");
    			add_location(small12, file, 948, 4, 23951);
    			attr_dev(li5, "class", "svelte-1b9jcp9");
    			add_location(li5, file, 946, 3, 23901);
    			attr_dev(strong6, "class", "svelte-1b9jcp9");
    			add_location(strong6, file, 951, 4, 24048);
    			attr_dev(small13, "class", "svelte-1b9jcp9");
    			add_location(small13, file, 952, 4, 24093);
    			attr_dev(li6, "class", "svelte-1b9jcp9");
    			add_location(li6, file, 950, 3, 24039);
    			attr_dev(strong7, "class", "svelte-1b9jcp9");
    			add_location(strong7, file, 955, 4, 24196);
    			attr_dev(small14, "class", "svelte-1b9jcp9");
    			add_location(small14, file, 956, 4, 24238);
    			attr_dev(li7, "class", "svelte-1b9jcp9");
    			add_location(li7, file, 954, 3, 24187);
    			attr_dev(ul2, "class", "svelte-1b9jcp9");
    			add_location(ul2, file, 941, 2, 23750);
    			attr_dev(div7, "class", "metrics-box svelte-1b9jcp9");
    			add_location(div7, file, 940, 1, 23722);
    			attr_dev(div8, "class", "accuracy-stats-container svelte-1b9jcp9");
    			add_location(div8, file, 897, 0, 22688);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			append_dev(h1, t0);
    			append_dev(h1, t1);
    			insert_dev(target, t2, anchor);
    			insert_dev(target, h20, anchor);
    			insert_dev(target, t4, anchor);
    			insert_dev(target, div0, anchor);
    			append_dev(div0, pre);
    			append_dev(pre, t5);
    			insert_dev(target, t6, anchor);
    			insert_dev(target, h21, anchor);
    			insert_dev(target, t8, anchor);
    			insert_dev(target, div5, anchor);
    			append_dev(div5, div1);
    			append_dev(div1, h30);
    			append_dev(div1, t10);
    			append_dev(div1, table0);
    			append_dev(table0, tr0);
    			append_dev(tr0, th0);
    			append_dev(tr0, t11);
    			append_dev(tr0, th1);
    			append_dev(tr0, t13);
    			append_dev(tr0, th2);
    			append_dev(table0, t15);
    			append_dev(table0, tr1);
    			append_dev(tr1, th3);
    			append_dev(th3, t16);
    			append_dev(th3, br0);
    			append_dev(th3, small0);
    			append_dev(tr1, t18);
    			append_dev(tr1, td0);
    			append_dev(td0, t19);
    			append_dev(tr1, t20);
    			append_dev(tr1, td1);
    			append_dev(td1, t21);
    			append_dev(table0, t22);
    			append_dev(table0, tr2);
    			append_dev(tr2, th4);
    			append_dev(th4, t23);
    			append_dev(th4, br1);
    			append_dev(th4, small1);
    			append_dev(tr2, t25);
    			append_dev(tr2, td2);
    			append_dev(td2, t26);
    			append_dev(tr2, t27);
    			append_dev(tr2, td3);
    			append_dev(td3, t28);
    			append_dev(table0, t29);
    			append_dev(table0, tr3);
    			append_dev(tr3, th5);
    			append_dev(tr3, t31);
    			append_dev(tr3, td4);
    			append_dev(tr3, t33);
    			append_dev(tr3, td5);
    			append_dev(td5, t34);
    			append_dev(table0, t35);
    			append_dev(table0, tr4);
    			append_dev(tr4, th6);
    			append_dev(th6, t36);
    			append_dev(th6, br2);
    			append_dev(th6, small2);
    			append_dev(tr4, t38);
    			append_dev(tr4, td6);
    			append_dev(tr4, t40);
    			append_dev(tr4, td7);
    			append_dev(td7, t41);
    			append_dev(div5, t42);
    			append_dev(div5, div4);
    			append_dev(div4, h31);
    			append_dev(div4, t44);
    			append_dev(div4, div3);
    			append_dev(div3, table1);
    			append_dev(table1, tr5);
    			append_dev(tr5, th7);
    			append_dev(th7, t45);
    			append_dev(th7, br3);
    			append_dev(th7, small3);
    			append_dev(tr5, t47);
    			append_dev(tr5, td8);
    			append_dev(td8, t48);
    			append_dev(tr5, t49);
    			append_dev(tr5, td9);
    			append_dev(td9, t50);
    			append_dev(table1, t51);
    			append_dev(table1, tr6);
    			append_dev(tr6, th8);
    			append_dev(th8, t52);
    			append_dev(th8, br4);
    			append_dev(th8, small4);
    			append_dev(tr6, t54);
    			append_dev(tr6, td10);
    			append_dev(td10, t55);
    			append_dev(tr6, t56);
    			append_dev(tr6, td11);
    			append_dev(td11, t57);
    			append_dev(table1, t58);
    			append_dev(table1, tr7);
    			append_dev(tr7, th9);
    			append_dev(th9, t59);
    			append_dev(th9, br5);
    			append_dev(th9, small5);
    			append_dev(tr7, t61);
    			append_dev(tr7, td12);
    			append_dev(td12, t62);
    			append_dev(tr7, t63);
    			append_dev(tr7, td13);
    			append_dev(td13, t64);
    			append_dev(table1, t65);
    			append_dev(table1, tr8);
    			append_dev(tr8, th10);
    			append_dev(th10, t66);
    			append_dev(th10, br6);
    			append_dev(th10, small6);
    			append_dev(tr8, t68);
    			append_dev(tr8, td14);
    			append_dev(td14, t69);
    			append_dev(tr8, t70);
    			append_dev(tr8, td15);
    			append_dev(td15, t71);
    			append_dev(table1, t72);
    			append_dev(table1, tr9);
    			append_dev(tr9, th11);
    			append_dev(tr9, t74);
    			append_dev(tr9, td16);
    			append_dev(td16, t75);
    			append_dev(tr9, t76);
    			append_dev(tr9, td17);
    			append_dev(div3, t78);
    			append_dev(div3, div2);
    			append_dev(div2, ul0);
    			append_dev(ul0, li0);
    			append_dev(li0, strong0);
    			append_dev(li0, t80);
    			append_dev(li0, t81);
    			append_dev(li0, t82);
    			append_dev(li0, small7);
    			append_dev(ul0, t84);
    			append_dev(ul0, li1);
    			append_dev(li1, strong1);
    			append_dev(li1, t86);
    			append_dev(li1, t87);
    			append_dev(li1, t88);
    			append_dev(li1, small8);
    			append_dev(ul0, t90);
    			append_dev(ul0, li2);
    			append_dev(li2, strong2);
    			append_dev(li2, t92);
    			append_dev(li2, t93);
    			append_dev(li2, t94);
    			append_dev(li2, small9);
    			append_dev(ul0, t96);
    			append_dev(ul0, li3);
    			append_dev(li3, strong3);
    			append_dev(li3, t98);
    			append_dev(li3, t99);
    			append_dev(li3, t100);
    			append_dev(li3, small10);
    			insert_dev(target, t102, anchor);
    			insert_dev(target, h22, anchor);
    			insert_dev(target, t104, anchor);
    			insert_dev(target, p, anchor);
    			append_dev(p, em);
    			append_dev(em, t105);
    			append_dev(em, t106);
    			append_dev(em, t107);
    			insert_dev(target, t108, anchor);
    			insert_dev(target, div8, anchor);
    			append_dev(div8, div6);
    			append_dev(div6, table2);
    			append_dev(table2, tr10);
    			append_dev(tr10, th12);
    			append_dev(tr10, t110);
    			append_dev(tr10, td18);
    			append_dev(tr10, t112);
    			append_dev(tr10, td19);
    			append_dev(table2, t115);
    			append_dev(table2, tr11);
    			append_dev(tr11, th13);
    			append_dev(tr11, t117);
    			append_dev(tr11, td20);
    			append_dev(tr11, t119);
    			append_dev(tr11, td21);
    			append_dev(table2, t122);
    			append_dev(table2, tr12);
    			append_dev(tr12, th14);
    			append_dev(tr12, t124);
    			append_dev(tr12, td22);
    			append_dev(tr12, t126);
    			append_dev(tr12, td23);
    			append_dev(table2, t129);
    			append_dev(table2, tr13);
    			append_dev(tr13, th15);
    			append_dev(tr13, t131);
    			append_dev(tr13, td24);
    			append_dev(tr13, t133);
    			append_dev(tr13, td25);
    			append_dev(table2, t136);
    			append_dev(table2, tr14);
    			append_dev(tr14, th16);
    			append_dev(tr14, t138);
    			append_dev(tr14, td26);
    			append_dev(tr14, t140);
    			append_dev(tr14, td27);
    			append_dev(div6, t143);
    			append_dev(div6, ul1);
    			if (if_block0) if_block0.m(ul1, null);
    			append_dev(ul1, t144);
    			if (if_block1) if_block1.m(ul1, null);
    			append_dev(div8, t145);
    			append_dev(div8, div7);
    			append_dev(div7, ul2);
    			append_dev(ul2, li4);
    			append_dev(li4, strong4);
    			append_dev(li4, t147);
    			append_dev(li4, t148);
    			append_dev(li4, t149);
    			append_dev(li4, small11);
    			append_dev(ul2, t151);
    			append_dev(ul2, li5);
    			append_dev(li5, strong5);
    			append_dev(li5, t153);
    			append_dev(li5, t154);
    			append_dev(li5, t155);
    			append_dev(li5, small12);
    			append_dev(ul2, t157);
    			append_dev(ul2, li6);
    			append_dev(li6, strong6);
    			append_dev(li6, t159);
    			append_dev(li6, t160);
    			append_dev(li6, t161);
    			append_dev(li6, small13);
    			append_dev(ul2, t163);
    			append_dev(ul2, li7);
    			append_dev(li7, strong7);
    			append_dev(li7, t165);
    			append_dev(li7, t166);
    			append_dev(li7, t167);
    			append_dev(li7, small14);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty[0] & /*report*/ 1 && t0_value !== (t0_value = getSpellerTitle(/*report*/ ctx[0]) + "")) set_data_dev(t0, t0_value);
    			if (dirty[0] & /*report*/ 1 && t5_value !== (t5_value = JSON.stringify(/*report*/ ctx[0].config, null, 2) + "")) set_data_dev(t5, t5_value);
    			if (dirty[0] & /*report*/ 1 && t19_value !== (t19_value = /*wordsPerSecond*/ ctx[30](/*report*/ ctx[0].total_time) + "")) set_data_dev(t19, t19_value);
    			if (dirty[0] & /*report*/ 1 && t21_value !== (t21_value = humanTime(/*report*/ ctx[0].total_time) + "")) set_data_dev(t21, t21_value);
    			if (dirty[0] & /*totalRuntime*/ 32 && t26_value !== (t26_value = /*wordsPerSecond*/ ctx[30](/*totalRuntime*/ ctx[5]) + "")) set_data_dev(t26, t26_value);
    			if (dirty[0] & /*totalRuntime*/ 32 && t28_value !== (t28_value = humanTime(/*totalRuntime*/ ctx[5]) + "")) set_data_dev(t28, t28_value);
    			if (dirty[0] & /*report*/ 1 && t34_value !== (t34_value = humanTimeMillis(/*report*/ ctx[0].summary.average_time) + "")) set_data_dev(t34, t34_value);
    			if (dirty[0] & /*report*/ 1 && t41_value !== (t41_value = humanTimeMillis(/*report*/ ctx[0].summary.average_time_95pc) + "")) set_data_dev(t41, t41_value);
    			if (dirty[0] & /*report*/ 1 && t48_value !== (t48_value = (/*report*/ ctx[0].summary.true_positive || 0) + "")) set_data_dev(t48, t48_value);

    			if (dirty[0] & /*report*/ 1 && t50_value !== (t50_value = (/*report*/ ctx[0].results.length > 0
    			? ((/*report*/ ctx[0].summary.true_positive || 0) / /*report*/ ctx[0].results.length * 100).toFixed(1) + '%'
    			: 'N/A') + "")) set_data_dev(t50, t50_value);

    			if (dirty[0] & /*report*/ 1 && t55_value !== (t55_value = (/*report*/ ctx[0].summary.false_negative || 0) + "")) set_data_dev(t55, t55_value);

    			if (dirty[0] & /*report*/ 1 && t57_value !== (t57_value = (/*report*/ ctx[0].results.length > 0
    			? ((/*report*/ ctx[0].summary.false_negative || 0) / /*report*/ ctx[0].results.length * 100).toFixed(1) + '%'
    			: 'N/A') + "")) set_data_dev(t57, t57_value);

    			if (dirty[0] & /*report*/ 1 && t62_value !== (t62_value = (/*report*/ ctx[0].summary.true_negative || 0) + "")) set_data_dev(t62, t62_value);

    			if (dirty[0] & /*report*/ 1 && t64_value !== (t64_value = (/*report*/ ctx[0].results.length > 0
    			? ((/*report*/ ctx[0].summary.true_negative || 0) / /*report*/ ctx[0].results.length * 100).toFixed(1) + '%'
    			: 'N/A') + "")) set_data_dev(t64, t64_value);

    			if (dirty[0] & /*report*/ 1 && t69_value !== (t69_value = (/*report*/ ctx[0].summary.false_accept || 0) + "")) set_data_dev(t69, t69_value);

    			if (dirty[0] & /*report*/ 1 && t71_value !== (t71_value = (/*report*/ ctx[0].results.length > 0
    			? ((/*report*/ ctx[0].summary.false_accept || 0) / /*report*/ ctx[0].results.length * 100).toFixed(1) + '%'
    			: 'N/A') + "")) set_data_dev(t71, t71_value);

    			if (dirty[0] & /*report*/ 1 && t75_value !== (t75_value = /*report*/ ctx[0].results.length + "")) set_data_dev(t75, t75_value);
    			if (dirty[0] & /*report*/ 1 && t106_value !== (t106_value = (/*report*/ ctx[0].summary.true_positive || 0) + "")) set_data_dev(t106, t106_value);

    			if (/*report*/ ctx[0].summary && /*report*/ ctx[0].summary.average_position_of_correct !== undefined) {
    				if (if_block0) {
    					if_block0.p(ctx, dirty);
    				} else {
    					if_block0 = create_if_block_22(ctx);
    					if_block0.c();
    					if_block0.m(ul1, t144);
    				}
    			} else if (if_block0) {
    				if_block0.d(1);
    				if_block0 = null;
    			}

    			if (/*report*/ ctx[0].summary && /*report*/ ctx[0].summary.average_suggestions_for_correct !== undefined) {
    				if (if_block1) {
    					if_block1.p(ctx, dirty);
    				} else {
    					if_block1 = create_if_block_21(ctx);
    					if_block1.c();
    					if_block1.m(ul1, null);
    				}
    			} else if (if_block1) {
    				if_block1.d(1);
    				if_block1 = null;
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t2);
    			if (detaching) detach_dev(h20);
    			if (detaching) detach_dev(t4);
    			if (detaching) detach_dev(div0);
    			if (detaching) detach_dev(t6);
    			if (detaching) detach_dev(h21);
    			if (detaching) detach_dev(t8);
    			if (detaching) detach_dev(div5);
    			if (detaching) detach_dev(t102);
    			if (detaching) detach_dev(h22);
    			if (detaching) detach_dev(t104);
    			if (detaching) detach_dev(p);
    			if (detaching) detach_dev(t108);
    			if (detaching) detach_dev(div8);
    			if (if_block0) if_block0.d();
    			if (if_block1) if_block1.d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_20.name,
    		type: "if",
    		source: "(802:0) {#if report != null}",
    		ctx
    	});

    	return block;
    }

    // (929:2) {#if report.summary && report.summary.average_position_of_correct !== undefined}
    function create_if_block_22(ctx) {
    	let li;
    	let t0;
    	let t1_value = /*report*/ ctx[0].summary.average_position_of_correct.toFixed(2) + "";
    	let t1;

    	const block = {
    		c: function create() {
    			li = element("li");
    			t0 = text("Average position of correct: ");
    			t1 = text(t1_value);
    			add_location(li, file, 929, 2, 23390);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, li, anchor);
    			append_dev(li, t0);
    			append_dev(li, t1);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty[0] & /*report*/ 1 && t1_value !== (t1_value = /*report*/ ctx[0].summary.average_position_of_correct.toFixed(2) + "")) set_data_dev(t1, t1_value);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(li);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_22.name,
    		type: "if",
    		source: "(929:2) {#if report.summary && report.summary.average_position_of_correct !== undefined}",
    		ctx
    	});

    	return block;
    }

    // (934:2) {#if report.summary && report.summary.average_suggestions_for_correct !== undefined}
    function create_if_block_21(ctx) {
    	let li;
    	let t0;
    	let t1_value = /*report*/ ctx[0].summary.average_suggestions_for_correct.toFixed(2) + "";
    	let t1;

    	const block = {
    		c: function create() {
    			li = element("li");
    			t0 = text("Average suggestions for correct: ");
    			t1 = text(t1_value);
    			add_location(li, file, 934, 2, 23588);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, li, anchor);
    			append_dev(li, t0);
    			append_dev(li, t1);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty[0] & /*report*/ 1 && t1_value !== (t1_value = /*report*/ ctx[0].summary.average_suggestions_for_correct.toFixed(2) + "")) set_data_dev(t1, t1_value);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(li);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_21.name,
    		type: "if",
    		source: "(934:2) {#if report.summary && report.summary.average_suggestions_for_correct !== undefined}",
    		ctx
    	});

    	return block;
    }

    // (967:0) {:else}
    function create_else_block(ctx) {
    	let h2;
    	let t1;
    	let t2;
    	let button0;
    	let t4;
    	let button1;
    	let t6;
    	let button2;
    	let t8;
    	let button3;
    	let t10;
    	let button4;
    	let t12;
    	let table;
    	let thead;
    	let tr;
    	let th0;
    	let t14;
    	let th1;
    	let t16;
    	let tbody;
    	let mounted;
    	let dispose;

    	function select_block_type_1(ctx, dirty) {
    		if (/*sortMode*/ ctx[2] == null) return create_if_block_11;
    		if (/*sortMode*/ ctx[2] === "time:asc") return create_if_block_12;
    		if (/*sortMode*/ ctx[2] === "time:desc") return create_if_block_13;
    		if (/*sortMode*/ ctx[2] === "position:asc") return create_if_block_14;
    		if (/*sortMode*/ ctx[2] === "position:desc") return create_if_block_15;
    		if (/*sortMode*/ ctx[2] === "distance:asc") return create_if_block_16;
    		if (/*sortMode*/ ctx[2] === "distance:desc") return create_if_block_17;
    		if (/*sortMode*/ ctx[2] === "classification:asc") return create_if_block_18;
    		if (/*sortMode*/ ctx[2] === "classification:desc") return create_if_block_19;
    		return create_else_block_2;
    	}

    	let current_block_type = select_block_type_1(ctx);
    	let if_block = current_block_type(ctx);
    	let each_value = /*results*/ ctx[1];
    	validate_each_argument(each_value);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
    	}

    	const block = {
    		c: function create() {
    			h2 = element("h2");
    			h2.textContent = "Detailed Results";
    			t1 = space();
    			if_block.c();
    			t2 = space();
    			button0 = element("button");
    			button0.textContent = "Sort by Input Order";
    			t4 = space();
    			button1 = element("button");
    			button1.textContent = "Sort by Time";
    			t6 = space();
    			button2 = element("button");
    			button2.textContent = "Sort by Position";
    			t8 = space();
    			button3 = element("button");
    			button3.textContent = "Sort by Edit Distance";
    			t10 = space();
    			button4 = element("button");
    			button4.textContent = "Sort by Classification";
    			t12 = space();
    			table = element("table");
    			thead = element("thead");
    			tr = element("tr");
    			th0 = element("th");
    			th0.textContent = "Spelling error data";
    			t14 = space();
    			th1 = element("th");
    			th1.textContent = "Suggestion list";
    			t16 = space();
    			tbody = element("tbody");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			attr_dev(h2, "class", "svelte-1b9jcp9");
    			add_location(h2, file, 967, 0, 24429);
    			attr_dev(button0, "class", "svelte-1b9jcp9");
    			add_location(button0, file, 991, 0, 25316);
    			attr_dev(button1, "class", "svelte-1b9jcp9");
    			add_location(button1, file, 992, 0, 25381);
    			attr_dev(button2, "class", "svelte-1b9jcp9");
    			add_location(button2, file, 993, 0, 25433);
    			attr_dev(button3, "class", "svelte-1b9jcp9");
    			add_location(button3, file, 994, 0, 25493);
    			attr_dev(button4, "class", "svelte-1b9jcp9");
    			add_location(button4, file, 995, 0, 25558);
    			attr_dev(th0, "class", "svelte-1b9jcp9");
    			add_location(th0, file, 999, 3, 25671);
    			attr_dev(th1, "class", "svelte-1b9jcp9");
    			add_location(th1, file, 1000, 3, 25703);
    			add_location(tr, file, 998, 2, 25663);
    			add_location(thead, file, 997, 1, 25653);
    			add_location(tbody, file, 1003, 1, 25747);
    			attr_dev(table, "class", "table svelte-1b9jcp9");
    			add_location(table, file, 996, 0, 25630);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h2, anchor);
    			insert_dev(target, t1, anchor);
    			if_block.m(target, anchor);
    			insert_dev(target, t2, anchor);
    			insert_dev(target, button0, anchor);
    			insert_dev(target, t4, anchor);
    			insert_dev(target, button1, anchor);
    			insert_dev(target, t6, anchor);
    			insert_dev(target, button2, anchor);
    			insert_dev(target, t8, anchor);
    			insert_dev(target, button3, anchor);
    			insert_dev(target, t10, anchor);
    			insert_dev(target, button4, anchor);
    			insert_dev(target, t12, anchor);
    			insert_dev(target, table, anchor);
    			append_dev(table, thead);
    			append_dev(thead, tr);
    			append_dev(tr, th0);
    			append_dev(tr, t14);
    			append_dev(tr, th1);
    			append_dev(table, t16);
    			append_dev(table, tbody);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				if (each_blocks[i]) {
    					each_blocks[i].m(tbody, null);
    				}
    			}

    			if (!mounted) {
    				dispose = [
    					listen_dev(button0, "click", /*sortByInputOrder*/ ctx[10], false, false, false, false),
    					listen_dev(button1, "click", /*sortByTime*/ ctx[7], false, false, false, false),
    					listen_dev(button2, "click", /*sortByPosition*/ ctx[8], false, false, false, false),
    					listen_dev(button3, "click", /*sortByDistance*/ ctx[9], false, false, false, false),
    					listen_dev(button4, "click", /*sortByClassification*/ ctx[11], false, false, false, false)
    				];

    				mounted = true;
    			}
    		},
    		p: function update(ctx, dirty) {
    			if (current_block_type !== (current_block_type = select_block_type_1(ctx))) {
    				if_block.d(1);
    				if_block = current_block_type(ctx);

    				if (if_block) {
    					if_block.c();
    					if_block.m(t2.parentNode, t2);
    				}
    			}

    			if (dirty[0] & /*results*/ 2) {
    				each_value = /*results*/ ctx[1];
    				validate_each_argument(each_value);
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    					} else {
    						each_blocks[i] = create_each_block(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(tbody, null);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}

    				each_blocks.length = each_value.length;
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h2);
    			if (detaching) detach_dev(t1);
    			if_block.d(detaching);
    			if (detaching) detach_dev(t2);
    			if (detaching) detach_dev(button0);
    			if (detaching) detach_dev(t4);
    			if (detaching) detach_dev(button1);
    			if (detaching) detach_dev(t6);
    			if (detaching) detach_dev(button2);
    			if (detaching) detach_dev(t8);
    			if (detaching) detach_dev(button3);
    			if (detaching) detach_dev(t10);
    			if (detaching) detach_dev(button4);
    			if (detaching) detach_dev(t12);
    			if (detaching) detach_dev(table);
    			destroy_each(each_blocks, detaching);
    			mounted = false;
    			run_all(dispose);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block.name,
    		type: "else",
    		source: "(967:0) {:else}",
    		ctx
    	});

    	return block;
    }

    // (965:0) {#if results == null}
    function create_if_block(ctx) {
    	let div;

    	const block = {
    		c: function create() {
    			div = element("div");
    			div.textContent = "Loading...";
    			attr_dev(div, "class", "loading svelte-1b9jcp9");
    			add_location(div, file, 965, 0, 24383);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block.name,
    		type: "if",
    		source: "(965:0) {#if results == null}",
    		ctx
    	});

    	return block;
    }

    // (988:0) {:else}
    function create_else_block_2(ctx) {
    	let p;

    	const block = {
    		c: function create() {
    			p = element("p");
    			p.textContent = "Sorted in some unknown way (this is a bug)";
    			add_location(p, file, 988, 0, 25259);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, p, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(p);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block_2.name,
    		type: "else",
    		source: "(988:0) {:else}",
    		ctx
    	});

    	return block;
    }

    // (986:45) 
    function create_if_block_19(ctx) {
    	let p;

    	const block = {
    		c: function create() {
    			p = element("p");
    			p.textContent = "Sorted by classification (FN → FP → TN → TP)";
    			add_location(p, file, 986, 0, 25199);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, p, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(p);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_19.name,
    		type: "if",
    		source: "(986:45) ",
    		ctx
    	});

    	return block;
    }

    // (984:44) 
    function create_if_block_18(ctx) {
    	let p;

    	const block = {
    		c: function create() {
    			p = element("p");
    			p.textContent = "Sorted by classification (TP → TN → FP → FN)";
    			add_location(p, file, 984, 0, 25101);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, p, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(p);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_18.name,
    		type: "if",
    		source: "(984:44) ",
    		ctx
    	});

    	return block;
    }

    // (982:39) 
    function create_if_block_17(ctx) {
    	let p;

    	const block = {
    		c: function create() {
    			p = element("p");
    			p.textContent = "Sorted by edit distance, descending (largest first)";
    			add_location(p, file, 982, 0, 24997);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, p, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(p);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_17.name,
    		type: "if",
    		source: "(982:39) ",
    		ctx
    	});

    	return block;
    }

    // (980:38) 
    function create_if_block_16(ctx) {
    	let p;

    	const block = {
    		c: function create() {
    			p = element("p");
    			p.textContent = "Sorted by edit distance, ascending (smallest first)";
    			add_location(p, file, 980, 0, 24898);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, p, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(p);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_16.name,
    		type: "if",
    		source: "(980:38) ",
    		ctx
    	});

    	return block;
    }

    // (978:39) 
    function create_if_block_15(ctx) {
    	let p;

    	const block = {
    		c: function create() {
    			p = element("p");
    			p.textContent = "Sorted by position, descending (worst first)";
    			add_location(p, file, 978, 0, 24807);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, p, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(p);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_15.name,
    		type: "if",
    		source: "(978:39) ",
    		ctx
    	});

    	return block;
    }

    // (976:38) 
    function create_if_block_14(ctx) {
    	let p;

    	const block = {
    		c: function create() {
    			p = element("p");
    			p.textContent = "Sorted by position, ascending (best first)";
    			add_location(p, file, 976, 0, 24717);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, p, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(p);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_14.name,
    		type: "if",
    		source: "(976:38) ",
    		ctx
    	});

    	return block;
    }

    // (974:35) 
    function create_if_block_13(ctx) {
    	let p;

    	const block = {
    		c: function create() {
    			p = element("p");
    			p.textContent = "Sorted by time, descending (fastest first)";
    			add_location(p, file, 974, 0, 24628);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, p, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(p);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_13.name,
    		type: "if",
    		source: "(974:35) ",
    		ctx
    	});

    	return block;
    }

    // (972:34) 
    function create_if_block_12(ctx) {
    	let p;

    	const block = {
    		c: function create() {
    			p = element("p");
    			p.textContent = "Sorted by time, ascending (slowest first)";
    			add_location(p, file, 972, 0, 24543);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, p, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(p);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_12.name,
    		type: "if",
    		source: "(972:34) ",
    		ctx
    	});

    	return block;
    }

    // (970:0) {#if sortMode == null}
    function create_if_block_11(ctx) {
    	let p;

    	const block = {
    		c: function create() {
    			p = element("p");
    			p.textContent = "Sorted by input order";
    			add_location(p, file, 970, 0, 24479);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, p, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(p);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_11.name,
    		type: "if",
    		source: "(970:0) {#if sortMode == null}",
    		ctx
    	});

    	return block;
    }

    // (1010:4) {#if result.expected !== null}
    function create_if_block_10(ctx) {
    	let t0;
    	let span;
    	let t1_value = /*result*/ ctx[36].expected + "";
    	let t1;

    	const block = {
    		c: function create() {
    			t0 = text("→\n\t\t\t\t\t");
    			span = element("span");
    			t1 = text(t1_value);
    			attr_dev(span, "class", "word svelte-1b9jcp9");
    			add_location(span, file, 1011, 5, 25977);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t0, anchor);
    			insert_dev(target, span, anchor);
    			append_dev(span, t1);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty[0] & /*results*/ 2 && t1_value !== (t1_value = /*result*/ ctx[36].expected + "")) set_data_dev(t1, t1_value);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(span);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_10.name,
    		type: "if",
    		source: "(1010:4) {#if result.expected !== null}",
    		ctx
    	});

    	return block;
    }

    // (1020:3) {#if getClassificationType(result) === 'TP'}
    function create_if_block_7(ctx) {
    	let if_block_anchor;

    	function select_block_type_2(ctx, dirty) {
    		if (/*result*/ ctx[36].position === null) return create_if_block_8;
    		if (/*result*/ ctx[36].position === 0) return create_if_block_9;
    		return create_else_block_1;
    	}

    	let current_block_type = select_block_type_2(ctx);
    	let if_block = current_block_type(ctx);

    	const block = {
    		c: function create() {
    			if_block.c();
    			if_block_anchor = empty();
    		},
    		m: function mount(target, anchor) {
    			if_block.m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (current_block_type === (current_block_type = select_block_type_2(ctx)) && if_block) {
    				if_block.p(ctx, dirty);
    			} else {
    				if_block.d(1);
    				if_block = current_block_type(ctx);

    				if (if_block) {
    					if_block.c();
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			}
    		},
    		d: function destroy(detaching) {
    			if_block.d(detaching);
    			if (detaching) detach_dev(if_block_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_7.name,
    		type: "if",
    		source: "(1020:3) {#if getClassificationType(result) === 'TP'}",
    		ctx
    	});

    	return block;
    }

    // (1025:4) {:else}
    function create_else_block_1(ctx) {
    	let br;
    	let small;
    	let t0;
    	let t1_value = /*result*/ ctx[36].position + 1 + "";
    	let t1;

    	const block = {
    		c: function create() {
    			br = element("br");
    			small = element("small");
    			t0 = text("Suggestion ");
    			t1 = text(t1_value);
    			add_location(br, file, 1025, 5, 26520);
    			attr_dev(small, "class", "svelte-1b9jcp9");
    			add_location(small, file, 1025, 9, 26524);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, br, anchor);
    			insert_dev(target, small, anchor);
    			append_dev(small, t0);
    			append_dev(small, t1);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty[0] & /*results*/ 2 && t1_value !== (t1_value = /*result*/ ctx[36].position + 1 + "")) set_data_dev(t1, t1_value);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(br);
    			if (detaching) detach_dev(small);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block_1.name,
    		type: "else",
    		source: "(1025:4) {:else}",
    		ctx
    	});

    	return block;
    }

    // (1023:36) 
    function create_if_block_9(ctx) {
    	let br;
    	let small;

    	const block = {
    		c: function create() {
    			br = element("br");
    			small = element("small");
    			small.textContent = "Top suggestion";
    			add_location(br, file, 1023, 5, 26469);
    			attr_dev(small, "class", "svelte-1b9jcp9");
    			add_location(small, file, 1023, 9, 26473);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, br, anchor);
    			insert_dev(target, small, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(br);
    			if (detaching) detach_dev(small);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_9.name,
    		type: "if",
    		source: "(1023:36) ",
    		ctx
    	});

    	return block;
    }

    // (1021:4) {#if result.position === null}
    function create_if_block_8(ctx) {
    	let br;
    	let small;

    	const block = {
    		c: function create() {
    			br = element("br");
    			small = element("small");
    			small.textContent = "Not in suggestions";
    			add_location(br, file, 1021, 5, 26389);
    			attr_dev(small, "class", "svelte-1b9jcp9");
    			add_location(small, file, 1021, 9, 26393);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, br, anchor);
    			insert_dev(target, small, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(br);
    			if (detaching) detach_dev(small);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_8.name,
    		type: "if",
    		source: "(1021:4) {#if result.position === null}",
    		ctx
    	});

    	return block;
    }

    // (1030:3) {#if getClassificationType(result) === 'TP' || getClassificationType(result) === 'FN'}
    function create_if_block_6(ctx) {
    	let p;
    	let strong;
    	let t1;
    	let t2_value = /*result*/ ctx[36].distance + "";
    	let t2;

    	const block = {
    		c: function create() {
    			p = element("p");
    			strong = element("strong");
    			strong.textContent = "Edit distance:";
    			t1 = space();
    			t2 = text(t2_value);
    			attr_dev(strong, "class", "svelte-1b9jcp9");
    			add_location(strong, file, 1031, 4, 26700);
    			attr_dev(p, "class", "svelte-1b9jcp9");
    			add_location(p, file, 1030, 3, 26692);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, p, anchor);
    			append_dev(p, strong);
    			append_dev(p, t1);
    			append_dev(p, t2);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty[0] & /*results*/ 2 && t2_value !== (t2_value = /*result*/ ctx[36].distance + "")) set_data_dev(t2, t2_value);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(p);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_6.name,
    		type: "if",
    		source: "(1030:3) {#if getClassificationType(result) === 'TP' || getClassificationType(result) === 'FN'}",
    		ctx
    	});

    	return block;
    }

    // (1035:3) {#if getClassificationType(result) === 'TP'}
    function create_if_block_5(ctx) {
    	let p;
    	let strong;
    	let t1;
    	let t2_value = humanTimeMillis(/*result*/ ctx[36].time) + "";
    	let t2;

    	const block = {
    		c: function create() {
    			p = element("p");
    			strong = element("strong");
    			strong.textContent = "Time:";
    			t1 = space();
    			t2 = text(t2_value);
    			attr_dev(strong, "class", "svelte-1b9jcp9");
    			add_location(strong, file, 1036, 3, 26825);
    			attr_dev(p, "class", "svelte-1b9jcp9");
    			add_location(p, file, 1035, 3, 26818);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, p, anchor);
    			append_dev(p, strong);
    			append_dev(p, t1);
    			append_dev(p, t2);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty[0] & /*results*/ 2 && t2_value !== (t2_value = humanTimeMillis(/*result*/ ctx[36].time) + "")) set_data_dev(t2, t2_value);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(p);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_5.name,
    		type: "if",
    		source: "(1035:3) {#if getClassificationType(result) === 'TP'}",
    		ctx
    	});

    	return block;
    }

    // (1064:51) 
    function create_if_block_4(ctx) {
    	let em;

    	const block = {
    		c: function create() {
    			em = element("em");
    			em.textContent = "No suggestions";
    			attr_dev(em, "class", "svelte-1b9jcp9");
    			add_location(em, file, 1064, 3, 27824);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, em, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(em);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_4.name,
    		type: "if",
    		source: "(1064:51) ",
    		ctx
    	});

    	return block;
    }

    // (1044:42) 
    function create_if_block_2(ctx) {
    	let ol;
    	let each_value_1 = /*result*/ ctx[36].suggestions;
    	validate_each_argument(each_value_1);
    	let each_blocks = [];

    	for (let i = 0; i < each_value_1.length; i += 1) {
    		each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
    	}

    	const block = {
    		c: function create() {
    			ol = element("ol");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			attr_dev(ol, "class", "svelte-1b9jcp9");
    			add_location(ol, file, 1044, 3, 27071);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, ol, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				if (each_blocks[i]) {
    					each_blocks[i].m(ol, null);
    				}
    			}
    		},
    		p: function update(ctx, dirty) {
    			if (dirty[0] & /*results*/ 2) {
    				each_value_1 = /*result*/ ctx[36].suggestions;
    				validate_each_argument(each_value_1);
    				let i;

    				for (i = 0; i < each_value_1.length; i += 1) {
    					const child_ctx = get_each_context_1(ctx, each_value_1, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    					} else {
    						each_blocks[i] = create_each_block_1(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(ol, null);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}

    				each_blocks.length = each_value_1.length;
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(ol);
    			destroy_each(each_blocks, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_2.name,
    		type: "if",
    		source: "(1044:42) ",
    		ctx
    	});

    	return block;
    }

    // (1042:2) {#if result.false_accept && getClassificationType(result) === 'FN'}
    function create_if_block_1(ctx) {
    	let em;

    	const block = {
    		c: function create() {
    			em = element("em");
    			em.textContent = "Incorrectly accepted as correct";
    			attr_dev(em, "class", "svelte-1b9jcp9");
    			add_location(em, file, 1042, 3, 26984);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, em, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(em);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1.name,
    		type: "if",
    		source: "(1042:2) {#if result.false_accept && getClassificationType(result) === 'FN'}",
    		ctx
    	});

    	return block;
    }

    // (1053:6) {#if suggestion.weight_details}
    function create_if_block_3(ctx) {
    	let span;
    	let t0;
    	let t1_value = /*suggestion*/ ctx[39].weight_details.lexicon_weight.toFixed(5) + "";
    	let t1;
    	let t2;
    	let t3_value = /*suggestion*/ ctx[39].weight_details.mutator_weight.toFixed(5) + "";
    	let t3;
    	let t4;
    	let t5_value = /*suggestion*/ ctx[39].weight_details.reweight_start.toFixed(0) + "";
    	let t5;
    	let t6;

    	let t7_value = (/*suggestion*/ ctx[39].weight_details.reweight_mid < 0
    	? '-'
    	: /*suggestion*/ ctx[39].weight_details.reweight_mid.toFixed(0)) + "";

    	let t7;
    	let t8;
    	let t9_value = /*suggestion*/ ctx[39].weight_details.reweight_end.toFixed(0) + "";
    	let t9;
    	let t10;

    	const block = {
    		c: function create() {
    			span = element("span");
    			t0 = text("(lex: ");
    			t1 = text(t1_value);
    			t2 = text(", \n\t\t\t\t\t\t\t\tmut: ");
    			t3 = text(t3_value);
    			t4 = text(", \n\t\t\t\t\t\t\t\trew: ");
    			t5 = text(t5_value);
    			t6 = text("/");
    			t7 = text(t7_value);
    			t8 = text("/");
    			t9 = text(t9_value);
    			t10 = text(")");
    			attr_dev(span, "class", "weight-details svelte-1b9jcp9");
    			add_location(span, file, 1053, 7, 27306);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, span, anchor);
    			append_dev(span, t0);
    			append_dev(span, t1);
    			append_dev(span, t2);
    			append_dev(span, t3);
    			append_dev(span, t4);
    			append_dev(span, t5);
    			append_dev(span, t6);
    			append_dev(span, t7);
    			append_dev(span, t8);
    			append_dev(span, t9);
    			append_dev(span, t10);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty[0] & /*results*/ 2 && t1_value !== (t1_value = /*suggestion*/ ctx[39].weight_details.lexicon_weight.toFixed(5) + "")) set_data_dev(t1, t1_value);
    			if (dirty[0] & /*results*/ 2 && t3_value !== (t3_value = /*suggestion*/ ctx[39].weight_details.mutator_weight.toFixed(5) + "")) set_data_dev(t3, t3_value);
    			if (dirty[0] & /*results*/ 2 && t5_value !== (t5_value = /*suggestion*/ ctx[39].weight_details.reweight_start.toFixed(0) + "")) set_data_dev(t5, t5_value);

    			if (dirty[0] & /*results*/ 2 && t7_value !== (t7_value = (/*suggestion*/ ctx[39].weight_details.reweight_mid < 0
    			? '-'
    			: /*suggestion*/ ctx[39].weight_details.reweight_mid.toFixed(0)) + "")) set_data_dev(t7, t7_value);

    			if (dirty[0] & /*results*/ 2 && t9_value !== (t9_value = /*suggestion*/ ctx[39].weight_details.reweight_end.toFixed(0) + "")) set_data_dev(t9, t9_value);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(span);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_3.name,
    		type: "if",
    		source: "(1053:6) {#if suggestion.weight_details}",
    		ctx
    	});

    	return block;
    }

    // (1046:3) {#each result.suggestions as suggestion, i}
    function create_each_block_1(ctx) {
    	let li;
    	let span;
    	let t0_value = /*suggestion*/ ctx[39].value + "";
    	let t0;
    	let span_class_value;
    	let t1;
    	let small;
    	let t2_value = /*suggestion*/ ctx[39].weight.toFixed(5) + "";
    	let t2;
    	let t3;
    	let t4;
    	let if_block = /*suggestion*/ ctx[39].weight_details && create_if_block_3(ctx);

    	const block = {
    		c: function create() {
    			li = element("li");
    			span = element("span");
    			t0 = text(t0_value);
    			t1 = space();
    			small = element("small");
    			t2 = text(t2_value);
    			t3 = space();
    			if (if_block) if_block.c();
    			t4 = space();
    			attr_dev(span, "class", span_class_value = "" + (null_to_empty(wordClass(/*result*/ ctx[36], /*i*/ ctx[41])) + " svelte-1b9jcp9"));
    			add_location(span, file, 1047, 5, 27137);
    			attr_dev(small, "class", "svelte-1b9jcp9");
    			add_location(small, file, 1050, 5, 27216);
    			attr_dev(li, "class", "svelte-1b9jcp9");
    			add_location(li, file, 1046, 4, 27127);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, li, anchor);
    			append_dev(li, span);
    			append_dev(span, t0);
    			append_dev(li, t1);
    			append_dev(li, small);
    			append_dev(small, t2);
    			append_dev(small, t3);
    			if (if_block) if_block.m(small, null);
    			append_dev(li, t4);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty[0] & /*results*/ 2 && t0_value !== (t0_value = /*suggestion*/ ctx[39].value + "")) set_data_dev(t0, t0_value);

    			if (dirty[0] & /*results*/ 2 && span_class_value !== (span_class_value = "" + (null_to_empty(wordClass(/*result*/ ctx[36], /*i*/ ctx[41])) + " svelte-1b9jcp9"))) {
    				attr_dev(span, "class", span_class_value);
    			}

    			if (dirty[0] & /*results*/ 2 && t2_value !== (t2_value = /*suggestion*/ ctx[39].weight.toFixed(5) + "")) set_data_dev(t2, t2_value);

    			if (/*suggestion*/ ctx[39].weight_details) {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    				} else {
    					if_block = create_if_block_3(ctx);
    					if_block.c();
    					if_block.m(small, null);
    				}
    			} else if (if_block) {
    				if_block.d(1);
    				if_block = null;
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(li);
    			if (if_block) if_block.d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block_1.name,
    		type: "each",
    		source: "(1046:3) {#each result.suggestions as suggestion, i}",
    		ctx
    	});

    	return block;
    }

    // (1005:0) {#each results as result}
    function create_each_block(ctx) {
    	let tr;
    	let td0;
    	let p0;
    	let a;
    	let t0_value = /*result*/ ctx[36].input + "";
    	let t0;
    	let a_href_value;
    	let t1;
    	let t2;
    	let p1;
    	let strong;
    	let t4;
    	let span;
    	let t5_value = getClassificationLabel(/*result*/ ctx[36]) + "";
    	let t5;
    	let t6;
    	let show_if_4 = getClassificationType(/*result*/ ctx[36]) === 'TP';
    	let t7;
    	let show_if_3 = getClassificationType(/*result*/ ctx[36]) === 'TP' || getClassificationType(/*result*/ ctx[36]) === 'FN';
    	let t8;
    	let show_if_2 = getClassificationType(/*result*/ ctx[36]) === 'TP';
    	let t9;
    	let td1;
    	let show_if;
    	let show_if_1;
    	let t10;
    	let tr_class_value;
    	let tr_id_value;
    	let if_block0 = /*result*/ ctx[36].expected !== null && create_if_block_10(ctx);
    	let if_block1 = show_if_4 && create_if_block_7(ctx);
    	let if_block2 = show_if_3 && create_if_block_6(ctx);
    	let if_block3 = show_if_2 && create_if_block_5(ctx);

    	function select_block_type_3(ctx, dirty) {
    		if (dirty[0] & /*results*/ 2) show_if = null;
    		if (dirty[0] & /*results*/ 2) show_if_1 = null;
    		if (show_if == null) show_if = !!(/*result*/ ctx[36].false_accept && getClassificationType(/*result*/ ctx[36]) === 'FN');
    		if (show_if) return create_if_block_1;
    		if (/*result*/ ctx[36].suggestions.length > 0) return create_if_block_2;
    		if (show_if_1 == null) show_if_1 = !!(getClassificationType(/*result*/ ctx[36]) !== 'TN');
    		if (show_if_1) return create_if_block_4;
    	}

    	let current_block_type = select_block_type_3(ctx, [-1, -1]);
    	let if_block4 = current_block_type && current_block_type(ctx);

    	const block = {
    		c: function create() {
    			tr = element("tr");
    			td0 = element("td");
    			p0 = element("p");
    			a = element("a");
    			t0 = text(t0_value);
    			t1 = space();
    			if (if_block0) if_block0.c();
    			t2 = space();
    			p1 = element("p");
    			strong = element("strong");
    			strong.textContent = "Result:";
    			t4 = space();
    			span = element("span");
    			t5 = text(t5_value);
    			t6 = space();
    			if (if_block1) if_block1.c();
    			t7 = space();
    			if (if_block2) if_block2.c();
    			t8 = space();
    			if (if_block3) if_block3.c();
    			t9 = space();
    			td1 = element("td");
    			if (if_block4) if_block4.c();
    			t10 = space();
    			attr_dev(a, "href", a_href_value = "#" + /*result*/ ctx[36].input);
    			attr_dev(a, "class", "word svelte-1b9jcp9");
    			add_location(a, file, 1008, 4, 25867);
    			attr_dev(p0, "class", "svelte-1b9jcp9");
    			add_location(p0, file, 1007, 3, 25859);
    			attr_dev(strong, "class", "svelte-1b9jcp9");
    			add_location(strong, file, 1015, 4, 26050);
    			attr_dev(span, "class", "classification-label");
    			set_style(span, "font-weight", "bold");

    			set_style(span, "color", getClassificationType(/*result*/ ctx[36]) === 'FP' || getClassificationType(/*result*/ ctx[36]) === 'FN'
    			? '#d00'
    			: '#080');

    			add_location(span, file, 1016, 4, 26079);
    			attr_dev(p1, "class", "svelte-1b9jcp9");
    			add_location(p1, file, 1014, 3, 26042);
    			attr_dev(td0, "class", "right svelte-1b9jcp9");
    			add_location(td0, file, 1006, 2, 25837);
    			attr_dev(td1, "class", "svelte-1b9jcp9");
    			add_location(td1, file, 1040, 2, 26906);
    			attr_dev(tr, "class", tr_class_value = "" + (null_to_empty(resultClass(/*result*/ ctx[36])) + " svelte-1b9jcp9"));
    			attr_dev(tr, "id", tr_id_value = /*result*/ ctx[36].input);
    			add_location(tr, file, 1005, 1, 25782);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, tr, anchor);
    			append_dev(tr, td0);
    			append_dev(td0, p0);
    			append_dev(p0, a);
    			append_dev(a, t0);
    			append_dev(p0, t1);
    			if (if_block0) if_block0.m(p0, null);
    			append_dev(td0, t2);
    			append_dev(td0, p1);
    			append_dev(p1, strong);
    			append_dev(p1, t4);
    			append_dev(p1, span);
    			append_dev(span, t5);
    			append_dev(p1, t6);
    			if (if_block1) if_block1.m(p1, null);
    			append_dev(td0, t7);
    			if (if_block2) if_block2.m(td0, null);
    			append_dev(td0, t8);
    			if (if_block3) if_block3.m(td0, null);
    			append_dev(tr, t9);
    			append_dev(tr, td1);
    			if (if_block4) if_block4.m(td1, null);
    			append_dev(tr, t10);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty[0] & /*results*/ 2 && t0_value !== (t0_value = /*result*/ ctx[36].input + "")) set_data_dev(t0, t0_value);

    			if (dirty[0] & /*results*/ 2 && a_href_value !== (a_href_value = "#" + /*result*/ ctx[36].input)) {
    				attr_dev(a, "href", a_href_value);
    			}

    			if (/*result*/ ctx[36].expected !== null) {
    				if (if_block0) {
    					if_block0.p(ctx, dirty);
    				} else {
    					if_block0 = create_if_block_10(ctx);
    					if_block0.c();
    					if_block0.m(p0, null);
    				}
    			} else if (if_block0) {
    				if_block0.d(1);
    				if_block0 = null;
    			}

    			if (dirty[0] & /*results*/ 2 && t5_value !== (t5_value = getClassificationLabel(/*result*/ ctx[36]) + "")) set_data_dev(t5, t5_value);

    			if (dirty[0] & /*results*/ 2) {
    				set_style(span, "color", getClassificationType(/*result*/ ctx[36]) === 'FP' || getClassificationType(/*result*/ ctx[36]) === 'FN'
    				? '#d00'
    				: '#080');
    			}

    			if (dirty[0] & /*results*/ 2) show_if_4 = getClassificationType(/*result*/ ctx[36]) === 'TP';

    			if (show_if_4) {
    				if (if_block1) {
    					if_block1.p(ctx, dirty);
    				} else {
    					if_block1 = create_if_block_7(ctx);
    					if_block1.c();
    					if_block1.m(p1, null);
    				}
    			} else if (if_block1) {
    				if_block1.d(1);
    				if_block1 = null;
    			}

    			if (dirty[0] & /*results*/ 2) show_if_3 = getClassificationType(/*result*/ ctx[36]) === 'TP' || getClassificationType(/*result*/ ctx[36]) === 'FN';

    			if (show_if_3) {
    				if (if_block2) {
    					if_block2.p(ctx, dirty);
    				} else {
    					if_block2 = create_if_block_6(ctx);
    					if_block2.c();
    					if_block2.m(td0, t8);
    				}
    			} else if (if_block2) {
    				if_block2.d(1);
    				if_block2 = null;
    			}

    			if (dirty[0] & /*results*/ 2) show_if_2 = getClassificationType(/*result*/ ctx[36]) === 'TP';

    			if (show_if_2) {
    				if (if_block3) {
    					if_block3.p(ctx, dirty);
    				} else {
    					if_block3 = create_if_block_5(ctx);
    					if_block3.c();
    					if_block3.m(td0, null);
    				}
    			} else if (if_block3) {
    				if_block3.d(1);
    				if_block3 = null;
    			}

    			if (current_block_type === (current_block_type = select_block_type_3(ctx, dirty)) && if_block4) {
    				if_block4.p(ctx, dirty);
    			} else {
    				if (if_block4) if_block4.d(1);
    				if_block4 = current_block_type && current_block_type(ctx);

    				if (if_block4) {
    					if_block4.c();
    					if_block4.m(td1, null);
    				}
    			}

    			if (dirty[0] & /*results*/ 2 && tr_class_value !== (tr_class_value = "" + (null_to_empty(resultClass(/*result*/ ctx[36])) + " svelte-1b9jcp9"))) {
    				attr_dev(tr, "class", tr_class_value);
    			}

    			if (dirty[0] & /*results*/ 2 && tr_id_value !== (tr_id_value = /*result*/ ctx[36].input)) {
    				attr_dev(tr, "id", tr_id_value);
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(tr);
    			if (if_block0) if_block0.d();
    			if (if_block1) if_block1.d();
    			if (if_block2) if_block2.d();
    			if (if_block3) if_block3.d();

    			if (if_block4) {
    				if_block4.d();
    			}
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block.name,
    		type: "each",
    		source: "(1005:0) {#each results as result}",
    		ctx
    	});

    	return block;
    }

    function create_fragment(ctx) {
    	let button;
    	let span0;
    	let t0;
    	let t1;
    	let span1;
    	let t2;
    	let button_aria_label_value;
    	let t3;
    	let div;
    	let t4;
    	let mounted;
    	let dispose;
    	let if_block0 = /*report*/ ctx[0] != null && create_if_block_20(ctx);

    	function select_block_type(ctx, dirty) {
    		if (/*results*/ ctx[1] == null) return create_if_block;
    		return create_else_block;
    	}

    	let current_block_type = select_block_type(ctx);
    	let if_block1 = current_block_type(ctx);

    	const block = {
    		c: function create() {
    			button = element("button");
    			span0 = element("span");
    			t0 = text(/*themeIcon*/ ctx[4]);
    			t1 = space();
    			span1 = element("span");
    			t2 = text(/*themeLabel*/ ctx[3]);
    			t3 = space();
    			div = element("div");
    			if (if_block0) if_block0.c();
    			t4 = space();
    			if_block1.c();
    			add_location(span0, file, 796, 1, 19303);
    			add_location(span1, file, 797, 1, 19329);
    			attr_dev(button, "class", "theme-toggle svelte-1b9jcp9");
    			attr_dev(button, "aria-label", button_aria_label_value = `Toggle theme, current mode: ${/*themeLabel*/ ctx[3]}`);
    			attr_dev(button, "title", "Switch between light, dark, and auto theme modes");
    			add_location(button, file, 795, 0, 19136);
    			attr_dev(div, "class", "container svelte-1b9jcp9");
    			add_location(div, file, 800, 0, 19366);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, button, anchor);
    			append_dev(button, span0);
    			append_dev(span0, t0);
    			append_dev(button, t1);
    			append_dev(button, span1);
    			append_dev(span1, t2);
    			insert_dev(target, t3, anchor);
    			insert_dev(target, div, anchor);
    			if (if_block0) if_block0.m(div, null);
    			append_dev(div, t4);
    			if_block1.m(div, null);

    			if (!mounted) {
    				dispose = listen_dev(button, "click", /*cycleTheme*/ ctx[6], false, false, false, false);
    				mounted = true;
    			}
    		},
    		p: function update(ctx, dirty) {
    			if (dirty[0] & /*themeIcon*/ 16) set_data_dev(t0, /*themeIcon*/ ctx[4]);
    			if (dirty[0] & /*themeLabel*/ 8) set_data_dev(t2, /*themeLabel*/ ctx[3]);

    			if (dirty[0] & /*themeLabel*/ 8 && button_aria_label_value !== (button_aria_label_value = `Toggle theme, current mode: ${/*themeLabel*/ ctx[3]}`)) {
    				attr_dev(button, "aria-label", button_aria_label_value);
    			}

    			if (/*report*/ ctx[0] != null) {
    				if (if_block0) {
    					if_block0.p(ctx, dirty);
    				} else {
    					if_block0 = create_if_block_20(ctx);
    					if_block0.c();
    					if_block0.m(div, t4);
    				}
    			} else if (if_block0) {
    				if_block0.d(1);
    				if_block0 = null;
    			}

    			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block1) {
    				if_block1.p(ctx, dirty);
    			} else {
    				if_block1.d(1);
    				if_block1 = current_block_type(ctx);

    				if (if_block1) {
    					if_block1.c();
    					if_block1.m(div, null);
    				}
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(button);
    			if (detaching) detach_dev(t3);
    			if (detaching) detach_dev(div);
    			if (if_block0) if_block0.d();
    			if_block1.d();
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function applyTheme(newTheme) {
    	const root = document.documentElement;

    	if (newTheme === 'auto') {
    		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    		root.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    	} else {
    		root.setAttribute('data-theme', newTheme);
    	}
    }

    function getPositionSortValue(result) {
    	// No suggestions is worst
    	if (result.position === null && result.suggestions.length === 0) {
    		return Number.MAX_SAFE_INTEGER;
    	}

    	// Only wrong suggestions is second worst
    	if (result.position === null && result.suggestions.length > 0) {
    		return Number.MAX_SAFE_INTEGER - 1;
    	}

    	// Actual positions
    	return result.position;
    }

    function formatMetric(value) {
    	return value === "N/A" ? value : value + "%";
    }

    function humanTimeMillis(time) {
    	const ms = time.secs * 1000 + time.subsec_nanos / 1000000;
    	return `${ms} ms`;
    }

    function humanTime(time) {
    	let s = timeToFloat(time);

    	if (s > 60) {
    		const m = Math.floor(s / 60);
    		s = s % 60;
    		return `${m}:${s.toFixed(3)}`;
    	}

    	return `00:${s.toFixed(3)}`;
    }

    function timeToFloat(time) {
    	return time.secs + time.subsec_nanos / 1e12;
    }

    function calculateTotalRuntime(report) {
    	if (report == null) {
    		return { secs: 0, subsec_nanos: 0 };
    	}

    	const count = report.results.reduce((acc, cur) => timeToFloat(cur.time) + acc, 0.0);
    	const [secs, subsec_nanos] = count.toString().split(".");

    	return {
    		secs: parseInt(secs, 10),
    		subsec_nanos: parseInt(subsec_nanos, 10)
    	};
    }

    function wordClass(result, i) {
    	if (result.position === i) {
    		return "word word-correct";
    	}

    	return "word";
    }

    function getClassificationType(result) {
    	const isPair = result.expected !== null; // Is this a test pair (error word)?

    	if (isPair) {
    		// Input is an error word (expected has a correction)
    		// For error words, false_accept determines if spellchecker accepts or flags it
    		if (!result.false_accept) {
    			return 'TP'; // True Positive: error word flagged as incorrect
    		} else {
    			return 'FN'; // False Negative: error word incorrectly accepted
    		}
    	} else {
    		// Input is a correct word (expected is null)
    		// Use false_accept flag to determine classification
    		if (result.false_accept) {
    			return 'FP'; // False Positive: correct word incorrectly flagged
    		} else {
    			return 'TN'; // True Negative: correct word correctly accepted
    		}
    	}
    }

    function getClassificationLabel(result) {
    	const type = getClassificationType(result);

    	switch (type) {
    		case 'TP':
    			return 'True positive';
    		case 'FN':
    			return 'False negative';
    		case 'TN':
    			return 'True negative';
    		case 'FP':
    			return 'False positive';
    		default:
    			return '';
    	}
    }

    function resultClass(result) {
    	const classType = getClassificationType(result);

    	if (classType === 'TP') {
    		// True Positive: error word correctly classified as error
    		// Show different shades based on whether correction was found
    		if (result.position === 0) {
    			return "indicator-tp-first"; // Correction in first position
    		} else if (result.position !== null) {
    			return "indicator-tp-found"; // Correction found elsewhere
    		} else {
    			return "indicator-true-positive"; // Classified correctly, correction not in suggestions
    		}
    	} else if (classType === 'FN') {
    		return "indicator-false-negative"; // Error word incorrectly classified as correct (false accept)
    	} else if (classType === 'TN') {
    		return "indicator-true-negative"; // Correct word correctly classified as correct
    	} else if (classType === 'FP') {
    		return "indicator-false-positive"; // Correct word incorrectly classified as error
    	}

    	return "indicator-default";
    }

    function getSpellerTitle(report) {
    	if (!report || !report.metadata || !report.metadata.info) {
    		return "Spellchecker Accuracy Report";
    	}

    	const locale = report.metadata.info.locale || "?";

    	const title = report.metadata.info.title && report.metadata.info.title[0]
    	? report.metadata.info.title[0].$value || "Spellchecker"
    	: "Spellchecker";

    	return `${title} (${locale})`;
    }

    function instance($$self, $$props, $$invalidate) {
    	let totalRuntime;
    	let themeIcon;
    	let themeLabel;
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('App', slots, []);
    	let report = null;
    	let results = null;
    	let originalResults = null;
    	let sortMode = null;
    	let theme = 'auto'; // 'light', 'dark', or 'auto'

    	// Theme management
    	onMount(() => {
    		// Load theme preference from localStorage with validation
    		let savedTheme;

    		try {
    			savedTheme = localStorage.getItem('theme');
    		} catch(e) {
    			// If storage access fails (e.g., blocked/disabled), fall back to default
    			savedTheme = null;
    		}

    		const allowedThemes = ['light', 'dark', 'auto'];
    		const initialTheme = allowedThemes.includes(savedTheme) ? savedTheme : 'auto';
    		$$invalidate(31, theme = initialTheme);

    		// Sync with the theme that was already applied by inline script in index.html
    		applyTheme(initialTheme);

    		// Listen for system theme changes
    		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    		const handleChange = e => {
    			if (theme === 'auto') {
    				applyTheme('auto');
    			}
    		};

    		// Use addEventListener where available, fall back to addListener for older browsers
    		if (typeof mediaQuery.addEventListener === 'function') {
    			mediaQuery.addEventListener('change', handleChange);

    			// Cleanup: remove event listener when component unmounts
    			return () => {
    				mediaQuery.removeEventListener('change', handleChange);
    			};
    		} else if (typeof mediaQuery.addListener === 'function') {
    			mediaQuery.addListener(handleChange);

    			// Cleanup for legacy browsers
    			return () => {
    				mediaQuery.removeListener(handleChange);
    			};
    		}

    		// Fallback no-op cleanup if no supported listener API is available
    		return () => {
    			
    		};
    	});

    	function cycleTheme() {
    		const themes = ['light', 'dark', 'auto'];
    		const currentIndex = themes.indexOf(theme);
    		$$invalidate(31, theme = themes[(currentIndex + 1) % themes.length]);

    		try {
    			localStorage.setItem('theme', theme);
    		} catch(e) {
    			
    		} // Ignore storage errors; still apply the theme so the toggle continues to work

    		applyTheme(theme);
    	}

    	function sortByTime() {
    		const sorter = (a, b) => {
    			if (a.time.secs === b.time.secs) {
    				if (a.time.subsec_nanos === b.time.subsec_nanos) {
    					return 0;
    				}

    				return a.time.subsec_nanos > b.time.subsec_nanos ? -1 : 1;
    			} else {
    				return a.time.secs > b.time.secs ? -1 : 1;
    			}
    		};

    		if (sortMode === "time:asc") {
    			results.reverse();
    			$$invalidate(2, sortMode = "time:desc");
    		} else {
    			results.sort(sorter);
    			$$invalidate(2, sortMode = "time:asc");
    		}

    		$$invalidate(1, results);
    	}

    	function sortByPosition() {
    		const sorter = (a, b) => {
    			const aVal = getPositionSortValue(a);
    			const bVal = getPositionSortValue(b);
    			return aVal - bVal;
    		};

    		if (sortMode === "position:asc") {
    			results.reverse();
    			$$invalidate(2, sortMode = "position:desc");
    		} else {
    			results.sort(sorter);
    			$$invalidate(2, sortMode = "position:asc");
    		}

    		$$invalidate(1, results);
    	}

    	function sortByDistance() {
    		const sorter = (a, b) => {
    			return a.distance - b.distance;
    		};

    		if (sortMode === "distance:asc") {
    			results.reverse();
    			$$invalidate(2, sortMode = "distance:desc");
    		} else {
    			results.sort(sorter);
    			$$invalidate(2, sortMode = "distance:asc");
    		}

    		$$invalidate(1, results);
    	}

    	function sortByInputOrder() {
    		$$invalidate(1, results = originalResults.slice());
    		$$invalidate(2, sortMode = null);
    	}

    	function sortByClassification() {
    		const classificationOrder = { 'TP': 0, 'TN': 1, 'FP': 2, 'FN': 3 };

    		const sorter = (a, b) => {
    			const aType = getClassificationType(a);
    			const bType = getClassificationType(b);
    			return classificationOrder[aType] - classificationOrder[bType];
    		};

    		if (sortMode === "classification:asc") {
    			results.reverse();
    			$$invalidate(2, sortMode = "classification:desc");
    		} else {
    			results.sort(sorter);
    			$$invalidate(2, sortMode = "classification:asc");
    		}

    		$$invalidate(1, results);
    	}

    	function asPercentage(input) {
    		const v = input / report.results.length * 100;
    		return v.toFixed(2);
    	}

    	// Get only True Positive words (error words classified as incorrect)
    	function getTruePositives() {
    		return report.results.filter(r => {
    			const isPair = r.expected !== null;

    			if (isPair) {
    				// Error word: TP if not false_accept (false_accept must be explicitly true)
    				return r.false_accept !== true;
    			}

    			// Correct word: never TP
    			return false;
    		});
    	}

    	function firstPosition() {
    		const tpWords = getTruePositives();
    		if (tpWords.length === 0) return "0.00";
    		const count = tpWords.filter(r => r.position === 0).length;
    		return (count / tpWords.length * 100).toFixed(2);
    	}

    	function topFive() {
    		const tpWords = getTruePositives();
    		if (tpWords.length === 0) return "0.00";
    		const count = tpWords.filter(r => r.position !== null && r.position < 5).length;
    		return (count / tpWords.length * 100).toFixed(2);
    	}

    	function anywhere() {
    		const tpWords = getTruePositives();
    		if (tpWords.length === 0) return "0.00";
    		const count = tpWords.filter(r => r.position !== null).length;
    		return (count / tpWords.length * 100).toFixed(2);
    	}

    	function noSuggestions() {
    		const tpWords = getTruePositives();
    		if (tpWords.length === 0) return "0.00";
    		const count = tpWords.filter(r => r.suggestions.length === 0).length;
    		return (count / tpWords.length * 100).toFixed(2);
    	}

    	function onlyWrong() {
    		const tpWords = getTruePositives();
    		if (tpWords.length === 0) return "0.00";
    		const count = tpWords.filter(r => r.position === null && r.suggestions.length > 0).length;
    		return (count / tpWords.length * 100).toFixed(2);
    	}

    	function firstPositionCount() {
    		return getTruePositives().filter(r => r.position === 0).length;
    	}

    	function topFiveCount() {
    		return getTruePositives().filter(r => r.position !== null && r.position < 5).length;
    	}

    	function anywhereCount() {
    		return getTruePositives().filter(r => r.position !== null).length;
    	}

    	function noSuggestionsCount() {
    		return getTruePositives().filter(r => r.suggestions.length === 0).length;
    	}

    	function onlyWrongCount() {
    		return getTruePositives().filter(r => r.position === null && r.suggestions.length > 0).length;
    	}

    	function precision() {
    		const tpWords = getTruePositives();
    		const anywhereCount = tpWords.filter(r => r.position !== null).length;
    		const withSuggestions = tpWords.filter(r => r.suggestions.length > 0).length;
    		if (withSuggestions === 0) return "0.00";
    		return (anywhereCount / withSuggestions * 100).toFixed(2);
    	}

    	function recall() {
    		const tpWords = getTruePositives();
    		if (tpWords.length === 0) return "0.00";
    		const anywhereCount = tpWords.filter(r => r.position !== null).length;
    		return (anywhereCount / tpWords.length * 100).toFixed(2);
    	}

    	function accuracy() {
    		// Accuracy: correct suggestions / total suggestions (including all wrong ones)
    		const tpWords = getTruePositives();

    		const correctCount = tpWords.filter(r => r.position !== null).length;
    		const totalSuggestions = tpWords.reduce((sum, r) => sum + r.suggestions.length, 0);
    		if (totalSuggestions === 0) return "0.00";
    		return (correctCount / totalSuggestions * 100).toFixed(2);
    	}

    	function fScore() {
    		const p = parseFloat(precision());
    		const r = parseFloat(recall());
    		if (p + r === 0) return "0.00";
    		return (2 * p * r / (p + r)).toFixed(2);
    	}

    	// Spell checker classification metrics (based on accept/reject behavior)
    	function classifierPrecision() {
    		const tp = report.summary.true_positive || 0;
    		const fp = report.summary.false_accept || 0;
    		if (tp + fp === 0) return "N/A";
    		return (tp / (tp + fp) * 100).toFixed(2);
    	}

    	function classifierRecall() {
    		const tp = report.summary.true_positive || 0;
    		const fn = report.summary.false_negative || 0;
    		if (tp + fn === 0) return "N/A";
    		return (tp / (tp + fn) * 100).toFixed(2);
    	}

    	function classifierAccuracy() {
    		const tp = report.summary.true_positive || 0;
    		const tn = report.summary.true_negative || 0;
    		const fp = report.summary.false_accept || 0;
    		const fn = report.summary.false_negative || 0;
    		const total = tp + tn + fp + fn;
    		if (total === 0) return "N/A";
    		return ((tp + tn) / total * 100).toFixed(2);
    	}

    	function classifierFScore() {
    		const p = classifierPrecision();
    		const r = classifierRecall();
    		if (p === "N/A" || r === "N/A") return "N/A";
    		const pNum = parseFloat(p);
    		const rNum = parseFloat(r);
    		if (pNum + rNum === 0) return "0.00";
    		return (2 * pNum * rNum / (pNum + rNum)).toFixed(2);
    	}

    	function wordsPerSecond(totalRuntime) {
    		const len = report.results.length;
    		const total = timeToFloat(totalRuntime);
    		console.log(totalRuntime, len, total);
    		return (len / total).toFixed(2);
    	}

    	function fetchReport() {
    		return fetch(`./report.json`).then(r => r.json()).then(data => {
    			$$invalidate(0, report = data);
    			originalResults = report.results.slice();
    			$$invalidate(1, results = report.results.slice());
    		});
    	}

    	fetchReport();
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console_1.warn(`<App> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({
    		onMount,
    		report,
    		results,
    		originalResults,
    		sortMode,
    		theme,
    		cycleTheme,
    		applyTheme,
    		sortByTime,
    		getPositionSortValue,
    		sortByPosition,
    		sortByDistance,
    		sortByInputOrder,
    		sortByClassification,
    		asPercentage,
    		getTruePositives,
    		firstPosition,
    		topFive,
    		anywhere,
    		noSuggestions,
    		onlyWrong,
    		firstPositionCount,
    		topFiveCount,
    		anywhereCount,
    		noSuggestionsCount,
    		onlyWrongCount,
    		precision,
    		recall,
    		accuracy,
    		fScore,
    		classifierPrecision,
    		classifierRecall,
    		classifierAccuracy,
    		classifierFScore,
    		formatMetric,
    		humanTimeMillis,
    		humanTime,
    		timeToFloat,
    		calculateTotalRuntime,
    		wordsPerSecond,
    		wordClass,
    		getClassificationType,
    		getClassificationLabel,
    		resultClass,
    		fetchReport,
    		getSpellerTitle,
    		themeLabel,
    		themeIcon,
    		totalRuntime
    	});

    	$$self.$inject_state = $$props => {
    		if ('report' in $$props) $$invalidate(0, report = $$props.report);
    		if ('results' in $$props) $$invalidate(1, results = $$props.results);
    		if ('originalResults' in $$props) originalResults = $$props.originalResults;
    		if ('sortMode' in $$props) $$invalidate(2, sortMode = $$props.sortMode);
    		if ('theme' in $$props) $$invalidate(31, theme = $$props.theme);
    		if ('themeLabel' in $$props) $$invalidate(3, themeLabel = $$props.themeLabel);
    		if ('themeIcon' in $$props) $$invalidate(4, themeIcon = $$props.themeIcon);
    		if ('totalRuntime' in $$props) $$invalidate(5, totalRuntime = $$props.totalRuntime);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty[0] & /*report*/ 1) {
    			$$invalidate(5, totalRuntime = calculateTotalRuntime(report));
    		}

    		if ($$self.$$.dirty[1] & /*theme*/ 1) {
    			$$invalidate(4, themeIcon = theme === 'light'
    			? '☀️'
    			: theme === 'dark' ? '🌙' : '💻');
    		}

    		if ($$self.$$.dirty[1] & /*theme*/ 1) {
    			$$invalidate(3, themeLabel = theme === 'light'
    			? 'Light'
    			: theme === 'dark' ? 'Dark' : 'Auto');
    		}
    	};

    	return [
    		report,
    		results,
    		sortMode,
    		themeLabel,
    		themeIcon,
    		totalRuntime,
    		cycleTheme,
    		sortByTime,
    		sortByPosition,
    		sortByDistance,
    		sortByInputOrder,
    		sortByClassification,
    		firstPosition,
    		topFive,
    		anywhere,
    		noSuggestions,
    		onlyWrong,
    		firstPositionCount,
    		topFiveCount,
    		anywhereCount,
    		noSuggestionsCount,
    		onlyWrongCount,
    		precision,
    		recall,
    		accuracy,
    		fScore,
    		classifierPrecision,
    		classifierRecall,
    		classifierAccuracy,
    		classifierFScore,
    		wordsPerSecond,
    		theme
    	];
    }

    class App extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance, create_fragment, safe_not_equal, {}, null, [-1, -1]);

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "App",
    			options,
    			id: create_fragment.name
    		});
    	}
    }

    const app = new App({
    	target: document.body,
    });

    return app;

})();
//# sourceMappingURL=bundle.js.map
