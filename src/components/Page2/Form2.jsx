import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom"
import "./index.css"
import { useEffect, useState } from "react"
const Form2 = ({ handleBack }) => {
    const [isHovered, setIsHovered] = useState(false)
    const [formErrors, setFormErrors] = useState({});
    const navigate = useNavigate()
    const [formValues, setFormValues] = useState({
        brandName: '',
        brandType: '',
        streetAddress: '',
        city: '',
        zipCode: '',
        taxIdNumber: '',
    })
    useEffect(()=>{
        const data = localStorage.getItem('form2Values')
        if(data){
            setFormValues(JSON.parse(data))
        }
    },[])
    const mouseEnter = () => {
        setIsHovered(true)
    }
    const mouseExit = () => {
        setIsHovered(false)
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };
    const handleValidation = () => {
        const errors = {};
        if (!formValues.brandName) errors.brandName = 'Brand name is required';
        if (!formValues.brandType) errors.brandType = 'Brand type is required';
        if (!formValues.streetAddress) errors.streetAddress = 'Street address is required';
        if (!formValues.city) errors.city = 'City is required';
        if (!formValues.zipCode) errors.zipCode = 'Zip code is required';
        if (!formValues.taxIdNumber) errors.taxIdNumber = 'Tax ID number is required'
        return errors;
    };
    const handleSubmit = () => {
        const errors = handleValidation();

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
        } else {
            localStorage.setItem('form2Values', JSON.stringify(formValues));
            setFormErrors({})
            setFormValues({
                brandName: '',
                brandType: '',
                streetAddress: '',
                city: '',
                zipCode: '',
                taxIdNumber: '',
            })
        }
    };


    const handleBackbtn = () => {
        handleBack()
        navigate("/")
    }
    return (


        <main>
            <div className="contt">
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
                <span className="headingg">Step 2</span>
                <span className="txtt">Buisness Infomation</span>
                <p className="centerr">Please, Enter information about your company</p>
                <div className="cntt">
                    <span>General Information</span>
                    <div className="roww">
                        <div className="coll">
                            <span>Brand Name<sup>*</sup></span>
                            <input
                                type="text"
                                name="brandName"
                                placeholder="Input your brand name"
                                value={formValues.brandName}
                                onChange={handleChange}
                            />
                            {formErrors.brandName && <span className="error">{formErrors.brandName}</span>}
                        </div>
                        <div className="coll">
                            <div className="mx4">
                                <span>Brand Type<sup>*</sup></span>
                                <div className="hover" onMouseEnter={mouseEnter} onMouseLeave={mouseExit}>?</div>
                                {isHovered && <div className="tooltip">
                                    <span>Local: Brands with Destribution in 3 divisions or less
                                        or multiple divisions but a total of 150 stores or less
                                    </span>
                                    <span>National: Brands with distribution in 4 or more
                                        divisions or in more than 150 stores
                                    </span>
                                </div>}
                            </div>
                            <input
                                type="text"
                                name="brandType"
                                placeholder="Input your brand type"
                                value={formValues.brandType}
                                onChange={handleChange}
                            />
                            {formErrors.brandType && <span className="error">{formErrors.brandType}</span>}
                        </div>
                    </div>
                    <div className="roww">
                        <div className="coll">
                            <span>Street Address<sup>*</sup></span>
                            <input
                                type="text"
                                name="streetAddress"
                                placeholder="Input your street address"
                                value={formValues.streetAddress}
                                onChange={handleChange}
                            />
                            {formErrors.streetAddress && <span className="error">{formErrors.streetAddress}</span>}
                        </div>
                        <div className="coll">
                            <span>City<sup>*</sup></span>
                            <input
                                type="text"
                                name="city"
                                placeholder="Input your city"
                                value={formValues.city}
                                onChange={handleChange}
                            />
                            {formErrors.city && <span className="error">{formErrors.city}</span>}
                        </div>
                    </div>
                    <div className="roww">
                        <div className="coll">
                            <span>Zip code<sup>*</sup></span>
                            <input
                                type="text"
                                name="zipCode"
                                placeholder="Input your zip code"
                                value={formValues.zipCode}
                                onChange={handleChange}
                            />
                            {formErrors.zipCode && <span className="error">{formErrors.zipCode}</span>}
                        </div>
                        <div className="coll">
                            <span>Tax id number<sup>*</sup></span>
                            <input
                                type="text"
                                name="taxIdNumber"
                                placeholder="Input your tax ID number"
                                value={formValues.taxIdNumber}
                                onChange={handleChange}
                            />
                            {formErrors.taxIdNumber && <span className="error">{formErrors.taxIdNumber}</span>}
                        </div>
                    </div>
                    <div className="roww">
                        <div className="coll">
                            <span>Documents<sup>*</sup></span>
                            <span className="sm-txt">Once the following documents are signed, you will be ready to get started</span>
                            <div className="input-row">
                                <input type="text" placeholder="Electronic signed agreement(s)" className="input" />
                                <svg className="my1" fill="#000000" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M760 380.4l-61.6-61.6-263.2 263.1-109.6-109.5L264 534l171.2 171.2L760 380.4z"></path></g></svg>

                                <div className="svg">
                                    <svg viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#ffffff"></path></g></svg>
                                </div>
                            </div>
                            <div className="input-row">
                                <input type="text" placeholder="Non adult beverage kroger market supplier waivers and release" className="input" />
                                <svg fill="#000000" className="my1 my2" viewBox="0 0 200 200" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title></title><path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z"></path></g></svg>

                                <div className="svg">
                                    <svg viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#ffffff"></path></g></svg>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="roww last">
                        <div className="coll">
                            <span>COI PDF UPLOAD</span>
                            <span className="sm-txt">Once the following documents are signed, you will be ready to get started</span>
                            <div className="input-row">
                                <input type="text" placeholder="Electronic signed agreement(s)" className="input" />
                                <svg className="my1" fill="#000000" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M760 380.4l-61.6-61.6-263.2 263.1-109.6-109.5L264 534l171.2 171.2L760 380.4z"></path></g></svg>

                                <div className="svg">
                                    <svg viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#ffffff"></path></g></svg>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div className="btn-roww" >
                <div className="btn ">
                    <svg viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z" fill="#0af5ce"></path></g></svg>
                    <span className="color">Back to login</span>
                </div>
                <div className="mx3" >
                    <div className="btn1" onClick={handleBackbtn}>
                        <svg fill="#000000" className="fill" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 59.414 59.414" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon points="45.268,1.414 43.854,0 14.146,29.707 43.854,59.414 45.268,58 16.975,29.707 "></polygon> </g></svg>
                        <span>Previous step</span>
                    </div>
                    <div className="btn btnn" onClick={handleSubmit}>
                        <span className="white">Submit</span>
                        <svg viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#ffffff"></path></g></svg>
                    </div>
                </div>
            </div>
        </main>
    )
}

Form2.propTypes = {
    handleBack: PropTypes.func.isRequired
}

export default Form2