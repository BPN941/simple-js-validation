//alert('hellow world')
//console.log('hello wrld')

function validation(){
    //alert('projol');
    var name = document.getElementById('name').value;
    var address = document.getElementById('address').value;
    
    if(name == ''){
        alert('Name is required');
        document.getElementById('name').focus();
    }

    if(address == ''){
        alert('Address is required');
    }
}
document.getElementById("myForm").addEventListener("submit",validation);
//validation();