
function send() {
    let name = document.getElementById("name").value;
    let contact = document.getElementById("contact").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let mess = document.getElementById("mess").value;
    
    let newSend = {
        name : name,
        contact : contact,
        email : email,
        subject : subject,
        mess : mess,
    };
    newSend.push(newSend);
    localStorage.setItem("newSend", JSON.stringify(newSend));
    displayProjects();
  }