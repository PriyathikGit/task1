import { useNavigate } from "react-router-dom"
import {useState, useEffect} from "react"
import "./index.css"
import PropTypes from "prop-types"

const Form1 = ({ handleNext }) => {
    const navigate = useNavigate()
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: ''
    });
    const [formErrors, setFormErrors] = useState({});
    useEffect(() => {
        const storedValues = localStorage.getItem('formValues');
        if (storedValues) {
            setFormValues(JSON.parse(storedValues));
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    const handleValidation = () => {
        const errors = {};
        if (!formValues.firstName) errors.firstName = 'First name is required';
        if (!formValues.lastName) errors.lastName = 'Last name is required';
        if (!formValues.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
            errors.email = 'Email address is invalid';
        }
        if (!formValues.phoneNumber) errors.phoneNumber = 'Phone number is required';
        if (!formValues.password) errors.password = 'Password is required';
        if (formValues.password !== formValues.confirmPassword) {
            errors.confirmPassword = 'Passwords do not match';
        }
        return errors;
    };

    const handleNextbtn = () => {


        const errors = handleValidation();
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
        } else {
            // Save form data to local storage
            localStorage.setItem('formValues', JSON.stringify(formValues));
            handleNext();
            navigate("/page2");
        }

    };

    return (
        <main>
            <div className="cont">
                <div className="top-row">
                    <div className="item">
                        <span className="circle">1</span> <span>Your Profile</span>
                    </div>
                    <div className="item">
                        <span className="circle">2</span> <span>Buisness Information</span>
                    </div>
                    <div className="item" style={{ borderRight: "0" }}>
                        <span className="circle">3</span> <span>Additional Users</span>
                    </div>
                </div>
                <span className="heading">Step 1</span>
                <span className="txt">Your Profile</span>
                <p className="center">Enter the login information for your account. You will
                    be able to create additional users after registering
                </p>
                <div className="cnt">
                    <div className="row">
                        <div className="coll">
                            <span>First Name <sup>*</sup></span>
                            <input
                                type="text"
                                name="firstName"
                                placeholder="input your first name"
                                value={formValues.firstName}
                                onChange={handleChange}
                            />
                            {formErrors.firstName && <span className="error">{formErrors.firstName}</span>}
                        </div>
                        <div className="coll">
                            <span>Last name <sup>*</sup></span>
                            <input
                                type="text"
                                name="lastName"
                                placeholder="input your last name"
                                value={formValues.lastName}
                                onChange={handleChange}
                            />
                            {formErrors.lastName && <span className="error">{formErrors.lastName}</span>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="coll">
                            <span>Email <sup>*</sup></span>
                            <input
                                type="text"
                                name="email"
                                placeholder="input your email"
                                value={formValues.email}
                                onChange={handleChange}
                            />
                            {formErrors.email && <span className="error">{formErrors.email}</span>}
                        </div>
                        <div className="coll">
                            <span>Phone Number <sup>*</sup></span>
                            <input
                                type="text"
                                name="phoneNumber"
                                placeholder="input your phone number"
                                value={formValues.phoneNumber}
                                onChange={handleChange}
                            />
                            {formErrors.phoneNumber && <span className="error">{formErrors.phoneNumber}</span>}
                        </div>
                    </div>
                    <div className="row lastt">
                        <div className="coll">
                            <span>Password<sup>*</sup></span>
                            <input
                                type="password"
                                name="password"
                                placeholder="Create Password"
                                value={formValues.password}
                                onChange={handleChange}
                            />
                            {formErrors.password && <span className="error">{formErrors.password}</span>}
                        </div>
                        <div className="coll">
                            <span>Confirm Password<sup>*</sup></span>
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm your password"
                                value={formValues.confirmPassword}
                                onChange={handleChange}
                            />
                            {formErrors.confirmPassword && <span className="error">{formErrors.confirmPassword}</span>}
                        </div>
                    </div>
                </div>

            </div>
            <div className="btn-row">
                <div className="btn ">
                    <svg viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z" fill="#0af5ce"></path></g></svg>
                    <span className="collor">Back to login</span>
                </div>
                <div className="btn btnn" onClick={handleNextbtn}>
                    <span className="white">Next Step</span>
                    <svg viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#ffffff"></path></g></svg>
                </div>
            </div>
        </main>
    )
}

Form1.propTypes = {
    handleNext: PropTypes.func.isRequired
}

export default Form1