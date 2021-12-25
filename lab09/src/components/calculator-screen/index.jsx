import './style.css'

export default function Screen(props) {
    return (
        <input className='screen' type="number" value={props.value} />
    );
}