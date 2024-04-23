import React from "react";
import { sortByWeekday } from "../utils/sortCourses";
import { coursesData } from "../data/courses";
import { Link } from "react-router-dom";

const Attendance = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>

              <th>Code</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {sortByWeekday(coursesData).map((course, index) => (
              <tr className="my-3">
                <td></td>
                <td>{course.courseTitle}</td>
                <td>{course.day}</td>
                <Link
                  className="btn btn-link text-cprimary "
                  to={`/attendance/${course.courseTitle}`}
                  key={course.courseCode}
                >
                  View
                </Link>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Attendance;
