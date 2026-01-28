import { useState } from "react";
import { useForm } from "react-hook-form";
import "./contactForm.css"
import { countryCodes } from "../data/countryCodes";
import generateUUID from "../utils/generateUUID";

type ContactOptions = "phone" | "email" | "both";

interface FormData {
    firstName: string
    lastName: string,
    email: string,
    phoneNumber: string,
    preferredContact: ContactOptions,
    message: string
}



export default function ContactForm() {

    const { 
        register, 
        handleSubmit, 
        formState: { errors, isSubmitting },
        setValue
    } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {

        // todo: this is where the data needs to be sent to the API
        console.log(data.firstName);
        console.log(data.lastName);
        console.log(data.email);
        console.log(data.phoneNumber);
        console.log(data.preferredContact);
        console.log(data.message);
    }

    // todo: could set the code based on the country they're in if we're feeling fancy
    const [countryCode, setCountryCode] = useState<string>('+44');
    const [phoneInput, setPhoneInput] = useState<string>('');

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, ''); // Remove non-digits
        setPhoneInput(value);
    
        const fullNumber = countryCode + value;
        setValue('phoneNumber', fullNumber, { shouldValidate: true });
  };

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
                <div className="phone-number-input">
                    <CountryCodeSelector
                        value={countryCode}
                        onChange={(newValue) => {
                            setCountryCode(newValue);
                            setValue("phoneNumber", newValue + phoneInput);
                        }}
                    />

                    <input
                        type="tel"  // Mobile keyboards show number pad
                        id="phone-number-input"
                        value={phoneInput}
                        onChange={handlePhoneChange}
                        className="form-input"
                    />
                    {errors.phoneNumber && <span>{errors.phoneNumber.message}</span>}
                </div>

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
                
                <div className="preferred-contact-options">
                    <p className="contact-options-label">Preferred Contact Method</p>
                    
                    <div className="contact-option">
                    <input
                        type="radio"
                        id="contact-email"
                        value="email"
                        {...register('preferredContact', {
                        required: 'Please select a contact method'
                        })}
                    />
                    <label className="contact-label" htmlFor="contact-email">Email</label>
                    </div>

                    <div className={`contact-option`}>
                    <input
                        type="radio"
                        id="contact-phone"
                        value="phone"
                        {...register('preferredContact', {
                        required: 'Please select a contact method'
                        })}
                    />
                    <label className="contact-label" htmlFor="contact-phone">Phone</label>
                    </div>

                    <div className="contact-option">
                    <input
                        type="radio"
                        id="contact-both"
                        value="both"
                        {...register('preferredContact', {
                        required: 'Please select a contact method'
                        })}
                    />
                    <label className="contact-label" htmlFor="contact-both">Both</label>
                    </div>
                
                </div>

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
    onChange: (newValue: string) => void;
}

function CountryCodeSelector({
    value,
    onChange
}: CountryCodeSelectorProps) {
    
    return(
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="country-code-select"
        >

        {countryCodes.map(({ code, country, flag }) => (
            <option key={code + `-${generateUUID()}`} value={code}>
            {code} ({country} - {flag})
            </option>
        ))}

        </select>
    )
}