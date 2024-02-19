function getdata_from_register(name) {
    const field_name = new URLSearchParams(window.location.search);
    return field_name.get(name);
}



const firstn = getdata_from_register('First name');
const lastn=getdata_from_register('Last name');
const midn=getdata_from_register('Middle name');
const dob=getdata_from_register('Dob');
const email=getdata_from_register('Email');
const phone123=getdata_from_register('Phone');
const gender=getdata_from_register('Gender');
const bloodgp=getdata_from_register('Blood');
const coment=getdata_from_register('comments');




const firstnamefield=document.getElementById('fname')
firstnamefield.innerHTML=firstn

const lastnamefield=document.getElementById('lname')
lastnamefield.innerHTML=lastn


const middlefield=document.getElementById('mname')
middlefield.innerHTML=midn


const DOBfield=document.getElementById('dob')
DOBfield.innerHTML=dob

const Emailfield=document.getElementById('email')
Emailfield.innerHTML=email

const Phonefield=document.getElementById('phone')
Phonefield.innerHTML=phone123


const bloodgrpfield=document.getElementById('bgroup')
bloodgrpfield.innerHTML=bloodgp

const genderfield=document.getElementById('gender')
genderfield.innerHTML=gender

const commentfield=document.getElementById('comments')
commentfield.innerHTML=coment






