import { StatisticsList, StatiticsItem } from "./Statistics.styled";
import PropTypes from 'prop-types';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
    
    return ( 
      
        <StatisticsList>
                <StatiticsItem>Good: {good}</StatiticsItem>
                <StatiticsItem>Neutral: {neutral}</StatiticsItem>
                <StatiticsItem>Bad: {bad}</StatiticsItem>
                <StatiticsItem>Total: {total}</StatiticsItem>
                <StatiticsItem>Postitive Feedback: {positivePercentage}%</StatiticsItem>
        </StatisticsList>

     );
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}