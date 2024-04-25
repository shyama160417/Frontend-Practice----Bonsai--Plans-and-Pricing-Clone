const parentElement = document.getElementById("menu-item-1.1");
    const childElement = document.getElementById("submenu-1");

   function myfunction1(){
        parentElement.style.backgroundColor = "rgb(243, 242, 242)";
    };

   function myfunction2(){
        parentElement.style.backgroundColor = "white";
    };


    function templateValue(btn){
        const content = document.getElementById(btn);
        content.textContent = "I have changed"
    }

    function defaultValue(){
        const content = document.getElementById("btn-btn-2");
        content.textContent = "Free Contract Maker"

    }