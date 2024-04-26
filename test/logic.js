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
        const heading = document.getElementById('dd-submenu-heading');


        switch(template){
            case 'ct':
                btn1.textContent = 'Free Contract Maker'
                btn2.textContent = 'Social Media Management Contract Template'
                btn3.textContent = 'Graphic Design Contract Template'
                btn4.textContent = 'Digital Marketing Contract Template'
                heading.textContent = 'Featured Contract Templates'
                break
            case 'pt':
                btn1.textContent = 'Graphic Design Proposal Template'
                btn2.textContent = 'Business Proposal Template'
                btn3.textContent = 'Brand Ambassador Proposal Template'
                btn4.textContent = 'Data Entry Proposal Letter Template'
                heading.textContent = 'Featured Proposal Templates'
                break
            case 'it':
                btn1.textContent = 'Social Media Invoice Templates'
                btn2.textContent = 'Contractor Invoice Template'
                btn3.textContent = 'Web Design Invoice Template'
                btn4.textContent = 'Influencer Invoice Template' 
                heading.textContent = 'Featured Invoice Templates'
                break
            case 'at':
                btn1.textContent = 'Influencer Agreement Template'
                btn2.textContent = 'Influencer Collaboration Agreement Template'
                btn3.textContent = 'Monthly Retainer Agreement Template'
                btn4.textContent = 'Writer Agreement Template'
                heading.textContent = 'Featured Agreement Templates'
                break
            case 'qt':
                btn1.textContent = 'Web Design Quotation Template'
                btn2.textContent = 'Interior Design Quotation Template'
                btn3.textContent = 'Digital Marketing Quotation Template'
                btn4.textContent = 'Video Production Quotation Template'
                heading.textContent = 'Featured Quote Templates'
                break
            case 'st':
                btn1.textContent = 'Website Development Scope of Work Template'
                btn2.textContent = 'Digital Marketing Scope of Work Template'
                btn3.textContent = 'Consultant Scope of Work Template'
                btn4.textContent = 'Interior Design Scope of Work Template'
                heading.textContent = 'Featured Scope of Work Templates'
                break
            case 'bt':
                btn1.textContent = 'Design Brief Template'
                btn2.textContent = 'Architecture Design Brief'
                btn3.textContent = 'Fashion Design Brief'
                btn4.textContent = 'Creative Brief Template'
                heading.textContent = 'Featured Brief Templates'
                break

        }
    }

    function defaultValue(){
        templateValue('ct')

    }