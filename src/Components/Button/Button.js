import s from './Button.module.css';

const Button = ({ onIncrement }) => (
    <div className={s.ButtonSection}>
        <button type="button" onClick={onIncrement} className={s.Button}>Load more</button>
    </div>
)

export default Button;