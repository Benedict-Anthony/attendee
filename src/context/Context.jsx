import { collection, onSnapshot, query } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { database } from "../firebase";

const AppContext = createContext({});

export const useAppSelector = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    user: {},
    attendance: {},
  });

  useEffect(() => {
    function getUsers() {
      setIsLoading(true);
      const userCollectionRef = collection(database, "users");
      const userQuery = query(userCollectionRef);
      const unSubscribe = onSnapshot(userQuery, (snapshots) => {
        const userShots = snapshots.docs.map((user) => ({
          ...user.data(),
          id: user.id,
        }));
        setData({ ...data, user: userShots });
      });
      setIsLoading(false);
      return unSubscribe;
    }

    function getAttendance() {
      setIsLoading(true);
      const attendanceCollectionRef = collection(database, "attendance");
      const attendanceQuery = query(attendanceCollectionRef);
      const unSubscribe = onSnapshot(attendanceQuery, (snapshots) => {
        const attendanceShots = snapshots.docs.map((attendance) => ({
          ...attendance.data(),
          id: attendance.id,
        }));
        setData({ ...data, attendance: attendanceShots });
      });
      setIsLoading(false);
      return unSubscribe;
    }

    getUsers();
    getAttendance();
  }, []); //eslint-disable-line
  return (
    <AppContext.Provider value={{ data, isLoading }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
