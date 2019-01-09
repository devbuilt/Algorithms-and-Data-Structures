function capitalize(s){

  const arr = s.split('');
  let a = '', b = '';
  
  for (let i = 0; i < arr.length; i++) {
    if (i % 2) {
      a += arr[i];
      b += arr[i].toUpperCase();
    } else {
      a += arr[i].toUpperCase();
      b += arr[i];
    }
  }
  
  return [a, b];
  };

  capitalize("abcdef")//?