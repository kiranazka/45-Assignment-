// Object  interface
interface itCourse {
     Name: string;
     loction: string;
     Duration: string;
     onSiteStudent:number;
     onSitefaculty:number;
     onSiteStaff:number;
     
}
let course:itCourse = {
    Name: "TypeScript && JavaScrit",
    loction: "GovernerSindh",
    Duration: "12 months",
    onSiteStudent:50000,
    onSitefaculty:100,
    onSiteStaff:100,
}
console.log(course);