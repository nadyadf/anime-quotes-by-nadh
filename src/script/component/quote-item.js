class QuoteItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }



    set quote(quote) {
        this._quote = quote;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Spectral&display=swap');

                * {
                    font-family: 'Spectral', serif;
                }
                #textQuote {
                    font-size: 1.5rem;
                    text-align: center;
                }
                .container {
                    background-color: #f7ede2;
                    padding: 10px 30px;
                    border: 3px solid #f28482;
                    border-radius: 10px;
                }
                #nameChar, #animeTitle {
                    text-align: right;
                    font-size: 1.2rem;
                    line-height: 0.5;
                }
            </style>


            <div class="container">
                <p id="textQuote">${this._quote.english}</p>
                <p id="nameChar">-${this._quote.character}</p>
                <p id="animeTitle">${this._quote.anime}</p>
            </div>
        `

    }
}

customElements.define('quote-item', QuoteItem);