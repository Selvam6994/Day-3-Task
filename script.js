let my_Resume = [
  { Details:{
    Name: "S.Selvam",
    Location: { Village: "THANDIKIDI", Town: "KODAIKANAL" },
    Phone: +91_987654321,
    Email: "selvam@gmail.com"
  }
  },
  {
    Experience_summary: {
      Company_Details: "ABC pvt.LTD.,Coimbatore.",
      Role: "Graduate Engineer Trainee",
      Nature_of_work: "Panel wiring, Pneumatics and sensor selection",
      Duration: "May 2018- Dec 2018",
    }
  },
  {
    Educational_qualification: {
      Course: "B.E./Mechatronics",
      Institution: "XYZ Institute of Technology",
      CGPA: 6.7,
      Starting_year: 2013,
      completed_year: 2017,
    }
  },
  {
    Personal_details: {
      Marrital_Status: "Single",
      Nationality: "Indian",
      Languages_known: "Tamil,English",
    }
  }
];
console.log(my_Resume);

//for loop
for(let i=0;i<my_Resume.length;i++){
    console.log(my_Resume[i])
};

//for in
for(let value in my_Resume){
    console.log(my_Resume[value])
};

//for of
for(let ele of my_Resume){
    console.log(ele)
};

//for each
my_Resume.forEach((item)=>{
console.log(item)
});