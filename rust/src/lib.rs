use wasm_bindgen::prelude::*;
mod snake;

#[wasm_bindgen]
pub fn add(num1: i32, num2: i32) -> i32 {
    return num1 + num2;
}

#[wasm_bindgen]
pub fn snake(canvas_id: &str) {
    snake::run(canvas_id);
}
