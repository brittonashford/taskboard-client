import Issue from './Issue';



export default function Lane({ laneId, title, loading, error, issues, onDragStart, onDragOver, onDrop }) {

    console.log(issues);
    return (
        <div className='lane-wrapper' onDragOver={onDragOver} onDrop={(e) => onDrop(e, laneId)}>
            <h4 className='lane-title'>{title}</h4>
            {loading || error ? (
                <span>{error || 'Loading...'}</span>
            ) : (
                issues.map((issue) => (         
                    <Issue
                        key={issue.issueId}
                        issueId={issue.issueId}
                        title={issue.title}
                        type={issue.type}
                        priority={issue.priority}
                        status={issue.status}
                        description={issue.description}
                        submittedBy={issue.submittedBy}
                        assignedTo={issue.assignedTo}
                        onDragStart={onDragStart}
                    />
                ))
            )}
        </div>
    );
}




