export default class Hamgurger {
    constructor(hamburger) {
        this.hamburger = hamburger.get(0);
        this.isPushed = false;
        this.hamburgerItems = [$('.hamburger-box'), $('header ul')]

        this.hamburger.addEventListener('click', e => this.click(e.currentTarget));
    }

    click(item) {
        this.isPushed = !this.isPushed;
        item.classList.toggle('active');
        $('body').css('overflow', this.isPushed ? 'hidden' : 'auto');
        if (this.isPushed) {
            this.hamburgerItems.forEach(e => e.addClass('active'));
        } else {
            
            this.hamburgerItems.forEach(e => e.removeClass('active'));
        }
    }
}