//Check if the string is palindrome
// const str='KIKA';
// const reverse=str.split('').reverse().join('');
// if(str===reverse)
// {
// console.log('palindrome');
// }
// else{
// console.log('not a palindrome')
// }


//Find largest number from an array

// const nums1=[1,15,29,90];
// const nums2=[...nums1]

// nums2.push(20)
// console.log(nums2);

// console.log(Math.max(...nums2));


//multiply each item of an array with 10

// const nums=[1,2,3,4,5];
// const newArr=nums.map(n=> n*10).map(n=> n+2)
// // const finalArr=newArr.map(n=> n+2)

// console.log(newArr);


//Remove duplicate numbers from an array
// const nums1=[2,3,4,5,5,6];
// const nums2=[...new Set(nums1)]

// console.log(nums2);

//Remove duplicate strings from an array

// const str1=['Siri','Siva','Arjun', 'Rishi', 'Rishi'];
// const str2=[...new Set(str1)];

// console.log(str2);

//find the frequency of a character from a string
//function charFrequency(str)
// {
//   const counts={};
//   for(const c of str)
//   {
//     counts[c]??=0;
//     counts[c]++;
//   }
//   return counts;
// }
// let str='Hello World';
// let str1=str.split(' ').join('')
// console.log(charFrequency(str1));


// //find min & max from array and missing numbers
// const arr1=[1,3,5,7,9]
// let min=Math.min(...arr1);
// let max=Math.max(...arr1);

// console.log('Min Number',min);
// console.log('Max Number',max);

// const missingNums=[];

// for(i=min;i<=max; i++)
// {
//     if(!arr1.includes(i)){
  
//     missingNums.push(i);

//     }
// }

// console.log('Missing Numbers: ',missingNums);



// //revere a string

// let str="Hello";
// let rev="";
// for(let i=str.length-1; i>=0;i--)
// {
//  rev+=str[i];

// }
// console.log(rev)

//find duplicate from an array
let nums=[1,2,4,2,6]

let seen=[];
let dups=[];


for(let i=0; i<nums.length;i++)
{

let num=nums[i];

if(seen[num])
{
dups.push(num);
}
else{

seen[num]=true;
}
}
console.log(dups);