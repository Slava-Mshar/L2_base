function findMissing(list) {  
  const diff1= list[1] - list[0];
  const diff2 = list[2]-list[1];
  const step = Math.abs(diff1)<Math.abs(diff2)? diff1:diff2;
  for(let i =0;i<list.length - 1;i++){
    if(list[i+1]-list[i]!=step){
   return list[i]+step;   
    }
  }
}