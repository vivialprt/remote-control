import { mouse, Region, screen } from "@nut-tree/nut-js";
import Jimp from "jimp";

const PIC_SIZE = 200;


function getCoords(
    ctrX: number, ctrY: number,
    screenW: number, screenH: number
): Region {
    let regionX = Math.max(ctrX - PIC_SIZE / 2, 0);
    let regionY = Math.max(ctrY - PIC_SIZE / 2, 0);
    regionX = Math.min(screenW - PIC_SIZE, regionX);
    regionY = Math.min(screenH - PIC_SIZE, regionY);

    return new Region(regionX, regionY, PIC_SIZE, PIC_SIZE);
};


export async function printScreen() {
    const width = await screen.width();
    const height = await screen.height();
    const { x: posX, y: posY } = await mouse.getPosition();
    const region = getCoords(posX, posY, width, height);

    const imageRegion = await screen.grabRegion(region);
    const image = new Jimp(await imageRegion.toRGB());
    const imageBase64 = await image.getBase64Async(image.getMIME());
    return imageBase64.slice(22);
};
