import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import styled from "styled-components";
import { handleChange } from "../../store/productReducer/productActionCreators";

const ProductFilter = () => {
  type AppDispatch = ThunkDispatch<productStateType, any, AnyAction>;
  const dispatch: AppDispatch = useDispatch();
  const {
    search,
    minPrice,
    maxPrice,
    company,
    price,
    shipping,
    storeProducts,
  } = useSelector((state: AppState) => state.productReducer);
  const companies = storeProducts.map((item) => item.company);
  const uniqueCompanies = companies.reduce((acc: string[], curr: string) => {
    if (!acc.includes(curr)) acc.push(curr);
    return acc;
  }, []);

  return (
    <div className="row my-5">
      <div className="col-10 mx-auto">
        <FilterWrapper>
          <div>
            <label htmlFor="search">search products</label>
            <input
              type="text"
              name="search"
              id="search"
              onChange={(e) => dispatch(handleChange(e))}
              value={search}
              className="filter-item"
            />
          </div>
          <div>
            <label htmlFor="company">company</label>
            <select
              name="company"
              id="company"
              onChange={(e) => dispatch(handleChange(e))}
              value={company}
              className="filter-item"
            >
              <option value="all">all</option>
              {uniqueCompanies.map((company, index) => {
                return (
                  <option key={index} value={company}>
                    {company}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <label htmlFor="price">
              <p className="mb-2">
                product price : <span>$ {price}</span>
              </p>
            </label>
            <input
              type="range"
              name="price"
              id="price"
              min={minPrice}
              max={maxPrice}
              className="filter-price"
              value={price}
              onChange={(e) => dispatch(handleChange(e))}
            />
          </div>
          <div>
            <label htmlFor="shipping" className="mx-2">
              free shipping
            </label>
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              onChange={(e) => dispatch(handleChange(e))}
              checked={shipping && true}
            />
          </div>
        </FilterWrapper>
      </div>
    </div>
  );
};

const FilterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;
  label {
    font-weight: bold;
    text-transform: capitalize;
  }
  .filter-item,
  .filter-price {
    display: block;
    width: 100%;
    background: transparent;
    border-radius: 0.5rem;
    border: 2px solid var(--darkGrey);
  }
`;
export default ProductFilter;
