import { CurrentAdventure } from "../components/CurrentAdventure/CurrentAdventure";
import { ProfileHeader } from "../components/ProfileHeader/ProfileHeader";

const Profile = () => {
  return (
    <div>
      <ProfileHeader />
      <CurrentAdventure />
    </div>
  )
}

export default Profile;