class AppBar extends HTMLElement {
    constructor() {
        super();
        this.shadomDOM = this.attachShadow({ mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadomDOM.innerHTML = `
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Lilita+One&display=swap');

                * {
                    padding: 0;
                    margin: 0;
                    box-sizing: border-box;
                }

                :host {
                    display: block;
                    background-color: #f4acb7;
                    width: 100%;
                    color: #ffe5d9;
                }

                h2 {
                    padding: 16px;
                    font-family: 'lilita one', cursive
                }

                h2 span {
                    color: #9d8189;
                }
            </style>

            <div id="appBar" class="app-bar">
                <h2><span>A</span>nime<span>Q</span>uotes</h2>
            </div>
        `
    }
}

customElements.define('app-bar', AppBar);

export default AppBar;