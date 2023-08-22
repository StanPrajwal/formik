import {
  Stack,
  Divider,
  List,
  ListItem,
  Avatar,
  ListItemText,
  ListItemAvatar,
  Typography,
  Box,
} from "@mui/material";
import { useState } from "react";
import { FormModal } from "./FormModal";
import { Button } from "react-bootstrap";
import { User, intialUserState } from "../UserFormTypes";

export const AllUser = () => {
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [show, setShow] = useState<boolean>(false);
  const [edit,setEdit] = useState<boolean>(false)
  const [intialValues,setInialValues] = useState<User>(intialUserState)
  const modalControl = () => {
    setShow(!show);
    console.log("hai");
  };
  const editHandler = (user:User)=>{
    setInialValues(user)
    modalControl()
    setEdit(!edit)
  }
//   if (!allUsers.length) {
//     return (
//       <Stack>
//         <Stack>
//           <Button onClick={modalControl}>Add user</Button>
//         </Stack>
//         <Box
//           sx={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%,-50%)",
//           }}
//         >
//           <Typography
//             variant="h6"
//             color="error"
//             p={1}
//             borderRadius={1}
//             sx={{
//               backgroundColor: "rgb(252 165 165)",
//             }}
//           >
//             No Record Found
//           </Typography>
//         </Box>
//       </Stack>
//     );
//   }
  return (
    <>
      <Stack>
        <Button onClick={modalControl}>Add user</Button>
      </Stack>
      <Stack>
        {allUsers.map((user: any,index:number) => (
          <List
            key={index}
            sx={{
              width: "100%",
              bgcolor: "background.paper",
              padding: "1rem 2rem",
            }}
          >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={user.fullName}
                secondary={
                  <>
                    <Typography>Date OF Birth: 1999/06/2023</Typography>
                    <Typography>Prajwal@gmail.com</Typography>
                  </>
                }
              />

              <Button style={{ verticalAlign: "middle" }} onClick={()=>editHandler(user)}>Edit</Button>
            </ListItem>
            <Divider variant="inset" component="li" />
          </List>
        ))}
      </Stack>
      <FormModal
        setAllUsers={setAllUsers}
        modalControl={modalControl}
        show={show}
        intialValues={intialValues}
        setInialValues={setInialValues}
      />
    </>
  );
};
