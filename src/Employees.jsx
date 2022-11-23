import maleProfile from './images/maleProfile.jpg'
import femaleProfile from './images/femaleProfile.jpg'
import Teams from './Teams';
import TeamMembers from './TeamMembers';

const Employees = ({employees,selectedTeam,handleEmployeeCardClicked,handleSelectedTeamOnchange})=>{

return(
  <main className="container">
  <div className="row justify-content-center mt-3 mb-3">
    <div className="col-6">
      <Teams selectedTeam={selectedTeam}
        handleTeamSelectionChange={handleSelectedTeamOnchange} />
    </div>
  </div>
  <div className="row justify-content-center mt-3 mb-3">
    <div className="col-8">
      <div className="card-collection">
        <TeamMembers employees={employees}
          handleEmployeeCardClick={handleEmployeeCardClicked}
          selectedTeam={selectedTeam} />
      </div>
    </div>
  </div>
</main>
);

}
export default Employees