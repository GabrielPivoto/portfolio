import { useState } from "react"
import emailjs from "@emailjs/browser"
import Alert from "../components/Alert"
import { Particles } from "../components/Particles"

const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [isLoading, setIsLoading] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    const [alertType, setAlertType] = useState("success")
    const [alertMessage, setAlertMessage] = useState("")

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const showAlertMessage = (type, message) => {
        setAlertType(type)
        setAlertMessage(message)
        setShowAlert(true)
        setTimeout(() => {
            setShowAlert(false)
        }, 3000)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        try {
            await emailjs.send("service_wzoiklg", "template_m6ogzit", {
                from_name: formData.name,
                to_name: "Gabriel",
                from_email: formData.email,
                to_email: "gabriel-pivoto@outlook.com",
                message: formData.message
            }, "EAG-AbdOh_0FaxALt")
            setIsLoading(false)
            setFormData({ name: "", email: "", message: "" })
            showAlertMessage("success", "Your message has been sent")
        } catch (error) {
            setIsLoading(false)
            console.log(error)
            showAlertMessage("danger", "Something went wrong!")
        }
    }

    return (
        <section className="relative flex items-center c-space section-spacing" id="contact">
            <Particles
                className="absolute inset-0 -z-50"
                quantity={100}
                ease={80}
                color={"#ffffff"}
                refresh />
            {showAlert && <Alert type={alertType} text={alertMessage} />}
            <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
                <div className="flex flex-col items-start w-full gap-5 mb-10">
                    <h2 className="text-heading">Let's talk</h2>
                    <p className="font-normal text-neutral-400">Send me an e-mail 📧</p>
                </div>
                <form className="w-full" onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label htmlFor="name" className="field-label">
                            Full name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            className="field-input fiel-input-focus"
                            placeholder="Your name"
                            autoComplete="name"
                            required
                            onChange={handleChange}
                            value={formData.name} />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="e-mail" className="field-label">
                            E-mail
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className="field-input fiel-input-focus"
                            placeholder="Your e-mail"
                            autoComplete="email"
                            required
                            onChange={handleChange}
                            value={formData.email} />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="message" className="field-label">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            type="text"
                            className="field-input fiel-input-focus"
                            rows="4"
                            placeholder="Share your thoughts..."
                            autoComplete="message"
                            required
                            onChange={handleChange}
                            value={formData.message} />
                    </div>
                    <button
                        className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
                        type="submit">
                        {!isLoading ? "Send" : "Sending..."}
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact