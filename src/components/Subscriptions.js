import React from 'react';
import { connect } from 'react-redux';

import { subscriptions } from "../data/subscriptions";
import { updateSubscription } from '../actions';

const Subscriptions = (props) => {

    const selectSubscription = (subscription) => {
        // Update the state with the selected subscription
        props.updateSubscription(subscription);
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

const mapStateToProps = (state) => {
    return {
        selectedSubscription: state.subscriptionReducer
    }
}

const mapDispatchToProps = () => {
    return {
        updateSubscription
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(Subscriptions);
