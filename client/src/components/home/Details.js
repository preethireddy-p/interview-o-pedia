import { useRef, useContext, useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import axios from 'axios';
import Context from '../../context';

const Details = (props) => {
  const { toggleDetails } = props;

  const hideDetails = () => {
    toggleDetails(false);
  };

  const userType = useRef();
  const userResume = useRef();
  const linkedinProfile = useRef();
  const userYoe = useRef();
  const preferredLoc = useRef();
  const jobRole = useRef();
  const userEmail = useRef();

  const updateDetails = async() => {
    const email = userEmail.current.value;
    const type = userType.current.value;
    const resume = userResume.current.value;
    const linkedin_profile =linkedinProfile.current.value;
    const yoe = userYoe.current.value;
    const preferred_loc = preferredLoc.current.value;
    const job_role = jobRole.current.value;
    const url = "http://localhost:8080/users/details/add";
    
          console.log(preferred_loc)
          let formData = {
            email: email,
            type: type,
            resume: resume,
            linkedin_profile: linkedin_profile,
            yoe: yoe,
            preferred_loc: preferred_loc,
            job_role: job_role,
          }
          await axios
            .post(url, formData)
            .then(
                response => {console.log(response)
                alert("Details updated successfully !")}
            )
        
            .catch(error => {
                alert('Cannot update the details. Please try again');
            })
        }      

  return (
    <div className="create">
      <div className="create__content">
        <div className="create__container">
          <div className="create__title">Details</div>
          <div className="create__close">
            <img alt="close" onClick={hideDetails} src="https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/__geKiQnSG-.png" />
          </div>
        </div>
        <div className="create__subtitle"></div>
        <div className="create__form">       
          <input type="text" placeholder="Email" ref={userEmail} />
          <input type="text" placeholder="User Type" ref={userType} />
          <input type="text" placeholder="Resume/CV link" ref={userResume} />
          <input type="text" placeholder="Linkedin Profile" ref={linkedinProfile} />
          <input type="text" placeholder="Years Of Experience" ref={userYoe} />
          <input type="text" placeholder="Preferred Location" ref={preferredLoc} />
          <input type="text" placeholder="Job Role" ref={jobRole} />
          <button className="create__btn" onClick={updateDetails}>
           Update
          </button>
        </div>
      </div>
    </div>
  );
};


export default Details;