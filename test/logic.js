const parentElement = document.getElementById("menu-item-1.1");
    const childElement = document.getElementById("submenu-1");

   function myfunction1(){
        parentElement.style.backgroundColor = "rgb(243, 242, 242)";
    };

   function myfunction2(){
        parentElement.style.backgroundColor = "white";
    };


    function templateValue(template){
        const btn1 = document.getElementById('btn-btn-1');
        const btn2 = document.getElementById('btn-btn-2');
        const btn3 = document.getElementById('btn-btn-3');
        const btn4 = document.getElementById('btn-btn-4');


        switch(template){
            case 'pt':
                btn1.textContent = 'PT Btn-1'
                btn2.textContent = 'PT Btn-2'
                btn3.textContent = 'PT Btn-3'
                btn4.textContent = 'PT Btn-4'
                break
            case 'it':
                btn1.textContent = 'IT Btn-1'
                btn2.textContent = 'IT Btn-2'
                btn3.textContent = 'IT Btn-3'
                btn4.textContent = 'IT Btn-4'                
                break
            case 'at':
                btn1.textContent = 'AT Btn-1'
                btn2.textContent = 'AT Btn-2'
                btn3.textContent = 'AT Btn-3'
                btn4.textContent = 'AT Btn-4'
                break
            case 'qt':
                btn1.textContent = 'QT Btn-1'
                btn2.textContent = 'QT Btn-2'
                btn3.textContent = 'QT Btn-3'
                btn4.textContent = 'QT Btn-4'
                break
            case 'st':
                btn1.textContent = 'ST Btn-1'
                btn2.textContent = 'ST Btn-2'
                btn3.textContent = 'ST Btn-3'
                btn4.textContent = 'ST Btn-4'
                break
            case 'bt':
                btn1.textContent = 'BT Btn-1'
                btn2.textContent = 'BT Btn-2'
                btn3.textContent = 'BT Btn-3'
                btn4.textContent = 'BT Btn-4'
                break

        }
    }

    // function defaultValue(){
    //     const content = document.getElementById("btn-btn-2");
    //     content.textContent = "Free Contract Maker"

    // }