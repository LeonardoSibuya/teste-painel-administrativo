import { useState, useEffect } from "react"
import { IStudents } from "../../../interfaces"


const useListStudents = () => {
    const [students, setStudents] = useState<IStudents[]>([])
    const [filteredStudents, setFilteredStudents] = useState<IStudents[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [isSubmited, setIsSubmited] = useState(false)
    const [filteredName, setFilteredName] = useState('')
    const [currentPage, setCurrentPage] = useState(1);

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

        setTimeout(() => {
            setIsLoading(false);
        }, 2000)
    }, [])

    const handleFilterStudents = () => {
        const newFilteredStudents = students.filter(student => {
            const name = `${student.name.first} ${student.name.last}`

            return name.toLowerCase().includes(filteredName.toLowerCase())
        })

        setCurrentPage(1)
        setIsSubmited(true)
        setFilteredStudents(newFilteredStudents)
    }

    const handleClearFilter = () => {
        setFilteredName('');
        setIsSubmited(false)
        setFilteredStudents([]);
    };

    // Paginação
    const studentsPerPage = 10;
    const indexOfLastStudent = currentPage * studentsPerPage;

    // Definindo se array de estudantes será renderizado pelos nomes filtrados ou não 
    const currentStudents = isSubmited ? filteredStudents : students;

    const pagination = () => {
        const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;

        // Definindo o array com a paginação
        const currentStudentsToShow = currentStudents.slice(indexOfFirstStudent, indexOfLastStudent);

        return currentStudentsToShow;
    };

    const currentStudentsPagination = pagination();

    // Muda para a próxima página
    const handleNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    // Muda para a página anterior
    const handlePrevPage = () => {
        setCurrentPage(prevPage => prevPage - 1);
    };

    return {
        isLoading,
        filteredName,
        currentStudentsPagination,
        currentPage,
        indexOfLastStudent,
        currentStudents,
        setFilteredName,
        handleFilterStudents,
        handleClearFilter,
        handlePrevPage,
        handleNextPage,
    }
}

export default useListStudents