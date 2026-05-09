 function genTicket(){
   let arr= new Array(n); 
   for(i=0;i<n;i++)
   {
    arr[i]=Math.floor(Math.random()*10);
    return arr;
   }
 }
 export {genTicket};