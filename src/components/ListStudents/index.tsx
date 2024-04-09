import * as S from './styles'

import { Container } from '../../styles'

import lupa from '../../assets/images/lupa.png'
import { IStudents } from '../../interfaces'
import { useEffect, useState } from 'react'

const ListStudents = () => {
    const [students, setStudents] = useState<IStudents[]>([])
    const [filteredStudents, setFilteredStudents] = useState([])
    const [filteredName, setFilteredName] = useState('')

    const fetchStudents = async () => {
        try {
            const response = await fetch('https://randomuser.me/api/?results=50')
            const data = await response.json()

            setStudents(data.results)
        } catch (error) {
            alert('Erro ao listar estudantes')
            console.error('Erro ao listar estudantes:', error)
        }
    }

    useEffect(() => {
        fetchStudents()
    }, [])

    const handleFilterStudents = () => {
        const newFilteredStudents = students.filter(student => {
            const name = `${student.name.first} ${student.name.last}`

            return name.toLowerCase().includes(filteredName.toLowerCase())
        })

        setFilteredName(newFilteredStudents)
    }

    const handleClearFilter = () => {
        setFilteredName('');
        setFilteredStudents([]);
    };

    return (
        <Container>
            <S.Section>
                <h2>
                    Alunos cadastrados:
                </h2>

                <S.ListContainer>
                    <S.InputContainer>
                        <input 
                            type="text" 
                            placeholder='filtrar pelo nome'
                            onChange={(e) => setFilteredName(e.target.value)}
                            />
                        <button>
                            <img src={lupa} alt="lupa" />
                        </button>
                        <button>
                            <img src={lupa} alt="icone de X" />
                        </button>
                    </S.InputContainer>

                    <S.List>
                        {students.map((student) => (
                            <li key={student.email}>
                                <h4>{student.name.first} {student.name.last}</h4>
                                <span>{student.email}</span>
                                <span>{student.cell}</span>
                            </li>
                        ))}
                    </S.List>

                    <S.ButtonsContainer>
                        <button>Anterior</button>
                        <button>Próxima</button>
                    </S.ButtonsContainer>
                </S.ListContainer>
            </S.Section>
        </Container>
    )
}

export default ListStudents