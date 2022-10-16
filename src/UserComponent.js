
function UserComponent (props) {
const {item:{id, name, email}} = props
    return (
        <div>
            <h1>{id} / {name} </h1>
            <h2>{email}</h2>
        </div>
    );
}

export default UserComponent;

