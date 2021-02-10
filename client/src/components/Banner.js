import React from 'react'

const Banner = ({children}) => {
    return (
        <section style={{ width: "90%", height: 250, clear: "both", paddingTop: 50, textAlign: "center", margin:" 0px auto"}}
        className="jumbotron border border-success">
        {children}
        </section>
    )
}

export default Banner
