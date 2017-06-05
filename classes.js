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
var string = "CS111 2016 Fall"
array=string.split("")
//console.log(array)
var place ;

var numericals=[]
var chunks=string.split(" ")

var departmentArray=[] 
var courseArray=[]
var yearArray=[]
var semesterArray=[]

var department
var course
var Semester
var year


//var course = string.split(" ",1)
//console.log(course)

for(var i=0; i< array.length;i++){
	if(array[i]=="A"||array[i]==="B"||array[i]==="C"||array[i]==="D"||array[i]==="E"||array[i]==="F"||array[i]==="G"||array[i]==="H"||array[i]==="I"||array[i]==="J"||array[i]==="K"||array[i]==="L"||array[i]==="M"||array[i]==="N"||array[i]==="O"||array[i]==="P"||array[i]==="Q"||array[i]==="R"||array[i]==="S"||array[i]==="T"||array[i]==="U"||array[i]==="V"||array[i]==="W"||array[i]==="X"||array[i]==="Y"||array[i]==="Z"){
		departmentArray.push(array[i])
		//console.log(array[i])
		
	}
	else if(array[i]=="0"||array[i]==="1"||array[i]==="2"||array[i]==="3"||array[i]==="4"||array[i]==="5"||array[i]==="6"||array[i]==="7"||array[i]==="8"||array[i]==="9"){
		numericals.push(array[i])
	}
}

for(var i=0;i<numericals.length;i++){
	if(i<3){
		courseArray.push(numericals[i])
	}
	else {
		yearArray.push(numericals[i])
	}
}

var notDepartment=[]
for(var i=1;i<chunks.length;i++ ){
	notDepartment.push(chunks[i])
}

var notDepartmentString=notDepartment.join("")
//console.log(notDepartmentString)
var semArray=notDepartmentString.split("")
//console.log(semArray)

for(var i=0; i< semArray.length;i++){
	if(semArray[i]=="S"||semArray[i]==="F"||semArray[i]==="W"||semArray[i]==="s"||semArray[i]==="p"||semArray[i]==="r"||semArray[i]==="i"||semArray[i]==="n"||semArray[i]==="g"||semArray[i]==="u"||semArray[i]==="m"||semArray[i]==="e"||semArray[i]==="f"||semArray[i]==="a"||semArray[i]==="l"||semArray[i]==="w"||semArray[i]==="t"){
		semesterArray.push(semArray[i])
	}
}
//console.log("semesterArray ", semesterArray)
semester=semesterArray.join("")
console.log("semester ",semester)

departmentArray.pop()
department=departmentArray.join("")
console.log("department ", department)

course=courseArray.join("")
console.log("course ",course)

year=yearArray.join("")
console.log("year ",year)

