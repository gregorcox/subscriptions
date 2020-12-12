import React from 'react';
import { connect } from 'react-redux';

import { updateSubscription } from '../actions';

const SelectedSubscription = (props) => {
    return (
        <div className="subscription">
            <h3>{props.selectedSubscription.name}</h3>
            <p>£{props.selectedSubscription.price}</p>
            <p>{props.selectedSubscription.description}</p>
            <button className="cancel-button" onClick={() => { props.updateSubscription({}) }}>Cancel Subscription</button>
        </div>
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
