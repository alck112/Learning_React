import React from 'react';

const SearchBox = ({value, onChange}) => {
    return (
        <input
            name={"query"}
            type={"text"}
            value={value}
            onChange={ e => onChange(e.currentTarget.value)}
            className={"form-control my-3"}
            placeholder={"Search..."}
        />
    );
}

export default SearchBox;