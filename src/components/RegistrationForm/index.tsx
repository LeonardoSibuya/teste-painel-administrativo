import { useState } from "react"

import * as S from './styles'

import { Container } from "../../styles"

import checkImg from '../../assets/images/check.png'
import Loading from "../Loading"

const RegistrationForm = () => {
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

    return (
        <Container>
            {isSubmited ? (
                <>
                    {isLoading ? (
                        <>
                            <S.SectionForm>
                                <Loading />
                            </S.SectionForm>
                        </>
                    ) : (
                        <>
                            <S.SectionForm>
                                <S.SubmitedContainer>
                                    <img src={checkImg} alt="check icon" />
                                    <p>
                                        Aluno cadastrado com sucesso
                                    </p>
                                    <S.ButtonForm
                                        type="button"
                                        onClick={() => setIsSubmited(false)}
                                    >
                                        Cadastrar novo aluno
                                    </S.ButtonForm>
                                </S.SubmitedContainer>
                            </ S.SectionForm>
                        </>
                    )}
                </>
            ) : (
                <>
                    <S.SectionForm>
                        <h3>
                            Cadastre aqui o novo aluno
                        </h3>
                        <S.Form onSubmit={HandleSubmit}>
                            <S.InputContainer>
                                <label htmlFor="name">
                                    Nome do aluno:
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className={inputNameIsInvalid ? 'error' : ''}
                                    onChange={
                                        (e) => {
                                            setStudentName(e.target.value);
                                            checkInputName();
                                        }
                                    }
                                />
                            </S.InputContainer>

                            <S.InputContainer>
                                <label htmlFor="email">
                                    E-mail do aluno:
                                </label>
                                <input
                                    type="email"
                                    id="name"
                                    className={inputEmailIsInvalid ? 'error' : ''}
                                    onChange={
                                        (e) => {
                                            setStudentEmail(e.target.value);
                                            checkInputEmail();
                                        }
                                    }
                                />
                            </S.InputContainer>

                            <S.SelectContainer>
                                <label htmlFor="cursos">
                                    Cursos:
                                </label>
                                <select
                                    name="cursos"
                                    id="cursos"
                                    onChange={checkOptionSelected}
                                >
                                    <option value="administracao">
                                        Administração
                                    </option>
                                    <option value="psicologia">
                                        Psicologia
                                    </option>
                                    <option value="contabilidade">
                                        Contabilidade
                                    </option>
                                    <option value="ads">
                                        Análise e desenvolvimento de sistemas
                                    </option>
                                    <option value="enfermagem">
                                        Enfermagem
                                    </option>
                                    <option
                                        value="outro"
                                    >
                                        Outro
                                    </option>
                                </select>
                            </S.SelectContainer>

                            <S.InputContainer>
                                <input
                                    type="text"
                                    placeholder="Qual outro curso?"
                                    className={otherOptionSelected ? 'visible' : 'invisible'}
                                />
                            </S.InputContainer>

                            <S.ButtonForm
                                type="submit"
                            >
                                Cadastrar
                            </S.ButtonForm>
                        </S.Form>
                    </S.SectionForm>
                </>
            )}
        </Container>
    )
}

export default RegistrationForm