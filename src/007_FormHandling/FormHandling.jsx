import React, { useState } from 'react'
import './FormHandling.css'

const FormHandling = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        country: ""
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, country } = formData;
        const message = `Name: ${name}\nEmail: ${email}\nCountry: ${country}`;
        alert(message);
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="basic-form">
                <h2>Registration Form</h2>

                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Country:</label>
                    <select name="country" value={formData.country} onChange={handleChange}>
                        <option value="">-- Select Country --</option>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="Canada">Canada</option>
                        <option value="Australia">Australia</option>
                        <option value="UK">United Kingdom</option>
                    </select>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FormHandling
