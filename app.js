
var submit = document.querySelector('#submit');
var message = document.getElementById('error-message');
var numNotes = document.querySelectorAll('.numnotes');
const cashGiven = document.getElementById('cashGiven');
const billAmt = document.getElementById('billAmount');
console.log(numNotes[0])

function clickHandler()
{   

    const bill = billAmt.value;
    const given = cashGiven.value;
    console.log("Bill: "+bill);
    console.log("Given: "+given);
    if( bill<=0 || bill==NaN)
    {
        billAmt.style.borderColor = "red";
        billAmt.style.backgroundColor = "#ffdddd";
        message.innerText = "Please enter a valid bill amount";
        message.style.color = "red";
    }
    else{
        if( given<bill)
        {
            console.log("Insufficient cash");
            cashGiven.style.borderColor = "red";
            cashGiven.style.backgroundColor = "#ffdddd";
            message.innerText = "*Cash paid should be atleast equal to the bill amount!";
            message.style.color = "red";
        }
        else if(given==bill)
        {
            message.style.color = "green";
            message.innerText = "Thank you for your payment! You have given the exact change.";
        }
        else if(given>bill){
            console.log("Correct block!")
            message.style.display = "none";
            billAmt.style.borderColor = "grey";
            billAmt.style.backgroundColor = "white";
            cashGiven.style.borderColor = "grey";
            cashGiven.style.backgroundColor = "white";
            var change = given - bill;
            calculateChange(change);
        }
    }
    
};

function calculateChange(change)
{
    li = [2000,500,100,20,10,5,1];
    var changeList = [];
    for(let i=0;i<li.length;i++)
    {
        var num = Math.trunc(change/li[i]);
        changeList[i]=num;
        change = change%li[i];
    }
    for(let i=0;i<changeList.length;i++)
            {
                console.log(li[i]+" : "+changeList[i]);
                numNotes[i].innerText = changeList[i];
            }
    // return changeList;
}

submit.addEventListener('click',clickHandler);
