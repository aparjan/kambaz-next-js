import Link from "next/link";
export default function CourseNavigation() {
  return (
    <div id="wd-courses-navigation">
      <Link href="/Kambaz/Courses/${cid}/Home" id="wd-course-home-link">Home</Link><br/>
      <Link href="/Kambaz/Courses/${cid}/Modules" id="wd-course-modules-link">Modules
        </Link><br/>
      <Link href="/Kambaz/Courses/${cid}/Piazza" id="wd-course-piazza-link">Piazza</Link><br/>
      <Link href="/Kambaz/Courses/${cid}//Zoom" id="wd-course-zoom-link">Zoom</Link><br/>
      <Link href="/Kambaz/Courses/${cid}/Assignments" id="wd-course-quizzes-link">
          Assignments</Link><br/>
      <Link href="/Kambaz/Courses/${cid}/Quiz" id="wd-course-assignments-link">Quizzes
        </Link><br/>
      <Link href="/Kambaz/Courses/${cid}//Grades" id="wd-course-grades-link">Grades</Link><br/>
      <Link href="/Kambaz/Courses/${cid}//People/Table" id="wd-course-people-link">People</Link><br/>
    </div>
  );}
