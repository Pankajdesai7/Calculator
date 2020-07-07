var buttons=document.getElementsByClassName('button');
var display=document.getElementById('calc-display');
var op1=0;
var op2=null;
var operator=null;

for(var i=0;i<buttons.length;i++)
{
	buttons[i].addEventListener('click',function(){
		var value=this.getAttribute('data-value');
		if(value =='ac')
		{
			display.innerText='';
		}
		else{
		if(value =='+' || value =='-' || value =='X' || value=='/')
		{ 
			if(display.textContent == '')
			{
				display.innerText='Bhosdike';
			}
			else{
                 operator=value;
				op1=parseFloat(display.textContent);
				display.innerText='';
			}
            
		}
		else if(value =='=')
		{

          op2=parseFloat(display.textContent);
          var result=null;
          if(operator=='+')
          {
           result=op1+op2;
          }
          else if(operator=='-')
          {
          	result=op1-op2;
          }
          else if(operator=='X')
          {
          	result=op1*op2;
          }
          else{
          	result=op1/op2;
          }
          display.innerText=result;
		}
		else{
			display.innerText +=value;
		}
	  }
	});
}