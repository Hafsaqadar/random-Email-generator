//function to generate random string of given length

function generateRandomString (length){
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i< length; i++) {
        result += characters.charAt(Math.floor(Math.random()*charactersLength));

    }

    return result;
}


//function to generate random email 


function generateEmail (){
    const  username = generateRandomString(8);
    const domains = ['example.com','test.com','demo.com','sample.com'];
    const domain = domains[Math.floor(Math.random()*domains.length)];
    const email = `${username}@${domain}`;
    return email;
}

// add event listener to the button
    document.getElementById('btn').addEventListener('click', function(){
   const email = generateEmail();
  const emailContainer = document.getElementById('email-container');
  emailContainer.innerHTML = email;
  emailContainer.style.display = 'flex';


    })