import { TopPageComponentProps } from "./TopPageComponent.props"


export const TopPageComponent = ({page, products, firstCategory}: TopPageComponentProps): JSX.Element => {
    return (
        <>
            component with products {products && products.length}
        </>
    );
};