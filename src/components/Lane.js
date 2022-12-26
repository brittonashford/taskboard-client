import Task from './components/Task';



export default function Lane({ laneId, title, loading, error, tasks, onDragStart, onDragOver, onDrop }) {
    return (
        <div className="lane-wrapper" onDragOver={onDragOver} onDrop={(e) => onDrop(e, laneId)}>
            <h2 className="lane-title">{title}</h2>
            {loading || error ? (
                <span>{error || 'Loading...'}</span>
            ) : (
                tasks.map((task) => (
                    <Task
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        body={task.body}
                        onDragStart={onDragStart}
                    />
                ))
            )}
        </div>
    );
}