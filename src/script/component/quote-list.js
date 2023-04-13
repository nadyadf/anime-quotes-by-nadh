import './quote-item.js'

class QuoteList extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        console.log('Connectd!')
    }

    set quotes(quotes) {
        this._quotes = quotes;
        console.log(quotes);
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = '';

        // this._quotes.forEach(quote => {
            const quoteItemElement = document.createElement('quote-item');

            quoteItemElement.quote = this._quotes[0];
            this.shadowDOM.appendChild(quoteItemElement);
        // });
    }
}

customElements.define('quote-list', QuoteList);