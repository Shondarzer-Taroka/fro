import React from 'react';

interface Params {
    id: string;
}

const Page: React.FC<{params:Params}> = ({ params }) => {
    console.log(params);

    return (
        <div>

        </div>
    );
};

export default Page;