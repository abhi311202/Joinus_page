function message(){
    var Name = document.getElementById('name');
    var Email = document.getElementById('email');
    var Phone = document.getElementById('Phone');
    var Wpno = document.getElementById('Wpno');
    var College = document.getElementById('College');
    var Course = document.getElementById('Course');
    var Semester = document.getElementById('Semester');
    
    // var msg = document.getElementById('msg');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');

    if(Name.value === '' || Email.value === '' || Phone.value=== '' || Wpno.value=== '' || College.value=== '' || Course.value=== '' || Semester.value=== '' ){
        danger.style.display = 'block';
    }
    else{
        setTimeout(() => {
            Name.value = '';
            Email.value = '';
            Phone.value = '';
            Wpno.value = '';
            College.value = '';
            Course.value = '';
            Semester.value = '';
           
            
        }, 2000);

        success.style.display = 'block';
    }


    setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = 'none';
    }, 4000);

}

const seeMoreButton = document.querySelector(".see-more-button");
const moreContent = document.querySelector(".more-content");


seeMoreButton.addEventListener("click", function() {
    if (moreContent.style.display === "none" || moreContent.style.display === "") {
        moreContent.style.display = "block";
        seeMoreButton.textContent = "See Less";
    } else {
        moreContent.style.display = "none";
        seeMoreButton.textContent = "See More";
    }
});

const seeMoreButton1 = document.querySelector(".see-more-button1");
const moreContent1 = document.querySelector(".more-content1");


seeMoreButton1.addEventListener("click", function() {
    if (moreContent1.style.display === "none" || moreContent1.style.display === "") {
        moreContent1.style.display = "block";
        seeMoreButton1.textContent = "See Less";
    } else {
        moreContent1.style.display = "none";
        seeMoreButton.textContent = "See More";
    }
});