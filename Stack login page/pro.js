email="vikash@gmail.com"
password="1234"
const join=()=>{
    console.log('join')
}

const login=()=>{
    if(email==document.getElementById('email').value){
        if(password==document.getElementById('password').value)
        alert('success')
        else
        alert('wrong password')
    }
    else(
        alert('failer')
    )
    // console.log(document.getElementById('email').value)
    // console.log(document.getElementById('password').value)
    // alert(document.getElementById('email').value)
}