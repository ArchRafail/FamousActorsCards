import "./Card.css"

export default function Card(props) {
    return <div className="container"><img src={props.imgLink} alt={props.lastName}/><div className="description"><h2>{props.firstName} {props.lastName}</h2><h3>Age: {props.age} years.</h3></div></div>
}