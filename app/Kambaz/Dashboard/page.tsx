import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course1">
                    <Link href="/Courses/1234" className="wd-dashboard-course-link">
                        <Image src="/images/reactjs.jpg" width={200} height={150} alt="React JS course thumbnail" />
                        <div>
                            <h5> CS1234 React JS </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <br />
                <div className="wd-dashboard-course2">
                    <Link href="/Courses/1234" className="wd-dashboard-course-link">
                        <Image src="/images/aws.jpg" width={200} height={150} alt="AWS course thumbnail" />
                        <div>
                            <h5> CS1234 AWS </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <br />
                <div className="wd-dashboard-course3">
                    <Link href="/Courses/1234" className="wd-dashboard-course-link">
                        <Image src="/images/python.jpg" width={200} height={150} alt="python course thumbnail" />
                        <div>
                            <h5> CS1234 python </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <br />
                <div className="wd-dashboard-course4">
                    <Link href="/Courses/1234" className="wd-dashboard-course-link">
                        <Image src="/images/java.jpg" width={200} height={150} alt="java course thumbnail" />
                        <div>
                            <h5> CS1234 java </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <br />
                <div className="wd-dashboard-course5">
                    <Link href="/Courses/1234" className="wd-dashboard-course-link">
                        <Image src="/images/docker.jpg" width={200} height={150} alt="Docker course thumbnail" />
                        <div>
                            <h5> CS1234 Docker </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <br />
                <div className="wd-dashboard-course6">
                    <Link href="/Courses/1234" className="wd-dashboard-course-link">
                        <Image src="/images/nodejs.jpg" width={200} height={150} alt="node.js course thumbnail" />
                        <div>
                            <h5> CS1234 node.js </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <br />
                <div className="wd-dashboard-course7">
                    <Link href="/Courses/1234" className="wd-dashboard-course-link">
                        <Image src="/images/cplus.jpg" width={200} height={150} alt="C++ course thumbnail" />
                        <div>
                            <h5> CS1234 C++ </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <br />

            </div>
        </div>
    );
}
