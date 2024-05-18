
        //Array squared
        // var arr=[1,2,3,4,5,6,7,8,9]
        // console.log(arr);
        // var squareArr= arr.map((num)=>  num*num);
        // console.log(squareArr);

        // Sum of every positive element
        // let array=[1, -4, 12, 0, -3, 29, -150];
        // let sum=0;
        // let postiveArray=array.filter((num)=>num>=0)
        // let sumOfArray=postiveArray.forEach((num) =>{
        //     sum += num
        // })
        // console.log(postiveArray)
        // console.log(sum)


        //An array of numbers and make them strings
        // let array=[1,231,4,5]
        // let string='';
        // let strArray=array.map((num)=>num.toString());
        // console.log(strArray);


        //Capitalize each of an array of names
        // let arr=["john", "JACOB", "jinGleHeimer", "schmidt"];
        // let captilize=arr.map((name)=>name.charAt(0).toUpperCase()+ name.slice(1).toLowerCase())
        // console.log(captilize);
            

        //Write a JavaScript program to find the maximum number in an array. ]
        // let arr=[10,12,15,5,20,14];
        // function findMaximum(num)
        // {
        //      return Math.max(...num); //Spread Operator
        // }
        // let maximum=findMaximum(arr);
        // console.log(maximum)



        //Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards). 
        // function palindrome(str)
        // {
        //     let string= str.split('').reverse().join('');
        //     if(string===str)
        //     {
        //         console.log(str, 'is palindrome')
        //     }
        //     else{
        //     console.log(str, 'is not palindrome')
        //     }

        // }
        // palindrome('madam');



        //Write a JavaScript program to reverse a given string. 
        // function reverse(str)
        // {
        //     return str.split('').reverse().join('')
        // }
        // let str=reverse('name');
        // console.log(str);
            

        // (...) Spread Operator 
        // let q1 = ["Jan", "Feb", "Mar"];
        // let q2 = ["Apr", "May", "Jun"];
        // let q3 = ["Jul", "Aug", "Sep"];
        // let q4 = ["Oct", "Nov", "May"];
        // let year=[...q1, ...q2, ...q3, ...q4 ];
        // console.log(year)    
            


        //Async Await 

        // async function getMessage()
        // {
        //         return 'hello students'
        // }

        // console.log(getMessage())

        async function afterAwait()
        {
                console.log("First Line")
                let data = new Promise((resolve, reject)=>{
                        setTimeout(() => {
                                resolve("Hello Students ")
                        }, 3000)
                })
                let result =await data
                console.log(result);
                console.log("Last Line")

        }

        afterAwait()