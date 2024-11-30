
import './App.css'
import Grandpa from './second_components/Grandpa/Grandpa'
// import { data } from 'react-router-dom';
// import ReusableForm from './components/ReusableForm/ReusableForm'
// import Hookform from './components/Hookform/Hookform'
// import RefForm from './components/RefForm/RefForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StatefulForm from './components/StatefulForm/StatefulForm'

function App() {
  
//   const handleSginUpSubmit = data => {
//     console.log('Sign up data', data)
// }

// const handleUpdateProfile = data => {
//     console.log('Update profile', data)
// }

  return (
    <>
      <h1>Form Master</h1>
      <Grandpa></Grandpa>
      
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <Hookform></Hookform> */}
      {/* <ReusableForm formTitle={"Sign Up"} handleSubmit={handleSginUpSubmit} >
        <div>
          <h4>Sgin Up</h4>
          <p>Please Sgin up right now</p>
        </div>
      </ReusableForm>
      <ReusableForm formTitle={"Profile Update"} submitBtnText='Update' handleSubmit={handleUpdateProfile} >
        <div>
          <h4>Update Profile</h4>
          <p>Please Always kep your profile updated</p>
        </div>
      </ReusableForm> */}
    </>
  )
}

export default App
