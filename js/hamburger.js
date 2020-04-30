export default class Hamgurger {
    
    constructor(hamburger) {
        this.hamburger = hamburger.get(0);
        this.isPushed = false;

        this.hamburgerItems = [$('.hamburger-box'), $('header ul')]
        this.menuElems = $('.header-menu ul li a');

        this.hamburger.addEventListener('click', e => this.click(e.currentTarget));

        for (let $a of this.menuElems) {
            $a.addEventListener('click', e => {
                if (this.isPushed) {
                    this.hamburger.click();
                } 
            });
        }
    }

    click(item) {
        this.isPushed = !this.isPushed;
        item.classList.toggle('active');

        $('body').css('overflow', this.isPushed ? 'hidden' : 'auto');

        if (this.isPushed) {
            this.open();
        } else {
            this.close();
        }
    }

    open() {
        this.hamburgerItems.forEach(e => e.addClass('active'));
    }

    close() {
        this.hamburgerItems.forEach(e => e.removeClass('active'));
    }
}