import React, { useState, useEffect } from 'react';
// import { lightblue } from 'color-name';

const Booklist = props => {
    const [bookData, setBookData] = useState(null);
    useEffect(() => {
        const result = props.getData?.(props.language).then(response => setBookData(response));
    }, [props])
    return (
        <div>
            <ul>
                {
                    bookData === null
                    ? <p>now loading..</p>
                    : bookData.data.items.map(
                        (x, index) =>
                        <li key={index}>
                            <p>{x.volumeInfo.title}</p>
                            <p>{x.volumeInfo.authors}</p>
                            {
                                x.volumeInfo.imageLinks === undefined
                                    ? <p>画像データがありません</p>
                                    : <img src={x.volumeInfo.imageLinks.thumbnail} />    
                            }
                                {/* <img src={
                                    x.volumeInfo.imageLinks === undefined
                                    ? "public/logo192.png"  //これはたぶん間違ってる
                                    : x.volumeInfo.imageLinks.thumbnail
                                    }
                                /> */}

                        </li>
                        )
                }
            </ul>
        </div>
    );
}
export default Booklist;