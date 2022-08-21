const axios = require('axios')

const token = async() => {
    let response
    try {
        response = await axios.get('https://accesstokengenerator111.azurewebsites.net/api/accesstokengenerator')
        console.log(response.data)
        return response.data
    } catch (err) {
        console.log(err)
    }
    
}

token()