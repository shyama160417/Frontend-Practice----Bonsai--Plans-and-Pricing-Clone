// var wishlist = [
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
// ];

// const newarr = wishlist.reduce((total, currentValue,)=>{
//     // var newobj={};
//     // newobj.price = total.price+currentValue.price;
//     // // newobj = total;
//     // return newobj;

//     total.price = total.price + currentValue.price;
//     total.title = "Total";
//     return total;



// -----------------------------------------------------------------------------------------------


var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

const newobj = {
    numYoungVotes: 0,
    numYoungPeople: 0,
    numMidVotes: 0,
    numMidPeople: 0,
    numOldVotes: 0,
    numOldPeople: 0
};

voters.reduce((total, currentValue)=>{
    total = currentValue;
    const Voted = total.voted;
    const Young = (total.age >= 18 && total.age <= 25) ? true : false;
    // console.log (total.age, Young);
    if(Young)
    {
        newobj.numYoungPeople++;
        if(Voted)
            newobj.numYoungVotes++;
    }

    else
    {
        const Mid = (total.age >=26 && total.age <=35) ? true : false;
        if(Mid)
        {
            newobj.numMidPeople++;
            if(Voted)
                newobj.numMidVotes++;
        }
        else
        {
            newobj.numOldPeople++;
            if(Voted)
                newobj.numOldVotes++;
        }


    }

    console.log(total.age);
    return total;

},[]);

console.log(newobj);