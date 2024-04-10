import { useState } from "react"

const useRegistrationForm = () => {
    const [inputNameIsInvalid, setInputNameIsInvalid] = useState(false)
    const [inputEmailIsInvalid, setInputEmailIsInvalid] = useState(false)
    const [otherOptionSelected, setOtherOptionSelected] = useState(false)
    const [isSubmited, setIsSubmited] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [studentName, setStudentName] = useState('')
    const [studentEmail, setStudentEmail] = useState('')

    const checkInputName = () => {
        if (studentName.length <= 2) {
            setInputNameIsInvalid(true)
        } else {
            setInputNameIsInvalid(false)
        }
    }

    const checkInputEmail = () => {
        if (studentEmail.length <= 4) {
            setInputEmailIsInvalid(true)
        } else {
            setInputEmailIsInvalid(false)
        }
    }

    const checkOptionSelected = (event: React.ChangeEvent<HTMLSelectElement>) => {
        if (event.target.value === 'outro') {
            setOtherOptionSelected(true)
        } else {
            setOtherOptionSelected(false)
        }
    }

    const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (studentName.length <= 2) {
            setIsSubmited(false)
            setInputNameIsInvalid(true)
        } else if (studentEmail.length <= 4) {
            setIsSubmited(false)
            setInputEmailIsInvalid(true)
        } else {
            setIsSubmited(true)
            setIsLoading(true)
        }

        setTimeout(() => {
            setIsLoading(false);
        }, 2000)
    }

    return {
        isSubmited,
        isLoading,
        inputNameIsInvalid,
        inputEmailIsInvalid,
        otherOptionSelected,
        setIsSubmited,
        HandleSubmit,
        setStudentName,
        checkInputName,
        setStudentEmail,
        checkInputEmail,
        checkOptionSelected,
    }
}

export default useRegistrationForm