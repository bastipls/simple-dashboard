import { faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Badge } from '@material-ui/core'
import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { notificationDelete } from '../../actions/notifications'
import { useOutsideAlerter } from '../../hooks/useOutSideAlerter'

export const LogsHeader = ({data}) => {
    const dispatch = useDispatch()
    const refBoxLog = useRef( null )
    const {isComponentVisible,HandleSetVisibilitiy} = useOutsideAlerter(refBoxLog)
    return (
        <div   ref={refBoxLog} className="navbar__logs-container"> 
        <Badge id="navbar__logs-icon" onClick={HandleSetVisibilitiy}  badgeContent={data.length} color="secondary">
            <FontAwesomeIcon icon={faBell} />
        </Badge>
        
        <div  className={`navbar__logs-box ${isComponentVisible ? 'navbar__show-box-logs': ''}`}>
            <h3 id="navbar__logs-box-title">Mensajes</h3>
            <div className="navbar__container-messages">
         
                {
                    !!data.length ?
                    data.map((item) => (

                        <div  key={item.id} className="navbar__message-box-logs">
                            <span  className="navbar__created-log">{item.created}</span>
                            <span onClick={() => dispatch(notificationDelete(item.id))} className="navbar__delete-message-log">x</span>
                            <p >{item.msg}</p>
                        </div>
                    ))
                    :
                    <div className="navbar__message-empty">
                        <h4>Sin mensajes</h4>
                    </div>
                }
            </div>
        </div>
    </div>
    )
}
