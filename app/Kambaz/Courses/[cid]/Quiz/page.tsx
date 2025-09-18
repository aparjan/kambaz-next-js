import Link from "next/link";

export default function Quiz() {
    return (
        <div id="wd-quizs">
            <input placeholder="Search for quizzes"
                id="wd-search-quiz" />
            <button id="wd-add-quiz-group">Start Quiz</button>
            <h3 id="wd-quizs-title">
                QUIZ 40% of Total <button>+</button> </h3>
            <ul id="wd-quiz-list">
                <li className="wd-quiz-list-item">
                    <Link href="/Kambaz/Courses/cid/Home"
                        className="wd-quiz-link" >
                        Q1
                    </Link> </li>
                <li className="wd-quiz-list-item">
                    <Link
                        href="/Kambaz/Courses/cid/Home"
                        className="wd-quiz-link"
                    >
                        Q2
                    </Link>
                </li>

                <li className="wd-quiz-list-item">
                    <Link
                        href="/Kambaz/Courses/cid/Home"
                        className="wd-quiz-link"
                    >
                        Q3
                    </Link>
                </li>

                <li className="wd-quiz-list-item">
                    <Link
                        href="/Kambaz/Courses/cid/Home"
                        className="wd-quiz-link"
                    >
                        Q4
                    </Link>
                </li>

                <li className="wd-quiz-list-item">
                    <Link
                        href="/Kambaz/Courses/cid/Home"
                        className="wd-quiz-link"
                    >
                        Q5
                    </Link>
                </li>

                <li className="wd-quiz-list-item">
                    <Link
                        href="/Kambaz/Courses/cid/quizs/A6"
                        className="wd-quiz-link"
                    >
                        Q6
                    </Link>
                </li>
            </ul>
        </div>
    );
}
