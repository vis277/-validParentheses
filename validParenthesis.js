// let text="]{}}{())"

let text="[(){}]"

/**
 * step 1 split the incoming string with it's characters
 * step 2 add the first element to a blank string;
 * step 3 iterate in the loop
 * step 4 compare the incoming element with top element of blank
 * step 5 with they form pair remove the top element of stack else push it in    stack
 * step 6 AT last if blank has length zero then it is valid parenthesis else not
 * 
 */

/**
 * 
 * @param {input} input 
 * @returns Boolean
 */

function valid(input){
   let text= input.split('');
    // console.log(text);
    let blank=[];
    blank[0]=text[0];
    // console.log(blank);

    for(let i=1;i<text.length;i++){

       if(text[i]===")" &&  blank[blank.length-1]=="("){
           blank.pop()
       } 
       else if(text[i]==="("||text[i]===")")
       {
           blank.push(text[i]);
       }

       if(text[i]==="}" &&  blank[blank.length-1]=="{"){
        blank.pop()
    } 
    else if(text[i]==="{"||text[i]==="}")
    {
        blank.push(text[i]);
    }
    if(text[i]==="]" &&  blank[blank.length-1]=="["){
        blank.pop()
    } 
    else if(text[i]==="[" ||text[i]==="]"){
        blank.push(text[i]);
    }

    }
    console.log(blank.length);
    if (blank.length>0){
        return false;
    }
    else{
        return true;
    }
}

 console.log(valid(text));
