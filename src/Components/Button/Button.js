import s from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ onIncrement }) => (
    <div className={s.ButtonSection}>
        <button type="button" onClick={onIncrement} className={s.Button}>Load more</button>
    </div>
)

Button.propTypes = {
    onIncrement: PropTypes.func,
};

export default Button;