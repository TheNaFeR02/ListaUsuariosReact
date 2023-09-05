import './styles/Title.css';
import PropTypes from 'prop-types';

const Title = ({ text="Lista de Usuarios" }) => {
    // console.log(text);
    return <h1 className="title">{text}</h1>
}

Title.propTypes = {
    text: PropTypes.string
}

Title.defaultProps = {
    text: 'Mí Título por defecto'
}



export default Title;