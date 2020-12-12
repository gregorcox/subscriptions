const Subscription = ({ button, subscription }) => {
    return (
        <div className="subscription">
            <h3>{subscription.name}</h3>
            <p>£{subscription.price}</p>
            <p>{subscription.description}</p>
            {button}
        </div>
    );
}

export default Subscription;
