function isSameType(value1, value2) {
  if(typeof(value1)===typeof(value2)){
	  return true;
  }
	else if(typeof(value1)==isNaN()||typeof(value2)==isNaN()){
		false;
	}
}

// let value1 = prompt("Enter Start of the Range.");
// let value2 = prompt("Enter End Of the Range.");
// alert(isSameType(value1, value2));
