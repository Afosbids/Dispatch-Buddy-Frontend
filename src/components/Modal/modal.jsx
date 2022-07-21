import ReactDOM from 'react-dom';

const STYLE_OVERLAY ={
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    margin: '0 auto',
    zIndex: 2,
}

const STYLE_INNER ={
    marginTop:'15%',
    dispatch:'flex',
    justifyContent:'center',
    alignItems: 'center',
    zIndex: 9999,

}


export const Modal =({isOpen, isClosed, children})=>{
    if (!isOpen) return null;
    console.log('modal')
    return (
        ReactDOM.createPortal(
        <div style={STYLE_OVERLAY} onClick={()=>isClosed()}>
            <div style={STYLE_INNER}>
                {children}
            </div>
        </div>,
            document.getElementById('portal')
        )
    )
}