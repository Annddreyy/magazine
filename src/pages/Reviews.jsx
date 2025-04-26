import HeaderContainer from './../components/common/Header/HeaderContainer';
import FooterContainer from './../components/common/Footer/FooterContainer';

import ReviewsContainer from './../components/Pages/ReviewsPage/Reviews/ReviewsContainer';
import NewReview from '../components/Pages/ReviewsPage/NewReview/NewReview';
import NewReviewContainer from '../components/Pages/ReviewsPage/NewReview/NewReviewContainer';

const Reviews = () => {
    return (
        <div>
            <HeaderContainer />
            <ReviewsContainer />
            <NewReviewContainer />
            <FooterContainer />
        </div>
    )
};

export default Reviews;