import React from "react";
import { coursesData } from "../data/courses";
import { sortByWeekday } from "../utils/sortCourses";

const Courses = () => {
  return (
    <div>
      <h3 className="py-4 font-semibold pl-4 text-2xl text-cprimary">
        400 level Computer Courses
      </h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Code</th>
              <th>Day</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {sortByWeekday(coursesData).map((course, index) => (
              <tr key={course.courseCode}>
                <th>{index + 1}</th>
                <td>{course.courseTitle}</td>
                <td>{course.courseCode}</td>
                <td>{course.day}</td>
                <td>
                  {course.timeStart} - {course.timeEnd}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Courses;
