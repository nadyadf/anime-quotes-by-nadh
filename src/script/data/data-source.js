class DataSource {
    static generateQuotes() {
        return fetch('https://katanime.vercel.app/api/getrandom')
            .then(response => {
                return response.json();
            }).then(responseJson => {
                if(responseJson.sukses) {
                    // console.log(responseJson.result[0])
                    return responseJson.result;
                }

            })
    }
}

export default DataSource;