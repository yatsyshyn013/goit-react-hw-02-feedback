import { NotificationMessage } from "./Notification.styled";
import PropTypes from 'prop-types';

export function Notification({message}) {
    return <NotificationMessage>{message}</NotificationMessage>
}

Notification.propTypes = {
    message: PropTypes.string.isRequired
    }