
// var a = [1,5,7,8,9,15];
// var a2 =  [1,8,5,2,7,6,9,2,6];


// //1.1 in ra so chan le
// for(var i = 0 ; i < a.length ; i++){
//     if(a[i] % 2 != 0  ){  // a[i] % 2 == 0 neu la so chan
//         console.log(a[i]);
//     }
// }

// function check(item){
//     return item >=5 
// }
// var newA = a.filter(check);
 
// console.log(newA.map(function(item){
//     return item + 1
// }));



//  a.splice(3,a.length  );

// console.log(a);

// a.push(20);
// console.log(a);

// for(var i = 0 ; i < a.length ; i++){
//     a[i] *= 2;
// }

// console.log(a);


// a2.sort(sortHelper);

// console.log(a2);\
// var personArray = 
// [{
//     name : 'Trung' ,
//     class : 'Nodemy01' ,
//     dateJoin : '05-02-2020',
//     age : 20} ,
// {   
//     name : 'Phong' ,
//     class : 'Nodemy01' ,
//     dateJoin : '06-01-2020',
//     age : 19} ,
// {   
//     name : 'Nam' ,
//     class : 'Nodemy02' ,
//     dateJoin : '25-01-2020',
//     age : 20
// }];


// function sortHelper(item1,item2){
//     if(item1 > item2){
//         return 1
//     }
//     if(item1 < item2){
//         return -1
//     }
//     if(item1 == item2){
//         return 0;
//     }
// } 


// function convertDateString(dateString){
//     var stringArr = dateString.split('-');
//     var date = stringArr[2] + '-' + stringArr[1] + '-' + stringArr[0] ;
//     return new Date(date);
// }



// personArray.sort(function(item1,item2){

//     var date1 = convertDateString(item1.dateJoin);
//     var date2 = convertDateString(item2.dateJoin);

//     if(date1> date2){
//         return 1;
//     }
//     if(date1 < date2){
//         return -1;
//     }

//     if(date1 == date2){
//         return 0;
//     }
// });


// var newPersonA =  personArray.filter(function(item){
//     var date = convertDateString(item.dateJoin);
//     return date.getMonth() < 2 ;
// });

// var newPerSOn2 = personArray.map(function(item){
//   item.name  = item.name.toUpperCase() 
//   return item;
// })

// console.log(newPerSOn2);



// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }