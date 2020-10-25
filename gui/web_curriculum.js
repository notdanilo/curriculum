
let wasm;

const heap = new Array(32).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let heap_next = heap.length;

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}
/**
* @param {NamedNodeMap} attributes
* @returns {number}
*/
export function components_web_knowledge_create(attributes) {
    var ret = wasm.components_web_knowledge_create(addHeapObject(attributes));
    return ret >>> 0;
}

let WASM_VECTOR_LEN = 0;

let cachedTextEncoder = new TextEncoder('utf-8');

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

function passStringToWasm0(arg, malloc, realloc) {

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length);
        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len);

    const mem = getUint8Memory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3);
        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}
/**
* @param {number} object
* @param {string} name
* @param {string} value
*/
export function components_web_knowledge_update_field(object, name, value) {
    var ptr0 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passStringToWasm0(value, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    wasm.components_web_knowledge_update_field(object, ptr0, len0, ptr1, len1);
}

let cachegetInt32Memory0 = null;
function getInt32Memory0() {
    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== wasm.memory.buffer) {
        cachegetInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachegetInt32Memory0;
}
/**
* @param {number} object
* @returns {string}
*/
export function components_web_knowledge_get_data(object) {
    try {
        wasm.components_web_knowledge_get_data(8, object);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_free(r0, r1);
    }
}

/**
* @param {number} object
* @param {ShadowRoot} shadow_root
*/
export function components_web_knowledge_on_loaded(object, shadow_root) {
    wasm.components_web_knowledge_on_loaded(object, addHeapObject(shadow_root));
}

/**
* @returns {string}
*/
export function components_web_knowledge_template() {
    try {
        wasm.components_web_knowledge_template(8);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_free(r0, r1);
    }
}

/**
* @param {NamedNodeMap} attributes
* @returns {number}
*/
export function components_web_infobar_create(attributes) {
    var ret = wasm.components_web_infobar_create(addHeapObject(attributes));
    return ret >>> 0;
}

/**
* @param {number} object
* @param {string} name
* @param {string} value
*/
export function components_web_infobar_update_field(object, name, value) {
    var ptr0 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passStringToWasm0(value, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    wasm.components_web_infobar_update_field(object, ptr0, len0, ptr1, len1);
}

/**
* @param {number} object
* @returns {string}
*/
export function components_web_infobar_get_data(object) {
    try {
        wasm.components_web_infobar_get_data(8, object);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_free(r0, r1);
    }
}

/**
* @param {number} object
* @param {ShadowRoot} shadow_root
*/
export function components_web_infobar_on_loaded(object, shadow_root) {
    wasm.components_web_infobar_on_loaded(object, addHeapObject(shadow_root));
}

/**
* @returns {string}
*/
export function components_web_infobar_template() {
    try {
        wasm.components_web_infobar_template(8);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_free(r0, r1);
    }
}

/**
* @param {NamedNodeMap} attributes
* @returns {number}
*/
export function components_web_education_create(attributes) {
    var ret = wasm.components_web_education_create(addHeapObject(attributes));
    return ret >>> 0;
}

/**
* @param {number} object
* @param {string} name
* @param {string} value
*/
export function components_web_education_update_field(object, name, value) {
    var ptr0 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passStringToWasm0(value, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    wasm.components_web_education_update_field(object, ptr0, len0, ptr1, len1);
}

/**
* @param {number} object
* @returns {string}
*/
export function components_web_education_get_data(object) {
    try {
        wasm.components_web_education_get_data(8, object);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_free(r0, r1);
    }
}

/**
* @param {number} object
* @param {ShadowRoot} shadow_root
*/
export function components_web_education_on_loaded(object, shadow_root) {
    wasm.components_web_education_on_loaded(object, addHeapObject(shadow_root));
}

/**
* @param {NamedNodeMap} attributes
* @returns {number}
*/
export function components_web_section_create(attributes) {
    var ret = wasm.components_web_section_create(addHeapObject(attributes));
    return ret >>> 0;
}

/**
* @param {number} object
* @param {string} name
* @param {string} value
*/
export function components_web_section_update_field(object, name, value) {
    var ptr0 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passStringToWasm0(value, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    wasm.components_web_section_update_field(object, ptr0, len0, ptr1, len1);
}

/**
* @param {number} object
* @returns {string}
*/
export function components_web_section_get_data(object) {
    try {
        wasm.components_web_section_get_data(8, object);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_free(r0, r1);
    }
}

/**
* @param {number} object
* @param {ShadowRoot} shadow_root
*/
export function components_web_section_on_loaded(object, shadow_root) {
    wasm.components_web_section_on_loaded(object, addHeapObject(shadow_root));
}

/**
* @returns {string}
*/
export function components_web_section_template() {
    try {
        wasm.components_web_section_template(8);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_free(r0, r1);
    }
}

/**
* @param {NamedNodeMap} attributes
* @returns {number}
*/
export function components_web_contact_create(attributes) {
    var ret = wasm.components_web_contact_create(addHeapObject(attributes));
    return ret >>> 0;
}

/**
* @param {number} object
* @param {string} name
* @param {string} value
*/
export function components_web_contact_update_field(object, name, value) {
    var ptr0 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passStringToWasm0(value, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    wasm.components_web_contact_update_field(object, ptr0, len0, ptr1, len1);
}

/**
* @param {number} object
* @returns {string}
*/
export function components_web_contact_get_data(object) {
    try {
        wasm.components_web_contact_get_data(8, object);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_free(r0, r1);
    }
}

/**
* @param {number} object
* @param {ShadowRoot} shadow_root
*/
export function components_web_contact_on_loaded(object, shadow_root) {
    wasm.components_web_contact_on_loaded(object, addHeapObject(shadow_root));
}

/**
* @returns {string}
*/
export function components_web_contact_template() {
    try {
        wasm.components_web_contact_template(8);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_free(r0, r1);
    }
}

/**
* @param {NamedNodeMap} attributes
* @returns {number}
*/
export function components_web_curriculum_create(attributes) {
    var ret = wasm.components_web_curriculum_create(addHeapObject(attributes));
    return ret >>> 0;
}

/**
* @param {number} object
* @param {string} name
* @param {string} value
*/
export function components_web_curriculum_update_field(object, name, value) {
    var ptr0 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passStringToWasm0(value, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    wasm.components_web_curriculum_update_field(object, ptr0, len0, ptr1, len1);
}

/**
* @param {number} object
* @returns {string}
*/
export function components_web_curriculum_get_data(object) {
    try {
        wasm.components_web_curriculum_get_data(8, object);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_free(r0, r1);
    }
}

/**
* @param {number} object
* @param {ShadowRoot} shadow_root
*/
export function components_web_curriculum_on_loaded(object, shadow_root) {
    wasm.components_web_curriculum_on_loaded(object, addHeapObject(shadow_root));
}

/**
* @returns {string}
*/
export function components_web_curriculum_template() {
    try {
        wasm.components_web_curriculum_template(8);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_free(r0, r1);
    }
}

/**
*/
export function web_component_target_wasm() {
    wasm.web_component_target_wasm();
}

/**
* @param {NamedNodeMap} attributes
* @returns {number}
*/
export function components_web_experience_create(attributes) {
    var ret = wasm.components_web_experience_create(addHeapObject(attributes));
    return ret >>> 0;
}

/**
* @param {number} object
* @param {string} name
* @param {string} value
*/
export function components_web_experience_update_field(object, name, value) {
    var ptr0 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passStringToWasm0(value, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    wasm.components_web_experience_update_field(object, ptr0, len0, ptr1, len1);
}

/**
* @param {number} object
* @returns {string}
*/
export function components_web_experience_get_data(object) {
    try {
        wasm.components_web_experience_get_data(8, object);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_free(r0, r1);
    }
}

/**
* @param {number} object
* @param {ShadowRoot} shadow_root
*/
export function components_web_experience_on_loaded(object, shadow_root) {
    wasm.components_web_experience_on_loaded(object, addHeapObject(shadow_root));
}

/**
* @returns {string}
*/
export function components_web_experience_template() {
    try {
        wasm.components_web_experience_template(8);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_free(r0, r1);
    }
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

async function load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {

        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);

            } catch (e) {
                if (module.headers.get('Content-Type') != 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else {
                    throw e;
                }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);

    } else {

        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };

        } else {
            return instance;
        }
    }
}

async function init(input) {
    if (typeof input === 'undefined') {
        input = import.meta.url.replace(/\.js$/, '_bg.wasm');
    }
    const imports = {};
    imports.wbg = {};
    imports.wbg.__wbindgen_object_drop_ref = function(arg0) {
        takeObject(arg0);
    };
    imports.wbg.__wbg_value_2b5084d2ab00433c = function(arg0, arg1) {
        var ret = getObject(arg1).value;
        var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len0;
        getInt32Memory0()[arg0 / 4 + 0] = ptr0;
    };
    imports.wbg.__wbg_getNamedItem_e88bfdc8554514d7 = function(arg0, arg1, arg2) {
        var ret = getObject(arg0).getNamedItem(getStringFromWasm0(arg1, arg2));
        return isLikeNone(ret) ? 0 : addHeapObject(ret);
    };
    imports.wbg.__wbindgen_throw = function(arg0, arg1) {
        throw new Error(getStringFromWasm0(arg0, arg1));
    };

    if (typeof input === 'string' || (typeof Request === 'function' && input instanceof Request) || (typeof URL === 'function' && input instanceof URL)) {
        input = fetch(input);
    }

    const { instance, module } = await load(await input, imports);

    wasm = instance.exports;
    init.__wbindgen_wasm_module = module;

    return wasm;
}

export default init;

