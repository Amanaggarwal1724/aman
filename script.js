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

function cleardata(){
    document.getElementById('link').value=""
    document.getElementById('new-link').innerHTML=""
}

<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="KYYTM9ZNTFLNU">
<input type="image" src="https://www.paypalobjects.com/en_GB/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1">
</form>

}
