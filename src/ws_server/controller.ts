import { RawData } from "ws";


export async function controller(msg: RawData): Promise<string> {
    const [cmd, ...args] = msg.toString().split(' ');
    console.log(cmd);

    switch (cmd) {
        case 'mouse_up':
            break;

        case 'mouse_down':
            break;

        case 'mouse_left':
            break;

        case 'mouse_right':
            break;

        case 'mouse_position':
            break;

        case 'draw_circle':
            break;

        case 'draw_square':
            break;

        case 'draw_rectangle':
            break;

        case 'prnt_scrn':
            break;
    };
    
    return cmd;
}