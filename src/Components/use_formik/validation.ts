import { User } from "../UserFormTypes";
import * as Yup from "yup";
const emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
const userSchema = Yup.object().shape({
  fullName: Yup.string().required("Field Mandatory"),
  email: Yup.string().required("Field Mandatory").matches(emailReg,"Enter Valid Email"),
  isFresher: Yup.boolean(),
  gender: Yup.string().required("Field Mandatory"),
  dob: Yup.string().required("Field Mandatory"),
});

export { userSchema };
