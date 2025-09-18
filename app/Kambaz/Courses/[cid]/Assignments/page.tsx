import Link from "next/link";

export default function Assignments() {
    return (
        <div id="wd-assignments">
            <input placeholder="Search for Assignments"
                id="wd-search-assignment" />
            <button id="wd-add-assignment-group">+ Group</button>
            <button id="wd-add-assignment">+ Assignment</button>
            <h3 id="wd-assignments-title">
                ASSIGNMENTS 40% of Total <button>+</button> </h3>
            <ul id="wd-assignment-list">
                <li className="wd-assignment-list-item">
                    <Link href="/Kambaz/Courses/cid/Assignments/123"
                        className="wd-assignment-link" >
                        A1 - ENV + HTML
                    </Link> </li>
                <li className="wd-assignment-list-item">
                    <Link
                        href="/Kambaz/Courses/cid/Assignments/A2"
                        className="wd-assignment-link"
                    >
                        A2 – CSS + BOOTSTRAP
                    </Link>
                </li>

                <li className="wd-assignment-list-item">
                    <Link
                        href="/Kambaz/Courses/cid/Assignments/A3"
                        className="wd-assignment-link"
                    >
                        A3 – JAVASCRIPT + DOM
                    </Link>
                </li>

                <li className="wd-assignment-list-item">
                    <Link
                        href="/Kambaz/Courses/cid/Assignments/A4"
                        className="wd-assignment-link"
                    >
                        A4 – REACT + STATE
                    </Link>
                </li>

                <li className="wd-assignment-list-item">
                    <Link
                        href="/Kambaz/Courses/cid/Assignments/A5"
                        className="wd-assignment-link"
                    >
                        A5 – ROUTING + REDUX
                    </Link>
                </li>

                <li className="wd-assignment-list-item">
                    <Link
                        href="/Kambaz/Courses/cid/Assignments/A6"
                        className="wd-assignment-link"
                    >
                        A6 – NODE + SESSION
                    </Link>
                </li>
            </ul>
        </div>
    );
}
