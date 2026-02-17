1) Null vs Undefined
Undefined এর মানে হলো — কোনো variable declare করা হয়েছে, কিন্তু এখনো তার মধ্যে কোনো value দেওয়া হয়নি।

এটা JavaScript-এর একটি default behaviour।

উদাহরণ:
const a ;
console.log(a);
এখানে a declare করা হয়েছে, কিন্তু কোনো মান দেওয়া হয়নি, তাই output হবে undefined।

Null এটাও JavaScript-এ ব্যবহৃত একটি বিশেষ মান। যা আমরা ইচ্ছা করে কোনো variable-এ null সেট করি , যার অর্থ হচ্ছে সেটি এখন খালি বা কোনো মান নেই।
উদাহরণ : 
const a = null;
console.log(a);
এখানে x-এর মধ্যে আমরা ইচ্ছা করে null বসিয়েছি, তাই এর মান হবে null।


2) map() vs forEach()

map() 
প্রতিটি element-এর উপর loop চালায়
একটি নতুন array return করে
Data transform করার জন্য best

উদাহরণ:

const number = [1,2,3,4] ;
const doubled = () =>{
   return number.map((num)=>{
        return num * 2;
    })
}
console.log(doubled());


forEach() 
প্রতিটি element-এর উপর loop চালায়
কিছু return করে না (undefined return করে)

উদাহরণ:
const numbers = [1, 2, 3, 4, 5, 6];

numbers.forEach(num => console.log(num * 2));

3) == vs ===
   ==
শুধু value চেক করে

প্রয়োজন হলে data type automatic convert  করে

তাই কখনও কখনও unexpected result দিতে পারে


=== 

value এবং data type দুটোই চেক করে

কোনো automatic type conversion করে না

বেশি safe এবং recommended


4) async/await
   
  async/await মানে হলো অপেক্ষা করবো, কিন্তু পুরো সিস্টেম বন্ধ করবো না |

   কোড অনেক পরিষ্কার ও সহজ হয়।
   ধরেন আপনি বন্ধুকে বললেন:
   দাঁড়া বাইক আনতে যাই তারপর ঘুরতে যাবো।
   মানে :
   বাইক না আনা পর্যন্ত ঘুরতে যাবেন না 
   কিন্তু পুরো দুনিয়া বন্ধ হবে না 
   এটাই await

5) Scope in JavaScript
   Scope মানে হলো — কোন জায়গা থেকে আপনি একটা variable ব্যবহার করতে পারবেন।
   Scope ৩ ধরনের :
    1 Global Scope
    2 Function Scope
    3 Block Scope

   
Global Scope : Function এর বাইরে declare করলে — সব জায়গা থেকে ব্যবহার করা যায়।

Function Scope : Function এর ভিতরে declare করলে — শুধু ওই function এর ভিতরে ব্যবহার করা যায়। 

Block Scope : { } এর ভিতরে let বা const দিয়ে declare করলে — শুধু ওই block এর ভিতরে ব্যবহার করা যায়।