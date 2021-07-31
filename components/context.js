import React from 'react';

export const AuthContext = React.createContext();


// import React,{useState,useEffect} from 'react';
// import auth from '@react-native-firebase/auth';
// export const AuthContext = React.createContext();

// export const DataContext =({children})=>{
//     const [uid,setUid] = useState(null);


//     function onAuthStateChanged(user) {
    
     
//         if(user == null){
//             setUid(0);
//         }else{
//         setUid(user.uid);
//         setPhoneNumber(user.phoneNumber);
//         }
//        // if (initializing) setInitializing(false);
//       }

//     useEffect(() => {
//         const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//         return subscriber; // unsubscribe on unmount
//       }, []);

   
//  //console.log("DataCpntext" + uid);
//     return(
//         <AuthContext.Provider value={{uid}} >
//         {children}
//         </AuthContext.Provider>
//     );
// }

// export default AuthContext;