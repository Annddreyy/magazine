import NewProductFormContainer from './NewProductForm/NewProductFormContainer';
import DeleteProductFormContainer from './DeleteProductForm/DeleteProductFormContainer';
import UpdateProductFormContainer from './UpdateProductForm/UpdateProductFormContainer';

const AdminPanelMainPart = () => {
    return (
        <section className='container'>
            <NewProductFormContainer />
            <DeleteProductFormContainer />
            <UpdateProductFormContainer />
        </section>
    )
};

export default AdminPanelMainPart;