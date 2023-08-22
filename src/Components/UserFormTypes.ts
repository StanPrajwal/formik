import Radio from "@mui/material/Radio"
const educations = ["10th Standard", "12th Standard", "Graduated"];
const intialUserState: User={
  fullName: "",
  email: '',
  isFresher: false,
  gender: "",
  dob: "19/6/1999",
  education: [],
  id:0
};
export type User = {
  fullName: string;
  email: string;
  isFresher: false;
  gender: string;
  dob: string;
  education: string[];
  id:number
};

const gender = [
  {
    value: "Male",
    label: "Male",
    name: "gender",
  },
  {
    value: "Female",
    label: "Female",
    name: "gender",
    
  }
  ,{
    value: "Other",
    label: "Other",
    name: "gender",
  }
];
export { educations, intialUserState,gender };
