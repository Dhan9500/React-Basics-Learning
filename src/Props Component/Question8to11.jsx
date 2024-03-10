
function Question8to11({employees}){
    
    const totalSalary=()=>{
        let total=0;
        for (let emp of employees) {
            total+=emp.salary;
        }
        return total;
    }

    return(
        <div>
        {employees.map((item,index)=>{
            return(
                <div>
                <ul key={index} className={`${item.level===2?"bg-orange-400":"bg-white"} ${item.designation==='President'?"border-2 border-green-500":"border-2"} border-2`}>
                    <li>Name: {item.name}</li>
                    <li>Level: {item.level}</li>
                    <li>Department: {item.dept}</li>
                    <li>Designation: {item.designation}</li>
                    <li>Salary: {item.salary}</li>
                </ul>
                </div>        
            )
        })}
        <h1>Toata Salary Expenses: {totalSalary()}</h1>
        </div>
    );
}
export default Question8to11;