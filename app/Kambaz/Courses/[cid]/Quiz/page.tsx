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
                    <a href="/Kambaz/Courses/{cid}/Home"
                        className="wd-quiz-link" >
                        Q1
                    </a> </li>
                <li className="wd-quiz-list-item">
                    <a
                        href="/Kambaz/Courses/{cid}/Home"
                        className="wd-quiz-link"
                    >
                        Q2
                    </a>
                </li>

                <li className="wd-quiz-list-item">
                    <a
                        href="/Kambaz/Courses/{cid}/Home"
                        className="wd-quiz-link"
                    >
                        Q3
                    </a>
                </li>

                <li className="wd-quiz-list-item">
                    <a
                        href="/Kambaz/Courses/{cid}/Home"
                        className="wd-quiz-link"
                    >
                        Q4
                    </a>
                </li>

                <li className="wd-quiz-list-item">
                    <a
                        href="/Kambaz/Courses/{cid}/Home"
                        className="wd-quiz-link"
                    >
                        Q5
                    </a>
                </li>

                <li className="wd-quiz-list-item">
                    <a
                        href="/Kambaz/Courses/1234/quizs/A6"
                        className="wd-quiz-link"
                    >
                        Q6
                    </a>
                </li>
            </ul>
        </div>
    );
}
