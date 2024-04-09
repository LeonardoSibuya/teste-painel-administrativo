import * as S from './styles'

import { Container } from "../../styles"

import studentImage from '../../assets/images/student.png'

const NavBar = () => {
    return (
        <S.Nav>
            <Container>
                <S.TitleContainer>
                    <img src={studentImage} alt="mulher com computador" />
                    <h1>Painel Administrativo</h1>
                </S.TitleContainer>

                <S.ListLinks>
                    <li>
                        <S.LinkItem to="/">
                            Novos alunos
                        </S.LinkItem>
                    </li>
                    <li>
                        <S.LinkItem to="/students">
                            Alunos cadastrados
                        </S.LinkItem>
                    </li>
                </S.ListLinks>
            </Container>
        </S.Nav>
    )
}

export default NavBar