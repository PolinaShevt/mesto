class Section {
    constructor({items, renderer},containerSelector ){
        this._container = document.querySelector(containerSelector);
        this._renderer = renderer;
        this._renderedItems = items;
    }
    renderItems = () => {
        this._renderedItems.forEach((item) => {
            this._renderer(item);
        })
    };
    addItem = (el) => {
        this._container.prepend(el);
    }
}
export default Section;