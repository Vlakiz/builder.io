import Popup from './popup.js'

export default class PopupForm extends Popup {
    constructor(labelsObj) {
        super();

        this.labels = labelsObj;
    }

    render() {
        this.clearContent();
        this.content.css('flex-direction', 'column');

        this.content.append('<form></form>');
        const $form = this.content.children();
        $form.submit(e => {
            e.preventDefault();
        });

        for (let key in this.labels) {
            $form.append('<p></p>')
                .children().last()
                .addClass('popup-window__label')
                .append(`${key}<br/><input/>`)
                .children().last()
                .attr({ type: this.labels[key]});
        }
            
        $form.append('<button></button>')
            .children('button')
            .addClass('popup-window__send')
            .attr({ type: 'submit' })
            .append('SEND')
            .click(e => this.handler ? this.handler(e) : {});
    }

    setHandler(cb) {
        this.handler = cb;
    }
}