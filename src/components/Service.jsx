import { useContext, useState } from "react";
import { createContext } from "react";

const DataContext = createContext();

export function useDataContext () {
  return useContext(DataContext);
}

export function DataProvider({children}){
  
  const [profileFetched, setProfileFetched] = useState('');
  const [refreshBar,setRefreshBar]=useState(false);
  
  const refreshNavBar=()=>{
        setRefreshBar(!refreshBar)
    }

    const handlerProfilePic = (value) => {
      setProfileFetched(value);
    }

    



    
    return(
      <DataContext.Provider value={{refreshNavBar,refreshBar, setRefreshBar, profileFetched, handlerProfilePic}}>
        {children}
      </DataContext.Provider>
    )
}