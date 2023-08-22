// import { Formik } from "formik";
// import { Button, Stack } from "react-bootstrap";

// import Form from "react-bootstrap/Form";
// export const UserForm = () => {
//   return (
//     <>
//       <Stack style={{
//         display:"flex",
//         justifyContent:'center',
//         alignItems:"center"
//       }}>
//         <Formik
//           initialValues={userData}
//           enableReinitialize={true}
//           validate={(values)=>{
//             const errors:any = {}
//             if(!values.name){
//                 errors.name = "Field is mandatory"
//             }
//             else if(!values.age){
//                 errors.age = "Field is mandatory"
//             }else if(values.age < 1 || values.age > 120){
//                 errors.age = "Enter Valid age"
//             }
//             else if(!values.gender){
//                 errors.gender = "Field is mandatory"
//             }
//             else if(!values.heighestEducation){
//                 errors.heighestEducation = "Field is mandatory"
//             }
//             return errors
//           }}
//           onSubmit={(values,formikHelper) => {
//             console.log(values);
//             formikHelper.resetForm()
//           }}
//         >
//           {({ values, handleChange, handleBlur, handleSubmit, errors }) => (
//             <Form onSubmit={handleSubmit} className="mt-5"  style={{
//                 padding:"1rem",
//                 boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
//                 width:450
//             }}>
//               <Stack className="p-0.5">
//                 <Form.Label htmlFor="name">Full Name</Form.Label>
//                 <Form.Control
//                   type="text"
//                   id="name"
//                   value={values.name}
//                 //   onBlur={handleBlur}
//                   onChange={handleChange}
//                 />
//                 {errors.name && <p style={{color:"red"}}>{errors.name}</p>}
//               </Stack>
//               <Stack className="p-0.5">
//                 <Form.Label htmlFor="age">Age</Form.Label>
//                 <Form.Control
//                   type="number"
//                   id="age"
//                   value={values.age}
//                 //   onBlur={handleBlur}
//                   onChange={handleChange}
//                 />
//                 {errors.age && <p style={{color:"red"}}>{errors.age}</p>}
//               </Stack>
//               <Stack className="p-0.5">
//                 <Form.Label htmlFor="gender">Gender</Form.Label>
//                 <Stack direction="horizontal" gap={2}>
//                   <Form.Check
//                     type="radio"
//                     label="Male"
//                     name="gender"
//                     value="Male"
//                     onChange={handleChange}
//                     // onBlur={handleBlur}
//                   />
//                   <Form.Check
//                     type="radio"
//                     label="Female"
//                     name="gender"
//                     value="Female"
//                     onChange={handleChange}
//                     // onBlur={handleBlur}
//                   />
//                   <Form.Check
//                     type="radio"
//                     label="Other"
//                     value="Other"
//                     name="gender"
//                     onChange={handleChange}
//                     // onBlur={handleBlur}
//                   />
//                 </Stack>
//                 {errors.gender && <p style={{color:"red"}}>{errors.gender}</p>}
//               </Stack>
//               <Stack className="p-0.5">
//                 <Form.Label htmlFor="heighestEducation">
//                   Select Highest Qualification
//                 </Form.Label>

//                 <Form.Select
//                   name="heighestEducation"
//                   onChange={handleChange}
//                 //   onBlur={handleBlur}
//                   value={values.heighestEducation}
//                 >
//                     <option>---Select Education---</option>
//                   <option value="10th Standard">10th Standard</option>
//                   <option value="12th Standard">12th Standard</option>
//                   <option value="Graduated">Graduated</option>
//                 </Form.Select>
//                 {errors.heighestEducation && <p style={{color:"red"}}>{errors.heighestEducation}</p>}
//               </Stack>
//               <Stack className="p-0.5">
//                 <Form.Check
//                   label="Are You Graduated?"
//                   name="isGraduate"
//                   checked={values.isGraduate}
//                   onChange={handleChange}
//                 //   onBlur={handleBlur}
//                 />
//               </Stack>
//               <Stack className="p-0.5">
//               <Button  type="submit">Submit</Button>
//               </Stack>
             
//             </Form>
//           )}
//         </Formik>
//       </Stack>
//     </>
//   );
// };
export {}