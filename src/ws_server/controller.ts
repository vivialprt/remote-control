import { mouse, up, down, left, right } from "@nut-tree/nut-js";
import { RawData } from "ws";
import { drawRectangle } from "./draw";


export async function controller(msg: RawData): Promise<string> {
    const [cmd, ...args] = msg.toString().split(' ');
    let response = cmd;

    switch (cmd) {
        case 'mouse_up':
            await mouse.move(up(Number(args[0])));
            break;

        case 'mouse_down':
            await mouse.move(down(Number(args[0])));
            break;

        case 'mouse_left':
            await mouse.move(left(Number(args[0])));
            break;

        case 'mouse_right':
            await mouse.move(right(Number(args[0])));
            break;

        case 'mouse_position':
            let {x, y} = await mouse.getPosition();
            response = `${cmd} ${x},${y}`;
            break;

        case 'draw_circle':
            break;

        case 'draw_square':
            await drawRectangle(Number(args[0]));
            break;

        case 'draw_rectangle':
            await drawRectangle(Number(args[0]), Number(args[1]));
            break;

        case 'prnt_scrn':
            break;
    };
    
    return response;
}