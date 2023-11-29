import { useState, useEffect } from 'react';
import './HomeWork26.scss'
import Userx from './Userx';
import { getUserWithPaginate } from '../../../docs/project/utils/apiService';
import axios from 'axios';
const HomeWork26 = () => {
    const [listUser, setListUser] = useState([]);
    useEffect(() => {
        fecthUser();
    }, [])
    const fecthUser = async () => {
        let res = await getUserWithPaginate(1, 3);
        if (res.DT && res.EC === 0) {
            setListUser(res.DT.users)
        }
    }
    return (<div className="content-homework26">
        {listUser && listUser.length > 0 && listUser.map((item, key) => {
            return <div key={item.id}><Userx item={item} /></div>
        })
        }
    </div>)
}
export default HomeWork26