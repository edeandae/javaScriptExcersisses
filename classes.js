/**
On our site, students can enter the course information for the courses they are taking.
The format is any combination of
Department + course number and Semester + year.
Department and Semester are always alphabetical.
Course number and year are always numeric.
Department is always first.
Course number is always second.
Semester can be either 3rd or 4th.
Year can be either 3rd or 4th.
Valid forms of Department+Course Number are:
CS111
CS 111
CS:111
CS-111 
And valid forms of Semester+Year are:
Fall 2014
fall 14
2014 Fall
F2014
Semesters are Fall (F), Winter (W), Spring (S), Summer (Su).
For example, all of the above combinations would give you:
Department: CS
Course Number: 111
Year: 2014
Semester: Fall
"CS111 2016 Fall"
"CS-111 Fall 2016"
"MATH 123 2015 Spring"
"CS111 fall 14"
"CS111 F2014"
**/
//string.split(separator, limit)
var string = "CS-:111 2016 Fall";
array=string.split("");
depChunk=string.split(" ",1);
depChunk=depChunk[0].split("");
//console.log(depChunk)

var place;

var numericals=[];
var chunks=string.split(" ");

var departmentArray=[];
var courseArray=[];
var yearArray=[];
var semesterArray=[];

var department;
var course;
var Semester;
var year;


//var course = string.split(" ",1)
//console.log(course)

for(var i=0; i< depChunk.length;i++){
	if(isNaN(depChunk[i])&&depChunk[i]!==":"&&depChunk[i]!=="-"){
		departmentArray.push(depChunk[i]);
		//console.log(array[i])
		
	}
}
for(var i=0; i<array.length;i++){
	if(isNaN(array[i])===false){
		numericals.push(array[i]);
	}
}

for(var i=0;i<numericals.length;i++){
	if(i<3){
		courseArray.push(numericals[i]);
	}
	else {
		yearArray.push(numericals[i]);
	}
}

var notDepartment=[]
for(var i=1;i<chunks.length;i++ ){
	notDepartment.push(chunks[i]);
}

var notDepartmentString=notDepartment.join("")
//console.log(notDepartmentString)
var semArray=notDepartmentString.split("");
//console.log(semArray)

for(var i=0; i< semArray.length;i++){
	if(semArray[i]===" "||isNaN(semArray[i])){
		semesterArray.push(semArray[i]);
	}
}
//console.log("semesterArray ", semesterArray)
semester=semesterArray.join("");
console.log("semester ",semester);

department=departmentArray.join("");
console.log("department ", department);

course=courseArray.join("");
console.log("course ",course);

year=yearArray.join("");
console.log("year",year);
