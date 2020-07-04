
        var quantity=1;
        var price1=399;
        var price2=249;
        var price=0;
        var total_amount=0;



        document.getElementById("plus").onclick=function()
        {
            quantity++;
            display("quantity",quantity);
        }


        document.getElementById("minus").onclick=function()
        {
            if(quantity>1)
            {    
            quantity--;    
            display("quantity",quantity);
            }
        }

        document.getElementById("pay").onclick=function()
        {
         total_amount=quantity*price;  
        display("total","= Rs. "+total_amount);    
        }


        document.getElementById("choice").onclick=function()
        {
         price=price1;    
        display("amount","Price = Rs. "+price);      
        display("total","= Rs. ");         
        document.getElementById("choice").style.backgroundColor='lightgreen'; 
        document.getElementById("choice").style.color='white'; 
        document.getElementById("choice2").style.backgroundColor='white'; 
        document.getElementById("choice2").style.color='black'; 

        }

        document.getElementById("choice2").onclick=function()
        {
        price=price2;
        display("amount","= Rs. "+price);    
        display("total","= Rs. ");     
        document.getElementById("choice2").style.backgroundColor='lightgreen'; 
        document.getElementById("choice2").style.color='white'; 
        document.getElementById("choice").style.backgroundColor='white'; 
        document.getElementById("choice").style.color='black'; 

        }


        function display(id,text)
        {
        document.getElementById(id).innerHTML=text;  
        }

