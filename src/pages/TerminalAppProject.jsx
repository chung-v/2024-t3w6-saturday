import { useParams } from "react-router-dom";

export default function TerminalAppProject() {
    let { versionNumber } = useParams();

    return (
        <div>
            <h1>My Terminal Project</h1>
            <p>Project features:</p>
            <ul>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
            </ul>
            {versionNumber && <h3>Version Number: {versionNumber}</h3>}
        </div>
    )
}