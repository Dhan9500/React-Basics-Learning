function Question7({ student }) {
  
    const total=student.english+student.maths+student.computers;
    const grade=() => {
        if(total>=225){
            return 'A';
        }
        else if(total>=180){
            return 'B';
        }
        else if(total>=150){
            return 'C';
        }
        else{
            return 'D';
        }
    }

    console.log(grade())

    return (
    <div>
      <div>
        <h1>Students Details</h1>
        <h1>Name: {student.name}</h1>
        <h1>English: {student.english}</h1>
        <h1>Maths: {student.maths}</h1>
        <h1>Computers:{student.computers}</h1>
        <h1>Total Marks: {total}</h1>
        <h1>Grade:{grade()}</h1>
      </div>
    </div>
  );
}

export default Question7;
