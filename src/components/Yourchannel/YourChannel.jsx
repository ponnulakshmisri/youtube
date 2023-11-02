import './YourChannel.css';
import  img from '../../assets/avatar.png';
import {IoIosArrowForward} from 'react-icons/io'
import {BiSolidCamera} from 'react-icons/bi'
import { useEffect, useState } from 'react';
import ProfilePhotoUpload from '../ProfilePhotoUpload/ProfilePhotoUpload';

import { useDataContext } from '../Service';


function YourChannel() {

    const { profileFetched } = useDataContext();
    const [showProfilePhoto, setShowProfilePhoto] = useState(false);

    const toggleProfilePhoto = () => {
      setShowProfilePhoto(!showProfilePhoto);
    };
    const [userNameLetter, setUserNameLetter] = useState("")
    const [userName,setUserName] =useState("");
    const [userEmail,setUserEmail]=useState("");
    const [loginStatus, setLoginStatus] = useState(false);

    const localStorageUserDetails = () => {
        const dataFromLocal = JSON.parse(localStorage.getItem('UserDetails')) || [];
        if (dataFromLocal.username) {
            setLoginStatus(true);
            setUserNameLetter(dataFromLocal.username.charAt(0));
            setUserName(dataFromLocal.username);
            setUserEmail(dataFromLocal.emailId)
        } else {
            setLoginStatus(false);
        }
    }
    
    
    useEffect(()=> {
        localStorageUserDetails();
    }, [])
    const [selectedTab, setSelectedTab] = useState('Home');
    return(
        <>
        <div className='channel-container'>
            <div className='icon-container'>
            <div className='profile-icon'>
  {profileFetched ? (
    <img src={profileFetched} className='profile-img' />
  ) : (
    <div className='profile-first-letter'>
        
        {userNameLetter.toUpperCase()}
    </div>
  )}
  <BiSolidCamera className='camera-icon' onClick={toggleProfilePhoto} />
</div>


                <div className='profile-name'>
                    <div className='channel-name'>{userName.toUpperCase()}</div>
                    <div className='channel-mail'>{userEmail} . NoSubscribers . No video</div>
                    <div className='more-about'>
                        <div>More about this channel </div>
                        <IoIosArrowForward /></div>
                    <div className='manage-video'>
                        <div className='customize'>Customise channel</div>
                        <div className='customize'>Manage Videos</div>
                    </div>
                </div>
            </div>
            {showProfilePhoto && (
      <div className='profilephoto' style={{ marginTop: '15px' }}>
        <ProfilePhotoUpload />
      </div>
    )}
            <div className='home-container'>
    <div className={`tab ${selectedTab === 'Home' ? 'selected' : ''}`} onClick={() => setSelectedTab('Home')}>Home</div>
    <div className={`tab ${selectedTab === 'Playlist' ? 'selected' : ''}`} onClick={() => setSelectedTab('Playlist')}>Playlist</div>
    <div className={`tab ${selectedTab === 'Channel' ? 'selected' : ''}`} onClick={() => setSelectedTab('Channel')}>Channel</div>
    <div className={`tab ${selectedTab === 'About' ? 'selected' : ''}`} onClick={() => setSelectedTab('About')}>About</div>
</div>

        </div>
        
        </>
    )
}
export default YourChannel;