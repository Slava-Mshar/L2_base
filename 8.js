function expandedForm(num) {
 const digits = num.toString().split('');
 const parts=[];
  for(let i=0;i<digits.length;i++){
    if(digits[i] !== '0'){
      const zero = '0'.repeat(digits.length - i -1);
      parts.push(digits[i]+zero);
    }
  }
  return parts.join(' + ');
}