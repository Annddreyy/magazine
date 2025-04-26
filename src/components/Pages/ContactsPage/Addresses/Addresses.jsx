import classes from './Addresses.module.css';

const Addresses = () => {
    return (
        <address className={ classes.items }>
            <p>Местоположение наших магазинов:</p>
            <ol>
                <li>г. Пенза, ул. Московская, д. 52</li>
                <li>г. Пенза, ул. Суворова, д. 84</li>
                <li>г. Пенза, ул. Кирова, д. 8</li>
            </ol>
        </address>
    )
};

export default Addresses;