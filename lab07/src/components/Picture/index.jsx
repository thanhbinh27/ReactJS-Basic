import './style.css';

export default function Picture(props) {
    return (
        <img src={`./img/pic${props.value}.jpg`} alt="pictures" className={props.className} />
    );
}