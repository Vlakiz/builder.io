export default class Popup {
    constructor() {
        this.popup = $('.popup-window');
        this.blackout = $('.popup-blackout');
        this.closeButton = $('.popup-window .close-button');
        this.content = $('.popup-window__content');

        this.blackout.click(e => this.disappear(e));
        this.closeButton.click(e=> this.disappear(e));
    }

    appear(e) {
        this.isOpen = true;

        this.render();

        this.blackout.fadeIn(300);
        this.popup.fadeIn(300);
        bodyScrollLock.disableBodyScroll(this.popup.get(0));
    }

    disappear(e) {
        this.isOpen = false;

        this.popup.fadeOut(300);
        this.blackout.fadeOut(300);
        bodyScrollLock.enableBodyScroll(this.popup.get(0));
    }

    render() {
        
    }

    clearContent() {
        this.content.empty();
    }

    setFormType(labelsObj) {
        this.clearContent();
        this.content.css('flex-direction', 'column');

        this.content.append('<form></form>');
        const $form = this.content.children();

        for (let key in labelsObj) {
            $form.append('<p></p>')
                .children().last()
                .addClass('popup-window__label')
                .append(`${key}<br/><input/>`)
                .children().last()
                .attr({ type: labelsObj[key]});
        }
            
        $form.append('<button></button>')
            .children('button')
            .addClass('popup-window__send')
            .attr({ type: 'submit' })
            .append('SEND');
    }

    setMessageType(awesomeIcon, color, message) {
        this.clearContent();
        this.content.css('flex-direction', 'row');

        this.content.append('<div></div>');
        this.content.append('<div></div>');

        this.content
            .children().first()
            .addClass('popup-window__icon')
            .append(awesomeIcon)
            .css('color',color);
        this.content
            .children().last()
            .addClass('popup-window__message')
            .append(message);
    }
}