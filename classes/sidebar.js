import {block} from "../utils";
import {TextBlock, TitleBlock} from "./blocks";

export class SideBar {
    constructor(selector, updateCallback) {
        this.$el = document.querySelector(selector);
        this.update = updateCallback;
        this.init();
    }

    init() {
        this.$el.insertAdjacentHTML('afterbegin', this.template);
        this.$el.addEventListener('submit', this.addBlock.bind(this));
    }
    get template() {
        return [
            block('text'),
            block('title')
            ].join('');
    }

    addBlock(event) {
        event.preventDefault();

        const type = event.target;
        const value = event.target.value.value;
        const styles = event.target.styles.value;

        const newBlock = type !== 'text' ? new TitleBlock(value, {styles}) : new TextBlock(value, {styles});

        this.update(newBlock);
        event.target.value.value = '';
        event.target.styles.value = '';
    }
}

