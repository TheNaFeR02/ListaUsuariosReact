import './styles/ItemUser.css';
import PropTypes from 'prop-types';


const ItemUser = ({ user }) => {

    return (
        <>
            <div className="details">
                <p>
                    <strong>Nombre: </strong> {user.name}
                </p>
                <p>
                    <strong>País: </strong> {user.country}
                </p>
                <p>
                    <strong>Email: </strong> {user.email}
                </p>
            </div>
        </>
    );
}

ItemUser.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string,
        country: PropTypes.string,
        email: PropTypes.string,
    })
}



export default ItemUser;