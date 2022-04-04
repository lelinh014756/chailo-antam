import React, { useEffect, useState } from "react";
import ListProduct from '../../common/listProduct/listProduct';
import { useDispatch, useSelector } from "react-redux";
import { getAllProductAction } from "../../../../core/redux/actions/productActions";
const ProductContainer = (props) => {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const { productList } = useSelector((state) => state.product);
    useEffect(() => {
      dispatch(getAllProductAction());
    }, []);
    // const {
    //     products: allProduct,
    //     currentPage,
    //     pageSize , 
    //     itemsCount,
    //     onPageChange } = props;
        
    return ( 
        <div className="product-container">
            <ListProduct products={productList} />
            {/* <Pagination
                currentPage={currentPage}
                itemsCount={itemsCount}
                onPageChange={onPageChange}
                pageSize={pageSize}
            /> */}
        </div>
     );
}
 
export default ProductContainer;