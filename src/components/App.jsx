import Title from './Title';
import ItemUser from './ItemUser';
import UserCount from './UserCount'
import '../global.css';


const user = {
    name: 'Fernando Acuña',
    country: 'Colombia',
    email: 'fernandoacuna@uninorte.edu.co',
}

const App = () => {
    

    return (
        <>
            <Title  />
            <ItemUser user = {user}/>
            <UserCount />
        </>
    )
};

export default App;