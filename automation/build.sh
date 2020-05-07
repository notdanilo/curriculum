#!/bin/bash
wasm-pack build --target web --no-typescript --out-dir 'gui' $@
