import {
  Modal,
  Box,
  Typography,
  TextField,
  Radio,
  FormControl,
  FormLabel,
  Checkbox,
  Button,
  Select,
  MenuItem,
  SelectChangeEvent,
  Chip,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Formik, Form } from "formik";
import SendIcon from "@mui/icons-material/Send";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import { User, educations, gender, intialUserState } from "../UserFormTypes";

import { DatePicker } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { modalStyle } from "./Styles";
import { userSchema } from "./validation";
export const FormModal = (props: any) => {
  const { intialValues } = props as { intialValues: User };
  const { setAllUsers, show, modalControl, setInialValues } = props;
  // const [intialValues,setInialValues] = useState<User>(intialUserState)
  console.log(intialValues);

  return (
    <Modal open={show} onClose={modalControl}>
      
      <Stack sx={{ ...modalStyle }}>
        <Formik
          initialValues={intialValues}
          enableReinitialize={true}
          validationSchema={userSchema}
          onSubmit={(values, formikHelper) => {
            // console.log(values);
            if (values.id) {
              console.log(values,"valuesss")
              setAllUsers((prev: User[]) =>
                prev.map((user) => (user.id === values.id ? values : user))
              );
              
            } else {
              values.id = Date.now();
              setAllUsers((prev: any) => [...prev, values]);
            }

            formikHelper.resetForm();
            modalControl();
            setInialValues(intialUserState);
          }}
        >
          {({
            handleChange,
            handleSubmit,
            values,
            setFieldValue,
            errors,
            touched,
          }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Stack py={1}>
                <TextField
                  label="Full Name"
                  type="text"
                  size="small"
                  name="fullName"
                  onChange={handleChange}
                  value={values.fullName}
                  error={Boolean(errors.fullName && touched.fullName)}
                  helperText={
                    errors?.fullName && touched?.fullName
                      ? errors?.fullName
                      : ""
                  }
                />
              </Stack>
              <Stack py={1}>
                <TextField
                  label="Email"
                  type="text"
                  size="small"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  error={Boolean(errors.email && touched.email)}
                  helperText={errors.email && touched.email ? errors.email : ""}
                />
              </Stack>
              <Stack py={1}>
                <FormControl>
                  <FormControlLabel
                    label="Fresher"
                    control={
                      <Checkbox
                        checked={values.isFresher}
                        onChange={handleChange}
                        name="isFresher"
                      />
                    }
                  />
                </FormControl>
              </Stack>
              <Stack py={1}>
                <FormControl error={Boolean(errors.gender && touched.gender)}>
                  <FormLabel>Gender</FormLabel>
                  <RadioGroup row>
                    {gender.map((gen: any, index: number) => (
                      <FormControlLabel
                        key={index}
                        {...gen}
                        control={<Radio />}
                        onChange={handleChange}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </Stack>
              <Stack py={1}>
                <FormLabel>Date Of Birth</FormLabel>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker
                      label="Date Of Birth"
                      defaultValue={dayjs(19 / 6 / 1999)}
                      value={dayjs(values.dob)}
                      onChange={(newDate: any) => {
                        setFieldValue("dob", newDate.$d);
                      }}
                    />
                  </DemoContainer>
                </LocalizationProvider>
                <Typography variant="body1" color="error">
                  {errors.dob}
                </Typography>
              </Stack>
              <Stack>
                <Select
                  size="small"
                  value={values.education}
                  name="education"
                  onChange={(e: any) => {
                    const { value, name } = e.target;
                    if (!values.education.includes(value)) {
                      setFieldValue(name, [...values.education, value]);
                    } else {
                      setFieldValue(
                        name,
                        values.education.filter((val: any) => val !== value)
                      );
                    }
                  }}
                  renderValue={(selectedValues: any) => (
                    <Box display="flex" flexWrap="wrap" gap={1}>
                      {selectedValues.map((value: any) => (
                        <Chip
                          key={value}
                          label={value}
                          style={{ fontSize: "10px" }}
                        />
                      ))}
                    </Box>
                  )}
                >
                  {educations.map((education: any) => (
                    <MenuItem value={education} key={education}>
                      {education}
                    </MenuItem>
                  ))}
                </Select>
                <Typography variant="body1" color="error">
                  {errors.education}
                </Typography>
              </Stack>
              <hr />
              <Stack direction="row" justifyContent="flex-end" gap={1}>
                {values.id ? (
                  <Button type="submit" variant="outlined" color="success">Edit</Button>
                ) : (
                  <Button
                    variant="contained"
                    endIcon={<SendIcon />}
                    type="submit"
                  >
                    Add User
                  </Button>
                )}
                <Button
                  variant="contained"
                  color="error"
                  startIcon={<ClearAllIcon />}
                >
                  Clear
                </Button>
              </Stack>
            </Form>
          )}
        </Formik>
      </Stack>
    </Modal>
  );
};
