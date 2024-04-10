import * as S from './styles'

import { Container } from '../../styles'

import lupa from '../../assets/images/lupa.png'

import Loading from '../Loading'
import useListStudents from './hooks/useListStudents'

const ListStudents = () => {

    const {
        currentPage,
        currentStudents,
        currentStudentsPagination,
        filteredName,
        isLoading,
        indexOfLastStudent,
        handleClearFilter,
        handleFilterStudents,
        handleNextPage,
        handlePrevPage,
        setFilteredName
    } = useListStudents()

    return (
        <Container>
            <S.Section>
                {isLoading ? (
                    <>
                        <Loading />
                    </>
                ) : (
                    <>
                        <h2>
                            Alunos cadastrados:
                        </h2>

                        <S.ListContainer>
                            <S.InputContainer>
                                <input
                                    type="text"
                                    placeholder='filtrar pelo nome'
                                    onChange={(e) => setFilteredName(e.target.value)}
                                    value={filteredName}
                                />
                                <button onClick={handleFilterStudents}>
                                    <img src={lupa} alt="lupa" />
                                </button>
                                <button onClick={handleClearFilter}>
                                    Limpar Filtro
                                </button>
                            </S.InputContainer>

                            <S.List>
                                {currentStudentsPagination.map((student) => (
                                    <li key={student.email}>
                                        <h4>{student.name.first} {student.name.last}</h4>
                                        <span>{student.email}</span>
                                        <span>{student.cell}</span>
                                    </li>
                                ))}
                            </S.List>

                            <S.ButtonsContainer>
                                <button onClick={handlePrevPage} disabled={currentPage === 1}>Anterior</button>
                                <button onClick={handleNextPage} disabled={indexOfLastStudent >= currentStudents.length}>Próxima</button>
                            </S.ButtonsContainer>
                        </S.ListContainer>
                    </>
                )}
            </S.Section>
        </Container>
    )
}

export default ListStudents