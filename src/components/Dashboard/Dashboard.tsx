import { useNavigate } from "react-router";
import { useUserAuth } from "../../context/UserAuthContext"

import * as S from './DashboardStyles'


const Dashboard = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
      <S.MainDashboard>
        <h4>Welcome, {user.displayName}</h4>
        {user.photoURL ? <img src={user.photoURL} alt="Profile picture" /> : <p>sem foto</p>}

        <p>{user.email}</p>


        <div>

          <button onClick={handleLogout}>
            Log out
          </button>

        </div>
      </S.MainDashboard>
  );
};

export default Dashboard;
