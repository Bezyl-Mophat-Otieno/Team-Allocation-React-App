const Header = ({selectedTeam,teamMemberCount})=>{
return (
<div>
                 <header>
                 <h1>Team Member Allocation </h1>
          <h3> Team {selectedTeam} has {teamMemberCount} Members</h3>
                 </header>    
</div>   
 );
}
export default Header