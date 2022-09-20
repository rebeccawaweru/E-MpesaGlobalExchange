import React from 'react';
import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import {UserPortal,Signup,Login,AdminPortal,AdminConfirm,Response,Profile,Chat,ConfirmPassword,ForgotPassword,Deposits,Withdraws,AdminLogin,AdminReset} from './Pages'
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/'>
    <Route index element={<Login/>}/>
    <Route path="user:id" element={<UserPortal/>}/>
    <Route path="signup" element={<Signup/>}/>
    <Route path="admin" element={<AdminPortal/>}/>
    <Route path="cbk" element={<Response/>}/>
    <Route path="profile/:id" element={<Profile/>}/>
    <Route path="chats/:id" element={<Chat/>}/>
    <Route path="confirm/:token" element={<ConfirmPassword/>}/>
    <Route path="forgotpassword" element={<ForgotPassword/>}/>
    <Route path="withdraws" element={<Withdraws/>}/>
    <Route path="deposits" element={<Deposits/>}/>
    <Route path="adminlogin" element={<AdminLogin/>}/>
    <Route path="adminreset" element={<AdminReset/>}/>
    <Route path="confirm2/:token" element={<AdminConfirm/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
