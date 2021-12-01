var numNotes = document.querySelectorAll('.numnotes');
var cashGiven = document.querySelector('#cashGiven');
var billAmt = document.querySelector('#billAmount');
var submit = document.querySelector('#submit');
var message = document.querySelector('#error-message');


console.log(numNotes[0])

function clickHandler()
{   

    var bill = billAmt.value;
    var given = cashGiven.value;
    console.log("Bill: "+bill);
    console.log("Given: "+given);
    if( bill<=0)
    {
        message.innerText = "Please enter a valid bill amount";
        message.style.color = "red";
    }
    else{
        if(parseInt(given)<parseInt(bill))
        {
            console.log("Insufficient cash");
            alert("Insufficient cash paid.");
            message.innerText = "*Cash paid cannot be less than bill amount!";
            message.style.color = "red";
        }
        else if(given==bill)
        {
            message.style.color = "green";
            message.innerText = "Thank you for your payment! You have given the exact change.";
        }
        else{
            console.log("Correct block!")
            message.style.display = "none";
            var change = given - bill;
            calculateChange(change);
        }
    }
    
};

function calculateChange(change)
{
    denominations = [2000,500,100,20,10,5,1];
    var changeList = [];
    for(let i=0;i<denominations.length;i++)
    {
        var num = Math.trunc(change/denominations[i]);
        changeList[i]=num;
        numNotes[i].innerText = num;
        change = change%denominations[i];
    }
    for(let i=0;i<changeList.length;i++)
            {
                console.log(li[i]+" : "+changeList[i]);
            }
    // return changeList;
}

submit.addEventListener('click',clickHandler);
