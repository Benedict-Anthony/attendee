import React from "react";
import { useAppSelector } from "../context/Context";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa6";
import { SiGoogleclassroom } from "react-icons/si";
import { IoIosTime } from "react-icons/io";
import { FaRegTimesCircle } from "react-icons/fa";
import { auth } from "../firebase";

const Home = () => {
  const { isLoading, data } = useAppSelector();
  if (isLoading) return <Loading />;
  const attendance = data.attendance;
  return (
    <section className="home mt-10">
      <h1 className="font-bold py-3 pl-4 text-cprimary text-3xl">
        Welome {auth.currentUser?.displayName}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-between items-center py-1 px-2 mt-3">
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-cprimary">
              <SiGoogleclassroom />
              Classes
            </h2>
            <h4>{attendance.length} classes taken</h4>
            <div className="card-actions justify-end">
              <button className="btn btn-primary bg-cprimary">
                <Link to={"/"}>View</Link>
              </button>
            </div>
          </div>
        </div>

        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-cprimary">
              <FaUsers />
              Attendance
            </h2>
            <h4>{attendance.length} attendance taken</h4>
            <div className="card-actions justify-end">
              <button className="btn btn-primary bg-cprimary">
                <Link to={"/"}>View</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-cprimary">
              <FaRegTimesCircle />
              Canceled
            </h2>
            <h4>7 classes canceled</h4>
            <div className="card-actions justify-end">
              <button className="btn btn-primary bg-cprimary">
                <Link to={"/"}>View</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-cprimary">
              <IoIosTime />
              Up coming
            </h2>
            <h4>47 classes Up coming</h4>
            <div className="card-actions justify-end">
              <button className="btn btn-primary bg-cprimary">
                <Link to={"/"}>View</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
