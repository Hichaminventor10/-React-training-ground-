
// props is a js object that contains the properties passed to the component
//props.key
import PropTypes from "prop-types";
import Student from "./Students";

function Students(props) {
  return (
    <div className="student">
     <p> Name: {props.name}</p>
    
     <div>
        <h6>
            Is Student:{""}
            <span className={props.isStudent ? "yes" : "no"}>
                {props.isStudent ? "Yes" : "No"}
            </span>
        </h6>
        <h6>




  Age:{" "}
  <span className={props.age > 20 ? "ageGreen" : "ageRed"}>
    {props.age}
  </span>
</h6>
     </div>
    </div>
  );
  Students.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false    
};

Students.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
};


}

export default Students;






