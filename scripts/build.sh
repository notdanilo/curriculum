#!/bin/bash
wasm-pack build --target web --no-typescript --out-dir '../gui' $@ core
#cp core/target/wasm32-unknown-unknown/release/finances_core.wasm gui
