import { ButtonsSection } from "./Section.styled";
import PropTypes from 'prop-types';

export function Section({title, children}) {
    return (
        <ButtonsSection>
            <div>{title}</div>
            {children}
    </ButtonsSection>
        
    )
} 

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,

}