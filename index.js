const name=document.getElementById('name');
const email=document.getElementById('email');
const form=document.getElementById('form');
const name_error=document.getElementById('name_error');
const email_error=document.getElementById('email_error');
form.addEventListener('submit',(e)=>{
    if(name.value==='' || name.value== null){
        e.preventDefault();
        name_error.innerHTML='*Name is required';
    }
    email_value=email.value;
    const ret_val1=email_value.includes('@gmail.com');
    const ret_val2=email_value.includes('@iitg.ac.in');
    const ret_val3=email_value.includes('@yahoo.in');
    if(email_value==='' || email_value== null){
        e.preventDefault();
        email_error.innerHTML='*Email is required';
    }
    if(ret_val1 != true && ret_val2 != true && ret_val3!= true && email_value !=''&& email_value!=null){
        e.preventDefault();
        email_error.innerHTML='*Invalid email';
    }
    
})

