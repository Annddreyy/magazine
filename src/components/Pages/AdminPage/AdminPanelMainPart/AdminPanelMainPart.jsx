import NewProductFormContainer from './NewProductForm/NewProductFormContainer';
import DeleteProductFormContainer from './DeleteProductForm/DeleteProductFormContainer';
import UpdateProductFormContainer from './UpdateProductForm/UpdateProductFormContainer';

export const formTextareaBaseStyle = {
    width: '300px',
    padding: '0.5em 1em',

    border: 'none',
    outline: 'none',

    backgroundColor: 'var(--medium-gray)',
}

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