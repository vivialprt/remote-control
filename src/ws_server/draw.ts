import { Button, mouse, right, left, up, down } from "@nut-tree/nut-js"


export async function drawRectangle(width: number, height = width) {
    await mouse.pressButton(Button.LEFT);
    await mouse.move(right(width));
    await mouse.move(down(height));
    await mouse.move(left(width));
    await mouse.move(up(height));
    await mouse.releaseButton(Button.LEFT);
}