import React from 'react';

import { subscriptions } from "../data/subscriptions";

const Subscriptions = () => {
    const selectSubscription = (subscription) => {
        // TODO: Store this choice in state
        console.log(subscription);
    }

    const options = subscriptions.map((subscription) => {
        return (
            <div className="subscription" key={subscription.id}>
                <h3>{subscription.name}</h3>
                <p>£{subscription.price}</p>
                <p>{subscription.description}</p>
                <button onClick={() => { selectSubscription(subscription)}}>Select</button>
            </div>
        );
    });

    return (
        <div>{options}</div>
    )
}

export default Subscriptions;