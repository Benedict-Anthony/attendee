import React, { useEffect, useState } from "react";
import { useAppSelector } from "../context/Context";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";

const AttendanceDetails = () => {
  const {
    isLoading,
    data: { attendance },
  } = useAppSelector();
  const [filterAttendance, setFilterAttendance] = useState([]);

  const params = useParams();
  useEffect(() => {
    if (!attendance) return;
    const courseTitle = params.title;
    setFilterAttendance(
      attendance.filter((item) => item.courseTitle === courseTitle)
    );
  }, [attendance, params]);

  if (isLoading || !attendance) return <Loading />;
  if (filterAttendance.length === 0) {
    <div className="flex justify-center item-center flex-col w-screen h-screen">
      <h2 className="font-bold text-xl w-32 text-center">
        No attendance taking yet for {params.title}
      </h2>
    </div>;
  }
  return (
    <div>
      {filterAttendance.length === 0 ? (
        <div className="flex justify-center item-center flex-col w-screen h-screen">
          <h2 className="font-bold text-3xl">
            No attendance taking yet for {params.title}
          </h2>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Course</th>
                <th>name</th>
                <th>Mat no</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              {filterAttendance.map((item, index) => (
                <tr key={item.id}>
                  <th>{index + 1}</th>
                  <td>{item.courseTitle}</td>
                  <td>{item.fullName}</td>
                  <td>{item.day}</td>
                  <td>
                    {item.timeStart} - {item.timeEnd}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AttendanceDetails;
