var student={
	"name": "venkat",
	"address": {
		"padress": {
			"zipcode": "1231231",
			"town": "guntur",
			"district": "guntur"
		},
		"caddress": {
			"zipcode": "505050",
			"town": "hyd",
			"district": "hyd"
		}
	}
}

console.log(student.name); 
console.log(student.address.padress.zipcode)

var obj={name:"venkat", sno:"1", address:"hyd"}
console.log("keys", Object.keys(obj)); 
console.log("values", Object.values(obj)); 


const copyObject = Object.assign({},student);
copyObject.name="sandeep";
console.log(copyObject); // sandeep 
console.log(student); // venkat 

copyObject.address.padress.zipcode="909090";
console.log("copyObject", copyObject.address.padress.zipcode); // 909090 
console.log("student", student.address.padress.zipcode); // 1231231 
