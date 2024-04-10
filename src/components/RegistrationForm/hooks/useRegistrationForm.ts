import { useState } from "react"

const useRegistrationForm = () => {
    // States
    const [inputNameIsInvalid, setInputNameIsInvalid] = useState(false)
    const [inputEmailIsInvalid, setInputEmailIsInvalid] = useState(false)
    const [otherOptionSelected, setOtherOptionSelected] = useState(false)
    const [isSubmited, setIsSubmited] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [studentName, setStudentName] = useState('')
    const [studentEmail, setStudentEmail] = useState('')

    // Função para verificar o valor digitado no input name
    const checkInputName = () => {
        if (studentName.length <= 2) {
            setInputNameIsInvalid(true)
        } else {
            setInputNameIsInvalid(false)
        }
    }

    // Função para verificar o valor digitado no input email
    const checkInputEmail = () => {
        if (studentEmail.length <= 4) {
            setInputEmailIsInvalid(true)
        } else {
            setInputEmailIsInvalid(false)
        }
    }

    // Função para verificar se a opção 'outro' foi selecionado no Select de cursos.
    const checkOptionSelected = (event: React.ChangeEvent<HTMLSelectElement>) => {
        if (event.target.value === 'outro') {
            setOtherOptionSelected(true)
        } else {
            setOtherOptionSelected(false)
        }
    }

    // Função para executar o submit do formulário, simulando o registro de um novo aluno
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