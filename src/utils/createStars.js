import Star from '../components/common/Star/Star';

function createStars(grade) {
    let stars = [];
    for (let i = 0; i < 5; i++) {
        let isFill = i < grade;
        stars.push( <Star isFill={ isFill } key={ i } /> );
    }

    return stars;
}

export default createStars;