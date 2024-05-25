import { Link } from 'react-router-dom';

export function Room() {
    return (
        <div className='room'>
            <h1>Vous êtes dans une salle de donjon</h1>
            <Link to='/next-room' className='button'>
                Avancer
            </Link>
        </div>
    );
}
