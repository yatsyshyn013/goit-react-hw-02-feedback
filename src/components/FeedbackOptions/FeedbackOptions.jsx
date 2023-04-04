import { ButtonsStyled } from "./FeedbackOptions.styled";
import PropTypes from 'prop-types';

export function FeedbackOptions({ options, onLeaveFeedback }) {
    
    return ( 
        
        options.map(option => (
            <ButtonsStyled key={option} onClick={() => onLeaveFeedback(option)}>{option}</ButtonsStyled>
        ))
     );
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}