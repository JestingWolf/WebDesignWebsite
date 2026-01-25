import { useState } from "react";
import { useForm } from "react-hook-form";
import "./contactForm.css"

interface FormData {
    firstName: string
    lastName: string,
    email: string | undefined,
    phoneNumber: string | undefined,
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
    }

    return(
        <div className="form-container">
            <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>

                <label htmlFor="first-name-input" id="name-label" className="form-label">First Name</label>
                <input 
                    id="name-input"
                    {...register('firstName', { required: true })}
                    className="form-input"
                />
                {errors.firstName && <span>{errors.firstName.message}</span>}

                <label htmlFor="last-name-input" id="name-label" className="form-label">Last Name</label>
                <input 
                    id="name-input"
                    {...register('lastName', { required: true })}
                    className="form-input"
                />

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
                <input
                    type="tel"  // Mobile keyboards show number pad
                    id="phone-input"
                    {...register('phoneNumber', {
                        // Validation rules
                        pattern: {
                        value: /^[\+]?[1]?[-.\s]?\(?[0-9]{3}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}$/,
                        message: 'Please enter a valid phone number'
                        }
                    })}
                    className="form-input"
                />
                {errors.phoneNumber && <span>{errors.phoneNumber.message}</span>}

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