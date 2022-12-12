import Profile from "./Profile/Profile"
import userData from "../db/profile.json"
import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers"

export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
      <Profile user ={ userData } />
    </div>
  );
};
