import React from 'react';
import {merch} from "../data"
import Merch from "../components/merch";

const GenMerch = () => {
    return (
        <div>
            <h2>General Merchandise</h2>
            <p>You want it? We got it here at the Half-Price Galaxy Merch Store!!!! We can make your wildest dreams come true.</p>
            <div className="row row-cols-1 row-cols-md-2 rwo-col-xl-3 g-4">
            {merch.map((merch) => (
                <Merch key={merch.name} merch={merch} />
            ))}
            </div>
        </div>
    );
    };

export default GenMerch;