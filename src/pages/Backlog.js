import Task from '../../components/Task';
import useDataFetching from '../../hooks/useDataFetching';

function Backlog() {

    // const BacklogWrapper = styled.div`
    //     display: flex;
    //     flex-direction: column;
    //     margin: 5%;
    // `;

    // const BacklogTitle = styled.h2`
    //     width: 100%;
    //     padding-bottom: 10px;
    //     text-align: center;
    //     border-bottom: 1px solid darkGray;
    // `;

    // const TasksWrapper = styled.div`
    //     display: flex;
    //     justify-content: space-between;
    //     flex-direction: row;
    //     flex-wrap: wrap;
    //     margin: 5%;
    // `;

    const [loading, error, tasks] = useDataFetching(
        'https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks',
    );

    return (
        <div className="backlog-wrapper">
            <h2 className="backlog-title">Backlog</h2>
            <div className="task-wrapper">
                {loading || error ? (
                    <span>{error || 'Loading...'}</span>
                ) : (
                    tasks.map((task) => (
                        <Task key={task.id} title={task.title} body={task.body} />
                    ))
                )}
            </div>
        </div>
    );
}
export default Backlog;