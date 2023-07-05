const caesarCipher = (str,shift) => {
    let message='';  //take empty string 

    for(let i=0;i<str.length;i++){  //traverse string 

        let char = str[i];     //modifty 'i'th letter in string 
        if(char.match(/[a-zA-Z]/)){  //see if its a letter 
            let charCode = str.charCodeAt(i);  //get ascii
            let checkUpper = char === char.toUpperCase(); //checks if upper
            let shiftedCharCode = ((charCode - (checkUpper ? 65 : 97) + shift) % 26) 
            + (checkUpper ? 65 : 97); 
            // subtracts ascii from 65 or 97 depending on if its capital or not
            //get back letters position on alphabet (0-25)
            // then add shift to that. %26 to keep it within alphabet
            //add back 65 or 97 depending on whether upper or lower
            // get ascii code of shifted letter
            let shiftedChar = String.fromCharCode(shiftedCharCode);
            // convert new shifted ascii to letter
            message += shiftedChar; // add letter to 'i'th place in string

        } else {
            message +=char; // non letters just get added
        }
    }
    return message; //full ciphered text returned
};

export default caesarCipher;