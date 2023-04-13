import DataSource from "../data/data-source.js";
import '../component/quote-list.js';

const main = () => {
    const generatesButton = document.querySelector('#btnGenerate');
    const quoteListElement = document.querySelector('quote-list');


    const onButtonGeneratesClicked = async () => {
        const result = await DataSource.generateQuotes();
        quoteListElement.quotes = result;
    }

    generatesButton.addEventListener("click", onButtonGeneratesClicked);

};

export default main;