import Popup from './popup.js'

export default class PopupMessage extends Popup {
    constructor(awesomeIcon, color, message) {
        super();

        this.icon = awesomeIcon;
        this.color = color;
        this.message = message;
    }

    render() {
        this.clearContent();
        this.content.css('flex-direction', 'row');

        this.content.append('<div></div>');
        this.content.append('<div></div>');

        this.content
            .children().first()
            .addClass('popup-window__icon')
            .append(this.icon)
            .css('color', this.color);
        this.content
            .children().last()
            .addClass('popup-window__message')
            .append(this.message);
    }
}