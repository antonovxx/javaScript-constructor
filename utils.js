export function getRow(content, styles = "") {
    return `<div class="row" style="${styles}">${content}</div>`;
}

export function getCol(content) {
    return `<div class="col-sm">${content}</div>`;
}

export function toCSS (styles = {}) {
    // const keys = Object.keys(styles);
    // const array = keys.map(key => {
    //     return `${key}: ${styles[key]}`;
    // });
    // return array.join(';');

    if(typeof styles === 'string') return styles;
    const toString = key => `${key}: ${styles[key]}`;
    return Object.keys(styles).map(toString).join(';');
}

export function block(type) {
    return `<form name="${type}">
                <h5>${type}</h5>
                <div class="form-group">
                    <input type="text" class="form-control form-control-sm" name="value" placeholder="value">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control form-control-sm" name="styles" placeholder="styles">
                </div>
                <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
            </form>
            <hr />
    `;
}