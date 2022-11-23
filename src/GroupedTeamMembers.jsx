/* eslint-disable no-restricted-globals */
                                                                                                     import { useState } from "react";
const GroupedTeamMembers = ({employees,selectedTeam,setTeam})=>{
// eslint-disable-next-line no-use-before-define

const groupTeamMembers=()=>{
          let teams = [];
          let teamAMembers = employees.filter((employee)=> employee.teamName==='TeamA');
          let teamA = {
            team:'TeamA',members:teamAMembers,collapsed:selectedTeam==='TeamA'?true:false
          }
          teams.push(teamA)

          let teamBMembers = employees.filter((employee)=> employee.teamName==='TeamB');
          let teamB = {
            team:'TeamB',members:teamBMembers,collapsed:selectedTeam==='TeamB'?true:false
          }
          teams.push(teamB)

          let teamCMembers = employees.filter((employee)=> employee.teamName==='TeamC');
          let teamC = {
            team:'TeamC',members:teamCMembers,collapsed:selectedTeam==='TeamC'?true:false
          }
          teams.push(teamC)

          let teamDMembers = employees.filter((employee)=> employee.teamName==='TeamD');
          let teamD = {
            team:'TeamD',members:teamDMembers,collapsed:selectedTeam==='TeamD'?true:false
          }
          teams.push(teamD)
          return teams;
          

}
const [groupedEmployees,setGroupData]=useState(groupTeamMembers())

function handleTeamClick(event) {
  var transformedGroupData = groupedEmployees.map((groupedData) => groupedData.team === event.currentTarget.id
    ? { ...groupedData, collapsed: !groupedData.collapsed }
    : groupedData);
    setGroupData(transformedGroupData);
  setTeam(event.currentTarget.id);
}


    return (
        <main>
<h4>Team Member Allocation</h4>
<h5>Team {}</h5>

  {
        groupedEmployees.map((item) => {
          return (
            <div key={item.team} className='card mt-2' style={{ cursor: "pointer" }}>
              <h4 id={item.team} className="card-header text-secondary bg-white" onClick={handleTeamClick}>
                Team Name: {item.team}
              </h4>
              <div id={"collapse_" + item.team}
                className={item.collapsed === true ? "collapse" : ""}>
                <hr />
                {
                  item.members.map(member => {
                    return (
                      <div className="mt-2">
                        <h5 className="card-title mt-2">
                          <span className="text-dark">Full Name: {member.fullName}</span>
                        </h5>
                        <p>Designation: {member.designation}</p>
                      </div>
                    );
                  })
                }
              </div>
              <hr />
            </div>
          );
        })
      }
    </main>
      
     );
    }
    export default GroupedTeamMembers