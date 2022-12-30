import { useEffect, useState } from 'react';
import axios from '../api/issue.api';
import Lane from '../components/Lane';
import useAxios from '../hooks/useAxios';



function Board() {

const [lanes, setLanes] = useState([]);
const [issues, setIssues] = useState();
    // const issues = [
    //     {issueId: 1,
    //     title: 'Test issue',
    //     type: 'Bug',
    //     priority: 'Low',
    //     status: 'Not Started',
    //     description: 'hard coded issue',
    //     submittedBy: 'your mom',
    //     assignedTo: 'also your mom',
    //     currentLaneId: 1}
    // ]

    const [laneData, laneError, laneLoading] = useAxios({
        axiosInstance: axios,
        method: 'GET',
        url: '/GetAllLanes',
        requestConfig: {
            headers: {
                'Content-Language': 'en-US'
            }
        }
    });

    const [issueData, issueError, issueLoading] = useAxios({
        axiosInstance: axios,
        method: 'GET',
        url: '/GetAllIssues',
        requestConfig: {
            headers: {
                'Content-Language': 'en-US'
            }
        }
    });

    useEffect(() => {
        setLanes(laneData);
        setIssues(issueData);
    },[laneData, issueData])


    // useEffect(() => {
    //     debugger;
    //     async function getLanes() {
    //       try {
    //         const response = await axios.get(
    //           "https://localhost:7283/Issue/GetAllLanes"
    //         );
    //         const lanesList = await response.data;
    //         if (response) {
    //             console.log(response.data);
    //             setLanes(lanesList);
    //         }
    //       } catch (error) {
    //         console.error(error);
    //       } 
    //       finally {
    //         setLanesLoading(false);
    //       }
    //     }
    //     getLanes();
    //   }, []);


    //     async function getIssues(){
    //         const response = await axios.get('https://localhost:7283/Issue/GetAllIssues');
    //         console.log(response.data);
    //         setIssues(response.data);
    //         console.log(issues);
    //     }

    function onDragStart(e, issueId) {
        console.log(`on drag start. e: ${e}, issueId: ${issueId}`);
        e.dataTransfer.setData('issueId', issueId);
    }
    
    function onDragOver(e) {
        e.preventDefault();
    }

    function onDrop(e, laneId) {
        
        const issueId = e.dataTransfer.getData('issueId');
        console.log(`on drop. e: ${e}, laneId: ${laneId}, issueId: ${issueId}`);
        const updatedIssues = issues.filter((issue) => {
            if (issue.issueId.toString() === issueId) {
                issue.currentLaneId = laneId;
            }
            return issue;
        });

        setIssues(updatedIssues);
    }



    return (
        <div className="board-wrapper">
        {laneLoading || issueLoading && 
            <h2>Loading....</h2>}

        {!laneLoading && !issueLoading && laneError && 
            <p className="err-msg">Lane Error: {laneError}</p>}

        {!laneLoading && !issueLoading  && issueError && 
            <p className="err-msg">Issue Error: {laneError}</p>}

        {!laneLoading && !laneError && !lanes && <h3>Hmmm... no lanes</h3>}

        {!issueLoading && !issueError && !issues && <h3>Hmmm... no issues</h3>}

        {!laneLoading && !issueLoading && !laneError && !issueError && lanes && issues &&    
                lanes.map((lane) => (
                    <Lane
                        key={lane.laneId}
                        laneId={lane.laneId}
                        title={lane.laneName}
                        // loading={loading}
                        // error={error}
                        issues={issues.filter((issue) => issue.currentLaneId === lane.laneId)}
                        onDragStart={onDragStart}
                        onDragOver={onDragOver}
                        onDrop={onDrop}
                    />
                )
            )
        }
        </div>
    );
}

export default Board;