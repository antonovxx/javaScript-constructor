import {getRow, getCol, toCSS} from "./utils";

function title (block) {

    const {tag = 'h1', styles} = block.options;
    return getRow(getCol(`<${tag}>${block.value}</${tag}>`), toCSS(styles));
}
function text (block) {
    const {tag = 'p', styles} = block.options;
    return getRow(getCol(`<${tag}>${block.value}</${tag}>`), toCSS(styles));
}

function columns (block) {
    const html = block.value.map(getCol);
    return getRow(html.join(''), toCSS(block.options.styles));
}

function image (block) {
    const {imageStyles: is, alt = '', styles} = block.options;
    return getRow((`<img src="${block.value}" alt='${alt} style='${toCSS(is)}'>`), toCSS(styles));
}

export const templates = {
    title, text, columns, image,
}