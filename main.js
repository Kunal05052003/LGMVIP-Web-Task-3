const formElement = document.querySelector('.form');
const information = document.querySelector('.info');

formElement.addEventListener('submit',(e)=>{
    
    e.preventDefault();
    const name = document.getElementById("username").value;
    const emailId = document.getElementById("email").value;
    const mob = document.getElementById("mobile").value;
    const rollno = document.getElementById("rollno").value;
    var skills=document.getElementsByClassName('skills');
    const image = document.getElementById('image').value;
    var str='';
    for( i=0;i<skills.length;i++)
    {
        if(skills[i].checked)
        {
            str += skills[i].value+" ";
        }
    }
    var gender=document.getElementsByClassName("gen");
    var gender1="";
    for(var i=0;i<gender.length;i++){
        if(gender[i].checked)
        {
            gender1=gender[i].value;
        }
    }
    let newList = document.createElement("div");
    newList.classList.add("addData");
    newList.innerHTML = `
      
      <div class="NameContainer">${name}</div>
      <div class="roll">${rollno}</div>
      <div class="mail">${emailId}</div>
      <div class="mo">${mob}</div>
      <div class="skil">${str}</div>
      <div class="g">${gender1}</div>
    
      <img src="${image}" alt="image" height="200px" width="200px" style="margin-top:30px;">
     
    `;
  
    information.appendChild(newList);
    formElement.reset();


    // const html = `STUDENT INFORMATION <br> <br>
    // Student Name : ${name} <br>
    // Student Email : ${emailId} <br>
    // Student Mobile Number : ${mob} <br>
    // Roll no : ${rollno} <br> <br> 
    // skills : ${str} <br> <br>
    // Gender : ${gender1} <br> <br>`

    // information.insertAdjacentHTML('afterbegin',html);
    
    // document.querySelector('form').onsubmit = e => {
    //     e.target.reset();
    // }; 
});



