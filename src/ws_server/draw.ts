import { Button, mouse, right, left, up, down, Point } from "@nut-tree/nut-js";


export async function drawRectangle(width: number, height = width) {
    await mouse.pressButton(Button.LEFT);
    await mouse.move(right(width));
    await mouse.move(down(height));
    await mouse.move(left(width));
    await mouse.move(up(height));
    await mouse.releaseButton(Button.LEFT);
};

export async function drawCircle(radius: number) {
    let { x: midX, y: midY } = await mouse.getPosition();
    const circlePath: Point[] = [];

    midY += radius;
  
    for (let i = 2 * Math.PI; i >= 0; i -= 0.01) {
        circlePath.push({
            x: midX - Math.sin(i) * radius,
            y: midY - Math.cos(i) * radius
        });
    };

    await mouse.pressButton(Button.LEFT);
    await mouse.move(circlePath);
    await mouse.releaseButton(Button.LEFT);
};
