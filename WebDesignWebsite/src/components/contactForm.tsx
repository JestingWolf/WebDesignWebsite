import { useState } from "react";
import { useForm } from "react-hook-form";
import "./contactForm.css"
import { countryCodes } from "../data/countryCodes";

interface FormData {
    firstName: string
    lastName: string,
    email: string,
    phoneNumber: string,
    message: string
}

export default function ContactForm() {

    const { 
        register, 
        handleSubmit, 
        formState: { errors, isSubmitting } 
    } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {

        // todo: this is where the data needs to be sent to the API
        console.log(data.firstName);
        console.log(data.lastName);
        console.log(data.email);
        console.log(data.phoneNumber);
        console.log(data.message);
    }

    const [countryCode, setCountryCode] = useState('+44');

    return(
        <div className="form-container">
            <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>

                <div className="name-row">
                    <div>
                        <label htmlFor="first-name-input" id="name-label" className="form-label">First Name</label>
                        <input 
                            id="first-name-input"
                            {...register('firstName', { required: true })}
                            className="form-input"
                        />
                        {errors.firstName && <span>{errors.firstName.message}</span>}
                    </div>
                
                    <div>
                        <label htmlFor="last-name-input" id="name-label" className="form-label">Last Name</label>
                        <input 
                            id="last-name-input"
                            {...register('lastName', { required: true })}
                            className="form-input"
                        />
                        {errors.lastName && <span>{errors.lastName.message}</span>}
                    </div>
                </div>

                <label htmlFor="email-input" id="email-label" className="form-label">Email</label>
                <input
                    type="email"
                    id="email-input"
                    {...register('email', {
                    required: 'Email is required',
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                    }
                    })}
                    className="form-input"
                />
                {errors.email && <span>{errors.email.message}</span>}


                <label htmlFor="phone-number-input" id="phone-number-label" className="form-label">Phone Number</label>
                
                <CountryCodeSelector
                    value={countryCode}
                    onChange={(newCode: string) => setCountryCode(newCode)}
                />

                <input
                    type="tel"  // Mobile keyboards show number pad
                    id="phone-input"
                    {...register('phoneNumber', {
                        // Validation rules
                        pattern: {
                        value: /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/,
                        message: 'Please enter a valid phone number'
                        }
                    })}
                    className="form-input"
                />
                {errors.phoneNumber && <span>{errors.phoneNumber.message}</span>}

                <label htmlFor="message-input" className="form-label">Message</label>
                <textarea
                id="message-input"
                {...register('message', {
                    required: 'Message is required'
                })}
                className="form-textarea"
                placeholder="Enter your message here..."
                rows={4}
                />
                {errors.message && <span>{errors.message.message}</span>}

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="submit-btn"
                >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
            </form>
        </div>
    )
}

interface CountryCodeSelectorProps {
    value: string;
    onChange: (newCode: string) => void;
}

// todo: move to a place in utils
function CountryCodeSelector({
    value,
    onChange
}: CountryCodeSelectorProps) {

    return(
        <select
        
        >
        </select>
    )
}