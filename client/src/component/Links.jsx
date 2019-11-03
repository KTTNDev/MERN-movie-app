// ลิงค์ 

import React, {Component} from 'react'
import  { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collapse navbar-collapse',
})``
// ในส่วนของ `` จะใส่ css ไป ถ้าอันไหนเราไม่ได้เเต่อะไรก็ต้อง เปิดปิดมันไว้  


const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``


const Item = styled.div.attrs({
    className: 'collapse navbar-collapse',
})``

class Links extends Component {
    render(){
        return(
            <React.Fragment>
                <Link to="/" className="navbar-brand">
                    My first MERN Appilication
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            {/* คำสั่ง Link มาจาก React-dom เหมือน href มั้ง 
                            แล้วก็ต้อง import  { link } มาจาก react-router-dom ก่อน */}
                            <Link to="/movies/list" className="nav-link">
                             Movie
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/movies/create" className="nav-link">
                             Create Movie
                            </Link>
                      </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}


export default Links