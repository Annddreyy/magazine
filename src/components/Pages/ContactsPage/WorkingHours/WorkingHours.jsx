import classes from './WorkingHours.module.css';

const WorkingHours = () => {
    return (
        <div className={ classes.items }>
            <p>Время работы:</p>
            <time dateTime="Пн-Пт: 09:00 - 21:00">Пн-Пт: 09:00 - 21:00</time>
            <time dateTime="Сб: 09:00 - 18:00">Сб: 09:00 - 18:00</time>
            <time dateTime="Вс: Выходной">Вс: Выходной</time>
        </div>
    )
};

export default WorkingHours;
