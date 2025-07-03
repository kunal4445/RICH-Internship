const style = document.createElement("style");
style.textContent = `
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: bisque;
    font-family: Georgia, 'Times New Roman', Times, serif;
    min-height: 100vh;
  }

  .id-class {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: top;
    background-color: rgb(217, 229, 235);
    width: 16rem;
    height: 19rem;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
  }

  .clg-logo {
    width: 18rem;
    height: 3rem;
    border-radius:00%;
    margin: 0px;
    padding: 0px;
  }

   .profile-image {
     margin-top: 1rem;
     width: 8rem;
     border-radius: 5px;
     height: 5rem;
    //  order :999;
    
   }

  .h2 {

    // margin: 9rem 0 0.25rem;
    font-size: 1rem;
    color: black;
  
  }

  p, h3 {
    color: black;
    margin: 0.25rem 0;
    font-size: 0.85rem;
    font-weight:bolder;
  }
`;
document.head.appendChild(style);

const card = document.createElement("div");
card.className = "id-class";

const logo = document.createElement("img");
logo.className = "clg-logo";
logo.src = "image.png";

const profile = document.createElement("img");
profile.className = "profile-image";
profile.src = "bar2.png";

const Name = document.createElement("h2");
Name.textContent = "kunal santosh jadhav";
Name.className = "h2";

const roll = document.createElement("h3");
roll.textContent = "Branch: Information Technology";

const idnumber = document.createElement("p");
idnumber.textContent = "ID: RS278484493";

const email = document.createElement("p");
email.textContent = "Email: ictksj2023@gmail.com";

card.appendChild(logo);
card.appendChild(profile);
card.appendChild(Name);
card.appendChild(roll); // Added
card.appendChild(idnumber);
card.appendChild(email);

document.body.appendChild(card);
