import Button from 'react-bootstrap/Button'
import { useState, useEffect } from 'react';
const Userx = (props) => {
    const { item } = props
    console.log("check item", item);
    const [show, setShow] = useState(true);
    return (
        <div className="card" >
            {show && item.image &&
                <img src={`data:image/png;base64,${item.image}`} className="card-img-top" />
            }

            <div className="card-body">
                <h5 className="card-title">{item.id}</h5>
                <h5 className="card-title">{item.username}</h5>
                <Button onClick={() => setShow(!show)} as="a" variant="primary">
                    Show/hide
                </Button>
            </div>
        </div >
    )
}
export default Userx; 