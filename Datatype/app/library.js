'use strict'

module.exports = {


 
 dataTypes: function(dataValue) {
   switch (typeof dataValue) {
  case 'number':
    if (dataValue < 100) {
    	return "less than 100";
    }
    else if (dataValue == 100) {
    	return "equal to 100";
    }
    else {
    	return "more than 100";
    }
    
    break;
  case "boolean":
    if (dataValue === true) {
    	return true;
    }
    else {
    	return false;
    }
    
    break;
  case "string":
    return dataValue.length;
    break;
  case "function":
    
    return dataValue(true);
    break;
  case "object":
    if (Array.isArray(dataValue) == true) {
    return dataValue[2];
	}
	else {
		return 'no value';
	}
    break;  
  case 'null':
  case 'undefined':
    return 'no value';
    break;
  default:
    return "Sorry, we are out of " + dataValue + ".";
}
}
}