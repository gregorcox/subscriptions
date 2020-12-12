import React from 'react';
import { connect } from 'react-redux';

import { updateSubscription } from '../actions';
import Subscription from "./Subscription";

const SelectedSubscription = (props) => {
    const { selectedSubscription, updateSubscription } = props;

    // Cancel button clears the state of the selected subscription
    const button = <button className="cancel-button" onClick={() => { updateSubscription({}) }}>Cancel Subscription</button>;

    return (
        <>
            <h1>Your selected subscription</h1>
            <Subscription subscription={selectedSubscription} button={button} />
        </>
    );
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

export default connect(mapStateToProps, mapDispatchToProps())(SelectedSubscription);
