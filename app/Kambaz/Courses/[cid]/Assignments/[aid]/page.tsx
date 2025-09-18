export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description">
                The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page.
            </textarea>
            <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />          </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assignment-grp">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-grp-select" name="group">
                            <option>ASSIGNMENTS</option>
                            <option>QUIZ</option>
                            <option>PROJECT</option>
                        </select>
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-grade-select" name="grade">
                            <option>PERCENTAGE</option>
                            <option>GRADE</option>
                        </select>
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type" name="type">
                            <option>ONLINE</option>
                            <option>OFFLINE</option>
                        </select>
                    </td>
                </tr>
                <br />
                <tr>
                    <td>          </td>
                    <td>
                        <label>Online Entry Options</label> <br />
                        <input id="wd-chkbx-entry" type="checkbox" name="entry1" /> Text Entry<br />
                        <input id="wd-chkbx-webURL" type="checkbox" name="entry2" /> Website URL<br />
                        <input id="wd-chkbx-media" type="checkbox" name="entry3" /> Media Recordings<br />
                        <input id="wd-chkbx-student-annotation" type="checkbox" name="entry4" /> Student Annotation<br />
                        <input id="wd-chkbx-file-upload" type="checkbox" name="entry5" /> File Uploads<br />
                    </td>
                </tr>
                <br />
                <tr>
                    <td>Assign to</td>
                    <td>
                        <select id="wd-assign-to" name="assign">
                            <option>Everyone</option>
                            <option>Offline class</option>
                            <option>Online class</option>
                        </select>
                    </td>
                </tr>
                <br />
                <tr>
                    <td>Due</td>
                    <td><input id="wd-due-select" type="date" name="due" value="2024-05-13" /></td>
                </tr>
                <br />
                <tr>
                    <td>Available from</td>
                    <td><input id="wd-available-select" type="date" name="availableFrom" value="2024-05-06" /></td>
                </tr>
                <br />
                <tr>
                    <td>Until</td>
                    <td><input id="wd-available-until" type="date" name="availableUntil" value="2024-05-20" /></td>
                </tr>
                <br />
            </table>
            <button id="wd-button-cancel" type="button">Cancel</button>
            <button id="wd-button-submit" type="submit">Save</button>
        </div>
    );
}
