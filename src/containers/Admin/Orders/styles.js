import Select from 'react-select';
import styled from 'styled-components';

export const ProductImage = styled.img`
    height: 80px;
    padding: 12px;
    border-radius: 16px;
`;

export const SelectStatus = styled(Select)`
    width: 240px;
`;

export const Filter = styled.div`
    display: flex;
    align-items: center;
    gap: clamp(8px, 4vw, 40px);
    margin: 28px 0;
    padding-bottom: 6px;
    overflow-x: auto;
    scrollbar-width: thin;
`;

export const FilterOption = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    color: ${(props) => 
        props.$isActiveStatus ? props.theme.purple : props.theme.darkGray};
    border-bottom: ${(props) => 
        props.$isActiveStatus ? `2px solid ${props.theme.purple}` : 'none'};
    font-size: clamp(12px, 2.5vw, 18px);
    line-height: 1.2;
    padding: 6px 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 0;
    flex: 0 0 auto;
`;