import './header.css';
import Logo from '../../assets/images/icon.png';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;    
    padding:10px;
    font-family: Arial, Helvetica, sans-serif;
    height:30px;
`
const ItemsSide = styled.div`
    display: flex;
    align-items:center;
`

function Header() {
  return (
      <HeaderContainer>
        <ItemsSide>
          <img src={Logo} alt='Logo Medidas Fitness' className='logo'></img>
          <div href='#' className='titulo'>MedidasFitness</div>
        </ItemsSide>
        <ItemsSide>
          <div href='#' className='linkRight'>Criar Conta</div>
          <div href='#' className='linkRight'>Entrar</div>
        </ItemsSide>
      </HeaderContainer>    
  );
}

export default Header;