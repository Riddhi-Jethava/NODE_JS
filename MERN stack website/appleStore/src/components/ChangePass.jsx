import React from 'react'
import { useNavigate } from 'react-router-dom';

const ChangePass = () => {

    const [newPassword, setNewPassword] = useState({
        oldPass : "",
        newPass : "",
        confirmPass : ""
    })

    const handleInputChanges = (e) => {
        setNewPassword({
            ...newPassword,
            [e.target.name]: e.target.value
        });
    };

    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Done to submit");

        try {
            const response = await axios.post(
                "http://localhost:1001/changePassword",
                {
                    oldPass: newPassword.oldPass,
                    newPass: newPassword.newPass,
                    confirm: newPassword.confirmPass
                },
            );
            navigate('/')
            alert('update Successfully');

        } catch (err) {
            console.log("Error While signing http://localhost:1001/changePassword");
            console.log(err);
            alert('Something Went Wrong');
        }
    };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="oldPass" id="oldPass" value={newPassword.oldPass} onChange={handleInputChanges} placeholder='oldPass'/>
        <input type="text" name="newPass" id="newPass" value={newPassword.newPass} onChange={handleInputChanges} placeholder='newPass'/>
        <input type="text" name="confirmPass" id="confirmPass" value={newPassword.confirmPass} onChange={handleInputChanges} placeholder='confirmPass'/>
        <button type='submit'>Update</button>
      </form>
    </div>
  )
}

export default ChangePass
