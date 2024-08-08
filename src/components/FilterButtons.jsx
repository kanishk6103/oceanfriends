import React, { useState } from 'react';

const FilterButtons = ({ categoryList, selectedCategory, clickHandler }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', gap: 5, padding: 3 }}>
            {categoryList.map((singleCategory, index) => {
                return (
                    <button
                        key={index}
                        style={{
                            padding: 5,
                            backgroundColor:
                                selectedCategory === singleCategory ? 'green' : 'white',
                            color: selectedCategory === singleCategory ? 'white' : 'black',
                            borderRadius: 8,
                        }}
                        onClick={() => clickHandler(singleCategory)}
                    >
                        {singleCategory}
                    </button>
                );
            })}
        </div>
    );
};

export default FilterButtons;
