
  function display(val)
    {
      
      let n= val;
      
      document.getElementById("dis").innerHTML  += val;
      
      
    }
    function show()
    {
      
      document.getElementById("dis").innerHTML = eval(document.getElementById("dis").innerHTML);


    }
    function RESET(){
      document.getElementById("dis").innerHTML='';
    }
   
    