import React from 'react'

const Footer = (props) => {
  return (
    <footer className={`footer mt-auto py-3 bg-${props.mode}  bg-body-${props.mode} navbar-${props.mode}`} style={{ backgroundColor: props.mode === 'dark' ? '#2a2b30' : 'white', color: props.mode === 'light' ? 'black' : 'white' }}>
                <div className={`container  bg-${props.mode} text-center`}  style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                       <strong> Copyright &copy; 2024 | All Right Reserved</strong>
                </div>     
            </footer>
  )
}

export default Footer
