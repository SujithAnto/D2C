
// Purpose: Creates a new object with the specified prototype object.
//Explanation: This method allows you to create a new object that inherits properties and methods from another object.

const TeamMember = {
    firstname:"",
    lastname:"",
    age:"",
    team:"Rolex"
}

const nirmal = Object.create(TeamMember);
nirmal.firstname = "Nirmal";
nirmal.lastname = "Kumar";
nirmal.age = 25;

console.log(nirmal.team,Object.values(nirmal),Object.keys(nirmal))

// create - keys - values done

// assign