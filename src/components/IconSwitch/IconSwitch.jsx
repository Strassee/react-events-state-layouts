import './IconSwitch.css';

export default function IconSwitch(props) {

    return (
        <div className="toolbar">
            <i className="material-icons" onClick={props.onSwitch}>{props.icon}</i>
        </div>
    );

}