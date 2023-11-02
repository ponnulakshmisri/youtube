import { useEffect } from "react";
import { useState } from "react";
import { useDataContext } from '../Service';


const ProfilePhotoUpload = () => {
    
    const { handlerProfilePic, refreshBar } = useDataContext();

    const [profilePhoto, setProfilePhoto] = useState("");

    const [tokenVal, setTokenVal] = useState('');

    const localStoreData = JSON.parse(localStorage.getItem('UserDetails'));


    useEffect(()=> {
        if (localStoreData.username) {
            setTokenVal(localStoreData.token);    
        }
    }, [refreshBar])

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setProfilePhoto(selectedFile);
        }
    }

    const profilepicFetch = async(tokenVal) => {
        let myHeaders = new Headers();
        myHeaders.append("ProjectId", "f104bi07c490");
        myHeaders.append("Authorization", `Bearer ${tokenVal}`);

        let formdata = new FormData();
        formdata.append("profileImage", profilePhoto);

        let requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
        };

        const response = await fetch("https://academics.newtonschool.co/api/v1/user/updateProfileImage", requestOptions)
        if (response.ok) {
            const result = await response.json();
            console.log("result.user.profileImage", result);
            console.log("result.user.profileImage", result.data.user.profileImage);
            handlerProfilePic(result.data.user.profileImage);
            console.log("test")
        }
    }
    
    return (
        <>
            <input type="file" onChange={handleFileChange}  accept="image/*" placeholder="Choose a Photo" />
            <button onClick={()=>profilepicFetch(tokenVal)} >Submit</button>
        </>
    )
}

export default ProfilePhotoUpload;