function generatelink(){
    let link = document.getElementById('link').value
    if(link!=''){
    let split = link.split("token=")  
    const new_url = 'https://www.paypal.com/webapps/hermes/fallback?product=ec&fallback=1&reason=ul_load_timeout&token='+ split[1]
    document.getElementById('new-link').innerHTML = new_url
    }
    else{
        alert('Please Enter Url')
    }
}

function copytext(){
    const textField = document.getElementById('new-link')
    textField.select()
    document.execCommand('copy')
}